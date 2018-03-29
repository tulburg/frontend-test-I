(function(){
	var $=function(id){if(id[0]=="#"){return document.getElementById(id.substring(1,id.length));}else if(id[0]=="."){return document.getElementsByClassName(id.substring(1, id.length));}},
	a=$(".checkbox");
	for(var i=0;i<a.length;i++){a[i].onclick=function(){
		if(this.className.match("checked")){
			this.className = this.className.replace(" checked", "");
			this.getElementsByTagName("input")[0].removeAttribute("checked");
			var b=this.parentNode.getElementsByClassName("label")[0];
			b.className = b.className.replace(" checked", "");
		}else {
			this.className = this.className +" checked";
			var b=this.parentNode.getElementsByClassName("label")[0];
			b.className = b.className +" checked";
			this.getElementsByTagName("input")[0].setAttribute("checked","checked");
		}
	}}
})();