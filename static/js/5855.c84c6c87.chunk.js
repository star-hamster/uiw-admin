/*! For license information please see 5855.c84c6c87.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5855],{55855:function(e,n,t){t.d(n,{ZP:function(){return U}});var r=t(56976);function i(e,n,t,r){return new(t||(t=Promise))((function(i,u){function o(e){try{c(r.next(e))}catch(n){u(n)}}function a(e){try{c(r.throw(e))}catch(n){u(n)}}function c(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,a)}c((r=r.apply(e,n||[])).next())}))}function u(e,n){var t,r,i,u,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,r&&(i=2&u[0]?r.return:u[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,u[1])).done)return i;switch(r=0,i&&(u=[2&u[0],i.value]),u[0]){case 0:case 1:i=u;break;case 4:return o.label++,{value:u[1],done:!1};case 5:o.label++,r=u[1],u=[0];continue;case 7:u=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===u[0]||2===u[0])){o=0;continue}if(3===u[0]&&(!i||u[1]>i[0]&&u[1]<i[3])){o.label=u[1];break}if(6===u[0]&&o.label<i[1]){o.label=i[1],i=u;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(u);break}i[2]&&o.ops.pop(),o.trys.pop();continue}u=n.call(e,o)}catch(a){u=[6,a],r=0}finally{t=i=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}}var o,a=function(){},c=a(),f=Object,s=function(e){return e===c},l=function(e){return"function"==typeof e},d=function(e,n){return f.assign({},e,n)},v="undefined",h=function(){return typeof window!=v},g=new WeakMap,p=0,b=function e(n){var t,r,i=typeof n,u=n&&n.constructor,o=u==Date;if(f(n)!==n||o||u==RegExp)t=o?n.toJSON():"symbol"==i?n.toString():"string"==i?JSON.stringify(n):""+n;else{if(t=g.get(n))return t;if(t=++p+"~",g.set(n,t),u==Array){for(t="@",r=0;r<n.length;r++)t+=e(n[r])+",";g.set(n,t)}if(u==f){t="#";for(var a=f.keys(n).sort();!s(r=a.pop());)s(n[r])||(t+=r+":"+e(n[r])+",");g.set(n,t)}}return t},y=!0,w=h(),m=typeof document!=v,R=w&&window.addEventListener?window.addEventListener.bind(window):a,k=m?document.addEventListener.bind(document):a,E=w&&window.removeEventListener?window.removeEventListener.bind(window):a,O=m?document.removeEventListener.bind(document):a,S={isOnline:function(){return y},isVisible:function(){var e=m&&document.visibilityState;return s(e)||"hidden"!==e}},T={initFocus:function(e){return k("visibilitychange",e),R("focus",e),function(){O("visibilitychange",e),E("focus",e)}},initReconnect:function(e){var n=function(){y=!0,e()},t=function(){y=!1};return R("online",n),R("offline",t),function(){E("online",n),E("offline",t)}}},V=!h()||"Deno"in window,C=function(e){return h()&&typeof window.requestAnimationFrame!=v?window.requestAnimationFrame(e):setTimeout(e,1)},x=V?r.useEffect:r.useLayoutEffect,D="undefined"!==typeof navigator&&navigator.connection,I=!V&&D&&(["slow-2g","2g"].includes(D.effectiveType)||D.saveData),L=function(e){if(l(e))try{e=e()}catch(t){e=""}var n=[].concat(e);return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?b(e):"",n,e?"$swr$"+e:""]},P=new WeakMap,F=function(e,n,t,r,i,u,o){void 0===o&&(o=!0);var a=P.get(e),c=a[0],f=a[1],s=a[3],l=c[n],d=f[n];if(o&&d)for(var v=0;v<d.length;++v)d[v](t,r,i);return u&&(delete s[n],l&&l[0])?l[0](2).then((function(){return e.get(n)})):e.get(n)},A=0,M=function(){return++A},W=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return i(void 0,void 0,void 0,(function(){var n,t,r,i,o,a,f,v,h,g,p,b,y,w,m,R,k,E,O,S,T;return u(this,(function(u){switch(u.label){case 0:if(n=e[0],t=e[1],r=e[2],i=e[3],a=!!s((o="boolean"===typeof i?{revalidate:i}:i||{}).populateCache)||o.populateCache,f=!1!==o.revalidate,v=!1!==o.rollbackOnError,h=o.optimisticData,g=L(t),p=g[0],b=g[2],!p)return[2];if(y=P.get(n),w=y[2],e.length<3)return[2,F(n,p,n.get(p),c,c,f,!0)];if(m=r,k=M(),w[p]=[k,0],E=!s(h),O=n.get(p),E&&(S=l(h)?h(O):h,n.set(p,S),F(n,p,S)),l(m))try{m=m(n.get(p))}catch(V){R=V}return m&&l(m.then)?[4,m.catch((function(e){R=e}))]:[3,2];case 1:if(m=u.sent(),k!==w[p][0]){if(R)throw R;return[2,m]}R&&E&&v&&(a=!0,m=O,n.set(p,O)),u.label=2;case 2:return a&&(R||(l(a)&&(m=a(m,O)),n.set(p,m)),n.set(b,d(n.get(b),{error:R}))),w[p][1]=M(),[4,F(n,p,m,R,c,f,!!a)];case 3:if(T=u.sent(),R)throw R;return[2,a?T:m]}}))}))},q=function(e,n){for(var t in e)e[t][0]&&e[t][0](n)},J=function(e,n){if(!P.has(e)){var t=d(T,n),r={},i=W.bind(c,e),u=a;if(P.set(e,[r,{},{},{},i]),!V){var o=t.initFocus(setTimeout.bind(c,q.bind(c,r,0))),f=t.initReconnect(setTimeout.bind(c,q.bind(c,r,1)));u=function(){o&&o(),f&&f(),P.delete(e)}}return[e,i,u]}return[e,P.get(e)[4]]},N=J(new Map),$=N[0],j=N[1],G=d({onLoadingSlow:a,onSuccess:a,onError:a,onErrorRetry:function(e,n,t,r,i){var u=t.errorRetryCount,o=i.retryCount,a=~~((Math.random()+.5)*(1<<(o<8?o:8)))*t.errorRetryInterval;!s(u)&&o>u||setTimeout(r,a,i)},onDiscarded:a,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:I?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:I?5e3:3e3,compare:function(e,n){return b(e)==b(n)},isPaused:function(){return!1},cache:$,mutate:j,fallback:{}},S),H=function(e,n){var t=d(e,n);if(n){var r=e.use,i=e.fallback,u=n.use,o=n.fallback;r&&u&&(t.use=r.concat(u)),i&&o&&(t.fallback=d(i,o))}return t},Z=(0,r.createContext)({}),z=function(e){return l(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}]},B=function(){return d(G,(0,r.useContext)(Z))},K=function(e,n,t){var r=n[e]||(n[e]=[]);return r.push(t),function(){var e=r.indexOf(t);e>=0&&(r[e]=r[r.length-1],r.pop())}},Q={dedupe:!0},U=(f.defineProperty((function(e){var n=e.value,t=H((0,r.useContext)(Z),n),i=n&&n.provider,u=(0,r.useState)((function(){return i?J(i(t.cache||$),n):c}))[0];return u&&(t.cache=u[0],t.mutate=u[1]),x((function(){return u?u[2]:c}),[]),(0,r.createElement)(Z.Provider,d(e,{value:t}))}),"default",{value:G}),o=function(e,n,t){var o=t.cache,a=t.compare,f=t.fallbackData,v=t.suspense,h=t.revalidateOnMount,g=t.refreshInterval,p=t.refreshWhenHidden,b=t.refreshWhenOffline,y=P.get(o),w=y[0],m=y[1],R=y[2],k=y[3],E=L(e),O=E[0],S=E[1],T=E[2],D=(0,r.useRef)(!1),I=(0,r.useRef)(!1),A=(0,r.useRef)(O),q=(0,r.useRef)(n),J=(0,r.useRef)(t),N=function(){return J.current},$=function(){return N().isVisible()&&N().isOnline()},j=function(e){return o.set(T,d(o.get(T),e))},G=o.get(O),H=s(f)?t.fallback[O]:f,Z=s(G)?H:G,z=o.get(T)||{},B=z.error,U=!D.current,X=function(){return U&&!s(h)?h:!N().isPaused()&&(v?!s(Z)&&t.revalidateIfStale:s(Z)||t.revalidateIfStale)},Y=!(!O||!n)&&(!!z.isValidating||U&&X()),_=function(e,n){var t=(0,r.useState)({})[1],i=(0,r.useRef)(e),u=(0,r.useRef)({data:!1,error:!1,isValidating:!1}),o=(0,r.useCallback)((function(e){var r=!1,o=i.current;for(var a in e){var c=a;o[c]!==e[c]&&(o[c]=e[c],u.current[c]&&(r=!0))}r&&!n.current&&t({})}),[]);return x((function(){i.current=e})),[i,u.current,o]}({data:Z,error:B,isValidating:Y},I),ee=_[0],ne=_[1],te=_[2],re=(0,r.useCallback)((function(e){return i(void 0,void 0,void 0,(function(){var n,r,i,f,d,v,h,g,p,b,y,w,m;return u(this,(function(u){switch(u.label){case 0:if(n=q.current,!O||!n||I.current||N().isPaused())return[2,!1];f=!0,d=e||{},v=!k[O]||!d.dedupe,h=function(){return!I.current&&O===A.current&&D.current},g=function(){var e=k[O];e&&e[1]===i&&delete k[O]},p={isValidating:!1},b=function(){j({isValidating:!1}),h()&&te(p)},j({isValidating:!0}),te({isValidating:!0}),u.label=1;case 1:return u.trys.push([1,3,,4]),v&&(F(o,O,ee.current.data,ee.current.error,!0),t.loadingTimeout&&!o.get(O)&&setTimeout((function(){f&&h()&&N().onLoadingSlow(O,t)}),t.loadingTimeout),k[O]=[n.apply(void 0,S),M()]),m=k[O],r=m[0],i=m[1],[4,r];case 2:return r=u.sent(),v&&setTimeout(g,t.dedupingInterval),k[O]&&k[O][1]===i?(j({error:c}),p.error=c,y=R[O],!s(y)&&(i<=y[0]||i<=y[1]||0===y[1])?(b(),v&&h()&&N().onDiscarded(O),[2,!1]):(a(ee.current.data,r)?p.data=ee.current.data:p.data=r,a(o.get(O),r)||o.set(O,r),v&&h()&&N().onSuccess(r,O,t),[3,4])):(v&&h()&&N().onDiscarded(O),[2,!1]);case 3:return w=u.sent(),g(),N().isPaused()||(j({error:w}),p.error=w,v&&h()&&(N().onError(w,O,t),("boolean"===typeof t.shouldRetryOnError&&t.shouldRetryOnError||l(t.shouldRetryOnError)&&t.shouldRetryOnError(w))&&$()&&N().onErrorRetry(w,O,t,re,{retryCount:(d.retryCount||0)+1,dedupe:!0}))),[3,4];case 4:return f=!1,b(),h()&&v&&F(o,O,p.data,p.error,!1),[2,!0]}}))}))}),[O]),ie=(0,r.useCallback)(W.bind(c,o,(function(){return A.current})),[]);if(x((function(){q.current=n,J.current=t})),x((function(){if(O){var e=O!==A.current,n=re.bind(c,Q),t=0,r=K(O,m,(function(e,n,t){te(d({error:n,isValidating:t},a(ee.current.data,e)?c:{data:e}))})),i=K(O,w,(function(e){if(0==e){var r=Date.now();N().revalidateOnFocus&&r>t&&$()&&(t=r+N().focusThrottleInterval,n())}else if(1==e)N().revalidateOnReconnect&&$()&&n();else if(2==e)return re()}));return I.current=!1,A.current=O,D.current=!0,e&&te({data:Z,error:B,isValidating:Y}),X()&&(s(Z)||V?n():C(n)),function(){I.current=!0,r(),i()}}}),[O,re]),x((function(){var e;function n(){var n=l(g)?g(Z):g;n&&-1!==e&&(e=setTimeout(t,n))}function t(){ee.current.error||!p&&!N().isVisible()||!b&&!N().isOnline()?n():re(Q).then(n)}return n(),function(){e&&(clearTimeout(e),e=-1)}}),[g,p,b,re]),(0,r.useDebugValue)(Z),v&&s(Z)&&O)throw q.current=n,J.current=t,I.current=!1,s(B)?re(Q):B;return{mutate:ie,get data(){return ne.data=!0,Z},get error(){return ne.error=!0,B},get isValidating(){return ne.isValidating=!0,Y}}},function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t=B(),r=z(e),i=r[0],u=r[1],a=r[2],c=H(t,a),f=o,s=c.use;if(s)for(var l=s.length;l-- >0;)f=s[l](f);return f(i,u||c.fetcher,c)})}}]);
//# sourceMappingURL=5855.c84c6c87.chunk.js.map