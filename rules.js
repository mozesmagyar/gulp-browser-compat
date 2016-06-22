
/*
 * regular expressions used for comparing against code for features that may not be compatible with every browser
 *
 * taken with permission from @tbusser
 * https://github.com/tbusser/jscc
 *
 */

'use strict';

var rules = {
	'queryselector'           : [/\.querySelector\s*(?:All)*\(/],
	'getelementsbyclassname'  : [/\.getElementsByClassName\s*\(/],
	'webworkers'              : [/new\s*Worker\s*\(/],
	'hashchange'              : [/(\.onhashchange\s*=|\.addEventListener\s*\(\s*(\'|")hashchange(\'|"))/],
	'sharedworkers'           : [/new\s*SharedWorker\s*\(/],
	'canvas'                  : [/\.getContext\s*\(\s*(?:\'|")2d(?:\'|")\s*\)/],
	'canvas-text'             : [/\.(?:strokeText\s*\(|fillText\s*\(|measureText\s*\()/],
	'namevalue-storage'       : [/(?:localStorage|sessionStorage)\./],
	'sql-storage'             : [/=\s(?:.*?)openDatabase\s*\(/],
	'indexeddb'               : [/=\s(?:.*?)indexedDB/],
	'eventsource'             : [/=\s*new\s*EventSource\s*\(/],
	'x-doc-messaging'         : [/(\.addEventListener\s*\(\s*(?:\'|")message(?:\'|")|\.postMessage\s*\()/],
	'geolocation'             : [/navigator\.geolocation/],
	'webgl'                   : [/=\s*initWebGL\(/],
	'shadowdom'               : [/\.createShadowRoot\s*\(\s*\)/],
	'websockets'              : [/=\s*new\s*WebSocket\s*\(\s*\)/],
	'script-async'            : [/<\s*script\s*.*async.*?>/],
	'cors'                    : [/\.withCredentials\s*=\s*(\'|")?true(\'|")?/],
	'json'                    : [/JSON\.(?:parse|stringify)\s*\(/],
	'classlist'               : [/\.classList\.(remove|add|toggle|contains)\s*\(/],
	'notifications'           : [/=\s*new\s*Notification\s*\(/],
	'stream'                  : [/\.getUserMedia\s*\(/],
	'touch'                   : [/\.addEventListener\s*\(\s*(?:\'|")touch(?:start|end|move|cancel)(?:\'|")/],
	'matchesselector'         : [/\.matches(Selector)?\s*\(\s*(?:\'|").*?\s*(?:\'|")\s*\)/],
	'blobbuilder'             : [/(window\.(?:Moz|WebKit)?BlobBuilder|=\s*new\s*Blob\()/],
	'createObjectURL'         : [/\.createObjectURL\s*\(/],
	'rellist'                 : [/\.relList/],
	'typedarrays'             : [/=\s*new\s*((?:(?:Ui|I)nt)|Float)(?:8|16|32|64)?(?:Clamped)?Array\s*\(/],
	'deviceorientation'       : [/\.DeviceOrientationEvent\s*\)|\.addEventListener\s*\(\s*(\'|")deviceorientation(\'|")\s*,/],
	'script-defer'            : [/<\s*script\s*.*defer.*?>/],
	'nav-timing'              : [/performance\.(?:timing|navigation)/],
	'audio-api'               : [/\.(?:AudioContext|webkitAudioContext)/],
	'fullscreen'              : [/(?:ms|moz|webkit)?(?:r|R)equestFull(?:S|s)creen\s*\(.*?\)/],
	'requestanimationframe'   : [/\.(?:webkit|moz)?(?:r|R)equestAnimationFrame/],
	'matchmedia'              : [/\.matchMedia\s*\(/],
	'getcomputedstyle'        : [/\.getComputedStyle\s*\(/],
	'pagevisibility'          : [/(?:\'|")(?:moz|ms|webkit)?visibilitychange(?:\'|")/],
	'pointer'                 : [/(?:\.pointerType|\.pointerEnabled|pointer(?:down|up|cancel|move|over|out|enter|leave)|(?:got|lost)pointercapture)/],
	'cryptography'            : [/\.(?:ms)?(?:c|C)rypto(?:\.subtle)?/],
	'template'                : [/\.content(?:\s*(?:;|\,|\))|\.)/, /\.importNode\s*/],
	'channel-messaging'       : [/=\s*new\s*MessageChannel\s*\(\s*\)/],
	'mutationobserver'        : [/=\s*new\s*MutationObserver\s*\(/],
	'canvas-blending'         : [/\.globalCompositeOperation\s*=/],
	'clipboard'               : [/new\s*ClipboardEvent\s*\(|\.addEventListener\s*\(\s*(?:\'|")(before)?(?:copy|cut|paste)(?:\'|")/],
	'rtcpeerconnection'       : [/\.(?:moz|webkit)?RTCPeerConnection/],
	'vibration'               : [/\.vibrate\s*\(/],
	'web-speech'              : [/=\s*new\s*(?:webkit)SpeechRecognition\s*\(\s*\)/],
	'high-resolution-time'    : [/performance\.now\s*\(\s*\)/],
	'battery-status'          : [/\.(?:mozB|webkitB|b)?attery(?:\s*)(?:;)?/],
	'speech-synthesis'        : [/=\s*new\s*SpeechSynthesisUtterance\s*\(\s*\)/],
	'user-timing'             : [/performance\.(?:mark|clearMarks|measure|clearMeasure)\s*\(/],
	'ambient-light'           : [/\.addEventListener\s*\(\s*(?:\'|")devicelight(?:\'|")\s*,/],
	'domcontentloaded'        : [/\.addEventListener\s*\(\s*(?:\'|")DOMContentLoaded(?:\'|")\s*,/],
	'proximity'               : [/\.addEventListener\s*\(\s*(?:\'|")deviceproximity(?:\'|")\s*,/],
	'gamepad'                 : [/\.(?:webkitG|g)?etGamepads\s*\(\s*\)/],
	'font-loading'            : [/(?:\.fonts.(?:add|load|ready)\s*\(|new\s*FontFace\s*\()/],
	'screen-orientation'      : [/\.addEventListener\s*\(\s*(?:\'|")(?:moz|webkit|ms)?orientationchange(?:\'|")/],
	'getrandomvalues'         : [/\.(?:ms)?(?:c|C)rypto.getRandomValues\s*\(/],
	'css-supports-api'        : [/CSS.supports\s*\(/],
	'atob-btoa'               : [/\.(?:atob|btoa)\s*\(/],
	'imports'                 : [/\.querySelector(?:All)?\s*\((?:\'|")link\[rel=(?:\'|")import(?:\'|")](?:\'|")/],
	'resource-timing'         : [/\.getEntriesByType\s*\(\s*(?:\'|")resource(?:\'|")\s*\)/],
	'web-animation'           : [/\S*\.animate\s*\(\s*(?:(?:\[(?:\s|\n|\r|\S|)*?\]|\S*)\s*,)(?:\s|\S|\r|\n)*?\)/],
	'custom-elements'         : [/(?:\S*?)\.registerElement\s*\(\s*(?:\'|")\S*?(?:\'|")/],
	'filereader'              : [/=\s*new\s*FileReader\s*\(\s*\)/],
	'filesystem'              : [/\.(?:r|webkitR)equestFileSystem/],
	'fileapi'                 : [/(?:\.dataTransfer|\.files(?:\[\d*?]|\.item|\.length|\s*;))/],
	'promises'                : [/=\s*new\s*Promise\s*\(/],
	'xhr2'                    : [/(?:=\s*new\s*FormData\s*\()|(?:\.responseType\s*=\s*(?:\'|")(?:arraybuffer|blob|document|json|text)(?:\'|"))/],
	'obj-create'              : [/Object\.create\s*\(/],
	'obj-defineproperty'      : [/Object\.defineProperty\s*\(/],
	'obj-defineproperties'    : [/Object\.defineProperties\s*\(/],
	'obj-getprototypeof'      : [/Object\.getPrototypeOf\s*\(/],
	'obj-keys'                : [/Object\.keys\s*\(/],
	'obj-seal'                : [/Object\.seal\s*\(/],
	'obj-freeze'              : [/Object\.freeze\s*\(/],
	'obj-preventextensions'   : [/Object\.preventExtensions\s*\(/],
	'obj-issealed'            : [/Object\.isSealed\s*\(/],
	'obj-isfrozen'            : [/Object\.isFrozen\s*\(/],
	'obj-isextensible'        : [/Object\.isExtensible\s*\(/],
	'obj-getownpropertydesc'  : [/Object\.getOwnPropertyDescriptor\s*\(/],
	'obj-getownpropertynames' : [/Object\.getOwnPropertyNames\s*\(/],
	'date-toisostring'        : [/\.toISOString\s(\(\s*)/],
	'date-now'                : [/Date\.now\s*\(\s*\)/],
	'array-isarray'           : [/Array\.isArray\s*\(/],
	'function-bind'           : [/\.bind\s*\(/],
	'string-trim'             : [/\.trim\s*\(\s*\)/],
	'array-indexof'           : [/\.indexOf\s*\(.*?(?:,.*?)?\s*\)/],
	'array-lastindexof'       : [/\.lastIndexOf\s*\(.*?(?:,.*?)?\s*\)/],
	'array-every'             : [/\.every\s*\(\s*(?:function|\S*?(?:,\s*\S*?)?\s*\))/],
	'array-some'              : [/\.some\s*\(\s*(?:function|\S*?(?:,\s*\S*?)?\s*\))/],
	'array-foreach'           : [/\.forEach\s*\(\s*(?:function|\S*?(?:,\s*\S*?)?\s*\))/],
	'array-map'               : [/\.map\s*\(\s*(?:function|\S*?(?:,\s*\S*?)?\s*\))/],
	'array-filter'            : [/\.filter\s*\(\s*(?:function|\S*?(?:,\s*\S*?)?\s*\))/],
	'array-reduce'            : [/\.reduce\s*\(\s*(?:function|\S*?(?:,\s*\S*?)?\s*\))/],
	'array-reduceRight'       : [/\.reduceRight\s*\(\s*(?:function|\S*?(?:,\s*\S*?)?\s*\))/],
	'strict-mode'             : [/(?:\'|")use strict(?:\'|")/],
	'eventtarget'             : [/\.(?:addEventListener|removeEventListener|dispatchEvent)/]
};

module.exports = rules;
