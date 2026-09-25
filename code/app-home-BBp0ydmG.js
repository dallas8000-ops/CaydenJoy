var Is="";function bo(e){Is=e}function Pi(e=""){if(!Is){const t=[...document.getElementsByTagName("script")],s=t.find(o=>o.hasAttribute("data-shoelace"));if(s)bo(s.getAttribute("data-shoelace"));else{const o=t.find(a=>/shoelace(\.min)?\.js($|\?)/.test(a.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(a.src));let i="";o&&(i=o.getAttribute("src")),bo(i.split("/").slice(0,-1).join("/"))}}return Is.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var Xo=Object.defineProperty,Ii=Object.defineProperties,zi=Object.getOwnPropertyDescriptor,Oi=Object.getOwnPropertyDescriptors,vo=Object.getOwnPropertySymbols,Di=Object.prototype.hasOwnProperty,Mi=Object.prototype.propertyIsEnumerable,yo=(e,t,s)=>t in e?Xo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Be=(e,t)=>{for(var s in t||(t={}))Di.call(t,s)&&yo(e,s,t[s]);if(vo)for(var s of vo(t))Mi.call(t,s)&&yo(e,s,t[s]);return e},Nt=(e,t)=>Ii(e,Oi(t)),n=(e,t,s,o)=>{for(var i=o>1?void 0:o?zi(t,s):t,a=e.length-1,r;a>=0;a--)(r=e[a])&&(i=(o?r(t,s,i):r(i))||i);return o&&i&&Xo(t,s,i),i},Qo=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)},Li=(e,t,s)=>(Qo(e,t,"read from private field"),t.get(e)),Ui=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},Ri=(e,t,s,o)=>(Qo(e,t,"write to private field"),t.set(e,s),s);const Xt=globalThis,Js=Xt.ShadowRoot&&(Xt.ShadyCSS===void 0||Xt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ws=Symbol(),wo=new WeakMap;let Zo=class{constructor(t,s,o){if(this._$cssResult$=!0,o!==Ws)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=s}get styleSheet(){let t=this.o;const s=this.t;if(Js&&t===void 0){const o=s!==void 0&&s.length===1;o&&(t=wo.get(s)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&wo.set(s,t))}return t}toString(){return this.cssText}};const Ni=e=>new Zo(typeof e=="string"?e:e+"",void 0,Ws),C=(e,...t)=>{const s=e.length===1?e[0]:t.reduce(((o,i,a)=>o+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[a+1]),e[0]);return new Zo(s,e,Ws)},ji=(e,t)=>{if(Js)e.adoptedStyleSheets=t.map((s=>s instanceof CSSStyleSheet?s:s.styleSheet));else for(const s of t){const o=document.createElement("style"),i=Xt.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=s.cssText,e.appendChild(o)}},xo=Js?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let s="";for(const o of t.cssRules)s+=o.cssText;return Ni(s)})(e):e;const{is:Bi,defineProperty:Fi,getOwnPropertyDescriptor:Vi,getOwnPropertyNames:qi,getOwnPropertySymbols:Hi,getPrototypeOf:Ji}=Object,hs=globalThis,_o=hs.trustedTypes,Wi=_o?_o.emptyScript:"",Yi=hs.reactiveElementPolyfillSupport,Et=(e,t)=>e,ht={toAttribute(e,t){switch(t){case Boolean:e=e?Wi:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=e!==null;break;case Number:s=e===null?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch{s=null}}return s}},Ys=(e,t)=>!Bi(e,t),ko={attribute:!0,type:String,converter:ht,reflect:!1,hasChanged:Ys};Symbol.metadata??=Symbol("metadata"),hs.litPropertyMetadata??=new WeakMap;class nt extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=ko){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(t,s),!s.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(t,o,s);i!==void 0&&Fi(this.prototype,t,i)}}static getPropertyDescriptor(t,s,o){const{get:i,set:a}=Vi(this.prototype,t)??{get(){return this[s]},set(r){this[s]=r}};return{get(){return i?.call(this)},set(r){const c=i?.call(this);a.call(this,r),this.requestUpdate(t,c,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ko}static _$Ei(){if(this.hasOwnProperty(Et("elementProperties")))return;const t=Ji(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Et("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Et("properties"))){const s=this.properties,o=[...qi(s),...Hi(s)];for(const i of o)this.createProperty(i,s[i])}const t=this[Symbol.metadata];if(t!==null){const s=litPropertyMetadata.get(t);if(s!==void 0)for(const[o,i]of s)this.elementProperties.set(o,i)}this._$Eh=new Map;for(const[s,o]of this.elementProperties){const i=this._$Eu(s,o);i!==void 0&&this._$Eh.set(i,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const s=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const i of o)s.unshift(xo(i))}else t!==void 0&&s.push(xo(t));return s}static _$Eu(t,s){const o=s.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const o of s.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ji(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,s,o){this._$AK(t,o)}_$EC(t,s){const o=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,o);if(i!==void 0&&o.reflect===!0){const a=(o.converter?.toAttribute!==void 0?o.converter:ht).toAttribute(s,o.type);this._$Em=t,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(t,s){const o=this.constructor,i=o._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const a=o.getPropertyOptions(i),r=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:ht;this._$Em=i,this[i]=r.fromAttribute(s,a.type),this._$Em=null}}requestUpdate(t,s,o){if(t!==void 0){if(o??=this.constructor.getPropertyOptions(t),!(o.hasChanged??Ys)(this[t],s))return;this.P(t,s,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,s,o){this._$AL.has(t)||this._$AL.set(t,s),o.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,a]of this._$Ep)this[i]=a;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[i,a]of o)a.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],a)}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach((o=>o.hostUpdate?.())),this.update(s)):this._$EU()}catch(o){throw t=!1,this._$EU(),o}t&&this._$AE(s)}willUpdate(t){}_$AE(t){this._$EO?.forEach((s=>s.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((s=>this._$EC(s,this[s]))),this._$EU()}updated(t){}firstUpdated(t){}}nt.elementStyles=[],nt.shadowRootOptions={mode:"open"},nt[Et("elementProperties")]=new Map,nt[Et("finalized")]=new Map,Yi?.({ReactiveElement:nt}),(hs.reactiveElementVersions??=[]).push("2.0.4");const Ks=globalThis,ss=Ks.trustedTypes,Co=ss?ss.createPolicy("lit-html",{createHTML:e=>e}):void 0,ei="$lit$",Ue=`lit$${Math.random().toFixed(9).slice(2)}$`,ti="?"+Ue,Ki=`<${ti}>`,Ze=document,It=()=>Ze.createComment(""),zt=e=>e===null||typeof e!="object"&&typeof e!="function",Gs=Array.isArray,Gi=e=>Gs(e)||typeof e?.[Symbol.iterator]=="function",ws=`[ 	
\f\r]`,kt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$o=/-->/g,To=/>/g,Ye=RegExp(`>|${ws}(?:([^\\s"'>=/]+)(${ws}*=${ws}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),So=/'/g,Ao=/"/g,si=/^(?:script|style|textarea|title)$/i,Xi=e=>(t,...s)=>({_$litType$:e,strings:t,values:s}),d=Xi(1),de=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),Eo=new WeakMap,Xe=Ze.createTreeWalker(Ze,129);function oi(e,t){if(!Gs(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Co!==void 0?Co.createHTML(t):t}const Qi=(e,t)=>{const s=e.length-1,o=[];let i,a=t===2?"<svg>":t===3?"<math>":"",r=kt;for(let c=0;c<s;c++){const h=e[c];let u,m,p=-1,f=0;for(;f<h.length&&(r.lastIndex=f,m=r.exec(h),m!==null);)f=r.lastIndex,r===kt?m[1]==="!--"?r=$o:m[1]!==void 0?r=To:m[2]!==void 0?(si.test(m[2])&&(i=RegExp("</"+m[2],"g")),r=Ye):m[3]!==void 0&&(r=Ye):r===Ye?m[0]===">"?(r=i??kt,p=-1):m[1]===void 0?p=-2:(p=r.lastIndex-m[2].length,u=m[1],r=m[3]===void 0?Ye:m[3]==='"'?Ao:So):r===Ao||r===So?r=Ye:r===$o||r===To?r=kt:(r=Ye,i=void 0);const v=r===Ye&&e[c+1].startsWith("/>")?" ":"";a+=r===kt?h+Ki:p>=0?(o.push(u),h.slice(0,p)+ei+h.slice(p)+Ue+v):h+Ue+(p===-2?c:v)}return[oi(e,a+(e[s]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),o]};class Ot{constructor({strings:t,_$litType$:s},o){let i;this.parts=[];let a=0,r=0;const c=t.length-1,h=this.parts,[u,m]=Qi(t,s);if(this.el=Ot.createElement(u,o),Xe.currentNode=this.el.content,s===2||s===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(i=Xe.nextNode())!==null&&h.length<c;){if(i.nodeType===1){if(i.hasAttributes())for(const p of i.getAttributeNames())if(p.endsWith(ei)){const f=m[r++],v=i.getAttribute(p).split(Ue),y=/([.?@])?(.*)/.exec(f);h.push({type:1,index:a,name:y[2],strings:v,ctor:y[1]==="."?ea:y[1]==="?"?ta:y[1]==="@"?sa:us}),i.removeAttribute(p)}else p.startsWith(Ue)&&(h.push({type:6,index:a}),i.removeAttribute(p));if(si.test(i.tagName)){const p=i.textContent.split(Ue),f=p.length-1;if(f>0){i.textContent=ss?ss.emptyScript:"";for(let v=0;v<f;v++)i.append(p[v],It()),Xe.nextNode(),h.push({type:2,index:++a});i.append(p[f],It())}}}else if(i.nodeType===8)if(i.data===ti)h.push({type:2,index:a});else{let p=-1;for(;(p=i.data.indexOf(Ue,p+1))!==-1;)h.push({type:7,index:a}),p+=Ue.length-1}a++}}static createElement(t,s){const o=Ze.createElement("template");return o.innerHTML=t,o}}function ut(e,t,s=e,o){if(t===de)return t;let i=o!==void 0?s._$Co?.[o]:s._$Cl;const a=zt(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,s,o)),o!==void 0?(s._$Co??=[])[o]=i:s._$Cl=i),i!==void 0&&(t=ut(e,i._$AS(e,t.values),i,o)),t}class Zi{constructor(t,s){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:s},parts:o}=this._$AD,i=(t?.creationScope??Ze).importNode(s,!0);Xe.currentNode=i;let a=Xe.nextNode(),r=0,c=0,h=o[0];for(;h!==void 0;){if(r===h.index){let u;h.type===2?u=new jt(a,a.nextSibling,this,t):h.type===1?u=new h.ctor(a,h.name,h.strings,this,t):h.type===6&&(u=new oa(a,this,t)),this._$AV.push(u),h=o[++c]}r!==h?.index&&(a=Xe.nextNode(),r++)}return Xe.currentNode=Ze,i}p(t){let s=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,s),s+=o.strings.length-2):o._$AI(t[s])),s++}}class jt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,s,o,i){this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=t,this._$AB=s,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&t?.nodeType===11&&(t=s.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,s=this){t=ut(this,t,s),zt(t)?t===U||t==null||t===""?(this._$AH!==U&&this._$AR(),this._$AH=U):t!==this._$AH&&t!==de&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Gi(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==U&&zt(this._$AH)?this._$AA.nextSibling.data=t:this.T(Ze.createTextNode(t)),this._$AH=t}$(t){const{values:s,_$litType$:o}=t,i=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=Ot.createElement(oi(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(s);else{const a=new Zi(i,this),r=a.u(this.options);a.p(s),this.T(r),this._$AH=a}}_$AC(t){let s=Eo.get(t.strings);return s===void 0&&Eo.set(t.strings,s=new Ot(t)),s}k(t){Gs(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let o,i=0;for(const a of t)i===s.length?s.push(o=new jt(this.O(It()),this.O(It()),this,this.options)):o=s[i],o._$AI(a),i++;i<s.length&&(this._$AR(o&&o._$AB.nextSibling,i),s.length=i)}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class us{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,s,o,i,a){this.type=1,this._$AH=U,this._$AN=void 0,this.element=t,this.name=s,this._$AM=i,this.options=a,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=U}_$AI(t,s=this,o,i){const a=this.strings;let r=!1;if(a===void 0)t=ut(this,t,s,0),r=!zt(t)||t!==this._$AH&&t!==de,r&&(this._$AH=t);else{const c=t;let h,u;for(t=a[0],h=0;h<a.length-1;h++)u=ut(this,c[o+h],s,h),u===de&&(u=this._$AH[h]),r||=!zt(u)||u!==this._$AH[h],u===U?t=U:t!==U&&(t+=(u??"")+a[h+1]),this._$AH[h]=u}r&&!i&&this.j(t)}j(t){t===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ea extends us{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===U?void 0:t}}class ta extends us{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==U)}}class sa extends us{constructor(t,s,o,i,a){super(t,s,o,i,a),this.type=5}_$AI(t,s=this){if((t=ut(this,t,s,0)??U)===de)return;const o=this._$AH,i=t===U&&o!==U||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,a=t!==U&&(o===U||i);i&&this.element.removeEventListener(this.name,this,o),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class oa{constructor(t,s,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=s,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){ut(this,t)}}const ia=Ks.litHtmlPolyfillSupport;ia?.(Ot,jt),(Ks.litHtmlVersions??=[]).push("3.2.1");const aa=(e,t,s)=>{const o=s?.renderBefore??t;let i=o._$litPart$;if(i===void 0){const a=s?.renderBefore??null;o._$litPart$=i=new jt(t.insertBefore(It(),a),a,void 0,s??{})}return i._$AI(e),i};let O=class extends nt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=aa(s,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return de}};O._$litElement$=!0,O.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:O});const ra=globalThis.litElementPolyfillSupport;ra?.({LitElement:O});(globalThis.litElementVersions??=[]).push("4.1.1");const j=e=>(t,s)=>{s!==void 0?s.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)};const na={attribute:!0,type:String,converter:ht,reflect:!1,hasChanged:Ys},la=(e=na,t,s)=>{const{kind:o,metadata:i}=s;let a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),a.set(s.name,e),o==="accessor"){const{name:r}=s;return{set(c){const h=t.get.call(this);t.set.call(this,c),this.requestUpdate(r,h,e)},init(c){return c!==void 0&&this.P(r,void 0,e),c}}}if(o==="setter"){const{name:r}=s;return function(c){const h=this[r];t.call(this,c),this.requestUpdate(r,h,e)}}throw Error("Unsupported decorator location: "+o)};function l(e){return(t,s)=>typeof s=="object"?la(e,t,s):((o,i,a)=>{const r=i.hasOwnProperty(a);return i.constructor.createProperty(a,r?{...o,wrapped:!0}:o),r?Object.getOwnPropertyDescriptor(i,a):void 0})(e,t,s)}function b(e){return l({...e,state:!0,attribute:!1})}const ca=(e,t,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,s),s);function R(e,t){return(s,o,i)=>{const a=r=>r.renderRoot?.querySelector(e)??null;return ca(s,o,{get(){return a(this)}})}}const da="modulepreload",ha=function(e){return"/CaydenJoy/"+e},Po={},ct=function(t,s,o){let i=Promise.resolve();if(s&&s.length>0){let h=function(u){return Promise.all(u.map(m=>Promise.resolve(m).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),c=r?.nonce||r?.getAttribute("nonce");i=h(s.map(u=>{if(u=ha(u),u in Po)return;Po[u]=!0;const m=u.endsWith(".css"),p=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${p}`))return;const f=document.createElement("link");if(f.rel=m?"stylesheet":da,m||(f.as="script"),f.crossOrigin="",f.href=u,c&&f.setAttribute("nonce",c),document.head.appendChild(f),m)return new Promise((v,y)=>{f.addEventListener("load",v),f.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${u}`)))})}))}function a(r){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=r,window.dispatchEvent(c),!c.defaultPrevented)throw r}return i.then(r=>{for(const c of r||[])c.status==="rejected"&&a(c.reason);return t().catch(a)})},Xs=Symbol.for("app-tools::log::1.x");globalThis[Xs]={setDebug:ua,debug:"window"in globalThis?new URL(window.location.href).searchParams.has("app-tools-debug"):!1};function ua(e){globalThis[Xs].debug=!!e}function pa(e,t){globalThis[Xs].debug&&(console.groupCollapsed(`[app-tools] ${e}`),t&&console.log(t),console.groupEnd())}function ma(e){return(t,s)=>{pa(`${e}: ${t}`,s)}}const Le=ma("router");class ga extends Event{constructor(t){super("route-changed"),this.context=t}}class fa extends EventTarget{context={params:{},query:{},title:"",url:new URL(window.location.href)};constructor(t){super(),this.config=t,this.routes=t.routes.map(s=>({...s,urlPattern:new URLPattern({pathname:s.path,baseURL:window.location.href,search:"*",hash:"*"})})),Le("Initialized routes",this.routes),queueMicrotask(()=>{this.navigate(new URL(window.location.href),{replace:!0})}),window.addEventListener("popstate",this._onPopState),window.addEventListener("click",this._onAnchorClick)}uninstall(){window.removeEventListener("popstate",this._onPopState),window.removeEventListener("click",this._onAnchorClick)}get url(){return new URL(window.location.href)}get fallback(){return new URL(this.config?.fallback||this.baseUrl.href.substring(window.location.origin.length),this.baseUrl)}get baseUrl(){return new URL("./",document.baseURI)}render(){return Le(`Rendering route ${this.context.url.pathname}${this.context.url.search}${this.context.url.hash}`,{context:this.context,route:this.route}),this.route?.render?.(this.context)}_matchRoute(t){for(const s of this.routes){const o=s.urlPattern.exec(t);if(o){const{title:i}=s,a=Object.fromEntries(new URLSearchParams(t.search)),r=o?.pathname?.groups??{};return this.context={url:t,title:typeof i=="function"?i({params:r,query:a,url:t}):i,params:r,query:a},s}}return Le(`No route matched for ${t.pathname}${t.search}${t.hash}`,t),null}_notifyUrlChanged(){this.dispatchEvent(new ga(this.context))}_onPopState=()=>{this.navigate(new URL(window.location.href),{backNav:!0})};_onAnchorClick=t=>{if(t.defaultPrevented||t.button!==0||t.metaKey||t.ctrlKey||t.shiftKey)return;const s=t.composedPath().find(a=>a.tagName==="A");if(!s||!s.href)return;const o=new URL(s.href);if(this.url.href===o.href||o.host!==window.location.host||s.hasAttribute("download")||s.href.includes("mailto:"))return;const i=s.getAttribute("target");i&&i!==""&&i!=="_self"||(t.preventDefault(),this.navigate(o))};_collectPlugins(t){return[...this.config?.plugins??[],...t?.plugins??[]]}async navigate(t,s={}){typeof t=="string"&&(t=new URL(t,this.baseUrl));let o=this._matchRoute(t)||this._matchRoute(this.fallback);Le(`Navigating to ${t.pathname}${t.search}${t.hash}`,{context:this.context,route:this.route});let i=this._collectPlugins(o);for(const a of i)try{const r=await a?.shouldNavigate?.(this.context);r&&(await r.condition()||(t=new URL(r.redirect,this.baseUrl),o=this._matchRoute(t)||this._matchRoute(this.fallback),i=this._collectPlugins(o),Le("Redirecting",{context:this.context,route:this.route})))}catch(r){throw Le(`Plugin "${a.name}" error on shouldNavigate hook`,r),r}if(this.route=o,!this.route)throw new Error(`[ROUTER] No route or fallback matched for url ${t}`);for(const a of i)try{await a?.beforeNavigation?.(this.context)}catch(r){throw Le(`Plugin "${a.name}" error on beforeNavigation hook`,r),r}s?.replace?window.history.replaceState(null,"",`${t.pathname}${t.search}${t.hash}`):s.backNav||window.history.pushState(null,"",`${t.pathname}${t.search}${t.hash}`),document.title=this.context.title,this._notifyUrlChanged();for(const a of i)try{await a?.afterNavigation?.(this.context)}catch(r){throw Le(`Plugin "${a.name}" error on afterNavigation hook`,r),r}}}function Qt(e){return{name:"lazy",beforeNavigation:()=>{e()}}}var ba=C`
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
`,ot=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=s=>{const o=s.target;(this.slotNames.includes("[default]")&&!o.name||o.name&&this.slotNames.includes(o.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function va(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let s="";return[...t].forEach(o=>{o.nodeType===Node.TEXT_NODE&&(s+=o.textContent)}),s}var K=C`
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
`,Zt,V=class extends O{constructor(){super(),Ui(this,Zt,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const s=new CustomEvent(e,Be({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(s),s}static define(e,t=this,s={}){const o=customElements.get(e);if(!o){try{customElements.define(e,t,s)}catch{customElements.define(e,class extends t{},s)}return}let i=" (unknown version)",a=i;"version"in t&&t.version&&(i=" v"+t.version),"version"in o&&o.version&&(a=" v"+o.version),!(i&&a&&i===a)&&console.warn(`Attempted to register <${e}>${i}, but <${e}>${a} has already been registered.`)}attributeChangedCallback(e,t,s){Li(this,Zt)||(this.constructor.elementProperties.forEach((o,i)=>{o.reflect&&this[i]!=null&&this.initialReflectedProperties.set(i,this[i])}),Ri(this,Zt,!0)),super.attributeChangedCallback(e,t,s)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,s)=>{e.has(s)&&this[s]==null&&(this[s]=t)})}};Zt=new WeakMap;V.version="2.18.0";V.dependencies={};n([l()],V.prototype,"dir",2);n([l()],V.prototype,"lang",2);const Ie={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},ps=e=>(...t)=>({_$litDirective$:e,values:t});let ms=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,o){this._$Ct=t,this._$AM=s,this._$Ci=o}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}};const W=ps(class extends ms{constructor(e){if(super(e),e.type!==Ie.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((o=>o!==""))));for(const o in t)t[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(t)}const s=e.element.classList;for(const o of this.st)o in t||(s.remove(o),this.st.delete(o));for(const o in t){const i=!!t[o];i===this.st.has(o)||this.nt?.has(o)||(i?(s.add(o),this.st.add(o)):(s.remove(o),this.st.delete(o)))}return de}});var ii=class extends V{constructor(){super(...arguments),this.hasSlotController=new ot(this,"footer","header","image")}render(){return d`
      <div
        part="base"
        class=${W({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};ii.styles=[K,ba];ii.define("sl-card");var ya=C`
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
`;const zs=new Set,lt=new Map;let Ke,Qs="ltr",Zs="en";const ai=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(ai){const e=new MutationObserver(ni);Qs=document.documentElement.dir||"ltr",Zs=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function ri(...e){e.map(t=>{const s=t.$code.toLowerCase();lt.has(s)?lt.set(s,Object.assign(Object.assign({},lt.get(s)),t)):lt.set(s,t),Ke||(Ke=t)}),ni()}function ni(){ai&&(Qs=document.documentElement.dir||"ltr",Zs=document.documentElement.lang||navigator.language),[...zs.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let wa=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){zs.add(this.host)}hostDisconnected(){zs.delete(this.host)}dir(){return`${this.host.dir||Qs}`.toLowerCase()}lang(){return`${this.host.lang||Zs}`.toLowerCase()}getTranslationData(t){var s,o;const i=new Intl.Locale(t.replace(/_/g,"-")),a=i?.language.toLowerCase(),r=(o=(s=i?.region)===null||s===void 0?void 0:s.toLowerCase())!==null&&o!==void 0?o:"",c=lt.get(`${a}-${r}`),h=lt.get(a);return{locale:i,language:a,region:r,primary:c,secondary:h}}exists(t,s){var o;const{primary:i,secondary:a}=this.getTranslationData((o=s.lang)!==null&&o!==void 0?o:this.lang());return s=Object.assign({includeFallback:!1},s),!!(i&&i[t]||a&&a[t]||s.includeFallback&&Ke&&Ke[t])}term(t,...s){const{primary:o,secondary:i}=this.getTranslationData(this.lang());let a;if(o&&o[t])a=o[t];else if(i&&i[t])a=i[t];else if(Ke&&Ke[t])a=Ke[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof a=="function"?a(...s):a}date(t,s){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),s).format(t)}number(t,s){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),s).format(t)}relativeTime(t,s,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(t,s)}};var li={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};ri(li);var xa=li,Te=class extends wa{};ri(xa);var eo=class extends V{constructor(){super(...arguments),this.localize=new Te(this)}render(){return d`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};eo.styles=[K,ya];var Ct=new WeakMap,$t=new WeakMap,Tt=new WeakMap,xs=new WeakSet,Ht=new WeakMap,Bt=class{constructor(e,t){this.handleFormData=s=>{const o=this.options.disabled(this.host),i=this.options.name(this.host),a=this.options.value(this.host),r=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!o&&!r&&typeof i=="string"&&i.length>0&&typeof a<"u"&&(Array.isArray(a)?a.forEach(c=>{s.formData.append(i,c.toString())}):s.formData.append(i,a.toString()))},this.handleFormSubmit=s=>{var o;const i=this.options.disabled(this.host),a=this.options.reportValidity;this.form&&!this.form.noValidate&&((o=Ct.get(this.form))==null||o.forEach(r=>{this.setUserInteracted(r,!0)})),this.form&&!this.form.noValidate&&!i&&!a(this.host)&&(s.preventDefault(),s.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Ht.set(this.host,[])},this.handleInteraction=s=>{const o=Ht.get(this.host);o.includes(s.type)||o.push(s.type),o.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const s=this.form.querySelectorAll("*");for(const o of s)if(typeof o.checkValidity=="function"&&!o.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const s=this.form.querySelectorAll("*");for(const o of s)if(typeof o.reportValidity=="function"&&!o.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=Be({form:s=>{const o=s.form;if(o){const a=s.getRootNode().querySelector(`#${o}`);if(a)return a}return s.closest("form")},name:s=>s.name,value:s=>s.value,defaultValue:s=>s.defaultValue,disabled:s=>{var o;return(o=s.disabled)!=null?o:!1},reportValidity:s=>typeof s.reportValidity=="function"?s.reportValidity():!0,checkValidity:s=>typeof s.checkValidity=="function"?s.checkValidity():!0,setValue:(s,o)=>s.value=o,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),Ht.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Ht.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,Ct.has(this.form)?Ct.get(this.form).add(this.host):Ct.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),$t.has(this.form)||($t.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Tt.has(this.form)||(Tt.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=Ct.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),$t.has(this.form)&&(this.form.reportValidity=$t.get(this.form),$t.delete(this.form)),Tt.has(this.form)&&(this.form.checkValidity=Tt.get(this.form),Tt.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?xs.add(e):xs.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const s=document.createElement("button");s.type=e,s.style.position="absolute",s.style.width="0",s.style.height="0",s.style.clipPath="inset(50%)",s.style.overflow="hidden",s.style.whiteSpace="nowrap",t&&(s.name=t.name,s.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(o=>{t.hasAttribute(o)&&s.setAttribute(o,t.getAttribute(o))})),this.form.append(s),s.click(),s.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,s=!!xs.has(t),o=!!t.required;t.toggleAttribute("data-required",o),t.toggleAttribute("data-optional",!o),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&s),t.toggleAttribute("data-user-valid",e&&s)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e?.preventDefault()}},to=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(Nt(Be({},to),{valid:!1,valueMissing:!0}));Object.freeze(Nt(Be({},to),{valid:!1,customError:!0}));var _a=C`
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
`,ka={name:"default",resolver:e=>Pi(`assets/icons/${e}.svg`)},Ca=ka,Io={caret:`
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
  `},$a={name:"system",resolver:e=>e in Io?`data:image/svg+xml,${encodeURIComponent(Io[e])}`:""},Ta=$a,Sa=[Ca,Ta],Os=[];function Aa(e){Os.push(e)}function Ea(e){Os=Os.filter(t=>t!==e)}function zo(e){return Sa.find(t=>t.name===e)}var Pa=C`
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
`;function B(e,t){const s=Be({waitUntilFirstUpdate:!1},t);return(o,i)=>{const{update:a}=o,r=Array.isArray(e)?e:[e];o.update=function(c){r.forEach(h=>{const u=h;if(c.has(u)){const m=c.get(u),p=this[u];m!==p&&(!s.waitUntilFirstUpdate||this.hasUpdated)&&this[i](m,p)}}),a.call(this,c)}}}const Ia=(e,t)=>e?._$litType$!==void 0,ci=e=>e.strings===void 0,za={},Oa=(e,t=za)=>e._$AH=t;var St=Symbol(),Jt=Symbol(),_s,ks=new Map,G=class extends V{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var s;let o;if(t?.spriteSheet)return this.svg=d`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,this.svg;try{if(o=await fetch(e,{mode:"cors"}),!o.ok)return o.status===410?St:Jt}catch{return Jt}try{const i=document.createElement("div");i.innerHTML=await o.text();const a=i.firstElementChild;if(((s=a?.tagName)==null?void 0:s.toLowerCase())!=="svg")return St;_s||(_s=new DOMParser);const c=_s.parseFromString(a.outerHTML,"text/html").body.querySelector("svg");return c?(c.part.add("svg"),document.adoptNode(c)):St}catch{return St}}connectedCallback(){super.connectedCallback(),Aa(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Ea(this)}getIconSource(){const e=zo(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:s}=this.getIconSource(),o=s?zo(this.library):void 0;if(!t){this.svg=null;return}let i=ks.get(t);if(i||(i=this.resolveIcon(t,o),ks.set(t,i)),!this.initialRender)return;const a=await i;if(a===Jt&&ks.delete(t),t===this.getIconSource().url){if(Ia(a)){if(this.svg=a,o){await this.updateComplete;const r=this.shadowRoot.querySelector("[part='svg']");typeof o.mutator=="function"&&r&&o.mutator(r)}return}switch(a){case Jt:case St:this.svg=null,this.emit("sl-error");break;default:this.svg=a.cloneNode(!0),(e=o?.mutator)==null||e.call(o,this.svg),this.emit("sl-load")}}}render(){return this.svg}};G.styles=[K,Pa];n([b()],G.prototype,"svg",2);n([l({reflect:!0})],G.prototype,"name",2);n([l()],G.prototype,"src",2);n([l()],G.prototype,"label",2);n([l({reflect:!0})],G.prototype,"library",2);n([B("label")],G.prototype,"handleLabelChange",1);n([B(["name","src","library"])],G.prototype,"setIcon",1);const di=Symbol.for(""),Da=e=>{if(e?.r===di)return e?._$litStatic$},os=(e,...t)=>({_$litStatic$:t.reduce(((s,o,i)=>s+(a=>{if(a._$litStatic$!==void 0)return a._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${a}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+e[i+1]),e[0]),r:di}),Oo=new Map,Ma=e=>(t,...s)=>{const o=s.length;let i,a;const r=[],c=[];let h,u=0,m=!1;for(;u<o;){for(h=t[u];u<o&&(a=s[u],(i=Da(a))!==void 0);)h+=i+t[++u],m=!0;u!==o&&c.push(a),r.push(h),u++}if(u===o&&r.push(t[o]),m){const p=r.join("$$lit$$");(t=Oo.get(p))===void 0&&(r.raw=r,Oo.set(p,t=r)),s=c}return e(t,...s)},es=Ma(d);const k=e=>e??U;var I=class extends V{constructor(){super(...arguments),this.formControlController=new Bt(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new ot(this,"[default]","prefix","suffix"),this.localize=new Te(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:to}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?os`a`:os`button`;return es`
      <${t}
        part="base"
        class=${W({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${k(e?void 0:this.disabled)}
        type=${k(e?void 0:this.type)}
        title=${this.title}
        name=${k(e?void 0:this.name)}
        value=${k(e?void 0:this.value)}
        href=${k(e&&!this.disabled?this.href:void 0)}
        target=${k(e?this.target:void 0)}
        download=${k(e?this.download:void 0)}
        rel=${k(e?this.rel:void 0)}
        role=${k(e?void 0:"button")}
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
        ${this.caret?es` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?es`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};I.styles=[K,_a];I.dependencies={"sl-icon":G,"sl-spinner":eo};n([R(".button")],I.prototype,"button",2);n([b()],I.prototype,"hasFocus",2);n([b()],I.prototype,"invalid",2);n([l()],I.prototype,"title",2);n([l({reflect:!0})],I.prototype,"variant",2);n([l({reflect:!0})],I.prototype,"size",2);n([l({type:Boolean,reflect:!0})],I.prototype,"caret",2);n([l({type:Boolean,reflect:!0})],I.prototype,"disabled",2);n([l({type:Boolean,reflect:!0})],I.prototype,"loading",2);n([l({type:Boolean,reflect:!0})],I.prototype,"outline",2);n([l({type:Boolean,reflect:!0})],I.prototype,"pill",2);n([l({type:Boolean,reflect:!0})],I.prototype,"circle",2);n([l()],I.prototype,"type",2);n([l()],I.prototype,"name",2);n([l()],I.prototype,"value",2);n([l()],I.prototype,"href",2);n([l()],I.prototype,"target",2);n([l()],I.prototype,"rel",2);n([l()],I.prototype,"download",2);n([l()],I.prototype,"form",2);n([l({attribute:"formaction"})],I.prototype,"formAction",2);n([l({attribute:"formenctype"})],I.prototype,"formEnctype",2);n([l({attribute:"formmethod"})],I.prototype,"formMethod",2);n([l({attribute:"formnovalidate",type:Boolean})],I.prototype,"formNoValidate",2);n([l({attribute:"formtarget"})],I.prototype,"formTarget",2);n([B("disabled",{waitUntilFirstUpdate:!0})],I.prototype,"handleDisabledChange",1);I.define("sl-button");G.define("sl-icon");const Fe=C`
  @media(min-width: 1000px) {
    sl-card {
      max-width: 70vw;
    }
  }

  main {
    margin-top: 34px;
    padding: 12px;
  }
`;var La=Object.getOwnPropertyDescriptor,Ua=(e,t,s,o)=>{for(var i=o>1?void 0:o?La(t,s):t,a=e.length-1,r;a>=0;a--)(r=e[a])&&(i=r(i)||i);return i};let Ds=class extends O{render(){return d`
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
          <sl-button href="${g()}" variant="primary">Back to Home</sl-button>
        </div>
      </main>
    `}};Ds.styles=[Fe,C`
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
    `];Ds=Ua([j("app-services")],Ds);var Ra=C`
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
`,gs=(e="value")=>(t,s)=>{const o=t.constructor,i=o.prototype.attributeChangedCallback;o.prototype.attributeChangedCallback=function(a,r,c){var h;const u=o.getPropertyOptions(e),m=typeof u.attribute=="string"?u.attribute:e;if(a===m){const p=u.converter||ht,v=(typeof p=="function"?p:(h=p?.fromAttribute)!=null?h:ht.fromAttribute)(c,u.type);this[e]!==v&&(this[s]=v)}i.call(this,a,r,c)}},fs=C`
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
`;const so=ps(class extends ms{constructor(e){if(super(e),e.type!==Ie.PROPERTY&&e.type!==Ie.ATTRIBUTE&&e.type!==Ie.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!ci(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===de||t===U)return t;const s=e.element,o=e.name;if(e.type===Ie.PROPERTY){if(t===s[o])return de}else if(e.type===Ie.BOOLEAN_ATTRIBUTE){if(!!t===s.hasAttribute(o))return de}else if(e.type===Ie.ATTRIBUTE&&s.getAttribute(o)===t+"")return de;return Oa(e),t}});var T=class extends V{constructor(){super(...arguments),this.formControlController=new Bt(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new ot(this,"help-text","label"),this.localize=new Te(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var e;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((e=this.input)==null?void 0:e.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){var e;return this.__numberInput.value=this.value,((e=this.input)==null?void 0:e.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(e){e.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleKeyDown(e){const t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!t&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,s="none"){this.input.setSelectionRange(e,t,s)}setRangeText(e,t,s,o="preserve"){const i=t??this.input.selectionStart,a=s??this.input.selectionEnd;this.input.setRangeText(e,i,a,o),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),s=this.label?!0:!!e,o=this.helpText?!0:!!t,a=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return d`
      <div
        part="form-control"
        class=${W({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":o})}
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
              name=${k(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${k(this.placeholder)}
              minlength=${k(this.minlength)}
              maxlength=${k(this.maxlength)}
              min=${k(this.min)}
              max=${k(this.max)}
              step=${k(this.step)}
              .value=${so(this.value)}
              autocapitalize=${k(this.autocapitalize)}
              autocomplete=${k(this.autocomplete)}
              autocorrect=${k(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${k(this.pattern)}
              enterkeyhint=${k(this.enterkeyhint)}
              inputmode=${k(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${a?d`
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
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};T.styles=[K,fs,Ra];T.dependencies={"sl-icon":G};n([R(".input__control")],T.prototype,"input",2);n([b()],T.prototype,"hasFocus",2);n([l()],T.prototype,"title",2);n([l({reflect:!0})],T.prototype,"type",2);n([l()],T.prototype,"name",2);n([l()],T.prototype,"value",2);n([gs()],T.prototype,"defaultValue",2);n([l({reflect:!0})],T.prototype,"size",2);n([l({type:Boolean,reflect:!0})],T.prototype,"filled",2);n([l({type:Boolean,reflect:!0})],T.prototype,"pill",2);n([l()],T.prototype,"label",2);n([l({attribute:"help-text"})],T.prototype,"helpText",2);n([l({type:Boolean})],T.prototype,"clearable",2);n([l({type:Boolean,reflect:!0})],T.prototype,"disabled",2);n([l()],T.prototype,"placeholder",2);n([l({type:Boolean,reflect:!0})],T.prototype,"readonly",2);n([l({attribute:"password-toggle",type:Boolean})],T.prototype,"passwordToggle",2);n([l({attribute:"password-visible",type:Boolean})],T.prototype,"passwordVisible",2);n([l({attribute:"no-spin-buttons",type:Boolean})],T.prototype,"noSpinButtons",2);n([l({reflect:!0})],T.prototype,"form",2);n([l({type:Boolean,reflect:!0})],T.prototype,"required",2);n([l()],T.prototype,"pattern",2);n([l({type:Number})],T.prototype,"minlength",2);n([l({type:Number})],T.prototype,"maxlength",2);n([l()],T.prototype,"min",2);n([l()],T.prototype,"max",2);n([l()],T.prototype,"step",2);n([l()],T.prototype,"autocapitalize",2);n([l()],T.prototype,"autocorrect",2);n([l()],T.prototype,"autocomplete",2);n([l({type:Boolean})],T.prototype,"autofocus",2);n([l()],T.prototype,"enterkeyhint",2);n([l({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],T.prototype,"spellcheck",2);n([l()],T.prototype,"inputmode",2);n([B("disabled",{waitUntilFirstUpdate:!0})],T.prototype,"handleDisabledChange",1);n([B("step",{waitUntilFirstUpdate:!0})],T.prototype,"handleStepChange",1);n([B("value",{waitUntilFirstUpdate:!0})],T.prototype,"handleValueChange",1);T.define("sl-input");var Na=C`
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
`,E=class extends V{constructor(){super(...arguments),this.formControlController=new Bt(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new ot(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){var e;super.disconnectedCallback(),this.input&&((e=this.resizeObserver)==null||e.unobserve(this.input))}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}setTextareaHeight(){this.resize==="auto"?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=void 0}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top=="number"&&(this.input.scrollTop=e.top),typeof e.left=="number"&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,s="none"){this.input.setSelectionRange(e,t,s)}setRangeText(e,t,s,o="preserve"){const i=t??this.input.selectionStart,a=s??this.input.selectionEnd;this.input.setRangeText(e,i,a,o),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),s=this.label?!0:!!e,o=this.helpText?!0:!!t;return d`
      <div
        part="form-control"
        class=${W({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":o})}
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
              name=${k(this.name)}
              .value=${so(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${k(this.placeholder)}
              rows=${k(this.rows)}
              minlength=${k(this.minlength)}
              maxlength=${k(this.maxlength)}
              autocapitalize=${k(this.autocapitalize)}
              autocorrect=${k(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${k(this.spellcheck)}
              enterkeyhint=${k(this.enterkeyhint)}
              inputmode=${k(this.inputmode)}
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
    `}};E.styles=[K,fs,Na];n([R(".textarea__control")],E.prototype,"input",2);n([R(".textarea__size-adjuster")],E.prototype,"sizeAdjuster",2);n([b()],E.prototype,"hasFocus",2);n([l()],E.prototype,"title",2);n([l()],E.prototype,"name",2);n([l()],E.prototype,"value",2);n([l({reflect:!0})],E.prototype,"size",2);n([l({type:Boolean,reflect:!0})],E.prototype,"filled",2);n([l()],E.prototype,"label",2);n([l({attribute:"help-text"})],E.prototype,"helpText",2);n([l()],E.prototype,"placeholder",2);n([l({type:Number})],E.prototype,"rows",2);n([l()],E.prototype,"resize",2);n([l({type:Boolean,reflect:!0})],E.prototype,"disabled",2);n([l({type:Boolean,reflect:!0})],E.prototype,"readonly",2);n([l({reflect:!0})],E.prototype,"form",2);n([l({type:Boolean,reflect:!0})],E.prototype,"required",2);n([l({type:Number})],E.prototype,"minlength",2);n([l({type:Number})],E.prototype,"maxlength",2);n([l()],E.prototype,"autocapitalize",2);n([l()],E.prototype,"autocorrect",2);n([l()],E.prototype,"autocomplete",2);n([l({type:Boolean})],E.prototype,"autofocus",2);n([l()],E.prototype,"enterkeyhint",2);n([l({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],E.prototype,"spellcheck",2);n([l()],E.prototype,"inputmode",2);n([gs()],E.prototype,"defaultValue",2);n([B("disabled",{waitUntilFirstUpdate:!0})],E.prototype,"handleDisabledChange",1);n([B("rows",{waitUntilFirstUpdate:!0})],E.prototype,"handleRowsChange",1);n([B("value",{waitUntilFirstUpdate:!0})],E.prototype,"handleValueChange",1);E.define("sl-textarea");const ja=!1,Ba=!1;var Fa=C`
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
`,Do=new WeakMap;function hi(e){let t=Do.get(e);return t||(t=window.getComputedStyle(e,null),Do.set(e,t)),t}function Va(e){if(typeof e.checkVisibility=="function")return e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const t=hi(e);return t.visibility!=="hidden"&&t.display!=="none"}function qa(e){const t=hi(e),{overflowY:s,overflowX:o}=t;return s==="scroll"||o==="scroll"?!0:s!=="auto"||o!=="auto"?!1:e.scrollHeight>e.clientHeight&&s==="auto"||e.scrollWidth>e.clientWidth&&o==="auto"}function Ha(e){const t=e.tagName.toLowerCase(),s=Number(e.getAttribute("tabindex"));return e.hasAttribute("tabindex")&&(isNaN(s)||s<=-1)||e.hasAttribute("disabled")||e.closest("[inert]")||t==="input"&&e.getAttribute("type")==="radio"&&!e.hasAttribute("checked")||!Va(e)?!1:(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(t)?!0:qa(e)}function Ja(e){var t,s;const o=Ya(e),i=(t=o[0])!=null?t:null,a=(s=o[o.length-1])!=null?s:null;return{start:i,end:a}}function Wa(e,t){var s;return((s=e.getRootNode({composed:!0}))==null?void 0:s.host)!==t}function Ya(e){const t=new WeakMap,s=[];function o(i){if(i instanceof Element){if(i.hasAttribute("inert")||i.closest("[inert]")||t.has(i))return;t.set(i,!0),!s.includes(i)&&Ha(i)&&s.push(i),i instanceof HTMLSlotElement&&Wa(i,e)&&i.assignedElements({flatten:!0}).forEach(a=>{o(a)}),i.shadowRoot!==null&&i.shadowRoot.mode==="open"&&o(i.shadowRoot)}for(const a of i.children)o(a)}return o(e),s.sort((i,a)=>{const r=Number(i.getAttribute("tabindex"))||0;return(Number(a.getAttribute("tabindex"))||0)-r})}var Ka=C`
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
`;const Re=Math.min,re=Math.max,is=Math.round,Wt=Math.floor,we=e=>({x:e,y:e}),Ga={left:"right",right:"left",bottom:"top",top:"bottom"},Xa={start:"end",end:"start"};function Ms(e,t,s){return re(e,Re(t,s))}function yt(e,t){return typeof e=="function"?e(t):e}function Ne(e){return e.split("-")[0]}function wt(e){return e.split("-")[1]}function ui(e){return e==="x"?"y":"x"}function oo(e){return e==="y"?"height":"width"}function et(e){return["top","bottom"].includes(Ne(e))?"y":"x"}function io(e){return ui(et(e))}function Qa(e,t,s){s===void 0&&(s=!1);const o=wt(e),i=io(e),a=oo(i);let r=i==="x"?o===(s?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[a]>t.floating[a]&&(r=as(r)),[r,as(r)]}function Za(e){const t=as(e);return[Ls(e),t,Ls(t)]}function Ls(e){return e.replace(/start|end/g,t=>Xa[t])}function er(e,t,s){const o=["left","right"],i=["right","left"],a=["top","bottom"],r=["bottom","top"];switch(e){case"top":case"bottom":return s?t?i:o:t?o:i;case"left":case"right":return t?a:r;default:return[]}}function tr(e,t,s,o){const i=wt(e);let a=er(Ne(e),s==="start",o);return i&&(a=a.map(r=>r+"-"+i),t&&(a=a.concat(a.map(Ls)))),a}function as(e){return e.replace(/left|right|bottom|top/g,t=>Ga[t])}function sr(e){return{top:0,right:0,bottom:0,left:0,...e}}function pi(e){return typeof e!="number"?sr(e):{top:e,right:e,bottom:e,left:e}}function rs(e){const{x:t,y:s,width:o,height:i}=e;return{width:o,height:i,top:s,left:t,right:t+o,bottom:s+i,x:t,y:s}}function Mo(e,t,s){let{reference:o,floating:i}=e;const a=et(t),r=io(t),c=oo(r),h=Ne(t),u=a==="y",m=o.x+o.width/2-i.width/2,p=o.y+o.height/2-i.height/2,f=o[c]/2-i[c]/2;let v;switch(h){case"top":v={x:m,y:o.y-i.height};break;case"bottom":v={x:m,y:o.y+o.height};break;case"right":v={x:o.x+o.width,y:p};break;case"left":v={x:o.x-i.width,y:p};break;default:v={x:o.x,y:o.y}}switch(wt(t)){case"start":v[r]-=f*(s&&u?-1:1);break;case"end":v[r]+=f*(s&&u?-1:1);break}return v}const or=async(e,t,s)=>{const{placement:o="bottom",strategy:i="absolute",middleware:a=[],platform:r}=s,c=a.filter(Boolean),h=await(r.isRTL==null?void 0:r.isRTL(t));let u=await r.getElementRects({reference:e,floating:t,strategy:i}),{x:m,y:p}=Mo(u,o,h),f=o,v={},y=0;for(let x=0;x<c.length;x++){const{name:_,fn:$}=c[x],{x:A,y:P,data:F,reset:M}=await $({x:m,y:p,initialPlacement:o,placement:f,strategy:i,middlewareData:v,rects:u,platform:r,elements:{reference:e,floating:t}});m=A??m,p=P??p,v={...v,[_]:{...v[_],...F}},M&&y<=50&&(y++,typeof M=="object"&&(M.placement&&(f=M.placement),M.rects&&(u=M.rects===!0?await r.getElementRects({reference:e,floating:t,strategy:i}):M.rects),{x:m,y:p}=Mo(u,f,h)),x=-1)}return{x:m,y:p,placement:f,strategy:i,middlewareData:v}};async function ao(e,t){var s;t===void 0&&(t={});const{x:o,y:i,platform:a,rects:r,elements:c,strategy:h}=e,{boundary:u="clippingAncestors",rootBoundary:m="viewport",elementContext:p="floating",altBoundary:f=!1,padding:v=0}=yt(t,e),y=pi(v),_=c[f?p==="floating"?"reference":"floating":p],$=rs(await a.getClippingRect({element:(s=await(a.isElement==null?void 0:a.isElement(_)))==null||s?_:_.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(c.floating)),boundary:u,rootBoundary:m,strategy:h})),A=p==="floating"?{x:o,y:i,width:r.floating.width,height:r.floating.height}:r.reference,P=await(a.getOffsetParent==null?void 0:a.getOffsetParent(c.floating)),F=await(a.isElement==null?void 0:a.isElement(P))?await(a.getScale==null?void 0:a.getScale(P))||{x:1,y:1}:{x:1,y:1},M=rs(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:A,offsetParent:P,strategy:h}):A);return{top:($.top-M.top+y.top)/F.y,bottom:(M.bottom-$.bottom+y.bottom)/F.y,left:($.left-M.left+y.left)/F.x,right:(M.right-$.right+y.right)/F.x}}const ir=e=>({name:"arrow",options:e,async fn(t){const{x:s,y:o,placement:i,rects:a,platform:r,elements:c,middlewareData:h}=t,{element:u,padding:m=0}=yt(e,t)||{};if(u==null)return{};const p=pi(m),f={x:s,y:o},v=io(i),y=oo(v),x=await r.getDimensions(u),_=v==="y",$=_?"top":"left",A=_?"bottom":"right",P=_?"clientHeight":"clientWidth",F=a.reference[y]+a.reference[v]-f[v]-a.floating[y],M=f[v]-a.reference[v],se=await(r.getOffsetParent==null?void 0:r.getOffsetParent(u));let Z=se?se[P]:0;(!Z||!await(r.isElement==null?void 0:r.isElement(se)))&&(Z=c.floating[P]||a.floating[y]);const D=F/2-M/2,L=Z/2-x[y]/2-1,N=Re(p[$],L),Y=Re(p[A],L),J=N,q=Z-x[y]-Y,H=Z/2-x[y]/2+D,ge=Ms(J,H,q),Pe=!h.arrow&&wt(i)!=null&&H!==ge&&a.reference[y]/2-(H<J?N:Y)-x[y]/2<0,ye=Pe?H<J?H-J:H-q:0;return{[v]:f[v]+ye,data:{[v]:ge,centerOffset:H-ge-ye,...Pe&&{alignmentOffset:ye}},reset:Pe}}}),ar=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var s,o;const{placement:i,middlewareData:a,rects:r,initialPlacement:c,platform:h,elements:u}=t,{mainAxis:m=!0,crossAxis:p=!0,fallbackPlacements:f,fallbackStrategy:v="bestFit",fallbackAxisSideDirection:y="none",flipAlignment:x=!0,..._}=yt(e,t);if((s=a.arrow)!=null&&s.alignmentOffset)return{};const $=Ne(i),A=et(c),P=Ne(c)===c,F=await(h.isRTL==null?void 0:h.isRTL(u.floating)),M=f||(P||!x?[as(c)]:Za(c)),se=y!=="none";!f&&se&&M.push(...tr(c,x,y,F));const Z=[c,...M],D=await ao(t,_),L=[];let N=((o=a.flip)==null?void 0:o.overflows)||[];if(m&&L.push(D[$]),p){const H=Qa(i,r,F);L.push(D[H[0]],D[H[1]])}if(N=[...N,{placement:i,overflows:L}],!L.every(H=>H<=0)){var Y,J;const H=(((Y=a.flip)==null?void 0:Y.index)||0)+1,ge=Z[H];if(ge)return{data:{index:H,overflows:N},reset:{placement:ge}};let Pe=(J=N.filter(ye=>ye.overflows[0]<=0).sort((ye,De)=>ye.overflows[1]-De.overflows[1])[0])==null?void 0:J.placement;if(!Pe)switch(v){case"bestFit":{var q;const ye=(q=N.filter(De=>{if(se){const Me=et(De.placement);return Me===A||Me==="y"}return!0}).map(De=>[De.placement,De.overflows.filter(Me=>Me>0).reduce((Me,Ei)=>Me+Ei,0)]).sort((De,Me)=>De[1]-Me[1])[0])==null?void 0:q[0];ye&&(Pe=ye);break}case"initialPlacement":Pe=c;break}if(i!==Pe)return{reset:{placement:Pe}}}return{}}}};async function rr(e,t){const{placement:s,platform:o,elements:i}=e,a=await(o.isRTL==null?void 0:o.isRTL(i.floating)),r=Ne(s),c=wt(s),h=et(s)==="y",u=["left","top"].includes(r)?-1:1,m=a&&h?-1:1,p=yt(t,e);let{mainAxis:f,crossAxis:v,alignmentAxis:y}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return c&&typeof y=="number"&&(v=c==="end"?y*-1:y),h?{x:v*m,y:f*u}:{x:f*u,y:v*m}}const nr=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var s,o;const{x:i,y:a,placement:r,middlewareData:c}=t,h=await rr(t,e);return r===((s=c.offset)==null?void 0:s.placement)&&(o=c.arrow)!=null&&o.alignmentOffset?{}:{x:i+h.x,y:a+h.y,data:{...h,placement:r}}}}},lr=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:s,y:o,placement:i}=t,{mainAxis:a=!0,crossAxis:r=!1,limiter:c={fn:_=>{let{x:$,y:A}=_;return{x:$,y:A}}},...h}=yt(e,t),u={x:s,y:o},m=await ao(t,h),p=et(Ne(i)),f=ui(p);let v=u[f],y=u[p];if(a){const _=f==="y"?"top":"left",$=f==="y"?"bottom":"right",A=v+m[_],P=v-m[$];v=Ms(A,v,P)}if(r){const _=p==="y"?"top":"left",$=p==="y"?"bottom":"right",A=y+m[_],P=y-m[$];y=Ms(A,y,P)}const x=c.fn({...t,[f]:v,[p]:y});return{...x,data:{x:x.x-s,y:x.y-o,enabled:{[f]:a,[p]:r}}}}}},cr=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var s,o;const{placement:i,rects:a,platform:r,elements:c}=t,{apply:h=()=>{},...u}=yt(e,t),m=await ao(t,u),p=Ne(i),f=wt(i),v=et(i)==="y",{width:y,height:x}=a.floating;let _,$;p==="top"||p==="bottom"?(_=p,$=f===(await(r.isRTL==null?void 0:r.isRTL(c.floating))?"start":"end")?"left":"right"):($=p,_=f==="end"?"top":"bottom");const A=x-m.top-m.bottom,P=y-m.left-m.right,F=Re(x-m[_],A),M=Re(y-m[$],P),se=!t.middlewareData.shift;let Z=F,D=M;if((s=t.middlewareData.shift)!=null&&s.enabled.x&&(D=P),(o=t.middlewareData.shift)!=null&&o.enabled.y&&(Z=A),se&&!f){const N=re(m.left,0),Y=re(m.right,0),J=re(m.top,0),q=re(m.bottom,0);v?D=y-2*(N!==0||Y!==0?N+Y:re(m.left,m.right)):Z=x-2*(J!==0||q!==0?J+q:re(m.top,m.bottom))}await h({...t,availableWidth:D,availableHeight:Z});const L=await r.getDimensions(c.floating);return y!==L.width||x!==L.height?{reset:{rects:!0}}:{}}}};function bs(){return typeof window<"u"}function xt(e){return mi(e)?(e.nodeName||"").toLowerCase():"#document"}function le(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Se(e){var t;return(t=(mi(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function mi(e){return bs()?e instanceof Node||e instanceof le(e).Node:!1}function fe(e){return bs()?e instanceof Element||e instanceof le(e).Element:!1}function xe(e){return bs()?e instanceof HTMLElement||e instanceof le(e).HTMLElement:!1}function Lo(e){return!bs()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof le(e).ShadowRoot}function Ft(e){const{overflow:t,overflowX:s,overflowY:o,display:i}=be(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+s)&&!["inline","contents"].includes(i)}function dr(e){return["table","td","th"].includes(xt(e))}function vs(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function ro(e){const t=no(),s=fe(e)?be(e):e;return s.transform!=="none"||s.perspective!=="none"||(s.containerType?s.containerType!=="normal":!1)||!t&&(s.backdropFilter?s.backdropFilter!=="none":!1)||!t&&(s.filter?s.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(s.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(s.contain||"").includes(o))}function hr(e){let t=je(e);for(;xe(t)&&!pt(t);){if(ro(t))return t;if(vs(t))return null;t=je(t)}return null}function no(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function pt(e){return["html","body","#document"].includes(xt(e))}function be(e){return le(e).getComputedStyle(e)}function ys(e){return fe(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function je(e){if(xt(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Lo(e)&&e.host||Se(e);return Lo(t)?t.host:t}function gi(e){const t=je(e);return pt(t)?e.ownerDocument?e.ownerDocument.body:e.body:xe(t)&&Ft(t)?t:gi(t)}function Dt(e,t,s){var o;t===void 0&&(t=[]),s===void 0&&(s=!0);const i=gi(e),a=i===((o=e.ownerDocument)==null?void 0:o.body),r=le(i);if(a){const c=Us(r);return t.concat(r,r.visualViewport||[],Ft(i)?i:[],c&&s?Dt(c):[])}return t.concat(i,Dt(i,[],s))}function Us(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function fi(e){const t=be(e);let s=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const i=xe(e),a=i?e.offsetWidth:s,r=i?e.offsetHeight:o,c=is(s)!==a||is(o)!==r;return c&&(s=a,o=r),{width:s,height:o,$:c}}function lo(e){return fe(e)?e:e.contextElement}function dt(e){const t=lo(e);if(!xe(t))return we(1);const s=t.getBoundingClientRect(),{width:o,height:i,$:a}=fi(t);let r=(a?is(s.width):s.width)/o,c=(a?is(s.height):s.height)/i;return(!r||!Number.isFinite(r))&&(r=1),(!c||!Number.isFinite(c))&&(c=1),{x:r,y:c}}const ur=we(0);function bi(e){const t=le(e);return!no()||!t.visualViewport?ur:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function pr(e,t,s){return t===void 0&&(t=!1),!s||t&&s!==le(e)?!1:t}function tt(e,t,s,o){t===void 0&&(t=!1),s===void 0&&(s=!1);const i=e.getBoundingClientRect(),a=lo(e);let r=we(1);t&&(o?fe(o)&&(r=dt(o)):r=dt(e));const c=pr(a,s,o)?bi(a):we(0);let h=(i.left+c.x)/r.x,u=(i.top+c.y)/r.y,m=i.width/r.x,p=i.height/r.y;if(a){const f=le(a),v=o&&fe(o)?le(o):o;let y=f,x=Us(y);for(;x&&o&&v!==y;){const _=dt(x),$=x.getBoundingClientRect(),A=be(x),P=$.left+(x.clientLeft+parseFloat(A.paddingLeft))*_.x,F=$.top+(x.clientTop+parseFloat(A.paddingTop))*_.y;h*=_.x,u*=_.y,m*=_.x,p*=_.y,h+=P,u+=F,y=le(x),x=Us(y)}}return rs({width:m,height:p,x:h,y:u})}function co(e,t){const s=ys(e).scrollLeft;return t?t.left+s:tt(Se(e)).left+s}function vi(e,t,s){s===void 0&&(s=!1);const o=e.getBoundingClientRect(),i=o.left+t.scrollLeft-(s?0:co(e,o)),a=o.top+t.scrollTop;return{x:i,y:a}}function mr(e){let{elements:t,rect:s,offsetParent:o,strategy:i}=e;const a=i==="fixed",r=Se(o),c=t?vs(t.floating):!1;if(o===r||c&&a)return s;let h={scrollLeft:0,scrollTop:0},u=we(1);const m=we(0),p=xe(o);if((p||!p&&!a)&&((xt(o)!=="body"||Ft(r))&&(h=ys(o)),xe(o))){const v=tt(o);u=dt(o),m.x=v.x+o.clientLeft,m.y=v.y+o.clientTop}const f=r&&!p&&!a?vi(r,h,!0):we(0);return{width:s.width*u.x,height:s.height*u.y,x:s.x*u.x-h.scrollLeft*u.x+m.x+f.x,y:s.y*u.y-h.scrollTop*u.y+m.y+f.y}}function gr(e){return Array.from(e.getClientRects())}function fr(e){const t=Se(e),s=ys(e),o=e.ownerDocument.body,i=re(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),a=re(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let r=-s.scrollLeft+co(e);const c=-s.scrollTop;return be(o).direction==="rtl"&&(r+=re(t.clientWidth,o.clientWidth)-i),{width:i,height:a,x:r,y:c}}function br(e,t){const s=le(e),o=Se(e),i=s.visualViewport;let a=o.clientWidth,r=o.clientHeight,c=0,h=0;if(i){a=i.width,r=i.height;const u=no();(!u||u&&t==="fixed")&&(c=i.offsetLeft,h=i.offsetTop)}return{width:a,height:r,x:c,y:h}}function vr(e,t){const s=tt(e,!0,t==="fixed"),o=s.top+e.clientTop,i=s.left+e.clientLeft,a=xe(e)?dt(e):we(1),r=e.clientWidth*a.x,c=e.clientHeight*a.y,h=i*a.x,u=o*a.y;return{width:r,height:c,x:h,y:u}}function Uo(e,t,s){let o;if(t==="viewport")o=br(e,s);else if(t==="document")o=fr(Se(e));else if(fe(t))o=vr(t,s);else{const i=bi(e);o={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return rs(o)}function yi(e,t){const s=je(e);return s===t||!fe(s)||pt(s)?!1:be(s).position==="fixed"||yi(s,t)}function yr(e,t){const s=t.get(e);if(s)return s;let o=Dt(e,[],!1).filter(c=>fe(c)&&xt(c)!=="body"),i=null;const a=be(e).position==="fixed";let r=a?je(e):e;for(;fe(r)&&!pt(r);){const c=be(r),h=ro(r);!h&&c.position==="fixed"&&(i=null),(a?!h&&!i:!h&&c.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||Ft(r)&&!h&&yi(e,r))?o=o.filter(m=>m!==r):i=c,r=je(r)}return t.set(e,o),o}function wr(e){let{element:t,boundary:s,rootBoundary:o,strategy:i}=e;const r=[...s==="clippingAncestors"?vs(t)?[]:yr(t,this._c):[].concat(s),o],c=r[0],h=r.reduce((u,m)=>{const p=Uo(t,m,i);return u.top=re(p.top,u.top),u.right=Re(p.right,u.right),u.bottom=Re(p.bottom,u.bottom),u.left=re(p.left,u.left),u},Uo(t,c,i));return{width:h.right-h.left,height:h.bottom-h.top,x:h.left,y:h.top}}function xr(e){const{width:t,height:s}=fi(e);return{width:t,height:s}}function _r(e,t,s){const o=xe(t),i=Se(t),a=s==="fixed",r=tt(e,!0,a,t);let c={scrollLeft:0,scrollTop:0};const h=we(0);if(o||!o&&!a)if((xt(t)!=="body"||Ft(i))&&(c=ys(t)),o){const f=tt(t,!0,a,t);h.x=f.x+t.clientLeft,h.y=f.y+t.clientTop}else i&&(h.x=co(i));const u=i&&!o&&!a?vi(i,c):we(0),m=r.left+c.scrollLeft-h.x-u.x,p=r.top+c.scrollTop-h.y-u.y;return{x:m,y:p,width:r.width,height:r.height}}function Cs(e){return be(e).position==="static"}function Ro(e,t){if(!xe(e)||be(e).position==="fixed")return null;if(t)return t(e);let s=e.offsetParent;return Se(e)===s&&(s=s.ownerDocument.body),s}function wi(e,t){const s=le(e);if(vs(e))return s;if(!xe(e)){let i=je(e);for(;i&&!pt(i);){if(fe(i)&&!Cs(i))return i;i=je(i)}return s}let o=Ro(e,t);for(;o&&dr(o)&&Cs(o);)o=Ro(o,t);return o&&pt(o)&&Cs(o)&&!ro(o)?s:o||hr(e)||s}const kr=async function(e){const t=this.getOffsetParent||wi,s=this.getDimensions,o=await s(e.floating);return{reference:_r(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function Cr(e){return be(e).direction==="rtl"}const ts={convertOffsetParentRelativeRectToViewportRelativeRect:mr,getDocumentElement:Se,getClippingRect:wr,getOffsetParent:wi,getElementRects:kr,getClientRects:gr,getDimensions:xr,getScale:dt,isElement:fe,isRTL:Cr};function $r(e,t){let s=null,o;const i=Se(e);function a(){var c;clearTimeout(o),(c=s)==null||c.disconnect(),s=null}function r(c,h){c===void 0&&(c=!1),h===void 0&&(h=1),a();const{left:u,top:m,width:p,height:f}=e.getBoundingClientRect();if(c||t(),!p||!f)return;const v=Wt(m),y=Wt(i.clientWidth-(u+p)),x=Wt(i.clientHeight-(m+f)),_=Wt(u),A={rootMargin:-v+"px "+-y+"px "+-x+"px "+-_+"px",threshold:re(0,Re(1,h))||1};let P=!0;function F(M){const se=M[0].intersectionRatio;if(se!==h){if(!P)return r();se?r(!1,se):o=setTimeout(()=>{r(!1,1e-7)},1e3)}P=!1}try{s=new IntersectionObserver(F,{...A,root:i.ownerDocument})}catch{s=new IntersectionObserver(F,A)}s.observe(e)}return r(!0),a}function Tr(e,t,s,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:h=!1}=o,u=lo(e),m=i||a?[...u?Dt(u):[],...Dt(t)]:[];m.forEach($=>{i&&$.addEventListener("scroll",s,{passive:!0}),a&&$.addEventListener("resize",s)});const p=u&&c?$r(u,s):null;let f=-1,v=null;r&&(v=new ResizeObserver($=>{let[A]=$;A&&A.target===u&&v&&(v.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var P;(P=v)==null||P.observe(t)})),s()}),u&&!h&&v.observe(u),v.observe(t));let y,x=h?tt(e):null;h&&_();function _(){const $=tt(e);x&&($.x!==x.x||$.y!==x.y||$.width!==x.width||$.height!==x.height)&&s(),x=$,y=requestAnimationFrame(_)}return s(),()=>{var $;m.forEach(A=>{i&&A.removeEventListener("scroll",s),a&&A.removeEventListener("resize",s)}),p?.(),($=v)==null||$.disconnect(),v=null,h&&cancelAnimationFrame(y)}}const Sr=nr,Ar=lr,Er=ar,No=cr,Pr=ir,Ir=(e,t,s)=>{const o=new Map,i={platform:ts,...s},a={...i.platform,_c:o};return or(e,t,{...i,platform:a})};function zr(e){return Or(e)}function $s(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Or(e){for(let t=e;t;t=$s(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=$s(e);t;t=$s(t)){if(!(t instanceof Element))continue;const s=getComputedStyle(t);if(s.display!=="contents"&&(s.position!=="static"||s.filter!=="none"||t.tagName==="BODY"))return t}return null}function Dr(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e&&("contextElement"in e?e instanceof Element:!0)}var z=class extends V{constructor(){super(...arguments),this.localize=new Te(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),s=this.placement.includes("top")||this.placement.includes("bottom");let o=0,i=0,a=0,r=0,c=0,h=0,u=0,m=0;s?e.top<t.top?(o=e.left,i=e.bottom,a=e.right,r=e.bottom,c=t.left,h=t.top,u=t.right,m=t.top):(o=t.left,i=t.bottom,a=t.right,r=t.bottom,c=e.left,h=e.top,u=e.right,m=e.top):e.left<t.left?(o=e.right,i=e.top,a=t.left,r=t.top,c=e.right,h=e.bottom,u=t.left,m=t.bottom):(o=t.right,i=t.top,a=e.left,r=e.top,c=t.right,h=t.bottom,u=e.left,m=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${i}px`),this.style.setProperty("--hover-bridge-top-right-x",`${a}px`),this.style.setProperty("--hover-bridge-top-right-y",`${r}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${h}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${u}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${m}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||Dr(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&(this.cleanup=Tr(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;const e=[Sr({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(No({apply:({rects:s})=>{const o=this.sync==="width"||this.sync==="both",i=this.sync==="height"||this.sync==="both";this.popup.style.width=o?`${s.reference.width}px`:"",this.popup.style.height=i?`${s.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(Er({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(Ar({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(No({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:s,availableHeight:o})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${o}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${s}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(Pr({element:this.arrowEl,padding:this.arrowPadding}));const t=this.strategy==="absolute"?s=>ts.getOffsetParent(s,zr):ts.getOffsetParent;Ir(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:Nt(Be({},ts),{getOffsetParent:t})}).then(({x:s,y:o,middlewareData:i,placement:a})=>{const r=this.localize.dir()==="rtl",c={top:"bottom",right:"left",bottom:"top",left:"right"}[a.split("-")[0]];if(this.setAttribute("data-current-placement",a),Object.assign(this.popup.style,{left:`${s}px`,top:`${o}px`}),this.arrow){const h=i.arrow.x,u=i.arrow.y;let m="",p="",f="",v="";if(this.arrowPlacement==="start"){const y=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";m=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",p=r?y:"",v=r?"":y}else if(this.arrowPlacement==="end"){const y=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";p=r?"":y,v=r?y:"",f=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(v=typeof h=="number"?"calc(50% - var(--arrow-size-diagonal))":"",m=typeof u=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(v=typeof h=="number"?`${h}px`:"",m=typeof u=="number"?`${u}px`:"");Object.assign(this.arrowEl.style,{top:m,right:p,bottom:f,left:v,[c]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return d`
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
    `}};z.styles=[K,Ka];n([R(".popup")],z.prototype,"popup",2);n([R(".popup__arrow")],z.prototype,"arrowEl",2);n([l()],z.prototype,"anchor",2);n([l({type:Boolean,reflect:!0})],z.prototype,"active",2);n([l({reflect:!0})],z.prototype,"placement",2);n([l({reflect:!0})],z.prototype,"strategy",2);n([l({type:Number})],z.prototype,"distance",2);n([l({type:Number})],z.prototype,"skidding",2);n([l({type:Boolean})],z.prototype,"arrow",2);n([l({attribute:"arrow-placement"})],z.prototype,"arrowPlacement",2);n([l({attribute:"arrow-padding",type:Number})],z.prototype,"arrowPadding",2);n([l({type:Boolean})],z.prototype,"flip",2);n([l({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],z.prototype,"flipFallbackPlacements",2);n([l({attribute:"flip-fallback-strategy"})],z.prototype,"flipFallbackStrategy",2);n([l({type:Object})],z.prototype,"flipBoundary",2);n([l({attribute:"flip-padding",type:Number})],z.prototype,"flipPadding",2);n([l({type:Boolean})],z.prototype,"shift",2);n([l({type:Object})],z.prototype,"shiftBoundary",2);n([l({attribute:"shift-padding",type:Number})],z.prototype,"shiftPadding",2);n([l({attribute:"auto-size"})],z.prototype,"autoSize",2);n([l()],z.prototype,"sync",2);n([l({type:Object})],z.prototype,"autoSizeBoundary",2);n([l({attribute:"auto-size-padding",type:Number})],z.prototype,"autoSizePadding",2);n([l({attribute:"hover-bridge",type:Boolean})],z.prototype,"hoverBridge",2);var xi=new Map,Mr=new WeakMap;function Lr(e){return e??{keyframes:[],options:{duration:0}}}function jo(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function _t(e,t){xi.set(e,Lr(t))}function mt(e,t,s){const o=Mr.get(e);if(o?.[t])return jo(o[t],s.dir);const i=xi.get(t);return i?jo(i,s.dir):{keyframes:[],options:{duration:0}}}function gt(e,t){return new Promise(s=>{function o(i){i.target===e&&(e.removeEventListener(t,o),s())}e.addEventListener(t,o)})}function ft(e,t,s){return new Promise(o=>{if(s?.duration===1/0)throw new Error("Promise-based animations must be finite.");const i=e.animate(t,Nt(Be({},s),{duration:Ur()?0:s.duration}));i.addEventListener("cancel",o,{once:!0}),i.addEventListener("finish",o,{once:!0})})}function Ur(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function bt(e){return Promise.all(e.getAnimations().map(t=>new Promise(s=>{t.cancel(),requestAnimationFrame(s)})))}function Bo(e,t){return e.map(s=>Nt(Be({},s),{height:s.height==="auto"?`${t}px`:s.height}))}var X=class extends V{constructor(){super(...arguments),this.localize=new Te(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{var t;if(e.key==="Escape"&&this.open&&!this.closeWatcher){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="sl-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var s,o,i;const a=((s=this.containingElement)==null?void 0:s.getRootNode())instanceof ShadowRoot?(i=(o=document.activeElement)==null?void 0:o.shadowRoot)==null?void 0:i.activeElement:document.activeElement;(!this.containingElement||a?.closest(this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{const t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];typeof e?.focus=="function"&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const s=t.getAllItems(),o=s[0],i=s[s.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),s.length>0&&this.updateComplete.then(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(t.setCurrentItem(o),o.focus()),(e.key==="ArrowUp"||e.key==="End")&&(t.setCurrentItem(i),i.focus())}))}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(o=>Ja(o).start);let s;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":s=t.button;break;default:s=t}s.setAttribute("aria-haspopup","true"),s.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,gt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,gt(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var e;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var e;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await bt(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=mt(this,"dropdown.show",{dir:this.localize.dir()});await ft(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await bt(this);const{keyframes:e,options:t}=mt(this,"dropdown.hide",{dir:this.localize.dir()});await ft(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return d`
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
        sync=${k(this.sync?this.sync:void 0)}
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
    `}};X.styles=[K,Fa];X.dependencies={"sl-popup":z};n([R(".dropdown")],X.prototype,"popup",2);n([R(".dropdown__trigger")],X.prototype,"trigger",2);n([R(".dropdown__panel")],X.prototype,"panel",2);n([l({type:Boolean,reflect:!0})],X.prototype,"open",2);n([l({reflect:!0})],X.prototype,"placement",2);n([l({type:Boolean,reflect:!0})],X.prototype,"disabled",2);n([l({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],X.prototype,"stayOpenOnSelect",2);n([l({attribute:!1})],X.prototype,"containingElement",2);n([l({type:Number})],X.prototype,"distance",2);n([l({type:Number})],X.prototype,"skidding",2);n([l({type:Boolean})],X.prototype,"hoist",2);n([l({reflect:!0})],X.prototype,"sync",2);n([B("open",{waitUntilFirstUpdate:!0})],X.prototype,"handleOpenChange",1);_t("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});_t("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});X.define("sl-dropdown");var Rr=C`
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
`,ho=class extends V{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(e){const t=["menuitem","menuitemcheckbox"],s=e.composedPath(),o=s.find(c=>{var h;return t.includes(((h=c?.getAttribute)==null?void 0:h.call(c,"role"))||"")});if(!o||s.find(c=>{var h;return((h=c?.getAttribute)==null?void 0:h.call(c,"role"))==="menu"})!==this)return;const r=o;r.type==="checkbox"&&(r.checked=!r.checked),this.emit("sl-select",{detail:{item:r}})}handleKeyDown(e){if(e.key==="Enter"||e.key===" "){const t=this.getCurrentItem();e.preventDefault(),e.stopPropagation(),t?.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const t=this.getAllItems(),s=this.getCurrentItem();let o=s?t.indexOf(s):0;t.length>0&&(e.preventDefault(),e.stopPropagation(),e.key==="ArrowDown"?o++:e.key==="ArrowUp"?o--:e.key==="Home"?o=0:e.key==="End"&&(o=t.length-1),o<0&&(o=t.length-1),o>t.length-1&&(o=0),this.setCurrentItem(t[o]),t[o].focus())}}handleMouseDown(e){const t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){const e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){var t;return e.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((t=e.getAttribute("role"))!=null?t:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>!(e.inert||!this.isMenuItem(e)))}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute("tabindex")==="0")}setCurrentItem(e){this.getAllItems().forEach(s=>{s.setAttribute("tabindex",s===e?"0":"-1")})}render(){return d`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};ho.styles=[K,Rr];n([R("slot")],ho.prototype,"defaultSlot",2);ho.define("sl-menu");var Nr=C`
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
`;const Pt=(e,t)=>{const s=e._$AN;if(s===void 0)return!1;for(const o of s)o._$AO?.(t,!1),Pt(o,t);return!0},ns=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while(s?.size===0)},_i=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),Fr(t)}};function jr(e){this._$AN!==void 0?(ns(this),this._$AM=e,_i(this)):this._$AM=e}function Br(e,t=!1,s=0){const o=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(o))for(let a=s;a<o.length;a++)Pt(o[a],!1),ns(o[a]);else o!=null&&(Pt(o,!1),ns(o));else Pt(this,e)}const Fr=e=>{e.type==Ie.CHILD&&(e._$AP??=Br,e._$AQ??=jr)};class Vr extends ms{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,o){super._$AT(t,s,o),_i(this),this.isConnected=t._$AU}_$AO(t,s=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),s&&(Pt(this,t),ns(this))}setValue(t){if(ci(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const qr=()=>new Hr;class Hr{}const Ts=new WeakMap,Jr=ps(class extends Vr{render(e){return U}update(e,[t]){const s=t!==this.Y;return s&&this.Y!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.Y=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),U}rt(e){if(this.isConnected||(e=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let s=Ts.get(t);s===void 0&&(s=new WeakMap,Ts.set(t,s)),s.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),s.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){return typeof this.Y=="function"?Ts.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Wr=class{constructor(e,t){this.popupRef=qr(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=s=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${s.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${s.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=s=>{switch(s.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":s.target!==this.host&&(s.preventDefault(),s.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(s);break}},this.handleClick=s=>{var o;s.target===this.host?(s.preventDefault(),s.stopPropagation()):s.target instanceof Element&&(s.target.tagName==="sl-menu-item"||(o=s.target.role)!=null&&o.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=s=>{s.relatedTarget&&s.relatedTarget instanceof Element&&this.host.contains(s.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=s=>{s.stopPropagation()},this.handlePopupReposition=()=>{const s=this.host.renderRoot.querySelector("slot[name='submenu']"),o=s?.assignedElements({flatten:!0}).filter(u=>u.localName==="sl-menu")[0],i=getComputedStyle(this.host).direction==="rtl";if(!o)return;const{left:a,top:r,width:c,height:h}=o.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${i?a+c:a}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${r}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${i?a+c:a}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${r+h}px`)},(this.host=e).addController(this),this.hasSlotController=t}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(e){const t=this.host.renderRoot.querySelector("slot[name='submenu']");if(!t){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let s=null;for(const o of t.assignedElements())if(s=o.querySelectorAll("sl-menu-item, [role^='menuitem']"),s.length!==0)break;if(!(!s||s.length===0)){s[0].setAttribute("tabindex","0");for(let o=1;o!==s.length;++o)s[o].setAttribute("tabindex","-1");this.popupRef.value&&(e.preventDefault(),e.stopPropagation(),this.popupRef.value.active?s[0]instanceof HTMLElement&&s[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{s[0]instanceof HTMLElement&&s[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(e){this.popupRef.value&&this.popupRef.value.active!==e&&(this.popupRef.value.active=e,this.host.requestUpdate())}enableSubmenu(e=!0){e?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var e;if(!((e=this.host.parentElement)!=null&&e.computedStyleMap))return;const t=this.host.parentElement.computedStyleMap(),o=["padding-top","border-top-width","margin-top"].reduce((i,a)=>{var r;const c=(r=t.get(a))!=null?r:new CSSUnitValue(0,"px"),u=(c instanceof CSSUnitValue?c:new CSSUnitValue(0,"px")).to("px");return i-u.value},0);this.skidding=o}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const e=getComputedStyle(this.host).direction==="rtl";return this.isConnected?d`
      <sl-popup
        ${Jr(this.popupRef)}
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
    `:d` <slot name="submenu" hidden></slot> `}},ce=class extends V{constructor(){super(...arguments),this.localize=new Te(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new ot(this,"submenu"),this.submenuController=new Wr(this,this.hasSlotController),this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleMouseOver=e=>{this.focus(),e.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return va(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const e=this.localize.dir()==="rtl",t=this.submenuController.isExpanded();return d`
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
    `}};ce.styles=[K,Nr];ce.dependencies={"sl-icon":G,"sl-popup":z,"sl-spinner":eo};n([R("slot:not([name])")],ce.prototype,"defaultSlot",2);n([R(".menu-item")],ce.prototype,"menuItem",2);n([l()],ce.prototype,"type",2);n([l({type:Boolean,reflect:!0})],ce.prototype,"checked",2);n([l()],ce.prototype,"value",2);n([l({type:Boolean,reflect:!0})],ce.prototype,"loading",2);n([l({type:Boolean,reflect:!0})],ce.prototype,"disabled",2);n([B("checked")],ce.prototype,"handleCheckedChange",1);n([B("disabled")],ce.prototype,"handleDisabledChange",1);n([B("type")],ce.prototype,"handleTypeChange",1);ce.define("sl-menu-item");var Yr=C`
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
`,ae=class extends V{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?os`a`:os`button`;return es`
      <${t}
        part="base"
        class=${W({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${k(e?void 0:this.disabled)}
        type=${k(e?void 0:"button")}
        href=${k(e?this.href:void 0)}
        target=${k(e?this.target:void 0)}
        download=${k(e?this.download:void 0)}
        rel=${k(e&&this.target?"noreferrer noopener":void 0)}
        role=${k(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${k(this.name)}
          library=${k(this.library)}
          src=${k(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};ae.styles=[K,Yr];ae.dependencies={"sl-icon":G};n([R(".icon-button")],ae.prototype,"button",2);n([b()],ae.prototype,"hasFocus",2);n([l()],ae.prototype,"name",2);n([l()],ae.prototype,"library",2);n([l()],ae.prototype,"src",2);n([l()],ae.prototype,"href",2);n([l()],ae.prototype,"target",2);n([l()],ae.prototype,"download",2);n([l()],ae.prototype,"label",2);n([l({type:Boolean,reflect:!0})],ae.prototype,"disabled",2);ae.define("sl-icon-button");var Kr=Object.defineProperty,Gr=Object.getOwnPropertyDescriptor,uo=(e,t,s,o)=>{for(var i=o>1?void 0:o?Gr(t,s):t,a=e.length-1,r;a>=0;a--)(r=e[a])&&(i=(o?r(t,s,i):r(i))||i);return o&&i&&Kr(t,s,i),i};let Mt=class extends O{constructor(){super(...arguments),this.title="CaydenJoy",this.enableBack=!1}render(){return d`
      <header>
        <div id="back-button-block">
          ${this.enableBack?d`<sl-button size="small" href="${g()}">
            Back
          </sl-button>`:null}
          <h1>${this.title}</h1>
        </div>

        <nav>
          <a href="${g()}">Communication</a>
          <a href="${g("foods")}">Foods</a>
          <a href="${g("colors")}">Colors</a>
          <a href="${g("numbers")}">Numbers</a>
          <a href="${g("places")}">Places</a>
          <a href="${g("family-puzzle")}">Puzzle</a>
          <a href="${g("home-enhanced")}">Quick</a>
          <a href="${g("custom-images")}">📸</a>
          ${d`<a href="${g("upgrade")}">🔓</a>`}
          <a href="${g("premium")}">👑</a>
          ${""}
          <a href="${g("settings")}">🛠️</a>
        </nav>
      </header>
    `}};Mt.styles=C`
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
  `;uo([l({type:String})],Mt.prototype,"title",2);uo([l({type:Boolean})],Mt.prototype,"enableBack",2);Mt=uo([j("app-header")],Mt);var Xr=Object.defineProperty,Qr=Object.getOwnPropertyDescriptor,Vt=(e,t,s,o)=>{for(var i=o>1?void 0:o?Qr(t,s):t,a=e.length-1,r;a>=0;a--)(r=e[a])&&(i=(o?r(t,s,i):r(i))||i);return o&&i&&Xr(t,s,i),i};let st=class extends O{constructor(){super(...arguments),this.name="",this.email="",this.message="",this.submitted=!1,this.supportEmail="dallas8000@gmail.com"}handleSubmit(e){if(e.preventDefault(),!this.name||!this.email||!this.message){alert("Please fill in all fields");return}localStorage.setItem("lastContact",JSON.stringify({name:this.name,email:this.email,message:this.message,timestamp:new Date().toISOString()}));const t=encodeURIComponent(`CaydenJoy support request from ${this.name}`),s=encodeURIComponent(`Name: ${this.name}
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
            <sl-button href="${g("feedback")}" variant="primary">
              Open Feedback
            </sl-button>
          </div>

          <div class="info-box">
            <h3>Upgrade Help</h3>
            <p>View premium tiers or redeem a one-time APK upgrade key.</p>
            <sl-button href="${g("premium")}" variant="primary">
              View Premium
            </sl-button>
          </div>
        </div>

        <div style="text-align: center; margin-top: 48px;">
          <sl-button href="${g("home")}" variant="primary">Back to Home</sl-button>
        </div>
      </main>
    `}};st.styles=[Fe,C`
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
    `];Vt([l()],st.prototype,"name",2);Vt([l()],st.prototype,"email",2);Vt([l()],st.prototype,"message",2);Vt([l()],st.prototype,"submitted",2);st=Vt([j("app-contact")],st);var Zr=C`
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
`,it=class extends V{constructor(){super(...arguments),this.localize=new Te(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return d`
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
    `}};it.styles=[K,Zr];it.dependencies={"sl-icon-button":ae};n([l({reflect:!0})],it.prototype,"variant",2);n([l({reflect:!0})],it.prototype,"size",2);n([l({type:Boolean,reflect:!0})],it.prototype,"pill",2);n([l({type:Boolean})],it.prototype,"removable",2);var en=C`
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
`;function tn(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}function sn(e,t,s="vertical",o="smooth"){const i=tn(e,t),a=i.top+t.scrollTop,r=i.left+t.scrollLeft,c=t.scrollLeft,h=t.scrollLeft+t.offsetWidth,u=t.scrollTop,m=t.scrollTop+t.offsetHeight;(s==="horizontal"||s==="both")&&(r<c?t.scrollTo({left:r,behavior:o}):r+e.clientWidth>h&&t.scrollTo({left:r-t.offsetWidth+e.clientWidth,behavior:o})),(s==="vertical"||s==="both")&&(a<u?t.scrollTo({top:a,behavior:o}):a+e.clientHeight>m&&t.scrollTo({top:a-t.offsetHeight+e.clientHeight,behavior:o}))}class Rs extends ms{constructor(t){if(super(t),this.it=U,t.type!==Ie.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===U||t==null)return this._t=void 0,this.it=t;if(t===de)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const s=[t];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}}Rs.directiveName="unsafeHTML",Rs.resultType=1;const on=ps(Rs);var S=class extends V{constructor(){super(...arguments),this.formControlController=new Bt(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new ot(this,"help-text","label"),this.localize=new Te(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this.value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=e=>d`
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
    `,this.handleDocumentFocusIn=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{const t=e.target,s=t.closest(".select__clear")!==null,o=t.closest("sl-icon-button")!==null;if(!(s||o)){if(e.key==="Escape"&&this.open&&!this.closeWatcher&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key==="Enter"||e.key===" "&&this.typeToSelectString===""){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){const i=this.getAllOptions(),a=i.indexOf(this.currentOption);let r=Math.max(0,a);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;e.key==="ArrowDown"?(r=a+1,r>i.length-1&&(r=0)):e.key==="ArrowUp"?(r=a-1,r<0&&(r=i.length-1)):e.key==="Home"?r=0:e.key==="End"&&(r=i.length-1),this.setCurrentOption(i[r])}if(e.key&&e.key.length===1||e.key==="Backspace"){const i=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key==="Backspace")return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),e.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(const a of i)if(a.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(a);break}}}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()}}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){var e;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var e;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),(e=this.closeWatcher)==null||e.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(e){const s=e.composedPath().some(o=>o instanceof Element&&o.tagName.toLowerCase()==="sl-icon-button");this.disabled||s||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.key!=="Tab"&&(e.stopPropagation(),this.handleDocumentKeyDown(e))}handleClearClick(e){e.stopPropagation(),this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){const s=e.target.closest("sl-option"),o=this.value;s&&!s.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(s):this.setSelectedOptions(s),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==o&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("wa-option")||customElements.whenDefined("wa-option").then(()=>this.handleDefaultSlotChange());const e=this.getAllOptions(),t=this.valueHasChanged?this.value:this.defaultValue,s=Array.isArray(t)?t:[t],o=[];e.forEach(i=>o.push(i.value)),this.setSelectedOptions(e.filter(i=>s.includes(i.value)))}handleTagRemove(e,t){e.stopPropagation(),this.disabled||(this.toggleOptionSelection(t,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(e){this.getAllOptions().forEach(s=>{s.current=!1,s.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus())}setSelectedOptions(e){const t=this.getAllOptions(),s=Array.isArray(e)?e:[e];t.forEach(o=>o.selected=!1),s.length&&s.forEach(o=>o.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){t===!0||t===!1?e.selected=t:e.selected=!e.selected,this.selectionChanged()}selectionChanged(){var e,t,s;const o=this.getAllOptions();if(this.selectedOptions=o.filter(i=>i.selected),this.multiple)this.value=this.selectedOptions.map(i=>i.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const i=this.selectedOptions[0];this.value=(e=i?.value)!=null?e:"",this.displayLabel=(s=(t=i?.getTextLabel)==null?void 0:t.call(i))!=null?s:""}this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){const s=this.getTag(e,t);return d`<div @sl-remove=${o=>this.handleTagRemove(o,e)}>
          ${typeof s=="string"?on(s):s}
        </div>`}else if(t===this.maxOptionsVisible)return d`<sl-tag size=${this.size}>+${this.selectedOptions.length-t}</sl-tag>`;return d``})}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}handleValueChange(){const e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(e.filter(s=>t.includes(s.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await bt(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:e,options:t}=mt(this,"select.show",{dir:this.localize.dir()});await ft(this.popup.popup,e,t),this.currentOption&&sn(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await bt(this);const{keyframes:e,options:t}=mt(this,"select.hide",{dir:this.localize.dir()});await ft(this.popup.popup,e,t),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,gt(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,gt(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(e){this.valueInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),s=this.label?!0:!!e,o=this.helpText?!0:!!t,i=this.clearable&&!this.disabled&&this.value.length>0,a=this.placeholder&&this.value&&this.value.length<=0;return d`
      <div
        part="form-control"
        class=${W({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":o})}
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
            class=${W({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":a,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
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

              ${i?d`
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
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};S.styles=[K,fs,en];S.dependencies={"sl-icon":G,"sl-popup":z,"sl-tag":it};n([R(".select")],S.prototype,"popup",2);n([R(".select__combobox")],S.prototype,"combobox",2);n([R(".select__display-input")],S.prototype,"displayInput",2);n([R(".select__value-input")],S.prototype,"valueInput",2);n([R(".select__listbox")],S.prototype,"listbox",2);n([b()],S.prototype,"hasFocus",2);n([b()],S.prototype,"displayLabel",2);n([b()],S.prototype,"currentOption",2);n([b()],S.prototype,"selectedOptions",2);n([b()],S.prototype,"valueHasChanged",2);n([l()],S.prototype,"name",2);n([l({converter:{fromAttribute:e=>e.split(" "),toAttribute:e=>e.join(" ")}})],S.prototype,"value",2);n([gs()],S.prototype,"defaultValue",2);n([l({reflect:!0})],S.prototype,"size",2);n([l()],S.prototype,"placeholder",2);n([l({type:Boolean,reflect:!0})],S.prototype,"multiple",2);n([l({attribute:"max-options-visible",type:Number})],S.prototype,"maxOptionsVisible",2);n([l({type:Boolean,reflect:!0})],S.prototype,"disabled",2);n([l({type:Boolean})],S.prototype,"clearable",2);n([l({type:Boolean,reflect:!0})],S.prototype,"open",2);n([l({type:Boolean})],S.prototype,"hoist",2);n([l({type:Boolean,reflect:!0})],S.prototype,"filled",2);n([l({type:Boolean,reflect:!0})],S.prototype,"pill",2);n([l()],S.prototype,"label",2);n([l({reflect:!0})],S.prototype,"placement",2);n([l({attribute:"help-text"})],S.prototype,"helpText",2);n([l({reflect:!0})],S.prototype,"form",2);n([l({type:Boolean,reflect:!0})],S.prototype,"required",2);n([l()],S.prototype,"getTag",2);n([B("disabled",{waitUntilFirstUpdate:!0})],S.prototype,"handleDisabledChange",1);n([B("value",{waitUntilFirstUpdate:!0})],S.prototype,"handleValueChange",1);n([B("open",{waitUntilFirstUpdate:!0})],S.prototype,"handleOpenChange",1);_t("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});_t("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});S.define("sl-select");var an=C`
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
`,me=class extends V{constructor(){super(...arguments),this.localize=new Te(this),this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const e=this.childNodes;let t="";return[...e].forEach(s=>{s.nodeType===Node.ELEMENT_NODE&&(s.hasAttribute("slot")||(t+=s.textContent)),s.nodeType===Node.TEXT_NODE&&(t+=s.textContent)}),t.trim()}render(){return d`
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
    `}};me.styles=[K,an];me.dependencies={"sl-icon":G};n([R(".option__label")],me.prototype,"defaultSlot",2);n([b()],me.prototype,"current",2);n([b()],me.prototype,"selected",2);n([b()],me.prototype,"hasHover",2);n([l({reflect:!0})],me.prototype,"value",2);n([l({type:Boolean,reflect:!0})],me.prototype,"disabled",2);n([B("disabled")],me.prototype,"handleDisabledChange",1);n([B("selected")],me.prototype,"handleSelectedChange",1);n([B("value")],me.prototype,"handleValueChange",1);me.define("sl-option");var rn=C`
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
`,Q=class extends V{constructor(){super(...arguments),this.formControlController=new Bt(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new ot(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(e){e.key==="ArrowLeft"&&(e.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),e.key==="ArrowRight"&&(e.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("help-text"),t=this.helpText?!0:!!e;return d`
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
            value=${k(this.value)}
            .checked=${so(this.checked)}
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
    `}};Q.styles=[K,fs,rn];n([R('input[type="checkbox"]')],Q.prototype,"input",2);n([b()],Q.prototype,"hasFocus",2);n([l()],Q.prototype,"title",2);n([l()],Q.prototype,"name",2);n([l()],Q.prototype,"value",2);n([l({reflect:!0})],Q.prototype,"size",2);n([l({type:Boolean,reflect:!0})],Q.prototype,"disabled",2);n([l({type:Boolean,reflect:!0})],Q.prototype,"checked",2);n([gs("checked")],Q.prototype,"defaultChecked",2);n([l({reflect:!0})],Q.prototype,"form",2);n([l({type:Boolean,reflect:!0})],Q.prototype,"required",2);n([l({attribute:"help-text"})],Q.prototype,"helpText",2);n([B("checked",{waitUntilFirstUpdate:!0})],Q.prototype,"handleCheckedChange",1);n([B("disabled",{waitUntilFirstUpdate:!0})],Q.prototype,"handleDisabledChange",1);Q.define("sl-switch");const Yt={colorTheme:"normal",fontSize:"medium",enableAnimations:!0,enableSounds:!0,enableTextToSpeech:!0,enableReducedMotion:!1,highlightInteractive:!1,voiceName:"",speechRate:0},Ss="caydenjoy_accessibility_settings";class ee{constructor(){this.settings={...Yt},this.listeners=new Set,this.audioUnlockAttached=!1,this.voicesReady=!1,this.loadSettings(),this.attachAudioUnlockHandlers()}static getInstance(){return ee.instance||(ee.instance=new ee),ee.instance}loadSettings(){try{const t=localStorage.getItem(Ss);if(t){const s=JSON.parse(t);this.settings={...Yt,...s}}this.applySettings()}catch(t){console.error("Failed to load accessibility settings:",t),this.settings={...Yt}}}saveSettings(t){this.settings={...this.settings,...t};try{localStorage.setItem(Ss,JSON.stringify(this.settings)),this.applySettings(),this.notifyListeners()}catch(s){console.error("Failed to save accessibility settings:",s)}}getSettings(){return{...this.settings}}subscribe(t){return this.listeners.add(t),()=>{this.listeners.delete(t)}}notifyListeners(){this.listeners.forEach(t=>t(this.getSettings()))}applySettings(){const t=document.documentElement;t.setAttribute("data-theme",this.settings.colorTheme),t.setAttribute("data-font-size",this.settings.fontSize),this.settings.enableReducedMotion?t.style.setProperty("--disable-animations","1"):t.style.setProperty("--disable-animations","0"),this.settings.enableReducedMotion?t.classList.add("prefers-reduced-motion"):t.classList.remove("prefers-reduced-motion"),this.settings.highlightInteractive?t.classList.add("highlight-interactive"):t.classList.remove("highlight-interactive")}getAudioContext(){try{if(!this.audioContext){const t=window.AudioContext||window.webkitAudioContext;if(!t)return null;this.audioContext=new t}return this.audioContext}catch(t){return console.error("AudioContext unavailable:",t),null}}attachAudioUnlockHandlers(){if(this.audioUnlockAttached)return;this.audioUnlockAttached=!0;const t=()=>{const s=this.getAudioContext();s&&s.state==="suspended"&&s.resume().catch(()=>{})};window.addEventListener("pointerdown",t,{passive:!0}),window.addEventListener("touchstart",t,{passive:!0}),window.addEventListener("keydown",t,{passive:!0})}prepareSpeech(){if("speechSynthesis"in window&&(window.speechSynthesis.resume(),!this.voicesReady)){const t=window.speechSynthesis.getVoices();this.voicesReady=t.length>0,this.voicesReady||window.speechSynthesis.addEventListener("voiceschanged",()=>{this.voicesReady=!0},{once:!0})}}speak(t,s=1){this.settings.enableTextToSpeech&&this.speakNow(t,s)}getEnglishVoices(){return"speechSynthesis"in window?window.speechSynthesis.getVoices().filter(t=>t.lang.toLowerCase().startsWith("en")):[]}speakNow(t,s=1){if(window.CaydenJoyVoice){window.CaydenJoyVoice.speak(t,s);return}if(!(!("speechSynthesis"in window)||typeof SpeechSynthesisUtterance>"u"))try{window.speechSynthesis.cancel(),this.prepareSpeech();const o=new SpeechSynthesisUtterance(t),i=window.speechSynthesis.getVoices(),a=i.find(r=>r.name===this.settings.voiceName)??i.find(r=>r.lang.toLowerCase().startsWith("en"));a&&(o.voice=a),o.lang=a?.lang??"en-US",o.rate=this.settings.speechRate||s,o.pitch=1,o.volume=1,window.speechSynthesis.speak(o),setTimeout(()=>window.speechSynthesis.resume(),0)}catch(o){console.error("Text-to-speech failed:",o)}}playSound(t){if(!this.settings.enableSounds)return;const s=this.getAudioContext();s&&this.playTone(s,t)}async playTone(t,s){if(t.state==="suspended")try{await t.resume()}catch{return}const o=t.createOscillator(),i=t.createGain();switch(o.connect(i),i.connect(t.destination),s){case"success":o.frequency.value=800,i.gain.setValueAtTime(.3,t.currentTime),i.gain.exponentialRampToValueAtTime(.01,t.currentTime+.2),o.start(t.currentTime),o.stop(t.currentTime+.2);break;case"error":o.frequency.value=400,i.gain.setValueAtTime(.2,t.currentTime),i.gain.exponentialRampToValueAtTime(.01,t.currentTime+.3),o.start(t.currentTime),o.stop(t.currentTime+.3);break;case"click":o.frequency.value=600,i.gain.setValueAtTime(.1,t.currentTime),i.gain.exponentialRampToValueAtTime(.01,t.currentTime+.1),o.start(t.currentTime),o.stop(t.currentTime+.1);break}}resetToDefaults(){this.settings={...Yt},localStorage.removeItem(Ss),this.applySettings(),this.notifyListeners()}}const As="caydenjoy_license_status",Fo="caydenjoy_redeemed_upgrade_codes";class Ge{constructor(){this.lastError="",this.status={isUpgraded:!1,tier:"none"},this.loadLicense()}static getInstance(){return Ge.instance||(Ge.instance=new Ge),Ge.instance}get verifyEndpoint(){const t="".replace(/\/$/,"");return t?`${t}/api/verify-code`:""}static normalizeCode(t){return t.trim().toUpperCase().replace(/\s+/g,"").replace(/_/g,"-")}loadLicense(){try{const t=localStorage.getItem(As);t&&(this.status={tier:"none",...JSON.parse(t)})}catch(t){console.error("Error loading license status:",t)}}saveLicense(){try{localStorage.setItem(As,JSON.stringify(this.status))}catch(t){console.error("Error saving license status:",t)}}getRedeemedCodes(){try{const t=localStorage.getItem(Fo);return t?JSON.parse(t):[]}catch(t){return console.error("Error loading redeemed upgrade codes:",t),[]}}markCodeRedeemed(t){const s=new Set(this.getRedeemedCodes());s.add(t),localStorage.setItem(Fo,JSON.stringify([...s]))}hasCodeBeenRedeemed(t){return this.getRedeemedCodes().includes(t)}async verifyAndApplyCode(t){if(this.lastError="",!t.trim())return this.lastError="Please enter an upgrade code",!1;const s=this.verifyEndpoint;if(!s)return this.lastError="Upgrade verification is not configured for this build.",!1;const o=Ge.normalizeCode(t);if(this.hasCodeBeenRedeemed(o))return this.lastError="This upgrade key has already been redeemed on this device",!1;let i;try{i=await(await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:o})})).json()}catch(a){return console.error("Error verifying upgrade code:",a),this.lastError="Could not reach the server to verify your code. Check your connection and try again.",!1}return!i.valid||!i.tier?(this.lastError=i.reason||"Invalid upgrade code. Please check and try again.",!1):(this.status.isUpgraded=!0,this.status.tier=i.tier,this.status.upgradeDate=Date.now(),this.status.upgradeCode=i.normalizedCode||o,this.markCodeRedeemed(i.normalizedCode||o),this.saveLicense(),!0)}getLastError(){return this.lastError}isUpgraded(){return this.status.isUpgraded}getTier(){return this.status.tier??"none"}getUpgradeCode(){return this.status.upgradeCode}getUpgradeDate(){return this.status.upgradeDate}resetLicense(){this.status={isUpgraded:!1,tier:"none"},this.lastError="",localStorage.removeItem(As)}}var vt;(function(e){e.Unimplemented="UNIMPLEMENTED",e.Unavailable="UNAVAILABLE"})(vt||(vt={}));class Es extends Error{constructor(t,s,o){super(t),this.message=t,this.code=s,this.data=o}}const nn=e=>{var t,s;return e?.androidBridge?"android":!((s=(t=e?.webkit)===null||t===void 0?void 0:t.messageHandlers)===null||s===void 0)&&s.bridge?"ios":"web"},ln=e=>{const t=e.CapacitorCustomPlatform||null,s=e.Capacitor||{},o=s.Plugins=s.Plugins||{},i=()=>t!==null?t.name:nn(e),a=()=>i()!=="web",r=p=>{const f=u.get(p);return!!(f?.platforms.has(i())||c(p))},c=p=>{var f;return(f=s.PluginHeaders)===null||f===void 0?void 0:f.find(v=>v.name===p)},h=p=>e.console.error(p),u=new Map,m=(p,f={})=>{const v=u.get(p);if(v)return console.warn(`Capacitor plugin "${p}" already registered. Cannot register plugins twice.`),v.proxy;const y=i(),x=c(p);let _;const $=async()=>(!_&&y in f?_=typeof f[y]=="function"?_=await f[y]():_=f[y]:t!==null&&!_&&"web"in f&&(_=typeof f.web=="function"?_=await f.web():_=f.web),_),A=(D,L)=>{var N,Y;if(x){const J=x?.methods.find(q=>L===q.name);if(J)return J.rtype==="promise"?q=>s.nativePromise(p,L.toString(),q):(q,H)=>s.nativeCallback(p,L.toString(),q,H);if(D)return(N=D[L])===null||N===void 0?void 0:N.bind(D)}else{if(D)return(Y=D[L])===null||Y===void 0?void 0:Y.bind(D);throw new Es(`"${p}" plugin is not implemented on ${y}`,vt.Unimplemented)}},P=D=>{let L;const N=(...Y)=>{const J=$().then(q=>{const H=A(q,D);if(H){const ge=H(...Y);return L=ge?.remove,ge}else throw new Es(`"${p}.${D}()" is not implemented on ${y}`,vt.Unimplemented)});return D==="addListener"&&(J.remove=async()=>L()),J};return N.toString=()=>`${D.toString()}() { [capacitor code] }`,Object.defineProperty(N,"name",{value:D,writable:!1,configurable:!1}),N},F=P("addListener"),M=P("removeListener"),se=(D,L)=>{const N=F({eventName:D},L),Y=async()=>{const q=await N;M({eventName:D,callbackId:q},L)},J=new Promise(q=>N.then(()=>q({remove:Y})));return J.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await Y()},J},Z=new Proxy({},{get(D,L){switch(L){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return x?se:F;case"removeListener":return M;default:return P(L)}}});return o[p]=Z,u.set(p,{name:p,proxy:Z,platforms:new Set([...Object.keys(f),...x?[y]:[]])}),Z};return s.convertFileSrc||(s.convertFileSrc=p=>p),s.getPlatform=i,s.handleError=h,s.isNativePlatform=a,s.isPluginAvailable=r,s.registerPlugin=m,s.Exception=Es,s.DEBUG=!!s.DEBUG,s.isLoggingEnabled=!!s.isLoggingEnabled,s},cn=e=>e.Capacitor=ln(e),Lt=cn(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),ki=Lt.registerPlugin;class Ci{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(t,s){let o=!1;this.listeners[t]||(this.listeners[t]=[],o=!0),this.listeners[t].push(s);const a=this.windowListeners[t];a&&!a.registered&&this.addWindowListener(a),o&&this.sendRetainedArgumentsForEvent(t);const r=async()=>this.removeListener(t,s);return Promise.resolve({remove:r})}async removeAllListeners(){this.listeners={};for(const t in this.windowListeners)this.removeWindowListener(this.windowListeners[t]);this.windowListeners={}}notifyListeners(t,s,o){const i=this.listeners[t];if(!i){if(o){let a=this.retainedEventArguments[t];a||(a=[]),a.push(s),this.retainedEventArguments[t]=a}return}i.forEach(a=>a(s))}hasListeners(t){var s;return!!(!((s=this.listeners[t])===null||s===void 0)&&s.length)}registerWindowListener(t,s){this.windowListeners[s]={registered:!1,windowEventName:t,pluginEventName:s,handler:o=>{this.notifyListeners(s,o)}}}unimplemented(t="not implemented"){return new Lt.Exception(t,vt.Unimplemented)}unavailable(t="not available"){return new Lt.Exception(t,vt.Unavailable)}async removeListener(t,s){const o=this.listeners[t];if(!o)return;const i=o.indexOf(s);this.listeners[t].splice(i,1),this.listeners[t].length||this.removeWindowListener(this.windowListeners[t])}addWindowListener(t){window.addEventListener(t.windowEventName,t.handler),t.registered=!0}removeWindowListener(t){t&&(window.removeEventListener(t.windowEventName,t.handler),t.registered=!1)}sendRetainedArgumentsForEvent(t){const s=this.retainedEventArguments[t];s&&(delete this.retainedEventArguments[t],s.forEach(o=>{this.notifyListeners(t,o)}))}}const Vo=e=>encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),qo=e=>e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class dn extends Ci{async getCookies(){const t=document.cookie,s={};return t.split(";").forEach(o=>{if(o.length<=0)return;let[i,a]=o.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");i=qo(i).trim(),a=qo(a).trim(),s[i]=a}),s}async setCookie(t){try{const s=Vo(t.key),o=Vo(t.value),i=t.expires?`; expires=${t.expires.replace("expires=","")}`:"",a=(t.path||"/").replace("path=",""),r=t.url!=null&&t.url.length>0?`domain=${t.url}`:"";document.cookie=`${s}=${o||""}${i}; path=${a}; ${r};`}catch(s){return Promise.reject(s)}}async deleteCookie(t){try{document.cookie=`${t.key}=; Max-Age=0`}catch(s){return Promise.reject(s)}}async clearCookies(){try{const t=document.cookie.split(";")||[];for(const s of t)document.cookie=s.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(t){return Promise.reject(t)}}async clearAllCookies(){try{await this.clearCookies()}catch(t){return Promise.reject(t)}}}ki("CapacitorCookies",{web:()=>new dn});const hn=async e=>new Promise((t,s)=>{const o=new FileReader;o.onload=()=>{const i=o.result;t(i.indexOf(",")>=0?i.split(",")[1]:i)},o.onerror=i=>s(i),o.readAsDataURL(e)}),un=(e={})=>{const t=Object.keys(e);return Object.keys(e).map(i=>i.toLocaleLowerCase()).reduce((i,a,r)=>(i[a]=e[t[r]],i),{})},pn=(e,t=!0)=>e?Object.entries(e).reduce((o,i)=>{const[a,r]=i;let c,h;return Array.isArray(r)?(h="",r.forEach(u=>{c=t?encodeURIComponent(u):u,h+=`${a}=${c}&`}),h.slice(0,-1)):(c=t?encodeURIComponent(r):r,h=`${a}=${c}`),`${o}&${h}`},"").substr(1):null,mn=(e,t={})=>{const s=Object.assign({method:e.method||"GET",headers:e.headers},t),i=un(e.headers)["content-type"]||"";if(typeof e.data=="string")s.body=e.data;else if(i.includes("application/x-www-form-urlencoded")){const a=new URLSearchParams;for(const[r,c]of Object.entries(e.data||{}))a.set(r,c);s.body=a.toString()}else if(i.includes("multipart/form-data")||e.data instanceof FormData){const a=new FormData;if(e.data instanceof FormData)e.data.forEach((c,h)=>{a.append(h,c)});else for(const c of Object.keys(e.data))a.append(c,e.data[c]);s.body=a;const r=new Headers(s.headers);r.delete("content-type"),s.headers=r}else(i.includes("application/json")||typeof e.data=="object")&&(s.body=JSON.stringify(e.data));return s};class gn extends Ci{async request(t){const s=mn(t,t.webFetchExtra),o=pn(t.params,t.shouldEncodeUrlParams),i=o?`${t.url}?${o}`:t.url,a=await fetch(i,s),r=a.headers.get("content-type")||"";let{responseType:c="text"}=a.ok?t:{};r.includes("application/json")&&(c="json");let h,u;switch(c){case"arraybuffer":case"blob":u=await a.blob(),h=await hn(u);break;case"json":h=await a.json();break;default:h=await a.text()}const m={};return a.headers.forEach((p,f)=>{m[f]=p}),{data:h,headers:m,status:a.status,url:a.url}}async get(t){return this.request(Object.assign(Object.assign({},t),{method:"GET"}))}async post(t){return this.request(Object.assign(Object.assign({},t),{method:"POST"}))}async put(t){return this.request(Object.assign(Object.assign({},t),{method:"PUT"}))}async patch(t){return this.request(Object.assign(Object.assign({},t),{method:"PATCH"}))}async delete(t){return this.request(Object.assign(Object.assign({},t),{method:"DELETE"}))}}ki("CapacitorHttp",{web:()=>new gn});const ls={family:"caydenjoy_family",learning:"caydenjoy_learning",allAccess:"caydenjoy_all_access"},Ho={none:0,family:1,learning:2,allAccess:3},$i="1";function fn(e){return e.reduce((t,s)=>Ho[s]>Ho[t]?s:t,"none")}function Ti(e){return Object.keys(ls).find(s=>ls[s]===e)??null}function bn(e){const t=e.filter(s=>s.purchaseState===$i).map(s=>Ti(s.productIdentifier)).filter(s=>s!==null);return fn(t)}function po(){return Lt.isNativePlatform()&&Lt.getPlatform()==="android"}async function mo(){const e=await ct(()=>import("./index-BFvR1_tC.js"),[]);return{NativePurchases:e.NativePurchases,PURCHASE_TYPE:e.PURCHASE_TYPE}}async function vn(){if(!po())return[];const{NativePurchases:e,PURCHASE_TYPE:t}=await mo(),{products:s}=await e.getProducts({productIdentifiers:Object.values(ls),productType:t.INAPP});return s.map(o=>({tier:Ti(o.identifier),priceString:o.priceString})).filter(o=>o.tier!==null)}async function yn(){if(!po())return"none";const{NativePurchases:e,PURCHASE_TYPE:t}=await mo(),{purchases:s}=await e.getPurchases({productType:t.INAPP});return bn(s)}async function wn(e){if(!po())return{status:"error",message:"Purchases are only available in the Google Play app."};const{NativePurchases:t,PURCHASE_TYPE:s}=await mo();try{return(await t.purchaseProduct({productIdentifier:ls[e],productType:s.INAPP,quantity:1})).purchaseState!==$i?{status:"pending"}:{status:"purchased",tier:await yn()}}catch(o){const i=o instanceof Error?o.message:String(o);return/cancel/i.test(i)?{status:"cancelled"}:{status:"error",message:i}}}const Kt="caydenjoy_premium_status",xn=Ba,Ns="caydenjoy-premium-changed";class te{constructor(){this.status={isPremium:!1,tier:"none",features:{customImages:!1,voiceCustomization:!1,cloudBackup:!1,additionalTabs:!1}},this.loadStatus()}static getInstance(){return te.instance||(te.instance=new te),te.instance}loadStatus(){try{this.status={isPremium:!1,tier:"none",features:{customImages:!1,voiceCustomization:!1,cloudBackup:!1,additionalTabs:!1}};const t=ja?null:Ge.getInstance();if(t&&t.isUpgraded()){console.log("[LICENSE] App upgraded via license code");const o=t.getTier();this.status=this.createStatusForTier(o==="none"?"allAccess":o);return}const s=localStorage.getItem(Kt);if(s){const o=JSON.parse(s)?.tier??"none",i=["none","family","learning","allAccess"];this.status=this.createStatusForTier(i.includes(o)?o:"none")}}catch(t){console.error("Error loading premium status:",t)}}refreshStatus(){this.loadStatus()}async syncWithPlay(){return this.getTier()}applyStoreTier(t){const s=this.status.tier;this.status=this.createStatusForTier(t),t==="none"?localStorage.removeItem(Kt):this.saveStatus(),s!==t&&window.dispatchEvent(new CustomEvent(Ns,{detail:{tier:t}}))}getStatus(){return{...this.status}}getTier(){return this.status.tier??"none"}isPremium(){return this.status.isPremium}hasFeature(t){return this.status.features[t]||!1}canUseCustomImages(){return this.hasFeature("customImages")}canCustomizeVoice(){return this.hasFeature("voiceCustomization")}canUseCloudBackup(){return this.hasFeature("cloudBackup")}canAddAdditionalTabs(){return this.hasFeature("additionalTabs")}createStatusForTier(t){const s={isPremium:t!=="none",tier:t,purchaseDate:t==="none"?void 0:Date.now(),features:{customImages:!1,voiceCustomization:!1,cloudBackup:!1,additionalTabs:!1}};return t==="family"&&(s.features.customImages=!0),t==="learning"&&(s.features.customImages=!0,s.features.voiceCustomization=!0),t==="allAccess"&&(s.features.customImages=!0,s.features.voiceCustomization=!0,s.features.cloudBackup=!0,s.features.additionalTabs=!0),s}simulatePremiumPurchase(t="allAccess"){{console.warn("[PREMIUM] simulatePremiumPurchase ignored outside dev mode");return}}saveStatus(){try{localStorage.setItem(Kt,JSON.stringify(this.status))}catch(t){console.error("Error saving premium status:",t)}}unlockPremium(){}resetPremium(){localStorage.removeItem(Kt),this.status={isPremium:!1,tier:"none",features:{customImages:!1,voiceCustomization:!1,cloudBackup:!1,additionalTabs:!1}}}}te.getInstance();var _n=Object.getOwnPropertyDescriptor,kn=(e,t,s,o)=>{for(var i=o>1?void 0:o?_n(t,s):t,a=e.length-1,r;a>=0;a--)(r=e[a])&&(i=r(i)||i);return i};let js=class extends O{render(){return d`
      <footer>
        <div class="footer-container">
          <div class="footer-grid">
            <div class="footer-section">
              <h3>Product</h3>
              <ul>
                <li><a href="${g("home")}">Home Dashboard</a></li>
                <li><a href="${g()}">Communication Board</a></li>
                <li><a href="${g("family-puzzle")}">Activity Sessions</a></li>
                <li><a href="${g("premium")}">Premium Tiers</a></li>
              </ul>
            </div>

            <div class="footer-section">
              <h3>Support</h3>
              <ul>
                <li><a href="${g("faq")}">FAQ</a></li>
                <li><a href="${g("contact")}">Contact Support</a></li>
                <li><a href="${g("feedback")}">Feedback & Wishlist</a></li>
                <li><a href="${g("documentation")}">Documentation</a></li>
              </ul>
            </div>

            <div class="footer-section">
              <h3>Company</h3>
              <ul>
                <li><a href="${g("about")}">About CaydenJoy</a></li>
                <li><a href="${g("privacy")}">Privacy Policy</a></li>
                <li><a href="${g("terms")}">Terms of Service</a></li>
                <li><a href="${g("license")}">License</a></li>
              </ul>
            </div>

            <div class="footer-section">
              <h3>Resources</h3>
              <ul>
                ${d`<li><a href="${g("download")}">Download Android APK</a></li>`}
                <li><a href="${g("custom-images")}">Custom Photos</a></li>
                <li><a href="${g("progress")}">Progress Dashboard</a></li>
                ${d`<li><a href="${g("upgrade")}">APK Upgrade Keys</a></li>`}
              </ul>
            </div>
          </div>

          <div class="footer-bottom">
            <div class="copyright">
              (c) ${new Date().getFullYear()} CaydenJoy. All rights reserved.
            </div>
            <div class="quick-links">
              <a href="${g("feedback")}">Feedback</a>
              <a href="${g("contact")}">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    `}};js.styles=C`
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
  `;js=kn([j("app-footer")],js);var Cn=Object.defineProperty,$n=Object.getOwnPropertyDescriptor,Si=(e,t,s,o)=>{for(var i=o>1?void 0:o?$n(t,s):t,a=e.length-1,r;a>=0;a--)(r=e[a])&&(i=(o?r(t,s,i):r(i))||i);return o&&i&&Cn(t,s,i),i};let cs=class extends O{constructor(){super(...arguments),this.settings=ee.getInstance().getSettings(),this.accessibilityManager=ee.getInstance(),this.premiumManager=te.getInstance()}connectedCallback(){super.connectedCallback(),this.unsubscribe=this.accessibilityManager.subscribe(e=>{this.settings=e})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe&&this.unsubscribe()}onThemeChange(e){this.accessibilityManager.saveSettings({colorTheme:e})}onFontSizeChange(e){const t=e.target.value;this.accessibilityManager.saveSettings({fontSize:t})}onAnimationsChange(e){const t=e.target.checked;this.accessibilityManager.saveSettings({enableAnimations:t})}onSoundsChange(e){const t=e.target.checked;this.accessibilityManager.saveSettings({enableSounds:t})}onTextToSpeechChange(e){const t=e.target.checked;this.accessibilityManager.saveSettings({enableTextToSpeech:t}),t&&this.accessibilityManager.speak("Text to speech enabled")}onVoiceChange(e){this.accessibilityManager.saveSettings({voiceName:e.target.value})}onSpeechRateChange(e){this.accessibilityManager.saveSettings({speechRate:Number(e.target.value)})}onReducedMotionChange(e){const t=e.target.checked;this.accessibilityManager.saveSettings({enableReducedMotion:t})}onHighlightInteractiveChange(e){const t=e.target.checked;this.accessibilityManager.saveSettings({highlightInteractive:t})}resetSettings(){confirm("Reset all settings to defaults? This cannot be undone.")&&this.accessibilityManager.resetToDefaults()}testSound(){this.accessibilityManager.playSound("success")}testSpeech(){this.accessibilityManager.speak("This is a test of the text to speech feature.")}render(){const e=this.premiumManager.canCustomizeVoice(),t=this.accessibilityManager.getEnglishVoices();return d`
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
                <sl-button href=${g("premium")} size="medium">View Learning Plus</sl-button>
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
    `}};cs.styles=[Fe,C`
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
    `];Si([b()],cs.prototype,"settings",2);cs=Si([j("app-settings")],cs);var Tn=C`
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
`,ve=class extends V{constructor(){super(...arguments),this.localize=new Te(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(e=>{for(const t of e)t.type==="attributes"&&t.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.detailsObserver)==null||e.disconnect()}handleSummaryClick(e){e.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.open?this.hide():this.show()),(e.key==="ArrowUp"||e.key==="ArrowLeft")&&(e.preventDefault(),this.hide()),(e.key==="ArrowDown"||e.key==="ArrowRight")&&(e.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await bt(this.body);const{keyframes:t,options:s}=mt(this,"details.show",{dir:this.localize.dir()});await ft(this.body,Bo(t,this.body.scrollHeight),s),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await bt(this.body);const{keyframes:t,options:s}=mt(this,"details.hide",{dir:this.localize.dir()});await ft(this.body,Bo(t,this.body.scrollHeight),s),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,gt(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,gt(this,"sl-after-hide")}render(){const e=this.localize.dir()==="rtl";return d`
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
    `}};ve.styles=[K,Tn];ve.dependencies={"sl-icon":G};n([R(".details")],ve.prototype,"details",2);n([R(".details__header")],ve.prototype,"header",2);n([R(".details__body")],ve.prototype,"body",2);n([R(".details__expand-icon-slot")],ve.prototype,"expandIconSlot",2);n([l({type:Boolean,reflect:!0})],ve.prototype,"open",2);n([l()],ve.prototype,"summary",2);n([l({type:Boolean,reflect:!0})],ve.prototype,"disabled",2);n([B("open",{waitUntilFirstUpdate:!0})],ve.prototype,"handleOpenChange",1);_t("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});_t("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});ve.define("sl-details");var Sn=Object.getOwnPropertyDescriptor,An=(e,t,s,o)=>{for(var i=o>1?void 0:o?Sn(t,s):t,a=e.length-1,r;a>=0;a--)(r=e[a])&&(i=r(i)||i);return i};let Bs=class extends O{constructor(){super(...arguments),this.faqData=[{question:"What is a Progressive Web App (PWA)?",answer:"A Progressive Web App is a web application that uses web technologies to provide a native app-like experience. PWAs can be installed on your device, work offline, and send push notifications."},{question:"Can I use CaydenJoy offline?",answer:"Yes! CaydenJoy is built as a PWA with offline support. Once you've loaded the app, it will work without an internet connection and sync data when you're back online."},{question:"How do I install CaydenJoy on my device?",answer:'On most browsers and devices, you can install CaydenJoy by clicking the "Install" button that appears in the address bar, or through the browser menu. On some devices, you can add it to your home screen.'},{question:"Is my data secure?",answer:"Yes, your data is encrypted and stored securely. We use HTTPS to protect data in transit and implement industry-standard security practices."},{question:"How do I enable notifications?",answer:"You can enable notifications in the Settings page. When you enable them, your browser may ask for permission to send notifications."},{question:"What devices are supported?",answer:"CaydenJoy works on any device with a modern web browser, including smartphones, tablets, and computers. It supports iOS, Android, Windows, and macOS."},{question:"How do I update CaydenJoy?",answer:"CaydenJoy updates automatically in the background. You'll always have the latest version without needing to manually update."},{question:"Can I use CaydenJoy on multiple devices?",answer:"Yes! You can install and use CaydenJoy on as many devices as you want. Each installation can be customized with your preferences."},{question:"How do I backup my data?",answer:"Your data is automatically backed up in your browser's local storage. You can export your data from the Settings page."},{question:"Is CaydenJoy free?",answer:"Yes, CaydenJoy is completely free to use. There are no hidden costs or premium features."}]}render(){return d`
      <app-header></app-header>

      <main>
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about CaydenJoy</p>

        <sl-card class="search-box">
          <div slot="header">Quick Help</div>
          <p>Can't find what you're looking for? <a href="${g("contact")}">Contact us</a> for personalized support.</p>
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
          <sl-button href="${g("contact")}" variant="primary">
            Contact Support
          </sl-button>
        </div>

        <div style="text-align: center; margin-top: 48px;">
          <sl-button href="${g()}" variant="primary">Back to Home</sl-button>
        </div>
      </main>
    `}renderFAQItem(e){return d`
      <sl-details>
        <span slot="summary">${e.question}</span>
        <p>${e.answer}</p>
      </sl-details>
    `}};Bs.styles=[Fe,C`
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
    `];Bs=An([j("app-faq")],Bs);const Ps="caydenjoy_progress_events",En=500;class oe{static getInstance(){return oe.instance||(oe.instance=new oe),oe.instance}log(t,s,o=""){const a=[{id:`event_${Date.now()}_${Math.random().toString(36).slice(2,8)}`,type:t,label:s,detail:o,createdAt:Date.now()},...this.getEvents()].slice(0,En);localStorage.setItem(Ps,JSON.stringify(a))}getEvents(){try{const t=localStorage.getItem(Ps);return t?JSON.parse(t):[]}catch(t){return console.error("Could not load progress events:",t),[]}}getSummary(){const t=this.getEvents(),s=new Date;s.setHours(0,0,0,0);const o=new Map,i={communication:0,activity:0,safety:0};return t.forEach(a=>{o.set(a.label,(o.get(a.label)??0)+1),i[a.type]+=1}),{totalEvents:t.length,todayEvents:t.filter(a=>a.createdAt>=s.getTime()).length,topLabels:[...o.entries()].map(([a,r])=>({label:a,count:r})).sort((a,r)=>r.count-a.count).slice(0,8),typeCounts:i,recentEvents:t.slice(0,12)}}clear(){localStorage.removeItem(Ps)}}oe.getInstance();const At="caydenjoy_custom_images",Jo=50,Wo=500*1024;class ie{constructor(){this.initStorage()}static getInstance(){return ie.instance||(ie.instance=new ie),ie.instance}initStorage(){try{localStorage.getItem(At)||localStorage.setItem(At,JSON.stringify([]))}catch(t){console.error("Error initializing custom images storage:",t)}}getImages(){try{const t=localStorage.getItem(At);return t?JSON.parse(t):[]}catch(t){return console.error("Error loading custom images:",t),[]}}saveImages(t){try{localStorage.setItem(At,JSON.stringify(t))}catch(s){console.error("Error saving custom images:",s),s instanceof DOMException&&s.name==="QuotaExceededError"&&this.handleStorageQuotaExceeded()}}handleStorageQuotaExceeded(){console.warn("Storage quota exceeded. Removing oldest images.");const t=this.getImages();t.length>0&&(t.sort((s,o)=>s.uploadedAt-o.uploadedAt),t.splice(0,5),this.saveImages(t))}addImage(t,s,o){try{if(!t||!s||!o)throw new Error("Missing required fields");if(o.length>Wo)throw new Error(`Image too large. Maximum size: ${Wo/1024}KB`);const i=this.getImages();if(i.length>=Jo)throw new Error(`Maximum ${Jo} images reached`);const a={id:`img_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,category:t,name:s,dataUrl:o,uploadedAt:Date.now()};return i.push(a),this.saveImages(i),a}catch(i){return console.error("Error adding custom image:",i),null}}getImagesByCategory(t){return this.getImages().filter(s=>s.category===t)}getImage(t){return this.getImages().find(s=>s.id===t)}getAllImages(){return this.getImages()}updateImage(t,s){try{const o=this.getImages(),i=o.find(a=>a.id===t);return i?(i.name=s,this.saveImages(o),!0):!1}catch(o){return console.error("Error updating image:",o),!1}}deleteImage(t){try{const s=this.getImages().filter(o=>o.id!==t);return this.saveImages(s),!0}catch(s){return console.error("Error deleting image:",s),!1}}deleteByCategory(t){try{const s=this.getImages().filter(o=>o.category!==t);return this.saveImages(s),!0}catch(s){return console.error("Error deleting images by category:",s),!1}}getStorageInfo(){const s=this.getImages().reduce((i,a)=>i+a.dataUrl.length,0),o=5*1024*1024;return{used:s,max:o,percentage:Math.round(s/o*100)}}clearAll(){try{return localStorage.setItem(At,JSON.stringify([])),!0}catch(t){return console.error("Error clearing images:",t),!1}}exportData(){return JSON.stringify(this.getImages())}importData(t){try{const s=JSON.parse(t);return Array.isArray(s)?(this.saveImages(s),!0):!1}catch(s){return console.error("Error importing images:",s),!1}}}ie.getInstance();const Pn=8;class ne{constructor(){this.words=[],this.listeners=new Set}static getInstance(){return ne.instance||(ne.instance=new ne),ne.instance}subscribe(t){return this.listeners.add(t),t(this.getWords()),()=>{this.listeners.delete(t)}}notify(){const t=this.getWords();this.listeners.forEach(s=>s(t))}getWords(){return[...this.words]}addWord(t){!t.label||!t.label.trim()||(this.words.length>=Pn&&(this.words=this.words.slice(1)),this.words=[...this.words,{id:`w-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,...t}],this.notify())}removeLast(){this.words.length!==0&&(this.words=this.words.slice(0,-1),this.notify())}clear(){this.words.length!==0&&(this.words=[],this.notify())}getSentenceText(){return this.words.map(t=>t.label).join(" ")}isEmpty(){return this.words.length===0}}ne.getInstance();const In="data:image/svg+xml,��1�Y�",zn="/CaydenJoy/code/photo-1455390582262-044cdead277a-C61LrmZ8.jpg",On="/CaydenJoy/code/photo-1482049016688-2d3e1b311543-BZEy8Z82.jpg",Dn="/CaydenJoy/code/photo-1490474418585-ba9bad8fd0ea-ChhTRUgG.jpg",Mn="/CaydenJoy/code/photo-1498837167922-ddd27525d352-AHYWU8nE.jpg",Ln="/CaydenJoy/code/photo-1500530855697-b586d89ba3ee-Ckeg9pWj.jpg",Un="/CaydenJoy/code/photo-1503454537195-1dcabb73ffb9-B0MwrYqq.jpg",Rn="/CaydenJoy/code/photo-1503676260728-1c00da094a0b-DL4-gXJA.jpg",Nn="/CaydenJoy/code/photo-1505693416388-ac5ce068fe85-C3L0XwKT.jpg",jn="/CaydenJoy/code/photo-1505740420928-5e560c06d30e-DLDrwMU0.jpg",Bn="/CaydenJoy/code/photo-1507525428034-b723cf961d3e-DSxEHe-k.jpg",Fn="/CaydenJoy/code/photo-1508214751196-bcfd4ca60f91-DlAy00TX.jpg",Vn="/CaydenJoy/code/photo-1509440159596-0249088772ff-BGKw-g5w.jpg",qn="/CaydenJoy/code/photo-1513558161293-cdaf765ed2fd-BNZl8Vs7.jpg",Hn="/CaydenJoy/code/photo-1515488042361-ee00e0ddd4e4-BaBIQM1i.jpg",Jn="/CaydenJoy/code/photo-1516035069371-29a1b244cc32-DY1kBsFm.jpg",Wn="/CaydenJoy/code/photo-1516321318423-f06f85e504b3-BcI0Bgwj.jpg",Yn="/CaydenJoy/code/photo-1517048676732-d65bc937f952-CVgMUmZr.jpg",Kn="/CaydenJoy/code/photo-1517248135467-4c7edcad34c4-CrVpx7xe.jpg",Gn="/CaydenJoy/code/photo-1517256064527-09c73fc73e38-rCo3qCIV.jpg",Xn="/CaydenJoy/code/photo-1518611012118-696072aa579a-CyCGs7_e.jpg",Qn="/CaydenJoy/code/photo-1518977676601-b53f82aba655-Bc7mfDrM.jpg",Zn="/CaydenJoy/code/photo-1519331379826-f10be5486c6f-DiTp9L4L.jpg",el="/CaydenJoy/code/photo-1519494026892-80bbd2d6fd0d-TepzwoGl.jpg",tl="/CaydenJoy/code/photo-1521483451569-e33803c0330c-m676z7aa.jpg",sl="/CaydenJoy/code/photo-1521587760476-6c12a4b040da-q4TKwAzt.jpg",ol="/CaydenJoy/code/photo-1521791136064-7986c2920216-Con7PV90.jpg",il="/CaydenJoy/code/photo-1528825871115-3581a5387919-BUXZ8A25.jpg",al="/CaydenJoy/code/photo-1536304993881-ff6e9eefa2a6-B5Dptz8s.jpg",rl="/CaydenJoy/code/photo-1542291026-7eec264c27ff-BsjXyS_w.jpg",nl="/CaydenJoy/code/photo-1544027993-37dbfe43562a-DjWucVZo.jpg",ll="/CaydenJoy/code/photo-1544717305-2782549b5136-CNuZ6OSu.jpg",cl="/CaydenJoy/code/photo-1546182990-dffeafbe841d-D4lDTO6q.jpg",dl="/CaydenJoy/code/photo-1548839140-29a749e1cf4d-CzXppUw2.jpg",hl="/CaydenJoy/code/photo-1551024601-bec78aea704b-BywyXG5r.jpg",ul="/CaydenJoy/code/photo-1551288049-bebda4e38f71-BtKur4xH.jpg",pl="/CaydenJoy/code/photo-1552053831-71594a27632d-Co5GndtP.jpg",ml="/CaydenJoy/code/photo-1553062407-98eeb64c6a62-BcmavUBZ.jpg",gl="/CaydenJoy/code/photo-1556909114-f6e7ad7d3136-iAuytV5v.jpg",fl="/CaydenJoy/code/photo-1560806887-1e4cd0b6cbd6-BBAeoRDl.jpg",bl="/CaydenJoy/code/photo-1564013799919-ab600027ffc6-BFqnetWe.jpg",vl="/CaydenJoy/code/photo-1566576912321-d58ddd7a6088-LxOwIXdM.jpg",yl="/CaydenJoy/code/photo-1569718212165-3a8278d5f624-J3G16zSF.jpg",wl="/CaydenJoy/code/photo-1571771894821-ce9b6c11b08e-DBaUpkNM.jpg",xl="/CaydenJoy/code/photo-1580582932707-520aed937b7b-DlwLzZZJ.jpg",_l="/CaydenJoy/code/photo-1581092160607-ee22621dd758-7mBxKQBD.jpg",kl="/CaydenJoy/code/photo-1581798459219-318e76aecc7b-CMxt8_5W.jpg",Cl="/CaydenJoy/code/photo-1584622650111-993a426fbf0a-CMOJ9HY2.jpg",$l="/CaydenJoy/code/photo-1596997000103-e597b3ca50df-CyJF-qMJ.jpg",Tl="/CaydenJoy/code/photo-1598103442097-8b74394b95c6-gDF5xsWt.jpg",Sl="/CaydenJoy/code/photo-1601004890684-d8cbf643f5f2-BBVL-csm.jpg",Al="/CaydenJoy/code/photo-1604719312566-8912e9227c6a-BiZeY-JF.jpg",El="/CaydenJoy/code/photo-1609840114035-3c981b782dfe-C-4hsaLZ.jpg",Pl="/CaydenJoy/code/photo-1622597467836-f3285f2131b8-Cbw8GP5Z.jpg",Il="data:image/svg+xml,��1�Y�",Yo=Object.assign({"../assets/photos/grandad.svg":In,"../assets/photos/photo-1455390582262-044cdead277a.jpg":zn,"../assets/photos/photo-1482049016688-2d3e1b311543.jpg":On,"../assets/photos/photo-1490474418585-ba9bad8fd0ea.jpg":Dn,"../assets/photos/photo-1498837167922-ddd27525d352.jpg":Mn,"../assets/photos/photo-1500530855697-b586d89ba3ee.jpg":Ln,"../assets/photos/photo-1503454537195-1dcabb73ffb9.jpg":Un,"../assets/photos/photo-1503676260728-1c00da094a0b.jpg":Rn,"../assets/photos/photo-1505693416388-ac5ce068fe85.jpg":Nn,"../assets/photos/photo-1505740420928-5e560c06d30e.jpg":jn,"../assets/photos/photo-1507525428034-b723cf961d3e.jpg":Bn,"../assets/photos/photo-1508214751196-bcfd4ca60f91.jpg":Fn,"../assets/photos/photo-1509440159596-0249088772ff.jpg":Vn,"../assets/photos/photo-1513558161293-cdaf765ed2fd.jpg":qn,"../assets/photos/photo-1515488042361-ee00e0ddd4e4.jpg":Hn,"../assets/photos/photo-1516035069371-29a1b244cc32.jpg":Jn,"../assets/photos/photo-1516321318423-f06f85e504b3.jpg":Wn,"../assets/photos/photo-1517048676732-d65bc937f952.jpg":Yn,"../assets/photos/photo-1517248135467-4c7edcad34c4.jpg":Kn,"../assets/photos/photo-1517256064527-09c73fc73e38.jpg":Gn,"../assets/photos/photo-1518611012118-696072aa579a.jpg":Xn,"../assets/photos/photo-1518977676601-b53f82aba655.jpg":Qn,"../assets/photos/photo-1519331379826-f10be5486c6f.jpg":Zn,"../assets/photos/photo-1519494026892-80bbd2d6fd0d.jpg":el,"../assets/photos/photo-1521483451569-e33803c0330c.jpg":tl,"../assets/photos/photo-1521587760476-6c12a4b040da.jpg":sl,"../assets/photos/photo-1521791136064-7986c2920216.jpg":ol,"../assets/photos/photo-1528825871115-3581a5387919.jpg":il,"../assets/photos/photo-1536304993881-ff6e9eefa2a6.jpg":al,"../assets/photos/photo-1542291026-7eec264c27ff.jpg":rl,"../assets/photos/photo-1544027993-37dbfe43562a.jpg":nl,"../assets/photos/photo-1544717305-2782549b5136.jpg":ll,"../assets/photos/photo-1546182990-dffeafbe841d.jpg":cl,"../assets/photos/photo-1548839140-29a749e1cf4d.jpg":dl,"../assets/photos/photo-1551024601-bec78aea704b.jpg":hl,"../assets/photos/photo-1551288049-bebda4e38f71.jpg":ul,"../assets/photos/photo-1552053831-71594a27632d.jpg":pl,"../assets/photos/photo-1553062407-98eeb64c6a62.jpg":ml,"../assets/photos/photo-1556909114-f6e7ad7d3136.jpg":gl,"../assets/photos/photo-1560806887-1e4cd0b6cbd6.jpg":fl,"../assets/photos/photo-1564013799919-ab600027ffc6.jpg":bl,"../assets/photos/photo-1566576912321-d58ddd7a6088.jpg":vl,"../assets/photos/photo-1569718212165-3a8278d5f624.jpg":yl,"../assets/photos/photo-1571771894821-ce9b6c11b08e.jpg":wl,"../assets/photos/photo-1580582932707-520aed937b7b.jpg":xl,"../assets/photos/photo-1581092160607-ee22621dd758.jpg":_l,"../assets/photos/photo-1581798459219-318e76aecc7b.jpg":kl,"../assets/photos/photo-1584622650111-993a426fbf0a.jpg":Cl,"../assets/photos/photo-1596997000103-e597b3ca50df.jpg":$l,"../assets/photos/photo-1598103442097-8b74394b95c6.jpg":Tl,"../assets/photos/photo-1601004890684-d8cbf643f5f2.jpg":Sl,"../assets/photos/photo-1604719312566-8912e9227c6a.jpg":Al,"../assets/photos/photo-1609840114035-3c981b782dfe.jpg":El,"../assets/photos/photo-1622597467836-f3285f2131b8.jpg":Pl,"../assets/photos/therapy.svg":Il});function w(e){const t=Yo[`../assets/photos/${e}.jpg`]??Yo[`../assets/photos/${e}.svg`];return t||(console.error(`[photos] missing bundled photo: ${e}`),"")}var zl=Object.defineProperty,Ol=Object.getOwnPropertyDescriptor,at=(e,t,s,o)=>{for(var i=o>1?void 0:o?Ol(t,s):t,a=e.length-1,r;a>=0;a--)(r=e[a])&&(i=(o?r(t,s,i):r(i))||i);return o&&i&&zl(t,s,i),i};let ze=class extends O{constructor(){super(...arguments),this.activeRequest=null,this.tabs=[],this.activeTabId=null,this.showNewTabModal=!1,this.newTabName="",this.customRequests=[],this.premiumManager=te.getInstance(),this.accessibilityManager=ee.getInstance(),this.progressManager=oe.getInstance(),this.customImagesManager=ie.getInstance(),this.sentenceBuilder=ne.getInstance(),this.DEFAULT_TAB_ID="default",this.TABS_STORAGE_KEY="caydenjoy_communication_tabs",this.CUSTOM_CATEGORY="communication",this.requests=[{id:1,text:"I'm hungry",phrase:"I'm hungry.",category:"Food",color:"#2e7d32",imageUrl:w("photo-1498837167922-ddd27525d352")},{id:2,text:"I'm thirsty",phrase:"I'm thirsty.",category:"Drink",color:"#1976a2",imageUrl:w("photo-1548839140-29a749e1cf4d")},{id:3,text:"Bathroom",phrase:"I need the bathroom.",category:"Need",color:"#6b5b95",imageUrl:w("photo-1584622650111-993a426fbf0a")},{id:4,text:"Break",phrase:"I need a break.",category:"Sensory",color:"#1f7a8c",imageUrl:w("photo-1516321318423-f06f85e504b3")},{id:5,text:"Help",phrase:"Help please.",category:"Urgent",color:"#c0392b",imageUrl:w("photo-1517048676732-d65bc937f952")},{id:6,text:"Play",phrase:"I want to play.",category:"Activity",color:"#7a4fb0",imageUrl:w("photo-1515488042361-ee00e0ddd4e4")},{id:7,text:"I'm tired",phrase:"I'm tired.",category:"Body",color:"#536d8f",imageUrl:w("photo-1505693416388-ac5ce068fe85")},{id:8,text:"Too loud",phrase:"It is too loud.",category:"Sensory",color:"#b65f1f",imageUrl:w("photo-1505740420928-5e560c06d30e")},{id:9,text:"Favorite food",phrase:"I want my favorite food.",category:"Food",color:"#9a6a12",imageUrl:w("photo-1482049016688-2d3e1b311543")},{id:10,text:"Favorite toy",phrase:"I want my toy.",category:"Play",color:"#a23b72",imageUrl:w("photo-1566576912321-d58ddd7a6088")},{id:11,text:"Go outside",phrase:"I want to go outside.",category:"Place",color:"#2f7d57",imageUrl:w("photo-1519331379826-f10be5486c6f")},{id:12,text:"Calm place",phrase:"I need a calm place.",category:"Sensory",color:"#4f7f8f",imageUrl:w("photo-1500530855697-b586d89ba3ee")}]}connectedCallback(){super.connectedCallback(),this.loadTabs(),this.loadCustomImages()}loadCustomImages(){this.customRequests=this.customImagesManager.getImagesByCategory(this.CUSTOM_CATEGORY).map(e=>({id:`custom-${e.id}`,text:e.name,phrase:`I want ${e.name}.`,category:"Cayden's",color:"#2e8f74",imageUrl:e.dataUrl,isCustom:!0}))}normalizeRequest(e,t){return{id:Number(e?.id??t.id),text:String(e?.text??t.text),phrase:String(e?.phrase??e?.text??t.phrase),category:String(e?.category??t.category),color:String(e?.color?.startsWith?.("#")?e.color:t.color),imageUrl:String(e?.imageUrl??t.imageUrl)}}loadTabs(){try{const e=localStorage.getItem(this.TABS_STORAGE_KEY);if(e){const t=JSON.parse(e);this.tabs=t.tabs.map(s=>({...s,requests:s.requests.map((o,i)=>this.normalizeRequest(o,this.requests[i]??this.requests[0]))})),this.activeTabId=t.activeTabId}else this.initializeDefaultTab()}catch(e){console.error("Error loading tabs:",e),this.initializeDefaultTab()}}initializeDefaultTab(){this.tabs=[{id:this.DEFAULT_TAB_ID,name:"Daily Needs",requests:[...this.requests],createdAt:Date.now()}],this.activeTabId=this.DEFAULT_TAB_ID,this.saveTabs()}saveTabs(){try{const e={tabs:this.tabs,activeTabId:this.activeTabId};localStorage.setItem(this.TABS_STORAGE_KEY,JSON.stringify(e))}catch(e){console.error("Error saving tabs:",e)}}getActiveTab(){return this.tabs.find(e=>e.id===this.activeTabId)}switchTab(e){this.activeTabId=e,this.activeRequest=null,this.saveTabs()}openNewTabModal(){this.showNewTabModal=!0,this.newTabName=""}closeNewTabModal(){this.showNewTabModal=!1,this.newTabName=""}createNewTab(){if(!this.newTabName.trim()){alert("Please enter a tab name");return}const e={id:`tab-${Date.now()}`,name:this.newTabName.trim(),requests:[...this.requests],createdAt:Date.now()};this.tabs=[...this.tabs,e],this.activeTabId=e.id,this.activeRequest=null,this.saveTabs(),this.closeNewTabModal()}handleTabNameInput(e){const t=e.target;this.newTabName=t.value}handleTabNameKeydown(e){e.key==="Enter"?this.createNewTab():e.key==="Escape"&&this.closeNewTabModal()}handleRequest(e){this.activeRequest=e,this.progressManager.log(e.category==="Urgent"?"safety":"communication",e.text,e.phrase),this.accessibilityManager.speakNow(e.phrase,.9),this.sentenceBuilder.addWord({label:e.text,imageUrl:e.imageUrl})}clearRequest(){this.activeRequest=null,window.speechSynthesis.cancel()}render(){const e=this.getActiveTab(),t=this.premiumManager.canAddAdditionalTabs(),s=[...e?e.requests:this.requests,...this.customRequests];return d`
      <div class="container">
        <div class="header">
          <h1>CaydenJoy Communication</h1>
          <p class="subtitle">Tap a realistic picture to speak a daily need.</p>
        </div>

        <a class="add-photos-link" href="${g("custom-images")}?category=${this.CUSTOM_CATEGORY}">📸 Add Cayden's real photos</a>

        ${this.activeRequest?d`
          <div class="active-request">
            <img src=${this.activeRequest.imageUrl} alt=${this.activeRequest.text} />
            <div class="active-request-text">${this.activeRequest.phrase}</div>
            <button class="close-btn" @click=${this.clearRequest} aria-label="Clear request">x</button>
          </div>
        `:""}

        ${t?d`
          <div class="tabs-container">
            ${this.tabs.map(o=>d`
              <button
                class="tab-button ${o.id===this.activeTabId?"active":""}"
                @click=${()=>this.switchTab(o.id)}
              >
                ${o.name}
              </button>
            `)}
            <button class="add-tab-btn" @click=${this.openNewTabModal}>New Tab</button>
          </div>
        `:""}

        <div class="requests-grid">
          ${s.map(o=>d`
            <button
              class="request-card"
              style="--card-color: ${o.color}"
              @click=${()=>this.handleRequest(o)}
            >
              <img src=${o.imageUrl} alt=${o.text} />
              <div class="request-copy">
                <div class="request-text">${o.text}${o.isCustom?d`<span class="custom-badge">Cayden's</span>`:""}</div>
                <div class="request-category">${o.category}</div>
              </div>
            </button>
          `)}
        </div>

        <p class="footer-text">Real photos work best when they show Cayden's actual cup, food, room, toy, people, and places.</p>
      </div>

      ${this.showNewTabModal?d`
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
              <button class="modal-btn modal-btn-secondary" @click=${this.closeNewTabModal}>Cancel</button>
              <button class="modal-btn modal-btn-primary" @click=${this.createNewTab}>Create Tab</button>
            </div>
          </div>
        </div>
      `:""}
    `}};ze.styles=C`
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
  `;at([b()],ze.prototype,"activeRequest",2);at([b()],ze.prototype,"tabs",2);at([b()],ze.prototype,"activeTabId",2);at([b()],ze.prototype,"showNewTabModal",2);at([b()],ze.prototype,"newTabName",2);at([b()],ze.prototype,"customRequests",2);ze=at([j("app-communication")],ze);var Dl=Object.defineProperty,Ml=Object.getOwnPropertyDescriptor,Ae=(e,t,s,o)=>{for(var i=o>1?void 0:o?Ml(t,s):t,a=e.length-1,r;a>=0;a--)(r=e[a])&&(i=(o?r(t,s,i):r(i))||i);return o&&i&&Dl(t,s,i),i};const Ko='data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200"%3E%3Crect width="320" height="200" fill="%23dfe8f1"/%3E%3Ccircle cx="160" cy="75" r="38" fill="%2389a0b7"/%3E%3Cpath d="M78 190c10-50 52-75 82-75s72 25 82 75" fill="%2389a0b7"/%3E%3C/svg%3E';let he=class extends O{constructor(){super(...arguments),this.mode="family",this.familyTargetIndex=0,this.objectTargetIndex=0,this.selectedId=null,this.completedFamilyIds=[],this.completedObjectIds=[],this.customFamilyCards=[],this.customObjectCards=[],this.routineStep=0,this.accessibilityManager=ee.getInstance(),this.progressManager=oe.getInstance(),this.customImagesManager=ie.getInstance(),this.sentenceBuilder=ne.getInstance(),this.premiumManager=te.getInstance(),this.FAMILY_CATEGORY="family",this.OBJECTS_CATEGORY="objects",this.routineSteps=["Look at the plan","Choose an activity","Take a short break","All done"],this.familyCards=[{id:"mom",label:"Mom",phrase:"Mom.",imageUrl:w("photo-1544717305-2782549b5136")},{id:"dad",label:"Dad",phrase:"Dad.",imageUrl:w("photo-1508214751196-bcfd4ca60f91")},{id:"brother",label:"Brother",phrase:"Brother.",imageUrl:w("photo-1503454537195-1dcabb73ffb9")},{id:"dog",label:"Dog",phrase:"Dog.",imageUrl:w("photo-1552053831-71594a27632d")},{id:"grandad",label:"Grandad",phrase:"Grandad.",imageUrl:w("grandad")}],this.objectCards=[{id:"cup",label:"Cup",phrase:"Cup.",imageUrl:w("photo-1513558161293-cdaf765ed2fd")},{id:"shoes",label:"Shoes",phrase:"Shoes.",imageUrl:w("photo-1542291026-7eec264c27ff")},{id:"toothbrush",label:"Toothbrush",phrase:"Toothbrush.",imageUrl:w("photo-1609840114035-3c981b782dfe")},{id:"ball",label:"Ball",phrase:"Ball.",imageUrl:w("photo-1518611012118-696072aa579a")},{id:"headphones",label:"Headphones",phrase:"Headphones.",imageUrl:w("photo-1505740420928-5e560c06d30e")},{id:"backpack",label:"Backpack",phrase:"Backpack.",imageUrl:w("photo-1553062407-98eeb64c6a62")}]}connectedCallback(){super.connectedCallback(),this.loadCustomImages(),this.speakCurrentPrompt()}loadCustomImages(){this.customFamilyCards=this.customImagesManager.getImagesByCategory(this.FAMILY_CATEGORY).map(e=>({id:`custom-${e.id}`,label:e.name,phrase:`${e.name}.`,imageUrl:e.dataUrl,isCustom:!0})),this.customObjectCards=this.customImagesManager.getImagesByCategory(this.OBJECTS_CATEGORY).map(e=>({id:`custom-${e.id}`,label:e.name,phrase:`${e.name}.`,imageUrl:e.dataUrl,isCustom:!0}))}get activeCards(){return this.mode==="family"?[...this.familyCards,...this.customFamilyCards]:[...this.objectCards,...this.customObjectCards]}get completedIds(){return this.mode==="family"?this.completedFamilyIds:this.completedObjectIds}get targetIndex(){return this.mode==="family"?this.familyTargetIndex:this.objectTargetIndex}get targetCard(){return this.activeCards[this.targetIndex%this.activeCards.length]}speak(e){this.accessibilityManager.speakNow(e,.9)}useImageFallback(e){const t=e.currentTarget;t.src!==Ko&&(t.src=Ko)}setMode(e){this.mode=e,this.selectedId=null,this.speakCurrentPrompt()}speakCurrentPrompt(){this.speak(`Find ${this.targetCard.label}.`)}chooseCard(e){if(this.selectedId=e.id,e.id===this.targetCard.id){this.progressManager.log("activity",`Puzzle selected: ${e.label}`,e.phrase),this.markComplete(e.id),this.speak(`Yes. ${e.phrase}`),this.sentenceBuilder.addWord({label:e.label,imageUrl:e.imageUrl}),this.advanceTarget();return}this.speak(`Try again. Find ${this.targetCard.label}.`)}markComplete(e){this.mode==="family"&&!this.completedFamilyIds.includes(e)&&(this.completedFamilyIds=[...this.completedFamilyIds,e]),this.mode==="objects"&&!this.completedObjectIds.includes(e)&&(this.completedObjectIds=[...this.completedObjectIds,e])}advanceTarget(){const e=this.activeCards,t=(this.targetIndex+1)%e.length;this.mode==="family"?this.familyTargetIndex=t:this.objectTargetIndex=t,setTimeout(()=>this.speakCurrentPrompt(),900)}resetActivity(){this.familyTargetIndex=0,this.objectTargetIndex=0,this.selectedId=null,this.completedFamilyIds=[],this.completedObjectIds=[],this.routineStep=0,this.speak("Puzzle reset."),setTimeout(()=>this.speakCurrentPrompt(),700)}selectRoutineStep(e){this.routineStep=e;const t=this.routineSteps[e];this.progressManager.log("activity","Routine session",t),this.speak(t)}renderCard(e){const t=this.completedIds.includes(e.id);return d`
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

        <a class="add-photos-link" href="${g("custom-images")}?category=${t}">📸 ${s}</a>

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
              ${this.routineSteps.map((o,i)=>d`
                <button
                  class="routine-step ${i<this.routineStep?"complete":""} ${i===this.routineStep?"current":""}"
                  @click=${()=>this.selectRoutineStep(i)}
                >${i<this.routineStep?"Done: ":""}${o}</button>
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
            ${this.activeCards.map(o=>this.renderCard(o))}
          </div>
        </section>
      </div>
    `}};he.styles=C`
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
  `;Ae([b()],he.prototype,"mode",2);Ae([b()],he.prototype,"familyTargetIndex",2);Ae([b()],he.prototype,"objectTargetIndex",2);Ae([b()],he.prototype,"selectedId",2);Ae([b()],he.prototype,"completedFamilyIds",2);Ae([b()],he.prototype,"completedObjectIds",2);Ae([b()],he.prototype,"customFamilyCards",2);Ae([b()],he.prototype,"customObjectCards",2);Ae([b()],he.prototype,"routineStep",2);he=Ae([j("app-family-puzzle")],he);var Ll=Object.defineProperty,Ul=Object.getOwnPropertyDescriptor,Ve=(e,t,s,o)=>{for(var i=o>1?void 0:o?Ul(t,s):t,a=e.length-1,r;a>=0;a--)(r=e[a])&&(i=(o?r(t,s,i):r(i))||i);return o&&i&&Ll(t,s,i),i};let _e=class extends O{constructor(){super(...arguments),this.foods=[{id:"chicken",name:"Chicken",imageUrl:w("photo-1598103442097-8b74394b95c6")},{id:"noodles",name:"Noodles",imageUrl:w("photo-1569718212165-3a8278d5f624")},{id:"rice",name:"Rice",imageUrl:w("photo-1536304993881-ff6e9eefa2a6")},{id:"cereal",name:"Cereal",imageUrl:w("photo-1521483451569-e33803c0330c")},{id:"bread",name:"Bread",imageUrl:w("photo-1509440159596-0249088772ff")},{id:"potatoes",name:"Potatoes",imageUrl:w("photo-1518977676601-b53f82aba655")},{id:"donut",name:"Donut",imageUrl:w("photo-1551024601-bec78aea704b")},{id:"candy",name:"Candy",imageUrl:w("photo-1581798459219-318e76aecc7b")},{id:"juice",name:"Juice",imageUrl:w("photo-1622597467836-f3285f2131b8")},{id:"water",name:"Water",imageUrl:w("photo-1548839140-29a749e1cf4d")},{id:"apple",name:"Apple",imageUrl:w("photo-1560806887-1e4cd0b6cbd6")},{id:"banana",name:"Banana",imageUrl:w("photo-1571771894821-ce9b6c11b08e")}],this.selectedFood=null,this.tabs=[],this.activeTabId=null,this.showNewTabModal=!1,this.newTabName="",this.customFoods=[],this.premiumManager=te.getInstance(),this.accessibilityManager=ee.getInstance(),this.customImagesManager=ie.getInstance(),this.sentenceBuilder=ne.getInstance(),this.progressManager=oe.getInstance(),this.DEFAULT_TAB_ID="default",this.TABS_STORAGE_KEY="caydenjoy_foods_tabs",this.CUSTOM_CATEGORY="foods"}connectedCallback(){super.connectedCallback(),this.loadTabs(),this.loadCustomImages()}loadCustomImages(){this.customFoods=this.customImagesManager.getImagesByCategory(this.CUSTOM_CATEGORY).map(e=>({id:`custom-${e.id}`,name:e.name,imageUrl:e.dataUrl,isCustom:!0}))}normalizeFood(e,t){return{id:String(e?.id??t.id),name:String(e?.name??t.name),imageUrl:String(e?.imageUrl??t.imageUrl)}}loadTabs(){try{const e=localStorage.getItem(this.TABS_STORAGE_KEY);if(e){const t=JSON.parse(e);this.tabs=t.tabs.map(s=>({...s,foods:s.foods.map((o,i)=>this.normalizeFood(o,this.foods[i]??this.foods[0]))})),this.activeTabId=t.activeTabId}else this.initializeDefaultTab()}catch(e){console.error("Error loading tabs:",e),this.initializeDefaultTab()}}initializeDefaultTab(){this.tabs=[{id:this.DEFAULT_TAB_ID,name:"Foods",foods:[...this.foods],createdAt:Date.now()}],this.activeTabId=this.DEFAULT_TAB_ID,this.saveTabs()}saveTabs(){localStorage.setItem(this.TABS_STORAGE_KEY,JSON.stringify({tabs:this.tabs,activeTabId:this.activeTabId}))}getActiveTab(){return this.tabs.find(e=>e.id===this.activeTabId)}switchTab(e){this.activeTabId=e,this.selectedFood=null,this.saveTabs()}createNewTab(){if(!this.newTabName.trim()){alert("Please enter a tab name");return}const e={id:`tab-${Date.now()}`,name:this.newTabName.trim(),foods:[...this.foods],createdAt:Date.now()};this.tabs=[...this.tabs,e],this.activeTabId=e.id,this.selectedFood=null,this.showNewTabModal=!1,this.newTabName="",this.saveTabs()}selectFood(e){this.selectedFood=e,this.progressManager.log("activity","Foods",e.name),this.accessibilityManager.speakNow(e.name,.9),this.sentenceBuilder.addWord({label:e.name,imageUrl:e.imageUrl})}render(){const e=this.premiumManager.canAddAdditionalTabs(),t=[...this.getActiveTab()?.foods??this.foods,...this.customFoods];return d`
      <div class="container">
        <h1>Foods</h1>
        <p class="subtitle">Detailed real food photos for recognition and choice-making.</p>
        <a class="add-photos-link" href="${g("custom-images")}?category=${this.CUSTOM_CATEGORY}">📸 Add Cayden's real food photos</a>
        ${this.selectedFood?d`<div class="selected-card"><img src=${this.selectedFood.imageUrl} alt=${this.selectedFood.name} /><div class="selected-name">${this.selectedFood.name}</div></div>`:""}
        ${e?d`<div class="tabs-container">${this.tabs.map(s=>d`<button class="tab-button ${s.id===this.activeTabId?"active":""}" @click=${()=>this.switchTab(s.id)}>${s.name}</button>`)}<button class="add-tab-btn" @click=${()=>this.showNewTabModal=!0}>New Tab</button></div>`:""}
        <div class="photo-grid">${t.map(s=>d`<button class="photo-button" @click=${()=>this.selectFood(s)}><img src=${s.imageUrl} alt=${s.name} /><div class="photo-name">${s.name}${s.isCustom?d`<span class="custom-badge">Cayden's</span>`:""}</div></button>`)}</div>
      </div>
      ${this.showNewTabModal?d`<div class="modal-overlay" @click=${()=>this.showNewTabModal=!1}><div class="modal" @click=${s=>s.stopPropagation()}><div class="modal-header">Create New Tab</div><input class="modal-input" placeholder="Enter tab name" .value=${this.newTabName} @input=${s=>this.newTabName=s.target.value} @keydown=${s=>s.key==="Enter"?this.createNewTab():s.key==="Escape"?this.showNewTabModal=!1:void 0} autofocus /><div class="modal-buttons"><button class="modal-btn modal-btn-secondary" @click=${()=>this.showNewTabModal=!1}>Cancel</button><button class="modal-btn modal-btn-primary" @click=${this.createNewTab}>Create Tab</button></div></div></div>`:""}
    `}};_e.styles=C`
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
  `;Ve([b()],_e.prototype,"foods",2);Ve([b()],_e.prototype,"selectedFood",2);Ve([b()],_e.prototype,"tabs",2);Ve([b()],_e.prototype,"activeTabId",2);Ve([b()],_e.prototype,"showNewTabModal",2);Ve([b()],_e.prototype,"newTabName",2);Ve([b()],_e.prototype,"customFoods",2);_e=Ve([j("app-foods-enhanced")],_e);var Rl=Object.defineProperty,Nl=Object.getOwnPropertyDescriptor,go=(e,t,s,o)=>{for(var i=o>1?void 0:o?Nl(t,s):t,a=e.length-1,r;a>=0;a--)(r=e[a])&&(i=(o?r(t,s,i):r(i))||i);return o&&i&&Rl(t,s,i),i};let Ut=class extends O{constructor(){super(...arguments),this.accessibilityManager=ee.getInstance(),this.customImagesManager=ie.getInstance(),this.sentenceBuilder=ne.getInstance(),this.CUSTOM_CATEGORY="quick",this.buttons=[{id:"yes",label:"YES",emoji:"✅",color:"#00B894"},{id:"no",label:"NO",emoji:"❌",color:"#E17055"},{id:"stop",label:"STOP",emoji:"🛑",color:"#D63031"},{id:"food",label:"FOOD",emoji:"🍽️",color:"#FDCB6E"},{id:"tv",label:"TV",emoji:"📺",color:"#0984E3"}],this.quickPhotos=[]}connectedCallback(){super.connectedCallback(),this.loadQuickPhotos()}loadQuickPhotos(){this.quickPhotos=this.customImagesManager.getImagesByCategory(this.CUSTOM_CATEGORY).map(e=>({id:e.id,label:e.name,imageUrl:e.dataUrl}))}handleButtonClick(e){this.accessibilityManager.speakNow(e.label,1),this.sentenceBuilder.addWord({label:e.label})}handlePhotoClick(e){this.accessibilityManager.speakNow(e.label,1),this.sentenceBuilder.addWord({label:e.label,imageUrl:e.imageUrl})}render(){return d`
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

        <a class="add-photos-link" href="${g("custom-images")}?category=${this.CUSTOM_CATEGORY}">📸 Add Cayden's own quick-tap photos</a>

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
    `}};Ut.styles=C`
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
  `;go([b()],Ut.prototype,"buttons",2);go([b()],Ut.prototype,"quickPhotos",2);Ut=go([j("app-home-enhanced")],Ut);var jl=Object.defineProperty,Bl=Object.getOwnPropertyDescriptor,qe=(e,t,s,o)=>{for(var i=o>1?void 0:o?Bl(t,s):t,a=e.length-1,r;a>=0;a--)(r=e[a])&&(i=(o?r(t,s,i):r(i))||i);return o&&i&&jl(t,s,i),i};let ke=class extends O{constructor(){super(...arguments),this.colors=[{id:"red",name:"Red",hex:"#c0392b",example:"The color red",imageUrl:""},{id:"blue",name:"Blue",hex:"#1976a2",example:"The color blue",imageUrl:""},{id:"green",name:"Green",hex:"#2e7d32",example:"The color green",imageUrl:""},{id:"yellow",name:"Yellow",hex:"#c99700",example:"The color yellow",imageUrl:""},{id:"purple",name:"Purple",hex:"#6b4fa3",example:"The color purple",imageUrl:""},{id:"pink",name:"Pink",hex:"#c04d86",example:"The color pink",imageUrl:""},{id:"orange",name:"Orange",hex:"#d66a1f",example:"The color orange",imageUrl:""},{id:"brown",name:"Brown",hex:"#795548",example:"The color brown",imageUrl:""},{id:"black",name:"Black",hex:"#20252b",example:"The color black",imageUrl:""},{id:"white",name:"White",hex:"#f4f6f8",example:"The color white",imageUrl:""}],this.selectedColor=null,this.tabs=[],this.activeTabId=null,this.showNewTabModal=!1,this.newTabName="",this.customColors=[],this.premiumManager=te.getInstance(),this.accessibilityManager=ee.getInstance(),this.customImagesManager=ie.getInstance(),this.sentenceBuilder=ne.getInstance(),this.progressManager=oe.getInstance(),this.DEFAULT_TAB_ID="default",this.TABS_STORAGE_KEY="caydenjoy_colors_tabs",this.CUSTOM_CATEGORY="colors"}connectedCallback(){super.connectedCallback(),this.loadTabs(),this.loadCustomImages()}loadCustomImages(){this.customColors=this.customImagesManager.getImagesByCategory(this.CUSTOM_CATEGORY).map(e=>({id:`custom-${e.id}`,name:e.name,hex:"#6b7280",example:e.name,imageUrl:e.dataUrl,isCustom:!0}))}normalizeColor(e,t){return{id:String(e?.id??t.id),name:String(e?.name??t.name),hex:String(e?.hex??t.hex),imageUrl:t.imageUrl,example:t.example}}loadTabs(){try{const e=localStorage.getItem(this.TABS_STORAGE_KEY);if(e){const t=JSON.parse(e);this.tabs=t.tabs.map(s=>({...s,colors:s.colors.map((o,i)=>this.normalizeColor(o,this.colors[i]??this.colors[0]))})),this.activeTabId=t.activeTabId}else this.initializeDefaultTab()}catch(e){console.error("Error loading tabs:",e),this.initializeDefaultTab()}}initializeDefaultTab(){this.tabs=[{id:this.DEFAULT_TAB_ID,name:"Colors",colors:[...this.colors],createdAt:Date.now()}],this.activeTabId=this.DEFAULT_TAB_ID,this.saveTabs()}saveTabs(){localStorage.setItem(this.TABS_STORAGE_KEY,JSON.stringify({tabs:this.tabs,activeTabId:this.activeTabId}))}getActiveTab(){return this.tabs.find(e=>e.id===this.activeTabId)}switchTab(e){this.activeTabId=e,this.selectedColor=null,this.saveTabs()}createNewTab(){if(!this.newTabName.trim()){alert("Please enter a tab name");return}const e={id:`tab-${Date.now()}`,name:this.newTabName.trim(),colors:[...this.colors],createdAt:Date.now()};this.tabs=[...this.tabs,e],this.activeTabId=e.id,this.selectedColor=null,this.showNewTabModal=!1,this.newTabName="",this.saveTabs()}selectColor(e){this.selectedColor=e,this.progressManager.log("activity","Colors",e.name),this.accessibilityManager.speakNow(`${e.name}. ${e.example}.`,.9),this.sentenceBuilder.addWord({label:e.name,imageUrl:e.imageUrl})}render(){const e=this.premiumManager.canAddAdditionalTabs(),t=[...this.getActiveTab()?.colors??this.colors,...this.customColors];return d`
      <div class="container">
        <h1>Colors</h1>
        <p class="subtitle">Tap a color to hear its name. Add photos of familiar objects to make the board personal.</p>
        <a class="add-photos-link" href="${g("custom-images")}?category=${this.CUSTOM_CATEGORY}">📸 Add Cayden's real color photos</a>
        ${this.selectedColor?d`<div class="selected-card" style="--selected-color: ${this.selectedColor.hex}">${this.selectedColor.isCustom?d`<img src=${this.selectedColor.imageUrl} alt=${this.selectedColor.name} />`:d`<div class="selected-swatch" role="img" aria-label=${this.selectedColor.name}></div>`}<div><div class="selected-name">${this.selectedColor.name}</div><div class="selected-example">${this.selectedColor.example}</div></div></div>`:""}
        ${e?d`<div class="tabs-container">${this.tabs.map(s=>d`<button class="tab-button ${s.id===this.activeTabId?"active":""}" @click=${()=>this.switchTab(s.id)}>${s.name}</button>`)}<button class="add-tab-btn" @click=${()=>this.showNewTabModal=!0}>New Tab</button></div>`:""}
        <div class="photo-grid">${t.map(s=>d`<button class="photo-button" style="--color: ${s.hex}" @click=${()=>this.selectColor(s)}>${s.isCustom?d`<img src=${s.imageUrl} alt=${s.name} />`:d`<div class="color-swatch" role="img" aria-label=${s.name}></div>`}<div class="color-strip" aria-hidden="true"></div><div class="card-copy"><div class="photo-name">${s.name}${s.isCustom?d`<span class="custom-badge">Cayden's</span>`:""}</div><div class="photo-example">${s.isCustom?s.name:s.example}</div></div></button>`)}</div>
      </div>
      ${this.showNewTabModal?d`<div class="modal-overlay" @click=${()=>this.showNewTabModal=!1}><div class="modal" @click=${s=>s.stopPropagation()}><div class="modal-header">Create New Tab</div><input class="modal-input" placeholder="Enter tab name" .value=${this.newTabName} @input=${s=>this.newTabName=s.target.value} @keydown=${s=>s.key==="Enter"?this.createNewTab():s.key==="Escape"?this.showNewTabModal=!1:void 0} autofocus /><div class="modal-buttons"><button class="modal-btn modal-btn-secondary" @click=${()=>this.showNewTabModal=!1}>Cancel</button><button class="modal-btn modal-btn-primary" @click=${this.createNewTab}>Create Tab</button></div></div></div>`:""}
    `}};ke.styles=C`
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
  `;qe([b()],ke.prototype,"colors",2);qe([b()],ke.prototype,"selectedColor",2);qe([b()],ke.prototype,"tabs",2);qe([b()],ke.prototype,"activeTabId",2);qe([b()],ke.prototype,"showNewTabModal",2);qe([b()],ke.prototype,"newTabName",2);qe([b()],ke.prototype,"customColors",2);ke=qe([j("app-colors")],ke);var Fl=Object.defineProperty,Vl=Object.getOwnPropertyDescriptor,He=(e,t,s,o)=>{for(var i=o>1?void 0:o?Vl(t,s):t,a=e.length-1,r;a>=0;a--)(r=e[a])&&(i=(o?r(t,s,i):r(i))||i);return o&&i&&Fl(t,s,i),i};const ql={1:w("photo-1560806887-1e4cd0b6cbd6"),2:w("photo-1517256064527-09c73fc73e38"),3:w("photo-1566576912321-d58ddd7a6088"),4:w("photo-1482049016688-2d3e1b311543"),5:w("photo-1528825871115-3581a5387919"),6:w("photo-1551024601-bec78aea704b"),7:w("photo-1518977676601-b53f82aba655"),8:w("photo-1601004890684-d8cbf643f5f2"),9:w("photo-1556909114-f6e7ad7d3136"),10:w("photo-1490474418585-ba9bad8fd0ea")};let Ce=class extends O{constructor(){super(...arguments),this.numbers=Array.from({length:10},(e,t)=>({id:`num-${t+1}`,number:t+1,label:`Number ${t+1}`,imageUrl:ql[t+1]})),this.selectedNumber=null,this.tabs=[],this.activeTabId=null,this.showNewTabModal=!1,this.newTabName="",this.customNumbers=[],this.premiumManager=te.getInstance(),this.accessibilityManager=ee.getInstance(),this.customImagesManager=ie.getInstance(),this.sentenceBuilder=ne.getInstance(),this.progressManager=oe.getInstance(),this.DEFAULT_TAB_ID="default",this.TABS_STORAGE_KEY="caydenjoy_numbers_tabs",this.CUSTOM_CATEGORY="numbers"}connectedCallback(){super.connectedCallback(),this.loadTabs(),this.loadCustomImages()}loadCustomImages(){this.customNumbers=this.customImagesManager.getImagesByCategory(this.CUSTOM_CATEGORY).map(e=>({id:`custom-${e.id}`,number:0,label:e.name,imageUrl:e.dataUrl,isCustom:!0}))}normalizeNumber(e,t){return{id:String(e?.id??t.id),number:Number(e?.number??t.number),label:String(e?.label??`Number ${e?.number??t.number}`),imageUrl:String(e?.imageUrl??t.imageUrl)}}loadTabs(){try{const e=localStorage.getItem(this.TABS_STORAGE_KEY);if(e){const t=JSON.parse(e);this.tabs=t.tabs.map(s=>({...s,numbers:this.numbers.map(o=>{const i=s.numbers.find(a=>Number(a?.number)===o.number);return this.normalizeNumber(i,o)})})),this.activeTabId=t.activeTabId,this.saveTabs()}else this.initializeDefaultTab()}catch(e){console.error("Error loading tabs:",e),this.initializeDefaultTab()}}initializeDefaultTab(){this.tabs=[{id:this.DEFAULT_TAB_ID,name:"Numbers",numbers:[...this.numbers],createdAt:Date.now()}],this.activeTabId=this.DEFAULT_TAB_ID,this.saveTabs()}saveTabs(){localStorage.setItem(this.TABS_STORAGE_KEY,JSON.stringify({tabs:this.tabs,activeTabId:this.activeTabId}))}getActiveTab(){return this.tabs.find(e=>e.id===this.activeTabId)}switchTab(e){this.activeTabId=e,this.selectedNumber=null,this.saveTabs()}createNewTab(){if(!this.newTabName.trim()){alert("Please enter a tab name");return}const e={id:`tab-${Date.now()}`,name:this.newTabName.trim(),numbers:[...this.numbers],createdAt:Date.now()};this.tabs=[...this.tabs,e],this.activeTabId=e.id,this.selectedNumber=null,this.showNewTabModal=!1,this.newTabName="",this.saveTabs()}selectNumber(e){this.selectedNumber=e,this.progressManager.log("activity","Numbers",e.isCustom?e.label:String(e.number)),this.accessibilityManager.speakNow(e.isCustom?e.label:`${e.number}. ${e.label}.`,.9),this.sentenceBuilder.addWord({label:e.isCustom?e.label:String(e.number),imageUrl:e.imageUrl})}render(){const e=this.premiumManager.canAddAdditionalTabs(),t=[...this.getActiveTab()?.numbers??this.numbers,...this.customNumbers];return d`
      <div class="container">
        <h1>Numbers</h1>
        <p class="subtitle">Tap a number to hear it. Add real, quantity-accurate photos of Cayden's own things below.</p>
        <a class="add-photos-link" href="${g("custom-images")}?category=${this.CUSTOM_CATEGORY}">📸 Add Cayden's real counting photos</a>
        ${this.selectedNumber?d`<div class="selected-card"><img src=${this.selectedNumber.imageUrl} alt=${this.selectedNumber.label} /><div><div class="selected-value">${this.selectedNumber.isCustom?"":this.selectedNumber.number}</div><div class="selected-label">${this.selectedNumber.label}</div></div></div>`:""}
        ${e?d`<div class="tabs-container">${this.tabs.map(s=>d`<button class="tab-button ${s.id===this.activeTabId?"active":""}" @click=${()=>this.switchTab(s.id)}>${s.name}</button>`)}<button class="add-tab-btn" @click=${()=>this.showNewTabModal=!0}>New Tab</button></div>`:""}
        <div class="number-grid">${t.map(s=>d`<button class="number-button" @click=${()=>this.selectNumber(s)}>${s.isCustom?"":d`<span class="number-badge">${s.number}</span>`}<img src=${s.imageUrl} alt=${s.label} /><div class="card-copy"><div class="number-name">${s.isCustom?s.label:s.number}${s.isCustom?d`<span class="custom-badge">Cayden's</span>`:""}</div><div class="number-label">${s.label}</div></div></button>`)}</div>
      </div>
      ${this.showNewTabModal?d`<div class="modal-overlay" @click=${()=>this.showNewTabModal=!1}><div class="modal" @click=${s=>s.stopPropagation()}><div class="modal-header">Create New Tab</div><input class="modal-input" placeholder="Enter tab name" .value=${this.newTabName} @input=${s=>this.newTabName=s.target.value} @keydown=${s=>s.key==="Enter"?this.createNewTab():s.key==="Escape"?this.showNewTabModal=!1:void 0} autofocus /><div class="modal-buttons"><button class="modal-btn modal-btn-secondary" @click=${()=>this.showNewTabModal=!1}>Cancel</button><button class="modal-btn modal-btn-primary" @click=${this.createNewTab}>Create Tab</button></div></div></div>`:""}
    `}};Ce.styles=C`
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
  `;He([b()],Ce.prototype,"numbers",2);He([b()],Ce.prototype,"selectedNumber",2);He([b()],Ce.prototype,"tabs",2);He([b()],Ce.prototype,"activeTabId",2);He([b()],Ce.prototype,"showNewTabModal",2);He([b()],Ce.prototype,"newTabName",2);He([b()],Ce.prototype,"customNumbers",2);Ce=He([j("app-numbers")],Ce);var Hl=Object.defineProperty,Jl=Object.getOwnPropertyDescriptor,Je=(e,t,s,o)=>{for(var i=o>1?void 0:o?Jl(t,s):t,a=e.length-1,r;a>=0;a--)(r=e[a])&&(i=(o?r(t,s,i):r(i))||i);return o&&i&&Hl(t,s,i),i};const Go='data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200"%3E%3Crect width="320" height="200" fill="%23dfe8f1"/%3E%3Ccircle cx="160" cy="75" r="38" fill="%2389a0b7"/%3E%3Cpath d="M78 190c10-50 52-75 82-75s72 25 82 75" fill="%2389a0b7"/%3E%3C/svg%3E';let $e=class extends O{constructor(){super(...arguments),this.places=[{id:"home",name:"Home",phrase:"I want to go home.",color:"#c0392b",imageUrl:w("photo-1564013799919-ab600027ffc6")},{id:"school",name:"School",phrase:"I am going to school.",color:"#1f7a8c",imageUrl:w("photo-1580582932707-520aed937b7b")},{id:"park",name:"Park",phrase:"I want to go to the park.",color:"#2e7d32",imageUrl:w("photo-1519331379826-f10be5486c6f")},{id:"store",name:"Store",phrase:"We are going to the store.",color:"#9a6a12",imageUrl:w("photo-1604719312566-8912e9227c6a")},{id:"doctor",name:"Doctor",phrase:"We are going to the doctor.",color:"#6b5b95",imageUrl:w("photo-1519494026892-80bbd2d6fd0d")},{id:"beach",name:"Beach",phrase:"I want to go to the beach.",color:"#1976a2",imageUrl:w("photo-1507525428034-b723cf961d3e")},{id:"restaurant",name:"Restaurant",phrase:"We are going to a restaurant.",color:"#b65f1f",imageUrl:w("photo-1517248135467-4c7edcad34c4")},{id:"library",name:"Library",phrase:"We are going to the library.",color:"#795548",imageUrl:w("photo-1521587760476-6c12a4b040da")},{id:"zoo",name:"Zoo",phrase:"I want to go to the zoo.",color:"#2e7d32",imageUrl:w("photo-1546182990-dffeafbe841d")},{id:"therapy",name:"Therapy",phrase:"I am going to therapy.",color:"#4f7f8f",imageUrl:w("therapy")},{id:"playground",name:"Playground",phrase:"I want to go to the playground.",color:"#7a4fb0",imageUrl:w("photo-1596997000103-e597b3ca50df")}],this.selectedPlace=null,this.tabs=[],this.activeTabId=null,this.showNewTabModal=!1,this.newTabName="",this.customPlaces=[],this.premiumManager=te.getInstance(),this.accessibilityManager=ee.getInstance(),this.customImagesManager=ie.getInstance(),this.sentenceBuilder=ne.getInstance(),this.progressManager=oe.getInstance(),this.DEFAULT_TAB_ID="default",this.TABS_STORAGE_KEY="caydenjoy_places_tabs",this.CUSTOM_CATEGORY="places"}connectedCallback(){super.connectedCallback(),this.loadTabs(),this.loadCustomImages()}loadCustomImages(){this.customPlaces=this.customImagesManager.getImagesByCategory(this.CUSTOM_CATEGORY).map(e=>({id:`custom-${e.id}`,name:e.name,phrase:`I want to go to ${e.name}.`,color:"#2e8f74",imageUrl:e.dataUrl,isCustom:!0}))}normalizePlace(e,t){const s=String(e?.id??t.id),o=this.places.find(i=>i.id===s)??t;return{id:s,name:String(e?.name??o.name),phrase:String(e?.phrase??o.phrase),color:String(e?.color??o.color),imageUrl:o.imageUrl}}loadTabs(){try{const e=localStorage.getItem(this.TABS_STORAGE_KEY);if(e){const t=JSON.parse(e);this.tabs=t.tabs.map(s=>({...s,places:s.places.map((o,i)=>this.normalizePlace(o,this.places[i]??this.places[0]))})),this.activeTabId=t.activeTabId}else this.initializeDefaultTab()}catch(e){console.error("Error loading tabs:",e),this.initializeDefaultTab()}}initializeDefaultTab(){this.tabs=[{id:this.DEFAULT_TAB_ID,name:"Places",places:[...this.places],createdAt:Date.now()}],this.activeTabId=this.DEFAULT_TAB_ID,this.saveTabs()}saveTabs(){localStorage.setItem(this.TABS_STORAGE_KEY,JSON.stringify({tabs:this.tabs,activeTabId:this.activeTabId}))}getActiveTab(){return this.tabs.find(e=>e.id===this.activeTabId)}switchTab(e){this.activeTabId=e,this.selectedPlace=null,this.saveTabs()}createNewTab(){if(!this.newTabName.trim()){alert("Please enter a tab name");return}const e={id:`tab-${Date.now()}`,name:this.newTabName.trim(),places:[...this.places],createdAt:Date.now()};this.tabs=[...this.tabs,e],this.activeTabId=e.id,this.selectedPlace=null,this.showNewTabModal=!1,this.newTabName="",this.saveTabs()}selectPlace(e){this.selectedPlace=e,this.progressManager.log("activity","Places",e.name),this.accessibilityManager.speakNow(e.phrase,.9),this.sentenceBuilder.addWord({label:e.name,imageUrl:e.imageUrl})}useImageFallback(e){const t=e.currentTarget;t.src!==Go&&(t.src=Go)}render(){const e=this.premiumManager.canAddAdditionalTabs(),t=[...this.getActiveTab()?.places??this.places,...this.customPlaces];return d`
      <div class="container">
        <h1>Places</h1>
        <p class="subtitle">Real place photos for daily routines and transitions.</p>
        <a class="add-photos-link" href="${g("custom-images")}?category=${this.CUSTOM_CATEGORY}">📸 Add Cayden's real place photos</a>
        ${this.selectedPlace?d`<div class="selected-card" style="--place-color: ${this.selectedPlace.color}"><img src=${this.selectedPlace.imageUrl} alt=${this.selectedPlace.name} /><div><div class="selected-name">${this.selectedPlace.name}</div><div class="selected-phrase">${this.selectedPlace.phrase}</div></div></div>`:""}
        ${e?d`<div class="tabs-container">${this.tabs.map(s=>d`<button class="tab-button ${s.id===this.activeTabId?"active":""}" @click=${()=>this.switchTab(s.id)}>${s.name}</button>`)}<button class="add-tab-btn" @click=${()=>this.showNewTabModal=!0}>New Tab</button></div>`:""}
        <div class="place-grid">${t.map(s=>d`<button class="place-button" style="--place-color: ${s.color}" @click=${()=>this.selectPlace(s)}><img src=${s.imageUrl} alt=${s.name} @error=${this.useImageFallback} /><div class="card-copy"><div class="place-name">${s.name}${s.isCustom?d`<span class="custom-badge">Cayden's</span>`:""}</div><div class="place-phrase">${s.phrase}</div></div></button>`)}</div>
      </div>
      ${this.showNewTabModal?d`<div class="modal-overlay" @click=${()=>this.showNewTabModal=!1}><div class="modal" @click=${s=>s.stopPropagation()}><div class="modal-header">Create New Tab</div><input class="modal-input" placeholder="Enter tab name" .value=${this.newTabName} @input=${s=>this.newTabName=s.target.value} @keydown=${s=>s.key==="Enter"?this.createNewTab():s.key==="Escape"?this.showNewTabModal=!1:void 0} autofocus /><div class="modal-buttons"><button class="modal-btn modal-btn-secondary" @click=${()=>this.showNewTabModal=!1}>Cancel</button><button class="modal-btn modal-btn-primary" @click=${this.createNewTab}>Create Tab</button></div></div></div>`:""}
    `}};$e.styles=C`
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
  `;Je([b()],$e.prototype,"places",2);Je([b()],$e.prototype,"selectedPlace",2);Je([b()],$e.prototype,"tabs",2);Je([b()],$e.prototype,"activeTabId",2);Je([b()],$e.prototype,"showNewTabModal",2);Je([b()],$e.prototype,"newTabName",2);Je([b()],$e.prototype,"customPlaces",2);$e=Je([j("app-places")],$e);var Wl=Object.defineProperty,Yl=Object.getOwnPropertyDescriptor,Ee=(e,t,s,o)=>{for(var i=o>1?void 0:o?Yl(t,s):t,a=e.length-1,r;a>=0;a--)(r=e[a])&&(i=(o?r(t,s,i):r(i))||i);return o&&i&&Wl(t,s,i),i};let ue=class extends O{constructor(){super(...arguments),this.isPremium=!1,this.activeTier="none",this.selectedTier="learning",this.showPurchaseConfirm=!1,this.purchaseMessage="",this.checkoutError="",this.isCheckingOut=!1,this.playPrices={},this.isRestoring=!1,this.premiumManager=te.getInstance(),this.stripeApiBase="".replace(/\/$/,""),this.tiers=[{id:"family",name:"Family Photos",price:"$39.99",summary:"Personalize the app with real pictures.",bestFor:"Families who mainly need custom photos.",features:["Upload custom images","Organize photos by category","Use real family, food, toy, and place pictures","Local device storage"]},{id:"learning",name:"Learning Plus",price:"$99.99",summary:"Adds a voice that fits your child.",bestFor:"Daily communication at home and school.",features:["Everything in Family Photos","Choose a preferred device voice","Set a speaking rate across every board"]},{id:"allAccess",name:"All Access",price:"$149.99",summary:"Full feature access for serious long-term use.",bestFor:"Caregivers, therapy teams, and multi-context use.",features:["Everything in Learning Plus","Additional named tabs on every board (Home, Grandma's House)","Export and import custom image backups","Puzzle learning sessions for home, therapy, and school"]}],this.onPremiumChanged=()=>this.refreshPremiumState()}connectedCallback(){super.connectedCallback(),this.refreshPremiumState(),window.addEventListener(Ns,this.onPremiumChanged)}disconnectedCallback(){window.removeEventListener(Ns,this.onPremiumChanged),super.disconnectedCallback()}async loadPlayPrices(){try{const e=await vn();this.playPrices=Object.fromEntries(e.map(t=>[t.tier,t.priceString]))}catch(e){console.warn("[BILLING] Could not load Play prices",e)}}displayPrice(e){return e.id!=="none"&&this.playPrices[e.id]||e.price}async startPlayPurchase(){if(this.selectedTier==="none")return;const e={none:0,family:1,learning:2,allAccess:3};if(e[this.selectedTier]<=e[this.activeTier]){this.checkoutError="Your current tier already includes this. Choose a higher tier to upgrade.";return}this.checkoutError="",this.isCheckingOut=!0;const t=await wn(this.selectedTier);this.isCheckingOut=!1,t.status==="purchased"?(this.premiumManager.applyStoreTier(t.tier),this.refreshPremiumState(),this.showPurchaseConfirm=!1,this.purchaseMessage=`${this.selectedTierOption.name} is active. Thank you!`):t.status==="pending"?(this.showPurchaseConfirm=!1,this.purchaseMessage="Your payment is processing. Premium unlocks automatically once Google Play confirms it."):t.status==="cancelled"?this.showPurchaseConfirm=!1:this.checkoutError=t.message}async restorePurchases(){this.isRestoring=!0,this.checkoutError="";const e=await this.premiumManager.syncWithPlay();this.isRestoring=!1,this.refreshPremiumState(),this.purchaseMessage=e==="none"?"No purchases found for this Google account.":`${this.tiers.find(t=>t.id===e)?.name??"Premium"} restored.`}refreshPremiumState(){this.isPremium=this.premiumManager.isPremium(),this.activeTier=this.premiumManager.getTier(),this.activeTier!=="none"&&(this.selectedTier=this.activeTier)}get selectedTierOption(){return this.tiers.find(e=>e.id===this.selectedTier)??this.tiers[1]}selectTier(e){e!=="none"&&(this.selectedTier=e)}openPurchaseConfirm(){this.showPurchaseConfirm=!0}cancelPurchase(){this.showPurchaseConfirm=!1}async startStripeCheckout(){if(!this.stripeApiBase){this.checkoutError="Checkout is not available in this build yet. Please contact support.";return}this.checkoutError="",this.isCheckingOut=!0;try{const e=await fetch(`${this.stripeApiBase}/api/create-checkout-session`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tier:this.selectedTier})}),t=await e.json();if(!e.ok||!t.url)throw new Error(t.error||"Unable to start Stripe checkout.");window.location.href=t.url}catch(e){this.checkoutError=e instanceof Error?e.message:"Unable to start Stripe checkout.",this.isCheckingOut=!1}}confirmPurchase(){this.startStripeCheckout()}simulatePurchaseForTesting(){this.premiumManager.simulatePremiumPurchase(this.selectedTier),this.refreshPremiumState(),this.showPurchaseConfirm=!1,this.purchaseMessage=`${this.selectedTierOption.name} is active.`}render(){const e=this.selectedTierOption;return d`
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
          ${d`<a class="secondary-button" href=${g("upgrade")}>Use Upgrade Code</a>`}
          <a class="secondary-button" href=${g("settings")}>Later</a>
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
    `}};ue.styles=C`
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
  `;Ee([b()],ue.prototype,"isPremium",2);Ee([b()],ue.prototype,"activeTier",2);Ee([b()],ue.prototype,"selectedTier",2);Ee([b()],ue.prototype,"showPurchaseConfirm",2);Ee([b()],ue.prototype,"purchaseMessage",2);Ee([b()],ue.prototype,"checkoutError",2);Ee([b()],ue.prototype,"isCheckingOut",2);Ee([b()],ue.prototype,"playPrices",2);Ee([b()],ue.prototype,"isRestoring",2);ue=Ee([j("app-premium")],ue);var Kl=Object.defineProperty,Gl=Object.getOwnPropertyDescriptor,We=(e,t,s,o)=>{for(var i=o>1?void 0:o?Gl(t,s):t,a=e.length-1,r;a>=0;a--)(r=e[a])&&(i=(o?r(t,s,i):r(i))||i);return o&&i&&Kl(t,s,i),i};let pe=class extends O{constructor(){super(...arguments),this.selectedCategory="foods",this.selectedFile=null,this.imageName="",this.images=[],this.isPremium=!1,this.storageInfo={used:0,max:0,percentage:0},this.uploadMessage="",this.premiumManager=te.getInstance(),this.imagesManager=ie.getInstance(),this.fileInputRef=null,this.defaultCategory="foods"}connectedCallback(){super.connectedCallback(),this.isPremium=this.premiumManager.canUseCustomImages(),this.loadImages(),this.applyCategoryFromUrl()}applyCategoryFromUrl(){try{const t=new URLSearchParams(window.location.search).get("category");t&&pe.VALID_CATEGORIES.includes(t)&&(this.selectedCategory=t,this.defaultCategory=t)}catch{}}loadImages(){this.images=this.imagesManager.getAllImages(),this.storageInfo=this.imagesManager.getStorageInfo()}onFileSelected(e){const s=e.target.files?.[0];if(s){if(!s.type.startsWith("image/")){this.uploadMessage="Please select an image file";return}if(s.size>500*1024){this.uploadMessage="Image must be smaller than 500KB";return}this.selectedFile=s,this.uploadMessage=""}}readFileAsDataUrl(e){return new Promise((t,s)=>{const o=new FileReader;o.onload=()=>t(o.result),o.onerror=s,o.readAsDataURL(e)})}chooseImage(){this.shadowRoot?.querySelector("#custom-image-file")?.click()}async uploadImage(){if(!this.selectedFile||!this.imageName){this.uploadMessage="Please select an image and enter a name";return}try{const e=await this.readFileAsDataUrl(this.selectedFile);this.imagesManager.addImage(this.selectedCategory,this.imageName,e)?(this.uploadMessage=`✅ Image "${this.imageName}" uploaded successfully!`,this.selectedFile=null,this.imageName="",this.selectedCategory=this.defaultCategory,this.fileInputRef&&(this.fileInputRef.value=""),this.loadImages(),setTimeout(()=>{this.uploadMessage=""},3e3)):this.uploadMessage="❌ Failed to upload image"}catch(e){this.uploadMessage=`❌ Error: ${e instanceof Error?e.message:"Unknown error"}`}}deleteImage(e){confirm("Delete this image?")&&(this.imagesManager.deleteImage(e),this.loadImages())}deleteCategory(){confirm(`Delete all images in ${this.selectedCategory}?`)&&(this.imagesManager.deleteByCategory(this.selectedCategory),this.loadImages())}exportImages(){const e=this.imagesManager.exportData(),t=new Blob([e],{type:"application/json"}),s=URL.createObjectURL(t),o=document.createElement("a");o.href=s,o.download=`caydenjoy-images-${new Date().toISOString().slice(0,10)}.json`,o.click(),URL.revokeObjectURL(s),this.uploadMessage="Custom images backup exported"}chooseImportFile(){this.shadowRoot?.querySelector("#custom-images-import")?.click()}async importImages(e){const t=e.target,s=t.files?.[0];if(s)try{const o=await s.text();this.imagesManager.importData(o)?(this.loadImages(),this.uploadMessage="Custom images backup imported"):this.uploadMessage="Could not import this backup file"}catch(o){this.uploadMessage=`Import failed: ${o instanceof Error?o.message:"Unknown error"}`}finally{t.value=""}}clearAll(){confirm("Delete ALL custom images? This cannot be undone.")&&(this.imagesManager.clearAll(),this.loadImages(),this.uploadMessage="✅ All images cleared",setTimeout(()=>{this.uploadMessage=""},2e3))}render(){const e=this.premiumManager.canUseCloudBackup(),t=this.imagesManager.getImagesByCategory(this.selectedCategory);return this.isPremium?d`
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
                `:d`<a class="btn btn-secondary" href=${g("premium")}>Unlock Backups</a>`}
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
            <a href=${g("premium")}>View Family Photos</a>
          </div>
        </div>
      `}};pe.styles=C`
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
  `;pe.VALID_CATEGORIES=["communication","foods","colors","places","family","numbers","objects","quick","activities","other"];We([b()],pe.prototype,"selectedCategory",2);We([b()],pe.prototype,"selectedFile",2);We([b()],pe.prototype,"imageName",2);We([b()],pe.prototype,"images",2);We([b()],pe.prototype,"isPremium",2);We([b()],pe.prototype,"storageInfo",2);We([b()],pe.prototype,"uploadMessage",2);pe=We([j("app-custom-images")],pe);var Xl=Object.defineProperty,Ql=Object.getOwnPropertyDescriptor,Ai=(e,t,s,o)=>{for(var i=o>1?void 0:o?Ql(t,s):t,a=e.length-1,r;a>=0;a--)(r=e[a])&&(i=(o?r(t,s,i):r(i))||i);return o&&i&&Xl(t,s,i),i};let ds=class extends O{constructor(){super(...arguments),this.summary=oe.getInstance().getSummary(),this.progressManager=oe.getInstance()}connectedCallback(){super.connectedCallback(),this.refresh()}refresh(){this.summary=this.progressManager.getSummary()}clearProgress(){confirm("Clear local progress history?")&&(this.progressManager.clear(),this.refresh())}formatTime(e){return new Date(e).toLocaleString()}render(){return d`
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
    `}};ds.styles=C`
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
  `;Ai([b()],ds.prototype,"summary",2);ds=Ai([j("app-progress")],ds);const Gt="caydenjoy_feedback_items",Zl=200;class Qe{static getInstance(){return Qe.instance||(Qe.instance=new Qe),Qe.instance}getItems(){try{const t=localStorage.getItem(Gt);return t?JSON.parse(t):[]}catch(t){return console.error("Could not load feedback:",t),[]}}addItem(t,s,o,i){const a={id:`feedback_${Date.now()}_${Math.random().toString(36).slice(2,8)}`,type:t,title:s,details:o,contact:i,createdAt:Date.now()},r=[a,...this.getItems()].slice(0,Zl);return localStorage.setItem(Gt,JSON.stringify(r)),a}deleteItem(t){const s=this.getItems().filter(o=>o.id!==t);localStorage.setItem(Gt,JSON.stringify(s))}clear(){localStorage.removeItem(Gt)}exportData(){return JSON.stringify(this.getItems(),null,2)}}Qe.getInstance();var ec=Object.defineProperty,tc=Object.getOwnPropertyDescriptor,rt=(e,t,s,o)=>{for(var i=o>1?void 0:o?tc(t,s):t,a=e.length-1,r;a>=0;a--)(r=e[a])&&(i=(o?r(t,s,i):r(i))||i);return o&&i&&ec(t,s,i),i};let Oe=class extends O{constructor(){super(...arguments),this.type="wishlist",this.feedbackTitle="",this.details="",this.contact="",this.message="",this.items=[],this.feedbackManager=Qe.getInstance()}connectedCallback(){super.connectedCallback(),this.refresh()}refresh(){this.items=this.feedbackManager.getItems()}submitFeedback(){if(!this.feedbackTitle.trim()||!this.details.trim()){this.message="Please add a short title and details.";return}this.feedbackManager.addItem(this.type,this.feedbackTitle.trim(),this.details.trim(),this.contact.trim()),this.feedbackTitle="",this.details="",this.contact="",this.message="Thank you. The idea was saved on this device.",this.refresh()}deleteItem(e){this.feedbackManager.deleteItem(e),this.refresh()}exportFeedback(){const e=new Blob([this.feedbackManager.exportData()],{type:"application/json"}),t=URL.createObjectURL(e),s=document.createElement("a");s.href=t,s.download=`caydenjoy-feedback-${new Date().toISOString().slice(0,10)}.json`,s.click(),URL.revokeObjectURL(t),this.message="Feedback export created."}clearFeedback(){confirm("Clear all saved feedback and wishlist items?")&&(this.feedbackManager.clear(),this.refresh(),this.message="Feedback cleared.")}formatTime(e){return new Date(e).toLocaleString()}render(){return d`
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
    `}};Oe.styles=C`
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
  `;rt([b()],Oe.prototype,"type",2);rt([b()],Oe.prototype,"feedbackTitle",2);rt([b()],Oe.prototype,"details",2);rt([b()],Oe.prototype,"contact",2);rt([b()],Oe.prototype,"message",2);rt([b()],Oe.prototype,"items",2);Oe=rt([j("app-feedback")],Oe);var sc=Object.getOwnPropertyDescriptor,oc=(e,t,s,o)=>{for(var i=o>1?void 0:o?sc(t,s):t,a=e.length-1,r;a>=0;a--)(r=e[a])&&(i=r(i)||i);return i};let Fs=class extends O{render(){return d`
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
            <sl-button href="${g()}" variant="primary">Open Board</sl-button>
          </sl-card>

          <sl-card>
            <h2>Real Photos</h2>
            <p>
              Add family, food, classroom, therapy, and home photos so the child
              recognizes real objects from daily life.
            </p>
            <sl-button href="${g("custom-images")}" variant="primary">Manage Photos</sl-button>
          </sl-card>

          <sl-card>
            <h2>Activity Sessions</h2>
            <p>
              Use choice, matching, routine, and puzzle activities during learning
              sessions. Safety words stay available while the child works.
            </p>
            <sl-button href="${g("family-puzzle")}" variant="primary">Start Activities</sl-button>
          </sl-card>

          ${d`<sl-card>
            <h2>APK Upgrades</h2>
            <p>
              Families can unlock paid tiers with a one-time upgrade key after
              purchase. Keep generated keys in your private sales records.
            </p>
            <sl-button href="${g("upgrade")}" variant="primary">Open Upgrade</sl-button>
          </sl-card>

          <sl-card>
            <h2>Download And Install</h2>
            <p>
              Share one link with buyers so they can download CaydenJoy on Android,
              then return to redeem their upgrade key.
            </p>
            <sl-button href="${g("download")}" variant="primary">Open Download Page</sl-button>
          </sl-card>`}
        </div>

        <div class="actions">
          <sl-button href="${g("faq")}" variant="default">FAQ</sl-button>
          <sl-button href="${g("feedback")}" variant="default">Feedback</sl-button>
        </div>
      </main>
    `}};Fs.styles=[Fe,C`
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
    `];Fs=oc([j("app-documentation")],Fs);var ic=Object.getOwnPropertyDescriptor,ac=(e,t,s,o)=>{for(var i=o>1?void 0:o?ic(t,s):t,a=e.length-1,r;a>=0;a--)(r=e[a])&&(i=r(i)||i);return i};let Vs=class extends O{render(){return d`
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

        <sl-button href="${g("contact")}" variant="primary">Contact Support</sl-button>
      </main>
    `}};Vs.styles=[Fe,C`
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
    `];Vs=ac([j("app-privacy")],Vs);var rc=Object.getOwnPropertyDescriptor,nc=(e,t,s,o)=>{for(var i=o>1?void 0:o?rc(t,s):t,a=e.length-1,r;a>=0;a--)(r=e[a])&&(i=r(i)||i);return i};let qs=class extends O{render(){return d`
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

        <sl-button href="${g("premium")}" variant="primary">View Premium Tiers</sl-button>
      </main>
    `}};qs.styles=[Fe,C`
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
    `];qs=nc([j("app-terms")],qs);var lc=Object.getOwnPropertyDescriptor,cc=(e,t,s,o)=>{for(var i=o>1?void 0:o?lc(t,s):t,a=e.length-1,r;a>=0;a--)(r=e[a])&&(i=r(i)||i);return i};let Hs=class extends O{render(){return d`
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

        <sl-button href="${g("upgrade")}" variant="primary">Redeem Upgrade Key</sl-button>`}
      </main>
    `}};Hs.styles=[Fe,C`
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
    `];Hs=cc([j("app-license")],Hs);globalThis.URLPattern||await ct(()=>import("./index-DkuV2QLQ.js"),[]);const dc="/CaydenJoy/",hc=[{path:g("upgrade"),title:"Upgrade",plugins:[Qt(()=>ct(()=>import("./app-upgrade-C30xeDuc.js"),[]))],render:()=>d`<app-upgrade></app-upgrade>`},{path:g("download"),title:"Download APK",plugins:[Qt(()=>ct(()=>import("./app-download-Cw-NCcQq.js"),[]))],render:()=>d`<app-download></app-download>`},{path:g("payment-success"),title:"Payment Complete",plugins:[Qt(()=>ct(()=>import("./app-payment-success-BtIrrg4Q.js"),[]))],render:()=>d`<app-payment-success></app-payment-success>`}],uc=[],wc=new fa({routes:[{path:g(),title:"Communication",render:()=>d`<app-communication></app-communication>`},{path:g("home"),title:"Home",render:()=>d`<app-home></app-home>`},{path:g("home-enhanced"),title:"Quick Communication",render:()=>d`<app-home-enhanced></app-home-enhanced>`},{path:g("services"),title:"Services",render:()=>d`<app-services></app-services>`},{path:g("contact"),title:"Contact",render:()=>d`<app-contact></app-contact>`},{path:g("settings"),title:"Settings",render:()=>d`<app-settings></app-settings>`},{path:g("faq"),title:"FAQ",render:()=>d`<app-faq></app-faq>`},{path:g("family-puzzle"),title:"Activity Sessions",render:()=>d`<app-family-puzzle></app-family-puzzle>`},{path:g("foods"),title:"Foods",render:()=>d`<app-foods-enhanced></app-foods-enhanced>`},{path:g("colors"),title:"Colors",render:()=>d`<app-colors></app-colors>`},{path:g("numbers"),title:"Numbers",render:()=>d`<app-numbers></app-numbers>`},{path:g("places"),title:"Places",render:()=>d`<app-places></app-places>`},{path:g("premium"),title:"Premium",render:()=>d`<app-premium></app-premium>`},{path:g("custom-images"),title:"Custom Images",render:()=>d`<app-custom-images></app-custom-images>`},...hc,...uc,{path:g("progress"),title:"Progress Dashboard",render:()=>d`<app-progress></app-progress>`},{path:g("feedback"),title:"Feedback & Wishlist",render:()=>d`<app-feedback></app-feedback>`},{path:g("documentation"),title:"Documentation",render:()=>d`<app-documentation></app-documentation>`},{path:g("privacy"),title:"Privacy Policy",render:()=>d`<app-privacy></app-privacy>`},{path:g("terms"),title:"Terms of Service",render:()=>d`<app-terms></app-terms>`},{path:g("license"),title:"License",render:()=>d`<app-license></app-license>`},{path:g("about"),title:"About",plugins:[Qt(()=>ct(()=>import("./app-about-CZLkBu9R.js"),[]))],render:()=>d`<app-about></app-about>`}]});function g(e){let t=dc;return e&&(t=t+e),t}var pc=C`
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
`,qt=class extends V{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return d`
      <span
        part="base"
        class=${W({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};qt.styles=[K,pc];n([l({reflect:!0})],qt.prototype,"variant",2);n([l({type:Boolean,reflect:!0})],qt.prototype,"pill",2);n([l({type:Boolean,reflect:!0})],qt.prototype,"pulse",2);qt.define("sl-badge");var mc=Object.defineProperty,gc=Object.getOwnPropertyDescriptor,fo=(e,t,s,o)=>{for(var i=o>1?void 0:o?gc(t,s):t,a=e.length-1,r;a>=0;a--)(r=e[a])&&(i=(o?r(t,s,i):r(i))||i);return o&&i&&mc(t,s,i),i};let Rt=class extends O{constructor(){super(...arguments),this.message="CaydenJoy",this.isOnline=navigator.onLine,this.accessibilityManager=ee.getInstance()}firstUpdated(){globalThis.addEventListener("online",()=>{this.isOnline=!0}),globalThis.addEventListener("offline",()=>{this.isOnline=!1})}speak(e){this.accessibilityManager.speakNow(e,.9)}render(){return d`
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
          <a class="feature" href=${g("family-puzzle")}>
            <img
              src=${w("photo-1503676260728-1c00da094a0b")}
              alt="Child activity table"
            />
            <div class="feature-copy">
              <div class="feature-title">Activity Sessions</div>
              <div class="feature-text">Photo choices, matching, routine sequencing, and simple puzzle work.</div>
            </div>
          </a>

          <a class="feature" href=${g()}>
            <img
              src=${w("photo-1544027993-37dbfe43562a")}
              alt="Communication cards"
            />
            <div class="feature-copy">
              <div class="feature-title">Communication Board</div>
              <div class="feature-text">Large request buttons with speech for daily needs and sensory support.</div>
            </div>
          </a>

          ${d`<a class="feature" href=${g("download")}>
            <img
              src=${w("photo-1521791136064-7986c2920216")}
              alt="Android app download"
            />
            <div class="feature-copy">
              <div class="feature-title">Download Android App</div>
              <div class="feature-text">Open the buyer download page for the CaydenJoy APK and install instructions.</div>
            </div>
          </a>`}

          <a class="feature" href=${g("custom-images")}>
            <img
              src=${w("photo-1516035069371-29a1b244cc32")}
              alt="Camera for custom photos"
            />
            <div class="feature-copy">
              <div class="feature-title">Custom Photos</div>
              <div class="feature-text">Add real pictures from the child's home, family, foods, toys, and places.</div>
            </div>
          </a>

          <a class="feature" href=${g("settings")}>
            <img
              src=${w("photo-1581092160607-ee22621dd758")}
              alt="Calm settings workspace"
            />
            <div class="feature-copy">
              <div class="feature-title">Comfort Settings</div>
              <div class="feature-text">Adjust theme, text size, sound, speech, contrast, and motion sensitivity.</div>
            </div>
          </a>

          <a class="feature" href=${g("progress")}>
            <img
              src=${w("photo-1551288049-bebda4e38f71")}
              alt="Progress notes and charts"
            />
            <div class="feature-copy">
              <div class="feature-title">Progress Dashboard</div>
              <div class="feature-text">See local usage patterns for communication, activities, and safety buttons.</div>
            </div>
          </a>

          <a class="feature" href=${g("feedback")}>
            <img
              src=${w("photo-1455390582262-044cdead277a")}
              alt="Notebook for feedback and ideas"
            />
            <div class="feature-copy">
              <div class="feature-title">Feedback & Wishlist</div>
              <div class="feature-text">Save caregiver ideas, improvement requests, bug reports, and success stories.</div>
            </div>
          </a>
        </section>
      </main>
    `}};Rt.styles=C`
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
  `;fo([l()],Rt.prototype,"message",2);fo([l()],Rt.prototype,"isOnline",2);Rt=fo([j("app-home")],Rt);export{ee as A,Ge as L,te as P,ne as S,Ci as W,ct as _,O as a,wc as b,g as c,Fe as d,ki as e,C as i,b as r,bo as s,j as t,d as x};
