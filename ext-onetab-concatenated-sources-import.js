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
var fX = function() {
  window['_gaq'] = window['_gaq'] || [];
  window['_gaq'].push(['_setAccount', 'INVALIDATED']);
  window['_gaq'].push(['_trackPageview']);
  var i8 = document.createElement('script');
  i8['type'] = 'text/javascript';
  i8['async'] = true;
  i8['src'] = 'https://ssl.google-analytics.com/ga.js';
  var v8 = document.getElementsByTagName('script')[0];
  v8.parentNode.insertBefore(i8, v8);
};
fX();
function YK(b8, E8, X8) {
  if (!E8) E8 = {};
  var A8 = {};
  A8.type = b8;
  A8.Yn = pK.gW(E8);
  window['chrome']['runtime']['sendMessage'](undefined, A8, undefined, function(
    A6,
  ) {
    var X6 = {};
    if (A6 && A6.Yn) {
      X6 = pK.parse(A6.Yn);
    } else {
    }
    if (X8) X8(X6);
  });
}
function JK(O8, q8) {
  window['chrome']['runtime']['onMessage']['addListener'](function(O6, b6, s6) {
    if (O8 == O6.OW) {
      var q6 = {};
      if (O6 && O6.Yn) q6 = pK.parse(O6.Yn);
      q8(q6);
    }
  });
}
function MK(s8) {
  document.addEventListener('DOMContentLoaded', function() {
    s8();
  });
}
function Vj(h8) {
  var d8 = document.createElement('div');
  d8.style.paddingTop = '40px';
  d8.style.paddingBottom = '24px';
  b1(d8, '268px');
  d8.style.fontSize = '18px';
  d8.style.color = '#777';
  d8.style.fontWeight = '300';
  d8.style.borderBottom = '1px dashed #ddd';
  d8.style.marginBottom = '10px';
  d8.appendChild(document.createTextNode(h8));
  return d8;
}
function dj() {
  var k8 = document.createElement('img');
  k8.style.height = 114 / 2 + 'px';
  k8.style.width = 414 / 2 + 'px';
  k8.style.position = 'absolute';
  k8.style.top = '16px';
  iK(k8, '22px');
  k8.src = 'images/top-left-logo' + (zj() ? '' : '-rtl') + '.png';
  return k8;
}
function I1(nb, J8, G8) {
  var _8 = document.createElement('div');
  var M8 = document.createElement('div');
  b1(M8, '30px');
  M8.style.position = 'relative';
  M8.style.color = '#777';
  var W8 = document.createElement('img');
  W8.src = nb
    ? 'images/twister-open.png'
    : 'images/twister-closed' + (zj() ? '' : '-rtl') + '.png';
  W8.style.width = 48 / 2 + 'px';
  W8.style.height = 50 / 2 + 'px';
  W8.style.position = 'absolute';
  iK(W8, '0px');
  W8.style.top = '0px';
  M8.appendChild(document.createTextNode(J8));
  M8.style.fontSize = '16px';
  M8.style.cursor = 'pointer';
  _8.appendChild(M8);
  M8.appendChild(W8);
  var Bb = document.createElement('div');
  b1(Bb, '30px');
  Bb.style.paddingTop = '10px';
  Bb.appendChild(G8);
  Bb.style.display = nb ? 'block' : 'none';
  _8.appendChild(Bb);
  M8.onclick = function() {
    nb = !nb;
    W8.src = nb
      ? 'images/twister-open.png'
      : 'images/twister-closed' + (zj() ? '' : '-rtl') + '.png';
    Bb.style.display = nb ? 'block' : 'none';
  };
  return _8;
}
function Tj(Db, $b, lb, eb) {
  var Qb = document.createElement('div');
  Qb.style.fontSize = $b + 'px';
  Qb.className = 'clickable';
  var Vb = document.createElement('span');
  if (eb) {
    var Yb = document.createElement('span');
    Yb.style.color = '#f00';
    Yb.appendChild(document.createTextNode(x1('newExclamation') + ' '));
    Vb.appendChild(Yb);
  }
  if (typeof Db == 'string') {
    Vb.appendChild(document.createTextNode(Db));
  } else {
    Vb.appendChild(Db);
  }
  Vb.style.verticalAlign = 'middle';
  Vb.onclick = function() {
    lb(Vb);
  };
  Qb.appendChild(Vb);
  return Qb;
}
var pK = {
  gW: function(Hb) {
    var Tb,
      fb,
      Rb,
      Zb = '',
      rb;
    switch (typeof Hb) {
      case 'object':
        if (Hb) {
          if (Hb instanceof Array) {
            for (fb = 0; fb < Hb.length; ++fb) {
              rb = this.gW(Hb[fb]);
              if (Zb) {
                Zb += ',';
              }
              Zb += rb;
            }
            return '[' + Zb + ']';
          } else if (typeof Hb.toString != 'undefined') {
            for (fb in Hb) {
              rb = Hb[fb];
              if (typeof rb != 'undefined' && typeof rb != 'function') {
                rb = this.gW(rb);
                if (Zb) {
                  Zb += ',';
                }
                Zb += this.gW(fb) + ':' + rb;
              }
            }
            return '{' + Zb + '}';
          }
        }
        return 'null';
      case 'number':
        return isFinite(Hb) ? String(Hb) : 'null';
      case 'string':
        Rb = Hb.length;
        Zb = '"';
        for (fb = 0; fb < Rb; fb += 1) {
          Tb = Hb.charAt(fb);
          if (Tb >= ' ') {
            if (Tb == '\\' || Tb == '"') {
              Zb += '\\';
            }
            Zb += Tb;
          } else {
            switch (Tb) {
              case '\b':
                Zb += '\\b';
                break;
              case '\f':
                Zb += '\\f';
                break;
              case '\n':
                Zb += '\\n';
                break;
              case '\r':
                Zb += '\\r';
                break;
              case '\t':
                Zb += '\\t';
                break;
              default:
                Tb = Tb.charCodeAt();
                Zb +=
                  '\\u00' +
                  Math.floor(Tb / 16).toString(16) +
                  (Tb % 16).toString(16);
            }
          }
        }
        return Zb + '"';
      case 'boolean':
        return String(Hb);
      default:
        return 'null';
    }
  },
  parse: function(Fb) {
    var yb = 0;
    var Ub = ' ';
    function Ib(d6) {
      throw { name: 'JSONError', message: d6, Qn: yb - 1, text: Fb };
    }
    function Cb() {
      Ub = Fb.charAt(yb);
      yb += 1;
      return Ub;
    }
    function jb() {
      while (Ub !== '' && Ub <= ' ') {
        Cb();
      }
    }
    function pb() {
      var G6,
        M6 = '',
        k6,
        h6;
      if (Ub == '"') {
        bj: while (Cb()) {
          if (Ub == '"') {
            Cb();
            return M6;
          } else if (Ub == '\\') {
            switch (Cb()) {
              case 'b':
                M6 += '\b';
                break;
              case 'f':
                M6 += '\f';
                break;
              case 'n':
                M6 += '\n';
                break;
              case 'r':
                M6 += '\r';
                break;
              case 't':
                M6 += '\t';
                break;
              case 'u':
                h6 = 0;
                for (G6 = 0; G6 < 4; G6 += 1) {
                  k6 = parseInt(Cb(), 16);
                  if (!isFinite(k6)) {
                    break bj;
                  }
                  h6 = h6 * 16 + k6;
                }
                M6 += String.fromCharCode(h6);
                break;
              default:
                M6 += Ub;
            }
          } else {
            M6 += Ub;
          }
        }
      }
      Ib('Bad string');
    }
    function mb() {
      var W6 = [];
      if (Ub == '[') {
        Cb();
        jb();
        if (Ub == ']') {
          Cb();
          return W6;
        }
        while (Ub) {
          W6.push(Kb());
          jb();
          if (Ub == ']') {
            Cb();
            return W6;
          } else if (Ub != ',') {
            break;
          }
          Cb();
          jb();
        }
      }
      Ib('Bad array');
    }
    function Lb() {
      var J6,
        _6 = {};
      if (Ub == '{') {
        Cb();
        jb();
        if (Ub == '}') {
          Cb();
          return _6;
        }
        while (Ub) {
          J6 = pb();
          jb();
          if (Ub != ':') {
            break;
          }
          Cb();
          _6[J6] = Kb();
          jb();
          if (Ub == '}') {
            Cb();
            return _6;
          } else if (Ub != ',') {
            break;
          }
          Cb();
          jb();
        }
      }
      Ib('Bad object');
    }
    function xb() {
      var n_ = '',
        B_;
      if (Ub == '-') {
        n_ = '-';
        Cb();
      }
      while (Ub >= '0' && Ub <= '9') {
        n_ += Ub;
        Cb();
      }
      if (Ub == '.') {
        n_ += '.';
        while (Cb() && Ub >= '0' && Ub <= '9') {
          n_ += Ub;
        }
      }
      if (Ub == 'e' || Ub == 'E') {
        n_ += 'e';
        Cb();
        if (Ub == '-' || Ub == '+') {
          n_ += Ub;
          Cb();
        }
        while (Ub >= '0' && Ub <= '9') {
          n_ += Ub;
          Cb();
        }
      }
      B_ = +n_;
      if (!isFinite(B_)) {
        Ib('Bad number');
      } else {
        return B_;
      }
    }
    function ab() {
      switch (Ub) {
        case 't':
          if (Cb() == 'r' && Cb() == 'u' && Cb() == 'e') {
            Cb();
            return true;
          }
          break;
        case 'f':
          if (Cb() == 'a' && Cb() == 'l' && Cb() == 's' && Cb() == 'e') {
            Cb();
            return false;
          }
          break;
        case 'n':
          if (Cb() == 'u' && Cb() == 'l' && Cb() == 'l') {
            Cb();
            return null;
          }
          break;
      }
      Ib('Syntax error');
    }
    function Kb() {
      jb();
      switch (Ub) {
        case '{':
          return Lb();
        case '[':
          return mb();
        case '"':
          return pb();
        case '-':
          return xb();
        default:
          return Ub >= '0' && Ub <= '9' ? xb() : ab();
      }
    }
    return Kb();
  },
};
function mj() {
  this.mW = null;
  this.FW = null;
  this.Mj = null;
  this.Hn = null;
  this.CW = null;
  this.eW = null;
  this._j = false;
  this.kW = new Array();
  this.ln = null;
  this.hW = null;
}
mj.MW = 3;
mj.prototype.oW = function(vb, wb, gb, Nb, zb, ob, ub, Sb, cb) {
  var Pb = this;
  vb.onmousedown = function(e_) {
    var l_ = false;
    OX(
      e_,
      vb,
      null,
      function(yN, jN, mN, CN) {
        if (cb) {
          l_ = cb();
        }
      },
      function(uN, zN, LN, oN, aN, UN, SN, PN) {
        if (!Pb._j && !l_) {
          if (Math.abs(LN) > mj.MW || Math.abs(oN) > mj.MW) {
            Pb._j = true;
            Pb.kW = new Array();
            Pb.mW = wb;
            Pb.Mj = gb.offsetWidth;
            Pb.Hn = gb.offsetHeight;
            Pb.ln = gb.parentNode;
            Pb.hW = gb.nextSibling;
            gb.parentNode.removeChild(gb);
            Pb.FW = gb;
            Pb.CW = Nb;
            Pb.eW = document.createElement('div');
            Pb.eW.style.zIndex = BK;
            Pb.eW.style.position = 'absolute';
            Pb.eW.style.width = Pb.Mj + 'px';
            Pb.eW.style.height = Pb.Hn + 'px';
            Pb.eW.appendChild(Pb.FW);
            uj().appendChild(Pb.eW);
            zb();
          }
        }
        if (Pb._j) {
          Pb.eW.style.left = SN + 7 + 'px';
          Pb.eW.style.top = PN - 16 + 'px';
        }
      },
      function(vN, NN, AN, iN, gN, wN) {
        if (!Pb._j) {
          ob();
        } else {
          Pb._j = false;
          uj().removeChild(Pb.eW);
          if (Pb.LW) {
            Pb.LW(Pb.mW);
          } else {
            ub();
          }
          for (var EN in Pb.kW) {
            var cN = Pb.kW[EN];
            cN.style.display = 'none';
          }
          Pb.kW = new Array();
          Sb();
        }
      },
    );
  };
};
mj.prototype.HW = function(ib, bb, Ab, Eb) {
  var Xb = this;
  B1(ib, function(V_) {
    V_.event.cancelBubble = true;
    if (Xb._j) {
      if (ib != Xb.FW) {
        Ab.style.display = 'block';
        Ab.style.width = Xb.Mj - (nK ? 0 : 2) + 'px';
        Ab.style.height = Xb.Hn - (nK ? 0 : 2) + 'px';
        Ab.style.border = '1px dashed #' + pX;
        Xb.LW = Eb;
        for (var $_ in Xb.kW) {
          var D_ = Xb.kW[$_];
          if (f1(D_.parentNode, Ab) && Ab != D_) D_.style.display = 'none';
        }
        if (!l1(Xb.kW, Ab)) Xb.kW.push(Ab);
      }
    }
  });
  Oj(ib, function(Y_) {
    Y_.event.cancelBubble = true;
    if (Xb._j) {
      if (ib != Xb.FW) {
        Ab.style.display = 'none';
        Xb.LW = null;
        Ej(Ab, Xb.kW);
      }
    }
  });
};
mj.prototype.Kn = function(Ob) {
  var qb = document.createElement('div');
  Ob.appendChild(qb);
  return qb;
};
function oK(sb) {
  if (sb.indexOf('://') == -1) sb = 'http://' + sb;
  sb = sb.substring(sb.indexOf('://') + '://'.length);
  if (sb.indexOf('/') != -1) sb = sb.substring(0, sb.indexOf('/'));
  return sb.toLowerCase();
}
function l1(kb, db) {
  for (var hb in kb) if (kb[hb] == db) return true;
  return false;
}
function I(Mb) {
  if (typeof Mb == 'string') Mb = document.getElementById(Mb);
  if (!Mb) return;
  while (Mb.childNodes.length > 0) Mb.removeChild(Mb.childNodes[0]);
}
function P1(Gb) {
  var Wb = document.createElement('div');
  Wb.style.fontSize = '1px';
  Wb.style.height = Gb + 'px';
  Wb.style.width = 1 + 'px';
  return Wb;
}
function Ej(_b, Bf) {
  for (var Jb = 0; Jb < Bf.length; Jb++) {
    if (Bf[Jb] == _b) {
      Bf.splice(Jb, 1);
      Jb--;
    }
  }
}
function H(Df) {
  var ef = Df ? Df : window.event;
  var $f = 0;
  var nf = 0;
  var lf = 0;
  var Vf = 0;
  if (ef != null) {
    if (nK) {
      lf = ef.shiftKey;
      nf = ef.altKey;
      $f = ef.ctrlKey;
    } else {
      lf = ef.shiftKey;
      $f = ef.ctrlKey;
      nf = ef.altKey;
      Vf = ef.metaKey;
    }
  }
  return $f || Vf || lf;
}
function Ij(Hf) {
  var Qf = Hf ? Hf : window.event;
  var Tf = 0;
  var Yf = 0;
  var rf = 0;
  var Zf = 0;
  if (Qf != null) {
    if (nK) {
      rf = Qf.shiftKey;
      Yf = Qf.altKey;
      Tf = Qf.ctrlKey;
    } else {
      rf = Qf.shiftKey;
      Tf = Qf.ctrlKey;
      Yf = Qf.altKey;
      Zf = Qf.metaKey;
    }
  }
  return Tf || Zf;
}
function xX(xf) {
  var ff = xf ? xf : window.event;
  var pf = 0;
  var Rf = 0;
  var Kf = 0;
  var Ff = 0;
  if (ff != null) {
    if (nK) {
      Kf = ff.shiftKey;
      Rf = ff.altKey;
      pf = ff.ctrlKey;
    } else {
      Kf = ff.shiftKey;
      pf = ff.ctrlKey;
      Rf = ff.altKey;
      Ff = ff.metaKey;
    }
  }
  return Kf;
}
function wK(If) {
  If['noCacheRandom'] = _1();
}
function _1() {
  return new Date().getTime() + Math.round(Math.random() * 10000) + '';
}
function aX(yf, Cf, jf) {
  wK(Cf);
  var mf = pK.gW(Cf);
  Fj(yf, mf, function(Q_) {
    if (jf) jf(pK.parse(Q_));
  });
}
function Fj(of, Lf, Uf) {
  var af = o1();
  af.open(Lf == null ? 'GET' : 'POST', of, true);
  af.setRequestHeader('Content-Type', 'text/json');
  af.onreadystatechange = function() {
    var H_ = false;
    H_ = af.readyState == 4;
    if (H_) {
      var r_ = af.responseText;
      Uf(r_);
    }
  };
  af.send(Lf);
}
function o1() {
  var zf = new XMLHttpRequest();
  return zf;
}
function zK() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(R_) {
    var T_ = (Math.random() * 16) | 0,
      Z_ = R_ == 'x' ? T_ : (T_ & 0x3) | 0x8;
    return Z_.toString(16);
  });
}
var SK = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(
  '',
);
function nX(cf, Sf) {
  var Pf = SK,
    uf = [],
    gf = 0;
  Sf = Sf || Pf.length;
  cf = cf || 22;
  for (gf = 0; gf < cf; gf++) uf[gf] = Pf[0 | (Math.random() * Sf)];
  return uf.join('');
}
function Rj() {
  return nX();
}
function R1(Nf) {
  if (!Nf == null || Nf == undefined) return '';
  return Nf.replace(/^\s+/, '').replace(/\s+$/, '');
}
function gX(Ef) {
  var Xf = document.createElement('span');
  var Af = Ef.indexOf('OneTab');
  var vf = Af + 'OneTab'.length;
  if (Af == 0) {
    Xf.appendChild(cK());
    Xf.appendChild(document.createTextNode(Ef.substring(vf)));
  } else {
    Xf.appendChild(document.createTextNode(Ef.substring(0, Af)));
    Xf.appendChild(cK());
    if (vf != Ef.length)
      Xf.appendChild(document.createTextNode(Ef.substring(vf)));
  }
  return Xf;
}
function cK() {
  var qf = document.createElement('span');
  var bf = document.createElement('span');
  bf.style.fontStyle = 'italic';
  bf.appendChild(document.createTextNode('One'));
  qf.appendChild(bf);
  qf.appendChild(document.createTextNode('Tab'));
  return qf;
}
function M(Of) {
  var sf = Of.split('OneTab');
  var hf = document.createElement('span');
  for (var df in sf) {
    if (sf[df] == '') hf.appendChild(cK());
    else hf.appendChild(document.createTextNode(sf[df]));
  }
  return hf;
}
function B(Gf) {
  var Mf = new Date(Gf.valueOf()),
    kf = (Gf.getUTCDay() + 6) % 7,
    Wf;
  Mf.setUTCDate(Mf.getUTCDate() - kf + 3);
  Wf = Mf.valueOf();
  Mf.setUTCMonth(0, 1);
  if (Mf.getUTCDay() !== 4) {
    Mf.setUTCMonth(0, 1 + ((4 - Mf.getUTCDay() + 7) % 7));
  }
  return Math.ceil((Wf - Mf) / (7 * 24 * 3600 * 1000)) + 1;
}
function gK(_f, Jf) {
  while (_f.length < Jf) _f = '0' + _f;
  return _f;
}
function c1(BS) {
  return (BS.getUTCFullYear() + '').substr(2) + gK(B(BS) + '', 2);
}
function xj(nS) {
  if (nS == 0) return x1('total0Tabs');
  if (nS == 1) return x1('total1Tab');
  return x1('total2Tabs').replace('2', nS + '');
}
function Qj(lS) {
  var eS = lS == 1 ? x1('1tab') : x1('2tabs').replace('2', lS + '');
  return eS;
}
function G1(VS, $S) {
  var DS = '';
  for (var YS = 0; YS < $S; YS++) DS += VS;
  return DS;
}
function XX(QS) {
  QS.sort(function(K_, f_) {
    if (K_['starred'] || f_['starred']) {
      if (!f_['starred']) return -1;
      else if (!K_['starred']) return 1;
      else {
        if (K_['starredDate'] > f_['starredDate']) return 1;
        if (K_['starredDate'] < f_['starredDate']) return -1;
        return 0;
      }
    } else {
      if (K_['createDate'] > f_['createDate']) return -1;
      if (K_['createDate'] < f_['createDate']) return 1;
      return 0;
    }
  });
}
function W1(rS) {
  if (!rS) rS = '';
  return rS.replace(/[\x00-\x1F\x7F-\x9F]/g, '');
}
var N1, qK, X, xK, qX;
var pj, jj;
var oj, Uj;
var AK = !!('ontouchstart' in window);
function OX(TS, HS, fS, RS, ZS, KS) {
  N1 = HS;
  qK = fS;
  X = RS;
  xK = ZS;
  qX = KS;
  oj = 0;
  Uj = 0;
  if (AK && TS instanceof TouchEvent) {
    if (TS.touches.length > 1) {
      return;
    }
    pj = TS.touches.item(0).pageX;
    jj = TS.touches.item(0).pageY;
    document.addEventListener('touchmove', fK, false);
    document.addEventListener('touchend', aj, false);
    TS.preventDefault();
  } else {
    if (nK || mK) {
      pj =
        window.event.clientX +
        (mK ? 0 : document.documentElement.scrollLeft) +
        document.body.scrollLeft;
      jj =
        window.event.clientY +
        (mK ? 0 : document.documentElement.scrollTop) +
        document.body.scrollTop;
    } else {
      pj = TS.clientX + window.scrollX;
      jj = TS.clientY + window.scrollY;
    }
    if (nK) {
      document.attachEvent(bX, fK);
      document.attachEvent(J, aj);
      window.event.cancelBubble = true;
      window.event.returnValue = false;
    } else {
      document.addEventListener(Aj, fK, false);
      document.addEventListener(m1, aj, false);
      TS.preventDefault();
    }
  }
  X(N1, qK, pj, jj);
}
function fK(IS) {
  var CS, mS, FS, pS;
  if (AK && IS instanceof TouchEvent) {
    if (IS.touches.length > 1) {
      FS = 0;
      pS = 0;
      xK(N1, qK, FS, pS, pj, jj, CS, mS);
      return aj(IS);
    }
    CS = IS.touches.item(0).pageX;
    mS = IS.touches.item(0).pageY;
  } else {
    if (nK || mK) {
      CS =
        window.event.clientX +
        (mK ? 0 : document.documentElement.scrollLeft) +
        document.body.scrollLeft;
      mS =
        window.event.clientY +
        (mK ? 0 : document.documentElement.scrollTop) +
        document.body.scrollTop;
    } else {
      CS = IS.clientX + window.scrollX;
      mS = IS.clientY + window.scrollY;
    }
  }
  FS = CS - pj;
  pS = mS - jj;
  var xS = false;
  if (oj != FS || Uj != pS) xS = true;
  oj = FS;
  Uj = pS;
  if (xS) {
    xK(N1, qK, FS, pS, pj, jj, CS, mS);
  }
  if (nK) {
    window.event.cancelBubble = true;
    window.event.returnValue = false;
  } else {
    IS.preventDefault();
  }
}
function aj(jS) {
  if (AK && jS instanceof TouchEvent) {
    document.removeEventListener('touchmove', fK, false);
    document.removeEventListener('touchend', aj, false);
  } else {
    if (nK) {
      document.detachEvent(bX, fK);
      document.detachEvent(J, aj);
    } else {
      document.removeEventListener(Aj, fK, false);
      document.removeEventListener(m1, aj, false);
    }
  }
  qX(N1, qK, oj, Uj, pj, jj);
}
function jK(US, LS, aS, yS) {
  this.sW = US;
  this.type = LS;
  this.nn = aS;
  this.kj = yS;
}
jK.prototype.remove = function() {
  if (nK) {
    this.sW.detachEvent(this.type, this.nn);
  } else {
    this.sW.removeEventListener(this.type, this.nn, this.kj);
  }
};
function $(oS, zS) {
  oS.onmousemove = function(x_) {
    zS(new z1(oS, x_));
  };
}
function Kj(uS, SS) {
  uS.onmousedown = function(F_) {
    SS(new z1(uS, F_));
  };
}
function P(PS, cS) {
  PS.onmouseover = function(p_) {
    cS(new z1(PS, p_));
  };
}
function Zj(gS, wS) {
  gS.onmouseup = function(I_) {
    wS(new z1(gS, I_));
  };
}
function w1(NS, vS) {
  NS.onmouseout = function(m_) {
    vS(new z1(NS, m_));
  };
}
function LX(iS, ES) {
  iS.onclick = function(C_) {
    ES(new z1(iS, C_));
  };
}
function kX(AS, XS) {
  AS.ondblclick = function(j_) {
    XS(new z1(AS, j_));
  };
}
function CK(bS, qS) {
  QK(bS, rK, LK, qS);
}
function TK(OS, sS) {
  QK(OS, T, F1, sS);
}
function B1(dS, hS) {
  return QK(dS, r1, $j, hS);
}
function GK(kS, MS) {
  return QK(kS, m1, J, MS);
}
function Oj(kF, MF) {
  var GF;
  if (nK) {
    GF = function(y_) {
      MF(new z1(kF, y_));
    };
    kF.attachEvent(JX, GF);
    return new jK(kF, JX, GF, false);
  } else {
    GF = function(a_) {
      var L_, U_;
      L_ = a_.currentTarget;
      U_ = a_.relatedTarget;
      if (L_ == kF && L_ != U_ && !f1(L_, U_)) {
        MF(new z1(kF, a_));
      }
    };
    kF.addEventListener(GX, GF, false);
    return new jK(kF, GX, GF, false);
  }
}
function X1(WF, _F) {
  if (nK) {
    WF.onmouseleave = function(o_) {
      _F(new z1(WF, o_));
    };
  } else {
    WF.onmouseout = function(z_) {
      var u_, S_;
      u_ = z_.currentTarget;
      S_ = z_.relatedTarget;
      if (u_ == WF && u_ != S_ && !f1(u_, S_)) {
        _F(new z1(WF, z_));
      }
    };
  }
}
function sj(nLS, BLS) {
  if (nK) {
    for (var eLS in nLS) {
      var JF = nLS[eLS];
      JF.onmouseleave = nj(JF, nLS, BLS);
    }
  } else {
    for (var eLS in nLS) {
      var JF = nLS[eLS];
      JF.onmouseout = _(JF, nLS, BLS);
    }
  }
}
function _(lLS, VLS, DLS) {
  return function(P_) {
    var c_, w_;
    c_ = P_.currentTarget;
    w_ = P_.relatedTarget;
    if (c_ == lLS && c_ != w_ && !f1(c_, w_)) {
      for (var g_ in VLS) if (w_ == VLS[g_]) return;
      DLS(new z1(lLS, P_));
    }
  };
}
function nj($LS, QLS, YLS) {
  return function() {
    for (var N_ in QLS) if (window.event.toElement == QLS[N_]) return;
    YLS(new z1($LS, window.event));
  };
}
function f1(rLS, ZLS) {
  try {
    if (!ZLS) return false;
    while (ZLS.parentNode) if ((ZLS = ZLS.parentNode) == rLS) return true;
    return false;
  } catch (HLS) {
    return false;
  }
}
function z1(TLS, RLS) {
  this.TW = TLS;
  this.event = RLS;
  this.RW = null;
  this.ZW = null;
  this.Bn = function() {
    if (this.RW == null) {
      var v_ = n1(TLS, RLS);
      this.RW = v_.x;
      this.ZW = v_.y;
    }
    return this.RW;
  };
  this._W = function() {
    if (this.RW == null) {
      this.Bn();
    }
    return this.ZW;
  };
}
function QK(xLS, KLS, FLS, pLS) {
  var fLS = function(i_) {
    var E_ = new z1(xLS, i_);
    pLS(E_);
  };
  if (nK) {
    xLS.attachEvent(FLS, fLS);
    return new jK(xLS, FLS, fLS, false);
  } else {
    xLS.addEventListener(KLS, fLS, false);
    return new jK(xLS, KLS, fLS, false);
  }
}
function lj(ILS, yLS, CLS, mLS, jLS) {
  Kj(ILS, function(A_) {
    OX(A_.event, ILS, yLS, CLS, mLS, jLS);
  });
}
function IX(aLS) {
  return i1(aLS);
}
function n1(LLS, ULS) {
  if (nK || M6S) {
    return new _6S(window.event.offsetX, window.event.offsetY);
  }
  return i1(ULS).Rn(EK(LLS));
}
function i1(oLS) {
  if (nK || mK) {
    var uLS =
      window.event.clientX +
      (mK ? 0 : document.documentElement.scrollLeft) +
      document.body.scrollLeft;
    var zLS =
      window.event.clientY +
      (mK ? 0 : document.documentElement.scrollTop) +
      document.body.scrollTop;
  } else {
    var uLS = oLS.clientX + window.scrollX;
    var zLS = oLS.clientY + window.scrollY;
  }
  return new _6S(uLS, zLS);
}
function EK(SLS) {
  var PLS = SLS;
  var wLS = 0;
  var gLS = 0;
  while (true) {
    var cLS = PLS.offsetParent;
    if (cLS == undefined) break;
    wLS += PLS.offsetLeft;
    gLS += PLS.offsetTop;
    PLS = cLS;
  }
  return new _6S(wLS, gLS);
}
function Y(vLS, iLS, ELS) {
  if (!ELS) if (!G6S()) return;
  try {
    if (iLS == 100) {
      vLS.style.filter = '';
      vLS.style.DW = '';
      vLS.style.opacity = '';
    } else {
      vLS.style.filter = 'alpha(opacity=' + iLS + ')';
      vLS.style.DW = iLS / 100;
      vLS.style.opacity = iLS / 100;
    }
  } catch (NLS) {}
}
function vj() {
  if (nK || mK)
    return (
      (mK ? 0 : document.documentElement.scrollTop) + document.body.scrollTop
    );
  else return window.scrollY;
}
function sX() {
  if (nK || mK)
    return (
      (mK ? 0 : document.documentElement.scrollLeft) + document.body.scrollLeft
    );
  else return window.scrollX;
}
var TX = {};
function Sj(ALS) {
  WK(function(X_) {
    TX = X_;
    ALS();
  });
}
function x1(XLS) {
  return TX[XLS];
}
function d1() {
  fj();
  Sj(function() {
    yj();
  });
}
var PX = navigator['language'] || navigator['userLanguage'];
function A() {
  var bLS = ['ar', 'he', 'fa', 'ps', 'ur'];
  var qLS = PX.split('-', 1)[0];
  return bLS.indexOf(qLS) >= 0 ? 'rtl' : 'ltr';
}
var VX = A();
function zj() {
  return VX != 'rtl';
}
function fj() {
  document.getElementsByTagName('html')[0]['dir'] = VX;
}
function iK(sLS, OLS) {
  if (zj()) sLS.style.left = OLS;
  else sLS.style.right = OLS;
}
function J1(hLS, dLS) {
  if (zj()) hLS.style.right = dLS;
  else hLS.style.left = dLS;
}
function b1(MLS, kLS) {
  if (zj()) MLS.style.paddingLeft = kLS;
  else MLS.style.paddingRight = kLS;
}
function Cj(WLS, GLS) {
  if (zj()) WLS.style.paddingRight = GLS;
  else WLS.style.paddingLeft = GLS;
}
function CX(JLS, _LS) {
  if (zj()) JLS.style.marginLeft = _LS;
  else JLS.style.marginRight = _LS;
}
var K1 = [
  { fontFamily: 'Open Sans', fontStyle: 'normal', fontWeight: '300' },
  { fontFamily: 'Open Sans', fontStyle: 'normal', fontWeight: '400' },
  { fontFamily: 'Open Sans', fontStyle: 'italic', fontWeight: '400' },
  { fontFamily: 'Open Sans', fontStyle: 'normal', fontWeight: '600' },
  { fontFamily: 'Open Sans', fontStyle: 'normal', fontWeight: '700' },
];
function Y1(YXS, DXS) {
  var eXS = 250;
  var QXS = 0;
  var $XS = 50;
  var nXS = false;
  var BXS = 0;
  var lXS = false;
  setTimeout(function() {
    lXS = true;
  }, eXS);
  for (var rXS = 0, VXS = YXS.length; rXS < VXS; ++rXS) {
    (function(O_) {
      var b_ = document.createElement('span');
      b_.innerHTML = 'giItT1WQy@!-/#';
      b_.style.position = 'absolute';
      iK(b_, '-10000px');
      b_.style.top = '-10000px';
      b_.style.fontSize = '300px';
      b_.style.fontFamily = 'sans-serif';
      b_.style.fontVariant = 'normal';
      b_.style.fontStyle = O_.fontStyle;
      b_.style.fontWeight = O_.fontWeight;
      b_.style.letterSpacing = '0';
      document.body.appendChild(b_);
      var s_ = b_.offsetWidth;
      b_.style.fontFamily = O_.fontFamily;
      var q_;
      function d_() {
        if (b_ && b_.offsetWidth != s_) {
          ++BXS;
          b_.parentNode.removeChild(b_);
          b_ = null;
        }
        if (BXS >= YXS.length || lXS) {
          if (q_) {
            clearInterval(q_);
          }
          if (BXS == YXS.length || lXS) {
            if (!nXS) {
              nXS = true;
              DXS();
            }
            return true;
          }
        }
      }
      if (!d_()) {
        q_ = setInterval(d_, $XS);
      }
    })(YXS[rXS]);
  }
}
function e1(HXS) {
  YK('getState', {}, function(h_) {
    if (HXS) HXS(h_);
  });
}
function H1(TXS, ZXS) {
  YK('storeState', { rW: TXS }, function(k_) {
    if (ZXS) ZXS(k_);
  });
}
function yX(RXS, fXS) {
  YK('getSetting', { vW: RXS }, function(M_) {
    if (fXS) fXS(M_.value);
  });
}
function DX(KXS) {
  YK('getSettings', {}, function(G_) {
    if (KXS) KXS(G_);
  });
}
function NK(pXS, FXS, xXS) {
  YK('storeSetting', { key: pXS, value: FXS }, function(W_) {
    if (xXS) xXS(W_);
  });
}
function C(mXS, IXS) {
  YK('storeSettings', { AW: mXS }, function(__) {
    if (IXS) IXS(__);
  });
}
function bK(CXS, yXS, jXS) {
  YK('restoreTabsMeta', { Gj: CXS, xn: yXS }, function(J_) {
    if (jXS) jXS(J_);
  });
}
function UK(aXS) {
  YK('upgradeAvailable', {}, function(Bp) {
    if (aXS) aXS(Bp.value);
  });
}
function WK(LXS) {
  YK('getAllMessages', {}, function(np) {
    if (LXS) LXS(np);
  });
}
MK(function() {
  d1();
});
function yj() {
  e1(function(ep) {
    u1(ep);
  });
}
function u1(zXS) {
  var oXS = document.getElementById('contentAreaDiv');
  I(oXS);
  oXS.style.paddingTop = '0px';
  oXS.style.paddingLeft = '0px';
  oXS.appendChild(dj());
  oXS.appendChild(Vj(x1('import') + ' / ' + x1('export')));
  var UXS = document.createElement('div');
  oXS.appendChild(UXS);
  UXS.style.paddingTop = '14px';
  b1(UXS, '36px');
  UXS.appendChild(
    I1(
      false,
      x1('importUrls'),
      (function() {
        var $p = document.createElement('div');
        var Yp = document.createElement('div');
        Yp.appendChild(document.createTextNode(x1('pasteInUrlsInstructions')));
        Yp.style.color = '#777';
        Yp.style.paddingBottom = '10px';
        $p.appendChild(Yp);
        var Vp = document.createElement('textArea');
        Vp.style.width = '800px';
        Vp.style.height = '200px';
        $p.appendChild(Vp);
        if (!zXS['tabGroups']) zXS['tabGroups'] = [];
        var Dp = zXS['tabGroups'];
        var lp = Tj(x1('import'), 16, function() {
          YK('importTabsFromText', { text: Vp.value }, function() {
            setTimeout(function() {
              window['close']();
            }, 100);
          });
        });
        $p.appendChild(lp);
        $p.style.paddingBottom = '30px';
        return $p;
      })(),
    ),
  );
  UXS.appendChild(P1(16));
  UXS.appendChild(
    I1(
      true,
      x1('exportUrls'),
      (function() {
        var Hp = document.createElement('div');
        var Rp = document.createElement('div');
        Rp.appendChild(document.createTextNode(x1('exportThenImportNote')));
        Rp.style.color = '#777';
        Rp.style.paddingBottom = '10px';
        Hp.appendChild(Rp);
        var rp = document.createElement('textArea');
        rp.style.width = '800px';
        rp.style.height = '500px';
        var Qp = zXS['tabGroups'];
        if (!Qp) Qp = [];
        XX(Qp);
        for (var Tp = 0; Tp < Qp.length; Tp++) {
          var fp = Qp[Tp];
          for (var xp in fp['tabsMeta']) {
            var Kp = fp['tabsMeta'][xp];
            var Zp = Kp['url'];
            if (oK(Zp) != Kp['title']) Zp = Zp + ' | ' + W1(Kp['title']);
            rp.value = rp.value + Zp + '\n';
          }
          if (Tp != Qp.length - 1) rp.value = rp.value + '\n';
        }
        Hp.appendChild(rp);
        Hp.style.paddingBottom = '30px';
        return Hp;
      })(),
    ),
  );
  oXS.appendChild(
    (function() {
      var Fp = document.createElement('div');
      Fp.style.paddingTop = '30px';
      return Fp;
    })(),
  );
}
