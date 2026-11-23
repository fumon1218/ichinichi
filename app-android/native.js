/* 안드로이드 앱(Capacitor) 안에서만 동작: 기기 음성으로 읽기, 오프라인 저장 끄기, 인쇄 안내 */
(function(){var C=window.Capacitor;if(!C||!C.isNativePlatform||!C.isNativePlatform())return;
 document.documentElement.classList.add('native-app');
 try{Object.defineProperty(navigator,'serviceWorker',{value:{register:function(){return Promise.resolve()},getRegistrations:function(){return Promise.resolve([])},addEventListener:function(){},controller:null},configurable:true})}catch(e){}
 var T=(C.Plugins&&C.Plugins.TextToSpeech)||(C.registerPlugin&&C.registerPlugin('TextToSpeech'));if(!T)return;
 var q=[],busy=false,cur=null;
 function U(t){this.text=t||'';this.lang='ja-JP';this.rate=1;this.pitch=1;this.volume=1;this.voice=null;this.onstart=null;this.onend=null;this.onerror=null}
 function next(){if(busy||!q.length)return;var u=q.shift();busy=true;cur=u;try{u.onstart&&u.onstart({})}catch(e){}
  var fin=function(){if(cur!==u)return;busy=false;cur=null;try{u.onend&&u.onend({})}catch(e){}next()};
  T.speak({text:u.text,lang:u.lang||'ja-JP',rate:Math.max(0.2,Math.min(2,u.rate||1)),pitch:u.pitch||1,volume:1,category:'playback',queueStrategy:1}).then(fin,fin)}
 var SS={speak:function(u){q.push(u);next()},cancel:function(){q=[];busy=false;cur=null;try{T.stop()}catch(e){}},getVoices:function(){return []},pause:function(){},resume:function(){},speaking:false,pending:false,paused:false,onvoiceschanged:null,addEventListener:function(){},removeEventListener:function(){}};
 try{Object.defineProperty(window,'speechSynthesis',{value:SS,configurable:true,writable:true})}catch(e){window.speechSynthesis=SS}
 window.SpeechSynthesisUtterance=U;
 window.print=function(){alert('앱에서는 인쇄를 할 수 없습니다. 학습지는 인터넷 주소 jp.oksclass.com 에서 열어 인쇄하거나 PDF로 저장해 주세요.')};
})();
