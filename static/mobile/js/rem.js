function copyText(text) {
	const range = document.createRange();
	const copyDiv = document.createElement('div');
	copyDiv.id = 'copyDiv'
	copyDiv.innerText = text
	document.body.appendChild(copyDiv)
	range.selectNode(document.getElementById('copyDiv'));
	const selection = window.getSelection();
	if (selection.rangeCount > 0) selection.removeAllRanges();
	selection.addRange(range);
	document.execCommand('copy');
	copyDiv.remove()
};

function Toast(text, fn, delay, speed1, speed2) {
	/*======================================     æ¶ˆæ¯æç¤º    =======================================*/
	var _this = this;
	var informMove = false;
	if (informMove == true) {
		return false;
	}
	informMove = true;
	var informDiv = $(
		'<div style="padding:10px 20px; background:rgba(19, 19, 19, 0.8); color:#FFFFFF; font-size:13px;border-radius: 0.22rem; line-height:20px; position:fixed; left:50%; top:0%; z-index:9999;  opacity:0; -webkit-transform:translateX(-50%); -moz-transform:translateX(-50%); -ms-transform:translateX(-50%); transform:translateX(-50%);text-align:center;">æ“ä½œæˆåŠŸ</div>'
	);
	if (text) informDiv.text(text);
	//åœç•™æ—¶é—´
	if (!delay) delay = 1000;
	//å‡ºçŽ°æ—¶é—´
	if (!speed1) speed1 = 200;
	//æ¶ˆå¤±æ—¶é—´
	if (!speed2) speed2 = 300;
	informDiv.appendTo($('body')).animate({
		"top": "20%",
		"opacity": "1"
	}, speed1).delay(delay).animate({
		"top": "0%",
		"opacity": "0"
	}, speed2, function() {
		informDiv.remove();
		if (fn) fn();
		informMove = false;
	});
};
(function(doc, win, undefined) {
	var docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize',
		recalc = function() {
			var clientWidth = docEl.clientWidth;
			if (clientWidth === undefined) return;
			// è®¾ç½®ä¸ºé™¤ä»¥ N ,ä»£ç å±å¹•æ€»å®½åº¦ä¸º N
			docEl.style.fontSize = clientWidth / 10 + 'px';
		};
	if (doc.addEventListener === undefined) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window);