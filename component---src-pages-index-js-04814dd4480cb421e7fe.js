(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),l=r(a("VbXa")),o=r(a("8OQS")),s=r(a("pVnL")),c=r(a("q1tI")),d=r(a("17x9")),u=function(e){var t=(0,s.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed;return p(t||a).src},p=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),g=function(e){var t=u(e),a=m(t);return h[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,E=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),c.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function k(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var R=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},C=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?k(e,!0):"")+k(e)})).join("")+"<img "+c+l+o+a+r+t+n+i+s+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},T=c.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,l=e.ariaHidden,o=c.default.createElement(x,(0,s.default)({ref:t,src:a},n,{ariaHidden:l}));return r.length>1?c.default.createElement("picture",null,i(r),o):o})),x=c.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,l=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,s.default)({"aria-hidden":m,sizes:a,srcSet:r,src:i},p,{onLoad:l,onError:d,ref:t,loading:u,draggable:f,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));x.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var A=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&v&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||y&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.placeholderRef=t.placeholderRef||c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=R(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=m(t),h[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,l=e.imgStyle,o=void 0===l?{}:l,d=e.placeholderStyle,f=void 0===d?{}:d,m=e.placeholderClassName,h=e.fluid,g=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,E=e.itemProp,w=e.loading,k=e.draggable,R=!1===this.state.fadeIn||this.state.imgLoaded,A=!0===this.state.fadeIn&&!this.state.imgCached,N=(0,s.default)({opacity:R?1:0,transition:A?"opacity "+y+"ms":"none"},o),O="boolean"==typeof b?"lightgray":b,P={transitionDelay:y+"ms"},V=(0,s.default)({opacity:this.state.imgLoaded?0:1},A&&P,o,f),z={title:t,alt:this.state.isVisible?"":a,style:V,className:m,itemProp:E};if(h){var j=h,H=p(h);return c.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden",maxWidth:H.maxWidth?H.maxWidth+"px":null,maxHeight:H.maxHeight?H.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(H.srcSet)},c.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/H.aspectRatio+"%"}}),O&&c.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:O,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},A&&P)}),H.base64&&c.default.createElement(T,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:z,imageVariants:j,generateSources:L}),H.tracedSVG&&c.default.createElement(T,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:z,imageVariants:j,generateSources:I}),this.state.isVisible&&c.default.createElement("picture",null,S(j),c.default.createElement(x,{alt:a,title:t,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:k})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,s.default)({alt:a,title:t,loading:w},H,{imageVariants:j}))}}))}if(g){var W=g,M=p(g),_=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},n);return"inherit"===n.display&&delete _.display,c.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:_,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},O&&c.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:O,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},A&&P)}),M.base64&&c.default.createElement(T,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:z,imageVariants:W,generateSources:L}),M.tracedSVG&&c.default.createElement(T,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:z,imageVariants:W,generateSources:I}),this.state.isVisible&&c.default.createElement("picture",null,S(W),c.default.createElement(x,{alt:a,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:k})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,s.default)({alt:a,title:t,loading:w},M,{imageVariants:W}))}}))}return null},t}(c.default.Component);A.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var N=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),O=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string,maxWidth:d.default.number,maxHeight:d.default.number});A.propTypes={resolutions:N,sizes:O,fixed:d.default.oneOfType([N,d.default.arrayOf(N)]),fluid:d.default.oneOfType([O,d.default.arrayOf(O)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var P=A;t.default=P},ILy0:function(e,t,a){e.exports=a.p+"static/pic01-e5bada5872adf2568956347495474740.jpg"},JwsL:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a("q1tI"),i=a.n(r);a("obyI");function n(){return i.a.createElement("footer",{id:"footer"},i.a.createElement("h3",null,"Thanks for reading!"),i.a.createElement("p",{className:"copyright"},"© Fractals. Credits: ",i.a.createElement("a",{href:"http://html5up.net"},"HTML5 UP")))}},KmJa:function(e,t){e.exports={experience:[{employer:{company:"State Farm",title:"Software Developer",date:"04/2019 - Present",description:["Experience in building CI/CD pipelines on Gitlab for automated testing and deployments","Helped build and secure our internal API using various AWS services along with using OAuth2 framework for authorization and authentication with Azure AD","Worked with a variety of AWS services and deployed them using Terraform and our pipeline","Building a full stack web application on AWS using Javascript with React.js and Python for our backend API"]}},{employer:{company:"Aetna",title:"Associate Voice Engineer",date:"06/2017 - 04/2019",description:["Created a system to link post call surveys to appropriate agents by building a CTI logger application written in Java","Saving hundreds of work hours by automating call data migration processes, decryptions and parsing through metadata with scheduled Python and Powershell scripts.","Deployed Grafana and created a dashboard to monitor production servers","Developed and deployed applications by leveraging knowledge in in PHP, JSON/XML/VXML, database and server management","Migrating terabytes of data to and from vendors using AWS S3 CLI and AWS Snowball"]}},{employer:{company:"Arizona Air National Guard",title:"Crew Chief - Staff Sergeant",date:"10/2012 - 10/2018",description:["Inspecting, maintaining, and repairing the KC-135 to ensure the aircraft is safe for flight","Received The Air Force Achievement Medal on a TDY for saving the Air Force eight thousand dollars and preventing lost training time for 41 personnel in 2018"]}},{employer:{company:"Aetna",title:"Voice Engineer Intern",date:"Summer of 2015 and Summer of 2016",description:["Set up Avaya Gateways and Linux virtual machines to scale our environment","Configured and installed an Avaya Diagnostic Server to monitor thousands of VoIP phones","Developed an internal web application using ASP.Net to display call data by pulling from our MySQL Database"]}}],projects:[{work:{title:"Resume Page",description:"A page made to display my resume hosted on Github",technologies:"GatsbyJS and using Github actions to deploy",link:"https://midnightsea.github.io/Resume/"}},{work:{title:"Newsfeed Page",description:"A page to pull data from various news sources via an API based on input",technologies:"GatsbyJS, Redux, Newsapi.org,  and Github actions to deploy",link:"https://midnightsea.github.io/newsfeed/"}}],education:[{school:{name:"Arizona State University",date:"08/2014 - 05/2017",degree:"B.S. Computer Science (Information Assurance focus)",awards:"Summa Cum Luade, 3.96 GPA"}},{school:{name:"Community College of the Air Force",date:"10/2012 - 06/2018",degree:"A.S Aircraft Maintenance Technology",awards:null}}],skill_list:[{skill:{name:"AWS Certified Cloud Practitioner",icon:"icon fa-graduation-cap"}},{skill:{name:"AWS Certified Developer Associate",icon:"icon fa-amazon"}},{skill:{name:"Python and Javascript",icon:"icon fa-code"}},{skill:{name:"Git and CI/CD",icon:"icon fa-gitlab"}},{skill:{name:"Terraform",icon:"icon fa-sitemap"}}]}},RXBc:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),i=a.n(r),n=a("7oih");var l=a("dI71"),o=a("dwco"),s=a.n(o),c=function(e){return e.children},d=(i.a.Component,a("obyI")),u=a.n(d),f=a("KmJa"),m=a.n(f);function p(){return i.a.createElement("section",{className:"special"},i.a.createElement("h2",null,"Skills"),i.a.createElement("ul",{className:"icons labeled"},m.a.skill_list.map((function(e,t){return i.a.createElement("li",null,i.a.createElement("span",{className:e.skill.icon},i.a.createElement("span",{className:"label"},e.skill.name)))}))))}var h=a("Wbzz"),g=a("9eSz"),b=a.n(g);function y(){var e=Object(h.useStaticQuery)("3015753461");return i.a.createElement("section",{className:"spotlight"},i.a.createElement("div",{className:"image"},i.a.createElement(b.a,{fluid:e.placeholderImage.childImageSharp.fluid})),i.a.createElement("div",{className:"content"},i.a.createElement("h3",null,"Education"),m.a.education.map((function(e,t){return i.a.createElement("div",{key:"content_item_"+t},i.a.createElement("b",null,e.school.name)," ",i.a.createElement("br",null),e.school.date," ",i.a.createElement("br",null),e.school.degree," ",i.a.createElement("br",null),i.a.createElement("i",null,e.school.awards),i.a.createElement("br",null)," ",i.a.createElement("br",null))}))))}a("ILy0");function v(){return i.a.createElement("section",{className:"spotlight"},i.a.createElement("div",null,i.a.createElement("h2",null,"Experience"),m.a.experience.map((function(e,t){return i.a.createElement("div",{key:"content_item_"+t},i.a.createElement("b",null,e.employer.company)," ",i.a.createElement("br",null),e.employer.title,"  ",i.a.createElement("br",null),e.employer.date," ",i.a.createElement("br",null),i.a.createElement("ul",null,e.employer.description.map((function(e,t){return i.a.createElement("li",{key:"description_item_"+t},e)}))))}))))}function E(){var e=Object(h.useStaticQuery)("3860456562");return i.a.createElement("section",{className:"spotlight"},i.a.createElement("div",{className:"image"},i.a.createElement(b.a,{fluid:e.placeholderImage.childImageSharp.fluid})),i.a.createElement("div",{className:"content"},i.a.createElement("h3",null,"Projects"),m.a.projects.map((function(e,t){return i.a.createElement("div",{key:"content_item_"+t},i.a.createElement("b",null,e.work.title),i.a.createElement("br",null),e.work.description," ",i.a.createElement("br",null),"Tech used: ",e.work.technologies," ",i.a.createElement("br",null),e.work.link," ",i.a.createElement("br",null),i.a.createElement("br",null)," ",i.a.createElement("br",null))}))))}var S=a("JwsL");t.default=function(){return i.a.createElement(n.a,null,i.a.createElement("header",{id:"header"},i.a.createElement("div",{className:"content"},i.a.createElement("h1",null,i.a.createElement("a",{href:"/#"},u.a.heading)),i.a.createElement("p",null,u.a.subHeading," ",i.a.createElement("br",null)," ",u.a.location),i.a.createElement("ul",{className:"actions"},"Contact",u.a.socialLinks.map((function(e){var t=e.icon,a=e.url,r=e.name;return i.a.createElement("li",{key:a},i.a.createElement("a",{className:"icon "+t,href:a},i.a.createElement("span",{className:"label"},r)))}))))),i.a.createElement("section",{id:"two",className:"wrapper"},i.a.createElement("div",{className:"inner alt"},i.a.createElement(p,null),i.a.createElement(y,null),i.a.createElement(v,null),i.a.createElement(E,null))),i.a.createElement(S.a,null))}},dwco:function(e,t,a){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var a,r=e.HTMLElement||e.Element,i={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:r.prototype.scroll||o,scrollIntoView:r.prototype.scrollIntoView},n=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,l=(a=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(a)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?p.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):i.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(s(arguments[0])?i.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):p.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},r.prototype.scroll=r.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==s(arguments[0])){var e=arguments[0].left,t=arguments[0].top;p.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},r.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},r.prototype.scrollIntoView=function(){if(!0!==s(arguments[0])){var a=f(this),r=a.getBoundingClientRect(),n=this.getBoundingClientRect();a!==t.body?(p.call(this,a,a.scrollLeft+n.left-r.left,a.scrollTop+n.top-r.top),"fixed"!==e.getComputedStyle(a).position&&e.scrollBy({left:r.left,top:r.top,behavior:"smooth"})):e.scrollBy({left:n.left,top:n.top,behavior:"smooth"})}else i.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function o(e,t){this.scrollLeft=e,this.scrollTop=t}function s(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(e,t){return"Y"===t?e.clientHeight+l<e.scrollHeight:"X"===t?e.clientWidth+l<e.scrollWidth:void 0}function d(t,a){var r=e.getComputedStyle(t,null)["overflow"+a];return"auto"===r||"scroll"===r}function u(e){var t=c(e,"Y")&&d(e,"Y"),a=c(e,"X")&&d(e,"X");return t||a}function f(e){for(;e!==t.body&&!1===u(e);)e=e.parentNode||e.host;return e}function m(t){var a,r,i,l,o=(n()-t.startTime)/468;l=o=o>1?1:o,a=.5*(1-Math.cos(Math.PI*l)),r=t.startX+(t.x-t.startX)*a,i=t.startY+(t.y-t.startY)*a,t.method.call(t.scrollable,r,i),r===t.x&&i===t.y||e.requestAnimationFrame(m.bind(e,t))}function p(a,r,l){var s,c,d,u,f=n();a===t.body?(s=e,c=e.scrollX||e.pageXOffset,d=e.scrollY||e.pageYOffset,u=i.scroll):(s=a,c=a.scrollLeft,d=a.scrollTop,u=o),m({scrollable:s,method:u,startTime:f,startX:c,startY:d,x:r,y:l})}}}}()},obyI:function(e,t){e.exports={siteTitle:"Kevin Van",manifestName:"Resume",manifestShortName:"Resume",manifestStartUrl:"/",manifestBackgroundColor:"#663399",manifestThemeColor:"#663399",manifestDisplay:"standalone",manifestIcon:"src/assets/img/website-icon.png",pathPrefix:"/Resume",heading:"Kevin Van",subHeading:"Full Stack Developer. Loves learning new technologies  ",location:"Phoenix, Arizona",socialLinks:[{icon:"fa-github",name:"Github",url:"https://github.com/midnightsea"},{icon:"fa-envelope-o",name:"Email",url:"mailto:kevin.charles.van@gmail.com"}]}}}]);
//# sourceMappingURL=component---src-pages-index-js-04814dd4480cb421e7fe.js.map