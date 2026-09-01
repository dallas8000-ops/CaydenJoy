var Si="";function co(e){Si=e}function gs(e=""){if(!Si){const t=[...document.getElementsByTagName("script")],i=t.find(o=>o.hasAttribute("data-shoelace"));if(i)co(i.getAttribute("data-shoelace"));else{const o=t.find(r=>/shoelace(\.min)?\.js($|\?)/.test(r.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(r.src));let s="";o&&(s=o.getAttribute("src")),co(s.split("/").slice(0,-1).join("/"))}}return Si.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var Ro=Object.defineProperty,bs=Object.defineProperties,vs=Object.getOwnPropertyDescriptor,ys=Object.getOwnPropertyDescriptors,uo=Object.getOwnPropertySymbols,ws=Object.prototype.hasOwnProperty,xs=Object.prototype.propertyIsEnumerable,ho=(e,t,i)=>t in e?Ro(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,Ue=(e,t)=>{for(var i in t||(t={}))ws.call(t,i)&&ho(e,i,t[i]);if(uo)for(var i of uo(t))xs.call(t,i)&&ho(e,i,t[i]);return e},Mt=(e,t)=>bs(e,ys(t)),n=(e,t,i,o)=>{for(var s=o>1?void 0:o?vs(t,i):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(s=(o?a(t,i,s):a(s))||s);return o&&s&&Ro(t,i,s),s},Fo=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},_s=(e,t,i)=>(Fo(e,t,"read from private field"),t.get(e)),ks=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},$s=(e,t,i,o)=>(Fo(e,t,"write to private field"),t.set(e,i),i);const Wt=globalThis,qi=Wt.ShadowRoot&&(Wt.ShadyCSS===void 0||Wt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Vi=Symbol(),po=new WeakMap;let Bo=class{constructor(t,i,o){if(this._$cssResult$=!0,o!==Vi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(qi&&t===void 0){const o=i!==void 0&&i.length===1;o&&(t=po.get(i)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&po.set(i,t))}return t}toString(){return this.cssText}};const Cs=e=>new Bo(typeof e=="string"?e:e+"",void 0,Vi),w=(e,...t)=>{const i=e.length===1?e[0]:t.reduce(((o,s,r)=>o+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[r+1]),e[0]);return new Bo(i,e,Vi)},Ts=(e,t)=>{if(qi)e.adoptedStyleSheets=t.map((i=>i instanceof CSSStyleSheet?i:i.styleSheet));else for(const i of t){const o=document.createElement("style"),s=Wt.litNonce;s!==void 0&&o.setAttribute("nonce",s),o.textContent=i.cssText,e.appendChild(o)}},mo=qi?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const o of t.cssRules)i+=o.cssText;return Cs(i)})(e):e;const{is:Ss,defineProperty:As,getOwnPropertyDescriptor:zs,getOwnPropertyNames:Es,getOwnPropertySymbols:Ps,getPrototypeOf:Is}=Object,ai=globalThis,fo=ai.trustedTypes,Os=fo?fo.emptyScript:"",Ds=ai.reactiveElementPolyfillSupport,St=(e,t)=>e,nt={toAttribute(e,t){switch(t){case Boolean:e=e?Os:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},ji=(e,t)=>!Ss(e,t),go={attribute:!0,type:String,converter:nt,reflect:!1,hasChanged:ji};Symbol.metadata??=Symbol("metadata"),ai.litPropertyMetadata??=new WeakMap;class st extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=go){if(i.state&&(i.attribute=!1),this._$Ei(),this.elementProperties.set(t,i),!i.noAccessor){const o=Symbol(),s=this.getPropertyDescriptor(t,o,i);s!==void 0&&As(this.prototype,t,s)}}static getPropertyDescriptor(t,i,o){const{get:s,set:r}=zs(this.prototype,t)??{get(){return this[i]},set(a){this[i]=a}};return{get(){return s?.call(this)},set(a){const c=s?.call(this);r.call(this,a),this.requestUpdate(t,c,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??go}static _$Ei(){if(this.hasOwnProperty(St("elementProperties")))return;const t=Is(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(St("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(St("properties"))){const i=this.properties,o=[...Es(i),...Ps(i)];for(const s of o)this.createProperty(s,i[s])}const t=this[Symbol.metadata];if(t!==null){const i=litPropertyMetadata.get(t);if(i!==void 0)for(const[o,s]of i)this.elementProperties.set(o,s)}this._$Eh=new Map;for(const[i,o]of this.elementProperties){const s=this._$Eu(i,o);s!==void 0&&this._$Eh.set(s,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const s of o)i.unshift(mo(s))}else t!==void 0&&i.push(mo(t));return i}static _$Eu(t,i){const o=i.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,i=this.constructor.elementProperties;for(const o of i.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ts(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,i,o){this._$AK(t,o)}_$EC(t,i){const o=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,o);if(s!==void 0&&o.reflect===!0){const r=(o.converter?.toAttribute!==void 0?o.converter:nt).toAttribute(i,o.type);this._$Em=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,i){const o=this.constructor,s=o._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const r=o.getPropertyOptions(s),a=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:nt;this._$Em=s,this[s]=a.fromAttribute(i,r.type),this._$Em=null}}requestUpdate(t,i,o){if(t!==void 0){if(o??=this.constructor.getPropertyOptions(t),!(o.hasChanged??ji)(this[t],i))return;this.P(t,i,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,i,o){this._$AL.has(t)||this._$AL.set(t,i),o.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,r]of this._$Ep)this[s]=r;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[s,r]of o)r.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],r)}let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),this._$EO?.forEach((o=>o.hostUpdate?.())),this.update(i)):this._$EU()}catch(o){throw t=!1,this._$EU(),o}t&&this._$AE(i)}willUpdate(t){}_$AE(t){this._$EO?.forEach((i=>i.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((i=>this._$EC(i,this[i]))),this._$EU()}updated(t){}firstUpdated(t){}}st.elementStyles=[],st.shadowRootOptions={mode:"open"},st[St("elementProperties")]=new Map,st[St("finalized")]=new Map,Ds?.({ReactiveElement:st}),(ai.reactiveElementVersions??=[]).push("2.0.4");const Hi=globalThis,Xt=Hi.trustedTypes,bo=Xt?Xt.createPolicy("lit-html",{createHTML:e=>e}):void 0,qo="$lit$",Pe=`lit$${Math.random().toFixed(9).slice(2)}$`,Vo="?"+Pe,Ms=`<${Vo}>`,He=document,zt=()=>He.createComment(""),Et=e=>e===null||typeof e!="object"&&typeof e!="function",Ki=Array.isArray,Ns=e=>Ki(e)||typeof e?.[Symbol.iterator]=="function",gi=`[ 	
\f\r]`,xt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,vo=/-->/g,yo=/>/g,Be=RegExp(`>|${gi}(?:([^\\s"'>=/]+)(${gi}*=${gi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),wo=/'/g,xo=/"/g,jo=/^(?:script|style|textarea|title)$/i,Ls=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),d=Ls(1),Z=Symbol.for("lit-noChange"),D=Symbol.for("lit-nothing"),_o=new WeakMap,Ve=He.createTreeWalker(He,129);function Ho(e,t){if(!Ki(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return bo!==void 0?bo.createHTML(t):t}const Us=(e,t)=>{const i=e.length-1,o=[];let s,r=t===2?"<svg>":t===3?"<math>":"",a=xt;for(let c=0;c<i;c++){const u=e[c];let h,p,m=-1,v=0;for(;v<u.length&&(a.lastIndex=v,p=a.exec(u),p!==null);)v=a.lastIndex,a===xt?p[1]==="!--"?a=vo:p[1]!==void 0?a=yo:p[2]!==void 0?(jo.test(p[2])&&(s=RegExp("</"+p[2],"g")),a=Be):p[3]!==void 0&&(a=Be):a===Be?p[0]===">"?(a=s??xt,m=-1):p[1]===void 0?m=-2:(m=a.lastIndex-p[2].length,h=p[1],a=p[3]===void 0?Be:p[3]==='"'?xo:wo):a===xo||a===wo?a=Be:a===vo||a===yo?a=xt:(a=Be,s=void 0);const b=a===Be&&e[c+1].startsWith("/>")?" ":"";r+=a===xt?u+Ms:m>=0?(o.push(h),u.slice(0,m)+qo+u.slice(m)+Pe+b):u+Pe+(m===-2?c:b)}return[Ho(e,r+(e[i]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),o]};class Pt{constructor({strings:t,_$litType$:i},o){let s;this.parts=[];let r=0,a=0;const c=t.length-1,u=this.parts,[h,p]=Us(t,i);if(this.el=Pt.createElement(h,o),Ve.currentNode=this.el.content,i===2||i===3){const m=this.el.content.firstChild;m.replaceWith(...m.childNodes)}for(;(s=Ve.nextNode())!==null&&u.length<c;){if(s.nodeType===1){if(s.hasAttributes())for(const m of s.getAttributeNames())if(m.endsWith(qo)){const v=p[a++],b=s.getAttribute(m).split(Pe),y=/([.?@])?(.*)/.exec(v);u.push({type:1,index:r,name:y[2],strings:b,ctor:y[1]==="."?Fs:y[1]==="?"?Bs:y[1]==="@"?qs:ni}),s.removeAttribute(m)}else m.startsWith(Pe)&&(u.push({type:6,index:r}),s.removeAttribute(m));if(jo.test(s.tagName)){const m=s.textContent.split(Pe),v=m.length-1;if(v>0){s.textContent=Xt?Xt.emptyScript:"";for(let b=0;b<v;b++)s.append(m[b],zt()),Ve.nextNode(),u.push({type:2,index:++r});s.append(m[v],zt())}}}else if(s.nodeType===8)if(s.data===Vo)u.push({type:2,index:r});else{let m=-1;for(;(m=s.data.indexOf(Pe,m+1))!==-1;)u.push({type:7,index:r}),m+=Pe.length-1}r++}}static createElement(t,i){const o=He.createElement("template");return o.innerHTML=t,o}}function lt(e,t,i=e,o){if(t===Z)return t;let s=o!==void 0?i._$Co?.[o]:i._$Cl;const r=Et(t)?void 0:t._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),r===void 0?s=void 0:(s=new r(e),s._$AT(e,i,o)),o!==void 0?(i._$Co??=[])[o]=s:i._$Cl=s),s!==void 0&&(t=lt(e,s._$AS(e,t.values),s,o)),t}class Rs{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:o}=this._$AD,s=(t?.creationScope??He).importNode(i,!0);Ve.currentNode=s;let r=Ve.nextNode(),a=0,c=0,u=o[0];for(;u!==void 0;){if(a===u.index){let h;u.type===2?h=new Nt(r,r.nextSibling,this,t):u.type===1?h=new u.ctor(r,u.name,u.strings,this,t):u.type===6&&(h=new Vs(r,this,t)),this._$AV.push(h),u=o[++c]}a!==u?.index&&(r=Ve.nextNode(),a++)}return Ve.currentNode=He,s}p(t){let i=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,i),i+=o.strings.length-2):o._$AI(t[i])),i++}}class Nt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,o,s){this.type=2,this._$AH=D,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=o,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&t?.nodeType===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=lt(this,t,i),Et(t)?t===D||t==null||t===""?(this._$AH!==D&&this._$AR(),this._$AH=D):t!==this._$AH&&t!==Z&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ns(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==D&&Et(this._$AH)?this._$AA.nextSibling.data=t:this.T(He.createTextNode(t)),this._$AH=t}$(t){const{values:i,_$litType$:o}=t,s=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=Pt.createElement(Ho(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===s)this._$AH.p(i);else{const r=new Rs(s,this),a=r.u(this.options);r.p(i),this.T(a),this._$AH=r}}_$AC(t){let i=_o.get(t.strings);return i===void 0&&_o.set(t.strings,i=new Pt(t)),i}k(t){Ki(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let o,s=0;for(const r of t)s===i.length?i.push(o=new Nt(this.O(zt()),this.O(zt()),this,this.options)):o=i[s],o._$AI(r),s++;s<i.length&&(this._$AR(o&&o._$AB.nextSibling,s),i.length=s)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class ni{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,o,s,r){this.type=1,this._$AH=D,this._$AN=void 0,this.element=t,this.name=i,this._$AM=s,this.options=r,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=D}_$AI(t,i=this,o,s){const r=this.strings;let a=!1;if(r===void 0)t=lt(this,t,i,0),a=!Et(t)||t!==this._$AH&&t!==Z,a&&(this._$AH=t);else{const c=t;let u,h;for(t=r[0],u=0;u<r.length-1;u++)h=lt(this,c[o+u],i,u),h===Z&&(h=this._$AH[u]),a||=!Et(h)||h!==this._$AH[u],h===D?t=D:t!==D&&(t+=(h??"")+r[u+1]),this._$AH[u]=h}a&&!s&&this.j(t)}j(t){t===D?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Fs extends ni{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===D?void 0:t}}class Bs extends ni{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==D)}}class qs extends ni{constructor(t,i,o,s,r){super(t,i,o,s,r),this.type=5}_$AI(t,i=this){if((t=lt(this,t,i,0)??D)===Z)return;const o=this._$AH,s=t===D&&o!==D||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,r=t!==D&&(o===D||s);s&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Vs{constructor(t,i,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){lt(this,t)}}const js=Hi.litHtmlPolyfillSupport;js?.(Pt,Nt),(Hi.litHtmlVersions??=[]).push("3.2.1");const Hs=(e,t,i)=>{const o=i?.renderBefore??t;let s=o._$litPart$;if(s===void 0){const r=i?.renderBefore??null;o._$litPart$=s=new Nt(t.insertBefore(zt(),r),r,void 0,i??{})}return s._$AI(e),s};let z=class extends st{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Hs(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Z}};z._$litElement$=!0,z.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:z});const Ks=globalThis.litElementPolyfillSupport;Ks?.({LitElement:z});(globalThis.litElementVersions??=[]).push("4.1.1");const O=e=>(t,i)=>{i!==void 0?i.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)};const Ws={attribute:!0,type:String,converter:nt,reflect:!1,hasChanged:ji},Ys=(e=Ws,t,i)=>{const{kind:o,metadata:s}=i;let r=globalThis.litPropertyMetadata.get(s);if(r===void 0&&globalThis.litPropertyMetadata.set(s,r=new Map),r.set(i.name,e),o==="accessor"){const{name:a}=i;return{set(c){const u=t.get.call(this);t.set.call(this,c),this.requestUpdate(a,u,e)},init(c){return c!==void 0&&this.P(a,void 0,e),c}}}if(o==="setter"){const{name:a}=i;return function(c){const u=this[a];t.call(this,c),this.requestUpdate(a,u,e)}}throw Error("Unsupported decorator location: "+o)};function l(e){return(t,i)=>typeof i=="object"?Ys(e,t,i):((o,s,r)=>{const a=s.hasOwnProperty(r);return s.constructor.createProperty(r,a?{...o,wrapped:!0}:o),a?Object.getOwnPropertyDescriptor(s,r):void 0})(e,t,i)}function g(e){return l({...e,state:!0,attribute:!1})}const Js=(e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,i),i);function M(e,t){return(i,o,s)=>{const r=a=>a.renderRoot?.querySelector(e)??null;return Js(i,o,{get(){return r(this)}})}}const Gs="modulepreload",Xs=function(e){return"/caydenjoy/"+e},ko={},Ko=function(t,i,o){let s=Promise.resolve();if(i&&i.length>0){let u=function(h){return Promise.all(h.map(p=>Promise.resolve(p).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=a?.nonce||a?.getAttribute("nonce");s=u(i.map(h=>{if(h=Xs(h),h in ko)return;ko[h]=!0;const p=h.endsWith(".css"),m=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${m}`))return;const v=document.createElement("link");if(v.rel=p?"stylesheet":Gs,p||(v.as="script"),v.crossOrigin="",v.href=h,c&&v.setAttribute("nonce",c),document.head.appendChild(v),p)return new Promise((b,y)=>{v.addEventListener("load",b),v.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${h}`)))})}))}function r(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return s.then(a=>{for(const c of a||[])c.status==="rejected"&&r(c.reason);return t().catch(r)})},Wi=Symbol.for("app-tools::log::1.x");globalThis[Wi]={setDebug:Qs,debug:"window"in globalThis?new URL(window.location.href).searchParams.has("app-tools-debug"):!1};function Qs(e){globalThis[Wi].debug=!!e}function Zs(e,t){globalThis[Wi].debug&&(console.groupCollapsed(`[app-tools] ${e}`),t&&console.log(t),console.groupEnd())}function er(e){return(t,i)=>{Zs(`${e}: ${t}`,i)}}const Ee=er("router");class tr extends Event{constructor(t){super("route-changed"),this.context=t}}class ir extends EventTarget{context={params:{},query:{},title:"",url:new URL(window.location.href)};constructor(t){super(),this.config=t,this.routes=t.routes.map(i=>({...i,urlPattern:new URLPattern({pathname:i.path,baseURL:window.location.href,search:"*",hash:"*"})})),Ee("Initialized routes",this.routes),queueMicrotask(()=>{this.navigate(new URL(window.location.href),{replace:!0})}),window.addEventListener("popstate",this._onPopState),window.addEventListener("click",this._onAnchorClick)}uninstall(){window.removeEventListener("popstate",this._onPopState),window.removeEventListener("click",this._onAnchorClick)}get url(){return new URL(window.location.href)}get fallback(){return new URL(this.config?.fallback||this.baseUrl.href.substring(window.location.origin.length),this.baseUrl)}get baseUrl(){return new URL("./",document.baseURI)}render(){return Ee(`Rendering route ${this.context.url.pathname}${this.context.url.search}${this.context.url.hash}`,{context:this.context,route:this.route}),this.route?.render?.(this.context)}_matchRoute(t){for(const i of this.routes){const o=i.urlPattern.exec(t);if(o){const{title:s}=i,r=Object.fromEntries(new URLSearchParams(t.search)),a=o?.pathname?.groups??{};return this.context={url:t,title:typeof s=="function"?s({params:a,query:r,url:t}):s,params:a,query:r},i}}return Ee(`No route matched for ${t.pathname}${t.search}${t.hash}`,t),null}_notifyUrlChanged(){this.dispatchEvent(new tr(this.context))}_onPopState=()=>{this.navigate(new URL(window.location.href),{backNav:!0})};_onAnchorClick=t=>{if(t.defaultPrevented||t.button!==0||t.metaKey||t.ctrlKey||t.shiftKey)return;const i=t.composedPath().find(r=>r.tagName==="A");if(!i||!i.href)return;const o=new URL(i.href);if(this.url.href===o.href||o.host!==window.location.host||i.hasAttribute("download")||i.href.includes("mailto:"))return;const s=i.getAttribute("target");s&&s!==""&&s!=="_self"||(t.preventDefault(),this.navigate(o))};_collectPlugins(t){return[...this.config?.plugins??[],...t?.plugins??[]]}async navigate(t,i={}){typeof t=="string"&&(t=new URL(t,this.baseUrl));let o=this._matchRoute(t)||this._matchRoute(this.fallback);Ee(`Navigating to ${t.pathname}${t.search}${t.hash}`,{context:this.context,route:this.route});let s=this._collectPlugins(o);for(const r of s)try{const a=await r?.shouldNavigate?.(this.context);a&&(await a.condition()||(t=new URL(a.redirect,this.baseUrl),o=this._matchRoute(t)||this._matchRoute(this.fallback),s=this._collectPlugins(o),Ee("Redirecting",{context:this.context,route:this.route})))}catch(a){throw Ee(`Plugin "${r.name}" error on shouldNavigate hook`,a),a}if(this.route=o,!this.route)throw new Error(`[ROUTER] No route or fallback matched for url ${t}`);for(const r of s)try{await r?.beforeNavigation?.(this.context)}catch(a){throw Ee(`Plugin "${r.name}" error on beforeNavigation hook`,a),a}i?.replace?window.history.replaceState(null,"",`${t.pathname}${t.search}${t.hash}`):i.backNav||window.history.pushState(null,"",`${t.pathname}${t.search}${t.hash}`),document.title=this.context.title,this._notifyUrlChanged();for(const r of s)try{await r?.afterNavigation?.(this.context)}catch(a){throw Ee(`Plugin "${r.name}" error on afterNavigation hook`,a),a}}}function or(e){return{name:"lazy",beforeNavigation:()=>{e()}}}var sr=w`
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
`,Ge=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=i=>{const o=i.target;(this.slotNames.includes("[default]")&&!o.name||o.name&&this.slotNames.includes(o.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function rr(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let i="";return[...t].forEach(o=>{o.nodeType===Node.TEXT_NODE&&(i+=o.textContent)}),i}var B=w`
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
`,Yt,U=class extends z{constructor(){super(),ks(this,Yt,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const i=new CustomEvent(e,Ue({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(i),i}static define(e,t=this,i={}){const o=customElements.get(e);if(!o){try{customElements.define(e,t,i)}catch{customElements.define(e,class extends t{},i)}return}let s=" (unknown version)",r=s;"version"in t&&t.version&&(s=" v"+t.version),"version"in o&&o.version&&(r=" v"+o.version),!(s&&r&&s===r)&&console.warn(`Attempted to register <${e}>${s}, but <${e}>${r} has already been registered.`)}attributeChangedCallback(e,t,i){_s(this,Yt)||(this.constructor.elementProperties.forEach((o,s)=>{o.reflect&&this[s]!=null&&this.initialReflectedProperties.set(s,this[s])}),$s(this,Yt,!0)),super.attributeChangedCallback(e,t,i)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,i)=>{e.has(i)&&this[i]==null&&(this[i]=t)})}};Yt=new WeakMap;U.version="2.18.0";U.dependencies={};n([l()],U.prototype,"dir",2);n([l()],U.prototype,"lang",2);const we={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},li=e=>(...t)=>({_$litDirective$:e,values:t});let ci=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,o){this._$Ct=t,this._$AM=i,this._$Ci=o}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}};const R=li(class extends ci{constructor(e){if(super(e),e.type!==we.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((o=>o!==""))));for(const o in t)t[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(t)}const i=e.element.classList;for(const o of this.st)o in t||(i.remove(o),this.st.delete(o));for(const o in t){const s=!!t[o];s===this.st.has(o)||this.nt?.has(o)||(s?(i.add(o),this.st.add(o)):(i.remove(o),this.st.delete(o)))}return Z}});var Wo=class extends U{constructor(){super(...arguments),this.hasSlotController=new Ge(this,"footer","header","image")}render(){return d`
      <div
        part="base"
        class=${R({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};Wo.styles=[B,sr];Wo.define("sl-card");var ar=w`
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
`;const Ai=new Set,rt=new Map;let qe,Yi="ltr",Ji="en";const Yo=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(Yo){const e=new MutationObserver(Go);Yi=document.documentElement.dir||"ltr",Ji=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Jo(...e){e.map(t=>{const i=t.$code.toLowerCase();rt.has(i)?rt.set(i,Object.assign(Object.assign({},rt.get(i)),t)):rt.set(i,t),qe||(qe=t)}),Go()}function Go(){Yo&&(Yi=document.documentElement.dir||"ltr",Ji=document.documentElement.lang||navigator.language),[...Ai.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let nr=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){Ai.add(this.host)}hostDisconnected(){Ai.delete(this.host)}dir(){return`${this.host.dir||Yi}`.toLowerCase()}lang(){return`${this.host.lang||Ji}`.toLowerCase()}getTranslationData(t){var i,o;const s=new Intl.Locale(t.replace(/_/g,"-")),r=s?.language.toLowerCase(),a=(o=(i=s?.region)===null||i===void 0?void 0:i.toLowerCase())!==null&&o!==void 0?o:"",c=rt.get(`${r}-${a}`),u=rt.get(r);return{locale:s,language:r,region:a,primary:c,secondary:u}}exists(t,i){var o;const{primary:s,secondary:r}=this.getTranslationData((o=i.lang)!==null&&o!==void 0?o:this.lang());return i=Object.assign({includeFallback:!1},i),!!(s&&s[t]||r&&r[t]||i.includeFallback&&qe&&qe[t])}term(t,...i){const{primary:o,secondary:s}=this.getTranslationData(this.lang());let r;if(o&&o[t])r=o[t];else if(s&&s[t])r=s[t];else if(qe&&qe[t])r=qe[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof r=="function"?r(...i):r}date(t,i){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),i).format(t)}number(t,i){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),i).format(t)}relativeTime(t,i,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(t,i)}};var Xo={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};Jo(Xo);var lr=Xo,fe=class extends nr{};Jo(lr);var Gi=class extends U{constructor(){super(...arguments),this.localize=new fe(this)}render(){return d`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Gi.styles=[B,ar];var _t=new WeakMap,kt=new WeakMap,$t=new WeakMap,bi=new WeakSet,qt=new WeakMap,Lt=class{constructor(e,t){this.handleFormData=i=>{const o=this.options.disabled(this.host),s=this.options.name(this.host),r=this.options.value(this.host),a=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!o&&!a&&typeof s=="string"&&s.length>0&&typeof r<"u"&&(Array.isArray(r)?r.forEach(c=>{i.formData.append(s,c.toString())}):i.formData.append(s,r.toString()))},this.handleFormSubmit=i=>{var o;const s=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&((o=_t.get(this.form))==null||o.forEach(a=>{this.setUserInteracted(a,!0)})),this.form&&!this.form.noValidate&&!s&&!r(this.host)&&(i.preventDefault(),i.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),qt.set(this.host,[])},this.handleInteraction=i=>{const o=qt.get(this.host);o.includes(i.type)||o.push(i.type),o.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const o of i)if(typeof o.checkValidity=="function"&&!o.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const o of i)if(typeof o.reportValidity=="function"&&!o.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=Ue({form:i=>{const o=i.form;if(o){const r=i.getRootNode().querySelector(`#${o}`);if(r)return r}return i.closest("form")},name:i=>i.name,value:i=>i.value,defaultValue:i=>i.defaultValue,disabled:i=>{var o;return(o=i.disabled)!=null?o:!1},reportValidity:i=>typeof i.reportValidity=="function"?i.reportValidity():!0,checkValidity:i=>typeof i.checkValidity=="function"?i.checkValidity():!0,setValue:(i,o)=>i.value=o,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),qt.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),qt.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,_t.has(this.form)?_t.get(this.form).add(this.host):_t.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),kt.has(this.form)||(kt.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),$t.has(this.form)||($t.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=_t.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),kt.has(this.form)&&(this.form.reportValidity=kt.get(this.form),kt.delete(this.form)),$t.has(this.form)&&(this.form.checkValidity=$t.get(this.form),$t.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?bi.add(e):bi.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const i=document.createElement("button");i.type=e,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",t&&(i.name=t.name,i.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(o=>{t.hasAttribute(o)&&i.setAttribute(o,t.getAttribute(o))})),this.form.append(i),i.click(),i.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,i=!!bi.has(t),o=!!t.required;t.toggleAttribute("data-required",o),t.toggleAttribute("data-optional",!o),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&i),t.toggleAttribute("data-user-valid",e&&i)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e?.preventDefault()}},Xi=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(Mt(Ue({},Xi),{valid:!1,valueMissing:!0}));Object.freeze(Mt(Ue({},Xi),{valid:!1,customError:!0}));var cr=w`
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
`,dr={name:"default",resolver:e=>gs(`assets/icons/${e}.svg`)},ur=dr,$o={caret:`
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
  `},hr={name:"system",resolver:e=>e in $o?`data:image/svg+xml,${encodeURIComponent($o[e])}`:""},pr=hr,mr=[ur,pr],zi=[];function fr(e){zi.push(e)}function gr(e){zi=zi.filter(t=>t!==e)}function Co(e){return mr.find(t=>t.name===e)}var br=w`
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
`;function L(e,t){const i=Ue({waitUntilFirstUpdate:!1},t);return(o,s)=>{const{update:r}=o,a=Array.isArray(e)?e:[e];o.update=function(c){a.forEach(u=>{const h=u;if(c.has(h)){const p=c.get(h),m=this[h];p!==m&&(!i.waitUntilFirstUpdate||this.hasUpdated)&&this[s](p,m)}}),r.call(this,c)}}}const vr=(e,t)=>e?._$litType$!==void 0,Qo=e=>e.strings===void 0,yr={},wr=(e,t=yr)=>e._$AH=t;var Ct=Symbol(),Vt=Symbol(),vi,yi=new Map,q=class extends U{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var i;let o;if(t?.spriteSheet)return this.svg=d`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,this.svg;try{if(o=await fetch(e,{mode:"cors"}),!o.ok)return o.status===410?Ct:Vt}catch{return Vt}try{const s=document.createElement("div");s.innerHTML=await o.text();const r=s.firstElementChild;if(((i=r?.tagName)==null?void 0:i.toLowerCase())!=="svg")return Ct;vi||(vi=new DOMParser);const c=vi.parseFromString(r.outerHTML,"text/html").body.querySelector("svg");return c?(c.part.add("svg"),document.adoptNode(c)):Ct}catch{return Ct}}connectedCallback(){super.connectedCallback(),fr(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),gr(this)}getIconSource(){const e=Co(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:i}=this.getIconSource(),o=i?Co(this.library):void 0;if(!t){this.svg=null;return}let s=yi.get(t);if(s||(s=this.resolveIcon(t,o),yi.set(t,s)),!this.initialRender)return;const r=await s;if(r===Vt&&yi.delete(t),t===this.getIconSource().url){if(vr(r)){if(this.svg=r,o){await this.updateComplete;const a=this.shadowRoot.querySelector("[part='svg']");typeof o.mutator=="function"&&a&&o.mutator(a)}return}switch(r){case Vt:case Ct:this.svg=null,this.emit("sl-error");break;default:this.svg=r.cloneNode(!0),(e=o?.mutator)==null||e.call(o,this.svg),this.emit("sl-load")}}}render(){return this.svg}};q.styles=[B,br];n([g()],q.prototype,"svg",2);n([l({reflect:!0})],q.prototype,"name",2);n([l()],q.prototype,"src",2);n([l()],q.prototype,"label",2);n([l({reflect:!0})],q.prototype,"library",2);n([L("label")],q.prototype,"handleLabelChange",1);n([L(["name","src","library"])],q.prototype,"setIcon",1);const Zo=Symbol.for(""),xr=e=>{if(e?.r===Zo)return e?._$litStatic$},Qt=(e,...t)=>({_$litStatic$:t.reduce(((i,o,s)=>i+(r=>{if(r._$litStatic$!==void 0)return r._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${r}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+e[s+1]),e[0]),r:Zo}),To=new Map,_r=e=>(t,...i)=>{const o=i.length;let s,r;const a=[],c=[];let u,h=0,p=!1;for(;h<o;){for(u=t[h];h<o&&(r=i[h],(s=xr(r))!==void 0);)u+=s+t[++h],p=!0;h!==o&&c.push(r),a.push(u),h++}if(h===o&&a.push(t[o]),p){const m=a.join("$$lit$$");(t=To.get(m))===void 0&&(a.raw=a,To.set(m,t=a)),i=c}return e(t,...i)},Jt=_r(d);const x=e=>e??D;var E=class extends U{constructor(){super(...arguments),this.formControlController=new Lt(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new Ge(this,"[default]","prefix","suffix"),this.localize=new fe(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Xi}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?Qt`a`:Qt`button`;return Jt`
      <${t}
        part="base"
        class=${R({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${x(e?void 0:this.disabled)}
        type=${x(e?void 0:this.type)}
        title=${this.title}
        name=${x(e?void 0:this.name)}
        value=${x(e?void 0:this.value)}
        href=${x(e&&!this.disabled?this.href:void 0)}
        target=${x(e?this.target:void 0)}
        download=${x(e?this.download:void 0)}
        rel=${x(e?this.rel:void 0)}
        role=${x(e?void 0:"button")}
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
        ${this.caret?Jt` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Jt`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};E.styles=[B,cr];E.dependencies={"sl-icon":q,"sl-spinner":Gi};n([M(".button")],E.prototype,"button",2);n([g()],E.prototype,"hasFocus",2);n([g()],E.prototype,"invalid",2);n([l()],E.prototype,"title",2);n([l({reflect:!0})],E.prototype,"variant",2);n([l({reflect:!0})],E.prototype,"size",2);n([l({type:Boolean,reflect:!0})],E.prototype,"caret",2);n([l({type:Boolean,reflect:!0})],E.prototype,"disabled",2);n([l({type:Boolean,reflect:!0})],E.prototype,"loading",2);n([l({type:Boolean,reflect:!0})],E.prototype,"outline",2);n([l({type:Boolean,reflect:!0})],E.prototype,"pill",2);n([l({type:Boolean,reflect:!0})],E.prototype,"circle",2);n([l()],E.prototype,"type",2);n([l()],E.prototype,"name",2);n([l()],E.prototype,"value",2);n([l()],E.prototype,"href",2);n([l()],E.prototype,"target",2);n([l()],E.prototype,"rel",2);n([l()],E.prototype,"download",2);n([l()],E.prototype,"form",2);n([l({attribute:"formaction"})],E.prototype,"formAction",2);n([l({attribute:"formenctype"})],E.prototype,"formEnctype",2);n([l({attribute:"formmethod"})],E.prototype,"formMethod",2);n([l({attribute:"formnovalidate",type:Boolean})],E.prototype,"formNoValidate",2);n([l({attribute:"formtarget"})],E.prototype,"formTarget",2);n([L("disabled",{waitUntilFirstUpdate:!0})],E.prototype,"handleDisabledChange",1);E.define("sl-button");q.define("sl-icon");const Re=w`
  @media(min-width: 1000px) {
    sl-card {
      max-width: 70vw;
    }
  }

  main {
    margin-top: 34px;
    padding: 12px;
  }
`;var kr=Object.getOwnPropertyDescriptor,$r=(e,t,i,o)=>{for(var s=o>1?void 0:o?kr(t,i):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(s=a(s)||s);return s};let Ei=class extends z{render(){return d`
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
    `}};Ei.styles=[Re,w`
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
    `];Ei=$r([O("app-services")],Ei);var Cr=w`
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
`,di=(e="value")=>(t,i)=>{const o=t.constructor,s=o.prototype.attributeChangedCallback;o.prototype.attributeChangedCallback=function(r,a,c){var u;const h=o.getPropertyOptions(e),p=typeof h.attribute=="string"?h.attribute:e;if(r===p){const m=h.converter||nt,b=(typeof m=="function"?m:(u=m?.fromAttribute)!=null?u:nt.fromAttribute)(c,h.type);this[e]!==b&&(this[i]=b)}s.call(this,r,a,c)}},ui=w`
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
`;const Qi=li(class extends ci{constructor(e){if(super(e),e.type!==we.PROPERTY&&e.type!==we.ATTRIBUTE&&e.type!==we.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Qo(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===Z||t===D)return t;const i=e.element,o=e.name;if(e.type===we.PROPERTY){if(t===i[o])return Z}else if(e.type===we.BOOLEAN_ATTRIBUTE){if(!!t===i.hasAttribute(o))return Z}else if(e.type===we.ATTRIBUTE&&i.getAttribute(o)===t+"")return Z;return wr(e),t}});var k=class extends U{constructor(){super(...arguments),this.formControlController=new Lt(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Ge(this,"help-text","label"),this.localize=new fe(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var e;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((e=this.input)==null?void 0:e.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){var e;return this.__numberInput.value=this.value,((e=this.input)==null?void 0:e.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(e){e.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleKeyDown(e){const t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!t&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,i="none"){this.input.setSelectionRange(e,t,i)}setRangeText(e,t,i,o="preserve"){const s=t??this.input.selectionStart,r=i??this.input.selectionEnd;this.input.setRangeText(e,s,r,o),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),i=this.label?!0:!!e,o=this.helpText?!0:!!t,r=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return d`
      <div
        part="form-control"
        class=${R({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":o})}
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
            class=${R({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
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
              name=${x(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${x(this.placeholder)}
              minlength=${x(this.minlength)}
              maxlength=${x(this.maxlength)}
              min=${x(this.min)}
              max=${x(this.max)}
              step=${x(this.step)}
              .value=${Qi(this.value)}
              autocapitalize=${x(this.autocapitalize)}
              autocomplete=${x(this.autocomplete)}
              autocorrect=${x(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${x(this.pattern)}
              enterkeyhint=${x(this.enterkeyhint)}
              inputmode=${x(this.inputmode)}
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
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};k.styles=[B,ui,Cr];k.dependencies={"sl-icon":q};n([M(".input__control")],k.prototype,"input",2);n([g()],k.prototype,"hasFocus",2);n([l()],k.prototype,"title",2);n([l({reflect:!0})],k.prototype,"type",2);n([l()],k.prototype,"name",2);n([l()],k.prototype,"value",2);n([di()],k.prototype,"defaultValue",2);n([l({reflect:!0})],k.prototype,"size",2);n([l({type:Boolean,reflect:!0})],k.prototype,"filled",2);n([l({type:Boolean,reflect:!0})],k.prototype,"pill",2);n([l()],k.prototype,"label",2);n([l({attribute:"help-text"})],k.prototype,"helpText",2);n([l({type:Boolean})],k.prototype,"clearable",2);n([l({type:Boolean,reflect:!0})],k.prototype,"disabled",2);n([l()],k.prototype,"placeholder",2);n([l({type:Boolean,reflect:!0})],k.prototype,"readonly",2);n([l({attribute:"password-toggle",type:Boolean})],k.prototype,"passwordToggle",2);n([l({attribute:"password-visible",type:Boolean})],k.prototype,"passwordVisible",2);n([l({attribute:"no-spin-buttons",type:Boolean})],k.prototype,"noSpinButtons",2);n([l({reflect:!0})],k.prototype,"form",2);n([l({type:Boolean,reflect:!0})],k.prototype,"required",2);n([l()],k.prototype,"pattern",2);n([l({type:Number})],k.prototype,"minlength",2);n([l({type:Number})],k.prototype,"maxlength",2);n([l()],k.prototype,"min",2);n([l()],k.prototype,"max",2);n([l()],k.prototype,"step",2);n([l()],k.prototype,"autocapitalize",2);n([l()],k.prototype,"autocorrect",2);n([l()],k.prototype,"autocomplete",2);n([l({type:Boolean})],k.prototype,"autofocus",2);n([l()],k.prototype,"enterkeyhint",2);n([l({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],k.prototype,"spellcheck",2);n([l()],k.prototype,"inputmode",2);n([L("disabled",{waitUntilFirstUpdate:!0})],k.prototype,"handleDisabledChange",1);n([L("step",{waitUntilFirstUpdate:!0})],k.prototype,"handleStepChange",1);n([L("value",{waitUntilFirstUpdate:!0})],k.prototype,"handleValueChange",1);k.define("sl-input");var Tr=w`
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
`,S=class extends U{constructor(){super(...arguments),this.formControlController=new Lt(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Ge(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){var e;super.disconnectedCallback(),this.input&&((e=this.resizeObserver)==null||e.unobserve(this.input))}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}setTextareaHeight(){this.resize==="auto"?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=void 0}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top=="number"&&(this.input.scrollTop=e.top),typeof e.left=="number"&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,i="none"){this.input.setSelectionRange(e,t,i)}setRangeText(e,t,i,o="preserve"){const s=t??this.input.selectionStart,r=i??this.input.selectionEnd;this.input.setRangeText(e,s,r,o),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),i=this.label?!0:!!e,o=this.helpText?!0:!!t;return d`
      <div
        part="form-control"
        class=${R({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":o})}
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
            class=${R({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${x(this.name)}
              .value=${Qi(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${x(this.placeholder)}
              rows=${x(this.rows)}
              minlength=${x(this.minlength)}
              maxlength=${x(this.maxlength)}
              autocapitalize=${x(this.autocapitalize)}
              autocorrect=${x(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${x(this.spellcheck)}
              enterkeyhint=${x(this.enterkeyhint)}
              inputmode=${x(this.inputmode)}
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
    `}};S.styles=[B,ui,Tr];n([M(".textarea__control")],S.prototype,"input",2);n([M(".textarea__size-adjuster")],S.prototype,"sizeAdjuster",2);n([g()],S.prototype,"hasFocus",2);n([l()],S.prototype,"title",2);n([l()],S.prototype,"name",2);n([l()],S.prototype,"value",2);n([l({reflect:!0})],S.prototype,"size",2);n([l({type:Boolean,reflect:!0})],S.prototype,"filled",2);n([l()],S.prototype,"label",2);n([l({attribute:"help-text"})],S.prototype,"helpText",2);n([l()],S.prototype,"placeholder",2);n([l({type:Number})],S.prototype,"rows",2);n([l()],S.prototype,"resize",2);n([l({type:Boolean,reflect:!0})],S.prototype,"disabled",2);n([l({type:Boolean,reflect:!0})],S.prototype,"readonly",2);n([l({reflect:!0})],S.prototype,"form",2);n([l({type:Boolean,reflect:!0})],S.prototype,"required",2);n([l({type:Number})],S.prototype,"minlength",2);n([l({type:Number})],S.prototype,"maxlength",2);n([l()],S.prototype,"autocapitalize",2);n([l()],S.prototype,"autocorrect",2);n([l()],S.prototype,"autocomplete",2);n([l({type:Boolean})],S.prototype,"autofocus",2);n([l()],S.prototype,"enterkeyhint",2);n([l({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],S.prototype,"spellcheck",2);n([l()],S.prototype,"inputmode",2);n([di()],S.prototype,"defaultValue",2);n([L("disabled",{waitUntilFirstUpdate:!0})],S.prototype,"handleDisabledChange",1);n([L("rows",{waitUntilFirstUpdate:!0})],S.prototype,"handleRowsChange",1);n([L("value",{waitUntilFirstUpdate:!0})],S.prototype,"handleValueChange",1);S.define("sl-textarea");var Sr=w`
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
`,So=new WeakMap;function es(e){let t=So.get(e);return t||(t=window.getComputedStyle(e,null),So.set(e,t)),t}function Ar(e){if(typeof e.checkVisibility=="function")return e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const t=es(e);return t.visibility!=="hidden"&&t.display!=="none"}function zr(e){const t=es(e),{overflowY:i,overflowX:o}=t;return i==="scroll"||o==="scroll"?!0:i!=="auto"||o!=="auto"?!1:e.scrollHeight>e.clientHeight&&i==="auto"||e.scrollWidth>e.clientWidth&&o==="auto"}function Er(e){const t=e.tagName.toLowerCase(),i=Number(e.getAttribute("tabindex"));return e.hasAttribute("tabindex")&&(isNaN(i)||i<=-1)||e.hasAttribute("disabled")||e.closest("[inert]")||t==="input"&&e.getAttribute("type")==="radio"&&!e.hasAttribute("checked")||!Ar(e)?!1:(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(t)?!0:zr(e)}function Pr(e){var t,i;const o=Or(e),s=(t=o[0])!=null?t:null,r=(i=o[o.length-1])!=null?i:null;return{start:s,end:r}}function Ir(e,t){var i;return((i=e.getRootNode({composed:!0}))==null?void 0:i.host)!==t}function Or(e){const t=new WeakMap,i=[];function o(s){if(s instanceof Element){if(s.hasAttribute("inert")||s.closest("[inert]")||t.has(s))return;t.set(s,!0),!i.includes(s)&&Er(s)&&i.push(s),s instanceof HTMLSlotElement&&Ir(s,e)&&s.assignedElements({flatten:!0}).forEach(r=>{o(r)}),s.shadowRoot!==null&&s.shadowRoot.mode==="open"&&o(s.shadowRoot)}for(const r of s.children)o(r)}return o(e),i.sort((s,r)=>{const a=Number(s.getAttribute("tabindex"))||0;return(Number(r.getAttribute("tabindex"))||0)-a})}var Dr=w`
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
`;const Oe=Math.min,Y=Math.max,Zt=Math.round,jt=Math.floor,he=e=>({x:e,y:e}),Mr={left:"right",right:"left",bottom:"top",top:"bottom"},Nr={start:"end",end:"start"};function Pi(e,t,i){return Y(e,Oe(t,i))}function ft(e,t){return typeof e=="function"?e(t):e}function De(e){return e.split("-")[0]}function gt(e){return e.split("-")[1]}function ts(e){return e==="x"?"y":"x"}function Zi(e){return e==="y"?"height":"width"}function Ke(e){return["top","bottom"].includes(De(e))?"y":"x"}function eo(e){return ts(Ke(e))}function Lr(e,t,i){i===void 0&&(i=!1);const o=gt(e),s=eo(e),r=Zi(s);let a=s==="x"?o===(i?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[r]>t.floating[r]&&(a=ei(a)),[a,ei(a)]}function Ur(e){const t=ei(e);return[Ii(e),t,Ii(t)]}function Ii(e){return e.replace(/start|end/g,t=>Nr[t])}function Rr(e,t,i){const o=["left","right"],s=["right","left"],r=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return i?t?s:o:t?o:s;case"left":case"right":return t?r:a;default:return[]}}function Fr(e,t,i,o){const s=gt(e);let r=Rr(De(e),i==="start",o);return s&&(r=r.map(a=>a+"-"+s),t&&(r=r.concat(r.map(Ii)))),r}function ei(e){return e.replace(/left|right|bottom|top/g,t=>Mr[t])}function Br(e){return{top:0,right:0,bottom:0,left:0,...e}}function is(e){return typeof e!="number"?Br(e):{top:e,right:e,bottom:e,left:e}}function ti(e){const{x:t,y:i,width:o,height:s}=e;return{width:o,height:s,top:i,left:t,right:t+o,bottom:i+s,x:t,y:i}}function Ao(e,t,i){let{reference:o,floating:s}=e;const r=Ke(t),a=eo(t),c=Zi(a),u=De(t),h=r==="y",p=o.x+o.width/2-s.width/2,m=o.y+o.height/2-s.height/2,v=o[c]/2-s[c]/2;let b;switch(u){case"top":b={x:p,y:o.y-s.height};break;case"bottom":b={x:p,y:o.y+o.height};break;case"right":b={x:o.x+o.width,y:m};break;case"left":b={x:o.x-s.width,y:m};break;default:b={x:o.x,y:o.y}}switch(gt(t)){case"start":b[a]-=v*(i&&h?-1:1);break;case"end":b[a]+=v*(i&&h?-1:1);break}return b}const qr=async(e,t,i)=>{const{placement:o="bottom",strategy:s="absolute",middleware:r=[],platform:a}=i,c=r.filter(Boolean),u=await(a.isRTL==null?void 0:a.isRTL(t));let h=await a.getElementRects({reference:e,floating:t,strategy:s}),{x:p,y:m}=Ao(h,o,u),v=o,b={},y=0;for(let _=0;_<c.length;_++){const{name:T,fn:$}=c[_],{x:A,y:I,data:F,reset:N}=await $({x:p,y:m,initialPlacement:o,placement:v,strategy:s,middlewareData:b,rects:h,platform:a,elements:{reference:e,floating:t}});p=A??p,m=I??m,b={...b,[T]:{...b[T],...F}},N&&y<=50&&(y++,typeof N=="object"&&(N.placement&&(v=N.placement),N.rects&&(h=N.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:s}):N.rects),{x:p,y:m}=Ao(h,v,u)),_=-1)}return{x:p,y:m,placement:v,strategy:s,middlewareData:b}};async function to(e,t){var i;t===void 0&&(t={});const{x:o,y:s,platform:r,rects:a,elements:c,strategy:u}=e,{boundary:h="clippingAncestors",rootBoundary:p="viewport",elementContext:m="floating",altBoundary:v=!1,padding:b=0}=ft(t,e),y=is(b),T=c[v?m==="floating"?"reference":"floating":m],$=ti(await r.getClippingRect({element:(i=await(r.isElement==null?void 0:r.isElement(T)))==null||i?T:T.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(c.floating)),boundary:h,rootBoundary:p,strategy:u})),A=m==="floating"?{x:o,y:s,width:a.floating.width,height:a.floating.height}:a.reference,I=await(r.getOffsetParent==null?void 0:r.getOffsetParent(c.floating)),F=await(r.isElement==null?void 0:r.isElement(I))?await(r.getScale==null?void 0:r.getScale(I))||{x:1,y:1}:{x:1,y:1},N=ti(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:A,offsetParent:I,strategy:u}):A);return{top:($.top-N.top+y.top)/F.y,bottom:(N.bottom-$.bottom+y.bottom)/F.y,left:($.left-N.left+y.left)/F.x,right:(N.right-$.right+y.right)/F.x}}const Vr=e=>({name:"arrow",options:e,async fn(t){const{x:i,y:o,placement:s,rects:r,platform:a,elements:c,middlewareData:u}=t,{element:h,padding:p=0}=ft(e,t)||{};if(h==null)return{};const m=is(p),v={x:i,y:o},b=eo(s),y=Zi(b),_=await a.getDimensions(h),T=b==="y",$=T?"top":"left",A=T?"bottom":"right",I=T?"clientHeight":"clientWidth",F=r.reference[y]+r.reference[b]-v[b]-r.floating[y],N=v[b]-r.reference[b],X=await(a.getOffsetParent==null?void 0:a.getOffsetParent(h));let ie=X?X[I]:0;(!ie||!await(a.isElement==null?void 0:a.isElement(X)))&&(ie=c.floating[I]||r.floating[y]);const ve=F/2-N/2,ne=ie/2-_[y]/2-1,oe=Oe(m[$],ne),Te=Oe(m[A],ne),le=oe,Se=ie-_[y]-Te,H=ie/2-_[y]/2+ve,ot=Pi(le,H,Se),ye=!u.arrow&&gt(s)!=null&&H!==ot&&r.reference[y]/2-(H<le?oe:Te)-_[y]/2<0,ce=ye?H<le?H-le:H-Se:0;return{[b]:v[b]+ce,data:{[b]:ot,centerOffset:H-ot-ce,...ye&&{alignmentOffset:ce}},reset:ye}}}),jr=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var i,o;const{placement:s,middlewareData:r,rects:a,initialPlacement:c,platform:u,elements:h}=t,{mainAxis:p=!0,crossAxis:m=!0,fallbackPlacements:v,fallbackStrategy:b="bestFit",fallbackAxisSideDirection:y="none",flipAlignment:_=!0,...T}=ft(e,t);if((i=r.arrow)!=null&&i.alignmentOffset)return{};const $=De(s),A=Ke(c),I=De(c)===c,F=await(u.isRTL==null?void 0:u.isRTL(h.floating)),N=v||(I||!_?[ei(c)]:Ur(c)),X=y!=="none";!v&&X&&N.push(...Fr(c,_,y,F));const ie=[c,...N],ve=await to(t,T),ne=[];let oe=((o=r.flip)==null?void 0:o.overflows)||[];if(p&&ne.push(ve[$]),m){const H=Lr(s,a,F);ne.push(ve[H[0]],ve[H[1]])}if(oe=[...oe,{placement:s,overflows:ne}],!ne.every(H=>H<=0)){var Te,le;const H=(((Te=r.flip)==null?void 0:Te.index)||0)+1,ot=ie[H];if(ot)return{data:{index:H,overflows:oe},reset:{placement:ot}};let ye=(le=oe.filter(ce=>ce.overflows[0]<=0).sort((ce,Ae)=>ce.overflows[1]-Ae.overflows[1])[0])==null?void 0:le.placement;if(!ye)switch(b){case"bestFit":{var Se;const ce=(Se=oe.filter(Ae=>{if(X){const ze=Ke(Ae.placement);return ze===A||ze==="y"}return!0}).map(Ae=>[Ae.placement,Ae.overflows.filter(ze=>ze>0).reduce((ze,fs)=>ze+fs,0)]).sort((Ae,ze)=>Ae[1]-ze[1])[0])==null?void 0:Se[0];ce&&(ye=ce);break}case"initialPlacement":ye=c;break}if(s!==ye)return{reset:{placement:ye}}}return{}}}};async function Hr(e,t){const{placement:i,platform:o,elements:s}=e,r=await(o.isRTL==null?void 0:o.isRTL(s.floating)),a=De(i),c=gt(i),u=Ke(i)==="y",h=["left","top"].includes(a)?-1:1,p=r&&u?-1:1,m=ft(t,e);let{mainAxis:v,crossAxis:b,alignmentAxis:y}=typeof m=="number"?{mainAxis:m,crossAxis:0,alignmentAxis:null}:{mainAxis:m.mainAxis||0,crossAxis:m.crossAxis||0,alignmentAxis:m.alignmentAxis};return c&&typeof y=="number"&&(b=c==="end"?y*-1:y),u?{x:b*p,y:v*h}:{x:v*h,y:b*p}}const Kr=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var i,o;const{x:s,y:r,placement:a,middlewareData:c}=t,u=await Hr(t,e);return a===((i=c.offset)==null?void 0:i.placement)&&(o=c.arrow)!=null&&o.alignmentOffset?{}:{x:s+u.x,y:r+u.y,data:{...u,placement:a}}}}},Wr=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:i,y:o,placement:s}=t,{mainAxis:r=!0,crossAxis:a=!1,limiter:c={fn:T=>{let{x:$,y:A}=T;return{x:$,y:A}}},...u}=ft(e,t),h={x:i,y:o},p=await to(t,u),m=Ke(De(s)),v=ts(m);let b=h[v],y=h[m];if(r){const T=v==="y"?"top":"left",$=v==="y"?"bottom":"right",A=b+p[T],I=b-p[$];b=Pi(A,b,I)}if(a){const T=m==="y"?"top":"left",$=m==="y"?"bottom":"right",A=y+p[T],I=y-p[$];y=Pi(A,y,I)}const _=c.fn({...t,[v]:b,[m]:y});return{..._,data:{x:_.x-i,y:_.y-o,enabled:{[v]:r,[m]:a}}}}}},Yr=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var i,o;const{placement:s,rects:r,platform:a,elements:c}=t,{apply:u=()=>{},...h}=ft(e,t),p=await to(t,h),m=De(s),v=gt(s),b=Ke(s)==="y",{width:y,height:_}=r.floating;let T,$;m==="top"||m==="bottom"?(T=m,$=v===(await(a.isRTL==null?void 0:a.isRTL(c.floating))?"start":"end")?"left":"right"):($=m,T=v==="end"?"top":"bottom");const A=_-p.top-p.bottom,I=y-p.left-p.right,F=Oe(_-p[T],A),N=Oe(y-p[$],I),X=!t.middlewareData.shift;let ie=F,ve=N;if((i=t.middlewareData.shift)!=null&&i.enabled.x&&(ve=I),(o=t.middlewareData.shift)!=null&&o.enabled.y&&(ie=A),X&&!v){const oe=Y(p.left,0),Te=Y(p.right,0),le=Y(p.top,0),Se=Y(p.bottom,0);b?ve=y-2*(oe!==0||Te!==0?oe+Te:Y(p.left,p.right)):ie=_-2*(le!==0||Se!==0?le+Se:Y(p.top,p.bottom))}await u({...t,availableWidth:ve,availableHeight:ie});const ne=await a.getDimensions(c.floating);return y!==ne.width||_!==ne.height?{reset:{rects:!0}}:{}}}};function hi(){return typeof window<"u"}function bt(e){return os(e)?(e.nodeName||"").toLowerCase():"#document"}function J(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function ge(e){var t;return(t=(os(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function os(e){return hi()?e instanceof Node||e instanceof J(e).Node:!1}function se(e){return hi()?e instanceof Element||e instanceof J(e).Element:!1}function pe(e){return hi()?e instanceof HTMLElement||e instanceof J(e).HTMLElement:!1}function zo(e){return!hi()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof J(e).ShadowRoot}function Ut(e){const{overflow:t,overflowX:i,overflowY:o,display:s}=re(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+i)&&!["inline","contents"].includes(s)}function Jr(e){return["table","td","th"].includes(bt(e))}function pi(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function io(e){const t=oo(),i=se(e)?re(e):e;return i.transform!=="none"||i.perspective!=="none"||(i.containerType?i.containerType!=="normal":!1)||!t&&(i.backdropFilter?i.backdropFilter!=="none":!1)||!t&&(i.filter?i.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(i.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(i.contain||"").includes(o))}function Gr(e){let t=Me(e);for(;pe(t)&&!ct(t);){if(io(t))return t;if(pi(t))return null;t=Me(t)}return null}function oo(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ct(e){return["html","body","#document"].includes(bt(e))}function re(e){return J(e).getComputedStyle(e)}function mi(e){return se(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Me(e){if(bt(e)==="html")return e;const t=e.assignedSlot||e.parentNode||zo(e)&&e.host||ge(e);return zo(t)?t.host:t}function ss(e){const t=Me(e);return ct(t)?e.ownerDocument?e.ownerDocument.body:e.body:pe(t)&&Ut(t)?t:ss(t)}function It(e,t,i){var o;t===void 0&&(t=[]),i===void 0&&(i=!0);const s=ss(e),r=s===((o=e.ownerDocument)==null?void 0:o.body),a=J(s);if(r){const c=Oi(a);return t.concat(a,a.visualViewport||[],Ut(s)?s:[],c&&i?It(c):[])}return t.concat(s,It(s,[],i))}function Oi(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function rs(e){const t=re(e);let i=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const s=pe(e),r=s?e.offsetWidth:i,a=s?e.offsetHeight:o,c=Zt(i)!==r||Zt(o)!==a;return c&&(i=r,o=a),{width:i,height:o,$:c}}function so(e){return se(e)?e:e.contextElement}function at(e){const t=so(e);if(!pe(t))return he(1);const i=t.getBoundingClientRect(),{width:o,height:s,$:r}=rs(t);let a=(r?Zt(i.width):i.width)/o,c=(r?Zt(i.height):i.height)/s;return(!a||!Number.isFinite(a))&&(a=1),(!c||!Number.isFinite(c))&&(c=1),{x:a,y:c}}const Xr=he(0);function as(e){const t=J(e);return!oo()||!t.visualViewport?Xr:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Qr(e,t,i){return t===void 0&&(t=!1),!i||t&&i!==J(e)?!1:t}function We(e,t,i,o){t===void 0&&(t=!1),i===void 0&&(i=!1);const s=e.getBoundingClientRect(),r=so(e);let a=he(1);t&&(o?se(o)&&(a=at(o)):a=at(e));const c=Qr(r,i,o)?as(r):he(0);let u=(s.left+c.x)/a.x,h=(s.top+c.y)/a.y,p=s.width/a.x,m=s.height/a.y;if(r){const v=J(r),b=o&&se(o)?J(o):o;let y=v,_=Oi(y);for(;_&&o&&b!==y;){const T=at(_),$=_.getBoundingClientRect(),A=re(_),I=$.left+(_.clientLeft+parseFloat(A.paddingLeft))*T.x,F=$.top+(_.clientTop+parseFloat(A.paddingTop))*T.y;u*=T.x,h*=T.y,p*=T.x,m*=T.y,u+=I,h+=F,y=J(_),_=Oi(y)}}return ti({width:p,height:m,x:u,y:h})}function ro(e,t){const i=mi(e).scrollLeft;return t?t.left+i:We(ge(e)).left+i}function ns(e,t,i){i===void 0&&(i=!1);const o=e.getBoundingClientRect(),s=o.left+t.scrollLeft-(i?0:ro(e,o)),r=o.top+t.scrollTop;return{x:s,y:r}}function Zr(e){let{elements:t,rect:i,offsetParent:o,strategy:s}=e;const r=s==="fixed",a=ge(o),c=t?pi(t.floating):!1;if(o===a||c&&r)return i;let u={scrollLeft:0,scrollTop:0},h=he(1);const p=he(0),m=pe(o);if((m||!m&&!r)&&((bt(o)!=="body"||Ut(a))&&(u=mi(o)),pe(o))){const b=We(o);h=at(o),p.x=b.x+o.clientLeft,p.y=b.y+o.clientTop}const v=a&&!m&&!r?ns(a,u,!0):he(0);return{width:i.width*h.x,height:i.height*h.y,x:i.x*h.x-u.scrollLeft*h.x+p.x+v.x,y:i.y*h.y-u.scrollTop*h.y+p.y+v.y}}function ea(e){return Array.from(e.getClientRects())}function ta(e){const t=ge(e),i=mi(e),o=e.ownerDocument.body,s=Y(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),r=Y(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let a=-i.scrollLeft+ro(e);const c=-i.scrollTop;return re(o).direction==="rtl"&&(a+=Y(t.clientWidth,o.clientWidth)-s),{width:s,height:r,x:a,y:c}}function ia(e,t){const i=J(e),o=ge(e),s=i.visualViewport;let r=o.clientWidth,a=o.clientHeight,c=0,u=0;if(s){r=s.width,a=s.height;const h=oo();(!h||h&&t==="fixed")&&(c=s.offsetLeft,u=s.offsetTop)}return{width:r,height:a,x:c,y:u}}function oa(e,t){const i=We(e,!0,t==="fixed"),o=i.top+e.clientTop,s=i.left+e.clientLeft,r=pe(e)?at(e):he(1),a=e.clientWidth*r.x,c=e.clientHeight*r.y,u=s*r.x,h=o*r.y;return{width:a,height:c,x:u,y:h}}function Eo(e,t,i){let o;if(t==="viewport")o=ia(e,i);else if(t==="document")o=ta(ge(e));else if(se(t))o=oa(t,i);else{const s=as(e);o={x:t.x-s.x,y:t.y-s.y,width:t.width,height:t.height}}return ti(o)}function ls(e,t){const i=Me(e);return i===t||!se(i)||ct(i)?!1:re(i).position==="fixed"||ls(i,t)}function sa(e,t){const i=t.get(e);if(i)return i;let o=It(e,[],!1).filter(c=>se(c)&&bt(c)!=="body"),s=null;const r=re(e).position==="fixed";let a=r?Me(e):e;for(;se(a)&&!ct(a);){const c=re(a),u=io(a);!u&&c.position==="fixed"&&(s=null),(r?!u&&!s:!u&&c.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||Ut(a)&&!u&&ls(e,a))?o=o.filter(p=>p!==a):s=c,a=Me(a)}return t.set(e,o),o}function ra(e){let{element:t,boundary:i,rootBoundary:o,strategy:s}=e;const a=[...i==="clippingAncestors"?pi(t)?[]:sa(t,this._c):[].concat(i),o],c=a[0],u=a.reduce((h,p)=>{const m=Eo(t,p,s);return h.top=Y(m.top,h.top),h.right=Oe(m.right,h.right),h.bottom=Oe(m.bottom,h.bottom),h.left=Y(m.left,h.left),h},Eo(t,c,s));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function aa(e){const{width:t,height:i}=rs(e);return{width:t,height:i}}function na(e,t,i){const o=pe(t),s=ge(t),r=i==="fixed",a=We(e,!0,r,t);let c={scrollLeft:0,scrollTop:0};const u=he(0);if(o||!o&&!r)if((bt(t)!=="body"||Ut(s))&&(c=mi(t)),o){const v=We(t,!0,r,t);u.x=v.x+t.clientLeft,u.y=v.y+t.clientTop}else s&&(u.x=ro(s));const h=s&&!o&&!r?ns(s,c):he(0),p=a.left+c.scrollLeft-u.x-h.x,m=a.top+c.scrollTop-u.y-h.y;return{x:p,y:m,width:a.width,height:a.height}}function wi(e){return re(e).position==="static"}function Po(e,t){if(!pe(e)||re(e).position==="fixed")return null;if(t)return t(e);let i=e.offsetParent;return ge(e)===i&&(i=i.ownerDocument.body),i}function cs(e,t){const i=J(e);if(pi(e))return i;if(!pe(e)){let s=Me(e);for(;s&&!ct(s);){if(se(s)&&!wi(s))return s;s=Me(s)}return i}let o=Po(e,t);for(;o&&Jr(o)&&wi(o);)o=Po(o,t);return o&&ct(o)&&wi(o)&&!io(o)?i:o||Gr(e)||i}const la=async function(e){const t=this.getOffsetParent||cs,i=this.getDimensions,o=await i(e.floating);return{reference:na(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function ca(e){return re(e).direction==="rtl"}const Gt={convertOffsetParentRelativeRectToViewportRelativeRect:Zr,getDocumentElement:ge,getClippingRect:ra,getOffsetParent:cs,getElementRects:la,getClientRects:ea,getDimensions:aa,getScale:at,isElement:se,isRTL:ca};function da(e,t){let i=null,o;const s=ge(e);function r(){var c;clearTimeout(o),(c=i)==null||c.disconnect(),i=null}function a(c,u){c===void 0&&(c=!1),u===void 0&&(u=1),r();const{left:h,top:p,width:m,height:v}=e.getBoundingClientRect();if(c||t(),!m||!v)return;const b=jt(p),y=jt(s.clientWidth-(h+m)),_=jt(s.clientHeight-(p+v)),T=jt(h),A={rootMargin:-b+"px "+-y+"px "+-_+"px "+-T+"px",threshold:Y(0,Oe(1,u))||1};let I=!0;function F(N){const X=N[0].intersectionRatio;if(X!==u){if(!I)return a();X?a(!1,X):o=setTimeout(()=>{a(!1,1e-7)},1e3)}I=!1}try{i=new IntersectionObserver(F,{...A,root:s.ownerDocument})}catch{i=new IntersectionObserver(F,A)}i.observe(e)}return a(!0),r}function ua(e,t,i,o){o===void 0&&(o={});const{ancestorScroll:s=!0,ancestorResize:r=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:u=!1}=o,h=so(e),p=s||r?[...h?It(h):[],...It(t)]:[];p.forEach($=>{s&&$.addEventListener("scroll",i,{passive:!0}),r&&$.addEventListener("resize",i)});const m=h&&c?da(h,i):null;let v=-1,b=null;a&&(b=new ResizeObserver($=>{let[A]=$;A&&A.target===h&&b&&(b.unobserve(t),cancelAnimationFrame(v),v=requestAnimationFrame(()=>{var I;(I=b)==null||I.observe(t)})),i()}),h&&!u&&b.observe(h),b.observe(t));let y,_=u?We(e):null;u&&T();function T(){const $=We(e);_&&($.x!==_.x||$.y!==_.y||$.width!==_.width||$.height!==_.height)&&i(),_=$,y=requestAnimationFrame(T)}return i(),()=>{var $;p.forEach(A=>{s&&A.removeEventListener("scroll",i),r&&A.removeEventListener("resize",i)}),m?.(),($=b)==null||$.disconnect(),b=null,u&&cancelAnimationFrame(y)}}const ha=Kr,pa=Wr,ma=jr,Io=Yr,fa=Vr,ga=(e,t,i)=>{const o=new Map,s={platform:Gt,...i},r={...s.platform,_c:o};return qr(e,t,{...s,platform:r})};function ba(e){return va(e)}function xi(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function va(e){for(let t=e;t;t=xi(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=xi(e);t;t=xi(t)){if(!(t instanceof Element))continue;const i=getComputedStyle(t);if(i.display!=="contents"&&(i.position!=="static"||i.filter!=="none"||t.tagName==="BODY"))return t}return null}function ya(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e&&("contextElement"in e?e instanceof Element:!0)}var P=class extends U{constructor(){super(...arguments),this.localize=new fe(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),i=this.placement.includes("top")||this.placement.includes("bottom");let o=0,s=0,r=0,a=0,c=0,u=0,h=0,p=0;i?e.top<t.top?(o=e.left,s=e.bottom,r=e.right,a=e.bottom,c=t.left,u=t.top,h=t.right,p=t.top):(o=t.left,s=t.bottom,r=t.right,a=t.bottom,c=e.left,u=e.top,h=e.right,p=e.top):e.left<t.left?(o=e.right,s=e.top,r=t.left,a=t.top,c=e.right,u=e.bottom,h=t.left,p=t.bottom):(o=t.right,s=t.top,r=e.left,a=e.top,c=t.right,u=t.bottom,h=e.left,p=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${s}px`),this.style.setProperty("--hover-bridge-top-right-x",`${r}px`),this.style.setProperty("--hover-bridge-top-right-y",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${u}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${h}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${p}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||ya(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&(this.cleanup=ua(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;const e=[ha({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(Io({apply:({rects:i})=>{const o=this.sync==="width"||this.sync==="both",s=this.sync==="height"||this.sync==="both";this.popup.style.width=o?`${i.reference.width}px`:"",this.popup.style.height=s?`${i.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(ma({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(pa({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(Io({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:i,availableHeight:o})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${o}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${i}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(fa({element:this.arrowEl,padding:this.arrowPadding}));const t=this.strategy==="absolute"?i=>Gt.getOffsetParent(i,ba):Gt.getOffsetParent;ga(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:Mt(Ue({},Gt),{getOffsetParent:t})}).then(({x:i,y:o,middlewareData:s,placement:r})=>{const a=this.localize.dir()==="rtl",c={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]];if(this.setAttribute("data-current-placement",r),Object.assign(this.popup.style,{left:`${i}px`,top:`${o}px`}),this.arrow){const u=s.arrow.x,h=s.arrow.y;let p="",m="",v="",b="";if(this.arrowPlacement==="start"){const y=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";p=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",m=a?y:"",b=a?"":y}else if(this.arrowPlacement==="end"){const y=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";m=a?"":y,b=a?y:"",v=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(b=typeof u=="number"?"calc(50% - var(--arrow-size-diagonal))":"",p=typeof h=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(b=typeof u=="number"?`${u}px`:"",p=typeof h=="number"?`${h}px`:"");Object.assign(this.arrowEl.style,{top:p,right:m,bottom:v,left:b,[c]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return d`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${R({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${R({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?d`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};P.styles=[B,Dr];n([M(".popup")],P.prototype,"popup",2);n([M(".popup__arrow")],P.prototype,"arrowEl",2);n([l()],P.prototype,"anchor",2);n([l({type:Boolean,reflect:!0})],P.prototype,"active",2);n([l({reflect:!0})],P.prototype,"placement",2);n([l({reflect:!0})],P.prototype,"strategy",2);n([l({type:Number})],P.prototype,"distance",2);n([l({type:Number})],P.prototype,"skidding",2);n([l({type:Boolean})],P.prototype,"arrow",2);n([l({attribute:"arrow-placement"})],P.prototype,"arrowPlacement",2);n([l({attribute:"arrow-padding",type:Number})],P.prototype,"arrowPadding",2);n([l({type:Boolean})],P.prototype,"flip",2);n([l({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],P.prototype,"flipFallbackPlacements",2);n([l({attribute:"flip-fallback-strategy"})],P.prototype,"flipFallbackStrategy",2);n([l({type:Object})],P.prototype,"flipBoundary",2);n([l({attribute:"flip-padding",type:Number})],P.prototype,"flipPadding",2);n([l({type:Boolean})],P.prototype,"shift",2);n([l({type:Object})],P.prototype,"shiftBoundary",2);n([l({attribute:"shift-padding",type:Number})],P.prototype,"shiftPadding",2);n([l({attribute:"auto-size"})],P.prototype,"autoSize",2);n([l()],P.prototype,"sync",2);n([l({type:Object})],P.prototype,"autoSizeBoundary",2);n([l({attribute:"auto-size-padding",type:Number})],P.prototype,"autoSizePadding",2);n([l({attribute:"hover-bridge",type:Boolean})],P.prototype,"hoverBridge",2);var ds=new Map,wa=new WeakMap;function xa(e){return e??{keyframes:[],options:{duration:0}}}function Oo(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function vt(e,t){ds.set(e,xa(t))}function dt(e,t,i){const o=wa.get(e);if(o?.[t])return Oo(o[t],i.dir);const s=ds.get(t);return s?Oo(s,i.dir):{keyframes:[],options:{duration:0}}}function ut(e,t){return new Promise(i=>{function o(s){s.target===e&&(e.removeEventListener(t,o),i())}e.addEventListener(t,o)})}function ht(e,t,i){return new Promise(o=>{if(i?.duration===1/0)throw new Error("Promise-based animations must be finite.");const s=e.animate(t,Mt(Ue({},i),{duration:_a()?0:i.duration}));s.addEventListener("cancel",o,{once:!0}),s.addEventListener("finish",o,{once:!0})})}function _a(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function pt(e){return Promise.all(e.getAnimations().map(t=>new Promise(i=>{t.cancel(),requestAnimationFrame(i)})))}function Do(e,t){return e.map(i=>Mt(Ue({},i),{height:i.height==="auto"?`${t}px`:i.height}))}var V=class extends U{constructor(){super(...arguments),this.localize=new fe(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{var t;if(e.key==="Escape"&&this.open&&!this.closeWatcher){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="sl-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var i,o,s;const r=((i=this.containingElement)==null?void 0:i.getRootNode())instanceof ShadowRoot?(s=(o=document.activeElement)==null?void 0:o.shadowRoot)==null?void 0:s.activeElement:document.activeElement;(!this.containingElement||r?.closest(this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{const t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];typeof e?.focus=="function"&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const i=t.getAllItems(),o=i[0],s=i[i.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),i.length>0&&this.updateComplete.then(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(t.setCurrentItem(o),o.focus()),(e.key==="ArrowUp"||e.key==="End")&&(t.setCurrentItem(s),s.focus())}))}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(o=>Pr(o).start);let i;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":i=t.button;break;default:i=t}i.setAttribute("aria-haspopup","true"),i.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,ut(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ut(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var e;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var e;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await pt(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=dt(this,"dropdown.show",{dir:this.localize.dir()});await ht(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await pt(this);const{keyframes:e,options:t}=dt(this,"dropdown.hide",{dir:this.localize.dir()});await ht(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return d`
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
        sync=${x(this.sync?this.sync:void 0)}
        class=${R({dropdown:!0,"dropdown--open":this.open})}
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
    `}};V.styles=[B,Sr];V.dependencies={"sl-popup":P};n([M(".dropdown")],V.prototype,"popup",2);n([M(".dropdown__trigger")],V.prototype,"trigger",2);n([M(".dropdown__panel")],V.prototype,"panel",2);n([l({type:Boolean,reflect:!0})],V.prototype,"open",2);n([l({reflect:!0})],V.prototype,"placement",2);n([l({type:Boolean,reflect:!0})],V.prototype,"disabled",2);n([l({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],V.prototype,"stayOpenOnSelect",2);n([l({attribute:!1})],V.prototype,"containingElement",2);n([l({type:Number})],V.prototype,"distance",2);n([l({type:Number})],V.prototype,"skidding",2);n([l({type:Boolean})],V.prototype,"hoist",2);n([l({reflect:!0})],V.prototype,"sync",2);n([L("open",{waitUntilFirstUpdate:!0})],V.prototype,"handleOpenChange",1);vt("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});vt("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});V.define("sl-dropdown");var ka=w`
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
`,ao=class extends U{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(e){const t=["menuitem","menuitemcheckbox"],i=e.composedPath(),o=i.find(c=>{var u;return t.includes(((u=c?.getAttribute)==null?void 0:u.call(c,"role"))||"")});if(!o||i.find(c=>{var u;return((u=c?.getAttribute)==null?void 0:u.call(c,"role"))==="menu"})!==this)return;const a=o;a.type==="checkbox"&&(a.checked=!a.checked),this.emit("sl-select",{detail:{item:a}})}handleKeyDown(e){if(e.key==="Enter"||e.key===" "){const t=this.getCurrentItem();e.preventDefault(),e.stopPropagation(),t?.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const t=this.getAllItems(),i=this.getCurrentItem();let o=i?t.indexOf(i):0;t.length>0&&(e.preventDefault(),e.stopPropagation(),e.key==="ArrowDown"?o++:e.key==="ArrowUp"?o--:e.key==="Home"?o=0:e.key==="End"&&(o=t.length-1),o<0&&(o=t.length-1),o>t.length-1&&(o=0),this.setCurrentItem(t[o]),t[o].focus())}}handleMouseDown(e){const t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){const e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){var t;return e.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((t=e.getAttribute("role"))!=null?t:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>!(e.inert||!this.isMenuItem(e)))}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute("tabindex")==="0")}setCurrentItem(e){this.getAllItems().forEach(i=>{i.setAttribute("tabindex",i===e?"0":"-1")})}render(){return d`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};ao.styles=[B,ka];n([M("slot")],ao.prototype,"defaultSlot",2);ao.define("sl-menu");var $a=w`
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
`;const At=(e,t)=>{const i=e._$AN;if(i===void 0)return!1;for(const o of i)o._$AO?.(t,!1),At(o,t);return!0},ii=e=>{let t,i;do{if((t=e._$AM)===void 0)break;i=t._$AN,i.delete(e),e=t}while(i?.size===0)},us=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(i===void 0)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),Sa(t)}};function Ca(e){this._$AN!==void 0?(ii(this),this._$AM=e,us(this)):this._$AM=e}function Ta(e,t=!1,i=0){const o=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(t)if(Array.isArray(o))for(let r=i;r<o.length;r++)At(o[r],!1),ii(o[r]);else o!=null&&(At(o,!1),ii(o));else At(this,e)}const Sa=e=>{e.type==we.CHILD&&(e._$AP??=Ta,e._$AQ??=Ca)};class Aa extends ci{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,i,o){super._$AT(t,i,o),us(this),this.isConnected=t._$AU}_$AO(t,i=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),i&&(At(this,t),ii(this))}setValue(t){if(Qo(this._$Ct))this._$Ct._$AI(t,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}const za=()=>new Ea;class Ea{}const _i=new WeakMap,Pa=li(class extends Aa{render(e){return D}update(e,[t]){const i=t!==this.Y;return i&&this.Y!==void 0&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.Y=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),D}rt(e){if(this.isConnected||(e=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let i=_i.get(t);i===void 0&&(i=new WeakMap,_i.set(t,i)),i.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),i.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){return typeof this.Y=="function"?_i.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Ia=class{constructor(e,t){this.popupRef=za(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=i=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${i.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${i.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=i=>{switch(i.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":i.target!==this.host&&(i.preventDefault(),i.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(i);break}},this.handleClick=i=>{var o;i.target===this.host?(i.preventDefault(),i.stopPropagation()):i.target instanceof Element&&(i.target.tagName==="sl-menu-item"||(o=i.target.role)!=null&&o.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=i=>{i.relatedTarget&&i.relatedTarget instanceof Element&&this.host.contains(i.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=i=>{i.stopPropagation()},this.handlePopupReposition=()=>{const i=this.host.renderRoot.querySelector("slot[name='submenu']"),o=i?.assignedElements({flatten:!0}).filter(h=>h.localName==="sl-menu")[0],s=getComputedStyle(this.host).direction==="rtl";if(!o)return;const{left:r,top:a,width:c,height:u}=o.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${s?r+c:r}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${a}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${s?r+c:r}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${a+u}px`)},(this.host=e).addController(this),this.hasSlotController=t}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(e){const t=this.host.renderRoot.querySelector("slot[name='submenu']");if(!t){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let i=null;for(const o of t.assignedElements())if(i=o.querySelectorAll("sl-menu-item, [role^='menuitem']"),i.length!==0)break;if(!(!i||i.length===0)){i[0].setAttribute("tabindex","0");for(let o=1;o!==i.length;++o)i[o].setAttribute("tabindex","-1");this.popupRef.value&&(e.preventDefault(),e.stopPropagation(),this.popupRef.value.active?i[0]instanceof HTMLElement&&i[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{i[0]instanceof HTMLElement&&i[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(e){this.popupRef.value&&this.popupRef.value.active!==e&&(this.popupRef.value.active=e,this.host.requestUpdate())}enableSubmenu(e=!0){e?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var e;if(!((e=this.host.parentElement)!=null&&e.computedStyleMap))return;const t=this.host.parentElement.computedStyleMap(),o=["padding-top","border-top-width","margin-top"].reduce((s,r)=>{var a;const c=(a=t.get(r))!=null?a:new CSSUnitValue(0,"px"),h=(c instanceof CSSUnitValue?c:new CSSUnitValue(0,"px")).to("px");return s-h.value},0);this.skidding=o}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const e=getComputedStyle(this.host).direction==="rtl";return this.isConnected?d`
      <sl-popup
        ${Pa(this.popupRef)}
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
    `:d` <slot name="submenu" hidden></slot> `}},G=class extends U{constructor(){super(...arguments),this.localize=new fe(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new Ge(this,"submenu"),this.submenuController=new Ia(this,this.hasSlotController),this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleMouseOver=e=>{this.focus(),e.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return rr(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const e=this.localize.dir()==="rtl",t=this.submenuController.isExpanded();return d`
      <div
        id="anchor"
        part="base"
        class=${R({"menu-item":!0,"menu-item--rtl":e,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":t})}
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
    `}};G.styles=[B,$a];G.dependencies={"sl-icon":q,"sl-popup":P,"sl-spinner":Gi};n([M("slot:not([name])")],G.prototype,"defaultSlot",2);n([M(".menu-item")],G.prototype,"menuItem",2);n([l()],G.prototype,"type",2);n([l({type:Boolean,reflect:!0})],G.prototype,"checked",2);n([l()],G.prototype,"value",2);n([l({type:Boolean,reflect:!0})],G.prototype,"loading",2);n([l({type:Boolean,reflect:!0})],G.prototype,"disabled",2);n([L("checked")],G.prototype,"handleCheckedChange",1);n([L("disabled")],G.prototype,"handleDisabledChange",1);n([L("type")],G.prototype,"handleTypeChange",1);G.define("sl-menu-item");var Oa=w`
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
`,W=class extends U{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?Qt`a`:Qt`button`;return Jt`
      <${t}
        part="base"
        class=${R({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${x(e?void 0:this.disabled)}
        type=${x(e?void 0:"button")}
        href=${x(e?this.href:void 0)}
        target=${x(e?this.target:void 0)}
        download=${x(e?this.download:void 0)}
        rel=${x(e&&this.target?"noreferrer noopener":void 0)}
        role=${x(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${x(this.name)}
          library=${x(this.library)}
          src=${x(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};W.styles=[B,Oa];W.dependencies={"sl-icon":q};n([M(".icon-button")],W.prototype,"button",2);n([g()],W.prototype,"hasFocus",2);n([l()],W.prototype,"name",2);n([l()],W.prototype,"library",2);n([l()],W.prototype,"src",2);n([l()],W.prototype,"href",2);n([l()],W.prototype,"target",2);n([l()],W.prototype,"download",2);n([l()],W.prototype,"label",2);n([l({type:Boolean,reflect:!0})],W.prototype,"disabled",2);W.define("sl-icon-button");var Da=Object.defineProperty,Ma=Object.getOwnPropertyDescriptor,no=(e,t,i,o)=>{for(var s=o>1?void 0:o?Ma(t,i):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(s=(o?a(t,i,s):a(s))||s);return o&&s&&Da(t,i,s),s};let Ot=class extends z{constructor(){super(...arguments),this.title="CaydenJoy",this.enableBack=!1}render(){return d`
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
          <a href="${f("upgrade")}">🔓</a>
          <a href="${f("premium")}">👑</a>
          <a href="${f("admin")}">⚙️</a>
          <a href="${f("settings")}">🛠️</a>
        </nav>
      </header>
    `}};Ot.styles=w`
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px;
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
      flex-wrap: wrap;
      justify-content: flex-end;
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

    @media (max-width: 900px) {
      header {
        align-items: flex-start;
      }

      nav {
        width: 100%;
        justify-content: flex-start;
        gap: 8px;
      }

      nav a {
        padding: 6px 10px;
        font-size: 13px;
      }
    }

    @media (max-width: 640px) {
      header {
        padding: 10px 14px;
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

      #back-button-block {
        width: 100%;
      }
    }
  `;no([l({type:String})],Ot.prototype,"title",2);no([l({type:Boolean})],Ot.prototype,"enableBack",2);Ot=no([O("app-header")],Ot);var Na=Object.defineProperty,La=Object.getOwnPropertyDescriptor,Rt=(e,t,i,o)=>{for(var s=o>1?void 0:o?La(t,i):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(s=(o?a(t,i,s):a(s))||s);return o&&s&&Na(t,i,s),s};let Ye=class extends z{constructor(){super(...arguments),this.name="",this.email="",this.message="",this.submitted=!1,this.supportEmail="dallas8000@gmail.com"}handleSubmit(e){if(e.preventDefault(),!this.name||!this.email||!this.message){alert("Please fill in all fields");return}localStorage.setItem("lastContact",JSON.stringify({name:this.name,email:this.email,message:this.message,timestamp:new Date().toISOString()}));const t=encodeURIComponent(`CaydenJoy support request from ${this.name}`),i=encodeURIComponent(`Name: ${this.name}
Email: ${this.email}

Message:
${this.message}`);this.submitted=!0,window.location.href=`mailto:${this.supportEmail}?subject=${t}&body=${i}`,this.resetForm(),setTimeout(()=>{this.submitted=!1},5e3)}resetForm(){this.name="",this.email="",this.message=""}render(){return d`
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
    `}};Ye.styles=[Re,w`
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
    `];Rt([l()],Ye.prototype,"name",2);Rt([l()],Ye.prototype,"email",2);Rt([l()],Ye.prototype,"message",2);Rt([l()],Ye.prototype,"submitted",2);Ye=Rt([O("app-contact")],Ye);var Ua=w`
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
`,Xe=class extends U{constructor(){super(...arguments),this.localize=new fe(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return d`
      <span
        part="base"
        class=${R({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
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
    `}};Xe.styles=[B,Ua];Xe.dependencies={"sl-icon-button":W};n([l({reflect:!0})],Xe.prototype,"variant",2);n([l({reflect:!0})],Xe.prototype,"size",2);n([l({type:Boolean,reflect:!0})],Xe.prototype,"pill",2);n([l({type:Boolean})],Xe.prototype,"removable",2);var Ra=w`
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
`;function Fa(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}function Ba(e,t,i="vertical",o="smooth"){const s=Fa(e,t),r=s.top+t.scrollTop,a=s.left+t.scrollLeft,c=t.scrollLeft,u=t.scrollLeft+t.offsetWidth,h=t.scrollTop,p=t.scrollTop+t.offsetHeight;(i==="horizontal"||i==="both")&&(a<c?t.scrollTo({left:a,behavior:o}):a+e.clientWidth>u&&t.scrollTo({left:a-t.offsetWidth+e.clientWidth,behavior:o})),(i==="vertical"||i==="both")&&(r<h?t.scrollTo({top:r,behavior:o}):r+e.clientHeight>p&&t.scrollTo({top:r-t.offsetHeight+e.clientHeight,behavior:o}))}class Di extends ci{constructor(t){if(super(t),this.it=D,t.type!==we.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===D||t==null)return this._t=void 0,this.it=t;if(t===Z)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const i=[t];return i.raw=i,this._t={_$litType$:this.constructor.resultType,strings:i,values:[]}}}Di.directiveName="unsafeHTML",Di.resultType=1;const qa=li(Di);var C=class extends U{constructor(){super(...arguments),this.formControlController=new Lt(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Ge(this,"help-text","label"),this.localize=new fe(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this.value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=e=>d`
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
    `,this.handleDocumentFocusIn=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{const t=e.target,i=t.closest(".select__clear")!==null,o=t.closest("sl-icon-button")!==null;if(!(i||o)){if(e.key==="Escape"&&this.open&&!this.closeWatcher&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key==="Enter"||e.key===" "&&this.typeToSelectString===""){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){const s=this.getAllOptions(),r=s.indexOf(this.currentOption);let a=Math.max(0,r);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;e.key==="ArrowDown"?(a=r+1,a>s.length-1&&(a=0)):e.key==="ArrowUp"?(a=r-1,a<0&&(a=s.length-1)):e.key==="Home"?a=0:e.key==="End"&&(a=s.length-1),this.setCurrentOption(s[a])}if(e.key&&e.key.length===1||e.key==="Backspace"){const s=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key==="Backspace")return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),e.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(const r of s)if(r.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(r);break}}}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()}}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){var e;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var e;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),(e=this.closeWatcher)==null||e.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(e){const i=e.composedPath().some(o=>o instanceof Element&&o.tagName.toLowerCase()==="sl-icon-button");this.disabled||i||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.key!=="Tab"&&(e.stopPropagation(),this.handleDocumentKeyDown(e))}handleClearClick(e){e.stopPropagation(),this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){const i=e.target.closest("sl-option"),o=this.value;i&&!i.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(i):this.setSelectedOptions(i),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==o&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("wa-option")||customElements.whenDefined("wa-option").then(()=>this.handleDefaultSlotChange());const e=this.getAllOptions(),t=this.valueHasChanged?this.value:this.defaultValue,i=Array.isArray(t)?t:[t],o=[];e.forEach(s=>o.push(s.value)),this.setSelectedOptions(e.filter(s=>i.includes(s.value)))}handleTagRemove(e,t){e.stopPropagation(),this.disabled||(this.toggleOptionSelection(t,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(e){this.getAllOptions().forEach(i=>{i.current=!1,i.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus())}setSelectedOptions(e){const t=this.getAllOptions(),i=Array.isArray(e)?e:[e];t.forEach(o=>o.selected=!1),i.length&&i.forEach(o=>o.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){t===!0||t===!1?e.selected=t:e.selected=!e.selected,this.selectionChanged()}selectionChanged(){var e,t,i;const o=this.getAllOptions();if(this.selectedOptions=o.filter(s=>s.selected),this.multiple)this.value=this.selectedOptions.map(s=>s.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const s=this.selectedOptions[0];this.value=(e=s?.value)!=null?e:"",this.displayLabel=(i=(t=s?.getTextLabel)==null?void 0:t.call(s))!=null?i:""}this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){const i=this.getTag(e,t);return d`<div @sl-remove=${o=>this.handleTagRemove(o,e)}>
          ${typeof i=="string"?qa(i):i}
        </div>`}else if(t===this.maxOptionsVisible)return d`<sl-tag size=${this.size}>+${this.selectedOptions.length-t}</sl-tag>`;return d``})}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}handleValueChange(){const e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(e.filter(i=>t.includes(i.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await pt(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:e,options:t}=dt(this,"select.show",{dir:this.localize.dir()});await ht(this.popup.popup,e,t),this.currentOption&&Ba(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await pt(this);const{keyframes:e,options:t}=dt(this,"select.hide",{dir:this.localize.dir()});await ht(this.popup.popup,e,t),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,ut(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,ut(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(e){this.valueInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),i=this.label?!0:!!e,o=this.helpText?!0:!!t,s=this.clearable&&!this.disabled&&this.value.length>0,r=this.placeholder&&this.value&&this.value.length<=0;return d`
      <div
        part="form-control"
        class=${R({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":o})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${R({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":r,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
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

              ${s?d`
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
    `}};C.styles=[B,ui,Ra];C.dependencies={"sl-icon":q,"sl-popup":P,"sl-tag":Xe};n([M(".select")],C.prototype,"popup",2);n([M(".select__combobox")],C.prototype,"combobox",2);n([M(".select__display-input")],C.prototype,"displayInput",2);n([M(".select__value-input")],C.prototype,"valueInput",2);n([M(".select__listbox")],C.prototype,"listbox",2);n([g()],C.prototype,"hasFocus",2);n([g()],C.prototype,"displayLabel",2);n([g()],C.prototype,"currentOption",2);n([g()],C.prototype,"selectedOptions",2);n([g()],C.prototype,"valueHasChanged",2);n([l()],C.prototype,"name",2);n([l({converter:{fromAttribute:e=>e.split(" "),toAttribute:e=>e.join(" ")}})],C.prototype,"value",2);n([di()],C.prototype,"defaultValue",2);n([l({reflect:!0})],C.prototype,"size",2);n([l()],C.prototype,"placeholder",2);n([l({type:Boolean,reflect:!0})],C.prototype,"multiple",2);n([l({attribute:"max-options-visible",type:Number})],C.prototype,"maxOptionsVisible",2);n([l({type:Boolean,reflect:!0})],C.prototype,"disabled",2);n([l({type:Boolean})],C.prototype,"clearable",2);n([l({type:Boolean,reflect:!0})],C.prototype,"open",2);n([l({type:Boolean})],C.prototype,"hoist",2);n([l({type:Boolean,reflect:!0})],C.prototype,"filled",2);n([l({type:Boolean,reflect:!0})],C.prototype,"pill",2);n([l()],C.prototype,"label",2);n([l({reflect:!0})],C.prototype,"placement",2);n([l({attribute:"help-text"})],C.prototype,"helpText",2);n([l({reflect:!0})],C.prototype,"form",2);n([l({type:Boolean,reflect:!0})],C.prototype,"required",2);n([l()],C.prototype,"getTag",2);n([L("disabled",{waitUntilFirstUpdate:!0})],C.prototype,"handleDisabledChange",1);n([L("value",{waitUntilFirstUpdate:!0})],C.prototype,"handleValueChange",1);n([L("open",{waitUntilFirstUpdate:!0})],C.prototype,"handleOpenChange",1);vt("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});vt("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});C.define("sl-select");var Va=w`
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
`,te=class extends U{constructor(){super(...arguments),this.localize=new fe(this),this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const e=this.childNodes;let t="";return[...e].forEach(i=>{i.nodeType===Node.ELEMENT_NODE&&(i.hasAttribute("slot")||(t+=i.textContent)),i.nodeType===Node.TEXT_NODE&&(t+=i.textContent)}),t.trim()}render(){return d`
      <div
        part="base"
        class=${R({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};te.styles=[B,Va];te.dependencies={"sl-icon":q};n([M(".option__label")],te.prototype,"defaultSlot",2);n([g()],te.prototype,"current",2);n([g()],te.prototype,"selected",2);n([g()],te.prototype,"hasHover",2);n([l({reflect:!0})],te.prototype,"value",2);n([l({type:Boolean,reflect:!0})],te.prototype,"disabled",2);n([L("disabled")],te.prototype,"handleDisabledChange",1);n([L("selected")],te.prototype,"handleSelectedChange",1);n([L("value")],te.prototype,"handleValueChange",1);te.define("sl-option");var ja=w`
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
`,j=class extends U{constructor(){super(...arguments),this.formControlController=new Lt(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new Ge(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(e){e.key==="ArrowLeft"&&(e.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),e.key==="ArrowRight"&&(e.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("help-text"),t=this.helpText?!0:!!e;return d`
      <div
        class=${R({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${R({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${x(this.value)}
            .checked=${Qi(this.checked)}
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
    `}};j.styles=[B,ui,ja];n([M('input[type="checkbox"]')],j.prototype,"input",2);n([g()],j.prototype,"hasFocus",2);n([l()],j.prototype,"title",2);n([l()],j.prototype,"name",2);n([l()],j.prototype,"value",2);n([l({reflect:!0})],j.prototype,"size",2);n([l({type:Boolean,reflect:!0})],j.prototype,"disabled",2);n([l({type:Boolean,reflect:!0})],j.prototype,"checked",2);n([di("checked")],j.prototype,"defaultChecked",2);n([l({reflect:!0})],j.prototype,"form",2);n([l({type:Boolean,reflect:!0})],j.prototype,"required",2);n([l({attribute:"help-text"})],j.prototype,"helpText",2);n([L("checked",{waitUntilFirstUpdate:!0})],j.prototype,"handleCheckedChange",1);n([L("disabled",{waitUntilFirstUpdate:!0})],j.prototype,"handleDisabledChange",1);j.define("sl-switch");const Ht={colorTheme:"normal",fontSize:"medium",enableAnimations:!0,enableSounds:!0,enableTextToSpeech:!1,enableReducedMotion:!1,highlightInteractive:!1},ki="caydenjoy_accessibility_settings";class de{constructor(){this.settings={...Ht},this.listeners=new Set,this.audioUnlockAttached=!1,this.loadSettings(),this.attachAudioUnlockHandlers()}static getInstance(){return de.instance||(de.instance=new de),de.instance}loadSettings(){try{const t=localStorage.getItem(ki);if(t){const i=JSON.parse(t);this.settings={...Ht,...i}}this.applySettings()}catch(t){console.error("Failed to load accessibility settings:",t),this.settings={...Ht}}}saveSettings(t){this.settings={...this.settings,...t};try{localStorage.setItem(ki,JSON.stringify(this.settings)),this.applySettings(),this.notifyListeners()}catch(i){console.error("Failed to save accessibility settings:",i)}}getSettings(){return{...this.settings}}subscribe(t){return this.listeners.add(t),()=>{this.listeners.delete(t)}}notifyListeners(){this.listeners.forEach(t=>t(this.getSettings()))}applySettings(){const t=document.documentElement;t.setAttribute("data-theme",this.settings.colorTheme),t.setAttribute("data-font-size",this.settings.fontSize),this.settings.enableReducedMotion?t.style.setProperty("--disable-animations","1"):t.style.setProperty("--disable-animations","0"),this.settings.enableReducedMotion?t.classList.add("prefers-reduced-motion"):t.classList.remove("prefers-reduced-motion"),this.settings.highlightInteractive?t.classList.add("highlight-interactive"):t.classList.remove("highlight-interactive")}getAudioContext(){try{if(!this.audioContext){const t=window.AudioContext||window.webkitAudioContext;if(!t)return null;this.audioContext=new t}return this.audioContext}catch(t){return console.error("AudioContext unavailable:",t),null}}attachAudioUnlockHandlers(){if(this.audioUnlockAttached)return;this.audioUnlockAttached=!0;const t=()=>{const i=this.getAudioContext();i&&i.state==="suspended"&&i.resume().catch(()=>{})};window.addEventListener("pointerdown",t,{passive:!0}),window.addEventListener("touchstart",t,{passive:!0}),window.addEventListener("keydown",t,{passive:!0})}speak(t,i=1){this.settings.enableTextToSpeech&&this.speakNow(t,i)}speakNow(t,i=1){if(!("speechSynthesis"in window)||typeof SpeechSynthesisUtterance>"u"){this.playSound("error");return}try{window.speechSynthesis.cancel(),window.speechSynthesis.resume();const o=new SpeechSynthesisUtterance(t);o.rate=i,o.pitch=1,o.volume=1,window.speechSynthesis.speak(o)}catch(o){console.error("Text-to-speech failed:",o),this.playSound("error")}}playSound(t){if(!this.settings.enableSounds)return;const i=this.getAudioContext();if(!i)return;i.state==="suspended"&&i.resume().catch(()=>{});const o=i.createOscillator(),s=i.createGain();switch(o.connect(s),s.connect(i.destination),t){case"success":o.frequency.value=800,s.gain.setValueAtTime(.3,i.currentTime),s.gain.exponentialRampToValueAtTime(.01,i.currentTime+.2),o.start(i.currentTime),o.stop(i.currentTime+.2);break;case"error":o.frequency.value=400,s.gain.setValueAtTime(.2,i.currentTime),s.gain.exponentialRampToValueAtTime(.01,i.currentTime+.3),o.start(i.currentTime),o.stop(i.currentTime+.3);break;case"click":o.frequency.value=600,s.gain.setValueAtTime(.1,i.currentTime),s.gain.exponentialRampToValueAtTime(.01,i.currentTime+.1),o.start(i.currentTime),o.stop(i.currentTime+.1);break}}resetToDefaults(){this.settings={...Ht},localStorage.removeItem(ki),this.applySettings(),this.notifyListeners()}}var Ha=Object.getOwnPropertyDescriptor,Ka=(e,t,i,o)=>{for(var s=o>1?void 0:o?Ha(t,i):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(s=a(s)||s);return s};let Mi=class extends z{render(){return d`
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
                <li><a href="${f("download")}">Download Android APK</a></li>
                <li><a href="${f("custom-images")}">Custom Photos</a></li>
                <li><a href="${f("progress")}">Progress Dashboard</a></li>
                <li><a href="${f("upgrade")}">APK Upgrade Keys</a></li>
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
    `}};Mi.styles=w`
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
  `;Mi=Ka([O("app-footer")],Mi);var Wa=Object.defineProperty,Ya=Object.getOwnPropertyDescriptor,hs=(e,t,i,o)=>{for(var s=o>1?void 0:o?Ya(t,i):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(s=(o?a(t,i,s):a(s))||s);return o&&s&&Wa(t,i,s),s};let oi=class extends z{constructor(){super(...arguments),this.settings=de.getInstance().getSettings(),this.accessibilityManager=de.getInstance()}connectedCallback(){super.connectedCallback(),this.unsubscribe=this.accessibilityManager.subscribe(e=>{this.settings=e})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe&&this.unsubscribe()}onThemeChange(e){this.accessibilityManager.saveSettings({colorTheme:e})}onFontSizeChange(e){const t=e.target.value;this.accessibilityManager.saveSettings({fontSize:t})}onAnimationsChange(e){const t=e.target.checked;this.accessibilityManager.saveSettings({enableAnimations:t})}onSoundsChange(e){const t=e.target.checked;this.accessibilityManager.saveSettings({enableSounds:t})}onTextToSpeechChange(e){const t=e.target.checked;this.accessibilityManager.saveSettings({enableTextToSpeech:t}),t&&this.accessibilityManager.speak("Text to speech enabled")}onReducedMotionChange(e){const t=e.target.checked;this.accessibilityManager.saveSettings({enableReducedMotion:t})}onHighlightInteractiveChange(e){const t=e.target.checked;this.accessibilityManager.saveSettings({highlightInteractive:t})}resetSettings(){confirm("Reset all settings to defaults? This cannot be undone.")&&this.accessibilityManager.resetToDefaults()}testSound(){this.accessibilityManager.playSound("success")}testSpeech(){this.accessibilityManager.speak("This is a test of the text to speech feature.")}render(){return d`
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
    `}};oi.styles=[Re,w`
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
    `];hs([g()],oi.prototype,"settings",2);oi=hs([O("app-settings")],oi);var Ja=w`
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
`,ae=class extends U{constructor(){super(...arguments),this.localize=new fe(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(e=>{for(const t of e)t.type==="attributes"&&t.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.detailsObserver)==null||e.disconnect()}handleSummaryClick(e){e.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.open?this.hide():this.show()),(e.key==="ArrowUp"||e.key==="ArrowLeft")&&(e.preventDefault(),this.hide()),(e.key==="ArrowDown"||e.key==="ArrowRight")&&(e.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await pt(this.body);const{keyframes:t,options:i}=dt(this,"details.show",{dir:this.localize.dir()});await ht(this.body,Do(t,this.body.scrollHeight),i),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await pt(this.body);const{keyframes:t,options:i}=dt(this,"details.hide",{dir:this.localize.dir()});await ht(this.body,Do(t,this.body.scrollHeight),i),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,ut(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,ut(this,"sl-after-hide")}render(){const e=this.localize.dir()==="rtl";return d`
      <details
        part="base"
        class=${R({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":e})}
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
    `}};ae.styles=[B,Ja];ae.dependencies={"sl-icon":q};n([M(".details")],ae.prototype,"details",2);n([M(".details__header")],ae.prototype,"header",2);n([M(".details__body")],ae.prototype,"body",2);n([M(".details__expand-icon-slot")],ae.prototype,"expandIconSlot",2);n([l({type:Boolean,reflect:!0})],ae.prototype,"open",2);n([l()],ae.prototype,"summary",2);n([l({type:Boolean,reflect:!0})],ae.prototype,"disabled",2);n([L("open",{waitUntilFirstUpdate:!0})],ae.prototype,"handleOpenChange",1);vt("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});vt("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});ae.define("sl-details");var Ga=Object.getOwnPropertyDescriptor,Xa=(e,t,i,o)=>{for(var s=o>1?void 0:o?Ga(t,i):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(s=a(s)||s);return s};let Ni=class extends z{constructor(){super(...arguments),this.faqData=[{question:"What is a Progressive Web App (PWA)?",answer:"A Progressive Web App is a web application that uses web technologies to provide a native app-like experience. PWAs can be installed on your device, work offline, and send push notifications."},{question:"Can I use CaydenJoy offline?",answer:"Yes! CaydenJoy is built as a PWA with offline support. Once you've loaded the app, it will work without an internet connection and sync data when you're back online."},{question:"How do I install CaydenJoy on my device?",answer:'On most browsers and devices, you can install CaydenJoy by clicking the "Install" button that appears in the address bar, or through the browser menu. On some devices, you can add it to your home screen.'},{question:"Is my data secure?",answer:"Yes, your data is encrypted and stored securely. We use HTTPS to protect data in transit and implement industry-standard security practices."},{question:"How do I enable notifications?",answer:"You can enable notifications in the Settings page. When you enable them, your browser may ask for permission to send notifications."},{question:"What devices are supported?",answer:"CaydenJoy works on any device with a modern web browser, including smartphones, tablets, and computers. It supports iOS, Android, Windows, and macOS."},{question:"How do I update CaydenJoy?",answer:"CaydenJoy updates automatically in the background. You'll always have the latest version without needing to manually update."},{question:"Can I use CaydenJoy on multiple devices?",answer:"Yes! You can install and use CaydenJoy on as many devices as you want. Each installation can be customized with your preferences."},{question:"How do I backup my data?",answer:"Your data is automatically backed up in your browser's local storage. You can export your data from the Settings page."},{question:"Is CaydenJoy free?",answer:"Yes, CaydenJoy is completely free to use. There are no hidden costs or premium features."}]}render(){return d`
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
    `}};Ni.styles=[Re,w`
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
    `];Ni=Xa([O("app-faq")],Ni);const $i="caydenjoy_license_status",Mo="caydenjoy_redeemed_upgrade_codes",Qa="CAYDENJOY-APK-UPGRADE-2026",Za={CJF:"family",CJL:"learning",CJA:"allAccess"},en=["CyberCop3158","CAYDENJOY-PREMIUM-2024","CAYDENJOY-UNLOCK-ALL","PREMIUM-UNLOCK-2025","TEST-CODE-001","EVAL-VERSION-2026","DEMO-FULL-ACCESS","TRIAL-UNLIMITED","SPECIAL-OFFER-50"].map(e=>e.toUpperCase());class Q{constructor(){this.lastError="",this.status={isUpgraded:!1,tier:"none"},this.loadLicense()}static getInstance(){return Q.instance||(Q.instance=new Q),Q.instance}static normalizeCode(t){return t.trim().toUpperCase().replace(/\s+/g,"").replace(/_/g,"-")}static hashCode(t){let i=2166136261;for(let o=0;o<t.length;o+=1)i^=t.charCodeAt(o),i=Math.imul(i,16777619);return(i>>>0).toString(36).toUpperCase().padStart(7,"0")}static checksumFor(t,i){return Q.hashCode(`${Qa}:${t}:${i}`).slice(0,5)}loadLicense(){try{const t=localStorage.getItem($i);t&&(this.status={tier:"none",...JSON.parse(t)})}catch(t){console.error("Error loading license status:",t)}}saveLicense(){try{localStorage.setItem($i,JSON.stringify(this.status))}catch(t){console.error("Error saving license status:",t)}}getRedeemedCodeHashes(){try{const t=localStorage.getItem(Mo);return t?JSON.parse(t):[]}catch(t){return console.error("Error loading redeemed upgrade codes:",t),[]}}markCodeRedeemed(t){const i=Q.hashCode(t),o=new Set(this.getRedeemedCodeHashes());o.add(i),localStorage.setItem(Mo,JSON.stringify([...o]))}hasCodeBeenRedeemed(t){return this.getRedeemedCodeHashes().includes(Q.hashCode(t))}validateGeneratedCode(t){const i=t.split("-");if(i.length!==4)return{valid:!1,reason:"Code format should look like CJA-XXXX-XXXX-XXXXX"};const[o,s,r,a]=i,c=Za[o];if(!c)return{valid:!1,reason:"Unknown upgrade tier prefix"};const u=`${s}-${r}`,h=Q.checksumFor(o,u);return a!==h?{valid:!1,reason:"Upgrade key checksum does not match"}:{valid:!0,tier:c,normalizedCode:t}}validateUpgradeCode(t){const i=Q.normalizeCode(t);return en.includes(i)?{valid:!0,tier:"allAccess",normalizedCode:i}:this.validateGeneratedCode(i)}verifyAndApplyCode(t){this.lastError="";const i=this.validateUpgradeCode(t);return i.valid?this.hasCodeBeenRedeemed(i.normalizedCode)?(this.lastError="This upgrade key has already been redeemed on this device",!1):(this.status.isUpgraded=!0,this.status.tier=i.tier,this.status.upgradeDate=Date.now(),this.status.upgradeCode=i.normalizedCode,this.markCodeRedeemed(i.normalizedCode),this.saveLicense(),!0):(this.lastError=i.reason,!1)}getLastError(){return this.lastError}isUpgraded(){return this.status.isUpgraded}getTier(){return this.status.tier??"none"}getUpgradeCode(){return this.status.upgradeCode}getUpgradeDate(){return this.status.upgradeDate}resetLicense(){this.status={isUpgraded:!1,tier:"none"},this.lastError="",localStorage.removeItem($i)}}const Ci="caydenjoy_premium_status",tn=!1;class K{constructor(){this.licenseManager=Q.getInstance(),this.status={isPremium:!1,tier:"none",features:{customImages:!1,voiceCustomization:!1,cloudBackup:!1,additionalTabs:!1}},this.loadStatus()}static getInstance(){return K.instance||(K.instance=new K),K.instance}loadStatus(){try{if(this.status={isPremium:!1,tier:"none",features:{customImages:!1,voiceCustomization:!1,cloudBackup:!1,additionalTabs:!1}},this.licenseManager.isUpgraded()){console.log("[LICENSE] App upgraded via license code");const i=this.licenseManager.getTier();this.status=this.createStatusForTier(i==="none"?"allAccess":i);return}const t=localStorage.getItem(Ci);t&&(this.status=JSON.parse(t))}catch(t){console.error("Error loading premium status:",t)}}refreshStatus(){this.loadStatus()}getStatus(){return{...this.status}}getTier(){return this.status.tier??"none"}isPremium(){return this.status.isPremium}hasFeature(t){return this.status.features[t]||!1}canUseCustomImages(){return this.hasFeature("customImages")}canCustomizeVoice(){return this.hasFeature("voiceCustomization")}canUseCloudBackup(){return this.hasFeature("cloudBackup")}canAddAdditionalTabs(){return this.hasFeature("additionalTabs")}createStatusForTier(t){const i={isPremium:t!=="none",tier:t,purchaseDate:t==="none"?void 0:Date.now(),features:{customImages:!1,voiceCustomization:!1,cloudBackup:!1,additionalTabs:!1}};return t==="family"&&(i.features.customImages=!0),t==="learning"&&(i.features.customImages=!0,i.features.cloudBackup=!0,i.features.additionalTabs=!0),t==="allAccess"&&(i.features.customImages=!0,i.features.voiceCustomization=!0,i.features.cloudBackup=!0,i.features.additionalTabs=!0),i}simulatePremiumPurchase(t="allAccess"){this.status=this.createStatusForTier(t),this.saveStatus()}saveStatus(){try{localStorage.setItem(Ci,JSON.stringify(this.status))}catch(t){console.error("Error saving premium status:",t)}}unlockPremium(){this.status=this.createStatusForTier("allAccess"),this.saveStatus()}resetPremium(){localStorage.removeItem(Ci),this.status={isPremium:!1,tier:"none",features:{customImages:!1,voiceCustomization:!1,cloudBackup:!1,additionalTabs:!1}}}}K.getInstance();const Ti="caydenjoy_progress_events",on=500;class ue{static getInstance(){return ue.instance||(ue.instance=new ue),ue.instance}log(t,i,o=""){const r=[{id:`event_${Date.now()}_${Math.random().toString(36).slice(2,8)}`,type:t,label:i,detail:o,createdAt:Date.now()},...this.getEvents()].slice(0,on);localStorage.setItem(Ti,JSON.stringify(r))}getEvents(){try{const t=localStorage.getItem(Ti);return t?JSON.parse(t):[]}catch(t){return console.error("Could not load progress events:",t),[]}}getSummary(){const t=this.getEvents(),i=new Date;i.setHours(0,0,0,0);const o=new Map,s={communication:0,activity:0,safety:0};return t.forEach(r=>{o.set(r.label,(o.get(r.label)??0)+1),s[r.type]+=1}),{totalEvents:t.length,todayEvents:t.filter(r=>r.createdAt>=i.getTime()).length,topLabels:[...o.entries()].map(([r,a])=>({label:r,count:a})).sort((r,a)=>a.count-r.count).slice(0,8),typeCounts:s,recentEvents:t.slice(0,12)}}clear(){localStorage.removeItem(Ti)}}ue.getInstance();var sn=Object.defineProperty,rn=Object.getOwnPropertyDescriptor,yt=(e,t,i,o)=>{for(var s=o>1?void 0:o?rn(t,i):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(s=(o?a(t,i,s):a(s))||s);return o&&s&&sn(t,i,s),s};let Ne=class extends z{constructor(){super(...arguments),this.activeRequest=null,this.tabs=[],this.activeTabId=null,this.showNewTabModal=!1,this.newTabName="",this.premiumManager=K.getInstance(),this.accessibilityManager=de.getInstance(),this.progressManager=ue.getInstance(),this.DEFAULT_TAB_ID="default",this.TABS_STORAGE_KEY="caydenjoy_communication_tabs",this.requests=[{id:1,text:"I'm hungry",phrase:"I'm hungry.",category:"Food",color:"#2e7d32",imageUrl:"https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=700&q=85"},{id:2,text:"I'm thirsty",phrase:"I'm thirsty.",category:"Drink",color:"#1976a2",imageUrl:"https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=700&q=85"},{id:3,text:"Bathroom",phrase:"I need the bathroom.",category:"Need",color:"#6b5b95",imageUrl:"https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=700&q=85"},{id:4,text:"Break",phrase:"I need a break.",category:"Sensory",color:"#1f7a8c",imageUrl:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=85"},{id:5,text:"Help",phrase:"Help please.",category:"Urgent",color:"#c0392b",imageUrl:"https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=700&q=85"},{id:6,text:"Play",phrase:"I want to play.",category:"Activity",color:"#7a4fb0",imageUrl:"https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=700&q=85"},{id:7,text:"I'm tired",phrase:"I'm tired.",category:"Body",color:"#536d8f",imageUrl:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=700&q=85"},{id:8,text:"Too loud",phrase:"It is too loud.",category:"Sensory",color:"#b65f1f",imageUrl:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=85"},{id:9,text:"Favorite food",phrase:"I want my favorite food.",category:"Food",color:"#9a6a12",imageUrl:"https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=700&q=85"},{id:10,text:"Favorite toy",phrase:"I want my toy.",category:"Play",color:"#a23b72",imageUrl:"https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=700&q=85"},{id:11,text:"Go outside",phrase:"I want to go outside.",category:"Place",color:"#2f7d57",imageUrl:"https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=700&q=85"},{id:12,text:"Calm place",phrase:"I need a calm place.",category:"Sensory",color:"#4f7f8f",imageUrl:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=85"}]}connectedCallback(){super.connectedCallback(),this.loadTabs()}normalizeRequest(e,t){return{id:Number(e?.id??t.id),text:String(e?.text??t.text),phrase:String(e?.phrase??e?.text??t.phrase),category:String(e?.category??t.category),color:String(e?.color?.startsWith?.("#")?e.color:t.color),imageUrl:String(e?.imageUrl??t.imageUrl)}}loadTabs(){try{const e=localStorage.getItem(this.TABS_STORAGE_KEY);if(e){const t=JSON.parse(e);this.tabs=t.tabs.map(i=>({...i,requests:i.requests.map((o,s)=>this.normalizeRequest(o,this.requests[s]??this.requests[0]))})),this.activeTabId=t.activeTabId}else this.initializeDefaultTab()}catch(e){console.error("Error loading tabs:",e),this.initializeDefaultTab()}}initializeDefaultTab(){this.tabs=[{id:this.DEFAULT_TAB_ID,name:"Daily Needs",requests:[...this.requests],createdAt:Date.now()}],this.activeTabId=this.DEFAULT_TAB_ID,this.saveTabs()}saveTabs(){try{const e={tabs:this.tabs,activeTabId:this.activeTabId};localStorage.setItem(this.TABS_STORAGE_KEY,JSON.stringify(e))}catch(e){console.error("Error saving tabs:",e)}}getActiveTab(){return this.tabs.find(e=>e.id===this.activeTabId)}switchTab(e){this.activeTabId=e,this.activeRequest=null,this.saveTabs()}openNewTabModal(){this.showNewTabModal=!0,this.newTabName=""}closeNewTabModal(){this.showNewTabModal=!1,this.newTabName=""}createNewTab(){if(!this.newTabName.trim()){alert("Please enter a tab name");return}const e={id:`tab-${Date.now()}`,name:this.newTabName.trim(),requests:[...this.requests],createdAt:Date.now()};this.tabs=[...this.tabs,e],this.activeTabId=e.id,this.activeRequest=null,this.saveTabs(),this.closeNewTabModal()}handleTabNameInput(e){const t=e.target;this.newTabName=t.value}handleTabNameKeydown(e){e.key==="Enter"?this.createNewTab():e.key==="Escape"&&this.closeNewTabModal()}handleRequest(e){this.activeRequest=e,this.progressManager.log(e.category==="Urgent"?"safety":"communication",e.text,e.phrase),this.accessibilityManager.playSound("click"),this.accessibilityManager.speakNow(e.phrase,.9)}clearRequest(){this.activeRequest=null,window.speechSynthesis.cancel()}render(){const e=this.getActiveTab(),t=this.premiumManager.canAddAdditionalTabs(),i=e?e.requests:this.requests;return d`
      <div class="container">
        <div class="header">
          <h1>CaydenJoy Communication</h1>
          <p class="subtitle">Tap a realistic picture to speak a daily need.</p>
        </div>

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
          ${i.map(o=>d`
            <button
              class="request-card"
              style="--card-color: ${o.color}"
              @click=${()=>this.handleRequest(o)}
            >
              <img src=${o.imageUrl} alt=${o.text} />
              <div class="request-copy">
                <div class="request-text">${o.text}</div>
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
    `}};Ne.styles=w`
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
  `;yt([g()],Ne.prototype,"activeRequest",2);yt([g()],Ne.prototype,"tabs",2);yt([g()],Ne.prototype,"activeTabId",2);yt([g()],Ne.prototype,"showNewTabModal",2);yt([g()],Ne.prototype,"newTabName",2);Ne=yt([O("app-communication")],Ne);const Tt="caydenjoy_custom_images",No=50,Lo=500*1024;class Ie{constructor(){this.initStorage()}static getInstance(){return Ie.instance||(Ie.instance=new Ie),Ie.instance}initStorage(){try{localStorage.getItem(Tt)||localStorage.setItem(Tt,JSON.stringify([]))}catch(t){console.error("Error initializing custom images storage:",t)}}getImages(){try{const t=localStorage.getItem(Tt);return t?JSON.parse(t):[]}catch(t){return console.error("Error loading custom images:",t),[]}}saveImages(t){try{localStorage.setItem(Tt,JSON.stringify(t))}catch(i){console.error("Error saving custom images:",i),i instanceof DOMException&&i.name==="QuotaExceededError"&&this.handleStorageQuotaExceeded()}}handleStorageQuotaExceeded(){console.warn("Storage quota exceeded. Removing oldest images.");const t=this.getImages();t.length>0&&(t.sort((i,o)=>i.uploadedAt-o.uploadedAt),t.splice(0,5),this.saveImages(t))}addImage(t,i,o){try{if(!t||!i||!o)throw new Error("Missing required fields");if(o.length>Lo)throw new Error(`Image too large. Maximum size: ${Lo/1024}KB`);const s=this.getImages();if(s.length>=No)throw new Error(`Maximum ${No} images reached`);const r={id:`img_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,category:t,name:i,dataUrl:o,uploadedAt:Date.now()};return s.push(r),this.saveImages(s),r}catch(s){return console.error("Error adding custom image:",s),null}}getImagesByCategory(t){return this.getImages().filter(i=>i.category===t)}getImage(t){return this.getImages().find(i=>i.id===t)}getAllImages(){return this.getImages()}updateImage(t,i){try{const o=this.getImages(),s=o.find(r=>r.id===t);return s?(s.name=i,this.saveImages(o),!0):!1}catch(o){return console.error("Error updating image:",o),!1}}deleteImage(t){try{const i=this.getImages().filter(o=>o.id!==t);return this.saveImages(i),!0}catch(i){return console.error("Error deleting image:",i),!1}}deleteByCategory(t){try{const i=this.getImages().filter(o=>o.category!==t);return this.saveImages(i),!0}catch(i){return console.error("Error deleting images by category:",i),!1}}getStorageInfo(){const i=this.getImages().reduce((s,r)=>s+r.dataUrl.length,0),o=5*1024*1024;return{used:i,max:o,percentage:Math.round(i/o*100)}}clearAll(){try{return localStorage.setItem(Tt,JSON.stringify([])),!0}catch(t){return console.error("Error clearing images:",t),!1}}exportData(){return JSON.stringify(this.getImages())}importData(t){try{const i=JSON.parse(t);return Array.isArray(i)?(this.saveImages(i),!0):!1}catch(i){return console.error("Error importing images:",i),!1}}}Ie.getInstance();var an=Object.defineProperty,nn=Object.getOwnPropertyDescriptor,be=(e,t,i,o)=>{for(var s=o>1?void 0:o?nn(t,i):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(s=(o?a(t,i,s):a(s))||s);return o&&s&&an(t,i,s),s};let ee=class extends z{constructor(){super(...arguments),this.activeMode="choice",this.selectedCard=null,this.matchTarget=null,this.matchedIds=[],this.routine=[],this.puzzlePieces=["bottom-right","top-left","bottom-left","top-right"],this.selectedPuzzlePiece=null,this.placedPuzzlePieces={},this.uploadedCards=[],this.accessibilityManager=de.getInstance(),this.customImagesManager=Ie.getInstance(),this.progressManager=ue.getInstance(),this.dailyCards=[{id:"water",label:"Water",phrase:"I want water.",category:"Drink",imageUrl:"https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=500&q=80"},{id:"apple",label:"Apple",phrase:"I want an apple.",category:"Food",imageUrl:"https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=500&q=80"},{id:"shoes",label:"Shoes",phrase:"I need my shoes.",category:"Clothes",imageUrl:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80"},{id:"toothbrush",label:"Brush Teeth",phrase:"It is time to brush teeth.",category:"Routine",imageUrl:"https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=500&q=80"},{id:"bathroom",label:"Bathroom",phrase:"I need the bathroom.",category:"Need",imageUrl:"https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=500&q=80"},{id:"headphones",label:"Headphones",phrase:"I need headphones.",category:"Sensory",imageUrl:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80"}],this.routineCards=[{id:"wake",label:"Wake Up",phrase:"Wake up.",category:"Routine",order:1,imageUrl:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=500&q=80"},{id:"dress",label:"Get Dressed",phrase:"Get dressed.",category:"Routine",order:2,imageUrl:"https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=500&q=80"},{id:"breakfast",label:"Breakfast",phrase:"Eat breakfast.",category:"Routine",order:3,imageUrl:"https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&w=500&q=80"},{id:"school",label:"School",phrase:"Go to school.",category:"Routine",order:4,imageUrl:"https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=500&q=80"}]}connectedCallback(){super.connectedCallback(),this.loadUploadedCards(),this.routine=[...this.routineCards],this.pickMatchTarget()}get activityCards(){return[...this.uploadedCards,...this.dailyCards].slice(0,10)}loadUploadedCards(){const e=this.customImagesManager.getAllImages();this.uploadedCards=e.slice(0,6).map(t=>({id:t.id,label:t.name,phrase:`I choose ${t.name}.`,category:t.category||"My Photos",imageUrl:t.dataUrl}))}setMode(e){this.activeMode=e,this.selectedCard=null,e==="match"&&this.pickMatchTarget()}speak(e){this.accessibilityManager.playSound("click"),this.accessibilityManager.speakNow(e,.9)}chooseCard(e){this.selectedCard=e,this.progressManager.log("activity",`Choice: ${e.label}`,e.phrase),this.speak(e.phrase)}pickMatchTarget(){const i=this.activityCards.filter(o=>!this.matchedIds.includes(o.id))[0];this.matchTarget=i?.id??null}tryMatch(e){this.matchTarget&&(e.id===this.matchTarget?(this.matchedIds=[...this.matchedIds,e.id],this.progressManager.log("activity",`Matched: ${e.label}`,"Matching activity"),this.speak(`Yes. ${e.label}.`),this.pickMatchTarget()):this.speak(`Try again. Find ${this.currentMatchCard?.label??"the picture"}.`))}get currentMatchCard(){return this.activityCards.find(e=>e.id===this.matchTarget)}moveRoutineStep(e){if(e===0){this.speak(this.routine[e].phrase);return}const t=[...this.routine],i=t.splice(e,1)[0];t.splice(e-1,0,i),this.routine=t,this.progressManager.log("activity",`Routine: ${i.label}`,i.phrase),this.speak(i.phrase)}selectPuzzlePiece(e){Object.values(this.placedPuzzlePieces).includes(e)||(this.selectedPuzzlePiece=e,this.speak("Piece selected."))}placePuzzlePiece(e){if(!this.selectedPuzzlePiece){this.speak("Choose a puzzle piece first.");return}if(this.selectedPuzzlePiece!==e){this.speak("Try a different spot.");return}this.placedPuzzlePieces={...this.placedPuzzlePieces,[e]:this.selectedPuzzlePiece},this.progressManager.log("activity","Puzzle piece placed",e),this.selectedPuzzlePiece=null,Object.keys(this.placedPuzzlePieces).length===this.puzzleSlots.length?this.speak("Puzzle finished. Great job."):this.speak("Yes. That piece fits.")}resetActivity(){this.selectedCard=null,this.matchedIds=[],this.routine=[...this.routineCards],this.puzzlePieces=["bottom-right","top-left","bottom-left","top-right"],this.selectedPuzzlePiece=null,this.placedPuzzlePieces={},this.pickMatchTarget(),this.speak("Activity reset.")}get puzzleSlots(){return["top-left","top-right","bottom-left","bottom-right"]}getPuzzlePosition(e){return{"top-left":"0% 0%","top-right":"100% 0%","bottom-left":"0% 100%","bottom-right":"100% 100%"}[e]??"0% 0%"}renderPrompt(){const e={choice:"Choice activity: pick what you want or what you see.",match:`Matching activity: find ${this.currentMatchCard?.label??"the picture"}.`,sequence:"Routine activity: tap steps to hear them and move them earlier.",puzzle:"Puzzle activity: choose a piece, then tap where it belongs."}[this.activeMode];return d`
      <div class="prompt-row">
        <div class="prompt">${e}</div>
        <button class="speak-button" @click=${()=>this.speak(e)}>Speak Prompt</button>
      </div>
    `}renderChoiceActivity(){return d`
      <div class="activity-grid">
        ${this.activityCards.map(e=>this.renderPhotoCard(e,()=>this.chooseCard(e),this.selectedCard?.id===e.id))}
      </div>
    `}renderMatchActivity(){return d`
      <div class="match-layout">
        <div class="target-panel">
          <div class="category">Find this picture</div>
          <div class="target-word">${this.currentMatchCard?.label??"All done"}</div>
          ${this.currentMatchCard?d`
            <img class="puzzle-image" src=${this.currentMatchCard.imageUrl} alt=${this.currentMatchCard.label} />
          `:d`<p>All matching cards are finished.</p>`}
        </div>
        <div class="activity-grid">
          ${this.activityCards.map(e=>this.renderPhotoCard(e,()=>this.tryMatch(e),this.matchedIds.includes(e.id),this.matchedIds.includes(e.id)))}
        </div>
      </div>
    `}renderSequenceActivity(){return d`
      <div class="sequence-list">
        ${this.routine.map((e,t)=>d`
          <div class="sequence-card">
            <div class="step-number">${t+1}</div>
            ${this.renderPhotoCard(e,()=>this.moveRoutineStep(t))}
          </div>
        `)}
      </div>
    `}renderPuzzleActivity(){const e=this.uploadedCards[0]?.imageUrl??this.dailyCards[1].imageUrl,t=`--puzzle-image: url("${e}")`;return d`
      <div class="puzzle-preview">
        <img src=${e} alt="Completed puzzle preview" />
        <div class="puzzle-preview-text">Look at the whole picture, then put the four pieces in the board.</div>
      </div>

      <div class="puzzle-workspace">
        <div class="puzzle-board" aria-label="Puzzle board">
          ${this.puzzleSlots.map(i=>{const o=this.placedPuzzlePieces[i];return d`
              <button
                class="puzzle-slot ${o?"filled":""}"
                @click=${()=>this.placePuzzlePiece(i)}
                aria-label="Puzzle spot ${i}"
              >
                ${o?d`
                  <div
                    class="puzzle-tile-image"
                    style="${t}; --puzzle-position: ${this.getPuzzlePosition(o)}"
                  ></div>
                `:d`Place Here`}
              </button>
            `})}
        </div>

        <div class="puzzle-tray" aria-label="Puzzle pieces">
          <div class="tray-title">Pieces</div>
          ${this.puzzlePieces.map(i=>{const o=Object.values(this.placedPuzzlePieces).includes(i);return d`
              <button
                class="puzzle-piece ${this.selectedPuzzlePiece===i?"selected":""} ${o?"used":""}"
                @click=${()=>this.selectPuzzlePiece(i)}
                aria-label="Puzzle piece ${i}"
              >
                <div
                  class="puzzle-tile-image"
                  style="${t}; --puzzle-position: ${this.getPuzzlePosition(i)}"
                ></div>
              </button>
            `})}
        </div>
      </div>
    `}renderPhotoCard(e,t,i=!1,o=!1){return d`
      <button class="photo-card ${i?"selected":""} ${o?"matched":""}" @click=${t}>
        <img src=${e.imageUrl} alt=${e.label} />
        <div class="card-copy">
          <div class="label">${e.label}</div>
          <div class="category">${e.category}</div>
        </div>
      </button>
    `}render(){return d`
      <div class="shell">
        <div class="topbar">
          <div>
            <h1>Activity Sessions</h1>
            <p class="subtitle">Photo choices, matching, routines, and puzzles with spoken support.</p>
          </div>
          <button class="reset-button" @click=${this.resetActivity}>Reset</button>
        </div>

        <div class="safety-strip">
          <button class="safety-button help" @click=${()=>this.speak("Help please.")}>Help</button>
          <button class="safety-button break" @click=${()=>this.speak("I need a break.")}>Break</button>
          <button class="safety-button again" @click=${()=>this.speak("Again please.")}>Again</button>
          <button class="safety-button done" @click=${()=>this.speak("All done.")}>All Done</button>
          <button class="safety-button stop" @click=${()=>this.speak("Stop.")}>Stop</button>
        </div>

        <section class="session-card" aria-label="Activity session">
          <div class="mode-tabs">
            <button class="mode-button ${this.activeMode==="choice"?"active":""}" @click=${()=>this.setMode("choice")}>Choice</button>
            <button class="mode-button ${this.activeMode==="match"?"active":""}" @click=${()=>this.setMode("match")}>Match</button>
            <button class="mode-button ${this.activeMode==="sequence"?"active":""}" @click=${()=>this.setMode("sequence")}>Routine</button>
            <button class="mode-button ${this.activeMode==="puzzle"?"active":""}" @click=${()=>this.setMode("puzzle")}>Puzzle</button>
          </div>

          ${this.renderPrompt()}

          ${this.activeMode==="choice"?this.renderChoiceActivity():""}
          ${this.activeMode==="match"?this.renderMatchActivity():""}
          ${this.activeMode==="sequence"?this.renderSequenceActivity():""}
          ${this.activeMode==="puzzle"?this.renderPuzzleActivity():""}
        </section>
      </div>
    `}};ee.styles=w`
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

    .safety-strip {
      display: grid;
      grid-template-columns: repeat(5, minmax(0, 1fr));
      gap: 0.55rem;
      margin-bottom: 1rem;
    }

    .safety-button,
    .mode-button,
    .speak-button,
    .reset-button {
      border: 0;
      border-radius: 0.5rem;
      cursor: pointer;
      font-weight: 800;
      min-height: 52px;
      box-shadow: 0 2px 8px rgba(25, 35, 50, 0.12);
    }

    .safety-button {
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
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 0.6rem;
      margin-bottom: 1rem;
    }

    .mode-button {
      background: #eef3f8;
      color: #243041;
      border: 2px solid transparent;
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
      border-radius: 0.5rem;
      border-left: 6px solid #2e8f74;
    }

    .prompt {
      font-size: 1.15rem;
      font-weight: 800;
      color: #1f463b;
    }

    .speak-button {
      background: #2e8f74;
      color: #ffffff;
      padding: 0.75rem 1rem;
    }

    .activity-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: 0.9rem;
    }

    .photo-card {
      display: grid;
      grid-template-rows: 132px auto;
      gap: 0;
      padding: 0;
      overflow: hidden;
      border: 3px solid #d8e0ea;
      border-radius: 0.5rem;
      background: #ffffff;
      cursor: pointer;
      min-height: 210px;
      text-align: left;
      box-shadow: 0 3px 10px rgba(30, 42, 58, 0.1);
    }

    .photo-card.selected,
    .photo-card.matched {
      border-color: #2e8f74;
      box-shadow: 0 0 0 4px rgba(46, 143, 116, 0.18);
    }

    .photo-card img,
    .puzzle-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      background: #dfe8f1;
    }

    .card-copy {
      padding: 0.75rem;
    }

    .label {
      font-size: 1.1rem;
      font-weight: 900;
      color: #243041;
      margin-bottom: 0.25rem;
    }

    .category {
      color: #687789;
      font-size: 0.9rem;
      font-weight: 700;
    }

    .match-layout {
      display: grid;
      grid-template-columns: minmax(180px, 0.7fr) 1.3fr;
      gap: 1rem;
    }

    .target-panel {
      background: #f8fafc;
      border: 2px dashed #9fb0c3;
      border-radius: 0.5rem;
      padding: 1rem;
      min-height: 260px;
    }

    .target-word {
      font-size: 1.8rem;
      font-weight: 900;
      color: #243041;
      margin: 1rem 0;
    }

    .sequence-list {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 0.85rem;
    }

    .sequence-card {
      position: relative;
    }

    .step-number {
      position: absolute;
      top: 0.5rem;
      left: 0.5rem;
      z-index: 1;
      width: 38px;
      height: 38px;
      border-radius: 50%;
      display: grid;
      place-items: center;
      background: #243041;
      color: #ffffff;
      font-weight: 900;
    }

    .puzzle-workspace {
      display: grid;
      grid-template-columns: minmax(260px, 420px) 1fr;
      gap: 1rem;
      align-items: start;
    }

    .puzzle-board {
      display: grid;
      grid-template-columns: repeat(2, minmax(120px, 1fr));
      gap: 0.35rem;
      padding: 0.5rem;
      background: #e8edf3;
      border: 3px solid #9fb0c3;
      border-radius: 0.5rem;
      aspect-ratio: 1;
      max-width: 420px;
      width: 100%;
    }

    .puzzle-slot {
      position: relative;
      display: grid;
      place-items: center;
      border: 3px dashed #8da0b5;
      border-radius: 0.35rem;
      background: #f8fafc;
      color: #687789;
      cursor: pointer;
      overflow: hidden;
      min-height: 120px;
      font-weight: 900;
    }

    .puzzle-slot.filled {
      border-style: solid;
      border-color: #2e8f74;
      background: #ffffff;
    }

    .puzzle-tray {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 0.75rem;
      padding: 0.75rem;
      background: #f8fafc;
      border: 1px solid #d8e0ea;
      border-radius: 0.5rem;
    }

    .tray-title {
      grid-column: 1 / -1;
      color: #243041;
      font-weight: 900;
    }

    .puzzle-piece {
      position: relative;
      border: 3px solid #d8e0ea;
      padding: 0;
      aspect-ratio: 1;
      overflow: hidden;
      border-radius: 0.5rem;
      cursor: pointer;
      background: #ffffff;
      box-shadow: 0 3px 12px rgba(30, 42, 58, 0.14);
    }

    .puzzle-piece.selected {
      border-color: #2e8f74;
      box-shadow: 0 0 0 5px rgba(46, 143, 116, 0.2);
    }

    .puzzle-piece.used {
      opacity: 0.35;
      cursor: default;
    }

    .puzzle-tile-image {
      width: 100%;
      height: 100%;
      background-image: var(--puzzle-image);
      background-size: 200% 200%;
      background-position: var(--puzzle-position);
      background-repeat: no-repeat;
    }

    .puzzle-preview {
      grid-column: 1 / -1;
      display: grid;
      grid-template-columns: 88px 1fr;
      gap: 0.75rem;
      align-items: center;
      margin-bottom: 0.75rem;
      padding: 0.75rem;
      background: #edf7f4;
      border-radius: 0.5rem;
    }

    .puzzle-preview img {
      width: 88px;
      height: 88px;
      object-fit: cover;
      border-radius: 0.4rem;
    }

    .puzzle-preview-text {
      color: #1f463b;
      font-weight: 900;
    }

    .reset-button {
      background: #e8edf3;
      color: #243041;
      padding: 0.7rem 1rem;
      margin-top: 1rem;
    }

    @media (max-width: 760px) {
      .topbar,
      .prompt-row,
      .match-layout {
        grid-template-columns: 1fr;
      }

      .safety-strip {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .mode-tabs,
      .sequence-list {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .puzzle-workspace {
        grid-template-columns: 1fr;
      }

      h1 {
        font-size: 1.55rem;
      }
    }
  `;be([g()],ee.prototype,"activeMode",2);be([g()],ee.prototype,"selectedCard",2);be([g()],ee.prototype,"matchTarget",2);be([g()],ee.prototype,"matchedIds",2);be([g()],ee.prototype,"routine",2);be([g()],ee.prototype,"puzzlePieces",2);be([g()],ee.prototype,"selectedPuzzlePiece",2);be([g()],ee.prototype,"placedPuzzlePieces",2);be([g()],ee.prototype,"uploadedCards",2);ee=be([O("app-family-puzzle")],ee);var ln=Object.defineProperty,cn=Object.getOwnPropertyDescriptor,Qe=(e,t,i,o)=>{for(var s=o>1?void 0:o?cn(t,i):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(s=(o?a(t,i,s):a(s))||s);return o&&s&&ln(t,i,s),s};let xe=class extends z{constructor(){super(...arguments),this.foods=[{id:"chicken",name:"Chicken",imageUrl:"https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=700&q=85"},{id:"noodles",name:"Noodles",imageUrl:"https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=700&q=85"},{id:"rice",name:"Rice",imageUrl:"https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=700&q=85"},{id:"cereal",name:"Cereal",imageUrl:"https://images.unsplash.com/photo-1521483451569-e33803c0330c?auto=format&fit=crop&w=700&q=85"},{id:"bread",name:"Bread",imageUrl:"https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=85"},{id:"potatoes",name:"Potatoes",imageUrl:"https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=700&q=85"},{id:"donut",name:"Donut",imageUrl:"https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=700&q=85"},{id:"candy",name:"Candy",imageUrl:"https://images.unsplash.com/photo-1581798459219-318e76aecc7b?auto=format&fit=crop&w=700&q=85"},{id:"juice",name:"Juice",imageUrl:"https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=700&q=85"},{id:"water",name:"Water",imageUrl:"https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=700&q=85"},{id:"apple",name:"Apple",imageUrl:"https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=700&q=85"},{id:"banana",name:"Banana",imageUrl:"https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=700&q=85"}],this.selectedFood=null,this.tabs=[],this.activeTabId=null,this.showNewTabModal=!1,this.newTabName="",this.premiumManager=K.getInstance(),this.DEFAULT_TAB_ID="default",this.TABS_STORAGE_KEY="caydenjoy_foods_tabs"}connectedCallback(){super.connectedCallback(),this.loadTabs()}normalizeFood(e,t){return{id:String(e?.id??t.id),name:String(e?.name??t.name),imageUrl:String(e?.imageUrl??t.imageUrl)}}loadTabs(){try{const e=localStorage.getItem(this.TABS_STORAGE_KEY);if(e){const t=JSON.parse(e);this.tabs=t.tabs.map(i=>({...i,foods:i.foods.map((o,s)=>this.normalizeFood(o,this.foods[s]??this.foods[0]))})),this.activeTabId=t.activeTabId}else this.initializeDefaultTab()}catch(e){console.error("Error loading tabs:",e),this.initializeDefaultTab()}}initializeDefaultTab(){this.tabs=[{id:this.DEFAULT_TAB_ID,name:"Foods",foods:[...this.foods],createdAt:Date.now()}],this.activeTabId=this.DEFAULT_TAB_ID,this.saveTabs()}saveTabs(){localStorage.setItem(this.TABS_STORAGE_KEY,JSON.stringify({tabs:this.tabs,activeTabId:this.activeTabId}))}getActiveTab(){return this.tabs.find(e=>e.id===this.activeTabId)}switchTab(e){this.activeTabId=e,this.selectedFood=null,this.saveTabs()}createNewTab(){if(!this.newTabName.trim()){alert("Please enter a tab name");return}const e={id:`tab-${Date.now()}`,name:this.newTabName.trim(),foods:[...this.foods],createdAt:Date.now()};this.tabs=[...this.tabs,e],this.activeTabId=e.id,this.selectedFood=null,this.showNewTabModal=!1,this.newTabName="",this.saveTabs()}render(){const e=this.premiumManager.canAddAdditionalTabs(),t=this.getActiveTab()?.foods??this.foods;return d`
      <div class="container">
        <h1>Foods</h1>
        <p class="subtitle">Detailed real food photos for recognition and choice-making.</p>
        ${this.selectedFood?d`<div class="selected-card"><img src=${this.selectedFood.imageUrl} alt=${this.selectedFood.name} /><div class="selected-name">${this.selectedFood.name}</div></div>`:""}
        ${e?d`<div class="tabs-container">${this.tabs.map(i=>d`<button class="tab-button ${i.id===this.activeTabId?"active":""}" @click=${()=>this.switchTab(i.id)}>${i.name}</button>`)}<button class="add-tab-btn" @click=${()=>this.showNewTabModal=!0}>New Tab</button></div>`:""}
        <div class="photo-grid">${t.map(i=>d`<button class="photo-button" @click=${()=>this.selectedFood=i}><img src=${i.imageUrl} alt=${i.name} /><div class="photo-name">${i.name}</div></button>`)}</div>
      </div>
      ${this.showNewTabModal?d`<div class="modal-overlay" @click=${()=>this.showNewTabModal=!1}><div class="modal" @click=${i=>i.stopPropagation()}><div class="modal-header">Create New Tab</div><input class="modal-input" placeholder="Enter tab name" .value=${this.newTabName} @input=${i=>this.newTabName=i.target.value} @keydown=${i=>i.key==="Enter"?this.createNewTab():i.key==="Escape"?this.showNewTabModal=!1:void 0} autofocus /><div class="modal-buttons"><button class="modal-btn modal-btn-secondary" @click=${()=>this.showNewTabModal=!1}>Cancel</button><button class="modal-btn modal-btn-primary" @click=${this.createNewTab}>Create Tab</button></div></div></div>`:""}
    `}};xe.styles=w`
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
    .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 1000; }
    .modal { width: 90%; max-width: 500px; padding: 1.5rem; border-radius: 0.5rem; background: #fff; box-shadow: 0 20px 60px rgba(0,0,0,0.3); }
    .modal-header { margin-bottom: 1rem; font-size: 1.35rem; font-weight: 900; color: #243041; }
    .modal-input { width: 100%; box-sizing: border-box; margin-bottom: 1rem; padding: 0.85rem; border: 2px solid #c9d4e1; border-radius: 0.4rem; font-size: 1rem; }
    .modal-buttons { display: flex; gap: 0.75rem; justify-content: flex-end; }
    .modal-btn-secondary { border: 0; background: #e8edf3; color: #243041; }
    @media (max-width: 640px) { :host { padding: 0.8rem; } h1 { font-size: 1.55rem; } .photo-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.65rem; } .photo-button { grid-template-rows: 116px auto; min-height: 190px; } .selected-card { grid-template-columns: 1fr; } .selected-card img { width: 100%; height: 160px; } }
  `;Qe([g()],xe.prototype,"foods",2);Qe([g()],xe.prototype,"selectedFood",2);Qe([g()],xe.prototype,"tabs",2);Qe([g()],xe.prototype,"activeTabId",2);Qe([g()],xe.prototype,"showNewTabModal",2);Qe([g()],xe.prototype,"newTabName",2);xe=Qe([O("app-foods-enhanced")],xe);var dn=Object.defineProperty,un=Object.getOwnPropertyDescriptor,ps=(e,t,i,o)=>{for(var s=o>1?void 0:o?un(t,i):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(s=(o?a(t,i,s):a(s))||s);return o&&s&&dn(t,i,s),s};let si=class extends z{constructor(){super(...arguments),this.accessibilityManager=de.getInstance(),this.buttons=[{id:"yes",label:"YES",emoji:"✅",color:"#00B894"},{id:"no",label:"NO",emoji:"❌",color:"#E17055"},{id:"stop",label:"STOP",emoji:"🛑",color:"#D63031"},{id:"food",label:"FOOD",emoji:"🍽️",color:"#FDCB6E"},{id:"tv",label:"TV",emoji:"📺",color:"#0984E3"}]}handleButtonClick(e){this.accessibilityManager.playSound("click"),this.accessibilityManager.speakNow(e.label,1)}render(){return d`
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
    `}};si.styles=w`
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
  `;ps([g()],si.prototype,"buttons",2);si=ps([O("app-home-enhanced")],si);var hn=Object.defineProperty,pn=Object.getOwnPropertyDescriptor,Ze=(e,t,i,o)=>{for(var s=o>1?void 0:o?pn(t,i):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(s=(o?a(t,i,s):a(s))||s);return o&&s&&hn(t,i,s),s};let _e=class extends z{constructor(){super(...arguments),this.colors=[{id:"red",name:"Red",hex:"#c0392b",example:"red strawberries",imageUrl:"https://loremflickr.com/700/500/red,strawberries/all"},{id:"blue",name:"Blue",hex:"#1976a2",example:"blue water",imageUrl:"https://loremflickr.com/700/500/blue,water/all"},{id:"green",name:"Green",hex:"#2e7d32",example:"green leaves",imageUrl:"https://loremflickr.com/700/500/green,leaves/all"},{id:"yellow",name:"Yellow",hex:"#c99700",example:"yellow lemon",imageUrl:"https://loremflickr.com/700/500/yellow,lemon/all"},{id:"purple",name:"Purple",hex:"#6b4fa3",example:"purple lavender",imageUrl:"https://loremflickr.com/700/500/purple,lavender/all"},{id:"pink",name:"Pink",hex:"#c04d86",example:"pink rose",imageUrl:"https://loremflickr.com/700/500/pink,rose/all"},{id:"orange",name:"Orange",hex:"#d66a1f",example:"orange fruit",imageUrl:"https://loremflickr.com/700/500/orange,fruit/all"},{id:"brown",name:"Brown",hex:"#795548",example:"brown wood",imageUrl:"https://loremflickr.com/700/500/brown,wood/all"},{id:"black",name:"Black",hex:"#20252b",example:"black shirt",imageUrl:"https://loremflickr.com/700/500/black,shirt/all"},{id:"white",name:"White",hex:"#f4f6f8",example:"white towel",imageUrl:"https://loremflickr.com/700/500/white,towel/all"}],this.selectedColor=null,this.tabs=[],this.activeTabId=null,this.showNewTabModal=!1,this.newTabName="",this.premiumManager=K.getInstance(),this.DEFAULT_TAB_ID="default",this.TABS_STORAGE_KEY="caydenjoy_colors_tabs"}connectedCallback(){super.connectedCallback(),this.loadTabs()}normalizeColor(e,t){return{id:String(e?.id??t.id),name:String(e?.name??t.name),hex:String(e?.hex??t.hex),imageUrl:t.imageUrl,example:t.example}}loadTabs(){try{const e=localStorage.getItem(this.TABS_STORAGE_KEY);if(e){const t=JSON.parse(e);this.tabs=t.tabs.map(i=>({...i,colors:i.colors.map((o,s)=>this.normalizeColor(o,this.colors[s]??this.colors[0]))})),this.activeTabId=t.activeTabId}else this.initializeDefaultTab()}catch(e){console.error("Error loading tabs:",e),this.initializeDefaultTab()}}initializeDefaultTab(){this.tabs=[{id:this.DEFAULT_TAB_ID,name:"Colors",colors:[...this.colors],createdAt:Date.now()}],this.activeTabId=this.DEFAULT_TAB_ID,this.saveTabs()}saveTabs(){localStorage.setItem(this.TABS_STORAGE_KEY,JSON.stringify({tabs:this.tabs,activeTabId:this.activeTabId}))}getActiveTab(){return this.tabs.find(e=>e.id===this.activeTabId)}switchTab(e){this.activeTabId=e,this.selectedColor=null,this.saveTabs()}createNewTab(){if(!this.newTabName.trim()){alert("Please enter a tab name");return}const e={id:`tab-${Date.now()}`,name:this.newTabName.trim(),colors:[...this.colors],createdAt:Date.now()};this.tabs=[...this.tabs,e],this.activeTabId=e.id,this.selectedColor=null,this.showNewTabModal=!1,this.newTabName="",this.saveTabs()}render(){const e=this.premiumManager.canAddAdditionalTabs(),t=this.getActiveTab()?.colors??this.colors;return d`
      <div class="container">
        <h1>Colors</h1>
        <p class="subtitle">Real objects help connect colors to daily life.</p>
        ${this.selectedColor?d`<div class="selected-card" style="--selected-color: ${this.selectedColor.hex}"><img src=${this.selectedColor.imageUrl} alt=${this.selectedColor.example} /><div><div class="selected-name">${this.selectedColor.name}</div><div class="selected-example">${this.selectedColor.example}</div></div></div>`:""}
        ${e?d`<div class="tabs-container">${this.tabs.map(i=>d`<button class="tab-button ${i.id===this.activeTabId?"active":""}" @click=${()=>this.switchTab(i.id)}>${i.name}</button>`)}<button class="add-tab-btn" @click=${()=>this.showNewTabModal=!0}>New Tab</button></div>`:""}
        <div class="photo-grid">${t.map(i=>d`<button class="photo-button" style="--color: ${i.hex}" @click=${()=>this.selectedColor=i}><img src=${i.imageUrl} alt=${i.example} /><div class="color-strip" aria-hidden="true"></div><div class="card-copy"><div class="photo-name">${i.name}</div><div class="photo-example">${i.example}</div></div></button>`)}</div>
      </div>
      ${this.showNewTabModal?d`<div class="modal-overlay" @click=${()=>this.showNewTabModal=!1}><div class="modal" @click=${i=>i.stopPropagation()}><div class="modal-header">Create New Tab</div><input class="modal-input" placeholder="Enter tab name" .value=${this.newTabName} @input=${i=>this.newTabName=i.target.value} @keydown=${i=>i.key==="Enter"?this.createNewTab():i.key==="Escape"?this.showNewTabModal=!1:void 0} autofocus /><div class="modal-buttons"><button class="modal-btn modal-btn-secondary" @click=${()=>this.showNewTabModal=!1}>Cancel</button><button class="modal-btn modal-btn-primary" @click=${this.createNewTab}>Create Tab</button></div></div></div>`:""}
    `}};_e.styles=w`
    :host { display: block; min-height: 100vh; padding: 1.25rem; background: #f6f8fb; color: #243041; }
    .container { max-width: 1180px; margin: 0 auto; }
    h1 { margin: 0 0 0.35rem; color: #243041; font-size: 2rem; }
    .subtitle { margin: 0 0 1rem; color: #596779; }
    .selected-card { display: grid; grid-template-columns: 170px 1fr; gap: 1rem; align-items: center; margin-bottom: 1rem; padding: 0.75rem; background: #fff; border-left: 12px solid var(--selected-color); border-radius: 0.5rem; box-shadow: 0 4px 16px rgba(30,42,58,0.12); }
    .selected-card img { width: 170px; height: 115px; object-fit: cover; border-radius: 0.4rem; }
    .selected-name { font-size: 1.65rem; font-weight: 900; color: #243041; }
    .selected-example { color: #596779; font-weight: 800; }
    .photo-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 0.9rem; margin-bottom: 1.5rem; }
    .photo-button { display: grid; grid-template-rows: 145px 18px auto; min-height: 248px; padding: 0; overflow: hidden; border: 3px solid #d8e0ea; border-radius: 0.5rem; background: #fff; cursor: pointer; text-align: left; box-shadow: 0 3px 12px rgba(30,42,58,0.12); }
    .photo-button:hover, .photo-button:focus-visible { outline: 4px solid rgba(46,143,116,0.22); border-color: #2e8f74; }
    .photo-button img { width: 100%; height: 100%; object-fit: cover; background: #dfe8f1; }
    .color-strip { background: var(--color); border-top: 1px solid rgba(36,48,65,0.14); border-bottom: 1px solid rgba(36,48,65,0.14); }
    .card-copy { padding: 0.8rem; }
    .photo-name { font-size: 1.15rem; font-weight: 900; color: #243041; }
    .photo-example { margin-top: 0.25rem; color: #657386; font-size: 0.9rem; font-weight: 800; }
    .tabs-container { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1rem; padding: 0.55rem; background: #e8edf3; border-radius: 0.5rem; }
    .tab-button, .add-tab-btn, .modal-btn { border-radius: 0.4rem; cursor: pointer; font-weight: 800; min-height: 44px; }
    .tab-button { border: 2px solid #c9d4e1; background: #fff; color: #243041; }
    .tab-button.active { background: #243041; border-color: #243041; color: #fff; }
    .add-tab-btn, .modal-btn-primary { border: 0; background: #2e8f74; color: #fff; }
    .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 1000; }
    .modal { width: 90%; max-width: 500px; padding: 1.5rem; border-radius: 0.5rem; background: #fff; box-shadow: 0 20px 60px rgba(0,0,0,0.3); }
    .modal-header { margin-bottom: 1rem; font-size: 1.35rem; font-weight: 900; color: #243041; }
    .modal-input { width: 100%; box-sizing: border-box; margin-bottom: 1rem; padding: 0.85rem; border: 2px solid #c9d4e1; border-radius: 0.4rem; font-size: 1rem; }
    .modal-buttons { display: flex; gap: 0.75rem; justify-content: flex-end; }
    .modal-btn-secondary { border: 0; background: #e8edf3; color: #243041; }
    @media (max-width: 640px) { :host { padding: 0.8rem; } h1 { font-size: 1.55rem; } .photo-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.65rem; } .photo-button { grid-template-rows: 116px 16px auto; min-height: 220px; } .selected-card { grid-template-columns: 1fr; } .selected-card img { width: 100%; height: 160px; } }
  `;Ze([g()],_e.prototype,"colors",2);Ze([g()],_e.prototype,"selectedColor",2);Ze([g()],_e.prototype,"tabs",2);Ze([g()],_e.prototype,"activeTabId",2);Ze([g()],_e.prototype,"showNewTabModal",2);Ze([g()],_e.prototype,"newTabName",2);_e=Ze([O("app-colors")],_e);var mn=Object.defineProperty,fn=Object.getOwnPropertyDescriptor,et=(e,t,i,o)=>{for(var s=o>1?void 0:o?fn(t,i):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(s=(o?a(t,i,s):a(s))||s);return o&&s&&mn(t,i,s),s};const Uo=["https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=700&q=85","https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=700&q=85","https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=700&q=85","https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=700&q=85","https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=700&q=85","https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=700&q=85","https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=700&q=85","https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=700&q=85","https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=700&q=85","https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=700&q=85"];let ke=class extends z{constructor(){super(...arguments),this.numbers=Array.from({length:20},(e,t)=>({id:`num-${t+1}`,number:t+1,label:`${t+1} item${t===0?"":"s"}`,imageUrl:Uo[t%Uo.length]})),this.selectedNumber=null,this.tabs=[],this.activeTabId=null,this.showNewTabModal=!1,this.newTabName="",this.premiumManager=K.getInstance(),this.DEFAULT_TAB_ID="default",this.TABS_STORAGE_KEY="caydenjoy_numbers_tabs"}connectedCallback(){super.connectedCallback(),this.loadTabs()}normalizeNumber(e,t){return{id:String(e?.id??t.id),number:Number(e?.number??t.number),label:String(e?.label??`${e?.number??t.number} item${Number(e?.number??t.number)===1?"":"s"}`),imageUrl:String(e?.imageUrl??t.imageUrl)}}loadTabs(){try{const e=localStorage.getItem(this.TABS_STORAGE_KEY);if(e){const t=JSON.parse(e);this.tabs=t.tabs.map(i=>({...i,numbers:i.numbers.map((o,s)=>this.normalizeNumber(o,this.numbers[s]??this.numbers[0]))})),this.activeTabId=t.activeTabId}else this.initializeDefaultTab()}catch(e){console.error("Error loading tabs:",e),this.initializeDefaultTab()}}initializeDefaultTab(){this.tabs=[{id:this.DEFAULT_TAB_ID,name:"Numbers",numbers:[...this.numbers],createdAt:Date.now()}],this.activeTabId=this.DEFAULT_TAB_ID,this.saveTabs()}saveTabs(){localStorage.setItem(this.TABS_STORAGE_KEY,JSON.stringify({tabs:this.tabs,activeTabId:this.activeTabId}))}getActiveTab(){return this.tabs.find(e=>e.id===this.activeTabId)}switchTab(e){this.activeTabId=e,this.selectedNumber=null,this.saveTabs()}createNewTab(){if(!this.newTabName.trim()){alert("Please enter a tab name");return}const e={id:`tab-${Date.now()}`,name:this.newTabName.trim(),numbers:[...this.numbers],createdAt:Date.now()};this.tabs=[...this.tabs,e],this.activeTabId=e.id,this.selectedNumber=null,this.showNewTabModal=!1,this.newTabName="",this.saveTabs()}render(){const e=this.premiumManager.canAddAdditionalTabs(),t=this.getActiveTab()?.numbers??this.numbers;return d`
      <div class="container">
        <h1>Numbers</h1>
        <p class="subtitle">Numbers shown with real quantity photos and clear number badges.</p>
        ${this.selectedNumber?d`<div class="selected-card"><img src=${this.selectedNumber.imageUrl} alt=${this.selectedNumber.label} /><div><div class="selected-value">${this.selectedNumber.number}</div><div class="selected-label">${this.selectedNumber.label}</div></div></div>`:""}
        ${e?d`<div class="tabs-container">${this.tabs.map(i=>d`<button class="tab-button ${i.id===this.activeTabId?"active":""}" @click=${()=>this.switchTab(i.id)}>${i.name}</button>`)}<button class="add-tab-btn" @click=${()=>this.showNewTabModal=!0}>New Tab</button></div>`:""}
        <div class="number-grid">${t.map(i=>d`<button class="number-button" @click=${()=>this.selectedNumber=i}><span class="number-badge">${i.number}</span><img src=${i.imageUrl} alt=${i.label} /><div class="card-copy"><div class="number-name">${i.number}</div><div class="number-label">${i.label}</div></div></button>`)}</div>
      </div>
      ${this.showNewTabModal?d`<div class="modal-overlay" @click=${()=>this.showNewTabModal=!1}><div class="modal" @click=${i=>i.stopPropagation()}><div class="modal-header">Create New Tab</div><input class="modal-input" placeholder="Enter tab name" .value=${this.newTabName} @input=${i=>this.newTabName=i.target.value} @keydown=${i=>i.key==="Enter"?this.createNewTab():i.key==="Escape"?this.showNewTabModal=!1:void 0} autofocus /><div class="modal-buttons"><button class="modal-btn modal-btn-secondary" @click=${()=>this.showNewTabModal=!1}>Cancel</button><button class="modal-btn modal-btn-primary" @click=${this.createNewTab}>Create Tab</button></div></div></div>`:""}
    `}};ke.styles=w`
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
    .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 1000; }
    .modal { width: 90%; max-width: 500px; padding: 1.5rem; border-radius: 0.5rem; background: #fff; box-shadow: 0 20px 60px rgba(0,0,0,0.3); }
    .modal-header { margin-bottom: 1rem; font-size: 1.35rem; font-weight: 900; color: #243041; }
    .modal-input { width: 100%; box-sizing: border-box; margin-bottom: 1rem; padding: 0.85rem; border: 2px solid #c9d4e1; border-radius: 0.4rem; font-size: 1rem; }
    .modal-buttons { display: flex; gap: 0.75rem; justify-content: flex-end; }
    .modal-btn-secondary { border: 0; background: #e8edf3; color: #243041; }
    @media (max-width: 640px) { :host { padding: 0.8rem; } h1 { font-size: 1.55rem; } .number-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.65rem; } .number-button { grid-template-rows: 112px auto; min-height: 198px; } .selected-card { grid-template-columns: 1fr; } .selected-card img { width: 100%; height: 160px; } }
  `;et([g()],ke.prototype,"numbers",2);et([g()],ke.prototype,"selectedNumber",2);et([g()],ke.prototype,"tabs",2);et([g()],ke.prototype,"activeTabId",2);et([g()],ke.prototype,"showNewTabModal",2);et([g()],ke.prototype,"newTabName",2);ke=et([O("app-numbers")],ke);var gn=Object.defineProperty,bn=Object.getOwnPropertyDescriptor,tt=(e,t,i,o)=>{for(var s=o>1?void 0:o?bn(t,i):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(s=(o?a(t,i,s):a(s))||s);return o&&s&&gn(t,i,s),s};let $e=class extends z{constructor(){super(...arguments),this.places=[{id:"home",name:"Home",phrase:"I want to go home.",color:"#c0392b",imageUrl:"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=700&q=85"},{id:"school",name:"School",phrase:"I am going to school.",color:"#1f7a8c",imageUrl:"https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=700&q=85"},{id:"park",name:"Park",phrase:"I want to go to the park.",color:"#2e7d32",imageUrl:"https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=700&q=85"},{id:"store",name:"Store",phrase:"We are going to the store.",color:"#9a6a12",imageUrl:"https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=700&q=85"},{id:"doctor",name:"Doctor",phrase:"We are going to the doctor.",color:"#6b5b95",imageUrl:"https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=700&q=85"},{id:"beach",name:"Beach",phrase:"I want to go to the beach.",color:"#1976a2",imageUrl:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=85"},{id:"restaurant",name:"Restaurant",phrase:"We are going to a restaurant.",color:"#b65f1f",imageUrl:"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=700&q=85"},{id:"library",name:"Library",phrase:"We are going to the library.",color:"#795548",imageUrl:"https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=700&q=85"},{id:"zoo",name:"Zoo",phrase:"I want to go to the zoo.",color:"#2e7d32",imageUrl:"https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=700&q=90"},{id:"therapy",name:"Therapy",phrase:"I am going to therapy.",color:"#4f7f8f",imageUrl:"https://images.unsplash.com/photo-1576765607924-0f4d9a1d563b?auto=format&fit=crop&w=700&q=85"},{id:"playground",name:"Playground",phrase:"I want to go to the playground.",color:"#7a4fb0",imageUrl:"https://images.unsplash.com/photo-1596997000103-e597b3ca50df?auto=format&fit=crop&w=700&q=85"}],this.selectedPlace=null,this.tabs=[],this.activeTabId=null,this.showNewTabModal=!1,this.newTabName="",this.premiumManager=K.getInstance(),this.DEFAULT_TAB_ID="default",this.TABS_STORAGE_KEY="caydenjoy_places_tabs"}connectedCallback(){super.connectedCallback(),this.loadTabs()}normalizePlace(e,t){const i=String(e?.id??t.id),o=this.places.find(s=>s.id===i)??t;return{id:i,name:String(e?.name??o.name),phrase:String(e?.phrase??o.phrase),color:String(e?.color??o.color),imageUrl:o.imageUrl}}loadTabs(){try{const e=localStorage.getItem(this.TABS_STORAGE_KEY);if(e){const t=JSON.parse(e);this.tabs=t.tabs.map(i=>({...i,places:i.places.map((o,s)=>this.normalizePlace(o,this.places[s]??this.places[0]))})),this.activeTabId=t.activeTabId}else this.initializeDefaultTab()}catch(e){console.error("Error loading tabs:",e),this.initializeDefaultTab()}}initializeDefaultTab(){this.tabs=[{id:this.DEFAULT_TAB_ID,name:"Places",places:[...this.places],createdAt:Date.now()}],this.activeTabId=this.DEFAULT_TAB_ID,this.saveTabs()}saveTabs(){localStorage.setItem(this.TABS_STORAGE_KEY,JSON.stringify({tabs:this.tabs,activeTabId:this.activeTabId}))}getActiveTab(){return this.tabs.find(e=>e.id===this.activeTabId)}switchTab(e){this.activeTabId=e,this.selectedPlace=null,this.saveTabs()}createNewTab(){if(!this.newTabName.trim()){alert("Please enter a tab name");return}const e={id:`tab-${Date.now()}`,name:this.newTabName.trim(),places:[...this.places],createdAt:Date.now()};this.tabs=[...this.tabs,e],this.activeTabId=e.id,this.selectedPlace=null,this.showNewTabModal=!1,this.newTabName="",this.saveTabs()}render(){const e=this.premiumManager.canAddAdditionalTabs(),t=this.getActiveTab()?.places??this.places;return d`
      <div class="container">
        <h1>Places</h1>
        <p class="subtitle">Real place photos for daily routines and transitions.</p>
        ${this.selectedPlace?d`<div class="selected-card" style="--place-color: ${this.selectedPlace.color}"><img src=${this.selectedPlace.imageUrl} alt=${this.selectedPlace.name} /><div><div class="selected-name">${this.selectedPlace.name}</div><div class="selected-phrase">${this.selectedPlace.phrase}</div></div></div>`:""}
        ${e?d`<div class="tabs-container">${this.tabs.map(i=>d`<button class="tab-button ${i.id===this.activeTabId?"active":""}" @click=${()=>this.switchTab(i.id)}>${i.name}</button>`)}<button class="add-tab-btn" @click=${()=>this.showNewTabModal=!0}>New Tab</button></div>`:""}
        <div class="place-grid">${t.map(i=>d`<button class="place-button" style="--place-color: ${i.color}" @click=${()=>this.selectedPlace=i}><img src=${i.imageUrl} alt=${i.name} /><div class="card-copy"><div class="place-name">${i.name}</div><div class="place-phrase">${i.phrase}</div></div></button>`)}</div>
      </div>
      ${this.showNewTabModal?d`<div class="modal-overlay" @click=${()=>this.showNewTabModal=!1}><div class="modal" @click=${i=>i.stopPropagation()}><div class="modal-header">Create New Tab</div><input class="modal-input" placeholder="Enter tab name" .value=${this.newTabName} @input=${i=>this.newTabName=i.target.value} @keydown=${i=>i.key==="Enter"?this.createNewTab():i.key==="Escape"?this.showNewTabModal=!1:void 0} autofocus /><div class="modal-buttons"><button class="modal-btn modal-btn-secondary" @click=${()=>this.showNewTabModal=!1}>Cancel</button><button class="modal-btn modal-btn-primary" @click=${this.createNewTab}>Create Tab</button></div></div></div>`:""}
    `}};$e.styles=w`
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
    .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 1000; }
    .modal { width: 90%; max-width: 500px; padding: 1.5rem; border-radius: 0.5rem; background: #fff; box-shadow: 0 20px 60px rgba(0,0,0,0.3); }
    .modal-header { margin-bottom: 1rem; font-size: 1.35rem; font-weight: 900; color: #243041; }
    .modal-input { width: 100%; box-sizing: border-box; margin-bottom: 1rem; padding: 0.85rem; border: 2px solid #c9d4e1; border-radius: 0.4rem; font-size: 1rem; }
    .modal-buttons { display: flex; gap: 0.75rem; justify-content: flex-end; }
    .modal-btn-secondary { border: 0; background: #e8edf3; color: #243041; }
    @media (max-width: 640px) { :host { padding: 0.8rem; } h1 { font-size: 1.55rem; } .place-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.65rem; } .place-button { grid-template-rows: 116px auto; min-height: 210px; } .selected-card { grid-template-columns: 1fr; } .selected-card img { width: 100%; height: 160px; } }
  `;tt([g()],$e.prototype,"places",2);tt([g()],$e.prototype,"selectedPlace",2);tt([g()],$e.prototype,"tabs",2);tt([g()],$e.prototype,"activeTabId",2);tt([g()],$e.prototype,"showNewTabModal",2);tt([g()],$e.prototype,"newTabName",2);$e=tt([O("app-places")],$e);var vn=Object.defineProperty,yn=Object.getOwnPropertyDescriptor,wt=(e,t,i,o)=>{for(var s=o>1?void 0:o?yn(t,i):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(s=(o?a(t,i,s):a(s))||s);return o&&s&&vn(t,i,s),s};let Le=class extends z{constructor(){super(...arguments),this.isPremium=!1,this.activeTier="none",this.selectedTier="learning",this.showPurchaseConfirm=!1,this.purchaseMessage="",this.premiumManager=K.getInstance(),this.tiers=[{id:"family",name:"Family Photos",price:"$39.99",summary:"Personalize the app with real pictures.",bestFor:"Families who mainly need custom photos.",features:["Upload custom images","Organize photos by category","Use real family, food, toy, and place pictures","Local device storage"]},{id:"learning",name:"Learning Plus",price:"$99.99",summary:"Adds organization and backup tools.",bestFor:"Home practice, therapy sessions, and school routines.",features:["Everything in Family Photos","Additional custom tabs","Export and import custom image backups","Better setup for activity sessions"]},{id:"allAccess",name:"All Access",price:"$149.99",summary:"Full feature access for serious long-term use.",bestFor:"Caregivers, therapy teams, and multi-context use.",features:["Everything in Learning Plus","Voice customization access","All current premium features","Future premium feature updates","Priority support"]}]}connectedCallback(){super.connectedCallback(),this.refreshPremiumState()}refreshPremiumState(){this.isPremium=this.premiumManager.isPremium(),this.activeTier=this.premiumManager.getTier(),this.activeTier!=="none"&&(this.selectedTier=this.activeTier)}get selectedTierOption(){return this.tiers.find(e=>e.id===this.selectedTier)??this.tiers[1]}selectTier(e){e!=="none"&&(this.selectedTier=e)}openPurchaseConfirm(){this.showPurchaseConfirm=!0}cancelPurchase(){this.showPurchaseConfirm=!1}confirmPurchase(){this.premiumManager.simulatePremiumPurchase(this.selectedTier),this.refreshPremiumState(),this.showPurchaseConfirm=!1,this.purchaseMessage=`${this.selectedTierOption.name} is active.`}render(){const e=this.selectedTierOption;return d`
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
                <div class="tier-price">${t.price}</div>
                <div class="one-time">one-time purchase</div>
              </div>
              <div class="tier-summary">${t.summary}</div>
              <div class="best-for">${t.bestFor}</div>
              <ul>
                ${t.features.map(i=>d`<li>${i}</li>`)}
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
          <a class="secondary-button" href=${f("upgrade")}>Use Upgrade Code</a>
          <a class="secondary-button" href=${f("settings")}>Later</a>
          <div class="note">
            In production, this will connect to Google Play Billing. In this build it simulates the selected tier so the feature gates can be tested.
          </div>
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
            <p><strong>${e.name}</strong> will be unlocked for ${e.price} in this simulated test purchase.</p>
            <p class="note">This is not a real charge. It verifies the premium flow inside the app.</p>
            <div class="modal-buttons">
              <button class="confirm-button" @click=${this.confirmPurchase}>Confirm</button>
              <button class="secondary-button" @click=${this.cancelPurchase}>Cancel</button>
            </div>
          </div>
        </div>
      `:""}
    `}};Le.styles=w`
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
  `;wt([g()],Le.prototype,"isPremium",2);wt([g()],Le.prototype,"activeTier",2);wt([g()],Le.prototype,"selectedTier",2);wt([g()],Le.prototype,"showPurchaseConfirm",2);wt([g()],Le.prototype,"purchaseMessage",2);Le=wt([O("app-premium")],Le);var wn=Object.defineProperty,xn=Object.getOwnPropertyDescriptor,Fe=(e,t,i,o)=>{for(var s=o>1?void 0:o?xn(t,i):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(s=(o?a(t,i,s):a(s))||s);return o&&s&&wn(t,i,s),s};let me=class extends z{constructor(){super(...arguments),this.selectedCategory="foods",this.selectedFile=null,this.imageName="",this.images=[],this.isPremium=!1,this.storageInfo={used:0,max:0,percentage:0},this.uploadMessage="",this.premiumManager=K.getInstance(),this.imagesManager=Ie.getInstance(),this.fileInputRef=null}connectedCallback(){super.connectedCallback(),this.checkPremium(),this.loadImages()}checkPremium(){this.isPremium=this.premiumManager.canUseCustomImages()}loadImages(){this.images=this.imagesManager.getAllImages(),this.storageInfo=this.imagesManager.getStorageInfo()}onFileSelected(e){const i=e.target.files?.[0];if(i){if(!i.type.startsWith("image/")){this.uploadMessage="Please select an image file";return}if(i.size>500*1024){this.uploadMessage="Image must be smaller than 500KB";return}this.selectedFile=i,this.uploadMessage=""}}readFileAsDataUrl(e){return new Promise((t,i)=>{const o=new FileReader;o.onload=()=>t(o.result),o.onerror=i,o.readAsDataURL(e)})}chooseImage(){this.shadowRoot?.querySelector("#custom-image-file")?.click()}async uploadImage(){if(!this.selectedFile||!this.imageName){this.uploadMessage="Please select an image and enter a name";return}try{const e=await this.readFileAsDataUrl(this.selectedFile);this.imagesManager.addImage(this.selectedCategory,this.imageName,e)?(this.uploadMessage=`✅ Image "${this.imageName}" uploaded successfully!`,this.selectedFile=null,this.imageName="",this.selectedCategory="foods",this.fileInputRef&&(this.fileInputRef.value=""),this.loadImages(),setTimeout(()=>{this.uploadMessage=""},3e3)):this.uploadMessage="❌ Failed to upload image"}catch(e){this.uploadMessage=`❌ Error: ${e instanceof Error?e.message:"Unknown error"}`}}deleteImage(e){confirm("Delete this image?")&&(this.imagesManager.deleteImage(e),this.loadImages())}deleteCategory(){confirm(`Delete all images in ${this.selectedCategory}?`)&&(this.imagesManager.deleteByCategory(this.selectedCategory),this.loadImages())}exportImages(){const e=this.imagesManager.exportData(),t=new Blob([e],{type:"application/json"}),i=URL.createObjectURL(t),o=document.createElement("a");o.href=i,o.download=`caydenjoy-images-${new Date().toISOString().slice(0,10)}.json`,o.click(),URL.revokeObjectURL(i),this.uploadMessage="Custom images backup exported"}chooseImportFile(){this.shadowRoot?.querySelector("#custom-images-import")?.click()}async importImages(e){const t=e.target,i=t.files?.[0];if(i)try{const o=await i.text();this.imagesManager.importData(o)?(this.loadImages(),this.uploadMessage="Custom images backup imported"):this.uploadMessage="Could not import this backup file"}catch(o){this.uploadMessage=`Import failed: ${o instanceof Error?o.message:"Unknown error"}`}finally{t.value=""}}clearAll(){confirm("Delete ALL custom images? This cannot be undone.")&&(this.imagesManager.clearAll(),this.loadImages(),this.uploadMessage="✅ All images cleared",setTimeout(()=>{this.uploadMessage=""},2e3))}goToPremium(){window.location.href=f("premium")}render(){const e=this.imagesManager.getImagesByCategory(this.selectedCategory);return d`
      <div class="container">
        <h1>
          🖼️ Custom Images
          ${this.isPremium?d`<span class="premium-badge">Premium</span>`:""}
        </h1>

        ${this.isPremium?d`
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
                  <button type="button" class="file-input-label" @click="${this.chooseImage}">
                    Choose Image
                  </button>
                  <input
                    id="custom-image-file"
                    type="file"
                    accept="image/*"
                    class="file-input-hidden"
                    @change="${this.onFileSelected.bind(this)}"
                    ${t=>{this.fileInputRef=t}}
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
                ${e.length===0?d`<div class="empty-message">No images in this category yet</div>`:d`
                      <div class="images-grid">
                        ${e.map(t=>d`
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
                <button class="btn btn-secondary" @click="${this.deleteCategory}">
                  🗑️ Delete All in ${this.selectedCategory}
                </button>
                <button class="btn btn-danger" @click="${this.clearAll}">
                  ⚠️ Clear All Images
                </button>
              </div>
            `:d`
              <div class="locked-message">
                <p>🔒 Custom image uploads are a premium feature</p>
                <p>Unlock this feature for just <strong>$5.99</strong></p>
                <button class="btn btn-primary" @click="${this.goToPremium}">
                  Upgrade to Premium
                </button>
              </div>
            `}
      </div>
    `}};me.styles=w`
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
  `;Fe([g()],me.prototype,"selectedCategory",2);Fe([g()],me.prototype,"selectedFile",2);Fe([g()],me.prototype,"imageName",2);Fe([g()],me.prototype,"images",2);Fe([g()],me.prototype,"isPremium",2);Fe([g()],me.prototype,"storageInfo",2);Fe([g()],me.prototype,"uploadMessage",2);me=Fe([O("app-custom-images")],me);var _n=Object.defineProperty,kn=Object.getOwnPropertyDescriptor,Ft=(e,t,i,o)=>{for(var s=o>1?void 0:o?kn(t,i):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(s=(o?a(t,i,s):a(s))||s);return o&&s&&_n(t,i,s),s};let Je=class extends z{constructor(){super(...arguments),this.upgradeCode="",this.message="",this.messageType="",this.isUpgraded=!1,this.licenseManager=Q.getInstance(),this.premiumManager=K.getInstance()}connectedCallback(){super.connectedCallback(),this.isUpgraded=this.licenseManager.isUpgraded()}handleCodeInput(e){const t=e.target;this.upgradeCode=t.value,this.message=""}submitUpgradeCode(){if(!this.upgradeCode.trim()){this.message="Please enter an upgrade code",this.messageType="error";return}if(this.licenseManager.verifyAndApplyCode(this.upgradeCode)){this.premiumManager.refreshStatus(),this.isUpgraded=!0;const t=this.licenseManager.getTier();let i="All Access";t==="family"?i="Family Photos":t==="learning"&&(i="Learning Plus"),this.message=`Upgrade successful! ${i} is now unlocked.`,this.messageType="success",this.upgradeCode=""}else this.message=this.licenseManager.getLastError()||"Invalid upgrade code. Please check and try again.",this.messageType="error"}resetLicense(){confirm("Are you sure? This will reset the license and lock premium features.")&&(this.licenseManager.resetLicense(),this.premiumManager.resetPremium(),this.premiumManager.refreshStatus(),this.isUpgraded=!1,this.message="",this.upgradeCode="")}handleKeydown(e){e.key==="Enter"&&this.submitUpgradeCode()}render(){return this.isUpgraded?d`
        <div class="container">
          <div class="header">
            <h1>Premium Unlocked</h1>
          </div>

          <div class="success-state">
            <div class="success-icon">🎉</div>
            <div class="success-text">All Premium Features Unlocked</div>
            <div class="success-subtext">
              Your upgrade key has been redeemed on this device.
            </div>
            <button class="reset-btn" @click=${this.resetLicense}>
              Reset License (Dev Only)
            </button>
          </div>
        </div>
      `:d`
      <div class="container">
        <div class="header">
          <h1>Unlock Premium Features</h1>
          <p class="subtitle">Enter the one-time upgrade key provided after purchase</p>
        </div>

        <div class="upgrade-card">
          <div class="upgrade-title">What you'll get:</div>
          <ul class="features-list">
            <li>Family Photos key - Custom image uploads</li>
            <li>Learning Plus key - Custom images, backup tools, and extra tabs</li>
            <li>All Access key - All current premium features</li>
            <li>Keys redeem once on this installed device</li>
          </ul>
        </div>

        <div class="download-cta">
          <h2>Need the Android app file?</h2>
          <p>
            Buyers can download the APK from the dedicated download page before entering their upgrade key.
          </p>
          <div class="download-actions">
            <sl-button variant="primary" href=${f("download")}>
              Open Download Page
            </sl-button>
            <sl-button variant="default" href=${f("contact")}>
              Send to Buyer
            </sl-button>
          </div>
        </div>

        ${this.message?d`
          <div class="message ${this.messageType}">
            ${this.message}
          </div>
        `:""}

        <div class="code-instructions">
          <strong>How to use:</strong> After purchase, send the customer the APK and a matching upgrade key.
          The app records the key as redeemed on that device after unlock.
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
    `}};Je.styles=w`
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

    .download-cta {
      background: #eef4ff;
      border: 1px solid #cfdcf5;
      padding: 1.25rem;
      border-radius: 0.75rem;
      margin-bottom: 1.5rem;
    }

    .download-cta h2 {
      margin: 0 0 0.5rem 0;
      font-size: 1.15rem;
      color: #243041;
    }

    .download-cta p {
      margin: 0 0 0.9rem 0;
      color: #4d5e72;
      line-height: 1.5;
    }

    .download-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
    }

    .code-instructions strong {
      color: #6C5CE7;
    }
  `;Ft([g()],Je.prototype,"upgradeCode",2);Ft([g()],Je.prototype,"message",2);Ft([g()],Je.prototype,"messageType",2);Ft([g()],Je.prototype,"isUpgraded",2);Je=Ft([O("app-upgrade")],Je);var $n=Object.getOwnPropertyDescriptor,Cn=(e,t,i,o)=>{for(var s=o>1?void 0:o?$n(t,i):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(s=a(s)||s);return s};let Li=class extends z{constructor(){super(...arguments),this.apkDownloadUrl="https://gilliomfrontlinedigital.com/downloads/caydenjoy.apk".trim()}render(){return d`
      <div class="container">
        <section class="hero">
          <h1>Download the Android APK</h1>
          <p class="subtitle">
            Send buyers here after purchase, or share the direct APK link from this page.
            After installing, they can return to the Upgrade page to redeem their key.
          </p>
        </section>

        <sl-card>
          <div class="card-body">
            <div class="status">
              <strong>APK download link</strong>
              ${this.apkDownloadUrl?d`The download button below opens the APK file you configured for this build.`:d`Set <code>VITE_APK_DOWNLOAD_URL</code> to your hosted APK file, then rebuild the app. This page will use that link automatically.`}
            </div>

            <div class="download-action">
              ${this.apkDownloadUrl?d`<sl-button variant="primary" size="large" href=${this.apkDownloadUrl} target="_blank" rel="noopener noreferrer">
                    Download APK
                  </sl-button>`:d`<sl-button variant="primary" size="large" href=${f("contact")}>
                    Contact for Download
                  </sl-button>`}
              <sl-button variant="default" size="large" href=${f("upgrade")}>
                Open Upgrade Page
              </sl-button>
            </div>

            <div>
              <ul>
                <li>Buyers install the APK on their Android phone or tablet.</li>
                <li>They open Upgrade and enter the one-time key you send them.</li>
                <li>The app unlocks premium features on that device after redemption.</li>
              </ul>
            </div>

            <div class="note">
              If you are hosting the APK in a public folder or file storage service, paste that direct
              file URL into <code>VITE_APK_DOWNLOAD_URL</code> before building.
            </div>
          </div>
        </sl-card>

        <div class="link-row">
          <sl-button variant="default" href=${f("home")}>
            Back to Home
          </sl-button>
          <sl-button variant="default" href=${f("contact")}>
            Support Contact
          </sl-button>
        </div>
      </div>
    `}};Li.styles=w`
    :host {
      display: block;
      padding: 1.25rem;
      color: #172033;
    }

    .container {
      max-width: 860px;
      margin: 0 auto;
    }

    .hero {
      margin-bottom: 1.25rem;
    }

    h1 {
      margin: 0;
      font-size: 2rem;
      color: #172033;
      line-height: 1.1;
    }

    .subtitle {
      margin: 0.5rem 0 0;
      color: #4b5d73;
      font-size: 1.05rem;
      line-height: 1.5;
    }

    sl-card {
      margin-bottom: 1rem;
    }

    sl-card::part(base) {
      border-radius: 16px;
      border: 1px solid #d7e0eb;
      background: #ffffff;
      box-shadow: 0 10px 24px rgba(31, 41, 55, 0.08);
    }

    .card-body {
      display: grid;
      gap: 0.9rem;
    }

    .download-action {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      align-items: center;
    }

    .status {
      padding: 0.75rem 0.9rem;
      border-radius: 0.75rem;
      background: #eef4ff;
      color: #1f3a68;
      line-height: 1.5;
    }

    .status strong {
      display: block;
      margin-bottom: 0.25rem;
    }

    ul {
      margin: 0;
      padding-left: 1.2rem;
      color: #4b5d73;
      line-height: 1.6;
    }

    .note {
      color: #607489;
      font-size: 0.95rem;
      line-height: 1.55;
    }

    .link-row {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      margin-top: 1rem;
    }

    @media (max-width: 640px) {
      :host {
        padding: 0.85rem;
      }

      h1 {
        font-size: 1.6rem;
      }

      .subtitle {
        font-size: 1rem;
      }

      sl-button {
        width: 100%;
      }
    }
  `;Li=Cn([O("app-download")],Li);var Tn=Object.defineProperty,Sn=Object.getOwnPropertyDescriptor,fi=(e,t,i,o)=>{for(var s=o>1?void 0:o?Sn(t,i):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(s=(o?a(t,i,s):a(s))||s);return o&&s&&Tn(t,i,s),s};let mt=class extends z{constructor(){super(...arguments),this.generatedCodes=[],this.newCodeDescription="",this.showCodeList=!1,this.GENERATED_CODES_KEY="caydenjoy_generated_codes"}connectedCallback(){super.connectedCallback(),this.loadGeneratedCodes()}loadGeneratedCodes(){try{const e=localStorage.getItem(this.GENERATED_CODES_KEY);e&&(this.generatedCodes=JSON.parse(e))}catch(e){console.error("Error loading generated codes:",e)}}saveGeneratedCodes(){try{localStorage.setItem(this.GENERATED_CODES_KEY,JSON.stringify(this.generatedCodes))}catch(e){console.error("Error saving generated codes:",e)}}generateCode(){if(!this.newCodeDescription.trim()){alert("Please enter a description for the code");return}const e=Date.now().toString(36).toUpperCase(),t=Math.random().toString(36).substring(2,8).toUpperCase(),o={code:`GEN-${e}-${t}`,createdAt:Date.now(),description:this.newCodeDescription.trim()};this.generatedCodes=[o,...this.generatedCodes],this.saveGeneratedCodes(),this.newCodeDescription=""}deleteCode(e){confirm(`Delete code ${e}?`)&&(this.generatedCodes=this.generatedCodes.filter(t=>t.code!==e),this.saveGeneratedCodes())}copyToClipboard(e){navigator.clipboard.writeText(e).then(()=>{alert("Code copied to clipboard!")})}formatDate(e){return new Date(e).toLocaleString()}handleDescriptionKeydown(e){e.key==="Enter"&&this.generateCode()}render(){const e=this.generatedCodes.length,t=this.generatedCodes.slice(0,5);return d`
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

          ${this.generatedCodes.length===0?d`<div class="empty-message">No codes generated yet</div>`:d`
                <ul class="codes-list">
                  ${(this.showCodeList?this.generatedCodes:t).map(i=>d`
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
    `}};mt.styles=w`
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
  `;fi([g()],mt.prototype,"generatedCodes",2);fi([g()],mt.prototype,"newCodeDescription",2);fi([g()],mt.prototype,"showCodeList",2);mt=fi([O("app-admin")],mt);var An=Object.defineProperty,zn=Object.getOwnPropertyDescriptor,ms=(e,t,i,o)=>{for(var s=o>1?void 0:o?zn(t,i):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(s=(o?a(t,i,s):a(s))||s);return o&&s&&An(t,i,s),s};let ri=class extends z{constructor(){super(...arguments),this.summary=ue.getInstance().getSummary(),this.progressManager=ue.getInstance()}connectedCallback(){super.connectedCallback(),this.refresh()}refresh(){this.summary=this.progressManager.getSummary()}clearProgress(){confirm("Clear local progress history?")&&(this.progressManager.clear(),this.refresh())}formatTime(e){return new Date(e).toLocaleString()}render(){return d`
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
    `}};ri.styles=w`
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
  `;ms([g()],ri.prototype,"summary",2);ri=ms([O("app-progress")],ri);const Kt="caydenjoy_feedback_items",En=200;class je{static getInstance(){return je.instance||(je.instance=new je),je.instance}getItems(){try{const t=localStorage.getItem(Kt);return t?JSON.parse(t):[]}catch(t){return console.error("Could not load feedback:",t),[]}}addItem(t,i,o,s){const r={id:`feedback_${Date.now()}_${Math.random().toString(36).slice(2,8)}`,type:t,title:i,details:o,contact:s,createdAt:Date.now()},a=[r,...this.getItems()].slice(0,En);return localStorage.setItem(Kt,JSON.stringify(a)),r}deleteItem(t){const i=this.getItems().filter(o=>o.id!==t);localStorage.setItem(Kt,JSON.stringify(i))}clear(){localStorage.removeItem(Kt)}exportData(){return JSON.stringify(this.getItems(),null,2)}}je.getInstance();var Pn=Object.defineProperty,In=Object.getOwnPropertyDescriptor,it=(e,t,i,o)=>{for(var s=o>1?void 0:o?In(t,i):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(s=(o?a(t,i,s):a(s))||s);return o&&s&&Pn(t,i,s),s};let Ce=class extends z{constructor(){super(...arguments),this.type="wishlist",this.feedbackTitle="",this.details="",this.contact="",this.message="",this.items=[],this.feedbackManager=je.getInstance()}connectedCallback(){super.connectedCallback(),this.refresh()}refresh(){this.items=this.feedbackManager.getItems()}submitFeedback(){if(!this.feedbackTitle.trim()||!this.details.trim()){this.message="Please add a short title and details.";return}this.feedbackManager.addItem(this.type,this.feedbackTitle.trim(),this.details.trim(),this.contact.trim()),this.feedbackTitle="",this.details="",this.contact="",this.message="Thank you. The idea was saved on this device.",this.refresh()}deleteItem(e){this.feedbackManager.deleteItem(e),this.refresh()}exportFeedback(){const e=new Blob([this.feedbackManager.exportData()],{type:"application/json"}),t=URL.createObjectURL(e),i=document.createElement("a");i.href=t,i.download=`caydenjoy-feedback-${new Date().toISOString().slice(0,10)}.json`,i.click(),URL.revokeObjectURL(t),this.message="Feedback export created."}clearFeedback(){confirm("Clear all saved feedback and wishlist items?")&&(this.feedbackManager.clear(),this.refresh(),this.message="Feedback cleared.")}formatTime(e){return new Date(e).toLocaleString()}render(){return d`
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
    `}};Ce.styles=w`
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
  `;it([g()],Ce.prototype,"type",2);it([g()],Ce.prototype,"feedbackTitle",2);it([g()],Ce.prototype,"details",2);it([g()],Ce.prototype,"contact",2);it([g()],Ce.prototype,"message",2);it([g()],Ce.prototype,"items",2);Ce=it([O("app-feedback")],Ce);var On=Object.getOwnPropertyDescriptor,Dn=(e,t,i,o)=>{for(var s=o>1?void 0:o?On(t,i):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(s=a(s)||s);return s};let Ui=class extends z{render(){return d`
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

          <sl-card>
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
          </sl-card>
        </div>

        <div class="actions">
          <sl-button href="${f("faq")}" variant="default">FAQ</sl-button>
          <sl-button href="${f("feedback")}" variant="default">Feedback</sl-button>
        </div>
      </main>
    `}};Ui.styles=[Re,w`
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
    `];Ui=Dn([O("app-documentation")],Ui);var Mn=Object.getOwnPropertyDescriptor,Nn=(e,t,i,o)=>{for(var s=o>1?void 0:o?Mn(t,i):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(s=a(s)||s);return s};let Ri=class extends z{render(){return d`
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
    `}};Ri.styles=[Re,w`
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
    `];Ri=Nn([O("app-privacy")],Ri);var Ln=Object.getOwnPropertyDescriptor,Un=(e,t,i,o)=>{for(var s=o>1?void 0:o?Ln(t,i):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(s=a(s)||s);return s};let Fi=class extends z{render(){return d`
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
    `}};Fi.styles=[Re,w`
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
    `];Fi=Un([O("app-terms")],Fi);var Rn=Object.getOwnPropertyDescriptor,Fn=(e,t,i,o)=>{for(var s=o>1?void 0:o?Rn(t,i):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(s=a(s)||s);return s};let Bi=class extends z{render(){return d`
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

        <sl-button href="${f("upgrade")}" variant="primary">Redeem Upgrade Key</sl-button>
      </main>
    `}};Bi.styles=[Re,w`
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
    `];Bi=Fn([O("app-license")],Bi);globalThis.URLPattern||await Ko(()=>import("./index-DkuV2QLQ.js"),[]);const Bn="/caydenjoy/",Jn=new ir({routes:[{path:f(),title:"Communication",render:()=>d`<app-communication></app-communication>`},{path:f("home"),title:"Home",render:()=>d`<app-home></app-home>`},{path:f("home-enhanced"),title:"Quick Communication",render:()=>d`<app-home-enhanced></app-home-enhanced>`},{path:f("services"),title:"Services",render:()=>d`<app-services></app-services>`},{path:f("contact"),title:"Contact",render:()=>d`<app-contact></app-contact>`},{path:f("settings"),title:"Settings",render:()=>d`<app-settings></app-settings>`},{path:f("faq"),title:"FAQ",render:()=>d`<app-faq></app-faq>`},{path:f("family-puzzle"),title:"Activity Sessions",render:()=>d`<app-family-puzzle></app-family-puzzle>`},{path:f("foods"),title:"Foods",render:()=>d`<app-foods-enhanced></app-foods-enhanced>`},{path:f("colors"),title:"Colors",render:()=>d`<app-colors></app-colors>`},{path:f("numbers"),title:"Numbers",render:()=>d`<app-numbers></app-numbers>`},{path:f("places"),title:"Places",render:()=>d`<app-places></app-places>`},{path:f("premium"),title:"Premium",render:()=>d`<app-premium></app-premium>`},{path:f("custom-images"),title:"Custom Images",render:()=>d`<app-custom-images></app-custom-images>`},{path:f("upgrade"),title:"Upgrade",render:()=>d`<app-upgrade></app-upgrade>`},{path:f("download"),title:"Download APK",render:()=>d`<app-download></app-download>`},{path:f("admin"),title:"Admin",render:()=>d`<app-admin></app-admin>`},{path:f("progress"),title:"Progress Dashboard",render:()=>d`<app-progress></app-progress>`},{path:f("feedback"),title:"Feedback & Wishlist",render:()=>d`<app-feedback></app-feedback>`},{path:f("documentation"),title:"Documentation",render:()=>d`<app-documentation></app-documentation>`},{path:f("privacy"),title:"Privacy Policy",render:()=>d`<app-privacy></app-privacy>`},{path:f("terms"),title:"Terms of Service",render:()=>d`<app-terms></app-terms>`},{path:f("license"),title:"License",render:()=>d`<app-license></app-license>`},{path:f("about"),title:"About",plugins:[or(()=>Ko(()=>import("./app-about-CMqYN3JA.js"),[]))],render:()=>d`<app-about></app-about>`}]});function f(e){let t=Bn;return e&&(t=t+e),t}var qn=w`
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
`,Bt=class extends U{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return d`
      <span
        part="base"
        class=${R({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};Bt.styles=[B,qn];n([l({reflect:!0})],Bt.prototype,"variant",2);n([l({type:Boolean,reflect:!0})],Bt.prototype,"pill",2);n([l({type:Boolean,reflect:!0})],Bt.prototype,"pulse",2);Bt.define("sl-badge");var Vn=Object.defineProperty,jn=Object.getOwnPropertyDescriptor,lo=(e,t,i,o)=>{for(var s=o>1?void 0:o?jn(t,i):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(s=(o?a(t,i,s):a(s))||s);return o&&s&&Vn(t,i,s),s};let Dt=class extends z{constructor(){super(...arguments),this.message="CaydenJoy",this.isOnline=navigator.onLine}firstUpdated(){globalThis.addEventListener("online",()=>{this.isOnline=!0}),globalThis.addEventListener("offline",()=>{this.isOnline=!1})}speak(e){"speechSynthesis"in globalThis&&typeof SpeechSynthesisUtterance<"u"&&(globalThis.speechSynthesis.cancel(),globalThis.speechSynthesis.speak(new SpeechSynthesisUtterance(e)))}render(){return d`
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

          <a class="feature" href=${f("download")}>
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=500&q=80"
              alt="Android app download"
            />
            <div class="feature-copy">
              <div class="feature-title">Download Android App</div>
              <div class="feature-text">Open the buyer download page for the CaydenJoy APK and install instructions.</div>
            </div>
          </a>

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
    `}};Dt.styles=w`
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
  `;lo([l()],Dt.prototype,"message",2);lo([l()],Dt.prototype,"isOnline",2);Dt=lo([O("app-home")],Dt);export{de as A,z as a,Jn as b,Re as c,w as i,g as r,co as s,O as t,d as x};
//# sourceMappingURL=app-home-D-Y3muww.js.map
