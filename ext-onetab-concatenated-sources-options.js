var bj = false;
var y1 = '1.18';
var L1 = 'https://www.one-tab.com';
var nK = false;
var mK = false;
var bX = 'onmousemove';
var ij = 'onmousedown';
var $j = 'onmouseover';
var J = 'onmouseup';
var v1 = 'onmouseout';
var LK = 'onclick';
var F1 = 'ondblclick';
var JX = 'onmouseleave';
var Aj = 'mousemove';
var dX = 'mousedown';
var r1 = 'mouseover';
var m1 = 'mouseup';
var GX = 'mouseout';
var rK = 'click';
var T = 'dblclick';
var D1 = false;
var BK = 100006;
function uj() {
  return document.body;
}
var pX = 'aaa';
var $X = 'NEW_TRANSACTION';
W6S = false;
k6S = true;
function YK($jS, ljS, VjS) {
  if (!ljS) ljS = {};
  var DjS = {};
  DjS.type = $jS;
  DjS.Yn = pK.gW(ljS);
  window['chrome']['runtime']['sendMessage'](
    undefined,
    DjS,
    undefined,
    function(WVS) {
      var _VS = {};
      if (WVS && WVS.Yn) {
        _VS = pK.parse(WVS.Yn);
      } else {
      }
      if (VjS) VjS(_VS);
    },
  );
}
function JK(QjS, YjS) {
  window['chrome']['runtime']['onMessage']['addListener'](function(
    nBS,
    JVS,
    eBS,
  ) {
    if (QjS == nBS.OW) {
      var BBS = {};
      if (nBS && nBS.Yn) BBS = pK.parse(nBS.Yn);
      YjS(BBS);
    }
  });
}
function MK(rjS) {
  document.addEventListener('DOMContentLoaded', function() {
    rjS();
  });
}
var TX = {};
function Sj(HjS) {
  WK(function(lBS) {
    TX = lBS;
    HjS();
  });
}
function x1(ZjS) {
  return TX[ZjS];
}
function d1() {
  fj();
  Sj(function() {
    yj();
  });
}
var PX = navigator['language'] || navigator['userLanguage'];
function A() {
  var TjS = ['ar', 'he', 'fa', 'ps', 'ur'];
  var RjS = PX.split('-', 1)[0];
  return TjS.indexOf(RjS) >= 0 ? 'rtl' : 'ltr';
}
var VX = A();
function zj() {
  return VX != 'rtl';
}
function fj() {
  document.getElementsByTagName('html')[0]['dir'] = VX;
}
function iK(KjS, fjS) {
  if (zj()) KjS.style.left = fjS;
  else KjS.style.right = fjS;
}
function J1(FjS, xjS) {
  if (zj()) FjS.style.right = xjS;
  else FjS.style.left = xjS;
}
function b1(IjS, pjS) {
  if (zj()) IjS.style.paddingLeft = pjS;
  else IjS.style.paddingRight = pjS;
}
function Cj(CjS, mjS) {
  if (zj()) CjS.style.paddingRight = mjS;
  else CjS.style.paddingLeft = mjS;
}
function CX(yjS, jjS) {
  if (zj()) yjS.style.marginLeft = jjS;
  else yjS.style.marginRight = jjS;
}
function e1(ajS) {
  YK('getState', {}, function(DBS) {
    if (ajS) ajS(DBS);
  });
}
function H1(UjS, LjS) {
  YK('storeState', { rW: UjS }, function(VBS) {
    if (LjS) LjS(VBS);
  });
}
function yX(ojS, zjS) {
  YK('getSetting', { vW: ojS }, function($BS) {
    if (zjS) zjS($BS.value);
  });
}
function DX(ujS) {
  YK('getSettings', {}, function(YBS) {
    if (ujS) ujS(YBS);
  });
}
function NK(cjS, PjS, SjS) {
  YK('storeSetting', { key: cjS, value: PjS }, function(QBS) {
    if (SjS) SjS(QBS);
  });
}
function C(wjS, gjS) {
  YK('storeSettings', { AW: wjS }, function(rBS) {
    if (gjS) gjS(rBS);
  });
}
function bK(NjS, ijS, vjS) {
  YK('restoreTabsMeta', { Gj: NjS, xn: ijS }, function(HBS) {
    if (vjS) vjS(HBS);
  });
}
function UK(EjS) {
  YK('upgradeAvailable', {}, function(ZBS) {
    if (EjS) EjS(ZBS.value);
  });
}
function WK(AjS) {
  YK('getAllMessages', {}, function(TBS) {
    if (AjS) AjS(TBS);
  });
}
function Vj(bjS) {
  var XjS = document.createElement('div');
  XjS.style.paddingTop = '40px';
  XjS.style.paddingBottom = '24px';
  b1(XjS, '268px');
  XjS.style.fontSize = '18px';
  XjS.style.color = '#777';
  XjS.style.fontWeight = '300';
  XjS.style.borderBottom = '1px dashed #ddd';
  XjS.style.marginBottom = '10px';
  XjS.appendChild(document.createTextNode(bjS));
  return XjS;
}
function dj() {
  var qjS = document.createElement('img');
  qjS.style.height = 114 / 2 + 'px';
  qjS.style.width = 414 / 2 + 'px';
  qjS.style.position = 'absolute';
  qjS.style.top = '16px';
  iK(qjS, '22px');
  qjS.src = 'images/top-left-logo' + (zj() ? '' : '-rtl') + '.png';
  return qjS;
}
function I1(GjS, kjS, sjS) {
  var hjS = document.createElement('div');
  var OjS = document.createElement('div');
  b1(OjS, '30px');
  OjS.style.position = 'relative';
  OjS.style.color = '#777';
  var djS = document.createElement('img');
  djS.src = GjS
    ? 'images/twister-open.png'
    : 'images/twister-closed' + (zj() ? '' : '-rtl') + '.png';
  djS.style.width = 48 / 2 + 'px';
  djS.style.height = 50 / 2 + 'px';
  djS.style.position = 'absolute';
  iK(djS, '0px');
  djS.style.top = '0px';
  OjS.appendChild(document.createTextNode(kjS));
  OjS.style.fontSize = '16px';
  OjS.style.cursor = 'pointer';
  hjS.appendChild(OjS);
  OjS.appendChild(djS);
  var MjS = document.createElement('div');
  b1(MjS, '30px');
  MjS.style.paddingTop = '10px';
  MjS.appendChild(sjS);
  MjS.style.display = GjS ? 'block' : 'none';
  hjS.appendChild(MjS);
  OjS.onclick = function() {
    GjS = !GjS;
    djS.src = GjS
      ? 'images/twister-open.png'
      : 'images/twister-closed' + (zj() ? '' : '-rtl') + '.png';
    MjS.style.display = GjS ? 'block' : 'none';
  };
  return hjS;
}
function Tj(JjS, nWS, _jS, WjS) {
  var lWS = document.createElement('div');
  lWS.style.fontSize = nWS + 'px';
  lWS.className = 'clickable';
  var BWS = document.createElement('span');
  if (WjS) {
    var eWS = document.createElement('span');
    eWS.style.color = '#f00';
    eWS.appendChild(document.createTextNode(x1('newExclamation') + ' '));
    BWS.appendChild(eWS);
  }
  if (typeof JjS == 'string') {
    BWS.appendChild(document.createTextNode(JjS));
  } else {
    BWS.appendChild(JjS);
  }
  BWS.style.verticalAlign = 'middle';
  BWS.onclick = function() {
    _jS(BWS);
  };
  lWS.appendChild(BWS);
  return lWS;
}
var pK = {
  gW: function(VWS) {
    var YWS,
      rWS,
      QWS,
      $WS = '',
      DWS;
    switch (typeof VWS) {
      case 'object':
        if (VWS) {
          if (VWS instanceof Array) {
            for (rWS = 0; rWS < VWS.length; ++rWS) {
              DWS = this.gW(VWS[rWS]);
              if ($WS) {
                $WS += ',';
              }
              $WS += DWS;
            }
            return '[' + $WS + ']';
          } else if (typeof VWS.toString != 'undefined') {
            for (rWS in VWS) {
              DWS = VWS[rWS];
              if (typeof DWS != 'undefined' && typeof DWS != 'function') {
                DWS = this.gW(DWS);
                if ($WS) {
                  $WS += ',';
                }
                $WS += this.gW(rWS) + ':' + DWS;
              }
            }
            return '{' + $WS + '}';
          }
        }
        return 'null';
      case 'number':
        return isFinite(VWS) ? String(VWS) : 'null';
      case 'string':
        QWS = VWS.length;
        $WS = '"';
        for (rWS = 0; rWS < QWS; rWS += 1) {
          YWS = VWS.charAt(rWS);
          if (YWS >= ' ') {
            if (YWS == '\\' || YWS == '"') {
              $WS += '\\';
            }
            $WS += YWS;
          } else {
            switch (YWS) {
              case '\b':
                $WS += '\\b';
                break;
              case '\f':
                $WS += '\\f';
                break;
              case '\n':
                $WS += '\\n';
                break;
              case '\r':
                $WS += '\\r';
                break;
              case '\t':
                $WS += '\\t';
                break;
              default:
                YWS = YWS.charCodeAt();
                $WS +=
                  '\\u00' +
                  Math.floor(YWS / 16).toString(16) +
                  (YWS % 16).toString(16);
            }
          }
        }
        return $WS + '"';
      case 'boolean':
        return String(VWS);
      default:
        return 'null';
    }
  },
  parse: function(TWS) {
    var pWS = 0;
    var CWS = ' ';
    function fWS(RBS) {
      throw { name: 'JSONError', message: RBS, Qn: pWS - 1, text: TWS };
    }
    function xWS() {
      CWS = TWS.charAt(pWS);
      pWS += 1;
      return CWS;
    }
    function FWS() {
      while (CWS !== '' && CWS <= ' ') {
        xWS();
      }
    }
    function RWS() {
      var FBS,
        xBS = '',
        KBS,
        fBS;
      if (CWS == '"') {
        bj: while (xWS()) {
          if (CWS == '"') {
            xWS();
            return xBS;
          } else if (CWS == '\\') {
            switch (xWS()) {
              case 'b':
                xBS += '\b';
                break;
              case 'f':
                xBS += '\f';
                break;
              case 'n':
                xBS += '\n';
                break;
              case 'r':
                xBS += '\r';
                break;
              case 't':
                xBS += '\t';
                break;
              case 'u':
                fBS = 0;
                for (FBS = 0; FBS < 4; FBS += 1) {
                  KBS = parseInt(xWS(), 16);
                  if (!isFinite(KBS)) {
                    break bj;
                  }
                  fBS = fBS * 16 + KBS;
                }
                xBS += String.fromCharCode(fBS);
                break;
              default:
                xBS += CWS;
            }
          } else {
            xBS += CWS;
          }
        }
      }
      fWS('Bad string');
    }
    function KWS() {
      var pBS = [];
      if (CWS == '[') {
        xWS();
        FWS();
        if (CWS == ']') {
          xWS();
          return pBS;
        }
        while (CWS) {
          pBS.push(HWS());
          FWS();
          if (CWS == ']') {
            xWS();
            return pBS;
          } else if (CWS != ',') {
            break;
          }
          xWS();
          FWS();
        }
      }
      fWS('Bad array');
    }
    function mWS() {
      var mBS,
        IBS = {};
      if (CWS == '{') {
        xWS();
        FWS();
        if (CWS == '}') {
          xWS();
          return IBS;
        }
        while (CWS) {
          mBS = RWS();
          FWS();
          if (CWS != ':') {
            break;
          }
          xWS();
          IBS[mBS] = HWS();
          FWS();
          if (CWS == '}') {
            xWS();
            return IBS;
          } else if (CWS != ',') {
            break;
          }
          xWS();
          FWS();
        }
      }
      fWS('Bad object');
    }
    function ZWS() {
      var jBS = '',
        CBS;
      if (CWS == '-') {
        jBS = '-';
        xWS();
      }
      while (CWS >= '0' && CWS <= '9') {
        jBS += CWS;
        xWS();
      }
      if (CWS == '.') {
        jBS += '.';
        while (xWS() && CWS >= '0' && CWS <= '9') {
          jBS += CWS;
        }
      }
      if (CWS == 'e' || CWS == 'E') {
        jBS += 'e';
        xWS();
        if (CWS == '-' || CWS == '+') {
          jBS += CWS;
          xWS();
        }
        while (CWS >= '0' && CWS <= '9') {
          jBS += CWS;
          xWS();
        }
      }
      CBS = +jBS;
      if (!isFinite(CBS)) {
        fWS('Bad number');
      } else {
        return CBS;
      }
    }
    function IWS() {
      switch (CWS) {
        case 't':
          if (xWS() == 'r' && xWS() == 'u' && xWS() == 'e') {
            xWS();
            return true;
          }
          break;
        case 'f':
          if (xWS() == 'a' && xWS() == 'l' && xWS() == 's' && xWS() == 'e') {
            xWS();
            return false;
          }
          break;
        case 'n':
          if (xWS() == 'u' && xWS() == 'l' && xWS() == 'l') {
            xWS();
            return null;
          }
          break;
      }
      fWS('Syntax error');
    }
    function HWS() {
      FWS();
      switch (CWS) {
        case '{':
          return mWS();
        case '[':
          return KWS();
        case '"':
          return RWS();
        case '-':
          return ZWS();
        default:
          return CWS >= '0' && CWS <= '9' ? ZWS() : IWS();
      }
    }
    return HWS();
  },
};
function oK(jWS) {
  if (jWS.indexOf('://') == -1) jWS = 'http://' + jWS;
  jWS = jWS.substring(jWS.indexOf('://') + '://'.length);
  if (jWS.indexOf('/') != -1) jWS = jWS.substring(0, jWS.indexOf('/'));
  return jWS.toLowerCase();
}
function l1(LWS, yWS) {
  for (var aWS in LWS) if (LWS[aWS] == yWS) return true;
  return false;
}
function I(UWS) {
  if (typeof UWS == 'string') UWS = document.getElementById(UWS);
  if (!UWS) return;
  while (UWS.childNodes.length > 0) UWS.removeChild(UWS.childNodes[0]);
}
function P1(oWS) {
  var zWS = document.createElement('div');
  zWS.style.fontSize = '1px';
  zWS.style.height = oWS + 'px';
  zWS.style.width = 1 + 'px';
  return zWS;
}
function Ej(uWS, PWS) {
  for (var SWS = 0; SWS < PWS.length; SWS++) {
    if (PWS[SWS] == uWS) {
      PWS.splice(SWS, 1);
      SWS--;
    }
  }
}
function H(NWS) {
  var gWS = NWS ? NWS : window.event;
  var iWS = 0;
  var cWS = 0;
  var wWS = 0;
  var vWS = 0;
  if (gWS != null) {
    if (nK) {
      wWS = gWS.shiftKey;
      cWS = gWS.altKey;
      iWS = gWS.ctrlKey;
    } else {
      wWS = gWS.shiftKey;
      iWS = gWS.ctrlKey;
      cWS = gWS.altKey;
      vWS = gWS.metaKey;
    }
  }
  return iWS || vWS || wWS;
}
function Ij(bWS) {
  var AWS = bWS ? bWS : window.event;
  var OWS = 0;
  var EWS = 0;
  var XWS = 0;
  var qWS = 0;
  if (AWS != null) {
    if (nK) {
      XWS = AWS.shiftKey;
      EWS = AWS.altKey;
      OWS = AWS.ctrlKey;
    } else {
      XWS = AWS.shiftKey;
      OWS = AWS.ctrlKey;
      EWS = AWS.altKey;
      qWS = AWS.metaKey;
    }
  }
  return OWS || qWS;
}
function xX(kWS) {
  var dWS = kWS ? kWS : window.event;
  var GWS = 0;
  var sWS = 0;
  var hWS = 0;
  var MWS = 0;
  if (dWS != null) {
    if (nK) {
      hWS = dWS.shiftKey;
      sWS = dWS.altKey;
      GWS = dWS.ctrlKey;
    } else {
      hWS = dWS.shiftKey;
      GWS = dWS.ctrlKey;
      sWS = dWS.altKey;
      MWS = dWS.metaKey;
    }
  }
  return hWS;
}
function wK(WWS) {
  WWS['noCacheRandom'] = _1();
}
function _1() {
  return new Date().getTime() + Math.round(Math.random() * 10000) + '';
}
function aX(nnS, JWS, BnS) {
  wK(JWS);
  var _WS = pK.gW(JWS);
  Fj(nnS, _WS, function(yBS) {
    if (BnS) BnS(pK.parse(yBS));
  });
}
function Fj(VnS, lnS, DnS) {
  var enS = o1();
  enS.open(lnS == null ? 'GET' : 'POST', VnS, true);
  enS.setRequestHeader('Content-Type', 'text/json');
  enS.onreadystatechange = function() {
    var LBS = false;
    LBS = enS.readyState == 4;
    if (LBS) {
      var aBS = enS.responseText;
      DnS(aBS);
    }
  };
  enS.send(lnS);
}
function o1() {
  var $nS = new XMLHttpRequest();
  return $nS;
}
function zK() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(zBS) {
    var oBS = (Math.random() * 16) | 0,
      UBS = zBS == 'x' ? oBS : (oBS & 0x3) | 0x8;
    return UBS.toString(16);
  });
}
var SK = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(
  '',
);
function nX(HnS, QnS) {
  var rnS = SK,
    YnS = [],
    ZnS = 0;
  QnS = QnS || rnS.length;
  HnS = HnS || 22;
  for (ZnS = 0; ZnS < HnS; ZnS++) YnS[ZnS] = rnS[0 | (Math.random() * QnS)];
  return YnS.join('');
}
function Rj() {
  return nX();
}
function R1(TnS) {
  if (!TnS == null || TnS == undefined) return '';
  return TnS.replace(/^\s+/, '').replace(/\s+$/, '');
}
function gX(fnS) {
  var xnS = document.createElement('span');
  var KnS = fnS.indexOf('OneTab');
  var RnS = KnS + 'OneTab'.length;
  if (KnS == 0) {
    xnS.appendChild(cK());
    xnS.appendChild(document.createTextNode(fnS.substring(RnS)));
  } else {
    xnS.appendChild(document.createTextNode(fnS.substring(0, KnS)));
    xnS.appendChild(cK());
    if (RnS != fnS.length)
      xnS.appendChild(document.createTextNode(fnS.substring(RnS)));
  }
  return xnS;
}
function cK() {
  var pnS = document.createElement('span');
  var FnS = document.createElement('span');
  FnS.style.fontStyle = 'italic';
  FnS.appendChild(document.createTextNode('One'));
  pnS.appendChild(FnS);
  pnS.appendChild(document.createTextNode('Tab'));
  return pnS;
}
function M(InS) {
  var mnS = InS.split('OneTab');
  var jnS = document.createElement('span');
  for (var CnS in mnS) {
    if (mnS[CnS] == '') jnS.appendChild(cK());
    else jnS.appendChild(document.createTextNode(mnS[CnS]));
  }
  return jnS;
}
function B(LnS) {
  var anS = new Date(LnS.valueOf()),
    ynS = (LnS.getUTCDay() + 6) % 7,
    UnS;
  anS.setUTCDate(anS.getUTCDate() - ynS + 3);
  UnS = anS.valueOf();
  anS.setUTCMonth(0, 1);
  if (anS.getUTCDay() !== 4) {
    anS.setUTCMonth(0, 1 + ((4 - anS.getUTCDay() + 7) % 7));
  }
  return Math.ceil((UnS - anS) / (7 * 24 * 3600 * 1000)) + 1;
}
function gK(onS, znS) {
  while (onS.length < znS) onS = '0' + onS;
  return onS;
}
function c1(unS) {
  return (unS.getUTCFullYear() + '').substr(2) + gK(B(unS) + '', 2);
}
function xj(SnS) {
  if (SnS == 0) return x1('total0Tabs');
  if (SnS == 1) return x1('total1Tab');
  return x1('total2Tabs').replace('2', SnS + '');
}
function Qj(cnS) {
  var PnS = cnS == 1 ? x1('1tab') : x1('2tabs').replace('2', cnS + '');
  return PnS;
}
function G1(wnS, NnS) {
  var gnS = '';
  for (var vnS = 0; vnS < NnS; vnS++) gnS += wnS;
  return gnS;
}
function XX(inS) {
  inS.sort(function(SBS, uBS) {
    if (SBS['starred'] || uBS['starred']) {
      if (!uBS['starred']) return -1;
      else if (!SBS['starred']) return 1;
      else {
        if (SBS['starredDate'] > uBS['starredDate']) return 1;
        if (SBS['starredDate'] < uBS['starredDate']) return -1;
        return 0;
      }
    } else {
      if (SBS['createDate'] > uBS['createDate']) return -1;
      if (SBS['createDate'] < uBS['createDate']) return 1;
      return 0;
    }
  });
}
function W1(EnS) {
  if (!EnS) EnS = '';
  return EnS.replace(/[\x00-\x1F\x7F-\x9F]/g, '');
}
MK(function() {
  d1();
});
function yj() {
  u1();
}
function u1() {
  var AnS = document.getElementById('contentAreaDiv');
  I(AnS);
  AnS.style.paddingTop = '0px';
  b1(AnS, '0px');
  AnS.appendChild(dj());
  AnS.appendChild(Vj(x1('options')));
  var XnS = document.createElement('div');
  AnS.appendChild(XnS);
  XnS.style.paddingTop = '24px';
  b1(XnS, '36px');
  XnS.appendChild(
    a1('restoreWindow', x1('optionTabGroupRestoreTitle'), [
      { Dn: 'newWindow', title: x1('optionTabGroupRestoreNewWindow') },
      {
        Dn: 'newWindowAlways',
        title: x1('optionTabGroupRestoreNewWindowAlways'),
      },
      {
        Dn: 'currentWindow',
        title: x1('optionTabGroupRestoreCurrentWindowAlways'),
      },
    ]),
  );
  XnS.appendChild(
    a1(
      'pinnedTabs',
      x1('optionPinnedTabsTitle'),
      [
        {
          Dn: 'ignore',
          title: x1('optionPinnedTabsDontSend'),
          wW: x1('optionPinnedTabsDontSendDesc'),
        },
        { Dn: 'allow', title: x1('optionPinnedTabsAllow') },
      ],
      x1('optionPinnedTabsNote'),
    ),
  );
  XnS.appendChild(
    a1('startupLaunch', x1('optionStartupLaunchTitle'), [
      { Dn: 'displayOneTab', title: x1('optionStartupLaunchDisplay') },
      {
        Dn: 'none',
        title: x1('optionStartupLaunchNone'),
        wW: x1('optionStartupLaunchNoneDesc'),
      },
    ]),
  );
  XnS.appendChild(
    a1('restoreRemoval', x1('optionRestoreRemovalTitle'), [
      {
        Dn: 'default',
        title: x1('optionRestoreRemovalDefault'),
        wW: x1('optionRestoreRemovalDefaultDesc'),
      },
      {
        Dn: 'keep',
        title: x1('optionRestoreRemovalKeep'),
        wW: x1('optionRestoreRemovalKeepDesc'),
      },
    ]),
  );
  XnS.appendChild(
    a1('duplicates', x1('optionDuplicatesTitle'), [
      { Dn: 'allow', title: x1('optionDuplicatesAllow') },
      {
        Dn: 'reject',
        title: x1('optionDuplicatesReject'),
        wW: x1('optionDuplicatesRejectDesc'),
      },
    ]),
  );
}
var DK = 0;
function a1(OnS, knS, GnS, hnS) {
  var dnS = document.createElement('div');
  dnS.style.paddingBottom = '40px';
  dnS.style.maxWidth = '600px';
  var qnS = document.createElement('div');
  dnS.appendChild(qnS);
  qnS.style.fontSize = '14px';
  qnS.style.paddingBottom = '0px';
  qnS.appendChild(document.createTextNode(knS));
  var bnS = 'optionGroup' + DK++;
  for (var MnS in GnS) dnS.appendChild(Z(OnS, bnS, GnS[MnS]));
  if (hnS) {
    var snS = document.createElement('div');
    dnS.appendChild(snS);
    snS.style.fontSize = '12.25px';
    snS.style.color = '#666';
    snS.style.paddingTop = '10px';
    snS.style.paddingLeft = '0px';
    snS.appendChild(document.createTextNode(hnS));
  }
  return dnS;
}
var O = 0;
function Z(BVS, _nS, VVS) {
  var WnS = 'optionId' + O++;
  var lVS = VVS.Dn;
  var nVS = document.createElement('div');
  nVS.style.paddingBottom = '0px';
  var JnS = document.createElement('input');
  JnS.type = 'radio';
  JnS.name = _nS;
  JnS.id = WnS;
  JnS.style.cursor = 'pointer';
  yX(BVS, function(PBS) {
    if (PBS == lVS) JnS.checked = true;
  });
  JnS.addEventListener('click', function() {
    DX(function(Rq) {
      Rq[BVS] = lVS;
      C(Rq);
    });
  });
  var eVS = document.createElement('label');
  eVS['htmlFor'] = WnS;
  eVS.style.fontSize = '14px';
  eVS.appendChild(document.createTextNode(' '));
  eVS.appendChild(document.createTextNode(VVS.title));
  eVS.style.cursor = 'pointer';
  nVS.appendChild(JnS);
  nVS.appendChild(eVS);
  CX(nVS, '-5px');
  var DVS = document.createElement('div');
  DVS.style.color = '#666';
  DVS.style.fontSize = '12.25px';
  DVS.style.paddingTop = '4px';
  b1(DVS, '30px');
  if (VVS.wW) DVS.appendChild(document.createTextNode(VVS.wW));
  nVS.appendChild(DVS);
  return nVS;
}
