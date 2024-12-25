import{g as et,K as nt,m as it,r as ot,C as X,c as O,o as wt,a as V,A as Et,_ as vt,u as bt,T as Ct,b as St,d as Rt,B as Mt,j as B,e as y,l as xt,f as H,h as Y}from"./index-CFqQayKs.js";import{r as v,d as M}from"./react-D5Cmz1pZ.js";import"./baseTool-DPZA2XoF.js";function Nt(o,i,s){var c=(s||{}).atBegin;return function(h,u,m){var p,t=m||{},e=t.noTrailing,n=e!==void 0&&e,r=t.noLeading,a=r!==void 0&&r,d=t.debounceMode,l=d===void 0?void 0:d,w=!1,f=0;function x(){p&&clearTimeout(p)}function b(){for(var g=arguments.length,E=new Array(g),C=0;C<g;C++)E[C]=arguments[C];var z=this,R=Date.now()-f;function I(){f=Date.now(),u.apply(z,E)}function $(){p=void 0}w||(a||!l||p||I(),x(),l===void 0&&R>h?a?(f=Date.now(),n||(p=setTimeout(l?$:I,h))):I():n!==!0&&(p=setTimeout(l?$:I,l===void 0?h-R:h)))}return b.cancel=function(g){var E=(g||{}).upcomingOnly,C=E!==void 0&&E;x(),w=!C},b}(o,i,{debounceMode:(c!==void 0&&c)!==!1})}const zt=new nt("antSpinMove",{to:{opacity:1}}),It=new nt("antRotate",{to:{transform:"rotate(405deg)"}}),Pt=o=>{const{componentCls:i,calc:s}=o;return{[`${i}`]:Object.assign(Object.assign({},ot(o)),{position:"absolute",display:"none",color:o.colorPrimary,fontSize:0,textAlign:"center",verticalAlign:"middle",opacity:0,transition:`transform ${o.motionDurationSlow} ${o.motionEaseInOutCirc}`,"&-spinning":{position:"static",display:"inline-block",opacity:1},[`${i}-text`]:{fontSize:o.fontSize,paddingTop:s(s(o.dotSize).sub(o.fontSize)).div(2).add(2).equal()},"&-fullscreen":{position:"fixed",width:"100vw",height:"100vh",backgroundColor:o.colorBgMask,zIndex:o.zIndexPopupBase,inset:0,display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center",opacity:0,visibility:"hidden",transition:`all ${o.motionDurationMid}`,"&-show":{opacity:1,visibility:"visible"},[`${i}-dot ${i}-dot-item`]:{backgroundColor:o.colorWhite},[`${i}-text`]:{color:o.colorTextLightSolid}},"&-nested-loading":{position:"relative",[`> div > ${i}`]:{position:"absolute",top:0,insetInlineStart:0,zIndex:4,display:"block",width:"100%",height:"100%",maxHeight:o.contentHeight,[`${i}-dot`]:{position:"absolute",top:"50%",insetInlineStart:"50%",margin:s(o.dotSize).mul(-1).div(2).equal()},[`${i}-text`]:{position:"absolute",top:"50%",width:"100%",textShadow:`0 1px 2px ${o.colorBgContainer}`},[`&${i}-show-text ${i}-dot`]:{marginTop:s(o.dotSize).div(2).mul(-1).sub(10).equal()},"&-sm":{[`${i}-dot`]:{margin:s(o.dotSizeSM).mul(-1).div(2).equal()},[`${i}-text`]:{paddingTop:s(s(o.dotSizeSM).sub(o.fontSize)).div(2).add(2).equal()},[`&${i}-show-text ${i}-dot`]:{marginTop:s(o.dotSizeSM).div(2).mul(-1).sub(10).equal()}},"&-lg":{[`${i}-dot`]:{margin:s(o.dotSizeLG).mul(-1).div(2).equal()},[`${i}-text`]:{paddingTop:s(s(o.dotSizeLG).sub(o.fontSize)).div(2).add(2).equal()},[`&${i}-show-text ${i}-dot`]:{marginTop:s(o.dotSizeLG).div(2).mul(-1).sub(10).equal()}}},[`${i}-container`]:{position:"relative",transition:`opacity ${o.motionDurationSlow}`,"&::after":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,zIndex:10,width:"100%",height:"100%",background:o.colorBgContainer,opacity:0,transition:`all ${o.motionDurationSlow}`,content:'""',pointerEvents:"none"}},[`${i}-blur`]:{clear:"both",opacity:.5,userSelect:"none",pointerEvents:"none","&::after":{opacity:.4,pointerEvents:"auto"}}},"&-tip":{color:o.spinDotDefault},[`${i}-dot`]:{position:"relative",display:"inline-block",fontSize:o.dotSize,width:"1em",height:"1em","&-item":{position:"absolute",display:"block",width:s(o.dotSize).sub(s(o.marginXXS).div(2)).div(2).equal(),height:s(o.dotSize).sub(s(o.marginXXS).div(2)).div(2).equal(),backgroundColor:o.colorPrimary,borderRadius:"100%",transform:"scale(0.75)",transformOrigin:"50% 50%",opacity:.3,animationName:zt,animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear",animationDirection:"alternate","&:nth-child(1)":{top:0,insetInlineStart:0,animationDelay:"0s"},"&:nth-child(2)":{top:0,insetInlineEnd:0,animationDelay:"0.4s"},"&:nth-child(3)":{insetInlineEnd:0,bottom:0,animationDelay:"0.8s"},"&:nth-child(4)":{bottom:0,insetInlineStart:0,animationDelay:"1.2s"}},"&-spin":{transform:"rotate(45deg)",animationName:It,animationDuration:"1.2s",animationIterationCount:"infinite",animationTimingFunction:"linear"}},[`&-sm ${i}-dot`]:{fontSize:o.dotSizeSM,i:{width:s(s(o.dotSizeSM).sub(s(o.marginXXS).div(2))).div(2).equal(),height:s(s(o.dotSizeSM).sub(s(o.marginXXS).div(2))).div(2).equal()}},[`&-lg ${i}-dot`]:{fontSize:o.dotSizeLG,i:{width:s(s(o.dotSizeLG).sub(o.marginXXS)).div(2).equal(),height:s(s(o.dotSizeLG).sub(o.marginXXS)).div(2).equal()}},[`&${i}-show-text ${i}-text`]:{display:"block"}})}},At=et("Spin",o=>{const i=it(o,{spinDotDefault:o.colorTextDescription});return[Pt(i)]},o=>{const{controlHeightLG:i,controlHeight:s}=o;return{contentHeight:400,dotSize:i/2,dotSizeSM:.35*i,dotSizeLG:s}});let U=null;const rt=o=>{const{prefixCls:i,spinning:s=!0,delay:c=0,className:h,rootClassName:u,size:m="default",tip:p,wrapperClassName:t,style:e,children:n,fullscreen:r=!1}=o,a=function(S,P){var A={};for(var N in S)Object.prototype.hasOwnProperty.call(S,N)&&P.indexOf(N)<0&&(A[N]=S[N]);if(S!=null&&typeof Object.getOwnPropertySymbols=="function"){var D=0;for(N=Object.getOwnPropertySymbols(S);D<N.length;D++)P.indexOf(N[D])<0&&Object.prototype.propertyIsEnumerable.call(S,N[D])&&(A[N[D]]=S[N[D]])}return A}(o,["prefixCls","spinning","delay","className","rootClassName","size","tip","wrapperClassName","style","children","fullscreen"]),{getPrefixCls:d}=v.useContext(X),l=d("spin",i),[w,f,x]=At(l),[b,g]=v.useState(()=>s&&!function(S,P){return!!S&&!!P&&!isNaN(Number(P))}(s,c));v.useEffect(()=>{if(s){const S=Nt(c,()=>{g(!0)});return S(),()=>{var P;(P=S==null?void 0:S.cancel)===null||P===void 0||P.call(S)}}g(!1)},[c,s]);const E=v.useMemo(()=>n!==void 0&&!r,[n,r]),{direction:C,spin:z}=v.useContext(X),R=O(l,z==null?void 0:z.className,{[`${l}-sm`]:m==="small",[`${l}-lg`]:m==="large",[`${l}-spinning`]:b,[`${l}-show-text`]:!!p,[`${l}-fullscreen`]:r,[`${l}-fullscreen-show`]:r&&b,[`${l}-rtl`]:C==="rtl"},h,u,f,x),I=O(`${l}-container`,{[`${l}-blur`]:b}),$=wt(a,["indicator"]),j=Object.assign(Object.assign({},z==null?void 0:z.style),e),F=v.createElement("div",Object.assign({},$,{style:j,className:R,"aria-live":"polite","aria-busy":b}),function(S,P){const{indicator:A}=P,N=`${S}-dot`;return A===null?null:v.isValidElement(A)?V(A,{className:O(A.props.className,N)}):v.isValidElement(U)?V(U,{className:O(U.props.className,N)}):v.createElement("span",{className:O(N,`${S}-dot-spin`)},v.createElement("i",{className:`${S}-dot-item`,key:1}),v.createElement("i",{className:`${S}-dot-item`,key:2}),v.createElement("i",{className:`${S}-dot-item`,key:3}),v.createElement("i",{className:`${S}-dot-item`,key:4}))}(l,o),p&&(E||r)?v.createElement("div",{className:`${l}-text`},p):null);return w(E?v.createElement("div",Object.assign({},$,{className:O(`${l}-nested-loading`,t,f,x)}),b&&v.createElement("div",{key:"loading"},F),v.createElement("div",{className:I,key:"container"},n)):F)};rt.setDefaultIndicator=o=>{U=o};const $t=rt,Tt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z"}}]},name:"reload",theme:"outlined"};var Ot=function(o,i){return v.createElement(Et,vt({},o,{ref:i,icon:Tt}))};const kt=v.forwardRef(Ot);var k,W,Lt=Object.defineProperty,Q=Object.getOwnPropertySymbols,st=Object.prototype.hasOwnProperty,at=Object.prototype.propertyIsEnumerable,K=(o,i,s)=>i in o?Lt(o,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[i]=s,G=(o,i)=>{for(var s in i||(i={}))st.call(i,s)&&K(o,s,i[s]);if(Q)for(var s of Q(i))at.call(i,s)&&K(o,s,i[s]);return o},lt=(o,i)=>{var s={};for(var c in o)st.call(o,c)&&i.indexOf(c)<0&&(s[c]=o[c]);if(o!=null&&Q)for(var c of Q(o))i.indexOf(c)<0&&at.call(o,c)&&(s[c]=o[c]);return s};(o=>{const i=class{constructor(t,e,n,r){if(this.version=t,this.errorCorrectionLevel=e,this.modules=[],this.isFunction=[],t<i.MIN_VERSION||t>i.MAX_VERSION)throw new RangeError("Version value out of range");if(r<-1||r>7)throw new RangeError("Mask value out of range");this.size=4*t+17;let a=[];for(let l=0;l<this.size;l++)a.push(!1);for(let l=0;l<this.size;l++)this.modules.push(a.slice()),this.isFunction.push(a.slice());this.drawFunctionPatterns();const d=this.addEccAndInterleave(n);if(this.drawCodewords(d),r==-1){let l=1e9;for(let w=0;w<8;w++){this.applyMask(w),this.drawFormatBits(w);const f=this.getPenaltyScore();f<l&&(r=w,l=f),this.applyMask(w)}}u(0<=r&&r<=7),this.mask=r,this.applyMask(r),this.drawFormatBits(r),this.isFunction=[]}static encodeText(t,e){const n=o.QrSegment.makeSegments(t);return i.encodeSegments(n,e)}static encodeBinary(t,e){const n=o.QrSegment.makeBytes(t);return i.encodeSegments([n],e)}static encodeSegments(t,e,n=1,r=40,a=-1,d=!0){if(!(i.MIN_VERSION<=n&&n<=r&&r<=i.MAX_VERSION)||a<-1||a>7)throw new RangeError("Invalid value");let l,w;for(l=n;;l++){const g=8*i.getNumDataCodewords(l,e),E=p.getTotalBits(t,l);if(E<=g){w=E;break}if(l>=r)throw new RangeError("Data too long")}for(const g of[i.Ecc.MEDIUM,i.Ecc.QUARTILE,i.Ecc.HIGH])d&&w<=8*i.getNumDataCodewords(l,g)&&(e=g);let f=[];for(const g of t){c(g.mode.modeBits,4,f),c(g.numChars,g.mode.numCharCountBits(l),f);for(const E of g.getData())f.push(E)}u(f.length==w);const x=8*i.getNumDataCodewords(l,e);u(f.length<=x),c(0,Math.min(4,x-f.length),f),c(0,(8-f.length%8)%8,f),u(f.length%8==0);for(let g=236;f.length<x;g^=253)c(g,8,f);let b=[];for(;8*b.length<f.length;)b.push(0);return f.forEach((g,E)=>b[E>>>3]|=g<<7-(7&E)),new i(l,e,b,a)}getModule(t,e){return 0<=t&&t<this.size&&0<=e&&e<this.size&&this.modules[e][t]}getModules(){return this.modules}drawFunctionPatterns(){for(let n=0;n<this.size;n++)this.setFunctionModule(6,n,n%2==0),this.setFunctionModule(n,6,n%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const t=this.getAlignmentPatternPositions(),e=t.length;for(let n=0;n<e;n++)for(let r=0;r<e;r++)n==0&&r==0||n==0&&r==e-1||n==e-1&&r==0||this.drawAlignmentPattern(t[n],t[r]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(t){const e=this.errorCorrectionLevel.formatBits<<3|t;let n=e;for(let a=0;a<10;a++)n=n<<1^1335*(n>>>9);const r=21522^(e<<10|n);u(r>>>15==0);for(let a=0;a<=5;a++)this.setFunctionModule(8,a,h(r,a));this.setFunctionModule(8,7,h(r,6)),this.setFunctionModule(8,8,h(r,7)),this.setFunctionModule(7,8,h(r,8));for(let a=9;a<15;a++)this.setFunctionModule(14-a,8,h(r,a));for(let a=0;a<8;a++)this.setFunctionModule(this.size-1-a,8,h(r,a));for(let a=8;a<15;a++)this.setFunctionModule(8,this.size-15+a,h(r,a));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let t=this.version;for(let n=0;n<12;n++)t=t<<1^7973*(t>>>11);const e=this.version<<12|t;u(e>>>18==0);for(let n=0;n<18;n++){const r=h(e,n),a=this.size-11+n%3,d=Math.floor(n/3);this.setFunctionModule(a,d,r),this.setFunctionModule(d,a,r)}}drawFinderPattern(t,e){for(let n=-4;n<=4;n++)for(let r=-4;r<=4;r++){const a=Math.max(Math.abs(r),Math.abs(n)),d=t+r,l=e+n;0<=d&&d<this.size&&0<=l&&l<this.size&&this.setFunctionModule(d,l,a!=2&&a!=4)}}drawAlignmentPattern(t,e){for(let n=-2;n<=2;n++)for(let r=-2;r<=2;r++)this.setFunctionModule(t+r,e+n,Math.max(Math.abs(r),Math.abs(n))!=1)}setFunctionModule(t,e,n){this.modules[e][t]=n,this.isFunction[e][t]=!0}addEccAndInterleave(t){const e=this.version,n=this.errorCorrectionLevel;if(t.length!=i.getNumDataCodewords(e,n))throw new RangeError("Invalid argument");const r=i.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][e],a=i.ECC_CODEWORDS_PER_BLOCK[n.ordinal][e],d=Math.floor(i.getNumRawDataModules(e)/8),l=r-d%r,w=Math.floor(d/r);let f=[];const x=i.reedSolomonComputeDivisor(a);for(let g=0,E=0;g<r;g++){let C=t.slice(E,E+w-a+(g<l?0:1));E+=C.length;const z=i.reedSolomonComputeRemainder(C,x);g<l&&C.push(0),f.push(C.concat(z))}let b=[];for(let g=0;g<f[0].length;g++)f.forEach((E,C)=>{(g!=w-a||C>=l)&&b.push(E[g])});return u(b.length==d),b}drawCodewords(t){if(t.length!=Math.floor(i.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let e=0;for(let n=this.size-1;n>=1;n-=2){n==6&&(n=5);for(let r=0;r<this.size;r++)for(let a=0;a<2;a++){const d=n-a,l=n+1&2?r:this.size-1-r;!this.isFunction[l][d]&&e<8*t.length&&(this.modules[l][d]=h(t[e>>>3],7-(7&e)),e++)}}u(e==8*t.length)}applyMask(t){if(t<0||t>7)throw new RangeError("Mask value out of range");for(let e=0;e<this.size;e++)for(let n=0;n<this.size;n++){let r;switch(t){case 0:r=(n+e)%2==0;break;case 1:r=e%2==0;break;case 2:r=n%3==0;break;case 3:r=(n+e)%3==0;break;case 4:r=(Math.floor(n/3)+Math.floor(e/2))%2==0;break;case 5:r=n*e%2+n*e%3==0;break;case 6:r=(n*e%2+n*e%3)%2==0;break;case 7:r=((n+e)%2+n*e%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[e][n]&&r&&(this.modules[e][n]=!this.modules[e][n])}}getPenaltyScore(){let t=0;for(let a=0;a<this.size;a++){let d=!1,l=0,w=[0,0,0,0,0,0,0];for(let f=0;f<this.size;f++)this.modules[a][f]==d?(l++,l==5?t+=i.PENALTY_N1:l>5&&t++):(this.finderPenaltyAddHistory(l,w),d||(t+=this.finderPenaltyCountPatterns(w)*i.PENALTY_N3),d=this.modules[a][f],l=1);t+=this.finderPenaltyTerminateAndCount(d,l,w)*i.PENALTY_N3}for(let a=0;a<this.size;a++){let d=!1,l=0,w=[0,0,0,0,0,0,0];for(let f=0;f<this.size;f++)this.modules[f][a]==d?(l++,l==5?t+=i.PENALTY_N1:l>5&&t++):(this.finderPenaltyAddHistory(l,w),d||(t+=this.finderPenaltyCountPatterns(w)*i.PENALTY_N3),d=this.modules[f][a],l=1);t+=this.finderPenaltyTerminateAndCount(d,l,w)*i.PENALTY_N3}for(let a=0;a<this.size-1;a++)for(let d=0;d<this.size-1;d++){const l=this.modules[a][d];l==this.modules[a][d+1]&&l==this.modules[a+1][d]&&l==this.modules[a+1][d+1]&&(t+=i.PENALTY_N2)}let e=0;for(const a of this.modules)e=a.reduce((d,l)=>d+(l?1:0),e);const n=this.size*this.size,r=Math.ceil(Math.abs(20*e-10*n)/n)-1;return u(0<=r&&r<=9),t+=r*i.PENALTY_N4,u(0<=t&&t<=2568888),t}getAlignmentPatternPositions(){if(this.version==1)return[];{const t=Math.floor(this.version/7)+2,e=this.version==32?26:2*Math.ceil((4*this.version+4)/(2*t-2));let n=[6];for(let r=this.size-7;n.length<t;r-=e)n.splice(1,0,r);return n}}static getNumRawDataModules(t){if(t<i.MIN_VERSION||t>i.MAX_VERSION)throw new RangeError("Version number out of range");let e=(16*t+128)*t+64;if(t>=2){const n=Math.floor(t/7)+2;e-=(25*n-10)*n-55,t>=7&&(e-=36)}return u(208<=e&&e<=29648),e}static getNumDataCodewords(t,e){return Math.floor(i.getNumRawDataModules(t)/8)-i.ECC_CODEWORDS_PER_BLOCK[e.ordinal][t]*i.NUM_ERROR_CORRECTION_BLOCKS[e.ordinal][t]}static reedSolomonComputeDivisor(t){if(t<1||t>255)throw new RangeError("Degree out of range");let e=[];for(let r=0;r<t-1;r++)e.push(0);e.push(1);let n=1;for(let r=0;r<t;r++){for(let a=0;a<e.length;a++)e[a]=i.reedSolomonMultiply(e[a],n),a+1<e.length&&(e[a]^=e[a+1]);n=i.reedSolomonMultiply(n,2)}return e}static reedSolomonComputeRemainder(t,e){let n=e.map(r=>0);for(const r of t){const a=r^n.shift();n.push(0),e.forEach((d,l)=>n[l]^=i.reedSolomonMultiply(d,a))}return n}static reedSolomonMultiply(t,e){if(t>>>8||e>>>8)throw new RangeError("Byte out of range");let n=0;for(let r=7;r>=0;r--)n=n<<1^285*(n>>>7),n^=(e>>>r&1)*t;return u(n>>>8==0),n}finderPenaltyCountPatterns(t){const e=t[1];u(e<=3*this.size);const n=e>0&&t[2]==e&&t[3]==3*e&&t[4]==e&&t[5]==e;return(n&&t[0]>=4*e&&t[6]>=e?1:0)+(n&&t[6]>=4*e&&t[0]>=e?1:0)}finderPenaltyTerminateAndCount(t,e,n){return t&&(this.finderPenaltyAddHistory(e,n),e=0),e+=this.size,this.finderPenaltyAddHistory(e,n),this.finderPenaltyCountPatterns(n)}finderPenaltyAddHistory(t,e){e[0]==0&&(t+=this.size),e.pop(),e.unshift(t)}};let s=i;function c(t,e,n){if(e<0||e>31||t>>>e)throw new RangeError("Value out of range");for(let r=e-1;r>=0;r--)n.push(t>>>r&1)}function h(t,e){return!!(t>>>e&1)}function u(t){if(!t)throw new Error("Assertion error")}s.MIN_VERSION=1,s.MAX_VERSION=40,s.PENALTY_N1=3,s.PENALTY_N2=3,s.PENALTY_N3=40,s.PENALTY_N4=10,s.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],s.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],o.QrCode=s;const m=class{constructor(t,e,n){if(this.mode=t,this.numChars=e,this.bitData=n,e<0)throw new RangeError("Invalid argument");this.bitData=n.slice()}static makeBytes(t){let e=[];for(const n of t)c(n,8,e);return new m(m.Mode.BYTE,t.length,e)}static makeNumeric(t){if(!m.isNumeric(t))throw new RangeError("String contains non-numeric characters");let e=[];for(let n=0;n<t.length;){const r=Math.min(t.length-n,3);c(parseInt(t.substr(n,r),10),3*r+1,e),n+=r}return new m(m.Mode.NUMERIC,t.length,e)}static makeAlphanumeric(t){if(!m.isAlphanumeric(t))throw new RangeError("String contains unencodable characters in alphanumeric mode");let e,n=[];for(e=0;e+2<=t.length;e+=2){let r=45*m.ALPHANUMERIC_CHARSET.indexOf(t.charAt(e));r+=m.ALPHANUMERIC_CHARSET.indexOf(t.charAt(e+1)),c(r,11,n)}return e<t.length&&c(m.ALPHANUMERIC_CHARSET.indexOf(t.charAt(e)),6,n),new m(m.Mode.ALPHANUMERIC,t.length,n)}static makeSegments(t){return t==""?[]:m.isNumeric(t)?[m.makeNumeric(t)]:m.isAlphanumeric(t)?[m.makeAlphanumeric(t)]:[m.makeBytes(m.toUtf8ByteArray(t))]}static makeEci(t){let e=[];if(t<0)throw new RangeError("ECI assignment value out of range");if(t<128)c(t,8,e);else if(t<16384)c(2,2,e),c(t,14,e);else{if(!(t<1e6))throw new RangeError("ECI assignment value out of range");c(6,3,e),c(t,21,e)}return new m(m.Mode.ECI,0,e)}static isNumeric(t){return m.NUMERIC_REGEX.test(t)}static isAlphanumeric(t){return m.ALPHANUMERIC_REGEX.test(t)}getData(){return this.bitData.slice()}static getTotalBits(t,e){let n=0;for(const r of t){const a=r.mode.numCharCountBits(e);if(r.numChars>=1<<a)return 1/0;n+=4+a+r.bitData.length}return n}static toUtf8ByteArray(t){t=encodeURI(t);let e=[];for(let n=0;n<t.length;n++)t.charAt(n)!="%"?e.push(t.charCodeAt(n)):(e.push(parseInt(t.substr(n+1,2),16)),n+=2);return e}};let p=m;p.NUMERIC_REGEX=/^[0-9]*$/,p.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,p.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",o.QrSegment=p})(k||(k={})),(o=>{const i=class{constructor(c,h){this.ordinal=c,this.formatBits=h}};let s=i;s.LOW=new i(0,1),s.MEDIUM=new i(1,0),s.QUARTILE=new i(2,3),s.HIGH=new i(3,2),o.Ecc=s})((W=k||(k={})).QrCode||(W.QrCode={})),(o=>{(i=>{const s=class{constructor(h,u){this.modeBits=h,this.numBitsCharCount=u}numCharCountBits(h){return this.numBitsCharCount[Math.floor((h+7)/17)]}};let c=s;c.NUMERIC=new s(1,[10,12,14]),c.ALPHANUMERIC=new s(2,[9,11,13]),c.BYTE=new s(4,[8,16,16]),c.KANJI=new s(8,[8,10,12]),c.ECI=new s(7,[0,0,0]),i.Mode=c})(o.QrSegment||(o.QrSegment={}))})(k||(k={}));var _=k,ct={L:_.QrCode.Ecc.LOW,M:_.QrCode.Ecc.MEDIUM,Q:_.QrCode.Ecc.QUARTILE,H:_.QrCode.Ecc.HIGH},dt=128,ut="L",ht="#FFFFFF",mt="#000000",ft=!1,q=4,Bt=.1;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */function gt(o,i=0){const s=[];return o.forEach(function(c,h){let u=null;c.forEach(function(m,p){if(!m&&u!==null)return s.push(`M${u+i} ${h+i}h${p-u}v1H${u+i}z`),void(u=null);if(p!==c.length-1)m&&u===null&&(u=p);else{if(!m)return;u===null?s.push(`M${p+i},${h+i} h1v1H${p+i}z`):s.push(`M${u+i},${h+i} h${p+1-u}v1H${u+i}z`)}})}),s.join("")}function pt(o,i){return o.slice().map((s,c)=>c<i.y||c>=i.y+i.h?s:s.map((h,u)=>(u<i.x||u>=i.x+i.w)&&h))}function yt(o,i,s,c){if(c==null)return null;const h=s?q:0,u=o.length+2*h,m=Math.floor(i*Bt),p=u/i,t=(c.width||m)*p,e=(c.height||m)*p,n=c.x==null?o.length/2-t/2:c.x*p,r=c.y==null?o.length/2-e/2:c.y*p;let a=null;if(c.excavate){let d=Math.floor(n),l=Math.floor(r);a={x:d,y:l,w:Math.ceil(t+n-d),h:Math.ceil(e+r-l)}}return{x:n,y:r,h:e,w:t,excavation:a}}var Dt=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}();function _t(o){const i=o,{value:s,size:c=dt,level:h=ut,bgColor:u=ht,fgColor:m=mt,includeMargin:p=ft,style:t,imageSettings:e}=i,n=lt(i,["value","size","level","bgColor","fgColor","includeMargin","style","imageSettings"]),r=e==null?void 0:e.src,a=v.useRef(null),d=v.useRef(null),[l,w]=v.useState(!1);v.useEffect(()=>{if(a.current!=null){const b=a.current,g=b.getContext("2d");if(!g)return;let E=_.QrCode.encodeText(s,ct[h]).getModules();const C=p?q:0,z=E.length+2*C,R=yt(E,c,p,e),I=d.current,$=R!=null&&I!==null&&I.complete&&I.naturalHeight!==0&&I.naturalWidth!==0;$&&R.excavation!=null&&(E=pt(E,R.excavation));const j=window.devicePixelRatio||1;b.height=b.width=c*j;const F=c/z*j;g.scale(F,F),g.fillStyle=u,g.fillRect(0,0,z,z),g.fillStyle=m,Dt?g.fill(new Path2D(gt(E,C))):E.forEach(function(S,P){S.forEach(function(A,N){A&&g.fillRect(N+C,P+C,1,1)})}),$&&g.drawImage(I,R.x+C,R.y+C,R.w,R.h)}}),v.useEffect(()=>{w(!1)},[r]);const f=G({height:c,width:c},t);let x=null;return r!=null&&(x=M.createElement("img",{src:r,key:r,style:{display:"none"},onLoad:()=>{w(!0)},ref:d})),M.createElement(M.Fragment,null,M.createElement("canvas",G({style:f,height:c,width:c,ref:a},n)),x)}function Ft(o){const i=o,{value:s,size:c=dt,level:h=ut,bgColor:u=ht,fgColor:m=mt,includeMargin:p=ft,imageSettings:t}=i,e=lt(i,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"]);let n=_.QrCode.encodeText(s,ct[h]).getModules();const r=p?q:0,a=n.length+2*r,d=yt(n,c,p,t);let l=null;t!=null&&d!=null&&(d.excavation!=null&&(n=pt(n,d.excavation)),l=M.createElement("image",{xlinkHref:t.src,height:d.h,width:d.w,x:d.x+r,y:d.y+r,preserveAspectRatio:"none"}));const w=gt(n,r);return M.createElement("svg",G({height:c,width:c,viewBox:`0 0 ${a} ${a}`},e),M.createElement("path",{fill:u,d:`M0,0 h${a}v${a}H0z`,shapeRendering:"crispEdges"}),M.createElement("path",{fill:m,d:w,shapeRendering:"crispEdges"}),l)}const Ht=et("QRCode",o=>(i=>{const{componentCls:s,lineWidth:c,lineType:h,colorSplit:u}=i;return{[s]:Object.assign(Object.assign({},ot(i)),{display:"flex",justifyContent:"center",alignItems:"center",padding:i.paddingSM,backgroundColor:i.colorWhite,borderRadius:i.borderRadiusLG,border:`${bt(c)} ${h} ${u}`,position:"relative",overflow:"hidden",[`& > ${s}-mask`]:{position:"absolute",insetBlockStart:0,insetInlineStart:0,zIndex:10,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",color:i.colorText,lineHeight:i.lineHeight,background:i.QRCodeMaskBackgroundColor,textAlign:"center",[`& > ${s}-expired, & > ${s}-scanned`]:{color:i.QRCodeTextColor}},"> canvas":{alignSelf:"stretch",flex:"auto",minWidth:0},"&-icon":{marginBlockEnd:i.marginXS,fontSize:i.controlHeight}}),[`${s}-borderless`]:{borderColor:"transparent"}}})(it(o,{QRCodeTextColor:o.colorText})),o=>({QRCodeMaskBackgroundColor:new Ct(o.colorBgContainer).setAlpha(.96).toRgbString()})),jt=o=>{const[,i]=St(),{value:s,type:c="canvas",icon:h="",size:u=160,iconSize:m=40,color:p=i.colorText,errorLevel:t="M",status:e="active",bordered:n=!0,onRefresh:r,style:a,className:d,rootClassName:l,prefixCls:w,bgColor:f="transparent"}=o,{getPrefixCls:x}=v.useContext(X),b=x("qrcode",w),[g,E,C]=Ht(b),z={value:s,size:u,level:t,bgColor:f,fgColor:p,style:{width:void 0,height:void 0},imageSettings:h?{src:h,x:void 0,y:void 0,height:m,width:m,excavate:!0}:void 0},[R]=Rt("QRCode");if(!s)return null;const I=O(b,d,l,E,C,{[`${b}-borderless`]:!n});return g(M.createElement("div",{className:I,style:Object.assign(Object.assign({},a),{width:u,height:u,backgroundColor:f})},e!=="active"&&M.createElement("div",{className:`${b}-mask`},e==="loading"&&M.createElement($t,null),e==="expired"&&M.createElement(M.Fragment,null,M.createElement("p",{className:`${b}-expired`},R==null?void 0:R.expired),r&&M.createElement(Mt,{type:"link",icon:M.createElement(kt,null),onClick:r},R==null?void 0:R.refresh)),e==="scanned"&&M.createElement("p",{className:`${b}-scanned`},R==null?void 0:R.scanned)),c==="canvas"?M.createElement(_t,Object.assign({},z)):M.createElement(Ft,Object.assign({},z))))},Ut=()=>B("section",{style:{width:"100%",display:"flex",alignItems:"start",marginBottom:8},children:[y("section",{children:y("img",{src:xt,style:{width:15,height:15,marginRight:5,marginTop:3},referrerPolicy:"no-referrer",alt:""})}),B("section",{style:{fontSize:12,color:H.blue400,paddingTop:3},children:[y("span",{style:{color:"gray",fontSize:12},children:"点击上方蓝字关注"}),y("span",{style:{fontSize:12},children:"guohub8080"})]})]}),L=(o,i)=>o??i,J=o=>{const i=L(o.src,"https://ts1.cn.mm.bing.net/th/id/R-C.57384e4c2dd256a755578f00845e60af?rik=uy9%2bvT4%2b7Rur%2fA&riu=http%3a%2f%2fimg06file.tooopen.com%2fimages%2f20171224%2ftooopen_sy_231021357463.jpg&ehk=whpCWn%2byPBvtGi1%2boY1sEBq%2frEUaP6w2N5bnBQsLWdo%3d&risl=&pid=ImgRaw&r=0");let s=0;o.description===void 0&&(s=8);const c=v.useRef(null),h=v.useRef(null);v.useEffect(()=>{c&&(c.current.style.setProperty("width","100%","important"),c.current.style.setProperty("max-width","550px","important"),c.current.style.setProperty("object-fit","contain","important")),h&&(h.current.style.setProperty("min-width","100%","important"),h.current.style.setProperty("max-width","100%","important"),h.current.style.setProperty("width","100%","important"),h.current.style.setProperty("object-fit","contain","important"))},[]);const u=()=>{if(o.description!==void 0)return typeof o.description=="string"?y("section",{style:{paddingTop:5,paddingBottom:10,border:"1px #d1d5db solid",borderRadius:8,borderTopLeftRadius:0,borderTopRightRadius:0,borderTop:0},children:y(Z,{description:o.description,color:o.color})}):o.description instanceof Array?y("section",{style:{paddingTop:5,paddingBottom:10,border:"1px #d1d5db solid",borderRadius:8,borderTopLeftRadius:0,borderTopRightRadius:0,borderTop:0},children:o.description.map((m,p)=>y(Z,{description:m,color:o.color},p))}):void 0};return y("section",{children:y("section",{style:{width:"100%",paddingLeft:15,paddingRight:15,marginTop:15,marginBottom:15,marginLeft:"auto",marginRight:"auto"},children:B("section",{ref:c,style:{borderRadius:8,overflow:"hidden",backgroundColor:"white",boxShadow:"0 0 15px #efefef",margin:"0 auto"},children:[y("section",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",padding:0,margin:0},children:y("img",{src:i,referrerPolicy:"no-referrer",alt:"",ref:h,style:{width:"100%",objectFit:"contain",margin:0,padding:0,height:"fit-content",borderTopRightRadius:8,borderTopLeftRadius:8,borderBottomLeftRadius:s,borderBottomRightRadius:s}})}),y(u,{})]})})})},Z=o=>y("section",{style:{width:"100%",fontSize:13,textAlign:"center",lineHeight:1.3,color:L(o.color,"#5d5d5d"),paddingTop:3,paddingLeft:10,paddingRight:10},children:o.description}),T=o=>{const i=L(o.px,15);let s="justify";return(o==null?void 0:o.align)==="right"?s="right":(o==null?void 0:o.align)==="center"&&(s="center"),y("section",{style:{paddingLeft:i,paddingRight:i,marginBottom:L(o.mb,15),marginTop:L(o.mt,0),display:"block"},children:y("p",{style:{fontSize:o.fontSize||17,lineHeight:1.8,textIndent:L(o.textIndent,"2em"),textAlign:s},children:o.children})})},tt=o=>y("section",{style:{padding:2,borderRadius:8,border:"1px solid #d9d9d9",backgroundColor:H.blueGray50,paddingTop:25,paddingBottom:25,marginBottom:25},children:o.children}),Qt=o=>{const i=v.useRef(null);return v.useEffect(()=>{o.important&&i.current&&o.important.map(s=>{i.current.style.setProperty(s[0],s[1],"important")})},[o.important]),o.important===void 0?y("section",{style:o.style,...Y.waterMark,children:o.children}):y("section",{style:o.style,ref:i,...Y.waterMark,children:o.children})},Xt=()=>y("section",{children:y(Qt,{children:B("section",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[y("section",{style:{marginBottom:10,color:H.blue600,fontSize:12},children:"更多资讯请关注"}),y(jt,{value:"guohub.top",size:120}),y("section",{style:{marginTop:10,fontSize:12,color:H.blue600},children:"guohub.top"})]})})}),Gt=o=>{let i=L(o.color,H.red400);return y("strong",{style:{fontSize:17,color:i,fontWeight:700},children:o.children})};function Wt(){return B("section",{style:{fontSize:25},children:[y(Ut,{}),B(tt,{children:[y(T,{children:"这是一个使用React作为编辑语言的编辑器的Demo。"}),B(T,{children:["点击悬浮窗格或者",y(Gt,{children:"Ctrl + C"}),"进行复制源码。"]}),y(T,{textIndent:0,children:"默认段落是首行缩进2字符，你也可以设置无缩进。"}),y(T,{align:"center",children:"可以居中排列。"}),y(T,{align:"right",children:"可以右边排列。"}),y(T,{children:"一个示例图片："}),y(J,{}),y(T,{children:"带有标题的图片："}),y(J,{description:"这是一个描述"}),y(T,{children:"只要会使用React，便可以进行无限拓展。"})]}),y(tt,{children:y(Xt,{})})]})}export{Wt as default};
