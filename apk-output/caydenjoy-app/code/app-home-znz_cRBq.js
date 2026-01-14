var hi="";function Yi(e){hi=e}function Jo(e=""){if(!hi){const t=[...document.getElementsByTagName("script")],i=t.find(o=>o.hasAttribute("data-shoelace"));if(i)Yi(i.getAttribute("data-shoelace"));else{const o=t.find(s=>/shoelace(\.min)?\.js($|\?)/.test(s.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(s.src));let r="";o&&(r=o.getAttribute("src")),Yi(r.split("/").slice(0,-1).join("/"))}}return hi.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var wo=Object.defineProperty,Go=Object.defineProperties,Qo=Object.getOwnPropertyDescriptor,Xo=Object.getOwnPropertyDescriptors,Wi=Object.getOwnPropertySymbols,Zo=Object.prototype.hasOwnProperty,er=Object.prototype.propertyIsEnumerable,Ki=(e,t,i)=>t in e?wo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,Se=(e,t)=>{for(var i in t||(t={}))Zo.call(t,i)&&Ki(e,i,t[i]);if(Wi)for(var i of Wi(t))er.call(t,i)&&Ki(e,i,t[i]);return e},xt=(e,t)=>Go(e,Xo(t)),n=(e,t,i,o)=>{for(var r=o>1?void 0:o?Qo(t,i):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(r=(o?a(t,i,r):a(r))||r);return o&&r&&wo(t,i,r),r},xo=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},tr=(e,t,i)=>(xo(e,t,"read from private field"),t.get(e)),ir=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},or=(e,t,i,o)=>(xo(e,t,"write to private field"),t.set(e,i),i);const It=globalThis,xi=It.ShadowRoot&&(It.ShadyCSS===void 0||It.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,_i=Symbol(),Ji=new WeakMap;let _o=class{constructor(t,i,o){if(this._$cssResult$=!0,o!==_i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(xi&&t===void 0){const o=i!==void 0&&i.length===1;o&&(t=Ji.get(i)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&Ji.set(i,t))}return t}toString(){return this.cssText}};const rr=e=>new _o(typeof e=="string"?e:e+"",void 0,_i),k=(e,...t)=>{const i=e.length===1?e[0]:t.reduce(((o,r,s)=>o+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[s+1]),e[0]);return new _o(i,e,_i)},sr=(e,t)=>{if(xi)e.adoptedStyleSheets=t.map((i=>i instanceof CSSStyleSheet?i:i.styleSheet));else for(const i of t){const o=document.createElement("style"),r=It.litNonce;r!==void 0&&o.setAttribute("nonce",r),o.textContent=i.cssText,e.appendChild(o)}},Gi=xi?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const o of t.cssRules)i+=o.cssText;return rr(i)})(e):e;const{is:ar,defineProperty:nr,getOwnPropertyDescriptor:lr,getOwnPropertyNames:dr,getOwnPropertySymbols:cr,getPrototypeOf:ur}=Object,Wt=globalThis,Qi=Wt.trustedTypes,hr=Qi?Qi.emptyScript:"",pr=Wt.reactiveElementPolyfillSupport,pt=(e,t)=>e,Qe={toAttribute(e,t){switch(t){case Boolean:e=e?hr:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},Ci=(e,t)=>!ar(e,t),Xi={attribute:!0,type:String,converter:Qe,reflect:!1,hasChanged:Ci};Symbol.metadata??=Symbol("metadata"),Wt.litPropertyMetadata??=new WeakMap;class Ke extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=Xi){if(i.state&&(i.attribute=!1),this._$Ei(),this.elementProperties.set(t,i),!i.noAccessor){const o=Symbol(),r=this.getPropertyDescriptor(t,o,i);r!==void 0&&nr(this.prototype,t,r)}}static getPropertyDescriptor(t,i,o){const{get:r,set:s}=lr(this.prototype,t)??{get(){return this[i]},set(a){this[i]=a}};return{get(){return r?.call(this)},set(a){const d=r?.call(this);s.call(this,a),this.requestUpdate(t,d,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Xi}static _$Ei(){if(this.hasOwnProperty(pt("elementProperties")))return;const t=ur(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(pt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(pt("properties"))){const i=this.properties,o=[...dr(i),...cr(i)];for(const r of o)this.createProperty(r,i[r])}const t=this[Symbol.metadata];if(t!==null){const i=litPropertyMetadata.get(t);if(i!==void 0)for(const[o,r]of i)this.elementProperties.set(o,r)}this._$Eh=new Map;for(const[i,o]of this.elementProperties){const r=this._$Eu(i,o);r!==void 0&&this._$Eh.set(r,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const r of o)i.unshift(Gi(r))}else t!==void 0&&i.push(Gi(t));return i}static _$Eu(t,i){const o=i.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,i=this.constructor.elementProperties;for(const o of i.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return sr(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,i,o){this._$AK(t,o)}_$EC(t,i){const o=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,o);if(r!==void 0&&o.reflect===!0){const s=(o.converter?.toAttribute!==void 0?o.converter:Qe).toAttribute(i,o.type);this._$Em=t,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(t,i){const o=this.constructor,r=o._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const s=o.getPropertyOptions(r),a=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:Qe;this._$Em=r,this[r]=a.fromAttribute(i,s.type),this._$Em=null}}requestUpdate(t,i,o){if(t!==void 0){if(o??=this.constructor.getPropertyOptions(t),!(o.hasChanged??Ci)(this[t],i))return;this.P(t,i,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,i,o){this._$AL.has(t)||this._$AL.set(t,i),o.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[r,s]of this._$Ep)this[r]=s;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[r,s]of o)s.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],s)}let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),this._$EO?.forEach((o=>o.hostUpdate?.())),this.update(i)):this._$EU()}catch(o){throw t=!1,this._$EU(),o}t&&this._$AE(i)}willUpdate(t){}_$AE(t){this._$EO?.forEach((i=>i.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((i=>this._$EC(i,this[i]))),this._$EU()}updated(t){}firstUpdated(t){}}Ke.elementStyles=[],Ke.shadowRootOptions={mode:"open"},Ke[pt("elementProperties")]=new Map,Ke[pt("finalized")]=new Map,pr?.({ReactiveElement:Ke}),(Wt.reactiveElementVersions??=[]).push("2.0.4");const ki=globalThis,Mt=ki.trustedTypes,Zi=Mt?Mt.createPolicy("lit-html",{createHTML:e=>e}):void 0,Co="$lit$",ke=`lit$${Math.random().toFixed(9).slice(2)}$`,ko="?"+ke,mr=`<${ko}>`,Me=document,bt=()=>Me.createComment(""),ft=e=>e===null||typeof e!="object"&&typeof e!="function",$i=Array.isArray,br=e=>$i(e)||typeof e?.[Symbol.iterator]=="function",oi=`[ 	
\f\r]`,nt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,eo=/-->/g,to=/>/g,Pe=RegExp(`>|${oi}(?:([^\\s"'>=/]+)(${oi}*=${oi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),io=/'/g,oo=/"/g,$o=/^(?:script|style|textarea|title)$/i,fr=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),h=fr(1),Z=Symbol.for("lit-noChange"),D=Symbol.for("lit-nothing"),ro=new WeakMap,De=Me.createTreeWalker(Me,129);function To(e,t){if(!$i(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Zi!==void 0?Zi.createHTML(t):t}const gr=(e,t)=>{const i=e.length-1,o=[];let r,s=t===2?"<svg>":t===3?"<math>":"",a=nt;for(let d=0;d<i;d++){const c=e[d];let u,p,m=-1,f=0;for(;f<c.length&&(a.lastIndex=f,p=a.exec(c),p!==null);)f=a.lastIndex,a===nt?p[1]==="!--"?a=eo:p[1]!==void 0?a=to:p[2]!==void 0?($o.test(p[2])&&(r=RegExp("</"+p[2],"g")),a=Pe):p[3]!==void 0&&(a=Pe):a===Pe?p[0]===">"?(a=r??nt,m=-1):p[1]===void 0?m=-2:(m=a.lastIndex-p[2].length,u=p[1],a=p[3]===void 0?Pe:p[3]==='"'?oo:io):a===oo||a===io?a=Pe:a===eo||a===to?a=nt:(a=Pe,r=void 0);const b=a===Pe&&e[d+1].startsWith("/>")?" ":"";s+=a===nt?c+mr:m>=0?(o.push(u),c.slice(0,m)+Co+c.slice(m)+ke+b):c+ke+(m===-2?d:b)}return[To(e,s+(e[i]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),o]};class gt{constructor({strings:t,_$litType$:i},o){let r;this.parts=[];let s=0,a=0;const d=t.length-1,c=this.parts,[u,p]=gr(t,i);if(this.el=gt.createElement(u,o),De.currentNode=this.el.content,i===2||i===3){const m=this.el.content.firstChild;m.replaceWith(...m.childNodes)}for(;(r=De.nextNode())!==null&&c.length<d;){if(r.nodeType===1){if(r.hasAttributes())for(const m of r.getAttributeNames())if(m.endsWith(Co)){const f=p[a++],b=r.getAttribute(m).split(ke),v=/([.?@])?(.*)/.exec(f);c.push({type:1,index:s,name:v[2],strings:b,ctor:v[1]==="."?yr:v[1]==="?"?wr:v[1]==="@"?xr:Kt}),r.removeAttribute(m)}else m.startsWith(ke)&&(c.push({type:6,index:s}),r.removeAttribute(m));if($o.test(r.tagName)){const m=r.textContent.split(ke),f=m.length-1;if(f>0){r.textContent=Mt?Mt.emptyScript:"";for(let b=0;b<f;b++)r.append(m[b],bt()),De.nextNode(),c.push({type:2,index:++s});r.append(m[f],bt())}}}else if(r.nodeType===8)if(r.data===ko)c.push({type:2,index:s});else{let m=-1;for(;(m=r.data.indexOf(ke,m+1))!==-1;)c.push({type:7,index:s}),m+=ke.length-1}s++}}static createElement(t,i){const o=Me.createElement("template");return o.innerHTML=t,o}}function Xe(e,t,i=e,o){if(t===Z)return t;let r=o!==void 0?i._$Co?.[o]:i._$Cl;const s=ft(t)?void 0:t._$litDirective$;return r?.constructor!==s&&(r?._$AO?.(!1),s===void 0?r=void 0:(r=new s(e),r._$AT(e,i,o)),o!==void 0?(i._$Co??=[])[o]=r:i._$Cl=r),r!==void 0&&(t=Xe(e,r._$AS(e,t.values),r,o)),t}class vr{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:o}=this._$AD,r=(t?.creationScope??Me).importNode(i,!0);De.currentNode=r;let s=De.nextNode(),a=0,d=0,c=o[0];for(;c!==void 0;){if(a===c.index){let u;c.type===2?u=new _t(s,s.nextSibling,this,t):c.type===1?u=new c.ctor(s,c.name,c.strings,this,t):c.type===6&&(u=new _r(s,this,t)),this._$AV.push(u),c=o[++d]}a!==c?.index&&(s=De.nextNode(),a++)}return De.currentNode=Me,r}p(t){let i=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,i),i+=o.strings.length-2):o._$AI(t[i])),i++}}class _t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,o,r){this.type=2,this._$AH=D,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=o,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&t?.nodeType===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=Xe(this,t,i),ft(t)?t===D||t==null||t===""?(this._$AH!==D&&this._$AR(),this._$AH=D):t!==this._$AH&&t!==Z&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):br(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==D&&ft(this._$AH)?this._$AA.nextSibling.data=t:this.T(Me.createTextNode(t)),this._$AH=t}$(t){const{values:i,_$litType$:o}=t,r=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=gt.createElement(To(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===r)this._$AH.p(i);else{const s=new vr(r,this),a=s.u(this.options);s.p(i),this.T(a),this._$AH=s}}_$AC(t){let i=ro.get(t.strings);return i===void 0&&ro.set(t.strings,i=new gt(t)),i}k(t){$i(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let o,r=0;for(const s of t)r===i.length?i.push(o=new _t(this.O(bt()),this.O(bt()),this,this.options)):o=i[r],o._$AI(s),r++;r<i.length&&(this._$AR(o&&o._$AB.nextSibling,r),i.length=r)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Kt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,o,r,s){this.type=1,this._$AH=D,this._$AN=void 0,this.element=t,this.name=i,this._$AM=r,this.options=s,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=D}_$AI(t,i=this,o,r){const s=this.strings;let a=!1;if(s===void 0)t=Xe(this,t,i,0),a=!ft(t)||t!==this._$AH&&t!==Z,a&&(this._$AH=t);else{const d=t;let c,u;for(t=s[0],c=0;c<s.length-1;c++)u=Xe(this,d[o+c],i,c),u===Z&&(u=this._$AH[c]),a||=!ft(u)||u!==this._$AH[c],u===D?t=D:t!==D&&(t+=(u??"")+s[c+1]),this._$AH[c]=u}a&&!r&&this.j(t)}j(t){t===D?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class yr extends Kt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===D?void 0:t}}class wr extends Kt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==D)}}class xr extends Kt{constructor(t,i,o,r,s){super(t,i,o,r,s),this.type=5}_$AI(t,i=this){if((t=Xe(this,t,i,0)??D)===Z)return;const o=this._$AH,r=t===D&&o!==D||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==D&&(o===D||r);r&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class _r{constructor(t,i,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){Xe(this,t)}}const Cr=ki.litHtmlPolyfillSupport;Cr?.(gt,_t),(ki.litHtmlVersions??=[]).push("3.2.1");const kr=(e,t,i)=>{const o=i?.renderBefore??t;let r=o._$litPart$;if(r===void 0){const s=i?.renderBefore??null;o._$litPart$=r=new _t(t.insertBefore(bt(),s),s,void 0,i??{})}return r._$AI(e),r};let P=class extends Ke{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=kr(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Z}};P._$litElement$=!0,P.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:P});const $r=globalThis.litElementPolyfillSupport;$r?.({LitElement:P});(globalThis.litElementVersions??=[]).push("4.1.1");const M=e=>(t,i)=>{i!==void 0?i.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)};const Tr={attribute:!0,type:String,converter:Qe,reflect:!1,hasChanged:Ci},Ar=(e=Tr,t,i)=>{const{kind:o,metadata:r}=i;let s=globalThis.litPropertyMetadata.get(r);if(s===void 0&&globalThis.litPropertyMetadata.set(r,s=new Map),s.set(i.name,e),o==="accessor"){const{name:a}=i;return{set(d){const c=t.get.call(this);t.set.call(this,d),this.requestUpdate(a,c,e)},init(d){return d!==void 0&&this.P(a,void 0,e),d}}}if(o==="setter"){const{name:a}=i;return function(d){const c=this[a];t.call(this,d),this.requestUpdate(a,c,e)}}throw Error("Unsupported decorator location: "+o)};function l(e){return(t,i)=>typeof i=="object"?Ar(e,t,i):((o,r,s)=>{const a=r.hasOwnProperty(s);return r.constructor.createProperty(s,a?{...o,wrapped:!0}:o),a?Object.getOwnPropertyDescriptor(r,s):void 0})(e,t,i)}function g(e){return l({...e,state:!0,attribute:!1})}const Er=(e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,i),i);function R(e,t){return(i,o,r)=>{const s=a=>a.renderRoot?.querySelector(e)??null;return Er(i,o,{get(){return s(this)}})}}const Sr="modulepreload",zr=function(e,t){return new URL(e,t).href},so={},Ao=function(t,i,o){let r=Promise.resolve();if(i&&i.length>0){let u=function(p){return Promise.all(p.map(m=>Promise.resolve(m).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};const a=document.getElementsByTagName("link"),d=document.querySelector("meta[property=csp-nonce]"),c=d?.nonce||d?.getAttribute("nonce");r=u(i.map(p=>{if(p=zr(p,o),p in so)return;so[p]=!0;const m=p.endsWith(".css"),f=m?'[rel="stylesheet"]':"";if(o)for(let v=a.length-1;v>=0;v--){const y=a[v];if(y.href===p&&(!m||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${p}"]${f}`))return;const b=document.createElement("link");if(b.rel=m?"stylesheet":Sr,m||(b.as="script"),b.crossOrigin="",b.href=p,c&&b.setAttribute("nonce",c),document.head.appendChild(b),m)return new Promise((v,y)=>{b.addEventListener("load",v),b.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${p}`)))})}))}function s(a){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=a,window.dispatchEvent(d),!d.defaultPrevented)throw a}return r.then(a=>{for(const d of a||[])d.status==="rejected"&&s(d.reason);return t().catch(s)})},Ti=Symbol.for("app-tools::log::1.x");globalThis[Ti]={setDebug:Pr,debug:"window"in globalThis?new URL(window.location.href).searchParams.has("app-tools-debug"):!1};function Pr(e){globalThis[Ti].debug=!!e}function Ir(e,t){globalThis[Ti].debug&&(console.groupCollapsed(`[app-tools] ${e}`),t&&console.log(t),console.groupEnd())}function Dr(e){return(t,i)=>{Ir(`${e}: ${t}`,i)}}const _e=Dr("router");class Nr extends Event{constructor(t){super("route-changed"),this.context=t}}class Or extends EventTarget{context={params:{},query:{},title:"",url:new URL(window.location.href)};constructor(t){super(),this.config=t,this.routes=t.routes.map(i=>({...i,urlPattern:new URLPattern({pathname:i.path,baseURL:window.location.href,search:"*",hash:"*"})})),_e("Initialized routes",this.routes),queueMicrotask(()=>{this.navigate(new URL(window.location.href),{replace:!0})}),window.addEventListener("popstate",this._onPopState),window.addEventListener("click",this._onAnchorClick)}uninstall(){window.removeEventListener("popstate",this._onPopState),window.removeEventListener("click",this._onAnchorClick)}get url(){return new URL(window.location.href)}get fallback(){return new URL(this.config?.fallback||this.baseUrl.href.substring(window.location.origin.length),this.baseUrl)}get baseUrl(){return new URL("./",document.baseURI)}render(){return _e(`Rendering route ${this.context.url.pathname}${this.context.url.search}${this.context.url.hash}`,{context:this.context,route:this.route}),this.route?.render?.(this.context)}_matchRoute(t){for(const i of this.routes){const o=i.urlPattern.exec(t);if(o){const{title:r}=i,s=Object.fromEntries(new URLSearchParams(t.search)),a=o?.pathname?.groups??{};return this.context={url:t,title:typeof r=="function"?r({params:a,query:s,url:t}):r,params:a,query:s},i}}return _e(`No route matched for ${t.pathname}${t.search}${t.hash}`,t),null}_notifyUrlChanged(){this.dispatchEvent(new Nr(this.context))}_onPopState=()=>{this.navigate(new URL(window.location.href),{backNav:!0})};_onAnchorClick=t=>{if(t.defaultPrevented||t.button!==0||t.metaKey||t.ctrlKey||t.shiftKey)return;const i=t.composedPath().find(s=>s.tagName==="A");if(!i||!i.href)return;const o=new URL(i.href);if(this.url.href===o.href||o.host!==window.location.host||i.hasAttribute("download")||i.href.includes("mailto:"))return;const r=i.getAttribute("target");r&&r!==""&&r!=="_self"||(t.preventDefault(),this.navigate(o))};_collectPlugins(t){return[...this.config?.plugins??[],...t?.plugins??[]]}async navigate(t,i={}){typeof t=="string"&&(t=new URL(t,this.baseUrl));let o=this._matchRoute(t)||this._matchRoute(this.fallback);_e(`Navigating to ${t.pathname}${t.search}${t.hash}`,{context:this.context,route:this.route});let r=this._collectPlugins(o);for(const s of r)try{const a=await s?.shouldNavigate?.(this.context);a&&(await a.condition()||(t=new URL(a.redirect,this.baseUrl),o=this._matchRoute(t)||this._matchRoute(this.fallback),r=this._collectPlugins(o),_e("Redirecting",{context:this.context,route:this.route})))}catch(a){throw _e(`Plugin "${s.name}" error on shouldNavigate hook`,a),a}if(this.route=o,!this.route)throw new Error(`[ROUTER] No route or fallback matched for url ${t}`);for(const s of r)try{await s?.beforeNavigation?.(this.context)}catch(a){throw _e(`Plugin "${s.name}" error on beforeNavigation hook`,a),a}i?.replace?window.history.replaceState(null,"",`${t.pathname}${t.search}${t.hash}`):i.backNav||window.history.pushState(null,"",`${t.pathname}${t.search}${t.hash}`),document.title=this.context.title,this._notifyUrlChanged();for(const s of r)try{await s?.afterNavigation?.(this.context)}catch(a){throw _e(`Plugin "${s.name}" error on afterNavigation hook`,a),a}}}function Mr(e){return{name:"lazy",beforeNavigation:()=>{e()}}}var Rr=k`
  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,it=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=i=>{const o=i.target;(this.slotNames.includes("[default]")&&!o.name||o.name&&this.slotNames.includes(o.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function Lr(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let i="";return[...t].forEach(o=>{o.nodeType===Node.TEXT_NODE&&(i+=o.textContent)}),i}var q=k`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,Dt,N=class extends P{constructor(){super(),ir(this,Dt,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const i=new CustomEvent(e,Se({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(i),i}static define(e,t=this,i={}){const o=customElements.get(e);if(!o){try{customElements.define(e,t,i)}catch{customElements.define(e,class extends t{},i)}return}let r=" (unknown version)",s=r;"version"in t&&t.version&&(r=" v"+t.version),"version"in o&&o.version&&(s=" v"+o.version),!(r&&s&&r===s)&&console.warn(`Attempted to register <${e}>${r}, but <${e}>${s} has already been registered.`)}attributeChangedCallback(e,t,i){tr(this,Dt)||(this.constructor.elementProperties.forEach((o,r)=>{o.reflect&&this[r]!=null&&this.initialReflectedProperties.set(r,this[r])}),or(this,Dt,!0)),super.attributeChangedCallback(e,t,i)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,i)=>{e.has(i)&&this[i]==null&&(this[i]=t)})}};Dt=new WeakMap;N.version="2.18.0";N.dependencies={};n([l()],N.prototype,"dir",2);n([l()],N.prototype,"lang",2);const Ce={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},Ai=e=>(...t)=>({_$litDirective$:e,values:t});let Ei=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,o){this._$Ct=t,this._$AM=i,this._$Ci=o}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}};const V=Ai(class extends Ei{constructor(e){if(super(e),e.type!==Ce.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((o=>o!==""))));for(const o in t)t[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(t)}const i=e.element.classList;for(const o of this.st)o in t||(i.remove(o),this.st.delete(o));for(const o in t){const r=!!t[o];r===this.st.has(o)||this.nt?.has(o)||(r?(i.add(o),this.st.add(o)):(i.remove(o),this.st.delete(o)))}return Z}});var Eo=class extends N{constructor(){super(...arguments),this.hasSlotController=new it(this,"footer","header","image")}render(){return h`
      <div
        part="base"
        class=${V({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};Eo.styles=[q,Rr];Eo.define("sl-card");var Br=k`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`;const pi=new Set,Je=new Map;let Ie,Si="ltr",zi="en";const So=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(So){const e=new MutationObserver(Po);Si=document.documentElement.dir||"ltr",zi=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function zo(...e){e.map(t=>{const i=t.$code.toLowerCase();Je.has(i)?Je.set(i,Object.assign(Object.assign({},Je.get(i)),t)):Je.set(i,t),Ie||(Ie=t)}),Po()}function Po(){So&&(Si=document.documentElement.dir||"ltr",zi=document.documentElement.lang||navigator.language),[...pi.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let Fr=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){pi.add(this.host)}hostDisconnected(){pi.delete(this.host)}dir(){return`${this.host.dir||Si}`.toLowerCase()}lang(){return`${this.host.lang||zi}`.toLowerCase()}getTranslationData(t){var i,o;const r=new Intl.Locale(t.replace(/_/g,"-")),s=r?.language.toLowerCase(),a=(o=(i=r?.region)===null||i===void 0?void 0:i.toLowerCase())!==null&&o!==void 0?o:"",d=Je.get(`${s}-${a}`),c=Je.get(s);return{locale:r,language:s,region:a,primary:d,secondary:c}}exists(t,i){var o;const{primary:r,secondary:s}=this.getTranslationData((o=i.lang)!==null&&o!==void 0?o:this.lang());return i=Object.assign({includeFallback:!1},i),!!(r&&r[t]||s&&s[t]||i.includeFallback&&Ie&&Ie[t])}term(t,...i){const{primary:o,secondary:r}=this.getTranslationData(this.lang());let s;if(o&&o[t])s=o[t];else if(r&&r[t])s=r[t];else if(Ie&&Ie[t])s=Ie[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof s=="function"?s(...i):s}date(t,i){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),i).format(t)}number(t,i){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),i).format(t)}relativeTime(t,i,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(t,i)}};var Io={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};zo(Io);var Ur=Io,je=class extends Fr{};zo(Ur);var Pi=class extends N{constructor(){super(...arguments),this.localize=new je(this)}render(){return h`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Pi.styles=[q,Br];var lt=new WeakMap,dt=new WeakMap,ct=new WeakMap,ri=new WeakSet,St=new WeakMap,Jt=class{constructor(e,t){this.handleFormData=i=>{const o=this.options.disabled(this.host),r=this.options.name(this.host),s=this.options.value(this.host),a=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!o&&!a&&typeof r=="string"&&r.length>0&&typeof s<"u"&&(Array.isArray(s)?s.forEach(d=>{i.formData.append(r,d.toString())}):i.formData.append(r,s.toString()))},this.handleFormSubmit=i=>{var o;const r=this.options.disabled(this.host),s=this.options.reportValidity;this.form&&!this.form.noValidate&&((o=lt.get(this.form))==null||o.forEach(a=>{this.setUserInteracted(a,!0)})),this.form&&!this.form.noValidate&&!r&&!s(this.host)&&(i.preventDefault(),i.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),St.set(this.host,[])},this.handleInteraction=i=>{const o=St.get(this.host);o.includes(i.type)||o.push(i.type),o.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const o of i)if(typeof o.checkValidity=="function"&&!o.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const o of i)if(typeof o.reportValidity=="function"&&!o.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=Se({form:i=>{const o=i.form;if(o){const s=i.getRootNode().querySelector(`#${o}`);if(s)return s}return i.closest("form")},name:i=>i.name,value:i=>i.value,defaultValue:i=>i.defaultValue,disabled:i=>{var o;return(o=i.disabled)!=null?o:!1},reportValidity:i=>typeof i.reportValidity=="function"?i.reportValidity():!0,checkValidity:i=>typeof i.checkValidity=="function"?i.checkValidity():!0,setValue:(i,o)=>i.value=o,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),St.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),St.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,lt.has(this.form)?lt.get(this.form).add(this.host):lt.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),dt.has(this.form)||(dt.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),ct.has(this.form)||(ct.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=lt.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),dt.has(this.form)&&(this.form.reportValidity=dt.get(this.form),dt.delete(this.form)),ct.has(this.form)&&(this.form.checkValidity=ct.get(this.form),ct.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?ri.add(e):ri.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const i=document.createElement("button");i.type=e,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",t&&(i.name=t.name,i.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(o=>{t.hasAttribute(o)&&i.setAttribute(o,t.getAttribute(o))})),this.form.append(i),i.click(),i.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,i=!!ri.has(t),o=!!t.required;t.toggleAttribute("data-required",o),t.toggleAttribute("data-optional",!o),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&i),t.toggleAttribute("data-user-valid",e&&i)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e?.preventDefault()}},Ii=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(xt(Se({},Ii),{valid:!1,valueMissing:!0}));Object.freeze(xt(Se({},Ii),{valid:!1,customError:!0}));var jr=k`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`,Vr={name:"default",resolver:e=>Jo(`assets/icons/${e}.svg`)},qr=Vr,ao={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},Hr={name:"system",resolver:e=>e in ao?`data:image/svg+xml,${encodeURIComponent(ao[e])}`:""},Yr=Hr,Wr=[qr,Yr],mi=[];function Kr(e){mi.push(e)}function Jr(e){mi=mi.filter(t=>t!==e)}function no(e){return Wr.find(t=>t.name===e)}var Gr=k`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;function L(e,t){const i=Se({waitUntilFirstUpdate:!1},t);return(o,r)=>{const{update:s}=o,a=Array.isArray(e)?e:[e];o.update=function(d){a.forEach(c=>{const u=c;if(d.has(u)){const p=d.get(u),m=this[u];p!==m&&(!i.waitUntilFirstUpdate||this.hasUpdated)&&this[r](p,m)}}),s.call(this,d)}}}const Qr=(e,t)=>e?._$litType$!==void 0,Do=e=>e.strings===void 0,Xr={},Zr=(e,t=Xr)=>e._$AH=t;var ut=Symbol(),zt=Symbol(),si,ai=new Map,H=class extends N{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var i;let o;if(t?.spriteSheet)return this.svg=h`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,this.svg;try{if(o=await fetch(e,{mode:"cors"}),!o.ok)return o.status===410?ut:zt}catch{return zt}try{const r=document.createElement("div");r.innerHTML=await o.text();const s=r.firstElementChild;if(((i=s?.tagName)==null?void 0:i.toLowerCase())!=="svg")return ut;si||(si=new DOMParser);const d=si.parseFromString(s.outerHTML,"text/html").body.querySelector("svg");return d?(d.part.add("svg"),document.adoptNode(d)):ut}catch{return ut}}connectedCallback(){super.connectedCallback(),Kr(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Jr(this)}getIconSource(){const e=no(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:i}=this.getIconSource(),o=i?no(this.library):void 0;if(!t){this.svg=null;return}let r=ai.get(t);if(r||(r=this.resolveIcon(t,o),ai.set(t,r)),!this.initialRender)return;const s=await r;if(s===zt&&ai.delete(t),t===this.getIconSource().url){if(Qr(s)){if(this.svg=s,o){await this.updateComplete;const a=this.shadowRoot.querySelector("[part='svg']");typeof o.mutator=="function"&&a&&o.mutator(a)}return}switch(s){case zt:case ut:this.svg=null,this.emit("sl-error");break;default:this.svg=s.cloneNode(!0),(e=o?.mutator)==null||e.call(o,this.svg),this.emit("sl-load")}}}render(){return this.svg}};H.styles=[q,Gr];n([g()],H.prototype,"svg",2);n([l({reflect:!0})],H.prototype,"name",2);n([l()],H.prototype,"src",2);n([l()],H.prototype,"label",2);n([l({reflect:!0})],H.prototype,"library",2);n([L("label")],H.prototype,"handleLabelChange",1);n([L(["name","src","library"])],H.prototype,"setIcon",1);const No=Symbol.for(""),es=e=>{if(e?.r===No)return e?._$litStatic$},Rt=(e,...t)=>({_$litStatic$:t.reduce(((i,o,r)=>i+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+e[r+1]),e[0]),r:No}),lo=new Map,ts=e=>(t,...i)=>{const o=i.length;let r,s;const a=[],d=[];let c,u=0,p=!1;for(;u<o;){for(c=t[u];u<o&&(s=i[u],(r=es(s))!==void 0);)c+=r+t[++u],p=!0;u!==o&&d.push(s),a.push(c),u++}if(u===o&&a.push(t[o]),p){const m=a.join("$$lit$$");(t=lo.get(m))===void 0&&(a.raw=a,lo.set(m,t=a)),i=d}return e(t,...i)},Nt=ts(h);const w=e=>e??D;var E=class extends N{constructor(){super(...arguments),this.formControlController=new Jt(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new it(this,"[default]","prefix","suffix"),this.localize=new je(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Ii}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?Rt`a`:Rt`button`;return Nt`
      <${t}
        part="base"
        class=${V({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${w(e?void 0:this.disabled)}
        type=${w(e?void 0:this.type)}
        title=${this.title}
        name=${w(e?void 0:this.name)}
        value=${w(e?void 0:this.value)}
        href=${w(e&&!this.disabled?this.href:void 0)}
        target=${w(e?this.target:void 0)}
        download=${w(e?this.download:void 0)}
        rel=${w(e?this.rel:void 0)}
        role=${w(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?Nt` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Nt`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};E.styles=[q,jr];E.dependencies={"sl-icon":H,"sl-spinner":Pi};n([R(".button")],E.prototype,"button",2);n([g()],E.prototype,"hasFocus",2);n([g()],E.prototype,"invalid",2);n([l()],E.prototype,"title",2);n([l({reflect:!0})],E.prototype,"variant",2);n([l({reflect:!0})],E.prototype,"size",2);n([l({type:Boolean,reflect:!0})],E.prototype,"caret",2);n([l({type:Boolean,reflect:!0})],E.prototype,"disabled",2);n([l({type:Boolean,reflect:!0})],E.prototype,"loading",2);n([l({type:Boolean,reflect:!0})],E.prototype,"outline",2);n([l({type:Boolean,reflect:!0})],E.prototype,"pill",2);n([l({type:Boolean,reflect:!0})],E.prototype,"circle",2);n([l()],E.prototype,"type",2);n([l()],E.prototype,"name",2);n([l()],E.prototype,"value",2);n([l()],E.prototype,"href",2);n([l()],E.prototype,"target",2);n([l()],E.prototype,"rel",2);n([l()],E.prototype,"download",2);n([l()],E.prototype,"form",2);n([l({attribute:"formaction"})],E.prototype,"formAction",2);n([l({attribute:"formenctype"})],E.prototype,"formEnctype",2);n([l({attribute:"formmethod"})],E.prototype,"formMethod",2);n([l({attribute:"formnovalidate",type:Boolean})],E.prototype,"formNoValidate",2);n([l({attribute:"formtarget"})],E.prototype,"formTarget",2);n([L("disabled",{waitUntilFirstUpdate:!0})],E.prototype,"handleDisabledChange",1);E.define("sl-button");H.define("sl-icon");const Ct=k`
  @media(min-width: 1000px) {
    sl-card {
      max-width: 70vw;
    }
  }

  main {
    margin-top: 34px;
    padding: 12px;
  }
`;var is=Object.getOwnPropertyDescriptor,os=(e,t,i,o)=>{for(var r=o>1?void 0:o?is(t,i):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(r=a(r)||r);return r};let bi=class extends P{render(){return h`
      <app-header></app-header>

      <main>
        <h1>Our Services</h1>
        <p>Discover what CaydenJoy can do for you.</p>

        <div id="servicesContainer">
          <sl-card>
            <div slot="header">
              <div class="service-icon">📱</div>
              <h3>Responsive Design</h3>
            </div>
            <p>Access CaydenJoy on any device. Our responsive design ensures a perfect experience on mobile, tablet, and desktop.</p>
            <ul class="feature-list">
              <li>Mobile optimized</li>
              <li>Tablet friendly</li>
              <li>Desktop ready</li>
            </ul>
          </sl-card>

          <sl-card>
            <div slot="header">
              <div class="service-icon">🔌</div>
              <h3>Offline Support</h3>
            </div>
            <p>Work offline and sync when you're back online. CaydenJoy works seamlessly with or without internet connection.</p>
            <ul class="feature-list">
              <li>Offline mode</li>
              <li>Auto-sync</li>
              <li>Data persistence</li>
            </ul>
          </sl-card>

          <sl-card>
            <div slot="header">
              <div class="service-icon">🚀</div>
              <h3>Fast & Reliable</h3>
            </div>
            <p>Experience lightning-fast performance with optimized loading times and reliable service.</p>
            <ul class="feature-list">
              <li>Quick loading</li>
              <li>Smooth animations</li>
              <li>99.9% uptime</li>
            </ul>
          </sl-card>

          <sl-card>
            <div slot="header">
              <div class="service-icon">🔔</div>
              <h3>Push Notifications</h3>
            </div>
            <p>Stay updated with real-time notifications. Never miss important updates and events.</p>
            <ul class="feature-list">
              <li>Real-time alerts</li>
              <li>Custom messaging</li>
              <li>Smart scheduling</li>
            </ul>
          </sl-card>

          <sl-card>
            <div slot="header">
              <div class="service-icon">🔒</div>
              <h3>Secure & Private</h3>
            </div>
            <p>Your data is encrypted and protected. We prioritize your privacy and security.</p>
            <ul class="feature-list">
              <li>Data encryption</li>
              <li>Privacy first</li>
              <li>Secure storage</li>
            </ul>
          </sl-card>

          <sl-card>
            <div slot="header">
              <div class="service-icon">⚡</div>
              <h3>Install Anywhere</h3>
            </div>
            <p>Install CaydenJoy directly from your browser. Add it to your home screen like a native app.</p>
            <ul class="feature-list">
              <li>One-click install</li>
              <li>Native feel</li>
              <li>Easy uninstall</li>
            </ul>
          </sl-card>
        </div>

        <div style="text-align: center; margin-top: 48px;">
          <sl-button href="${x()}" variant="primary">Back to Home</sl-button>
        </div>
      </main>
    `}};bi.styles=[Ct,k`
      main {
        padding: 20px;
      }

      #servicesContainer {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 24px;
        margin-top: 24px;
      }

      sl-card {
        height: 100%;
        display: flex;
        flex-direction: column;
      }

      sl-card::part(body) {
        flex: 1;
      }

      .service-icon {
        font-size: 48px;
        margin-bottom: 16px;
      }

      h3 {
        margin-top: 0;
        color: #6C5CE7;
      }

      p {
        flex-grow: 1;
        margin-bottom: 16px;
      }

      sl-button {
        width: 100%;
      }

      .feature-list {
        list-style: none;
        padding: 0;
        margin: 12px 0;
      }

      .feature-list li {
        padding: 8px 0;
        border-bottom: 1px solid #e9ecef;
      }

      .feature-list li:before {
        content: "✓ ";
        color: #6C5CE7;
        font-weight: bold;
        margin-right: 8px;
      }
    `];bi=os([M("app-services")],bi);var rs=k`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,Di=(e="value")=>(t,i)=>{const o=t.constructor,r=o.prototype.attributeChangedCallback;o.prototype.attributeChangedCallback=function(s,a,d){var c;const u=o.getPropertyOptions(e),p=typeof u.attribute=="string"?u.attribute:e;if(s===p){const m=u.converter||Qe,b=(typeof m=="function"?m:(c=m?.fromAttribute)!=null?c:Qe.fromAttribute)(d,u.type);this[e]!==b&&(this[i]=b)}r.call(this,s,a,d)}},Ni=k`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`;const Oi=Ai(class extends Ei{constructor(e){if(super(e),e.type!==Ce.PROPERTY&&e.type!==Ce.ATTRIBUTE&&e.type!==Ce.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Do(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===Z||t===D)return t;const i=e.element,o=e.name;if(e.type===Ce.PROPERTY){if(t===i[o])return Z}else if(e.type===Ce.BOOLEAN_ATTRIBUTE){if(!!t===i.hasAttribute(o))return Z}else if(e.type===Ce.ATTRIBUTE&&i.getAttribute(o)===t+"")return Z;return Zr(e),t}});var _=class extends N{constructor(){super(...arguments),this.formControlController=new Jt(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new it(this,"help-text","label"),this.localize=new je(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var e;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((e=this.input)==null?void 0:e.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){var e;return this.__numberInput.value=this.value,((e=this.input)==null?void 0:e.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(e){e.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleKeyDown(e){const t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!t&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,i="none"){this.input.setSelectionRange(e,t,i)}setRangeText(e,t,i,o="preserve"){const r=t??this.input.selectionStart,s=i??this.input.selectionEnd;this.input.setRangeText(e,r,s,o),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),i=this.label?!0:!!e,o=this.helpText?!0:!!t,s=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return h`
      <div
        part="form-control"
        class=${V({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":o})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${V({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${w(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${w(this.placeholder)}
              minlength=${w(this.minlength)}
              maxlength=${w(this.maxlength)}
              min=${w(this.min)}
              max=${w(this.max)}
              step=${w(this.step)}
              .value=${Oi(this.value)}
              autocapitalize=${w(this.autocapitalize)}
              autocomplete=${w(this.autocomplete)}
              autocorrect=${w(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${w(this.pattern)}
              enterkeyhint=${w(this.enterkeyhint)}
              inputmode=${w(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${s?h`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?h`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?h`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:h`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};_.styles=[q,Ni,rs];_.dependencies={"sl-icon":H};n([R(".input__control")],_.prototype,"input",2);n([g()],_.prototype,"hasFocus",2);n([l()],_.prototype,"title",2);n([l({reflect:!0})],_.prototype,"type",2);n([l()],_.prototype,"name",2);n([l()],_.prototype,"value",2);n([Di()],_.prototype,"defaultValue",2);n([l({reflect:!0})],_.prototype,"size",2);n([l({type:Boolean,reflect:!0})],_.prototype,"filled",2);n([l({type:Boolean,reflect:!0})],_.prototype,"pill",2);n([l()],_.prototype,"label",2);n([l({attribute:"help-text"})],_.prototype,"helpText",2);n([l({type:Boolean})],_.prototype,"clearable",2);n([l({type:Boolean,reflect:!0})],_.prototype,"disabled",2);n([l()],_.prototype,"placeholder",2);n([l({type:Boolean,reflect:!0})],_.prototype,"readonly",2);n([l({attribute:"password-toggle",type:Boolean})],_.prototype,"passwordToggle",2);n([l({attribute:"password-visible",type:Boolean})],_.prototype,"passwordVisible",2);n([l({attribute:"no-spin-buttons",type:Boolean})],_.prototype,"noSpinButtons",2);n([l({reflect:!0})],_.prototype,"form",2);n([l({type:Boolean,reflect:!0})],_.prototype,"required",2);n([l()],_.prototype,"pattern",2);n([l({type:Number})],_.prototype,"minlength",2);n([l({type:Number})],_.prototype,"maxlength",2);n([l()],_.prototype,"min",2);n([l()],_.prototype,"max",2);n([l()],_.prototype,"step",2);n([l()],_.prototype,"autocapitalize",2);n([l()],_.prototype,"autocorrect",2);n([l()],_.prototype,"autocomplete",2);n([l({type:Boolean})],_.prototype,"autofocus",2);n([l()],_.prototype,"enterkeyhint",2);n([l({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],_.prototype,"spellcheck",2);n([l()],_.prototype,"inputmode",2);n([L("disabled",{waitUntilFirstUpdate:!0})],_.prototype,"handleDisabledChange",1);n([L("step",{waitUntilFirstUpdate:!0})],_.prototype,"handleStepChange",1);n([L("value",{waitUntilFirstUpdate:!0})],_.prototype,"handleValueChange",1);_.define("sl-input");var ss=k`
  :host {
    display: block;
  }

  .textarea {
    display: grid;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control,
  .textarea__size-adjuster {
    grid-area: 1 / 1 / 2 / 2;
  }

  .textarea__size-adjuster {
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`,T=class extends N{constructor(){super(...arguments),this.formControlController=new Jt(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new it(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){var e;super.disconnectedCallback(),this.input&&((e=this.resizeObserver)==null||e.unobserve(this.input))}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}setTextareaHeight(){this.resize==="auto"?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=void 0}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top=="number"&&(this.input.scrollTop=e.top),typeof e.left=="number"&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,i="none"){this.input.setSelectionRange(e,t,i)}setRangeText(e,t,i,o="preserve"){const r=t??this.input.selectionStart,s=i??this.input.selectionEnd;this.input.setRangeText(e,r,s,o),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),i=this.label?!0:!!e,o=this.helpText?!0:!!t;return h`
      <div
        part="form-control"
        class=${V({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":o})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${V({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${w(this.name)}
              .value=${Oi(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${w(this.placeholder)}
              rows=${w(this.rows)}
              minlength=${w(this.minlength)}
              maxlength=${w(this.maxlength)}
              autocapitalize=${w(this.autocapitalize)}
              autocorrect=${w(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${w(this.spellcheck)}
              enterkeyhint=${w(this.enterkeyhint)}
              inputmode=${w(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
            <!-- This "adjuster" exists to prevent layout shifting. https://github.com/shoelace-style/shoelace/issues/2180 -->
            <div part="textarea-adjuster" class="textarea__size-adjuster" ?hidden=${this.resize!=="auto"}></div>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};T.styles=[q,Ni,ss];n([R(".textarea__control")],T.prototype,"input",2);n([R(".textarea__size-adjuster")],T.prototype,"sizeAdjuster",2);n([g()],T.prototype,"hasFocus",2);n([l()],T.prototype,"title",2);n([l()],T.prototype,"name",2);n([l()],T.prototype,"value",2);n([l({reflect:!0})],T.prototype,"size",2);n([l({type:Boolean,reflect:!0})],T.prototype,"filled",2);n([l()],T.prototype,"label",2);n([l({attribute:"help-text"})],T.prototype,"helpText",2);n([l()],T.prototype,"placeholder",2);n([l({type:Number})],T.prototype,"rows",2);n([l()],T.prototype,"resize",2);n([l({type:Boolean,reflect:!0})],T.prototype,"disabled",2);n([l({type:Boolean,reflect:!0})],T.prototype,"readonly",2);n([l({reflect:!0})],T.prototype,"form",2);n([l({type:Boolean,reflect:!0})],T.prototype,"required",2);n([l({type:Number})],T.prototype,"minlength",2);n([l({type:Number})],T.prototype,"maxlength",2);n([l()],T.prototype,"autocapitalize",2);n([l()],T.prototype,"autocorrect",2);n([l()],T.prototype,"autocomplete",2);n([l({type:Boolean})],T.prototype,"autofocus",2);n([l()],T.prototype,"enterkeyhint",2);n([l({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],T.prototype,"spellcheck",2);n([l()],T.prototype,"inputmode",2);n([Di()],T.prototype,"defaultValue",2);n([L("disabled",{waitUntilFirstUpdate:!0})],T.prototype,"handleDisabledChange",1);n([L("rows",{waitUntilFirstUpdate:!0})],T.prototype,"handleRowsChange",1);n([L("value",{waitUntilFirstUpdate:!0})],T.prototype,"handleValueChange",1);T.define("sl-textarea");var as=Object.defineProperty,ns=Object.getOwnPropertyDescriptor,kt=(e,t,i,o)=>{for(var r=o>1?void 0:o?ns(t,i):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(r=(o?a(t,i,r):a(r))||r);return o&&r&&as(t,i,r),r};let Re=class extends P{constructor(){super(...arguments),this.name="",this.email="",this.message="",this.submitted=!1}handleSubmit(e){if(e.preventDefault(),!this.name||!this.email||!this.message){alert("Please fill in all fields");return}console.log("Form submitted:",{name:this.name,email:this.email,message:this.message,timestamp:new Date().toISOString()}),localStorage.setItem("lastContact",JSON.stringify({name:this.name,email:this.email,message:this.message,timestamp:new Date().toISOString()})),this.submitted=!0,this.resetForm(),setTimeout(()=>{this.submitted=!1},3e3)}resetForm(){this.name="",this.email="",this.message=""}render(){return h`
      <app-header></app-header>

      <main>
        <h1>Contact Us</h1>
        <p>Have questions or feedback? We'd love to hear from you!</p>

        ${this.submitted?h`
          <div class="success-message">
            ✓ Thank you! Your message has been received. We'll get back to you soon.
          </div>
        `:""}

        <sl-card>
          <div slot="header">
            <h2>Send us a Message</h2>
          </div>

          <form @submit=${this.handleSubmit}>
            <div class="form-group">
              <label for="name">Name</label>
              <sl-input
                id="name"
                type="text"
                placeholder="Your name"
                .value=${this.name}
                @sl-input=${e=>this.name=e.target.value}
                required
              ></sl-input>
            </div>

            <div class="form-group">
              <label for="email">Email</label>
              <sl-input
                id="email"
                type="email"
                placeholder="your@email.com"
                .value=${this.email}
                @sl-input=${e=>this.email=e.target.value}
                required
              ></sl-input>
            </div>

            <div class="form-group">
              <label for="message">Message</label>
              <sl-textarea
                id="message"
                placeholder="Your message here..."
                rows="6"
                .value=${this.message}
                @sl-input=${e=>this.message=e.target.value}
                required
              ></sl-textarea>
            </div>

            <sl-button type="submit" variant="primary">Send Message</sl-button>
            <sl-button type="reset" variant="default" @click=${()=>this.resetForm()}>Clear</sl-button>
          </form>
        </sl-card>

        <div class="contact-info">
          <div class="info-box">
            <h3>📧 Email</h3>
            <p>support@caydenjo.dev</p>
          </div>
          <div class="info-box">
            <h3>💬 Discord</h3>
            <p>Join our community</p>
          </div>
          <div class="info-box">
            <h3>🐦 Twitter</h3>
            <p>@CaydenJoyApp</p>
          </div>
        </div>

        <div style="text-align: center; margin-top: 48px;">
          <sl-button href="${x()}" variant="primary">Back to Home</sl-button>
        </div>
      </main>
    `}};Re.styles=[Ct,k`
      main {
        padding: 20px;
        max-width: 600px;
        margin: 0 auto;
      }

      sl-card {
        margin-bottom: 24px;
      }

      form {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      sl-input,
      sl-textarea {
        width: 100%;
      }

      .form-group {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      label {
        font-weight: 600;
        color: #6C5CE7;
      }

      .success-message {
        background-color: #00B894;
        color: white;
        padding: 16px;
        border-radius: 4px;
        margin-bottom: 16px;
      }

      .contact-info {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 16px;
        margin-top: 24px;
      }

      .info-box {
        background: linear-gradient(135deg, #6C5CE7 0%, #5F3DC4 100%);
        color: white;
        padding: 16px;
        border-radius: 8px;
        text-align: center;
      }

      .info-box h3 {
        margin: 0 0 8px 0;
        color: white;
      }

      .info-box p {
        margin: 0;
        opacity: 0.9;
      }

      button {
        width: 100%;
      }
    `];kt([l()],Re.prototype,"name",2);kt([l()],Re.prototype,"email",2);kt([l()],Re.prototype,"message",2);kt([l()],Re.prototype,"submitted",2);Re=kt([M("app-contact")],Re);const ni="caydenjoy_license_status",ls=["CyberCop3158","CAYDENJOY-PREMIUM-2024","CAYDENJOY-UNLOCK-ALL","PREMIUM-UNLOCK-2025","TEST-CODE-001","EVAL-VERSION-2026","DEMO-FULL-ACCESS","TRIAL-UNLIMITED","SPECIAL-OFFER-50"];class Ne{constructor(){this.status={isUpgraded:!1},this.loadLicense()}static getInstance(){return Ne.instance||(Ne.instance=new Ne),Ne.instance}loadLicense(){try{const t=localStorage.getItem(ni);t&&(this.status=JSON.parse(t))}catch(t){console.error("Error loading license status:",t)}}saveLicense(){try{localStorage.setItem(ni,JSON.stringify(this.status))}catch(t){console.error("Error saving license status:",t)}}verifyAndApplyCode(t){const i=t.trim().toUpperCase();return ls.includes(i)?(this.status.isUpgraded=!0,this.status.upgradeDate=Date.now(),this.status.upgradeCode=i,this.saveLicense(),!0):!1}isUpgraded(){return this.status.isUpgraded}getUpgradeCode(){return this.status.upgradeCode}getUpgradeDate(){return this.status.upgradeDate}resetLicense(){this.status={isUpgraded:!1},localStorage.removeItem(ni)}}const li="caydenjoy_premium_status",ds=!0;class B{constructor(){this.licenseManager=Ne.getInstance(),this.status={isPremium:!1,features:{customImages:!1,voiceCustomization:!1,cloudBackup:!1,additionalTabs:!1}},this.loadStatus()}static getInstance(){return B.instance||(B.instance=new B),B.instance}loadStatus(){try{if(this.licenseManager.isUpgraded()){console.log("[LICENSE] App upgraded via license code"),this.status.isPremium=!0,this.status.features.customImages=!0,this.status.features.voiceCustomization=!0,this.status.features.cloudBackup=!0,this.status.features.additionalTabs=!0;return}if(ds){console.log("[DEV MODE] Premium features automatically unlocked"),this.status.isPremium=!0,this.status.features.customImages=!0,this.status.features.voiceCustomization=!0,this.status.features.cloudBackup=!0,this.status.features.additionalTabs=!0;return}const t=localStorage.getItem(li);t&&(this.status=JSON.parse(t))}catch(t){console.error("Error loading premium status:",t)}}refreshStatus(){this.loadStatus()}getStatus(){return{...this.status}}isPremium(){return this.status.isPremium}hasFeature(t){return this.status.features[t]||!1}canUseCustomImages(){return this.hasFeature("customImages")}canCustomizeVoice(){return this.hasFeature("voiceCustomization")}canUseCloudBackup(){return this.hasFeature("cloudBackup")}canAddAdditionalTabs(){return this.hasFeature("additionalTabs")}simulatePremiumPurchase(){this.status.isPremium=!0,this.status.purchaseDate=Date.now(),this.status.features.customImages=!0,this.status.features.voiceCustomization=!0,this.status.features.cloudBackup=!0,this.status.features.additionalTabs=!0,this.saveStatus()}saveStatus(){try{localStorage.setItem(li,JSON.stringify(this.status))}catch(t){console.error("Error saving premium status:",t)}}unlockPremium(){this.status.isPremium=!0,this.status.features.customImages=!0,this.status.features.voiceCustomization=!0,this.status.features.cloudBackup=!0,this.status.features.additionalTabs=!0}resetPremium(){localStorage.removeItem(li),this.status={isPremium:!1,features:{customImages:!1,voiceCustomization:!1,cloudBackup:!1,additionalTabs:!1}}}}B.getInstance();var cs=k`
  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--sl-toggle-size-small);
    --thumb-size: calc(var(--sl-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--sl-toggle-size-medium);
    --thumb-size: calc(var(--sl-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--sl-toggle-size-large);
    --thumb-size: calc(var(--sl-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: inherit;
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`,F=class extends N{constructor(){super(...arguments),this.formControlController=new Jt(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new it(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(e){e.key==="ArrowLeft"&&(e.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),e.key==="ArrowRight"&&(e.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("help-text"),t=this.helpText?!0:!!e;return h`
      <div
        class=${V({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${V({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${w(this.value)}
            .checked=${Oi(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          />

          <span part="control" class="switch__control">
            <span part="thumb" class="switch__thumb"></span>
          </span>

          <div part="label" class="switch__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${t?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};F.styles=[q,Ni,cs];n([R('input[type="checkbox"]')],F.prototype,"input",2);n([g()],F.prototype,"hasFocus",2);n([l()],F.prototype,"title",2);n([l()],F.prototype,"name",2);n([l()],F.prototype,"value",2);n([l({reflect:!0})],F.prototype,"size",2);n([l({type:Boolean,reflect:!0})],F.prototype,"disabled",2);n([l({type:Boolean,reflect:!0})],F.prototype,"checked",2);n([Di("checked")],F.prototype,"defaultChecked",2);n([l({reflect:!0})],F.prototype,"form",2);n([l({type:Boolean,reflect:!0})],F.prototype,"required",2);n([l({attribute:"help-text"})],F.prototype,"helpText",2);n([L("checked",{waitUntilFirstUpdate:!0})],F.prototype,"handleCheckedChange",1);n([L("disabled",{waitUntilFirstUpdate:!0})],F.prototype,"handleDisabledChange",1);F.define("sl-switch");var us=k`
  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,Gt=class extends N{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};Gt.styles=[q,us];n([l({type:Boolean,reflect:!0})],Gt.prototype,"vertical",2);n([L("vertical")],Gt.prototype,"handleVerticalChange",1);Gt.define("sl-divider");var hs=Object.defineProperty,ps=Object.getOwnPropertyDescriptor,$t=(e,t,i,o)=>{for(var r=o>1?void 0:o?ps(t,i):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(r=(o?a(t,i,r):a(r))||r);return o&&r&&hs(t,i,r),r};let Le=class extends P{constructor(){super(...arguments),this.darkMode=localStorage.getItem("darkMode")==="true",this.notifications=localStorage.getItem("notifications")!=="false",this.autoSync=localStorage.getItem("autoSync")!=="false",this.isPremium=!1,this.premiumManager=B.getInstance()}handleDarkModeChange(e){this.darkMode=e.target.checked,localStorage.setItem("darkMode",this.darkMode.toString()),this.applyDarkMode()}handleNotificationsChange(e){this.notifications=e.target.checked,localStorage.setItem("notifications",this.notifications.toString())}handleAutoSyncChange(e){this.autoSync=e.target.checked,localStorage.setItem("autoSync",this.autoSync.toString())}applyDarkMode(){this.darkMode?document.documentElement.style.colorScheme="dark":document.documentElement.style.colorScheme="light"}clearCache(){confirm("Are you sure you want to clear all cache? This will remove all stored data.")&&(localStorage.clear(),caches.keys().then(e=>{e.forEach(t=>{caches.delete(t)})}),alert("Cache cleared successfully!"))}resetApp(){confirm("Are you sure you want to reset the app to default settings?")&&(localStorage.clear(),location.reload())}goToPremium(){window.location.hash="#/premium"}render(){return h`
      <app-header></app-header>

      <main>
        <h1>Settings</h1>
        <p>Customize your CaydenJoy experience</p>

        ${this.isPremium?h`
          <sl-card>
            <div slot="header">
              <h2>👑 Premium Unlocked</h2>
            </div>
            <div style="padding: 16px;">
              <p>✓ You have access to all premium features</p>
              <p style="font-size: 14px; color: #666;">Thank you for supporting CaydenJoy!</p>
            </div>
          </sl-card>
        `:h`
          <sl-card>
            <div slot="header">
              <h2>🌟 Upgrade to Premium</h2>
            </div>
            <div style="padding: 16px;">
              <p>Unlock premium features for just <strong>$5.99</strong> (one-time)</p>
              <ul style="margin: 12px 0; padding-left: 20px; text-align: left;">
                <li>Upload unlimited custom family photos</li>
                <li>Voice customization options</li>
                <li>Cloud backup of your settings</li>
                <li>Priority support</li>
              </ul>
              <sl-button variant="primary" @click=${this.goToPremium} style="width: 100%; margin-top: 12px;">
                Upgrade Now
              </sl-button>
            </div>
          </sl-card>
        `}

        <sl-card>
          <div slot="header">
            <h2>Appearance</h2>
          </div>

          <div class="setting-item">
            <div class="setting-label">
              <h3>Dark Mode</h3>
              <p>Use dark theme for easier reading at night</p>
            </div>
            <sl-switch
              .checked=${this.darkMode}
              @sl-change=${this.handleDarkModeChange}
            ></sl-switch>
          </div>
        </sl-card>

        <sl-card>
          <div slot="header">
            <h2>Notifications & Sync</h2>
          </div>

          <div class="setting-item">
            <div class="setting-label">
              <h3>Push Notifications</h3>
              <p>Receive notifications about updates and events</p>
            </div>
            <sl-switch
              .checked=${this.notifications}
              @sl-change=${this.handleNotificationsChange}
            ></sl-switch>
          </div>

          <div class="setting-item">
            <div class="setting-label">
              <h3>Auto-Sync</h3>
              <p>Automatically sync data when connection is available</p>
            </div>
            <sl-switch
              .checked=${this.autoSync}
              @sl-change=${this.handleAutoSyncChange}
            ></sl-switch>
          </div>
        </sl-card>

        <sl-card>
          <div slot="header">
            <h2>Storage & Cache</h2>
          </div>

          <div style="padding: 0 16px;">
            <p>Manage your app's cached data and local storage.</p>
            <sl-button variant="warning" @click=${()=>this.clearCache()}>
              Clear Cache & Data
            </sl-button>
          </div>
        </sl-card>

        <sl-card>
          <div slot="header">
            <h2>About</h2>
          </div>

          <div style="padding: 16px;">
            <p><strong>CaydenJoy PWA</strong></p>
            <p>Version: 1.0.0</p>
            <p>Build: Progressive Web App</p>
            <p style="margin-top: 16px; opacity: 0.7;">
              <a href="https://github.com/dallas8000-ops/CaydenJoy" target="_blank">View on GitHub</a>
            </p>
          </div>
        </sl-card>

        <div class="danger-zone">
          <h3>⚠️ Danger Zone</h3>
          <p>Irreversible actions that will reset your experience.</p>
          <sl-button variant="danger" @click=${()=>this.resetApp()}>
            Reset App to Default
          </sl-button>
        </div>

        <div style="text-align: center; margin-top: 24px;">
          <sl-button href="${x()}" variant="primary">Back to Home</sl-button>
        </div>
      </main>
    `}connectedCallback(){super.connectedCallback(),this.applyDarkMode(),this.isPremium=this.premiumManager.isPremium()}};Le.styles=[Ct,k`
      main {
        padding: 20px;
        max-width: 600px;
        margin: 0 auto;
      }

      sl-card {
        margin-bottom: 24px;
      }

      .setting-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px 0;
        gap: 16px;
      }

      .setting-item:not(:last-child) {
        border-bottom: 1px solid #e9ecef;
      }

      .setting-label {
        flex: 1;
      }

      .setting-label h3 {
        margin: 0;
        color: #6C5CE7;
      }

      .setting-label p {
        margin: 4px 0 0 0;
        font-size: 14px;
        opacity: 0.7;
      }

      .danger-zone {
        border: 2px solid #E17055;
        border-radius: 8px;
        padding: 16px;
        margin-top: 24px;
      }

      .danger-zone h3 {
        color: #E17055;
        margin-top: 0;
      }

      sl-button {
        width: 100%;
      }

      .back-button {
        margin-top: 24px;
      }
    `];$t([l()],Le.prototype,"darkMode",2);$t([l()],Le.prototype,"notifications",2);$t([l()],Le.prototype,"autoSync",2);$t([g()],Le.prototype,"isPremium",2);Le=$t([M("app-settings")],Le);var ms=k`
  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--sl-spacing-medium);
  }
`,Oo=new Map,bs=new WeakMap;function fs(e){return e??{keyframes:[],options:{duration:0}}}function co(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function Qt(e,t){Oo.set(e,fs(t))}function Lt(e,t,i){const o=bs.get(e);if(o?.[t])return co(o[t],i.dir);const r=Oo.get(t);return r?co(r,i.dir):{keyframes:[],options:{duration:0}}}function Bt(e,t){return new Promise(i=>{function o(r){r.target===e&&(e.removeEventListener(t,o),i())}e.addEventListener(t,o)})}function Ft(e,t,i){return new Promise(o=>{if(i?.duration===1/0)throw new Error("Promise-based animations must be finite.");const r=e.animate(t,xt(Se({},i),{duration:gs()?0:i.duration}));r.addEventListener("cancel",o,{once:!0}),r.addEventListener("finish",o,{once:!0})})}function gs(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Ut(e){return Promise.all(e.getAnimations().map(t=>new Promise(i=>{t.cancel(),requestAnimationFrame(i)})))}function uo(e,t){return e.map(i=>xt(Se({},i),{height:i.height==="auto"?`${t}px`:i.height}))}var oe=class extends N{constructor(){super(...arguments),this.localize=new je(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(e=>{for(const t of e)t.type==="attributes"&&t.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.detailsObserver)==null||e.disconnect()}handleSummaryClick(e){e.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.open?this.hide():this.show()),(e.key==="ArrowUp"||e.key==="ArrowLeft")&&(e.preventDefault(),this.hide()),(e.key==="ArrowDown"||e.key==="ArrowRight")&&(e.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await Ut(this.body);const{keyframes:t,options:i}=Lt(this,"details.show",{dir:this.localize.dir()});await Ft(this.body,uo(t,this.body.scrollHeight),i),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await Ut(this.body);const{keyframes:t,options:i}=Lt(this,"details.hide",{dir:this.localize.dir()});await Ft(this.body,uo(t,this.body.scrollHeight),i),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,Bt(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,Bt(this,"sl-after-hide")}render(){const e=this.localize.dir()==="rtl";return h`
      <details
        part="base"
        class=${V({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":e})}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};oe.styles=[q,ms];oe.dependencies={"sl-icon":H};n([R(".details")],oe.prototype,"details",2);n([R(".details__header")],oe.prototype,"header",2);n([R(".details__body")],oe.prototype,"body",2);n([R(".details__expand-icon-slot")],oe.prototype,"expandIconSlot",2);n([l({type:Boolean,reflect:!0})],oe.prototype,"open",2);n([l()],oe.prototype,"summary",2);n([l({type:Boolean,reflect:!0})],oe.prototype,"disabled",2);n([L("open",{waitUntilFirstUpdate:!0})],oe.prototype,"handleOpenChange",1);Qt("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});Qt("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});oe.define("sl-details");var vs=Object.getOwnPropertyDescriptor,ys=(e,t,i,o)=>{for(var r=o>1?void 0:o?vs(t,i):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(r=a(r)||r);return r};let fi=class extends P{constructor(){super(...arguments),this.faqData=[{question:"What is a Progressive Web App (PWA)?",answer:"A Progressive Web App is a web application that uses web technologies to provide a native app-like experience. PWAs can be installed on your device, work offline, and send push notifications."},{question:"Can I use CaydenJoy offline?",answer:"Yes! CaydenJoy is built as a PWA with offline support. Once you've loaded the app, it will work without an internet connection and sync data when you're back online."},{question:"How do I install CaydenJoy on my device?",answer:'On most browsers and devices, you can install CaydenJoy by clicking the "Install" button that appears in the address bar, or through the browser menu. On some devices, you can add it to your home screen.'},{question:"Is my data secure?",answer:"Yes, your data is encrypted and stored securely. We use HTTPS to protect data in transit and implement industry-standard security practices."},{question:"How do I enable notifications?",answer:"You can enable notifications in the Settings page. When you enable them, your browser may ask for permission to send notifications."},{question:"What devices are supported?",answer:"CaydenJoy works on any device with a modern web browser, including smartphones, tablets, and computers. It supports iOS, Android, Windows, and macOS."},{question:"How do I update CaydenJoy?",answer:"CaydenJoy updates automatically in the background. You'll always have the latest version without needing to manually update."},{question:"Can I use CaydenJoy on multiple devices?",answer:"Yes! You can install and use CaydenJoy on as many devices as you want. Each installation can be customized with your preferences."},{question:"How do I backup my data?",answer:"Your data is automatically backed up in your browser's local storage. You can export your data from the Settings page."},{question:"Is CaydenJoy free?",answer:"Yes, CaydenJoy is completely free to use. There are no hidden costs or premium features."}]}render(){return h`
      <app-header></app-header>

      <main>
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about CaydenJoy</p>

        <sl-card class="search-box">
          <div slot="header">Quick Help</div>
          <p>Can't find what you're looking for? <a href="${x("contact")}">Contact us</a> for personalized support.</p>
        </sl-card>

        <div class="category">
          <h2>General</h2>
          ${this.faqData.slice(0,4).map(e=>this.renderFAQItem(e))}
        </div>

        <div class="category">
          <h2>Installation & Access</h2>
          ${this.faqData.slice(4,8).map(e=>this.renderFAQItem(e))}
        </div>

        <div class="category">
          <h2>Data & Privacy</h2>
          ${this.faqData.slice(8,10).map(e=>this.renderFAQItem(e))}
        </div>

        <div class="contact-cta">
          <h3>Still have questions?</h3>
          <p>Our support team is here to help!</p>
          <sl-button href="${x("contact")}" variant="primary">
            Contact Support
          </sl-button>
        </div>

        <div style="text-align: center; margin-top: 48px;">
          <sl-button href="${x()}" variant="primary">Back to Home</sl-button>
        </div>
      </main>
    `}renderFAQItem(e){return h`
      <sl-details>
        <span slot="summary">${e.question}</span>
        <p>${e.answer}</p>
      </sl-details>
    `}};fi.styles=[Ct,k`
      main {
        padding: 20px;
        max-width: 700px;
        margin: 0 auto;
      }

      sl-card {
        margin-bottom: 24px;
      }

      sl-details {
        margin-bottom: 8px;
      }

      sl-details::part(header) {
        background-color: #f0f0f0;
        padding: 12px;
        cursor: pointer;
      }

      sl-details::part(summary) {
        font-weight: 600;
        color: #6C5CE7;
      }

      sl-details::part(body) {
        padding: 16px;
        border-top: 1px solid #e0e0e0;
      }

      .category {
        margin-top: 24px;
      }

      .category h2 {
        color: #6C5CE7;
        border-bottom: 2px solid #6C5CE7;
        padding-bottom: 8px;
      }

      .search-box {
        margin-bottom: 24px;
      }

      .contact-cta {
        background: linear-gradient(135deg, #6C5CE7 0%, #5F3DC4 100%);
        color: white;
        padding: 24px;
        border-radius: 8px;
        text-align: center;
        margin-top: 32px;
      }

      .contact-cta h3 {
        color: white;
        margin-top: 0;
      }

      .contact-cta sl-button::part(base) {
        background-color: white;
        color: #6C5CE7;
      }
    `];fi=ys([M("app-faq")],fi);var ws=Object.defineProperty,xs=Object.getOwnPropertyDescriptor,ot=(e,t,i,o)=>{for(var r=o>1?void 0:o?xs(t,i):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(r=(o?a(t,i,r):a(r))||r);return o&&r&&ws(t,i,r),r};let $e=class extends P{constructor(){super(...arguments),this.activeRequest=null,this.tabs=[],this.activeTabId=null,this.showNewTabModal=!1,this.newTabName="",this.premiumManager=B.getInstance(),this.DEFAULT_TAB_ID="default",this.TABS_STORAGE_KEY="caydenjoy_communication_tabs",this.requests=[{id:1,text:"I'm hungry",icon:"🍎",color:"bg-green-400"},{id:2,text:"I'm thirsty",icon:"💧",color:"bg-blue-400"},{id:3,text:"I need bathroom",icon:"🚽",color:"bg-purple-400"},{id:4,text:"I need a break",icon:"⏸️",color:"bg-yellow-400"},{id:5,text:"Help please",icon:"🆘",color:"bg-red-400"},{id:6,text:"I want to play",icon:"🎮",color:"bg-pink-400"},{id:7,text:"I'm tired",icon:"😴",color:"bg-indigo-400"},{id:8,text:"Too loud",icon:"🔊",color:"bg-orange-400"},{id:9,text:"I want my spatulas",icon:"🥄",color:"bg-cyan-400"},{id:10,text:"I want my toy",icon:"🧸",color:"bg-rose-400"},{id:11,text:"I want to jump",icon:"🤸",color:"bg-lime-400"},{id:12,text:"I want my swing chair",icon:"🪑",color:"bg-teal-400"}]}connectedCallback(){super.connectedCallback(),this.loadTabs()}loadTabs(){try{const e=localStorage.getItem(this.TABS_STORAGE_KEY);if(e){const t=JSON.parse(e);this.tabs=t.tabs,this.activeTabId=t.activeTabId}else this.initializeDefaultTab()}catch(e){console.error("Error loading tabs:",e),this.initializeDefaultTab()}}initializeDefaultTab(){this.tabs=[{id:this.DEFAULT_TAB_ID,name:"Default",requests:[...this.requests],createdAt:Date.now()}],this.activeTabId=this.DEFAULT_TAB_ID,this.saveTabs()}saveTabs(){try{const e={tabs:this.tabs,activeTabId:this.activeTabId};localStorage.setItem(this.TABS_STORAGE_KEY,JSON.stringify(e))}catch(e){console.error("Error saving tabs:",e)}}getActiveTab(){return this.tabs.find(e=>e.id===this.activeTabId)}switchTab(e){this.activeTabId=e,this.activeRequest=null,this.saveTabs()}openNewTabModal(){this.showNewTabModal=!0,this.newTabName=""}closeNewTabModal(){this.showNewTabModal=!1,this.newTabName=""}createNewTab(){if(!this.newTabName.trim()){alert("Please enter a tab name");return}const e={id:`tab-${Date.now()}`,name:this.newTabName.trim(),requests:[...this.requests],createdAt:Date.now()};this.tabs=[...this.tabs,e],this.activeTabId=e.id,this.activeRequest=null,this.saveTabs(),this.closeNewTabModal()}handleTabNameInput(e){const t=e.target;this.newTabName=t.value}handleTabNameKeydown(e){e.key==="Enter"?this.createNewTab():e.key==="Escape"&&this.closeNewTabModal()}handleRequest(e){this.activeRequest=e;const t=new SpeechSynthesisUtterance(e.text);t.rate=1,t.pitch=1.3,t.volume=1;const o=window.speechSynthesis.getVoices().find(r=>r.lang.startsWith("en")&&(r.name.includes("Google")||r.name.includes("Samantha")||r.name.includes("Natural")||r.name.includes("Premium")));o&&(t.voice=o),window.speechSynthesis.speak(t)}clearRequest(){this.activeRequest=null,window.speechSynthesis.cancel()}render(){const e=this.getActiveTab(),t=this.premiumManager.canAddAdditionalTabs(),i=e?e.requests:this.requests;return h`
      <div class="container">
        <div class="header">
          <h1>CaydenJoy Communication</h1>
          <p class="subtitle">What do you need?</p>
        </div>

        ${this.activeRequest?h`
          <div class="active-request">
            <div class="active-request-icon">${this.activeRequest.icon}</div>
            <div class="active-request-text">${this.activeRequest.text}</div>
            <button class="close-btn" @click=${this.clearRequest}>×</button>
          </div>
        `:""}

        ${t?h`
          <div class="tabs-container">
            ${this.tabs.map(o=>h`
              <button 
                class="tab-button ${o.id===this.activeTabId?"active":""}"
                @click=${()=>this.switchTab(o.id)}
              >
                ${o.name}
              </button>
            `)}
            <button class="add-tab-btn" @click=${this.openNewTabModal}>
              + New Tab
            </button>
          </div>
        `:""}

        <div class="requests-grid">
          ${i.map(o=>h`
            <div 
              class="request-card ${o.color}"
              @click=${()=>this.handleRequest(o)}
            >
              <div class="request-icon">${o.icon}</div>
              <div class="request-text">${o.text}</div>
            </div>
          `)}
        </div>

        <p class="footer-text">Tap any button to make a request</p>
      </div>

      ${this.showNewTabModal?h`
        <div class="modal-overlay" @click=${this.closeNewTabModal}>
          <div class="modal" @click=${o=>o.stopPropagation()}>
            <div class="modal-header">Create New Tab</div>
            <input 
              type="text" 
              class="modal-input" 
              placeholder="Enter tab name"
              .value=${this.newTabName}
              @input=${this.handleTabNameInput}
              @keydown=${this.handleTabNameKeydown}
              autofocus
            />
            <div class="modal-buttons">
              <button class="modal-btn modal-btn-secondary" @click=${this.closeNewTabModal}>
                Cancel
              </button>
              <button class="modal-btn modal-btn-primary" @click=${this.createNewTab}>
                Create Tab
              </button>
            </div>
          </div>
        </div>
      `:""}
    `}};$e.styles=k`
    :host {
      display: block;
      padding: 2rem;
    }

    .container {
      max-width: 1400px;
      margin: 0 auto;
    }

    .header {
      text-align: center;
      margin-bottom: 2rem;
    }

    h1 {
      font-size: 3rem;
      font-weight: bold;
      color: #6C5CE7;
      margin-bottom: 1rem;
    }

    .subtitle {
      font-size: 1.5rem;
      color: #666;
    }

    .active-request {
      background: linear-gradient(135deg, #6C5CE7 0%, #5F3DC4 100%);
      color: white;
      padding: 2rem;
      border-radius: 1.5rem;
      margin-bottom: 2rem;
      box-shadow: 0 10px 30px rgba(108, 92, 231, 0.3);
      display: flex;
      align-items: center;
      gap: 1.5rem;
      position: relative;
    }

    .active-request-icon {
      font-size: 2.5rem;
    }

    .active-request-text {
      font-size: 2rem;
      font-weight: bold;
      flex: 1;
    }

    .close-btn {
      background: rgba(255, 255, 255, 0.2);
      border: none;
      color: white;
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      transition: all 0.2s;
    }

    .close-btn:hover {
      background: rgba(255, 255, 255, 0.3);
      transform: scale(1.1);
    }

    .requests-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .request-card {
      padding: 2rem;
      border-radius: 1.5rem;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      border: 4px solid white;
      cursor: pointer;
      transition: all 0.2s;
      text-align: center;
      min-height: 200px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
    }

    .request-card:hover {
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
      transform: scale(1.05);
    }

    .request-icon {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
    }

    .request-text {
      font-size: 1.25rem;
      font-weight: 600;
      color: #333;
    }

    .bg-green-400 { background-color: #4ade80; }
    .bg-blue-400 { background-color: #60a5fa; }
    .bg-purple-400 { background-color: #c084fc; }
    .bg-yellow-400 { background-color: #facc15; }
    .bg-red-400 { background-color: #f87171; }
    .bg-pink-400 { background-color: #f472b6; }
    .bg-indigo-400 { background-color: #818cf8; }
    .bg-orange-400 { background-color: #fb923c; }
    .bg-cyan-400 { background-color: #22d3ee; }
    .bg-rose-400 { background-color: #fb7185; }
    .bg-lime-400 { background-color: #a3e635; }
    .bg-teal-400 { background-color: #2dd4bf; }

    .footer-text {
      text-align: center;
      color: #999;
      font-size: 1.125rem;
      margin-top: 2rem;
    }

    /* Tab System Styles */
    .tabs-container {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 1.5rem;
      align-items: center;
      flex-wrap: wrap;
      padding: 0.5rem;
      background: #f5f5f5;
      border-radius: 0.5rem;
    }

    .tab-button {
      padding: 0.4rem 0.8rem;
      border: 2px solid #ddd;
      background: white;
      border-radius: 0.4rem;
      cursor: pointer;
      font-size: 0.85rem;
      font-weight: 500;
      line-height: 1.2;
      transition: all 0.2s;
      color: #666;
      white-space: normal;
      text-align: center;
      min-height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .tab-button:hover {
      border-color: #6C5CE7;
      color: #6C5CE7;
    }

    .tab-button.active {
      background: #6C5CE7;
      color: white;
      border-color: #6C5CE7;
    }

    .tab-button.active:hover {
      background: #5F3DC4;
      border-color: #5F3DC4;
    }

    .add-tab-btn {
      padding: 0.4rem 0.7rem;
      background: #4ade80;
      color: white;
      border: none;
      border-radius: 0.4rem;
      cursor: pointer;
      font-size: 0.85rem;
      font-weight: 600;
      line-height: 1.2;
      transition: all 0.2s;
      white-space: normal;
      min-height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .add-tab-btn:hover {
      background: #22c55e;
      transform: scale(1.02);
    }

    .add-tab-btn:disabled {
      background: #ccc;
      cursor: not-allowed;
      transform: none;
    }

    .add-tab-btn:disabled {
      background: #ccc;
      cursor: not-allowed;
      transform: none;
    }

    /* Modal Styles */
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }

    .modal {
      background: white;
      border-radius: 1.5rem;
      padding: 2rem;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      max-width: 500px;
      width: 90%;
    }

    .modal-header {
      font-size: 1.5rem;
      font-weight: bold;
      color: #333;
      margin-bottom: 1.5rem;
    }

    .modal-input {
      width: 100%;
      padding: 0.75rem;
      border: 2px solid #ddd;
      border-radius: 0.5rem;
      font-size: 1rem;
      margin-bottom: 1.5rem;
      box-sizing: border-box;
      transition: border-color 0.2s;
    }

    .modal-input:focus {
      outline: none;
      border-color: #6C5CE7;
    }

    .modal-buttons {
      display: flex;
      gap: 1rem;
      justify-content: flex-end;
    }

    .modal-btn {
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 600;
      transition: all 0.2s;
    }

    .modal-btn-primary {
      background: #6C5CE7;
      color: white;
    }

    .modal-btn-primary:hover {
      background: #5F3DC4;
      transform: scale(1.02);
    }

    .modal-btn-secondary {
      background: #eee;
      color: #333;
    }

    .modal-btn-secondary:hover {
      background: #ddd;
    }

    @media (max-width: 640px) {
      h1 {
        font-size: 2rem;
      }

      .subtitle {
        font-size: 1.25rem;
      }

      .requests-grid {
        grid-template-columns: 1fr;
      }

      .request-card {
        min-height: 150px;
      }

      .request-icon {
        font-size: 3rem;
      }

      .request-text {
        font-size: 1.125rem;
      }

      .tabs-container {
        gap: 0.5rem;
      }

      .tab-button {
        padding: 0.5rem 1rem;
        font-size: 0.9rem;
      }

      .add-tab-btn {
        padding: 0.5rem 1rem;
        font-size: 0.9rem;
      }

      .modal {
        padding: 1.5rem;
      }

      .modal-header {
        font-size: 1.25rem;
        margin-bottom: 1rem;
      }
    }
  `;ot([g()],$e.prototype,"activeRequest",2);ot([g()],$e.prototype,"tabs",2);ot([g()],$e.prototype,"activeTabId",2);ot([g()],$e.prototype,"showNewTabModal",2);ot([g()],$e.prototype,"newTabName",2);$e=ot([M("app-communication")],$e);var _s=Object.defineProperty,Cs=Object.getOwnPropertyDescriptor,ge=(e,t,i,o)=>{for(var r=o>1?void 0:o?Cs(t,i):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(r=(o?a(t,i,r):a(r))||r);return o&&r&&_s(t,i,r),r};let ee=class extends P{constructor(){super(...arguments),this.defaultPieces=[{id:"mom",name:"Mom",emoji:"👩",x:20,y:20},{id:"dad",name:"Dad",emoji:"👨",x:200,y:20},{id:"brother",name:"Brother",emoji:"👦",x:380,y:20},{id:"dog",name:"Dog",emoji:"🐕",x:20,y:220},{id:"grandad",name:"Grandad",emoji:"👴",x:200,y:220}],this.pieces=[],this.draggedPiece=null,this.dragOffset={x:0,y:0},this.tabs=[],this.activeTabId=null,this.showNewTabModal=!1,this.newTabName="",this.premiumManager=B.getInstance(),this.DEFAULT_TAB_ID="default",this.TABS_STORAGE_KEY="caydenjoy_puzzle_tabs"}connectedCallback(){super.connectedCallback(),this.loadTabs()}loadTabs(){try{const e=localStorage.getItem(this.TABS_STORAGE_KEY);if(e){const t=JSON.parse(e);this.tabs=t.tabs,this.activeTabId=t.activeTabId,this.pieces=this.getActivePieces()}else this.initializeDefaultTab()}catch(e){console.error("Error loading tabs:",e),this.initializeDefaultTab()}}initializeDefaultTab(){this.tabs=[{id:this.DEFAULT_TAB_ID,name:"Default",pieces:[...this.defaultPieces],createdAt:Date.now()}],this.activeTabId=this.DEFAULT_TAB_ID,this.pieces=[...this.defaultPieces],this.saveTabs()}saveTabs(){try{const e={tabs:this.tabs,activeTabId:this.activeTabId};localStorage.setItem(this.TABS_STORAGE_KEY,JSON.stringify(e))}catch(e){console.error("Error saving tabs:",e)}}getActivePieces(){const e=this.tabs.find(t=>t.id===this.activeTabId);return e?[...e.pieces]:[...this.defaultPieces]}switchTab(e){this.activeTabId=e,this.pieces=this.getActivePieces(),this.draggedPiece=null,this.saveTabs()}openNewTabModal(){this.showNewTabModal=!0,this.newTabName=""}closeNewTabModal(){this.showNewTabModal=!1,this.newTabName=""}createNewTab(){if(!this.newTabName.trim()){alert("Please enter a tab name");return}const e={id:`tab-${Date.now()}`,name:this.newTabName.trim(),pieces:[...this.defaultPieces],createdAt:Date.now()};this.tabs=[...this.tabs,e],this.activeTabId=e.id,this.pieces=[...this.defaultPieces],this.draggedPiece=null,this.saveTabs(),this.closeNewTabModal()}handleTabNameInput(e){const t=e.target;this.newTabName=t.value}handleTabNameKeydown(e){e.key==="Enter"?this.createNewTab():e.key==="Escape"&&this.closeNewTabModal()}onMouseDown(e,t){this.draggedPiece=t;const i=e.target.getBoundingClientRect();this.dragOffset={x:e.clientX-i.left,y:e.clientY-i.top}}onMouseMove(e){if(!this.draggedPiece)return;const t=this.shadowRoot?.querySelector(".puzzle-board");if(!t)return;const i=t.getBoundingClientRect(),o=Math.max(0,Math.min(e.clientX-i.left-this.dragOffset.x,i.width-80)),r=Math.max(0,Math.min(e.clientY-i.top-this.dragOffset.y,i.height-80)),s=this.tabs.find(a=>a.id===this.activeTabId);if(s){const a=s.pieces.find(d=>d.id===this.draggedPiece.id);a&&(a.x=o,a.y=r,this.saveTabs(),this.requestUpdate())}}onMouseUp(){this.draggedPiece=null}connectedCallbackEnd(){document.addEventListener("mousemove",e=>this.onMouseMove(e)),document.addEventListener("mouseup",()=>this.onMouseUp())}render(){const e=this.premiumManager.canAddAdditionalTabs(),t=this.tabs.find(o=>o.id===this.activeTabId),i=t?t.pieces:this.pieces;return h`
      <div class="container">
        <h1>Family Puzzle</h1>
        <p class="instructions">Drag the family members to arrange them!</p>

        ${e?h`
          <div class="tabs-container">
            ${this.tabs.map(o=>h`
              <button 
                class="tab-button ${o.id===this.activeTabId?"active":""}"
                @click=${()=>this.switchTab(o.id)}
              >
                ${o.name}
              </button>
            `)}
            <button class="add-tab-btn" @click=${this.openNewTabModal}>
              + New Tab
            </button>
          </div>
        `:""}

        <div class="puzzle-board" @mousemove=${this.onMouseMove} @mouseup=${this.onMouseUp}>
          ${i.map(o=>h`
            <div
              class="puzzle-piece ${this.draggedPiece?.id===o.id?"dragging":""}"
              style="left: ${o.x}px; top: ${o.y}px"
              @mousedown=${r=>this.onMouseDown(r,o)}
            >
              <div class="emoji">${o.emoji}</div>
              <div class="label">${o.name}</div>
            </div>
          `)}
        </div>
      </div>

      ${this.showNewTabModal?h`
        <div class="modal-overlay" @click=${this.closeNewTabModal}>
          <div class="modal" @click=${o=>o.stopPropagation()}>
            <div class="modal-header">Create New Tab</div>
            <input 
              type="text" 
              class="modal-input" 
              placeholder="Enter tab name"
              .value=${this.newTabName}
              @input=${this.handleTabNameInput}
              @keydown=${this.handleTabNameKeydown}
              autofocus
            />
            <div class="modal-buttons">
              <button class="modal-btn modal-btn-secondary" @click=${this.closeNewTabModal}>
                Cancel
              </button>
              <button class="modal-btn modal-btn-primary" @click=${this.createNewTab}>
                Create Tab
              </button>
            </div>
          </div>
        </div>
      `:""}
    `}};ee.styles=k`
    :host {
      display: block;
      padding: 2rem;
    }

    .container {
      max-width: 600px;
      margin: 0 auto;
    }

    h1 {
      text-align: center;
      color: #6C5CE7;
      margin-bottom: 2rem;
      font-size: 2rem;
    }

    .puzzle-board {
      position: relative;
      width: 100%;
      height: 500px;
      background: linear-gradient(135deg, #E8F4F8 0%, #F0E8F8 100%);
      border: 3px solid #6C5CE7;
      border-radius: 1rem;
      margin-bottom: 2rem;
      touch-action: none;
      overflow: hidden;
    }

    .puzzle-piece {
      position: absolute;
      width: 80px;
      height: 80px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      background: white;
      border: 2px solid #6C5CE7;
      border-radius: 0.5rem;
      cursor: grab;
      user-select: none;
      transition: box-shadow 0.2s;
      box-shadow: 0 2px 8px rgba(108, 92, 231, 0.2);
    }

    .puzzle-piece:active {
      cursor: grabbing;
      box-shadow: 0 8px 16px rgba(108, 92, 231, 0.4);
      z-index: 1000;
    }

    .puzzle-piece.dragging {
      opacity: 0.8;
      z-index: 1000;
    }

    .emoji {
      font-size: 2.5rem;
      line-height: 1;
    }

    .label {
      font-size: 0.75rem;
      font-weight: bold;
      color: #333;
      text-align: center;
    }

    .instructions {
      text-align: center;
      font-size: 1.125rem;
      color: #666;
      margin-bottom: 1rem;
    }

    /* Tab System Styles */
    .tabs-container {
      display: flex;
      gap: 0.75rem;
      margin-bottom: 1.75rem;
      align-items: center;
      flex-wrap: wrap;
      padding: 0.75rem;
      background: #f5f5f5;
      border-radius: 0.75rem;
    }

    .tab-button {
      padding: 0.7rem 1.4rem;
      border: 2px solid #ddd;
      background: white;
      border-radius: 0.5rem;
      cursor: pointer;
      font-size: 1.1rem;
      font-weight: 500;
      line-height: 1.4;
      transition: all 0.2s;
      color: #666;
      white-space: normal;
      text-align: center;
      min-height: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .tab-button:hover {
      border-color: #6C5CE7;
      color: #6C5CE7;
    }

    .tab-button.active {
      background: #6C5CE7;
      color: white;
      border-color: #6C5CE7;
    }

    .add-tab-btn {
      padding: 0.7rem 1.2rem;
      background: #4ade80;
      color: white;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      font-size: 1.1rem;
      font-weight: 600;
      line-height: 1.4;
      transition: all 0.2s;
      white-space: normal;
      min-height: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .add-tab-btn:hover {
      background: #22c55e;
      transform: scale(1.03);
    }

    /* Modal Styles */
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }

    .modal {
      background: white;
      border-radius: 1.5rem;
      padding: 2rem;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      max-width: 500px;
      width: 90%;
    }

    .modal-header {
      font-size: 1.5rem;
      font-weight: bold;
      color: #333;
      margin-bottom: 1.5rem;
    }

    .modal-input {
      width: 100%;
      padding: 0.75rem;
      border: 2px solid #ddd;
      border-radius: 0.5rem;
      font-size: 1rem;
      margin-bottom: 1.5rem;
      box-sizing: border-box;
    }

    .modal-input:focus {
      outline: none;
      border-color: #6C5CE7;
    }

    .modal-buttons {
      display: flex;
      gap: 1rem;
      justify-content: flex-end;
    }

    .modal-btn {
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 600;
      transition: all 0.2s;
    }

    .modal-btn-primary {
      background: #6C5CE7;
      color: white;
    }

    .modal-btn-primary:hover {
      background: #5F3DC4;
    }

    .modal-btn-secondary {
      background: #eee;
      color: #333;
    }

    .modal-btn-secondary:hover {
      background: #ddd;
    }

    @media (max-width: 640px) {
      h1 {
        font-size: 1.5rem;
      }

      .tabs-container {
        gap: 0.5rem;
      }

      .tab-button {
        padding: 0.5rem 1rem;
        font-size: 0.9rem;
      }

      .add-tab-btn {
        padding: 0.5rem 1rem;
        font-size: 0.9rem;
      }
    }
  `;ge([g()],ee.prototype,"defaultPieces",2);ge([g()],ee.prototype,"pieces",2);ge([g()],ee.prototype,"draggedPiece",2);ge([g()],ee.prototype,"dragOffset",2);ge([g()],ee.prototype,"tabs",2);ge([g()],ee.prototype,"activeTabId",2);ge([g()],ee.prototype,"showNewTabModal",2);ge([g()],ee.prototype,"newTabName",2);ee=ge([M("app-family-puzzle")],ee);var ks=Object.defineProperty,$s=Object.getOwnPropertyDescriptor,Ve=(e,t,i,o)=>{for(var r=o>1?void 0:o?$s(t,i):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(r=(o?a(t,i,r):a(r))||r);return o&&r&&ks(t,i,r),r};let pe=class extends P{constructor(){super(...arguments),this.foods=[{id:"chicken",name:"Chicken",emoji:"🍗"},{id:"noodles",name:"Noodles",emoji:"🍜"},{id:"rice",name:"Rice",emoji:"🍚"},{id:"cereal",name:"Cereal",emoji:"🥣"},{id:"bread",name:"Bread",emoji:"🍞"},{id:"potatoes",name:"Potatoes",emoji:"🥔"},{id:"donut",name:"Donut",emoji:"🍩"},{id:"candy",name:"Candy",emoji:"🍬"},{id:"juice",name:"Juice",emoji:"🧃"},{id:"water",name:"Water",emoji:"💧"},{id:"apple",name:"Apple",emoji:"🍎"},{id:"banana",name:"Banana",emoji:"🍌"}],this.selectedFood=null,this.tabs=[],this.activeTabId=null,this.showNewTabModal=!1,this.newTabName="",this.premiumManager=B.getInstance(),this.DEFAULT_TAB_ID="default",this.TABS_STORAGE_KEY="caydenjoy_foods_tabs"}connectedCallback(){super.connectedCallback(),this.loadTabs()}loadTabs(){try{const e=localStorage.getItem(this.TABS_STORAGE_KEY);if(e){const t=JSON.parse(e);this.tabs=t.tabs,this.activeTabId=t.activeTabId}else this.initializeDefaultTab()}catch(e){console.error("Error loading tabs:",e),this.initializeDefaultTab()}}initializeDefaultTab(){this.tabs=[{id:this.DEFAULT_TAB_ID,name:"Default",foods:[...this.foods],createdAt:Date.now()}],this.activeTabId=this.DEFAULT_TAB_ID,this.saveTabs()}saveTabs(){try{const e={tabs:this.tabs,activeTabId:this.activeTabId};localStorage.setItem(this.TABS_STORAGE_KEY,JSON.stringify(e))}catch(e){console.error("Error saving tabs:",e)}}getActiveTab(){return this.tabs.find(e=>e.id===this.activeTabId)}switchTab(e){this.activeTabId=e,this.selectedFood=null,this.saveTabs()}openNewTabModal(){this.showNewTabModal=!0,this.newTabName=""}closeNewTabModal(){this.showNewTabModal=!1,this.newTabName=""}createNewTab(){if(!this.newTabName.trim()){alert("Please enter a tab name");return}const e={id:`tab-${Date.now()}`,name:this.newTabName.trim(),foods:[...this.foods],createdAt:Date.now()};this.tabs=[...this.tabs,e],this.activeTabId=e.id,this.selectedFood=null,this.saveTabs(),this.closeNewTabModal()}handleTabNameInput(e){const t=e.target;this.newTabName=t.value}handleTabNameKeydown(e){e.key==="Enter"?this.createNewTab():e.key==="Escape"&&this.closeNewTabModal()}selectFood(e){this.selectedFood=e}render(){const e=this.getActiveTab(),t=this.premiumManager.canAddAdditionalTabs(),i=e?e.foods:this.foods;return h`
      <div class="container">
        <h1>Foods</h1>

        ${this.selectedFood?h`
          <div class="selected-food">
            <div class="selected-emoji">${this.selectedFood.emoji}</div>
            <div class="selected-name">${this.selectedFood.name}</div>
          </div>
        `:""}

        ${t?h`
          <div class="tabs-container">
            ${this.tabs.map(o=>h`
              <button 
                class="tab-button ${o.id===this.activeTabId?"active":""}"
                @click=${()=>this.switchTab(o.id)}
              >
                ${o.name}
              </button>
            `)}
            <button class="add-tab-btn" @click=${this.openNewTabModal}>
              + New Tab
            </button>
          </div>
        `:""}

        <div class="food-grid">
          ${i.map(o=>h`
            <button 
              class="food-button"
              @click=${()=>this.selectFood(o)}
            >
              <div class="food-emoji">${o.emoji}</div>
              <div class="food-name">${o.name}</div>
            </button>
          `)}
        </div>
      </div>

      ${this.showNewTabModal?h`
        <div class="modal-overlay" @click=${this.closeNewTabModal}>
          <div class="modal" @click=${o=>o.stopPropagation()}>
            <div class="modal-header">Create New Tab</div>
            <input 
              type="text" 
              class="modal-input" 
              placeholder="Enter tab name"
              .value=${this.newTabName}
              @input=${this.handleTabNameInput}
              @keydown=${this.handleTabNameKeydown}
              autofocus
            />
            <div class="modal-buttons">
              <button class="modal-btn modal-btn-secondary" @click=${this.closeNewTabModal}>
                Cancel
              </button>
              <button class="modal-btn modal-btn-primary" @click=${this.createNewTab}>
                Create Tab
              </button>
            </div>
          </div>
        </div>
      `:""}
    `}};pe.styles=k`
    :host {
      display: block;
      padding: 2rem;
    }

    .container {
      max-width: 800px;
      margin: 0 auto;
    }

    h1 {
      text-align: center;
      color: #6C5CE7;
      margin-bottom: 2rem;
      font-size: 2rem;
    }

    .selected-food {
      text-align: center;
      padding: 2rem;
      background: linear-gradient(135deg, #6C5CE7 0%, #5F3DC4 100%);
      color: white;
      border-radius: 1rem;
      margin-bottom: 2rem;
      min-height: 120px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
    }

    .selected-emoji {
      font-size: 4rem;
    }

    .selected-name {
      font-size: 1.5rem;
      font-weight: bold;
    }

    .food-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .food-button {
      padding: 1.5rem;
      border: 3px solid #ddd;
      background: white;
      border-radius: 0.75rem;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      transition: all 0.3s;
      font-size: 1rem;
      font-weight: bold;
    }

    .food-button:hover {
      transform: scale(1.05);
      border-color: #6C5CE7;
      box-shadow: 0 4px 12px rgba(108, 92, 231, 0.2);
    }

    .food-button:active {
      transform: scale(0.95);
    }

    .food-emoji {
      font-size: 2.5rem;
    }

    .food-name {
      font-size: 0.875rem;
    }

    /* Tab System Styles */
    .tabs-container {
      display: flex;
      gap: 0.75rem;
      margin-bottom: 1.75rem;
      align-items: center;
      flex-wrap: wrap;
      padding: 0.75rem;
      background: #f5f5f5;
      border-radius: 0.75rem;
    }

    .tab-button {
      padding: 0.7rem 1.4rem;
      border: 2px solid #ddd;
      background: white;
      border-radius: 0.5rem;
      cursor: pointer;
      font-size: 1.1rem;
      font-weight: 500;
      line-height: 1.4;
      transition: all 0.2s;
      color: #666;
      white-space: normal;
      text-align: center;
      min-height: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .tab-button:hover {
      border-color: #6C5CE7;
      color: #6C5CE7;
    }

    .tab-button.active {
      background: #6C5CE7;
      color: white;
      border-color: #6C5CE7;
    }

    .add-tab-btn {
      padding: 0.7rem 1.2rem;
      background: #4ade80;
      color: white;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      font-size: 1.1rem;
      font-weight: 600;
      line-height: 1.4;
      transition: all 0.2s;
      white-space: normal;
      min-height: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .add-tab-btn:hover {
      background: #22c55e;
      transform: scale(1.03);
    }

    /* Modal Styles */
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }

    .modal {
      background: white;
      border-radius: 1.5rem;
      padding: 2rem;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      max-width: 500px;
      width: 90%;
    }

    .modal-header {
      font-size: 1.5rem;
      font-weight: bold;
      color: #333;
      margin-bottom: 1.5rem;
    }

    .modal-input {
      width: 100%;
      padding: 0.75rem;
      border: 2px solid #ddd;
      border-radius: 0.5rem;
      font-size: 1rem;
      margin-bottom: 1.5rem;
      box-sizing: border-box;
    }

    .modal-input:focus {
      outline: none;
      border-color: #6C5CE7;
    }

    .modal-buttons {
      display: flex;
      gap: 1rem;
      justify-content: flex-end;
    }

    .modal-btn {
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 600;
      transition: all 0.2s;
    }

    .modal-btn-primary {
      background: #6C5CE7;
      color: white;
    }

    .modal-btn-primary:hover {
      background: #5F3DC4;
    }

    .modal-btn-secondary {
      background: #eee;
      color: #333;
    }

    .modal-btn-secondary:hover {
      background: #ddd;
    }

    @media (max-width: 640px) {
      h1 {
        font-size: 1.5rem;
      }

      .tabs-container {
        gap: 0.5rem;
      }

      .tab-button {
        padding: 0.5rem 1rem;
        font-size: 0.9rem;
      }

      .add-tab-btn {
        padding: 0.5rem 1rem;
        font-size: 0.9rem;
      }
    }
  `;Ve([g()],pe.prototype,"foods",2);Ve([g()],pe.prototype,"selectedFood",2);Ve([g()],pe.prototype,"tabs",2);Ve([g()],pe.prototype,"activeTabId",2);Ve([g()],pe.prototype,"showNewTabModal",2);Ve([g()],pe.prototype,"newTabName",2);pe=Ve([M("app-foods-enhanced")],pe);var Ts=Object.defineProperty,As=Object.getOwnPropertyDescriptor,Mo=(e,t,i,o)=>{for(var r=o>1?void 0:o?As(t,i):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(r=(o?a(t,i,r):a(r))||r);return o&&r&&Ts(t,i,r),r};let jt=class extends P{constructor(){super(...arguments),this.buttons=[{id:"yes",label:"YES",emoji:"✅",color:"#00B894"},{id:"no",label:"NO",emoji:"❌",color:"#E17055"},{id:"stop",label:"STOP",emoji:"🛑",color:"#D63031"},{id:"food",label:"FOOD",emoji:"🍽️",color:"#FDCB6E"},{id:"tv",label:"TV",emoji:"📺",color:"#0984E3"}]}handleButtonClick(e){const t=new SpeechSynthesisUtterance(e.label);t.rate=1,t.pitch=1.2,t.volume=1,window.speechSynthesis.speak(t)}render(){return h`
      <div class="container">
        <h1>Quick Communication</h1>
        <p class="subtitle">Tap a button to communicate</p>

        <div class="buttons-grid">
          ${this.buttons.map(e=>h`
            <button 
              class="quick-button"
              style="--button-color: ${e.color}"
              @click=${()=>this.handleButtonClick(e)}
            >
              <div class="button-emoji">${e.emoji}</div>
              <div class="button-label">${e.label}</div>
            </button>
          `)}
        </div>

        <div class="info">
          <p><strong>How to use:</strong></p>
          <ul style="margin: 0.5rem 0 0 1.5rem; padding: 0;">
            <li>✅ <strong>YES</strong> - Agree or affirmative response</li>
            <li>❌ <strong>NO</strong> - Disagree or negative response</li>
            <li>🛑 <strong>STOP</strong> - Stop current activity immediately</li>
            <li>🍽️ <strong>FOOD</strong> - Request food or eating</li>
            <li>📺 <strong>TV</strong> - Request television or watch</li>
          </ul>
        </div>
      </div>
    `}};jt.styles=k`
    :host {
      display: block;
      padding: 2rem;
    }

    .container {
      max-width: 900px;
      margin: 0 auto;
    }

    h1 {
      text-align: center;
      color: #6C5CE7;
      margin-bottom: 1rem;
      font-size: 2.5rem;
    }

    .subtitle {
      text-align: center;
      color: #666;
      margin-bottom: 2rem;
      font-size: 1.125rem;
    }

    .buttons-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .quick-button {
      padding: 2rem 1.5rem;
      border: 4px solid white;
      background: var(--button-color);
      border-radius: 1rem;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      transition: all 0.3s;
      color: white;
      font-weight: bold;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .quick-button:hover {
      transform: scale(1.08);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }

    .quick-button:active {
      transform: scale(0.95);
    }

    .button-emoji {
      font-size: 3.5rem;
      line-height: 1;
    }

    .button-label {
      font-size: 1.5rem;
      text-align: center;
    }

    .info {
      background: #F0E8F8;
      padding: 1.5rem;
      border-radius: 1rem;
      border-left: 4px solid #6C5CE7;
      color: #333;
      font-size: 1rem;
      line-height: 1.6;
    }

    @media (max-width: 640px) {
      .buttons-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
      }

      .quick-button {
        padding: 1.5rem 1rem;
      }

      .button-emoji {
        font-size: 2.5rem;
      }

      .button-label {
        font-size: 1.125rem;
      }

      h1 {
        font-size: 1.75rem;
      }
    }
  `;Mo([g()],jt.prototype,"buttons",2);jt=Mo([M("app-home-enhanced")],jt);var Es=Object.defineProperty,Ss=Object.getOwnPropertyDescriptor,qe=(e,t,i,o)=>{for(var r=o>1?void 0:o?Ss(t,i):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(r=(o?a(t,i,r):a(r))||r);return o&&r&&Es(t,i,r),r};let me=class extends P{constructor(){super(...arguments),this.colors=[{id:"red",name:"Red",hex:"#E17055",emoji:"🔴"},{id:"blue",name:"Blue",hex:"#0984E3",emoji:"🔵"},{id:"green",name:"Green",hex:"#00B894",emoji:"🟢"},{id:"yellow",name:"Yellow",hex:"#FDCB6E",emoji:"🟡"},{id:"purple",name:"Purple",hex:"#6C5CE7",emoji:"🟣"},{id:"pink",name:"Pink",hex:"#FD79A8",emoji:"🌸"},{id:"orange",name:"Orange",hex:"#FF9F43",emoji:"🟠"},{id:"brown",name:"Brown",hex:"#8B4513",emoji:"🟤"},{id:"black",name:"Black",hex:"#2D3436",emoji:"⚫"},{id:"white",name:"White",hex:"#F8F9FA",emoji:"⚪"}],this.selectedColor=null,this.tabs=[],this.activeTabId=null,this.showNewTabModal=!1,this.newTabName="",this.premiumManager=B.getInstance(),this.DEFAULT_TAB_ID="default",this.TABS_STORAGE_KEY="caydenjoy_colors_tabs"}connectedCallback(){super.connectedCallback(),this.loadTabs()}loadTabs(){try{const e=localStorage.getItem(this.TABS_STORAGE_KEY);if(e){const t=JSON.parse(e);this.tabs=t.tabs,this.activeTabId=t.activeTabId}else this.initializeDefaultTab()}catch(e){console.error("Error loading tabs:",e),this.initializeDefaultTab()}}initializeDefaultTab(){this.tabs=[{id:this.DEFAULT_TAB_ID,name:"Default",colors:[...this.colors],createdAt:Date.now()}],this.activeTabId=this.DEFAULT_TAB_ID,this.saveTabs()}saveTabs(){try{const e={tabs:this.tabs,activeTabId:this.activeTabId};localStorage.setItem(this.TABS_STORAGE_KEY,JSON.stringify(e))}catch(e){console.error("Error saving tabs:",e)}}getActiveTab(){return this.tabs.find(e=>e.id===this.activeTabId)}switchTab(e){this.activeTabId=e,this.selectedColor=null,this.saveTabs()}openNewTabModal(){this.showNewTabModal=!0,this.newTabName=""}closeNewTabModal(){this.showNewTabModal=!1,this.newTabName=""}createNewTab(){if(!this.newTabName.trim()){alert("Please enter a tab name");return}const e={id:`tab-${Date.now()}`,name:this.newTabName.trim(),colors:[...this.colors],createdAt:Date.now()};this.tabs=[...this.tabs,e],this.activeTabId=e.id,this.selectedColor=null,this.saveTabs(),this.closeNewTabModal()}handleTabNameInput(e){const t=e.target;this.newTabName=t.value}handleTabNameKeydown(e){e.key==="Enter"?this.createNewTab():e.key==="Escape"&&this.closeNewTabModal()}selectColor(e){this.selectedColor=e}render(){const e=this.getActiveTab(),t=this.premiumManager.canAddAdditionalTabs(),i=e?e.colors:this.colors;return h`
      <div class="container">
        <h1>Colors</h1>

        ${this.selectedColor?h`
          <div class="selected-color" style="--selected-color: ${this.selectedColor.hex}">
            <div class="selected-emoji">${this.selectedColor.emoji}</div>
            <div class="selected-name">${this.selectedColor.name}</div>
            <div class="selected-hex">${this.selectedColor.hex}</div>
          </div>
        `:""}

        ${t?h`
          <div class="tabs-container">
            ${this.tabs.map(o=>h`
              <button 
                class="tab-button ${o.id===this.activeTabId?"active":""}"
                @click=${()=>this.switchTab(o.id)}
              >
                ${o.name}
              </button>
            `)}
            <button class="add-tab-btn" @click=${this.openNewTabModal}>
              + New Tab
            </button>
          </div>
        `:""}

        <div class="color-grid">
          ${i.map(o=>h`
            <button 
              class="color-button"
              style="--button-color: ${o.hex}"
              @click=${()=>this.selectColor(o)}
            >
              <div class="color-emoji">${o.emoji}</div>
              <div class="color-name">${o.name}</div>
            </button>
          `)}
        </div>
      </div>

      ${this.showNewTabModal?h`
        <div class="modal-overlay" @click=${this.closeNewTabModal}>
          <div class="modal" @click=${o=>o.stopPropagation()}>
            <div class="modal-header">Create New Tab</div>
            <input 
              type="text" 
              class="modal-input" 
              placeholder="Enter tab name"
              .value=${this.newTabName}
              @input=${this.handleTabNameInput}
              @keydown=${this.handleTabNameKeydown}
              autofocus
            />
            <div class="modal-buttons">
              <button class="modal-btn modal-btn-secondary" @click=${this.closeNewTabModal}>
                Cancel
              </button>
              <button class="modal-btn modal-btn-primary" @click=${this.createNewTab}>
                Create Tab
              </button>
            </div>
          </div>
        </div>
      `:""}
    `}};me.styles=k`
    :host {
      display: block;
      padding: 2rem;
    }

    .container {
      max-width: 900px;
      margin: 0 auto;
    }

    h1 {
      text-align: center;
      color: #6C5CE7;
      margin-bottom: 2rem;
      font-size: 2rem;
    }

    .selected-color {
      text-align: center;
      padding: 2rem;
      background: var(--selected-color, #F0E8F8);
      color: inherit;
      border-radius: 1rem;
      margin-bottom: 2rem;
      min-height: 150px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      border: 4px solid #6C5CE7;
    }

    .selected-emoji {
      font-size: 4rem;
    }

    .selected-name {
      font-size: 1.75rem;
      font-weight: bold;
    }

    .selected-hex {
      font-size: 0.875rem;
      opacity: 0.8;
    }

    .color-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .color-button {
      padding: 1.5rem;
      border: 3px solid white;
      background: var(--button-color);
      border-radius: 0.75rem;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.75rem;
      transition: all 0.3s;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      min-height: 120px;
      justify-content: center;
    }

    .color-button:hover {
      transform: scale(1.08);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }

    .color-button:active {
      transform: scale(0.95);
    }

    .color-emoji {
      font-size: 2.5rem;
    }

    .color-name {
      font-size: 0.875rem;
      font-weight: bold;
      color: white;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    }

    /* Tab System Styles */
    .tabs-container {
      display: flex;
      gap: 0.75rem;
      margin-bottom: 1.75rem;
      align-items: center;
      flex-wrap: wrap;
      padding: 0.75rem;
      background: #f5f5f5;
      border-radius: 0.75rem;
    }

    .tab-button {
      padding: 0.7rem 1.4rem;
      border: 2px solid #ddd;
      background: white;
      border-radius: 0.5rem;
      cursor: pointer;
      font-size: 1.1rem;
      font-weight: 500;
      line-height: 1.4;
      transition: all 0.2s;
      color: #666;
      white-space: normal;
      text-align: center;
      min-height: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .tab-button:hover {
      border-color: #6C5CE7;
      color: #6C5CE7;
    }

    .tab-button.active {
      background: #6C5CE7;
      color: white;
      border-color: #6C5CE7;
    }

    .add-tab-btn {
      padding: 0.7rem 1.2rem;
      background: #4ade80;
      color: white;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      font-size: 1.1rem;
      font-weight: 600;
      line-height: 1.4;
      transition: all 0.2s;
      white-space: normal;
      min-height: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .add-tab-btn:hover {
      background: #22c55e;
      transform: scale(1.03);
    }

    /* Modal Styles */
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }

    .modal {
      background: white;
      border-radius: 1.5rem;
      padding: 2rem;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      max-width: 500px;
      width: 90%;
    }

    .modal-header {
      font-size: 1.5rem;
      font-weight: bold;
      color: #333;
      margin-bottom: 1.5rem;
    }

    .modal-input {
      width: 100%;
      padding: 0.75rem;
      border: 2px solid #ddd;
      border-radius: 0.5rem;
      font-size: 1rem;
      margin-bottom: 1.5rem;
      box-sizing: border-box;
    }

    .modal-input:focus {
      outline: none;
      border-color: #6C5CE7;
    }

    .modal-buttons {
      display: flex;
      gap: 1rem;
      justify-content: flex-end;
    }

    .modal-btn {
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 600;
      transition: all 0.2s;
    }

    .modal-btn-primary {
      background: #6C5CE7;
      color: white;
    }

    .modal-btn-primary:hover {
      background: #5F3DC4;
    }

    .modal-btn-secondary {
      background: #eee;
      color: #333;
    }

    .modal-btn-secondary:hover {
      background: #ddd;
    }

    @media (max-width: 640px) {
      h1 {
        font-size: 1.5rem;
      }

      .tabs-container {
        gap: 0.5rem;
      }

      .tab-button {
        padding: 0.5rem 1rem;
        font-size: 0.9rem;
      }

      .add-tab-btn {
        padding: 0.5rem 1rem;
        font-size: 0.9rem;
      }
    }
  `;qe([g()],me.prototype,"colors",2);qe([g()],me.prototype,"selectedColor",2);qe([g()],me.prototype,"tabs",2);qe([g()],me.prototype,"activeTabId",2);qe([g()],me.prototype,"showNewTabModal",2);qe([g()],me.prototype,"newTabName",2);me=qe([M("app-colors")],me);var zs=Object.defineProperty,Ps=Object.getOwnPropertyDescriptor,He=(e,t,i,o)=>{for(var r=o>1?void 0:o?Ps(t,i):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(r=(o?a(t,i,r):a(r))||r);return o&&r&&zs(t,i,r),r};let be=class extends P{constructor(){super(...arguments),this.numbers=Array.from({length:20},(e,t)=>({id:`num-${t+1}`,number:t+1,dots:t+1})),this.selectedNumber=null,this.tabs=[],this.activeTabId=null,this.showNewTabModal=!1,this.newTabName="",this.premiumManager=B.getInstance(),this.DEFAULT_TAB_ID="default",this.TABS_STORAGE_KEY="caydenjoy_numbers_tabs"}connectedCallback(){super.connectedCallback(),this.loadTabs()}loadTabs(){try{const e=localStorage.getItem(this.TABS_STORAGE_KEY);if(e){const t=JSON.parse(e);this.tabs=t.tabs,this.activeTabId=t.activeTabId}else this.initializeDefaultTab()}catch(e){console.error("Error loading tabs:",e),this.initializeDefaultTab()}}initializeDefaultTab(){this.tabs=[{id:this.DEFAULT_TAB_ID,name:"Default",numbers:[...this.numbers],createdAt:Date.now()}],this.activeTabId=this.DEFAULT_TAB_ID,this.saveTabs()}saveTabs(){try{const e={tabs:this.tabs,activeTabId:this.activeTabId};localStorage.setItem(this.TABS_STORAGE_KEY,JSON.stringify(e))}catch(e){console.error("Error saving tabs:",e)}}getActiveTab(){return this.tabs.find(e=>e.id===this.activeTabId)}switchTab(e){this.activeTabId=e,this.selectedNumber=null,this.saveTabs()}openNewTabModal(){this.showNewTabModal=!0,this.newTabName=""}closeNewTabModal(){this.showNewTabModal=!1,this.newTabName=""}createNewTab(){if(!this.newTabName.trim()){alert("Please enter a tab name");return}const e={id:`tab-${Date.now()}`,name:this.newTabName.trim(),numbers:[...this.numbers],createdAt:Date.now()};this.tabs=[...this.tabs,e],this.activeTabId=e.id,this.selectedNumber=null,this.saveTabs(),this.closeNewTabModal()}handleTabNameInput(e){const t=e.target;this.newTabName=t.value}handleTabNameKeydown(e){e.key==="Enter"?this.createNewTab():e.key==="Escape"&&this.closeNewTabModal()}selectNumber(e){this.selectedNumber=e}render(){const e=this.getActiveTab(),t=this.premiumManager.canAddAdditionalTabs(),i=e?e.numbers:this.numbers;return h`
      <div class="container">
        <h1>Numbers</h1>

        ${this.selectedNumber?h`
          <div class="selected-number">
            <div class="selected-value">${this.selectedNumber.number}</div>
            <div class="dot-display">
              ${Array.from({length:this.selectedNumber.dots},(o,r)=>h`
                <div class="dot">${r+1}</div>
              `)}
            </div>
          </div>
        `:""}

        ${t?h`
          <div class="tabs-container">
            ${this.tabs.map(o=>h`
              <button 
                class="tab-button ${o.id===this.activeTabId?"active":""}"
                @click=${()=>this.switchTab(o.id)}
              >
                ${o.name}
              </button>
            `)}
            <button class="add-tab-btn" @click=${this.openNewTabModal}>
              + New Tab
            </button>
          </div>
        `:""}

        <div class="number-grid">
          ${i.map(o=>h`
            <button 
              class="number-button"
              @click=${()=>this.selectNumber(o)}
            >
              ${o.number}
            </button>
          `)}
        </div>
      </div>

      ${this.showNewTabModal?h`
        <div class="modal-overlay" @click=${this.closeNewTabModal}>
          <div class="modal" @click=${o=>o.stopPropagation()}>
            <div class="modal-header">Create New Tab</div>
            <input 
              type="text" 
              class="modal-input" 
              placeholder="Enter tab name"
              .value=${this.newTabName}
              @input=${this.handleTabNameInput}
              @keydown=${this.handleTabNameKeydown}
              autofocus
            />
            <div class="modal-buttons">
              <button class="modal-btn modal-btn-secondary" @click=${this.closeNewTabModal}>
                Cancel
              </button>
              <button class="modal-btn modal-btn-primary" @click=${this.createNewTab}>
                Create Tab
              </button>
            </div>
          </div>
        </div>
      `:""}
    `}};be.styles=k`
    :host {
      display: block;
      padding: 2rem;
    }

    .container {
      max-width: 900px;
      margin: 0 auto;
    }

    h1 {
      text-align: center;
      color: #6C5CE7;
      margin-bottom: 2rem;
      font-size: 2rem;
    }

    .selected-number {
      text-align: center;
      padding: 2rem;
      background: linear-gradient(135deg, #6C5CE7 0%, #5F3DC4 100%);
      color: white;
      border-radius: 1rem;
      margin-bottom: 2rem;
      min-height: 150px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
    }

    .selected-value {
      font-size: 4rem;
      font-weight: bold;
      line-height: 1;
    }

    .dot-display {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      justify-content: center;
      margin-top: 1rem;
      max-width: 200px;
    }

    .dot {
      width: 2rem;
      height: 2rem;
      background: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      color: #6C5CE7;
      font-size: 0.875rem;
    }

    .number-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .number-button {
      padding: 1.5rem;
      border: 3px solid #6C5CE7;
      background: white;
      border-radius: 0.75rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s;
      font-size: 1.5rem;
      font-weight: bold;
      color: #6C5CE7;
    }

    .number-button:hover {
      transform: scale(1.1);
      background: #f0e8f8;
      box-shadow: 0 4px 12px rgba(108, 92, 231, 0.2);
    }

    .number-button:active {
      transform: scale(0.95);
    }

    /* Tab System Styles */
    .tabs-container {
      display: flex;
      gap: 0.75rem;
      margin-bottom: 1.75rem;
      align-items: center;
      flex-wrap: wrap;
      padding: 0.75rem;
      background: #f5f5f5;
      border-radius: 0.75rem;
    }

    .tab-button {
      padding: 0.7rem 1.4rem;
      border: 2px solid #ddd;
      background: white;
      border-radius: 0.5rem;
      cursor: pointer;
      font-size: 1.1rem;
      font-weight: 500;
      line-height: 1.4;
      transition: all 0.2s;
      color: #666;
      white-space: normal;
      text-align: center;
      min-height: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .tab-button:hover {
      border-color: #6C5CE7;
      color: #6C5CE7;
    }

    .tab-button.active {
      background: #6C5CE7;
      color: white;
      border-color: #6C5CE7;
    }

    .add-tab-btn {
      padding: 0.7rem 1.2rem;
      background: #4ade80;
      color: white;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      font-size: 1.1rem;
      font-weight: 600;
      line-height: 1.4;
      transition: all 0.2s;
      white-space: normal;
      min-height: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .add-tab-btn:hover {
      background: #22c55e;
      transform: scale(1.03);
    }

    /* Modal Styles */
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }

    .modal {
      background: white;
      border-radius: 1.5rem;
      padding: 2rem;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      max-width: 500px;
      width: 90%;
    }

    .modal-header {
      font-size: 1.5rem;
      font-weight: bold;
      color: #333;
      margin-bottom: 1.5rem;
    }

    .modal-input {
      width: 100%;
      padding: 0.75rem;
      border: 2px solid #ddd;
      border-radius: 0.5rem;
      font-size: 1rem;
      margin-bottom: 1.5rem;
      box-sizing: border-box;
    }

    .modal-input:focus {
      outline: none;
      border-color: #6C5CE7;
    }

    .modal-buttons {
      display: flex;
      gap: 1rem;
      justify-content: flex-end;
    }

    .modal-btn {
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 600;
      transition: all 0.2s;
    }

    .modal-btn-primary {
      background: #6C5CE7;
      color: white;
    }

    .modal-btn-primary:hover {
      background: #5F3DC4;
    }

    .modal-btn-secondary {
      background: #eee;
      color: #333;
    }

    .modal-btn-secondary:hover {
      background: #ddd;
    }

    @media (max-width: 640px) {
      h1 {
        font-size: 1.5rem;
      }

      .tabs-container {
        gap: 0.5rem;
      }

      .tab-button {
        padding: 0.5rem 1rem;
        font-size: 0.9rem;
      }

      .add-tab-btn {
        padding: 0.5rem 1rem;
        font-size: 0.9rem;
      }
    }
  `;He([g()],be.prototype,"numbers",2);He([g()],be.prototype,"selectedNumber",2);He([g()],be.prototype,"tabs",2);He([g()],be.prototype,"activeTabId",2);He([g()],be.prototype,"showNewTabModal",2);He([g()],be.prototype,"newTabName",2);be=He([M("app-numbers")],be);var Is=Object.defineProperty,Ds=Object.getOwnPropertyDescriptor,Ye=(e,t,i,o)=>{for(var r=o>1?void 0:o?Ds(t,i):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(r=(o?a(t,i,r):a(r))||r);return o&&r&&Is(t,i,r),r};let fe=class extends P{constructor(){super(...arguments),this.places=[{id:"home",name:"Home",emoji:"🏠",color:"#FF6B6B"},{id:"school",name:"School",emoji:"🏫",color:"#4ECDC4"},{id:"park",name:"Park",emoji:"🌳",color:"#45B7D1"},{id:"store",name:"Store",emoji:"🏪",color:"#F7DC6F"},{id:"hospital",name:"Hospital",emoji:"🏥",color:"#BB8FCE"},{id:"beach",name:"Beach",emoji:"🏖️",color:"#85C1E2"},{id:"restaurant",name:"Restaurant",emoji:"🍽️",color:"#F8B88B"},{id:"library",name:"Library",emoji:"📚",color:"#CD7672"},{id:"zoo",name:"Zoo",emoji:"🦁",color:"#95E1D3"},{id:"playground",name:"Playground",emoji:"🎡",color:"#C7CEEA"}],this.selectedPlace=null,this.tabs=[],this.activeTabId=null,this.showNewTabModal=!1,this.newTabName="",this.premiumManager=B.getInstance(),this.DEFAULT_TAB_ID="default",this.TABS_STORAGE_KEY="caydenjoy_places_tabs"}connectedCallback(){super.connectedCallback(),this.loadTabs()}loadTabs(){try{const e=localStorage.getItem(this.TABS_STORAGE_KEY);if(e){const t=JSON.parse(e);this.tabs=t.tabs,this.activeTabId=t.activeTabId}else this.initializeDefaultTab()}catch(e){console.error("Error loading tabs:",e),this.initializeDefaultTab()}}initializeDefaultTab(){this.tabs=[{id:this.DEFAULT_TAB_ID,name:"Default",places:[...this.places],createdAt:Date.now()}],this.activeTabId=this.DEFAULT_TAB_ID,this.saveTabs()}saveTabs(){try{const e={tabs:this.tabs,activeTabId:this.activeTabId};localStorage.setItem(this.TABS_STORAGE_KEY,JSON.stringify(e))}catch(e){console.error("Error saving tabs:",e)}}getActiveTab(){return this.tabs.find(e=>e.id===this.activeTabId)}switchTab(e){this.activeTabId=e,this.selectedPlace=null,this.saveTabs()}openNewTabModal(){this.showNewTabModal=!0,this.newTabName=""}closeNewTabModal(){this.showNewTabModal=!1,this.newTabName=""}createNewTab(){if(!this.newTabName.trim()){alert("Please enter a tab name");return}const e={id:`tab-${Date.now()}`,name:this.newTabName.trim(),places:[...this.places],createdAt:Date.now()};this.tabs=[...this.tabs,e],this.activeTabId=e.id,this.selectedPlace=null,this.saveTabs(),this.closeNewTabModal()}handleTabNameInput(e){const t=e.target;this.newTabName=t.value}handleTabNameKeydown(e){e.key==="Enter"?this.createNewTab():e.key==="Escape"&&this.closeNewTabModal()}selectPlace(e){this.selectedPlace=e}render(){const e=this.getActiveTab(),t=this.premiumManager.canAddAdditionalTabs(),i=e?e.places:this.places;return h`
      <div class="container">
        <h1>Places</h1>

        ${this.selectedPlace?h`
          <div class="selected-place" style="--place-color: ${this.selectedPlace.color}">
            <div class="selected-emoji">${this.selectedPlace.emoji}</div>
            <div class="selected-name">${this.selectedPlace.name}</div>
          </div>
        `:""}

        ${t?h`
          <div class="tabs-container">
            ${this.tabs.map(o=>h`
              <button 
                class="tab-button ${o.id===this.activeTabId?"active":""}"
                @click=${()=>this.switchTab(o.id)}
              >
                ${o.name}
              </button>
            `)}
            <button class="add-tab-btn" @click=${this.openNewTabModal}>
              + New Tab
            </button>
          </div>
        `:""}

        <div class="place-grid">
          ${i.map(o=>h`
            <button 
              class="place-button"
              style="--place-color: ${o.color}"
              @click=${()=>this.selectPlace(o)}
            >
              <div class="place-emoji">${o.emoji}</div>
              <div class="place-name">${o.name}</div>
            </button>
          `)}
        </div>
      </div>

      ${this.showNewTabModal?h`
        <div class="modal-overlay" @click=${this.closeNewTabModal}>
          <div class="modal" @click=${o=>o.stopPropagation()}>
            <div class="modal-header">Create New Tab</div>
            <input 
              type="text" 
              class="modal-input" 
              placeholder="Enter tab name"
              .value=${this.newTabName}
              @input=${this.handleTabNameInput}
              @keydown=${this.handleTabNameKeydown}
              autofocus
            />
            <div class="modal-buttons">
              <button class="modal-btn modal-btn-secondary" @click=${this.closeNewTabModal}>
                Cancel
              </button>
              <button class="modal-btn modal-btn-primary" @click=${this.createNewTab}>
                Create Tab
              </button>
            </div>
          </div>
        </div>
      `:""}
    `}};fe.styles=k`
    :host {
      display: block;
      padding: 2rem;
    }

    .container {
      max-width: 900px;
      margin: 0 auto;
    }

    h1 {
      text-align: center;
      color: #6C5CE7;
      margin-bottom: 2rem;
      font-size: 2rem;
    }

    .selected-place {
      text-align: center;
      padding: 2rem;
      background: var(--place-color, #F0E8F8);
      color: white;
      border-radius: 1rem;
      margin-bottom: 2rem;
      min-height: 150px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
    }

    .selected-emoji {
      font-size: 4rem;
      line-height: 1;
    }

    .selected-name {
      font-size: 1.75rem;
      font-weight: bold;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    }

    .place-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .place-button {
      padding: 1.5rem;
      border: 3px solid white;
      background: var(--place-color);
      border-radius: 0.75rem;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.75rem;
      transition: all 0.3s;
      color: white;
      font-weight: bold;
      min-height: 140px;
      justify-content: center;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .place-button:hover {
      transform: scale(1.08);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }

    .place-button:active {
      transform: scale(0.95);
    }

    .place-emoji {
      font-size: 2.5rem;
    }

    .place-name {
      font-size: 0.875rem;
    }

    /* Tab System Styles */
    .tabs-container {
      display: flex;
      gap: 0.75rem;
      margin-bottom: 1.75rem;
      align-items: center;
      flex-wrap: wrap;
      padding: 0.75rem;
      background: #f5f5f5;
      border-radius: 0.75rem;
    }

    .tab-button {
      padding: 0.7rem 1.4rem;
      border: 2px solid #ddd;
      background: white;
      border-radius: 0.5rem;
      cursor: pointer;
      font-size: 1.1rem;
      font-weight: 500;
      line-height: 1.4;
      transition: all 0.2s;
      color: #666;
      white-space: normal;
      text-align: center;
      min-height: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .tab-button:hover {
      border-color: #6C5CE7;
      color: #6C5CE7;
    }

    .tab-button.active {
      background: #6C5CE7;
      color: white;
      border-color: #6C5CE7;
    }

    .add-tab-btn {
      padding: 0.7rem 1.2rem;
      background: #4ade80;
      color: white;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      font-size: 1.1rem;
      font-weight: 600;
      line-height: 1.4;
      transition: all 0.2s;
      white-space: normal;
      min-height: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .add-tab-btn:hover {
      background: #22c55e;
      transform: scale(1.03);
    }

    /* Modal Styles */
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }

    .modal {
      background: white;
      border-radius: 1.5rem;
      padding: 2rem;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      max-width: 500px;
      width: 90%;
    }

    .modal-header {
      font-size: 1.5rem;
      font-weight: bold;
      color: #333;
      margin-bottom: 1.5rem;
    }

    .modal-input {
      width: 100%;
      padding: 0.75rem;
      border: 2px solid #ddd;
      border-radius: 0.5rem;
      font-size: 1rem;
      margin-bottom: 1.5rem;
      box-sizing: border-box;
    }

    .modal-input:focus {
      outline: none;
      border-color: #6C5CE7;
    }

    .modal-buttons {
      display: flex;
      gap: 1rem;
      justify-content: flex-end;
    }

    .modal-btn {
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 600;
      transition: all 0.2s;
    }

    .modal-btn-primary {
      background: #6C5CE7;
      color: white;
    }

    .modal-btn-primary:hover {
      background: #5F3DC4;
    }

    .modal-btn-secondary {
      background: #eee;
      color: #333;
    }

    .modal-btn-secondary:hover {
      background: #ddd;
    }

    @media (max-width: 640px) {
      h1 {
        font-size: 1.5rem;
      }

      .tabs-container {
        gap: 0.5rem;
      }

      .tab-button {
        padding: 0.5rem 1rem;
        font-size: 0.9rem;
      }

      .add-tab-btn {
        padding: 0.5rem 1rem;
        font-size: 0.9rem;
      }
    }
  `;Ye([g()],fe.prototype,"places",2);Ye([g()],fe.prototype,"selectedPlace",2);Ye([g()],fe.prototype,"tabs",2);Ye([g()],fe.prototype,"activeTabId",2);Ye([g()],fe.prototype,"showNewTabModal",2);Ye([g()],fe.prototype,"newTabName",2);fe=Ye([M("app-places")],fe);var Ns=Object.defineProperty,Os=Object.getOwnPropertyDescriptor,Xt=(e,t,i,o)=>{for(var r=o>1?void 0:o?Os(t,i):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(r=(o?a(t,i,r):a(r))||r);return o&&r&&Ns(t,i,r),r};let Ze=class extends P{constructor(){super(...arguments),this.isPremium=!1,this.purchaseMessage="",this.showPurchaseConfirm=!1,this.premiumManager=B.getInstance()}connectedCallback(){super.connectedCallback(),this.checkPremium()}checkPremium(){this.isPremium=this.premiumManager.isPremium()}simulatePurchase(){this.showPurchaseConfirm=!0}confirmPurchase(){this.premiumManager.simulatePremiumPurchase(),this.isPremium=!0,this.showPurchaseConfirm=!1,this.purchaseMessage="🎉 Premium unlocked! Thank you for your purchase!",setTimeout(()=>{this.purchaseMessage=""},4e3)}cancelPurchase(){this.showPurchaseConfirm=!1}navigateTo(e){window.location.hash=`#${e}`}render(){return this.isPremium?h`
        <div class="container">
          <div class="header already-premium">
            <h1>👑 Premium Active</h1>
            <p>Thank you for supporting CaydenJoy!</p>
            <a href="/#/custom-images" class="back-link">📸 Go to Custom Images</a>
            <a href="/#/settings" class="back-link">⚙️ Back to Settings</a>
          </div>

          <div class="premium-card">
            <div class="status-banner">
              <h2>✅ You have premium access!</h2>
              <p>Enjoy all premium features including custom image uploads and more.</p>
            </div>

            <div class="features-section">
              <h2>✨ Your Premium Features</h2>
              <div class="features-grid">
                <div class="feature-card">
                  <div class="feature-icon">📸</div>
                  <div class="feature-title">Custom Images</div>
                  <div class="feature-description">Upload photos of family, food, and places</div>
                </div>

                <div class="feature-card">
                  <div class="feature-icon">🎤</div>
                  <div class="feature-title">Voice Customization</div>
                  <div class="feature-description">Personalize voice characteristics</div>
                </div>

                <div class="feature-card">
                  <div class="feature-icon">☁️</div>
                  <div class="feature-title">Cloud Backup</div>
                  <div class="feature-description">Backup your settings and images</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `:h`
      <div class="container">
        <div class="header">
          <h1>🌟 Upgrade to Premium</h1>
          <p>Unlock all features for just $5.99</p>
        </div>

        ${this.purchaseMessage?h`
              <div class="premium-card">
                <div class="message success">${this.purchaseMessage}</div>
              </div>
            `:""}

        <div class="premium-card">
          <div class="features-section">
            <h2>✨ Premium Features</h2>
            <div class="features-grid">
              <div class="feature-card">
                <div class="feature-icon">📸</div>
                <div class="feature-title">Custom Images</div>
                <div class="feature-description">
                  Upload photos of family members, favorite foods, places you visit, and more
                </div>
              </div>

              <div class="feature-card">
                <div class="feature-icon">🎤</div>
                <div class="feature-title">Voice Customization</div>
                <div class="feature-description">
                  Personalize voice speed, pitch, and language preferences
                </div>
              </div>

              <div class="feature-card">
                <div class="feature-icon">☁️</div>
                <div class="feature-title">Cloud Backup</div>
                <div class="feature-description">
                  Backup and sync your custom images and settings across devices
                </div>
              </div>

              <div class="feature-card">
                <div class="feature-icon">📑</div>
                <div class="feature-title">Additional Tabs</div>
                <div class="feature-description">
                  Create multiple custom tabs for Communication, Foods, Colors, Numbers, Places, and Family Puzzle
                </div>
              </div>
            </div>

            <ul class="benefits-list">
              <li>Unlimited custom image uploads</li>
              <li>Organize images by category</li>
              <li>Create multiple custom tabs across 6 different learning features</li>
              <li>Priority support</li>
              <li>No ads or tracking</li>
              <li>One-time purchase - yours forever</li>
            </ul>
          </div>
        </div>

        <div class="premium-card">
          <div class="pricing-section">
            <h3 style="margin-top: 0; color: #333;">Pricing & Upgrade Details</h3>
            
            <div style="background: #f0f7ff; border-left: 4px solid #667eea; padding: 15px; border-radius: 8px; margin: 15px 0;">
              <p style="margin: 0 0 10px 0;"><strong>Base App Cost:</strong> $19.99 (One-Time Purchase)</p>
              <p style="margin: 0 0 10px 0;"><strong>Premium Upgrade:</strong> <span style="color: #28a745; font-weight: bold;">$5.99</span> (One-Time Purchase)</p>
              <p style="margin: 0; font-size: 13px; color: #666;"><em>Total investment: $25.98 for full access</em></p>
            </div>

            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 15px 0;">
              <h4 style="margin-top: 0; color: #333;">Why This Price?</h4>
              <ul style="margin: 10px 0; padding-left: 20px;">
                <li>Unlike subscription apps ($5-15/month = $60-180/year), this is a <strong>lifetime</strong> investment</li>
                <li>Professional AAC software costs $99-$300+</li>
                <li>Your payment directly supports development and updates</li>
                <li>No hidden fees or recurring charges ever</li>
              </ul>
            </div>

            <div class="price-tag">
              <p class="price-amount">$5.99</p>
              <p class="price-label">One-Time Premium Upgrade</p>
            </div>
            <p style="color: #666; margin-top: 10px; font-size: 14px;">✓ Save money compared to similar apps ($9.99 - $19.99)</p>
          </div>

          <div style="background: #e8f5e9; border: 1px solid #4caf50; border-radius: 8px; padding: 15px; margin: 20px 0;">
            <h4 style="margin-top: 0; color: #2e7d32;">✓ What You're Getting</h4>
            <ul style="margin: 10px 0; padding-left: 20px; color: #333;">
              <li>Unlimited custom image uploads</li>
              <li>Organize your family photos by category</li>
              <li>Voice customization options</li>
              <li>Cloud backup of your settings (optional)</li>
              <li>Priority customer support</li>
              <li>All future premium feature updates</li>
              <li>No ads • No tracking • No subscriptions</li>
            </ul>
          </div>

          <div class="action-buttons">
            <button class="btn btn-primary" @click="${this.simulatePurchase}">
              🛒 Unlock Premium Now ($5.99)
            </button>
            <button class="btn btn-secondary" @click="${()=>this.navigateTo("/settings")}">
              Later
            </button>
          </div>
        </div>

        <div class="premium-card faq-section">
          <h3>❓ Frequently Asked Questions</h3>

          <div class="faq-item">
            <div class="faq-question">Is this a subscription?</div>
            <div class="faq-answer">
              No! Premium is a one-time purchase of $5.99. You keep it forever. There are no monthly or yearly fees.
            </div>
          </div>

          <div class="faq-item">
            <div class="faq-question">How much does the base app cost?</div>
            <div class="faq-answer">
              The base app is $19.99 (one-time purchase). Premium upgrade is an additional $5.99 for a total of $25.98.
            </div>
          </div>

          <div class="faq-item">
            <div class="faq-question">Why is it more affordable than other AAC apps?</div>
            <div class="faq-answer">
              Professional AAC software costs $99-$300+. We believe quality communication tools should be accessible to everyone. Our pricing reflects this mission.
            </div>
          </div>

          <div class="faq-item">
            <div class="faq-question">Can I upgrade from free to premium?</div>
            <div class="faq-answer">
              Yes! You can upgrade anytime by clicking the "Upgrade to Premium" button in Settings or visiting this page.
            </div>
          </div>

          <div class="faq-item">
            <div class="faq-question">Can I get a refund?</div>
            <div class="faq-answer">
              Yes! You have 48 hours after purchase to request a refund if you're not satisfied. Visit your app store's account settings to request a refund.
            </div>
          </div>

          <div class="faq-item">
            <div class="faq-question">Is there a family or group discount?</div>
            <div class="faq-answer">
              Contact us at dallas8000@gmail.com for bulk licensing, family plans, or institutional pricing.
            </div>
          </div>

          <div class="faq-item">
            <div class="faq-question">Will my data be safe?</div>
            <div class="faq-answer">
              All data stays on your device by default. We never track users. Optional cloud backup is encrypted and secure.
            </div>
          </div>

          <div class="faq-item">
            <div class="faq-question">What if I have more questions about payment?</div>
            <div class="faq-answer">
              Email us at dallas8000@gmail.com with any payment or upgrade questions. We're here to help!
            </div>
          </div>

          <div class="faq-item">
            <div class="faq-question">What about accessibility?</div>
            <div class="faq-answer">
              CaydenJoy is built for accessibility. All features including premium features work with all assistive technologies.
            </div>
          </div>
        </div>

        ${this.showPurchaseConfirm?h`
              <div class="confirmation-modal" @click="${this.cancelPurchase}">
                <div class="confirmation-dialog" @click="${e=>e.stopPropagation()}">
                  <h2>💳 Complete Purchase</h2>
                  <p>Unlock Premium for $5.99</p>
                  <p style="font-size: 14px; color: #999;">
                    This is a simulated purchase. In production, this would connect to Google Play
                    In-App Billing.
                  </p>
                  <div class="confirmation-buttons">
                    <button class="confirm-yes" @click="${this.confirmPurchase}">
                      ✓ Confirm Purchase
                    </button>
                    <button class="confirm-no" @click="${this.cancelPurchase}">Cancel</button>
                  </div>
                </div>
              </div>
            `:""}
      </div>
    `}};Ze.styles=k`
    :host {
      display: block;
      background: linear-gradient(135deg, #ffd89b 0%, #19547b 100%);
      min-height: 100vh;
      padding: 20px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
        Cantarell, sans-serif;
    }

    .container {
      max-width: 800px;
      margin: 0 auto;
    }

    .header {
      text-align: center;
      color: white;
      margin-bottom: 40px;
    }

    .header h1 {
      font-size: 36px;
      margin: 0 0 10px 0;
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    }

    .header p {
      font-size: 18px;
      opacity: 0.9;
      margin: 0;
    }

    .premium-card {
      background: white;
      border-radius: 16px;
      padding: 30px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      margin-bottom: 20px;
    }

    .status-banner {
      background: #d4edda;
      border: 2px solid #28a745;
      border-radius: 12px;
      padding: 20px;
      text-align: center;
      margin-bottom: 30px;
      color: #155724;
    }

    .status-banner h2 {
      margin: 0 0 10px 0;
      font-size: 24px;
    }

    .status-banner p {
      margin: 0;
      font-size: 16px;
    }

    .features-section h2 {
      color: #333;
      text-align: center;
      margin-top: 0;
      font-size: 28px;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin: 30px 0;
    }

    .feature-card {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border-radius: 12px;
      padding: 20px;
      text-align: center;
      transition: all 0.3s;
    }

    .feature-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
    }

    .feature-icon {
      font-size: 40px;
      margin-bottom: 10px;
    }

    .feature-title {
      font-size: 18px;
      font-weight: bold;
      margin: 10px 0;
    }

    .feature-description {
      font-size: 14px;
      opacity: 0.9;
    }

    .pricing-section {
      text-align: center;
      margin: 40px 0;
    }

    .price-tag {
      display: inline-block;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 30px 40px;
      border-radius: 16px;
      margin: 20px 0;
      box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
    }

    .price-amount {
      font-size: 48px;
      font-weight: bold;
      margin: 0;
    }

    .price-label {
      font-size: 18px;
      opacity: 0.9;
      margin: 0;
    }

    .benefits-list {
      list-style: none;
      padding: 0;
      margin: 20px 0;
      text-align: left;
    }

    .benefits-list li {
      padding: 12px 0;
      border-bottom: 1px solid #eee;
      display: flex;
      align-items: center;
      gap: 12px;
      color: #333;
    }

    .benefits-list li:last-child {
      border-bottom: none;
    }

    .benefits-list li::before {
      content: '✓';
      color: #28a745;
      font-weight: bold;
      font-size: 20px;
    }

    .action-buttons {
      display: flex;
      gap: 15px;
      justify-content: center;
      flex-wrap: wrap;
      margin: 30px 0;
    }

    .btn {
      padding: 16px 32px;
      border: none;
      border-radius: 10px;
      font-size: 18px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s;
      font-family: inherit;
      text-transform: uppercase;
    }

    .btn-primary {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 15px 35px rgba(102, 126, 234, 0.4);
    }

    .btn-secondary {
      background: #e0e0e0;
      color: #333;
    }

    .btn-secondary:hover {
      background: #d0d0d0;
    }

    .btn-success {
      background: #28a745;
      color: white;
    }

    .btn-success:hover {
      background: #218838;
    }

    .message {
      padding: 15px 20px;
      border-radius: 10px;
      margin: 20px 0;
      text-align: center;
      font-weight: bold;
    }

    .message.success {
      background: #d4edda;
      color: #155724;
      border: 2px solid #28a745;
    }

    .message.error {
      background: #f8d7da;
      color: #721c24;
      border: 2px solid #f5c6cb;
    }

    .confirmation-modal {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }

    .confirmation-dialog {
      background: white;
      border-radius: 16px;
      padding: 40px;
      max-width: 500px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      text-align: center;
    }

    .confirmation-dialog h2 {
      color: #333;
      margin-top: 0;
      font-size: 24px;
    }

    .confirmation-dialog p {
      color: #666;
      font-size: 18px;
      margin: 15px 0;
    }

    .confirmation-buttons {
      display: flex;
      gap: 15px;
      justify-content: center;
      margin-top: 30px;
    }

    .confirmation-buttons button {
      flex: 1;
      padding: 12px;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      font-family: inherit;
    }

    .confirm-yes {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }

    .confirm-no {
      background: #e0e0e0;
      color: #333;
    }

    .faq-section {
      background: #f8f9fa;
      border-radius: 12px;
      padding: 20px;
      margin: 30px 0;
    }

    .faq-section h3 {
      color: #333;
      margin-top: 0;
    }

    .faq-item {
      margin: 15px 0;
      padding: 15px;
      background: white;
      border-radius: 8px;
    }

    .faq-question {
      font-weight: bold;
      color: #667eea;
      margin-bottom: 8px;
    }

    .faq-answer {
      color: #666;
      font-size: 14px;
    }

    .already-premium {
      text-align: center;
      color: white;
    }

    .already-premium h2 {
      font-size: 32px;
      margin: 20px 0;
    }

    .back-link {
      display: inline-block;
      color: white;
      text-decoration: none;
      padding: 10px 20px;
      border: 2px solid white;
      border-radius: 8px;
      margin-top: 20px;
      transition: all 0.3s;
    }

    .back-link:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  `;Xt([g()],Ze.prototype,"isPremium",2);Xt([g()],Ze.prototype,"purchaseMessage",2);Xt([g()],Ze.prototype,"showPurchaseConfirm",2);Ze=Xt([M("app-premium")],Ze);const ht="caydenjoy_custom_images",ho=50,po=500*1024;class Oe{constructor(){this.initStorage()}static getInstance(){return Oe.instance||(Oe.instance=new Oe),Oe.instance}initStorage(){try{localStorage.getItem(ht)||localStorage.setItem(ht,JSON.stringify([]))}catch(t){console.error("Error initializing custom images storage:",t)}}getImages(){try{const t=localStorage.getItem(ht);return t?JSON.parse(t):[]}catch(t){return console.error("Error loading custom images:",t),[]}}saveImages(t){try{localStorage.setItem(ht,JSON.stringify(t))}catch(i){console.error("Error saving custom images:",i),i instanceof DOMException&&i.name==="QuotaExceededError"&&this.handleStorageQuotaExceeded()}}handleStorageQuotaExceeded(){console.warn("Storage quota exceeded. Removing oldest images.");const t=this.getImages();t.length>0&&(t.sort((i,o)=>i.uploadedAt-o.uploadedAt),t.splice(0,5),this.saveImages(t))}addImage(t,i,o){try{if(!t||!i||!o)throw new Error("Missing required fields");if(o.length>po)throw new Error(`Image too large. Maximum size: ${po/1024}KB`);const r=this.getImages();if(r.length>=ho)throw new Error(`Maximum ${ho} images reached`);const s={id:`img_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,category:t,name:i,dataUrl:o,uploadedAt:Date.now()};return r.push(s),this.saveImages(r),s}catch(r){return console.error("Error adding custom image:",r),null}}getImagesByCategory(t){return this.getImages().filter(i=>i.category===t)}getImage(t){return this.getImages().find(i=>i.id===t)}getAllImages(){return this.getImages()}updateImage(t,i){try{const o=this.getImages(),r=o.find(s=>s.id===t);return r?(r.name=i,this.saveImages(o),!0):!1}catch(o){return console.error("Error updating image:",o),!1}}deleteImage(t){try{const i=this.getImages().filter(o=>o.id!==t);return this.saveImages(i),!0}catch(i){return console.error("Error deleting image:",i),!1}}deleteByCategory(t){try{const i=this.getImages().filter(o=>o.category!==t);return this.saveImages(i),!0}catch(i){return console.error("Error deleting images by category:",i),!1}}getStorageInfo(){const i=this.getImages().reduce((r,s)=>r+s.dataUrl.length,0),o=5*1024*1024;return{used:i,max:o,percentage:Math.round(i/o*100)}}clearAll(){try{return localStorage.setItem(ht,JSON.stringify([])),!0}catch(t){return console.error("Error clearing images:",t),!1}}exportData(){return JSON.stringify(this.getImages())}importData(t){try{const i=JSON.parse(t);return Array.isArray(i)?(this.saveImages(i),!0):!1}catch(i){return console.error("Error importing images:",i),!1}}}Oe.getInstance();var Ms=Object.defineProperty,Rs=Object.getOwnPropertyDescriptor,ze=(e,t,i,o)=>{for(var r=o>1?void 0:o?Rs(t,i):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(r=(o?a(t,i,r):a(r))||r);return o&&r&&Ms(t,i,r),r};let le=class extends P{constructor(){super(...arguments),this.selectedCategory="foods",this.selectedFile=null,this.imageName="",this.images=[],this.isPremium=!1,this.storageInfo={used:0,max:0,percentage:0},this.uploadMessage="",this.premiumManager=B.getInstance(),this.imagesManager=Oe.getInstance(),this.fileInputRef=null}connectedCallback(){super.connectedCallback(),this.checkPremium(),this.loadImages()}checkPremium(){this.isPremium=this.premiumManager.canUseCustomImages()}loadImages(){this.images=this.imagesManager.getAllImages(),this.storageInfo=this.imagesManager.getStorageInfo()}onFileSelected(e){const i=e.target.files?.[0];if(i){if(!i.type.startsWith("image/")){this.uploadMessage="Please select an image file";return}if(i.size>500*1024){this.uploadMessage="Image must be smaller than 500KB";return}this.selectedFile=i,this.uploadMessage=""}}readFileAsDataUrl(e){return new Promise((t,i)=>{const o=new FileReader;o.onload=()=>t(o.result),o.onerror=i,o.readAsDataURL(e)})}async uploadImage(){if(!this.selectedFile||!this.imageName){this.uploadMessage="Please select an image and enter a name";return}try{const e=await this.readFileAsDataUrl(this.selectedFile);this.imagesManager.addImage(this.selectedCategory,this.imageName,e)?(this.uploadMessage=`✅ Image "${this.imageName}" uploaded successfully!`,this.selectedFile=null,this.imageName="",this.selectedCategory="foods",this.fileInputRef&&(this.fileInputRef.value=""),this.loadImages(),setTimeout(()=>{this.uploadMessage=""},3e3)):this.uploadMessage="❌ Failed to upload image"}catch(e){this.uploadMessage=`❌ Error: ${e instanceof Error?e.message:"Unknown error"}`}}deleteImage(e){confirm("Delete this image?")&&(this.imagesManager.deleteImage(e),this.loadImages())}deleteCategory(){confirm(`Delete all images in ${this.selectedCategory}?`)&&(this.imagesManager.deleteByCategory(this.selectedCategory),this.loadImages())}clearAll(){confirm("Delete ALL custom images? This cannot be undone.")&&(this.imagesManager.clearAll(),this.loadImages(),this.uploadMessage="✅ All images cleared",setTimeout(()=>{this.uploadMessage=""},2e3))}goToPremium(){window.location.hash="#/premium"}render(){const e=this.imagesManager.getImagesByCategory(this.selectedCategory);return h`
      <div class="container">
        <h1>
          🖼️ Custom Images
          ${this.isPremium?h`<span class="premium-badge">Premium</span>`:""}
        </h1>

        ${this.isPremium?h`
              <div class="upload-section">
                <h2>📸 Upload New Image</h2>

                <label>Category:</label>
                <select class="category-select" @change="${t=>{this.selectedCategory=t.target.value}}">
                  <option value="foods">Foods</option>
                  <option value="colors">Colors</option>
                  <option value="places">Places</option>
                  <option value="family">Family</option>
                  <option value="activities">Activities</option>
                  <option value="other">Other</option>
                </select>

                <label>Image Name:</label>
                <input
                  type="text"
                  class="name-input"
                  placeholder="e.g., Daddy's Pizza"
                  .value="${this.imageName}"
                  @input="${t=>{this.imageName=t.target.value}}"
                />

                <div class="file-input-wrapper">
                  <label class="file-input-label">📁 Choose Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    class="file-input-hidden"
                    @change="${this.onFileSelected.bind(this)}"
                    ${t=>{this.fileInputRef=t}}
                  />
                </div>

                ${this.selectedFile?h`<div class="file-name">✓ ${this.selectedFile.name}</div>`:""}

                ${this.uploadMessage?h`<div class="message ${this.uploadMessage.includes("✅")?"success":"error"}">
                      ${this.uploadMessage}
                    </div>`:""}

                <div class="button-group">
                  <button
                    class="btn btn-primary"
                    @click="${this.uploadImage}"
                    ?disabled="${!this.selectedFile||!this.imageName}"
                  >
                    📤 Upload Image
                  </button>
                  <button
                    class="btn btn-secondary"
                    @click="${()=>{this.selectedFile=null,this.imageName="",this.fileInputRef&&(this.fileInputRef.value="")}}"
                  >
                    Clear
                  </button>
                </div>
              </div>

              <div class="storage-info">
                <strong>💾 Storage Usage:</strong>
                <div class="storage-bar">
                  <div
                    class="storage-fill"
                    style="width: ${this.storageInfo.percentage}%"
                  >
                    ${this.storageInfo.percentage>10?`${this.storageInfo.percentage}%`:""}
                  </div>
                </div>
                <small
                  >${(this.storageInfo.used/1024).toFixed(1)}KB / ${(this.storageInfo.max/1024/1024).toFixed(1)}MB</small
                >
              </div>

              <div class="category-images">
                <h3 class="category-title">📸 ${this.selectedCategory.toUpperCase()}</h3>
                ${e.length===0?h`<div class="empty-message">No images in this category yet</div>`:h`
                      <div class="images-grid">
                        ${e.map(t=>h`
                              <div class="image-card">
                                <img src="${t.dataUrl}" alt="${t.name}" />
                                <div class="image-card-name">${t.name}</div>
                                <div class="image-card-actions">
                                  <button class="delete-btn" @click="${()=>this.deleteImage(t.id)}">
                                    🗑️ Delete
                                  </button>
                                </div>
                              </div>
                            `)}
                      </div>
                    `}
              </div>

              <div class="button-group">
                <button class="btn btn-secondary" @click="${this.deleteCategory}">
                  🗑️ Delete All in ${this.selectedCategory}
                </button>
                <button class="btn btn-danger" @click="${this.clearAll}">
                  ⚠️ Clear All Images
                </button>
              </div>
            `:h`
              <div class="locked-message">
                <p>🔒 Custom image uploads are a premium feature</p>
                <p>Unlock this feature for just <strong>$5.99</strong></p>
                <button class="btn btn-primary" @click="${this.goToPremium}">
                  Upgrade to Premium
                </button>
              </div>
            `}
      </div>
    `}};le.styles=k`
    :host {
      display: block;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      padding: 20px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
        Cantarell, sans-serif;
    }

    .container {
      max-width: 1000px;
      margin: 0 auto;
      background: white;
      border-radius: 16px;
      padding: 30px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    }

    h1 {
      color: #333;
      margin-top: 0;
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .premium-badge {
      background: linear-gradient(135deg, #ffd89b 0%, #19547b 100%);
      color: white;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: bold;
      text-transform: uppercase;
    }

    .locked-message {
      background: #fff3cd;
      border: 2px solid #ffc107;
      border-radius: 12px;
      padding: 20px;
      color: #856404;
      text-align: center;
      margin: 20px 0;
    }

    .locked-message a {
      color: #667eea;
      text-decoration: none;
      font-weight: bold;
      cursor: pointer;
    }

    .upload-section {
      background: #f8f9fa;
      border: 2px dashed #667eea;
      border-radius: 12px;
      padding: 20px;
      margin: 20px 0;
      text-align: center;
    }

    .category-select {
      width: 100%;
      padding: 12px;
      border: 2px solid #e0e0e0;
      border-radius: 8px;
      font-size: 16px;
      margin: 10px 0;
      cursor: pointer;
      font-family: inherit;
    }

    .name-input {
      width: 100%;
      padding: 12px;
      border: 2px solid #e0e0e0;
      border-radius: 8px;
      font-size: 16px;
      margin: 10px 0;
      font-family: inherit;
    }

    .file-input-wrapper {
      position: relative;
      margin: 15px 0;
    }

    .file-input-label {
      display: inline-block;
      padding: 12px 24px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border-radius: 8px;
      cursor: pointer;
      font-weight: bold;
      transition: transform 0.2s, box-shadow 0.2s;
    }

    .file-input-label:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
    }

    .file-input-hidden {
      display: none;
    }

    .file-name {
      color: #666;
      margin-top: 10px;
      font-size: 14px;
    }

    .preview {
      max-width: 200px;
      max-height: 200px;
      border-radius: 8px;
      margin: 15px auto;
      display: block;
      border: 2px solid #ddd;
    }

    .button-group {
      display: flex;
      gap: 10px;
      justify-content: center;
      margin: 20px 0;
      flex-wrap: wrap;
    }

    .btn {
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      cursor: pointer;
      font-weight: bold;
      transition: all 0.3s;
      font-family: inherit;
    }

    .btn-primary {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }

    .btn-primary:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
    }

    .btn-primary:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .btn-secondary {
      background: #e0e0e0;
      color: #333;
    }

    .btn-secondary:hover {
      background: #d0d0d0;
    }

    .btn-danger {
      background: #ff6b6b;
      color: white;
    }

    .btn-danger:hover {
      background: #ff5252;
    }

    .message {
      padding: 15px;
      border-radius: 8px;
      margin: 15px 0;
      text-align: center;
      font-weight: bold;
    }

    .message.success {
      background: #d4edda;
      color: #155724;
      border: 1px solid #c3e6cb;
    }

    .message.error {
      background: #f8d7da;
      color: #721c24;
      border: 1px solid #f5c6cb;
    }

    .images-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 15px;
      margin-top: 20px;
    }

    .image-card {
      background: #f8f9fa;
      border: 2px solid #e0e0e0;
      border-radius: 12px;
      padding: 10px;
      text-align: center;
      transition: all 0.3s;
    }

    .image-card:hover {
      border-color: #667eea;
      box-shadow: 0 5px 15px rgba(102, 126, 234, 0.2);
    }

    .image-card img {
      width: 100%;
      height: 100px;
      object-fit: cover;
      border-radius: 8px;
      margin-bottom: 10px;
    }

    .image-card-name {
      font-size: 14px;
      font-weight: bold;
      color: #333;
      margin-bottom: 8px;
      word-break: break-word;
    }

    .image-card-actions {
      display: flex;
      gap: 5px;
      justify-content: center;
    }

    .image-card-actions button {
      flex: 1;
      padding: 6px;
      font-size: 12px;
      cursor: pointer;
      border: none;
      border-radius: 6px;
    }

    .delete-btn {
      background: #ff6b6b;
      color: white;
    }

    .delete-btn:hover {
      background: #ff5252;
    }

    .storage-info {
      background: #e3f2fd;
      border-left: 4px solid #2196f3;
      padding: 15px;
      border-radius: 8px;
      margin: 20px 0;
    }

    .storage-bar {
      width: 100%;
      height: 20px;
      background: #ddd;
      border-radius: 10px;
      overflow: hidden;
      margin: 10px 0;
    }

    .storage-fill {
      height: 100%;
      background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
      transition: width 0.3s;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 12px;
      font-weight: bold;
    }

    .category-images {
      margin-bottom: 30px;
    }

    .category-title {
      font-size: 18px;
      font-weight: bold;
      color: #667eea;
      margin: 20px 0 10px 0;
      padding-bottom: 10px;
      border-bottom: 2px solid #667eea;
    }

    .empty-message {
      text-align: center;
      color: #999;
      padding: 20px;
      font-style: italic;
    }
  `;ze([g()],le.prototype,"selectedCategory",2);ze([g()],le.prototype,"selectedFile",2);ze([g()],le.prototype,"imageName",2);ze([g()],le.prototype,"images",2);ze([g()],le.prototype,"isPremium",2);ze([g()],le.prototype,"storageInfo",2);ze([g()],le.prototype,"uploadMessage",2);le=ze([M("app-custom-images")],le);var Ls=Object.defineProperty,Bs=Object.getOwnPropertyDescriptor,Tt=(e,t,i,o)=>{for(var r=o>1?void 0:o?Bs(t,i):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(r=(o?a(t,i,r):a(r))||r);return o&&r&&Ls(t,i,r),r};let Be=class extends P{constructor(){super(...arguments),this.upgradeCode="",this.message="",this.messageType="",this.isUpgraded=!1,this.licenseManager=Ne.getInstance(),this.premiumManager=B.getInstance()}connectedCallback(){super.connectedCallback(),this.isUpgraded=this.licenseManager.isUpgraded()}handleCodeInput(e){const t=e.target;this.upgradeCode=t.value,this.message=""}submitUpgradeCode(){if(!this.upgradeCode.trim()){this.message="Please enter an upgrade code",this.messageType="error";return}this.licenseManager.verifyAndApplyCode(this.upgradeCode)?(this.premiumManager.refreshStatus(),this.isUpgraded=!0,this.message="Upgrade successful! All premium features are now unlocked.",this.messageType="success",this.upgradeCode=""):(this.message="Invalid upgrade code. Please check and try again.",this.messageType="error")}resetLicense(){confirm("Are you sure? This will reset the license and lock premium features.")&&(this.licenseManager.resetLicense(),this.premiumManager.refreshStatus(),this.isUpgraded=!1,this.message="",this.upgradeCode="")}handleKeydown(e){e.key==="Enter"&&this.submitUpgradeCode()}render(){return this.isUpgraded?h`
        <div class="container">
          <div class="header">
            <h1>Premium Unlocked</h1>
          </div>

          <div class="success-state">
            <div class="success-icon">🎉</div>
            <div class="success-text">All Premium Features Unlocked</div>
            <div class="success-subtext">
              Enjoy custom images, voice customization, cloud backup, and additional tabs!
            </div>
            <button class="reset-btn" @click=${this.resetLicense}>
              Reset License (Dev Only)
            </button>
          </div>
        </div>
      `:h`
      <div class="container">
        <div class="header">
          <h1>Unlock Premium Features</h1>
          <p class="subtitle">Enter your upgrade code to unlock all premium features</p>
        </div>

        <div class="upgrade-card">
          <div class="upgrade-title">What you'll get:</div>
          <ul class="features-list">
            <li>Custom Images - Upload your own images</li>
            <li>Voice Customization - Adjust speech settings</li>
            <li>Additional Tabs - Create custom communication tabs</li>
            <li>Cloud Backup - Save your progress safely</li>
          </ul>
        </div>

        ${this.message?h`
          <div class="message ${this.messageType}">
            ${this.message}
          </div>
        `:""}

        <div class="code-instructions">
          <strong>How to use:</strong> Enter the upgrade code provided with your purchase
          to unlock all premium features instantly.
        </div>

        <div class="input-section">
          <label class="input-label">Upgrade Code</label>
          <div class="input-container">
            <input
              type="text"
              class="upgrade-input"
              placeholder="Enter your upgrade code"
              .value=${this.upgradeCode}
              @input=${this.handleCodeInput}
              @keydown=${this.handleKeydown}
            />
            <button
              class="upgrade-btn"
              @click=${this.submitUpgradeCode}
              ?disabled=${!this.upgradeCode.trim()}
            >
              Unlock
            </button>
          </div>
        </div>
      </div>
    `}};Be.styles=k`
    :host {
      display: block;
      padding: 2rem;
    }

    .container {
      max-width: 600px;
      margin: 0 auto;
    }

    .header {
      text-align: center;
      margin-bottom: 2rem;
    }

    h1 {
      font-size: 2rem;
      font-weight: bold;
      color: #6C5CE7;
      margin-bottom: 1rem;
    }

    .subtitle {
      font-size: 1.125rem;
      color: #666;
      margin-bottom: 2rem;
    }

    .upgrade-card {
      background: linear-gradient(135deg, #6C5CE7 0%, #5F3DC4 100%);
      color: white;
      padding: 2rem;
      border-radius: 1.5rem;
      box-shadow: 0 10px 30px rgba(108, 92, 231, 0.3);
      margin-bottom: 2rem;
    }

    .upgrade-title {
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }

    .features-list {
      list-style: none;
      padding: 0;
      margin-bottom: 1.5rem;
    }

    .features-list li {
      margin-bottom: 0.75rem;
      padding-left: 2rem;
      position: relative;
    }

    .features-list li::before {
      content: '✓';
      position: absolute;
      left: 0;
      font-size: 1.25rem;
      font-weight: bold;
    }

    .input-section {
      margin-bottom: 1.5rem;
    }

    .input-label {
      display: block;
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 0.75rem;
      color: #333;
    }

    .input-container {
      display: flex;
      gap: 0.75rem;
      margin-bottom: 1rem;
    }

    .upgrade-input {
      flex: 1;
      padding: 0.75rem;
      border: 2px solid #ddd;
      border-radius: 0.5rem;
      font-size: 1rem;
      font-family: monospace;
      transition: border-color 0.2s;
      text-transform: uppercase;
    }

    .upgrade-input:focus {
      outline: none;
      border-color: #6C5CE7;
    }

    .upgrade-btn {
      padding: 0.75rem 1.5rem;
      background: #6C5CE7;
      color: white;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 600;
      transition: all 0.2s;
    }

    .upgrade-btn:hover {
      background: #5F3DC4;
      transform: scale(1.02);
    }

    .upgrade-btn:disabled {
      background: #ccc;
      cursor: not-allowed;
      transform: none;
    }

    .message {
      padding: 1rem;
      border-radius: 0.5rem;
      margin-bottom: 1rem;
      font-weight: 500;
    }

    .message.success {
      background: #d4edda;
      color: #155724;
      border: 1px solid #c3e6cb;
    }

    .message.error {
      background: #f8d7da;
      color: #721c24;
      border: 1px solid #f5c6cb;
    }

    .success-state {
      text-align: center;
      padding: 2rem;
      background: #f0f9ff;
      border-radius: 1.5rem;
      border: 2px solid #0ea5e9;
    }

    .success-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .success-text {
      font-size: 1.25rem;
      color: #0369a1;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .success-subtext {
      font-size: 1rem;
      color: #0c4a6e;
    }

    .reset-btn {
      padding: 0.75rem 1.5rem;
      background: #f87171;
      color: white;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      font-size: 0.875rem;
      font-weight: 600;
      transition: all 0.2s;
      margin-top: 1.5rem;
    }

    .reset-btn:hover {
      background: #dc2626;
      transform: scale(1.02);
    }

    .code-instructions {
      background: #f5f5f5;
      padding: 1.5rem;
      border-radius: 0.75rem;
      margin-bottom: 1.5rem;
      font-size: 0.95rem;
      line-height: 1.6;
    }

    .code-instructions strong {
      color: #6C5CE7;
    }
  `;Tt([g()],Be.prototype,"upgradeCode",2);Tt([g()],Be.prototype,"message",2);Tt([g()],Be.prototype,"messageType",2);Tt([g()],Be.prototype,"isUpgraded",2);Be=Tt([M("app-upgrade")],Be);var Fs=Object.defineProperty,Us=Object.getOwnPropertyDescriptor,Zt=(e,t,i,o)=>{for(var r=o>1?void 0:o?Us(t,i):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(r=(o?a(t,i,r):a(r))||r);return o&&r&&Fs(t,i,r),r};let et=class extends P{constructor(){super(...arguments),this.generatedCodes=[],this.newCodeDescription="",this.showCodeList=!1,this.GENERATED_CODES_KEY="caydenjoy_generated_codes"}connectedCallback(){super.connectedCallback(),this.loadGeneratedCodes()}loadGeneratedCodes(){try{const e=localStorage.getItem(this.GENERATED_CODES_KEY);e&&(this.generatedCodes=JSON.parse(e))}catch(e){console.error("Error loading generated codes:",e)}}saveGeneratedCodes(){try{localStorage.setItem(this.GENERATED_CODES_KEY,JSON.stringify(this.generatedCodes))}catch(e){console.error("Error saving generated codes:",e)}}generateCode(){if(!this.newCodeDescription.trim()){alert("Please enter a description for the code");return}const e=Date.now().toString(36).toUpperCase(),t=Math.random().toString(36).substring(2,8).toUpperCase(),o={code:`GEN-${e}-${t}`,createdAt:Date.now(),description:this.newCodeDescription.trim()};this.generatedCodes=[o,...this.generatedCodes],this.saveGeneratedCodes(),this.newCodeDescription=""}deleteCode(e){confirm(`Delete code ${e}?`)&&(this.generatedCodes=this.generatedCodes.filter(t=>t.code!==e),this.saveGeneratedCodes())}copyToClipboard(e){navigator.clipboard.writeText(e).then(()=>{alert("Code copied to clipboard!")})}formatDate(e){return new Date(e).toLocaleString()}handleDescriptionKeydown(e){e.key==="Enter"&&this.generateCode()}render(){const e=this.generatedCodes.length,t=this.generatedCodes.slice(0,5);return h`
      <div class="container">
        <div class="header">
          <h1>⚙️ Admin Panel</h1>
          <p class="subtitle">Manage upgrade codes and licenses</p>
        </div>

        <div class="warning">
          ⚠️ <strong>Admin Only:</strong> This panel is for development and testing only.
          In production, integrate code generation with a backend server.
        </div>

        <div class="stats">
          <div class="stat-card">
            <div class="stat-number">${e}</div>
            <div class="stat-label">Generated Codes</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">8</div>
            <div class="stat-label">Valid Test Codes</div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Generate New Code</div>
          <div class="form-group">
            <label class="label">Code Description (for what purpose?)</label>
            <div class="input-row">
              <input
                type="text"
                placeholder="e.g., Customer evaluation, Beta tester, etc."
                .value=${this.newCodeDescription}
                @input=${i=>{this.newCodeDescription=i.target.value}}
                @keydown=${this.handleDescriptionKeydown}
              />
              <button class="btn-primary" @click=${this.generateCode}>
                Generate Code
              </button>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">
            Generated Codes
            <button
              class="toggle-btn"
              style="float: right; margin-top: -0.5rem;"
              @click=${()=>{this.showCodeList=!this.showCodeList}}
            >
              ${this.showCodeList?"Hide":"Show All"} (${e})
            </button>
          </div>

          ${this.generatedCodes.length===0?h`<div class="empty-message">No codes generated yet</div>`:h`
                <ul class="codes-list">
                  ${(this.showCodeList?this.generatedCodes:t).map(i=>h`
                      <li class="code-item">
                        <div class="code-info">
                          <div class="code-text">${i.code}</div>
                          <div class="code-description">${i.description}</div>
                          <div class="code-date">Created: ${this.formatDate(i.createdAt)}</div>
                        </div>
                        <div class="code-actions">
                          <button class="btn-copy" @click=${()=>this.copyToClipboard(i.code)}>
                            📋 Copy
                          </button>
                          <button class="btn-danger" @click=${()=>this.deleteCode(i.code)}>
                            🗑️ Delete
                          </button>
                        </div>
                      </li>
                    `)}
                </ul>
              `}
        </div>

        <div class="section">
          <div class="section-title">Valid Test Codes</div>
          <ul class="codes-list">
            <li class="code-item">
              <div class="code-info">
                <div class="code-text">CAYDENJOY-PREMIUM-2024</div>
                <div class="code-description">Primary test code</div>
              </div>
              <button class="btn-copy" @click=${()=>this.copyToClipboard("CAYDENJOY-PREMIUM-2024")}>
                📋 Copy
              </button>
            </li>
            <li class="code-item">
              <div class="code-info">
                <div class="code-text">TEST-CODE-001</div>
                <div class="code-description">Quick test code</div>
              </div>
              <button class="btn-copy" @click=${()=>this.copyToClipboard("TEST-CODE-001")}>
                📋 Copy
              </button>
            </li>
            <li class="code-item">
              <div class="code-info">
                <div class="code-text">DEMO-FULL-ACCESS</div>
                <div class="code-description">Demo/evaluation code</div>
              </div>
              <button class="btn-copy" @click=${()=>this.copyToClipboard("DEMO-FULL-ACCESS")}>
                📋 Copy
              </button>
            </li>
          </ul>
        </div>
      </div>
    `}};et.styles=k`
    :host {
      display: block;
      padding: 2rem;
    }

    .container {
      max-width: 900px;
      margin: 0 auto;
    }

    .header {
      text-align: center;
      margin-bottom: 2rem;
    }

    h1 {
      font-size: 2rem;
      font-weight: bold;
      color: #6C5CE7;
      margin-bottom: 0.5rem;
    }

    .subtitle {
      font-size: 1rem;
      color: #999;
    }

    .warning {
      background: #fff3cd;
      border: 1px solid #ffeaa7;
      color: #856404;
      padding: 1rem;
      border-radius: 0.5rem;
      margin-bottom: 2rem;
      font-size: 0.95rem;
    }

    .section {
      background: white;
      border: 1px solid #ddd;
      border-radius: 1rem;
      padding: 1.5rem;
      margin-bottom: 1.5rem;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .section-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: #333;
      margin-bottom: 1rem;
      padding-bottom: 0.75rem;
      border-bottom: 2px solid #f0f0f0;
    }

    .form-group {
      margin-bottom: 1rem;
    }

    .label {
      display: block;
      font-size: 0.95rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: #333;
    }

    .input-row {
      display: flex;
      gap: 0.75rem;
      align-items: flex-end;
    }

    input[type="text"] {
      flex: 1;
      padding: 0.75rem;
      border: 2px solid #ddd;
      border-radius: 0.5rem;
      font-size: 0.95rem;
      transition: border-color 0.2s;
    }

    input[type="text"]:focus {
      outline: none;
      border-color: #6C5CE7;
    }

    button {
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      font-size: 0.95rem;
      font-weight: 600;
      transition: all 0.2s;
    }

    .btn-primary {
      background: #6C5CE7;
      color: white;
    }

    .btn-primary:hover {
      background: #5F3DC4;
      transform: scale(1.02);
    }

    .btn-secondary {
      background: #f0f0f0;
      color: #333;
    }

    .btn-secondary:hover {
      background: #e0e0e0;
    }

    .btn-danger {
      background: #f87171;
      color: white;
    }

    .btn-danger:hover {
      background: #dc2626;
    }

    .btn-copy {
      background: #60a5fa;
      color: white;
      padding: 0.5rem 1rem;
      font-size: 0.85rem;
    }

    .btn-copy:hover {
      background: #3b82f6;
    }

    .codes-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .code-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      background: #f9f9f9;
      border: 1px solid #eee;
      border-radius: 0.5rem;
      margin-bottom: 0.75rem;
      gap: 1rem;
    }

    .code-info {
      flex: 1;
    }

    .code-text {
      font-family: monospace;
      font-size: 1.1rem;
      font-weight: bold;
      color: #6C5CE7;
      margin-bottom: 0.25rem;
    }

    .code-description {
      font-size: 0.85rem;
      color: #666;
      margin-bottom: 0.25rem;
    }

    .code-date {
      font-size: 0.8rem;
      color: #999;
    }

    .code-actions {
      display: flex;
      gap: 0.5rem;
    }

    .empty-message {
      text-align: center;
      padding: 2rem;
      color: #999;
    }

    .stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      margin-bottom: 1.5rem;
    }

    .stat-card {
      background: linear-gradient(135deg, #6C5CE7 0%, #5F3DC4 100%);
      color: white;
      padding: 1.5rem;
      border-radius: 0.75rem;
      text-align: center;
    }

    .stat-number {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 0.25rem;
    }

    .stat-label {
      font-size: 0.9rem;
      opacity: 0.9;
    }

    .toggle-btn {
      background: #f0f0f0;
      color: #333;
      padding: 0.5rem 1rem;
      font-size: 0.85rem;
    }

    .toggle-btn:hover {
      background: #e0e0e0;
    }
  `;Zt([g()],et.prototype,"generatedCodes",2);Zt([g()],et.prototype,"newCodeDescription",2);Zt([g()],et.prototype,"showCodeList",2);et=Zt([M("app-admin")],et);var js=Object.getOwnPropertyDescriptor,Vs=(e,t,i,o)=>{for(var r=o>1?void 0:o?js(t,i):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(r=a(r)||r);return r};let gi=class extends P{render(){return h`
      <footer>
        <div class="footer-container">
          <div class="footer-grid">
            <div class="footer-section">
              <h3>Product</h3>
              <ul>
                <li><a href="${x()}">Home</a></li>
                <li><a href="${x("services")}">Services</a></li>
                <li><a href="${x("about")}">About</a></li>
              </ul>
            </div>

            <div class="footer-section">
              <h3>Support</h3>
              <ul>
                <li><a href="${x("faq")}">FAQ</a></li>
                <li><a href="${x("contact")}">Contact</a></li>
                <li><a href="#">Documentation</a></li>
              </ul>
            </div>

            <div class="footer-section">
              <h3>Company</h3>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">License</a></li>
              </ul>
            </div>

            <div class="footer-section">
              <h3>Resources</h3>
              <ul>
                <li><a href="https://github.com/dallas8000-ops/CaydenJoy" target="_blank">GitHub</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Community</a></li>
              </ul>
            </div>
          </div>

          <div class="footer-bottom">
            <div class="copyright">
              © ${new Date().getFullYear()} CaydenJoy. All rights reserved.
            </div>
            <div class="social-links">
              <a href="https://twitter.com" target="_blank" title="Twitter">𝕏</a>
              <a href="https://github.com" target="_blank" title="GitHub">⚙</a>
              <a href="https://discord.com" target="_blank" title="Discord">💬</a>
            </div>
          </div>
        </div>
      </footer>
    `}};gi.styles=k`
    footer {
      background-color: #2C3E50;
      color: white;
      padding: 40px 20px;
      margin-top: 60px;
    }

    .footer-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .footer-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 32px;
      margin-bottom: 32px;
    }

    .footer-section h3 {
      color: #6C5CE7;
      margin-top: 0;
      margin-bottom: 16px;
      font-size: 16px;
    }

    .footer-section ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .footer-section li {
      margin-bottom: 8px;
    }

    .footer-section a {
      color: #FFFFFF;
      text-decoration: none;
      opacity: 0.8;
      transition: opacity 0.3s;
    }

    .footer-section a:hover {
      opacity: 1;
    }

    .footer-bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding-top: 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
    }

    .social-links {
      display: flex;
      gap: 16px;
    }

    .social-links a {
      display: inline-block;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background-color: rgba(108, 92, 231, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.3s;
    }

    .social-links a:hover {
      background-color: #6C5CE7;
    }

    .copyright {
      opacity: 0.7;
      font-size: 14px;
    }

    @media (max-width: 640px) {
      .footer-bottom {
        flex-direction: column;
        text-align: center;
      }

      .social-links {
        justify-content: center;
      }
    }
  `;gi=Vs([M("app-footer")],gi);var qs=k`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,mo=new WeakMap;function Ro(e){let t=mo.get(e);return t||(t=window.getComputedStyle(e,null),mo.set(e,t)),t}function Hs(e){if(typeof e.checkVisibility=="function")return e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const t=Ro(e);return t.visibility!=="hidden"&&t.display!=="none"}function Ys(e){const t=Ro(e),{overflowY:i,overflowX:o}=t;return i==="scroll"||o==="scroll"?!0:i!=="auto"||o!=="auto"?!1:e.scrollHeight>e.clientHeight&&i==="auto"||e.scrollWidth>e.clientWidth&&o==="auto"}function Ws(e){const t=e.tagName.toLowerCase(),i=Number(e.getAttribute("tabindex"));return e.hasAttribute("tabindex")&&(isNaN(i)||i<=-1)||e.hasAttribute("disabled")||e.closest("[inert]")||t==="input"&&e.getAttribute("type")==="radio"&&!e.hasAttribute("checked")||!Hs(e)?!1:(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(t)?!0:Ys(e)}function Ks(e){var t,i;const o=Gs(e),r=(t=o[0])!=null?t:null,s=(i=o[o.length-1])!=null?i:null;return{start:r,end:s}}function Js(e,t){var i;return((i=e.getRootNode({composed:!0}))==null?void 0:i.host)!==t}function Gs(e){const t=new WeakMap,i=[];function o(r){if(r instanceof Element){if(r.hasAttribute("inert")||r.closest("[inert]")||t.has(r))return;t.set(r,!0),!i.includes(r)&&Ws(r)&&i.push(r),r instanceof HTMLSlotElement&&Js(r,e)&&r.assignedElements({flatten:!0}).forEach(s=>{o(s)}),r.shadowRoot!==null&&r.shadowRoot.mode==="open"&&o(r.shadowRoot)}for(const s of r.children)o(s)}return o(e),i.sort((r,s)=>{const a=Number(r.getAttribute("tabindex"))||0;return(Number(s.getAttribute("tabindex"))||0)-a})}var Qs=k`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;const Te=Math.min,Y=Math.max,Vt=Math.round,Pt=Math.floor,ne=e=>({x:e,y:e}),Xs={left:"right",right:"left",bottom:"top",top:"bottom"},Zs={start:"end",end:"start"};function vi(e,t,i){return Y(e,Te(t,i))}function rt(e,t){return typeof e=="function"?e(t):e}function Ae(e){return e.split("-")[0]}function st(e){return e.split("-")[1]}function Lo(e){return e==="x"?"y":"x"}function Mi(e){return e==="y"?"height":"width"}function Fe(e){return["top","bottom"].includes(Ae(e))?"y":"x"}function Ri(e){return Lo(Fe(e))}function ea(e,t,i){i===void 0&&(i=!1);const o=st(e),r=Ri(e),s=Mi(r);let a=r==="x"?o===(i?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[s]>t.floating[s]&&(a=qt(a)),[a,qt(a)]}function ta(e){const t=qt(e);return[yi(e),t,yi(t)]}function yi(e){return e.replace(/start|end/g,t=>Zs[t])}function ia(e,t,i){const o=["left","right"],r=["right","left"],s=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return i?t?r:o:t?o:r;case"left":case"right":return t?s:a;default:return[]}}function oa(e,t,i,o){const r=st(e);let s=ia(Ae(e),i==="start",o);return r&&(s=s.map(a=>a+"-"+r),t&&(s=s.concat(s.map(yi)))),s}function qt(e){return e.replace(/left|right|bottom|top/g,t=>Xs[t])}function ra(e){return{top:0,right:0,bottom:0,left:0,...e}}function Bo(e){return typeof e!="number"?ra(e):{top:e,right:e,bottom:e,left:e}}function Ht(e){const{x:t,y:i,width:o,height:r}=e;return{width:o,height:r,top:i,left:t,right:t+o,bottom:i+r,x:t,y:i}}function bo(e,t,i){let{reference:o,floating:r}=e;const s=Fe(t),a=Ri(t),d=Mi(a),c=Ae(t),u=s==="y",p=o.x+o.width/2-r.width/2,m=o.y+o.height/2-r.height/2,f=o[d]/2-r[d]/2;let b;switch(c){case"top":b={x:p,y:o.y-r.height};break;case"bottom":b={x:p,y:o.y+o.height};break;case"right":b={x:o.x+o.width,y:m};break;case"left":b={x:o.x-r.width,y:m};break;default:b={x:o.x,y:o.y}}switch(st(t)){case"start":b[a]-=f*(i&&u?-1:1);break;case"end":b[a]+=f*(i&&u?-1:1);break}return b}const sa=async(e,t,i)=>{const{placement:o="bottom",strategy:r="absolute",middleware:s=[],platform:a}=i,d=s.filter(Boolean),c=await(a.isRTL==null?void 0:a.isRTL(t));let u=await a.getElementRects({reference:e,floating:t,strategy:r}),{x:p,y:m}=bo(u,o,c),f=o,b={},v=0;for(let y=0;y<d.length;y++){const{name:$,fn:C}=d[y],{x:A,y:z,data:O,reset:I}=await C({x:p,y:m,initialPlacement:o,placement:f,strategy:r,middlewareData:b,rects:u,platform:a,elements:{reference:e,floating:t}});p=A??p,m=z??m,b={...b,[$]:{...b[$],...O}},I&&v<=50&&(v++,typeof I=="object"&&(I.placement&&(f=I.placement),I.rects&&(u=I.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:r}):I.rects),{x:p,y:m}=bo(u,f,c)),y=-1)}return{x:p,y:m,placement:f,strategy:r,middlewareData:b}};async function Li(e,t){var i;t===void 0&&(t={});const{x:o,y:r,platform:s,rects:a,elements:d,strategy:c}=e,{boundary:u="clippingAncestors",rootBoundary:p="viewport",elementContext:m="floating",altBoundary:f=!1,padding:b=0}=rt(t,e),v=Bo(b),$=d[f?m==="floating"?"reference":"floating":m],C=Ht(await s.getClippingRect({element:(i=await(s.isElement==null?void 0:s.isElement($)))==null||i?$:$.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(d.floating)),boundary:u,rootBoundary:p,strategy:c})),A=m==="floating"?{x:o,y:r,width:a.floating.width,height:a.floating.height}:a.reference,z=await(s.getOffsetParent==null?void 0:s.getOffsetParent(d.floating)),O=await(s.isElement==null?void 0:s.isElement(z))?await(s.getScale==null?void 0:s.getScale(z))||{x:1,y:1}:{x:1,y:1},I=Ht(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:d,rect:A,offsetParent:z,strategy:c}):A);return{top:(C.top-I.top+v.top)/O.y,bottom:(I.bottom-C.bottom+v.bottom)/O.y,left:(C.left-I.left+v.left)/O.x,right:(I.right-C.right+v.right)/O.x}}const aa=e=>({name:"arrow",options:e,async fn(t){const{x:i,y:o,placement:r,rects:s,platform:a,elements:d,middlewareData:c}=t,{element:u,padding:p=0}=rt(e,t)||{};if(u==null)return{};const m=Bo(p),f={x:i,y:o},b=Ri(r),v=Mi(b),y=await a.getDimensions(u),$=b==="y",C=$?"top":"left",A=$?"bottom":"right",z=$?"clientHeight":"clientWidth",O=s.reference[v]+s.reference[b]-f[b]-s.floating[v],I=f[b]-s.reference[b],G=await(a.getOffsetParent==null?void 0:a.getOffsetParent(u));let Q=G?G[z]:0;(!Q||!await(a.isElement==null?void 0:a.isElement(G)))&&(Q=d.floating[z]||s.floating[v]);const ue=O/2-I/2,re=Q/2-y[v]/2-1,X=Te(m[C],re),ve=Te(m[A],re),se=X,ye=Q-y[v]-ve,j=Q/2-y[v]/2+ue,We=vi(se,j,ye),he=!c.arrow&&st(r)!=null&&j!==We&&s.reference[v]/2-(j<se?X:ve)-y[v]/2<0,ae=he?j<se?j-se:j-ye:0;return{[b]:f[b]+ae,data:{[b]:We,centerOffset:j-We-ae,...he&&{alignmentOffset:ae}},reset:he}}}),na=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var i,o;const{placement:r,middlewareData:s,rects:a,initialPlacement:d,platform:c,elements:u}=t,{mainAxis:p=!0,crossAxis:m=!0,fallbackPlacements:f,fallbackStrategy:b="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:y=!0,...$}=rt(e,t);if((i=s.arrow)!=null&&i.alignmentOffset)return{};const C=Ae(r),A=Fe(d),z=Ae(d)===d,O=await(c.isRTL==null?void 0:c.isRTL(u.floating)),I=f||(z||!y?[qt(d)]:ta(d)),G=v!=="none";!f&&G&&I.push(...oa(d,y,v,O));const Q=[d,...I],ue=await Li(t,$),re=[];let X=((o=s.flip)==null?void 0:o.overflows)||[];if(p&&re.push(ue[C]),m){const j=ea(r,a,O);re.push(ue[j[0]],ue[j[1]])}if(X=[...X,{placement:r,overflows:re}],!re.every(j=>j<=0)){var ve,se;const j=(((ve=s.flip)==null?void 0:ve.index)||0)+1,We=Q[j];if(We)return{data:{index:j,overflows:X},reset:{placement:We}};let he=(se=X.filter(ae=>ae.overflows[0]<=0).sort((ae,we)=>ae.overflows[1]-we.overflows[1])[0])==null?void 0:se.placement;if(!he)switch(b){case"bestFit":{var ye;const ae=(ye=X.filter(we=>{if(G){const xe=Fe(we.placement);return xe===A||xe==="y"}return!0}).map(we=>[we.placement,we.overflows.filter(xe=>xe>0).reduce((xe,Ko)=>xe+Ko,0)]).sort((we,xe)=>we[1]-xe[1])[0])==null?void 0:ye[0];ae&&(he=ae);break}case"initialPlacement":he=d;break}if(r!==he)return{reset:{placement:he}}}return{}}}};async function la(e,t){const{placement:i,platform:o,elements:r}=e,s=await(o.isRTL==null?void 0:o.isRTL(r.floating)),a=Ae(i),d=st(i),c=Fe(i)==="y",u=["left","top"].includes(a)?-1:1,p=s&&c?-1:1,m=rt(t,e);let{mainAxis:f,crossAxis:b,alignmentAxis:v}=typeof m=="number"?{mainAxis:m,crossAxis:0,alignmentAxis:null}:{mainAxis:m.mainAxis||0,crossAxis:m.crossAxis||0,alignmentAxis:m.alignmentAxis};return d&&typeof v=="number"&&(b=d==="end"?v*-1:v),c?{x:b*p,y:f*u}:{x:f*u,y:b*p}}const da=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var i,o;const{x:r,y:s,placement:a,middlewareData:d}=t,c=await la(t,e);return a===((i=d.offset)==null?void 0:i.placement)&&(o=d.arrow)!=null&&o.alignmentOffset?{}:{x:r+c.x,y:s+c.y,data:{...c,placement:a}}}}},ca=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:i,y:o,placement:r}=t,{mainAxis:s=!0,crossAxis:a=!1,limiter:d={fn:$=>{let{x:C,y:A}=$;return{x:C,y:A}}},...c}=rt(e,t),u={x:i,y:o},p=await Li(t,c),m=Fe(Ae(r)),f=Lo(m);let b=u[f],v=u[m];if(s){const $=f==="y"?"top":"left",C=f==="y"?"bottom":"right",A=b+p[$],z=b-p[C];b=vi(A,b,z)}if(a){const $=m==="y"?"top":"left",C=m==="y"?"bottom":"right",A=v+p[$],z=v-p[C];v=vi(A,v,z)}const y=d.fn({...t,[f]:b,[m]:v});return{...y,data:{x:y.x-i,y:y.y-o,enabled:{[f]:s,[m]:a}}}}}},ua=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var i,o;const{placement:r,rects:s,platform:a,elements:d}=t,{apply:c=()=>{},...u}=rt(e,t),p=await Li(t,u),m=Ae(r),f=st(r),b=Fe(r)==="y",{width:v,height:y}=s.floating;let $,C;m==="top"||m==="bottom"?($=m,C=f===(await(a.isRTL==null?void 0:a.isRTL(d.floating))?"start":"end")?"left":"right"):(C=m,$=f==="end"?"top":"bottom");const A=y-p.top-p.bottom,z=v-p.left-p.right,O=Te(y-p[$],A),I=Te(v-p[C],z),G=!t.middlewareData.shift;let Q=O,ue=I;if((i=t.middlewareData.shift)!=null&&i.enabled.x&&(ue=z),(o=t.middlewareData.shift)!=null&&o.enabled.y&&(Q=A),G&&!f){const X=Y(p.left,0),ve=Y(p.right,0),se=Y(p.top,0),ye=Y(p.bottom,0);b?ue=v-2*(X!==0||ve!==0?X+ve:Y(p.left,p.right)):Q=y-2*(se!==0||ye!==0?se+ye:Y(p.top,p.bottom))}await c({...t,availableWidth:ue,availableHeight:Q});const re=await a.getDimensions(d.floating);return v!==re.width||y!==re.height?{reset:{rects:!0}}:{}}}};function ei(){return typeof window<"u"}function at(e){return Fo(e)?(e.nodeName||"").toLowerCase():"#document"}function W(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function ce(e){var t;return(t=(Fo(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Fo(e){return ei()?e instanceof Node||e instanceof W(e).Node:!1}function te(e){return ei()?e instanceof Element||e instanceof W(e).Element:!1}function de(e){return ei()?e instanceof HTMLElement||e instanceof W(e).HTMLElement:!1}function fo(e){return!ei()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof W(e).ShadowRoot}function At(e){const{overflow:t,overflowX:i,overflowY:o,display:r}=ie(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+i)&&!["inline","contents"].includes(r)}function ha(e){return["table","td","th"].includes(at(e))}function ti(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function Bi(e){const t=Fi(),i=te(e)?ie(e):e;return i.transform!=="none"||i.perspective!=="none"||(i.containerType?i.containerType!=="normal":!1)||!t&&(i.backdropFilter?i.backdropFilter!=="none":!1)||!t&&(i.filter?i.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(i.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(i.contain||"").includes(o))}function pa(e){let t=Ee(e);for(;de(t)&&!tt(t);){if(Bi(t))return t;if(ti(t))return null;t=Ee(t)}return null}function Fi(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function tt(e){return["html","body","#document"].includes(at(e))}function ie(e){return W(e).getComputedStyle(e)}function ii(e){return te(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Ee(e){if(at(e)==="html")return e;const t=e.assignedSlot||e.parentNode||fo(e)&&e.host||ce(e);return fo(t)?t.host:t}function Uo(e){const t=Ee(e);return tt(t)?e.ownerDocument?e.ownerDocument.body:e.body:de(t)&&At(t)?t:Uo(t)}function vt(e,t,i){var o;t===void 0&&(t=[]),i===void 0&&(i=!0);const r=Uo(e),s=r===((o=e.ownerDocument)==null?void 0:o.body),a=W(r);if(s){const d=wi(a);return t.concat(a,a.visualViewport||[],At(r)?r:[],d&&i?vt(d):[])}return t.concat(r,vt(r,[],i))}function wi(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function jo(e){const t=ie(e);let i=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const r=de(e),s=r?e.offsetWidth:i,a=r?e.offsetHeight:o,d=Vt(i)!==s||Vt(o)!==a;return d&&(i=s,o=a),{width:i,height:o,$:d}}function Ui(e){return te(e)?e:e.contextElement}function Ge(e){const t=Ui(e);if(!de(t))return ne(1);const i=t.getBoundingClientRect(),{width:o,height:r,$:s}=jo(t);let a=(s?Vt(i.width):i.width)/o,d=(s?Vt(i.height):i.height)/r;return(!a||!Number.isFinite(a))&&(a=1),(!d||!Number.isFinite(d))&&(d=1),{x:a,y:d}}const ma=ne(0);function Vo(e){const t=W(e);return!Fi()||!t.visualViewport?ma:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function ba(e,t,i){return t===void 0&&(t=!1),!i||t&&i!==W(e)?!1:t}function Ue(e,t,i,o){t===void 0&&(t=!1),i===void 0&&(i=!1);const r=e.getBoundingClientRect(),s=Ui(e);let a=ne(1);t&&(o?te(o)&&(a=Ge(o)):a=Ge(e));const d=ba(s,i,o)?Vo(s):ne(0);let c=(r.left+d.x)/a.x,u=(r.top+d.y)/a.y,p=r.width/a.x,m=r.height/a.y;if(s){const f=W(s),b=o&&te(o)?W(o):o;let v=f,y=wi(v);for(;y&&o&&b!==v;){const $=Ge(y),C=y.getBoundingClientRect(),A=ie(y),z=C.left+(y.clientLeft+parseFloat(A.paddingLeft))*$.x,O=C.top+(y.clientTop+parseFloat(A.paddingTop))*$.y;c*=$.x,u*=$.y,p*=$.x,m*=$.y,c+=z,u+=O,v=W(y),y=wi(v)}}return Ht({width:p,height:m,x:c,y:u})}function ji(e,t){const i=ii(e).scrollLeft;return t?t.left+i:Ue(ce(e)).left+i}function qo(e,t,i){i===void 0&&(i=!1);const o=e.getBoundingClientRect(),r=o.left+t.scrollLeft-(i?0:ji(e,o)),s=o.top+t.scrollTop;return{x:r,y:s}}function fa(e){let{elements:t,rect:i,offsetParent:o,strategy:r}=e;const s=r==="fixed",a=ce(o),d=t?ti(t.floating):!1;if(o===a||d&&s)return i;let c={scrollLeft:0,scrollTop:0},u=ne(1);const p=ne(0),m=de(o);if((m||!m&&!s)&&((at(o)!=="body"||At(a))&&(c=ii(o)),de(o))){const b=Ue(o);u=Ge(o),p.x=b.x+o.clientLeft,p.y=b.y+o.clientTop}const f=a&&!m&&!s?qo(a,c,!0):ne(0);return{width:i.width*u.x,height:i.height*u.y,x:i.x*u.x-c.scrollLeft*u.x+p.x+f.x,y:i.y*u.y-c.scrollTop*u.y+p.y+f.y}}function ga(e){return Array.from(e.getClientRects())}function va(e){const t=ce(e),i=ii(e),o=e.ownerDocument.body,r=Y(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),s=Y(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let a=-i.scrollLeft+ji(e);const d=-i.scrollTop;return ie(o).direction==="rtl"&&(a+=Y(t.clientWidth,o.clientWidth)-r),{width:r,height:s,x:a,y:d}}function ya(e,t){const i=W(e),o=ce(e),r=i.visualViewport;let s=o.clientWidth,a=o.clientHeight,d=0,c=0;if(r){s=r.width,a=r.height;const u=Fi();(!u||u&&t==="fixed")&&(d=r.offsetLeft,c=r.offsetTop)}return{width:s,height:a,x:d,y:c}}function wa(e,t){const i=Ue(e,!0,t==="fixed"),o=i.top+e.clientTop,r=i.left+e.clientLeft,s=de(e)?Ge(e):ne(1),a=e.clientWidth*s.x,d=e.clientHeight*s.y,c=r*s.x,u=o*s.y;return{width:a,height:d,x:c,y:u}}function go(e,t,i){let o;if(t==="viewport")o=ya(e,i);else if(t==="document")o=va(ce(e));else if(te(t))o=wa(t,i);else{const r=Vo(e);o={x:t.x-r.x,y:t.y-r.y,width:t.width,height:t.height}}return Ht(o)}function Ho(e,t){const i=Ee(e);return i===t||!te(i)||tt(i)?!1:ie(i).position==="fixed"||Ho(i,t)}function xa(e,t){const i=t.get(e);if(i)return i;let o=vt(e,[],!1).filter(d=>te(d)&&at(d)!=="body"),r=null;const s=ie(e).position==="fixed";let a=s?Ee(e):e;for(;te(a)&&!tt(a);){const d=ie(a),c=Bi(a);!c&&d.position==="fixed"&&(r=null),(s?!c&&!r:!c&&d.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||At(a)&&!c&&Ho(e,a))?o=o.filter(p=>p!==a):r=d,a=Ee(a)}return t.set(e,o),o}function _a(e){let{element:t,boundary:i,rootBoundary:o,strategy:r}=e;const a=[...i==="clippingAncestors"?ti(t)?[]:xa(t,this._c):[].concat(i),o],d=a[0],c=a.reduce((u,p)=>{const m=go(t,p,r);return u.top=Y(m.top,u.top),u.right=Te(m.right,u.right),u.bottom=Te(m.bottom,u.bottom),u.left=Y(m.left,u.left),u},go(t,d,r));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function Ca(e){const{width:t,height:i}=jo(e);return{width:t,height:i}}function ka(e,t,i){const o=de(t),r=ce(t),s=i==="fixed",a=Ue(e,!0,s,t);let d={scrollLeft:0,scrollTop:0};const c=ne(0);if(o||!o&&!s)if((at(t)!=="body"||At(r))&&(d=ii(t)),o){const f=Ue(t,!0,s,t);c.x=f.x+t.clientLeft,c.y=f.y+t.clientTop}else r&&(c.x=ji(r));const u=r&&!o&&!s?qo(r,d):ne(0),p=a.left+d.scrollLeft-c.x-u.x,m=a.top+d.scrollTop-c.y-u.y;return{x:p,y:m,width:a.width,height:a.height}}function di(e){return ie(e).position==="static"}function vo(e,t){if(!de(e)||ie(e).position==="fixed")return null;if(t)return t(e);let i=e.offsetParent;return ce(e)===i&&(i=i.ownerDocument.body),i}function Yo(e,t){const i=W(e);if(ti(e))return i;if(!de(e)){let r=Ee(e);for(;r&&!tt(r);){if(te(r)&&!di(r))return r;r=Ee(r)}return i}let o=vo(e,t);for(;o&&ha(o)&&di(o);)o=vo(o,t);return o&&tt(o)&&di(o)&&!Bi(o)?i:o||pa(e)||i}const $a=async function(e){const t=this.getOffsetParent||Yo,i=this.getDimensions,o=await i(e.floating);return{reference:ka(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function Ta(e){return ie(e).direction==="rtl"}const Ot={convertOffsetParentRelativeRectToViewportRelativeRect:fa,getDocumentElement:ce,getClippingRect:_a,getOffsetParent:Yo,getElementRects:$a,getClientRects:ga,getDimensions:Ca,getScale:Ge,isElement:te,isRTL:Ta};function Aa(e,t){let i=null,o;const r=ce(e);function s(){var d;clearTimeout(o),(d=i)==null||d.disconnect(),i=null}function a(d,c){d===void 0&&(d=!1),c===void 0&&(c=1),s();const{left:u,top:p,width:m,height:f}=e.getBoundingClientRect();if(d||t(),!m||!f)return;const b=Pt(p),v=Pt(r.clientWidth-(u+m)),y=Pt(r.clientHeight-(p+f)),$=Pt(u),A={rootMargin:-b+"px "+-v+"px "+-y+"px "+-$+"px",threshold:Y(0,Te(1,c))||1};let z=!0;function O(I){const G=I[0].intersectionRatio;if(G!==c){if(!z)return a();G?a(!1,G):o=setTimeout(()=>{a(!1,1e-7)},1e3)}z=!1}try{i=new IntersectionObserver(O,{...A,root:r.ownerDocument})}catch{i=new IntersectionObserver(O,A)}i.observe(e)}return a(!0),s}function Ea(e,t,i,o){o===void 0&&(o={});const{ancestorScroll:r=!0,ancestorResize:s=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:d=typeof IntersectionObserver=="function",animationFrame:c=!1}=o,u=Ui(e),p=r||s?[...u?vt(u):[],...vt(t)]:[];p.forEach(C=>{r&&C.addEventListener("scroll",i,{passive:!0}),s&&C.addEventListener("resize",i)});const m=u&&d?Aa(u,i):null;let f=-1,b=null;a&&(b=new ResizeObserver(C=>{let[A]=C;A&&A.target===u&&b&&(b.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var z;(z=b)==null||z.observe(t)})),i()}),u&&!c&&b.observe(u),b.observe(t));let v,y=c?Ue(e):null;c&&$();function $(){const C=Ue(e);y&&(C.x!==y.x||C.y!==y.y||C.width!==y.width||C.height!==y.height)&&i(),y=C,v=requestAnimationFrame($)}return i(),()=>{var C;p.forEach(A=>{r&&A.removeEventListener("scroll",i),s&&A.removeEventListener("resize",i)}),m?.(),(C=b)==null||C.disconnect(),b=null,c&&cancelAnimationFrame(v)}}const Sa=da,za=ca,Pa=na,yo=ua,Ia=aa,Da=(e,t,i)=>{const o=new Map,r={platform:Ot,...i},s={...r.platform,_c:o};return sa(e,t,{...r,platform:s})};function Na(e){return Oa(e)}function ci(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Oa(e){for(let t=e;t;t=ci(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=ci(e);t;t=ci(t)){if(!(t instanceof Element))continue;const i=getComputedStyle(t);if(i.display!=="contents"&&(i.position!=="static"||i.filter!=="none"||t.tagName==="BODY"))return t}return null}function Ma(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e&&("contextElement"in e?e instanceof Element:!0)}var S=class extends N{constructor(){super(...arguments),this.localize=new je(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),i=this.placement.includes("top")||this.placement.includes("bottom");let o=0,r=0,s=0,a=0,d=0,c=0,u=0,p=0;i?e.top<t.top?(o=e.left,r=e.bottom,s=e.right,a=e.bottom,d=t.left,c=t.top,u=t.right,p=t.top):(o=t.left,r=t.bottom,s=t.right,a=t.bottom,d=e.left,c=e.top,u=e.right,p=e.top):e.left<t.left?(o=e.right,r=e.top,s=t.left,a=t.top,d=e.right,c=e.bottom,u=t.left,p=t.bottom):(o=t.right,r=t.top,s=e.left,a=e.top,d=t.right,c=t.bottom,u=e.left,p=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${r}px`),this.style.setProperty("--hover-bridge-top-right-x",`${s}px`),this.style.setProperty("--hover-bridge-top-right-y",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${d}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${u}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${p}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||Ma(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&(this.cleanup=Ea(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;const e=[Sa({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(yo({apply:({rects:i})=>{const o=this.sync==="width"||this.sync==="both",r=this.sync==="height"||this.sync==="both";this.popup.style.width=o?`${i.reference.width}px`:"",this.popup.style.height=r?`${i.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(Pa({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(za({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(yo({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:i,availableHeight:o})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${o}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${i}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(Ia({element:this.arrowEl,padding:this.arrowPadding}));const t=this.strategy==="absolute"?i=>Ot.getOffsetParent(i,Na):Ot.getOffsetParent;Da(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:xt(Se({},Ot),{getOffsetParent:t})}).then(({x:i,y:o,middlewareData:r,placement:s})=>{const a=this.localize.dir()==="rtl",d={top:"bottom",right:"left",bottom:"top",left:"right"}[s.split("-")[0]];if(this.setAttribute("data-current-placement",s),Object.assign(this.popup.style,{left:`${i}px`,top:`${o}px`}),this.arrow){const c=r.arrow.x,u=r.arrow.y;let p="",m="",f="",b="";if(this.arrowPlacement==="start"){const v=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";p=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",m=a?v:"",b=a?"":v}else if(this.arrowPlacement==="end"){const v=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";m=a?"":v,b=a?v:"",f=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(b=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":"",p=typeof u=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(b=typeof c=="number"?`${c}px`:"",p=typeof u=="number"?`${u}px`:"");Object.assign(this.arrowEl.style,{top:p,right:m,bottom:f,left:b,[d]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return h`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${V({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${V({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?h`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};S.styles=[q,Qs];n([R(".popup")],S.prototype,"popup",2);n([R(".popup__arrow")],S.prototype,"arrowEl",2);n([l()],S.prototype,"anchor",2);n([l({type:Boolean,reflect:!0})],S.prototype,"active",2);n([l({reflect:!0})],S.prototype,"placement",2);n([l({reflect:!0})],S.prototype,"strategy",2);n([l({type:Number})],S.prototype,"distance",2);n([l({type:Number})],S.prototype,"skidding",2);n([l({type:Boolean})],S.prototype,"arrow",2);n([l({attribute:"arrow-placement"})],S.prototype,"arrowPlacement",2);n([l({attribute:"arrow-padding",type:Number})],S.prototype,"arrowPadding",2);n([l({type:Boolean})],S.prototype,"flip",2);n([l({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],S.prototype,"flipFallbackPlacements",2);n([l({attribute:"flip-fallback-strategy"})],S.prototype,"flipFallbackStrategy",2);n([l({type:Object})],S.prototype,"flipBoundary",2);n([l({attribute:"flip-padding",type:Number})],S.prototype,"flipPadding",2);n([l({type:Boolean})],S.prototype,"shift",2);n([l({type:Object})],S.prototype,"shiftBoundary",2);n([l({attribute:"shift-padding",type:Number})],S.prototype,"shiftPadding",2);n([l({attribute:"auto-size"})],S.prototype,"autoSize",2);n([l()],S.prototype,"sync",2);n([l({type:Object})],S.prototype,"autoSizeBoundary",2);n([l({attribute:"auto-size-padding",type:Number})],S.prototype,"autoSizePadding",2);n([l({attribute:"hover-bridge",type:Boolean})],S.prototype,"hoverBridge",2);var U=class extends N{constructor(){super(...arguments),this.localize=new je(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{var t;if(e.key==="Escape"&&this.open&&!this.closeWatcher){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="sl-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var i,o,r;const s=((i=this.containingElement)==null?void 0:i.getRootNode())instanceof ShadowRoot?(r=(o=document.activeElement)==null?void 0:o.shadowRoot)==null?void 0:r.activeElement:document.activeElement;(!this.containingElement||s?.closest(this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{const t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];typeof e?.focus=="function"&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const i=t.getAllItems(),o=i[0],r=i[i.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),i.length>0&&this.updateComplete.then(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(t.setCurrentItem(o),o.focus()),(e.key==="ArrowUp"||e.key==="End")&&(t.setCurrentItem(r),r.focus())}))}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(o=>Ks(o).start);let i;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":i=t.button;break;default:i=t}i.setAttribute("aria-haspopup","true"),i.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,Bt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Bt(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var e;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var e;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await Ut(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=Lt(this,"dropdown.show",{dir:this.localize.dir()});await Ft(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Ut(this);const{keyframes:e,options:t}=Lt(this,"dropdown.hide",{dir:this.localize.dir()});await Ft(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return h`
      <sl-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${w(this.sync?this.sync:void 0)}
        class=${V({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};U.styles=[q,qs];U.dependencies={"sl-popup":S};n([R(".dropdown")],U.prototype,"popup",2);n([R(".dropdown__trigger")],U.prototype,"trigger",2);n([R(".dropdown__panel")],U.prototype,"panel",2);n([l({type:Boolean,reflect:!0})],U.prototype,"open",2);n([l({reflect:!0})],U.prototype,"placement",2);n([l({type:Boolean,reflect:!0})],U.prototype,"disabled",2);n([l({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],U.prototype,"stayOpenOnSelect",2);n([l({attribute:!1})],U.prototype,"containingElement",2);n([l({type:Number})],U.prototype,"distance",2);n([l({type:Number})],U.prototype,"skidding",2);n([l({type:Boolean})],U.prototype,"hoist",2);n([l({reflect:!0})],U.prototype,"sync",2);n([L("open",{waitUntilFirstUpdate:!0})],U.prototype,"handleOpenChange",1);Qt("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});Qt("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});U.define("sl-dropdown");var Ra=k`
  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,Vi=class extends N{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(e){const t=["menuitem","menuitemcheckbox"],i=e.composedPath(),o=i.find(d=>{var c;return t.includes(((c=d?.getAttribute)==null?void 0:c.call(d,"role"))||"")});if(!o||i.find(d=>{var c;return((c=d?.getAttribute)==null?void 0:c.call(d,"role"))==="menu"})!==this)return;const a=o;a.type==="checkbox"&&(a.checked=!a.checked),this.emit("sl-select",{detail:{item:a}})}handleKeyDown(e){if(e.key==="Enter"||e.key===" "){const t=this.getCurrentItem();e.preventDefault(),e.stopPropagation(),t?.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const t=this.getAllItems(),i=this.getCurrentItem();let o=i?t.indexOf(i):0;t.length>0&&(e.preventDefault(),e.stopPropagation(),e.key==="ArrowDown"?o++:e.key==="ArrowUp"?o--:e.key==="Home"?o=0:e.key==="End"&&(o=t.length-1),o<0&&(o=t.length-1),o>t.length-1&&(o=0),this.setCurrentItem(t[o]),t[o].focus())}}handleMouseDown(e){const t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){const e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){var t;return e.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((t=e.getAttribute("role"))!=null?t:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>!(e.inert||!this.isMenuItem(e)))}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute("tabindex")==="0")}setCurrentItem(e){this.getAllItems().forEach(i=>{i.setAttribute("tabindex",i===e?"0":"-1")})}render(){return h`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};Vi.styles=[q,Ra];n([R("slot")],Vi.prototype,"defaultSlot",2);Vi.define("sl-menu");var La=k`
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(sl-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading sl-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }

  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;const mt=(e,t)=>{const i=e._$AN;if(i===void 0)return!1;for(const o of i)o._$AO?.(t,!1),mt(o,t);return!0},Yt=e=>{let t,i;do{if((t=e._$AM)===void 0)break;i=t._$AN,i.delete(e),e=t}while(i?.size===0)},Wo=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(i===void 0)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),Ua(t)}};function Ba(e){this._$AN!==void 0?(Yt(this),this._$AM=e,Wo(this)):this._$AM=e}function Fa(e,t=!1,i=0){const o=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(t)if(Array.isArray(o))for(let s=i;s<o.length;s++)mt(o[s],!1),Yt(o[s]);else o!=null&&(mt(o,!1),Yt(o));else mt(this,e)}const Ua=e=>{e.type==Ce.CHILD&&(e._$AP??=Fa,e._$AQ??=Ba)};class ja extends Ei{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,i,o){super._$AT(t,i,o),Wo(this),this.isConnected=t._$AU}_$AO(t,i=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),i&&(mt(this,t),Yt(this))}setValue(t){if(Do(this._$Ct))this._$Ct._$AI(t,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}const Va=()=>new qa;class qa{}const ui=new WeakMap,Ha=Ai(class extends ja{render(e){return D}update(e,[t]){const i=t!==this.Y;return i&&this.Y!==void 0&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.Y=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),D}rt(e){if(this.isConnected||(e=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let i=ui.get(t);i===void 0&&(i=new WeakMap,ui.set(t,i)),i.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),i.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){return typeof this.Y=="function"?ui.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Ya=class{constructor(e,t){this.popupRef=Va(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=i=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${i.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${i.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=i=>{switch(i.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":i.target!==this.host&&(i.preventDefault(),i.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(i);break}},this.handleClick=i=>{var o;i.target===this.host?(i.preventDefault(),i.stopPropagation()):i.target instanceof Element&&(i.target.tagName==="sl-menu-item"||(o=i.target.role)!=null&&o.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=i=>{i.relatedTarget&&i.relatedTarget instanceof Element&&this.host.contains(i.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=i=>{i.stopPropagation()},this.handlePopupReposition=()=>{const i=this.host.renderRoot.querySelector("slot[name='submenu']"),o=i?.assignedElements({flatten:!0}).filter(u=>u.localName==="sl-menu")[0],r=getComputedStyle(this.host).direction==="rtl";if(!o)return;const{left:s,top:a,width:d,height:c}=o.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${r?s+d:s}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${a}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${r?s+d:s}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${a+c}px`)},(this.host=e).addController(this),this.hasSlotController=t}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(e){const t=this.host.renderRoot.querySelector("slot[name='submenu']");if(!t){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let i=null;for(const o of t.assignedElements())if(i=o.querySelectorAll("sl-menu-item, [role^='menuitem']"),i.length!==0)break;if(!(!i||i.length===0)){i[0].setAttribute("tabindex","0");for(let o=1;o!==i.length;++o)i[o].setAttribute("tabindex","-1");this.popupRef.value&&(e.preventDefault(),e.stopPropagation(),this.popupRef.value.active?i[0]instanceof HTMLElement&&i[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{i[0]instanceof HTMLElement&&i[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(e){this.popupRef.value&&this.popupRef.value.active!==e&&(this.popupRef.value.active=e,this.host.requestUpdate())}enableSubmenu(e=!0){e?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var e;if(!((e=this.host.parentElement)!=null&&e.computedStyleMap))return;const t=this.host.parentElement.computedStyleMap(),o=["padding-top","border-top-width","margin-top"].reduce((r,s)=>{var a;const d=(a=t.get(s))!=null?a:new CSSUnitValue(0,"px"),u=(d instanceof CSSUnitValue?d:new CSSUnitValue(0,"px")).to("px");return r-u.value},0);this.skidding=o}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const e=getComputedStyle(this.host).direction==="rtl";return this.isConnected?h`
      <sl-popup
        ${Ha(this.popupRef)}
        placement=${e?"left-start":"right-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:h` <slot name="submenu" hidden></slot> `}},K=class extends N{constructor(){super(...arguments),this.localize=new je(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new it(this,"submenu"),this.submenuController=new Ya(this,this.hasSlotController),this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleMouseOver=e=>{this.focus(),e.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return Lr(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const e=this.localize.dir()==="rtl",t=this.submenuController.isExpanded();return h`
      <div
        id="anchor"
        part="base"
        class=${V({"menu-item":!0,"menu-item--rtl":e,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":t})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!t}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${e?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?h` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};K.styles=[q,La];K.dependencies={"sl-icon":H,"sl-popup":S,"sl-spinner":Pi};n([R("slot:not([name])")],K.prototype,"defaultSlot",2);n([R(".menu-item")],K.prototype,"menuItem",2);n([l()],K.prototype,"type",2);n([l({type:Boolean,reflect:!0})],K.prototype,"checked",2);n([l()],K.prototype,"value",2);n([l({type:Boolean,reflect:!0})],K.prototype,"loading",2);n([l({type:Boolean,reflect:!0})],K.prototype,"disabled",2);n([L("checked")],K.prototype,"handleCheckedChange",1);n([L("disabled")],K.prototype,"handleDisabledChange",1);n([L("type")],K.prototype,"handleTypeChange",1);K.define("sl-menu-item");var Wa=k`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,J=class extends N{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?Rt`a`:Rt`button`;return Nt`
      <${t}
        part="base"
        class=${V({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${w(e?void 0:this.disabled)}
        type=${w(e?void 0:"button")}
        href=${w(e?this.href:void 0)}
        target=${w(e?this.target:void 0)}
        download=${w(e?this.download:void 0)}
        rel=${w(e&&this.target?"noreferrer noopener":void 0)}
        role=${w(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${w(this.name)}
          library=${w(this.library)}
          src=${w(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};J.styles=[q,Wa];J.dependencies={"sl-icon":H};n([R(".icon-button")],J.prototype,"button",2);n([g()],J.prototype,"hasFocus",2);n([l()],J.prototype,"name",2);n([l()],J.prototype,"library",2);n([l()],J.prototype,"src",2);n([l()],J.prototype,"href",2);n([l()],J.prototype,"target",2);n([l()],J.prototype,"download",2);n([l()],J.prototype,"label",2);n([l({type:Boolean,reflect:!0})],J.prototype,"disabled",2);J.define("sl-icon-button");var Ka=Object.defineProperty,Ja=Object.getOwnPropertyDescriptor,qi=(e,t,i,o)=>{for(var r=o>1?void 0:o?Ja(t,i):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(r=(o?a(t,i,r):a(r))||r);return o&&r&&Ka(t,i,r),r};let yt=class extends P{constructor(){super(...arguments),this.title="CaydenJoy",this.enableBack=!1}render(){return h`
      <header>
        <div id="back-button-block">
          ${this.enableBack?h`<sl-button size="small" href="${x()}">
            Back
          </sl-button>`:null}
          <h1>${this.title}</h1>
        </div>

        <nav>
          <a href="${x()}">Communication</a>
          <a href="${x("foods")}">Foods</a>
          <a href="${x("colors")}">Colors</a>
          <a href="${x("numbers")}">Numbers</a>
          <a href="${x("places")}">Places</a>
          <a href="${x("family-puzzle")}">Puzzle</a>
          <a href="${x("home-enhanced")}">Quick</a>
          <a href="${x("custom-images")}">📸</a>
          <a href="${x("upgrade")}">🔓</a>
          <a href="${x("premium")}">👑</a>
          <a href="${x("admin")}">⚙️</a>
          <a href="${x("settings")}">🛠️</a>
        </nav>
      </header>
    `}};yt.styles=k`
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: linear-gradient(135deg, #6C5CE7 0%, #5F3DC4 100%);
      color: white;
      padding: 12px 20px;
      padding-top: 4px;

      position: fixed;
      left: env(titlebar-area-x, 0);
      top: env(titlebar-area-y, 0);
      height: env(titlebar-area-height, auto);
      width: env(titlebar-area-width, 100%);
      -webkit-app-region: drag;
      z-index: 1000;
    }

    header h1 {
      margin-top: 0;
      margin-bottom: 0;
      font-size: 20px;
      font-weight: bold;
    }

    nav {
      display: flex;
      gap: 12px;
      align-items: center;
    }

    nav a {
      color: white;
      text-decoration: none;
      padding: 6px 12px;
      border-radius: 4px;
      font-size: 14px;
      transition: background-color 0.3s;
    }

    nav a:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    #back-button-block {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
    }

    @media(prefers-color-scheme: light) {
      header {
        color: white;
      }

      nav a {
        color: initial;
      }
    }
  `;qi([l({type:String})],yt.prototype,"title",2);qi([l({type:Boolean})],yt.prototype,"enableBack",2);yt=qi([M("app-header")],yt);globalThis.URLPattern||await Ao(()=>import("./index-DkuV2QLQ.js"),[],import.meta.url);const Ga="./",sn=new Or({routes:[{path:x(),title:"Communication",render:()=>h`<app-communication></app-communication>`},{path:x("home"),title:"Home",render:()=>h`<app-home></app-home>`},{path:x("home-enhanced"),title:"Quick Communication",render:()=>h`<app-home-enhanced></app-home-enhanced>`},{path:x("services"),title:"Services",render:()=>h`<app-services></app-services>`},{path:x("contact"),title:"Contact",render:()=>h`<app-contact></app-contact>`},{path:x("settings"),title:"Settings",render:()=>h`<app-settings></app-settings>`},{path:x("faq"),title:"FAQ",render:()=>h`<app-faq></app-faq>`},{path:x("family-puzzle"),title:"Family Puzzle",render:()=>h`<app-family-puzzle></app-family-puzzle>`},{path:x("foods"),title:"Foods",render:()=>h`<app-foods-enhanced></app-foods-enhanced>`},{path:x("colors"),title:"Colors",render:()=>h`<app-colors></app-colors>`},{path:x("numbers"),title:"Numbers",render:()=>h`<app-numbers></app-numbers>`},{path:x("places"),title:"Places",render:()=>h`<app-places></app-places>`},{path:x("premium"),title:"Premium",render:()=>h`<app-premium></app-premium>`},{path:x("custom-images"),title:"Custom Images",render:()=>h`<app-custom-images></app-custom-images>`},{path:x("upgrade"),title:"Upgrade",render:()=>h`<app-upgrade></app-upgrade>`},{path:x("admin"),title:"Admin",render:()=>h`<app-admin></app-admin>`},{path:x("about"),title:"About",plugins:[Mr(()=>Ao(()=>import("./app-about-CLEAv6LC.js"),[],import.meta.url))],render:()=>h`<app-about></app-about>`}]});function x(e){var t=Ga;return e&&(t=t+e),t}var Qa=k`
  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,Et=class extends N{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return h`
      <span
        part="base"
        class=${V({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};Et.styles=[q,Qa];n([l({reflect:!0})],Et.prototype,"variant",2);n([l({type:Boolean,reflect:!0})],Et.prototype,"pill",2);n([l({type:Boolean,reflect:!0})],Et.prototype,"pulse",2);Et.define("sl-badge");var Xa=Object.defineProperty,Za=Object.getOwnPropertyDescriptor,Hi=(e,t,i,o)=>{for(var r=o>1?void 0:o?Za(t,i):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(r=(o?a(t,i,r):a(r))||r);return o&&r&&Xa(t,i,r),r};let wt=class extends P{constructor(){super(...arguments),this.message="Welcome to CaydenJoy",this.isOnline=navigator.onLine}async firstUpdated(){console.log("This is your home page"),window.addEventListener("online",()=>{this.isOnline=!0,console.log("App is online")}),window.addEventListener("offline",()=>{this.isOnline=!1,console.log("App is offline")})}share(){navigator.share&&navigator.share({title:"PWABuilder pwa-starter",text:"Check out the PWABuilder pwa-starter!",url:"https://github.com/pwa-builder/pwa-starter"})}render(){return h`
      <app-header></app-header>

      <main>
        <div id="welcomeBar">
          <sl-card id="welcomeCard">
            <div slot="header">
              <h2>${this.message}</h2>
            </div>

            <p>
              For more information on the PWABuilder pwa-starter, check out the
              <a href="https://docs.pwabuilder.com/#/starter/quick-start">
                documentation</a>.
            </p>

            <p id="mainInfo">
              CaydenJoy is your personal progressive web app for joy and productivity.
              Build amazing experiences with modern web technologies.
              ${this.isOnline?h`<sl-badge variant="success">Online</sl-badge>`:h`<sl-badge variant="warning">Offline</sl-badge>`}
            </p>

            ${"share"in navigator?h`<sl-button slot="footer" variant="default" @click="${this.share}">
                        <sl-icon slot="prefix" name="share"></sl-icon>
                        Share this Starter!
                      </sl-button>`:null}
          </sl-card>

          <sl-card id="infoCard">
            <h2>Technology Used</h2>

            <ul>
              <li>
                <a href="https://www.typescriptlang.org/">TypeScript</a>
              </li>

              <li>
                <a href="https://lit.dev">lit</a>
              </li>

              <li>
                <a href="https://shoelace.style/">Shoelace</a>
              </li>

              <li>
                <a href="https://github.com/thepassle/app-tools/blob/master/router/README.md"
                  >App Tools Router</a>
              </li>
            </ul>
          </sl-card>

          <sl-button href="${x("services")}" variant="default">View Services</sl-button>
          <sl-button href="${x("about")}" variant="primary">Navigate to About</sl-button>
        </div>
      </main>
    `}};wt.styles=[Ct,k`
    #welcomeBar {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    #welcomeCard,
    #infoCard {
      padding: 18px;
      padding-top: 0px;
    }

    sl-card::part(footer) {
      display: flex;
      justify-content: flex-end;
    }

    @media(min-width: 750px) {
      sl-card {
        width: 70vw;
      }
    }


    @media (horizontal-viewport-segments: 2) {
      #welcomeBar {
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
      }

      #welcomeCard {
        margin-right: 64px;
      }
    }
  `];Hi([l()],wt.prototype,"message",2);Hi([l()],wt.prototype,"isOnline",2);wt=Hi([M("app-home")],wt);export{P as a,sn as b,Ct as c,k as i,g as r,Yi as s,M as t,h as x};
//# sourceMappingURL=app-home-znz_cRBq.js.map
