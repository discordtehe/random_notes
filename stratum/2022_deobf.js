const d = (function () {
    let i = true
    return function (j, k) {
      const l = i
        ? function () {
            if (k) {
              const m = k.apply(j, arguments)
              return (k = null), m
            }
          }
        : function () {}
      return (i = false), l
    }
  })(),
  c = d(this, function () {
    return c
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(c)
      .search('(((.+)+)+)+$')
  })
c()
const b = (function () {
    let i = true
    return function (j, k) {
      const l = i
        ? function () {
            if (k) {
              const m = k.apply(j, arguments)
              return (k = null), m
            }
          }
        : function () {}
      return (i = false), l
    }
  })(),
  a = b(this, function () {
    const j = function () {
        let n
        try {
          n = Function(
            'return (function() {}.constructor("return this")( ));'
          )()
        } catch (o) {
          n = window
        }
        return n
      },
      k = j(),
      l = (k.console = k.console || {})
    const m = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace']
    for (let n = 0; n < m.length; n++) {
      const o = b.constructor.prototype.bind(b),
        p = m[n],
        q = l[p] || o
      o['__proto__'] = b.bind(b)
      o.toString = q.toString.bind(q)
      l[p] = o
    }
  })
a()
window.loadedScript = true
;(() => {
  function l(fK) {
    for (
      var fL, fM = '0123456789ABCDEF', fN = '', fO = 0;
      j.ynOMq(fO, fK.length);
      fO += 1
    ) {
      fL = fK.charCodeAt(fO)
      fN += fM.charAt(j.ZanYo(fL, 4) & 15) + fM.charAt(j.lGIWO(15, fL))
    }
    return fN
  }
  function m(fK) {
    for (
      var fL = Array(j.gKxfx(fK.length, 2)), fM = 0;
      j.ynOMq(fM, fL.length);
      fM += 1
    ) {
      fL[fM] = 0
    }
    for (fM = 0; j.JraWZ(fM, j.eNZxX(8, fK.length)); fM += 8) {
      fL[j.gKxfx(fM, 5)] |= j.qTgky(
        j.WJMYF(255, fK.charCodeAt(fM / 8)),
        fM % 32
      )
    }
    return fL
  }
  function n(fK) {
    for (var fL = '', fM = 0; j.JraWZ(fM, j.oQWIi(32, fK.length)); fM += 8) {
      fL += String.fromCharCode(
        j.bIjuX(j.XOHew(fK[fM >> 5], j.ElXzZ(fM, 32)), 255)
      )
    }
    return fL
  }
  function o(fK, fL) {
    fK[j.xDfDA(fL, 5)] |= j.iHsuA(128, j.mWbvf(fL, 32))
    fK[14 + j.qTgky(j.NTjhP(j.GsizW(fL, 64), 9), 4)] = fL
    for (
      var fM = 1732584193,
        fN = -271733879,
        fO = -1732584194,
        fP = 271733878,
        fQ = 0;
      j.EDztL(fQ, fK.length);
      fQ += 16
    ) {
      var fR = fM,
        fS = fN,
        fT = fO,
        fU = fP
      fN = j.bEUFA(
        t,
        (fN = t(
          (fN = t(
            (fN = j.xUlkd(
              t,
              (fN = s(
                (fN = j.bEUFA(
                  s,
                  (fN = j.eivFy(
                    s,
                    (fN = j.eivFy(
                      s,
                      (fN = j.HbzjG(
                        r,
                        (fN = j.HbzjG(
                          r,
                          (fN = r(
                            (fN = j.Kfdcn(
                              r,
                              (fN = j.VbLNn(
                                q,
                                (fN = q(
                                  (fN = q(
                                    (fN = j.TJnoQ(
                                      q,
                                      fN,
                                      (fO = j.VbLNn(
                                        q,
                                        fO,
                                        (fP = j.xUlkd(
                                          q,
                                          fP,
                                          (fM = j.HbzjG(
                                            q,
                                            fM,
                                            fN,
                                            fO,
                                            fP,
                                            fK[j.lXGWv(fQ, 0)],
                                            7,
                                            -680876936
                                          )),
                                          fN,
                                          fO,
                                          fK[j.lXGWv(fQ, 1)],
                                          12,
                                          -389564586
                                        )),
                                        fM,
                                        fN,
                                        fK[j.lXGWv(fQ, 2)],
                                        17,
                                        606105819
                                      )),
                                      fP,
                                      fM,
                                      fK[j.GsizW(fQ, 3)],
                                      22,
                                      -1044525330
                                    )),
                                    (fO = q(
                                      fO,
                                      (fP = j.pDSwh(
                                        q,
                                        fP,
                                        (fM = j.pCuqY(
                                          q,
                                          fM,
                                          fN,
                                          fO,
                                          fP,
                                          fK[j.tTpqx(fQ, 4)],
                                          7,
                                          -176418897
                                        )),
                                        fN,
                                        fO,
                                        fK[j.tTpqx(fQ, 5)],
                                        12,
                                        1200080426
                                      )),
                                      fM,
                                      fN,
                                      fK[j.zSBEV(fQ, 6)],
                                      17,
                                      -1473231341
                                    )),
                                    fP,
                                    fM,
                                    fK[fQ + 7],
                                    22,
                                    -45705983
                                  )),
                                  (fO = q(
                                    fO,
                                    (fP = j.DeZvj(
                                      q,
                                      fP,
                                      (fM = j.DeZvj(
                                        q,
                                        fM,
                                        fN,
                                        fO,
                                        fP,
                                        fK[j.zSBEV(fQ, 8)],
                                        7,
                                        1770035416
                                      )),
                                      fN,
                                      fO,
                                      fK[j.gnOvk(fQ, 9)],
                                      12,
                                      -1958414417
                                    )),
                                    fM,
                                    fN,
                                    fK[j.zSBEV(fQ, 10)],
                                    17,
                                    -42063
                                  )),
                                  fP,
                                  fM,
                                  fK[j.tTpqx(fQ, 11)],
                                  22,
                                  -1990404162
                                )),
                                (fO = j.JLCId(
                                  q,
                                  fO,
                                  (fP = j.Kfdcn(
                                    q,
                                    fP,
                                    (fM = j.CtaHb(
                                      q,
                                      fM,
                                      fN,
                                      fO,
                                      fP,
                                      fK[fQ + 12],
                                      7,
                                      1804603682
                                    )),
                                    fN,
                                    fO,
                                    fK[j.bpBsw(fQ, 13)],
                                    12,
                                    -40341101
                                  )),
                                  fM,
                                  fN,
                                  fK[fQ + 14],
                                  17,
                                  -1502002290
                                )),
                                fP,
                                fM,
                                fK[j.XtNan(fQ, 15)],
                                22,
                                1236535329
                              )),
                              (fO = j.KwIOV(
                                r,
                                fO,
                                (fP = j.CtaHb(
                                  r,
                                  fP,
                                  (fM = j.eivFy(
                                    r,
                                    fM,
                                    fN,
                                    fO,
                                    fP,
                                    fK[j.tTpqx(fQ, 1)],
                                    5,
                                    -165796510
                                  )),
                                  fN,
                                  fO,
                                  fK[j.lXGWv(fQ, 6)],
                                  9,
                                  -1069501632
                                )),
                                fM,
                                fN,
                                fK[fQ + 11],
                                14,
                                643717713
                              )),
                              fP,
                              fM,
                              fK[j.hcFSW(fQ, 0)],
                              20,
                              -373897302
                            )),
                            (fO = j.JLCId(
                              r,
                              fO,
                              (fP = r(
                                fP,
                                (fM = j.KwIOV(
                                  r,
                                  fM,
                                  fN,
                                  fO,
                                  fP,
                                  fK[j.hKZTg(fQ, 5)],
                                  5,
                                  -701558691
                                )),
                                fN,
                                fO,
                                fK[fQ + 10],
                                9,
                                38016083
                              )),
                              fM,
                              fN,
                              fK[j.fhxSj(fQ, 15)],
                              14,
                              -660478335
                            )),
                            fP,
                            fM,
                            fK[j.lXGWv(fQ, 4)],
                            20,
                            -405537848
                          )),
                          (fO = j.oOVgb(
                            r,
                            fO,
                            (fP = j.xUlkd(
                              r,
                              fP,
                              (fM = j.VbLNn(
                                r,
                                fM,
                                fN,
                                fO,
                                fP,
                                fK[j.fhxSj(fQ, 9)],
                                5,
                                568446438
                              )),
                              fN,
                              fO,
                              fK[j.ySPsC(fQ, 14)],
                              9,
                              -1019803690
                            )),
                            fM,
                            fN,
                            fK[j.DkXby(fQ, 3)],
                            14,
                            -187363961
                          )),
                          fP,
                          fM,
                          fK[j.gVqJu(fQ, 8)],
                          20,
                          1163531501
                        )),
                        (fO = j.FRkOD(
                          r,
                          fO,
                          (fP = j.VbLNn(
                            r,
                            fP,
                            (fM = j.LeuEF(
                              r,
                              fM,
                              fN,
                              fO,
                              fP,
                              fK[fQ + 13],
                              5,
                              -1444681467
                            )),
                            fN,
                            fO,
                            fK[fQ + 2],
                            9,
                            -51403784
                          )),
                          fM,
                          fN,
                          fK[j.bpBsw(fQ, 7)],
                          14,
                          1735328473
                        )),
                        fP,
                        fM,
                        fK[j.uhYJZ(fQ, 12)],
                        20,
                        -1926607734
                      )),
                      (fO = j.bEUFA(
                        s,
                        fO,
                        (fP = j.NrDUq(
                          s,
                          fP,
                          (fM = j.wxBcu(
                            s,
                            fM,
                            fN,
                            fO,
                            fP,
                            fK[j.hcFSW(fQ, 5)],
                            4,
                            -378558
                          )),
                          fN,
                          fO,
                          fK[j.fhxSj(fQ, 8)],
                          11,
                          -2022574463
                        )),
                        fM,
                        fN,
                        fK[j.uhYJZ(fQ, 11)],
                        16,
                        1839030562
                      )),
                      fP,
                      fM,
                      fK[j.DTNAK(fQ, 14)],
                      23,
                      -35309556
                    )),
                    (fO = j.xdcFk(
                      s,
                      fO,
                      (fP = j.nuQYz(
                        s,
                        fP,
                        (fM = j.VbLNn(
                          s,
                          fM,
                          fN,
                          fO,
                          fP,
                          fK[j.zSBEV(fQ, 1)],
                          4,
                          -1530992060
                        )),
                        fN,
                        fO,
                        fK[j.aCBzs(fQ, 4)],
                        11,
                        1272893353
                      )),
                      fM,
                      fN,
                      fK[j.fhxSj(fQ, 7)],
                      16,
                      -155497632
                    )),
                    fP,
                    fM,
                    fK[fQ + 10],
                    23,
                    -1094730640
                  )),
                  (fO = j.VbLNn(
                    s,
                    fO,
                    (fP = j.BFKGb(
                      s,
                      fP,
                      (fM = j.CtaHb(
                        s,
                        fM,
                        fN,
                        fO,
                        fP,
                        fK[j.GsizW(fQ, 13)],
                        4,
                        681279174
                      )),
                      fN,
                      fO,
                      fK[j.DkXby(fQ, 0)],
                      11,
                      -358537222
                    )),
                    fM,
                    fN,
                    fK[j.DkXby(fQ, 3)],
                    16,
                    -722521979
                  )),
                  fP,
                  fM,
                  fK[j.ONfur(fQ, 6)],
                  23,
                  76029189
                )),
                (fO = j.mriVy(
                  s,
                  fO,
                  (fP = j.HdlRG(
                    s,
                    fP,
                    (fM = j.JLCId(
                      s,
                      fM,
                      fN,
                      fO,
                      fP,
                      fK[j.bpBsw(fQ, 9)],
                      4,
                      -640364487
                    )),
                    fN,
                    fO,
                    fK[j.ZQfGK(fQ, 12)],
                    11,
                    -421815835
                  )),
                  fM,
                  fN,
                  fK[j.lXGWv(fQ, 15)],
                  16,
                  530742520
                )),
                fP,
                fM,
                fK[j.ONfur(fQ, 2)],
                23,
                -995338651
              )),
              (fO = j.TJnoQ(
                t,
                fO,
                (fP = j.UTckW(
                  t,
                  fP,
                  (fM = j.pDSwh(t, fM, fN, fO, fP, fK[fQ + 0], 6, -198630844)),
                  fN,
                  fO,
                  fK[j.FZTVC(fQ, 7)],
                  10,
                  1126891415
                )),
                fM,
                fN,
                fK[j.cQZNm(fQ, 14)],
                15,
                -1416354905
              )),
              fP,
              fM,
              fK[fQ + 5],
              21,
              -57434055
            )),
            (fO = j.HdlRG(
              t,
              fO,
              (fP = j.peSnH(
                t,
                fP,
                (fM = j.nCSmV(
                  t,
                  fM,
                  fN,
                  fO,
                  fP,
                  fK[j.zSBEV(fQ, 12)],
                  6,
                  1700485571
                )),
                fN,
                fO,
                fK[j.pdiSo(fQ, 3)],
                10,
                -1894986606
              )),
              fM,
              fN,
              fK[j.fhxSj(fQ, 10)],
              15,
              -1051523
            )),
            fP,
            fM,
            fK[j.ZQfGK(fQ, 1)],
            21,
            -2054922799
          )),
          (fO = j.WDaND(
            t,
            fO,
            (fP = j.loMrs(
              t,
              fP,
              (fM = t(fM, fN, fO, fP, fK[fQ + 8], 6, 1873313359)),
              fN,
              fO,
              fK[j.RygwA(fQ, 15)],
              10,
              -30611744
            )),
            fM,
            fN,
            fK[j.PUElL(fQ, 6)],
            15,
            -1560198380
          )),
          fP,
          fM,
          fK[j.iVEaW(fQ, 13)],
          21,
          1309151649
        )),
        (fO = j.nCSmV(
          t,
          fO,
          (fP = j.lmIKY(
            t,
            fP,
            (fM = j.UTckW(
              t,
              fM,
              fN,
              fO,
              fP,
              fK[j.meoLj(fQ, 4)],
              6,
              -145523070
            )),
            fN,
            fO,
            fK[j.CQJZR(fQ, 11)],
            10,
            -1120210379
          )),
          fM,
          fN,
          fK[fQ + 2],
          15,
          718787259
        )),
        fP,
        fM,
        fK[j.KqpJT(fQ, 9)],
        21,
        -343485551
      )
      fM = u(fM, fR)
      fN = j.WKHtM(u, fN, fS)
      fO = j.WKHtM(u, fO, fT)
      fP = j.jFdSB(u, fP, fU)
    }
    return j.SFnMS(Array, fM, fN, fO, fP)
  }
  function p(fK, fL, fM, fN, fO, fP) {
    return j.ukfiK(
      u,
      j.ukfiK(v, u(j.PIsak(u, fL, fK), j.YEPGG(u, fN, fP)), fO),
      fM
    )
  }
  function q(fK, fL, fM, fN, fO, fP, fQ) {
    return j.TZHon(
      p,
      j.dQrGQ(j.lGIWO(fL, fM), j.JqwDn(~fL, fN)),
      fK,
      fL,
      fO,
      fP,
      fQ
    )
  }
  function r(fK, fL, fM, fN, fO, fP, fQ) {
    return p(j.dQrGQ(j.hMekA(fL, fN), j.lGIWO(fM, ~fN)), fK, fL, fO, fP, fQ)
  }
  function s(fK, fL, fM, fN, fO, fP, fQ) {
    return j.TZHon(p, j.JqaLl(j.JqaLl(fL, fM), fN), fK, fL, fO, fP, fQ)
  }
  function t(fK, fL, fM, fN, fO, fP, fQ) {
    return j.TZHon(p, fM ^ (fL | ~fN), fK, fL, fO, fP, fQ)
  }
  function u(fK, fL) {
    var fM = (65535 & fK) + j.lGIWO(65535, fL)
    return j.DgNdL(
      j.iHsuA(j.FZTVC(j.vIBHd(fK >> 16, fL >> 16), j.gKxfx(fM, 16)), 16),
      j.lGIWO(65535, fM)
    )
  }
  function v(fK, fL) {
    return j.ndiWH(fK << fL, j.NTjhP(fK, j.aOnIq(32, fL)))
  }
  ;(() => {
    const fL = (fM = 'Hacks Detected') => {
      em(fM)
      document.documentElement.innerHTML = fM
    }
    j.aOtNm(
      setTimeout,
      () => {
        j.WUWOm(
          setInterval,
          () => {
            try {
              if (
                window.doNewSend ||
                document.ws ||
                window.msgpack ||
                window.msgpack5 ||
                e4.style.background !== '' ||
                !WebSocket.prototype.send
                  .toString()
                  .includes('[native code]') ||
                !Worker.toString().includes('[native code]')
              ) {
                fL('t')
              }
            } catch (fN) {
              fL('e')
            }
          },
          2000
        )
      },
      10000
    )
  })()
  function ai(fK = 'unknown') {
    let fM = NaN,
      fN = 0,
      fO = fK.toLowerCase().replaceAll(' ', '')
    return (
      ag.some((fP) => {
        fN = fP.length
        for (let fQ = fO.length; fQ--; ) {
          fM = 0
          for (let fR = fN; fR--; ) {
            fM += j.CxQHY(
              fO.slice(fQ + fR, j.qoTtf(fQ, fR) + 1),
              fP.slice(fR, j.qoTtf(fR, 1))
            )
          }
          j.UzvnA(j.NVucF(fM, fN), 0.85) &&
            (fK = j.cebfT(ah, fK, fQ, '*'.repeat(fN)))
        }
      }),
      fK
    )
  }
  class aK {
    ['setData'](fK) {
      const fL = j.sNgpL.split('|')
      while (true) {
        switch (fL[fM++]) {
          case '0':
            this.maxHealth = fK[7]
            continue
          case '1':
            this.skinColor = fK[9]
            continue
          case '2':
            this.scale = fK[8]
            continue
          case '3':
            this.y = fK[4]
            continue
          case '4':
            this.name = fK[2]
            continue
          case '5':
            this.x = fK[3]
            continue
          case '6':
            this.dir = fK[5]
            continue
          case '7':
            this.sid = fK[1]
            continue
          case '8':
            this.health = fK[6]
            continue
          case '9':
            this.id = fK[0]
            continue
        }
        break
      }
    }
    ['spawn'](fK) {
      const fL = j.WmInA.split('|')
      while (true) {
        switch (fL[fM++]) {
          case '0':
            this.autoGather = 0
            continue
          case '1':
            this.y = 0
            continue
          case '2':
            this.scale = bg
            continue
          case '3':
            this.mouseState = 0
            continue
          case '4':
            this.minimapCounter = 0
            continue
          case '5':
            this.zIndex = 0
            continue
          case '6':
            this.buildIndex = -1
            continue
          case '7':
            this.upgradePoints = 0
            continue
          case '8':
            this.targetAngle = 0
            continue
          case '9':
            this.maxHealth = 100
            continue
          case '10':
            this.kills = 0
            continue
          case '11':
            this.animTime = 0
            continue
          case '12':
            this.weapons = [0]
            continue
          case '13':
            this.dirPlus = 0
            continue
          case '14':
            this.maxXP = 300
            continue
          case '15':
            this.x = 0
            continue
          case '16':
            this.age = 1
            continue
          case '17':
            this.chatCountdown = 0
            continue
          case '18':
            this.dir = 0
            continue
          case '19':
            this.XP = 0
            continue
          case '20':
            this.items = [0, 3, 6, 10]
            continue
          case '21':
            this.active = true
            continue
          case '22':
            this.health = this.maxHealth
            continue
          case '23':
            this.gathering = 0
            continue
          case '24':
            this.speed = bh
            continue
          case '25':
            this.lockMove = false
            continue
          case '26':
            this.noMovTimer = 0
            continue
          case '27':
            this.animSpeed = 0
            continue
          case '28':
            this.yVel = 0
            continue
          case '29':
            this.lockDir = false
            continue
          case '30':
            this.xVel = 0
            continue
          case '31':
            this.shameTimer = 0
            continue
          case '32':
            this.weaponIndex = 0
            continue
          case '33':
            this.alive = true
            continue
          case '34':
            this.shameCount = 0
            continue
          case '35':
            this.upgrAge = 2
            continue
        }
        break
      }
    }
    ['animate'](fK) {
      if (this.animTime) {
        if (j.saHXX((this.animTime -= fK), 0)) {
          this.animTime = 0
          this.dirPlus = 0
          this.tmpRatio = 0
          this.animIndex = 0
        } else {
          if (this.animIndex === 0) {
            this.tmpRatio += j.NVucF(fK, j.lJzWG(this.animSpeed, b2))
            this.dirPlus = j.bPeDK(
              co,
              0,
              this.targetAngle,
              j.CKCCE(aW, 1, this.tmpRatio)
            )
            j.RYrFq(this.tmpRatio, 1) &&
              ((this.tmpRatio = 1), (this.animIndex = 1))
          } else {
            this.tmpRatio -= fK / j.lJzWG(this.animSpeed, j.aOnIq(1, b2))
            this.dirPlus = co(
              0,
              this.targetAngle,
              j.XffZU(aX, 0, this.tmpRatio)
            )
          }
        }
      }
    }
    ['startAnim'](fK, fL) {
      this.animTime = this.animSpeed = cs.weapons[fL].speed
      this.targetAngle = fK ? -bT : -a7
      this.tmpRatio = 0
      this.animIndex = 0
    }
    constructor(fK, fL) {
      this.wood = 0
      this.stone = 0
      this.points = 0
      this.food = 0
      this.kills = 0
      this.name = ''
      this.skin = null
      this.tail = null
      this.active = true
      this.alive = true
      this.lockMove = false
      this.lockDir = false
      this.minimapCounter = 0
      this.chatCountdown = 0
      this.shameCount = 0
      this.shameTimer = 0
      this.gathering = 0
      this.autoGather = 0
      this.animTime = 0
      this.animSpeed = 0
      this.mouseState = 0
      this.buildIndex = -1
      this.weaponIndex = 0
      this.noMovTimer = 0
      this.maxXP = 300
      this.XP = 0
      this.age = 1
      this.kills = 0
      this.upgrAge = 2
      this.upgradePoints = 0
      this.x = 0
      this.y = 0
      this.zIndex = 0
      this.xVel = 0
      this.yVel = 0
      this.dir = 0
      this.dirPlus = 0
      this.targetAngle = 0
      this.maxHealth = 100
      this.health = this.maxHealth
      this.scale = bg
      this.speed = bh
      this.items = [0, 3, 6, 10]
      this.weapons = [0]
      this.id = fK
      this.sid = fL
      this.team = null
      this.skinIndex = 0
      this.tailIndex = 0
      this.hitTime = 0
      this.tails = {}
      for (let fM = cy; fM--; ) {
        if (j.ScIsg(cw[fM].price, 0)) {
          this.tails[cw[fM].id] = 1
        }
      }
      this.skins = {}
      for (let fN = cx; fN--; ) {
        if (j.saHXX(cv[fN].price, 0)) {
          this.skins[cv[fN].id] = 1
        }
      }
      this.dt = 0
      this.hidden = false
      this.itemCounts = {}
      this.skinRot = 0
      this.iconIndex = 0
      this.skinColor = 0
      this.animIndex = this.tmpRatio = 0
    }
  }
  class aL {
    ['update'](fK) {
      if (this.active) {
        if (!this.skipMov) {
          const fL = j.UZAwc(aa, this.dir),
            fM = j.fzGQC(a9, this.dir),
            fN = j.KUGEh(this.speed, fK)
          this.x += j.KUGEh(fN, fL)
          this.y += fN * fM
          ;(this.range -= fN) <= 0 &&
            ((this.x += j.HqUzG(this.range, fL)),
            (this.y += this.range * fM),
            (this.range = 0),
            (this.active = false))
        } else {
          this.skipMov = false
        }
      }
      return this.active
    }
    ['init'](fK, fL, fM, fN, fO, fP, fQ, fR, fS) {
      const fT = j.HRwpI.split('|')
      while (true) {
        switch (fT[fU++]) {
          case '0':
            this.skipMov = true
            continue
          case '1':
            this.scale = fR
            continue
          case '2':
            this.dir = fN
            continue
          case '3':
            this.y = fM
            continue
          case '4':
            this.range = fQ
            continue
          case '5':
            this.x = fL
            continue
          case '6':
            this.active = true
            continue
          case '7':
            this.owner = fS
            continue
          case '8':
            this.speed = fO
            continue
          case '9':
            this.dmg = fP
            continue
          case '10':
            this.indx = fK
            continue
        }
        break
      }
    }
    constructor() {
      const fK = j.NAIZn.split('|')
      while (true) {
        switch (fK[fL++]) {
          case '0':
            this.range = 0
            continue
          case '1':
            this.scale = 0
            continue
          case '2':
            this.indx = 0
            continue
          case '3':
            this.skipMov = true
            continue
          case '4':
            this.x = 0
            continue
          case '5':
            this.dmg = 0
            continue
          case '6':
            this.active = true
            continue
          case '7':
            this.dir = 0
            continue
          case '8':
            this.y = 0
            continue
          case '9':
            this.owner = null
            continue
          case '10':
            this.speed = 0
            continue
        }
        break
      }
    }
  }
  class aM {
    ['init'](fK, fL, fM, fN, fO, fP = {}, fQ = null) {
      const fR = j.DEvgH.split('|')
      while (true) {
        switch (fR[fS++]) {
          case '0':
            this.y = fL
            continue
          case '1':
            this.xWiggle = 0
            continue
          case '2':
            this.dir = fM
            continue
          case '3':
            this.dmg = fP.dmg
            continue
          case '4':
            this.blocker = fP.blocker
            continue
          case '5':
            this.x = fK
            continue
          case '6':
            this.name = fP.name
            continue
          case '7':
            this.yWiggle = 0
            continue
          case '8':
            this.zIndex = fP.zIndex || 0
            continue
          case '9':
            this.owner = fQ
            continue
          case '10':
            this.hideFromEnemy = fP.hideFromEnemy
            continue
          case '11':
            this.req = fP.req
            continue
          case '12':
            this.active = true
            continue
          case '13':
            this.health = fP.health
            continue
          case '14':
            this.layer = 2
            continue
          case '15':
            this.scale = fN
            continue
          case '16':
            this.turnSpeed = fP.turnSpeed
            continue
          case '17':
            if (this.group != undefined) {
              this.layer = this.group.layer
            } else {
              if (this.type == 0) {
                this.layer = 3
              } else {
                if (j.xtoyn(this.type, 2)) {
                  this.layer = 0
                } else {
                  j.QXXBB(this.type, 4) && (this.layer = -1)
                }
              }
            }
            continue
          case '18':
            this.projectile = fP.projectile
            continue
          case '19':
            this.type = fO
            continue
          case '20':
            this.id = fP.id
            continue
          case '21':
            this.isItem = j.Afyaa(this.id, undefined)
            continue
          case '22':
            this.group = fP.group
            continue
        }
        break
      }
    }
    ['update'](fK) {
      this.active &&
        (this.xWiggle && (this.xWiggle *= j.lNXCc(0.99, fK)),
        this.yWiggle && (this.yWiggle *= j.ieeLP(0.99, fK)),
        this.turnSpeed && (this.dir += this.turnSpeed * fK))
    }
    constructor(fK) {
      this.sid = fK
      this.active = true
      this.x = 0
      this.y = 0
      this.dir = 0
      this.xWiggle = 0
      this.yWiggle = 0
      this.scale = 0
      this.type = 0
      this.id = 0
      this.owner = null
      this.name = ''
      this.isItem = j.CLYZW(this.id, undefined)
      this.group = {}
      this.health = 100
      this.layer = 0
      this.blocker = 0
      this.hideFromEnemy = 0
      this.dmg = 0
      this.zIndex = 0
      this.turnSpeed = 0
      this.req = 0
      this.projectile = 0
    }
  }
  class aN {
    ['init'](fK, fL, fM, fN, fO) {
      const fP = j.iUBwI.split('|')
      while (true) {
        switch (fP[fQ++]) {
          case '0':
            this.active = true
            continue
          case '1':
            this.scale = fO.scale
            continue
          case '2':
            this.src = fO.src
            continue
          case '3':
            this.zIndex = 0
            continue
          case '4':
            this.speed = fO.speed
            continue
          case '5':
            this.xVel = 0
            continue
          case '6':
            this.maxHealth = fO.health
            continue
          case '7':
            this.dir = fM
            continue
          case '8':
            this.yVel = 0
            continue
          case '9':
            this.spriteMlt = fO.spriteMlt
            continue
          case '10':
            this.index = fN
            continue
          case '11':
            this.nameScale = fO.nameScale
            continue
          case '12':
            this.alive = true
            continue
          case '13':
            if (fO.name) {
              this.name = fO.name
            }
            continue
          case '14':
            this.dirPlus = 0
            continue
          case '15':
            this.turnSpeed = fO.turnSpeed
            continue
          case '16':
            this.dmg = fO.dmg
            continue
          case '17':
            this.y = fL
            continue
          case '18':
            this.x = fK
            continue
          case '19':
            this.health = this.maxHealth
            continue
        }
        break
      }
    }
    ['animate'](fK) {
      this.animTime &&
        ((this.animTime -= fK),
        j.xlPRD(this.animTime, 0)
          ? ((this.animTime = 0),
            (this.dirPlus = 0),
            (this.tmpRatio = 0),
            (this.animIndex = 0))
          : j.xtoyn(this.animIndex, 0)
          ? ((this.tmpRatio += j.NVucF(fK, this.animSpeed * b2)),
            (this.dirPlus = co(0, this.targetAngle, aW(1, this.tmpRatio))),
            j.OeJrW(this.tmpRatio, 1) &&
              ((this.tmpRatio = 1), (this.animIndex = 1)))
          : ((this.tmpRatio -= fK / (this.animSpeed * (1 - b2))),
            (this.dirPlus = co(
              0,
              this.targetAngle,
              j.LwFld(aX, 0, this.tmpRatio)
            ))))
    }
    ['startAnim']() {
      this.animTime = this.animSpeed = 600
      this.targetAngle = a7 * 0.8
      this.tmpRatio = 0
      this.animIndex = 0
    }
    constructor(fK) {
      const fL = j.EdFzx.split('|')
      while (true) {
        switch (fL[fM++]) {
          case '0':
            this.lockMove = false
            continue
          case '1':
            this.active = false
            continue
          case '2':
            this.zIndex = 0
            continue
          case '3':
            this.x = -1
            continue
          case '4':
            this.speed = NaN
            continue
          case '5':
            this.spawnCounter = 0
            continue
          case '6':
            this.name = ''
            continue
          case '7':
            this.xVel = 0
            continue
          case '8':
            this.tmpRatio = 0
            continue
          case '9':
            this.animIndex = 0
            continue
          case '10':
            this.spriteMlt = 0
            continue
          case '11':
            this.src = ''
            continue
          case '12':
            this.tmpRatio = 0
            continue
          case '13':
            this.alive = false
            continue
          case '14':
            this.dir = 0
            continue
          case '15':
            this.nameScale = 0
            continue
          case '16':
            this.startY = null
            continue
          case '17':
            this.startX = null
            continue
          case '18':
            this.scale = 0
            continue
          case '19':
            this.dmg = 0
            continue
          case '20':
            this.index = 0
            continue
          case '21':
            this.yVel = 0
            continue
          case '22':
            this.turnSpeed = NaN
            continue
          case '23':
            this.sid = fK
            continue
          case '24':
            this.targetAngle = 0
            continue
          case '25':
            this.nameIndex = j.bIgAI(bM, 0, j.aOnIq(b6, 1))
            continue
          case '26':
            this.y = -1
            continue
          case '27':
            this.health = this.maxHealth = 100
            continue
          case '28':
            this.dirPlus = 0
            continue
          case '29':
            this.timerCount = 0
            continue
          case '30':
            this.animTime = this.animSpeed = 0
            continue
          case '31':
            this.targetAngle = 0
            continue
          case '32':
            this.isAI = true
            continue
        }
        break
      }
    }
  }
  class aO {
    constructor() {
      const fK = j.SLHsF.split('|')
      while (true) {
        switch (fK[fL++]) {
          case '0':
            this.startScale = 0
            continue
          case '1':
            this.speed = 1
            continue
          case '2':
            this.maxScale = 1.5
            continue
          case '3':
            this.y = 0
            continue
          case '4':
            this.text = ''
            continue
          case '5':
            this.x = 0
            continue
          case '6':
            this.color = ''
            continue
          case '7':
            this.scaleSpeed = 0.7
            continue
          case '8':
            this.scale = 0
            continue
          case '9':
            this.life = 1
            continue
        }
        break
      }
    }
    ['init'](fK, fL, fM, fN, fO, fP, fQ) {
      const fR = j.RWbGZ.split('|')
      while (true) {
        switch (fR[fS++]) {
          case '0':
            this.startScale = this.scale
            continue
          case '1':
            this.scaleSpeed = 0.7
            continue
          case '2':
            this.life = fO
            continue
          case '3':
            this.scale = fM
            continue
          case '4':
            this.text = fP
            continue
          case '5':
            this.speed = fN
            continue
          case '6':
            this.maxScale = j.KUGEh(fM, 1.5)
            continue
          case '7':
            this.y = fL
            continue
          case '8':
            this.x = fK
            continue
          case '9':
            this.color = fQ
            continue
        }
        break
      }
    }
    ['update'](fK) {
      if (this.life) {
        this.life -= fK
        this.y -= j.uawQD(this.speed, fK)
        this.scale += this.scaleSpeed * fK
        if (j.gznbt(this.scale, this.maxScale)) {
          this.scale = this.maxScale
          this.scaleSpeed *= -1
        } else {
          j.yfusk(this.scale, this.startScale) &&
            ((this.scale = this.startScale), (this.scaleSpeed = 0))
        }
        this.life <= 0 && (this.life = 0)
      }
    }
    ['render'](fK, fL, fM) {
      fK.fillStyle = this.color
      fK.font = this.scale + j.rJLRk
      fK.fillText(this.text, this.x - fL, j.mbMtr(this.y, fM))
    }
  }
  class aP {
    ['update'](fK, fL, fM, fN) {
      fL.textBaseline = j.XuiNQ
      fL.textAlign = 'center'
      for (let fO = this.texts.length, fP = ''; fO--; ) {
        ;(fP = this.texts[fO])?.life && (fP.update(fK), fP.render(fL, fM, fN))
      }
    }
    ['showText'](fK, fL, fM, fN, fO, fP, fQ) {
      let fR = ''
      for (let fS = this.texts.length; fS--; ) {
        if (!this.texts[fS].life) {
          fR = this.texts[fS]
          break
        }
      }
      !fR && ((fR = new aO()), this.texts.push(fR))
      fR.init(fK, fL, fM, fN, fO, fP, fQ)
    }
    constructor() {
      this.texts = []
    }
  }
  class aQ {
    ['spawn'](fK, fL, fM, fN) {
      F = null
      for (let fO = am; fO--; ) {
        if (!al[fO].active) {
          F = al[fO]
          break
        }
      }
      !F && ((F = new this.AI(am)), al.push(F), (am = al.length))
      return F.init(fK, fL, fM, fN, this.aiTypes[fN]), F
    }
    constructor(fK, fL) {
      this.aiTypes = G
      this.AI = fL
    }
  }
  class aR {
    constructor(fK, fL, fM) {
      this.addProjectile = function (fN, fO, fP, fQ, fR, fS, fT, fU, fV) {
        let fW = fM[fS],
          fX
        for (let fY = fL.length; fY--; ) {
          if (!fL[fY].active) {
            fX = fL[fY]
            break
          }
        }
        !fX && ((fX = new fK()), (fX.sid = fL.length), fL.push(fX))
        fX.init(fS, fN, fO, fP, fR, fW.dmg, fQ, fW.scale, fT)
        fX.ignoreObj = fU
        fX.layer = fV || fW.layer
        fX.src = fW.src
        return fX
      }
    }
  }
  class aS {
    ['disableObj'](fK) {
      fK.active = false
    }
    ['disableBySid'](fK) {
      for (let fL = ar; fL--; ) {
        if (j.CNxBo(aq[fL].sid, fK)) {
          this.disableObj(aq[fL])
          break
        }
      }
    }
    ['removeAllItems'](fK) {
      for (let fL = ar; fL--; ) {
        aq[fL].active &&
          j.QXXBB(aq[fL].owner?.sid, fK) &&
          this.disableObj(aq[fL])
      }
    }
    ['add'](fK, fL, fM, fN, fO, fP, fQ, fR, fS) {
      const fT = ar
      F = null
      for (let fU = 0; j.dZwaM(fU, fT); ++fU) {
        if (j.xkYnt(aq[fU].sid, fK)) {
          F = aq[fU]
          break
        }
      }
      if (!F) {
        for (let fV = 0; j.tmqXB(fV, fT); ++fV) {
          if (!aq[fV].active) {
            F = aq[fV]
            break
          }
        }
      }
      !F && ((F = new aM(fK)), aq.push(F), (ar = aq.length))
      fR && (F.sid = fK)
      F.init(fL, fM, fN, fO, fP, fQ, fS)
    }
    constructor(fK) {
      this.GameObject = fK
    }
  }
  for (let fK = 0, fL = cs.list.length; j.NXQjW(fK, fL); ++fK) {
    cs.list[fK].id = fK
    if (cs.list[fK].pre) {
      cs.list[fK].pre = j.UpOwo(fK, cs.list[fK].pre)
    }
  }
  window[j.MQcNI] = ct
  window.modSSIDs = function (fM) {
    cV = !!fM
  }
  function d5() {
    const fM = {
      wKMmq: '8|5|2|7|4|1|3|6|0',
      CEBqZ: 'none',
      DBiiv: j.JXGKw,
      LBAiU: function (fN, fO) {
        return j.rUyDI(fN, fO)
      },
      qKZmb: j.PQrRt,
      ONdNY: function (fN) {
        return j.QkAeh(fN)
      },
      jJbAV: function (fN, fO, fP) {
        return fN(fO, fP)
      },
      ukYtb: function (fN, fO, fP) {
        return j.ukfiK(fN, fO, fP)
      },
      SMAXc: function (fN, fO, fP, fQ) {
        return j.dPgRF(fN, fO, fP, fQ)
      },
      AJmNZ: function (fN, fO) {
        return j.zhGmK(fN, fO)
      },
      yYrro: j.HXPxx,
      OxuvK: function (fN, fO) {
        return j.qCPTJ(fN, fO)
      },
      RFoSF: function (fN, fO) {
        return j.yRoXg(fN, fO)
      },
      QhTXl: function (fN, fO) {
        return j.bpBsw(fN, fO)
      },
      NEyim: function (fN, fO) {
        return j.yRoXg(fN, fO)
      },
      nbsgV: function (fN, fO) {
        return fN + fO
      },
      DZyCP: function (fN, fO) {
        return j.GQHpC(fN, fO)
      },
      yUQZF: function (fN, fO) {
        return fN + fO
      },
      OktGo: function (fN, fO) {
        return fN + fO
      },
      UmKVB: function (fN, fO) {
        return fN < fO
      },
      nvHBD: function (fN, fO) {
        return fN === fO
      },
      RTbBa: function (fN, fO) {
        return j.ZxCIq(fN, fO)
      },
      lMwme: function (fN, fO) {
        return j.TmPok(fN, fO)
      },
      RkwCZ: j.cpvoP,
      uGsVA: function (fN, fO) {
        return j.LpNaq(fN, fO)
      },
      SwCnh: function (fN, fO) {
        return fN + fO
      },
      VeQIC: function (fN, fO) {
        return j.kOhvy(fN, fO)
      },
      nZJRc: function (fN, fO) {
        return j.MegEG(fN, fO)
      },
      uuwbZ: function (fN, fO) {
        return j.FwcfH(fN, fO)
      },
      bCLNI: function (fN, fO) {
        return j.PnEPE(fN, fO)
      },
      dhoeB: function (fN, fO) {
        return j.KUGEh(fN, fO)
      },
      vzTsQ: function (fN) {
        return j.Khdmn(fN)
      },
      asiot: function (fN, fO) {
        return j.QCLRc(fN, fO)
      },
      iZfLF: j.mTbbK,
      cUdFk: function (fN, fO) {
        return fN % fO
      },
      byxDU: function (fN, fO) {
        return j.SRZjI(fN, fO)
      },
      VMPha: j.AHXAm,
      MPCaq: function (fN, fO) {
        return j.MnTyf(fN, fO)
      },
      tcAXN: function (fN) {
        return j.Khdmn(fN)
      },
      FEzAD: function (fN) {
        return fN()
      },
    }
    if (!aJ) {
      return j.FtZqG(setTimeout, d5, 200)
    }
    cU = true
    cN.connect(
      d2,
      (fN) => {
        cZ()
        j.GHkuW(setInterval, cZ, 2500)
        const fO = new URLSearchParams(window.location.search)
        !fO.get(j.RZhYJ) &&
          window.history.replaceState(
            document.title,
            document.title,
            window.location.href + '?server=' + d4
          )
        fN ? j.UZAwc(em, fN) : ((cT = true), j.dcixm(fG))
      },
      {
        ae0: function fN(fO = '') {
          cN.socketId = fO
        },
        '156': function fO(fP) {
          ap = fP[j.pRTUl]
        },
        '946': em,
        c6d: function fP(fQ) {
          const fR = fM.wKMmq.split('|')
          while (true) {
            switch (fR[fS++]) {
              case '0':
                continue
              case '1':
                az = 0
                continue
              case '2':
                dt.style.display = fM.CEBqZ
                continue
              case '3':
                dr = true
                continue
              case '4':
                E = fQ
                continue
              case '5':
                dK.style.display = fM.DBiiv
                continue
              case '6':
                !cS && ((cS = true), (aq.length = 0), (ar = 0))
                continue
              case '7':
                aA = {}
                continue
              case '8':
                dM.style.display = fM.CEBqZ
                continue
            }
            break
          }
        },
        '445': function fQ(fR, fS) {
          !(F = fM.LBAiU(fB, fR[0])) &&
            ((F = new aK(fR[0], fR[1])), an.push(F), (ao = an.length))
          F.spawn(fS ? de : null)
          F.visible = false
          F.x2 = undefined
          F.y2 = undefined
          F.setData(fR)
          if (fS) {
            const fT = fM.qKZmb.split('|')
            while (true) {
              switch (fT[fU++]) {
                case '0':
                  fM.ONdNY(f2)
                  continue
                case '1':
                  dN.style.display = 'block'
                  continue
                case '2':
                  dl = D.x
                  continue
                case '3':
                  fM.jJbAV(eE, false, false)
                  continue
                case '4':
                  D = F
                  continue
                case '5':
                  fM.ukYtb(f4, 0, 0)
                  continue
                case '6':
                  dm = D.y
                  continue
                case '7':
                  fM.SMAXc(f5, -1, -1, -1)
                  continue
              }
              break
            }
          }
        },
        '4cd': function fR(fS) {
          for (let fT = ao; fT--; ) {
            if (fM.AJmNZ(an[fT].id, fS)) {
              an.splice(fT, 1)
              ao = an.length
              break
            }
          }
        },
        ab7: function fS(fT) {
          a6 = 0
          for (let fU = ao; fU--; ) {
            F = an[fU]
            F.forcePos = !F.visible
            F.visible = false
          }
          for (let fV = fT.length, fW = Date.now(), fX = 0; fX < fV; fX += 13) {
            if ((F = fC(fT[fX]))) {
              const fY = fM.yYrro.split('|')
              while (true) {
                switch (fY[fZ++]) {
                  case '0':
                    F.x1 = F.x
                    continue
                  case '1':
                    F.x2 = fT[fX + 1]
                    continue
                  case '2':
                    F.buildIndex = fT[fM.OxuvK(fX, 4)]
                    continue
                  case '3':
                    F.weaponIndex = fT[fM.OxuvK(fX, 5)]
                    continue
                  case '4':
                    F.t2 = fW
                    continue
                  case '5':
                    F.t1 = fM.RFoSF(F.t2, undefined) ? fW : F.t2
                    continue
                  case '6':
                    F.skinIndex = fT[fM.QhTXl(fX, 9)]
                    continue
                  case '7':
                    F.tailIndex = fT[fM.OxuvK(fX, 10)]
                    continue
                  case '8':
                    F.y1 = F.y
                    continue
                  case '9':
                    F.visible = true
                    continue
                  case '10':
                    F.d1 = fM.NEyim(F.d2, undefined)
                      ? fT[fM.OxuvK(fX, 3)]
                      : F.d2
                    continue
                  case '11':
                    F.iconIndex = fT[fM.nbsgV(fX, 11)]
                    continue
                  case '12':
                    F.dt = 0
                    continue
                  case '13':
                    F.isLeader = fT[fM.DZyCP(fX, 8)]
                    continue
                  case '14':
                    F.y2 = fT[fX + 2]
                    continue
                  case '15':
                    F.zIndex = fT[fM.OxuvK(fX, 12)]
                    continue
                  case '16':
                    F.weaponVariant = fT[fM.yUQZF(fX, 6)]
                    continue
                  case '17':
                    F.team = fT[fM.OktGo(fX, 7)]
                    continue
                  case '18':
                    F.d2 = fT[fX + 3]
                    continue
                }
                break
              }
            }
          }
        },
        '215': function fT(fU) {
          j.oKTyF(ch, dU)
          for (let fV = 1, fW = fU.length, fX = 0; fX < fW; fX += 3) {
            j.fzGQC(cm, {
              class: j.yBqRk,
              parent: dU,
              children: [
                cm({
                  class: 'leaderboardItem',
                  style: j.kClRF + (j.QmIKf(fU[fX], E) ? j.QQtkg : j.oWTdN),
                  text: j.QcVKY(
                    fV + '. ',
                    j.byWmQ(fU[fX + 1], '') ? fU[j.KqpJT(fX, 1)] : j.MNYZO
                  ),
                }),
                cm({
                  class: j.bHxWf,
                  text: bH(fU[j.TmPok(fX, 2)]) || '0',
                }),
              ],
            })
            fV++
          }
        },
        a94: function fU(fV) {
          for (let fW = fV.length, fX = 0; j.EDztL(fX, fW); fX += 8) {
            ec.add(
              fV[fX],
              fV[fX + 1],
              fV[j.uhYJZ(fX, 2)],
              fV[j.ouFQd(fX, 3)],
              fV[fX + 4],
              fV[j.Gertu(fX, 5)],
              cs.list[fV[j.NDFzF(fX, 6)]],
              true,
              j.VvAqk(fV[j.qCPTJ(fX, 7)], 0)
                ? { sid: fV[j.pfZcg(fX, 7)] }
                : null
            )
          }
        },
        '41f': function fV(fW) {
          for (let fY = am; fY--; ) {
            al[fY].forcePos = !al[fY].visible
            al[fY].visible = false
          }
          if (!fW) {
            return
          }
          let fX = Date.now()
          for (let fZ = 0, g0 = fW.length; fM.UmKVB(fZ, g0); fZ += 7) {
            if ((F = fM.LBAiU(fD, fW[fZ]))) {
              F.index = fW[fZ + 1]
              F.t1 = fM.nvHBD(F.t2, undefined) ? fX : F.t2
              F.t2 = fX
              F.x1 = F.x
              F.y1 = F.y
              F.x2 = fW[fM.RTbBa(fZ, 2)]
              F.y2 = fW[fM.lMwme(fZ, 3)]
              F.d1 = F.d2 === undefined ? fW[fZ + 4] : F.d2
              F.d2 = fW[fM.nbsgV(fZ, 4)]
              F.health = fW[fM.QhTXl(fZ, 5)]
              F.dt = 0
              F.visible = true
            } else {
              const g1 = fM.RkwCZ.split('|')
              while (true) {
                switch (g1[g2++]) {
                  case '0':
                    F.y2 = F.y
                    continue
                  case '1':
                    F.health = fW[fM.uGsVA(fZ, 5)]
                    continue
                  case '2':
                    if (!ee.aiTypes[fW[fM.OktGo(fZ, 1)]].name) {
                      F.name = b5[fW[fM.SwCnh(fZ, 6)]]
                    }
                    continue
                  case '3':
                    F.sid = fW[fZ]
                    continue
                  case '4':
                    F.x2 = F.x
                    continue
                  case '5':
                    F = ee.spawn(
                      fW[fZ + 2],
                      fW[fM.VeQIC(fZ, 3)],
                      fW[fM.QhTXl(fZ, 4)],
                      fW[fM.VeQIC(fZ, 1)]
                    )
                    continue
                  case '6':
                    F.d2 = F.dir
                    continue
                  case '7':
                    F.forcePos = true
                    continue
                  case '8':
                    F.visible = true
                    continue
                }
                break
              }
            }
          }
        },
        '79e': function fW(fX) {
          ;(F = fM.LBAiU(fD, fX))?.startAnim()
        },
        '359': function fX(fY, fZ, g0) {
          ;(F = fM.LBAiU(fC, fY))?.startAnim(fZ, g0)
        },
        c64: function fY(fZ, g0) {
          ;(F = fM.LBAiU(fE, g0)) &&
            ((F.xWiggle += fM.nZJRc(bu, aa(fZ))),
            (F.yWiggle += bu * fM.uuwbZ(a9, fZ)))
        },
        '510': function fZ(g0, g1) {
          if ((F = fM.LBAiU(fE, g0))) {
            const g2 = fM.bCLNI(g1, a7)
            F.dir = g1
            F.xWiggle += fM.dhoeB(bu, aa(g2))
            F.yWiggle += fM.dhoeB(bu, a9(g2))
          }
        },
        d93: function g0(g1, g2, g3) {
          if (!D) {
            return
          }
          D[g1] = g2
          if (!g3) {
            return
          }
          fM.vzTsQ(f2)
        },
        a3b: function g1(g2, g3) {
          ;(F = j.rUyDI(fC, g2)) && (F.health = g3)
        },
        '507': function g2() {
          const g3 = {
            GwjYy: j.JXGKw,
            rEsvC: j.uzUxC,
          }
          dr = false
          dN.style.display = j.uzUxC
          j.dcixm(eD)
          ew = {
            x: D.x,
            y: D.y,
          }
          dM.style.display = j.uzUxC
          e6.style.display = j.JXGKw
          e6.style.fontSize = j.LQDob
          aj = 0
          j.sjFCR(
            setTimeout,
            () => {
              dK.style.display = 'block'
              dt.style.display = g3.GwjYy
              e6.style.display = g3.rEsvC
            },
            bt
          )
        },
        e31: function g3(g4) {
          ec.disableBySid(g4)
        },
        '49b': function g4(g5) {
          if (D) {
            ec.removeAllItems(g5)
          }
        },
        '91c': function g5(g6, g7) {
          D && (D.itemCounts[g6] = g7)
        },
        e5d: f5,
        b32: f4,
        c6c: eE,
        '15f': function g6(g7, g8, g9, ga, gb, gc, gd, ge) {
          aI &&
            (ed.addProjectile(g7, g8, g9, ga, gb, gc, null, null, gd).sid = ge)
        },
        '7e9': function g7(g8, g9) {
          for (let ga = as.length; ga--; ) {
            j.ZijPs(as[ga].sid, g8) && (as[ga].range = g9)
          }
        },
        '6e5': function g8(g9) {
          if (fM.UmKVB(g9, 0)) {
            return
          }
          dJ.innerText = fM.asiot(
            fM.OxuvK(fM.iZfLF + fM.uuwbZ(ad, g9 / 60), ':'),
            ('0' + fM.cUdFk(g9, 60)).slice(-2)
          )
          dJ.hidden = false
        },
        '353': function g9(ga) {
          ap.push(ga)
          if (e1.style.display !== j.JXGKw) {
            return
          }
          ev()
        },
        '634': function ga(gb) {
          for (let gc = fM.byxDU(ap.length, 1); gc >= 0; gc--) {
            if (ap[gc][fM.VMPha] == gb) {
              ap.splice(gc, 1)
              break
            }
          }
          if (fM.MPCaq(e1.style.display, fM.DBiiv)) {
            fM.vzTsQ(ev)
          }
        },
        '813': function gb(gc, gd) {
          aw.push({
            sid: gc,
            name: gd,
          })
          fM.tcAXN(eu)
        },
        c8a: function gc(gd, ge) {
          if (!D) {
            return
          }
          D.team = gd
          D.isOwner = ge
          if (j.ImCtF(e1.style.display, j.JXGKw)) {
            return
          }
          j.dcixm(ev)
        },
        '065': function gd(ge) {
          ax = ge
          if (e1.style.display !== fM.DBiiv) {
            return
          }
          fM.FEzAD(ev)
        },
        '885': function ge(gf, gg, gh) {
          if (gh) {
            if (!gf) {
              D.tails[gg] = 1
            } else {
              D.tailIndex = gg
            }
          } else {
            if (!gf) {
              D.skins[gg] = 1
            } else {
              D.skinIndex = gg
            }
          }
          if (e9.style.display == j.JXGKw) {
            j.dDPeK(eC)
          }
        },
        '46a': function gf(gg, gh) {
          ;(F = fC(gg)) && ((F.chatMessage = gh), (F.chatCountdown = bS))
        },
        a65: function gg(gh) {
          au = gh
        },
        '74e': function gh(gi, gj, gk, gl) {
          cR.showText(
            gi,
            gj,
            50,
            0.18,
            500,
            j.cFMAW(ab, gk),
            j.OeJrW(gk, 0) ? j.QQtkg : '#8ecc51'
          )
        },
        '6ff': function gi(gj, gk) {
          for (let gl = ey.length; gl--; ) {
            if (!ey[gl].active) {
              ez = ey[gl]
              break
            }
          }
          !ez && ((ez = new e5()), ey.push(ez))
          ez.init(gj, gk)
        },
        '254': function gj() {
          dI.innerText = j.PnEPE(j.xfKDF + j.mbMtr(Date.now(), at), j.uzKxp)
        },
        '18c': function gk(gl) {
          cN.send(a2, k(B + fM.LBAiU(d1, gl)))
        },
        '5bd': function gl(gm) {
          C = gm
        },
      }
    )
    j.CUdUO(es)
    j.IiuuA(setTimeout, es, 3000)
  }
  CanvasRenderingContext2D.prototype.roundRect = function (
    fM = 0,
    fN = 0,
    fO = 0,
    fP = 0,
    fQ = 0
  ) {
    if (j.AREPK(fO, j.ACjVO(2, fQ))) {
      fQ = j.gkEGu(fO, 2)
    }
    if (fP < j.qrLhm(2, fQ)) {
      fQ = j.VrfAx(fP, 2)
    }
    if (fQ < 0) {
      fQ = 0
    }
    const fR = fM + fQ,
      fS = j.quYiC(fM, fO),
      fT = fN + fP
    return (
      this.beginPath(),
      this.moveTo(fR, fN),
      this.arcTo(fS, fN, fS, fT, fQ),
      this.arcTo(fS, fT, fM, fT, fQ),
      this.arcTo(fM, fT, fM, fN, fQ),
      this.arcTo(fM, fN, fS, fN, fQ),
      this.closePath(),
      this
    )
  }
  j.byZxD(typeof Storage, 'undefined') && (d6 = true)
  function d7(fM, fN) {
    if (d6) {
      window.localStorage.setItem(fM, fN)
    }
  }
  function d8(fM) {
    if (d6) {
      window.localStorage.removeItem(fM)
    }
  }
  function d9(fM) {
    if (d6) {
      return window.localStorage.getItem(fM)
    }
    return null
  }
  if (!j.QPpwB(d9, 'consent')) {
    da.style.display = 'block'
  }
  dc.onclick = () => dd(0)
  db.onclick = () => dd(1)
  function df() {
    !de && ((de = true), j.ELlvb(d7, 'moofoll', 1))
  }
  dv.getElementsByTagName(j.emHWv)[0].innerText = d4
  dE.imageSmoothingEnabled = false
  class e5 {
    constructor() {
      this.scale = -1
      this.x = NaN
      this.y = NaN
      this.active = false
    }
    ['init'](fM, fN) {
      this.scale = 0
      this.x = fM
      this.y = fN
      this.active = true
    }
    ['update'](fM, fN) {
      if (this.active) {
        if ((this.scale += j.NSHaa(0.05, fN)) >= bk) {
          this.active = false
        } else {
          let fO = j.FVicx(this.scale, bk)
          fM.globalAlpha = j.DPNdA(
            1,
            j.zMpvZ(j.eNZxX(j.UzvnA(0, fO), 0), (0 <= fO) * fO)
          )
          fM.beginPath()
          const fP = e4.width
          fM.arc(
            j.FoNBW(j.nTVte(this.x, bN), fP),
            j.oQWIi(this.y / bN, fP),
            this.scale,
            0,
            aV
          )
          fM.stroke()
        }
      }
    }
  }
  e4.width = 300
  e4.height = 300
  ei.innerHTML = j.cfeOY(
    j.DAPKo(j.GJrND(j.tdBPT(j.KVPrL, ek.link), j.kNRsa), ek.name),
    j.UcwHF
  )
  dz.onclick = () => {
    dL.style.display = el ? j.JXGKw : j.uzUxC
    el = !el
  }
  window.onblur = function () {
    aI = false
  }
  window.onfocus = function () {
    aI = true
    D?.alive && j.dcixm(eX)
  }
  window.onload = function () {
    aJ = true
    j.CUdUO(d5)
    j.QWVoL(
      setTimeout,
      function () {
        !cU && (j.fVeRF(alert, j.DONmu), window.location.reload())
      },
      20000
    )
  }
  dD.oncontextmenu = () => false
  function em(fM) {
    cT = false
    cN.close()
    j.ZyXlP(en, fM)
  }
  function en(fM) {
    const fN = j.oyvSh.split('|')
    while (true) {
      switch (fN[fO++]) {
        case '0':
          dt.style.display = j.JXGKw
          continue
        case '1':
          dN.style.display = j.uzUxC
          continue
        case '2':
          dM.innerHTML = j.PnEPE(fM, j.kSjLx)
          continue
        case '3':
          dM.style.display = j.JXGKw
          continue
        case '4':
          e6.style.display = j.uzUxC
          continue
        case '5':
          dK.style.display = j.uzUxC
          continue
      }
      break
    }
  }
  function es() {
    const fM = {
        tcVqo: function (fO, fP) {
          return j.BlKzG(fO, fP)
        },
        nNPyP: 'servers',
        FEiFE: j.sTbog,
        snDHo: function (fO, fP) {
          return fO + fP
        },
        izOtC: j.rQVxh,
        YIUxp: function (fO, fP) {
          return fO + fP
        },
        KeOSl: function (fO, fP) {
          return j.iVEaW(fO, fP)
        },
        UoFme: j.jmZNE,
        bPbui: function (fO, fP) {
          return j.YjZIa(fO, fP)
        },
        poRlx: function (fO, fP) {
          return j.MBzgJ(fO, fP)
        },
        vaolT: function (fO, fP) {
          return j.rChoK(fO, fP)
        },
        ANCYk: function (fO, fP) {
          return fO + fP
        },
        NqRAF: j.jvAHa,
        TTHXX: j.CmMtN,
        fWFrG: function (fO, fP) {
          return j.ImCtF(fO, fP)
        },
        fdMvu: '<option disabled></option>',
      },
      fN = new XMLHttpRequest()
    fN.open('GET', ep)
    fN.onload = () => {
      let fO
      try {
        fO = fM.tcVqo(eq, fN.responseText)
      } catch (fP) {
        console.error(fP)
      }
      if (fO) {
        let fQ = '',
          fR = 0
        const fS = fO[fM.nNPyP].map((fU) => [fU.ip, fU.playerCount, fU.alias]),
          fT = fS.length
        for (let [fU, fV, fW] of fS) {
          let fX,
            fY,
            fZ,
            g0,
            g1 = fU.includes(fM.FEiFE)
          g1
            ? (g0 = fM.snDHo(
                fU.split('-')[2].split('.')[0] + fM.izOtC,
                fU.slice(-1)
              ))
            : ((fX = fU.split('-')[1].slice(1)),
              (fY = fU.split('-r')[1].split('.')[0]),
              (fZ = fU.slice(-1)),
              (g0 = fM.snDHo(
                fM.snDHo(fM.YIUxp(fM.KeOSl(fX, ':'), fY), ':'),
                fZ
              )))
          const g2 = g0.replace(fM.izOtC, ':') === d4 ? fM.UoFme : ''
          fQ += fM.bPbui(
            fM.poRlx(
              fM.YIUxp(
                fM.vaolT(
                  fM.ANCYk(
                    fM.YIUxp(
                      fM.ANCYk(fM.snDHo(fM.NqRAF, g0) + ':', g1 ? '1' : '0'),
                      "'"
                    ),
                    g2
                  ),
                  '>'
                ),
                fW
              ) + fM.TTHXX,
              fV
            ),
            '</option>'
          )
          fM.fWFrG(++fR, fT) && (fQ += fM.fdMvu)
        }
        dF.innerHTML = fQ
      }
    }
    fN.send()
  }
  dF.addEventListener(
    j.qWctJ,
    j.oKTyF(ck, function () {
      const [fM, fN, fO, fP] = dF.value.split(':')
      cN.switchServer(fM, fN, fO, +fP)
    })
  )
  function et(fM = false, fN = false, fO = false) {
    if (fM && D) {
      ch(dW)
      dW.classList.add(j.Uacqb)
      j.cUTnO(cm, {
        id: 'itemInfoName',
        text: bP(fM.name),
        parent: dW,
      })
      j.opfCs(cm, {
        id: j.nXOwb,
        text: fM.desc,
        parent: dW,
      })
      if (fO) {
      } else {
        if (fN) {
          j.xlZdz(cm, {
            class: 'itemInfoReq',
            text: !fM.type ? j.IdkZS : j.tWrGZ,
            parent: dW,
          })
        } else {
          for (let fP = 0, fQ = fM.req.length; fP < fQ; fP += 2) {
            j.cHvQk(cm, {
              class: j.EBIIj,
              html: j.YjZIa(
                j.zfazL(j.bWJII(fM.req[fP], j.UOEbi), fM.req[j.PFQiw(fP, 1)]),
                j.QQxnc
              ),
              parent: dW,
            })
          }
          fM.group.limit &&
            j.SQCEc(cm, {
              class: j.piexw,
              text: j.ebdvq(
                j.MBzgJ(D.itemCounts[fM.group.id] || 0, '/'),
                fM.group.limit
              ),
              parent: dW,
            })
        }
      }
    } else {
      dW.classList.remove('visible')
    }
  }
  function eu() {
    aw[0]
      ? (j.BDIfA(ch, eb),
        (eb.style.display = j.JXGKw),
        j.YxlxR(cm, {
          class: j.daiHg,
          text: aw[0].name,
          parent: eb,
        }),
        j.xlZdz(cm, {
          class: j.KwZdG,
          html: j.jBbSA,
          parent: eb,
          onclick: function () {
            cN.send(T, aw[0].sid, 0)
            aw.splice(0, 1)
            j.dcixm(eu)
          },
          hookTouch: true,
        }),
        cm({
          class: 'notifButton',
          html: j.rALWA,
          parent: eb,
          onclick: function () {
            cN.send(T, aw[0].sid, 1)
            aw.splice(0, 1)
            j.vivNx(eu)
          },
          hookTouch: true,
        }))
      : (eb.style.display = j.uzUxC)
  }
  function ev() {
    if (D?.alive) {
      j.WFYZD(eM)
      e9.style.display = j.uzUxC
      e1.style.display = j.JXGKw
      j.PlFGe(ch, e2)
      if (D.team) {
        for (let fM = 0, fN = ax.length; fM < fN; fM += 2) {
          const fO = fM
          let fP = j.opnLb(cm, {
            class: j.XUyIM,
            style: j.URthv(j.kClRF, j.jwSfU(ax[fO], D.sid) ? '#fff' : j.oWTdN),
            text: ax[j.zSBEV(fO, 1)],
            parent: e2,
          })
          D.isOwner &&
            j.byWmQ(ax[fO], D.sid) &&
            j.DuRwC(cm, {
              class: 'joinAlBtn',
              text: j.oSUhb,
              onclick: function () {
                cN.send(U, ax[fM])
              },
              hookTouch: true,
              parent: fP,
            })
        }
      } else {
        const fQ = ap.length
        if (fQ) {
          for (let fR = 0; j.qySax(fR, fQ); ++fR) {
            const fS = fR
            let fT = j.BDIfA(cm, {
              class: 'allianceItem',
              style: 'color:' + (ap[fS][j.AHXAm] == D.team ? '#fff' : j.oWTdN),
              text: ap[fS].sid,
              parent: e2,
            })
            j.cUTnO(cm, {
              class: j.ZLFMQ,
              text: j.GDRyH,
              onclick: function () {
                cN.send(S, ap[fS][j.AHXAm])
              },
              hookTouch: true,
              parent: fT,
            })
          }
        } else {
          cm({
            class: 'allianceItem',
            text: j.mttmj,
            parent: e2,
          })
        }
      }
      j.BxsyQ(ch, e3)
      D.team
        ? j.opnLb(cm, {
            class: j.bjURW,
            style: j.GhJhZ,
            text: D.isOwner ? j.EEqyd : j.KRbua,
            onclick: function () {
              aw = []
              j.dcixm(eu)
              cN.send(R)
            },
            hookTouch: true,
            parent: e3,
          })
        : (cm({
            tag: j.YpqTs,
            type: 'text',
            id: j.kBRTV,
            maxLength: 7,
            placeholder: j.ikWYa,
            ontouchstart: function (fU) {
              fU.preventDefault()
              fU.currentTarget.value = j
                .KzEnK(prompt, 'unique name', fU.currentTarget.value)
                .slice(0, 7)
            },
            parent: e3,
          }),
          j.xlZdz(cm, {
            tag: j.ZeIrO,
            class: 'allianceButtonM',
            style: j.BMChq,
            text: j.PQrgr,
            onclick: () =>
              cN.send(Q, document.getElementById('allianceInput').value),
            hookTouch: true,
            parent: e3,
          }))
    }
  }
  document.getElementById(j.jErdG).onclick = () => eB(0)
  document.getElementById(j.LoEsL).onclick = () => eB(1)
  function eC() {
    if (D) {
      j.xlZdz(ch, ea)
      let fM = eA,
        fN = fM ? cw : cv
      for (let fO = 0, fP = fN.length; j.MXvyN(fO, fP); ++fO) {
        const fQ = fO,
          fR = fN[fQ]
        if (fR.dontSell) {
          continue
        }
        let fS = j.oKTyF(cm, {
          id: k(j.QcVKY(j.xlyhw(j.HHchg, fQ), j.qyMik(c5))),
          class: j.fKYbo,
          onmouseout: function () {
            j.EQdHb(et)
          },
          onmouseover: function () {
            et(fR, false, true)
          },
          parent: ea,
        })
        cl(fS, true)
        j.rUyDI(cm, {
          tag: j.vfAgl,
          class: j.EVqQV,
          src: j.Xerqj(
            cM,
            j.xlyhw(
              j.XtNan(
                j.eLehk(j.OXmMH(j.rFPSX, fM ? j.yrQFU : j.bdcgo), fR.id),
                fR.topSprite ? '_p' : ''
              ),
              j.IQuPP
            )
          ),
          parent: fS,
        })
        cm({
          tag: j.emHWv,
          text: fR.name,
          parent: fS,
        })
        if (fM ? !D.tails[fR.id] : !D.skins[fR.id]) {
          j.qhHhl(cm, {
            class: 'joinAlBtn',
            style: j.ZomzZ,
            text: j.sNVKd,
            onclick: function () {
              cN.send(W, 1, fR.id, fM)
            },
            hookTouch: true,
            parent: fS,
          })
          cm({
            tag: 'span',
            class: 'itemPrice',
            text: fN[fQ].price,
            parent: fS,
          })
        } else {
          j.RKozf(fM ? D.tailIndex : D.skinIndex, fR.id)
            ? j.XKPGF(cm, {
                class: j.ZLFMQ,
                style: j.ZomzZ,
                text: j.aEApG,
                onclick: function () {
                  cN.send(W, 0, 0, fM)
                },
                hookTouch: true,
                parent: fS,
              })
            : j.opfCs(cm, {
                class: j.ZLFMQ,
                style: j.ZomzZ,
                text: j.kNCWQ,
                onclick: function () {
                  cN.send(W, 0, fR.id, fM)
                },
                hookTouch: true,
                parent: fS,
              })
        }
      }
    }
  }
  function eD() {
    e9.style.display = 'none'
    e1.style.display = j.uzUxC
    j.PbcPQ(eM)
  }
  function eE(fM, fN) {
    fM && (fN ? (D.weapons = fM) : (D.items = fM))
    for (let fO = 0; j.qlQuI(fO, cP); ++fO) {
      document.getElementById(j.DdvLE + j.hKZTg(cO, fO)).style.display =
        j.OeJrW(D.items.indexOf(cs.list[fO].id), 0) ? j.xOuaI : j.uzUxC
    }
    for (let fP = 0; j.cQCpi(fP, cO); ++fP) {
      document.getElementById(j.DTNAK(j.DdvLE, fP)).style.display = j.vnyBa(
        D.weapons[cs.weapons[fP].type],
        cs.weapons[fP].id
      )
        ? 'inline-block'
        : j.uzUxC
    }
  }
  function eF(fM = false) {
    dg = fM
    di = fM ? window.devicePixelRatio || 1 : 1
    dG.checked = fM
    j.UrJOl(d7, j.ogLix, fM.toString())
    j.Khdmn(eP)
  }
  function eG() {
    let fM = ''
    for (let fN = 0; j.irdNO(fN, bV); ++fN) {
      j.ZijPs(fN, dn)
        ? (fM +=
            j.eLehk(
              j.TmPok(
                j.zlxKw(
                  "<div class='skinColorItem activeSkin' style='background-color:",
                  bU[fN]
                ),
                j.LqyZL
              ),
              fN
            ) + j.PugsM)
        : (fM += j.JIxEL(
            j.bpBsw(
              j.lGopX(
                j.rQggQ(
                  "<div class='skinColorItem' style='background-color:",
                  bU[fN]
                ),
                j.LqyZL
              ),
              fN
            ),
            j.PugsM
          ))
    }
    e7.innerHTML = fM
  }
  function eH(fM) {
    dn = fM
    j.FGPkx(d7, j.moQVz, fM)
    j.Ncgjy(eG)
  }
  window[j.ZfqSh] = eH
  function eL() {
    if (!ak) {
      if (j.auNYP(eJ.style.display, 'block')) {
        ;(eK = eI.value) && cN.send(I, j.Xerqj(ai, eK).slice(0, 30))
        j.QkAeh(eM)
      } else {
        const fM = j.MbdUJ.split('|')
        while (true) {
          switch (fM[fN++]) {
            case '0':
              j.CUdUO(eX)
              continue
            case '1':
              eJ.style.display = j.JXGKw
              continue
            case '2':
              eI.focus()
              continue
            case '3':
              e1.style.display = j.uzUxC
              continue
            case '4':
              e9.style.display = 'none'
              continue
          }
          break
        }
      }
    } else {
      j.Gghbq(
        setTimeout,
        function () {
          ;(eK = prompt(j.GVPYx)) && cN.send(I, j.QPpwB(ai, eK).slice(0, 30))
        },
        1
      )
    }
    eI.value = ''
  }
  function eM() {
    eI.value = ''
    eJ.style.display = j.uzUxC
  }
  window.addEventListener(j.eQSrD, j.jBheQ(ck, eP))
  function eP() {
    dp = window.innerWidth
    dq = window.innerHeight
    let fM = j.TXpqY(j.RvykX(aX, j.dEmgc(dp, be), dq / bf), di)
    eN = dD.width = j.IoCHR(dp, di)
    eO = dD.height = j.ieJUg(dq, di)
    dD.style.width = j.tTpqx(dp, 'px')
    dD.style.height = dq + 'px'
    dE.setTransform(
      fM,
      0,
      0,
      fM,
      j.nTVte(j.ITHgb(j.iXOZf(dp, di), j.DYWPn(be, fM)), 2),
      j.gkEGu(j.nVgcG(j.UHspH(dq, di), j.VnPFh(bf, fM)), 2)
    )
  }
  j.WYMiF(eP)
  j.kSjEr(eQ, false)
  function eQ(fM) {
    ;(ak = fM) ? dL.classList.add('touch') : dL.classList.remove('touch')
  }
  function eS(fM) {
    fM.preventDefault()
    fM.stopPropagation()
    j.DuRwC(eQ, true)
    for (let fN = fM.changedTouches.length; fN--; ) {
      let { identifier: fO, pageX: fP, pageY: fQ } = fM.changedTouches[fN]
      if (j.QsbAn(fO, cq.id)) {
        cq.currentX = fP
        cq.currentY = fQ
        j.nqalX(eZ)
      } else {
        j.zHzTz(fO, cr.id) && ((cr.currentX = fP), (cr.currentY = fQ), (az = 1))
      }
    }
  }
  function eT(fM) {
    fM.preventDefault()
    fM.stopPropagation()
    j.YkgzJ(eQ, true)
    for (let fN = fM.changedTouches.length; fN--; ) {
      let { identifier: fO, pageX: fP, pageY: fQ } = fM.changedTouches[fN]
      if (j.ZCyTA(fP, document.body.scrollWidth / 2) && j.RGXUN(cq.id, -1)) {
        cq.id = fO
        cq.startX = cq.currentX = fP
        cq.startY = cq.currentY = fQ
        eZ()
      } else {
        if (fP > j.dEmgc(document.body.scrollWidth, 2) && j.ZtUez(cr.id, -1)) {
          const fR = j.inyEb.split('|')
          while (true) {
            switch (fR[fS++]) {
              case '0':
                continue
              case '1':
                cr.id = fO
                continue
              case '2':
                cr.startX = cr.currentX = fP
                continue
              case '3':
                j.ZCyTA(D.buildIndex, 0) && ((az = 1), j.aClKh(eR))
                continue
              case '4':
                cr.startY = cr.currentY = fQ
                continue
            }
            break
          }
        }
      }
    }
  }
  function eU(fM) {
    fM.preventDefault()
    fM.stopPropagation()
    j.fjMKw(eQ, true)
    for (let fN = fM.changedTouches.length; fN--; ) {
      let { identifier: fO } = fM.changedTouches[fN]
      if (fO == cq.id) {
        cq.id = -1
        eZ()
      } else {
        j.awqaZ(fO, cr.id) &&
          ((cr.id = -1),
          D.buildIndex >= 0 && ((az = 1), j.LOvyu(eR)),
          (az = 0),
          j.TsItk(eR))
      }
    }
  }
  dD.addEventListener(j.mbGMG, ck(eS), false)
  dD.addEventListener(j.lDTjB, j.NQASL(ck, eT), false)
  dD.addEventListener(j.JYeSe, j.yVzNm(ck, eU), false)
  dD.addEventListener('touchcancel', j.Bljbl(ck, eU), false)
  dD.addEventListener('touchleave', j.HzTjj(ck, eU), false)
  dD.addEventListener(
    j.THiUV,
    function fM(fN) {
      const fO = j.BYxej.split('|')
      while (true) {
        switch (fO[fP++]) {
          case '0':
            dj = fN.clientX
            continue
          case '1':
            dk = fN.clientY
            continue
          case '2':
            j.FwcfH(eQ, false)
            continue
          case '3':
            fN.preventDefault()
            continue
          case '4':
            fN.stopPropagation()
            continue
        }
        break
      }
    },
    false
  )
  dD.addEventListener(
    'mousedown',
    function fN(fO) {
      j.ofhMR(eQ, false)
      j.zXwJd(az, 1) && ((az = 1), j.rkVWl(eR))
    },
    false
  )
  dD.addEventListener(
    'mouseup',
    function fO(fP) {
      eQ(false)
      j.fOxVD(az, 0) && ((az = 0), j.WYMiF(eR))
    },
    false
  )
  function eV() {
    let fP = 0,
      fQ = 0
    j.EHVNs(cq.id, -1)
      ? ((fP += cq.currentX - cq.startX),
        (fQ += j.aOnIq(cq.currentY, cq.startY)))
      : bQ.forEach(([fR, fS], fT) => {
          fP += j.HqUzG(!!aA[fT], fR)
          fQ += j.IoCHR(!!aA[fT], fS)
        })
    return j.RzBng(j.jFcrF(fP, 0), j.gmuGW(fQ, 0))
      ? undefined
      : j.YPsJG(bJ, ae(fQ, fP), 2)
  }
  function eW() {
    if (!D) {
      return 0
    }
    if (j.bUeFh(cr.id, -1)) {
      aH = j.bKtTd(ae, cr.currentY - cr.startY, j.psdRq(cr.currentX, cr.startX))
    } else {
      !D.lockDir &&
        !ak &&
        (aH = j.iQRHy(ae, j.DPNdA(dk, j.NVucF(dq, 2)), dj - dp / 2))
    }
    return j.PIsak(bJ, j.ybsOT(aH, 0), 2)
  }
  function eX() {
    aA = {}
    cN.rawSend(cX)
  }
  function eY() {
    return (
      j.rkbaK(e1.style.display, j.JXGKw) && j.utTAf(eJ.style.display, j.JXGKw)
    )
  }
  window.addEventListener(
    j.lGFSj,
    j.YDQtL(ck, function fP(fQ) {
      let fR = fQ.which || fQ.keyCode || 0
      if (j.cmSEZ(fR, 27)) {
        j.LOvyu(eD)
      } else {
        if (D?.alive && j.rkVWl(eY)) {
          if (!aA[fR]) {
            aA[fR] = 1
            if (j.pHguj(fR, 69)) {
              cN.send(P, 1)
            } else {
              if (fR == 67) {
                ex || (ex = {})
                ex.x = D.x
                ex.y = D.y
              } else {
                if (j.ZijPs(fR, 88)) {
                  D.lockDir = D.lockDir ? 0 : 1
                  cN.send(P, 0)
                } else {
                  if (j.HTJRm(D.weapons[j.bahUR(fR, 49)], undefined)) {
                    f1(D.weapons[j.qTCJV(fR, 49)], true)
                  } else {
                    if (
                      j.byWmQ(
                        D.items[j.eGwfy(fR - 49, D.weapons.length)],
                        undefined
                      )
                    ) {
                      j.SQCEc(
                        f1,
                        D.items[j.VbRtn(j.bahUR(fR, 49), D.weapons.length)]
                      )
                    } else {
                      if (j.nNHxn(fR, 81)) {
                        j.fjMKw(f1, D.items[0])
                      } else {
                        if (j.QVszi(fR, 82)) {
                          f0()
                        } else {
                          if (bQ.has(fR)) {
                            j.vivNx(eZ)
                          } else {
                            j.CUWSe(fR, 32) && ((az = 1), j.RzatS(eR))
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    })
  )
  window.addEventListener(
    'keyup',
    j.FHtFk(ck, function fQ(fR) {
      if (D?.alive) {
        let fS = fR.which || fR.keyCode || 0
        if (j.eRvjI(fS, 13)) {
          j.dcixm(eL)
        } else {
          if (j.JuxHY(eY)) {
            if (aA[fS]) {
              aA[fS] = 0
              if (bQ.has(fS)) {
                j.WFYZD(eZ)
              } else {
                j.vnyBa(fS, 32) && ((az = 0), j.EQdHb(eR))
              }
            }
          }
        }
      }
    })
  )
  function eZ() {
    let fR = j.DCuWk(eV)
    ;(av == undefined ||
      fR == undefined ||
      j.JTjZa(j.dJCqa(ab, fR - av), 0.3)) &&
      (cN.send(a0, fR), (av = fR))
  }
  function f0() {
    cN.rawSend(cY)
  }
  function f1(fR, fS = false) {
    cN.send(N, fR, fS)
  }
  function f2() {
    const fR = j.vrory.split('|')
    while (true) {
      switch (fR[fS++]) {
        case '0':
          dP.innerText = D.points
          continue
        case '1':
          dQ.innerText = D.food
          continue
        case '2':
          dS.innerText = D.stone
          continue
        case '3':
          dT.innerText = D.kills
          continue
        case '4':
          dR.innerText = D.wood
          continue
      }
      break
    }
  }
  function f4(fR = 0, fS = 0) {
    const fT = {
      KULxN: function (fU) {
        return j.YXTgq(fU)
      },
      wKciJ: function (fU, fV, fW) {
        return j.aOtNm(fU, fV, fW)
      },
      JqUWJ: function (fU, fV) {
        return j.XHHPl(fU, fV)
      },
      LMjYQ: function (fU, fV) {
        return fU + fV
      },
      jFygo: j.GmNBX,
      jLULh: function (fU, fV) {
        return j.aZbnL(fU, fV)
      },
      KIMMk: function (fU, fV) {
        return j.iUEcp(fU, fV)
      },
    }
    D.upgradePoints = fR
    D.upgrAge = fS
    if (j.UzvnA(fR, 0)) {
      f3.length = 0
      j.TILOS(ch, dZ)
      let fU = 0,
        fV = cO
      for (; fU < fV; ++fU) {
        j.ZijPs(cs.weapons[fU].age, fS) &&
          (j.znVEC(cs.weapons[fU].pre, undefined) ||
            j.DjxtZ(D.weapons.indexOf(cs.weapons[fU].pre), 0)) &&
          ((j.fzGQC(cm, {
            id: j.rQggQ(j.GmNBX, fU),
            class: j.DdvLE,
            onmouseout: function () {
              fT.KULxN(et)
            },
            parent: dZ,
          }).style.backgroundImage = document.getElementById(
            j.VvhEv(j.DdvLE, fU)
          ).style.backgroundImage),
          f3.push(fU))
      }
      for (fU = 0, fV = cP; j.Yscdn(fU, fV); ++fU) {
        if (
          j.iBraS(cs.list[fU].age, fS) &&
          (j.QsbAn(cs.list[fU].pre, undefined) ||
            j.MxywZ(D.items.indexOf(cs.list[fU].pre), 0))
        ) {
          let fW = j.VqriP(cO, fU)
          cm({
            id: j.GmNBX + fW,
            class: 'actionBarItem',
            onmouseout: () => et(),
            parent: dZ,
          }).style.backgroundImage = document.getElementById(
            j.hGMYh('actionBarItem', fW)
          ).style.backgroundImage
          f3.push(fW)
        }
      }
      fV = f3.length
      for (fU = 0; j.QzsLL(fU, fV); ++fU) {
        ;(function (fX) {
          let fZ = document.getElementById(fT.LMjYQ(fT.jFygo, fX))
          fZ.onmouseover = function () {
            cs.weapons[fX]
              ? fT.wKciJ(et, cs.weapons[fX], true)
              : fT.JqUWJ(et, cs.list[fX - cO])
          }
          fZ.onclick = fT.jLULh(ck, function () {
            cN.send(O, fX)
          })
          fT.KIMMk(cl, fZ)
        })(f3[fU])
      }
      fV
        ? ((dZ.style.display = j.JXGKw),
          (e0.style.display = j.JXGKw),
          (e0.innerHTML = j.ZQfGK(j.ahIcB, fR) + ')'))
        : ((dZ.style.display = j.uzUxC),
          (e0.style.display = j.uzUxC),
          j.aClKh(et))
    } else {
      dZ.style.display = j.uzUxC
      e0.style.display = 'none'
      j.RzatS(et)
    }
  }
  function f5(fR = -1, fS = -1, fT = -1) {
    j.rkbaK(fR, -1) && (D.XP = fR)
    j.qAGoY(fS, -1) && (D.maxXP = fS)
    j.HTJRm(fT, -1) && (D.age = fT)
    fT == b4
      ? ((dX.innerHTML = j.QdgOG), (dY.style.width = j.szvUv))
      : ((dX.innerHTML = j.EbWND(j.zAmNt, D.age)),
        (dY.style.width = j.HAIdZ(D.XP, D.maxXP) * 100 + '%'))
  }
  f8 = Date.now()
  function f9() {
    aD = Date.now()
    aB = j.XYosM(aD, f8)
    aC = 0.002 * aB
    f8 = aD
    if (j.ynOMq(aj, 120)) {
      aj += 0.1 * aB
      let g1 = af(aj)
      e6.style.fontSize = j.LlfiG(
        j.OHfaO(j.Xgpmp(g1 > 120, 120), j.iXOZf(j.OmzWt(g1, 120), g1)),
        'px'
      )
    }
    if (D) {
      j.xzodS(j.DPNdA(aD, aE), b8) && ((aE = aD), cN.send(L, j.PbcPQ(eW)))
      const { x: g2, y: g3 } = D
      let g4 = j.UdaKS(bL, dl, dm, g2, g3),
        g5 = bK(g2, g3, dl, dm),
        g6 = j.YXCsu(j.EmlCM(g4, 0.01), aB),
        g7 = j.uFNtZ(j.TpAIF(j.qPoYF(g6, g4), g4), j.uawQD(j.THbmb(g6, g4), g6))
      dl = j.hGMYh(
        j.AXnwM(j.xZVek(g4, 0.05), dl + g7 * j.RJbXG(aa, g5)),
        j.iRpmT(j.wrvWl(g4, 0.05), g2)
      )
      dm = j.DTNAK(
        (g4 > 0.05) * j.GQHpC(dm, j.ykOiR(g7, a9(g5))),
        j.RzBng(j.THbmb(g4, 0.05), g3)
      )
    } else {
      dl = bO
      dm = bO
    }
    let fR = j.psdRq(aD, ba),
      fS = j.zZXlM(ao, am),
      fT = 0
    for (fT = fS; fT--; ) {
      if ((F = an[fT] || al[j.WKdlI(fT, ao)])?.visible) {
        if (F.forcePos) {
          F.x = F.x2
          F.y = F.y2
          F.dir = F.d2
        } else {
          let g8 = j.eYyHm((F.dt += aB), 170)
          const g9 = j.LufVW(
            j.PidIV(g8 > 1.7, 1.7),
            j.JYBap(j.ScIsg(g8, 1.7), g8)
          )
          F.x = j.qCPTJ(F.x1, j.ITHgb(F.x2, F.x1) * g9)
          F.y = j.DTNAK(F.y1, j.EmlCM(j.TiwnJ(F.y2, F.y1), g9))
          g8 = (fR - F.t1) / j.pNuFL(F.t2, F.t1)
          F.dir = j.BdWWf(
            cn,
            F.d2,
            F.d1,
            j.wVUnG(j.rOpUP(g8 < 1.2, g8), j.yfusk(1.2, g8) * 1.2)
          )
        }
      }
    }
    const fU = dl - c6,
      fV = j.WKdlI(dm, c7),
      fW = j.wKmGW(bo, fV),
      fX = j.XYosM(bN, bo) - fV
    fW <= 0 && j.OeJrW(fX, bf)
      ? ((dE.fillStyle = '#b6db66'), dE.fillRect(0, 0, be, bf))
      : fX <= 0
      ? ((dE.fillStyle = j.peIjU), dE.fillRect(0, 0, be, bf))
      : fW >= bf
      ? ((dE.fillStyle = j.QQtkg), dE.fillRect(0, 0, be, bf))
      : j.gjUwY(fW, 0)
      ? ((dE.fillStyle = '#fff'),
        dE.fillRect(0, 0, be, fW),
        (dE.fillStyle = j.ykcdI),
        dE.fillRect(0, fW, be, j.bgYuJ(bf, fW)))
      : ((dE.fillStyle = j.ykcdI),
        dE.fillRect(0, 0, be, fX),
        (dE.fillStyle = '#dbc666'),
        dE.fillRect(0, fX, be, j.sIqhK(bf, fX)))
    if (cS) {
      aF += j.TUnlf(j.lJzWG(aG, bp), aB)
      if (j.SGNno(aF, bl)) {
        aF = bl
        aG = -1
      } else {
        aF <= 1 && (aF = aG = 1)
      }
      dE.globalAlpha = 1
      dE.fillStyle = j.peIjU
      j.SFnMS(fe, fU, fV, dE, bq)
      dE.fillStyle = j.mRbla
      j.cxGce(fe, fU, fV, dE, j.oQWIi(aF - 1, 250))
    }
    dE.lineWidth = 4
    dE.strokeStyle = j.dtzcL
    dE.globalAlpha = 0.06
    dE.beginPath()
    for (let ga = -dl; j.qlQuI(ga, be); ga += c8) {
      j.JTjZa(ga, 0) && (dE.moveTo(ga, 0), dE.lineTo(ga, bf))
    }
    for (let gb = -dm; j.qoEiG(gb, bf); gb += c8) {
      dE.moveTo(0, gb)
      dE.lineTo(be, gb)
    }
    dE.stroke()
    dE.globalAlpha = 1
    dE.strokeStyle = ef
    j.vbVXg(ff, -1, fU, fV)
    dE.globalAlpha = 1
    dE.lineWidth = eh
    fc(0, fU, fV)
    j.bPeDK(fg, fU, fV, 0)
    dE.globalAlpha = 1
    for (fT = am; fT--; ) {
      if ((F = al[fT])?.active && F.visible) {
        F.animate(aB)
        dE.save()
        dE.translate(F.x - fU, F.y - fV)
        dE.rotate(j.eKiGn(j.VfjQD(F.dir, F.dirPlus), aT))
        let gc = c1[F.index]
        if (gc?.isLoaded) {
          const gd = j.lJzWG(j.TjEYT(F.scale, 1.2), F.spriteMlt || 1),
            ge = j.iXOZf(gd, 2)
          dE.drawImage(gc, -gd, -gd, ge, ge)
        } else {
          if (!gc?.isLoading) {
            let gf = new Image()
            gf.onload = function () {
              gf.isLoading = false
              gf.isLoaded = true
              gf.onload = null
            }
            gf.setAttribute(j.IBJRd, j.wgrfF)
            gf.src = j.UZAwc(cM, j.bWJII(j.kZCIh(j.qcWtf, F.src), j.IQuPP))
            gf.isLoading = true
            gc = gf
            c1[F.index] = gc
          }
        }
        dE.restore()
      }
    }
    j.bPeDK(ff, 0, fU, fV)
    j.vLoyx(fc, 1, fU, fV)
    j.dPgRF(ff, 1, fU, fV)
    j.bPeDK(fg, fU, fV, 1)
    ff(2, fU, fV)
    j.SHjLv(ff, 3, fU, fV)
    dE.fillStyle = j.dtzcL
    dE.globalAlpha = 0.09
    j.MaiWG(fU, 0) && dE.fillRect(0, 0, -fU, bf)
    const fY = j.WAMon(bN, fU),
      fZ = j.pNuFL(bN, fV)
    if (j.rVXQM(fY, be)) {
      const gg = j.fMgmV(j.UzvnA(0, -fV), -fV)
      dE.fillRect(fY, gg, j.aOnIq(be, fY), j.eKiGn(bf, gg))
    }
    j.wrvWl(fV, 0) && dE.fillRect(-fU, 0, j.QbQtd(be, fU), -fV)
    if (j.MaiWG(fZ, bf)) {
      let gh = j.PidIV(j.xZVek(0, -fU), -fU),
        gi = 0
      if (j.BYnUq(fY, be)) {
        gi = j.OslXl(be, fY)
      }
      dE.fillRect(gh, fZ, j.DPNdA(be, gh) - gi, j.mrYCu(bf, fZ))
    }
    dE.globalAlpha = 1
    dE.fillStyle = 'rgba(0, 0, 70, 0.35)'
    dE.fillRect(0, 0, be, bf)
    dE.strokeStyle = eg
    for (fT = fS; fT--; ) {
      if ((F = an[fT] || al[j.zJvQO(fT, ao)])?.visible) {
        const {
          x: gj,
          y: gk,
          scale: gl,
          isLeader: gm,
          skinIndex: gn,
          team: go,
          name: gp,
          health: gq,
          maxHealth: gr,
          nameScale: gs,
          iconIndex: gt,
        } = F
        if (j.tUEEa(gn, 10) || j.pHguj(F, D) || (go && j.gmuGW(go, D.team))) {
          const gu = j.kZCIh(
              j.ONfur(
                cV ? (F.sid ? j.DAPKo('{', F.sid) + '} ' : '') : '',
                go ? j.tTpqx(j.HnIFM('[', go), '] ') : ''
              ),
              gp || ''
            ),
            gv = gj - fU
          if (gu) {
            dE.font = j.cdXLr(gs, 30) + j.rJLRk
            dE.fillStyle = j.QQtkg
            dE.textBaseline = 'middle'
            dE.textAlign = j.QotuY
            dE.lineWidth = gs ? 11 : 8
            dE.lineJoin = 'round'
            const gw = j.TiwnJ(j.mkYQV(gk, fV), gl) - bm
            dE.strokeText(gu, gv, gw)
            dE.fillText(gu, gv, gw)
            gm &&
              bZ[j.PdfFG][j.GVYjR] &&
              dE.drawImage(
                bZ.crown,
                j.aOnIq(
                  j.aOnIq(j.WtTGE(gv, ce), dE.measureText(gu).width / 2),
                  br
                ),
                j.XYosM(j.KkcKG(gw, ce), 5),
                bd,
                bd
              )
            j.rCgjK(gt, 1) &&
              bZ.skull.isLoaded &&
              dE.drawImage(
                bZ.skull,
                gv - ce + j.NVucF(dE.measureText(gu).width, 2) + br,
                j.eGwfy(j.aKyRE(gw, ce), 5),
                bd,
                bd
              )
          }
          if (gq) {
            dE.fillStyle = eg
            const gx = j.KkcKG(gv, bs),
              gy = j.UWUga(j.koVEP(gk, fV) + gl, bm)
            dE.roundRect(j.VbRtn(gx, ca), gy, cd, 17, 8)
            dE.fill()
            dE.fillStyle =
              j.UQDdH(F, D) || (go && j.nNHxn(go, D.team)) ? j.TgGnp : j.qvQpq
            dE.roundRect(gx, j.ZxCIq(gy, ca), j.eTXlG(c9, gq / gr), cc, 7)
            dE.fill()
          }
        }
      }
    }
    cR.update(aB, dE, fU, fV)
    for (fT = ao; fT--; ) {
      if ((F = an[fT])?.visible && F.chatCountdown) {
        if (j.tGfST((F.chatCountdown -= aB), 0)) {
          F.chatCountdown = 0
        }
        dE.font = j.fkMBN
        const gz = j.quYiC(dE.measureText(F.chatMessage).width, 17),
          gA = j.aOnIq(F.x, fU),
          gB = j.YxlHt(j.qRnOT(j.mkYQV(F.y, F.scale), fV), 90)
        dE.textBaseline = j.XuiNQ
        dE.textAlign = j.QotuY
        dE.fillStyle = j.oEYLj
        dE.roundRect(gA - j.VrfAx(gz, 2), j.mrYCu(gB, 23.5), gz, 47, 6)
        dE.fill()
        dE.fillStyle = j.QQtkg
        dE.fillText(F.chatMessage, gA, gB)
      }
    }
    if (D?.alive) {
      const { width: gC, height: gD } = e4
      e8.clearRect(0, 0, gC, gD)
      e8.strokeStyle = j.QQtkg
      e8.lineWidth = 4
      for (fT = ey.length; fT--; ) {
        ;(ez = ey[fT]).update(e8, aB)
      }
      e8.globalAlpha = 1
      e8.fillStyle = j.QQtkg
      j.wGdkp(
        ft,
        j.UHspH(j.zboGQ(D.x, bN), gC),
        j.ACjVO(j.zboGQ(D.y, bN), gD),
        7,
        e8,
        true
      )
      e8.fillStyle = 'rgba(255,255,255,0.35)'
      if (au && D.team) {
        let gE = au.length
        for (fT = 0; fT < gE; fT += 2) {
          ft(
            j.pCSho(j.nGYtW(au[fT], bN), gC),
            j.HqUzG(j.RKBOs(au[j.DrzPw(fT, 1)], bN), gD),
            7,
            e8,
            true
          )
        }
      }
      ew &&
        ((e8.fillStyle = '#fc5553'),
        (e8.font = j.TbEuS),
        (e8.textBaseline = j.XuiNQ),
        (e8.textAlign = j.QotuY),
        e8.fillText(
          'x',
          j.IoCHR(j.VjFTX(ew.x, bN), gC),
          j.URopu(ew.y, bN) * gD
        ))
      if (ex) {
        const gF = j.wnyTy.split('|')
        while (true) {
          switch (gF[gG++]) {
            case '0':
              e8.textBaseline = j.XuiNQ
              continue
            case '1':
              e8.fillText(
                'x',
                j.TpAIF(j.nTVte(ex.x, bN), gC),
                j.XBZsM(ex.y, bN) * gD
              )
              continue
            case '2':
              e8.textAlign = j.QotuY
              continue
            case '3':
              e8.font = j.TbEuS
              continue
            case '4':
              e8.fillStyle = j.QQtkg
              continue
          }
          break
        }
      }
    }
    j.ImCtF(cq.id, -1) && fb(cq.startX, cq.startY, cq.currentX, cq.currentY)
    j.ImCtF(cr.id, -1) &&
      j.xXihH(fb, cr.startX, cr.startY, cr.currentX, cr.currentY)
    f7 += j.wpfNa(j.WtTGE(C === 'n' ? 1 : 0, f7), 40)
    const g0 = dE.getTransform()
    dE.setTransform(1, 0, 0, 1, 0, 0)
    dE.fillStyle = 'rgba(' + f6.map((gH) => gH * f7).join(', ') + ')'
    dE.fillRect(0, 0, eN, eO)
    dE.setTransform(g0)
    j.KJkvm(fF, f9)
  }
  function fb(fR, fS, fT, fU) {
    dE.save()
    dE.setTransform(1, 0, 0, 1, 0, 0)
    dE.scale(di, di)
    dE.beginPath()
    dE.arc(fR, fS, fa, 0, aV, false)
    dE.closePath()
    dE.fillStyle = j.YbiqK
    dE.fill()
    let fV = fT - fR,
      fW = j.qRnOT(fU, fS),
      fX = a8(j.zfazL(ac(fV, 2), j.LpYfi(ac, fW, 2))),
      fY = j.lXESI(fX, fa) ? j.eYyHm(fX, fa) : 1
    fV /= fY
    fW /= fY
    dE.beginPath()
    dE.arc(j.hKZTg(fR, fV), j.pdiSo(fS, fW), j.bKlgl(fa, 0.5), 0, aV, false)
    dE.closePath()
    dE.fillStyle = 'white'
    dE.fill()
    dE.restore()
  }
  function fc(fR, fS, fT) {
    for (let fU = as.length; fU--; ) {
      if ((F = as[fU])?.active && j.zhGmK(F.layer, fR) && F.update(aB)) {
        const fV = j.pWkqr(F.x, fS),
          fW = j.TiwnJ(F.y, fT)
        if (j.KqxrF(fA, fV, fW, F.scale)) {
          const fX = j.UScNe.split('|')
          while (true) {
            switch (fX[fY++]) {
              case '0':
                dE.restore()
                continue
              case '1':
                j.zkbXV(fd, 0, 0, F, dE)
                continue
              case '2':
                dE.save()
                continue
              case '3':
                dE.translate(fV, fW)
                continue
              case '4':
                dE.rotate(F.dir)
                continue
            }
            break
          }
        }
      }
    }
  }
  function fd(fR, fS, { src: fT, indx: fU, scale: fV }, fW) {
    if (fT) {
      let fX = cs.projectiles[fU].src,
        fY = bY[fX]
      if (!fY) {
        const fZ = j.HdTIT.split('|')
        while (true) {
          switch (fZ[g0++]) {
            case '0':
              fY = new Image()
              continue
            case '1':
              bY[fX] = fY
              continue
            case '2':
              fY.setAttribute(j.IBJRd, 'anonymous')
              continue
            case '3':
              fY.src = cM(j.TcTre(j.dZyth(j.LHgGN, fX), j.IQuPP))
              continue
            case '4':
              fY.onload = function () {
                fY.isLoaded = true
              }
              continue
          }
          break
        }
      }
      fY.isLoaded &&
        fW.drawImage(
          fY,
          j.eKiGn(fR, j.MnMGJ(fV, 2)),
          j.HNFdV(fS, j.zboGQ(fV, 2)),
          fV,
          fV
        )
    } else {
      j.jFcrF(fU, 1) && ((fW.fillStyle = j.aZfqN), j.KOuyz(ft, fR, fS, fV, fW))
    }
  }
  function fe(fR, fS, fT, fU) {
    const fV = bv + fU,
      fW = j.wKmGW(j.XjFUh(bO, fS), j.URopu(fV, 2))
    j.zWusK(fW, bf) && j.fhxSj(fW, fV) > 0 && fT.fillRect(0, fW, be, fV)
  }
  function ff(fR, fS, fT) {
    for (let fU = ar; fU--; ) {
      if ((F = aq[fU])?.active) {
        const fV = j.VkWIg(j.SaRqN(F.x, F.xWiggle), fS),
          fW = j.WAMon(j.mOGax(F.y, F.yWiggle), fT)
        j.NJXQM(fR, 0) && F.update(aB)
        if (
          j.RxeXl(F.layer, fR) &&
          j.cebfT(fA, fV, fW, j.uUEIe(F.scale, F.blocker || 0))
        ) {
          dE.globalAlpha = F.hideFromEnemy ? 0.6 : 1
          if (F.isItem) {
            let fX = j.oKTyF(fr, F)
            dE.save()
            dE.translate(fV, fW)
            dE.rotate(F.dir)
            dE.drawImage(fX, -(fX.width / 2), -(fX.height / 2))
            F.blocker &&
              ((dE.strokeStyle = j.IWyeh),
              (dE.globalAlpha = 0.3),
              (dE.lineWidth = 6),
              j.TZHon(ft, 0, 0, F.blocker, dE, false, true))
            dE.restore()
          } else {
            let fY = j.uqKWC(fq, F)
            dE.drawImage(
              fY,
              j.XYosM(fV, fY.width / 2),
              j.izITC(fW, j.ulkai(fY.height, 2))
            )
          }
        }
      }
    }
  }
  function fg(fR, fS, fT) {
    dE.globalAlpha = 1
    for (let fU = ao; fU--; ) {
      if ((F = an[fU])?.zIndex == fT) {
        F.animate(aB)
        if (F.visible) {
          const fV = j.lVcrM.split('|')
          while (true) {
            switch (fV[fW++]) {
              case '0':
                F.skinRot += aC
                continue
              case '1':
                dE.restore()
                continue
              case '2':
                dE.save()
                continue
              case '3':
                dE.rotate((j.ZtUez(F, D) ? eW() : F.dir) + F.dirPlus)
                continue
              case '4':
                dE.translate(j.cOzGn(F.x, fR), j.RVHrq(F.y, fS))
                continue
              case '5':
                j.QWVoL(fh, F, dE)
                continue
            }
            break
          }
        }
      }
    }
  }
  function fh(fR, fS = dE) {
    fS.lineWidth = eh
    fS.lineJoin = 'miter'
    const fT = cs.weapons[fR.weaponIndex],
      fU = j.loFhA(aU, fT.armS || 1),
      fV = fR.scale
    fR.tailIndex && j.cebfT(fm, fR.tailIndex, fS, fR)
    if (j.irdNO(fR.buildIndex, 0) && !fT.aboveHand) {
      j.cLiCz(fn, fT, bC[fR.weaponVariant].src, fV, 0, fS)
      fT.projectile != undefined &&
        !fT.hideProjectile &&
        j.Xqyyf(fd, fV, 0, cs.projectiles[fT.projectile], dE)
    }
    fS.fillStyle = bU[fR.skinColor]
    j.BdWWf(ft, fV * j.MMGYT(aa, fU), j.pqtnE(fV, j.pJNtl(a9, fU)), 14)
    const fW = j.OJMrw(fV, j.MXvyN(fR.buildIndex, 0) ? fT.hndD || 1 : 1),
      fX = j.YXCsu(-fU, j.dMHkv(fR.buildIndex, 0) ? fT.hndS || 1 : 1)
    j.uBamL(ft, j.XpYkZ(fW, j.vpCuS(aa, fX)), j.eNZxX(fW, j.xMqqG(a9, fX)), 14)
    if (j.iEHUN(fR.buildIndex, 0) && fT.aboveHand) {
      j.cLiCz(fn, fT, bC[fR.weaponVariant].src, fV, 0, fS)
      j.CLYZW(fT.projectile, undefined) &&
        !fT.hideProjectile &&
        j.XFCKN(fd, fV, 0, cs.projectiles[fT.projectile], dE)
    }
    if (j.aGCVg(fR.buildIndex, 0)) {
      let fY = cs.list[fR.buildIndex],
        fZ = j.oVPFk(fr, fY)
      fS.drawImage(fZ, fV - fY.holdOffset, j.zboGQ(-fZ.width, 2))
    }
    ft(0, 0, fV, fS)
    fR.skinIndex && (fS.rotate(aT), j.xXihH(fk, fR.skinIndex, fS, null, fR))
  }
  function fk(fR, fS, fT, fU) {
    if (!(fj = c0.get(fR))) {
      let fW = new Image()
      fW.onload = function () {
        fW.isLoaded = true
        fW.onload = null
      }
      fW.setAttribute(j.IBJRd, j.wgrfF)
      fW.src = j.fzGQC(cM, j.wKQDH(j.ouFQd(j.yNdvA, fR), j.IQuPP))
      c0.set(fR, fW)
      fj = fW
    }
    var fV = fT || fi.get(fR)
    if (!fV) {
      for (let fX = cx; fX--; ) {
        if (j.NalHE(cv[fX].id, fR)) {
          fV = cv[fX]
          break
        }
      }
      fi.set(fR, fV)
    }
    if (fj.isLoaded) {
      const fY = fV.scale,
        fZ = -fY / 2
      fS.drawImage(fj, fZ, fZ, fY, fY)
    }
    !fT &&
      fV.topSprite &&
      (fS.save(),
      fS.rotate(fU.skinRot),
      j.mnvKk(fk, j.mOGax(fR, j.yQmeK), fS, fV, fU),
      fS.restore())
  }
  function fm(fR, fS, fT) {
    if (!(fj = c2.get(fR))) {
      let fU = new Image()
      fU.onload = function () {
        fU.isLoaded = true
        fU.onload = null
      }
      fU.setAttribute('crossorigin', j.wgrfF)
      fU.src = j.pJNtl(cM, j.bpBsw(j.IQGVN(j.HeKbB, fR), j.IQuPP))
      c2.set(fR, fU)
      fj = fU
    }
    if (!(F = fl.get(fR))) {
      for (let fV = cy; fV--; ) {
        if (cw[fV].id == fR) {
          F = cw[fV]
          break
        }
      }
      fl.set(fR, F)
    }
    if (fj.isLoaded) {
      fS.save()
      fS.translate(j.ybZWv(-20, F.xOff || 0), 0)
      F.spin && fS.rotate(fT.skinRot)
      const fW = -j.qaoVj(F.scale, 2)
      fS.drawImage(fj, fW, fW, F.scale, F.scale)
      fS.restore()
    }
  }
  function fn(
    { src: fR, xOff: fS, yOff: fT, length: fU, width: fV },
    fW,
    fX,
    fY,
    fZ
  ) {
    const g0 = j.dZyth(fR, j.cdXLr(fW, ''))
    let g1 = bW[g0]
    !g1 &&
      ((g1 = new Image()),
      (g1.onload = function () {
        g1.isLoaded = true
      }),
      g1.setAttribute(j.IBJRd, j.wgrfF),
      (g1.src = j.UWsSO(cM, j.MLWPQ(j.davAP(j.LHgGN, g0), '.png'))),
      (bW[g0] = g1))
    g1.isLoaded &&
      fZ.drawImage(
        g1,
        j.jmTfu(j.uMmJJ(fX, fS), j.egajW(fU, 2)),
        j.lYuMY(fY + fT, fV / 2),
        fU,
        fV
      )
  }
  function fq({ type: fR, y: fS, scale: fT }) {
    let fU = j.WISXo(fS, j.FNqtp(bN, bo)) ? 2 : j.BKwXG(fS, bo) ? 1 : 0,
      fV = j.lGopX(j.dCgMY(j.UHKFN(fR, '_'), fT), '_') + fU,
      fW = bX[fV]
    if (!fW) {
      let fX = document.createElement('canvas')
      fX.width = fX.height = j.KAOSL(j.IoCHR(fT, 2.1), eh)
      let fY = fX.getContext('2d')
      fY.translate(j.ulkai(fX.width, 2), fX.height / 2)
      fY.rotate(j.WUWOm(cf, 0, a7))
      fY.strokeStyle = ef
      fY.lineWidth = eh
      if (j.gmuGW(fR, 0)) {
        for (let fZ = 0; j.MXvyN(fZ, 2); ++fZ) {
          let g0 = j.SZfiv(F.scale, !fZ ? 1 : 0.5)
          j.AFwbI(fv, fY, 7, g0, j.tYYOy(g0, 0.7))
          fY.fillStyle = !fU
            ? !fZ
              ? j.vjCth
              : j.AxKOL
            : !fZ
            ? j.GNFHb
            : j.QQtkg
          fY.fill()
          fZ || fY.stroke()
        }
      } else {
        if (j.tDokj(fR, 1)) {
          if (j.MnTyf(fU, 2)) {
            let g1 = j.xYflK(fT, 0.3)
            fY.fillStyle = j.jrUim
            fv(fY, 6, g1, fT * 0.71)
            fY.fill()
            fY.stroke()
            fY.fillStyle = j.zyHjY
            ft(0, 0, j.JYBap(fT, 0.55), fY)
            fY.fillStyle = j.vjlDi
            j.alepi(ft, 0, 0, g1, fY, true)
          } else {
            j.UdaKS(fy, fY, 6, F.scale, j.LzDDX(F.scale, 0.7))
            fY.fillStyle = fU ? j.GNFHb : j.zyHjY
            fY.fill()
            fY.stroke()
            fY.fillStyle = fU ? j.rjWTT : j.exdrk
            for (let g2 = 0; j.aiAUr(g2, fo); ++g2) {
              const g3 = bM(j.CRnkJ(F.scale, 3.5), j.XBZsM(F.scale, 2.3)),
                g4 = j.qrLhm(fp, g2)
              ft(
                g3 * j.bFoZh(aa, g4),
                j.pqtnE(g3, j.KJkvm(a9, g4)),
                j.OIQGo(bM, 10, 12),
                fY
              )
            }
          }
        } else {
          ;(fR == 2 || j.OnHhA(fR, 3)) &&
            ((fY.fillStyle = j.JGlZx(fR, 2)
              ? j.yKHbH(fU, 2)
                ? '#938d77'
                : j.aZfqN
              : '#e0c655'),
            j.GWZvF(fv, fY, 3, fT, fT),
            fY.fill(),
            fY.stroke(),
            (fY.fillStyle = j.eRvjI(fR, 2)
              ? j.xtoyn(fU, 2)
                ? j.zBmfa
                : '#bcbcbc'
              : '#ebdca3'),
            j.BVHAs(fv, fY, 3, j.CCMKq(fT, 0.55), j.aciOe(fT, 0.65)),
            fY.fill())
        }
      }
      bX[fV] = fW = fX
    }
    return fW
  }
  function fr({ scale: fR, id: fS, name: fT }, fU = false) {
    if (!(ay = c3.get(fS)) || fU) {
      let fV = document.createElement(j.mIVOx),
        fW = j.DrzPw(j.OJMrw(fR, 2.5), eh) + (cs.list[fS].spritePadding || 0)
      fV.width = fV.height = fW
      let fX = fV.getContext('2d')
      fX.translate(j.RKBOs(fV.width, 2), j.nhsvn(fW, 2))
      fX.rotate(fU ? 0 : aT)
      fX.strokeStyle = ef
      fX.lineWidth = j.ykOiR(eh, fU ? j.egajW(fW, 81) : 1)
      cK.get(fT)(fX, fR, fS, fT)
      ay = fV
      fU || c3.set(fS, ay)
    }
    return ay
  }
  function fs(fR, fS, fT, fU, fV) {
    const fW = j.ONfur(fR, j.qrLhm(fT, j.fVeRF(aa, fU))),
      fX = j.EbWND(fS, j.CrDKK(fT, a9(fU))),
      fY = j.DmwPw(fT, 0.4),
      fZ = j.crTTK(fR + fW, 2),
      g0 = j.NMaJL(fS + fX, 2)
    const g1 = fU + aT,
      g2 = j.jMvdF(fY, j.hwarG(aa, g1)),
      g3 = j.bLHLy(fY, j.yVzNm(a9, g1))
    fV.moveTo(fR, fS)
    fV.beginPath()
    fV.quadraticCurveTo(j.iVEaW(fZ, g2), j.hKZTg(g0, g3), fW, fX)
    fV.quadraticCurveTo(fZ - g2, j.WKdlI(g0, g3), fR, fS)
    fV.closePath()
    fV.fill()
    fV.stroke()
  }
  function ft(fR = 0, fS = 0, fT = 35, fU = dE, fV = false, fW = false) {
    fU.beginPath()
    fU.arc(fR, fS, fT, 0, aV)
    fW || fU.fill()
    fV || fU.stroke()
  }
  function fv(fR, fS, fT, fU) {
    const fV = a7 / fS
    let fW = fu
    fR.beginPath()
    fR.moveTo(0, -fT)
    for (let fX = 0, fY = NaN, fZ = NaN; j.YuGEu(fX, fS); ++fX) {
      fY = j.oKTyF(aa, fW) * fT
      fZ = j.xadMA(a9, fW) * fT
      fR.lineTo(fY, fZ)
      fW += fV
      fY = j.ofhMR(aa, fW) * fU
      fZ = j.JYBap(a9(fW), fU)
      fR.lineTo(fY, fZ)
      fW += fV
    }
    fR.lineTo(0, -fT)
    fR.closePath()
  }
  function fw(fR, fS, fT, fU, fV, fW = false) {
    const fX = fR - fT / 2,
      fY = fS - j.UkbVz(fU, 2)
    fV.fillRect(fX, fY, fT, fU)
    fW || fV.strokeRect(fX, fY, fT, fU)
  }
  function fx(
    fR = -1,
    fS = -1,
    fT = -1,
    fU = -1,
    fV = -1,
    fW = dE,
    fX = false
  ) {
    fW.save()
    fW.translate(fR, fS)
    fV = j.UZAwc(bw, fV / 2)
    for (let fY = 0, fZ = j.RzBng(fT, 2), g0 = a7 / fV; j.dFaPJ(fY, fV); ++fY) {
      j.Ozqrc(fw, 0, 0, fZ, fU, fW, fX)
      fW.rotate(g0)
    }
    fW.restore()
  }
  function fy(fR, fS, fT, fU) {
    let fV = j.wrJUx(aT, 3)
    const fW = j.smvtv(a7, fS),
      fX = j.XpYkZ(fW, 2),
      fY = fT + 0.9,
      fZ = j.SZfiv(fT, 1.2)
    fR.beginPath()
    fR.moveTo(0, -fU)
    for (let g0 = 0; g0 < fS; ++g0) {
      const g1 = j.ltLOk(bM, fY, fZ),
        g2 = j.PIPuB(fV, fW),
        g3 = j.VfjQD(fV, fX)
      fR.quadraticCurveTo(
        j.qrLhm(j.SQCEc(aa, g2), g1),
        j.RzBng(j.XsUQl(a9, g2), g1),
        j.SZfiv(j.fjMKw(aa, g3), fU),
        j.ThfDz(j.Vrcfu(a9, g3), fU)
      )
      fV += fX
    }
    fR.lineTo(0, -fU)
    fR.closePath()
  }
  function fz(fR, fS = dE) {
    const fT = j.gIKIT(j.ykOiR(fR, aY), 2),
      fU = j.CRnkJ(fR, 2)
    fS.beginPath()
    fS.moveTo(0, -fT)
    fS.lineTo(-fU, fT)
    fS.lineTo(fU, fT)
    fS.lineTo(0, -fT)
    fS.fill()
    fS.closePath()
  }
  function fA(fR, fS, fT) {
    return (
      fR + fT >= 0 &&
      j.ocyVg(j.FSPmU(fR, fT), be) &&
      j.RYrFq(fS + fT, 0) &&
      j.wrvWl(fS - fT, bf)
    )
  }
  function fB(fR) {
    for (let fS = ao, fT; fS--; ) {
      if (j.OnHhA((fT = an[fS]).id, fR)) {
        return fT
      }
    }
    return null
  }
  function fC(fR) {
    for (let fS = ao, fT; fS--; ) {
      if (j.jwSfU((fT = an[fS]).sid, fR)) {
        return fT
      }
    }
    return null
  }
  function fD(fR) {
    for (let fS = am, fT; fS--; ) {
      if (j.ssTYk((fT = al[fS]).sid, fR)) {
        return fT
      }
    }
    return null
  }
  function fE(fR) {
    for (let fS = ar, fT; fS--; ) {
      if (j.nNHxn((fT = aq[fS]).sid, fR)) {
        return fT
      }
    }
    return null
  }
  function fG() {
    const fR = {
      dDxcK: j.MLVnm,
      YipPg: 'Settings',
      duMUn: j.IBdVX,
      Rbxde: function (fV) {
        return j.vivNx(fV)
      },
      DCpOK: function (fV, fW) {
        return fV != fW
      },
      kjeMF: j.uzUxC,
      OAlWD: 'isLoaded',
      GCWiE: 'downloadButtonContainer',
      YJMQK: j.vrghK,
      visfK: function (fV, fW) {
        return fV(fW)
      },
    }
    du.onclick = ck(function fV() {
      const fW = j.AJtNz(ai, dV.value)
      j.LpYfi(d7, j.hqFUI, fW)
      !dr &&
        cN.connected &&
        ((dr = true),
        en(j.gvFDC),
        cN.send(H, {
          name: fW,
          moofoll: de,
          skin: dn,
        }))
    })
    j.MeoRP(cl, du)
    dw.onclick = ck(() =>
      setTimeout(function () {
        let fW = dF.value,
          fX = j.yghmJ(prompt, 'party key', fW)
        fX &&
          ((window.onbeforeunload = null),
          (window.location.href = j.rChoK(j.qfMYm, fX)))
      }, 10)
    )
    j.MMGYT(cl, dw)
    dx.onclick = ck(() => {
      dL.classList.contains(fR.dDxcK)
        ? (dL.classList.remove(fR.dDxcK), (dy.innerText = fR.YipPg))
        : (dL.classList.add(fR.dDxcK), (dy.innerText = fR.duMUn))
    })
    j.nfUqt(cl, dx)
    dA.onclick = j.LYQEb(ck, function fW() {
      fR.Rbxde(eX)
      fR.DCpOK(e1.style.display, 'block')
        ? fR.Rbxde(ev)
        : (e1.style.display = fR.kjeMF)
    })
    j.yVzNm(cl, dA)
    dB.onclick = ck(function fX() {
      j.nDqVb(e9.style.display, j.JXGKw)
        ? ((e9.style.display = 'block'),
          (e1.style.display = j.uzUxC),
          j.JuxHY(eM),
          j.nqalX(eC))
        : (e9.style.display = j.uzUxC)
    })
    j.nfUqt(cl, dB)
    dC.onclick = j.bFoZh(ck, () => eL())
    j.cHvQk(cl, dC)
    e4.onclick = j.cleTR(ck, () => f0())
    j.uqKWC(cl, e4)
    for (let fY = bB; fY--; ) {
      let fZ = new Image()
      fZ.onload = function () {
        fZ[fR.OAlWD] = true
      }
      fZ.setAttribute(j.IBJRd, 'anonymous')
      fZ.src = j.nLwXg(cM, j.edpng('.././img/icons/', bA[fY]) + j.IQuPP)
      bZ[bA[fY]] = fZ
    }
    dM.style.display = j.uzUxC
    dK.style.display = j.JXGKw
    dV.value = d9('moo_name') || ''
    const fS = j.JRCDz(d9, j.ogLix)
    eF(!fS ? j.ImCtF(typeof cordova, j.RHBVG) : j.PKqyg(fS, j.fGFQy))
    dh = j.auNYP(d9(j.QysQm), j.fGFQy)
    dI.hidden = !dh
    const fT = j.RYLNC(
      setInterval,
      function () {
        window.cordova &&
          (document.getElementById(fR.GCWiE).classList.add('cordova'),
          document.getElementById(fR.YJMQK).classList.add('cordova'),
          fR.visfK(clearInterval, fT))
      },
      1000
    )
    j.Gvhby(setTimeout, clearInterval, 30000, fT)
    eG()
    ch(dO)
    let fU = 0
    for (; fU < cQ; ++fU) {
      j.DuRwC(cm, {
        id: j.DyxlT(j.DdvLE, fU),
        class: j.DdvLE,
        style: j.TtMZO,
        onmouseout: function () {
          j.dDPeK(et)
        },
        parent: dO,
      })
    }
    for (fU = 0; j.qoEiG(fU, cQ); ++fU) {
      let g0 = document.createElement(j.mIVOx)
      g0.width = g0.height = 66
      let g1 = g0.getContext('2d')
      g1.translate(33, 33)
      g1.imageSmoothingEnabled = false
      g1.webkitImageSmoothingEnabled = false
      g1.mozImageSmoothingEnabled = false
      let g2 = cs.weapons[fU],
        g3 = fU
      if (g2) {
        g1.rotate(bb)
        let g4 = new Image()
        g4.setAttribute(j.IBJRd, j.wgrfF)
        bW[g2.src] = g4
        g4.onload = function () {
          g4.isLoaded = true
          let g6 = j.PXNvV(1, j.gkEGu(g4.height, g4.width))
          let g7 = g2.iPad || 1
          g1.drawImage(
            g4,
            -j.AwVUh(j.UFwgx(g0.width, g7) * c4, g6) / 2,
            j.CRnkJ(-j.UFwgx(j.lhJAL(g0.height, g7), c4), 2),
            j.alpYc(g0.width * g7 * g6, c4),
            j.loFhA(j.TjEYT(g0.height, g7), c4)
          )
          g1.fillStyle = j.IZGUx
          g1.globalCompositeOperation = j.hLhVt
          g1.fillRect(
            j.zboGQ(-g0.width, 2),
            j.BZoFK(-g0.height, 2),
            g0.width,
            g0.height
          )
          document.getElementById(j.DdvLE + g3).style.backgroundImage =
            j.IwSqr(j.njoFl, g0.toDataURL()) + ')'
        }
        g4.src = j.Vrcfu(cM, j.GJrND(j.LHgGN + g2.src, j.IQuPP))
        let g5 = document.getElementById(j.hWJXY(j.DdvLE, g3))
        g5.onmouseover = j.RKSTm(ck, () => et(g2, true))
        g5.onclick = j.HwVaY(ck, () => f1(g3, true))
        cl(g5)
      } else {
        let g6 = j.FkWQW(fr, cs.list[j.FSPmU(g3, cO)], true),
          g7 = j.oiRel(aW, j.wQbFl(g0.width, bc), g6.width),
          g8 = j.qaoVj(-g7, 2)
        g1.globalAlpha = 1
        g1.drawImage(g6, g8, g8, g7, g7)
        g1.fillStyle = j.IZGUx
        g1.globalCompositeOperation = j.hLhVt
        g1.fillRect(g8, g8, g7, g7)
        document.getElementById(
          j.zyyer('actionBarItem', g3)
        ).style.backgroundImage = j.hUnyc(j.njoFl + g0.toDataURL(), ')')
        let g9 = document.getElementById(j.JbjOE(j.DdvLE, g3))
        g9.onmouseover = j.nioeh(ck, () => et(cs.list[g3 - cO]))
        g9.onclick = j.HwVaY(ck, () => f1(g3 - cO))
        cl(g9)
      }
    }
    dV.ontouchstart = j.rUyDI(
      ck,
      (ga) => (
        ga.preventDefault(),
        (ga.currentTarget.value = prompt(
          'enter name',
          ga.currentTarget.value
        ).slice(0, 15))
      )
    )
    dG.checked = dg
    dG.onchange = ck((ga) => eF(ga.target.checked))
    dH.checked = dh
    dH.onchange = j.nLwXg(ck, function (ga) {
      dh = dH.checked
      dI.hidden = !dh
      j.XIppF(d7, j.QysQm, dh ? j.fGFQy : 'false')
    })
  }
  for (let fR = 0, fS = -1, fT = -1, fU = 0; fR < 12; ++fR) {
    const fV = j.apXbL.split('|')
    while (true) {
      switch (fV[fW++]) {
        case '0':
          fU = 0
          continue
        case '1':
          fT = j.aOtNm(fH, bO - 600, j.OKsjU(bO, 600))
          continue
        case '2':
          ec.add(fR, fS, fT, 0, ...j.kfGsr(fJ))
          continue
        case '3':
          continue
        case '4':
          fS = fH(j.eGwfy(bO, 1000), j.DTNAK(bO, 1000))
          continue
        case '5':
          while (
            j.lLQCd(aW, ...aq.map((fX) => bL(fS, fT, fX.x, fX.y))) < 120 &&
            j.XEipK(fU, 70)
          ) {
            fS = j.dwWhF(fH, j.qRnOT(bO, 1000), j.PfElQ(bO, 1000))
            fT = fH(j.FNqtp(bO, 600), j.PFQiw(bO, 600))
            fU++
          }
          continue
      }
      break
    }
  }
  f9()
})()
