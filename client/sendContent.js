function getContents(){
	var tag_html = document.getElementsByTagName("html")[0];
	for (var i = 0, atts = tag_html.attributes, n = atts.length, obj = {}; i < n; i++){
    	obj[atts[i].nodeName] = tag_html.getAttribute(atts[i].nodeName);
	}
	console.log(obj);
	var tag_head = document.getElementsByTagName("head")[0];
	var tag_body = document.getElementsByTagName("body")[0];
	var send_obj = {html:obj, head:tag_head.innerHTML, body:tag_body.innerHTML};
	var send_str =  JSON.stringify(send_obj);
	console.log(send_str);
	return send_str;
}