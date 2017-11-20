var thisURL = window.location.href, inum = 1, vipOption;
var vipChannl = new Array(
 /*1*/ "http://vip.jlsprh.com/index.php?url=",
 /*2*/ "http://www.0335haibo.com/tong.php?url=",
 /*3*/ "http://000o.cc/jx/ty.php?url=",
 /*4*/ "http://www.wmxz.wang/index.php?url=",
 /*5*/ "http://www.vipjiexi.com/yun.php?url=",
 /*6*/ "https://jiexi.071811.cc/jx.php?url=",
 /*7*/ "http://api.xfsub.com/index.php?url=",
 /*8*/ "http://api.baiyug.cn/vip/index.php?url=",
 /*9*/ "http://www.sfsft.com/admin.php?url=",
 /*10*/ "http://jx.58dyw.cn/ckmov/index.php?url=",
 /*11*/ "https://player.dengtian.org/ipsign/player.php?v=",
 /*12*/ "http://api.wlzhan.com/sudu/?url=",
 /*13*/ "http://api.nepian.com/ckparse/?url=",
 /*14*/ "http://y.qin52.com/xnflv/index.php?url=",
 /*15*/ "http://beaacc.com/api.php?url=",
 /*16*/ "http://jx.maoyun.tv/index.php?id=",
 /*17*/ "http://jx.vgoodapi.com/jx.php?url=",
 /*18*/ "http://q.z.vip.totv.72du.com/?url=",
 /*19*/ "https://api.vparse.org/?url=",
 /*10*/ "http://jqaaa.com/jx.php?url=&url=",
 /*21*/ "http://api.662820.com/xnflv/index.php?url=&url=",
 /*22*/ "http://jiexi.92fz.cn/player/vip.php?url=",
 /*23*/ "http://j.zz22x.com/jx/?url=",
 /*24*/ "https://api.flvsp.com/?url=",

);

var all = Array.from({length: vipChannl.length}, (a, i) => i);

function insVIP(emID, rID, optionlist, color = "#333",defualt = 0, height = "100%") {
  if ( optionlist == '' ){
    optionlist=all
  } 
  console.log(optionlist)
  for (x in optionlist) {
    console.log(x)
    vipOption = vipOption + '<option value="' + vipChannl[optionlist[x]] + thisURL + '">VIP通道' + inum++ + '</option>';
  }

  var gemID = document.getElementsByClassName(emID)[0];
  var newNode = document.createElement("select");
  newNode.setAttribute("title", "整理by MarIxs");
  newNode.setAttribute("style", "border:2px solid " + color + ";color:" + color + ";outline:0");
  gemID.appendChild(newNode);
  newNode.setAttribute("onchange", "replacePlayer(this,'" + rID + "','" + height +"')");
  newNode.innerHTML = '<option selected="selected" disabled="disabled">切换VIP通道</option>' + vipOption;
  if (defualt != 0) {
    newNode.selectedIndex = index;
    setTimeout(function () {
      var event = document.createEvent("UIEvents");
      event.initUIEvent("change", true, true);
      newNode.dispatchEvent(event);
    }, 1500);
  }
}

function replacePlayer(e, rID, height = "100%") {
  var playerID = document.getElementById(rID);
  playerID.innerHTML = '';
  var newplayerID = document.createElement("iframe");
  playerID.appendChild(newplayerID);
  newplayerID.setAttribute("border", "0");
  newplayerID.setAttribute("frameborder", "no");
  newplayerID.setAttribute("scrolling", "no");
  newplayerID.setAttribute("marginwidth", "0");
  newplayerID.setAttribute("width", "100%");
  newplayerID.setAttribute("height", height);
  newplayerID.src = e.value;
}