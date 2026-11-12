/*
 * ComboCrush demo version switcher (copied to the combocrush-web root by
 * scripts/deploy-demo.mjs; every deployed page loads it).
 *
 * A small tab parked at the right edge of the screen. It shows for a few
 * seconds after load, then tucks away to a thin sliver. Drag it left (or tap
 * it) to open a panel listing the deployed versions: the main build and any
 * branch builds. Tap one to switch. Hidden when only one version exists.
 * Self-contained: shadow DOM, no dependencies, nothing stored.
 */
(function () {
  if (window.__ccVersionSwitcher) return;
  window.__ccVersionSwitcher = true;

  var root = new URL('./', document.baseURI); // site root (branch pages carry <base href="../../">)
  fetch(new URL('versions.json', root).href, { cache: 'no-store' })
    .then(function (r) { return r.ok ? r.json() : []; })
    .then(function (versions) {
      if (!Array.isArray(versions) || versions.length < 2) return;
      build(versions);
    })
    .catch(function () {});

  function currentId(versions) {
    var path = location.pathname;
    var m = path.match(/\/branches\/([^/]+)\/?/);
    if (m) return m[1];
    return 'main';
  }

  function ago(iso) {
    var t = Date.parse(iso);
    if (!t) return '';
    var s = Math.max(0, (Date.now() - t) / 1000);
    if (s < 3600) return Math.max(1, Math.round(s / 60)) + ' min ago';
    if (s < 86400) return Math.round(s / 3600) + ' h ago';
    return Math.round(s / 86400) + ' d ago';
  }

  function build(versions) {
    var cur = currentId(versions);
    var host = document.createElement('div');
    host.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:2147483000;';
    var shadow = host.attachShadow({ mode: 'open' });
    shadow.innerHTML =
      '<style>' +
      ':host{all:initial}' +
      '.tab{position:fixed;right:0;top:38%;pointer-events:auto;touch-action:none;user-select:none;-webkit-user-select:none;' +
      'display:flex;align-items:center;gap:6px;padding:10px 10px 10px 8px;border-radius:12px 0 0 12px;' +
      'background:rgba(10,14,32,.88);border:1px solid rgba(0,240,255,.55);border-right:none;color:#e2e8f0;' +
      'font:800 11px/1.1 system-ui,-apple-system,Segoe UI,Roboto,sans-serif;letter-spacing:.4px;' +
      'box-shadow:0 4px 18px rgba(0,0,0,.5);transition:transform .35s cubic-bezier(.16,1,.3,1),opacity .35s;cursor:grab}' +
      '.tab.tucked{transform:translateX(calc(100% - 14px));opacity:.6}' +
      '.tab::before{content:"";position:absolute;top:-12px;bottom:-12px;left:-22px;right:0}' +
      '.tab .grip{width:3px;height:22px;border-radius:2px;background:linear-gradient(#00f0ff,#a855f7)}' +
      '.tab .lbl{writing-mode:vertical-rl;transform:rotate(180deg);max-height:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}' +
      '.tab.branch{border-color:rgba(251,191,36,.8)} .tab.branch .grip{background:linear-gradient(#fbbf24,#f97316)}' +
      '.panel{position:fixed;right:0;top:50%;width:min(300px,86vw);max-height:70vh;overflow:auto;pointer-events:auto;' +
      'transform:translate(105%,-50%);transition:transform .3s cubic-bezier(.16,1,.3,1);box-sizing:border-box;padding:14px 12px;' +
      'background:linear-gradient(180deg,#141b3d,#0a0e20);border:1px solid rgba(0,240,255,.5);border-right:none;border-radius:16px 0 0 16px;' +
      'box-shadow:0 10px 34px rgba(0,0,0,.7);color:#e2e8f0;font:500 13px/1.35 system-ui,-apple-system,Segoe UI,Roboto,sans-serif}' +
      '.panel.open{transform:translate(0,-50%)}' +
      '.panel h2{margin:0 0 2px;font-size:15px;font-weight:900;color:#fff} .panel p{margin:0 0 10px;font-size:11px;color:#94a3b8}' +
      'a.v{display:block;text-decoration:none;color:inherit;padding:10px;border-radius:10px;margin-bottom:6px;' +
      'background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1)}' +
      'a.v:active{transform:scale(.98)} a.v.cur{border-color:#00f0ff;background:rgba(0,240,255,.12)}' +
      'a.v b{display:block;font-size:13px;font-weight:800;color:#fff;word-break:break-word}' +
      'a.v span{font-size:11px;color:#94a3b8} a.v .pill{float:right;font-size:10px;font-weight:900;color:#00f0ff}' +
      '.scrim{position:fixed;inset:0;pointer-events:none;background:rgba(0,0,0,0);transition:background .3s}' +
      '.scrim.on{pointer-events:auto;background:rgba(0,0,0,.35)}' +
      '@media (prefers-reduced-motion:reduce){.tab,.panel,.scrim{transition:none}}' +
      '</style>' +
      '<div class="scrim"></div><div class="tab" role="button" aria-label="Switch game version"><span class="grip"></span><span class="lbl"></span></div>' +
      '<div class="panel" role="dialog" aria-label="Game versions"><h2>Game version</h2><p>Main is the normal game; branches are builds being tried out.</p><div class="list"></div></div>';
    document.body.appendChild(host);

    var tab = shadow.querySelector('.tab');
    var panel = shadow.querySelector('.panel');
    var scrim = shadow.querySelector('.scrim');
    var list = shadow.querySelector('.list');
    var curEntry = versions.filter(function (v) { return v.id === cur; })[0];
    shadow.querySelector('.lbl').textContent = cur === 'main' ? 'MAIN' : 'BRANCH: ' + (curEntry ? curEntry.label : cur);
    if (cur !== 'main') tab.classList.add('branch');

    versions.forEach(function (v) {
      var a = document.createElement('a');
      a.className = 'v' + (v.id === cur ? ' cur' : '');
      a.href = new URL(v.path, root).href;
      var b = document.createElement('b');
      b.textContent = v.id === 'main' ? 'Main (normal)' : v.label;
      var s = document.createElement('span');
      s.textContent = [v.sha, ago(v.date)].filter(Boolean).join(' · ');
      if (v.id === cur) {
        var pill = document.createElement('span');
        pill.className = 'pill';
        pill.textContent = 'PLAYING';
        a.appendChild(pill);
      }
      a.appendChild(b);
      a.appendChild(s);
      list.appendChild(a);
    });

    var tuckTimer = 0;
    function tuckLater(ms) {
      clearTimeout(tuckTimer);
      tuckTimer = setTimeout(function () { if (!panel.classList.contains('open')) tab.classList.add('tucked'); }, ms);
    }
    function open() {
      panel.classList.add('open');
      scrim.classList.add('on');
      tab.classList.add('tucked');
    }
    function close() {
      panel.classList.remove('open');
      scrim.classList.remove('on');
      tuckLater(0);
    }
    scrim.addEventListener('click', close);

    // Tap or drag left opens; the tab follows the finger while dragging.
    var start = null;
    tab.addEventListener('pointerdown', function (e) {
      start = { x: e.clientX, y: e.clientY, moved: false };
      tab.classList.remove('tucked');
      tab.style.transition = 'none';
      try { tab.setPointerCapture(e.pointerId); } catch (_) {}
      e.preventDefault();
      e.stopPropagation();
    });
    tab.addEventListener('pointermove', function (e) {
      if (!start) return;
      var dx = Math.min(0, e.clientX - start.x);
      if (Math.abs(e.clientX - start.x) > 6 || Math.abs(e.clientY - start.y) > 6) start.moved = true;
      tab.style.transform = 'translateX(' + dx + 'px)';
    });
    function end(e) {
      if (!start) return;
      var dx = e.clientX - start.x;
      var tapped = !start.moved;
      start = null;
      tab.style.transition = '';
      tab.style.transform = '';
      if (tapped || dx < -30) open();
      else tuckLater(1500);
      e.stopPropagation();
    }
    tab.addEventListener('pointerup', end);
    tab.addEventListener('pointercancel', end);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });

    tuckLater(3500);
  }
})();
