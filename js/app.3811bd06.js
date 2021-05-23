(function(t){function e(e){for(var i,l,n=e[0],h=e[1],s=e[2],d=0,u=[];d<n.length;d++)l=n[d],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&u.push(o[l][0]),o[l]=0;for(i in h)Object.prototype.hasOwnProperty.call(h,i)&&(t[i]=h[i]);f&&f(e);while(u.length)u.shift()();return r.push.apply(r,s||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,n=1;n<a.length;n++){var h=a[n];0!==o[h]&&(i=!1)}i&&(r.splice(e--,1),t=l(l.s=a[0]))}return t}var i={},o={app:0},r=[];function l(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=i,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)l.d(a,i,function(e){return t[e]}.bind(null,i));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/drawn-numbers/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],h=n.push.bind(n);n.push=e,n=n.slice();for(var s=0;s<n.length;s++)e(n[s]);var f=h;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"162a":function(t,e,a){"use strict";a("9b59")},"2faa":function(t,e,a){"use strict";a("9d94")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Screen",{attrs:{"is-wide-screen":t.isWideScreen}},[a("Canvas")],1),a("input",{directives:[{name:"model",rawName:"v-model",value:t.isWideScreen,expression:"isWideScreen"}],attrs:{type:"checkbox",name:"isWideScreen"},domProps:{checked:Array.isArray(t.isWideScreen)?t._i(t.isWideScreen,null)>-1:t.isWideScreen},on:{change:function(e){var a=t.isWideScreen,i=e.target,o=!!i.checked;if(Array.isArray(a)){var r=null,l=t._i(a,r);i.checked?l<0&&(t.isWideScreen=a.concat([r])):l>-1&&(t.isWideScreen=a.slice(0,l).concat(a.slice(l+1)))}else t.isWideScreen=o}}}),a("label",{attrs:{for:"isWideScreen"}},[t._v("Wide screen")])],1)},r=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("canvas",{ref:"canvas",attrs:{width:"960",height:"720"}})},n=[],h=a("5530");a("cb29");function s(t){return t||console.log("Assertion failed in bresenham.js "+t),t}function f(t,e,a,i){for(var o,r=Math.abs(a-t),l=t<a?1:-1,n=-Math.abs(i-e),h=e<i?1:-1,s=r+n;;){if(setPixel(t,e),t==a&&e==i)break;o=2*s,o>=n&&(s+=n,t+=l),o<=r&&(s+=r,e+=h)}}function d(t,e,a,i){var o,r=-a,l=0,n=(1+2*r)*i*i,h=r*r,s=n+h;do{setPixel(t-r,e+l),setPixel(t+r,e+l),setPixel(t+r,e-l),setPixel(t-r,e-l),o=2*s,o>=n&&(r++,s+=n+=2*i*i),o<=h&&(l++,s+=h+=2*a*a)}while(r<=0);while(l++<i)setPixel(t,e+l),setPixel(t,e-l)}function u(t,e,a){var i=-a,o=0,r=2-2*a;do{setPixel(t-i,e+o),setPixel(t-o,e-i),setPixel(t+i,e-o),setPixel(t+o,e+i),a=r,a<=o&&(r+=2*++o+1),(a>i||r>o)&&(r+=2*++i+1)}while(i<0)}function M(t,e,a,i){var o,r=Math.abs(a-t),l=Math.abs(i-e),n=1&l,h=4*(1-r)*l*l,s=4*(n+1)*r*r,f=h+s+n*r*r;t>a&&(t=a,a+=r),e>i&&(e=i),e+=l+1>>1,i=e-n,r*=8*r,n=8*l*l;do{setPixel(a,e),setPixel(t,e),setPixel(t,i),setPixel(a,i),o=2*f,o<=s&&(e++,i--,f+=s+=r),(o>=h||2*f>s)&&(t++,a--,f+=h+=n)}while(t<=a);while(e-i<=l)setPixel(t-1,e),setPixel(a+1,e++),setPixel(t-1,i),setPixel(a+1,i--)}function c(t,e,a,i,o,r){var l,n,h,d,u=o-a,M=r-i,c=t-a,p=e-i,A=c*M-p*u;if(s(c*u<=0&&p*M<=0),u*u+M*M>c*c+p*p&&(o=t,t=u+a,r=e,e=M+i,A=-A),0!=A){c+=u,c*=u=t<o?1:-1,p+=M,p*=M=e<r?1:-1,l=2*c*p,c*=c,p*=p,A*u*M<0&&(c=-c,p=-p,l=-l,A=-A),n=4*M*A*(a-t)+c-l,h=4*u*A*(e-i)+p-l,c+=c,p+=p,d=n+h+l;do{if(setPixel(t,e),t==o&&e==r)return;i=2*d<n,2*d>h&&(t+=u,n-=l,d+=h+=p),i&&(e+=M,h-=l,d+=n+=c)}while(h<0&&n>0)}f(t,e,o,r)}function p(t,e,a,i,o,r){var l,n=t-a,h=e-i,s=t-2*a+o;n*(o-a)>0&&(h*(r-i)>0&&Math.abs((e-2*i+r)/s*n)>Math.abs(h)&&(t=o,o=n+a,e=r,r=h+i),s=(t-a)/s,l=(1-s)*((1-s)*e+2*s*i)+s*s*r,s=(t*o-a*a)*s/(t-a),n=Math.floor(s+.5),h=Math.floor(l+.5),l=(i-e)*(s-t)/(a-t)+e,c(t,e,n,Math.floor(l+.5),n,h),l=(i-r)*(s-o)/(a-o)+r,t=a=n,e=h,i=Math.floor(l+.5)),(e-i)*(r-i)>0&&(s=e-2*i+r,s=(e-i)/s,l=(1-s)*((1-s)*t+2*s*a)+s*s*o,s=(e*r-i*i)*s/(e-i),n=Math.floor(l+.5),h=Math.floor(s+.5),l=(a-t)*(s-e)/(i-e)+t,c(t,e,Math.floor(l+.5),h,n,h),l=(a-o)*(s-r)/(i-r)+o,t=n,a=Math.floor(l+.5),e=i=h),c(t,e,a,i,o,r)}function A(t,e,a,i,o,r,l){var n,h=o-a,d=r-i,u=t-o,M=e-r,c=t-a,p=e-i,b=c*d+p*h,x=c*d-p*h;if(s(c*h<=0&&p*d<=0),0!=x&&l>0){if(h*h+d*d>c*c+p*p&&(o=t,t-=u,r=e,e-=M,x=-x),c=2*(4*l*h*c+u*u),p=2*(4*l*d*p+M*M),h=t<o?1:-1,d=e<r?1:-1,b=-2*h*d*(2*l*b+u*M),x*h*d<0&&(c=-c,p=-p,b=-b,x=-x),u=4*l*(a-t)*d*x+c/2+b,M=4*l*(e-i)*h*x+p/2+b,l<.5&&(M>b||u<b))return x=(l+1)/2,l=Math.sqrt(l),b=1/(l+1),h=Math.floor((t+2*l*a+o)*b/2+.5),d=Math.floor((e+2*l*i+r)*b/2+.5),u=Math.floor((l*a+t)*b+.5),M=Math.floor((i*l+e)*b+.5),A(t,e,u,M,h,d,x),u=Math.floor((l*a+o)*b+.5),M=Math.floor((i*l+r)*b+.5),void A(h,d,u,M,o,r,x);n=u+M-b;do{if(setPixel(t,e),t==o&&e==r)return;a=2*n>M,i=2*(n+p)<-M,(2*n<u||i)&&(e+=d,M+=b,n+=u+=c),(2*n>u||a)&&(t+=h,u+=b,n+=M+=p)}while(M<=b&&u>=b)}f(t,e,o,r)}function b(t,e,a,i,o,r,l){var n,h,f,d=t-2*a+o,u=e-2*i+r,M=t-a,c=e-i;s(l>=0),M*(o-a)>0&&(c*(r-i)>0&&Math.abs(M*u)>Math.abs(c*d)&&(t=o,o=M+a,e=r,r=c+i),t==o||1==l?h=(t-a)/d:(f=Math.sqrt(4*l*l*(t-a)*(o-a)+(o-t)*(o-t)),a<t&&(f=-f),h=(2*l*(t-a)-t+o+f)/(2*(1-l)*(o-t))),f=1/(2*h*(1-h)*(l-1)+1),M=(h*h*(t-2*l*a+o)+2*h*(l*a-t)+t)*f,c=(h*h*(e-2*l*i+r)+2*h*(l*i-e)+e)*f,n=h*(l-1)+1,n*=n*f,l=((1-h)*(l-1)+1)*Math.sqrt(f),d=Math.floor(M+.5),u=Math.floor(c+.5),c=(M-t)*(i-e)/(a-t)+e,A(t,e,d,Math.floor(c+.5),d,u,n),c=(M-o)*(i-r)/(a-o)+r,i=Math.floor(c+.5),t=a=d,e=u),(e-i)*(r-i)>0&&(e==r||1==l?h=(e-i)/(e-2*i+r):(f=Math.sqrt(4*l*l*(e-i)*(r-i)+(r-e)*(r-e)),i<e&&(f=-f),h=(2*l*(e-i)-e+r+f)/(2*(1-l)*(r-e))),f=1/(2*h*(1-h)*(l-1)+1),M=(h*h*(t-2*l*a+o)+2*h*(l*a-t)+t)*f,c=(h*h*(e-2*l*i+r)+2*h*(l*i-e)+e)*f,n=h*(l-1)+1,n*=n*f,l=((1-h)*(l-1)+1)*Math.sqrt(f),d=Math.floor(M+.5),u=Math.floor(c+.5),M=(a-t)*(c-e)/(i-e)+t,A(t,e,Math.floor(M+.5),u,d,u,n),M=(a-o)*(c-r)/(i-r)+o,a=Math.floor(M+.5),t=d,e=i=u),A(t,e,a,i,o,r,l*l)}function x(t,e,a,i,o){var r=a*a,l=i*i,n=Math.sin(o),h=(r-l)*n;r=Math.sqrt(r-h*n),l=Math.sqrt(l+h*n),a=Math.floor(r+.5),i=Math.floor(l+.5),h=h*a*i/(r*l),P(t-a,e-i,t+a,e+i,4*h*Math.cos(o))}function P(t,e,a,i,o){var r=a-t,l=i-e,n=r*l;if(0==o)return M(t,e,a,i);0!=n&&(n=(n-o)/(n+n)),s(n<=1&&n>=0),r=Math.floor(r*n+.5),l=Math.floor(l*n+.5),A(t,e+l,t,e,t+r,e,1-n),A(t,e+l,t,i,a-r,i,n),A(a,i-l,a,i,a-r,i,1-n),A(a,i-l,a,e,t+r,e,n)}function W(t,e,a,i,o,r,l,n){var h,d,u,M,p,A,b,x,P,W,v,R,w,B,z=1,m=t<l?1:-1,Q=e<n?1:-1,k=-Math.abs(t+a-o-l),g=k-4*m*(a-o),q=m*(t-a-o+l),S=-Math.abs(e+i-r-n),y=S-4*Q*(i-r),L=Q*(e-i-r+n),E=.01;if(s((a-t)*(o-l)<E&&((l-t)*(a-o)<E||q*q<g*k+E)),s((i-e)*(r-n)<E&&((n-e)*(i-r)<E||L*L<y*S+E)),0==g&&0==y)return c(t,e,3*a-t>>1,3*i-e>>1,l,n);a=(a-t)*(a-t)+(i-e)*(i-e)+1,o=(o-l)*(o-l)+(r-n)*(r-n)+1;do{M=g*L-q*y,p=g*S-k*y,A=q*S-k*L,w=M*(M+p-3*A)+p*p,h=w>0?1:Math.floor(Math.sqrt(1+1024/a)),M*=h,p*=h,A*=h,w*=h*h,P=9*(M+p+A)/8,b=8*(g-y),v=27*(8*M*(L*L-y*S)+w*(y+2*L+S))/64-y*y*(P-y),R=27*(8*M*(q*q-g*k)-w*(g+2*q+k))/64-g*g*(P+g),x=3*(3*M*(3*L*L-y*y-2*y*S)-y*(3*p*(y+L)+y*b))/4,W=3*(3*M*(3*q*q-g*g-2*g*k)-g*(3*p*(g+q)+g*b))/4,P=g*y*(6*M+6*p-3*A+b),p=y*y,b=g*g,P=3*(P+9*h*(b*L*S-q*k*p)-18*q*L*M)/8,w<0&&(v=-v,R=-R,x=-x,W=-W,P=-P,p=-p,b=-b),M=6*y*p,p*=-6*g,A=6*y*b,b*=-6*g,v+=P,w=v+R,R+=P;t:for(B=0,d=u=h;t!=l&&e!=n;){setPixel(t,e);do{if(0==B&&(v>P||R<P))break t;if(1==B&&(v>0||R<0))break t;if(i=2*w-R,2*w>=v)d--,w+=v+=x,R+=P+=p,W+=A,x+=M;else if(i>0)break t;i<=0&&(u--,w+=R+=W,v+=P+=A,x+=p,W+=b)}while(d>0&&u>0);2*d<=h&&(t+=m,d+=h),2*u<=h&&(e+=Q,u+=h),0==B&&v<0&&R>0&&(B=1)}x=t,t=l,l=x,m=-m,q=-q,W=e,e=n,n=W,Q=-Q,L=-L,a=o}while(z--);f(t,e,l,n)}function v(t,e,a,i,o,r,l,n){var h,s,f,d,u,M,c,p=0,A=0,b=t+a-o-l,x=b-4*(a-o),P=t-a-o+l,v=P+4*(a+o),R=e+i-r-n,w=R-4*(i-r),B=e-i-r+n,z=B+4*(i+r),m=t,Q=e,k=P*P-x*b,g=new Array(5);for(0==x?Math.abs(b)<2*Math.abs(P)&&(g[p++]=b/(2*P)):k>0&&(c=Math.sqrt(k),k=(P-c)/x,Math.abs(k)<1&&(g[p++]=k),k=(P+c)/x,Math.abs(k)<1&&(g[p++]=k)),k=B*B-w*R,0==w?Math.abs(R)<2*Math.abs(B)&&(g[p++]=R/(2*B)):k>0&&(c=Math.sqrt(k),k=(B-c)/w,Math.abs(k)<1&&(g[p++]=k),k=(B+c)/w,Math.abs(k)<1&&(g[p++]=k)),A=1;A<p;A++)(k=g[A-1])>g[A]&&(g[A-1]=g[A],g[A]=k,A=0);for(k=-1,g[p]=1,A=0;A<=p;A++)c=g[A],h=(k*(k*P-2*b)-c*(k*(k*x-2*P)+b)+v)/8-m,d=(k*(k*B-2*R)-c*(k*(k*w-2*B)+R)+z)/8-Q,s=(c*(c*P-2*b)-k*(c*(c*x-2*P)+b)+v)/8-m,u=(c*(c*B-2*R)-k*(c*(c*w-2*B)+R)+z)/8-Q,m-=f=(c*(c*(3*P-c*x)-3*b)+v)/8,Q-=M=(c*(c*(3*B-c*w)-3*R)+z)/8,l=Math.floor(f+.5),n=Math.floor(M+.5),0!=m&&(h*=m=(t-l)/m,s*=m),0!=Q&&(d*=Q=(e-n)/Q,u*=Q),t==l&&e==n||W(t,e,t+h,e+d,t+s,e+u,l,n),t=l,e=n,m=f,Q=M,k=c}function R(t,e,a,i){for(var o,r,l=Math.abs(a-t),n=t<a?1:-1,h=Math.abs(i-e),s=e<i?1:-1,f=l-h,d=l+h==0?1:Math.sqrt(l*l+h*h);;){if(setPixelAA(t,e,255*Math.abs(f-l+h)/d),o=f,r=t,2*o>=-l){if(t==a)break;o+h<d&&setPixelAA(t,e+s,255*(o+h)/d),f-=h,t+=n}if(2*o<=h){if(e==i)break;l-o<d&&setPixelAA(r+n,e,255*(l-o)/d),f+=l,e+=s}}}function w(t,e,a){var i,o,r,l=a,n=0,h=2-2*a;for(a=1-h;;){if(i=255*Math.abs(h+2*(l+n)-2)/a,setPixelAA(t+l,e-n,i),setPixelAA(t+n,e+l,i),setPixelAA(t-l,e+n,i),setPixelAA(t-n,e-l,i),0==l)break;r=h,o=l,h>n&&(i=255*(h+2*l-1)/a,i<255&&(setPixelAA(t+l,e-n+1,i),setPixelAA(t+n-1,e+l,i),setPixelAA(t-l,e+n-1,i),setPixelAA(t-n+1,e-l,i)),h-=2*--l-1),r<=o--&&(i=255*(1-2*n-r)/a,i<255&&(setPixelAA(t+o,e-n,i),setPixelAA(t+n,e+o,i),setPixelAA(t-o,e+n,i),setPixelAA(t-n,e-o,i)),h-=2*--n-1)}}function B(t,e,a,i){var o,r,l,n=Math.abs(a-t),h=Math.abs(i-e),s=1&h,d=4*(n-1)*h*h,u=4*(s+1)*n*n,M=s*n*n-d+u;if(0==n||0==h)return f(t,e,a,i);for(t>a&&(t=a,a+=n),e>i&&(e=i),e+=h+1>>1,i=e-s,n*=8*n,s=8*h*h;;){if(l=Math.min(d,u),r=Math.max(d,u),r=e==i+1&&M>u&&n>s?1020/n:255/(r+2*r*l*l/(4*r*r+l*l)),l=r*Math.abs(M+d-u),setPixelAA(t,e,l),setPixelAA(t,i,l),setPixelAA(a,e,l),setPixelAA(a,i,l),o=2*M+u>=0){if(t>=a)break;l=r*(M+d),l<256&&(setPixelAA(t,e+1,l),setPixelAA(t,i-1,l),setPixelAA(a,e+1,l),setPixelAA(a,i-1,l))}2*M<=d&&(l=r*(u-M),l<256&&(setPixelAA(t+1,e,l),setPixelAA(a-1,e,l),setPixelAA(t+1,i,l),setPixelAA(a-1,i,l)),e++,i--,M+=u+=n),o&&(t++,a--,M-=d-=s)}if(--t==a++)while(e-i<h)l=1020*Math.abs(M+d)/s,setPixelAA(t,++e,l),setPixelAA(a,e,l),setPixelAA(t,--i,l),setPixelAA(a,i,l),M+=u+=n}function z(t,e,a,i,o,r){var l,n,h,f,d,u=o-a,M=r-i,c=t-a,p=e-i,A=c*M-p*u;if(s(c*u<=0&&p*M<=0),u*u+M*M>c*c+p*p&&(o=t,t=u+a,r=e,e=M+i,A=-A),0!=A){c+=u,c*=u=t<o?1:-1,p+=M,p*=M=e<r?1:-1,l=2*c*p,c*=c,p*=p,A*u*M<0&&(c=-c,p=-p,l=-l,A=-A),n=4*M*(a-t)*A+c-l,h=4*u*(e-i)*A+p-l,c+=c,p+=p,f=n+h+l;do{if(A=Math.min(n+l,-l-h),d=Math.max(n+l,-l-h),d+=2*d*A*A/(4*d*d+A*A),setPixelAA(t,e,255*Math.abs(f-n-h-l)/d),t==o||e==r)break;a=t,A=n-f,i=2*f+h<0,2*f+n>0&&(f-h<d&&setPixelAA(t,e+M,255*Math.abs(f-h)/d),t+=u,n-=l,f+=h+=p),i&&(A<d&&setPixelAA(a+u,e,255*Math.abs(A)/d),e+=M,h-=l,f+=n+=c)}while(h<n)}R(t,e,o,r)}function m(t,e,a,i,o,r){var l,n=t-a,h=e-i,s=t-2*a+o;n*(o-a)>0&&(h*(r-i)>0&&Math.abs((e-2*i+r)/s*n)>Math.abs(h)&&(t=o,o=n+a,e=r,r=h+i),s=(t-a)/s,l=(1-s)*((1-s)*e+2*s*i)+s*s*r,s=(t*o-a*a)*s/(t-a),n=Math.floor(s+.5),h=Math.floor(l+.5),l=(i-e)*(s-t)/(a-t)+e,z(t,e,n,Math.floor(l+.5),n,h),l=(i-r)*(s-o)/(a-o)+r,t=a=n,e=h,i=Math.floor(l+.5)),(e-i)*(r-i)>0&&(s=e-2*i+r,s=(e-i)/s,l=(1-s)*((1-s)*t+2*s*a)+s*s*o,s=(e*r-i*i)*s/(e-i),n=Math.floor(l+.5),h=Math.floor(s+.5),l=(a-t)*(s-e)/(i-e)+t,z(t,e,Math.floor(l+.5),h,n,h),l=(a-o)*(s-r)/(i-r)+o,t=n,a=Math.floor(l+.5),e=i=h),z(t,e,a,i,o,r)}function Q(t,e,a,i,o,r,l){var n,h,f,d=o-a,u=r-i,M=t-o,c=e-r,p=t-a,A=e-i,b=p*u+A*d,x=p*u-A*d;if(s(p*d<=0&&A*u<=0),0!=x&&l>0){if(d*d+u*u>p*p+A*A&&(o=t,t-=M,r=e,e-=c,x=-x),p=2*(4*l*d*p+M*M),A=2*(4*l*u*A+c*c),d=t<o?1:-1,u=e<r?1:-1,b=-2*d*u*(2*l*b+M*c),x*d*u<0&&(p=-p,A=-A,x=-x,b=-b),M=4*l*(a-t)*u*x+p/2+b,c=4*l*(e-i)*d*x+A/2+b,l<.5&&c>M)return x=(l+1)/2,l=Math.sqrt(l),b=1/(l+1),d=Math.floor((t+2*l*a+o)*b/2+.5),u=Math.floor((e+2*l*i+r)*b/2+.5),M=Math.floor((l*a+t)*b+.5),c=Math.floor((i*l+e)*b+.5),Q(t,e,M,c,d,u,x),M=Math.floor((l*a+o)*b+.5),c=Math.floor((i*l+r)*b+.5),Q(d,u,M,c,o,r,x);n=M+c-b;do{if(x=Math.min(M-b,b-c),h=Math.max(M-b,b-c),h+=2*h*x*x/(4*h*h+x*x),a=255*Math.abs(n-M-c+b)/h,a<256&&setPixelAA(t,e,a),f=2*n+c<0){if(e==r)return;M-n<h&&setPixelAA(t+d,e,255*Math.abs(M-n)/h)}if(2*n+M>0){if(t==o)return;n-c<h&&setPixelAA(t,e+u,255*Math.abs(n-c)/h),t+=d,M+=b,n+=c+=A}f&&(e+=u,c+=b,n+=M+=p)}while(c<M)}R(t,e,o,r)}function k(t,e,a,i,o,r,l){var n,h,f,d=t-2*a+o,u=e-2*i+r,M=t-a,c=e-i;s(l>=0),M*(o-a)>0&&(c*(r-i)>0&&Math.abs(M*u)>Math.abs(c*d)&&(t=o,o=M+a,e=r,r=c+i),t==o||1==l?h=(t-a)/d:(f=Math.sqrt(4*l*l*(t-a)*(o-a)+(o-t)*(o-t)),a<t&&(f=-f),h=(2*l*(t-a)-t+o+f)/(2*(1-l)*(o-t))),f=1/(2*h*(1-h)*(l-1)+1),M=(h*h*(t-2*l*a+o)+2*h*(l*a-t)+t)*f,c=(h*h*(e-2*l*i+r)+2*h*(l*i-e)+e)*f,n=h*(l-1)+1,n*=n*f,l=((1-h)*(l-1)+1)*Math.sqrt(f),d=Math.floor(M+.5),u=Math.floor(c+.5),c=(M-t)*(i-e)/(a-t)+e,Q(t,e,d,Math.floor(c+.5),d,u,n),c=(M-o)*(i-r)/(a-o)+r,i=Math.floor(c+.5),t=a=d,e=u),(e-i)*(r-i)>0&&(e==r||1==l?h=(e-i)/(e-2*i+r):(f=Math.sqrt(4*l*l*(e-i)*(r-i)+(r-e)*(r-e)),i<e&&(f=-f),h=(2*l*(e-i)-e+r+f)/(2*(1-l)*(r-e))),f=1/(2*h*(1-h)*(l-1)+1),M=(h*h*(t-2*l*a+o)+2*h*(l*a-t)+t)*f,c=(h*h*(e-2*l*i+r)+2*h*(l*i-e)+e)*f,n=h*(l-1)+1,n*=n*f,l=((1-h)*(l-1)+1)*Math.sqrt(f),d=Math.floor(M+.5),u=Math.floor(c+.5),M=(a-t)*(c-e)/(i-e)+t,Q(t,e,Math.floor(M+.5),u,d,u,n),M=(a-o)*(c-r)/(i-r)+o,a=Math.floor(M+.5),t=d,e=i=u),Q(t,e,a,i,o,r,l*l)}function g(t,e,a,i,o){var r=a*a,l=i*i,n=Math.sin(o),h=(r-l)*n;r=Math.sqrt(r-h*n),l=Math.sqrt(l+h*n),a=Math.floor(r+.5),i=Math.floor(l+.5),h=h*a*i/(r*l),q(t-a,e-i,t+a,e+i,4*h*Math.cos(o))}function q(t,e,a,i,o){var r=a-t,l=i-e,n=r*l;0!=n&&(n=(n-o)/(n+n)),s(n<=1&&n>=0),r=Math.floor(r*n+.5),l=Math.floor(l*n+.5),Q(t,e+l,t,e,t+r,e,1-n),Q(t,e+l,t,i,a-r,i,n),Q(a,i-l,a,i,a-r,i,1-n),Q(a,i-l,a,e,t+r,e,n)}function S(t,e,a,i,o,r,l,n){var h,f,d,u,M,c,p,A,b,x,P,W,v,w,B,m,Q,k=1,g=t<l?1:-1,q=e<n?1:-1,S=-Math.abs(t+a-o-l),y=S-4*g*(a-o),L=g*(t-a-o+l),E=-Math.abs(e+i-r-n),_=E-4*q*(i-r),O=q*(e-i-r+n),j=.01;if(s((a-t)*(o-l)<j&&((l-t)*(a-o)<j||L*L<y*S+j)),s((i-e)*(r-n)<j&&((n-e)*(i-r)<j||O*O<_*E+j)),0==y&&0==_)return z(t,e,3*a-t>>1,3*i-e>>1,l,n);a=(a-t)*(a-t)+(i-e)*(i-e)+1,o=(o-l)*(o-l)+(r-n)*(r-n)+1;t:do{u=y*O-L*_,M=y*E-S*_,c=L*E-S*O,Q=4*u*c-M*M,v=u*(u+M-3*c)+M*M,h=v>0?1:Math.floor(Math.sqrt(1+1024/a)),u*=h,M*=h,c*=h,v*=h*h,b=9*(u+M+c)/8,p=8*(y-_),P=27*(8*u*(O*O-_*E)+v*(_+2*O+E))/64-_*_*(b-_),W=27*(8*u*(L*L-y*S)-v*(y+2*L+S))/64-y*y*(b+y),A=3*(3*u*(3*O*O-_*_-2*_*E)-_*(3*M*(_+O)+_*p))/4,x=3*(3*u*(3*L*L-y*y-2*y*S)-y*(3*M*(y+L)+y*p))/4,b=y*_*(6*u+6*M-3*c+p),M=_*_,p=y*y,b=3*(b+9*h*(p*O*E-L*S*M)-18*L*O*u)/8,v<0&&(P=-P,W=-W,A=-A,x=-x,b=-b,M=-M,p=-p),u=6*_*M,M*=-6*y,c=6*_*p,p*=-6*y,P+=b,v=P+W,W+=b;e:for(f=d=h;;){if(t==l||e==n)break t;i=Math.min(Math.abs(b-P),Math.abs(W-b)),m=Math.max(Math.abs(b-P),Math.abs(W-b)),m=h*(m+2*m*i*i/(4*m*m+i*i)),i=255*Math.abs(v-(h-f+1)*P-(h-d+1)*W+h*b)/m,i<256&&setPixelAA(t,e,i),w=Math.abs(v-(h-f+1)*P+(d-1)*W),B=Math.abs(v+(f-1)*P-(h-d+1)*W),r=e;do{if(Q>=-j&&(P+A>b||W+x<b))break e;if(i=2*v+P,2*v+W>0)f--,v+=P+=A,W+=b+=M,x+=c,A+=u;else if(i>0)break e;i<=0&&(d--,v+=W+=x,P+=b+=c,A+=M,x+=p)}while(f>0&&d>0);2*d<=h&&(B<m&&setPixelAA(t+g,e,255*B/m),e+=q,d+=h),2*f<=h&&(w<m&&setPixelAA(t,r+q,255*w/m),t+=g,f+=h)}2*v<W&&2*d<=h+2&&(B<m&&setPixelAA(t+g,e,255*B/m),e+=q),2*v>P&&2*f<=h+2&&(w<m&&setPixelAA(t,r+q,255*w/m),t+=g),A=t,t=l,l=A,g=-g,L=-L,x=e,e=n,n=x,q=-q,O=-O,a=o}while(k--);R(t,e,l,n)}function y(t,e,a,i,o,r,l,n){var h,s,f,d,u,M,c,p=0,A=0,b=t+a-o-l,x=b-4*(a-o),P=t-a-o+l,W=P+4*(a+o),v=e+i-r-n,R=v-4*(i-r),w=e-i-r+n,B=w+4*(i+r),z=t,m=e,Q=P*P-x*b,k=new Array(5);for(0==x?Math.abs(b)<2*Math.abs(P)&&(k[p++]=b/(2*P)):Q>0&&(c=Math.sqrt(Q),Q=(P-c)/x,Math.abs(Q)<1&&(k[p++]=Q),Q=(P+c)/x,Math.abs(Q)<1&&(k[p++]=Q)),Q=w*w-R*v,0==R?Math.abs(v)<2*Math.abs(w)&&(k[p++]=v/(2*w)):Q>0&&(c=Math.sqrt(Q),Q=(w-c)/R,Math.abs(Q)<1&&(k[p++]=Q),Q=(w+c)/R,Math.abs(Q)<1&&(k[p++]=Q)),A=1;A<p;A++)(Q=k[A-1])>k[A]&&(k[A-1]=k[A],k[A]=Q,A=0);for(Q=-1,k[p]=1,A=0;A<=p;A++)c=k[A],h=(Q*(Q*P-2*b)-c*(Q*(Q*x-2*P)+b)+W)/8-z,d=(Q*(Q*w-2*v)-c*(Q*(Q*R-2*w)+v)+B)/8-m,s=(c*(c*P-2*b)-Q*(c*(c*x-2*P)+b)+W)/8-z,u=(c*(c*w-2*v)-Q*(c*(c*R-2*w)+v)+B)/8-m,z-=f=(c*(c*(3*P-c*x)-3*b)+W)/8,m-=M=(c*(c*(3*w-c*R)-3*v)+B)/8,l=Math.floor(f+.5),n=Math.floor(M+.5),0!=z&&(h*=z=(t-l)/z,s*=z),0!=m&&(d*=m=(e-n)/m,u*=m),t==l&&e==n||S(t,e,t+h,e+d,t+s,e+u,l,n),t=l,e=n,z=f,m=M,Q=c}function L(t,e,a,i,o){var r,l=Math.abs(a-t),n=t<a?1:-1,h=Math.abs(i-e),s=e<i?1:-1,f=Math.sqrt(l*l+h*h);if(o<=1||0==f)return R(t,e,a,i);if(l*=255/f,h*=255/f,o=255*(o-1),l<h)for(a=Math.round((f+o/2)/h),r=a*h-o/2,t-=a*n;;e+=s){for(setPixelAA(a=t,e,r),f=h-r-o;f+h<255;f+=h)setPixel(a+=n,e);if(setPixelAA(a+n,e,f),e==i)break;r+=l,r>255&&(r-=h,t+=n)}else for(i=Math.round((f+o/2)/l),r=i*l-o/2,e-=i*s;;t+=n){for(setPixelAA(t,i=e,r),f=l-r-o;f+l<255;f+=l)setPixel(t,i+=s);if(setPixelAA(t,i+s,f),t==a)break;r+=h,r>255&&(r-=l,e+=s)}}function E(t,e,a,i,o){var r,l,n,h,s=Math.abs(a-t),d=Math.abs(i-e),u=1&d,M=s-2*o,c=d-2*o,p=4*(s-1)*d*d,A=4*(u-1)*s*s,b=s+c,x=u*s*s;if(o<1.5)return B(t,e,a,i);if((o-1)*(2*d-o)>s*s&&(c=Math.sqrt(s*(d-s)*b*M)/(s-o)),(o-1)*(2*s-o)>d*d&&(M=Math.sqrt(d*(s-d)*b*c)/(d-o),o=(s-M)/2),0==s||0==d)return f(t,e,a,i);t>a&&(t=a,a+=s),e>i&&(e=i),c<=0&&(o=s),n=o-Math.floor(o),o=t+o-n,r=4*(M+2*n-1)*c*c,l=4*(u-1)*M*M,n*=r,e+=d+1>>1,i=e-u,s*=8*s,u=8*d*d,M*=8*M,c*=8*c;do{for(;;){if(x<0||t>a){b=t;break}if(b=Math.min(p,A),h=Math.max(p,A),e==i+1&&2*x>p&&s>u?h=s/4:h+=2*h*b*b/(4*h*h+b*b+1)+1,b=255*x/h,setPixelAA(t,e,b),setPixelAA(t,i,b),setPixelAA(a,e,b),setPixelAA(a,i,b),x+A+s<p){b=t+1;break}t++,a--,x-=p,p-=u}for(;b<o&&2*b<=t+a;b++)setPixel(b,e),setPixel(t+a-b,e),setPixel(b,i),setPixel(t+a-b,i);while(n>0&&t+a>=2*o){if(b=Math.min(r,l),h=Math.max(r,l),e==i+1&&2*n>r&&M>c?h=M/4:h+=2*h*b*b/(4*h*h+b*b),b=255-255*n/h,setPixelAA(o,e,b),setPixelAA(t+a-o,e,b),setPixelAA(o,i,b),setPixelAA(t+a-o,i,b),n+l+M<r)break;o++,n-=r,r-=c}n+=l+=M,e++,i--,x+=A+=s}while(t<a);if(e-i<=d)for(x>A+s&&(e--,i++,x-=A-=s);e-i<=d;x+=A+=s)b=1020*x/u,setPixelAA(t,e,b),setPixelAA(a,e++,b),setPixelAA(t,i,b),setPixelAA(a,i--,b)}function _(t,e,a,i,o,r,l,n){var h,f,d,u=o-a,M=r-i,c=t-o,p=e-r,A=t-a,b=e-i,x=A*M+b*u,P=A*M-b*u;if(s(A*u<=0&&b*M<=0),0!=P&&l>0){if(u*u+M*M>A*A+b*b&&(o=t,t-=c,r=e,e-=p,P=-P),A=2*(4*l*u*A+c*c),b=2*(4*l*M*b+p*p),u=t<o?1:-1,M=e<r?1:-1,x=-2*u*M*(2*l*x+c*p),P*u*M<0&&(A=-A,b=-b,P=-P,x=-x),c=4*l*(a-t)*M*P+A/2,p=4*l*(e-i)*u*P+b/2,l<.5&&(c+A<=0||p+b>=0))return P=(l+1)/2,l=fsqrt(l),x=1/(l+1),u=Math.floor((t+2*l*a+o)*x/2+.5),M=Math.floor((e+2*l*i+r)*x/2+.5),c=Math.floor((l*a+t)*x+.5),p=Math.floor((i*l+e)*x+.5),_(t,e,c,p,u,M,P,n),c=Math.floor((l*a+o)*x+.5),p=Math.floor((i*l+r)*x+.5),_(u,M,c,p,o,r,P,n);t:for(h=0;p+2*b<0&&c+2*A>0;)if(c+p+x<0){do{for(d=-p-2*p*c*c/(4*p*p+c*c),l=(n-1)*d,a=Math.floor((h-d-l/2)/p),f=h-a*p-l/2,a=t-a*u,setPixelAA(a,e,255*f/d),f=-l-p-f;f-p<d;f-=p)setPixel(a+=u,e);if(setPixelAA(a+u,e,255*f/d),e==r)return;if(e+=M,p+=x,h+=c,c+=A,2*h+p>0&&(t+=u,c+=x,h+=p,p+=b),t!=o&&(c+2*A<=0||p+2*b>=0)){if(Math.abs(r-e)>Math.abs(o-t))break t;break}}while(c+p+x<0);for(P=h-p-l/2,i=e;P<d;i+=M,P+=c){for(f=P,a=t;f-p<d;f-=p)setPixel(a-=u,i);setPixelAA(a-u,i,255*f/d)}}else{do{for(d=c+2*c*p*p/(4*c*c+p*p),l=(n-1)*d,i=Math.floor((h+d+l/2)/c),f=i*c-l/2-h,i=e-i*M,setPixelAA(t,i,255*f/d),f=c-f-l;f+c<d;f+=c)setPixel(t,i+=M);if(setPixelAA(t,i+M,255*f/d),t==o)return;if(t+=u,c+=x,h+=p,p+=b,2*h+c<0&&(e+=M,p+=x,h+=c,c+=A),e!=r&&(c+2*A<=0||p+2*b>=0)){if(Math.abs(r-e)<=Math.abs(o-t))break t;break}}while(c+p+x>=0);for(P=-h+c-l/2,a=t;P<d;a+=u,P-=p){for(f=P,i=e;f+c<d;f+=c)setPixel(a,i-=M);setPixelAA(a,i-M,255*f/d)}}}L(t,e,o,r,n)}function O(t,e,a,i,o,r,l,n){var h,f,d,u=t-2*a+o,M=e-2*i+r,c=t-a,p=e-i;s(l>=0),c*(o-a)>0&&(p*(r-i)>0&&Math.abs(c*M)>Math.abs(p*u)&&(t=o,o=c+a,e=r,r=p+i),t==o||1==l?f=(t-a)/u:(d=Math.sqrt(4*l*l*(t-a)*(o-a)+(o-t)*(o-t)),a<t&&(d=-d),f=(2*l*(t-a)-t+o+d)/(2*(1-l)*(o-t))),d=1/(2*f*(1-f)*(l-1)+1),c=(f*f*(t-2*l*a+o)+2*f*(l*a-t)+t)*d,p=(f*f*(e-2*l*i+r)+2*f*(l*i-e)+e)*d,h=f*(l-1)+1,h*=h*d,l=((1-f)*(l-1)+1)*Math.sqrt(d),u=Math.floor(c+.5),M=Math.floor(p+.5),p=(c-t)*(i-e)/(a-t)+e,_(t,e,u,Math.floor(p+.5),u,M,h,n),p=(c-o)*(i-r)/(a-o)+r,i=Math.floor(p+.5),t=a=u,e=M),(e-i)*(r-i)>0&&(e==r||1==l?f=(e-i)/(e-2*i+r):(d=Math.sqrt(4*l*l*(e-i)*(r-i)+(r-e)*(r-e)),i<e&&(d=-d),f=(2*l*(e-i)-e+r+d)/(2*(1-l)*(r-e))),d=1/(2*f*(1-f)*(l-1)+1),c=(f*f*(t-2*l*a+o)+2*f*(l*a-t)+t)*d,p=(f*f*(e-2*l*i+r)+2*f*(l*i-e)+e)*d,h=f*(l-1)+1,h*=h*d,l=((1-f)*(l-1)+1)*Math.sqrt(d),u=Math.floor(c+.5),M=Math.floor(p+.5),c=(a-t)*(p-e)/(i-e)+t,_(t,e,Math.floor(c+.5),M,u,M,h,n),c=(a-o)*(p-r)/(i-r)+o,a=Math.floor(c+.5),t=u,e=i=M),_(t,e,a,i,o,r,l*l,n)}function j(t,e,a,i,o,r){var l=a*a,n=i*i,h=Math.sin(o),s=(l-n)*h;l=Math.sqrt(l-s*h),n=Math.sqrt(n+s*h),a=Math.floor(l+.5),i=Math.floor(n+.5),s=s*a*i/(l*n),C(t-a,e-i,t+a,e+i,4*s*Math.cos(o),r)}function C(t,e,a,i,o,r){var l=a-t,n=i-e,h=l*n;0!=h&&(h=(h-o)/(h+h)),s(h<=1&&h>=0),l=Math.floor(l*h+.5),n=Math.floor(n*h+.5),_(t,e+n,t,e,t+l,e,1-h,r),_(t,e+n,t,i,a-l,i,h,r),_(a,i-n,a,i,a-l,i,1-h,r),_(a,i-n,a,e,t+l,e,h,r)}function N(t,e,a,i,o,r,l,n,h){var s,f,d,u,M,c,p,A=0,b=0,x=t+a-o-l,P=x-4*(a-o),W=t-a-o+l,v=W+4*(a+o),R=e+i-r-n,w=R-4*(i-r),B=e-i-r+n,z=B+4*(i+r),m=t,Q=e,k=W*W-P*x,g=new Array(7);for(0==P?Math.abs(x)<2*Math.abs(W)&&(g[A++]=x/(2*W)):k>0&&(p=Math.sqrt(k),k=(W-p)/P,Math.abs(k)<1&&(g[A++]=k),k=(W+p)/P,Math.abs(k)<1&&(g[A++]=k)),k=B*B-w*R,0==w?Math.abs(R)<2*Math.abs(B)&&(g[A++]=R/(2*B)):k>0&&(p=Math.sqrt(k),k=(B-p)/w,Math.abs(k)<1&&(g[A++]=k),k=(B+p)/w,Math.abs(k)<1&&(g[A++]=k)),k=2*(P*B-W*w),p=P*R-x*w,b=p*p-2*k*(W*R-x*B),b>0&&(b=Math.sqrt(b),g[A]=(p+b)/k,Math.abs(g[A])<1&&A++,g[A]=(p-b)/k,Math.abs(g[A])<1&&A++),b=1;b<A;b++)(k=g[b-1])>g[b]&&(g[b-1]=g[b],g[b]=k,b=0);for(k=-1,g[A]=1,b=0;b<=A;b++)p=g[b],s=(k*(k*W-2*x)-p*(k*(k*P-2*W)+x)+v)/8-m,u=(k*(k*B-2*R)-p*(k*(k*w-2*B)+R)+z)/8-Q,f=(p*(p*W-2*x)-k*(p*(p*P-2*W)+x)+v)/8-m,M=(p*(p*B-2*R)-k*(p*(p*w-2*B)+R)+z)/8-Q,m-=d=(p*(p*(3*W-p*P)-3*x)+v)/8,Q-=c=(p*(p*(3*B-p*w)-3*R)+z)/8,l=Math.floor(d+.5),n=Math.floor(c+.5),0!=m&&(s*=m=(t-l)/m,f*=m),0!=Q&&(u*=Q=(e-n)/Q,M*=Q),t==l&&e==n||$(t,e,t+s,e+u,t+f,e+M,l,n,h),t=l,e=n,m=d,Q=c,k=p}function $(t,e,a,i,o,r,l,n,h){var s=Math.floor((t+3*a+3*o+l+4)/8),f=Math.floor((e+3*i+3*r+n+4)/8);_(t,e,Math.floor((t+3*a+2)/4),Math.floor((e+3*i+2)/4),s,f,1,h),_(s,f,Math.floor((3*o+l+2)/4),Math.floor((3*r+n+2)/4),l,n,1,h)}var H,T,D,I,J={plotLine:f,plotEllipse:d,plotCircle:u,plotEllipseRect:M,plotQuadBezierSeg:c,plotQuadBezier:p,plotQuadRationalBezierSeg:A,plotQuadRationalBezier:b,plotRotatedEllipse:x,plotRotatedEllipseRect:P,plotCubicBezierSeg:W,plotCubicBezier:v,plotLineAA:R,plotCircleAA:w,plotEllipseRectAA:B,plotQuadBezierSegAA:z,plotQuadBezierAA:m,plotQuadRationalBezierSegAA:Q,plotQuadRationalBezierAA:k,plotRotatedEllipseAA:g,plotRotatedEllipseRectAA:q,plotCubicBezierSegAA:S,plotCubicBezierAA:y,plotLineWidth:L,plotEllipseRectWidth:E,plotQuadRationalBezierWidthSeg:_,plotQuadRationalBezierWidth:O,plotRotatedEllipseWidth:j,plotRotatedEllipseRectWidth:C,plotCubicBezierWidth:N,plotCubicBezierSegWidth:$},F=1;window.setPixel=function(t,e){t*=F,e*=F;for(var a=0;a<F;a++)for(var i=0;i<F;i++){var o=4*(t+a+(e+i)*D);T.data[o++]=255,T.data[o++]=255,T.data[o++]=255,T.data[o]=255}},window.setPixelAA=function(t,e,a){t*=F,e*=F;for(var i=0;i<F;i++)for(var o=0;o<F;o++){var r=4*(t+i+(e+o)*D),l=Math.max(T.data[r],255-a);T.data[r++]=l,T.data[r++]=l,T.data[r++]=l,T.data[r]=255}};var G=Object(h["a"])({init:function(t){H=t.getContext("2d"),D=t.width,I=t.height},begin:function(){T=H.getImageData(0,0,D,I)},clear:function(){T.data.fill(0)},end:function(){H.putImageData(T,0,0)},setPixel:window.setPixel,setPixelAA:window.setPixelAA},J),K={drawNumber:function(t,e,a){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:4,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,r=e-4*i,l=e+4*i,n=a-19*i,h=a-i;switch(t){case 0:G.plotEllipseRectWidth(r,n,l,h,o),G.plotEllipseRectWidth(e-i,a-11*i,e+i,a-9*i,o);break;case 1:G.plotQuadRationalBezierWidth(e,n,e,a-15*i,e-3*i,a-15*i,1,o),G.plotLineWidth(e,n,e,h,o),G.plotLineWidth(e-3*i,h,e+3*i,h,o);break;case 2:G.plotQuadRationalBezierWidth(l,a-15*i,l,n,e,n,1,o),G.plotQuadRationalBezierWidth(e,n,r,n,r,a-15*i,1,o),G.plotQuadRationalBezierWidth(e,a-8*i,l,a-12*i,l,a-15*i,1,o),G.plotQuadRationalBezierWidth(e,a-8*i,r,a-4*i,r,h,1,o),G.plotLineWidth(r,h,l,h,o);break;case 3:G.plotQuadRationalBezierWidth(r,a-6*i,r,h,e,h,1,o),G.plotQuadRationalBezierWidth(e,h,l,h,l,a-6*i,1,o),G.plotQuadRationalBezierWidth(l,a-6*i,l,a-11*i,e,a-11*i,1,o),G.plotQuadRationalBezierWidth(e,a-11*i,l,a-11*i,l,a-15*i,1,o),G.plotQuadRationalBezierWidth(l,a-15*i,l,n,e,n,1,o),G.plotQuadRationalBezierWidth(e,n,r,n,r,a-15*i,1,o);break;case 4:G.plotLineWidth(e+2*i,n,e+2*i,h,o),G.plotLineWidth(e+2*i,n,r,a-6*i,o),G.plotLineWidth(r,a-6*i,l,a-6*i,o);break;case 5:G.plotQuadRationalBezierWidth(r,a-6*i,r,h,e,h,1,o),G.plotQuadRationalBezierWidth(e,h,l,h,l,a-6*i,1,o),G.plotQuadRationalBezierWidth(l,a-6*i,l,a-12*i,e,a-12*i,1,o),G.plotQuadRationalBezierWidth(e,a-12*i,e-3*i,a-12*i,r,a-10*i,1,o),G.plotLineWidth(r,n,r,a-10*i,o),G.plotLineWidth(r,n,l,n,o);break;case 6:G.plotQuadRationalBezierWidth(r,a-6*i,r,h,e,h,1,o),G.plotQuadRationalBezierWidth(e,h,l,h,l,a-6*i,1,o),G.plotQuadRationalBezierWidth(l,a-6*i,l,a-12*i,e,a-12*i,1,o),G.plotQuadRationalBezierWidth(e,a-12*i,r,a-12*i,r,a-6*i,1,o),G.plotLineWidth(r,a-15*i,r,a-6*i,o),G.plotQuadRationalBezierWidth(e,n,r,n,r,a-15*i,1,o),G.plotQuadRationalBezierWidth(l,a-15*i,l,n,e,n,1,o);break;case 7:G.plotLineWidth(r,n,l,n,o),G.plotQuadRationalBezierWidth(l,n,e,a-10*i,e-2*i,h,1,o);break;case 8:G.plotQuadRationalBezierWidth(r,a-6*i,r,h,e,h,1,o),G.plotQuadRationalBezierWidth(e,h,l,h,l,a-6*i,1,o),G.plotQuadRationalBezierWidth(l,a-6*i,l,a-11*i,e,a-11*i,1,o),G.plotQuadRationalBezierWidth(e,a-11*i,r,a-11*i,r,a-6*i,1,o),G.plotQuadRationalBezierWidth(e,a-11*i,l,a-11*i,l,a-15*i,1,o),G.plotQuadRationalBezierWidth(l,a-15*i,l,n,e,n,1,o),G.plotQuadRationalBezierWidth(e,n,r,n,r,a-15*i,1,o),G.plotQuadRationalBezierWidth(r,a-15*i,r,a-11*i,e,a-11*i,1,o);break;case 9:G.plotQuadRationalBezierWidth(r,a-5*i,r,h,e,h,1,o),G.plotQuadRationalBezierWidth(e,h,l,h,l,a-5*i,1,o),G.plotLineWidth(l,a-14*i,l,a-5*i,o),G.plotQuadRationalBezierWidth(l,a-14*i,l,n,e,n,1,o),G.plotQuadRationalBezierWidth(e,n,r,n,r,a-14*i,1,o),G.plotQuadRationalBezierWidth(r,a-14*i,r,a-8*i,e,a-8*i,1,o),G.plotQuadRationalBezierWidth(e,a-8*i,l,a-8*i,l,a-14*i,1,o);break;default:G.plotLine(r,h,l,h),G.plotLine(e,a,e,n)}}},U={degreeCelcuis:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,o=t-4*a,r=t+4*a,l=e-19*a,n=e-a;G.plotEllipseRectWidth(o,l,r,n,i),G.plotEllipseRectWidth(t-a,e-11*a,t+a,e-9*a,i)},kilometersPerHour:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,o=t-4*a,r=e-19*a,l=e-a;G.plotLineWidth(o,r,o,l,i),G.plotLineWidth(t-3*a,e-6*a,t,e-12*a,i),G.plotLineWidth(t-3*a,e-6*a,t,l,i),G.plotLineWidth(t+2*a,e-12*a,t+2*a,l,i),G.plotQuadRationalBezierWidth(t+2*a,e-12*a,t+6*a,e-12*a,t+6*a,e-8*a,1,i),G.plotLineWidth(t+6*a,e-12*a,t+6*a,l,i),G.plotQuadRationalBezierWidth(t+6*a,e-12*a,t+10*a,e-12*a,t+10*a,e-8*a,1,i),G.plotLineWidth(t+10*a,e-8*a,t+10*a,l,i),G.plotLineWidth(t+13*a,r,t+11*a,l,i),G.plotLineWidth(t+14*a,r,t+14*a,l,i),G.plotQuadRationalBezierWidth(t+14*a,e-12*a,t+18*a,e-12*a,t+18*a,e-8*a,1,i),G.plotLineWidth(t+18*a,e-8*a,t+18*a,l,i)}},V={name:"Canvas",mounted:function(){G.init(this.$refs.canvas),this.draw()},methods:{clear:function(){G.begin(),G.clear(),G.end()},draw:function(){G.begin(),K.drawNumber(1,20,80),K.drawNumber(2,60,80),K.drawNumber(3,100,80),U.kilometersPerHour(140,80),K.drawNumber(1,20,120,2),K.drawNumber(2,40,120,2),K.drawNumber(3,60,120,2),U.kilometersPerHour(80,120,2),K.drawNumber(1,20,200),K.drawNumber(2,60,200),K.drawNumber(3,100,200),U.kilometersPerHour(130,150,1),K.drawNumber(5,140,200,2),G.end()}}},X=V,Y=(a("162a"),a("2877")),Z=Object(Y["a"])(X,l,n,!1,null,null,null),tt=Z.exports,et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:{"wide-screen":t.isWideScreen}},[t._t("default")],2)},at=[],it={name:"Screen",props:{isWideScreen:{type:Boolean,default:!1}}},ot=it,rt=(a("2faa"),Object(Y["a"])(ot,et,at,!1,null,null,null)),lt=rt.exports,nt={name:"App",components:{Canvas:tt,Screen:lt},data:function(){return{isWideScreen:!0}}},ht=nt,st=(a("034f"),Object(Y["a"])(ht,o,r,!1,null,null,null)),ft=st.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(ft)}}).$mount("#app")},"85ec":function(t,e,a){},"9b59":function(t,e,a){},"9d94":function(t,e,a){}});
//# sourceMappingURL=app.3811bd06.js.map