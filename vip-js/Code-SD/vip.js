var inum=1,vipOption="";
var vipChannl=new Array(
"http://vip.jlsprh.com/index.php?url=",
"http://www.0335haibo.com/tong.php?url=",
"http://000o.cc/jx/ty.php?url=",
"http://www.wmxz.wang/index.php?url=",
"http://www.vipjiexi.com/yun.php?url=",
"http://api.xfsub.com/index.php?url=",
"http://api.baiyug.cn/vip/index.php?url=",
"http://www.sfsft.com/admin.php?url=",
"http://jx.58dyw.cn/ckmov/index.php?url=",
"http://api.wlzhan.com/sudu/?url=",
"http://api.nepian.com/ckparse/?url=",
"http://y.qin52.com/xnflv/index.php?url=",
"http://beaacc.com/api.php?url=",
"http://jx.maoyun.tv/index.php?id=",
"http://jx.vgoodapi.com/jx.php?url=",
"http://jqaaa.com/jx.php?url=&url=",
"http://api.662820.com/xnflv/index.php?url=&url=",
"http://jiexi.92fz.cn/player/vip.php?url=",
"http://aikan-tv.com/?url=",
"http://ifkdy.com/?q=",
"http://jx.api.163ren.com/vod.php?url=",
"http://yun.mt2t.com/yun?url=",
"https://api.flvsp.com/?url=",
"https://jiexi.071811.cc/jx.php?url=",
"https://api.vparse.org/?url=",
);
for(x in vipChannl)
{
vipOption=vipOption+'<option value="'+vipChannl[x]+'">VIP通道'+inum+++'</option>';
}
function insVIP(emID,cID,rID,hID){
var gemID=document.getElementsByClassName(emID)[0];
var newNode=document.createElement("select");
newNode.setAttribute("title","");
newNode.setAttribute("style","border:2px solid "+cID+";color:"+cID+";border-radius:6px;outline:0");
gemID.appendChild(newNode);
newNode.setAttribute("onchange","replacePlayer(this,'"+rID+"','"+hID+"')");
newNode.innerHTML='<option selected="selected" disabled="disabled">切换VIP通道</option>'+vipOption;
}

function replacePlayer(e,rID,hID){
var playerID=document.getElementById(rID);
var thisURL=window.location.href.match('http[^\?]*')[0];
playerID.innerHTML='';
var newplayerID=document.createElement("iframe");
playerID.appendChild(newplayerID);
newplayerID.setAttribute("border","0");
newplayerID.setAttribute("frameborder","no");
newplayerID.setAttribute("scrolling","no");
newplayerID.setAttribute("marginwidth","0");
newplayerID.setAttribute("width","100%");
newplayerID.setAttribute("height",hID);
if("https:" == document.location.protocol)
{
 window.open(e.value+thisURL,rID,'width=1051,height=592,location=0,menubar=0,scrollbars=0,status=0,toolbar=0');
}
else
{
 newplayerID.src=e.value+thisURL;
}
}