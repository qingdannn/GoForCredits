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
//加载背景图时以当前页面高度为高度
function reSize(obj)
{
  //var scrollbarWidth = document.getElementById('main').offsetWidth - document.getElementById('main').scrollWidth;
	obj.height=window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  obj.width=window.innerWidth-19 || document.documentElement.clientWidth-19 || document.body.clientWidth-19;
}
//导航栏消失又出现
/*
var last_known_scroll_position = 0;
var ticking = false;

function doSomething(scroll_pos) {
  var el=document.getElementById('nav');
  el.style.display="block";
}

window.addEventListener('scroll', function(e) 
{
  last_known_scroll_position = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });
    ticking = true;
  }
});
*/
//window.onload+=externalTarget;
window.onload=function(){
  NavigationDisplay('nav');
  //getScroll('scrollTop');
}
//外部链接在新页面打开 好像翻车了？？？
function externalTarget() 
{
  if(!document.getElementsByTagName('a'))
    return;
  var anchors = document.getElementsByTagName('a');
  for(var i=0;i<anchors.length;i++)
  {
    var anchor=anchors[i];
    if(anchor.getAttribute("href")!="#")
      anchor.target="_blank";
  }
}
function NavigationDisplay(id)
{
  var obj=document.getElementById(id);
  var timer=null;
  PositionFixed(obj);
  if(obj)
  {
    obj.style.display='none';
    window.onscroll=function(){
      getScrollTop()>window.innerHeight?obj.style.display="block":obj.style.display="none";
    }
  }
}
// function scrollToTop(obj){
//   var 
// }
//回到顶部
// function scrollToTop()
// {
//   window.scrollTo(0,0);
// }
//下滑一页
function scrollWindow()
{
	window.scrollBy(innerWidth,innerHeight);
}
//回到顶部
function getScroll(id)
{
  var obj=document.getElementById(id);
  var timer=null;
  PositionFixed(obj);
  if(obj)
  {
    obj.style.display='none';
    window.onscroll=function(){
      getScrollTop()>0?obj.style.display="block":obj.style.display="none";
    }
    obj.onclick=function()
    {
      var timer = setInterval(sMove,10);
      function sMove()
      {
      setScrollTop(getScrollTop()/1.5);
      if(getScrollTop()<1)
        clearInterval(timer);
      }
    }
  }
}
//绝对定位
function PositionFixed(obj)
{
  var iE6=!-[1,]&&!window.XMLHttpRequest;
  if(obj)
  {
    var top=obj.offsetTop;
  }
  if(iE6)
  {
    document.documentElement.style.textOverflow = "ellipsis";
    obj.style.position = "absolute";
    obj.style.setExpression("top", "eval(documentElement.scrollTop + " + top + ') + "px"');
  }
}
//获取滚动条Top
function getScrollTop(){
  return document.documentElement.scrollTop || document.body.scrollTop;
}
//回到顶部
function setScrollTop(value)
{
  document.documentElement.scrollTop = value;
  document.body.scrollTop = value;
}
// function dingwei(obj) {
//   obj.style.
// }