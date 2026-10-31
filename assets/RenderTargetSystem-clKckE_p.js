import{a as Ve,f as v,G as Le,w as A,c,z as Mt,M as R,T as C,e as ie,q as Y,F as Bt,B as ae,H as P,J as Oe,K as At,j as $,L as _e,N as We,O as $e,Q as je,X as Ne,d as K,C as te,D as oe,h as F,R as H,Y as Pt,P as Gt,b as be,Z as ve,E as Ut,k as re,x as It,_ as Dt,$ as Et,v as zt}from"./index-9BZAfDh2.js";import{i as Ft,f as Ht,a as ye,b as W,G as Ye,j as Ke,U as le,e as Vt,F as Lt,S as Ot,R as Q,B as Wt,C as Se}from"./CanvasPool-CD_4Md2z.js";class Te{constructor(e){typeof e=="number"?this.rawBinaryData=new ArrayBuffer(e):e instanceof Uint8Array?this.rawBinaryData=e.buffer:this.rawBinaryData=e,this.uint32View=new Uint32Array(this.rawBinaryData),this.float32View=new Float32Array(this.rawBinaryData),this.size=this.rawBinaryData.byteLength}get int8View(){return this._int8View||(this._int8View=new Int8Array(this.rawBinaryData)),this._int8View}get uint8View(){return this._uint8View||(this._uint8View=new Uint8Array(this.rawBinaryData)),this._uint8View}get int16View(){return this._int16View||(this._int16View=new Int16Array(this.rawBinaryData)),this._int16View}get int32View(){return this._int32View||(this._int32View=new Int32Array(this.rawBinaryData)),this._int32View}get float64View(){return this._float64Array||(this._float64Array=new Float64Array(this.rawBinaryData)),this._float64Array}get bigUint64View(){return this._bigUint64Array||(this._bigUint64Array=new BigUint64Array(this.rawBinaryData)),this._bigUint64Array}view(e){return this[`${e}View`]}destroy(){this.rawBinaryData=null,this.uint32View=null,this.float32View=null,this.uint16View=null,this._int8View=null,this._uint8View=null,this._int16View=null,this._int32View=null,this._float64Array=null,this._bigUint64Array=null}static sizeOf(e){switch(e){case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;default:throw new Error(`${e} isn't a valid view type`)}}}function Ce(n,e,t,r){if(t??(t=0),r??(r=Math.min(n.byteLength-t,e.byteLength)),!(t&7)&&!(r&7)){const s=r/8;new Float64Array(e,0,s).set(new Float64Array(n,t,s))}else if(!(t&3)&&!(r&3)){const s=r/4;new Float32Array(e,0,s).set(new Float32Array(n,t,s))}else new Uint8Array(e).set(new Uint8Array(n,t,r))}const $t={normal:"normal-npm",add:"add-npm",screen:"screen-npm"};var k=(n=>(n[n.DISABLED=0]="DISABLED",n[n.RENDERING_MASK_ADD=1]="RENDERING_MASK_ADD",n[n.MASK_ACTIVE=2]="MASK_ACTIVE",n[n.INVERSE_MASK_ACTIVE=3]="INVERSE_MASK_ACTIVE",n[n.RENDERING_MASK_REMOVE=4]="RENDERING_MASK_REMOVE",n[n.NONE=5]="NONE",n))(k||{});function ke(n,e){return e.alphaMode==="no-premultiply-alpha"&&$t[n]||n}const jt=["precision mediump float;","void main(void){","float test = 0.1;","%forloop%","gl_FragColor = vec4(0.0);","}"].join(`
`);function Nt(n){let e="";for(let t=0;t<n;++t)t>0&&(e+=`
else `),t<n-1&&(e+=`if(test == ${t}.0){}`);return e}function Yt(n,e){if(n===0)throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");const t=e.createShader(e.FRAGMENT_SHADER);try{for(;;){const r=jt.replace(/%forloop%/gi,Nt(n));if(e.shaderSource(t,r),e.compileShader(t),!e.getShaderParameter(t,e.COMPILE_STATUS))n=n/2|0;else break}}finally{e.deleteShader(t)}return n}let I=null;function Kt(){if(I)return I;const n=Ft();return I=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),I=Yt(I,n),n.getExtension("WEBGL_lose_context")?.loseContext(),I}class qt{constructor(){this.ids=Object.create(null),this.textures=[],this.count=0}clear(){for(let e=0;e<this.count;e++){const t=this.textures[e];this.textures[e]=null,this.ids[t.uid]=null}this.count=0}}class Qt{constructor(){this.renderPipeId="batch",this.action="startBatch",this.start=0,this.size=0,this.textures=new qt,this.blendMode="normal",this.topology="triangle-strip",this.canBundle=!0}destroy(){this.textures=null,this.gpuBindGroup=null,this.bindGroup=null,this.batcher=null,this.elements=null}}const V=[];let q=0;Le.register({clear:()=>{if(V.length>0)for(const n of V)n&&n.destroy();V.length=0,q=0}});function we(){return q>0?V[--q]:new Qt}function Re(n){n.elements=null,V[q++]=n}let E=0;const qe=class Qe{constructor(e){this.uid=Ve("batcher"),this.dirty=!0,this.batchIndex=0,this.batches=[],this._elements=[],e={...Qe.defaultOptions,...e},e.maxTextures||(v("v8.8.0","maxTextures is a required option for Batcher now, please pass it in the options"),e.maxTextures=Kt());const{maxTextures:t,attributesInitialSize:r,indicesInitialSize:s}=e;this.attributeBuffer=new Te(r*4),this.indexBuffer=new Uint16Array(s),this.maxTextures=t}begin(){this.elementSize=0,this.elementStart=0,this.indexSize=0,this.attributeSize=0;for(let e=0;e<this.batchIndex;e++)Re(this.batches[e]);this.batchIndex=0,this._batchIndexStart=0,this._batchIndexSize=0,this.dirty=!0}add(e){this._elements[this.elementSize++]=e,e._indexStart=this.indexSize,e._attributeStart=this.attributeSize,e._batcher=this,this.indexSize+=e.indexSize,this.attributeSize+=e.attributeSize*this.vertexSize}checkAndUpdateTexture(e,t){const r=e._batch.textures.ids[t._source.uid];return!r&&r!==0?!1:(e._textureId=r,e.texture=t,!0)}updateElement(e){this.dirty=!0;const t=this.attributeBuffer;e.packAsQuad?this.packQuadAttributes(e,t.float32View,t.uint32View,e._attributeStart,e._textureId):this.packAttributes(e,t.float32View,t.uint32View,e._attributeStart,e._textureId)}break(e){const t=this._elements;if(!t[this.elementStart])return;let r=we(),s=r.textures;s.clear();const i=t[this.elementStart];let a=ke(i.blendMode,i.texture._source),o=i.topology;this.attributeSize*4>this.attributeBuffer.size&&this._resizeAttributeBuffer(this.attributeSize*4),this.indexSize>this.indexBuffer.length&&this._resizeIndexBuffer(this.indexSize);const l=this.attributeBuffer.float32View,h=this.attributeBuffer.uint32View,u=this.indexBuffer;let m=this._batchIndexSize,f=this._batchIndexStart,p="startBatch",g=[];const y=this.maxTextures;for(let _=this.elementStart;_<this.elementSize;++_){const d=t[_];t[_]=null;const x=d.texture._source,b=ke(d.blendMode,x),S=a!==b||o!==d.topology;if(x._batchTick===E&&!S){d._textureId=x._textureBindLocation,m+=d.indexSize,d.packAsQuad?(this.packQuadAttributes(d,l,h,d._attributeStart,d._textureId),this.packQuadIndex(u,d._indexStart,d._attributeStart/this.vertexSize)):(this.packAttributes(d,l,h,d._attributeStart,d._textureId),this.packIndex(d,u,d._indexStart,d._attributeStart/this.vertexSize)),d._batch=r,g.push(d);continue}x._batchTick=E,(s.count>=y||S)&&(this._finishBatch(r,f,m-f,s,a,o,e,p,g),p="renderBatch",f=m,a=b,o=d.topology,r=we(),s=r.textures,s.clear(),g=[],++E),d._textureId=x._textureBindLocation=s.count,s.ids[x.uid]=s.count,s.textures[s.count++]=x,d._batch=r,g.push(d),m+=d.indexSize,d.packAsQuad?(this.packQuadAttributes(d,l,h,d._attributeStart,d._textureId),this.packQuadIndex(u,d._indexStart,d._attributeStart/this.vertexSize)):(this.packAttributes(d,l,h,d._attributeStart,d._textureId),this.packIndex(d,u,d._indexStart,d._attributeStart/this.vertexSize))}s.count>0&&(this._finishBatch(r,f,m-f,s,a,o,e,p,g),f=m,++E),this.elementStart=this.elementSize,this._batchIndexStart=f,this._batchIndexSize=m}_finishBatch(e,t,r,s,i,a,o,l,h){e.gpuBindGroup=null,e.bindGroup=null,e.action=l,e.batcher=this,e.textures=s,e.blendMode=i,e.topology=a,e.start=t,e.size=r,e.elements=h,++E,this.batches[this.batchIndex++]=e,o.add(e)}finish(e){this.break(e)}ensureAttributeBuffer(e){e*4<=this.attributeBuffer.size||this._resizeAttributeBuffer(e*4)}ensureIndexBuffer(e){e<=this.indexBuffer.length||this._resizeIndexBuffer(e)}_resizeAttributeBuffer(e){const t=Math.max(e,this.attributeBuffer.size*2),r=new Te(t);Ce(this.attributeBuffer.rawBinaryData,r.rawBinaryData),this.attributeBuffer=r}_resizeIndexBuffer(e){const t=this.indexBuffer;let r=Math.max(e,t.length*1.5);r+=r%2;const s=r>65535?new Uint32Array(r):new Uint16Array(r);if(s.BYTES_PER_ELEMENT!==t.BYTES_PER_ELEMENT)for(let i=0;i<t.length;i++)s[i]=t[i];else Ce(t.buffer,s.buffer);this.indexBuffer=s}packQuadIndex(e,t,r){e[t]=r+0,e[t+1]=r+1,e[t+2]=r+2,e[t+3]=r+0,e[t+4]=r+2,e[t+5]=r+3}packIndex(e,t,r,s){const i=e.indices,a=e.indexSize,o=e.indexOffset,l=e.attributeOffset;for(let h=0;h<a;h++)t[r++]=s+i[h+o]-l}destroy(e={}){if(this.batches!==null){for(let t=0;t<this.batchIndex;t++)Re(this.batches[t]);this.batches=null,this.geometry.destroy(!0),this.geometry=null,e.shader&&(this.shader?.destroy(),this.shader=null);for(let t=0;t<this._elements.length;t++)this._elements[t]&&(this._elements[t]._batch=null);this._elements=null,this.indexBuffer=null,this.attributeBuffer.destroy(),this.attributeBuffer=null}}};qe.defaultOptions={maxTextures:null,attributesInitialSize:4,indicesInitialSize:6};let Xt=qe;const Jt=new Float32Array(1),Zt=new Uint32Array(1);class er extends Ht{constructor(){const t=new ye({data:Jt,label:"attribute-batch-buffer",usage:W.VERTEX|W.COPY_DST,shrinkToFit:!1}),r=new ye({data:Zt,label:"index-batch-buffer",usage:W.INDEX|W.COPY_DST,shrinkToFit:!1}),s=24;super({attributes:{aPosition:{buffer:t,format:"float32x2",stride:s,offset:0},aUV:{buffer:t,format:"float32x2",stride:s,offset:8},aColor:{buffer:t,format:"unorm8x4",stride:s,offset:16},aTextureIdAndRound:{buffer:t,format:"uint16x2",stride:s,offset:20}},indexBuffer:r})}}function Me(n,e,t){if(n)for(const r in n){const s=r.toLocaleLowerCase(),i=e[s];if(i){let a=n[r];r==="header"&&(a=a.replace(/@in\s+[^;]+;\s*/g,"").replace(/@out\s+[^;]+;\s*/g,"")),t&&i.push(`//----${t}----//`),i.push(a)}else A(`${r} placement hook does not exist in shader`)}}const tr=/\{\{(.*?)\}\}/g;function Be(n){const e={};return(n.match(tr)?.map(r=>r.replace(/[{()}]/g,""))??[]).forEach(r=>{e[r]=[]}),e}function Ae(n,e){let t;const r=/@in\s+([^;]+);/g;for(;(t=r.exec(n))!==null;)e.push(t[1])}function Pe(n,e,t=!1){const r=[];Ae(e,r),n.forEach(o=>{o.header&&Ae(o.header,r)});const s=r;t&&s.sort();const i=s.map((o,l)=>`       @location(${l}) ${o},`).join(`
`);let a=e.replace(/@in\s+[^;]+;\s*/g,"");return a=a.replace("{{in}}",`
${i}
`),a}function Ge(n,e){let t;const r=/@out\s+([^;]+);/g;for(;(t=r.exec(n))!==null;)e.push(t[1])}function rr(n){const t=/\b(\w+)\s*:/g.exec(n);return t?t[1]:""}function sr(n){const e=/@.*?\s+/g;return n.replace(e,"")}function nr(n,e){const t=[];Ge(e,t),n.forEach(l=>{l.header&&Ge(l.header,t)});let r=0;const s=t.sort().map(l=>l.indexOf("builtin")>-1?l:`@location(${r++}) ${l}`).join(`,
`),i=t.sort().map(l=>`       var ${sr(l)};`).join(`
`),a=`return VSOutput(
            ${t.sort().map(l=>` ${rr(l)}`).join(`,
`)});`;let o=e.replace(/@out\s+[^;]+;\s*/g,"");return o=o.replace("{{struct}}",`
${s}
`),o=o.replace("{{start}}",`
${i}
`),o=o.replace("{{return}}",`
${a}
`),o}function Ue(n,e){let t=n;for(const r in e){const s=e[r];s.join(`
`).length?t=t.replace(`{{${r}}}`,`//-----${r} START-----//
${s.join(`
`)}
//----${r} FINISH----//`):t=t.replace(`{{${r}}}`,"")}return t}const w=Object.create(null),X=new Map;let ir=0;function ar({template:n,bits:e}){const t=Xe(n,e);if(w[t])return w[t];const{vertex:r,fragment:s}=lr(n,e);return w[t]=Je(r,s,e),w[t]}function or({template:n,bits:e}){const t=Xe(n,e);return w[t]||(w[t]=Je(n.vertex,n.fragment,e)),w[t]}function lr(n,e){const t=e.map(a=>a.vertex).filter(a=>!!a),r=e.map(a=>a.fragment).filter(a=>!!a);let s=Pe(t,n.vertex,!0);s=nr(t,s);const i=Pe(r,n.fragment,!0);return{vertex:s,fragment:i}}function Xe(n,e){return e.map(t=>(X.has(t)||X.set(t,ir++),X.get(t))).sort((t,r)=>t-r).join("-")+n.vertex+n.fragment}function Je(n,e,t){const r=Be(n),s=Be(e);return t.forEach(i=>{Me(i.vertex,r,i.name),Me(i.fragment,s,i.name)}),{vertex:Ue(n,r),fragment:Ue(e,s)}}const ur=`
    @in aPosition: vec2<f32>;
    @in aUV: vec2<f32>;

    @out @builtin(position) vPosition: vec4<f32>;
    @out vUV : vec2<f32>;
    @out vColor : vec4<f32>;

    {{header}}

    struct VSOutput {
        {{struct}}
    };

    @vertex
    fn main( {{in}} ) -> VSOutput {

        var worldTransformMatrix = globalUniforms.uWorldTransformMatrix;
        var modelMatrix = mat3x3<f32>(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        var position = aPosition;
        var uv = aUV;

        {{start}}

        vColor = vec4<f32>(1., 1., 1., 1.);

        {{main}}

        vUV = uv;

        var modelViewProjectionMatrix = globalUniforms.uProjectionMatrix * worldTransformMatrix * modelMatrix;

        vPosition =  vec4<f32>((modelViewProjectionMatrix *  vec3<f32>(position, 1.0)).xy, 0.0, 1.0);

        vColor *= globalUniforms.uWorldColorAlpha;

        {{end}}

        {{return}}
    };
`,cr=`
    @in vUV : vec2<f32>;
    @in vColor : vec4<f32>;

    {{header}}

    @fragment
    fn main(
        {{in}}
      ) -> @location(0) vec4<f32> {

        {{start}}

        var outColor:vec4<f32>;

        {{main}}

        var finalColor:vec4<f32> = outColor * vColor;

        {{end}}

        return finalColor;
      };
`,hr=`
    in vec2 aPosition;
    in vec2 aUV;

    out vec4 vColor;
    out vec2 vUV;

    {{header}}

    void main(void){

        mat3 worldTransformMatrix = uWorldTransformMatrix;
        mat3 modelMatrix = mat3(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        vec2 position = aPosition;
        vec2 uv = aUV;

        {{start}}

        vColor = vec4(1.);

        {{main}}

        vUV = uv;

        mat3 modelViewProjectionMatrix = uProjectionMatrix * worldTransformMatrix * modelMatrix;

        gl_Position = vec4((modelViewProjectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);

        vColor *= uWorldColorAlpha;

        {{end}}
    }
`,dr=`

    in vec4 vColor;
    in vec2 vUV;

    out vec4 finalColor;

    {{header}}

    void main(void) {

        {{start}}

        vec4 outColor;

        {{main}}

        finalColor = outColor * vColor;

        {{end}}
    }
`,fr={name:"global-uniforms-bit",vertex:{header:`
        struct GlobalUniforms {
            uProjectionMatrix:mat3x3<f32>,
            uWorldTransformMatrix:mat3x3<f32>,
            uWorldColorAlpha: vec4<f32>,
            uResolution: vec2<f32>,
        }

        @group(0) @binding(0) var<uniform> globalUniforms : GlobalUniforms;
        `}},pr={name:"global-uniforms-bit",vertex:{header:`
          uniform mat3 uProjectionMatrix;
          uniform mat3 uWorldTransformMatrix;
          uniform vec4 uWorldColorAlpha;
          uniform vec2 uResolution;
        `}};function mr({bits:n,name:e}){const t=ar({template:{fragment:cr,vertex:ur},bits:[fr,...n]});return Ke.from({name:e,vertex:{source:t.vertex,entryPoint:"main"},fragment:{source:t.fragment,entryPoint:"main"}})}function gr({bits:n,name:e}){return new Ye({name:e,...or({template:{vertex:hr,fragment:dr},bits:[pr,...n]})})}const xr={name:"color-bit",vertex:{header:`
            @in aColor: vec4<f32>;
        `,main:`
            vColor *= vec4<f32>(aColor.rgb * aColor.a, aColor.a);
        `}},_r={name:"color-bit",vertex:{header:`
            in vec4 aColor;
        `,main:`
            vColor *= vec4(aColor.rgb * aColor.a, aColor.a);
        `}},J={};function br(n){const e=[];if(n===1)e.push("@group(1) @binding(0) var textureSource1: texture_2d<f32>;"),e.push("@group(1) @binding(1) var textureSampler1: sampler;");else{let t=0;for(let r=0;r<n;r++)e.push(`@group(1) @binding(${t++}) var textureSource${r+1}: texture_2d<f32>;`),e.push(`@group(1) @binding(${t++}) var textureSampler${r+1}: sampler;`)}return e.join(`
`)}function vr(n){const e=[];if(n===1)e.push("outColor = textureSampleGrad(textureSource1, textureSampler1, vUV, uvDx, uvDy);");else{e.push("switch vTextureId {");for(let t=0;t<n;t++)t===n-1?e.push("  default:{"):e.push(`  case ${t}:{`),e.push(`      outColor = textureSampleGrad(textureSource${t+1}, textureSampler${t+1}, vUV, uvDx, uvDy);`),e.push("      break;}");e.push("}")}return e.join(`
`)}function yr(n){return J[n]||(J[n]={name:"texture-batch-bit",vertex:{header:`
                @in aTextureIdAndRound: vec2<u32>;
                @out @interpolate(flat) vTextureId : u32;
            `,main:`
                vTextureId = aTextureIdAndRound.y;
            `,end:`
                if(aTextureIdAndRound.x == 1)
                {
                    vPosition = vec4<f32>(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
                }
            `},fragment:{header:`
                @in @interpolate(flat) vTextureId: u32;

                ${br(n)}
            `,main:`
                var uvDx = dpdx(vUV);
                var uvDy = dpdy(vUV);

                ${vr(n)}
            `}}),J[n]}const Z={};function Sr(n){const e=[];for(let t=0;t<n;t++)t>0&&e.push("else"),t<n-1&&e.push(`if(vTextureId < ${t}.5)`),e.push("{"),e.push(`	outColor = texture(uTextures[${t}], vUV);`),e.push("}");return e.join(`
`)}function Tr(n){return Z[n]||(Z[n]={name:"texture-batch-bit",vertex:{header:`
                in vec2 aTextureIdAndRound;
                out float vTextureId;

            `,main:`
                vTextureId = aTextureIdAndRound.y;
            `,end:`
                if(aTextureIdAndRound.x == 1.)
                {
                    gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
                }
            `},fragment:{header:`
                in float vTextureId;

                uniform sampler2D uTextures[${n}];

            `,main:`

                ${Sr(n)}
            `}}),Z[n]}const Cr={name:"round-pixels-bit",vertex:{header:`
            fn roundPixels(position: vec2<f32>, targetSize: vec2<f32>) -> vec2<f32>
            {
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `}},kr={name:"round-pixels-bit",vertex:{header:`
            vec2 roundPixels(vec2 position, vec2 targetSize)
            {
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `}},Ie={};function wr(n){let e=Ie[n];if(e)return e;const t=new Int32Array(n);for(let r=0;r<n;r++)t[r]=r;return e=Ie[n]=new le({uTextures:{value:t,type:"i32",size:n}},{isStatic:!0}),e}class De extends Vt{constructor(e){const t=gr({name:"batch",bits:[_r,Tr(e),kr]}),r=mr({name:"batch",bits:[xr,yr(e),Cr]});super({glProgram:t,gpuProgram:r,resources:{batchSamplers:wr(e)}}),this.maxTextures=e}}let z=null;const Ze=class et extends Xt{constructor(e){super(e),this.geometry=new er,this.name=et.extension.name,this.vertexSize=6,z??(z=new De(e.maxTextures)),this.shader=z}packAttributes(e,t,r,s,i){const a=i<<16|e.roundPixels&65535,o=e.transform,l=o.a,h=o.b,u=o.c,m=o.d,f=o.tx,p=o.ty,{positions:g,uvs:y}=e,_=e.color,d=e.attributeOffset,T=d+e.attributeSize;for(let x=d;x<T;x++){const b=x*2,S=g[b],O=g[b+1];t[s++]=l*S+u*O+f,t[s++]=m*O+h*S+p,t[s++]=y[b],t[s++]=y[b+1],r[s++]=_,r[s++]=a}}packQuadAttributes(e,t,r,s,i){const a=e.texture,o=e.transform,l=o.a,h=o.b,u=o.c,m=o.d,f=o.tx,p=o.ty,g=e.bounds,y=g.maxX,_=g.minX,d=g.maxY,T=g.minY,x=a.uvs,b=e.color,S=i<<16|e.roundPixels&65535;t[s+0]=l*_+u*T+f,t[s+1]=m*T+h*_+p,t[s+2]=x.x0,t[s+3]=x.y0,r[s+4]=b,r[s+5]=S,t[s+6]=l*y+u*T+f,t[s+7]=m*T+h*y+p,t[s+8]=x.x1,t[s+9]=x.y1,r[s+10]=b,r[s+11]=S,t[s+12]=l*y+u*d+f,t[s+13]=m*d+h*y+p,t[s+14]=x.x2,t[s+15]=x.y2,r[s+16]=b,r[s+17]=S,t[s+18]=l*_+u*d+f,t[s+19]=m*d+h*_+p,t[s+20]=x.x3,t[s+21]=x.y3,r[s+22]=b,r[s+23]=S}_updateMaxTextures(e){this.shader.maxTextures!==e&&(z=new De(e),this.shader=z)}destroy(){this.shader=null,super.destroy()}};Ze.extension={type:[c.Batcher],name:"default"};let tt=Ze;class es{constructor(e){this.items=Object.create(null);const{renderer:t,type:r,onUnload:s,priority:i,name:a}=e;this._renderer=t,t.gc.addResourceHash(this,"items",r,i??0),this._onUnload=s,this.name=a}add(e){return this.items[e.uid]?!1:(this.items[e.uid]=e,e.once("unload",this.remove,this),e._gcLastUsed=this._renderer.gc.now,!0)}remove(e,...t){if(!this.items[e.uid])return;const r=e._gpuData[this._renderer.uid];r&&(this._onUnload?.(e,...t),e.off("unload",this.remove,this),r.destroy(),e._gpuData[this._renderer.uid]=null,this.items[e.uid]=null)}removeAll(...e){Object.values(this.items).forEach(t=>t&&this.remove(t,...e))}destroy(...e){this.removeAll(...e),this.items=Object.create(null),this._renderer=null,this._onUnload=null}}var Rr=`in vec2 vMaskCoord;
in vec2 vTextureCoord;

uniform sampler2D uTexture;
uniform sampler2D uMaskTexture;

uniform float uAlpha;
uniform vec4 uMaskClamp;
uniform float uInverse;
uniform float uChannel;

out vec4 finalColor;

void main(void)
{
    float clip = step(3.5,
        step(uMaskClamp.x, vMaskCoord.x) +
        step(uMaskClamp.y, vMaskCoord.y) +
        step(vMaskCoord.x, uMaskClamp.z) +
        step(vMaskCoord.y, uMaskClamp.w));

    // TODO look into why this is needed
    float npmAlpha = uAlpha;
    vec4 original = texture(uTexture, vTextureCoord);
    vec4 masky = texture(uMaskTexture, vMaskCoord);

    float a;
    if (uChannel == 1.0) {
        a = masky.a * npmAlpha * clip;
    } else {
        float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);
        a = alphaMul * masky.r * npmAlpha * clip;
    }

    if (uInverse == 1.0) {
        a = 1.0 - a;
    }

    finalColor = original * a;
}
`,Mr=`in vec2 aPosition;

out vec2 vTextureCoord;
out vec2 vMaskCoord;


uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;
uniform mat3 uFilterMatrix;

vec4 filterVertexPosition(  vec2 aPosition )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
       
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord(  vec2 aPosition )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

vec2 getFilterCoord( vec2 aPosition )
{
    return  ( uFilterMatrix * vec3( filterTextureCoord(aPosition), 1.0)  ).xy;
}   

void main(void)
{
    gl_Position = filterVertexPosition(aPosition);
    vTextureCoord = filterTextureCoord(aPosition);
    vMaskCoord = getFilterCoord(aPosition);
}
`,Ee=`struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct MaskUniforms {
  uFilterMatrix:mat3x3<f32>,
  uMaskClamp:vec4<f32>,
  uAlpha:f32,
  uInverse:f32,
  uChannel:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> filterUniforms : MaskUniforms;
@group(1) @binding(1) var uMaskTexture: texture_2d<f32>;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>,
    @location(1) filterUv : vec2<f32>,
};

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);
}

fn getFilterCoord(aPosition:vec2<f32> ) -> vec2<f32>
{
  return ( filterUniforms.uFilterMatrix * vec3( filterTextureCoord(aPosition), 1.0)  ).xy;
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}

@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>,
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition),
   getFilterCoord(aPosition)
  );
}

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @location(1) filterUv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {

    var maskClamp = filterUniforms.uMaskClamp;
    var uAlpha = filterUniforms.uAlpha;

    var clip = step(3.5,
      step(maskClamp.x, filterUv.x) +
      step(maskClamp.y, filterUv.y) +
      step(filterUv.x, maskClamp.z) +
      step(filterUv.y, maskClamp.w));

    var mask = textureSample(uMaskTexture, uSampler, filterUv);
    var source = textureSample(uTexture, uSampler, uv);

    var a: f32;
    if (filterUniforms.uChannel == 1.0) {
        a = mask.a * uAlpha * clip;
    } else {
        var alphaMul = 1.0 - uAlpha * (1.0 - mask.a);
        a = alphaMul * mask.r * uAlpha * clip;
    }

    if (filterUniforms.uInverse == 1.0) {
        a = 1.0 - a;
    }

    return source * a;
}
`;class Br extends Lt{constructor(e){const{sprite:t,...r}=e,s=new Mt(t.texture),i=new le({uFilterMatrix:{value:new R,type:"mat3x3<f32>"},uMaskClamp:{value:s.uClampFrame,type:"vec4<f32>"},uAlpha:{value:1,type:"f32"},uInverse:{value:e.inverse?1:0,type:"f32"},uChannel:{value:e.channel==="alpha"?1:0,type:"f32"}}),a=Ke.from({vertex:{source:Ee,entryPoint:"mainVertex"},fragment:{source:Ee,entryPoint:"mainFragment"}}),o=Ye.from({vertex:Mr,fragment:Rr,name:"mask-filter"});super({...r,gpuProgram:a,glProgram:o,clipToViewport:!1,resources:{filterUniforms:i,uMaskTexture:t.texture.source}}),this.sprite=t,this._textureMatrix=s}setSprite(e){this.sprite=e;const t=this._getSafeTexture();this._textureMatrix.texture=t,this.resources.uMaskTexture=t.source}set inverse(e){this.resources.filterUniforms.uniforms.uInverse=e?1:0}get inverse(){return this.resources.filterUniforms.uniforms.uInverse===1}set channel(e){this.resources.filterUniforms.uniforms.uChannel=e==="alpha"?1:0}get channel(){return this.resources.filterUniforms.uniforms.uChannel===1?"alpha":"red"}apply(e,t,r,s){const i=this._getSafeTexture();this._textureMatrix.texture=i,e.calculateSpriteMatrix(this.resources.filterUniforms.uniforms.uFilterMatrix,this.sprite).prepend(this._textureMatrix.mapCoord),this.resources.uMaskTexture=i.source,e.applyFilter(this,t,r,s)}_getSafeTexture(){const e=this.sprite.texture;return e.destroyed||!e.source||e.source.destroyed?(A("[MaskFilter] The mask texture was destroyed while the mask is still in use. Remove the mask before destroying its texture."),C.EMPTY):e}destroy(e=!1){this._textureMatrix.destroy(),super.destroy(e)}}function Ar(n,e,t){const r=(n>>24&255)/255;e[t++]=(n&255)/255*r,e[t++]=(n>>8&255)/255*r,e[t++]=(n>>16&255)/255*r,e[t++]=r}class rt{constructor(){this.batcherName="default",this.topology="triangle-list",this.attributeSize=4,this.indexSize=6,this.packAsQuad=!0,this.roundPixels=0,this._attributeStart=0,this._batcher=null,this._batch=null}get blendMode(){return this.renderable.groupBlendMode}get color(){return this.renderable.groupColorAlpha}reset(){this.renderable=null,this.texture=null,this._batcher=null,this._batch=null,this.bounds=null}destroy(){this.reset()}}const ue=class st{constructor(e,t){this.state=Ot.for2d(),this._batchersByInstructionSet=Object.create(null),this._activeBatches=Object.create(null),this.renderer=e,this._adaptor=t,this._adaptor.init?.(this)}static getBatcher(e,t){return new this._availableBatchers[e]({maxTextures:t})}buildStart(e){let t=this._batchersByInstructionSet[e.uid];t||(t=this._batchersByInstructionSet[e.uid]=Object.create(null),t.default||(t.default=new tt({maxTextures:this.renderer.limits.maxBatchableTextures}))),this._activeBatches=t,this._activeBatch=this._activeBatches.default;for(const r in this._activeBatches)this._activeBatches[r].begin()}addToBatch(e,t){if(this._activeBatch.name!==e.batcherName){this._activeBatch.break(t);let r=this._activeBatches[e.batcherName];r||(r=this._activeBatches[e.batcherName]=st.getBatcher(e.batcherName,this.renderer.limits.maxBatchableTextures),r.begin()),this._activeBatch=r}this._activeBatch.add(e)}break(e){this._activeBatch.break(e)}buildEnd(e){this._activeBatch.break(e);const t=this._activeBatches;for(const r in t){const s=t[r],i=s.geometry;i.indexBuffer.setDataWithSize(s.indexBuffer,s.indexSize,!0),i.buffers[0].setDataWithSize(s.attributeBuffer.float32View,s.attributeSize,!1)}}upload(e){const t=this._batchersByInstructionSet[e.uid];for(const r in t){const s=t[r],i=s.geometry;s.dirty&&(s.dirty=!1,i.buffers[0].update(s.attributeSize*4))}}execute(e){if(e.action==="startBatch"){const t=e.batcher,r=t.geometry,s=t.shader;this._adaptor.start(this,r,s)}this._adaptor.execute(this,e)}destroyInstructionSet(e){const t=this._batchersByInstructionSet[e.uid];if(t){for(const r in t)t[r].destroy();delete this._batchersByInstructionSet[e.uid],this._activeBatches===t&&(this._activeBatches=Object.create(null),this._activeBatch=null)}}destroy(){this.state=null,this.renderer=null,this._adaptor=null;for(const e in this._activeBatches)this._activeBatches[e].destroy();this._activeBatches=null}};ue.extension={type:[c.WebGLPipes,c.WebGPUPipes,c.CanvasPipes],name:"batch"};ue._availableBatchers=Object.create(null);let nt=ue;ie.handleByMap(c.Batcher,nt._availableBatchers);ie.add(tt);const Pr=new ae;class Gr extends Oe{constructor(){super(),this._placeholderSprite=new At(C.EMPTY),this.filters=[new Br({sprite:this._placeholderSprite,inverse:!1,resolution:"inherit",antialias:"inherit"})]}get sprite(){return this.filters[0].sprite}set sprite(e){this.filters[0].setSprite(e)}get inverse(){return this.filters[0].inverse}set inverse(e){this.filters[0].inverse=e}get channel(){return this.filters[0].channel}set channel(e){this.filters[0].channel=e}reset(){this._placeholderSprite.texture=C.EMPTY,this.sprite=this._placeholderSprite}}class it{constructor(e){this._activeMaskStage=[],this._usedEffects=[],this._renderer=e,e.runners.postrender.add(this)}push(e,t,r){const s=this._renderer;if(s.renderPipes.batch.break(r),r.add({renderPipeId:"alphaMask",action:"pushMaskBegin",mask:e,inverse:t._maskOptions.inverse,canBundle:!1,maskedContainer:t}),e.inverse=t._maskOptions.inverse,e.channel=t._maskOptions.channel??"red",e.renderMaskToTexture){const i=e.mask;i.includeInBuild=!0,i.collectRenderables(r,s,null),i.includeInBuild=!1}s.renderPipes.batch.break(r),r.add({renderPipeId:"alphaMask",action:"pushMaskEnd",mask:e,maskedContainer:t,inverse:t._maskOptions.inverse,canBundle:!1})}pop(e,t,r){this._renderer.renderPipes.batch.break(r),r.add({renderPipeId:"alphaMask",action:"popMaskEnd",mask:e,inverse:t._maskOptions.inverse,canBundle:!1})}execute(e){const t=this._renderer,r=e.mask.renderMaskToTexture;if(e.action==="pushMaskBegin"){const s=Y.get(Gr);if(s.inverse=e.inverse,s.channel=e.mask.channel,r){e.mask.mask.measurable=!0;const i=Bt(e.mask.mask,!0,Pr);e.mask.mask.measurable=!1,i.ceil();const a=t.renderTarget.renderTarget.colorTexture.source,o=P.getOptimalTexture({width:i.width,height:i.height,resolution:a._resolution,antialias:a.antialias});t.renderTarget.push({target:o,clear:!0}),t.globalUniforms.push({offset:i,worldColor:4294967295});const l=s.sprite;l.texture=o,l.worldTransform.tx=i.minX,l.worldTransform.ty=i.minY,this._activeMaskStage.push({filterEffect:s,maskedContainer:e.maskedContainer,filterTexture:o})}else s.sprite=e.mask.mask,this._activeMaskStage.push({filterEffect:s,maskedContainer:e.maskedContainer})}else if(e.action==="pushMaskEnd"){const s=this._activeMaskStage[this._activeMaskStage.length-1];r&&(t.type===Q.WEBGL&&t.renderTarget.finishRenderPass(),t.renderTarget.pop(),t.globalUniforms.pop()),t.filter.push({renderPipeId:"filter",action:"pushFilter",container:s.maskedContainer,filterEffect:s.filterEffect,canBundle:!1})}else if(e.action==="popMaskEnd"){t.filter.pop();const s=this._activeMaskStage.pop();r&&P.returnTexture(s.filterTexture),this._usedEffects.push(s.filterEffect)}}postrender(){const e=this._usedEffects;for(let t=0;t<e.length;t++)Y.return(e[t]);e.length=0}destroy(){this.postrender(),this._renderer.runners.postrender.remove(this),this._renderer=null,this._activeMaskStage=null,this._usedEffects=null}}it.extension={type:[c.WebGLPipes,c.WebGPUPipes,c.CanvasPipes],name:"alphaMask"};class at{constructor(e){this._colorStack=[],this._colorStackIndex=0,this._currentColor=0,this._renderer=e}buildStart(){this._colorStack[0]=15,this._colorStackIndex=1,this._currentColor=15}push(e,t,r){this._renderer.renderPipes.batch.break(r);const i=this._colorStack;i[this._colorStackIndex]=i[this._colorStackIndex-1]&e.mask;const a=this._colorStack[this._colorStackIndex];a!==this._currentColor&&(this._currentColor=a,r.add({renderPipeId:"colorMask",colorMask:a,canBundle:!1})),this._colorStackIndex++}pop(e,t,r){this._renderer.renderPipes.batch.break(r);const i=this._colorStack;this._colorStackIndex--;const a=i[this._colorStackIndex-1];a!==this._currentColor&&(this._currentColor=a,r.add({renderPipeId:"colorMask",colorMask:a,canBundle:!1}))}execute(e){this._renderer.colorMask.setMask(e.colorMask)}destroy(){this._renderer=null,this._colorStack=null}}at.extension={type:[c.WebGLPipes,c.WebGPUPipes],name:"colorMask"};class ot{constructor(e){this._maskHash=new WeakMap,this._renderer=e}push(e,t,r){const s=e,i=this._renderer;i.renderPipes.batch.break(r),i.renderPipes.blendMode.setBlendMode(s.mask,"none",r),r.add({renderPipeId:"stencilMask",action:"pushMaskBegin",mask:e,inverse:t._maskOptions.inverse,canBundle:!1});const a=s.mask;a.includeInBuild=!0,this._maskHash.has(s)||this._maskHash.set(s,{instructionsStart:0,instructionsLength:0});const o=this._maskHash.get(s);o.instructionsStart=r.instructionSize,a.collectRenderables(r,i,null),a.includeInBuild=!1,i.renderPipes.batch.break(r),r.add({renderPipeId:"stencilMask",action:"pushMaskEnd",mask:e,inverse:t._maskOptions.inverse,canBundle:!1});const l=r.instructionSize-o.instructionsStart-1;o.instructionsLength=l}pop(e,t,r){const s=e,i=this._renderer;i.renderPipes.batch.break(r),i.renderPipes.blendMode.setBlendMode(s.mask,"none",r),r.add({renderPipeId:"stencilMask",action:"popMaskBegin",inverse:t._maskOptions.inverse,canBundle:!1});const a=this._maskHash.get(e);for(let o=0;o<a.instructionsLength;o++)r.instructions[r.instructionSize++]=r.instructions[a.instructionsStart++];r.add({renderPipeId:"stencilMask",action:"popMaskEnd",canBundle:!1})}execute(e){const r=this._renderer,s=r.renderTarget.getGpuRenderTarget(r.renderTarget.renderTarget);let i=s.maskStackIndex;e.action==="pushMaskBegin"?(r.renderTarget.ensureDepthStencil(),r.stencil.setStencilMode(k.RENDERING_MASK_ADD,i),i++,r.colorMask.setMask(0)):e.action==="pushMaskEnd"?(e.inverse?r.stencil.setStencilMode(k.INVERSE_MASK_ACTIVE,i):r.stencil.setStencilMode(k.MASK_ACTIVE,i),r.colorMask.setMask(15)):e.action==="popMaskBegin"?(r.colorMask.setMask(0),i!==0?r.stencil.setStencilMode(k.RENDERING_MASK_REMOVE,i):(r.renderTarget.clear(null,$.STENCIL),r.stencil.setStencilMode(k.DISABLED,i)),i--):e.action==="popMaskEnd"&&(e.inverse?r.stencil.setStencilMode(k.INVERSE_MASK_ACTIVE,i):r.stencil.setStencilMode(k.MASK_ACTIVE,i),r.colorMask.setMask(15)),s.maskStackIndex=i}destroy(){this._renderer=null,this._maskHash=null}}ot.extension={type:[c.WebGLPipes,c.WebGPUPipes],name:"stencilMask"};class lt{constructor(e){this._renderer=e}updateRenderable(){}destroyRenderable(){}validateRenderable(){return!1}addRenderable(e,t){this._renderer.renderPipes.batch.break(t),t.add(e)}execute(e){e.isRenderable&&e.render(this._renderer)}destroy(){this._renderer=null}}lt.extension={type:[c.WebGLPipes,c.WebGPUPipes,c.CanvasPipes],name:"customRender"};function se(n,e){const t=n.instructionSet,r=t.instructions;for(let s=0;s<t.instructionSize;s++){const i=r[s];e[i.renderPipeId].execute(i)}}class ut{constructor(e){this._renderer=e}addRenderGroup(e,t){e.isCachedAsTexture?this._addRenderableCacheAsTexture(e,t):this._addRenderableDirect(e,t)}execute(e){e.isRenderable&&(e.isCachedAsTexture?this._executeCacheAsTexture(e):this._executeDirect(e))}destroy(){this._renderer=null}_addRenderableDirect(e,t){this._renderer.renderPipes.batch.break(t),e._batchableRenderGroup&&(Y.return(e._batchableRenderGroup),e._batchableRenderGroup=null),t.add(e)}_addRenderableCacheAsTexture(e,t){const r=e._batchableRenderGroup??(e._batchableRenderGroup=Y.get(rt));r.renderable=e.root,r.transform=e.root.relativeGroupTransform,r.texture=e.texture,r.bounds=e._textureBounds,t.add(e),this._renderer.renderPipes.blendMode.pushBlendMode(e,e.root.groupBlendMode,t),this._renderer.renderPipes.batch.addToBatch(r,t),this._renderer.renderPipes.blendMode.popBlendMode(t)}_executeCacheAsTexture(e){if(e.textureNeedsUpdate){e.textureNeedsUpdate=!1;const t=new R().translate(-e._textureBounds.x,-e._textureBounds.y);this._renderer.renderTarget.push({target:e.texture,clear:!0,frame:e.texture.frame}),this._renderer.globalUniforms.push({worldTransformMatrix:t,worldColor:4294967295,offset:{x:0,y:0}}),se(e,this._renderer.renderPipes),this._renderer.renderTarget.finishRenderPass(),this._renderer.renderTarget.pop(),this._renderer.globalUniforms.pop()}e._batchableRenderGroup._batcher.updateElement(e._batchableRenderGroup),e._batchableRenderGroup._batcher.geometry.buffers[0].update()}_executeDirect(e){this._renderer.globalUniforms.push({worldTransformMatrix:e.inverseParentTextureTransform,worldColor:e.worldColorAlpha}),se(e,this._renderer.renderPipes),this._renderer.globalUniforms.pop()}}ut.extension={type:[c.WebGLPipes,c.WebGPUPipes,c.CanvasPipes],name:"renderGroup"};class ct{constructor(e){this._renderer=e}addRenderable(e,t){const r=this._getGpuSprite(e);e.didViewUpdate&&this._updateBatchableSprite(e,r),this._renderer.renderPipes.batch.addToBatch(r,t)}updateRenderable(e){const t=this._getGpuSprite(e);e.didViewUpdate&&this._updateBatchableSprite(e,t),t._batcher.updateElement(t)}validateRenderable(e){const t=this._getGpuSprite(e);return!t._batcher.checkAndUpdateTexture(t,e._texture)}_updateBatchableSprite(e,t){t.bounds=e.visualBounds,t.texture=e._texture}_getGpuSprite(e){return e._gpuData[this._renderer.uid]||this._initGPUSprite(e)}_initGPUSprite(e){const t=new rt;return t.renderable=e,t.transform=e.groupTransform,t.texture=e._texture,t.bounds=e.visualBounds,t.roundPixels=this._renderer._roundPixels|e._roundPixels,e._gpuData[this._renderer.uid]=t,t}destroy(){this._renderer=null}}ct.extension={type:[c.WebGLPipes,c.WebGPUPipes,c.CanvasPipes],name:"sprite"};const L={};ie.handle(c.BlendMode,n=>{if(!n.name)throw new Error("BlendMode extension must have a name property");L[n.name]=n.ref},n=>{delete L[n.name]});class ht{constructor(e){this._blendModeStack=[],this._isAdvanced=!1,this._filterHash=Object.create(null),this._renderer=e,this._renderer.runners.prerender.add(this)}prerender(){this._activeBlendMode="normal",this._isAdvanced=!1}pushBlendMode(e,t,r){this._blendModeStack.push(t),this.setBlendMode(e,t,r)}popBlendMode(e){this._blendModeStack.pop();const t=this._blendModeStack[this._activeBlendMode.length-1]??"normal";this.setBlendMode(null,t,e)}setBlendMode(e,t,r){const s=e instanceof _e;if(this._activeBlendMode===t){this._isAdvanced&&e&&!s&&this._renderableList?.push(e);return}this._isAdvanced&&this._endAdvancedBlendMode(r),this._activeBlendMode=t,e&&(this._isAdvanced=!!L[t],this._isAdvanced&&this._beginAdvancedBlendMode(e,r))}_beginAdvancedBlendMode(e,t){this._renderer.renderPipes.batch.break(t);const r=this._activeBlendMode;if(!L[r]){A(`Unable to assign BlendMode: '${r}'. You may want to include: import 'pixi.js/advanced-blend-modes'`);return}const s=this._ensureFilterEffect(r),i=e instanceof _e,a={renderPipeId:"filter",action:"pushFilter",filterEffect:s,renderables:i?null:[e],container:i?e.root:null,canBundle:!1};this._renderableList=a.renderables,t.add(a)}_ensureFilterEffect(e){let t=this._filterHash[e];return t||(t=this._filterHash[e]=new Oe,t.filters=[new L[e]]),t}_endAdvancedBlendMode(e){this._isAdvanced=!1,this._renderableList=null,this._renderer.renderPipes.batch.break(e),e.add({renderPipeId:"filter",action:"popFilter",canBundle:!1})}buildStart(){this._isAdvanced=!1}buildEnd(e){this._isAdvanced&&this._endAdvancedBlendMode(e)}destroy(){this._renderer=null,this._renderableList=null;for(const e in this._filterHash)this._filterHash[e].destroy();this._filterHash=null}}ht.extension={type:[c.WebGLPipes,c.WebGPUPipes,c.CanvasPipes],name:"blendMode"};function ne(n,e){e||(e=0);for(let t=e;t<n.length&&n[t];t++)n[t]=null}const Ur=new K,ze=$e|je|Ne;function dt(n,e=!1){Ir(n);const t=n.childrenToUpdate,r=n.updateTick++;for(const s in t){const i=Number(s),a=t[s],o=a.list,l=a.index;for(let h=0;h<l;h++){const u=o[h];u.parentRenderGroup===n&&u.relativeRenderGroupDepth===i&&ft(u,r,0)}ne(o,l),a.index=0}if(e)for(let s=0;s<n.renderGroupChildren.length;s++)dt(n.renderGroupChildren[s],e)}function Ir(n){const e=n.root;let t;if(n.renderGroupParent){const r=n.renderGroupParent;n.worldTransform.appendFrom(e.relativeGroupTransform,r.worldTransform),n.worldColor=We(e.groupColor,r.worldColor),t=e.groupAlpha*r.worldAlpha}else n.worldTransform.copyFrom(e.localTransform),n.worldColor=e.localColor,t=e.localAlpha;t=t<0?0:t>1?1:t,n.worldAlpha=t,n.worldColorAlpha=n.worldColor+((t*255|0)<<24)}function ft(n,e,t){if(e===n.updateTick)return;n.updateTick=e,n.didChange=!1;const r=n.localTransform;n.updateLocalTransform();const s=n.parent;if(s&&!s.renderGroup?(t|=n._updateFlags,n.relativeGroupTransform.appendFrom(r,s.relativeGroupTransform),t&ze&&Fe(n,s,t)):(t=n._updateFlags,n.relativeGroupTransform.copyFrom(r),t&ze&&Fe(n,Ur,t)),!n.renderGroup){const i=n.children,a=i.length;for(let h=0;h<a;h++)ft(i[h],e,t);const o=n.parentRenderGroup,l=n;l.renderPipeId&&!o.structureDidChange&&o.updateRenderable(l)}}function Fe(n,e,t){if(t&je){n.groupColor=We(n.localColor,e.groupColor);let r=n.localAlpha*e.groupAlpha;r=r<0?0:r>1?1:r,n.groupAlpha=r,n.groupColorAlpha=n.groupColor+((r*255|0)<<24)}t&Ne&&(n.groupBlendMode=n.localBlendMode==="inherit"?e.groupBlendMode:n.localBlendMode),t&$e&&(n.globalDisplayStatus=n.localDisplayStatus&e.globalDisplayStatus),n._updateFlags=0}function Dr(n,e){const{list:t}=n.childrenRenderablesToUpdate;let r=!1;for(let s=0;s<n.childrenRenderablesToUpdate.index;s++){const i=t[s];if(r=e[i.renderPipeId].validateRenderable(i),r)break}return n.structureDidChange=r,r}const Er=new R;class pt{constructor(e){this._renderer=e}render({container:e,transform:t}){const r=e.parent,s=e.renderGroup.renderGroupParent;e.parent=null,e.renderGroup.renderGroupParent=null;const i=this._renderer,a=Er;t&&(a.copyFrom(e.renderGroup.localTransform),e.renderGroup.localTransform.copyFrom(t));const o=i.renderPipes;this._updateCachedRenderGroups(e.renderGroup,null),this._updateRenderGroups(e.renderGroup),i.globalUniforms.start({worldTransformMatrix:t?e.renderGroup.localTransform:e.renderGroup.worldTransform,worldColor:e.renderGroup.worldColorAlpha}),se(e.renderGroup,o),o.uniformBatch&&o.uniformBatch.renderEnd(),t&&e.renderGroup.localTransform.copyFrom(a),e.parent=r,e.renderGroup.renderGroupParent=s}destroy(){this._renderer=null}_updateCachedRenderGroups(e,t){if(e._parentCacheAsTextureRenderGroup=t,e.isCachedAsTexture){if(!e.textureNeedsUpdate)return;t=e}for(let r=e.renderGroupChildren.length-1;r>=0;r--)this._updateCachedRenderGroups(e.renderGroupChildren[r],t);if(e.invalidateMatrices(),e.isCachedAsTexture){if(e.textureNeedsUpdate){const r=e.root.getLocalBounds(),s=this._renderer,i=e.textureOptions.resolution||s.view.resolution,a=e.textureOptions.antialias??s.view.antialias,o=e.textureOptions.scaleMode??"linear",l=e.texture;r.ceil(),e.texture&&P.returnTexture(e.texture);const h=P.getOptimalTexture({width:r.width,height:r.height,resolution:i,antialias:a,scaleMode:o});e.texture=h,e._textureBounds||(e._textureBounds=new ae),e._textureBounds.copyFrom(r),l!==e.texture&&e.renderGroupParent&&(e.renderGroupParent.structureDidChange=!0)}}else e.texture&&(P.returnTexture(e.texture),e.texture=null)}_updateRenderGroups(e){const t=this._renderer,r=t.renderPipes;if(e.runOnRender(t),e.instructionSet.renderPipes=r,e.structureDidChange?ne(e.childrenRenderablesToUpdate.list,0):Dr(e,r),dt(e),e.structureDidChange?(e.structureDidChange=!1,this._buildInstructions(e,t)):this._updateRenderables(e),e.childrenRenderablesToUpdate.index=0,t.renderPipes.batch.upload(e.instructionSet),!(e.isCachedAsTexture&&!e.textureNeedsUpdate))for(let s=0;s<e.renderGroupChildren.length;s++)this._updateRenderGroups(e.renderGroupChildren[s])}_updateRenderables(e){const{list:t,index:r}=e.childrenRenderablesToUpdate;for(let s=0;s<r;s++){const i=t[s];i.didViewUpdate&&e.updateRenderable(i)}ne(t,r)}_buildInstructions(e,t){const r=e.root,s=e.instructionSet;s.reset();const i=t.renderPipes?t:t.batch.renderer,a=i.renderPipes;a.batch.buildStart(s),a.blendMode.buildStart(),a.colorMask.buildStart(),r.sortableChildren&&r.sortChildren(),r.collectRenderablesWithEffects(s,i,null),a.batch.buildEnd(s),a.blendMode.buildEnd(s)}}pt.extension={type:[c.WebGLSystem,c.WebGPUSystem,c.CanvasSystem],name:"renderGroup"};const ce=class mt{constructor(){this.clearBeforeRender=!0,this._backgroundColor=new te(0),this.color=this._backgroundColor,this.alpha=1}init(e){e={...mt.defaultOptions,...e},this.clearBeforeRender=e.clearBeforeRender,this.color=e.background||e.backgroundColor||this._backgroundColor,this.alpha=e.backgroundAlpha,this._backgroundColor.setAlpha(e.backgroundAlpha)}get color(){return this._backgroundColor}set color(e){te.shared.setValue(e).alpha<1&&this._backgroundColor.alpha===1&&A("Cannot set a transparent background on an opaque canvas. To enable transparency, set backgroundAlpha < 1 when initializing your Application."),this._backgroundColor.setValue(e)}get alpha(){return this._backgroundColor.alpha}set alpha(e){this._backgroundColor.setAlpha(e)}get colorRgba(){return this._backgroundColor.toArray()}destroy(){}};ce.extension={type:[c.WebGLSystem,c.WebGPUSystem,c.CanvasSystem],name:"background",priority:0};ce.defaultOptions={backgroundAlpha:1,backgroundColor:0,clearBeforeRender:!0};let zr=ce;const ee={png:"image/png",jpg:"image/jpeg",webp:"image/webp"},he=class gt{constructor(e){this._renderer=e}_normalizeOptions(e,t={}){return e instanceof K||e instanceof C?{target:e,...t}:{...t,...e}}async image(e){const t=oe.get().createImage();return t.src=await this.base64(e),t}async base64(e){e=this._normalizeOptions(e,gt.defaultImageOptions);const{format:t,quality:r}=e,s=this.canvas(e);if(s.toBlob!==void 0)return new Promise((i,a)=>{s.toBlob(o=>{if(!o){a(new Error("ICanvas.toBlob failed!"));return}const l=new FileReader;l.onload=()=>i(l.result),l.onerror=a,l.readAsDataURL(o)},ee[t],r)});if(s.toDataURL!==void 0)return s.toDataURL(ee[t],r);if(s.convertToBlob!==void 0){const i=await s.convertToBlob({type:ee[t],quality:r});return new Promise((a,o)=>{const l=new FileReader;l.onload=()=>a(l.result),l.onerror=o,l.readAsDataURL(i)})}throw new Error("Extract.base64() requires ICanvas.toDataURL, ICanvas.toBlob, or ICanvas.convertToBlob to be implemented")}canvas(e){e=this._normalizeOptions(e);const t=e.target,r=this._renderer;if(t instanceof C)return r.texture.generateCanvas(t);const s=r.textureGenerator.generateTexture(e),i=r.texture.generateCanvas(s);return s.destroy(!0),i}pixels(e){e=this._normalizeOptions(e);const t=e.target,r=this._renderer,s=t instanceof C?t:r.textureGenerator.generateTexture(e),i=r.texture.getPixels(s);return t instanceof K&&s.destroy(!0),i}texture(e){return e=this._normalizeOptions(e),e.target instanceof C?e.target:this._renderer.textureGenerator.generateTexture(e)}download(e){e=this._normalizeOptions(e);const t=this.canvas(e),r=document.createElement("a");r.download=e.filename??"image.png",r.href=t.toDataURL("image/png"),document.body.appendChild(r),r.click(),document.body.removeChild(r)}log(e){const t=e.width??200;e=this._normalizeOptions(e);const r=this.canvas(e),s=r.toDataURL();console.log(`[Pixi Texture] ${r.width}px ${r.height}px`);const i=["font-size: 1px;",`padding: ${t}px 300px;`,`background: url(${s}) no-repeat;`,"background-size: contain;"].join(" ");console.log("%c ",i)}destroy(){this._renderer=null}};he.extension={type:[c.WebGLSystem,c.WebGPUSystem,c.CanvasSystem],name:"extract"};he.defaultImageOptions={format:"png",quality:1};let Fr=he;class de extends C{static create(e){const{dynamic:t,textureOptions:r,...s}=e;return new de({...r,source:new F(s),dynamic:t??!1})}resize(e,t,r){return this.source.resize(e,t,r),this}}const Hr=new H,Vr=new ae,Lr=[0,0,0,0];class xt{constructor(e){this._renderer=e}generateTexture(e){e instanceof K&&(e={target:e,frame:void 0,textureSourceOptions:{},resolution:void 0});const t=e.resolution||this._renderer.resolution,r=e.antialias||this._renderer.view.antialias,s=e.target;let i=e.clearColor;i?i=Array.isArray(i)&&i.length===4?i:te.shared.setValue(i).toArray():i=Lr;const a=e.frame?.copyTo(Hr)||Pt(s,Vr).rectangle,o=e.defaultAnchor&&{defaultAnchor:e.defaultAnchor};a.width=Math.max(a.width,1/t)|0,a.height=Math.max(a.height,1/t)|0;const l=de.create({...e.textureSourceOptions,width:a.width,height:a.height,resolution:t,antialias:r,textureOptions:o}),h=R.shared.translate(-a.x,-a.y);return this._renderer.render({container:s,transform:h,target:l,clearColor:i}),l.source.updateMipmaps(),l}destroy(){this._renderer=null}}xt.extension={type:[c.WebGLSystem,c.WebGPUSystem,c.CanvasSystem],name:"textureGenerator"};function Or(n){let e=!1;for(const r in n)if(n[r]==null){e=!0;break}if(!e)return n;const t=Object.create(null);for(const r in n){const s=n[r];s&&(t[r]=s)}return t}function Wr(n){let e=0;for(let t=0;t<n.length;t++)n[t]==null?e++:n[t-e]=n[t];return n.length-=e,n}const fe=class _t{constructor(e){this._managedResources=[],this._managedResourceHashes=[],this._managedCollections=[],this._ready=!1,this._running=!1,this._renderer=e}init(e){e={..._t.defaultOptions,...e},this.maxUnusedTime=e.gcMaxUnusedTime,this._frequency=e.gcFrequency,this.enabled=e.gcActive,this.now=performance.now()}get enabled(){return!!this._handler}set enabled(e){this.enabled!==e&&(e?(this._handler=this._renderer.scheduler.repeat(()=>{this._ready=!0},this._frequency,!1),this._collectionsHandler=this._renderer.scheduler.repeat(()=>{for(const t of this._managedCollections){const{context:r,collection:s,type:i}=t;i==="hash"?r[s]=Or(r[s]):r[s]=Wr(r[s])}},this._frequency)):(this._renderer.scheduler.cancel(this._handler),this._renderer.scheduler.cancel(this._collectionsHandler),this._handler=0,this._collectionsHandler=0))}prerender({container:e}){this.now=performance.now(),e.renderGroup.gcTick=this._renderer.tick++,this._updateInstructionGCTick(e.renderGroup,e.renderGroup.gcTick)}postrender(){!this._ready||!this.enabled||(this.run(),this._ready=!1)}_updateInstructionGCTick(e,t){e.instructionSet.gcTick=t,e.gcTick=t;for(const r of e.renderGroupChildren)this._updateInstructionGCTick(r,t)}addCollection(e,t,r){this._managedCollections.push({context:e,collection:t,type:r})}addResource(e,t){if(e._gcLastUsed!==-1){e._gcLastUsed=this.now,e._onTouch?.(this.now);return}const r=this._managedResources.length;e._gcData={index:r,type:t},e._gcLastUsed=this.now,e._onTouch?.(this.now),e.once("unload",this.removeResource,this),this._managedResources.push(e)}removeResource(e){const t=e._gcData;if(!t)return;const r=t.index,s=this._managedResources.length-1;if(this._running)this._managedResources[r]=null;else{if(r!==s){const i=this._managedResources[s];this._managedResources[r]=i,i._gcData.index=r}this._managedResources.length--}e._gcData=null,e._gcLastUsed=-1}addResourceHash(e,t,r,s=0){this._managedResourceHashes.push({context:e,hash:t,type:r,priority:s}),this._managedResourceHashes.sort((i,a)=>i.priority-a.priority)}run(){if(this._running)return;const e=performance.now(),t=this._managedResourceHashes,r=this._managedResources;this._running=!0;try{for(const i of t)this.runOnHash(i,e);const s=r.length;for(let i=0;i<s;i++){const a=r[i];a&&this.runOnResource(a,e)}}finally{let s=0;for(let i=0;i<r.length;i++){const a=r[i];a&&(s!==i&&(r[s]=a,a._gcData.index=s),s++)}r.length=s,this._running=!1}}updateRenderableGCTick(e,t){const r=e.renderGroup??e.parentRenderGroup,s=r?.instructionSet?.gcTick??-1;(r?.gcTick??0)===s&&(e._gcLastUsed=t,e._onTouch?.(t))}runOnResource(e,t){e._gcData.type==="renderable"&&this.updateRenderableGCTick(e,t),!(t-e._gcLastUsed<this.maxUnusedTime||!e.autoGarbageCollect)&&(e.off("unload",this.removeResource,this),e.unload(),this.removeResource(e))}_createHashClone(e,t){const r=Object.create(null);for(const s in e){if(s===t)break;e[s]!==null&&(r[s]=e[s])}return r}runOnHash(e,t){const{context:r,hash:s,type:i}=e,a=r[s];let o=null,l=0;for(const h in a){const u=a[h];if(u===null){l++,l===1e4&&!o&&(o=this._createHashClone(a,h));continue}if(u._gcLastUsed===-1){u._gcLastUsed=t,u._onTouch?.(t),o&&(o[h]=u);continue}if(i==="renderable"&&this.updateRenderableGCTick(u,t),!(t-u._gcLastUsed<this.maxUnusedTime)&&u.autoGarbageCollect){if(i==="renderable"){const f=u,p=f.renderGroup??f.parentRenderGroup;p&&(p.structureDidChange=!0)}u.unload(),u._gcData=null,u._gcLastUsed=-1,o||(l+1!==1e4?(a[h]=null,l++):o=this._createHashClone(a,h))}else o&&(o[h]=u)}o&&(r[s]=o)}destroy(){this.enabled=!1,this._managedResources.forEach(e=>{e?.off("unload",this.removeResource,this)}),this._managedResources.length=0,this._managedResourceHashes.length=0,this._managedCollections.length=0,this._renderer=null}};fe.extension={type:[c.WebGLSystem,c.WebGPUSystem,c.CanvasSystem],name:"gc",priority:0};fe.defaultOptions={gcActive:!0,gcMaxUnusedTime:6e4,gcFrequency:3e4};let $r=fe;class bt{constructor(e){this._stackIndex=0,this._globalUniformDataStack=[],this._uniformsPool=[],this._activeUniforms=[],this._bindGroupPool=[],this._activeBindGroups=[],this._renderer=e}reset(){this._stackIndex=0;for(let e=0;e<this._activeUniforms.length;e++)this._uniformsPool.push(this._activeUniforms[e]);for(let e=0;e<this._activeBindGroups.length;e++)this._bindGroupPool.push(this._activeBindGroups[e]);this._activeUniforms.length=0,this._activeBindGroups.length=0}start(e){this.reset(),this.push(e)}bind({size:e,projectionMatrix:t,worldTransformMatrix:r,worldColor:s,offset:i}){const a=this._renderer.renderTarget.renderTarget,o=this._stackIndex?this._globalUniformDataStack[this._stackIndex-1]:{worldTransformMatrix:new R,worldColor:4294967295,offset:new Gt},l={projectionMatrix:t||this._renderer.renderTarget.projectionMatrix,resolution:e||a.size,worldTransformMatrix:r||o.worldTransformMatrix,worldColor:s||o.worldColor,offset:i||o.offset,bindGroup:null},h=this._uniformsPool.pop()||this._createUniforms();this._activeUniforms.push(h);const u=h.uniforms;u.uProjectionMatrix=l.projectionMatrix,u.uResolution=l.resolution,u.uWorldTransformMatrix.copyFrom(l.worldTransformMatrix),u.uWorldTransformMatrix.tx-=l.offset.x,u.uWorldTransformMatrix.ty-=l.offset.y,Ar(l.worldColor,u.uWorldColorAlpha,0),h.update();let m;this._renderer.renderPipes.uniformBatch?m=this._renderer.renderPipes.uniformBatch.getUniformBindGroup(h,!1):(m=this._bindGroupPool.pop()||new Wt,this._activeBindGroups.push(m),m.setResource(h,0)),l.bindGroup=m,this._currentGlobalUniformData=l}push(e){this.bind(e),this._globalUniformDataStack[this._stackIndex++]=this._currentGlobalUniformData}pop(){this._currentGlobalUniformData=this._globalUniformDataStack[--this._stackIndex-1],this._renderer.type===Q.WEBGL&&this._currentGlobalUniformData.bindGroup.resources[0].update()}get bindGroup(){return this._currentGlobalUniformData.bindGroup}get globalUniformData(){return this._currentGlobalUniformData}get uniformGroup(){return this._currentGlobalUniformData.bindGroup.resources[0]}_createUniforms(){return new le({uProjectionMatrix:{value:new R,type:"mat3x3<f32>"},uWorldTransformMatrix:{value:new R,type:"mat3x3<f32>"},uWorldColorAlpha:{value:new Float32Array(4),type:"vec4<f32>"},uResolution:{value:[0,0],type:"vec2<f32>"}},{isStatic:!0})}destroy(){this._renderer=null,this._globalUniformDataStack.length=0,this._uniformsPool.length=0,this._activeUniforms.length=0,this._bindGroupPool.length=0,this._activeBindGroups.length=0,this._currentGlobalUniformData=null}}bt.extension={type:[c.WebGLSystem,c.WebGPUSystem,c.CanvasSystem],name:"globalUniforms"};let jr=1;class vt{constructor(){this._tasks=[],this._offset=0}init(){be.system.add(this._update,this)}repeat(e,t,r=!0){const s=jr++;let i=0;return r&&(this._offset+=1e3,i=this._offset),this._tasks.push({func:e,duration:t,start:performance.now(),offset:i,last:performance.now(),repeat:!0,id:s}),s}cancel(e){for(let t=0;t<this._tasks.length;t++)if(this._tasks[t].id===e){this._tasks.splice(t,1);return}}_update(){const e=performance.now();for(let t=0;t<this._tasks.length;t++){const r=this._tasks[t];if(e-r.offset-r.last>=r.duration){const s=e-r.start;r.func(s),r.last=e}}}destroy(){be.system.remove(this._update,this),this._tasks.length=0}}vt.extension={type:[c.WebGLSystem,c.WebGPUSystem,c.CanvasSystem],name:"scheduler",priority:0};let He=!1;function Nr(n){if(!He){if(oe.get().getNavigator().userAgent.toLowerCase().indexOf("chrome")>-1){const e=[`%c  %c  %c  %c  %c PixiJS %c v${ve} (${n}) http://www.pixijs.com/

`,"background: #E72264; padding:5px 0;","background: #6CA2EA; padding:5px 0;","background: #B5D33D; padding:5px 0;","background: #FED23F; padding:5px 0;","color: #FFFFFF; background: #E72264; padding:5px 0;","color: #E72264; background: #FFFFFF; padding:5px 0;"];globalThis.console.log(...e)}else globalThis.console&&globalThis.console.log(`PixiJS ${ve} - ${n} - http://www.pixijs.com/`);He=!0}}class pe{constructor(e){this._renderer=e}init(e){if(e.hello){let t=this._renderer.name;this._renderer.type===Q.WEBGL&&(t+=` ${this._renderer.context.webGLVersion}`),Nr(t)}}}pe.extension={type:[c.WebGLSystem,c.WebGPUSystem,c.CanvasSystem],name:"hello",priority:-2};pe.defaultOptions={hello:!1};const me=class yt{constructor(e){this._renderer=e}init(e){e={...yt.defaultOptions,...e},this.maxUnusedTime=e.renderableGCMaxUnusedTime}get enabled(){return v("8.15.0","RenderableGCSystem.enabled is deprecated, please use the GCSystem.enabled instead."),this._renderer.gc.enabled}set enabled(e){v("8.15.0","RenderableGCSystem.enabled is deprecated, please use the GCSystem.enabled instead."),this._renderer.gc.enabled=e}addManagedHash(e,t){v("8.15.0","RenderableGCSystem.addManagedHash is deprecated, please use the GCSystem.addCollection instead."),this._renderer.gc.addCollection(e,t,"hash")}addManagedArray(e,t){v("8.15.0","RenderableGCSystem.addManagedArray is deprecated, please use the GCSystem.addCollection instead."),this._renderer.gc.addCollection(e,t,"array")}addRenderable(e){v("8.15.0","RenderableGCSystem.addRenderable is deprecated, please use the GCSystem instead."),this._renderer.gc.addResource(e,"renderable")}run(){v("8.15.0","RenderableGCSystem.run is deprecated, please use the GCSystem instead."),this._renderer.gc.run()}destroy(){this._renderer=null}};me.extension={type:[c.WebGLSystem,c.WebGPUSystem,c.CanvasSystem],name:"renderableGC",priority:0};me.defaultOptions={renderableGCActive:!0,renderableGCMaxUnusedTime:6e4,renderableGCFrequency:3e4};let Yr=me;const ge=class j{get count(){return this._renderer.tick}get checkCount(){return this._checkCount}set checkCount(e){v("8.15.0","TextureGCSystem.run is deprecated, please use the GCSystem instead."),this._checkCount=e}get maxIdle(){return this._renderer.gc.maxUnusedTime/1e3*60}set maxIdle(e){v("8.15.0","TextureGCSystem.run is deprecated, please use the GCSystem instead."),this._renderer.gc.maxUnusedTime=e/60*1e3}get checkCountMax(){return Math.floor(this._renderer.gc._frequency/1e3)}set checkCountMax(e){v("8.15.0","TextureGCSystem.run is deprecated, please use the GCSystem instead.")}get active(){return this._renderer.gc.enabled}set active(e){v("8.15.0","TextureGCSystem.run is deprecated, please use the GCSystem instead."),this._renderer.gc.enabled=e}constructor(e){this._renderer=e,this._checkCount=0}init(e){e.textureGCActive!==j.defaultOptions.textureGCActive&&(this.active=e.textureGCActive),e.textureGCMaxIdle!==j.defaultOptions.textureGCMaxIdle&&(this.maxIdle=e.textureGCMaxIdle),e.textureGCCheckCountMax!==j.defaultOptions.textureGCCheckCountMax&&(this.checkCountMax=e.textureGCCheckCountMax)}run(){v("8.15.0","TextureGCSystem.run is deprecated, please use the GCSystem instead."),this._renderer.gc.run()}destroy(){this._renderer=null}};ge.extension={type:[c.WebGLSystem,c.WebGPUSystem],name:"textureGC"};ge.defaultOptions={textureGCActive:!0,textureGCAMaxIdle:null,textureGCMaxIdle:3600,textureGCCheckCountMax:600};let Kr=ge;const St=class Tt extends Ut{constructor(e={}){super(),this.uid=Ve("renderTarget"),this.colorAttachments=[],this.dirtyId=0,this.isRoot=!1,this._size=new Float32Array(2),this._managedColorTextures=!1,this._depth=!1,this._stencil=!1,this._colorTextures=null;const t="colorAttachments"in e?e:this._normalizeOptions(e);if(this.isRoot=t.isRoot??!1,this.label=t.label,this.colorAttachments=t.colorAttachments,this.depthStencilAttachment=t.depthStencilAttachment,this.depthStencilAttachment){const r=this.depthStencilAttachment.texture.format;this._depth||(this._depth=r.includes("depth")),this._stencil||(this._stencil=r.includes("stencil"))}if(this.colorAttachments.length===0&&!this.depthStencilAttachment)throw new Error("[RenderTarget] no color textures or depth textures were provided. Provide a depthStencilTexture or set depth/stencil to true when using colorTextures: 0.");if(this.colorAttachments.length>0){const r=this.colorTexture;this.resize(r.width,r.height,r._resolution)}this.sizeSource&&this.sizeSource.on("resize",this.onSourceResize,this)}_normalizeOptions(e){const t={...Tt.defaultOptions,...e},r=[];let s;if(typeof t.colorTextures=="number"){if(t.colorTextures>0){this._managedColorTextures=!0;for(let a=0;a<t.colorTextures;a++)r.push({texture:new F({width:t.width,height:t.height,resolution:t.resolution,antialias:t.antialias}),loadOp:"clear",storeOp:"store"})}}else t.colorTextures.forEach(a=>{r.push({texture:a.source,loadOp:"clear",storeOp:"store"})});const i=t.depthStencilTexture===!0;if(this._depth=!!(t.depth||i),this._stencil=!!(t.stencil||i),t.depthStencilTexture instanceof C||t.depthStencilTexture instanceof F){if(t.isRoot)throw new Error("[RenderTarget] cannot attach a depth-stencil texture to the screen — the canvas owns its own depth/stencil buffers. Render to a texture target instead.");s={texture:t.depthStencilTexture.source}}else(i&&!t.isRoot||(t.stencil||t.depth)&&r.length===0)&&(s=this._createDepthStencilTexture(t.width,t.height,t.resolution));return{colorAttachments:r,depthStencilAttachment:s,isRoot:t.isRoot,label:t.label}}get size(){const e=this._size;return e[0]=this.pixelWidth,e[1]=this.pixelHeight,e}get width(){return this.sizeSource.width}get height(){return this.sizeSource.height}get pixelWidth(){return this.sizeSource.pixelWidth}get pixelHeight(){return this.sizeSource.pixelHeight}get resolution(){return this.sizeSource._resolution}get colorTextures(){return this._colorTextures||(this._colorTextures=this.colorAttachments.map(e=>e.texture)),this._colorTextures}get depthStencilTexture(){return this.depthStencilAttachment?.texture??null}get depth(){return this._depth}get stencil(){return this._stencil}get colorTexture(){return this.colorAttachments[0]?.texture}get sizeSource(){return this.colorAttachments[0]?.texture??this.depthStencilAttachment?.texture}onSourceResize(e){this.resize(e.width,e.height,e._resolution,!0)}ensureDepthStencilTexture(){this._createDepthStencilTexture(this.sizeSource.width,this.sizeSource.height,this.sizeSource._resolution),this._depth=!0,this._stencil=!0}resize(e,t,r=this.resolution,s=!1){if(this.dirtyId++,this.colorAttachments.forEach((i,a)=>{s&&a===0||i.texture.resize(e,t,r)}),this.depthStencilAttachment){if(s&&this.colorAttachments.length===0)return;this.depthStencilAttachment.texture.resize(e,t,r)}}destroy(){!this.colorAttachments&&!this.depthStencilAttachment||(this.emit("destroy",this),this.sizeSource.off("resize",this.onSourceResize,this),this._managedColorTextures&&this.colorAttachments.forEach(e=>{e.texture.destroy()}),this.depthStencilAttachment&&(this.depthStencilAttachment.texture.destroy(),delete this.depthStencilAttachment),this.colorAttachments=null,this._colorTextures=null,this.removeAllListeners())}_createDepthStencilTexture(e,t,r){return this.depthStencilAttachment??(this.depthStencilAttachment={texture:new F({width:e,height:t,resolution:r,format:"depth24plus-stencil8",autoGenerateMipmaps:!1,antialias:!1,mipLevelCount:1})}),this.depthStencilAttachment}};St.defaultOptions={width:0,height:0,resolution:1,colorTextures:1,stencil:!1,depth:!1,antialias:!1,isRoot:!1};let N=St;const D=new Map;Le.register(D);function Ct(n,e){if(!D.has(n)){const t=new C({source:new re({resource:n,...e})}),r=()=>{D.get(n)===t&&D.delete(n)};t.once("destroy",r),t.source.once("destroy",r),D.set(n,t)}return D.get(n)}const xe=class kt{get autoDensity(){return this.texture.source.autoDensity}set autoDensity(e){this.texture.source.autoDensity=e}get resolution(){return this.texture.source._resolution}set resolution(e){this.texture.source.resize(this.texture.source.width,this.texture.source.height,e)}constructor(e){this._renderer=e}init(e){e={...kt.defaultOptions,...e},e.view&&(v(It,"ViewSystem.view has been renamed to ViewSystem.canvas"),e.canvas=e.view),this.screen=new H(0,0,e.width,e.height),this.canvas=e.canvas||oe.get().createCanvas(),this.antialias=!!e.antialias;const{depth:t,...r}=e;this.texture=Ct(this.canvas,r),this.renderTarget=new N({colorTextures:[this.texture],depth:!!t,isRoot:!0}),this.texture.source.transparent=e.backgroundAlpha<1,this.texture.source.on("resize",this._updateScreenSize,this),this.resolution=e.resolution,this._updateScreenSize()}resize(e,t,r){this.texture.source.resize(e,t,r),this.screen.width=this.texture.frame.width,this.screen.height=this.texture.frame.height}destroy(e=!1){(typeof e=="boolean"?e:e?.removeView)&&this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas),this.texture.source.off("resize",this._updateScreenSize,this),P.removeScreen(this._renderer.uid),Se.removeScreen(this._renderer.uid),this.texture.destroy()}_updateScreenSize(){const{pixelWidth:e,pixelHeight:t}=this.texture.source,r=this._renderer.uid;P.setScreenSize(r,e,t),Se.setScreenSize(r,e,t)}};xe.extension={type:[c.WebGLSystem,c.WebGPUSystem,c.CanvasSystem],name:"view",priority:0};xe.defaultOptions={width:800,height:600,autoDensity:!1,antialias:!1};let qr=xe;const ts=[zr,bt,pe,qr,pt,$r,Kr,xt,Fr,Dt,Yr,vt],rs=[ht,nt,ct,ut,it,ot,at,lt];function Qr(n,e,t,r,s,i){const a=i?1:-1;return n.identity(),n.a=1/r*2,n.d=a*(1/s*2),n.tx=-1-e*n.a,n.ty=-a-t*n.d,n}function Xr(n){if(n.colorAttachments.length===0)return!1;const e=n.colorTexture.resource;return globalThis.HTMLCanvasElement&&e instanceof HTMLCanvasElement&&document.body.contains(e)}class ss{constructor(e){this.rootViewPort=new H,this.viewport=new H,this.onRenderTargetChange=new Et("onRenderTargetChange"),this.projectionMatrix=new R,this.defaultClearColor=[0,0,0,0],this._renderSurfaceToRenderTargetHash=new Map,this._gpuRenderTargetHash=Object.create(null),this._renderTargetStack=[],this._bindState={target:null,frame:void 0,mipLevel:0,layer:0,flipY:!1},this._bindFrame=new H,this._renderer=e,e.gc.addCollection(this,"_gpuRenderTargetHash","hash")}get renderSurface(){return this._bindState.target}get mipLevel(){return this._bindState.mipLevel}get layer(){return this._bindState.layer}finishRenderPass(){this.adaptor.finishRenderPass(this.renderTarget)}renderStart(e){this._renderTargetStack.length=0,this.push(e),this.rootViewPort.copyFrom(this.viewport),this.rootRenderTarget=this.renderTarget,this.renderingToScreen=Xr(this.rootRenderTarget),this.adaptor.prerender?.(this.rootRenderTarget)}postrender(){this.adaptor.postrender?.(this.rootRenderTarget)}bind(e,t=!0,r,s,i=0,a=0,o){let l;"target"in e?l=e:(v("8.20.0","RenderTargetSystem.bind: positional arguments are deprecated, please use an options object instead: bind({ target, clear, clearColor, frame, mipLevel, layer, flipY })"),l={target:e,clear:t,clearColor:r,frame:s,mipLevel:i,layer:a,flipY:o});const h=l.target;t=l.clear??!0,r=l.clearColor,i=(l.mipLevel??0)|0,a=(l.layer??0)|0,o=l.flipY,s=l.frame;const u=this.getRenderTarget(h),m=this.renderTarget!==u||!!u.flipY!=!!o;this.renderTarget=u;const f=this.getGpuRenderTarget(u);(u.pixelWidth!==f.width||u.pixelHeight!==f.height)&&(this.adaptor.resizeGpuRenderTarget(u),f.width=u.pixelWidth,f.height=u.pixelHeight);const p=u.colorAttachments[0]?.texture||u.depthStencilAttachment?.texture,g=this.viewport,y=p.dimension==="3d"?Math.max(p.depth>>i,1):p.depthOrArrayLayers;if(a<0||a>=y)throw new Error(`[RenderTargetSystem] layer ${a} is out of bounds (layer count=${y}).`);const _=this._bindState;_.target=h,_.frame=s?this._bindFrame.copyFrom(s):void 0,_.mipLevel=i,_.layer=a,_.flipY=o;const d=Math.max(p.pixelWidth>>i,1),T=Math.max(p.pixelHeight>>i,1);if(!s&&h instanceof C&&(s=h.frame),s){const x=p._resolution,b=1<<Math.max(i,0),S=s.x*x+.5|0,O=s.y*x+.5|0,wt=s.width*x+.5|0,Rt=s.height*x+.5|0;let M=Math.floor(S/b),B=Math.floor(O/b),G=Math.ceil(wt/b),U=Math.ceil(Rt/b);M<0&&(G+=M,M=0),B<0&&(U+=B,B=0),M=Math.min(M,d-1),B=Math.min(B,T-1),G=Math.min(G,d-M),U=Math.min(U,T-B),G=Math.max(G,1),U=Math.max(U,1),g.x=M,g.y=B,g.width=G,g.height=U}else g.x=0,g.y=0,g.width=d,g.height=T;return u.flipY=o,Qr(this.projectionMatrix,0,0,g.width/p.resolution,g.height/p.resolution,!u.isRoot!=!!u.flipY),this.adaptor.startRenderPass(u,t,r,g,i,a),m&&this.onRenderTargetChange.emit(u),u}getBindState(e){if(!this.renderTarget)throw new Error("[RenderTargetSystem] getBindState is only valid while a render surface is bound");const t=this._bindState;return e??(e={}),e.target=t.target,e.clear=$.NONE,e.clearColor=void 0,t.frame?e.frame?e.frame.copyFrom(t.frame):e.frame=t.frame.clone():e.frame=void 0,e.mipLevel=t.mipLevel,e.layer=t.layer,e.flipY=!!t.flipY,e}isFrontFaceInverted(e,t){if(!e){if(e=this.renderTarget,!e)return!1;t=e.flipY}return!!t!=(this._renderer.type===Q.WEBGL&&!e.isRoot)}get frontFaceInverted(){return v(zt,"RenderTargetSystem.frontFaceInverted is deprecated, use isFrontFaceInverted() instead"),this.isFrontFaceInverted()}clear(e,t=$.ALL,r,s=this.mipLevel,i=this.layer){t&&(e&&(e=this.getRenderTarget(e)),this.adaptor.clear(e||this.renderTarget,t,r,this.viewport,s,i))}contextChange(){this._gpuRenderTargetHash=Object.create(null)}push(e,t=$.ALL,r,s,i=0,a=0,o){let l;"target"in e?l=e:(v("8.20.0","RenderTargetSystem.push: positional arguments are deprecated, please use an options object instead: push({ target, clear, clearColor, frame, mipLevel, layer, flipY })"),l={target:e,clear:t,clearColor:r,frame:s,mipLevel:i,layer:a,flipY:o});const h=this.bind(l);return this._renderTargetStack.push({target:l.target,clear:!1,clearColor:void 0,frame:l.frame?l.frame.clone():void 0,mipLevel:l.mipLevel,layer:l.layer,flipY:l.flipY}),h}pop(){this._renderTargetStack.pop();const e=this._renderTargetStack[this._renderTargetStack.length-1];if(!e)throw new Error("[RenderTargetSystem] pop: no previous binding to restore (unbalanced pop)");return this.bind(e)}getRenderTarget(e){return e.isTexture&&(e=e.source),this._renderSurfaceToRenderTargetHash.get(e)??this._initRenderTarget(e)}copyToTexture(e,t,r,s,i){const a=this.getRenderTarget(e);r.x<0&&(s.width+=r.x,i.x-=r.x,r.x=0),r.y<0&&(s.height+=r.y,i.y-=r.y,r.y=0);const{pixelWidth:o,pixelHeight:l}=a;return s.width=Math.min(s.width,o-r.x),s.height=Math.min(s.height,l-r.y),this.adaptor.copyToTexture(a,t,r,s,i)}copyDepthTexture(e,t,r,s,i={x:0,y:0}){const a=this.getRenderTarget(e);if(!a.depthStencilAttachment){A("[RenderTargetSystem] copyDepthTexture: the source render target has no depth attachment to copy from");return}const o=t.source;if(!o.format.includes("depth")&&!o.format.includes("stencil")){A(`[RenderTargetSystem] copyDepthTexture: the destination texture must have a depth/stencil format (got '${o.format}')`);return}let l=r.x,h=r.y,u=i.x,m=i.y,f=s.width,p=s.height;l<0&&(f+=l,u-=l,l=0),h<0&&(p+=h,m-=h,h=0),f=Math.min(f,a.pixelWidth-l),p=Math.min(p,a.pixelHeight-h),f=Math.min(f,o.pixelWidth-u),p=Math.min(p,o.pixelHeight-m),!(f<=0||p<=0)&&this.adaptor.copyDepthTexture(a,t,{x:l,y:h},{width:f,height:p},{x:u,y:m})}ensureDepthStencil(){if(!this.renderTarget.stencil){if(this.renderTarget.depthStencilTexture){A(`[RenderTargetSystem] a stencil mask is being used, but the render target's depthStencilTexture format '${this.renderTarget.depthStencilTexture.format}' has no stencil aspect, so masking cannot work here. Use a 'depth24plus-stencil8' texture instead.`);return}this.renderTarget._depth=!0,this.renderTarget._stencil=!0,this.adaptor.startRenderPass(this.renderTarget,!1,null,this.viewport,0,this.layer)}}destroy(){this._renderer=null,this._renderSurfaceToRenderTargetHash.forEach((e,t)=>{e!==t?this._releaseRenderTarget(t,e):e.off("destroy",this._onRenderTargetDestroy,this)}),this._renderSurfaceToRenderTargetHash.clear();for(const e of Object.values(this._gpuRenderTargetHash))e&&this.adaptor.destroyGpuRenderTarget(e);this._gpuRenderTargetHash=Object.create(null)}_initRenderTarget(e){let t=null;if(re.test(e)&&(e=Ct(e).source),e instanceof N)t=e,e.once("destroy",this._onRenderTargetDestroy,this);else if(e instanceof F){const r=e.format;t=r.includes("depth")||r.includes("stencil")?new N({colorTextures:0,depthStencilTexture:e}):new N({colorTextures:[e]}),e.source instanceof re&&(t.isRoot=!0),e.once("destroy",this._onRenderSurfaceDestroy,this)}return this._renderSurfaceToRenderTargetHash.set(e,t),t}_onRenderSurfaceDestroy(e){const t=this._renderSurfaceToRenderTargetHash.get(e);t&&this._releaseRenderTarget(e,t)}_onRenderTargetDestroy(e){this._renderSurfaceToRenderTargetHash.delete(e),this._releaseGpuRenderTarget(e)}_releaseRenderTarget(e,t){t.destroy(),this._renderSurfaceToRenderTargetHash.delete(e),e.off("destroy",this._onRenderSurfaceDestroy,this),this._releaseGpuRenderTarget(t)}_releaseGpuRenderTarget(e){const t=this._gpuRenderTargetHash[e.uid];t&&(this._gpuRenderTargetHash[e.uid]=null,this.adaptor.destroyGpuRenderTarget(t))}getGpuRenderTarget(e){return this._gpuRenderTargetHash[e.uid]||(this._gpuRenderTargetHash[e.uid]=this.adaptor.initGpuRenderTarget(e))}resetState(){this.renderTarget=null,this._bindState.target=null}}export{it as A,ht as B,lt as C,tt as D,es as G,ss as R,k as S,xr as a,ts as b,mr as c,rs as d,Yt as e,Ce as f,yr as g,gr as h,_r as i,kr as j,Tr as k,wr as l,Ar as m,nt as n,ct as o,ut as p,Cr as r};
