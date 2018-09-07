!function(e){var r={};function t(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var a in e)t.d(n,a,function(r){return e[r]}.bind(null,a));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}([function(e,r,t){"use strict";var n=t(1),a=t(2),o=localStorage.getItem("convert-prev-script")||n.Script.RO;$("#box2").attr("script",o);var c=$("#pali-script-select");function u(){var e=n.TextProcessor.convertFromMixed($("#box1").val());console.log(e),$("#box2").val(n.TextProcessor.convert(e,o))}n.paliScriptInfo.forEach(function(e,r){a.Util.createLanguageSelectOption(r,e,"../../static/images/").appendTo(c)}),c.on("click",".option",function(e){var r=$(e.currentTarget);r.addClass("active").siblings().removeClass("active"),console.log("Pali script changing to "+r.attr("value")),o=r.attr("value"),localStorage.setItem("convert-prev-script",o),$("#box2").attr("script",o),u()}).children("[value="+o+"]").addClass("active"),$("#box1").on("change input paste keyup",function(e){var r=(0,n.getScriptForCode)($("#box1").val()?$("#box1").val().charCodeAt(0):0);$("#box1").attr("script",r),u()}),$("#copy-button").click(function(e){a.Util.copyText($("#box2").val()),a.Util.showToast("Your text in "+n.paliScriptInfo.get(o)[0]+" script has been copied to the clipboard. You can now paste it.")}),$("#menu-toggle").mousedown(function(e){$("#menu-list").animate({height:"toggle"},200),e.stopPropagation()}),$("#menu-list").mousedown(function(e){e.stopPropagation()}),$("body").mousedown(function(){$("#menu-list").animate({height:"hide"},350)})},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n,a,o,c,u,i=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}(),l=function(){return function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,r){var t=[],n=!0,a=!1,o=void 0;try{for(var c,u=e[Symbol.iterator]();!(n=(c=u.next()).done)&&(t.push(c.value),!r||t.length!==r);n=!0);}catch(e){a=!0,o=e}finally{try{!n&&u.return&&u.return()}finally{if(a)throw o}}return t}(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();function f(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var p=Object.freeze({SI:"si",HI:"hi",RO:"ro",THAI:"th",LAOS:"lo",MY:"my",KM:"km",BENG:"be",GURM:"gm",THAM:"tt",GUJA:"gj",TELU:"te",KANN:"ka",MALA:"mm",BRAH:"br",TIBT:"tb",CYRL:"cy"}),g=new Map([[p.SI,["Sinhala","සිංහල",[[3456,3583]],{f:"sl_flag.png"}]],[p.HI,["Devanagari","हिन्दी",[[2304,2431]],{f:"in_flag.png"}]],[p.RO,["Roman","Roman",[[0,383],[7680,7935]],{f:"uk_flag.png"}]],[p.THAI,["Thai","ไทย",[[3584,3711]],{f:"th_flag.png"}]],[p.LAOS,["Laos","ລາວ",[[3712,3839]],{f:"laos_flag.png"}]],[p.MY,["Myanmar","ဗမာစာ",[[4096,4223]],{f:"my_flag.png"}]],[p.KM,["Khmer","ភាសាខ្មែរ",[[6016,6143]],{f:"kh_flag.png"}]],[p.BENG,["Bengali","বাংলা",[[2432,2559]],{f:"bangla_flag.png"}]],[p.GURM,["Gurmukhi","ਗੁਰਮੁਖੀ",[[2560,2687]],{}]],[p.THAM,["Tai Tham","Tai Tham LN",[[6688,6831]],{c:"beta-script"}]],[p.GUJA,["Gujarati","ગુજરાતી",[[2688,2815]],{}]],[p.TELU,["Telugu","తెలుగు",[[3072,3199]],{}]],[p.KANN,["Kannada","ಕನ್ನಡ",[[3200,3327]],{}]],[p.MALA,["Malayalam","മലയാളം",[[3328,3455]],{}]],[p.BRAH,["Brahmi","Brāhmī",[[55300,55300],[56320,56447]],{}]],[p.TIBT,["Tibetan","བོད་སྐད།",[[3840,4095]],{f:"tibet_flag.png",c:"larger"}]],[p.CYRL,["Cyrillic","кириллица",[[1024,1279],[768,879]],{f:"russia_flag.png"}]]]);function s(e){var r=!0,t=!1,n=void 0;try{for(var a,o=g[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){var c=a.value,u=!0,i=!1,l=void 0;try{for(var f,p=c[1][2][Symbol.iterator]();!(u=(f=p.next()).done);u=!0){var s=f.value;if(e>=s[0]&&e<=s[1])return c[0]}}catch(e){i=!0,l=e}finally{try{!u&&p.return&&p.return()}finally{if(i)throw l}}}}catch(e){t=!0,n=e}finally{try{!r&&o.return&&o.return()}finally{if(t)throw n}}return-1}var v=(f(n={},p.SI,0),f(n,p.HI,1),f(n,p.RO,2),f(n,p.THAI,3),f(n,p.LAOS,4),f(n,p.MY,5),f(n,p.KM,6),f(n,p.BENG,7),f(n,p.GURM,8),f(n,p.THAM,9),f(n,p.GUJA,10),f(n,p.TELU,11),f(n,p.KANN,12),f(n,p.MALA,13),f(n,p.BRAH,14),f(n,p.TIBT,15),f(n,p.CYRL,16),n),h=[["අ","अ","a","อ","ອ","အ","អ","অ","ਅ","ᩋ","અ","అ","ಅ","അ","𑀅","ཨ","а"],["ආ","आ","ā","อา","ອາ","အာ","អា","আ","ਆ","ᩌ","આ","ఆ","ಆ","ആ","𑀆","ཨཱ","аа"],["ඉ","इ","i","อิ","ອິ","ဣ","ឥ","ই","ਇ","ᩍ","ઇ","ఇ","ಇ","ഇ","𑀇","ཨི","и"],["ඊ","ई","ī","อี","ອີ","ဤ","ឦ","ঈ","ਈ","ᩎ","ઈ","ఈ","ಈ","ഈ","𑀈","ཨཱི","ий"],["උ","उ","u","อุ","ອຸ","ဥ","ឧ","উ","ਉ","ᩏ","ઉ","ఉ","ಉ","ഉ","𑀉","ཨུ","у"],["ඌ","ऊ","ū","อู","ອູ","ဦ","ឩ","ঊ","ਊ","ᩐ","ઊ","ఊ","ಊ","ഊ","𑀊","ཨཱུ","уу"],["එ","ए","e","เอ","ເອ","ဧ","ឯ","এ","ਏ","ᩑ","એ","ఏ","ಏ","ഏ","𑀏","ཨེ","з"],["ඔ","ओ","o","โอ","ໂອ","ဩ","ឱ","ও","ਓ","ᩒ","ઓ","ఓ","ಓ","ഓ","𑀑","ཨོ","о"],["ං","ं","ṃ","ํ","ໍ","ံ","ំ","ং","ਂ","ᩴ","ં","ం","ಂ","ം","𑀁","ཾ","м̣"],["ඃ","ः","ḥ","ะ","ະ","း","ះ","ঃ","ਃ","ᩡ","ઃ","ః","ಃ","ഃ","𑀂","ཿ","х̣"],["්","्","","ฺ","຺","္","្","্","੍","","્","్","್","്","𑁆","྄",""],["0","०","0","๐","໐","၀","០","০","੦","᪐","૦","౦","೦","൦","𑁦","༠","0"],["1","१","1","๑","໑","၁","១","১","੧","᪑","૧","౧","೧","൧","𑁧","༡","1"],["2","२","2","๒","໒","၂","២","২","੨","᪒","૨","౨","೨","൨","𑁨","༢","2"],["3","३","3","๓","໓","၃","៣","৩","੩","᪓","૩","౩","೩","൩","𑁩","༣","3"],["4","४","4","๔","໔","၄","៤","৪","੪","᪔","૪","౪","೪","൪","𑁪","༤","4"],["5","५","5","๕","໕","၅","៥","৫","੫","᪕","૫","౫","೫","൫","𑁫","༥","5"],["6","६","6","๖","໖","၆","៦","৬","੬","᪖","૬","౬","೬","൬","𑁬","༦","6"],["7","७","7","๗","໗","၇","៧","৭","੭","᪗","૭","౭","೭","൭","𑁭","༧","7"],["8","८","8","๘","໘","၈","៨","৮","੮","᪘","૮","౮","೮","൮","𑁮","༨","8"],["9","९","9","๙","໙","၉","៩","৯","੯","᪙","૯","౯","೯","൯","𑁯","༩","9"]],d=[["ක","क","k","ก","ກ","က","ក","ক","ਕ","ᨠ","ક","క","ಕ","ക","𑀓","ཀ","г"],["ඛ","ख","kh","ข","ຂ","ခ","ខ","খ","ਖ","ᨡ","ખ","ఖ","ಖ","ഖ","𑀔","ཁ","к"],["ග","ग","g","ค","ຄ","ဂ","គ","গ","ਗ","ᨣ","ગ","గ","ಗ","ഗ","𑀕","ག","г̇"],["ඝ","घ","gh","ฆ","ຆ","ဃ","ឃ","ঘ","ਘ","ᨥ","ઘ","ఘ","ಘ","ഘ","𑀖","གྷ","гх"],["ඞ","ङ","ṅ","ง","ງ","င","ង","ঙ","ਙ","ᨦ","ઙ","ఙ","ಙ","ങ","𑀗","ང","н̇"],["ච","च","c","จ","ຈ","စ","ច","চ","ਚ","ᨧ","ચ","చ","ಚ","ച","𑀘","ཙ","ж"],["ඡ","छ","ch","ฉ","ຉ","ဆ","ឆ","ছ","ਛ","ᨨ","છ","ఛ","ಛ","ഛ","𑀙","ཚ","ч"],["ජ","ज","j","ช","ຊ","ဇ","ជ","জ","ਜ","ᨩ","જ","జ","ಜ","ജ","𑀚","ཛ","ж̇"],["ඣ","झ","jh","ฌ","ຌ","ဈ","ឈ","ঝ","ਝ","ᨫ","ઝ","ఝ","ಝ","ഝ","𑀛","ཛྷ","жх"],["ඤ","ञ","ñ","ญ","ຎ","ဉ","ញ","ঞ","ਞ","ᨬ","ઞ","ఞ","ಞ","ഞ","𑀜","ཉ","н̃"],["ට","ट","ṭ","ฏ","ຏ","ဋ","ដ","ট","ਟ","ᨭ","ટ","ట","ಟ","ട","𑀝","ཊ","д"],["ඨ","ठ","ṭh","ฐ","ຐ","ဌ","ឋ","ঠ","ਠ","ᨮ","ઠ","ఠ","ಠ","ഠ","𑀞","ཋ","т"],["ඩ","ड","ḍ","ฑ","ຑ","ဍ","ឌ","ড","ਡ","ᨯ","ડ","డ","ಡ","ഡ","𑀟","ཌ","д̣"],["ඪ","ढ","ḍh","ฒ","ຒ","ဎ","ឍ","ঢ","ਢ","ᨰ","ઢ","ఢ","ಢ","ഢ","𑀠","ཌྷ","дх"],["ණ","ण","ṇ","ณ","ຓ","ဏ","ណ","ণ","ਣ","ᨱ","ણ","ణ","ಣ","ണ","𑀡","ཎ","н̣"],["ත","त","t","ต","ຕ","တ","ត","ত","ਤ","ᨲ","ત","త","ತ","ത","𑀢","ཏ","д̇"],["ථ","थ","th","ถ","ຖ","ထ","ថ","থ","ਥ","ᨳ","થ","థ","ಥ","ഥ","𑀣","ཐ","т̇"],["ද","द","d","ท","ທ","ဒ","ទ","দ","ਦ","ᨴ","દ","ద","ದ","ദ","𑀤","ད","д̣̇"],["ධ","ध","dh","ธ","ຘ","ဓ","ធ","ধ","ਧ","ᨵ","ધ","ధ","ಧ","ധ","𑀥","དྷ","д̇х"],["න","न","n","น","ນ","န","ន","ন","ਨ","ᨶ","ન","న","ನ","ന","𑀦","ན","н"],["ප","प","p","ป","ປ","ပ","ប","প","ਪ","ᨸ","પ","ప","ಪ","പ","𑀧","པ","б"],["ඵ","फ","ph","ผ","ຜ","ဖ","ផ","ফ","ਫ","ᨹ","ફ","ఫ","ಫ","ഫ","𑀨","ཕ","п"],["බ","ब","b","พ","ພ","ဗ","ព","ব","ਬ","ᨻ","બ","బ","ಬ","ബ","𑀩","བ","б̣"],["භ","भ","bh","ภ","ຠ","ဘ","ភ","ভ","ਭ","ᨽ","ભ","భ","ಭ","ഭ","𑀪","བྷ","бх"],["ම","म","m","ม","ມ","မ","ម","ম","ਮ","ᨾ","મ","మ","ಮ","മ","𑀫","མ","м"],["ය","य","y","ย","ຍ","ယ","យ","য","ਯ","ᨿ","ય","య","ಯ","യ","𑀬","ཡ","я"],["ර","र","r","ร","ຣ","ရ","រ","র","ਰ","ᩁ","ર","ర","ರ","ര","𑀭","ར","р"],["ල","ल","l","ล","ລ","လ","ល","ল","ਲ","ᩃ","લ","ల","ಲ","ല","𑀮","ལ","л"],["ළ","ळ","ḷ","ฬ","ຬ","ဠ","ឡ","ল়","ਲ਼","ᩊ","ળ","ళ","ಳ","ള","𑀴","ལ༹","л̣"],["ව","व","v","ว","ວ","ဝ","វ","ৰ","ਵ","ᩅ","વ","వ","ವ","വ","𑀯","ཝ","в"],["ස","स","s","ส","ສ","သ","ស","স","ਸ","ᩈ","સ","స","ಸ","സ","𑀲","ས","с"],["හ","ह","h","ห","ຫ","ဟ","ហ","হ","ਹ","ᩉ","હ","హ","ಹ","ഹ","𑀳","ཧ","х"]],y=[["ා","ा","ā","า","າ","ာ","ា","া","ਾ","ᩤ","ા","ా","ಾ","ാ","𑀸","ཱ","аа"],["ි","ि","i","ิ","ິ","ိ","ិ","ি","ਿ","ᩥ","િ","ి","ಿ","ി","𑀺","ི","и"],["ී","ी","ī","ี","ີ","ီ","ី","ী","ੀ","ᩦ","ી","ీ","ೀ","ീ","𑀻","ཱི","ий"],["ු","ु","u","ุ","ຸ","ု","ុ","ু","ੁ","ᩩ","ુ","ు","ು","ു","𑀼","ུ","у"],["ූ","ू","ū","ู","ູ","ူ","ូ","ূ","ੂ","ᩪ","ૂ","ూ","ೂ","ൂ","𑀽","ཱུ","уу"],["ෙ","े","e","เ","ເ","ေ","េ","ে","ੇ","ᩮ","ે","ే","ೇ","േ","𑁂","ེ","з"],["ො","ो","o","โ","ໂ","ော","ោ","ো","ੋ","ᩫ","ો","ో","ೋ","ോ","𑁄","ོ","о"]];function m(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return"cen"==t?e=e.replace(/॥/g,""):t.startsWith("ga")&&(e=(e=e.replace(/।/g,";")).replace(/॥/g,".")),e=(e=(e=(e=e.replace(/॰…/g,"…")).replace(/॰/g,"·")).replace(/[।॥]/g,".")).replace(/\s([\s,!;\?\.])/g,"$1")}function b(e,r){arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r==p.THAI?e.replace(/([ก-ฮ])([เโ])/g,"$2$1"):r==p.LAOS?e.replace(/([ກ-ຮ])([ເໂ])/g,"$2$1"):void console.error("Unsupported script "+r+" for swap_e_o method.")}function A(e,r){return r==p.THAI?e.replace(/([เโ])([ก-ฮ])/g,"$2$1"):r==p.LAOS?e.replace(/([ເໂ])([ກ-ຮ])/g,"$2$1"):void 0}function T(e){return e.replace(/\u200C|\u200D/g,"")}var S=[],$=(f(a={},p.SI,[function(e,r){return arguments.length>2&&void 0!==arguments[2]&&arguments[2],e.replace(/\u0DCA([\u0DBA\u0DBB])/g,"්‍$1")},m]),f(a,p.RO,[m,function(e,r){return arguments.length>2&&void 0!==arguments[2]&&arguments[2],(e=(e=e.replace(/^(\S)/g,function(e,r){return r.toUpperCase()})).replace(/([\.\?]\s)(\S)/g,function(e,r,t){return""+r+t.toUpperCase()})).replace(/([\u201C‘])(\S)/g,function(e,r,t){return""+r+t.toUpperCase()})}]),f(a,p.THAI,[b,m]),f(a,p.LAOS,[b,m]),f(a,p.MY,[function(e,r){return arguments.length>2&&void 0!==arguments[2]&&arguments[2],(e=(e=(e=(e=(e=(e=(e=(e=(e=e.replace(/[,;]/g,"၊")).replace(/[\u2026\u0964\u0965]+/g,"။")).replace(/ဉ\u1039ဉ/g,"ည")).replace(/သ\u1039သ/g,"ဿ")).replace(/င္([က-ဠ])/g,"င်္$1")).replace(/္ယ/g,"ျ")).replace(/္ရ/g,"ြ")).replace(/္ဝ/g,"ွ")).replace(/္ဟ/g,"ှ")).replace(/([ခဂဒပဝ](:?္[က-ဠ])?ေ?)ာ/g,"$1ါ")},m]),f(a,p.KM,[m]),f(a,p.GUJA,[m]),f(a,p.TELU,[m]),f(a,p.MALA,[m]),f(a,p.BRAH,[function(e){return(e=(e=e.replace(/।/g,"𑁇")).replace(/॥/g,"𑁈")).replace(/–/g,"𑁋")},m]),f(a,p.TIBT,[function(e){e=(e=e.replace(/।/g,"།")).replace(/॥/g,"༎");for(var r=0;r<=39;r++)e=e.replace(new RegExp(String.fromCharCode(3972,3904+r),"g"),String.fromCharCode(3984+r));return(e=(e=(e=(e=e.replace(/\u0F61\u0FB1/g,"ཡྻ")).replace(/\u0F5D\u0FAD/g,"ཝྺ")).replace(/\u0F5B\u0FAC/g,"ཛ྄ཛྷ")).replace(/\u0F61\u0FB7/g,"ཡ྄ཧ")).replace(/\u0F5D\u0FB7/g,"ཝ྄ཧ")}]),f(a,p.CYRL,[m]),a),C=[],x=(f(o={},p.SI,[T]),f(o,p.HI,[T]),f(o,p.RO,[function(e){return e.toLowerCase()}]),f(o,p.THAI,[A]),f(o,p.LAOS,[A]),f(o,p.MY,[function(e){return(e=(e=(e=(e=(e=(e=(e=(e=(e=e.replace(/\u102B/g,"ာ")).replace(/ှ/g,"္ဟ")).replace(/ွ/g,"္ဝ")).replace(/ြ/g,"္ရ")).replace(/ျ/g,"္ယ")).replace(/\u103A/g,"")).replace(/ဿ/g,"သ္သ")).replace(/ည/g,"ဉ္ဉ")).replace(/၊/g,",")).replace(/။/g,".")}]),f(o,p.TIBT,[function(e){return e}]),o);function I(e,r){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=[[],[],[]];return d.concat(h,t?y:[]).forEach(function(t){t[e]&&n[t[e].length-1].push([t[e],t[r]])}),n.filter(function(e){return e.length}).map(function(e){return[e[0][0].length,new Map(e)]}).reverse()}function O(e,r){for(var t=new Array,n=0;n<e.length;){var a=!1,o=!0,c=!1,u=void 0;try{for(var i,f=r[Symbol.iterator]();!(o=(i=f.next()).done);o=!0){var p=i.value,g=l(p,2),s=g[0],v=g[1],h=e.substr(n,s);if(v.has(h)){t.push(v.get(h)),a=!0,n+=s;break}}}catch(e){c=!0,u=e}finally{try{!o&&f.return&&f.return()}finally{if(c)throw u}}a||(t.push(e.charAt(n)),n++)}return t.join("")}function M(e,r){var t=r==p.CYRL?"а":"a";return(e=(e=e.replace(new RegExp("([ක-ෆ])([^ා-ෟ්"+t+"])","g"),"$1"+t+"$2")).replace(new RegExp("([ක-ෆ])([^ා-ෟ්"+t+"])","g"),"$1"+t+"$2")).replace(/([ක-ෆ])$/g,"$1"+t)}var w={"අ":"","ආ":"ා","ඉ":"ි","ඊ":"ී","උ":"ු","ඌ":"ූ","එ":"ෙ","ඔ":"ො"};function R(e,r){return e=(e=(e=e.replace(/([ක-ෆ])([^අආඉඊඋඌඑඔ])/g,"$1්$2")).replace(/([ක-ෆ])$/g,"$1්")).replace(/([ක-ෆ])([අආඉඊඋඌඑඔ])/g,function(e,r,t){return r+w[t]})}var L=[E],B=(f(c={},p.SI,[]),f(c,p.RO,[M,E]),f(c,p.CYRL,[M,E]),c),k=[function(e,r){var t=I(v[r],v[p.SI]);return O(e,t)}],_=(f(u={},p.SI,[]),f(u,p.RO,[U,R]),f(u,p.CYRL,[U,R]),u);function E(e,r){return O(e,I(v[p.SI],v[r]))}function U(e,r){return O(e,I(v[r],v[p.SI],!1))}var j=function(){function e(){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e)}return i(e,null,[{key:"basicConvert",value:function(e,r){return(B[r]||L).forEach(function(t){return e=t(e,r)}),e}},{key:"basicConvertFrom",value:function(e,r){return(_[r]||k).forEach(function(t){return e=t(e,r)}),e}},{key:"beautify",value:function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return($[r]||S).forEach(function(n){return e=n(e,r,t)}),e}},{key:"convert",value:function(e,r){return e=this.basicConvert(e,r),this.beautify(e,r)}},{key:"convertFrom",value:function(e,r){return(x[r]||C).forEach(function(t){return e=t(e,r)}),this.basicConvertFrom(e,r)}},{key:"convertFromMixed",value:function(e){e=T(e)+" ";for(var r=-1,t="",n="",a=0;a<e.length;a++){var o=s(e.charCodeAt(a));o!=r||a==e.length-1?(console.log('process run: "'+t+'", i: '+a+", script: "+r),n+=this.convertFrom(t,r),r=o,t=e.charAt(a)):t+=e.charAt(a)}return n}}]),e}();r.TextProcessor=j,r.Script=p,r.paliScriptInfo=g,r.getScriptForCode=s},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}();var a=function(){function e(){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e)}return n(e,null,[{key:"copyText",value:function(e){var r=document.createElement("textarea");r.value=e,document.body.appendChild(r),r.select(),document.execCommand("copy"),document.body.removeChild(r)}},{key:"showToast",value:function(e){var r=$("#toast").html(e).fadeIn(300);setTimeout(function(){r.fadeOut()},3e3)}},{key:"getParameterByName",value:function(e,r){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(location.search);return null===t?r:decodeURIComponent(t[1].replace(/\+/g," "))}},{key:"createLanguageSelectOption",value:function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"./static/images/",n=$("<span/>").addClass("UT").text(r[1]).attr("lang",e),a=r[3].f?$("<img/>").attr("src",""+t+r[3].f):"",o=$("<div/>").addClass("option").append(n,a).attr("value",e);return r[3].c&&o.addClass(r[3].c),o}}]),e}();r.Util=a}]);