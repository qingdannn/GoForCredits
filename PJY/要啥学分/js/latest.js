//导航栏消失又出现


window.onload=function(){
  LatestDisplay('latestNews');
}

function LatestDisplay(id)
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


//获取滚动条Top
function getScrollTop(){
  return document.documentElement.scrollTop || document.body.scrollTop;
}
