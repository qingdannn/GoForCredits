/*function get_scrollTop_of_body(){
var scrollTop;
if(typeof window.pageYOffset != 'undefined'){
  scrollTop = window.pageYOffset;
}
else
 if(typeof document.compatMode != 'undefined' &&
    document.compatMode != 'BackCompat'){
  scrollTop = document.documentElement.scrollTop;
 }
 else 
   if(typeof document.body != 'undefined'){
     scrollTop = document.body.scrollTop;
 }
return scrollTop;
}*/
//div_body.scrollTop=get_scrollTop_of_body();
/*var scrollT = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
var div_body=document.getElementByTagName("body");
div_body.onscroll=scrollShow();

var scrollTopval=document.getElementById("scrollTopx");

function scrollShow(){
	scrollTopval.innerText=scrollT;
}
scrollShow();
function scrollWindow() {
	window.scrollTo(0,0);
}*/


/*window.addEventListener('scroll',function(e){
	last_known_scroll_position = window.pageYOffset;
  	if(!ticking)
  	{
    	window.requestAnimationFrame(function(){
	      	if(last_known_scroll_position==200)
	      	{
	      		doSomething(last_known_scroll_position);
	      		ticking = false;
	     	}
    	});
    }
    ticking=true;
});*/

function reSize(obj)//加载背景图时以当前页面高度为高度
{
	obj.height=innerHeight;
}

// var last_known_scroll_position = 0;
// var ticking = false;

// function doSomething(scroll_pos) {
//   var el=document.getElementById('nav');
//   el.style.display="block";
// }

// window.addEventListener('scroll', function(e) {

//   last_known_scroll_position = window.scrollY;

//   if (!ticking) {

//     window.requestAnimationFrame(function() {
//       doSomething(last_known_scroll_position);
//       ticking = false;
//     });
     
//     ticking = true;

//   }
  
// });
// function scrollToTop(obj){
//   var 
// }
function scrollWindow(){
	window.scrollBy(innerWidth,innerHeight);
}
// function dingwei(obj) {
//   obj.style.
// }