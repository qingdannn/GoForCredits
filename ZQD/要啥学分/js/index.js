//加载背景图时以当前页面高度为高度
function reSize(id)
{
	var el=document.getElementById(id);
  el.height=window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  el.width=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
}
//导航栏消失又出现
var last_known_scroll_position = 0;
var ticking = false;

function NavigationDisplay() {

  var el=document.getElementById('nav');
  el.setAttribute('class','aos-item col-md-6 aos-init');
  el.setAttribute('data-aos','fade-down');
  el.style.display="block"

}
window.addEventListener('scroll', function(e) 
{
  if (!ticking) {
    if(getScrollTop()<window.innerHeight)
    {
      window.requestAnimationFrame(function() {
      NavigationDisplay();
      ticking = false;
    });
    } 
    ticking = true;
  }
});
//下滑一页
function scrollWindow()
{
  var t = $(window).scrollTop();
  $('body,html').animate({'scrollTop':window.innerHeight},650)
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
