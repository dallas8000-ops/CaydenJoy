var Ps="";function fi(e){Ps=e}function Ao(e=""){if(!Ps){const t=[...document.getElementsByTagName("script")],s=t.find(i=>i.hasAttribute("data-shoelace"));if(s)fi(s.getAttribute("data-shoelace"));else{const i=t.find(r=>/shoelace(\.min)?\.js($|\?)/.test(r.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(r.src));let o="";i&&(o=i.getAttribute("src")),fi(o.split("/").slice(0,-1).join("/"))}}return Ps.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var Ki=Object.defineProperty,Eo=Object.defineProperties,Po=Object.getOwnPropertyDescriptor,Io=Object.getOwnPropertyDescriptors,gi=Object.getOwnPropertySymbols,zo=Object.prototype.hasOwnProperty,Oo=Object.prototype.propertyIsEnumerable,bi=(e,t,s)=>t in e?Ki(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Fe=(e,t)=>{for(var s in t||(t={}))zo.call(t,s)&&bi(e,s,t[s]);if(gi)for(var s of gi(t))Oo.call(t,s)&&bi(e,s,t[s]);return e},Ut=(e,t)=>Eo(e,Io(t)),n=(e,t,s,i)=>{for(var o=i>1?void 0:i?Po(t,s):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(o=(i?a(t,s,o):a(o))||o);return i&&o&&Ki(t,s,o),o},Ji=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)},Do=(e,t,s)=>(Ji(e,t,"read from private field"),t.get(e)),Mo=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},Lo=(e,t,s,i)=>(Ji(e,t,"write to private field"),t.set(e,s),s);const Gt=globalThis,Hs=Gt.ShadowRoot&&(Gt.ShadyCSS===void 0||Gt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ws=Symbol(),vi=new WeakMap;let Gi=class{constructor(t,s,i){if(this._$cssResult$=!0,i!==Ws)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=s}get styleSheet(){let t=this.o;const s=this.t;if(Hs&&t===void 0){const i=s!==void 0&&s.length===1;i&&(t=vi.get(s)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&vi.set(s,t))}return t}toString(){return this.cssText}};const Ro=e=>new Gi(typeof e=="string"?e:e+"",void 0,Ws),k=(e,...t)=>{const s=e.length===1?e[0]:t.reduce(((i,o,r)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[r+1]),e[0]);return new Gi(s,e,Ws)},Uo=(e,t)=>{if(Hs)e.adoptedStyleSheets=t.map((s=>s instanceof CSSStyleSheet?s:s.styleSheet));else for(const s of t){const i=document.createElement("style"),o=Gt.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=s.cssText,e.appendChild(i)}},yi=Hs?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let s="";for(const i of t.cssRules)s+=i.cssText;return Ro(s)})(e):e;const{is:No,defineProperty:Fo,getOwnPropertyDescriptor:Bo,getOwnPropertyNames:jo,getOwnPropertySymbols:qo,getPrototypeOf:Vo}=Object,ds=globalThis,wi=ds.trustedTypes,Ho=wi?wi.emptyScript:"",Wo=ds.reactiveElementPolyfillSupport,At=(e,t)=>e,dt={toAttribute(e,t){switch(t){case Boolean:e=e?Ho:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=e!==null;break;case Number:s=e===null?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch{s=null}}return s}},Ys=(e,t)=>!No(e,t),xi={attribute:!0,type:String,converter:dt,reflect:!1,hasChanged:Ys};Symbol.metadata??=Symbol("metadata"),ds.litPropertyMetadata??=new WeakMap;class at extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=xi){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(t,i,s);o!==void 0&&Fo(this.prototype,t,o)}}static getPropertyDescriptor(t,s,i){const{get:o,set:r}=Bo(this.prototype,t)??{get(){return this[s]},set(a){this[s]=a}};return{get(){return o?.call(this)},set(a){const c=o?.call(this);r.call(this,a),this.requestUpdate(t,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??xi}static _$Ei(){if(this.hasOwnProperty(At("elementProperties")))return;const t=Vo(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(At("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(At("properties"))){const s=this.properties,i=[...jo(s),...qo(s)];for(const o of i)this.createProperty(o,s[o])}const t=this[Symbol.metadata];if(t!==null){const s=litPropertyMetadata.get(t);if(s!==void 0)for(const[i,o]of s)this.elementProperties.set(i,o)}this._$Eh=new Map;for(const[s,i]of this.elementProperties){const o=this._$Eu(s,i);o!==void 0&&this._$Eh.set(o,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const s=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const o of i)s.unshift(yi(o))}else t!==void 0&&s.push(yi(t));return s}static _$Eu(t,s){const i=s.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Uo(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,s,i){this._$AK(t,i)}_$EC(t,s){const i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(o!==void 0&&i.reflect===!0){const r=(i.converter?.toAttribute!==void 0?i.converter:dt).toAttribute(s,i.type);this._$Em=t,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(t,s){const i=this.constructor,o=i._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const r=i.getPropertyOptions(o),a=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:dt;this._$Em=o,this[o]=a.fromAttribute(s,r.type),this._$Em=null}}requestUpdate(t,s,i){if(t!==void 0){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??Ys)(this[t],s))return;this.P(t,s,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,s,i){this._$AL.has(t)||this._$AL.set(t,s),i.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,r]of this._$Ep)this[o]=r;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,r]of i)r.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],r)}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach((i=>i.hostUpdate?.())),this.update(s)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(s)}willUpdate(t){}_$AE(t){this._$EO?.forEach((s=>s.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((s=>this._$EC(s,this[s]))),this._$EU()}updated(t){}firstUpdated(t){}}at.elementStyles=[],at.shadowRootOptions={mode:"open"},at[At("elementProperties")]=new Map,at[At("finalized")]=new Map,Wo?.({ReactiveElement:at}),(ds.reactiveElementVersions??=[]).push("2.0.4");const Ks=globalThis,ts=Ks.trustedTypes,_i=ts?ts.createPolicy("lit-html",{createHTML:e=>e}):void 0,Qi="$lit$",Le=`lit$${Math.random().toFixed(9).slice(2)}$`,Xi="?"+Le,Yo=`<${Xi}>`,Xe=document,Pt=()=>Xe.createComment(""),It=e=>e===null||typeof e!="object"&&typeof e!="function",Js=Array.isArray,Ko=e=>Js(e)||typeof e?.[Symbol.iterator]=="function",ys=`[ 	
\f\r]`,_t=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ki=/-->/g,$i=/>/g,Ye=RegExp(`>|${ys}(?:([^\\s"'>=/]+)(${ys}*=${ys}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ci=/'/g,Ti=/"/g,Zi=/^(?:script|style|textarea|title)$/i,Jo=e=>(t,...s)=>({_$litType$:e,strings:t,values:s}),d=Jo(1),ce=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),Si=new WeakMap,Ge=Xe.createTreeWalker(Xe,129);function eo(e,t){if(!Js(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return _i!==void 0?_i.createHTML(t):t}const Go=(e,t)=>{const s=e.length-1,i=[];let o,r=t===2?"<svg>":t===3?"<math>":"",a=_t;for(let c=0;c<s;c++){const u=e[c];let h,m,p=-1,g=0;for(;g<u.length&&(a.lastIndex=g,m=a.exec(u),m!==null);)g=a.lastIndex,a===_t?m[1]==="!--"?a=ki:m[1]!==void 0?a=$i:m[2]!==void 0?(Zi.test(m[2])&&(o=RegExp("</"+m[2],"g")),a=Ye):m[3]!==void 0&&(a=Ye):a===Ye?m[0]===">"?(a=o??_t,p=-1):m[1]===void 0?p=-2:(p=a.lastIndex-m[2].length,h=m[1],a=m[3]===void 0?Ye:m[3]==='"'?Ti:Ci):a===Ti||a===Ci?a=Ye:a===ki||a===$i?a=_t:(a=Ye,o=void 0);const v=a===Ye&&e[c+1].startsWith("/>")?" ":"";r+=a===_t?u+Yo:p>=0?(i.push(h),u.slice(0,p)+Qi+u.slice(p)+Le+v):u+Le+(p===-2?c:v)}return[eo(e,r+(e[s]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class zt{constructor({strings:t,_$litType$:s},i){let o;this.parts=[];let r=0,a=0;const c=t.length-1,u=this.parts,[h,m]=Go(t,s);if(this.el=zt.createElement(h,i),Ge.currentNode=this.el.content,s===2||s===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(o=Ge.nextNode())!==null&&u.length<c;){if(o.nodeType===1){if(o.hasAttributes())for(const p of o.getAttributeNames())if(p.endsWith(Qi)){const g=m[a++],v=o.getAttribute(p).split(Le),y=/([.?@])?(.*)/.exec(g);u.push({type:1,index:r,name:y[2],strings:v,ctor:y[1]==="."?Xo:y[1]==="?"?Zo:y[1]==="@"?er:us}),o.removeAttribute(p)}else p.startsWith(Le)&&(u.push({type:6,index:r}),o.removeAttribute(p));if(Zi.test(o.tagName)){const p=o.textContent.split(Le),g=p.length-1;if(g>0){o.textContent=ts?ts.emptyScript:"";for(let v=0;v<g;v++)o.append(p[v],Pt()),Ge.nextNode(),u.push({type:2,index:++r});o.append(p[g],Pt())}}}else if(o.nodeType===8)if(o.data===Xi)u.push({type:2,index:r});else{let p=-1;for(;(p=o.data.indexOf(Le,p+1))!==-1;)u.push({type:7,index:r}),p+=Le.length-1}r++}}static createElement(t,s){const i=Xe.createElement("template");return i.innerHTML=t,i}}function ut(e,t,s=e,i){if(t===ce)return t;let o=i!==void 0?s._$Co?.[i]:s._$Cl;const r=It(t)?void 0:t._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),r===void 0?o=void 0:(o=new r(e),o._$AT(e,s,i)),i!==void 0?(s._$Co??=[])[i]=o:s._$Cl=o),o!==void 0&&(t=ut(e,o._$AS(e,t.values),o,i)),t}class Qo{constructor(t,s){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:s},parts:i}=this._$AD,o=(t?.creationScope??Xe).importNode(s,!0);Ge.currentNode=o;let r=Ge.nextNode(),a=0,c=0,u=i[0];for(;u!==void 0;){if(a===u.index){let h;u.type===2?h=new Nt(r,r.nextSibling,this,t):u.type===1?h=new u.ctor(r,u.name,u.strings,this,t):u.type===6&&(h=new tr(r,this,t)),this._$AV.push(h),u=i[++c]}a!==u?.index&&(r=Ge.nextNode(),a++)}return Ge.currentNode=Xe,o}p(t){let s=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,s),s+=i.strings.length-2):i._$AI(t[s])),s++}}class Nt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,s,i,o){this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=s,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&t?.nodeType===11&&(t=s.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,s=this){t=ut(this,t,s),It(t)?t===L||t==null||t===""?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==ce&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ko(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==L&&It(this._$AH)?this._$AA.nextSibling.data=t:this.T(Xe.createTextNode(t)),this._$AH=t}$(t){const{values:s,_$litType$:i}=t,o=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=zt.createElement(eo(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(s);else{const r=new Qo(o,this),a=r.u(this.options);r.p(s),this.T(a),this._$AH=r}}_$AC(t){let s=Si.get(t.strings);return s===void 0&&Si.set(t.strings,s=new zt(t)),s}k(t){Js(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let i,o=0;for(const r of t)o===s.length?s.push(i=new Nt(this.O(Pt()),this.O(Pt()),this,this.options)):i=s[o],i._$AI(r),o++;o<s.length&&(this._$AR(i&&i._$AB.nextSibling,o),s.length=o)}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class us{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,s,i,o,r){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=s,this._$AM=o,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=L}_$AI(t,s=this,i,o){const r=this.strings;let a=!1;if(r===void 0)t=ut(this,t,s,0),a=!It(t)||t!==this._$AH&&t!==ce,a&&(this._$AH=t);else{const c=t;let u,h;for(t=r[0],u=0;u<r.length-1;u++)h=ut(this,c[i+u],s,u),h===ce&&(h=this._$AH[u]),a||=!It(h)||h!==this._$AH[u],h===L?t=L:t!==L&&(t+=(h??"")+r[u+1]),this._$AH[u]=h}a&&!o&&this.j(t)}j(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Xo extends us{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===L?void 0:t}}class Zo extends us{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==L)}}class er extends us{constructor(t,s,i,o,r){super(t,s,i,o,r),this.type=5}_$AI(t,s=this){if((t=ut(this,t,s,0)??L)===ce)return;const i=this._$AH,o=t===L&&i!==L||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==L&&(i===L||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class tr{constructor(t,s,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=s,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){ut(this,t)}}const sr=Ks.litHtmlPolyfillSupport;sr?.(zt,Nt),(Ks.litHtmlVersions??=[]).push("3.2.1");const ir=(e,t,s)=>{const i=s?.renderBefore??t;let o=i._$litPart$;if(o===void 0){const r=s?.renderBefore??null;i._$litPart$=o=new Nt(t.insertBefore(Pt(),r),r,void 0,s??{})}return o._$AI(e),o};let z=class extends at{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ir(s,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ce}};z._$litElement$=!0,z.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:z});const or=globalThis.litElementPolyfillSupport;or?.({LitElement:z});(globalThis.litElementVersions??=[]).push("4.1.1");const N=e=>(t,s)=>{s!==void 0?s.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)};const rr={attribute:!0,type:String,converter:dt,reflect:!1,hasChanged:Ys},ar=(e=rr,t,s)=>{const{kind:i,metadata:o}=s;let r=globalThis.litPropertyMetadata.get(o);if(r===void 0&&globalThis.litPropertyMetadata.set(o,r=new Map),r.set(s.name,e),i==="accessor"){const{name:a}=s;return{set(c){const u=t.get.call(this);t.set.call(this,c),this.requestUpdate(a,u,e)},init(c){return c!==void 0&&this.P(a,void 0,e),c}}}if(i==="setter"){const{name:a}=s;return function(c){const u=this[a];t.call(this,c),this.requestUpdate(a,u,e)}}throw Error("Unsupported decorator location: "+i)};function l(e){return(t,s)=>typeof s=="object"?ar(e,t,s):((i,o,r)=>{const a=o.hasOwnProperty(r);return o.constructor.createProperty(r,a?{...i,wrapped:!0}:i),a?Object.getOwnPropertyDescriptor(o,r):void 0})(e,t,s)}function b(e){return l({...e,state:!0,attribute:!1})}const nr=(e,t,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,s),s);function R(e,t){return(s,i,o)=>{const r=a=>a.renderRoot?.querySelector(e)??null;return nr(s,i,{get(){return r(this)}})}}const lr="modulepreload",cr=function(e){return"/CaydenJoy/"+e},Ai={},lt=function(t,s,i){let o=Promise.resolve();if(s&&s.length>0){let u=function(h){return Promise.all(h.map(m=>Promise.resolve(m).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=a?.nonce||a?.getAttribute("nonce");o=u(s.map(h=>{if(h=cr(h),h in Ai)return;Ai[h]=!0;const m=h.endsWith(".css"),p=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${p}`))return;const g=document.createElement("link");if(g.rel=m?"stylesheet":lr,m||(g.as="script"),g.crossOrigin="",g.href=h,c&&g.setAttribute("nonce",c),document.head.appendChild(g),m)return new Promise((v,y)=>{g.addEventListener("load",v),g.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${h}`)))})}))}function r(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return o.then(a=>{for(const c of a||[])c.status==="rejected"&&r(c.reason);return t().catch(r)})},Gs=Symbol.for("app-tools::log::1.x");globalThis[Gs]={setDebug:dr,debug:"window"in globalThis?new URL(window.location.href).searchParams.has("app-tools-debug"):!1};function dr(e){globalThis[Gs].debug=!!e}function ur(e,t){globalThis[Gs].debug&&(console.groupCollapsed(`[app-tools] ${e}`),t&&console.log(t),console.groupEnd())}function hr(e){return(t,s)=>{ur(`${e}: ${t}`,s)}}const Me=hr("router");class pr extends Event{constructor(t){super("route-changed"),this.context=t}}class mr extends EventTarget{context={params:{},query:{},title:"",url:new URL(window.location.href)};constructor(t){super(),this.config=t,this.routes=t.routes.map(s=>({...s,urlPattern:new URLPattern({pathname:s.path,baseURL:window.location.href,search:"*",hash:"*"})})),Me("Initialized routes",this.routes),queueMicrotask(()=>{this.navigate(new URL(window.location.href),{replace:!0})}),window.addEventListener("popstate",this._onPopState),window.addEventListener("click",this._onAnchorClick)}uninstall(){window.removeEventListener("popstate",this._onPopState),window.removeEventListener("click",this._onAnchorClick)}get url(){return new URL(window.location.href)}get fallback(){return new URL(this.config?.fallback||this.baseUrl.href.substring(window.location.origin.length),this.baseUrl)}get baseUrl(){return new URL("./",document.baseURI)}render(){return Me(`Rendering route ${this.context.url.pathname}${this.context.url.search}${this.context.url.hash}`,{context:this.context,route:this.route}),this.route?.render?.(this.context)}_matchRoute(t){for(const s of this.routes){const i=s.urlPattern.exec(t);if(i){const{title:o}=s,r=Object.fromEntries(new URLSearchParams(t.search)),a=i?.pathname?.groups??{};return this.context={url:t,title:typeof o=="function"?o({params:a,query:r,url:t}):o,params:a,query:r},s}}return Me(`No route matched for ${t.pathname}${t.search}${t.hash}`,t),null}_notifyUrlChanged(){this.dispatchEvent(new pr(this.context))}_onPopState=()=>{this.navigate(new URL(window.location.href),{backNav:!0})};_onAnchorClick=t=>{if(t.defaultPrevented||t.button!==0||t.metaKey||t.ctrlKey||t.shiftKey)return;const s=t.composedPath().find(r=>r.tagName==="A");if(!s||!s.href)return;const i=new URL(s.href);if(this.url.href===i.href||i.host!==window.location.host||s.hasAttribute("download")||s.href.includes("mailto:"))return;const o=s.getAttribute("target");o&&o!==""&&o!=="_self"||(t.preventDefault(),this.navigate(i))};_collectPlugins(t){return[...this.config?.plugins??[],...t?.plugins??[]]}async navigate(t,s={}){typeof t=="string"&&(t=new URL(t,this.baseUrl));let i=this._matchRoute(t)||this._matchRoute(this.fallback);Me(`Navigating to ${t.pathname}${t.search}${t.hash}`,{context:this.context,route:this.route});let o=this._collectPlugins(i);for(const r of o)try{const a=await r?.shouldNavigate?.(this.context);a&&(await a.condition()||(t=new URL(a.redirect,this.baseUrl),i=this._matchRoute(t)||this._matchRoute(this.fallback),o=this._collectPlugins(i),Me("Redirecting",{context:this.context,route:this.route})))}catch(a){throw Me(`Plugin "${r.name}" error on shouldNavigate hook`,a),a}if(this.route=i,!this.route)throw new Error(`[ROUTER] No route or fallback matched for url ${t}`);for(const r of o)try{await r?.beforeNavigation?.(this.context)}catch(a){throw Me(`Plugin "${r.name}" error on beforeNavigation hook`,a),a}s?.replace?window.history.replaceState(null,"",`${t.pathname}${t.search}${t.hash}`):s.backNav||window.history.pushState(null,"",`${t.pathname}${t.search}${t.hash}`),document.title=this.context.title,this._notifyUrlChanged();for(const r of o)try{await r?.afterNavigation?.(this.context)}catch(a){throw Me(`Plugin "${r.name}" error on afterNavigation hook`,a),a}}}function Qt(e){return{name:"lazy",beforeNavigation:()=>{e()}}}var fr=k`
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
`,st=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=s=>{const i=s.target;(this.slotNames.includes("[default]")&&!i.name||i.name&&this.slotNames.includes(i.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function gr(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let s="";return[...t].forEach(i=>{i.nodeType===Node.TEXT_NODE&&(s+=i.textContent)}),s}var K=k`
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
`,Xt,j=class extends z{constructor(){super(),Mo(this,Xt,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const s=new CustomEvent(e,Fe({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(s),s}static define(e,t=this,s={}){const i=customElements.get(e);if(!i){try{customElements.define(e,t,s)}catch{customElements.define(e,class extends t{},s)}return}let o=" (unknown version)",r=o;"version"in t&&t.version&&(o=" v"+t.version),"version"in i&&i.version&&(r=" v"+i.version),!(o&&r&&o===r)&&console.warn(`Attempted to register <${e}>${o}, but <${e}>${r} has already been registered.`)}attributeChangedCallback(e,t,s){Do(this,Xt)||(this.constructor.elementProperties.forEach((i,o)=>{i.reflect&&this[o]!=null&&this.initialReflectedProperties.set(o,this[o])}),Lo(this,Xt,!0)),super.attributeChangedCallback(e,t,s)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,s)=>{e.has(s)&&this[s]==null&&(this[s]=t)})}};Xt=new WeakMap;j.version="2.18.0";j.dependencies={};n([l()],j.prototype,"dir",2);n([l()],j.prototype,"lang",2);const Pe={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},hs=e=>(...t)=>({_$litDirective$:e,values:t});let ps=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,i){this._$Ct=t,this._$AM=s,this._$Ci=i}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}};const W=hs(class extends ps{constructor(e){if(super(e),e.type!==Pe.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((i=>i!==""))));for(const i in t)t[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(t)}const s=e.element.classList;for(const i of this.st)i in t||(s.remove(i),this.st.delete(i));for(const i in t){const o=!!t[i];o===this.st.has(i)||this.nt?.has(i)||(o?(s.add(i),this.st.add(i)):(s.remove(i),this.st.delete(i)))}return ce}});var to=class extends j{constructor(){super(...arguments),this.hasSlotController=new st(this,"footer","header","image")}render(){return d`
      <div
        part="base"
        class=${W({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};to.styles=[K,fr];to.define("sl-card");var br=k`
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
`;const Is=new Set,nt=new Map;let Ke,Qs="ltr",Xs="en";const so=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(so){const e=new MutationObserver(oo);Qs=document.documentElement.dir||"ltr",Xs=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function io(...e){e.map(t=>{const s=t.$code.toLowerCase();nt.has(s)?nt.set(s,Object.assign(Object.assign({},nt.get(s)),t)):nt.set(s,t),Ke||(Ke=t)}),oo()}function oo(){so&&(Qs=document.documentElement.dir||"ltr",Xs=document.documentElement.lang||navigator.language),[...Is.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let vr=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){Is.add(this.host)}hostDisconnected(){Is.delete(this.host)}dir(){return`${this.host.dir||Qs}`.toLowerCase()}lang(){return`${this.host.lang||Xs}`.toLowerCase()}getTranslationData(t){var s,i;const o=new Intl.Locale(t.replace(/_/g,"-")),r=o?.language.toLowerCase(),a=(i=(s=o?.region)===null||s===void 0?void 0:s.toLowerCase())!==null&&i!==void 0?i:"",c=nt.get(`${r}-${a}`),u=nt.get(r);return{locale:o,language:r,region:a,primary:c,secondary:u}}exists(t,s){var i;const{primary:o,secondary:r}=this.getTranslationData((i=s.lang)!==null&&i!==void 0?i:this.lang());return s=Object.assign({includeFallback:!1},s),!!(o&&o[t]||r&&r[t]||s.includeFallback&&Ke&&Ke[t])}term(t,...s){const{primary:i,secondary:o}=this.getTranslationData(this.lang());let r;if(i&&i[t])r=i[t];else if(o&&o[t])r=o[t];else if(Ke&&Ke[t])r=Ke[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof r=="function"?r(...s):r}date(t,s){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),s).format(t)}number(t,s){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),s).format(t)}relativeTime(t,s,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(t,s)}};var ro={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};io(ro);var yr=ro,Ce=class extends vr{};io(yr);var Zs=class extends j{constructor(){super(...arguments),this.localize=new Ce(this)}render(){return d`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Zs.styles=[K,br];var kt=new WeakMap,$t=new WeakMap,Ct=new WeakMap,ws=new WeakSet,Vt=new WeakMap,Ft=class{constructor(e,t){this.handleFormData=s=>{const i=this.options.disabled(this.host),o=this.options.name(this.host),r=this.options.value(this.host),a=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!i&&!a&&typeof o=="string"&&o.length>0&&typeof r<"u"&&(Array.isArray(r)?r.forEach(c=>{s.formData.append(o,c.toString())}):s.formData.append(o,r.toString()))},this.handleFormSubmit=s=>{var i;const o=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&((i=kt.get(this.form))==null||i.forEach(a=>{this.setUserInteracted(a,!0)})),this.form&&!this.form.noValidate&&!o&&!r(this.host)&&(s.preventDefault(),s.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Vt.set(this.host,[])},this.handleInteraction=s=>{const i=Vt.get(this.host);i.includes(s.type)||i.push(s.type),i.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const s=this.form.querySelectorAll("*");for(const i of s)if(typeof i.checkValidity=="function"&&!i.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const s=this.form.querySelectorAll("*");for(const i of s)if(typeof i.reportValidity=="function"&&!i.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=Fe({form:s=>{const i=s.form;if(i){const r=s.getRootNode().querySelector(`#${i}`);if(r)return r}return s.closest("form")},name:s=>s.name,value:s=>s.value,defaultValue:s=>s.defaultValue,disabled:s=>{var i;return(i=s.disabled)!=null?i:!1},reportValidity:s=>typeof s.reportValidity=="function"?s.reportValidity():!0,checkValidity:s=>typeof s.checkValidity=="function"?s.checkValidity():!0,setValue:(s,i)=>s.value=i,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),Vt.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Vt.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,kt.has(this.form)?kt.get(this.form).add(this.host):kt.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),$t.has(this.form)||($t.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Ct.has(this.form)||(Ct.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=kt.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),$t.has(this.form)&&(this.form.reportValidity=$t.get(this.form),$t.delete(this.form)),Ct.has(this.form)&&(this.form.checkValidity=Ct.get(this.form),Ct.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?ws.add(e):ws.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const s=document.createElement("button");s.type=e,s.style.position="absolute",s.style.width="0",s.style.height="0",s.style.clipPath="inset(50%)",s.style.overflow="hidden",s.style.whiteSpace="nowrap",t&&(s.name=t.name,s.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(i=>{t.hasAttribute(i)&&s.setAttribute(i,t.getAttribute(i))})),this.form.append(s),s.click(),s.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,s=!!ws.has(t),i=!!t.required;t.toggleAttribute("data-required",i),t.toggleAttribute("data-optional",!i),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&s),t.toggleAttribute("data-user-valid",e&&s)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e?.preventDefault()}},ei=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(Ut(Fe({},ei),{valid:!1,valueMissing:!0}));Object.freeze(Ut(Fe({},ei),{valid:!1,customError:!0}));var wr=k`
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
`,xr={name:"default",resolver:e=>Ao(`assets/icons/${e}.svg`)},_r=xr,Ei={caret:`
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
  `},kr={name:"system",resolver:e=>e in Ei?`data:image/svg+xml,${encodeURIComponent(Ei[e])}`:""},$r=kr,Cr=[_r,$r],zs=[];function Tr(e){zs.push(e)}function Sr(e){zs=zs.filter(t=>t!==e)}function Pi(e){return Cr.find(t=>t.name===e)}var Ar=k`
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
`;function F(e,t){const s=Fe({waitUntilFirstUpdate:!1},t);return(i,o)=>{const{update:r}=i,a=Array.isArray(e)?e:[e];i.update=function(c){a.forEach(u=>{const h=u;if(c.has(h)){const m=c.get(h),p=this[h];m!==p&&(!s.waitUntilFirstUpdate||this.hasUpdated)&&this[o](m,p)}}),r.call(this,c)}}}const Er=(e,t)=>e?._$litType$!==void 0,ao=e=>e.strings===void 0,Pr={},Ir=(e,t=Pr)=>e._$AH=t;var Tt=Symbol(),Ht=Symbol(),xs,_s=new Map,J=class extends j{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var s;let i;if(t?.spriteSheet)return this.svg=d`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,this.svg;try{if(i=await fetch(e,{mode:"cors"}),!i.ok)return i.status===410?Tt:Ht}catch{return Ht}try{const o=document.createElement("div");o.innerHTML=await i.text();const r=o.firstElementChild;if(((s=r?.tagName)==null?void 0:s.toLowerCase())!=="svg")return Tt;xs||(xs=new DOMParser);const c=xs.parseFromString(r.outerHTML,"text/html").body.querySelector("svg");return c?(c.part.add("svg"),document.adoptNode(c)):Tt}catch{return Tt}}connectedCallback(){super.connectedCallback(),Tr(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Sr(this)}getIconSource(){const e=Pi(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:s}=this.getIconSource(),i=s?Pi(this.library):void 0;if(!t){this.svg=null;return}let o=_s.get(t);if(o||(o=this.resolveIcon(t,i),_s.set(t,o)),!this.initialRender)return;const r=await o;if(r===Ht&&_s.delete(t),t===this.getIconSource().url){if(Er(r)){if(this.svg=r,i){await this.updateComplete;const a=this.shadowRoot.querySelector("[part='svg']");typeof i.mutator=="function"&&a&&i.mutator(a)}return}switch(r){case Ht:case Tt:this.svg=null,this.emit("sl-error");break;default:this.svg=r.cloneNode(!0),(e=i?.mutator)==null||e.call(i,this.svg),this.emit("sl-load")}}}render(){return this.svg}};J.styles=[K,Ar];n([b()],J.prototype,"svg",2);n([l({reflect:!0})],J.prototype,"name",2);n([l()],J.prototype,"src",2);n([l()],J.prototype,"label",2);n([l({reflect:!0})],J.prototype,"library",2);n([F("label")],J.prototype,"handleLabelChange",1);n([F(["name","src","library"])],J.prototype,"setIcon",1);const no=Symbol.for(""),zr=e=>{if(e?.r===no)return e?._$litStatic$},ss=(e,...t)=>({_$litStatic$:t.reduce(((s,i,o)=>s+(r=>{if(r._$litStatic$!==void 0)return r._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${r}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+e[o+1]),e[0]),r:no}),Ii=new Map,Or=e=>(t,...s)=>{const i=s.length;let o,r;const a=[],c=[];let u,h=0,m=!1;for(;h<i;){for(u=t[h];h<i&&(r=s[h],(o=zr(r))!==void 0);)u+=o+t[++h],m=!0;h!==i&&c.push(r),a.push(u),h++}if(h===i&&a.push(t[i]),m){const p=a.join("$$lit$$");(t=Ii.get(p))===void 0&&(a.raw=a,Ii.set(p,t=a)),s=c}return e(t,...s)},Zt=Or(d);const _=e=>e??L;var P=class extends j{constructor(){super(...arguments),this.formControlController=new Ft(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new st(this,"[default]","prefix","suffix"),this.localize=new Ce(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:ei}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?ss`a`:ss`button`;return Zt`
      <${t}
        part="base"
        class=${W({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${_(e?void 0:this.disabled)}
        type=${_(e?void 0:this.type)}
        title=${this.title}
        name=${_(e?void 0:this.name)}
        value=${_(e?void 0:this.value)}
        href=${_(e&&!this.disabled?this.href:void 0)}
        target=${_(e?this.target:void 0)}
        download=${_(e?this.download:void 0)}
        rel=${_(e?this.rel:void 0)}
        role=${_(e?void 0:"button")}
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
        ${this.caret?Zt` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Zt`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};P.styles=[K,wr];P.dependencies={"sl-icon":J,"sl-spinner":Zs};n([R(".button")],P.prototype,"button",2);n([b()],P.prototype,"hasFocus",2);n([b()],P.prototype,"invalid",2);n([l()],P.prototype,"title",2);n([l({reflect:!0})],P.prototype,"variant",2);n([l({reflect:!0})],P.prototype,"size",2);n([l({type:Boolean,reflect:!0})],P.prototype,"caret",2);n([l({type:Boolean,reflect:!0})],P.prototype,"disabled",2);n([l({type:Boolean,reflect:!0})],P.prototype,"loading",2);n([l({type:Boolean,reflect:!0})],P.prototype,"outline",2);n([l({type:Boolean,reflect:!0})],P.prototype,"pill",2);n([l({type:Boolean,reflect:!0})],P.prototype,"circle",2);n([l()],P.prototype,"type",2);n([l()],P.prototype,"name",2);n([l()],P.prototype,"value",2);n([l()],P.prototype,"href",2);n([l()],P.prototype,"target",2);n([l()],P.prototype,"rel",2);n([l()],P.prototype,"download",2);n([l()],P.prototype,"form",2);n([l({attribute:"formaction"})],P.prototype,"formAction",2);n([l({attribute:"formenctype"})],P.prototype,"formEnctype",2);n([l({attribute:"formmethod"})],P.prototype,"formMethod",2);n([l({attribute:"formnovalidate",type:Boolean})],P.prototype,"formNoValidate",2);n([l({attribute:"formtarget"})],P.prototype,"formTarget",2);n([F("disabled",{waitUntilFirstUpdate:!0})],P.prototype,"handleDisabledChange",1);P.define("sl-button");J.define("sl-icon");const Be=k`
  @media(min-width: 1000px) {
    sl-card {
      max-width: 70vw;
    }
  }

  main {
    margin-top: 34px;
    padding: 12px;
  }
`;var Dr=Object.getOwnPropertyDescriptor,Mr=(e,t,s,i)=>{for(var o=i>1?void 0:i?Dr(t,s):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(o=a(o)||o);return o};let Os=class extends z{render(){return d`
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
          <sl-button href="${f()}" variant="primary">Back to Home</sl-button>
        </div>
      </main>
    `}};Os.styles=[Be,k`
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
    `];Os=Mr([N("app-services")],Os);var Lr=k`
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
`,ms=(e="value")=>(t,s)=>{const i=t.constructor,o=i.prototype.attributeChangedCallback;i.prototype.attributeChangedCallback=function(r,a,c){var u;const h=i.getPropertyOptions(e),m=typeof h.attribute=="string"?h.attribute:e;if(r===m){const p=h.converter||dt,v=(typeof p=="function"?p:(u=p?.fromAttribute)!=null?u:dt.fromAttribute)(c,h.type);this[e]!==v&&(this[s]=v)}o.call(this,r,a,c)}},fs=k`
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
`;const ti=hs(class extends ps{constructor(e){if(super(e),e.type!==Pe.PROPERTY&&e.type!==Pe.ATTRIBUTE&&e.type!==Pe.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!ao(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===ce||t===L)return t;const s=e.element,i=e.name;if(e.type===Pe.PROPERTY){if(t===s[i])return ce}else if(e.type===Pe.BOOLEAN_ATTRIBUTE){if(!!t===s.hasAttribute(i))return ce}else if(e.type===Pe.ATTRIBUTE&&s.getAttribute(i)===t+"")return ce;return Ir(e),t}});var C=class extends j{constructor(){super(...arguments),this.formControlController=new Ft(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new st(this,"help-text","label"),this.localize=new Ce(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var e;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((e=this.input)==null?void 0:e.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){var e;return this.__numberInput.value=this.value,((e=this.input)==null?void 0:e.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(e){e.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleKeyDown(e){const t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!t&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,s="none"){this.input.setSelectionRange(e,t,s)}setRangeText(e,t,s,i="preserve"){const o=t??this.input.selectionStart,r=s??this.input.selectionEnd;this.input.setRangeText(e,o,r,i),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),s=this.label?!0:!!e,i=this.helpText?!0:!!t,r=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return d`
      <div
        part="form-control"
        class=${W({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${W({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
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
              name=${_(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${_(this.placeholder)}
              minlength=${_(this.minlength)}
              maxlength=${_(this.maxlength)}
              min=${_(this.min)}
              max=${_(this.max)}
              step=${_(this.step)}
              .value=${ti(this.value)}
              autocapitalize=${_(this.autocapitalize)}
              autocomplete=${_(this.autocomplete)}
              autocorrect=${_(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${_(this.pattern)}
              enterkeyhint=${_(this.enterkeyhint)}
              inputmode=${_(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${r?d`
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
            ${this.passwordToggle&&!this.disabled?d`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?d`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:d`
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
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};C.styles=[K,fs,Lr];C.dependencies={"sl-icon":J};n([R(".input__control")],C.prototype,"input",2);n([b()],C.prototype,"hasFocus",2);n([l()],C.prototype,"title",2);n([l({reflect:!0})],C.prototype,"type",2);n([l()],C.prototype,"name",2);n([l()],C.prototype,"value",2);n([ms()],C.prototype,"defaultValue",2);n([l({reflect:!0})],C.prototype,"size",2);n([l({type:Boolean,reflect:!0})],C.prototype,"filled",2);n([l({type:Boolean,reflect:!0})],C.prototype,"pill",2);n([l()],C.prototype,"label",2);n([l({attribute:"help-text"})],C.prototype,"helpText",2);n([l({type:Boolean})],C.prototype,"clearable",2);n([l({type:Boolean,reflect:!0})],C.prototype,"disabled",2);n([l()],C.prototype,"placeholder",2);n([l({type:Boolean,reflect:!0})],C.prototype,"readonly",2);n([l({attribute:"password-toggle",type:Boolean})],C.prototype,"passwordToggle",2);n([l({attribute:"password-visible",type:Boolean})],C.prototype,"passwordVisible",2);n([l({attribute:"no-spin-buttons",type:Boolean})],C.prototype,"noSpinButtons",2);n([l({reflect:!0})],C.prototype,"form",2);n([l({type:Boolean,reflect:!0})],C.prototype,"required",2);n([l()],C.prototype,"pattern",2);n([l({type:Number})],C.prototype,"minlength",2);n([l({type:Number})],C.prototype,"maxlength",2);n([l()],C.prototype,"min",2);n([l()],C.prototype,"max",2);n([l()],C.prototype,"step",2);n([l()],C.prototype,"autocapitalize",2);n([l()],C.prototype,"autocorrect",2);n([l()],C.prototype,"autocomplete",2);n([l({type:Boolean})],C.prototype,"autofocus",2);n([l()],C.prototype,"enterkeyhint",2);n([l({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],C.prototype,"spellcheck",2);n([l()],C.prototype,"inputmode",2);n([F("disabled",{waitUntilFirstUpdate:!0})],C.prototype,"handleDisabledChange",1);n([F("step",{waitUntilFirstUpdate:!0})],C.prototype,"handleStepChange",1);n([F("value",{waitUntilFirstUpdate:!0})],C.prototype,"handleValueChange",1);C.define("sl-input");var Rr=k`
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
`,A=class extends j{constructor(){super(...arguments),this.formControlController=new Ft(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new st(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){var e;super.disconnectedCallback(),this.input&&((e=this.resizeObserver)==null||e.unobserve(this.input))}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}setTextareaHeight(){this.resize==="auto"?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=void 0}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top=="number"&&(this.input.scrollTop=e.top),typeof e.left=="number"&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,s="none"){this.input.setSelectionRange(e,t,s)}setRangeText(e,t,s,i="preserve"){const o=t??this.input.selectionStart,r=s??this.input.selectionEnd;this.input.setRangeText(e,o,r,i),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),s=this.label?!0:!!e,i=this.helpText?!0:!!t;return d`
      <div
        part="form-control"
        class=${W({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${W({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${_(this.name)}
              .value=${ti(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${_(this.placeholder)}
              rows=${_(this.rows)}
              minlength=${_(this.minlength)}
              maxlength=${_(this.maxlength)}
              autocapitalize=${_(this.autocapitalize)}
              autocorrect=${_(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${_(this.spellcheck)}
              enterkeyhint=${_(this.enterkeyhint)}
              inputmode=${_(this.inputmode)}
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
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};A.styles=[K,fs,Rr];n([R(".textarea__control")],A.prototype,"input",2);n([R(".textarea__size-adjuster")],A.prototype,"sizeAdjuster",2);n([b()],A.prototype,"hasFocus",2);n([l()],A.prototype,"title",2);n([l()],A.prototype,"name",2);n([l()],A.prototype,"value",2);n([l({reflect:!0})],A.prototype,"size",2);n([l({type:Boolean,reflect:!0})],A.prototype,"filled",2);n([l()],A.prototype,"label",2);n([l({attribute:"help-text"})],A.prototype,"helpText",2);n([l()],A.prototype,"placeholder",2);n([l({type:Number})],A.prototype,"rows",2);n([l()],A.prototype,"resize",2);n([l({type:Boolean,reflect:!0})],A.prototype,"disabled",2);n([l({type:Boolean,reflect:!0})],A.prototype,"readonly",2);n([l({reflect:!0})],A.prototype,"form",2);n([l({type:Boolean,reflect:!0})],A.prototype,"required",2);n([l({type:Number})],A.prototype,"minlength",2);n([l({type:Number})],A.prototype,"maxlength",2);n([l()],A.prototype,"autocapitalize",2);n([l()],A.prototype,"autocorrect",2);n([l()],A.prototype,"autocomplete",2);n([l({type:Boolean})],A.prototype,"autofocus",2);n([l()],A.prototype,"enterkeyhint",2);n([l({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],A.prototype,"spellcheck",2);n([l()],A.prototype,"inputmode",2);n([ms()],A.prototype,"defaultValue",2);n([F("disabled",{waitUntilFirstUpdate:!0})],A.prototype,"handleDisabledChange",1);n([F("rows",{waitUntilFirstUpdate:!0})],A.prototype,"handleRowsChange",1);n([F("value",{waitUntilFirstUpdate:!0})],A.prototype,"handleValueChange",1);A.define("sl-textarea");const Ur=!1,Nr=!1;var Fr=k`
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
`,zi=new WeakMap;function lo(e){let t=zi.get(e);return t||(t=window.getComputedStyle(e,null),zi.set(e,t)),t}function Br(e){if(typeof e.checkVisibility=="function")return e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const t=lo(e);return t.visibility!=="hidden"&&t.display!=="none"}function jr(e){const t=lo(e),{overflowY:s,overflowX:i}=t;return s==="scroll"||i==="scroll"?!0:s!=="auto"||i!=="auto"?!1:e.scrollHeight>e.clientHeight&&s==="auto"||e.scrollWidth>e.clientWidth&&i==="auto"}function qr(e){const t=e.tagName.toLowerCase(),s=Number(e.getAttribute("tabindex"));return e.hasAttribute("tabindex")&&(isNaN(s)||s<=-1)||e.hasAttribute("disabled")||e.closest("[inert]")||t==="input"&&e.getAttribute("type")==="radio"&&!e.hasAttribute("checked")||!Br(e)?!1:(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(t)?!0:jr(e)}function Vr(e){var t,s;const i=Wr(e),o=(t=i[0])!=null?t:null,r=(s=i[i.length-1])!=null?s:null;return{start:o,end:r}}function Hr(e,t){var s;return((s=e.getRootNode({composed:!0}))==null?void 0:s.host)!==t}function Wr(e){const t=new WeakMap,s=[];function i(o){if(o instanceof Element){if(o.hasAttribute("inert")||o.closest("[inert]")||t.has(o))return;t.set(o,!0),!s.includes(o)&&qr(o)&&s.push(o),o instanceof HTMLSlotElement&&Hr(o,e)&&o.assignedElements({flatten:!0}).forEach(r=>{i(r)}),o.shadowRoot!==null&&o.shadowRoot.mode==="open"&&i(o.shadowRoot)}for(const r of o.children)i(r)}return i(e),s.sort((o,r)=>{const a=Number(o.getAttribute("tabindex"))||0;return(Number(r.getAttribute("tabindex"))||0)-a})}var Yr=k`
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
`;const Re=Math.min,re=Math.max,is=Math.round,Wt=Math.floor,ye=e=>({x:e,y:e}),Kr={left:"right",right:"left",bottom:"top",top:"bottom"},Jr={start:"end",end:"start"};function Ds(e,t,s){return re(e,Re(t,s))}function vt(e,t){return typeof e=="function"?e(t):e}function Ue(e){return e.split("-")[0]}function yt(e){return e.split("-")[1]}function co(e){return e==="x"?"y":"x"}function si(e){return e==="y"?"height":"width"}function Ze(e){return["top","bottom"].includes(Ue(e))?"y":"x"}function ii(e){return co(Ze(e))}function Gr(e,t,s){s===void 0&&(s=!1);const i=yt(e),o=ii(e),r=si(o);let a=o==="x"?i===(s?"end":"start")?"right":"left":i==="start"?"bottom":"top";return t.reference[r]>t.floating[r]&&(a=os(a)),[a,os(a)]}function Qr(e){const t=os(e);return[Ms(e),t,Ms(t)]}function Ms(e){return e.replace(/start|end/g,t=>Jr[t])}function Xr(e,t,s){const i=["left","right"],o=["right","left"],r=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return s?t?o:i:t?i:o;case"left":case"right":return t?r:a;default:return[]}}function Zr(e,t,s,i){const o=yt(e);let r=Xr(Ue(e),s==="start",i);return o&&(r=r.map(a=>a+"-"+o),t&&(r=r.concat(r.map(Ms)))),r}function os(e){return e.replace(/left|right|bottom|top/g,t=>Kr[t])}function ea(e){return{top:0,right:0,bottom:0,left:0,...e}}function uo(e){return typeof e!="number"?ea(e):{top:e,right:e,bottom:e,left:e}}function rs(e){const{x:t,y:s,width:i,height:o}=e;return{width:i,height:o,top:s,left:t,right:t+i,bottom:s+o,x:t,y:s}}function Oi(e,t,s){let{reference:i,floating:o}=e;const r=Ze(t),a=ii(t),c=si(a),u=Ue(t),h=r==="y",m=i.x+i.width/2-o.width/2,p=i.y+i.height/2-o.height/2,g=i[c]/2-o[c]/2;let v;switch(u){case"top":v={x:m,y:i.y-o.height};break;case"bottom":v={x:m,y:i.y+i.height};break;case"right":v={x:i.x+i.width,y:p};break;case"left":v={x:i.x-o.width,y:p};break;default:v={x:i.x,y:i.y}}switch(yt(t)){case"start":v[a]-=g*(s&&h?-1:1);break;case"end":v[a]+=g*(s&&h?-1:1);break}return v}const ta=async(e,t,s)=>{const{placement:i="bottom",strategy:o="absolute",middleware:r=[],platform:a}=s,c=r.filter(Boolean),u=await(a.isRTL==null?void 0:a.isRTL(t));let h=await a.getElementRects({reference:e,floating:t,strategy:o}),{x:m,y:p}=Oi(h,i,u),g=i,v={},y=0;for(let w=0;w<c.length;w++){const{name:x,fn:$}=c[w],{x:S,y:E,data:B,reset:D}=await $({x:m,y:p,initialPlacement:i,placement:g,strategy:o,middlewareData:v,rects:h,platform:a,elements:{reference:e,floating:t}});m=S??m,p=E??p,v={...v,[x]:{...v[x],...B}},D&&y<=50&&(y++,typeof D=="object"&&(D.placement&&(g=D.placement),D.rects&&(h=D.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:o}):D.rects),{x:m,y:p}=Oi(h,g,u)),w=-1)}return{x:m,y:p,placement:g,strategy:o,middlewareData:v}};async function oi(e,t){var s;t===void 0&&(t={});const{x:i,y:o,platform:r,rects:a,elements:c,strategy:u}=e,{boundary:h="clippingAncestors",rootBoundary:m="viewport",elementContext:p="floating",altBoundary:g=!1,padding:v=0}=vt(t,e),y=uo(v),x=c[g?p==="floating"?"reference":"floating":p],$=rs(await r.getClippingRect({element:(s=await(r.isElement==null?void 0:r.isElement(x)))==null||s?x:x.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(c.floating)),boundary:h,rootBoundary:m,strategy:u})),S=p==="floating"?{x:i,y:o,width:a.floating.width,height:a.floating.height}:a.reference,E=await(r.getOffsetParent==null?void 0:r.getOffsetParent(c.floating)),B=await(r.isElement==null?void 0:r.isElement(E))?await(r.getScale==null?void 0:r.getScale(E))||{x:1,y:1}:{x:1,y:1},D=rs(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:S,offsetParent:E,strategy:u}):S);return{top:($.top-D.top+y.top)/B.y,bottom:(D.bottom-$.bottom+y.bottom)/B.y,left:($.left-D.left+y.left)/B.x,right:(D.right-$.right+y.right)/B.x}}const sa=e=>({name:"arrow",options:e,async fn(t){const{x:s,y:i,placement:o,rects:r,platform:a,elements:c,middlewareData:u}=t,{element:h,padding:m=0}=vt(e,t)||{};if(h==null)return{};const p=uo(m),g={x:s,y:i},v=ii(o),y=si(v),w=await a.getDimensions(h),x=v==="y",$=x?"top":"left",S=x?"bottom":"right",E=x?"clientHeight":"clientWidth",B=r.reference[y]+r.reference[v]-g[v]-r.floating[y],D=g[v]-r.reference[v],te=await(a.getOffsetParent==null?void 0:a.getOffsetParent(h));let X=te?te[E]:0;(!X||!await(a.isElement==null?void 0:a.isElement(te)))&&(X=c.floating[E]||r.floating[y]);const O=B/2-D/2,M=X/2-w[y]/2-1,U=Re(p[$],M),Y=Re(p[S],M),H=U,q=X-w[y]-Y,V=X/2-w[y]/2+O,me=Ds(H,V,q),Ee=!u.arrow&&yt(o)!=null&&V!==me&&r.reference[y]/2-(V<H?U:Y)-w[y]/2<0,ve=Ee?V<H?V-H:V-q:0;return{[v]:g[v]+ve,data:{[v]:me,centerOffset:V-me-ve,...Ee&&{alignmentOffset:ve}},reset:Ee}}}),ia=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var s,i;const{placement:o,middlewareData:r,rects:a,initialPlacement:c,platform:u,elements:h}=t,{mainAxis:m=!0,crossAxis:p=!0,fallbackPlacements:g,fallbackStrategy:v="bestFit",fallbackAxisSideDirection:y="none",flipAlignment:w=!0,...x}=vt(e,t);if((s=r.arrow)!=null&&s.alignmentOffset)return{};const $=Ue(o),S=Ze(c),E=Ue(c)===c,B=await(u.isRTL==null?void 0:u.isRTL(h.floating)),D=g||(E||!w?[os(c)]:Qr(c)),te=y!=="none";!g&&te&&D.push(...Zr(c,w,y,B));const X=[c,...D],O=await oi(t,x),M=[];let U=((i=r.flip)==null?void 0:i.overflows)||[];if(m&&M.push(O[$]),p){const V=Gr(o,a,B);M.push(O[V[0]],O[V[1]])}if(U=[...U,{placement:o,overflows:M}],!M.every(V=>V<=0)){var Y,H;const V=(((Y=r.flip)==null?void 0:Y.index)||0)+1,me=X[V];if(me)return{data:{index:V,overflows:U},reset:{placement:me}};let Ee=(H=U.filter(ve=>ve.overflows[0]<=0).sort((ve,Oe)=>ve.overflows[1]-Oe.overflows[1])[0])==null?void 0:H.placement;if(!Ee)switch(v){case"bestFit":{var q;const ve=(q=U.filter(Oe=>{if(te){const De=Ze(Oe.placement);return De===S||De==="y"}return!0}).map(Oe=>[Oe.placement,Oe.overflows.filter(De=>De>0).reduce((De,So)=>De+So,0)]).sort((Oe,De)=>Oe[1]-De[1])[0])==null?void 0:q[0];ve&&(Ee=ve);break}case"initialPlacement":Ee=c;break}if(o!==Ee)return{reset:{placement:Ee}}}return{}}}};async function oa(e,t){const{placement:s,platform:i,elements:o}=e,r=await(i.isRTL==null?void 0:i.isRTL(o.floating)),a=Ue(s),c=yt(s),u=Ze(s)==="y",h=["left","top"].includes(a)?-1:1,m=r&&u?-1:1,p=vt(t,e);let{mainAxis:g,crossAxis:v,alignmentAxis:y}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return c&&typeof y=="number"&&(v=c==="end"?y*-1:y),u?{x:v*m,y:g*h}:{x:g*h,y:v*m}}const ra=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var s,i;const{x:o,y:r,placement:a,middlewareData:c}=t,u=await oa(t,e);return a===((s=c.offset)==null?void 0:s.placement)&&(i=c.arrow)!=null&&i.alignmentOffset?{}:{x:o+u.x,y:r+u.y,data:{...u,placement:a}}}}},aa=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:s,y:i,placement:o}=t,{mainAxis:r=!0,crossAxis:a=!1,limiter:c={fn:x=>{let{x:$,y:S}=x;return{x:$,y:S}}},...u}=vt(e,t),h={x:s,y:i},m=await oi(t,u),p=Ze(Ue(o)),g=co(p);let v=h[g],y=h[p];if(r){const x=g==="y"?"top":"left",$=g==="y"?"bottom":"right",S=v+m[x],E=v-m[$];v=Ds(S,v,E)}if(a){const x=p==="y"?"top":"left",$=p==="y"?"bottom":"right",S=y+m[x],E=y-m[$];y=Ds(S,y,E)}const w=c.fn({...t,[g]:v,[p]:y});return{...w,data:{x:w.x-s,y:w.y-i,enabled:{[g]:r,[p]:a}}}}}},na=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var s,i;const{placement:o,rects:r,platform:a,elements:c}=t,{apply:u=()=>{},...h}=vt(e,t),m=await oi(t,h),p=Ue(o),g=yt(o),v=Ze(o)==="y",{width:y,height:w}=r.floating;let x,$;p==="top"||p==="bottom"?(x=p,$=g===(await(a.isRTL==null?void 0:a.isRTL(c.floating))?"start":"end")?"left":"right"):($=p,x=g==="end"?"top":"bottom");const S=w-m.top-m.bottom,E=y-m.left-m.right,B=Re(w-m[x],S),D=Re(y-m[$],E),te=!t.middlewareData.shift;let X=B,O=D;if((s=t.middlewareData.shift)!=null&&s.enabled.x&&(O=E),(i=t.middlewareData.shift)!=null&&i.enabled.y&&(X=S),te&&!g){const U=re(m.left,0),Y=re(m.right,0),H=re(m.top,0),q=re(m.bottom,0);v?O=y-2*(U!==0||Y!==0?U+Y:re(m.left,m.right)):X=w-2*(H!==0||q!==0?H+q:re(m.top,m.bottom))}await u({...t,availableWidth:O,availableHeight:X});const M=await a.getDimensions(c.floating);return y!==M.width||w!==M.height?{reset:{rects:!0}}:{}}}};function gs(){return typeof window<"u"}function wt(e){return ho(e)?(e.nodeName||"").toLowerCase():"#document"}function ne(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Te(e){var t;return(t=(ho(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function ho(e){return gs()?e instanceof Node||e instanceof ne(e).Node:!1}function fe(e){return gs()?e instanceof Element||e instanceof ne(e).Element:!1}function we(e){return gs()?e instanceof HTMLElement||e instanceof ne(e).HTMLElement:!1}function Di(e){return!gs()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof ne(e).ShadowRoot}function Bt(e){const{overflow:t,overflowX:s,overflowY:i,display:o}=ge(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+s)&&!["inline","contents"].includes(o)}function la(e){return["table","td","th"].includes(wt(e))}function bs(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function ri(e){const t=ai(),s=fe(e)?ge(e):e;return s.transform!=="none"||s.perspective!=="none"||(s.containerType?s.containerType!=="normal":!1)||!t&&(s.backdropFilter?s.backdropFilter!=="none":!1)||!t&&(s.filter?s.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(s.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(s.contain||"").includes(i))}function ca(e){let t=Ne(e);for(;we(t)&&!ht(t);){if(ri(t))return t;if(bs(t))return null;t=Ne(t)}return null}function ai(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ht(e){return["html","body","#document"].includes(wt(e))}function ge(e){return ne(e).getComputedStyle(e)}function vs(e){return fe(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Ne(e){if(wt(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Di(e)&&e.host||Te(e);return Di(t)?t.host:t}function po(e){const t=Ne(e);return ht(t)?e.ownerDocument?e.ownerDocument.body:e.body:we(t)&&Bt(t)?t:po(t)}function Ot(e,t,s){var i;t===void 0&&(t=[]),s===void 0&&(s=!0);const o=po(e),r=o===((i=e.ownerDocument)==null?void 0:i.body),a=ne(o);if(r){const c=Ls(a);return t.concat(a,a.visualViewport||[],Bt(o)?o:[],c&&s?Ot(c):[])}return t.concat(o,Ot(o,[],s))}function Ls(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function mo(e){const t=ge(e);let s=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const o=we(e),r=o?e.offsetWidth:s,a=o?e.offsetHeight:i,c=is(s)!==r||is(i)!==a;return c&&(s=r,i=a),{width:s,height:i,$:c}}function ni(e){return fe(e)?e:e.contextElement}function ct(e){const t=ni(e);if(!we(t))return ye(1);const s=t.getBoundingClientRect(),{width:i,height:o,$:r}=mo(t);let a=(r?is(s.width):s.width)/i,c=(r?is(s.height):s.height)/o;return(!a||!Number.isFinite(a))&&(a=1),(!c||!Number.isFinite(c))&&(c=1),{x:a,y:c}}const da=ye(0);function fo(e){const t=ne(e);return!ai()||!t.visualViewport?da:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function ua(e,t,s){return t===void 0&&(t=!1),!s||t&&s!==ne(e)?!1:t}function et(e,t,s,i){t===void 0&&(t=!1),s===void 0&&(s=!1);const o=e.getBoundingClientRect(),r=ni(e);let a=ye(1);t&&(i?fe(i)&&(a=ct(i)):a=ct(e));const c=ua(r,s,i)?fo(r):ye(0);let u=(o.left+c.x)/a.x,h=(o.top+c.y)/a.y,m=o.width/a.x,p=o.height/a.y;if(r){const g=ne(r),v=i&&fe(i)?ne(i):i;let y=g,w=Ls(y);for(;w&&i&&v!==y;){const x=ct(w),$=w.getBoundingClientRect(),S=ge(w),E=$.left+(w.clientLeft+parseFloat(S.paddingLeft))*x.x,B=$.top+(w.clientTop+parseFloat(S.paddingTop))*x.y;u*=x.x,h*=x.y,m*=x.x,p*=x.y,u+=E,h+=B,y=ne(w),w=Ls(y)}}return rs({width:m,height:p,x:u,y:h})}function li(e,t){const s=vs(e).scrollLeft;return t?t.left+s:et(Te(e)).left+s}function go(e,t,s){s===void 0&&(s=!1);const i=e.getBoundingClientRect(),o=i.left+t.scrollLeft-(s?0:li(e,i)),r=i.top+t.scrollTop;return{x:o,y:r}}function ha(e){let{elements:t,rect:s,offsetParent:i,strategy:o}=e;const r=o==="fixed",a=Te(i),c=t?bs(t.floating):!1;if(i===a||c&&r)return s;let u={scrollLeft:0,scrollTop:0},h=ye(1);const m=ye(0),p=we(i);if((p||!p&&!r)&&((wt(i)!=="body"||Bt(a))&&(u=vs(i)),we(i))){const v=et(i);h=ct(i),m.x=v.x+i.clientLeft,m.y=v.y+i.clientTop}const g=a&&!p&&!r?go(a,u,!0):ye(0);return{width:s.width*h.x,height:s.height*h.y,x:s.x*h.x-u.scrollLeft*h.x+m.x+g.x,y:s.y*h.y-u.scrollTop*h.y+m.y+g.y}}function pa(e){return Array.from(e.getClientRects())}function ma(e){const t=Te(e),s=vs(e),i=e.ownerDocument.body,o=re(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),r=re(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight);let a=-s.scrollLeft+li(e);const c=-s.scrollTop;return ge(i).direction==="rtl"&&(a+=re(t.clientWidth,i.clientWidth)-o),{width:o,height:r,x:a,y:c}}function fa(e,t){const s=ne(e),i=Te(e),o=s.visualViewport;let r=i.clientWidth,a=i.clientHeight,c=0,u=0;if(o){r=o.width,a=o.height;const h=ai();(!h||h&&t==="fixed")&&(c=o.offsetLeft,u=o.offsetTop)}return{width:r,height:a,x:c,y:u}}function ga(e,t){const s=et(e,!0,t==="fixed"),i=s.top+e.clientTop,o=s.left+e.clientLeft,r=we(e)?ct(e):ye(1),a=e.clientWidth*r.x,c=e.clientHeight*r.y,u=o*r.x,h=i*r.y;return{width:a,height:c,x:u,y:h}}function Mi(e,t,s){let i;if(t==="viewport")i=fa(e,s);else if(t==="document")i=ma(Te(e));else if(fe(t))i=ga(t,s);else{const o=fo(e);i={x:t.x-o.x,y:t.y-o.y,width:t.width,height:t.height}}return rs(i)}function bo(e,t){const s=Ne(e);return s===t||!fe(s)||ht(s)?!1:ge(s).position==="fixed"||bo(s,t)}function ba(e,t){const s=t.get(e);if(s)return s;let i=Ot(e,[],!1).filter(c=>fe(c)&&wt(c)!=="body"),o=null;const r=ge(e).position==="fixed";let a=r?Ne(e):e;for(;fe(a)&&!ht(a);){const c=ge(a),u=ri(a);!u&&c.position==="fixed"&&(o=null),(r?!u&&!o:!u&&c.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||Bt(a)&&!u&&bo(e,a))?i=i.filter(m=>m!==a):o=c,a=Ne(a)}return t.set(e,i),i}function va(e){let{element:t,boundary:s,rootBoundary:i,strategy:o}=e;const a=[...s==="clippingAncestors"?bs(t)?[]:ba(t,this._c):[].concat(s),i],c=a[0],u=a.reduce((h,m)=>{const p=Mi(t,m,o);return h.top=re(p.top,h.top),h.right=Re(p.right,h.right),h.bottom=Re(p.bottom,h.bottom),h.left=re(p.left,h.left),h},Mi(t,c,o));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function ya(e){const{width:t,height:s}=mo(e);return{width:t,height:s}}function wa(e,t,s){const i=we(t),o=Te(t),r=s==="fixed",a=et(e,!0,r,t);let c={scrollLeft:0,scrollTop:0};const u=ye(0);if(i||!i&&!r)if((wt(t)!=="body"||Bt(o))&&(c=vs(t)),i){const g=et(t,!0,r,t);u.x=g.x+t.clientLeft,u.y=g.y+t.clientTop}else o&&(u.x=li(o));const h=o&&!i&&!r?go(o,c):ye(0),m=a.left+c.scrollLeft-u.x-h.x,p=a.top+c.scrollTop-u.y-h.y;return{x:m,y:p,width:a.width,height:a.height}}function ks(e){return ge(e).position==="static"}function Li(e,t){if(!we(e)||ge(e).position==="fixed")return null;if(t)return t(e);let s=e.offsetParent;return Te(e)===s&&(s=s.ownerDocument.body),s}function vo(e,t){const s=ne(e);if(bs(e))return s;if(!we(e)){let o=Ne(e);for(;o&&!ht(o);){if(fe(o)&&!ks(o))return o;o=Ne(o)}return s}let i=Li(e,t);for(;i&&la(i)&&ks(i);)i=Li(i,t);return i&&ht(i)&&ks(i)&&!ri(i)?s:i||ca(e)||s}const xa=async function(e){const t=this.getOffsetParent||vo,s=this.getDimensions,i=await s(e.floating);return{reference:wa(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function _a(e){return ge(e).direction==="rtl"}const es={convertOffsetParentRelativeRectToViewportRelativeRect:ha,getDocumentElement:Te,getClippingRect:va,getOffsetParent:vo,getElementRects:xa,getClientRects:pa,getDimensions:ya,getScale:ct,isElement:fe,isRTL:_a};function ka(e,t){let s=null,i;const o=Te(e);function r(){var c;clearTimeout(i),(c=s)==null||c.disconnect(),s=null}function a(c,u){c===void 0&&(c=!1),u===void 0&&(u=1),r();const{left:h,top:m,width:p,height:g}=e.getBoundingClientRect();if(c||t(),!p||!g)return;const v=Wt(m),y=Wt(o.clientWidth-(h+p)),w=Wt(o.clientHeight-(m+g)),x=Wt(h),S={rootMargin:-v+"px "+-y+"px "+-w+"px "+-x+"px",threshold:re(0,Re(1,u))||1};let E=!0;function B(D){const te=D[0].intersectionRatio;if(te!==u){if(!E)return a();te?a(!1,te):i=setTimeout(()=>{a(!1,1e-7)},1e3)}E=!1}try{s=new IntersectionObserver(B,{...S,root:o.ownerDocument})}catch{s=new IntersectionObserver(B,S)}s.observe(e)}return a(!0),r}function $a(e,t,s,i){i===void 0&&(i={});const{ancestorScroll:o=!0,ancestorResize:r=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:u=!1}=i,h=ni(e),m=o||r?[...h?Ot(h):[],...Ot(t)]:[];m.forEach($=>{o&&$.addEventListener("scroll",s,{passive:!0}),r&&$.addEventListener("resize",s)});const p=h&&c?ka(h,s):null;let g=-1,v=null;a&&(v=new ResizeObserver($=>{let[S]=$;S&&S.target===h&&v&&(v.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var E;(E=v)==null||E.observe(t)})),s()}),h&&!u&&v.observe(h),v.observe(t));let y,w=u?et(e):null;u&&x();function x(){const $=et(e);w&&($.x!==w.x||$.y!==w.y||$.width!==w.width||$.height!==w.height)&&s(),w=$,y=requestAnimationFrame(x)}return s(),()=>{var $;m.forEach(S=>{o&&S.removeEventListener("scroll",s),r&&S.removeEventListener("resize",s)}),p?.(),($=v)==null||$.disconnect(),v=null,u&&cancelAnimationFrame(y)}}const Ca=ra,Ta=aa,Sa=ia,Ri=na,Aa=sa,Ea=(e,t,s)=>{const i=new Map,o={platform:es,...s},r={...o.platform,_c:i};return ta(e,t,{...o,platform:r})};function Pa(e){return Ia(e)}function $s(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Ia(e){for(let t=e;t;t=$s(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=$s(e);t;t=$s(t)){if(!(t instanceof Element))continue;const s=getComputedStyle(t);if(s.display!=="contents"&&(s.position!=="static"||s.filter!=="none"||t.tagName==="BODY"))return t}return null}function za(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e&&("contextElement"in e?e instanceof Element:!0)}var I=class extends j{constructor(){super(...arguments),this.localize=new Ce(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),s=this.placement.includes("top")||this.placement.includes("bottom");let i=0,o=0,r=0,a=0,c=0,u=0,h=0,m=0;s?e.top<t.top?(i=e.left,o=e.bottom,r=e.right,a=e.bottom,c=t.left,u=t.top,h=t.right,m=t.top):(i=t.left,o=t.bottom,r=t.right,a=t.bottom,c=e.left,u=e.top,h=e.right,m=e.top):e.left<t.left?(i=e.right,o=e.top,r=t.left,a=t.top,c=e.right,u=e.bottom,h=t.left,m=t.bottom):(i=t.right,o=t.top,r=e.left,a=e.top,c=t.right,u=t.bottom,h=e.left,m=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${o}px`),this.style.setProperty("--hover-bridge-top-right-x",`${r}px`),this.style.setProperty("--hover-bridge-top-right-y",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${u}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${h}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${m}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||za(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&(this.cleanup=$a(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;const e=[Ca({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(Ri({apply:({rects:s})=>{const i=this.sync==="width"||this.sync==="both",o=this.sync==="height"||this.sync==="both";this.popup.style.width=i?`${s.reference.width}px`:"",this.popup.style.height=o?`${s.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(Sa({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(Ta({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(Ri({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:s,availableHeight:i})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${s}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(Aa({element:this.arrowEl,padding:this.arrowPadding}));const t=this.strategy==="absolute"?s=>es.getOffsetParent(s,Pa):es.getOffsetParent;Ea(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:Ut(Fe({},es),{getOffsetParent:t})}).then(({x:s,y:i,middlewareData:o,placement:r})=>{const a=this.localize.dir()==="rtl",c={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]];if(this.setAttribute("data-current-placement",r),Object.assign(this.popup.style,{left:`${s}px`,top:`${i}px`}),this.arrow){const u=o.arrow.x,h=o.arrow.y;let m="",p="",g="",v="";if(this.arrowPlacement==="start"){const y=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";m=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",p=a?y:"",v=a?"":y}else if(this.arrowPlacement==="end"){const y=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";p=a?"":y,v=a?y:"",g=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(v=typeof u=="number"?"calc(50% - var(--arrow-size-diagonal))":"",m=typeof h=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(v=typeof u=="number"?`${u}px`:"",m=typeof h=="number"?`${h}px`:"");Object.assign(this.arrowEl.style,{top:m,right:p,bottom:g,left:v,[c]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return d`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${W({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${W({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?d`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};I.styles=[K,Yr];n([R(".popup")],I.prototype,"popup",2);n([R(".popup__arrow")],I.prototype,"arrowEl",2);n([l()],I.prototype,"anchor",2);n([l({type:Boolean,reflect:!0})],I.prototype,"active",2);n([l({reflect:!0})],I.prototype,"placement",2);n([l({reflect:!0})],I.prototype,"strategy",2);n([l({type:Number})],I.prototype,"distance",2);n([l({type:Number})],I.prototype,"skidding",2);n([l({type:Boolean})],I.prototype,"arrow",2);n([l({attribute:"arrow-placement"})],I.prototype,"arrowPlacement",2);n([l({attribute:"arrow-padding",type:Number})],I.prototype,"arrowPadding",2);n([l({type:Boolean})],I.prototype,"flip",2);n([l({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],I.prototype,"flipFallbackPlacements",2);n([l({attribute:"flip-fallback-strategy"})],I.prototype,"flipFallbackStrategy",2);n([l({type:Object})],I.prototype,"flipBoundary",2);n([l({attribute:"flip-padding",type:Number})],I.prototype,"flipPadding",2);n([l({type:Boolean})],I.prototype,"shift",2);n([l({type:Object})],I.prototype,"shiftBoundary",2);n([l({attribute:"shift-padding",type:Number})],I.prototype,"shiftPadding",2);n([l({attribute:"auto-size"})],I.prototype,"autoSize",2);n([l()],I.prototype,"sync",2);n([l({type:Object})],I.prototype,"autoSizeBoundary",2);n([l({attribute:"auto-size-padding",type:Number})],I.prototype,"autoSizePadding",2);n([l({attribute:"hover-bridge",type:Boolean})],I.prototype,"hoverBridge",2);var yo=new Map,Oa=new WeakMap;function Da(e){return e??{keyframes:[],options:{duration:0}}}function Ui(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function xt(e,t){yo.set(e,Da(t))}function pt(e,t,s){const i=Oa.get(e);if(i?.[t])return Ui(i[t],s.dir);const o=yo.get(t);return o?Ui(o,s.dir):{keyframes:[],options:{duration:0}}}function mt(e,t){return new Promise(s=>{function i(o){o.target===e&&(e.removeEventListener(t,i),s())}e.addEventListener(t,i)})}function ft(e,t,s){return new Promise(i=>{if(s?.duration===1/0)throw new Error("Promise-based animations must be finite.");const o=e.animate(t,Ut(Fe({},s),{duration:Ma()?0:s.duration}));o.addEventListener("cancel",i,{once:!0}),o.addEventListener("finish",i,{once:!0})})}function Ma(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function gt(e){return Promise.all(e.getAnimations().map(t=>new Promise(s=>{t.cancel(),requestAnimationFrame(s)})))}function Ni(e,t){return e.map(s=>Ut(Fe({},s),{height:s.height==="auto"?`${t}px`:s.height}))}var G=class extends j{constructor(){super(...arguments),this.localize=new Ce(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{var t;if(e.key==="Escape"&&this.open&&!this.closeWatcher){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="sl-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var s,i,o;const r=((s=this.containingElement)==null?void 0:s.getRootNode())instanceof ShadowRoot?(o=(i=document.activeElement)==null?void 0:i.shadowRoot)==null?void 0:o.activeElement:document.activeElement;(!this.containingElement||r?.closest(this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{const t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];typeof e?.focus=="function"&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const s=t.getAllItems(),i=s[0],o=s[s.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),s.length>0&&this.updateComplete.then(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(t.setCurrentItem(i),i.focus()),(e.key==="ArrowUp"||e.key==="End")&&(t.setCurrentItem(o),o.focus())}))}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(i=>Vr(i).start);let s;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":s=t.button;break;default:s=t}s.setAttribute("aria-haspopup","true"),s.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,mt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,mt(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var e;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var e;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await gt(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=pt(this,"dropdown.show",{dir:this.localize.dir()});await ft(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await gt(this);const{keyframes:e,options:t}=pt(this,"dropdown.hide",{dir:this.localize.dir()});await ft(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return d`
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
        sync=${_(this.sync?this.sync:void 0)}
        class=${W({dropdown:!0,"dropdown--open":this.open})}
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
    `}};G.styles=[K,Fr];G.dependencies={"sl-popup":I};n([R(".dropdown")],G.prototype,"popup",2);n([R(".dropdown__trigger")],G.prototype,"trigger",2);n([R(".dropdown__panel")],G.prototype,"panel",2);n([l({type:Boolean,reflect:!0})],G.prototype,"open",2);n([l({reflect:!0})],G.prototype,"placement",2);n([l({type:Boolean,reflect:!0})],G.prototype,"disabled",2);n([l({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],G.prototype,"stayOpenOnSelect",2);n([l({attribute:!1})],G.prototype,"containingElement",2);n([l({type:Number})],G.prototype,"distance",2);n([l({type:Number})],G.prototype,"skidding",2);n([l({type:Boolean})],G.prototype,"hoist",2);n([l({reflect:!0})],G.prototype,"sync",2);n([F("open",{waitUntilFirstUpdate:!0})],G.prototype,"handleOpenChange",1);xt("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});xt("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});G.define("sl-dropdown");var La=k`
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
`,ci=class extends j{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(e){const t=["menuitem","menuitemcheckbox"],s=e.composedPath(),i=s.find(c=>{var u;return t.includes(((u=c?.getAttribute)==null?void 0:u.call(c,"role"))||"")});if(!i||s.find(c=>{var u;return((u=c?.getAttribute)==null?void 0:u.call(c,"role"))==="menu"})!==this)return;const a=i;a.type==="checkbox"&&(a.checked=!a.checked),this.emit("sl-select",{detail:{item:a}})}handleKeyDown(e){if(e.key==="Enter"||e.key===" "){const t=this.getCurrentItem();e.preventDefault(),e.stopPropagation(),t?.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const t=this.getAllItems(),s=this.getCurrentItem();let i=s?t.indexOf(s):0;t.length>0&&(e.preventDefault(),e.stopPropagation(),e.key==="ArrowDown"?i++:e.key==="ArrowUp"?i--:e.key==="Home"?i=0:e.key==="End"&&(i=t.length-1),i<0&&(i=t.length-1),i>t.length-1&&(i=0),this.setCurrentItem(t[i]),t[i].focus())}}handleMouseDown(e){const t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){const e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){var t;return e.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((t=e.getAttribute("role"))!=null?t:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>!(e.inert||!this.isMenuItem(e)))}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute("tabindex")==="0")}setCurrentItem(e){this.getAllItems().forEach(s=>{s.setAttribute("tabindex",s===e?"0":"-1")})}render(){return d`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};ci.styles=[K,La];n([R("slot")],ci.prototype,"defaultSlot",2);ci.define("sl-menu");var Ra=k`
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
`;const Et=(e,t)=>{const s=e._$AN;if(s===void 0)return!1;for(const i of s)i._$AO?.(t,!1),Et(i,t);return!0},as=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while(s?.size===0)},wo=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),Fa(t)}};function Ua(e){this._$AN!==void 0?(as(this),this._$AM=e,wo(this)):this._$AM=e}function Na(e,t=!1,s=0){const i=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(t)if(Array.isArray(i))for(let r=s;r<i.length;r++)Et(i[r],!1),as(i[r]);else i!=null&&(Et(i,!1),as(i));else Et(this,e)}const Fa=e=>{e.type==Pe.CHILD&&(e._$AP??=Na,e._$AQ??=Ua)};class Ba extends ps{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,i){super._$AT(t,s,i),wo(this),this.isConnected=t._$AU}_$AO(t,s=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),s&&(Et(this,t),as(this))}setValue(t){if(ao(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const ja=()=>new qa;class qa{}const Cs=new WeakMap,Va=hs(class extends Ba{render(e){return L}update(e,[t]){const s=t!==this.Y;return s&&this.Y!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.Y=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),L}rt(e){if(this.isConnected||(e=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let s=Cs.get(t);s===void 0&&(s=new WeakMap,Cs.set(t,s)),s.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),s.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){return typeof this.Y=="function"?Cs.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Ha=class{constructor(e,t){this.popupRef=ja(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=s=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${s.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${s.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=s=>{switch(s.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":s.target!==this.host&&(s.preventDefault(),s.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(s);break}},this.handleClick=s=>{var i;s.target===this.host?(s.preventDefault(),s.stopPropagation()):s.target instanceof Element&&(s.target.tagName==="sl-menu-item"||(i=s.target.role)!=null&&i.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=s=>{s.relatedTarget&&s.relatedTarget instanceof Element&&this.host.contains(s.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=s=>{s.stopPropagation()},this.handlePopupReposition=()=>{const s=this.host.renderRoot.querySelector("slot[name='submenu']"),i=s?.assignedElements({flatten:!0}).filter(h=>h.localName==="sl-menu")[0],o=getComputedStyle(this.host).direction==="rtl";if(!i)return;const{left:r,top:a,width:c,height:u}=i.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${o?r+c:r}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${a}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${o?r+c:r}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${a+u}px`)},(this.host=e).addController(this),this.hasSlotController=t}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(e){const t=this.host.renderRoot.querySelector("slot[name='submenu']");if(!t){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let s=null;for(const i of t.assignedElements())if(s=i.querySelectorAll("sl-menu-item, [role^='menuitem']"),s.length!==0)break;if(!(!s||s.length===0)){s[0].setAttribute("tabindex","0");for(let i=1;i!==s.length;++i)s[i].setAttribute("tabindex","-1");this.popupRef.value&&(e.preventDefault(),e.stopPropagation(),this.popupRef.value.active?s[0]instanceof HTMLElement&&s[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{s[0]instanceof HTMLElement&&s[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(e){this.popupRef.value&&this.popupRef.value.active!==e&&(this.popupRef.value.active=e,this.host.requestUpdate())}enableSubmenu(e=!0){e?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var e;if(!((e=this.host.parentElement)!=null&&e.computedStyleMap))return;const t=this.host.parentElement.computedStyleMap(),i=["padding-top","border-top-width","margin-top"].reduce((o,r)=>{var a;const c=(a=t.get(r))!=null?a:new CSSUnitValue(0,"px"),h=(c instanceof CSSUnitValue?c:new CSSUnitValue(0,"px")).to("px");return o-h.value},0);this.skidding=i}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const e=getComputedStyle(this.host).direction==="rtl";return this.isConnected?d`
      <sl-popup
        ${Va(this.popupRef)}
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
    `:d` <slot name="submenu" hidden></slot> `}},le=class extends j{constructor(){super(...arguments),this.localize=new Ce(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new st(this,"submenu"),this.submenuController=new Ha(this,this.hasSlotController),this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleMouseOver=e=>{this.focus(),e.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return gr(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const e=this.localize.dir()==="rtl",t=this.submenuController.isExpanded();return d`
      <div
        id="anchor"
        part="base"
        class=${W({"menu-item":!0,"menu-item--rtl":e,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":t})}
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
        ${this.loading?d` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};le.styles=[K,Ra];le.dependencies={"sl-icon":J,"sl-popup":I,"sl-spinner":Zs};n([R("slot:not([name])")],le.prototype,"defaultSlot",2);n([R(".menu-item")],le.prototype,"menuItem",2);n([l()],le.prototype,"type",2);n([l({type:Boolean,reflect:!0})],le.prototype,"checked",2);n([l()],le.prototype,"value",2);n([l({type:Boolean,reflect:!0})],le.prototype,"loading",2);n([l({type:Boolean,reflect:!0})],le.prototype,"disabled",2);n([F("checked")],le.prototype,"handleCheckedChange",1);n([F("disabled")],le.prototype,"handleDisabledChange",1);n([F("type")],le.prototype,"handleTypeChange",1);le.define("sl-menu-item");var Wa=k`
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
`,oe=class extends j{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?ss`a`:ss`button`;return Zt`
      <${t}
        part="base"
        class=${W({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${_(e?void 0:this.disabled)}
        type=${_(e?void 0:"button")}
        href=${_(e?this.href:void 0)}
        target=${_(e?this.target:void 0)}
        download=${_(e?this.download:void 0)}
        rel=${_(e&&this.target?"noreferrer noopener":void 0)}
        role=${_(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${_(this.name)}
          library=${_(this.library)}
          src=${_(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};oe.styles=[K,Wa];oe.dependencies={"sl-icon":J};n([R(".icon-button")],oe.prototype,"button",2);n([b()],oe.prototype,"hasFocus",2);n([l()],oe.prototype,"name",2);n([l()],oe.prototype,"library",2);n([l()],oe.prototype,"src",2);n([l()],oe.prototype,"href",2);n([l()],oe.prototype,"target",2);n([l()],oe.prototype,"download",2);n([l()],oe.prototype,"label",2);n([l({type:Boolean,reflect:!0})],oe.prototype,"disabled",2);oe.define("sl-icon-button");var Ya=Object.defineProperty,Ka=Object.getOwnPropertyDescriptor,di=(e,t,s,i)=>{for(var o=i>1?void 0:i?Ka(t,s):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(o=(i?a(t,s,o):a(o))||o);return i&&o&&Ya(t,s,o),o};let Dt=class extends z{constructor(){super(...arguments),this.title="CaydenJoy",this.enableBack=!1}render(){return d`
      <header>
        <div id="back-button-block">
          ${this.enableBack?d`<sl-button size="small" href="${f()}">
            Back
          </sl-button>`:null}
          <h1>${this.title}</h1>
        </div>

        <nav>
          <a href="${f()}">Communication</a>
          <a href="${f("foods")}">Foods</a>
          <a href="${f("colors")}">Colors</a>
          <a href="${f("numbers")}">Numbers</a>
          <a href="${f("places")}">Places</a>
          <a href="${f("family-puzzle")}">Puzzle</a>
          <a href="${f("home-enhanced")}">Quick</a>
          <a href="${f("custom-images")}">📸</a>
          ${d`<a href="${f("upgrade")}">🔓</a>`}
          <a href="${f("premium")}">👑</a>
          ${""}
          <a href="${f("settings")}">🛠️</a>
        </nav>
      </header>
    `}};Dt.styles=k`
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
      background: linear-gradient(135deg, #6C5CE7 0%, #5F3DC4 100%);
      color: white;
      box-sizing: border-box;
      min-height: 72px;
      padding: 12px 20px;

      position: fixed;
      left: env(titlebar-area-x, 0);
      top: env(titlebar-area-y, 0);
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
      justify-content: flex-end;
      min-width: 0;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      white-space: nowrap;
    }

    nav a {
      color: white;
      text-decoration: none;
      padding: 6px 12px;
      border-radius: 4px;
      font-size: 14px;
      flex: 0 0 auto;
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

    }

    @media (max-width: 900px) {
      header {
        min-height: 76px;
        padding: 10px 14px;
      }

      nav {
        justify-content: flex-end;
        gap: 8px;
      }

      nav a {
        padding: 6px 10px;
        font-size: 13px;
      }
    }

    @media (max-width: 640px) {
      header {
        min-height: 68px;
        gap: 8px;
        padding: 8px 12px;
      }

      header h1 {
        font-size: 18px;
      }

      nav {
        gap: 6px;
      }

      nav a {
        padding: 5px 8px;
        font-size: 12px;
        border-radius: 999px;
      }

    }
  `;di([l({type:String})],Dt.prototype,"title",2);di([l({type:Boolean})],Dt.prototype,"enableBack",2);Dt=di([N("app-header")],Dt);var Ja=Object.defineProperty,Ga=Object.getOwnPropertyDescriptor,jt=(e,t,s,i)=>{for(var o=i>1?void 0:i?Ga(t,s):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(o=(i?a(t,s,o):a(o))||o);return i&&o&&Ja(t,s,o),o};let tt=class extends z{constructor(){super(...arguments),this.name="",this.email="",this.message="",this.submitted=!1,this.supportEmail="dallas8000@gmail.com"}handleSubmit(e){if(e.preventDefault(),!this.name||!this.email||!this.message){alert("Please fill in all fields");return}localStorage.setItem("lastContact",JSON.stringify({name:this.name,email:this.email,message:this.message,timestamp:new Date().toISOString()}));const t=encodeURIComponent(`CaydenJoy support request from ${this.name}`),s=encodeURIComponent(`Name: ${this.name}
Email: ${this.email}

Message:
${this.message}`);this.submitted=!0,window.location.href=`mailto:${this.supportEmail}?subject=${t}&body=${s}`,this.resetForm(),setTimeout(()=>{this.submitted=!1},5e3)}resetForm(){this.name="",this.email="",this.message=""}render(){return d`
      <app-header title="Contact" enableBack></app-header>

      <main>
        <h1>Contact Support</h1>
        <p>
          Send a support email, save feedback inside the app, or get help with premium
          upgrades and one-time APK keys.
        </p>

        ${this.submitted?d`
          <div class="success-message">
            Your message was saved locally and opened as an email draft.
          </div>
        `:""}

        <sl-card>
          <div slot="header">
            <h2>Send an Email</h2>
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
                placeholder="Tell us what you need help with."
                rows="6"
                .value=${this.message}
                @sl-input=${e=>this.message=e.target.value}
                required
              ></sl-textarea>
            </div>

            <sl-button type="submit" variant="primary">Open Email Draft</sl-button>
            <sl-button type="reset" variant="default" @click=${()=>this.resetForm()}>Clear</sl-button>
          </form>
        </sl-card>

        <div class="contact-info">
          <div class="info-box">
            <h3>Email Support</h3>
            <p>Direct support for account, purchase, app setup, or family-use questions.</p>
            <sl-button
              href="mailto:${this.supportEmail}?subject=CaydenJoy%20support"
              variant="primary"
            >
              Email Support
            </sl-button>
          </div>

          <div class="info-box">
            <h3>Feedback & Wishlist</h3>
            <p>Save improvement ideas, feature requests, success stories, or issues.</p>
            <sl-button href="${f("feedback")}" variant="primary">
              Open Feedback
            </sl-button>
          </div>

          <div class="info-box">
            <h3>Upgrade Help</h3>
            <p>View premium tiers or redeem a one-time APK upgrade key.</p>
            <sl-button href="${f("premium")}" variant="primary">
              View Premium
            </sl-button>
          </div>
        </div>

        <div style="text-align: center; margin-top: 48px;">
          <sl-button href="${f("home")}" variant="primary">Back to Home</sl-button>
        </div>
      </main>
    `}};tt.styles=[Be,k`
      main {
        padding: 20px;
        max-width: 760px;
        margin: 0 auto;
        color: #172033;
      }

      h1,
      h2 {
        color: #172033;
      }

      main > p {
        color: #334155;
        line-height: 1.6;
      }

      sl-card {
        margin-bottom: 24px;
      }

      sl-card::part(base) {
        background: #ffffff;
        border: 1px solid #d9e2ef;
        border-radius: 10px;
        color: #172033;
        box-shadow: 0 8px 20px rgba(31, 41, 55, 0.08);
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
        font-weight: 700;
        color: #243b6b;
      }

      .success-message {
        background-color: #047857;
        color: white;
        padding: 16px;
        border-radius: 6px;
        margin-bottom: 16px;
      }

      .contact-info {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 16px;
        margin-top: 24px;
      }

      .info-box {
        background: #ffffff;
        border: 1px solid #d9e2ef;
        color: #172033;
        padding: 16px;
        border-radius: 10px;
        box-shadow: 0 8px 20px rgba(31, 41, 55, 0.08);
      }

      .info-box h3 {
        margin: 0 0 8px 0;
        color: #243b6b;
      }

      .info-box p {
        margin: 0 0 14px 0;
        color: #526070;
        line-height: 1.5;
      }

      .info-box sl-button,
      form sl-button {
        width: 100%;
      }
    `];jt([l()],tt.prototype,"name",2);jt([l()],tt.prototype,"email",2);jt([l()],tt.prototype,"message",2);jt([l()],tt.prototype,"submitted",2);tt=jt([N("app-contact")],tt);var Qa=k`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,it=class extends j{constructor(){super(...arguments),this.localize=new Ce(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return d`
      <span
        part="base"
        class=${W({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?d`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};it.styles=[K,Qa];it.dependencies={"sl-icon-button":oe};n([l({reflect:!0})],it.prototype,"variant",2);n([l({reflect:!0})],it.prototype,"size",2);n([l({type:Boolean,reflect:!0})],it.prototype,"pill",2);n([l({type:Boolean})],it.prototype,"removable",2);var Xa=k`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix and Suffix */
  .select__prefix,
  .select__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-small);
  }

  /* Clear button */
  .select__clear {
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

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    display: block;
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-2x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`;function Za(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}function en(e,t,s="vertical",i="smooth"){const o=Za(e,t),r=o.top+t.scrollTop,a=o.left+t.scrollLeft,c=t.scrollLeft,u=t.scrollLeft+t.offsetWidth,h=t.scrollTop,m=t.scrollTop+t.offsetHeight;(s==="horizontal"||s==="both")&&(a<c?t.scrollTo({left:a,behavior:i}):a+e.clientWidth>u&&t.scrollTo({left:a-t.offsetWidth+e.clientWidth,behavior:i})),(s==="vertical"||s==="both")&&(r<h?t.scrollTo({top:r,behavior:i}):r+e.clientHeight>m&&t.scrollTo({top:r-t.offsetHeight+e.clientHeight,behavior:i}))}class Rs extends ps{constructor(t){if(super(t),this.it=L,t.type!==Pe.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===L||t==null)return this._t=void 0,this.it=t;if(t===ce)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const s=[t];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}}Rs.directiveName="unsafeHTML",Rs.resultType=1;const tn=hs(Rs);var T=class extends j{constructor(){super(...arguments),this.formControlController=new Ft(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new st(this,"help-text","label"),this.localize=new Ce(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this.value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=e=>d`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${t=>this.handleTagRemove(t,e)}
      >
        ${e.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{const t=e.target,s=t.closest(".select__clear")!==null,i=t.closest("sl-icon-button")!==null;if(!(s||i)){if(e.key==="Escape"&&this.open&&!this.closeWatcher&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key==="Enter"||e.key===" "&&this.typeToSelectString===""){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){const o=this.getAllOptions(),r=o.indexOf(this.currentOption);let a=Math.max(0,r);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;e.key==="ArrowDown"?(a=r+1,a>o.length-1&&(a=0)):e.key==="ArrowUp"?(a=r-1,a<0&&(a=o.length-1)):e.key==="Home"?a=0:e.key==="End"&&(a=o.length-1),this.setCurrentOption(o[a])}if(e.key&&e.key.length===1||e.key==="Backspace"){const o=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key==="Backspace")return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),e.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(const r of o)if(r.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(r);break}}}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()}}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){var e;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var e;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),(e=this.closeWatcher)==null||e.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(e){const s=e.composedPath().some(i=>i instanceof Element&&i.tagName.toLowerCase()==="sl-icon-button");this.disabled||s||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.key!=="Tab"&&(e.stopPropagation(),this.handleDocumentKeyDown(e))}handleClearClick(e){e.stopPropagation(),this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){const s=e.target.closest("sl-option"),i=this.value;s&&!s.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(s):this.setSelectedOptions(s),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==i&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("wa-option")||customElements.whenDefined("wa-option").then(()=>this.handleDefaultSlotChange());const e=this.getAllOptions(),t=this.valueHasChanged?this.value:this.defaultValue,s=Array.isArray(t)?t:[t],i=[];e.forEach(o=>i.push(o.value)),this.setSelectedOptions(e.filter(o=>s.includes(o.value)))}handleTagRemove(e,t){e.stopPropagation(),this.disabled||(this.toggleOptionSelection(t,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(e){this.getAllOptions().forEach(s=>{s.current=!1,s.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus())}setSelectedOptions(e){const t=this.getAllOptions(),s=Array.isArray(e)?e:[e];t.forEach(i=>i.selected=!1),s.length&&s.forEach(i=>i.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){t===!0||t===!1?e.selected=t:e.selected=!e.selected,this.selectionChanged()}selectionChanged(){var e,t,s;const i=this.getAllOptions();if(this.selectedOptions=i.filter(o=>o.selected),this.multiple)this.value=this.selectedOptions.map(o=>o.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const o=this.selectedOptions[0];this.value=(e=o?.value)!=null?e:"",this.displayLabel=(s=(t=o?.getTextLabel)==null?void 0:t.call(o))!=null?s:""}this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){const s=this.getTag(e,t);return d`<div @sl-remove=${i=>this.handleTagRemove(i,e)}>
          ${typeof s=="string"?tn(s):s}
        </div>`}else if(t===this.maxOptionsVisible)return d`<sl-tag size=${this.size}>+${this.selectedOptions.length-t}</sl-tag>`;return d``})}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}handleValueChange(){const e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(e.filter(s=>t.includes(s.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await gt(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:e,options:t}=pt(this,"select.show",{dir:this.localize.dir()});await ft(this.popup.popup,e,t),this.currentOption&&en(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await gt(this);const{keyframes:e,options:t}=pt(this,"select.hide",{dir:this.localize.dir()});await ft(this.popup.popup,e,t),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,mt(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,mt(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(e){this.valueInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),s=this.label?!0:!!e,i=this.helpText?!0:!!t,o=this.clearable&&!this.disabled&&this.value.length>0,r=this.placeholder&&this.value&&this.value.length<=0;return d`
      <div
        part="form-control"
        class=${W({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":i})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${s?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${W({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":r,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?d`<div part="tags" class="select__tags">${this.tags}</div>`:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${o?d`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};T.styles=[K,fs,Xa];T.dependencies={"sl-icon":J,"sl-popup":I,"sl-tag":it};n([R(".select")],T.prototype,"popup",2);n([R(".select__combobox")],T.prototype,"combobox",2);n([R(".select__display-input")],T.prototype,"displayInput",2);n([R(".select__value-input")],T.prototype,"valueInput",2);n([R(".select__listbox")],T.prototype,"listbox",2);n([b()],T.prototype,"hasFocus",2);n([b()],T.prototype,"displayLabel",2);n([b()],T.prototype,"currentOption",2);n([b()],T.prototype,"selectedOptions",2);n([b()],T.prototype,"valueHasChanged",2);n([l()],T.prototype,"name",2);n([l({converter:{fromAttribute:e=>e.split(" "),toAttribute:e=>e.join(" ")}})],T.prototype,"value",2);n([ms()],T.prototype,"defaultValue",2);n([l({reflect:!0})],T.prototype,"size",2);n([l()],T.prototype,"placeholder",2);n([l({type:Boolean,reflect:!0})],T.prototype,"multiple",2);n([l({attribute:"max-options-visible",type:Number})],T.prototype,"maxOptionsVisible",2);n([l({type:Boolean,reflect:!0})],T.prototype,"disabled",2);n([l({type:Boolean})],T.prototype,"clearable",2);n([l({type:Boolean,reflect:!0})],T.prototype,"open",2);n([l({type:Boolean})],T.prototype,"hoist",2);n([l({type:Boolean,reflect:!0})],T.prototype,"filled",2);n([l({type:Boolean,reflect:!0})],T.prototype,"pill",2);n([l()],T.prototype,"label",2);n([l({reflect:!0})],T.prototype,"placement",2);n([l({attribute:"help-text"})],T.prototype,"helpText",2);n([l({reflect:!0})],T.prototype,"form",2);n([l({type:Boolean,reflect:!0})],T.prototype,"required",2);n([l()],T.prototype,"getTag",2);n([F("disabled",{waitUntilFirstUpdate:!0})],T.prototype,"handleDisabledChange",1);n([F("value",{waitUntilFirstUpdate:!0})],T.prototype,"handleValueChange",1);n([F("open",{waitUntilFirstUpdate:!0})],T.prototype,"handleOpenChange",1);xt("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});xt("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});T.define("sl-select");var sn=k`
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,pe=class extends j{constructor(){super(...arguments),this.localize=new Ce(this),this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const e=this.childNodes;let t="";return[...e].forEach(s=>{s.nodeType===Node.ELEMENT_NODE&&(s.hasAttribute("slot")||(t+=s.textContent)),s.nodeType===Node.TEXT_NODE&&(t+=s.textContent)}),t.trim()}render(){return d`
      <div
        part="base"
        class=${W({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};pe.styles=[K,sn];pe.dependencies={"sl-icon":J};n([R(".option__label")],pe.prototype,"defaultSlot",2);n([b()],pe.prototype,"current",2);n([b()],pe.prototype,"selected",2);n([b()],pe.prototype,"hasHover",2);n([l({reflect:!0})],pe.prototype,"value",2);n([l({type:Boolean,reflect:!0})],pe.prototype,"disabled",2);n([F("disabled")],pe.prototype,"handleDisabledChange",1);n([F("selected")],pe.prototype,"handleSelectedChange",1);n([F("value")],pe.prototype,"handleValueChange",1);pe.define("sl-option");var on=k`
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
`,Q=class extends j{constructor(){super(...arguments),this.formControlController=new Ft(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new st(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(e){e.key==="ArrowLeft"&&(e.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),e.key==="ArrowRight"&&(e.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("help-text"),t=this.helpText?!0:!!e;return d`
      <div
        class=${W({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${W({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${_(this.value)}
            .checked=${ti(this.checked)}
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
    `}};Q.styles=[K,fs,on];n([R('input[type="checkbox"]')],Q.prototype,"input",2);n([b()],Q.prototype,"hasFocus",2);n([l()],Q.prototype,"title",2);n([l()],Q.prototype,"name",2);n([l()],Q.prototype,"value",2);n([l({reflect:!0})],Q.prototype,"size",2);n([l({type:Boolean,reflect:!0})],Q.prototype,"disabled",2);n([l({type:Boolean,reflect:!0})],Q.prototype,"checked",2);n([ms("checked")],Q.prototype,"defaultChecked",2);n([l({reflect:!0})],Q.prototype,"form",2);n([l({type:Boolean,reflect:!0})],Q.prototype,"required",2);n([l({attribute:"help-text"})],Q.prototype,"helpText",2);n([F("checked",{waitUntilFirstUpdate:!0})],Q.prototype,"handleCheckedChange",1);n([F("disabled",{waitUntilFirstUpdate:!0})],Q.prototype,"handleDisabledChange",1);Q.define("sl-switch");const Yt={colorTheme:"normal",fontSize:"medium",enableAnimations:!0,enableSounds:!0,enableTextToSpeech:!0,enableReducedMotion:!1,highlightInteractive:!1,voiceName:"",speechRate:0},Ts="caydenjoy_accessibility_settings";class Z{constructor(){this.settings={...Yt},this.listeners=new Set,this.audioUnlockAttached=!1,this.voicesReady=!1,this.loadSettings(),this.attachAudioUnlockHandlers()}static getInstance(){return Z.instance||(Z.instance=new Z),Z.instance}loadSettings(){try{const t=localStorage.getItem(Ts);if(t){const s=JSON.parse(t);this.settings={...Yt,...s}}this.applySettings()}catch(t){console.error("Failed to load accessibility settings:",t),this.settings={...Yt}}}saveSettings(t){this.settings={...this.settings,...t};try{localStorage.setItem(Ts,JSON.stringify(this.settings)),this.applySettings(),this.notifyListeners()}catch(s){console.error("Failed to save accessibility settings:",s)}}getSettings(){return{...this.settings}}subscribe(t){return this.listeners.add(t),()=>{this.listeners.delete(t)}}notifyListeners(){this.listeners.forEach(t=>t(this.getSettings()))}applySettings(){const t=document.documentElement;t.setAttribute("data-theme",this.settings.colorTheme),t.setAttribute("data-font-size",this.settings.fontSize),this.settings.enableReducedMotion?t.style.setProperty("--disable-animations","1"):t.style.setProperty("--disable-animations","0"),this.settings.enableReducedMotion?t.classList.add("prefers-reduced-motion"):t.classList.remove("prefers-reduced-motion"),this.settings.highlightInteractive?t.classList.add("highlight-interactive"):t.classList.remove("highlight-interactive")}getAudioContext(){try{if(!this.audioContext){const t=window.AudioContext||window.webkitAudioContext;if(!t)return null;this.audioContext=new t}return this.audioContext}catch(t){return console.error("AudioContext unavailable:",t),null}}attachAudioUnlockHandlers(){if(this.audioUnlockAttached)return;this.audioUnlockAttached=!0;const t=()=>{const s=this.getAudioContext();s&&s.state==="suspended"&&s.resume().catch(()=>{})};window.addEventListener("pointerdown",t,{passive:!0}),window.addEventListener("touchstart",t,{passive:!0}),window.addEventListener("keydown",t,{passive:!0})}prepareSpeech(){if("speechSynthesis"in window&&(window.speechSynthesis.resume(),!this.voicesReady)){const t=window.speechSynthesis.getVoices();this.voicesReady=t.length>0,this.voicesReady||window.speechSynthesis.addEventListener("voiceschanged",()=>{this.voicesReady=!0},{once:!0})}}speak(t,s=1){this.settings.enableTextToSpeech&&this.speakNow(t,s)}getEnglishVoices(){return"speechSynthesis"in window?window.speechSynthesis.getVoices().filter(t=>t.lang.toLowerCase().startsWith("en")):[]}speakNow(t,s=1){if(window.CaydenJoyVoice){window.CaydenJoyVoice.speak(t,s);return}if(!(!("speechSynthesis"in window)||typeof SpeechSynthesisUtterance>"u"))try{window.speechSynthesis.cancel(),this.prepareSpeech();const i=new SpeechSynthesisUtterance(t),o=window.speechSynthesis.getVoices(),r=o.find(a=>a.name===this.settings.voiceName)??o.find(a=>a.lang.toLowerCase().startsWith("en"));r&&(i.voice=r),i.lang=r?.lang??"en-US",i.rate=this.settings.speechRate||s,i.pitch=1,i.volume=1,window.speechSynthesis.speak(i),setTimeout(()=>window.speechSynthesis.resume(),0)}catch(i){console.error("Text-to-speech failed:",i)}}playSound(t){if(!this.settings.enableSounds)return;const s=this.getAudioContext();s&&this.playTone(s,t)}async playTone(t,s){if(t.state==="suspended")try{await t.resume()}catch{return}const i=t.createOscillator(),o=t.createGain();switch(i.connect(o),o.connect(t.destination),s){case"success":i.frequency.value=800,o.gain.setValueAtTime(.3,t.currentTime),o.gain.exponentialRampToValueAtTime(.01,t.currentTime+.2),i.start(t.currentTime),i.stop(t.currentTime+.2);break;case"error":i.frequency.value=400,o.gain.setValueAtTime(.2,t.currentTime),o.gain.exponentialRampToValueAtTime(.01,t.currentTime+.3),i.start(t.currentTime),i.stop(t.currentTime+.3);break;case"click":i.frequency.value=600,o.gain.setValueAtTime(.1,t.currentTime),o.gain.exponentialRampToValueAtTime(.01,t.currentTime+.1),i.start(t.currentTime),i.stop(t.currentTime+.1);break}}resetToDefaults(){this.settings={...Yt},localStorage.removeItem(Ts),this.applySettings(),this.notifyListeners()}}const Ss="caydenjoy_license_status",Fi="caydenjoy_redeemed_upgrade_codes";class Je{constructor(){this.lastError="",this.status={isUpgraded:!1,tier:"none"},this.loadLicense()}static getInstance(){return Je.instance||(Je.instance=new Je),Je.instance}get verifyEndpoint(){const t="".replace(/\/$/,"");return t?`${t}/api/verify-code`:""}static normalizeCode(t){return t.trim().toUpperCase().replace(/\s+/g,"").replace(/_/g,"-")}loadLicense(){try{const t=localStorage.getItem(Ss);t&&(this.status={tier:"none",...JSON.parse(t)})}catch(t){console.error("Error loading license status:",t)}}saveLicense(){try{localStorage.setItem(Ss,JSON.stringify(this.status))}catch(t){console.error("Error saving license status:",t)}}getRedeemedCodes(){try{const t=localStorage.getItem(Fi);return t?JSON.parse(t):[]}catch(t){return console.error("Error loading redeemed upgrade codes:",t),[]}}markCodeRedeemed(t){const s=new Set(this.getRedeemedCodes());s.add(t),localStorage.setItem(Fi,JSON.stringify([...s]))}hasCodeBeenRedeemed(t){return this.getRedeemedCodes().includes(t)}async verifyAndApplyCode(t){if(this.lastError="",!t.trim())return this.lastError="Please enter an upgrade code",!1;const s=this.verifyEndpoint;if(!s)return this.lastError="Upgrade verification is not configured for this build.",!1;const i=Je.normalizeCode(t);if(this.hasCodeBeenRedeemed(i))return this.lastError="This upgrade key has already been redeemed on this device",!1;let o;try{o=await(await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:i})})).json()}catch(r){return console.error("Error verifying upgrade code:",r),this.lastError="Could not reach the server to verify your code. Check your connection and try again.",!1}return!o.valid||!o.tier?(this.lastError=o.reason||"Invalid upgrade code. Please check and try again.",!1):(this.status.isUpgraded=!0,this.status.tier=o.tier,this.status.upgradeDate=Date.now(),this.status.upgradeCode=o.normalizedCode||i,this.markCodeRedeemed(o.normalizedCode||i),this.saveLicense(),!0)}getLastError(){return this.lastError}isUpgraded(){return this.status.isUpgraded}getTier(){return this.status.tier??"none"}getUpgradeCode(){return this.status.upgradeCode}getUpgradeDate(){return this.status.upgradeDate}resetLicense(){this.status={isUpgraded:!1,tier:"none"},this.lastError="",localStorage.removeItem(Ss)}}var bt;(function(e){e.Unimplemented="UNIMPLEMENTED",e.Unavailable="UNAVAILABLE"})(bt||(bt={}));class As extends Error{constructor(t,s,i){super(t),this.message=t,this.code=s,this.data=i}}const rn=e=>{var t,s;return e?.androidBridge?"android":!((s=(t=e?.webkit)===null||t===void 0?void 0:t.messageHandlers)===null||s===void 0)&&s.bridge?"ios":"web"},an=e=>{const t=e.CapacitorCustomPlatform||null,s=e.Capacitor||{},i=s.Plugins=s.Plugins||{},o=()=>t!==null?t.name:rn(e),r=()=>o()!=="web",a=p=>{const g=h.get(p);return!!(g?.platforms.has(o())||c(p))},c=p=>{var g;return(g=s.PluginHeaders)===null||g===void 0?void 0:g.find(v=>v.name===p)},u=p=>e.console.error(p),h=new Map,m=(p,g={})=>{const v=h.get(p);if(v)return console.warn(`Capacitor plugin "${p}" already registered. Cannot register plugins twice.`),v.proxy;const y=o(),w=c(p);let x;const $=async()=>(!x&&y in g?x=typeof g[y]=="function"?x=await g[y]():x=g[y]:t!==null&&!x&&"web"in g&&(x=typeof g.web=="function"?x=await g.web():x=g.web),x),S=(O,M)=>{var U,Y;if(w){const H=w?.methods.find(q=>M===q.name);if(H)return H.rtype==="promise"?q=>s.nativePromise(p,M.toString(),q):(q,V)=>s.nativeCallback(p,M.toString(),q,V);if(O)return(U=O[M])===null||U===void 0?void 0:U.bind(O)}else{if(O)return(Y=O[M])===null||Y===void 0?void 0:Y.bind(O);throw new As(`"${p}" plugin is not implemented on ${y}`,bt.Unimplemented)}},E=O=>{let M;const U=(...Y)=>{const H=$().then(q=>{const V=S(q,O);if(V){const me=V(...Y);return M=me?.remove,me}else throw new As(`"${p}.${O}()" is not implemented on ${y}`,bt.Unimplemented)});return O==="addListener"&&(H.remove=async()=>M()),H};return U.toString=()=>`${O.toString()}() { [capacitor code] }`,Object.defineProperty(U,"name",{value:O,writable:!1,configurable:!1}),U},B=E("addListener"),D=E("removeListener"),te=(O,M)=>{const U=B({eventName:O},M),Y=async()=>{const q=await U;D({eventName:O,callbackId:q},M)},H=new Promise(q=>U.then(()=>q({remove:Y})));return H.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await Y()},H},X=new Proxy({},{get(O,M){switch(M){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return w?te:B;case"removeListener":return D;default:return E(M)}}});return i[p]=X,h.set(p,{name:p,proxy:X,platforms:new Set([...Object.keys(g),...w?[y]:[]])}),X};return s.convertFileSrc||(s.convertFileSrc=p=>p),s.getPlatform=o,s.handleError=u,s.isNativePlatform=r,s.isPluginAvailable=a,s.registerPlugin=m,s.Exception=As,s.DEBUG=!!s.DEBUG,s.isLoggingEnabled=!!s.isLoggingEnabled,s},nn=e=>e.Capacitor=an(e),Mt=nn(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),xo=Mt.registerPlugin;class _o{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(t,s){let i=!1;this.listeners[t]||(this.listeners[t]=[],i=!0),this.listeners[t].push(s);const r=this.windowListeners[t];r&&!r.registered&&this.addWindowListener(r),i&&this.sendRetainedArgumentsForEvent(t);const a=async()=>this.removeListener(t,s);return Promise.resolve({remove:a})}async removeAllListeners(){this.listeners={};for(const t in this.windowListeners)this.removeWindowListener(this.windowListeners[t]);this.windowListeners={}}notifyListeners(t,s,i){const o=this.listeners[t];if(!o){if(i){let r=this.retainedEventArguments[t];r||(r=[]),r.push(s),this.retainedEventArguments[t]=r}return}o.forEach(r=>r(s))}hasListeners(t){var s;return!!(!((s=this.listeners[t])===null||s===void 0)&&s.length)}registerWindowListener(t,s){this.windowListeners[s]={registered:!1,windowEventName:t,pluginEventName:s,handler:i=>{this.notifyListeners(s,i)}}}unimplemented(t="not implemented"){return new Mt.Exception(t,bt.Unimplemented)}unavailable(t="not available"){return new Mt.Exception(t,bt.Unavailable)}async removeListener(t,s){const i=this.listeners[t];if(!i)return;const o=i.indexOf(s);this.listeners[t].splice(o,1),this.listeners[t].length||this.removeWindowListener(this.windowListeners[t])}addWindowListener(t){window.addEventListener(t.windowEventName,t.handler),t.registered=!0}removeWindowListener(t){t&&(window.removeEventListener(t.windowEventName,t.handler),t.registered=!1)}sendRetainedArgumentsForEvent(t){const s=this.retainedEventArguments[t];s&&(delete this.retainedEventArguments[t],s.forEach(i=>{this.notifyListeners(t,i)}))}}const Bi=e=>encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),ji=e=>e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class ln extends _o{async getCookies(){const t=document.cookie,s={};return t.split(";").forEach(i=>{if(i.length<=0)return;let[o,r]=i.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");o=ji(o).trim(),r=ji(r).trim(),s[o]=r}),s}async setCookie(t){try{const s=Bi(t.key),i=Bi(t.value),o=t.expires?`; expires=${t.expires.replace("expires=","")}`:"",r=(t.path||"/").replace("path=",""),a=t.url!=null&&t.url.length>0?`domain=${t.url}`:"";document.cookie=`${s}=${i||""}${o}; path=${r}; ${a};`}catch(s){return Promise.reject(s)}}async deleteCookie(t){try{document.cookie=`${t.key}=; Max-Age=0`}catch(s){return Promise.reject(s)}}async clearCookies(){try{const t=document.cookie.split(";")||[];for(const s of t)document.cookie=s.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(t){return Promise.reject(t)}}async clearAllCookies(){try{await this.clearCookies()}catch(t){return Promise.reject(t)}}}xo("CapacitorCookies",{web:()=>new ln});const cn=async e=>new Promise((t,s)=>{const i=new FileReader;i.onload=()=>{const o=i.result;t(o.indexOf(",")>=0?o.split(",")[1]:o)},i.onerror=o=>s(o),i.readAsDataURL(e)}),dn=(e={})=>{const t=Object.keys(e);return Object.keys(e).map(o=>o.toLocaleLowerCase()).reduce((o,r,a)=>(o[r]=e[t[a]],o),{})},un=(e,t=!0)=>e?Object.entries(e).reduce((i,o)=>{const[r,a]=o;let c,u;return Array.isArray(a)?(u="",a.forEach(h=>{c=t?encodeURIComponent(h):h,u+=`${r}=${c}&`}),u.slice(0,-1)):(c=t?encodeURIComponent(a):a,u=`${r}=${c}`),`${i}&${u}`},"").substr(1):null,hn=(e,t={})=>{const s=Object.assign({method:e.method||"GET",headers:e.headers},t),o=dn(e.headers)["content-type"]||"";if(typeof e.data=="string")s.body=e.data;else if(o.includes("application/x-www-form-urlencoded")){const r=new URLSearchParams;for(const[a,c]of Object.entries(e.data||{}))r.set(a,c);s.body=r.toString()}else if(o.includes("multipart/form-data")||e.data instanceof FormData){const r=new FormData;if(e.data instanceof FormData)e.data.forEach((c,u)=>{r.append(u,c)});else for(const c of Object.keys(e.data))r.append(c,e.data[c]);s.body=r;const a=new Headers(s.headers);a.delete("content-type"),s.headers=a}else(o.includes("application/json")||typeof e.data=="object")&&(s.body=JSON.stringify(e.data));return s};class pn extends _o{async request(t){const s=hn(t,t.webFetchExtra),i=un(t.params,t.shouldEncodeUrlParams),o=i?`${t.url}?${i}`:t.url,r=await fetch(o,s),a=r.headers.get("content-type")||"";let{responseType:c="text"}=r.ok?t:{};a.includes("application/json")&&(c="json");let u,h;switch(c){case"arraybuffer":case"blob":h=await r.blob(),u=await cn(h);break;case"json":u=await r.json();break;default:u=await r.text()}const m={};return r.headers.forEach((p,g)=>{m[g]=p}),{data:u,headers:m,status:r.status,url:r.url}}async get(t){return this.request(Object.assign(Object.assign({},t),{method:"GET"}))}async post(t){return this.request(Object.assign(Object.assign({},t),{method:"POST"}))}async put(t){return this.request(Object.assign(Object.assign({},t),{method:"PUT"}))}async patch(t){return this.request(Object.assign(Object.assign({},t),{method:"PATCH"}))}async delete(t){return this.request(Object.assign(Object.assign({},t),{method:"DELETE"}))}}xo("CapacitorHttp",{web:()=>new pn});const ns={family:"caydenjoy_family",learning:"caydenjoy_learning",allAccess:"caydenjoy_all_access"},qi={none:0,family:1,learning:2,allAccess:3},ko="1";function mn(e){return e.reduce((t,s)=>qi[s]>qi[t]?s:t,"none")}function $o(e){return Object.keys(ns).find(s=>ns[s]===e)??null}function fn(e){const t=e.filter(s=>s.purchaseState===ko).map(s=>$o(s.productIdentifier)).filter(s=>s!==null);return mn(t)}function ui(){return Mt.isNativePlatform()&&Mt.getPlatform()==="android"}async function hi(){const e=await lt(()=>import("./index-d86x0DgJ.js"),[]);return{NativePurchases:e.NativePurchases,PURCHASE_TYPE:e.PURCHASE_TYPE}}async function gn(){if(!ui())return[];const{NativePurchases:e,PURCHASE_TYPE:t}=await hi(),{products:s}=await e.getProducts({productIdentifiers:Object.values(ns),productType:t.INAPP});return s.map(i=>({tier:$o(i.identifier),priceString:i.priceString})).filter(i=>i.tier!==null)}async function bn(){if(!ui())return"none";const{NativePurchases:e,PURCHASE_TYPE:t}=await hi(),{purchases:s}=await e.getPurchases({productType:t.INAPP});return fn(s)}async function vn(e){if(!ui())return{status:"error",message:"Purchases are only available in the Google Play app."};const{NativePurchases:t,PURCHASE_TYPE:s}=await hi();try{return(await t.purchaseProduct({productIdentifier:ns[e],productType:s.INAPP,quantity:1})).purchaseState!==ko?{status:"pending"}:{status:"purchased",tier:await bn()}}catch(i){const o=i instanceof Error?i.message:String(i);return/cancel/i.test(o)?{status:"cancelled"}:{status:"error",message:o}}}const Kt="caydenjoy_premium_status",yn=Nr,Us="caydenjoy-premium-changed";class ee{constructor(){this.status={isPremium:!1,tier:"none",features:{customImages:!1,voiceCustomization:!1,cloudBackup:!1,additionalTabs:!1}},this.loadStatus()}static getInstance(){return ee.instance||(ee.instance=new ee),ee.instance}loadStatus(){try{this.status={isPremium:!1,tier:"none",features:{customImages:!1,voiceCustomization:!1,cloudBackup:!1,additionalTabs:!1}};const t=Ur?null:Je.getInstance();if(t&&t.isUpgraded()){console.log("[LICENSE] App upgraded via license code");const i=t.getTier();this.status=this.createStatusForTier(i==="none"?"allAccess":i);return}const s=localStorage.getItem(Kt);if(s){const i=JSON.parse(s)?.tier??"none",o=["none","family","learning","allAccess"];this.status=this.createStatusForTier(o.includes(i)?i:"none")}}catch(t){console.error("Error loading premium status:",t)}}refreshStatus(){this.loadStatus()}async syncWithPlay(){return this.getTier()}applyStoreTier(t){const s=this.status.tier;this.status=this.createStatusForTier(t),t==="none"?localStorage.removeItem(Kt):this.saveStatus(),s!==t&&window.dispatchEvent(new CustomEvent(Us,{detail:{tier:t}}))}getStatus(){return{...this.status}}getTier(){return this.status.tier??"none"}isPremium(){return this.status.isPremium}hasFeature(t){return this.status.features[t]||!1}canUseCustomImages(){return this.hasFeature("customImages")}canCustomizeVoice(){return this.hasFeature("voiceCustomization")}canUseCloudBackup(){return this.hasFeature("cloudBackup")}canAddAdditionalTabs(){return this.hasFeature("additionalTabs")}createStatusForTier(t){const s={isPremium:t!=="none",tier:t,purchaseDate:t==="none"?void 0:Date.now(),features:{customImages:!1,voiceCustomization:!1,cloudBackup:!1,additionalTabs:!1}};return t==="family"&&(s.features.customImages=!0),t==="learning"&&(s.features.customImages=!0,s.features.voiceCustomization=!0),t==="allAccess"&&(s.features.customImages=!0,s.features.voiceCustomization=!0,s.features.cloudBackup=!0,s.features.additionalTabs=!0),s}simulatePremiumPurchase(t="allAccess"){{console.warn("[PREMIUM] simulatePremiumPurchase ignored outside dev mode");return}}saveStatus(){try{localStorage.setItem(Kt,JSON.stringify(this.status))}catch(t){console.error("Error saving premium status:",t)}}unlockPremium(){}resetPremium(){localStorage.removeItem(Kt),this.status={isPremium:!1,tier:"none",features:{customImages:!1,voiceCustomization:!1,cloudBackup:!1,additionalTabs:!1}}}}ee.getInstance();var wn=Object.getOwnPropertyDescriptor,xn=(e,t,s,i)=>{for(var o=i>1?void 0:i?wn(t,s):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(o=a(o)||o);return o};let Ns=class extends z{render(){return d`
      <footer>
        <div class="footer-container">
          <div class="footer-grid">
            <div class="footer-section">
              <h3>Product</h3>
              <ul>
                <li><a href="${f("home")}">Home Dashboard</a></li>
                <li><a href="${f()}">Communication Board</a></li>
                <li><a href="${f("family-puzzle")}">Activity Sessions</a></li>
                <li><a href="${f("premium")}">Premium Tiers</a></li>
              </ul>
            </div>

            <div class="footer-section">
              <h3>Support</h3>
              <ul>
                <li><a href="${f("faq")}">FAQ</a></li>
                <li><a href="${f("contact")}">Contact Support</a></li>
                <li><a href="${f("feedback")}">Feedback & Wishlist</a></li>
                <li><a href="${f("documentation")}">Documentation</a></li>
              </ul>
            </div>

            <div class="footer-section">
              <h3>Company</h3>
              <ul>
                <li><a href="${f("about")}">About CaydenJoy</a></li>
                <li><a href="${f("privacy")}">Privacy Policy</a></li>
                <li><a href="${f("terms")}">Terms of Service</a></li>
                <li><a href="${f("license")}">License</a></li>
              </ul>
            </div>

            <div class="footer-section">
              <h3>Resources</h3>
              <ul>
                ${d`<li><a href="${f("download")}">Download Android APK</a></li>`}
                <li><a href="${f("custom-images")}">Custom Photos</a></li>
                <li><a href="${f("progress")}">Progress Dashboard</a></li>
                ${d`<li><a href="${f("upgrade")}">APK Upgrade Keys</a></li>`}
              </ul>
            </div>
          </div>

          <div class="footer-bottom">
            <div class="copyright">
              (c) ${new Date().getFullYear()} CaydenJoy. All rights reserved.
            </div>
            <div class="quick-links">
              <a href="${f("feedback")}">Feedback</a>
              <a href="${f("contact")}">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    `}};Ns.styles=k`
    footer {
      background-color: #26384a;
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
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 32px;
      margin-bottom: 32px;
    }

    .footer-section h3 {
      color: #8f84ff;
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
      margin-bottom: 10px;
    }

    .footer-section a {
      color: #ffffff;
      text-decoration: none;
      opacity: 0.84;
      transition: opacity 0.2s, color 0.2s;
    }

    .footer-section a:hover,
    .footer-section a:focus-visible {
      color: #ffffff;
      opacity: 1;
      text-decoration: underline;
      text-underline-offset: 4px;
    }

    .footer-bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.12);
      padding-top: 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
    }

    .quick-links {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }

    .quick-links a {
      min-width: 88px;
      height: 36px;
      border-radius: 6px;
      background-color: rgba(143, 132, 255, 0.18);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 12px;
      color: white;
      font-size: 13px;
      font-weight: 700;
      text-decoration: none;
      transition: background-color 0.2s;
    }

    .quick-links a:hover,
    .quick-links a:focus-visible {
      background-color: #6c5ce7;
    }

    .copyright {
      opacity: 0.76;
      font-size: 14px;
    }

    @media (max-width: 640px) {
      footer {
        padding: 28px 16px;
        margin-top: 40px;
      }

      .footer-grid {
        gap: 24px;
      }

      .footer-bottom {
        flex-direction: column;
        align-items: flex-start;
      }

      .quick-links {
        width: 100%;
      }

      .quick-links a {
        flex: 1;
      }
    }

    @media (max-width: 900px) {
      .footer-grid {
        grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      }
    }
  `;Ns=xn([N("app-footer")],Ns);var _n=Object.defineProperty,kn=Object.getOwnPropertyDescriptor,Co=(e,t,s,i)=>{for(var o=i>1?void 0:i?kn(t,s):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(o=(i?a(t,s,o):a(o))||o);return i&&o&&_n(t,s,o),o};let ls=class extends z{constructor(){super(...arguments),this.settings=Z.getInstance().getSettings(),this.accessibilityManager=Z.getInstance(),this.premiumManager=ee.getInstance()}connectedCallback(){super.connectedCallback(),this.unsubscribe=this.accessibilityManager.subscribe(e=>{this.settings=e})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe&&this.unsubscribe()}onThemeChange(e){this.accessibilityManager.saveSettings({colorTheme:e})}onFontSizeChange(e){const t=e.target.value;this.accessibilityManager.saveSettings({fontSize:t})}onAnimationsChange(e){const t=e.target.checked;this.accessibilityManager.saveSettings({enableAnimations:t})}onSoundsChange(e){const t=e.target.checked;this.accessibilityManager.saveSettings({enableSounds:t})}onTextToSpeechChange(e){const t=e.target.checked;this.accessibilityManager.saveSettings({enableTextToSpeech:t}),t&&this.accessibilityManager.speak("Text to speech enabled")}onVoiceChange(e){this.accessibilityManager.saveSettings({voiceName:e.target.value})}onSpeechRateChange(e){this.accessibilityManager.saveSettings({speechRate:Number(e.target.value)})}onReducedMotionChange(e){const t=e.target.checked;this.accessibilityManager.saveSettings({enableReducedMotion:t})}onHighlightInteractiveChange(e){const t=e.target.checked;this.accessibilityManager.saveSettings({highlightInteractive:t})}resetSettings(){confirm("Reset all settings to defaults? This cannot be undone.")&&this.accessibilityManager.resetToDefaults()}testSound(){this.accessibilityManager.playSound("success")}testSpeech(){this.accessibilityManager.speak("This is a test of the text to speech feature.")}render(){const e=this.premiumManager.canCustomizeVoice(),t=this.accessibilityManager.getEnglishVoices();return d`
      <app-header></app-header>

      <main>
        <h1>⚙️ Settings</h1>

        <div class="settings-grid">
          <!-- Color Theme -->
          <sl-card>
            <div slot="header">
              <h2>🎨 Color Theme</h2>
            </div>
            <div class="setting-group">
              <p class="setting-description">
                Choose a theme that's comfortable for you. The calm theme uses softer colors to reduce sensory overload.
              </p>
              <div class="theme-grid">
                <div
                  class="theme-sample calm-theme ${this.settings.colorTheme==="calm"?"selected":""}"
                  @click="${()=>this.onThemeChange("calm")}"
                  role="button"
                  tabindex="0"
                >
                  Calm
                </div>
                <div
                  class="theme-sample normal-theme ${this.settings.colorTheme==="normal"?"selected":""}"
                  @click="${()=>this.onThemeChange("normal")}"
                  role="button"
                  tabindex="0"
                >
                  Normal
                </div>
                <div
                  class="theme-sample high-contrast-theme ${this.settings.colorTheme==="highContrast"?"selected":""}"
                  @click="${()=>this.onThemeChange("highContrast")}"
                  role="button"
                  tabindex="0"
                >
                  High Contrast
                </div>
              </div>
            </div>
          </sl-card>

          <!-- Font Size -->
          <sl-card>
            <div slot="header">
              <h2>🔤 Font Size</h2>
            </div>
            <div class="setting-group">
              <div class="setting-item">
                <label class="setting-label">Choose text size:</label>
                <sl-select
                  value="${this.settings.fontSize}"
                  @change="${this.onFontSizeChange}"
                >
                  <sl-option value="small">Small</sl-option>
                  <sl-option value="medium">Medium</sl-option>
                  <sl-option value="large">Large</sl-option>
                  <sl-option value="xlarge">Extra Large</sl-option>
                </sl-select>
              </div>
            </div>
          </sl-card>

          <!-- Motion & Animations -->
          <sl-card>
            <div slot="header">
              <h2>🎬 Motion & Animations</h2>
            </div>
            <div class="setting-group">
              <div class="setting-item">
                <label class="setting-label">Enable animations:</label>
                <sl-switch
                  ?checked="${this.settings.enableAnimations}"
                  @change="${this.onAnimationsChange}"
                ></sl-switch>
              </div>
              <p class="setting-description">
                Turn off animations if they make you uncomfortable or distracted.
              </p>

              <div class="setting-item">
                <label class="setting-label">Reduce motion:</label>
                <sl-switch
                  ?checked="${this.settings.enableReducedMotion}"
                  @change="${this.onReducedMotionChange}"
                ></sl-switch>
              </div>
              <p class="setting-description">
                Reduces scrolling, transitions, and other movement effects.
              </p>
            </div>
          </sl-card>

          <!-- Sounds & Speech -->
          <sl-card>
            <div slot="header">
              <h2>🔊 Sounds & Speech</h2>
            </div>
            <div class="setting-group">
              <div class="setting-item">
                <label class="setting-label">Enable sounds:</label>
                <sl-switch
                  ?checked="${this.settings.enableSounds}"
                  @change="${this.onSoundsChange}"
                ></sl-switch>
              </div>
              <sl-button @click="${this.testSound}" size="medium">
                Test Sound
              </sl-button>

              <div class="setting-item" style="margin-top: 1rem;">
                <label class="setting-label">Text-to-speech:</label>
                <sl-switch
                  ?checked="${this.settings.enableTextToSpeech}"
                  @change="${this.onTextToSpeechChange}"
                ></sl-switch>
              </div>
              <sl-button @click="${this.testSpeech}" size="medium">
                Test Speech
              </sl-button>
              ${e?d`
                <div class="setting-item" style="margin-top: 1rem;">
                  <label class="setting-label">Voice:</label>
                  <sl-select value=${this.settings.voiceName} @sl-change=${this.onVoiceChange}>
                    <sl-option value="">Device default</sl-option>
                    ${t.map(s=>d`<sl-option value=${s.name}>${s.name}</sl-option>`)}
                  </sl-select>
                </div>
                <div class="setting-item">
                  <label class="setting-label">Speaking rate:</label>
                  <sl-select value=${String(this.settings.speechRate)} @sl-change=${this.onSpeechRateChange}>
                    <sl-option value="0">Use each board's pace</sl-option>
                    <sl-option value="0.7">Slower</sl-option>
                    <sl-option value="0.9">Calm</sl-option>
                    <sl-option value="1">Normal</sl-option>
                    <sl-option value="1.15">Faster</sl-option>
                  </sl-select>
                </div>
              `:d`
                <p class="setting-description">Learning Plus unlocks a preferred voice and speaking rate for every board.</p>
                <sl-button href=${f("premium")} size="medium">View Learning Plus</sl-button>
              `}
            </div>
          </sl-card>

          <!-- Interactive Elements -->
          <sl-card>
            <div slot="header">
              <h2>🎯 Interactive Elements</h2>
            </div>
            <div class="setting-group">
              <div class="setting-item">
                <label class="setting-label">Highlight buttons & links:</label>
                <sl-switch
                  ?checked="${this.settings.highlightInteractive}"
                  @change="${this.onHighlightInteractiveChange}"
                ></sl-switch>
              </div>
              <p class="setting-description">
                Adds outlines to buttons and links to make them easier to see.
              </p>
            </div>
          </sl-card>

          <!-- Preview -->
          <sl-card>
            <div slot="header">
              <h2>👁️ Preview</h2>
            </div>
            <div class="preview-section">
              <div class="preview-title">Preview your settings</div>
              <div class="preview-buttons">
                <sl-button variant="primary">Primary Button</sl-button>
                <sl-button variant="success">Success Button</sl-button>
                <sl-button variant="warning">Warning Button</sl-button>
              </div>
            </div>
          </sl-card>
        </div>

        <!-- Action Buttons -->
        <div class="button-group">
          <sl-button variant="default" @click="${this.resetSettings}">
            Reset to Defaults
          </sl-button>
        </div>
      </main>

      <app-footer></app-footer>
    `}};ls.styles=[Be,k`
      :host {
        display: block;
      }

      main {
        max-width: 800px;
        margin: 2rem auto;
        padding: 1rem;
      }

      h1 {
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 2rem;
      }

      .settings-grid {
        display: grid;
        gap: 2rem;
      }

      sl-card {
        border-radius: 1rem;
      }

      .setting-group {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1.5rem;
      }

      .setting-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        flex-wrap: wrap;
      }

      .setting-label {
        font-size: calc(1.1rem * var(--base-font-multiplier));
        font-weight: 600;
        flex: 1;
        min-width: 200px;
      }

      .setting-description {
        font-size: calc(0.9rem * var(--base-font-multiplier));
        color: #666;
        margin-top: 0.5rem;
        margin-left: 0;
      }

      sl-select, sl-switch {
        min-width: 200px;
      }

      .button-group {
        display: flex;
        gap: 1rem;
        justify-content: center;
        margin-top: 2rem;
        flex-wrap: wrap;
      }

      sl-button {
        padding: 0.75rem 1.5rem;
        font-size: calc(1rem * var(--base-font-multiplier));
        min-height: 48px;
        min-width: 48px;
      }

      .preview-section {
        background: var(--bg-color);
        color: var(--text-color);
        padding: 2rem;
        border-radius: 1rem;
        text-align: center;
        margin-top: 2rem;
      }

      .preview-title {
        font-size: calc(1.5rem * var(--base-font-multiplier));
        font-weight: bold;
        margin-bottom: 1rem;
      }

      .preview-buttons {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
      }

      .preview-buttons sl-button {
        margin: 0.5rem;
      }

      .theme-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 1rem;
        margin-top: 1rem;
      }

      .theme-sample {
        padding: 1rem;
        border-radius: 0.5rem;
        text-align: center;
        font-weight: bold;
        cursor: pointer;
        border: 3px solid transparent;
        transition: all 0.3s ease;
        min-height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .theme-sample:hover {
        transform: scale(1.05);
      }

      .theme-sample.selected {
        border-color: var(--primary-color);
        box-shadow: 0 0 10px rgba(108, 92, 231, 0.5);
      }

      .calm-theme {
        background-color: #F5F3F0;
        color: #3E3E3E;
      }

      .high-contrast-theme {
        background-color: #FFFFFF;
        color: #000000;
        border: 2px solid #000000;
      }

      .normal-theme {
        background-color: #F8F9FA;
        color: #2C3E50;
      }

      @media (max-width: 600px) {
        main {
          padding: 0.5rem;
        }

        h1 {
          font-size: 1.8rem;
        }

        .theme-grid {
          grid-template-columns: 1fr;
        }

        .setting-item {
          flex-direction: column;
          align-items: flex-start;
        }

        sl-select, sl-switch {
          width: 100%;
        }
      }
    `];Co([b()],ls.prototype,"settings",2);ls=Co([N("app-settings")],ls);var $n=k`
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
`,be=class extends j{constructor(){super(...arguments),this.localize=new Ce(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(e=>{for(const t of e)t.type==="attributes"&&t.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.detailsObserver)==null||e.disconnect()}handleSummaryClick(e){e.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.open?this.hide():this.show()),(e.key==="ArrowUp"||e.key==="ArrowLeft")&&(e.preventDefault(),this.hide()),(e.key==="ArrowDown"||e.key==="ArrowRight")&&(e.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await gt(this.body);const{keyframes:t,options:s}=pt(this,"details.show",{dir:this.localize.dir()});await ft(this.body,Ni(t,this.body.scrollHeight),s),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await gt(this.body);const{keyframes:t,options:s}=pt(this,"details.hide",{dir:this.localize.dir()});await ft(this.body,Ni(t,this.body.scrollHeight),s),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,mt(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,mt(this,"sl-after-hide")}render(){const e=this.localize.dir()==="rtl";return d`
      <details
        part="base"
        class=${W({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":e})}
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
    `}};be.styles=[K,$n];be.dependencies={"sl-icon":J};n([R(".details")],be.prototype,"details",2);n([R(".details__header")],be.prototype,"header",2);n([R(".details__body")],be.prototype,"body",2);n([R(".details__expand-icon-slot")],be.prototype,"expandIconSlot",2);n([l({type:Boolean,reflect:!0})],be.prototype,"open",2);n([l()],be.prototype,"summary",2);n([l({type:Boolean,reflect:!0})],be.prototype,"disabled",2);n([F("open",{waitUntilFirstUpdate:!0})],be.prototype,"handleOpenChange",1);xt("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});xt("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});be.define("sl-details");var Cn=Object.getOwnPropertyDescriptor,Tn=(e,t,s,i)=>{for(var o=i>1?void 0:i?Cn(t,s):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(o=a(o)||o);return o};let Fs=class extends z{constructor(){super(...arguments),this.faqData=[{question:"What is a Progressive Web App (PWA)?",answer:"A Progressive Web App is a web application that uses web technologies to provide a native app-like experience. PWAs can be installed on your device, work offline, and send push notifications."},{question:"Can I use CaydenJoy offline?",answer:"Yes! CaydenJoy is built as a PWA with offline support. Once you've loaded the app, it will work without an internet connection and sync data when you're back online."},{question:"How do I install CaydenJoy on my device?",answer:'On most browsers and devices, you can install CaydenJoy by clicking the "Install" button that appears in the address bar, or through the browser menu. On some devices, you can add it to your home screen.'},{question:"Is my data secure?",answer:"Yes, your data is encrypted and stored securely. We use HTTPS to protect data in transit and implement industry-standard security practices."},{question:"How do I enable notifications?",answer:"You can enable notifications in the Settings page. When you enable them, your browser may ask for permission to send notifications."},{question:"What devices are supported?",answer:"CaydenJoy works on any device with a modern web browser, including smartphones, tablets, and computers. It supports iOS, Android, Windows, and macOS."},{question:"How do I update CaydenJoy?",answer:"CaydenJoy updates automatically in the background. You'll always have the latest version without needing to manually update."},{question:"Can I use CaydenJoy on multiple devices?",answer:"Yes! You can install and use CaydenJoy on as many devices as you want. Each installation can be customized with your preferences."},{question:"How do I backup my data?",answer:"Your data is automatically backed up in your browser's local storage. You can export your data from the Settings page."},{question:"Is CaydenJoy free?",answer:"Yes, CaydenJoy is completely free to use. There are no hidden costs or premium features."}]}render(){return d`
      <app-header></app-header>

      <main>
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about CaydenJoy</p>

        <sl-card class="search-box">
          <div slot="header">Quick Help</div>
          <p>Can't find what you're looking for? <a href="${f("contact")}">Contact us</a> for personalized support.</p>
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
          <sl-button href="${f("contact")}" variant="primary">
            Contact Support
          </sl-button>
        </div>

        <div style="text-align: center; margin-top: 48px;">
          <sl-button href="${f()}" variant="primary">Back to Home</sl-button>
        </div>
      </main>
    `}renderFAQItem(e){return d`
      <sl-details>
        <span slot="summary">${e.question}</span>
        <p>${e.answer}</p>
      </sl-details>
    `}};Fs.styles=[Be,k`
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
    `];Fs=Tn([N("app-faq")],Fs);const Es="caydenjoy_progress_events",Sn=500;class se{static getInstance(){return se.instance||(se.instance=new se),se.instance}log(t,s,i=""){const r=[{id:`event_${Date.now()}_${Math.random().toString(36).slice(2,8)}`,type:t,label:s,detail:i,createdAt:Date.now()},...this.getEvents()].slice(0,Sn);localStorage.setItem(Es,JSON.stringify(r))}getEvents(){try{const t=localStorage.getItem(Es);return t?JSON.parse(t):[]}catch(t){return console.error("Could not load progress events:",t),[]}}getSummary(){const t=this.getEvents(),s=new Date;s.setHours(0,0,0,0);const i=new Map,o={communication:0,activity:0,safety:0};return t.forEach(r=>{i.set(r.label,(i.get(r.label)??0)+1),o[r.type]+=1}),{totalEvents:t.length,todayEvents:t.filter(r=>r.createdAt>=s.getTime()).length,topLabels:[...i.entries()].map(([r,a])=>({label:r,count:a})).sort((r,a)=>a.count-r.count).slice(0,8),typeCounts:o,recentEvents:t.slice(0,12)}}clear(){localStorage.removeItem(Es)}}se.getInstance();const St="caydenjoy_custom_images",Vi=50,Hi=500*1024;class ie{constructor(){this.initStorage()}static getInstance(){return ie.instance||(ie.instance=new ie),ie.instance}initStorage(){try{localStorage.getItem(St)||localStorage.setItem(St,JSON.stringify([]))}catch(t){console.error("Error initializing custom images storage:",t)}}getImages(){try{const t=localStorage.getItem(St);return t?JSON.parse(t):[]}catch(t){return console.error("Error loading custom images:",t),[]}}saveImages(t){try{localStorage.setItem(St,JSON.stringify(t))}catch(s){console.error("Error saving custom images:",s),s instanceof DOMException&&s.name==="QuotaExceededError"&&this.handleStorageQuotaExceeded()}}handleStorageQuotaExceeded(){console.warn("Storage quota exceeded. Removing oldest images.");const t=this.getImages();t.length>0&&(t.sort((s,i)=>s.uploadedAt-i.uploadedAt),t.splice(0,5),this.saveImages(t))}addImage(t,s,i){try{if(!t||!s||!i)throw new Error("Missing required fields");if(i.length>Hi)throw new Error(`Image too large. Maximum size: ${Hi/1024}KB`);const o=this.getImages();if(o.length>=Vi)throw new Error(`Maximum ${Vi} images reached`);const r={id:`img_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,category:t,name:s,dataUrl:i,uploadedAt:Date.now()};return o.push(r),this.saveImages(o),r}catch(o){return console.error("Error adding custom image:",o),null}}getImagesByCategory(t){return this.getImages().filter(s=>s.category===t)}getImage(t){return this.getImages().find(s=>s.id===t)}getAllImages(){return this.getImages()}updateImage(t,s){try{const i=this.getImages(),o=i.find(r=>r.id===t);return o?(o.name=s,this.saveImages(i),!0):!1}catch(i){return console.error("Error updating image:",i),!1}}deleteImage(t){try{const s=this.getImages().filter(i=>i.id!==t);return this.saveImages(s),!0}catch(s){return console.error("Error deleting image:",s),!1}}deleteByCategory(t){try{const s=this.getImages().filter(i=>i.category!==t);return this.saveImages(s),!0}catch(s){return console.error("Error deleting images by category:",s),!1}}getStorageInfo(){const s=this.getImages().reduce((o,r)=>o+r.dataUrl.length,0),i=5*1024*1024;return{used:s,max:i,percentage:Math.round(s/i*100)}}clearAll(){try{return localStorage.setItem(St,JSON.stringify([])),!0}catch(t){return console.error("Error clearing images:",t),!1}}exportData(){return JSON.stringify(this.getImages())}importData(t){try{const s=JSON.parse(t);return Array.isArray(s)?(this.saveImages(s),!0):!1}catch(s){return console.error("Error importing images:",s),!1}}}ie.getInstance();const An=8;class ae{constructor(){this.words=[],this.listeners=new Set}static getInstance(){return ae.instance||(ae.instance=new ae),ae.instance}subscribe(t){return this.listeners.add(t),t(this.getWords()),()=>{this.listeners.delete(t)}}notify(){const t=this.getWords();this.listeners.forEach(s=>s(t))}getWords(){return[...this.words]}addWord(t){!t.label||!t.label.trim()||(this.words.length>=An&&(this.words=this.words.slice(1)),this.words=[...this.words,{id:`w-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,...t}],this.notify())}removeLast(){this.words.length!==0&&(this.words=this.words.slice(0,-1),this.notify())}clear(){this.words.length!==0&&(this.words=[],this.notify())}getSentenceText(){return this.words.map(t=>t.label).join(" ")}isEmpty(){return this.words.length===0}}ae.getInstance();var En=Object.defineProperty,Pn=Object.getOwnPropertyDescriptor,ot=(e,t,s,i)=>{for(var o=i>1?void 0:i?Pn(t,s):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(o=(i?a(t,s,o):a(o))||o);return i&&o&&En(t,s,o),o};let Ie=class extends z{constructor(){super(...arguments),this.activeRequest=null,this.tabs=[],this.activeTabId=null,this.showNewTabModal=!1,this.newTabName="",this.customRequests=[],this.premiumManager=ee.getInstance(),this.accessibilityManager=Z.getInstance(),this.progressManager=se.getInstance(),this.customImagesManager=ie.getInstance(),this.sentenceBuilder=ae.getInstance(),this.DEFAULT_TAB_ID="default",this.TABS_STORAGE_KEY="caydenjoy_communication_tabs",this.CUSTOM_CATEGORY="communication",this.requests=[{id:1,text:"I'm hungry",phrase:"I'm hungry.",category:"Food",color:"#2e7d32",imageUrl:"https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=700&q=85"},{id:2,text:"I'm thirsty",phrase:"I'm thirsty.",category:"Drink",color:"#1976a2",imageUrl:"https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=700&q=85"},{id:3,text:"Bathroom",phrase:"I need the bathroom.",category:"Need",color:"#6b5b95",imageUrl:"https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=700&q=85"},{id:4,text:"Break",phrase:"I need a break.",category:"Sensory",color:"#1f7a8c",imageUrl:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=85"},{id:5,text:"Help",phrase:"Help please.",category:"Urgent",color:"#c0392b",imageUrl:"https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=700&q=85"},{id:6,text:"Play",phrase:"I want to play.",category:"Activity",color:"#7a4fb0",imageUrl:"https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=700&q=85"},{id:7,text:"I'm tired",phrase:"I'm tired.",category:"Body",color:"#536d8f",imageUrl:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=700&q=85"},{id:8,text:"Too loud",phrase:"It is too loud.",category:"Sensory",color:"#b65f1f",imageUrl:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=85"},{id:9,text:"Favorite food",phrase:"I want my favorite food.",category:"Food",color:"#9a6a12",imageUrl:"https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=700&q=85"},{id:10,text:"Favorite toy",phrase:"I want my toy.",category:"Play",color:"#a23b72",imageUrl:"https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=700&q=85"},{id:11,text:"Go outside",phrase:"I want to go outside.",category:"Place",color:"#2f7d57",imageUrl:"https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=700&q=85"},{id:12,text:"Calm place",phrase:"I need a calm place.",category:"Sensory",color:"#4f7f8f",imageUrl:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=85"}]}connectedCallback(){super.connectedCallback(),this.loadTabs(),this.loadCustomImages()}loadCustomImages(){this.customRequests=this.customImagesManager.getImagesByCategory(this.CUSTOM_CATEGORY).map(e=>({id:`custom-${e.id}`,text:e.name,phrase:`I want ${e.name}.`,category:"Cayden's",color:"#2e8f74",imageUrl:e.dataUrl,isCustom:!0}))}normalizeRequest(e,t){return{id:Number(e?.id??t.id),text:String(e?.text??t.text),phrase:String(e?.phrase??e?.text??t.phrase),category:String(e?.category??t.category),color:String(e?.color?.startsWith?.("#")?e.color:t.color),imageUrl:String(e?.imageUrl??t.imageUrl)}}loadTabs(){try{const e=localStorage.getItem(this.TABS_STORAGE_KEY);if(e){const t=JSON.parse(e);this.tabs=t.tabs.map(s=>({...s,requests:s.requests.map((i,o)=>this.normalizeRequest(i,this.requests[o]??this.requests[0]))})),this.activeTabId=t.activeTabId}else this.initializeDefaultTab()}catch(e){console.error("Error loading tabs:",e),this.initializeDefaultTab()}}initializeDefaultTab(){this.tabs=[{id:this.DEFAULT_TAB_ID,name:"Daily Needs",requests:[...this.requests],createdAt:Date.now()}],this.activeTabId=this.DEFAULT_TAB_ID,this.saveTabs()}saveTabs(){try{const e={tabs:this.tabs,activeTabId:this.activeTabId};localStorage.setItem(this.TABS_STORAGE_KEY,JSON.stringify(e))}catch(e){console.error("Error saving tabs:",e)}}getActiveTab(){return this.tabs.find(e=>e.id===this.activeTabId)}switchTab(e){this.activeTabId=e,this.activeRequest=null,this.saveTabs()}openNewTabModal(){this.showNewTabModal=!0,this.newTabName=""}closeNewTabModal(){this.showNewTabModal=!1,this.newTabName=""}createNewTab(){if(!this.newTabName.trim()){alert("Please enter a tab name");return}const e={id:`tab-${Date.now()}`,name:this.newTabName.trim(),requests:[...this.requests],createdAt:Date.now()};this.tabs=[...this.tabs,e],this.activeTabId=e.id,this.activeRequest=null,this.saveTabs(),this.closeNewTabModal()}handleTabNameInput(e){const t=e.target;this.newTabName=t.value}handleTabNameKeydown(e){e.key==="Enter"?this.createNewTab():e.key==="Escape"&&this.closeNewTabModal()}handleRequest(e){this.activeRequest=e,this.progressManager.log(e.category==="Urgent"?"safety":"communication",e.text,e.phrase),this.accessibilityManager.speakNow(e.phrase,.9),this.sentenceBuilder.addWord({label:e.text,imageUrl:e.imageUrl})}clearRequest(){this.activeRequest=null,window.speechSynthesis.cancel()}render(){const e=this.getActiveTab(),t=this.premiumManager.canAddAdditionalTabs(),s=[...e?e.requests:this.requests,...this.customRequests];return d`
      <div class="container">
        <div class="header">
          <h1>CaydenJoy Communication</h1>
          <p class="subtitle">Tap a realistic picture to speak a daily need.</p>
        </div>

        <a class="add-photos-link" href="${f("custom-images")}?category=${this.CUSTOM_CATEGORY}">📸 Add Cayden's real photos</a>

        ${this.activeRequest?d`
          <div class="active-request">
            <img src=${this.activeRequest.imageUrl} alt=${this.activeRequest.text} />
            <div class="active-request-text">${this.activeRequest.phrase}</div>
            <button class="close-btn" @click=${this.clearRequest} aria-label="Clear request">x</button>
          </div>
        `:""}

        ${t?d`
          <div class="tabs-container">
            ${this.tabs.map(i=>d`
              <button
                class="tab-button ${i.id===this.activeTabId?"active":""}"
                @click=${()=>this.switchTab(i.id)}
              >
                ${i.name}
              </button>
            `)}
            <button class="add-tab-btn" @click=${this.openNewTabModal}>New Tab</button>
          </div>
        `:""}

        <div class="requests-grid">
          ${s.map(i=>d`
            <button
              class="request-card"
              style="--card-color: ${i.color}"
              @click=${()=>this.handleRequest(i)}
            >
              <img src=${i.imageUrl} alt=${i.text} />
              <div class="request-copy">
                <div class="request-text">${i.text}${i.isCustom?d`<span class="custom-badge">Cayden's</span>`:""}</div>
                <div class="request-category">${i.category}</div>
              </div>
            </button>
          `)}
        </div>

        <p class="footer-text">Real photos work best when they show Cayden's actual cup, food, room, toy, people, and places.</p>
      </div>

      ${this.showNewTabModal?d`
        <div class="modal-overlay" @click=${this.closeNewTabModal}>
          <div class="modal" @click=${i=>i.stopPropagation()}>
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
              <button class="modal-btn modal-btn-secondary" @click=${this.closeNewTabModal}>Cancel</button>
              <button class="modal-btn modal-btn-primary" @click=${this.createNewTab}>Create Tab</button>
            </div>
          </div>
        </div>
      `:""}
    `}};Ie.styles=k`
    :host {
      display: block;
      min-height: 100vh;
      background: #f6f8fb;
      color: #243041;
      padding: 1.25rem;
    }

    .container {
      max-width: 1280px;
      margin: 0 auto;
    }

    .header {
      margin-bottom: 1rem;
    }

    h1 {
      margin: 0;
      font-size: 2rem;
      line-height: 1.1;
      color: #243041;
    }

    .subtitle {
      margin: 0.4rem 0 0;
      color: #596779;
      font-size: 1.05rem;
    }

    .active-request {
      display: grid;
      grid-template-columns: 112px 1fr auto;
      gap: 1rem;
      align-items: center;
      margin-bottom: 1rem;
      padding: 0.75rem;
      border-radius: 0.5rem;
      color: #ffffff;
      background: #243041;
      box-shadow: 0 6px 18px rgba(30, 42, 58, 0.16);
    }

    .active-request img {
      width: 112px;
      height: 82px;
      object-fit: cover;
      border-radius: 0.4rem;
    }

    .active-request-text {
      font-size: 1.55rem;
      font-weight: 900;
    }

    .close-btn {
      width: 52px;
      height: 52px;
      border: 0;
      border-radius: 0.5rem;
      background: rgba(255, 255, 255, 0.18);
      color: #ffffff;
      cursor: pointer;
      font-size: 1.6rem;
      font-weight: 900;
    }

    .tabs-container {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 1rem;
      align-items: center;
      flex-wrap: wrap;
      padding: 0.55rem;
      background: #e8edf3;
      border-radius: 0.5rem;
    }

    .tab-button,
    .add-tab-btn {
      border-radius: 0.4rem;
      cursor: pointer;
      font-weight: 800;
      min-height: 44px;
    }

    .tab-button {
      border: 2px solid #c9d4e1;
      background: #ffffff;
      color: #243041;
    }

    .tab-button.active {
      background: #243041;
      border-color: #243041;
      color: #ffffff;
    }

    .add-tab-btn {
      border: 0;
      background: #2e8f74;
      color: #ffffff;
    }

    .add-photos-link {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      margin-bottom: 1rem;
      padding: 0.6rem 1rem;
      border-radius: 0.4rem;
      background: #edf7f4;
      color: #1f463b;
      font-weight: 800;
      text-decoration: none;
      border: 2px dashed #2e8f74;
    }

    .custom-badge {
      display: inline-block;
      margin-left: 0.4rem;
      padding: 0.1rem 0.4rem;
      border-radius: 0.3rem;
      background: #2e8f74;
      color: #fff;
      font-size: 0.7rem;
      font-weight: 900;
      vertical-align: middle;
    }

    .requests-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
      gap: 0.9rem;
    }

    .request-card {
      display: grid;
      grid-template-rows: 150px auto;
      min-height: 244px;
      padding: 0;
      overflow: hidden;
      border: 3px solid #d8e0ea;
      border-bottom: 8px solid var(--card-color);
      border-radius: 0.5rem;
      background: #ffffff;
      cursor: pointer;
      text-align: left;
      box-shadow: 0 3px 12px rgba(30, 42, 58, 0.12);
    }

    .request-card:hover,
    .request-card:focus-visible {
      outline: 4px solid rgba(46, 143, 116, 0.22);
      border-color: #2e8f74;
    }

    .request-card img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      background: #dfe8f1;
    }

    .request-copy {
      padding: 0.8rem;
      display: grid;
      gap: 0.3rem;
    }

    .request-text {
      font-size: 1.25rem;
      font-weight: 900;
      color: #243041;
      line-height: 1.15;
    }

    .request-category {
      color: #657386;
      font-size: 0.9rem;
      font-weight: 800;
    }

    .footer-text {
      text-align: center;
      color: #687789;
      font-size: 1rem;
      margin-top: 1.25rem;
    }

    .modal-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }

    .modal {
      background: #ffffff;
      border-radius: 0.5rem;
      padding: 1.5rem;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      max-width: 500px;
      width: 90%;
    }

    .modal-header {
      font-size: 1.35rem;
      font-weight: 900;
      color: #243041;
      margin-bottom: 1rem;
    }

    .modal-input {
      width: 100%;
      padding: 0.85rem;
      border: 2px solid #c9d4e1;
      border-radius: 0.4rem;
      font-size: 1rem;
      margin-bottom: 1rem;
      box-sizing: border-box;
    }

    .modal-buttons {
      display: flex;
      gap: 0.75rem;
      justify-content: flex-end;
    }

    .modal-btn {
      border: 0;
      border-radius: 0.4rem;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 800;
    }

    .modal-btn-primary {
      background: #2e8f74;
      color: #ffffff;
    }

    .modal-btn-secondary {
      background: #e8edf3;
      color: #243041;
    }

    @media (max-width: 640px) {
      :host {
        padding: 0.8rem;
      }

      h1 {
        font-size: 1.55rem;
      }

      .requests-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 0.65rem;
      }

      .request-card {
        grid-template-rows: 116px auto;
        min-height: 206px;
      }

      .request-text {
        font-size: 1.05rem;
      }

      .active-request {
        grid-template-columns: 86px 1fr auto;
      }

      .active-request img {
        width: 86px;
        height: 68px;
      }

      .active-request-text {
        font-size: 1.1rem;
      }
    }
  `;ot([b()],Ie.prototype,"activeRequest",2);ot([b()],Ie.prototype,"tabs",2);ot([b()],Ie.prototype,"activeTabId",2);ot([b()],Ie.prototype,"showNewTabModal",2);ot([b()],Ie.prototype,"newTabName",2);ot([b()],Ie.prototype,"customRequests",2);Ie=ot([N("app-communication")],Ie);var In=Object.defineProperty,zn=Object.getOwnPropertyDescriptor,Se=(e,t,s,i)=>{for(var o=i>1?void 0:i?zn(t,s):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(o=(i?a(t,s,o):a(o))||o);return i&&o&&In(t,s,o),o};const Wi='data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200"%3E%3Crect width="320" height="200" fill="%23dfe8f1"/%3E%3Ccircle cx="160" cy="75" r="38" fill="%2389a0b7"/%3E%3Cpath d="M78 190c10-50 52-75 82-75s72 25 82 75" fill="%2389a0b7"/%3E%3C/svg%3E';let de=class extends z{constructor(){super(...arguments),this.mode="family",this.familyTargetIndex=0,this.objectTargetIndex=0,this.selectedId=null,this.completedFamilyIds=[],this.completedObjectIds=[],this.customFamilyCards=[],this.customObjectCards=[],this.routineStep=0,this.accessibilityManager=Z.getInstance(),this.progressManager=se.getInstance(),this.customImagesManager=ie.getInstance(),this.sentenceBuilder=ae.getInstance(),this.premiumManager=ee.getInstance(),this.FAMILY_CATEGORY="family",this.OBJECTS_CATEGORY="objects",this.routineSteps=["Look at the plan","Choose an activity","Take a short break","All done"],this.familyCards=[{id:"mom",label:"Mom",phrase:"Mom.",imageUrl:"https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=700&q=85"},{id:"dad",label:"Dad",phrase:"Dad.",imageUrl:"https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=700&q=85"},{id:"brother",label:"Brother",phrase:"Brother.",imageUrl:"https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=700&q=85"},{id:"dog",label:"Dog",phrase:"Dog.",imageUrl:"https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=700&q=85"},{id:"grandad",label:"Grandad",phrase:"Grandad.",imageUrl:"https://images.unsplash.com/photo-1584719877723-e6392ef5c1be?auto=format&fit=crop&w=700&q=85"}],this.objectCards=[{id:"cup",label:"Cup",phrase:"Cup.",imageUrl:"https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=85"},{id:"shoes",label:"Shoes",phrase:"Shoes.",imageUrl:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=85"},{id:"toothbrush",label:"Toothbrush",phrase:"Toothbrush.",imageUrl:"https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=700&q=85"},{id:"ball",label:"Ball",phrase:"Ball.",imageUrl:"https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=700&q=85"},{id:"headphones",label:"Headphones",phrase:"Headphones.",imageUrl:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=85"},{id:"backpack",label:"Backpack",phrase:"Backpack.",imageUrl:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=85"}]}connectedCallback(){super.connectedCallback(),this.loadCustomImages(),this.speakCurrentPrompt()}loadCustomImages(){this.customFamilyCards=this.customImagesManager.getImagesByCategory(this.FAMILY_CATEGORY).map(e=>({id:`custom-${e.id}`,label:e.name,phrase:`${e.name}.`,imageUrl:e.dataUrl,isCustom:!0})),this.customObjectCards=this.customImagesManager.getImagesByCategory(this.OBJECTS_CATEGORY).map(e=>({id:`custom-${e.id}`,label:e.name,phrase:`${e.name}.`,imageUrl:e.dataUrl,isCustom:!0}))}get activeCards(){return this.mode==="family"?[...this.familyCards,...this.customFamilyCards]:[...this.objectCards,...this.customObjectCards]}get completedIds(){return this.mode==="family"?this.completedFamilyIds:this.completedObjectIds}get targetIndex(){return this.mode==="family"?this.familyTargetIndex:this.objectTargetIndex}get targetCard(){return this.activeCards[this.targetIndex%this.activeCards.length]}speak(e){this.accessibilityManager.speakNow(e,.9)}useImageFallback(e){const t=e.currentTarget;t.src!==Wi&&(t.src=Wi)}setMode(e){this.mode=e,this.selectedId=null,this.speakCurrentPrompt()}speakCurrentPrompt(){this.speak(`Find ${this.targetCard.label}.`)}chooseCard(e){if(this.selectedId=e.id,e.id===this.targetCard.id){this.progressManager.log("activity",`Puzzle selected: ${e.label}`,e.phrase),this.markComplete(e.id),this.speak(`Yes. ${e.phrase}`),this.sentenceBuilder.addWord({label:e.label,imageUrl:e.imageUrl}),this.advanceTarget();return}this.speak(`Try again. Find ${this.targetCard.label}.`)}markComplete(e){this.mode==="family"&&!this.completedFamilyIds.includes(e)&&(this.completedFamilyIds=[...this.completedFamilyIds,e]),this.mode==="objects"&&!this.completedObjectIds.includes(e)&&(this.completedObjectIds=[...this.completedObjectIds,e])}advanceTarget(){const e=this.activeCards,t=(this.targetIndex+1)%e.length;this.mode==="family"?this.familyTargetIndex=t:this.objectTargetIndex=t,setTimeout(()=>this.speakCurrentPrompt(),900)}resetActivity(){this.familyTargetIndex=0,this.objectTargetIndex=0,this.selectedId=null,this.completedFamilyIds=[],this.completedObjectIds=[],this.routineStep=0,this.speak("Puzzle reset."),setTimeout(()=>this.speakCurrentPrompt(),700)}selectRoutineStep(e){this.routineStep=e;const t=this.routineSteps[e];this.progressManager.log("activity","Routine session",t),this.speak(t)}renderCard(e){const t=this.completedIds.includes(e.id);return d`
      <button
        class="puzzle-card ${this.selectedId===e.id?"selected":""} ${t?"done":""}"
        @click=${()=>this.chooseCard(e)}
      >
        <img src=${e.imageUrl} alt=${e.label} @error=${this.useImageFallback} />
        <div class="card-copy">
          <div class="label">${e.label}${e.isCustom?d`<span class="custom-badge">Cayden's</span>`:""}</div>
          <div class="status">${t?"Found":"Tap to choose"}</div>
        </div>
      </button>
    `}render(){const e=this.premiumManager.canAddAdditionalTabs(),t=this.mode==="family"?this.FAMILY_CATEGORY:this.OBJECTS_CATEGORY,s=this.mode==="family"?"Add Cayden's real family photos":"Add Cayden's real object photos";return d`
      <div class="shell">
        <div class="topbar">
          <div>
            <h1>Picture Puzzles</h1>
            <p class="subtitle">Listen for the prompt, then pick the matching picture.</p>
          </div>
          <button class="reset-button" @click=${this.resetActivity}>Reset</button>
        </div>

        <a class="add-photos-link" href="${f("custom-images")}?category=${t}">📸 ${s}</a>

        <div class="safety-strip">
          <button class="safety-button help" @click=${()=>this.speak("Help please.")}>Help</button>
          <button class="safety-button break" @click=${()=>this.speak("I need a break.")}>Break</button>
          <button class="safety-button again" @click=${()=>this.speakCurrentPrompt()}>Again</button>
          <button class="safety-button done" @click=${()=>this.speak("All done.")}>All Done</button>
          <button class="safety-button stop" @click=${()=>this.speak("Stop.")}>Stop</button>
        </div>

        ${e?d`
          <section class="routine-session" aria-label="Visual routine session">
            <h2 class="routine-title">Visual Routine</h2>
            <div class="routine-steps">
              ${this.routineSteps.map((i,o)=>d`
                <button
                  class="routine-step ${o<this.routineStep?"complete":""} ${o===this.routineStep?"current":""}"
                  @click=${()=>this.selectRoutineStep(o)}
                >${o<this.routineStep?"Done: ":""}${i}</button>
              `)}
            </div>
          </section>
        `:d`
          <div class="routine-locked">All Access adds visual routine sessions for home, therapy, and school practice.</div>
        `}

        <section class="session-card" aria-label="Picture puzzle">
          <div class="mode-tabs">
            <button class="mode-button ${this.mode==="family"?"active":""}" @click=${()=>this.setMode("family")}>
              Family
            </button>
            <button class="mode-button ${this.mode==="objects"?"active":""}" @click=${()=>this.setMode("objects")}>
              Objects
            </button>
          </div>

          <div class="prompt-row">
            <div class="prompt">Find ${this.targetCard.label}</div>
            <button class="prompt-button" @click=${()=>this.speakCurrentPrompt()}>Say Again</button>
          </div>

          <div class="puzzle-grid">
            ${this.activeCards.map(i=>this.renderCard(i))}
          </div>
        </section>
      </div>
    `}};de.styles=k`
    :host {
      display: block;
      min-height: 100vh;
      background: #f6f8fb;
      color: #243041;
    }

    .shell {
      max-width: 1180px;
      margin: 0 auto;
      padding: 1.25rem;
    }

    .topbar {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 1rem;
      align-items: end;
      margin-bottom: 1rem;
    }

    h1 {
      margin: 0;
      color: #243041;
      font-size: 2rem;
      line-height: 1.1;
    }

    .subtitle {
      margin: 0.35rem 0 0;
      color: #596779;
      font-size: 1rem;
    }

    .reset-button,
    .mode-button,
    .safety-button,
    .prompt-button,
    .puzzle-card {
      border: 0;
      border-radius: 0.5rem;
      cursor: pointer;
      font-weight: 900;
      box-shadow: 0 2px 8px rgba(25, 35, 50, 0.12);
    }

    .reset-button {
      min-height: 48px;
      padding: 0.7rem 1rem;
      background: #e8edf3;
      color: #243041;
    }

    .safety-strip {
      display: grid;
      grid-template-columns: repeat(5, minmax(0, 1fr));
      gap: 0.55rem;
      margin-bottom: 1rem;
    }

    .safety-button {
      min-height: 52px;
      color: #ffffff;
      font-size: 1rem;
    }

    .help { background: #c0392b; }
    .break { background: #1f7a8c; }
    .again { background: #7a4fb0; }
    .done { background: #2e7d32; }
    .stop { background: #9d1c1c; }

    .session-card {
      background: #ffffff;
      border: 1px solid #d8e0ea;
      border-radius: 0.5rem;
      padding: 1rem;
      box-shadow: 0 6px 18px rgba(30, 42, 58, 0.08);
    }

    .mode-tabs {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 0.6rem;
      margin-bottom: 1rem;
    }

    .mode-button {
      min-height: 56px;
      background: #eef3f8;
      color: #243041;
      border: 2px solid transparent;
      font-size: 1rem;
    }

    .mode-button.active {
      background: #243041;
      color: #ffffff;
      border-color: #87c5d8;
    }

    .prompt-row {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 1rem;
      align-items: center;
      margin-bottom: 1rem;
      padding: 0.85rem;
      background: #edf7f4;
      border-left: 6px solid #2e8f74;
      border-radius: 0.5rem;
    }

    .prompt {
      color: #1f463b;
      font-size: 1.2rem;
      font-weight: 900;
    }

    .prompt-button {
      min-height: 48px;
      padding: 0.7rem 1rem;
      background: #2e8f74;
      color: #ffffff;
    }

    .add-photos-link {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      margin-bottom: 1rem;
      padding: 0.6rem 1rem;
      border-radius: 0.5rem;
      background: #edf7f4;
      color: #1f463b;
      font-weight: 800;
      text-decoration: none;
      border: 2px dashed #2e8f74;
    }

    .custom-badge {
      display: inline-block;
      margin-left: 0.4rem;
      padding: 0.1rem 0.4rem;
      border-radius: 0.3rem;
      background: #2e8f74;
      color: #fff;
      font-size: 0.7rem;
      font-weight: 900;
      vertical-align: middle;
    }

    .puzzle-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
      gap: 0.9rem;
    }

    .routine-session {
      margin-bottom: 1rem;
      padding: 1rem;
      border: 1px solid #d8e0ea;
      border-radius: 0.5rem;
      background: #ffffff;
    }

    .routine-title {
      margin: 0 0 0.75rem;
      font-size: 1.2rem;
      color: #243041;
    }

    .routine-steps {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 0.6rem;
    }

    .routine-step {
      min-height: 72px;
      border: 2px solid #c9d4e1;
      border-radius: 0.5rem;
      background: #f8fafc;
      color: #243041;
      cursor: pointer;
      font-weight: 900;
    }

    .routine-step.current { border-color: #1f7a8c; background: #dceff4; }
    .routine-step.complete { border-color: #2e8f74; background: #edf7f4; color: #1f463b; }
    .routine-locked { margin-bottom: 1rem; padding: 1rem; border-radius: 0.5rem; background: #f8fafc; border: 1px solid #d8e0ea; color: #526070; font-weight: 700; }

    .puzzle-card {
      display: grid;
      grid-template-rows: 150px auto;
      min-height: 228px;
      padding: 0;
      overflow: hidden;
      border: 3px solid #d8e0ea;
      background: #ffffff;
      text-align: left;
    }

    .puzzle-card:hover,
    .puzzle-card:focus-visible {
      outline: 4px solid rgba(46, 143, 116, 0.22);
      border-color: #2e8f74;
    }

    .puzzle-card.selected {
      border-color: #2e8f74;
      box-shadow: 0 0 0 5px rgba(46, 143, 116, 0.18);
    }

    .puzzle-card.done {
      border-color: #4f7f8f;
      opacity: 0.72;
    }

    .puzzle-card img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      background: #dfe8f1;
    }

    .card-copy {
      display: grid;
      gap: 0.25rem;
      padding: 0.85rem;
    }

    .label {
      color: #243041;
      font-size: 1.2rem;
      font-weight: 900;
      line-height: 1.15;
    }

    .status {
      color: #657386;
      font-size: 0.9rem;
      font-weight: 800;
    }

    @media (max-width: 760px) {
      .topbar,
      .prompt-row {
        grid-template-columns: 1fr;
      }

      .safety-strip {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .routine-steps {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      h1 {
        font-size: 1.55rem;
      }
    }
  `;Se([b()],de.prototype,"mode",2);Se([b()],de.prototype,"familyTargetIndex",2);Se([b()],de.prototype,"objectTargetIndex",2);Se([b()],de.prototype,"selectedId",2);Se([b()],de.prototype,"completedFamilyIds",2);Se([b()],de.prototype,"completedObjectIds",2);Se([b()],de.prototype,"customFamilyCards",2);Se([b()],de.prototype,"customObjectCards",2);Se([b()],de.prototype,"routineStep",2);de=Se([N("app-family-puzzle")],de);var On=Object.defineProperty,Dn=Object.getOwnPropertyDescriptor,je=(e,t,s,i)=>{for(var o=i>1?void 0:i?Dn(t,s):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(o=(i?a(t,s,o):a(o))||o);return i&&o&&On(t,s,o),o};let xe=class extends z{constructor(){super(...arguments),this.foods=[{id:"chicken",name:"Chicken",imageUrl:"https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=700&q=85"},{id:"noodles",name:"Noodles",imageUrl:"https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=700&q=85"},{id:"rice",name:"Rice",imageUrl:"https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=700&q=85"},{id:"cereal",name:"Cereal",imageUrl:"https://images.unsplash.com/photo-1521483451569-e33803c0330c?auto=format&fit=crop&w=700&q=85"},{id:"bread",name:"Bread",imageUrl:"https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=85"},{id:"potatoes",name:"Potatoes",imageUrl:"https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=700&q=85"},{id:"donut",name:"Donut",imageUrl:"https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=700&q=85"},{id:"candy",name:"Candy",imageUrl:"https://images.unsplash.com/photo-1581798459219-318e76aecc7b?auto=format&fit=crop&w=700&q=85"},{id:"juice",name:"Juice",imageUrl:"https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=700&q=85"},{id:"water",name:"Water",imageUrl:"https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=700&q=85"},{id:"apple",name:"Apple",imageUrl:"https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=700&q=85"},{id:"banana",name:"Banana",imageUrl:"https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=700&q=85"}],this.selectedFood=null,this.tabs=[],this.activeTabId=null,this.showNewTabModal=!1,this.newTabName="",this.customFoods=[],this.premiumManager=ee.getInstance(),this.accessibilityManager=Z.getInstance(),this.customImagesManager=ie.getInstance(),this.sentenceBuilder=ae.getInstance(),this.progressManager=se.getInstance(),this.DEFAULT_TAB_ID="default",this.TABS_STORAGE_KEY="caydenjoy_foods_tabs",this.CUSTOM_CATEGORY="foods"}connectedCallback(){super.connectedCallback(),this.loadTabs(),this.loadCustomImages()}loadCustomImages(){this.customFoods=this.customImagesManager.getImagesByCategory(this.CUSTOM_CATEGORY).map(e=>({id:`custom-${e.id}`,name:e.name,imageUrl:e.dataUrl,isCustom:!0}))}normalizeFood(e,t){return{id:String(e?.id??t.id),name:String(e?.name??t.name),imageUrl:String(e?.imageUrl??t.imageUrl)}}loadTabs(){try{const e=localStorage.getItem(this.TABS_STORAGE_KEY);if(e){const t=JSON.parse(e);this.tabs=t.tabs.map(s=>({...s,foods:s.foods.map((i,o)=>this.normalizeFood(i,this.foods[o]??this.foods[0]))})),this.activeTabId=t.activeTabId}else this.initializeDefaultTab()}catch(e){console.error("Error loading tabs:",e),this.initializeDefaultTab()}}initializeDefaultTab(){this.tabs=[{id:this.DEFAULT_TAB_ID,name:"Foods",foods:[...this.foods],createdAt:Date.now()}],this.activeTabId=this.DEFAULT_TAB_ID,this.saveTabs()}saveTabs(){localStorage.setItem(this.TABS_STORAGE_KEY,JSON.stringify({tabs:this.tabs,activeTabId:this.activeTabId}))}getActiveTab(){return this.tabs.find(e=>e.id===this.activeTabId)}switchTab(e){this.activeTabId=e,this.selectedFood=null,this.saveTabs()}createNewTab(){if(!this.newTabName.trim()){alert("Please enter a tab name");return}const e={id:`tab-${Date.now()}`,name:this.newTabName.trim(),foods:[...this.foods],createdAt:Date.now()};this.tabs=[...this.tabs,e],this.activeTabId=e.id,this.selectedFood=null,this.showNewTabModal=!1,this.newTabName="",this.saveTabs()}selectFood(e){this.selectedFood=e,this.progressManager.log("activity","Foods",e.name),this.accessibilityManager.speakNow(e.name,.9),this.sentenceBuilder.addWord({label:e.name,imageUrl:e.imageUrl})}render(){const e=this.premiumManager.canAddAdditionalTabs(),t=[...this.getActiveTab()?.foods??this.foods,...this.customFoods];return d`
      <div class="container">
        <h1>Foods</h1>
        <p class="subtitle">Detailed real food photos for recognition and choice-making.</p>
        <a class="add-photos-link" href="${f("custom-images")}?category=${this.CUSTOM_CATEGORY}">📸 Add Cayden's real food photos</a>
        ${this.selectedFood?d`<div class="selected-card"><img src=${this.selectedFood.imageUrl} alt=${this.selectedFood.name} /><div class="selected-name">${this.selectedFood.name}</div></div>`:""}
        ${e?d`<div class="tabs-container">${this.tabs.map(s=>d`<button class="tab-button ${s.id===this.activeTabId?"active":""}" @click=${()=>this.switchTab(s.id)}>${s.name}</button>`)}<button class="add-tab-btn" @click=${()=>this.showNewTabModal=!0}>New Tab</button></div>`:""}
        <div class="photo-grid">${t.map(s=>d`<button class="photo-button" @click=${()=>this.selectFood(s)}><img src=${s.imageUrl} alt=${s.name} /><div class="photo-name">${s.name}${s.isCustom?d`<span class="custom-badge">Cayden's</span>`:""}</div></button>`)}</div>
      </div>
      ${this.showNewTabModal?d`<div class="modal-overlay" @click=${()=>this.showNewTabModal=!1}><div class="modal" @click=${s=>s.stopPropagation()}><div class="modal-header">Create New Tab</div><input class="modal-input" placeholder="Enter tab name" .value=${this.newTabName} @input=${s=>this.newTabName=s.target.value} @keydown=${s=>s.key==="Enter"?this.createNewTab():s.key==="Escape"?this.showNewTabModal=!1:void 0} autofocus /><div class="modal-buttons"><button class="modal-btn modal-btn-secondary" @click=${()=>this.showNewTabModal=!1}>Cancel</button><button class="modal-btn modal-btn-primary" @click=${this.createNewTab}>Create Tab</button></div></div></div>`:""}
    `}};xe.styles=k`
    :host { display: block; min-height: 100vh; padding: 1.25rem; background: #f6f8fb; color: #243041; }
    .container { max-width: 1180px; margin: 0 auto; }
    h1 { margin: 0 0 0.35rem; color: #243041; font-size: 2rem; }
    .subtitle { margin: 0 0 1rem; color: #596779; }
    .selected-card { display: grid; grid-template-columns: 160px 1fr; gap: 1rem; align-items: center; margin-bottom: 1rem; padding: 0.75rem; background: #243041; color: #fff; border-radius: 0.5rem; }
    .selected-card img { width: 160px; height: 110px; object-fit: cover; border-radius: 0.4rem; }
    .selected-name { font-size: 1.65rem; font-weight: 900; }
    .photo-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 0.9rem; margin-bottom: 1.5rem; }
    .photo-button { display: grid; grid-template-rows: 145px auto; min-height: 220px; padding: 0; overflow: hidden; border: 3px solid #d8e0ea; border-radius: 0.5rem; background: #fff; cursor: pointer; text-align: left; box-shadow: 0 3px 12px rgba(30, 42, 58, 0.12); }
    .photo-button:hover, .photo-button:focus-visible { outline: 4px solid rgba(46, 143, 116, 0.22); border-color: #2e8f74; }
    .photo-button img { width: 100%; height: 100%; object-fit: cover; background: #dfe8f1; }
    .photo-name { padding: 0.85rem; font-size: 1.15rem; font-weight: 900; color: #243041; }
    .tabs-container { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1rem; padding: 0.55rem; background: #e8edf3; border-radius: 0.5rem; }
    .tab-button, .add-tab-btn, .modal-btn { border-radius: 0.4rem; cursor: pointer; font-weight: 800; min-height: 44px; }
    .tab-button { border: 2px solid #c9d4e1; background: #fff; color: #243041; }
    .tab-button.active { background: #243041; border-color: #243041; color: #fff; }
    .add-tab-btn, .modal-btn-primary { border: 0; background: #2e8f74; color: #fff; }
    .add-photos-link { display: inline-flex; align-items: center; gap: 0.4rem; margin-bottom: 1rem; padding: 0.6rem 1rem; border-radius: 0.4rem; background: #edf7f4; color: #1f463b; font-weight: 800; text-decoration: none; border: 2px dashed #2e8f74; }
    .custom-badge { display: inline-block; margin-left: 0.4rem; padding: 0.1rem 0.4rem; border-radius: 0.3rem; background: #2e8f74; color: #fff; font-size: 0.7rem; font-weight: 900; vertical-align: middle; }
    .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 1000; }
    .modal { width: 90%; max-width: 500px; padding: 1.5rem; border-radius: 0.5rem; background: #fff; box-shadow: 0 20px 60px rgba(0,0,0,0.3); }
    .modal-header { margin-bottom: 1rem; font-size: 1.35rem; font-weight: 900; color: #243041; }
    .modal-input { width: 100%; box-sizing: border-box; margin-bottom: 1rem; padding: 0.85rem; border: 2px solid #c9d4e1; border-radius: 0.4rem; font-size: 1rem; }
    .modal-buttons { display: flex; gap: 0.75rem; justify-content: flex-end; }
    .modal-btn-secondary { border: 0; background: #e8edf3; color: #243041; }
    @media (max-width: 640px) { :host { padding: 0.8rem; } h1 { font-size: 1.55rem; } .photo-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.65rem; } .photo-button { grid-template-rows: 116px auto; min-height: 190px; } .selected-card { grid-template-columns: 1fr; } .selected-card img { width: 100%; height: 160px; } }
  `;je([b()],xe.prototype,"foods",2);je([b()],xe.prototype,"selectedFood",2);je([b()],xe.prototype,"tabs",2);je([b()],xe.prototype,"activeTabId",2);je([b()],xe.prototype,"showNewTabModal",2);je([b()],xe.prototype,"newTabName",2);je([b()],xe.prototype,"customFoods",2);xe=je([N("app-foods-enhanced")],xe);var Mn=Object.defineProperty,Ln=Object.getOwnPropertyDescriptor,pi=(e,t,s,i)=>{for(var o=i>1?void 0:i?Ln(t,s):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(o=(i?a(t,s,o):a(o))||o);return i&&o&&Mn(t,s,o),o};let Lt=class extends z{constructor(){super(...arguments),this.accessibilityManager=Z.getInstance(),this.customImagesManager=ie.getInstance(),this.sentenceBuilder=ae.getInstance(),this.CUSTOM_CATEGORY="quick",this.buttons=[{id:"yes",label:"YES",emoji:"✅",color:"#00B894"},{id:"no",label:"NO",emoji:"❌",color:"#E17055"},{id:"stop",label:"STOP",emoji:"🛑",color:"#D63031"},{id:"food",label:"FOOD",emoji:"🍽️",color:"#FDCB6E"},{id:"tv",label:"TV",emoji:"📺",color:"#0984E3"}],this.quickPhotos=[]}connectedCallback(){super.connectedCallback(),this.loadQuickPhotos()}loadQuickPhotos(){this.quickPhotos=this.customImagesManager.getImagesByCategory(this.CUSTOM_CATEGORY).map(e=>({id:e.id,label:e.name,imageUrl:e.dataUrl}))}handleButtonClick(e){this.accessibilityManager.speakNow(e.label,1),this.sentenceBuilder.addWord({label:e.label})}handlePhotoClick(e){this.accessibilityManager.speakNow(e.label,1),this.sentenceBuilder.addWord({label:e.label,imageUrl:e.imageUrl})}render(){return d`
      <div class="container">
        <h1>Quick Communication</h1>
        <p class="subtitle">Tap a button to communicate</p>

        <div class="buttons-grid">
          ${this.buttons.map(e=>d`
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

        <a class="add-photos-link" href="${f("custom-images")}?category=${this.CUSTOM_CATEGORY}">📸 Add Cayden's own quick-tap photos</a>

        ${this.quickPhotos.length>0?d`
          <div class="quick-photos-section">
            <div class="section-title">Cayden's Quick Photos</div>
            <div class="quick-photo-grid">
              ${this.quickPhotos.map(e=>d`
                <button class="quick-photo-button" @click=${()=>this.handlePhotoClick(e)}>
                  <img src=${e.imageUrl} alt=${e.label} />
                  <div class="quick-photo-name">${e.label}</div>
                </button>
              `)}
            </div>
          </div>
        `:""}

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
    `}};Lt.styles=k`
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

    .add-photos-link {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      margin: 0 auto 1.5rem;
      padding: 0.6rem 1rem;
      border-radius: 0.5rem;
      background: #edf7f4;
      color: #1f463b;
      font-weight: 800;
      text-decoration: none;
      border: 2px dashed #2e8f74;
      justify-content: center;
    }

    .quick-photos-section {
      margin-bottom: 2rem;
    }

    .section-title {
      color: #6C5CE7;
      font-size: 1.2rem;
      font-weight: 900;
      margin-bottom: 0.75rem;
    }

    .quick-photo-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 0.9rem;
    }

    .quick-photo-button {
      display: grid;
      grid-template-rows: 130px auto;
      min-height: 200px;
      padding: 0;
      overflow: hidden;
      border: 3px solid #e0d8f5;
      border-radius: 0.75rem;
      background: #fff;
      cursor: pointer;
      text-align: left;
      box-shadow: 0 3px 12px rgba(30, 42, 58, 0.1);
    }

    .quick-photo-button img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      background: #dfe8f1;
    }

    .quick-photo-name {
      padding: 0.7rem;
      font-size: 1.05rem;
      font-weight: 900;
      color: #243041;
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
  `;pi([b()],Lt.prototype,"buttons",2);pi([b()],Lt.prototype,"quickPhotos",2);Lt=pi([N("app-home-enhanced")],Lt);var Rn=Object.defineProperty,Un=Object.getOwnPropertyDescriptor,qe=(e,t,s,i)=>{for(var o=i>1?void 0:i?Un(t,s):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(o=(i?a(t,s,o):a(o))||o);return i&&o&&Rn(t,s,o),o};let _e=class extends z{constructor(){super(...arguments),this.colors=[{id:"red",name:"Red",hex:"#c0392b",example:"The color red",imageUrl:""},{id:"blue",name:"Blue",hex:"#1976a2",example:"The color blue",imageUrl:""},{id:"green",name:"Green",hex:"#2e7d32",example:"The color green",imageUrl:""},{id:"yellow",name:"Yellow",hex:"#c99700",example:"The color yellow",imageUrl:""},{id:"purple",name:"Purple",hex:"#6b4fa3",example:"The color purple",imageUrl:""},{id:"pink",name:"Pink",hex:"#c04d86",example:"The color pink",imageUrl:""},{id:"orange",name:"Orange",hex:"#d66a1f",example:"The color orange",imageUrl:""},{id:"brown",name:"Brown",hex:"#795548",example:"The color brown",imageUrl:""},{id:"black",name:"Black",hex:"#20252b",example:"The color black",imageUrl:""},{id:"white",name:"White",hex:"#f4f6f8",example:"The color white",imageUrl:""}],this.selectedColor=null,this.tabs=[],this.activeTabId=null,this.showNewTabModal=!1,this.newTabName="",this.customColors=[],this.premiumManager=ee.getInstance(),this.accessibilityManager=Z.getInstance(),this.customImagesManager=ie.getInstance(),this.sentenceBuilder=ae.getInstance(),this.progressManager=se.getInstance(),this.DEFAULT_TAB_ID="default",this.TABS_STORAGE_KEY="caydenjoy_colors_tabs",this.CUSTOM_CATEGORY="colors"}connectedCallback(){super.connectedCallback(),this.loadTabs(),this.loadCustomImages()}loadCustomImages(){this.customColors=this.customImagesManager.getImagesByCategory(this.CUSTOM_CATEGORY).map(e=>({id:`custom-${e.id}`,name:e.name,hex:"#6b7280",example:e.name,imageUrl:e.dataUrl,isCustom:!0}))}normalizeColor(e,t){return{id:String(e?.id??t.id),name:String(e?.name??t.name),hex:String(e?.hex??t.hex),imageUrl:t.imageUrl,example:t.example}}loadTabs(){try{const e=localStorage.getItem(this.TABS_STORAGE_KEY);if(e){const t=JSON.parse(e);this.tabs=t.tabs.map(s=>({...s,colors:s.colors.map((i,o)=>this.normalizeColor(i,this.colors[o]??this.colors[0]))})),this.activeTabId=t.activeTabId}else this.initializeDefaultTab()}catch(e){console.error("Error loading tabs:",e),this.initializeDefaultTab()}}initializeDefaultTab(){this.tabs=[{id:this.DEFAULT_TAB_ID,name:"Colors",colors:[...this.colors],createdAt:Date.now()}],this.activeTabId=this.DEFAULT_TAB_ID,this.saveTabs()}saveTabs(){localStorage.setItem(this.TABS_STORAGE_KEY,JSON.stringify({tabs:this.tabs,activeTabId:this.activeTabId}))}getActiveTab(){return this.tabs.find(e=>e.id===this.activeTabId)}switchTab(e){this.activeTabId=e,this.selectedColor=null,this.saveTabs()}createNewTab(){if(!this.newTabName.trim()){alert("Please enter a tab name");return}const e={id:`tab-${Date.now()}`,name:this.newTabName.trim(),colors:[...this.colors],createdAt:Date.now()};this.tabs=[...this.tabs,e],this.activeTabId=e.id,this.selectedColor=null,this.showNewTabModal=!1,this.newTabName="",this.saveTabs()}selectColor(e){this.selectedColor=e,this.progressManager.log("activity","Colors",e.name),this.accessibilityManager.speakNow(`${e.name}. ${e.example}.`,.9),this.sentenceBuilder.addWord({label:e.name,imageUrl:e.imageUrl})}render(){const e=this.premiumManager.canAddAdditionalTabs(),t=[...this.getActiveTab()?.colors??this.colors,...this.customColors];return d`
      <div class="container">
        <h1>Colors</h1>
        <p class="subtitle">Tap a color to hear its name. Add photos of familiar objects to make the board personal.</p>
        <a class="add-photos-link" href="${f("custom-images")}?category=${this.CUSTOM_CATEGORY}">📸 Add Cayden's real color photos</a>
        ${this.selectedColor?d`<div class="selected-card" style="--selected-color: ${this.selectedColor.hex}">${this.selectedColor.isCustom?d`<img src=${this.selectedColor.imageUrl} alt=${this.selectedColor.name} />`:d`<div class="selected-swatch" role="img" aria-label=${this.selectedColor.name}></div>`}<div><div class="selected-name">${this.selectedColor.name}</div><div class="selected-example">${this.selectedColor.example}</div></div></div>`:""}
        ${e?d`<div class="tabs-container">${this.tabs.map(s=>d`<button class="tab-button ${s.id===this.activeTabId?"active":""}" @click=${()=>this.switchTab(s.id)}>${s.name}</button>`)}<button class="add-tab-btn" @click=${()=>this.showNewTabModal=!0}>New Tab</button></div>`:""}
        <div class="photo-grid">${t.map(s=>d`<button class="photo-button" style="--color: ${s.hex}" @click=${()=>this.selectColor(s)}>${s.isCustom?d`<img src=${s.imageUrl} alt=${s.name} />`:d`<div class="color-swatch" role="img" aria-label=${s.name}></div>`}<div class="color-strip" aria-hidden="true"></div><div class="card-copy"><div class="photo-name">${s.name}${s.isCustom?d`<span class="custom-badge">Cayden's</span>`:""}</div><div class="photo-example">${s.isCustom?s.name:s.example}</div></div></button>`)}</div>
      </div>
      ${this.showNewTabModal?d`<div class="modal-overlay" @click=${()=>this.showNewTabModal=!1}><div class="modal" @click=${s=>s.stopPropagation()}><div class="modal-header">Create New Tab</div><input class="modal-input" placeholder="Enter tab name" .value=${this.newTabName} @input=${s=>this.newTabName=s.target.value} @keydown=${s=>s.key==="Enter"?this.createNewTab():s.key==="Escape"?this.showNewTabModal=!1:void 0} autofocus /><div class="modal-buttons"><button class="modal-btn modal-btn-secondary" @click=${()=>this.showNewTabModal=!1}>Cancel</button><button class="modal-btn modal-btn-primary" @click=${this.createNewTab}>Create Tab</button></div></div></div>`:""}
    `}};_e.styles=k`
    :host { display: block; min-height: 100vh; padding: 1.25rem; background: #f6f8fb; color: #243041; }
    .container { max-width: 1180px; margin: 0 auto; }
    h1 { margin: 0 0 0.35rem; color: #243041; font-size: 2rem; }
    .subtitle { margin: 0 0 1rem; color: #596779; }
    .selected-card { display: grid; grid-template-columns: 170px 1fr; gap: 1rem; align-items: center; margin-bottom: 1rem; padding: 0.75rem; background: #fff; border-left: 12px solid var(--selected-color); border-radius: 0.5rem; box-shadow: 0 4px 16px rgba(30,42,58,0.12); }
    .selected-card img, .selected-swatch { width: 170px; height: 115px; object-fit: cover; border-radius: 0.4rem; }
    .selected-swatch { background: var(--selected-color); border: 2px solid rgba(36,48,65,0.16); }
    .selected-name { font-size: 1.65rem; font-weight: 900; color: #243041; }
    .selected-example { color: #596779; font-weight: 800; }
    .photo-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 0.9rem; margin-bottom: 1.5rem; }
    .photo-button { display: grid; grid-template-rows: 145px 18px auto; min-height: 248px; padding: 0; overflow: hidden; border: 3px solid #d8e0ea; border-radius: 0.5rem; background: #fff; cursor: pointer; text-align: left; box-shadow: 0 3px 12px rgba(30,42,58,0.12); }
    .photo-button:hover, .photo-button:focus-visible { outline: 4px solid rgba(46,143,116,0.22); border-color: #2e8f74; }
    .photo-button img { width: 100%; height: 100%; object-fit: cover; background: #dfe8f1; }
    .color-swatch { width: 100%; height: 100%; background: var(--color); border: 0; }
    .color-strip { background: var(--color); border-top: 1px solid rgba(36,48,65,0.14); border-bottom: 1px solid rgba(36,48,65,0.14); }
    .card-copy { padding: 0.8rem; }
    .photo-name { font-size: 1.15rem; font-weight: 900; color: #243041; }
    .photo-example { margin-top: 0.25rem; color: #657386; font-size: 0.9rem; font-weight: 800; }
    .tabs-container { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1rem; padding: 0.55rem; background: #e8edf3; border-radius: 0.5rem; }
    .tab-button, .add-tab-btn, .modal-btn { border-radius: 0.4rem; cursor: pointer; font-weight: 800; min-height: 44px; }
    .tab-button { border: 2px solid #c9d4e1; background: #fff; color: #243041; }
    .tab-button.active { background: #243041; border-color: #243041; color: #fff; }
    .add-tab-btn, .modal-btn-primary { border: 0; background: #2e8f74; color: #fff; }
    .add-photos-link { display: inline-flex; align-items: center; gap: 0.4rem; margin-bottom: 1rem; padding: 0.6rem 1rem; border-radius: 0.4rem; background: #edf7f4; color: #1f463b; font-weight: 800; text-decoration: none; border: 2px dashed #2e8f74; }
    .custom-badge { display: inline-block; margin-left: 0.4rem; padding: 0.1rem 0.4rem; border-radius: 0.3rem; background: #2e8f74; color: #fff; font-size: 0.7rem; font-weight: 900; vertical-align: middle; }
    .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 1000; }
    .modal { width: 90%; max-width: 500px; padding: 1.5rem; border-radius: 0.5rem; background: #fff; box-shadow: 0 20px 60px rgba(0,0,0,0.3); }
    .modal-header { margin-bottom: 1rem; font-size: 1.35rem; font-weight: 900; color: #243041; }
    .modal-input { width: 100%; box-sizing: border-box; margin-bottom: 1rem; padding: 0.85rem; border: 2px solid #c9d4e1; border-radius: 0.4rem; font-size: 1rem; }
    .modal-buttons { display: flex; gap: 0.75rem; justify-content: flex-end; }
    .modal-btn-secondary { border: 0; background: #e8edf3; color: #243041; }
    @media (max-width: 640px) { :host { padding: 0.8rem; } h1 { font-size: 1.55rem; } .photo-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.65rem; } .photo-button { grid-template-rows: 116px 16px auto; min-height: 220px; } .selected-card { grid-template-columns: 1fr; } .selected-card img, .selected-swatch { width: 100%; height: 160px; } }
  `;qe([b()],_e.prototype,"colors",2);qe([b()],_e.prototype,"selectedColor",2);qe([b()],_e.prototype,"tabs",2);qe([b()],_e.prototype,"activeTabId",2);qe([b()],_e.prototype,"showNewTabModal",2);qe([b()],_e.prototype,"newTabName",2);qe([b()],_e.prototype,"customColors",2);_e=qe([N("app-colors")],_e);var Nn=Object.defineProperty,Fn=Object.getOwnPropertyDescriptor,Ve=(e,t,s,i)=>{for(var o=i>1?void 0:i?Fn(t,s):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(o=(i?a(t,s,o):a(o))||o);return i&&o&&Nn(t,s,o),o};const Bn={1:"https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=700&q=85",2:"https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=700&q=85",3:"https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=700&q=85",4:"https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=700&q=85",5:"https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=700&q=85",6:"https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=700&q=85",7:"https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=700&q=85",8:"https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=700&q=85",9:"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=700&q=85",10:"https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=700&q=85"};let ke=class extends z{constructor(){super(...arguments),this.numbers=Array.from({length:10},(e,t)=>({id:`num-${t+1}`,number:t+1,label:`Number ${t+1}`,imageUrl:Bn[t+1]})),this.selectedNumber=null,this.tabs=[],this.activeTabId=null,this.showNewTabModal=!1,this.newTabName="",this.customNumbers=[],this.premiumManager=ee.getInstance(),this.accessibilityManager=Z.getInstance(),this.customImagesManager=ie.getInstance(),this.sentenceBuilder=ae.getInstance(),this.progressManager=se.getInstance(),this.DEFAULT_TAB_ID="default",this.TABS_STORAGE_KEY="caydenjoy_numbers_tabs",this.CUSTOM_CATEGORY="numbers"}connectedCallback(){super.connectedCallback(),this.loadTabs(),this.loadCustomImages()}loadCustomImages(){this.customNumbers=this.customImagesManager.getImagesByCategory(this.CUSTOM_CATEGORY).map(e=>({id:`custom-${e.id}`,number:0,label:e.name,imageUrl:e.dataUrl,isCustom:!0}))}normalizeNumber(e,t){return{id:String(e?.id??t.id),number:Number(e?.number??t.number),label:String(e?.label??`Number ${e?.number??t.number}`),imageUrl:String(e?.imageUrl??t.imageUrl)}}loadTabs(){try{const e=localStorage.getItem(this.TABS_STORAGE_KEY);if(e){const t=JSON.parse(e);this.tabs=t.tabs.map(s=>({...s,numbers:this.numbers.map(i=>{const o=s.numbers.find(r=>Number(r?.number)===i.number);return this.normalizeNumber(o,i)})})),this.activeTabId=t.activeTabId,this.saveTabs()}else this.initializeDefaultTab()}catch(e){console.error("Error loading tabs:",e),this.initializeDefaultTab()}}initializeDefaultTab(){this.tabs=[{id:this.DEFAULT_TAB_ID,name:"Numbers",numbers:[...this.numbers],createdAt:Date.now()}],this.activeTabId=this.DEFAULT_TAB_ID,this.saveTabs()}saveTabs(){localStorage.setItem(this.TABS_STORAGE_KEY,JSON.stringify({tabs:this.tabs,activeTabId:this.activeTabId}))}getActiveTab(){return this.tabs.find(e=>e.id===this.activeTabId)}switchTab(e){this.activeTabId=e,this.selectedNumber=null,this.saveTabs()}createNewTab(){if(!this.newTabName.trim()){alert("Please enter a tab name");return}const e={id:`tab-${Date.now()}`,name:this.newTabName.trim(),numbers:[...this.numbers],createdAt:Date.now()};this.tabs=[...this.tabs,e],this.activeTabId=e.id,this.selectedNumber=null,this.showNewTabModal=!1,this.newTabName="",this.saveTabs()}selectNumber(e){this.selectedNumber=e,this.progressManager.log("activity","Numbers",e.isCustom?e.label:String(e.number)),this.accessibilityManager.speakNow(e.isCustom?e.label:`${e.number}. ${e.label}.`,.9),this.sentenceBuilder.addWord({label:e.isCustom?e.label:String(e.number),imageUrl:e.imageUrl})}render(){const e=this.premiumManager.canAddAdditionalTabs(),t=[...this.getActiveTab()?.numbers??this.numbers,...this.customNumbers];return d`
      <div class="container">
        <h1>Numbers</h1>
        <p class="subtitle">Tap a number to hear it. Add real, quantity-accurate photos of Cayden's own things below.</p>
        <a class="add-photos-link" href="${f("custom-images")}?category=${this.CUSTOM_CATEGORY}">📸 Add Cayden's real counting photos</a>
        ${this.selectedNumber?d`<div class="selected-card"><img src=${this.selectedNumber.imageUrl} alt=${this.selectedNumber.label} /><div><div class="selected-value">${this.selectedNumber.isCustom?"":this.selectedNumber.number}</div><div class="selected-label">${this.selectedNumber.label}</div></div></div>`:""}
        ${e?d`<div class="tabs-container">${this.tabs.map(s=>d`<button class="tab-button ${s.id===this.activeTabId?"active":""}" @click=${()=>this.switchTab(s.id)}>${s.name}</button>`)}<button class="add-tab-btn" @click=${()=>this.showNewTabModal=!0}>New Tab</button></div>`:""}
        <div class="number-grid">${t.map(s=>d`<button class="number-button" @click=${()=>this.selectNumber(s)}>${s.isCustom?"":d`<span class="number-badge">${s.number}</span>`}<img src=${s.imageUrl} alt=${s.label} /><div class="card-copy"><div class="number-name">${s.isCustom?s.label:s.number}${s.isCustom?d`<span class="custom-badge">Cayden's</span>`:""}</div><div class="number-label">${s.label}</div></div></button>`)}</div>
      </div>
      ${this.showNewTabModal?d`<div class="modal-overlay" @click=${()=>this.showNewTabModal=!1}><div class="modal" @click=${s=>s.stopPropagation()}><div class="modal-header">Create New Tab</div><input class="modal-input" placeholder="Enter tab name" .value=${this.newTabName} @input=${s=>this.newTabName=s.target.value} @keydown=${s=>s.key==="Enter"?this.createNewTab():s.key==="Escape"?this.showNewTabModal=!1:void 0} autofocus /><div class="modal-buttons"><button class="modal-btn modal-btn-secondary" @click=${()=>this.showNewTabModal=!1}>Cancel</button><button class="modal-btn modal-btn-primary" @click=${this.createNewTab}>Create Tab</button></div></div></div>`:""}
    `}};ke.styles=k`
    :host { display: block; min-height: 100vh; padding: 1.25rem; background: #f6f8fb; color: #243041; }
    .container { max-width: 1180px; margin: 0 auto; }
    h1 { margin: 0 0 0.35rem; color: #243041; font-size: 2rem; }
    .subtitle { margin: 0 0 1rem; color: #596779; }
    .selected-card { display: grid; grid-template-columns: 170px 1fr; gap: 1rem; align-items: center; margin-bottom: 1rem; padding: 0.75rem; background: #243041; color: #fff; border-radius: 0.5rem; box-shadow: 0 4px 16px rgba(30,42,58,0.12); }
    .selected-card img { width: 170px; height: 115px; object-fit: cover; border-radius: 0.4rem; }
    .selected-value { font-size: 3rem; line-height: 1; font-weight: 900; }
    .selected-label { margin-top: 0.3rem; font-size: 1.2rem; font-weight: 800; }
    .number-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 0.9rem; margin-bottom: 1.5rem; }
    .number-button { position: relative; display: grid; grid-template-rows: 135px auto; min-height: 220px; padding: 0; overflow: hidden; border: 3px solid #d8e0ea; border-radius: 0.5rem; background: #fff; cursor: pointer; text-align: left; box-shadow: 0 3px 12px rgba(30,42,58,0.12); }
    .number-button:hover, .number-button:focus-visible { outline: 4px solid rgba(46,143,116,0.22); border-color: #2e8f74; }
    .number-button img { width: 100%; height: 100%; object-fit: cover; background: #dfe8f1; }
    .number-badge { position: absolute; top: 0.55rem; left: 0.55rem; display: grid; place-items: center; width: 48px; height: 48px; border-radius: 50%; background: #243041; color: #fff; font-size: 1.45rem; font-weight: 900; }
    .card-copy { padding: 0.85rem; }
    .number-name { font-size: 1.15rem; font-weight: 900; color: #243041; }
    .number-label { margin-top: 0.25rem; color: #657386; font-size: 0.9rem; font-weight: 800; }
    .tabs-container { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1rem; padding: 0.55rem; background: #e8edf3; border-radius: 0.5rem; }
    .tab-button, .add-tab-btn, .modal-btn { border-radius: 0.4rem; cursor: pointer; font-weight: 800; min-height: 44px; }
    .tab-button { border: 2px solid #c9d4e1; background: #fff; color: #243041; }
    .tab-button.active { background: #243041; border-color: #243041; color: #fff; }
    .add-tab-btn, .modal-btn-primary { border: 0; background: #2e8f74; color: #fff; }
    .add-photos-link { display: inline-flex; align-items: center; gap: 0.4rem; margin-bottom: 1rem; padding: 0.6rem 1rem; border-radius: 0.4rem; background: #edf7f4; color: #1f463b; font-weight: 800; text-decoration: none; border: 2px dashed #2e8f74; }
    .custom-badge { display: inline-block; margin-left: 0.4rem; padding: 0.1rem 0.4rem; border-radius: 0.3rem; background: #2e8f74; color: #fff; font-size: 0.7rem; font-weight: 900; vertical-align: middle; }
    .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 1000; }
    .modal { width: 90%; max-width: 500px; padding: 1.5rem; border-radius: 0.5rem; background: #fff; box-shadow: 0 20px 60px rgba(0,0,0,0.3); }
    .modal-header { margin-bottom: 1rem; font-size: 1.35rem; font-weight: 900; color: #243041; }
    .modal-input { width: 100%; box-sizing: border-box; margin-bottom: 1rem; padding: 0.85rem; border: 2px solid #c9d4e1; border-radius: 0.4rem; font-size: 1rem; }
    .modal-buttons { display: flex; gap: 0.75rem; justify-content: flex-end; }
    .modal-btn-secondary { border: 0; background: #e8edf3; color: #243041; }
    @media (max-width: 640px) { :host { padding: 0.8rem; } h1 { font-size: 1.55rem; } .number-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.65rem; } .number-button { grid-template-rows: 112px auto; min-height: 198px; } .selected-card { grid-template-columns: 1fr; } .selected-card img { width: 100%; height: 160px; } }
  `;Ve([b()],ke.prototype,"numbers",2);Ve([b()],ke.prototype,"selectedNumber",2);Ve([b()],ke.prototype,"tabs",2);Ve([b()],ke.prototype,"activeTabId",2);Ve([b()],ke.prototype,"showNewTabModal",2);Ve([b()],ke.prototype,"newTabName",2);Ve([b()],ke.prototype,"customNumbers",2);ke=Ve([N("app-numbers")],ke);var jn=Object.defineProperty,qn=Object.getOwnPropertyDescriptor,He=(e,t,s,i)=>{for(var o=i>1?void 0:i?qn(t,s):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(o=(i?a(t,s,o):a(o))||o);return i&&o&&jn(t,s,o),o};const Yi='data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200"%3E%3Crect width="320" height="200" fill="%23dfe8f1"/%3E%3Ccircle cx="160" cy="75" r="38" fill="%2389a0b7"/%3E%3Cpath d="M78 190c10-50 52-75 82-75s72 25 82 75" fill="%2389a0b7"/%3E%3C/svg%3E';let $e=class extends z{constructor(){super(...arguments),this.places=[{id:"home",name:"Home",phrase:"I want to go home.",color:"#c0392b",imageUrl:"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=700&q=85"},{id:"school",name:"School",phrase:"I am going to school.",color:"#1f7a8c",imageUrl:"https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=700&q=85"},{id:"park",name:"Park",phrase:"I want to go to the park.",color:"#2e7d32",imageUrl:"https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=700&q=85"},{id:"store",name:"Store",phrase:"We are going to the store.",color:"#9a6a12",imageUrl:"https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=700&q=85"},{id:"doctor",name:"Doctor",phrase:"We are going to the doctor.",color:"#6b5b95",imageUrl:"https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=700&q=85"},{id:"beach",name:"Beach",phrase:"I want to go to the beach.",color:"#1976a2",imageUrl:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=85"},{id:"restaurant",name:"Restaurant",phrase:"We are going to a restaurant.",color:"#b65f1f",imageUrl:"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=700&q=85"},{id:"library",name:"Library",phrase:"We are going to the library.",color:"#795548",imageUrl:"https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=700&q=85"},{id:"zoo",name:"Zoo",phrase:"I want to go to the zoo.",color:"#2e7d32",imageUrl:"https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=700&q=90"},{id:"therapy",name:"Therapy",phrase:"I am going to therapy.",color:"#4f7f8f",imageUrl:"https://images.unsplash.com/photo-1576765607924-0f4d9a1d563b?auto=format&fit=crop&w=700&q=85"},{id:"playground",name:"Playground",phrase:"I want to go to the playground.",color:"#7a4fb0",imageUrl:"https://images.unsplash.com/photo-1596997000103-e597b3ca50df?auto=format&fit=crop&w=700&q=85"}],this.selectedPlace=null,this.tabs=[],this.activeTabId=null,this.showNewTabModal=!1,this.newTabName="",this.customPlaces=[],this.premiumManager=ee.getInstance(),this.accessibilityManager=Z.getInstance(),this.customImagesManager=ie.getInstance(),this.sentenceBuilder=ae.getInstance(),this.progressManager=se.getInstance(),this.DEFAULT_TAB_ID="default",this.TABS_STORAGE_KEY="caydenjoy_places_tabs",this.CUSTOM_CATEGORY="places"}connectedCallback(){super.connectedCallback(),this.loadTabs(),this.loadCustomImages()}loadCustomImages(){this.customPlaces=this.customImagesManager.getImagesByCategory(this.CUSTOM_CATEGORY).map(e=>({id:`custom-${e.id}`,name:e.name,phrase:`I want to go to ${e.name}.`,color:"#2e8f74",imageUrl:e.dataUrl,isCustom:!0}))}normalizePlace(e,t){const s=String(e?.id??t.id),i=this.places.find(o=>o.id===s)??t;return{id:s,name:String(e?.name??i.name),phrase:String(e?.phrase??i.phrase),color:String(e?.color??i.color),imageUrl:i.imageUrl}}loadTabs(){try{const e=localStorage.getItem(this.TABS_STORAGE_KEY);if(e){const t=JSON.parse(e);this.tabs=t.tabs.map(s=>({...s,places:s.places.map((i,o)=>this.normalizePlace(i,this.places[o]??this.places[0]))})),this.activeTabId=t.activeTabId}else this.initializeDefaultTab()}catch(e){console.error("Error loading tabs:",e),this.initializeDefaultTab()}}initializeDefaultTab(){this.tabs=[{id:this.DEFAULT_TAB_ID,name:"Places",places:[...this.places],createdAt:Date.now()}],this.activeTabId=this.DEFAULT_TAB_ID,this.saveTabs()}saveTabs(){localStorage.setItem(this.TABS_STORAGE_KEY,JSON.stringify({tabs:this.tabs,activeTabId:this.activeTabId}))}getActiveTab(){return this.tabs.find(e=>e.id===this.activeTabId)}switchTab(e){this.activeTabId=e,this.selectedPlace=null,this.saveTabs()}createNewTab(){if(!this.newTabName.trim()){alert("Please enter a tab name");return}const e={id:`tab-${Date.now()}`,name:this.newTabName.trim(),places:[...this.places],createdAt:Date.now()};this.tabs=[...this.tabs,e],this.activeTabId=e.id,this.selectedPlace=null,this.showNewTabModal=!1,this.newTabName="",this.saveTabs()}selectPlace(e){this.selectedPlace=e,this.progressManager.log("activity","Places",e.name),this.accessibilityManager.speakNow(e.phrase,.9),this.sentenceBuilder.addWord({label:e.name,imageUrl:e.imageUrl})}useImageFallback(e){const t=e.currentTarget;t.src!==Yi&&(t.src=Yi)}render(){const e=this.premiumManager.canAddAdditionalTabs(),t=[...this.getActiveTab()?.places??this.places,...this.customPlaces];return d`
      <div class="container">
        <h1>Places</h1>
        <p class="subtitle">Real place photos for daily routines and transitions.</p>
        <a class="add-photos-link" href="${f("custom-images")}?category=${this.CUSTOM_CATEGORY}">📸 Add Cayden's real place photos</a>
        ${this.selectedPlace?d`<div class="selected-card" style="--place-color: ${this.selectedPlace.color}"><img src=${this.selectedPlace.imageUrl} alt=${this.selectedPlace.name} /><div><div class="selected-name">${this.selectedPlace.name}</div><div class="selected-phrase">${this.selectedPlace.phrase}</div></div></div>`:""}
        ${e?d`<div class="tabs-container">${this.tabs.map(s=>d`<button class="tab-button ${s.id===this.activeTabId?"active":""}" @click=${()=>this.switchTab(s.id)}>${s.name}</button>`)}<button class="add-tab-btn" @click=${()=>this.showNewTabModal=!0}>New Tab</button></div>`:""}
        <div class="place-grid">${t.map(s=>d`<button class="place-button" style="--place-color: ${s.color}" @click=${()=>this.selectPlace(s)}><img src=${s.imageUrl} alt=${s.name} @error=${this.useImageFallback} /><div class="card-copy"><div class="place-name">${s.name}${s.isCustom?d`<span class="custom-badge">Cayden's</span>`:""}</div><div class="place-phrase">${s.phrase}</div></div></button>`)}</div>
      </div>
      ${this.showNewTabModal?d`<div class="modal-overlay" @click=${()=>this.showNewTabModal=!1}><div class="modal" @click=${s=>s.stopPropagation()}><div class="modal-header">Create New Tab</div><input class="modal-input" placeholder="Enter tab name" .value=${this.newTabName} @input=${s=>this.newTabName=s.target.value} @keydown=${s=>s.key==="Enter"?this.createNewTab():s.key==="Escape"?this.showNewTabModal=!1:void 0} autofocus /><div class="modal-buttons"><button class="modal-btn modal-btn-secondary" @click=${()=>this.showNewTabModal=!1}>Cancel</button><button class="modal-btn modal-btn-primary" @click=${this.createNewTab}>Create Tab</button></div></div></div>`:""}
    `}};$e.styles=k`
    :host { display: block; min-height: 100vh; padding: 1.25rem; background: #f6f8fb; color: #243041; }
    .container { max-width: 1180px; margin: 0 auto; }
    h1 { margin: 0 0 0.35rem; color: #243041; font-size: 2rem; }
    .subtitle { margin: 0 0 1rem; color: #596779; }
    .selected-card { display: grid; grid-template-columns: 175px 1fr; gap: 1rem; align-items: center; margin-bottom: 1rem; padding: 0.75rem; background: #243041; color: #fff; border-radius: 0.5rem; border-left: 12px solid var(--place-color); box-shadow: 0 4px 16px rgba(30,42,58,0.12); }
    .selected-card img { width: 175px; height: 115px; object-fit: cover; border-radius: 0.4rem; }
    .selected-name { font-size: 1.65rem; font-weight: 900; }
    .selected-phrase { margin-top: 0.3rem; font-size: 1.05rem; font-weight: 800; color: #d9e2ec; }
    .place-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(175px, 1fr)); gap: 0.9rem; margin-bottom: 1.5rem; }
    .place-button { display: grid; grid-template-rows: 145px auto; min-height: 232px; padding: 0; overflow: hidden; border: 3px solid #d8e0ea; border-bottom: 8px solid var(--place-color); border-radius: 0.5rem; background: #fff; cursor: pointer; text-align: left; box-shadow: 0 3px 12px rgba(30,42,58,0.12); }
    .place-button:hover, .place-button:focus-visible { outline: 4px solid rgba(46,143,116,0.22); border-color: #2e8f74; }
    .place-button img { width: 100%; height: 100%; object-fit: cover; background: #dfe8f1; }
    .card-copy { padding: 0.85rem; }
    .place-name { font-size: 1.15rem; font-weight: 900; color: #243041; }
    .place-phrase { margin-top: 0.25rem; color: #657386; font-size: 0.88rem; font-weight: 800; line-height: 1.3; }
    .tabs-container { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1rem; padding: 0.55rem; background: #e8edf3; border-radius: 0.5rem; }
    .tab-button, .add-tab-btn, .modal-btn { border-radius: 0.4rem; cursor: pointer; font-weight: 800; min-height: 44px; }
    .tab-button { border: 2px solid #c9d4e1; background: #fff; color: #243041; }
    .tab-button.active { background: #243041; border-color: #243041; color: #fff; }
    .add-tab-btn, .modal-btn-primary { border: 0; background: #2e8f74; color: #fff; }
    .add-photos-link { display: inline-flex; align-items: center; gap: 0.4rem; margin-bottom: 1rem; padding: 0.6rem 1rem; border-radius: 0.4rem; background: #edf7f4; color: #1f463b; font-weight: 800; text-decoration: none; border: 2px dashed #2e8f74; }
    .custom-badge { display: inline-block; margin-left: 0.4rem; padding: 0.1rem 0.4rem; border-radius: 0.3rem; background: #2e8f74; color: #fff; font-size: 0.7rem; font-weight: 900; vertical-align: middle; }
    .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 1000; }
    .modal { width: 90%; max-width: 500px; padding: 1.5rem; border-radius: 0.5rem; background: #fff; box-shadow: 0 20px 60px rgba(0,0,0,0.3); }
    .modal-header { margin-bottom: 1rem; font-size: 1.35rem; font-weight: 900; color: #243041; }
    .modal-input { width: 100%; box-sizing: border-box; margin-bottom: 1rem; padding: 0.85rem; border: 2px solid #c9d4e1; border-radius: 0.4rem; font-size: 1rem; }
    .modal-buttons { display: flex; gap: 0.75rem; justify-content: flex-end; }
    .modal-btn-secondary { border: 0; background: #e8edf3; color: #243041; }
    @media (max-width: 640px) { :host { padding: 0.8rem; } h1 { font-size: 1.55rem; } .place-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.65rem; } .place-button { grid-template-rows: 116px auto; min-height: 210px; } .selected-card { grid-template-columns: 1fr; } .selected-card img { width: 100%; height: 160px; } }
  `;He([b()],$e.prototype,"places",2);He([b()],$e.prototype,"selectedPlace",2);He([b()],$e.prototype,"tabs",2);He([b()],$e.prototype,"activeTabId",2);He([b()],$e.prototype,"showNewTabModal",2);He([b()],$e.prototype,"newTabName",2);He([b()],$e.prototype,"customPlaces",2);$e=He([N("app-places")],$e);var Vn=Object.defineProperty,Hn=Object.getOwnPropertyDescriptor,Ae=(e,t,s,i)=>{for(var o=i>1?void 0:i?Hn(t,s):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(o=(i?a(t,s,o):a(o))||o);return i&&o&&Vn(t,s,o),o};let ue=class extends z{constructor(){super(...arguments),this.isPremium=!1,this.activeTier="none",this.selectedTier="learning",this.showPurchaseConfirm=!1,this.purchaseMessage="",this.checkoutError="",this.isCheckingOut=!1,this.playPrices={},this.isRestoring=!1,this.premiumManager=ee.getInstance(),this.stripeApiBase="".replace(/\/$/,""),this.tiers=[{id:"family",name:"Family Photos",price:"$39.99",summary:"Personalize the app with real pictures.",bestFor:"Families who mainly need custom photos.",features:["Upload custom images","Organize photos by category","Use real family, food, toy, and place pictures","Local device storage"]},{id:"learning",name:"Learning Plus",price:"$99.99",summary:"Adds a voice that fits your child.",bestFor:"Daily communication at home and school.",features:["Everything in Family Photos","Choose a preferred device voice","Set a speaking rate across every board"]},{id:"allAccess",name:"All Access",price:"$149.99",summary:"Full feature access for serious long-term use.",bestFor:"Caregivers, therapy teams, and multi-context use.",features:["Everything in Learning Plus","Additional named tabs on every board (Home, Grandma's House)","Export and import custom image backups","Puzzle learning sessions for home, therapy, and school"]}],this.onPremiumChanged=()=>this.refreshPremiumState()}connectedCallback(){super.connectedCallback(),this.refreshPremiumState(),window.addEventListener(Us,this.onPremiumChanged)}disconnectedCallback(){window.removeEventListener(Us,this.onPremiumChanged),super.disconnectedCallback()}async loadPlayPrices(){try{const e=await gn();this.playPrices=Object.fromEntries(e.map(t=>[t.tier,t.priceString]))}catch(e){console.warn("[BILLING] Could not load Play prices",e)}}displayPrice(e){return e.id!=="none"&&this.playPrices[e.id]||e.price}async startPlayPurchase(){if(this.selectedTier==="none")return;const e={none:0,family:1,learning:2,allAccess:3};if(e[this.selectedTier]<=e[this.activeTier]){this.checkoutError="Your current tier already includes this. Choose a higher tier to upgrade.";return}this.checkoutError="",this.isCheckingOut=!0;const t=await vn(this.selectedTier);this.isCheckingOut=!1,t.status==="purchased"?(this.premiumManager.applyStoreTier(t.tier),this.refreshPremiumState(),this.showPurchaseConfirm=!1,this.purchaseMessage=`${this.selectedTierOption.name} is active. Thank you!`):t.status==="pending"?(this.showPurchaseConfirm=!1,this.purchaseMessage="Your payment is processing. Premium unlocks automatically once Google Play confirms it."):t.status==="cancelled"?this.showPurchaseConfirm=!1:this.checkoutError=t.message}async restorePurchases(){this.isRestoring=!0,this.checkoutError="";const e=await this.premiumManager.syncWithPlay();this.isRestoring=!1,this.refreshPremiumState(),this.purchaseMessage=e==="none"?"No purchases found for this Google account.":`${this.tiers.find(t=>t.id===e)?.name??"Premium"} restored.`}refreshPremiumState(){this.isPremium=this.premiumManager.isPremium(),this.activeTier=this.premiumManager.getTier(),this.activeTier!=="none"&&(this.selectedTier=this.activeTier)}get selectedTierOption(){return this.tiers.find(e=>e.id===this.selectedTier)??this.tiers[1]}selectTier(e){e!=="none"&&(this.selectedTier=e)}openPurchaseConfirm(){this.showPurchaseConfirm=!0}cancelPurchase(){this.showPurchaseConfirm=!1}async startStripeCheckout(){if(!this.stripeApiBase){this.checkoutError="Checkout is not available in this build yet. Please contact support.";return}this.checkoutError="",this.isCheckingOut=!0;try{const e=await fetch(`${this.stripeApiBase}/api/create-checkout-session`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tier:this.selectedTier})}),t=await e.json();if(!e.ok||!t.url)throw new Error(t.error||"Unable to start Stripe checkout.");window.location.href=t.url}catch(e){this.checkoutError=e instanceof Error?e.message:"Unable to start Stripe checkout.",this.isCheckingOut=!1}}confirmPurchase(){this.startStripeCheckout()}simulatePurchaseForTesting(){this.premiumManager.simulatePremiumPurchase(this.selectedTier),this.refreshPremiumState(),this.showPurchaseConfirm=!1,this.purchaseMessage=`${this.selectedTierOption.name} is active.`}render(){const e=this.selectedTierOption;return d`
      <div class="container">
        <section class="header">
          <h1>Premium Tiers</h1>
          <p class="subtitle">
            Choose the level that fits the family. These suggested one-time prices keep CaydenJoy below major AAC apps while reflecting serious communication, activity, backup, and caregiver value.
            Early access discounts can be offered without lowering the long-term value of the app.
          </p>
        </section>

        ${this.isPremium?d`
          <div class="status-banner">
            <div>Premium active: ${this.tiers.find(t=>t.id===this.activeTier)?.name??"All Access"}</div>
            <div>${this.purchaseMessage||"Premium features are unlocked for this device."}</div>
          </div>
        `:""}

        <section class="tier-grid" aria-label="Premium tier options">
          ${this.tiers.map(t=>d`
            <article class="tier-card ${this.selectedTier===t.id?"selected":""}">
              <div class="tier-name">${t.name}</div>
              <div>
                <div class="tier-price">${this.displayPrice(t)}</div>
                <div class="one-time">one-time purchase</div>
              </div>
              <div class="tier-summary">${t.summary}</div>
              <div class="best-for">${t.bestFor}</div>
              <ul>
                ${t.features.map(s=>d`<li>${s}</li>`)}
              </ul>
              <button
                class="tier-button ${this.selectedTier===t.id?"selected":""}"
                @click=${()=>this.selectTier(t.id)}
              >
                ${this.selectedTier===t.id?"Selected":"Select"}
              </button>
            </article>
          `)}
        </section>

        <section class="actions">
          <button class="confirm-button" @click=${this.openPurchaseConfirm}>
            Unlock ${e.name}
          </button>
          ${d`<a class="secondary-button" href=${f("upgrade")}>Use Upgrade Code</a>`}
          <a class="secondary-button" href=${f("settings")}>Later</a>
          <div class="note">
            ${this.stripeApiBase?"Secure checkout is handled by Stripe. After payment, CaydenJoy shows the APK download and upgrade key.":"Checkout is not configured for this build."}
          </div>
          ${this.checkoutError?d`<div class="error">${this.checkoutError}</div>`:""}
        </section>

        <section class="feature-panel">
          <h2>Enhanced Premium Value</h2>
          <div class="feature-grid">
            <div class="feature">Real photo uploads for food, people, places, activities, and routines.</div>
            <div class="feature">Custom tabs for communication boards and learning pages.</div>
            <div class="feature">Export/import backup tools for custom image libraries.</div>
            <div class="feature">All Access keeps room for future caregiver and therapy tools.</div>
          </div>
        </section>
      </div>

      ${this.showPurchaseConfirm?d`
        <div class="modal-overlay" @click=${this.cancelPurchase}>
          <div class="modal" @click=${t=>t.stopPropagation()}>
            <h2>Confirm Tier</h2>
            <p><strong>${e.name}</strong> will be purchased for ${this.displayPrice(e)}.</p>
            <p class="note">
              ${this.stripeApiBase?"You will be sent to Stripe Checkout. After payment, your upgrade key and APK download link will be shown.":"Checkout is not configured in this build."}
            </p>
            <div class="modal-buttons">
              <button class="confirm-button" @click=${this.confirmPurchase} ?disabled=${this.isCheckingOut}>
                ${this.isCheckingOut?"Opening Stripe...":this.stripeApiBase?"Continue to Stripe":"Unavailable"}
              </button>
              <button class="secondary-button" @click=${this.cancelPurchase}>Cancel</button>
            </div>
            ${""}
          </div>
        </div>
      `:""}
    `}};ue.styles=k`
    :host {
      display: block;
      min-height: 100vh;
      padding: 1.25rem;
      background: #f6f8fb;
      color: #243041;
    }

    .container {
      max-width: 1180px;
      margin: 0 auto;
    }

    .header {
      margin-bottom: 1rem;
    }

    h1 {
      margin: 0;
      color: #243041;
      font-size: 2rem;
      line-height: 1.1;
    }

    .subtitle {
      margin: 0.4rem 0 0;
      max-width: 780px;
      color: #596779;
      font-size: 1.05rem;
      line-height: 1.45;
    }

    .status-banner {
      display: grid;
      gap: 0.4rem;
      margin: 1rem 0;
      padding: 1rem;
      border-left: 8px solid #2e8f74;
      border-radius: 0.5rem;
      background: #edf7f4;
      color: #1f463b;
      font-weight: 800;
    }

    .tier-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 1rem;
      margin: 1rem 0;
    }

    .tier-card {
      display: grid;
      gap: 0.75rem;
      align-content: start;
      min-height: 520px;
      padding: 1rem;
      border: 3px solid #d8e0ea;
      border-radius: 0.5rem;
      background: #ffffff;
      box-shadow: 0 4px 16px rgba(30, 42, 58, 0.1);
    }

    .tier-card.selected {
      border-color: #2e8f74;
      box-shadow: 0 0 0 5px rgba(46, 143, 116, 0.18);
    }

    .tier-name {
      font-size: 1.35rem;
      font-weight: 900;
      color: #243041;
    }

    .tier-price {
      font-size: 2.4rem;
      line-height: 1;
      font-weight: 900;
      color: #1f7a8c;
    }

    .one-time {
      color: #657386;
      font-weight: 800;
    }

    .tier-summary {
      color: #243041;
      font-weight: 800;
      line-height: 1.35;
    }

    .best-for {
      padding: 0.75rem;
      border-radius: 0.5rem;
      background: #edf7f4;
      color: #1f463b;
      font-weight: 800;
      line-height: 1.35;
    }

    ul {
      margin: 0;
      padding-left: 1.2rem;
      color: #4e5d70;
      line-height: 1.45;
      font-weight: 700;
    }

    li {
      margin-bottom: 0.45rem;
    }

    .tier-button,
    .secondary-button,
    .confirm-button {
      min-height: 52px;
      border: 0;
      border-radius: 0.5rem;
      cursor: pointer;
      font-weight: 900;
      font-size: 1rem;
    }

    .tier-button {
      align-self: end;
      margin-top: auto;
      background: #243041;
      color: #ffffff;
    }

    .tier-button.selected {
      background: #2e8f74;
    }

    .actions {
      display: flex;
      gap: 0.75rem;
      flex-wrap: wrap;
      align-items: center;
      margin: 1rem 0;
      padding: 1rem;
      border-radius: 0.5rem;
      background: #ffffff;
      border: 1px solid #d8e0ea;
    }

    .confirm-button {
      min-width: 220px;
      padding: 0.75rem 1rem;
      background: #2e8f74;
      color: #ffffff;
    }

    .secondary-button {
      padding: 0.75rem 1rem;
      background: #e8edf3;
      color: #243041;
    }

    .note {
      color: #657386;
      font-weight: 700;
      line-height: 1.4;
    }

    .error {
      width: 100%;
      padding: 0.85rem;
      border-radius: 0.5rem;
      background: #fff1f2;
      color: #9f1239;
      font-weight: 800;
      line-height: 1.4;
    }

    .feature-panel {
      margin-top: 1rem;
      padding: 1rem;
      border-radius: 0.5rem;
      background: #ffffff;
      border: 1px solid #d8e0ea;
    }

    .feature-panel h2 {
      margin: 0 0 0.75rem;
      color: #243041;
      font-size: 1.3rem;
    }

    .feature-grid {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 0.75rem;
    }

    .feature {
      padding: 0.85rem;
      border-radius: 0.5rem;
      background: #f8fafc;
      border-left: 6px solid #1f7a8c;
      color: #243041;
      font-weight: 800;
      line-height: 1.35;
    }

    .modal-overlay {
      position: fixed;
      inset: 0;
      display: grid;
      place-items: center;
      padding: 1rem;
      background: rgba(0, 0, 0, 0.55);
      z-index: 1000;
    }

    .modal {
      width: min(520px, 100%);
      padding: 1.25rem;
      border-radius: 0.5rem;
      background: #ffffff;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.28);
    }

    .modal h2 {
      margin: 0 0 0.5rem;
      color: #243041;
    }

    .modal-buttons {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.75rem;
      margin-top: 1rem;
    }

    @media (max-width: 900px) {
      .tier-grid,
      .feature-grid {
        grid-template-columns: 1fr;
      }

      .tier-card {
        min-height: auto;
      }
    }
  `;Ae([b()],ue.prototype,"isPremium",2);Ae([b()],ue.prototype,"activeTier",2);Ae([b()],ue.prototype,"selectedTier",2);Ae([b()],ue.prototype,"showPurchaseConfirm",2);Ae([b()],ue.prototype,"purchaseMessage",2);Ae([b()],ue.prototype,"checkoutError",2);Ae([b()],ue.prototype,"isCheckingOut",2);Ae([b()],ue.prototype,"playPrices",2);Ae([b()],ue.prototype,"isRestoring",2);ue=Ae([N("app-premium")],ue);var Wn=Object.defineProperty,Yn=Object.getOwnPropertyDescriptor,We=(e,t,s,i)=>{for(var o=i>1?void 0:i?Yn(t,s):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(o=(i?a(t,s,o):a(o))||o);return i&&o&&Wn(t,s,o),o};let he=class extends z{constructor(){super(...arguments),this.selectedCategory="foods",this.selectedFile=null,this.imageName="",this.images=[],this.isPremium=!1,this.storageInfo={used:0,max:0,percentage:0},this.uploadMessage="",this.premiumManager=ee.getInstance(),this.imagesManager=ie.getInstance(),this.fileInputRef=null,this.defaultCategory="foods"}connectedCallback(){super.connectedCallback(),this.isPremium=this.premiumManager.canUseCustomImages(),this.loadImages(),this.applyCategoryFromUrl()}applyCategoryFromUrl(){try{const t=new URLSearchParams(window.location.search).get("category");t&&he.VALID_CATEGORIES.includes(t)&&(this.selectedCategory=t,this.defaultCategory=t)}catch{}}loadImages(){this.images=this.imagesManager.getAllImages(),this.storageInfo=this.imagesManager.getStorageInfo()}onFileSelected(e){const s=e.target.files?.[0];if(s){if(!s.type.startsWith("image/")){this.uploadMessage="Please select an image file";return}if(s.size>500*1024){this.uploadMessage="Image must be smaller than 500KB";return}this.selectedFile=s,this.uploadMessage=""}}readFileAsDataUrl(e){return new Promise((t,s)=>{const i=new FileReader;i.onload=()=>t(i.result),i.onerror=s,i.readAsDataURL(e)})}chooseImage(){this.shadowRoot?.querySelector("#custom-image-file")?.click()}async uploadImage(){if(!this.selectedFile||!this.imageName){this.uploadMessage="Please select an image and enter a name";return}try{const e=await this.readFileAsDataUrl(this.selectedFile);this.imagesManager.addImage(this.selectedCategory,this.imageName,e)?(this.uploadMessage=`✅ Image "${this.imageName}" uploaded successfully!`,this.selectedFile=null,this.imageName="",this.selectedCategory=this.defaultCategory,this.fileInputRef&&(this.fileInputRef.value=""),this.loadImages(),setTimeout(()=>{this.uploadMessage=""},3e3)):this.uploadMessage="❌ Failed to upload image"}catch(e){this.uploadMessage=`❌ Error: ${e instanceof Error?e.message:"Unknown error"}`}}deleteImage(e){confirm("Delete this image?")&&(this.imagesManager.deleteImage(e),this.loadImages())}deleteCategory(){confirm(`Delete all images in ${this.selectedCategory}?`)&&(this.imagesManager.deleteByCategory(this.selectedCategory),this.loadImages())}exportImages(){const e=this.imagesManager.exportData(),t=new Blob([e],{type:"application/json"}),s=URL.createObjectURL(t),i=document.createElement("a");i.href=s,i.download=`caydenjoy-images-${new Date().toISOString().slice(0,10)}.json`,i.click(),URL.revokeObjectURL(s),this.uploadMessage="Custom images backup exported"}chooseImportFile(){this.shadowRoot?.querySelector("#custom-images-import")?.click()}async importImages(e){const t=e.target,s=t.files?.[0];if(s)try{const i=await s.text();this.imagesManager.importData(i)?(this.loadImages(),this.uploadMessage="Custom images backup imported"):this.uploadMessage="Could not import this backup file"}catch(i){this.uploadMessage=`Import failed: ${i instanceof Error?i.message:"Unknown error"}`}finally{t.value=""}}clearAll(){confirm("Delete ALL custom images? This cannot be undone.")&&(this.imagesManager.clearAll(),this.loadImages(),this.uploadMessage="✅ All images cleared",setTimeout(()=>{this.uploadMessage=""},2e3))}render(){const e=this.premiumManager.canUseCloudBackup(),t=this.imagesManager.getImagesByCategory(this.selectedCategory);return this.isPremium?d`
      <div class="container">
        <h1>🖼️ Custom Images</h1>

              <div class="upload-section">
                <h2>📸 Upload New Image</h2>

                <label>Category:</label>
                <select class="category-select" .value="${this.selectedCategory}" @change="${s=>{this.selectedCategory=s.target.value}}">
                  <option value="communication">Communication</option>
                  <option value="foods">Foods</option>
                  <option value="colors">Colors</option>
                  <option value="places">Places</option>
                  <option value="family">Family</option>
                  <option value="numbers">Numbers</option>
                  <option value="objects">Puzzle Objects</option>
                  <option value="quick">Quick Buttons</option>
                  <option value="activities">Activities</option>
                  <option value="other">Other</option>
                </select>

                <label>Image Name:</label>
                <input
                  type="text"
                  class="name-input"
                  placeholder="e.g., Daddy's Pizza"
                  .value="${this.imageName}"
                  @input="${s=>{this.imageName=s.target.value}}"
                />

                <div class="file-input-wrapper">
                  <button type="button" class="file-input-label" @click="${this.chooseImage}">
                    Choose Image
                  </button>
                  <input
                    id="custom-image-file"
                    type="file"
                    accept="image/*"
                    class="file-input-hidden"
                    @change="${this.onFileSelected.bind(this)}"
                    ${s=>{this.fileInputRef=s}}
                  />
                </div>

                ${this.selectedFile?d`<div class="file-name">✓ ${this.selectedFile.name}</div>`:""}

                ${this.uploadMessage?d`<div class="message ${this.uploadMessage.includes("✅")?"success":"error"}">
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
                ${t.length===0?d`<div class="empty-message">No images in this category yet</div>`:d`
                      <div class="images-grid">
                        ${t.map(s=>d`
                              <div class="image-card">
                                <img src="${s.dataUrl}" alt="${s.name}" />
                                <div class="image-card-name">${s.name}</div>
                                <div class="image-card-actions">
                                  <button class="delete-btn" @click="${()=>this.deleteImage(s.id)}">
                                    🗑️ Delete
                                  </button>
                                </div>
                              </div>
                            `)}
                      </div>
                    `}
              </div>

              <div class="button-group">
                ${e?d`
                  <button class="btn btn-secondary" @click="${this.exportImages}">
                    Export Backup
                  </button>
                  <button class="btn btn-secondary" @click="${this.chooseImportFile}">
                    Import Backup
                  </button>
                  <input
                    id="custom-images-import"
                    type="file"
                    accept="application/json,.json"
                    class="file-input-hidden"
                    @change="${this.importImages}"
                  />
                `:d`<a class="btn btn-secondary" href=${f("premium")}>Unlock Backups</a>`}
                <button class="btn btn-secondary" @click="${this.deleteCategory}">
                  🗑️ Delete All in ${this.selectedCategory}
                </button>
                <button class="btn btn-danger" @click="${this.clearAll}">
                  ⚠️ Clear All Images
                </button>
              </div>
      </div>
    `:d`
        <div class="container">
          <h1>🖼️ Custom Images</h1>
          <div class="locked-message">
            <p>Family Photos unlocks personal image boards for communication, foods, colors, places, and activities.</p>
            <a href=${f("premium")}>View Family Photos</a>
          </div>
        </div>
      `}};he.styles=k`
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
  `;he.VALID_CATEGORIES=["communication","foods","colors","places","family","numbers","objects","quick","activities","other"];We([b()],he.prototype,"selectedCategory",2);We([b()],he.prototype,"selectedFile",2);We([b()],he.prototype,"imageName",2);We([b()],he.prototype,"images",2);We([b()],he.prototype,"isPremium",2);We([b()],he.prototype,"storageInfo",2);We([b()],he.prototype,"uploadMessage",2);he=We([N("app-custom-images")],he);var Kn=Object.defineProperty,Jn=Object.getOwnPropertyDescriptor,To=(e,t,s,i)=>{for(var o=i>1?void 0:i?Jn(t,s):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(o=(i?a(t,s,o):a(o))||o);return i&&o&&Kn(t,s,o),o};let cs=class extends z{constructor(){super(...arguments),this.summary=se.getInstance().getSummary(),this.progressManager=se.getInstance()}connectedCallback(){super.connectedCallback(),this.refresh()}refresh(){this.summary=this.progressManager.getSummary()}clearProgress(){confirm("Clear local progress history?")&&(this.progressManager.clear(),this.refresh())}formatTime(e){return new Date(e).toLocaleString()}render(){return d`
      <div class="container">
        <h1>Progress Dashboard</h1>
        <p class="subtitle">
          Local caregiver view of recent communication and activity use. This stays on the device and is not sent anywhere.
        </p>

        <section class="stats">
          <div class="stat">
            <div class="stat-value">${this.summary.todayEvents}</div>
            <div class="stat-label">Today</div>
          </div>
          <div class="stat">
            <div class="stat-value">${this.summary.totalEvents}</div>
            <div class="stat-label">Total</div>
          </div>
          <div class="stat">
            <div class="stat-value">${this.summary.typeCounts.communication}</div>
            <div class="stat-label">Communication</div>
          </div>
          <div class="stat">
            <div class="stat-value">${this.summary.typeCounts.activity}</div>
            <div class="stat-label">Activities</div>
          </div>
        </section>

        <section class="grid">
          <div class="panel">
            <h2>Most Used</h2>
            ${this.summary.topLabels.length===0?d`<div class="empty">No use recorded yet.</div>`:this.summary.topLabels.map(e=>d`
                  <div class="row">
                    <span>${e.label}</span>
                    <span>${e.count}</span>
                  </div>
                `)}
          </div>

          <div class="panel">
            <h2>Recent Activity</h2>
            <div class="recent">
              ${this.summary.recentEvents.length===0?d`<div class="empty">Tap communication or activity cards to begin collecting local progress.</div>`:this.summary.recentEvents.map(e=>d`
                    <div class="event">
                      <div class="event-label">${e.label}</div>
                      <div class="event-meta">${e.type} - ${this.formatTime(e.createdAt)}</div>
                      ${e.detail?d`<div class="event-meta">${e.detail}</div>`:""}
                    </div>
                  `)}
            </div>
          </div>
        </section>

        <div class="actions">
          <button @click=${this.refresh}>Refresh</button>
          <button class="danger" @click=${this.clearProgress}>Clear Progress</button>
        </div>
      </div>
    `}};cs.styles=k`
    :host {
      display: block;
      min-height: 100vh;
      padding: 1.25rem;
      background: #f6f8fb;
      color: #243041;
    }

    .container {
      max-width: 1180px;
      margin: 0 auto;
    }

    h1 {
      margin: 0;
      color: #243041;
      font-size: 2rem;
      line-height: 1.1;
    }

    .subtitle {
      margin: 0.4rem 0 1rem;
      color: #596779;
      line-height: 1.45;
    }

    .stats {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 0.8rem;
      margin-bottom: 1rem;
    }

    .stat,
    .panel {
      background: #ffffff;
      border: 1px solid #d8e0ea;
      border-radius: 0.5rem;
      box-shadow: 0 4px 16px rgba(30, 42, 58, 0.08);
    }

    .stat {
      padding: 1rem;
    }

    .stat-value {
      font-size: 2rem;
      font-weight: 900;
      color: #1f7a8c;
    }

    .stat-label {
      color: #596779;
      font-weight: 800;
    }

    .grid {
      display: grid;
      grid-template-columns: 0.8fr 1.2fr;
      gap: 1rem;
    }

    .panel {
      padding: 1rem;
    }

    h2 {
      margin: 0 0 0.75rem;
      color: #243041;
      font-size: 1.25rem;
    }

    .row {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 0.75rem;
      padding: 0.65rem 0;
      border-bottom: 1px solid #e8edf3;
      color: #334155;
      font-weight: 800;
    }

    .row:last-child {
      border-bottom: 0;
    }

    .recent {
      display: grid;
      gap: 0.55rem;
    }

    .event {
      padding: 0.75rem;
      border-left: 6px solid #2e8f74;
      border-radius: 0.5rem;
      background: #f8fafc;
    }

    .event-label {
      font-weight: 900;
      color: #243041;
    }

    .event-meta {
      margin-top: 0.25rem;
      color: #657386;
      font-size: 0.9rem;
      font-weight: 700;
    }

    .empty {
      padding: 1rem;
      background: #edf7f4;
      border-radius: 0.5rem;
      color: #1f463b;
      font-weight: 800;
    }

    .actions {
      display: flex;
      gap: 0.75rem;
      flex-wrap: wrap;
      margin-top: 1rem;
    }

    button {
      min-height: 52px;
      border: 0;
      border-radius: 0.5rem;
      padding: 0.75rem 1rem;
      cursor: pointer;
      font-weight: 900;
      background: #e8edf3;
      color: #243041;
    }

    .danger {
      background: #c0392b;
      color: #ffffff;
    }

    @media (max-width: 800px) {
      .stats,
      .grid {
        grid-template-columns: 1fr;
      }
    }
  `;To([b()],cs.prototype,"summary",2);cs=To([N("app-progress")],cs);const Jt="caydenjoy_feedback_items",Gn=200;class Qe{static getInstance(){return Qe.instance||(Qe.instance=new Qe),Qe.instance}getItems(){try{const t=localStorage.getItem(Jt);return t?JSON.parse(t):[]}catch(t){return console.error("Could not load feedback:",t),[]}}addItem(t,s,i,o){const r={id:`feedback_${Date.now()}_${Math.random().toString(36).slice(2,8)}`,type:t,title:s,details:i,contact:o,createdAt:Date.now()},a=[r,...this.getItems()].slice(0,Gn);return localStorage.setItem(Jt,JSON.stringify(a)),r}deleteItem(t){const s=this.getItems().filter(i=>i.id!==t);localStorage.setItem(Jt,JSON.stringify(s))}clear(){localStorage.removeItem(Jt)}exportData(){return JSON.stringify(this.getItems(),null,2)}}Qe.getInstance();var Qn=Object.defineProperty,Xn=Object.getOwnPropertyDescriptor,rt=(e,t,s,i)=>{for(var o=i>1?void 0:i?Xn(t,s):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(o=(i?a(t,s,o):a(o))||o);return i&&o&&Qn(t,s,o),o};let ze=class extends z{constructor(){super(...arguments),this.type="wishlist",this.feedbackTitle="",this.details="",this.contact="",this.message="",this.items=[],this.feedbackManager=Qe.getInstance()}connectedCallback(){super.connectedCallback(),this.refresh()}refresh(){this.items=this.feedbackManager.getItems()}submitFeedback(){if(!this.feedbackTitle.trim()||!this.details.trim()){this.message="Please add a short title and details.";return}this.feedbackManager.addItem(this.type,this.feedbackTitle.trim(),this.details.trim(),this.contact.trim()),this.feedbackTitle="",this.details="",this.contact="",this.message="Thank you. The idea was saved on this device.",this.refresh()}deleteItem(e){this.feedbackManager.deleteItem(e),this.refresh()}exportFeedback(){const e=new Blob([this.feedbackManager.exportData()],{type:"application/json"}),t=URL.createObjectURL(e),s=document.createElement("a");s.href=t,s.download=`caydenjoy-feedback-${new Date().toISOString().slice(0,10)}.json`,s.click(),URL.revokeObjectURL(t),this.message="Feedback export created."}clearFeedback(){confirm("Clear all saved feedback and wishlist items?")&&(this.feedbackManager.clear(),this.refresh(),this.message="Feedback cleared.")}formatTime(e){return new Date(e).toLocaleString()}render(){return d`
      <div class="container">
        <h1>Feedback & Wishlist</h1>
        <p class="subtitle">
          Save caregiver ideas, improvement requests, success stories, and bug reports. Items stay local until exported.
        </p>

        <section class="grid">
          <div class="panel">
            <label for="feedback-type">Type</label>
            <select
              id="feedback-type"
              .value=${this.type}
              @change=${e=>this.type=e.target.value}
            >
              <option value="wishlist">Wishlist</option>
              <option value="improvement">Improvement</option>
              <option value="bug">Bug</option>
              <option value="success">Success Story</option>
            </select>

            <label for="feedback-title">Short title</label>
            <input
              id="feedback-title"
              .value=${this.feedbackTitle}
              placeholder="Example: Add bedtime routine pictures"
              @input=${e=>this.feedbackTitle=e.target.value}
            />

            <label for="feedback-details">Details</label>
            <textarea
              id="feedback-details"
              .value=${this.details}
              placeholder="Tell us what would help, what was confusing, or what worked well."
              @input=${e=>this.details=e.target.value}
            ></textarea>

            <label for="feedback-contact">Contact, optional</label>
            <input
              id="feedback-contact"
              .value=${this.contact}
              placeholder="Email or phone if follow-up is okay"
              @input=${e=>this.contact=e.target.value}
            />

            <div class="buttons">
              <button class="primary" @click=${this.submitFeedback}>Save Feedback</button>
              <button @click=${this.exportFeedback}>Export</button>
              <button class="danger" @click=${this.clearFeedback}>Clear All</button>
            </div>

            ${this.message?d`<div class="message">${this.message}</div>`:""}
          </div>

          <div class="panel">
            <h2>Saved Items</h2>
            <div class="item-list">
              ${this.items.length===0?d`<div class="empty">No feedback saved yet.</div>`:this.items.map(e=>d`
                    <div class="item">
                      <div class="item-title">${e.title}</div>
                      <div class="item-meta">${e.type} - ${this.formatTime(e.createdAt)}</div>
                      <div class="item-details">${e.details}</div>
                      ${e.contact?d`<div class="item-meta">Contact: ${e.contact}</div>`:""}
                      <div class="buttons">
                        <button @click=${()=>this.deleteItem(e.id)}>Delete</button>
                      </div>
                    </div>
                  `)}
            </div>
          </div>
        </section>
      </div>
    `}};ze.styles=k`
    :host {
      display: block;
      min-height: 100vh;
      padding: 1.25rem;
      background: #f6f8fb;
      color: #243041;
    }

    .container {
      max-width: 1080px;
      margin: 0 auto;
    }

    h1 {
      margin: 0;
      color: #243041;
      font-size: 2rem;
      line-height: 1.1;
    }

    .subtitle {
      margin: 0.4rem 0 1rem;
      color: #596779;
      line-height: 1.45;
    }

    .grid {
      display: grid;
      grid-template-columns: 0.9fr 1.1fr;
      gap: 1rem;
    }

    .panel {
      padding: 1rem;
      border: 1px solid #d8e0ea;
      border-radius: 0.5rem;
      background: #ffffff;
      box-shadow: 0 4px 16px rgba(30, 42, 58, 0.08);
    }

    label {
      display: block;
      margin: 0.8rem 0 0.35rem;
      color: #243041;
      font-weight: 900;
    }

    input,
    select,
    textarea {
      width: 100%;
      box-sizing: border-box;
      border: 2px solid #c9d4e1;
      border-radius: 0.5rem;
      padding: 0.85rem;
      font: inherit;
      color: #243041;
      background: #ffffff;
    }

    textarea {
      min-height: 150px;
      resize: vertical;
    }

    .buttons {
      display: flex;
      gap: 0.75rem;
      flex-wrap: wrap;
      margin-top: 1rem;
    }

    button {
      min-height: 52px;
      border: 0;
      border-radius: 0.5rem;
      padding: 0.75rem 1rem;
      cursor: pointer;
      font-weight: 900;
      background: #e8edf3;
      color: #243041;
    }

    .primary {
      background: #2e8f74;
      color: #ffffff;
    }

    .danger {
      background: #c0392b;
      color: #ffffff;
    }

    .message {
      margin-top: 0.75rem;
      padding: 0.75rem;
      border-radius: 0.5rem;
      background: #edf7f4;
      color: #1f463b;
      font-weight: 800;
    }

    .item-list {
      display: grid;
      gap: 0.75rem;
    }

    .item {
      padding: 0.85rem;
      border-left: 7px solid #1f7a8c;
      border-radius: 0.5rem;
      background: #f8fafc;
    }

    .item-title {
      font-weight: 900;
      color: #243041;
    }

    .item-meta {
      margin-top: 0.25rem;
      color: #657386;
      font-size: 0.9rem;
      font-weight: 800;
    }

    .item-details {
      margin-top: 0.55rem;
      color: #334155;
      line-height: 1.45;
    }

    .empty {
      padding: 1rem;
      background: #edf7f4;
      color: #1f463b;
      border-radius: 0.5rem;
      font-weight: 800;
    }

    @media (max-width: 780px) {
      .grid {
        grid-template-columns: 1fr;
      }
    }
  `;rt([b()],ze.prototype,"type",2);rt([b()],ze.prototype,"feedbackTitle",2);rt([b()],ze.prototype,"details",2);rt([b()],ze.prototype,"contact",2);rt([b()],ze.prototype,"message",2);rt([b()],ze.prototype,"items",2);ze=rt([N("app-feedback")],ze);var Zn=Object.getOwnPropertyDescriptor,el=(e,t,s,i)=>{for(var o=i>1?void 0:i?Zn(t,s):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(o=a(o)||o);return o};let Bs=class extends z{render(){return d`
      <app-header title="Documentation" enableBack></app-header>

      <main>
        <h1>CaydenJoy Documentation</h1>
        <p class="lead">
          Quick reference for caregivers setting up communication, realistic images,
          activity sessions, premium access, and upgrade keys.
        </p>

        <div class="grid">
          <sl-card>
            <h2>Daily Communication</h2>
            <p>
              Start with core needs like help, bathroom, break, stop, food, places,
              and familiar people. Keep the first boards simple and predictable.
            </p>
            <sl-button href="${f()}" variant="primary">Open Board</sl-button>
          </sl-card>

          <sl-card>
            <h2>Real Photos</h2>
            <p>
              Add family, food, classroom, therapy, and home photos so the child
              recognizes real objects from daily life.
            </p>
            <sl-button href="${f("custom-images")}" variant="primary">Manage Photos</sl-button>
          </sl-card>

          <sl-card>
            <h2>Activity Sessions</h2>
            <p>
              Use choice, matching, routine, and puzzle activities during learning
              sessions. Safety words stay available while the child works.
            </p>
            <sl-button href="${f("family-puzzle")}" variant="primary">Start Activities</sl-button>
          </sl-card>

          ${d`<sl-card>
            <h2>APK Upgrades</h2>
            <p>
              Families can unlock paid tiers with a one-time upgrade key after
              purchase. Keep generated keys in your private sales records.
            </p>
            <sl-button href="${f("upgrade")}" variant="primary">Open Upgrade</sl-button>
          </sl-card>

          <sl-card>
            <h2>Download And Install</h2>
            <p>
              Share one link with buyers so they can download CaydenJoy on Android,
              then return to redeem their upgrade key.
            </p>
            <sl-button href="${f("download")}" variant="primary">Open Download Page</sl-button>
          </sl-card>`}
        </div>

        <div class="actions">
          <sl-button href="${f("faq")}" variant="default">FAQ</sl-button>
          <sl-button href="${f("feedback")}" variant="default">Feedback</sl-button>
        </div>
      </main>
    `}};Bs.styles=[Be,k`
      main {
        max-width: 900px;
        margin: 0 auto;
        padding: 24px;
        color: #172033;
      }

      h1 {
        color: #172033;
      }

      .lead {
        color: #334155;
        font-size: 18px;
        line-height: 1.6;
      }

      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: 16px;
        margin-top: 24px;
      }

      sl-card::part(base) {
        background: #ffffff;
        border: 1px solid #d9e2ef;
        border-radius: 10px;
        color: #172033;
        box-shadow: 0 8px 20px rgba(31, 41, 55, 0.08);
      }

      sl-card::part(body) {
        color: #172033;
      }

      sl-card h2 {
        margin-top: 0;
        color: #243b6b;
      }

      sl-card p {
        color: #263241;
        line-height: 1.5;
      }

      .actions {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin-top: 28px;
      }
    `];Bs=el([N("app-documentation")],Bs);var tl=Object.getOwnPropertyDescriptor,sl=(e,t,s,i)=>{for(var o=i>1?void 0:i?tl(t,s):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(o=a(o)||o);return o};let js=class extends z{render(){return d`
      <app-header title="Privacy Policy" enableBack></app-header>

      <main>
        <h1>Privacy Policy</h1>
        <p>Last updated: June 5, 2026</p>

        <sl-card>
          <h2>Privacy-first design</h2>
          <p>
            CaydenJoy is designed for children and caregivers. Communication
            boards, custom images, progress, and feedback are stored locally on
            the device unless a caregiver exports or shares them.
          </p>
        </sl-card>

        <sl-card>
          <h2>Information stored by the app</h2>
          <ul>
            <li>Custom communication photos and labels added by a caregiver.</li>
            <li>Local progress events used for the caregiver dashboard.</li>
            <li>Feedback and wishlist notes saved inside the app.</li>
            <li>Upgrade tier status and redeemed upgrade key records.</li>
          </ul>
        </sl-card>

        <sl-card>
          <h2>Caregiver control</h2>
          <p>
            Caregivers can export, import, or clear supported local data from
            the related pages. Do not upload private child photos to public
            websites or shared repositories.
          </p>
        </sl-card>

        <sl-button href="${f("contact")}" variant="primary">Contact Support</sl-button>
      </main>
    `}};js.styles=[Be,k`
      main {
        max-width: 820px;
        margin: 0 auto;
        padding: 24px;
        color: #172033;
      }

      h1 {
        color: #172033;
      }

      main > p {
        color: #334155;
      }

      sl-card {
        margin-bottom: 16px;
      }

      sl-card::part(base) {
        background: #ffffff;
        border: 1px solid #d9e2ef;
        border-radius: 10px;
        color: #172033;
        box-shadow: 0 8px 20px rgba(31, 41, 55, 0.08);
      }

      sl-card::part(body) {
        color: #172033;
      }

      h2 {
        margin-top: 0;
        color: #243b6b;
      }

      p,
      li {
        color: #263241;
        line-height: 1.6;
      }
    `];js=sl([N("app-privacy")],js);var il=Object.getOwnPropertyDescriptor,ol=(e,t,s,i)=>{for(var o=i>1?void 0:i?il(t,s):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(o=a(o)||o);return o};let qs=class extends z{render(){return d`
      <app-header title="Terms" enableBack></app-header>

      <main>
        <h1>Terms of Service</h1>
        <p>Last updated: June 5, 2026</p>

        <sl-card>
          <h2>Caregiver responsibility</h2>
          <p>
            CaydenJoy supports communication, learning, and daily routines. It
            does not replace professional medical, speech therapy, behavioral,
            emergency, or educational advice.
          </p>
        </sl-card>

        <sl-card>
          <h2>Safe use</h2>
          <ul>
            <li>Use the app with adult supervision when needed.</li>
            <li>Keep emergency care options outside the app available.</li>
            <li>Only add photos and labels you have permission to use.</li>
            <li>Protect upgrade keys and purchase records.</li>
          </ul>
        </sl-card>

        <sl-card>
          <h2>Purchases and upgrades</h2>
          <p>
            Premium tiers unlock additional caregiver tools. APK upgrade keys
            are intended for the purchaser and should not be publicly shared.
          </p>
        </sl-card>

        <sl-button href="${f("premium")}" variant="primary">View Premium Tiers</sl-button>
      </main>
    `}};qs.styles=[Be,k`
      main {
        max-width: 820px;
        margin: 0 auto;
        padding: 24px;
        color: #172033;
      }

      h1 {
        color: #172033;
      }

      main > p {
        color: #334155;
      }

      sl-card {
        margin-bottom: 16px;
      }

      sl-card::part(base) {
        background: #ffffff;
        border: 1px solid #d9e2ef;
        border-radius: 10px;
        color: #172033;
        box-shadow: 0 8px 20px rgba(31, 41, 55, 0.08);
      }

      sl-card::part(body) {
        color: #172033;
      }

      h2 {
        margin-top: 0;
        color: #243b6b;
      }

      p,
      li {
        color: #263241;
        line-height: 1.6;
      }
    `];qs=ol([N("app-terms")],qs);var rl=Object.getOwnPropertyDescriptor,al=(e,t,s,i)=>{for(var o=i>1?void 0:i?rl(t,s):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(o=a(o)||o);return o};let Vs=class extends z{render(){return d`
      <app-header title="License" enableBack></app-header>

      <main>
        <h1>License and Upgrade Access</h1>

        <sl-card>
          <h2>Family use</h2>
          <p>
            CaydenJoy is built for caregiver-supported communication and learning.
            Keep private family images, child data, and purchase keys protected.
          </p>
        </sl-card>

        <sl-card>
          <h2>Symbol credits</h2>
          <p>
            Some core-word icons in the communication bar are
            <a href="https://mulberrysymbols.org" target="_blank" rel="noopener noreferrer">Mulberry Symbols</a>
            by Steve Lee, licensed under
            <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>.
            See mulberrysymbols.org for the full symbol set and license terms.
          </p>
        </sl-card>

        ${d`<sl-card>
          <h2>Upgrade keys</h2>
          <ul>
            <li>Family Photos keys start with CJF.</li>
            <li>Learning Plus keys start with CJL.</li>
            <li>All Access keys start with CJA.</li>
          </ul>
          <p>
            Keys are marked used on the installed device after redemption. For
            global one-time enforcement, connect purchases to a server or Google
            Play Billing before large public sales.
          </p>
        </sl-card>

        <sl-button href="${f("upgrade")}" variant="primary">Redeem Upgrade Key</sl-button>`}
      </main>
    `}};Vs.styles=[Be,k`
      main {
        max-width: 820px;
        margin: 0 auto;
        padding: 24px;
        color: #172033;
      }

      h1 {
        color: #172033;
      }

      sl-card {
        margin-bottom: 16px;
      }

      sl-card::part(base) {
        background: #ffffff;
        border: 1px solid #d9e2ef;
        border-radius: 10px;
        color: #172033;
        box-shadow: 0 8px 20px rgba(31, 41, 55, 0.08);
      }

      sl-card::part(body) {
        color: #172033;
      }

      h2 {
        margin-top: 0;
        color: #243b6b;
      }

      p,
      li {
        color: #263241;
        line-height: 1.6;
      }
    `];Vs=al([N("app-license")],Vs);globalThis.URLPattern||await lt(()=>import("./index-DkuV2QLQ.js"),[]);const nl="/CaydenJoy/",ll=[{path:f("upgrade"),title:"Upgrade",plugins:[Qt(()=>lt(()=>import("./app-upgrade-Cw8-HkSl.js"),[]))],render:()=>d`<app-upgrade></app-upgrade>`},{path:f("download"),title:"Download APK",plugins:[Qt(()=>lt(()=>import("./app-download-CHzhliaa.js"),[]))],render:()=>d`<app-download></app-download>`},{path:f("payment-success"),title:"Payment Complete",plugins:[Qt(()=>lt(()=>import("./app-payment-success-CUUswCCr.js"),[]))],render:()=>d`<app-payment-success></app-payment-success>`}],cl=[],bl=new mr({routes:[{path:f(),title:"Communication",render:()=>d`<app-communication></app-communication>`},{path:f("home"),title:"Home",render:()=>d`<app-home></app-home>`},{path:f("home-enhanced"),title:"Quick Communication",render:()=>d`<app-home-enhanced></app-home-enhanced>`},{path:f("services"),title:"Services",render:()=>d`<app-services></app-services>`},{path:f("contact"),title:"Contact",render:()=>d`<app-contact></app-contact>`},{path:f("settings"),title:"Settings",render:()=>d`<app-settings></app-settings>`},{path:f("faq"),title:"FAQ",render:()=>d`<app-faq></app-faq>`},{path:f("family-puzzle"),title:"Activity Sessions",render:()=>d`<app-family-puzzle></app-family-puzzle>`},{path:f("foods"),title:"Foods",render:()=>d`<app-foods-enhanced></app-foods-enhanced>`},{path:f("colors"),title:"Colors",render:()=>d`<app-colors></app-colors>`},{path:f("numbers"),title:"Numbers",render:()=>d`<app-numbers></app-numbers>`},{path:f("places"),title:"Places",render:()=>d`<app-places></app-places>`},{path:f("premium"),title:"Premium",render:()=>d`<app-premium></app-premium>`},{path:f("custom-images"),title:"Custom Images",render:()=>d`<app-custom-images></app-custom-images>`},...ll,...cl,{path:f("progress"),title:"Progress Dashboard",render:()=>d`<app-progress></app-progress>`},{path:f("feedback"),title:"Feedback & Wishlist",render:()=>d`<app-feedback></app-feedback>`},{path:f("documentation"),title:"Documentation",render:()=>d`<app-documentation></app-documentation>`},{path:f("privacy"),title:"Privacy Policy",render:()=>d`<app-privacy></app-privacy>`},{path:f("terms"),title:"Terms of Service",render:()=>d`<app-terms></app-terms>`},{path:f("license"),title:"License",render:()=>d`<app-license></app-license>`},{path:f("about"),title:"About",plugins:[Qt(()=>lt(()=>import("./app-about-Bs73huRX.js"),[]))],render:()=>d`<app-about></app-about>`}]});function f(e){let t=nl;return e&&(t=t+e),t}var dl=k`
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
`,qt=class extends j{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return d`
      <span
        part="base"
        class=${W({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};qt.styles=[K,dl];n([l({reflect:!0})],qt.prototype,"variant",2);n([l({type:Boolean,reflect:!0})],qt.prototype,"pill",2);n([l({type:Boolean,reflect:!0})],qt.prototype,"pulse",2);qt.define("sl-badge");var ul=Object.defineProperty,hl=Object.getOwnPropertyDescriptor,mi=(e,t,s,i)=>{for(var o=i>1?void 0:i?hl(t,s):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(o=(i?a(t,s,o):a(o))||o);return i&&o&&ul(t,s,o),o};let Rt=class extends z{constructor(){super(...arguments),this.message="CaydenJoy",this.isOnline=navigator.onLine,this.accessibilityManager=Z.getInstance()}firstUpdated(){globalThis.addEventListener("online",()=>{this.isOnline=!0}),globalThis.addEventListener("offline",()=>{this.isOnline=!1})}speak(e){this.accessibilityManager.speakNow(e,.9)}render(){return d`
      <app-header></app-header>

      <main>
        <section class="intro">
          <div class="status-row">
            <h1>${this.message}</h1>
            ${this.isOnline?d`<sl-badge variant="success">Online</sl-badge>`:d`<sl-badge variant="warning">Offline</sl-badge>`}
          </div>
          <p class="lead">
            A photo-first communication and activity app for daily needs, choices, matching,
            routines, and therapy-style sessions.
          </p>
        </section>

        <div class="urgent-grid" aria-label="Always available communication buttons">
          <button class="urgent help" @click=${()=>this.speak("Help please.")}>Help</button>
          <button class="urgent bathroom" @click=${()=>this.speak("I need the bathroom.")}>Bathroom</button>
          <button class="urgent break" @click=${()=>this.speak("I need a break.")}>Break</button>
          <button class="urgent stop" @click=${()=>this.speak("Stop.")}>Stop</button>
        </div>

        <section class="feature-grid" aria-label="Main app areas">
          <a class="feature" href=${f("family-puzzle")}>
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=500&q=80"
              alt="Child activity table"
            />
            <div class="feature-copy">
              <div class="feature-title">Activity Sessions</div>
              <div class="feature-text">Photo choices, matching, routine sequencing, and simple puzzle work.</div>
            </div>
          </a>

          <a class="feature" href=${f()}>
            <img
              src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=500&q=80"
              alt="Communication cards"
            />
            <div class="feature-copy">
              <div class="feature-title">Communication Board</div>
              <div class="feature-text">Large request buttons with speech for daily needs and sensory support.</div>
            </div>
          </a>

          ${d`<a class="feature" href=${f("download")}>
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=500&q=80"
              alt="Android app download"
            />
            <div class="feature-copy">
              <div class="feature-title">Download Android App</div>
              <div class="feature-text">Open the buyer download page for the CaydenJoy APK and install instructions.</div>
            </div>
          </a>`}

          <a class="feature" href=${f("custom-images")}>
            <img
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=500&q=80"
              alt="Camera for custom photos"
            />
            <div class="feature-copy">
              <div class="feature-title">Custom Photos</div>
              <div class="feature-text">Add real pictures from the child's home, family, foods, toys, and places.</div>
            </div>
          </a>

          <a class="feature" href=${f("settings")}>
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=500&q=80"
              alt="Calm settings workspace"
            />
            <div class="feature-copy">
              <div class="feature-title">Comfort Settings</div>
              <div class="feature-text">Adjust theme, text size, sound, speech, contrast, and motion sensitivity.</div>
            </div>
          </a>

          <a class="feature" href=${f("progress")}>
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80"
              alt="Progress notes and charts"
            />
            <div class="feature-copy">
              <div class="feature-title">Progress Dashboard</div>
              <div class="feature-text">See local usage patterns for communication, activities, and safety buttons.</div>
            </div>
          </a>

          <a class="feature" href=${f("feedback")}>
            <img
              src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=500&q=80"
              alt="Notebook for feedback and ideas"
            />
            <div class="feature-copy">
              <div class="feature-title">Feedback & Wishlist</div>
              <div class="feature-text">Save caregiver ideas, improvement requests, bug reports, and success stories.</div>
            </div>
          </a>
        </section>
      </main>
    `}};Rt.styles=k`
    :host {
      display: block;
      min-height: 100vh;
      background: #f6f8fb;
      color: #243041;
    }

    main {
      max-width: 1180px;
      margin: 0 auto;
      padding: 1.25rem;
    }

    .intro {
      display: grid;
      gap: 0.6rem;
      margin: 0.5rem 0 1.2rem;
    }

    h1 {
      margin: 0;
      color: #243041;
      font-size: 2.25rem;
      line-height: 1.05;
    }

    .lead {
      margin: 0;
      max-width: 720px;
      color: #586778;
      font-size: 1.08rem;
      line-height: 1.5;
    }

    .status-row {
      display: flex;
      gap: 0.75rem;
      flex-wrap: wrap;
      align-items: center;
    }

    .urgent-grid {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 0.65rem;
      margin: 1rem 0;
    }

    .urgent {
      min-height: 62px;
      border: 0;
      border-radius: 0.5rem;
      color: #ffffff;
      font-size: 1.05rem;
      font-weight: 900;
      box-shadow: 0 3px 10px rgba(30, 42, 58, 0.16);
    }

    .help { background: #c0392b; }
    .bathroom { background: #6b5b95; }
    .break { background: #1f7a8c; }
    .stop { background: #9d1c1c; }

    .feature-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1rem;
    }

    .feature {
      display: grid;
      grid-template-columns: 112px 1fr;
      gap: 1rem;
      align-items: stretch;
      min-height: 160px;
      padding: 0;
      overflow: hidden;
      border: 1px solid #d9e2ec;
      border-radius: 0.5rem;
      background: #ffffff;
      text-decoration: none;
      color: inherit;
      box-shadow: 0 6px 18px rgba(30, 42, 58, 0.08);
    }

    .feature:hover {
      outline: 4px solid rgba(46, 143, 116, 0.18);
      text-decoration: none;
    }

    .feature img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      background: #dfe8f1;
    }

    .feature-copy {
      padding: 1rem 1rem 1rem 0;
      display: grid;
      align-content: center;
      gap: 0.35rem;
    }

    .feature-title {
      font-size: 1.25rem;
      font-weight: 900;
      color: #243041;
    }

    .feature-text {
      color: #657386;
      line-height: 1.4;
    }

    @media (max-width: 760px) {
      .feature-grid,
      .urgent-grid {
        grid-template-columns: 1fr;
      }

      .feature {
        grid-template-columns: 96px 1fr;
      }

      h1 {
        font-size: 1.75rem;
      }
    }

    @media (max-width: 960px) {
      .urgent-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }
  `;mi([l()],Rt.prototype,"message",2);mi([l()],Rt.prototype,"isOnline",2);Rt=mi([N("app-home")],Rt);export{Z as A,Je as L,ee as P,ae as S,_o as W,lt as _,z as a,bl as b,f as c,Be as d,xo as e,k as i,b as r,fi as s,N as t,d as x};
