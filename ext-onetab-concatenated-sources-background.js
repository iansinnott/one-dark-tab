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
var _X = {};
function C1(pn, Fn) {
  _X[pn] = Fn;
  if (k6S) D(pn, Fn);
}
function U(In) {
  return In.indexOf(oX) == 0;
}
function sK(mn) {
  return mn.indexOf(eK) == 0;
}
function qj(jn, Cn) {
  _K(
    'availableVersion',
    function(BB) {
      if (!BB) jn(false);
      else {
        var VB = parseInt(y1.substring(0, y1.indexOf('.')));
        var DB = parseInt(y1.substring(y1.indexOf('.') + 1));
        var lB = parseInt(BB.substring(0, BB.indexOf('.')));
        var eB = parseInt(BB.substring(BB.indexOf('.') + 1));
        var nB = false;
        if (VB < lB) nB = true;
        if (VB == lB) {
          if (DB < eB) nB = true;
        }
        jn(nB);
      }
    },
    Cn,
  );
}
C1('upgradeAvailable', function(an, yn) {
  qj(yn, $X);
});
function V(Un, Ln) {
  K().fW(
    'extensionKey',
    function(YB, $B) {
      if (!YB) {
        YB = zK();
        K().NW(
          'extensionKey',
          YB,
          function() {
            Un(YB, $B);
          },
          $B,
        );
      } else {
        Un(YB, $B);
      }
    },
    Ln,
  );
}
C1('getExtensionKey', function(zn, on) {
  V(on, $X);
});
var BX = function(Sn, un) {
  UX(function(rB, QB) {
    if (!rB['tabGroups']) {
      rB['tabGroups'] = [];
      Hj(
        rB,
        function(Bl) {
          Sn(Bl);
        },
        QB,
      );
    } else {
      Sn(QB);
    }
  }, un);
};
var EX = function(Pn) {
  lX(undefined, Pn);
};
C1('displayOneTabAction', function(gn, cn) {
  EX(cn);
});
var YX = function(wn, vn, Nn) {
  h(function(HB) {
    HX(
      HB,
      function(nl) {
        uK();
        nl(vn);
      },
      wn,
      Nn,
    );
  });
};
var G = function(qn, An, Xn) {
  var bn = qn['linkUrl'];
  var En = '';
  if (qn['linkTitle']) En = qn['linkTitle'];
  else {
    if (k6S && bn == window.Xj) {
      En = window.jX;
    } else {
      En = bn;
    }
  }
  zX(
    bn,
    En,
    function() {
      uK();
    },
    An,
    Xn,
  );
};
var Dj = function(On, sn) {
  A1(function(ZB) {
    FK(
      ZB,
      true,
      function(el) {
        lX(true, el);
      },
      On,
      sn,
    );
  });
};
var z = function(dn, kn, hn) {
  A1(function(KB, RB) {
    var TB = [];
    if (RB) {
      for (var fB in KB)
        if (parseInt(KB[fB]['index']) != parseInt(RB['index'])) TB.push(KB[fB]);
      if (TB.length > 0) {
        FK(
          TB,
          true,
          function(ll) {
            uK();
            if (kn) kn(hn);
            ll();
          },
          dn,
          hn,
        );
      } else {
        if (kn) kn(hn);
      }
    } else {
      if (!W6S) alert('no active tab (B)');
      else if (D1) console.log('no active tab (B)');
      kn(hn);
    }
  });
};
var hK = function(Mn, Gn) {
  A1(function(IB, xB) {
    var FB = [];
    if (xB) {
      for (var pB in IB)
        if (parseInt(IB[pB]['index']) < parseInt(xB['index'])) FB.push(IB[pB]);
      if (FB.length > 0) {
        FK(
          FB,
          true,
          function(Dl) {
            uK();
            Dl();
          },
          Mn,
          Gn,
        );
      }
    }
  });
};
var wX = function(Wn, _n) {
  A1(function(yB, mB) {
    var CB = [];
    if (mB) {
      for (var jB in yB)
        if (parseInt(yB[jB]['index']) > parseInt(mB['index'])) CB.push(yB[jB]);
      if (CB.length > 0) {
        FK(
          CB,
          true,
          function(Vl) {
            uK();
            Vl();
          },
          Wn,
          _n,
        );
      }
    }
  });
};
var KX = function(Jn, nV, BV) {
  VK(function(aB) {
    FK(
      aB,
      true,
      function($l) {
        lX(true, function() {
          if (nV) nV();
        });
        $l();
      },
      Jn,
      BV,
    );
  });
};
C1('sendAllTabsInAllWindowsToOneTabAction', function(lV, eV) {
  KX(lV.YW, eV, $X);
});
function uK(DV) {
  Yj(function(uB) {
    var LB = undefined;
    for (var zB = 0; zB < uB.length; zB++) {
      var UB = uB[zB];
      var oB = UB['url'];
      if (oB.indexOf(oX) == 0) {
        LB = UB;
        break;
      }
    }
    if (LB) {
      WX(LB, function() {
        if (DV) DV();
      });
    } else {
      if (DV) DV();
    }
  });
}
function ej($V, VV) {
  UX(function(cB, PB) {
    var SB = cB['tabGroups'];
    if (!SB) SB = [];
    var gB = 0;
    for (var NB = 0; NB < SB.length; NB++) {
      var wB = SB[NB];
      gB += wB['tabsMeta'].length;
    }
    if (gB == 0) {
      Yj(function(Ql) {
        for (var Yl in Ql) {
          if (U(Ql[Yl]['url'])) {
            W(Ql[Yl], function() {
              S1();
            });
          }
        }
        if ($V) $V();
      });
    } else {
      if ($V) $V();
    }
  }, VV);
}
C1('closeOneTabIfEmpty', function(QV, YV) {
  return ej(YV, $X);
});
function lX(HV, rV) {
  Yj(function(XB) {
    var vB = undefined;
    for (var AB = 0; AB < XB.length; AB++) {
      var iB = XB[AB];
      var EB = iB['url'];
      if (EB.indexOf(oX) == 0) {
        if (vB) {
          W(vB);
        } else {
          vB = iB;
        }
      }
    }
    if (vB) {
      if (HV) {
        MX(vB, function() {
          WX(vB, function() {
            if (rV) rV();
          });
        });
      } else {
        MX(vB, function() {
          if (rV) rV();
        });
      }
    } else {
      KK(oX, function() {
        if (rV) rV();
      });
    }
  });
}
function Lj(fV, ZV) {
  var TV = V1(fV);
  var RV = true;
  Yj(function(dB) {
    var qB = undefined;
    for (var sB = 0; sB < dB.length; sB++) {
      var bB = dB[sB];
      var OB = bB['url'];
      if (OB == TV) {
        if (qB) {
          W(qB);
        } else {
          qB = bB;
        }
      }
    }
    if (qB) {
      if (RV) {
        WX(qB, function() {});
      }
      MX(qB, function() {
        if (ZV) ZV();
      });
    } else {
      KK(TV, function() {
        if (ZV) ZV();
      });
    }
  });
}
C1('showOrRefreshAndFocusScriptPage', function(xV, KV) {
  return Lj(xV.url, KV);
});
var hX = function(FV, mV, IV, pV) {
  AX(function(MB, hB) {
    var kB = rj('restoreWindow', MB);
    if (mV == 'currentWindow') kB = 'currentWindow';
    if (mV == 'newWindow') kB = 'newWindow';
    A1(function(rl) {
      var Zl = 0;
      for (var Rl in rl) {
        var Hl = rl[Rl];
        if (Hl['pinned'] || Hl['isPinned']) continue;
        if (U(Hl['url'])) continue;
        Zl++;
      }
      if (
        kB == 'currentWindow' ||
        (kB == 'newWindow' && mV != 'newWindow' && Zl == 0)
      ) {
        for (var Rl = 0; Rl < FV.length; Rl++) {
          var Tl = FV[Rl];
          d(Tl['url'], !!Tl['pinned'], false, function() {
            S1();
          });
        }
      } else {
        lK(FV, function() {
          S1();
        });
      }
      if (IV) IV(hB);
    });
    setTimeout(function() {
      ej(undefined, $X);
    }, 200);
  }, pV);
};
C1('restoreTabsMeta', function(jV, CV) {
  hX(jV.Gj, jV.xn, CV, $X);
});
function j1(yV, LV, aV) {
  UX(function(eP, BP) {
    var WB = eP['tabGroups'];
    var DP = yV.split('\n');
    var JB = new Date().getTime();
    var _B = function() {
      var fl = {};
      fl['createDate'] = JB--;
      fl['tabsMeta'] = [];
      fl['id'] = nX();
      return fl;
    };
    var $P = _B();
    for (var YP in DP) {
      var lP = DP[YP];
      if (!lP) {
        if ($P['tabsMeta'].length > 0) {
          WB.push($P);
          $P = _B();
        }
      } else {
        var VP;
        var GB;
        if (lP.indexOf(' | ') != -1) {
          VP = lP.substring(0, lP.indexOf(' | '));
          GB = lP.substring(lP.indexOf(' | ') + ' | '.length);
        } else {
          VP = lP;
          GB = oK(lP);
        }
        if (VP.indexOf('://') == -1) VP = 'http://' + VP;
        var nP = {};
        nP['id'] = Rj();
        nP['url'] = VP;
        nP['title'] = W1(GB);
        $P['tabsMeta'].push(nP);
      }
    }
    if ($P['tabsMeta'].length > 0) {
      WB.push($P);
    }
    Hj(
      eP,
      function(Kl) {
        lX(true, function() {
          if (LV) LV();
        });
      },
      BP,
    );
  }, aV);
}
C1('importTabsFromText', function(oV, UV) {
  j1(oV.text, UV, $X);
});
C1('getAllMessages', function(PV, SV) {
  var uV = [
    'addOneTabNow',
    '95PctMemoryReduction',
    'noTabsInOneTabYet',
    'importUrls',
    'exportImportUrls',
    'pleaseWaitTripleDot',
    'about',
    'optionTabGroupRestoreNewWindow',
    'optionPinnedTabsDontSend',
    'beforeLostInMessBrowserSlow',
    'sendAllTabsAllWindowsToPlaceholder',
    'convertTabsIntoAList',
    'tooManyTabsSpeedUpFirefox',
    'sendOnlyThisTabToPlaceholder',
    'emptyOneTabInfoMsg',
    'OneTabAlsoAvailableForFirefox',
    'feedback',
    'optionRestoreRemovalDefault',
    'features',
    'unlockBeforeDeleting',
    'sendRightTabsToOneTab',
    'tab',
    'sendAllTabsToPlaceholder',
    'options',
    'sendThisWebLinkToOneTab',
    'namedTabGroups',
    'export',
    'excludeDomainFromOneTab',
    'optionStartupLaunchDisplay',
    'lockTabGroup',
    'optionTabGroupRestoreCurrentWindowAlways',
    'noSignupRegistrationRequired',
    'optionStartupLaunchNone',
    'optionDuplicatesRejectDesc',
    'unstarTabGroup',
    'shareAllAsWebPage',
    'nameThisTabGroup',
    'afterInstantReliefRestoreLater',
    'languageTitle',
    'memoryAfter99',
    'sendThisWebLinkToPlaceholder',
    'optionRestoreRemovalDefaultDesc',
    'sendLeftTabsToOneTab',
    'optionRestoreRemovalKeepDesc',
    'nowAvailableInLanguage',
    'moreTripleDot',
    'sendOnlyThisTabToOneTab',
    'restoreAll',
    'optionPinnedTabsDontSendDesc',
    'optionPinnedTabsAllow',
    'exportUrls',
    'optionDuplicatesAllow',
    'bringAllTabsIntoOneTab',
    'import',
    'total0Tabs',
    '2tabs',
    'optionPinnedTabsTitle',
    'manifestDescription',
    'displayOneTab',
    'memoryBefore1981',
    'optionDuplicatesTitle',
    'sendAllTabsToOneTab',
    'optionTabGroupRestoreNewWindowAlways',
    'newExclamation',
    'userLanguage',
    'sendCurrentTabToOneTab',
    'optionDuplicatesReject',
    'save95PctReduceTabClutterGoogleChrome',
    'areYouSureYouWantToDeleteThisTab',
    'pasteInUrlsInstructions',
    '1tab',
    'exportThenImportNote',
    'optionRestoreRemovalTitle',
    'excludeWebSiteFromOneTab',
    'optionStartupLaunchNoneDesc',
    'sendAllTabsAllWindowsToOneTab',
    'optionRestoreRemovalKeep',
    'total2Tabs',
    'deleteAll',
    'createdPreceedingDate',
    'sendAllTabsExceptThisTabToPlaceholder',
    'optionPinnedTabsNote',
    'starTabGroup',
    'total1Tab',
    'unlockTabGroup',
    'help',
    'optionTabGroupRestoreTitle',
    'sendRightTabsToPlaceholder',
    'areYouSureYouWantToDeleteTheseTabs',
    'shareAsWebPage',
    'optionStartupLaunchTitle',
    'sendLeftTabsToPlaceholder',
    'reduceMemoryUsageBy95Pct',
    'sendAllTabsExceptThisToOneTab',
  ];
  var zV = {};
  for (var cV in uV) zV[uV[cV]] = x1(uV[cV]);
  setTimeout(function() {
    SV(zV);
  }, 1);
  return true;
});
var h = function(gV) {
  window['chrome']['tabs']['query'](
    { active: true, currentWindow: true },
    function(QP) {
      if (QP && QP.length == 1) gV(QP[0]);
    },
  );
};
var oX = window['chrome']['runtime']['getURL']('onetab.html');
var eK = oX.substr(0, oX.length - 'onetab.html'.length);
function D(NV, wV) {
  window['chrome']['runtime']['onMessage']['addListener'](function(TP, HP, RP) {
    if (TP.type == NV) {
      var ZP = pK.parse(TP.Yn);
      var rP = {};
      wV(ZP, function(xl) {
        if (!xl) xl = {};
        rP.Yn = pK.gW(xl);
        RP(rP);
      });
      return true;
    }
  });
}
function Pj(AV, iV, EV) {
  var vV = {};
  vV.OW = AV;
  vV.Yn = {};
  if (iV) vV.Yn = pK.gW(iV);
  VK(function(KP) {
    for (var fP in KP) {
      if (U(KP[fP]['url'])) {
        window['chrome']['tabs']['sendMessage'](KP[fP]['id'], vV, function(Fl) {
          if (EV) EV(Fl);
        });
      }
    }
  });
}
function A1(XV) {
  window['chrome']['windows']['getLastFocused']({ populate: true }, function(
    xP,
  ) {
    window['chrome']['tabs']['query']({ windowId: xP['id'] }, function(ml) {
      var pl;
      for (var Il in ml) {
        if (ml[Il]['active']) pl = ml[Il];
      }
      XV(ml, pl);
    });
  });
}
function VK(bV, qV) {
  window['chrome']['windows']['getLastFocused'](undefined, function(FP) {
    window['chrome']['windows']['getAll']({ populate: true }, function(jl) {
      for (var yl in jl) {
        var Cl = jl[yl];
        if (qV && Cl['id'] == FP['id']) continue;
        bV(Cl['tabs']);
      }
    });
  });
}
function Yj(OV) {
  window['chrome']['tabs']['query']({}, function(pP) {
    OV(pP);
  });
}
function s1(dV, sV) {
  window['chrome']['windows']['getLastFocused'](undefined, function(IP) {
    window['chrome']['tabs']['query']({}, function(Pl) {
      var ul = {};
      for (var Sl in Pl) {
        var Ll = Pl[Sl];
        var al = Ll['windowId'];
        if (sV && al == IP['id']) continue;
        if (!ul[al]) ul[al] = [];
        ul[al].push(Ll);
      }
      var zl = [];
      for (var Sl in ul) {
        var ol = [];
        for (var Ul in ul[Sl]) ol.push(ul[Sl][Ul]);
        zl.push(ol);
      }
      dV(zl);
    });
  });
}
function WX(kV, hV) {
  window['chrome']['tabs']['reload'](kV['id'], {}, function() {
    hV();
  });
}
function W(GV, MV) {
  window['chrome']['tabs']['remove'](GV['id'], function() {
    if (MV) MV();
  });
}
function F(nO, WV) {
  var JV = [];
  for (var BO in nO) JV.push(nO[BO]);
  while (JV.length > 0) {
    var _V = JV.pop();
    W(_V, function() {
      F(JV, function() {
        WV();
      });
    });
  }
}
function MX(lO, eO) {
  window['chrome']['tabs']['update'](lO['id'], { active: true }, function() {
    window['chrome']['windows']['update'](
      lO['windowId'],
      { focused: true },
      function() {
        if (eO) eO();
      },
    );
  });
}
function KK(VO, DO) {
  window['chrome']['tabs']['create']({ url: VO }, function() {
    if (DO) DO();
  });
}
function d(rO, $O, QO, YO) {
  window['chrome']['windows']['getLastFocused']({ populate: true }, function(
    mP,
  ) {
    window['chrome']['tabs']['create'](
      { windowId: mP['id'], pinned: !!$O, active: !!QO, url: rO },
      function() {
        if (YO) YO();
      },
    );
  });
}
function lK(HO, ZO) {
  window['chrome']['windows']['create'](
    { focused: true, url: HO[0]['url'] },
    function(CP) {
      window['chrome']['tabs']['query']({ windowId: CP['id'] }, function(cl) {
        window['chrome']['tabs']['update'](
          cl[0]['id'],
          { pinned: !!HO[0]['pinned'] },
          function() {
            if (HO.length == 1) {
              if (ZO) ZO();
            } else {
              for (var fO = 1; fO < HO.length; fO++) {
                var RO = HO[fO];
                var TO = (function(By) {
                  d(RO['url'], !!RO['pinned'], false, function() {
                    if (By == HO.length - 1) if (ZO) ZO();
                  });
                })(fO);
              }
            }
          },
        );
      });
    },
  );
}
function cX(xO, KO, FO) {
  if (xO) KO['parentId'] = xO.IW;
  var pO = {};
  pO.IW = window['chrome']['contextMenus']['create'](KO);
  if (FO) setTimeout(FO, 1);
  return pO;
}
function gj(CO, IO, jO) {
  if (CO) IO['parentId'] = CO.IW;
  var mO = IO.title;
  var yO = {};
  yO.IW = window['chrome']['contextMenus']['create'](IO);
  yO.en = function(jP) {
    window['chrome']['contextMenus']['update'](
      yO.IW,
      { enabled: jP },
      function() {},
    );
  };
  yO.dW = function(yP) {
    window['chrome']['contextMenus']['update'](
      yO.IW,
      { type: 'checkbox', checked: yP },
      function() {},
    );
  };
  yO.UW = function(aP) {
    window['chrome']['contextMenus']['update'](
      yO.IW,
      { title: aP },
      function() {},
    );
  };
  if (jO) setTimeout(jO, 1);
  return yO;
}
function OK(LO, aO) {
  if (LO) {
    window['chrome']['contextMenus']['removeAll'](function() {
      aO();
    });
  } else aO();
}
function mX(oO) {
  var UO = { type: 'separator', contexts: ['all'] };
  if (oO) UO['parentId'] = oO.IW;
  window['chrome']['contextMenus']['create'](UO);
}
function Q1(zO) {
  window['chrome']['runtime']['onMessage']['addListener'](function(UP, LP, oP) {
    if (UP.type == 'linkRightClick') {
      zO(UP.title, UP.url);
    }
  });
}
function S() {}
S.prototype.NW = function(PO, SO, uO) {
  window['localStorage'][PO] = SO;
  uO();
};
S.prototype.fW = function(gO, cO) {
  cO(window['localStorage'][gO]);
};
var Bj = new S();
function K() {
  return Bj;
}
function N(wO) {
  window['chrome']['browserAction']['onClicked']['addListener'](function(zP) {
    wO();
  });
}
function PK() {
  window['chrome']['commands']['onCommand']['addListener'](function(uP) {
    if (uP == 'display-onetab') {
      lX();
    }
    if (uP == 'send-current-tab-to-onetab') {
      YX();
    }
    if (uP == 'send-all-tabs-in-current-window-to-onetab') {
      Dj();
    }
    if (uP == 'send-all-tabs-in-all-windows-to-onetab') {
      KX(undefined, undefined);
    }
    if (uP == 'send-all-tabs-except-this-to-onetab') {
      z(undefined, undefined);
    }
  });
}
function M1(EO) {
  window['chrome']['tabs']['onCreated']['addListener'](function(SP) {
    window['chrome']['tabs']['get'](SP['id'], function(gl) {
      EO();
    });
  });
  window['chrome']['tabs']['onUpdated']['addListener'](function(cP, PP, gP) {
    EO();
  });
  window['chrome']['tabs']['onMoved']['addListener'](function(wP, NP) {
    EO();
  });
  window['chrome']['tabs']['onRemoved']['addListener'](function(iP, vP) {
    EO();
  });
  window['chrome']['tabs']['onReplaced']['addListener'](function(AP, EP) {
    EO();
  });
  window['chrome']['tabs']['onDetached']['addListener'](function(XP, bP) {
    EO();
  });
  window['chrome']['tabs']['onAttached']['addListener'](function(qP, OP) {
    EO();
  });
  var iO = {};
  var vO = undefined;
  var NO = undefined;
  window['chrome']['tabs']['onActivated']['addListener'](function(sP) {
    window['chrome']['tabs']['get'](sP['tabId'], function(Nl) {
      if (!Nl) return;
      var wl = vO ? vO : undefined;
      iO[Nl['windowId']] = Nl;
      if (typeof NO === 'undefined') NO = Nl['windowId'];
      if (NO == Nl['windowId']) vO = Nl;
      if (wl != vO['id']) EO();
    });
  });
  window['chrome']['windows']['onFocusChanged']['addListener'](function(hP) {
    var dP = vO ? vO['id'] : undefined;
    NO = hP;
    if (iO.hasOwnProperty(NO)) {
      vO = iO[NO];
    }
    if (vO && dP != vO['id']) EO();
  });
}
function dK(AO) {
  window['chrome']['tabs']['query']({}, function(kP) {
    AO();
  });
}
function V1(XO) {
  return window['chrome']['runtime']['getURL'](XO);
}
function Q() {
  window['chrome']['webRequest']['onCompleted']['addListener'](
    function(GP) {
      if (
        GP['statusCode'] == 200 &&
        GP['method'] == 'GET' &&
        GP['fromCache'] == false &&
        GP['method'] == 'GET'
      ) {
        try {
          IK(oK(GP['url']), undefined);
        } catch (MP) {
          if (D1) console.log(MP);
        }
      }
    },
    { urls: ['http://*/*', 'https://*/*'], types: ['main_frame'] },
    ['responseHeaders'],
  );
}
function x1(bO) {
  return window['chrome']['i18n']['getMessage'](bO);
}
function k1(OO, qO) {
  if (OO['f'] < qO['f']) return 1;
  if (OO['f'] > qO['f']) return -1;
  return 0;
}
var h1 = 12;
var iX = 30;
var L = 150;
function IK(hO, dO, sO) {
  if (hO.indexOf('www.google.') != -1) {
    if (dO) dO(sO);
    return;
  }
  K().fW(
    'topSites',
    function(YG, nG) {
      var BG;
      if (!YG) BG = {};
      else BG = pK.parse(YG);
      var $G = 0;
      var lG = c1(new Date(new Date().getTime() + $G));
      var JP = [];
      var _P = [];
      for (var eG in BG) if (eG != lG) JP.push(eG);
      JP.sort();
      while (JP.length > h1) _P.push(JP.splice(0, 1)[0]);
      for (var QG in _P) delete BG[_P[QG]];
      for (var eG in BG) {
        if (eG != lG) {
          var WP = BG[eG];
          if (WP.length > iX) {
            WP.sort(k1);
            if (WP.length > iX) WP = WP.slice(0, iX);
            BG[eG] = WP;
          }
        }
      }
      if (!BG[lG]) BG[lG] = [];
      var VG = undefined;
      var WP = BG[lG];
      for (var QG in WP) if (WP[QG]['u'] == hO) VG = WP[QG];
      if (!VG) {
        VG = { u: hO, f: 0 };
        WP.push(VG);
      }
      VG['f']++;
      if (WP.length > L) {
        bj: for (var QG = 1; QG < 1000; QG++) {
          for (var DG in WP) {
            if (WP[DG]['f'] == QG) {
              WP.splice(DG, 1);
              break bj;
            }
          }
        }
      }
      K().NW(
        'topSites',
        pK.gW(BG),
        function(vl) {
          if (dO) dO(vl);
        },
        nG,
      );
    },
    sO,
  );
}
var U1 = {};
var tj = function() {
  U1.cW = undefined;
  U1.$n = undefined;
  U1.Zn = undefined;
  U1.xW = [];
  U1.aW = [];
  U1.nW = [];
  U1.KW = [];
  U1.hj = [];
  U1.jW = [];
  U1.QW = [];
  U1.Vn = undefined;
};
var FX = function(MO, WO) {
  for (var _O in MO) {
    var kO = MO[_O];
    for (var GO in kO) {
      kO[GO].en(WO);
    }
  }
};
function S1() {
  setTimeout(function() {
    vX($X);
  }, 100);
}
var vK = '';
function vX(JO) {
  AX(function(HG, rG) {
    s1(function(il) {
      A1(function(Rv, $v) {
        var lv = false;
        if (!$v || !$v['url']) {
          if (D1) console.log('no active tab (A)');
          return;
        }
        var Hv = $v['url'];
        lv = U(Hv);
        U1.$n.en(!lv);
        vK = $v['url'];
        U1.Vn.en(!lv);
        if ($v['url'] && $v['url'].toLowerCase().indexOf('http') == 0) {
          U1.Vn.UW(
            x1('excludeDomainFromOneTab').replace('DOMAIN.COM', oK($v['url'])),
          );
        } else {
          U1.Vn.UW(x1('excludeWebSiteFromOneTab'));
        }
        U1.Vn.dW(p1(Hv, HG));
        FX([U1.xW, U1.aW, U1.nW, U1.KW, U1.hj, U1.jW], true);
        var Dv = false;
        var Tv = false;
        var Yv = false;
        var nv = false;
        var Bv = false;
        for (var Zv in Rv) {
          if ($v) {
            if (parseInt(Rv[Zv]['index']) < parseInt($v['index'])) {
              if (Rv[Zv]['url']) {
                if (!U(Rv[Zv]['url'])) Dv = true;
              }
            }
            if (parseInt(Rv[Zv]['index']) > parseInt($v['index'])) {
              if (Rv[Zv]['url']) {
                if (!U(Rv[Zv]['url'])) Tv = true;
              }
            }
            if (!U(Rv[Zv]['url'])) {
              nv = true;
              if (Rv[Zv]['id'] != $v['id']) Yv = true;
            }
          }
        }
        for (var Zv in il) {
          var rv = il[Zv];
          for (var Qv in rv) {
            var Vv = rv[Qv];
            if (!U(Vv['url'])) Bv = true;
          }
        }
        if (!nv) FX([U1.xW], false);
        if (lv || !nv) FX([U1.aW], false);
        if (!Dv) FX([U1.nW], false);
        if (!Tv) FX([U1.KW], false);
        if (!Bv) FX([U1.hj], false);
        if (!Yv) FX([U1.jW], false);
      });
    }, true);
  }, JO);
}
function q(Kv, fv) {
  OK(U1.cW, function() {
    tj();
    aK(fv);
    S1();
    if (Kv) Kv();
  });
}
C1('recreateContextMenus', function(Fv, xv) {
  q(xv, $X);
});
function aK(Iv) {
  U1.cW = cX(undefined, { type: 'normal', contexts: ['all'], title: 'OneTab' });
  U1.$n = gj(U1.cW, {
    type: 'normal',
    title: x1('displayOneTab'),
    contexts: ['all'],
    onclick: function(TG, ZG) {
      EX();
    },
  });
  var pv = gj(U1.cW, {
    type: 'normal',
    title: x1('sendAllTabsToOneTab'),
    contexts: ['all'],
    onclick: function(fG, RG) {
      Dj(undefined, $X);
    },
  });
  U1.xW.push(pv);
  var Uv = gj(U1.cW, {
    type: 'normal',
    title: x1('sendThisWebLinkToOneTab'),
    contexts: ['link'],
    onclick: function(xG, KG) {
      G(xG, undefined, $X);
    },
  });
  U1.QW.push(Uv);
  mX(U1.cW);
  var yv = gj(U1.cW, {
    type: 'normal',
    title: x1('sendOnlyThisTabToOneTab'),
    contexts: ['all'],
    onclick: function(pG, FG) {
      YX(undefined, undefined, $X);
    },
  });
  U1.aW.push(yv);
  var av = gj(U1.cW, {
    type: 'normal',
    title: x1('sendAllTabsExceptThisToOneTab'),
    contexts: ['all'],
    onclick: function(mG, IG) {
      z(undefined, undefined, $X);
    },
  });
  U1.jW.push(av);
  var Cv = gj(U1.cW, {
    type: 'normal',
    title: x1('sendLeftTabsToOneTab'),
    contexts: ['all'],
    onclick: function(jG, CG) {
      hK(undefined, $X);
    },
  });
  U1.nW.push(Cv);
  var jv = gj(U1.cW, {
    type: 'normal',
    title: x1('sendRightTabsToOneTab'),
    contexts: ['all'],
    onclick: function(aG, yG) {
      wX(undefined, $X);
    },
  });
  U1.KW.push(jv);
  var Lv = gj(U1.cW, {
    type: 'normal',
    title: x1('sendAllTabsAllWindowsToOneTab'),
    contexts: ['all'],
    onclick: function(UG, LG) {
      KX(undefined, undefined, $X);
    },
  });
  U1.hj.push(Lv);
  mX(U1.cW);
  U1.Vn = gj(U1.cW, {
    type: 'checkbox',
    checked: false,
    contexts: ['all'],
    title: x1('excludeWebSiteFromOneTab'),
    onclick: function(zG, oG) {
      AX(function(Xl, Al) {
        var bl = oK(vK);
        var El = ZK(bl, Xl);
        if (El) {
          cj(
            bl,
            function() {
              S1();
            },
            Al,
          );
        } else {
          E1(
            bl,
            function() {
              S1();
            },
            Al,
          );
        }
      }, $X);
    },
  });
  var mv = false;
  UX(function(cG, SG) {
    var uG = cG['tabGroups'];
    if (!uG) uG = [];
    for (var wG = 0; wG < uG.length; wG++) {
      var gG = uG[wG];
      if (gG['label'] && R1(gG['label']) != '') {
        mv = true;
        break;
      }
    }
    if (mv) {
      mX(U1.cW);
      U1.Zn = cX(
        U1.cW,
        { type: 'normal', contexts: ['all'], title: x1('namedTabGroups') },
        function() {
          for (var sl = 0; sl < uG.length; sl++) {
            var Ol = uG[sl];
            if (Ol['label'] && R1(Ol['label']) != '') {
              var ql = (function(zv) {
                var ov = cX(
                  U1.Zn,
                  { type: 'normal', contexts: ['all'], title: zv['label'] },
                  function() {
                    U1.xW.push(
                      gj(ov, {
                        type: 'normal',
                        title: x1('sendAllTabsToPlaceholder').replace(
                          'PLACEHOLDER',
                          zv['label'],
                        ),
                        contexts: ['all'],
                        onclick: function(nk, Bk) {
                          Dj(zv['id'], $X);
                        },
                      }),
                    );
                    U1.QW.push(
                      gj(ov, {
                        type: 'normal',
                        title: x1('sendThisWebLinkToPlaceholder').replace(
                          'PLACEHOLDER',
                          zv['label'],
                        ),
                        contexts: ['link'],
                        onclick: function(lk, ek) {
                          G(lk, zv['id'], $X);
                        },
                      }),
                    );
                    U1.aW.push(
                      gj(ov, {
                        type: 'normal',
                        title: x1('sendOnlyThisTabToPlaceholder').replace(
                          'PLACEHOLDER',
                          zv['label'],
                        ),
                        contexts: ['all'],
                        onclick: function(Vk, Dk) {
                          YX(zv['id'], undefined, $X);
                        },
                      }),
                    );
                    U1.jW.push(
                      gj(ov, {
                        type: 'normal',
                        title: x1(
                          'sendAllTabsExceptThisTabToPlaceholder',
                        ).replace('PLACEHOLDER', zv['label']),
                        contexts: ['all'],
                        onclick: function(Yk, $k) {
                          z(zv['id'], undefined, $X);
                        },
                      }),
                    );
                    U1.nW.push(
                      gj(ov, {
                        type: 'normal',
                        title: x1('sendLeftTabsToPlaceholder').replace(
                          'PLACEHOLDER',
                          zv['label'],
                        ),
                        contexts: ['all'],
                        onclick: function(rk, Qk) {
                          hK(zv['id'], $X);
                        },
                      }),
                    );
                    U1.KW.push(
                      gj(ov, {
                        type: 'normal',
                        title: x1('sendRightTabsToPlaceholder').replace(
                          'PLACEHOLDER',
                          zv['label'],
                        ),
                        contexts: ['all'],
                        onclick: function(Zk, Hk) {
                          wX(zv['id'], $X);
                        },
                      }),
                    );
                    U1.hj.push(
                      gj(ov, {
                        type: 'normal',
                        title: x1('sendAllTabsAllWindowsToPlaceholder').replace(
                          'PLACEHOLDER',
                          zv['label'],
                        ),
                        contexts: ['all'],
                        onclick: function(Rk, Tk) {
                          KX(zv['id'], undefined, $X);
                        },
                      }),
                    );
                  },
                );
              })(Ol);
            }
          }
        },
      );
    }
    mX(U1.cW);
    var NG = gj(U1.cW, {
      type: 'normal',
      title: x1('help'),
      contexts: ['all'],
      onclick: function(hl, dl) {
        KK(L1 + '/help');
      },
    });
    if (D1) {
      var PG = gj(U1.cW, {
        type: 'normal',
        title: 'debug',
        contexts: ['all'],
        onclick: function(Ml, kl) {
          UX(function(Sv, uv) {
            console.log(pK.gW(Sv));
            V(function(ey, ny) {
              console.log(pK.gW(ey));
              K().fW(
                'topSites',
                function(Kk, fk) {
                  console.log(Kk);
                  AX(function(nY, BY) {
                    console.log(nY);
                    K().fW(
                      'installDate',
                      function(B$, n$) {
                        console.log('installDate', B$);
                        K().fW(
                          'lastSeenVersion',
                          function(BH, Jw) {
                            console.log('lastSeenVersion', BH);
                          },
                          n$,
                        );
                      },
                      BY,
                    );
                  }, fk);
                },
                ny,
              );
            }, uv);
          }, $X);
        },
      });
    }
  }, Iv);
}
var pK = {
  gW: function(cv) {
    var wv,
      vv,
      Nv,
      gv = '',
      Pv;
    switch (typeof cv) {
      case 'object':
        if (cv) {
          if (cv instanceof Array) {
            for (vv = 0; vv < cv.length; ++vv) {
              Pv = this.gW(cv[vv]);
              if (gv) {
                gv += ',';
              }
              gv += Pv;
            }
            return '[' + gv + ']';
          } else if (typeof cv.toString != 'undefined') {
            for (vv in cv) {
              Pv = cv[vv];
              if (typeof Pv != 'undefined' && typeof Pv != 'function') {
                Pv = this.gW(Pv);
                if (gv) {
                  gv += ',';
                }
                gv += this.gW(vv) + ':' + Pv;
              }
            }
            return '{' + gv + '}';
          }
        }
        return 'null';
      case 'number':
        return isFinite(cv) ? String(cv) : 'null';
      case 'string':
        Nv = cv.length;
        gv = '"';
        for (vv = 0; vv < Nv; vv += 1) {
          wv = cv.charAt(vv);
          if (wv >= ' ') {
            if (wv == '\\' || wv == '"') {
              gv += '\\';
            }
            gv += wv;
          } else {
            switch (wv) {
              case '\b':
                gv += '\\b';
                break;
              case '\f':
                gv += '\\f';
                break;
              case '\n':
                gv += '\\n';
                break;
              case '\r':
                gv += '\\r';
                break;
              case '\t':
                gv += '\\t';
                break;
              default:
                wv = wv.charCodeAt();
                gv +=
                  '\\u00' +
                  Math.floor(wv / 16).toString(16) +
                  (wv % 16).toString(16);
            }
          }
        }
        return gv + '"';
      case 'boolean':
        return String(cv);
      default:
        return 'null';
    }
  },
  parse: function(Av) {
    var dv = 0;
    var Mv = ' ';
    function bv(vG) {
      throw { name: 'JSONError', message: vG, Qn: dv - 1, text: Av };
    }
    function Ov() {
      Mv = Av.charAt(dv);
      dv += 1;
      return Mv;
    }
    function sv() {
      while (Mv !== '' && Mv <= ' ') {
        Ov();
      }
    }
    function Xv() {
      var XG,
        AG = '',
        EG,
        iG;
      if (Mv == '"') {
        bj: while (Ov()) {
          if (Mv == '"') {
            Ov();
            return AG;
          } else if (Mv == '\\') {
            switch (Ov()) {
              case 'b':
                AG += '\b';
                break;
              case 'f':
                AG += '\f';
                break;
              case 'n':
                AG += '\n';
                break;
              case 'r':
                AG += '\r';
                break;
              case 't':
                AG += '\t';
                break;
              case 'u':
                iG = 0;
                for (XG = 0; XG < 4; XG += 1) {
                  EG = parseInt(Ov(), 16);
                  if (!isFinite(EG)) {
                    break bj;
                  }
                  iG = iG * 16 + EG;
                }
                AG += String.fromCharCode(iG);
                break;
              default:
                AG += Mv;
            }
          } else {
            AG += Mv;
          }
        }
      }
      bv('Bad string');
    }
    function qv() {
      var bG = [];
      if (Mv == '[') {
        Ov();
        sv();
        if (Mv == ']') {
          Ov();
          return bG;
        }
        while (Mv) {
          bG.push(iv());
          sv();
          if (Mv == ']') {
            Ov();
            return bG;
          } else if (Mv != ',') {
            break;
          }
          Ov();
          sv();
        }
      }
      bv('Bad array');
    }
    function kv() {
      var OG,
        qG = {};
      if (Mv == '{') {
        Ov();
        sv();
        if (Mv == '}') {
          Ov();
          return qG;
        }
        while (Mv) {
          OG = Xv();
          sv();
          if (Mv != ':') {
            break;
          }
          Ov();
          qG[OG] = iv();
          sv();
          if (Mv == '}') {
            Ov();
            return qG;
          } else if (Mv != ',') {
            break;
          }
          Ov();
          sv();
        }
      }
      bv('Bad object');
    }
    function Ev() {
      var dG = '',
        sG;
      if (Mv == '-') {
        dG = '-';
        Ov();
      }
      while (Mv >= '0' && Mv <= '9') {
        dG += Mv;
        Ov();
      }
      if (Mv == '.') {
        dG += '.';
        while (Ov() && Mv >= '0' && Mv <= '9') {
          dG += Mv;
        }
      }
      if (Mv == 'e' || Mv == 'E') {
        dG += 'e';
        Ov();
        if (Mv == '-' || Mv == '+') {
          dG += Mv;
          Ov();
        }
        while (Mv >= '0' && Mv <= '9') {
          dG += Mv;
          Ov();
        }
      }
      sG = +dG;
      if (!isFinite(sG)) {
        bv('Bad number');
      } else {
        return sG;
      }
    }
    function hv() {
      switch (Mv) {
        case 't':
          if (Ov() == 'r' && Ov() == 'u' && Ov() == 'e') {
            Ov();
            return true;
          }
          break;
        case 'f':
          if (Ov() == 'a' && Ov() == 'l' && Ov() == 's' && Ov() == 'e') {
            Ov();
            return false;
          }
          break;
        case 'n':
          if (Ov() == 'u' && Ov() == 'l' && Ov() == 'l') {
            Ov();
            return null;
          }
          break;
      }
      bv('Syntax error');
    }
    function iv() {
      sv();
      switch (Mv) {
        case '{':
          return kv();
        case '[':
          return qv();
        case '"':
          return Xv();
        case '-':
          return Ev();
        default:
          return Mv >= '0' && Mv <= '9' ? Ev() : hv();
      }
    }
    return iv();
  },
};
function oK(Gv) {
  if (Gv.indexOf('://') == -1) Gv = 'http://' + Gv;
  Gv = Gv.substring(Gv.indexOf('://') + '://'.length);
  if (Gv.indexOf('/') != -1) Gv = Gv.substring(0, Gv.indexOf('/'));
  return Gv.toLowerCase();
}
function l1(Jv, Wv) {
  for (var _v in Jv) if (Jv[_v] == Wv) return true;
  return false;
}
function I(BT) {
  if (typeof BT == 'string') BT = document.getElementById(BT);
  if (!BT) return;
  while (BT.childNodes.length > 0) BT.removeChild(BT.childNodes[0]);
}
function P1(nT) {
  var eT = document.createElement('div');
  eT.style.fontSize = '1px';
  eT.style.height = nT + 'px';
  eT.style.width = 1 + 'px';
  return eT;
}
function Ej(lT, VT) {
  for (var DT = 0; DT < VT.length; DT++) {
    if (VT[DT] == lT) {
      VT.splice(DT, 1);
      DT--;
    }
  }
}
function H(rT) {
  var YT = rT ? rT : window.event;
  var ZT = 0;
  var $T = 0;
  var QT = 0;
  var HT = 0;
  if (YT != null) {
    if (nK) {
      QT = YT.shiftKey;
      $T = YT.altKey;
      ZT = YT.ctrlKey;
    } else {
      QT = YT.shiftKey;
      ZT = YT.ctrlKey;
      $T = YT.altKey;
      HT = YT.metaKey;
    }
  }
  return ZT || HT || QT;
}
function Ij(KT) {
  var RT = KT ? KT : window.event;
  var FT = 0;
  var TT = 0;
  var fT = 0;
  var xT = 0;
  if (RT != null) {
    if (nK) {
      fT = RT.shiftKey;
      TT = RT.altKey;
      FT = RT.ctrlKey;
    } else {
      fT = RT.shiftKey;
      FT = RT.ctrlKey;
      TT = RT.altKey;
      xT = RT.metaKey;
    }
  }
  return FT || xT;
}
function xX(CT) {
  var IT = CT ? CT : window.event;
  var yT = 0;
  var pT = 0;
  var mT = 0;
  var jT = 0;
  if (IT != null) {
    if (nK) {
      mT = IT.shiftKey;
      pT = IT.altKey;
      yT = IT.ctrlKey;
    } else {
      mT = IT.shiftKey;
      yT = IT.ctrlKey;
      pT = IT.altKey;
      jT = IT.metaKey;
    }
  }
  return mT;
}
function wK(aT) {
  aT['noCacheRandom'] = _1();
}
function _1() {
  return new Date().getTime() + Math.round(Math.random() * 10000) + '';
}
function aX(zT, UT, oT) {
  wK(UT);
  var LT = pK.gW(UT);
  Fj(zT, LT, function(hG) {
    if (oT) oT(pK.parse(hG));
  });
}
function Fj(cT, ST, PT) {
  var uT = o1();
  uT.open(ST == null ? 'GET' : 'POST', cT, true);
  uT.setRequestHeader('Content-Type', 'text/json');
  uT.onreadystatechange = function() {
    var MG = false;
    MG = uT.readyState == 4;
    if (MG) {
      var kG = uT.responseText;
      PT(kG);
    }
  };
  uT.send(ST);
}
function o1() {
  var gT = new XMLHttpRequest();
  return gT;
}
function zK() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(_G) {
    var WG = (Math.random() * 16) | 0,
      GG = _G == 'x' ? WG : (WG & 0x3) | 0x8;
    return GG.toString(16);
  });
}
var SK = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(
  '',
);
function nX(iT, NT) {
  var vT = SK,
    wT = [],
    ET = 0;
  NT = NT || vT.length;
  iT = iT || 22;
  for (ET = 0; ET < iT; ET++) wT[ET] = vT[0 | (Math.random() * NT)];
  return wT.join('');
}
function Rj() {
  return nX();
}
function R1(AT) {
  if (!AT == null || AT == undefined) return '';
  return AT.replace(/^\s+/, '').replace(/\s+$/, '');
}
function gX(bT) {
  var OT = document.createElement('span');
  var qT = bT.indexOf('OneTab');
  var XT = qT + 'OneTab'.length;
  if (qT == 0) {
    OT.appendChild(cK());
    OT.appendChild(document.createTextNode(bT.substring(XT)));
  } else {
    OT.appendChild(document.createTextNode(bT.substring(0, qT)));
    OT.appendChild(cK());
    if (XT != bT.length)
      OT.appendChild(document.createTextNode(bT.substring(XT)));
  }
  return OT;
}
function cK() {
  var dT = document.createElement('span');
  var sT = document.createElement('span');
  sT.style.fontStyle = 'italic';
  sT.appendChild(document.createTextNode('One'));
  dT.appendChild(sT);
  dT.appendChild(document.createTextNode('Tab'));
  return dT;
}
function M(hT) {
  var kT = hT.split('OneTab');
  var GT = document.createElement('span');
  for (var MT in kT) {
    if (kT[MT] == '') GT.appendChild(cK());
    else GT.appendChild(document.createTextNode(kT[MT]));
  }
  return GT;
}
function B(JT) {
  var _T = new Date(JT.valueOf()),
    WT = (JT.getUTCDay() + 6) % 7,
    BQ;
  _T.setUTCDate(_T.getUTCDate() - WT + 3);
  BQ = _T.valueOf();
  _T.setUTCMonth(0, 1);
  if (_T.getUTCDay() !== 4) {
    _T.setUTCMonth(0, 1 + ((4 - _T.getUTCDay() + 7) % 7));
  }
  return Math.ceil((BQ - _T) / (7 * 24 * 3600 * 1000)) + 1;
}
function gK(nQ, eQ) {
  while (nQ.length < eQ) nQ = '0' + nQ;
  return nQ;
}
function c1(lQ) {
  return (lQ.getUTCFullYear() + '').substr(2) + gK(B(lQ) + '', 2);
}
function xj(DQ) {
  if (DQ == 0) return x1('total0Tabs');
  if (DQ == 1) return x1('total1Tab');
  return x1('total2Tabs').replace('2', DQ + '');
}
function Qj($Q) {
  var VQ = $Q == 1 ? x1('1tab') : x1('2tabs').replace('2', $Q + '');
  return VQ;
}
function G1(QQ, rQ) {
  var YQ = '';
  for (var HQ = 0; HQ < rQ; HQ++) YQ += QQ;
  return YQ;
}
function XX(ZQ) {
  ZQ.sort(function(B6, JG) {
    if (B6['starred'] || JG['starred']) {
      if (!JG['starred']) return -1;
      else if (!B6['starred']) return 1;
      else {
        if (B6['starredDate'] > JG['starredDate']) return 1;
        if (B6['starredDate'] < JG['starredDate']) return -1;
        return 0;
      }
    } else {
      if (B6['createDate'] > JG['createDate']) return -1;
      if (B6['createDate'] < JG['createDate']) return 1;
      return 0;
    }
  });
}
function W1(TQ) {
  if (!TQ) TQ = '';
  return TQ.replace(/[\x00-\x1F\x7F-\x9F]/g, '');
}
function NX(RQ) {
  HK();
  BX(function(n6) {
    var e6 = function(Gl) {
      N(function() {
        Dj(undefined, $X);
      });
      dK(function() {
        K().fW(
          'lastSeenVersion',
          function(Dy, ly) {
            AX(function(Fk, xk) {
              UX(function(DY, lY) {
                var eY = DY['tabGroups'];
                if (!eY) eY = [];
                var VY = 0;
                for (var YY = 0; YY < eY.length; YY++) {
                  var $Y = eY[YY];
                  VY += $Y['tabsMeta'].length;
                }
                if (y1 != Dy) {
                  K().NW('lastSeenVersion', y1, function(e$) {}, lY);
                } else {
                  if (VY > 0 && rj('startupLaunch', Fk) == 'displayOneTab') {
                    lX();
                  }
                }
              }, xk);
            }, ly);
          },
          $X,
        );
      });
      q(undefined, Gl);
      if (k6S) {
        Q1(function(KQ, fQ) {
          window.jX = KQ;
          window.Xj = fQ;
        });
      }
      PK();
      M1(function() {
        S1();
      });
      Q();
    };
    K().fW(
      'installDate',
      function(Wl, _l) {
        if (!Wl) {
          K().NW(
            'installDate',
            new Date().getTime(),
            function(xQ) {
              e6(xQ);
            },
            _l,
          );
        } else {
          e6(_l);
        }
      },
      n6,
    );
  }, RQ);
}
function HK() {
  C1('createNewTab', function(D6, l6) {
    KK(D6.url, l6);
  });
  C1('createNewTabInLastFocusedWindowWithOpts', function(Y6, V6) {
    d(Y6.url, !!Y6.JW, !!Y6.SW, V6);
  });
  C1('createNewTabsInNewFocusedWindow', function(r6, Q6) {
    lK(r6.Gj, Q6);
  });
}
function AX(pQ, FQ) {
  K().fW(
    'settings',
    function(Z6, H6) {
      if (!Z6) pQ({}, H6);
      else pQ(pK.parse(Z6), H6);
    },
    FQ,
  );
}
C1('getSettings', function(mQ, IQ) {
  AX(IQ, $X);
});
function Z1(yQ, jQ, CQ) {
  K().NW('settings', pK.gW(yQ), jQ, CQ);
}
C1('storeSettings', function(LQ, aQ) {
  Z1(LQ.AW, aQ, $X);
});
var wj = {
  restoreWindow: 'newWindow',
  pinnedTabs: 'ignore',
  startupLaunch: 'displayOneTab',
  restoreRemoval: 'default',
  duplicates: 'allow',
};
function _K(oQ, zQ, UQ) {
  AX(function(R6, T6) {
    zQ(rj(oQ, R6, T6));
  }, UQ);
}
C1('getSetting', function(SQ, uQ) {
  _K(
    SQ.vW,
    function(f6) {
      uQ({ value: f6 });
    },
    $X,
  );
});
function rj(PQ, cQ) {
  if (cQ[PQ]) return cQ[PQ];
  else return wj[PQ];
}
function UX(wQ, gQ) {
  K().fW(
    'state',
    function(x6, K6) {
      if (!x6) {
        wQ({}, K6);
      } else {
        wQ(pK.parse(x6), K6);
      }
    },
    gQ,
  );
}
C1('getState', function(vQ, NQ) {
  UX(NQ, $X);
});
function Hj(AQ, EQ, iQ) {
  K().fW(
    'state',
    function(C6, p6) {
      var I6 = C6;
      var F6 = AQ['tabGroups'];
      for (var m6 = 0; m6 < F6.length; m6++) {
        if (F6[m6]['tabsMeta'].length == 0) {
          F6.splice(m6, 1);
          m6--;
        }
      }
      K().NW(
        'state',
        pK.gW(AQ),
        function(Jl) {
          K().fW(
            'state',
            function(qQ, bQ) {
              try {
                pK.parse(qQ);
              } catch (XQ) {
                K.NW(
                  'state',
                  I6,
                  function(Vy) {
                    if (!W6S)
                      alert(
                        'Out of local storage memory - could not store extension state',
                      );
                  },
                  bQ,
                );
              } finally {
                Pj('storedStateChanged', { rW: AQ });
                if (EQ) EQ(bQ);
              }
            },
            Jl,
          );
        },
        p6,
      );
    },
    iQ,
  );
}
C1('storeState', function(sQ, OQ) {
  Hj(sQ.rW, OQ, $X);
});
function g(hQ, MQ, kQ, dQ) {
  UX(function(y6, j6) {
    if (!y6[hQ]) y6[hQ] = [];
    y6[hQ].push(MQ);
    Hj(
      y6,
      function(BN) {
        if (kQ) kQ(BN);
      },
      j6,
    );
  }, dQ);
}
function zX(n8, GQ, WQ, _Q, JQ) {
  var B8 = { id: Rj(), url: n8, title: W1(GQ) };
  T1(B8, _Q, WQ, JQ);
}
function HX(Y8, e8, l8, D8) {
  if (U(Y8['url'])) {
    e8(function() {});
    return;
  }
  var V8 = { id: Rj(), url: Y8['url'], title: W1(Y8['title']) };
  if (Y8['pinned'] || Y8['isPinned']) V8['pinned'] = true;
  T1(
    V8,
    l8,
    function() {
      e8(function() {
        W(Y8, function() {
          S1();
        });
      });
    },
    D8,
  );
}
function T1(H8, Q8, Z8, r8) {
  UX(function(o6, U6) {
    var a6 = o6['tabGroups'];
    XX(a6);
    var L6 = undefined;
    if (typeof Q8 === 'undefined') {
      for (var S6 = 0; S6 < a6.length; S6++) {
        var u6 = a6[S6];
        if (u6['starred'] || u6['locked']) continue;
        L6 = u6;
        L6['tabsMeta'].splice(0, 0, H8);
        break;
      }
    } else {
      for (var S6 = 0; S6 < a6.length; S6++) {
        var u6 = a6[S6];
        if (u6['id'] == Q8) {
          L6 = u6;
          L6['tabsMeta'].splice(0, 0, H8);
          break;
        }
      }
    }
    if (!L6) {
      var z6 = Rj();
      a6.push({ id: z6, tabsMeta: [H8], createDate: new Date().getTime() });
    }
    Hj(o6, Z8, U6);
  }, r8);
}
function FK(R8, x8, T8, f8, K8) {
  AX(function(c6, P6) {
    UX(function(VN, DN) {
      var nN = VN['tabGroups'];
      XX(nN);
      var pN = [];
      for (var xN in R8) {
        if (!x8) pN.push(R8[xN]);
        else {
          if (!p1(R8[xN]['url'], c6)) pN.push(R8[xN]);
        }
      }
      var eN = [];
      var HN = [];
      for (var xN = 0; xN < pN.length; xN++) {
        var $N = pN[xN];
        var RN = $N['url'];
        var FN = false;
        if (RN.indexOf('://tabmemfree.appspot.com') != -1) {
          FN = true;
          break;
        }
      }
      if (FN) {
        if (!W6S)
          alert(
            'The OneTab extension is not compatible with TabMemFree. Please ensure that none of your tabs are parked with TabMemFree, then uninstall the TabMemFree extension and restart your web browser before using OneTab.',
          );
        T8(function() {});
        return;
      }
      bj: for (var xN = 0; xN < pN.length; xN++) {
        var $N = pN[xN];
        var RN = $N['url'];
        if (
          ($N['pinned'] || $N['isPinned']) &&
          rj('pinnedTabs', c6) == 'ignore'
        ) {
          continue;
        }
        if (U(RN)) {
          continue;
        }
        if (sK(RN) && !U(RN)) {
          HN.push($N);
          continue;
        }
        if (
          RN.indexOf('chrome://chrome-signin') == 0 ||
          RN == 'chrome://newtab/' ||
          RN == 'about:blank' ||
          RN == '' ||
          RN == 'about:home' ||
          RN == 'about:newtab'
        ) {
          HN.push($N);
          continue;
        }
        if (RN.indexOf('chrome-devtools://') == 0) {
          continue;
        }
        if (rj('duplicates', c6) == 'reject') {
          for (var rN in nN) {
            for (var ZN in nN[rN]['tabsMeta']) {
              if (nN[rN]['tabsMeta'][ZN]['url'] == RN) {
                HN.push($N);
                continue bj;
              }
            }
          }
          for (var rN in eN) {
            if (eN[rN]['url'] == RN) {
              HN.push($N);
              continue bj;
            }
          }
        }
        HN.push($N);
        var KN = { id: Rj(), url: RN, title: W1($N['title']) };
        if ($N['pinned'] || $N['isPinned']) KN['pinned'] = true;
        eN.push(KN);
      }
      var fN = false;
      if (typeof f8 === 'undefined') {
        f8 = Rj();
        fN = true;
      }
      var TN = function() {
        T8(function() {
          setTimeout(function() {
            F(HN, function() {
              S1();
            });
          }, 1);
        });
      };
      if (fN) {
        g(
          'tabGroups',
          { id: f8, tabsMeta: eN, createDate: new Date().getTime() },
          function() {
            TN();
          },
          DN,
        );
      } else {
        for (var rN = 0; rN < nN.length; rN++) {
          var QN = nN[rN];
          if (QN['id'] == f8) {
            var lN = QN;
            var YN = [];
            YN.push(0);
            YN.push(0);
            for (var ZN in eN) YN.push(eN[ZN]);
            Array.prototype.splice.apply(lN['tabsMeta'], YN);
            break;
          }
        }
        Hj(
          VN,
          function(Be) {
            TN();
          },
          DN,
        );
      }
    }, P6);
  }, K8);
}
function p1(p8, F8) {
  return ZK(oK(p8), F8);
}
function ZK(m8, I8) {
  if (I8['excludedDomains']) {
    for (var C8 in I8['excludedDomains'])
      if (I8['excludedDomains'][C8] == m8) return true;
  }
  return false;
}
function E1(a8, y8, j8) {
  AX(function(w6, g6) {
    if (!ZK(a8, w6)) {
      if (!w6['excludedDomains']) w6['excludedDomains'] = [];
      w6['excludedDomains'].push(a8);
      Z1(w6, y8, g6);
    } else {
      y8(g6);
    }
  }, j8);
}
function cj(o8, U8, L8) {
  AX(function(v6, N6) {
    if (!v6['excludedDomains']) return;
    for (var i6 = 0; i6 < v6['excludedDomains'].length; i6++) {
      if (v6['excludedDomains'][i6] == o8) {
        v6['excludedDomains'].splice(i6, 1);
        Z1(
          v6,
          function(IN) {
            if (U8) U8();
          },
          N6,
        );
        return;
      } else {
        if (U8) U8();
      }
    }
  }, L8);
}
NX();
