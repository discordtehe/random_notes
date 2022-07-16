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
      l = (k.console = k.console || {}),
      m = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace']
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
      var fL, fM = j.iXzJm, fN = '', fO = 0;
      j.LNZfb(fO, fK.length);
      fO += 1
    ) {
      fL = fK.charCodeAt(fO)
      fN += j.qMRFr(fM.charAt(j.RvXYX(j.RSPdq(fL, 4), 15)), fM.charAt(15 & fL))
    }
    return fN
  }
  function m(fK) {
    for (
      var fL = Array(fK.length >> 2), fM = 0;
      j.Lhisz(fM, fL.length);
      fM += 1
    ) {
      fL[fM] = 0
    }
    for (fM = 0; j.SnLpC(fM, 8 * fK.length); fM += 8) {
      fL[fM >> 5] |= (255 & fK.charCodeAt(fM / 8)) << j.oXQUd(fM, 32)
    }
    return fL
  }
  function n(fK) {
    for (var fL = '', fM = 0; fM < 32 * fK.length; fM += 8) {
      fL += String.fromCharCode(
        j.RvXYX(j.RSPdq(fK[fM >> 5], j.oXQUd(fM, 32)), 255)
      )
    }
    return fL
  }
  function o(fK, fL) {
    fK[j.ttqEN(fL, 5)] |= j.OjPXv(128, j.oXQUd(fL, 32))
    fK[14 + j.DEUzB(j.kAxVe(j.LcDox(fL, 64), 9), 4)] = fL
    for (
      var fM = 1732584193,
        fN = -271733879,
        fO = -1732584194,
        fP = 271733878,
        fQ = 0;
      j.tiPxS(fQ, fK.length);
      fQ += 16
    ) {
      var fR = fM,
        fS = fN,
        fT = fO,
        fU = fP
      fN = j.nOEyh(
        t,
        (fN = j.nOEyh(
          t,
          (fN = j.rEQmn(
            t,
            (fN = j.rEQmn(
              t,
              (fN = j.nlrmk(
                s,
                (fN = j.trYOn(
                  s,
                  (fN = s(
                    (fN = s(
                      (fN = j.rEQmn(
                        r,
                        (fN = j.gpRne(
                          r,
                          (fN = j.nOEyh(
                            r,
                            (fN = r(
                              (fN = j.nOEyh(
                                q,
                                (fN = j.TlnNl(
                                  q,
                                  (fN = q(
                                    (fN = j.trYOn(
                                      q,
                                      fN,
                                      (fO = q(
                                        fO,
                                        (fP = j.nOEyh(
                                          q,
                                          fP,
                                          (fM = q(
                                            fM,
                                            fN,
                                            fO,
                                            fP,
                                            fK[fQ + 0],
                                            7,
                                            -680876936
                                          )),
                                          fN,
                                          fO,
                                          fK[j.LcDox(fQ, 1)],
                                          12,
                                          -389564586
                                        )),
                                        fM,
                                        fN,
                                        fK[j.LcDox(fQ, 2)],
                                        17,
                                        606105819
                                      )),
                                      fP,
                                      fM,
                                      fK[j.ewKKM(fQ, 3)],
                                      22,
                                      -1044525330
                                    )),
                                    (fO = q(
                                      fO,
                                      (fP = j.KJyqB(
                                        q,
                                        fP,
                                        (fM = j.EBQZm(
                                          q,
                                          fM,
                                          fN,
                                          fO,
                                          fP,
                                          fK[fQ + 4],
                                          7,
                                          -176418897
                                        )),
                                        fN,
                                        fO,
                                        fK[fQ + 5],
                                        12,
                                        1200080426
                                      )),
                                      fM,
                                      fN,
                                      fK[j.LcDox(fQ, 6)],
                                      17,
                                      -1473231341
                                    )),
                                    fP,
                                    fM,
                                    fK[j.ewKKM(fQ, 7)],
                                    22,
                                    -45705983
                                  )),
                                  (fO = j.WSIlS(
                                    q,
                                    fO,
                                    (fP = q(
                                      fP,
                                      (fM = j.hmoFX(
                                        q,
                                        fM,
                                        fN,
                                        fO,
                                        fP,
                                        fK[j.LcDox(fQ, 8)],
                                        7,
                                        1770035416
                                      )),
                                      fN,
                                      fO,
                                      fK[j.QcUfk(fQ, 9)],
                                      12,
                                      -1958414417
                                    )),
                                    fM,
                                    fN,
                                    fK[j.euhmd(fQ, 10)],
                                    17,
                                    -42063
                                  )),
                                  fP,
                                  fM,
                                  fK[j.IjHhW(fQ, 11)],
                                  22,
                                  -1990404162
                                )),
                                (fO = q(
                                  fO,
                                  (fP = j.gpRne(
                                    q,
                                    fP,
                                    (fM = j.brnmD(
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
                                    fK[j.LcDox(fQ, 13)],
                                    12,
                                    -40341101
                                  )),
                                  fM,
                                  fN,
                                  fK[j.YBGbY(fQ, 14)],
                                  17,
                                  -1502002290
                                )),
                                fP,
                                fM,
                                fK[j.rauSq(fQ, 15)],
                                22,
                                1236535329
                              )),
                              (fO = j.xEOyJ(
                                r,
                                fO,
                                (fP = r(
                                  fP,
                                  (fM = r(
                                    fM,
                                    fN,
                                    fO,
                                    fP,
                                    fK[j.rauSq(fQ, 1)],
                                    5,
                                    -165796510
                                  )),
                                  fN,
                                  fO,
                                  fK[j.IjHhW(fQ, 6)],
                                  9,
                                  -1069501632
                                )),
                                fM,
                                fN,
                                fK[j.IjHhW(fQ, 11)],
                                14,
                                643717713
                              )),
                              fP,
                              fM,
                              fK[j.ewKKM(fQ, 0)],
                              20,
                              -373897302
                            )),
                            (fO = j.rEQmn(
                              r,
                              fO,
                              (fP = j.xEOyJ(
                                r,
                                fP,
                                (fM = j.BqRaB(
                                  r,
                                  fM,
                                  fN,
                                  fO,
                                  fP,
                                  fK[j.euhmd(fQ, 5)],
                                  5,
                                  -701558691
                                )),
                                fN,
                                fO,
                                fK[j.ewKKM(fQ, 10)],
                                9,
                                38016083
                              )),
                              fM,
                              fN,
                              fK[fQ + 15],
                              14,
                              -660478335
                            )),
                            fP,
                            fM,
                            fK[j.QcUfk(fQ, 4)],
                            20,
                            -405537848
                          )),
                          (fO = j.nlrmk(
                            r,
                            fO,
                            (fP = j.EBQZm(
                              r,
                              fP,
                              (fM = j.KyNcd(
                                r,
                                fM,
                                fN,
                                fO,
                                fP,
                                fK[j.vPIeU(fQ, 9)],
                                5,
                                568446438
                              )),
                              fN,
                              fO,
                              fK[j.XhxJE(fQ, 14)],
                              9,
                              -1019803690
                            )),
                            fM,
                            fN,
                            fK[fQ + 3],
                            14,
                            -187363961
                          )),
                          fP,
                          fM,
                          fK[j.qMRFr(fQ, 8)],
                          20,
                          1163531501
                        )),
                        (fO = j.wRSUg(
                          r,
                          fO,
                          (fP = j.USrfx(
                            r,
                            fP,
                            (fM = j.BqRaB(
                              r,
                              fM,
                              fN,
                              fO,
                              fP,
                              fK[j.qMRFr(fQ, 13)],
                              5,
                              -1444681467
                            )),
                            fN,
                            fO,
                            fK[j.kENJC(fQ, 2)],
                            9,
                            -51403784
                          )),
                          fM,
                          fN,
                          fK[j.XERMd(fQ, 7)],
                          14,
                          1735328473
                        )),
                        fP,
                        fM,
                        fK[j.RqCkT(fQ, 12)],
                        20,
                        -1926607734
                      )),
                      (fO = j.mcnZS(
                        s,
                        fO,
                        (fP = j.kBkAy(
                          s,
                          fP,
                          (fM = s(
                            fM,
                            fN,
                            fO,
                            fP,
                            fK[j.BoiLu(fQ, 5)],
                            4,
                            -378558
                          )),
                          fN,
                          fO,
                          fK[j.ddjUx(fQ, 8)],
                          11,
                          -2022574463
                        )),
                        fM,
                        fN,
                        fK[j.kENJC(fQ, 11)],
                        16,
                        1839030562
                      )),
                      fP,
                      fM,
                      fK[j.kENJC(fQ, 14)],
                      23,
                      -35309556
                    )),
                    (fO = s(
                      fO,
                      (fP = j.wizjS(
                        s,
                        fP,
                        (fM = s(
                          fM,
                          fN,
                          fO,
                          fP,
                          fK[j.RqCkT(fQ, 1)],
                          4,
                          -1530992060
                        )),
                        fN,
                        fO,
                        fK[j.IjHhW(fQ, 4)],
                        11,
                        1272893353
                      )),
                      fM,
                      fN,
                      fK[j.YBGbY(fQ, 7)],
                      16,
                      -155497632
                    )),
                    fP,
                    fM,
                    fK[j.obgBo(fQ, 10)],
                    23,
                    -1094730640
                  )),
                  (fO = j.jZYEf(
                    s,
                    fO,
                    (fP = s(
                      fP,
                      (fM = s(fM, fN, fO, fP, fK[fQ + 13], 4, 681279174)),
                      fN,
                      fO,
                      fK[j.SUAiA(fQ, 0)],
                      11,
                      -358537222
                    )),
                    fM,
                    fN,
                    fK[fQ + 3],
                    16,
                    -722521979
                  )),
                  fP,
                  fM,
                  fK[j.QcUfk(fQ, 6)],
                  23,
                  76029189
                )),
                (fO = j.EGLbx(
                  s,
                  fO,
                  (fP = j.WkmIp(
                    s,
                    fP,
                    (fM = j.EBQZm(
                      s,
                      fM,
                      fN,
                      fO,
                      fP,
                      fK[j.jeTKc(fQ, 9)],
                      4,
                      -640364487
                    )),
                    fN,
                    fO,
                    fK[j.ddjUx(fQ, 12)],
                    11,
                    -421815835
                  )),
                  fM,
                  fN,
                  fK[j.eNuAy(fQ, 15)],
                  16,
                  530742520
                )),
                fP,
                fM,
                fK[j.RqCkT(fQ, 2)],
                23,
                -995338651
              )),
              (fO = j.jmTrF(
                t,
                fO,
                (fP = t(
                  fP,
                  (fM = j.mcnZS(
                    t,
                    fM,
                    fN,
                    fO,
                    fP,
                    fK[j.ewKKM(fQ, 0)],
                    6,
                    -198630844
                  )),
                  fN,
                  fO,
                  fK[j.eTVLK(fQ, 7)],
                  10,
                  1126891415
                )),
                fM,
                fN,
                fK[fQ + 14],
                15,
                -1416354905
              )),
              fP,
              fM,
              fK[fQ + 5],
              21,
              -57434055
            )),
            (fO = t(
              fO,
              (fP = j.rZUtv(
                t,
                fP,
                (fM = j.brnmD(
                  t,
                  fM,
                  fN,
                  fO,
                  fP,
                  fK[j.vPIeU(fQ, 12)],
                  6,
                  1700485571
                )),
                fN,
                fO,
                fK[fQ + 3],
                10,
                -1894986606
              )),
              fM,
              fN,
              fK[j.SUAiA(fQ, 10)],
              15,
              -1051523
            )),
            fP,
            fM,
            fK[j.eTVLK(fQ, 1)],
            21,
            -2054922799
          )),
          (fO = j.qNjwF(
            t,
            fO,
            (fP = j.wizjS(
              t,
              fP,
              (fM = j.WSIlS(
                t,
                fM,
                fN,
                fO,
                fP,
                fK[j.vzgiE(fQ, 8)],
                6,
                1873313359
              )),
              fN,
              fO,
              fK[j.IGVrK(fQ, 15)],
              10,
              -30611744
            )),
            fM,
            fN,
            fK[fQ + 6],
            15,
            -1560198380
          )),
          fP,
          fM,
          fK[j.rauSq(fQ, 13)],
          21,
          1309151649
        )),
        (fO = j.SVpPB(
          t,
          fO,
          (fP = t(
            fP,
            (fM = j.LcHYz(
              t,
              fM,
              fN,
              fO,
              fP,
              fK[j.RTloH(fQ, 4)],
              6,
              -145523070
            )),
            fN,
            fO,
            fK[j.VOqRX(fQ, 11)],
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
        fK[j.qMRFr(fQ, 9)],
        21,
        -343485551
      )
      fM = j.DkhpT(u, fM, fR)
      fN = u(fN, fS)
      fO = u(fO, fT)
      fP = j.ZhnjY(u, fP, fU)
    }
    return Array(fM, fN, fO, fP)
  }
  function p(fK, fL, fM, fN, fO, fP) {
    return j.QDome(u, v(j.QDome(u, u(fL, fK), j.GXahF(u, fN, fP)), fO), fM)
  }
  function q(fK, fL, fM, fN, fO, fP, fQ) {
    return j.nnOYj(
      p,
      j.SUtTp(j.SKAHa(fL, fM), j.RvXYX(~fL, fN)),
      fK,
      fL,
      fO,
      fP,
      fQ
    )
  }
  function r(fK, fL, fM, fN, fO, fP, fQ) {
    return j.nnOYj(p, j.SUtTp(fL & fN, fM & ~fN), fK, fL, fO, fP, fQ)
  }
  function s(fK, fL, fM, fN, fO, fP, fQ) {
    return j.nnOYj(p, j.VGken(j.VGken(fL, fM), fN), fK, fL, fO, fP, fQ)
  }
  function t(fK, fL, fM, fN, fO, fP, fQ) {
    return j.tXxXj(p, j.VGken(fM, j.UMPTO(fL, ~fN)), fK, fL, fO, fP, fQ)
  }
  function u(fK, fL) {
    var fM = j.hPzjg(j.RvXYX(65535, fK), 65535 & fL)
    return j.SUtTp(
      j.ifkgp(
        j.KFQPw(j.eNuAy(j.UvYOL(fK, 16), j.cULdZ(fL, 16)), j.UvYOL(fM, 16)),
        16
      ),
      j.rgLgl(65535, fM)
    )
  }
  function v(fK, fL) {
    return j.NqLeP(j.DEUzB(fK, fL), j.YyqUc(fK, j.rUlPP(32, fL)))
  }
  ;(() => {
    const fK = {
      ifhSK: function (fM, fN) {
        return fM !== fN
      },
      KnARV: j.ohrED,
      seBny: function (fM, fN) {
        return fM(fN)
      },
      hNeNs: function (fM, fN) {
        return j.ytJMJ(fM, fN)
      },
    }
    const fL = (fM = 'Hacks Detected') => {
      em(fM)
      document.documentElement.innerHTML = fM
    }
    j.LRRcj(
      setTimeout,
      () => {
        j.hUpYE(
          setInterval,
          () => {
            try {
              if (
                window.doNewSend ||
                document.ws ||
                window.msgpack ||
                window.msgpack5 ||
                fK.ifhSK(e4.style.background, '') ||
                !WebSocket.prototype.send.toString().includes(fK.KnARV) ||
                !Worker.toString().includes(fK.KnARV)
              ) {
                fK.seBny(fL, 't')
              }
            } catch (fM) {
              fK.hNeNs(fL, 'e')
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
            fM +=
              fO.slice(fQ + fR, j.qqDTO(fQ, fR) + 1) === fP.slice(fR, fR + 1)
          }
          fM / fN > 0.85 && (fK = j.AjXcl(ah, fK, fQ, '*'.repeat(fN)))
        }
      }),
      fK
    )
  }
  class aK {
    ['setData'](fK) {
      const fL = j.RCXXr.split('|')
      while (true) {
        switch (fL[fM++]) {
          case '0':
            this.dir = fK[5]
            continue
          case '1':
            this.name = fK[2]
            continue
          case '2':
            this.skinColor = fK[9]
            continue
          case '3':
            this.health = fK[6]
            continue
          case '4':
            this.maxHealth = fK[7]
            continue
          case '5':
            this.scale = fK[8]
            continue
          case '6':
            this.x = fK[3]
            continue
          case '7':
            this.y = fK[4]
            continue
          case '8':
            this.sid = fK[1]
            continue
          case '9':
            this.id = fK[0]
            continue
        }
        break
      }
    }
    ['spawn'](fK) {
      const fL = j.ONoOK.split('|')
      while (true) {
        switch (fL[fM++]) {
          case '0':
            this.y = 0
            continue
          case '1':
            this.dirPlus = 0
            continue
          case '2':
            this.animSpeed = 0
            continue
          case '3':
            this.buildIndex = -1
            continue
          case '4':
            this.yVel = 0
            continue
          case '5':
            this.chatCountdown = 0
            continue
          case '6':
            this.xVel = 0
            continue
          case '7':
            this.dir = 0
            continue
          case '8':
            this.gathering = 0
            continue
          case '9':
            this.mouseState = 0
            continue
          case '10':
            this.scale = bg
            continue
          case '11':
            this.minimapCounter = 0
            continue
          case '12':
            this.weaponIndex = 0
            continue
          case '13':
            this.noMovTimer = 0
            continue
          case '14':
            this.alive = true
            continue
          case '15':
            this.zIndex = 0
            continue
          case '16':
            this.lockMove = false
            continue
          case '17':
            this.weapons = [0]
            continue
          case '18':
            this.animTime = 0
            continue
          case '19':
            this.upgradePoints = 0
            continue
          case '20':
            this.maxXP = 300
            continue
          case '21':
            this.x = 0
            continue
          case '22':
            this.lockDir = false
            continue
          case '23':
            this.items = [0, 3, 6, 10]
            continue
          case '24':
            this.speed = bh
            continue
          case '25':
            this.kills = 0
            continue
          case '26':
            this.active = true
            continue
          case '27':
            this.upgrAge = 2
            continue
          case '28':
            this.shameCount = 0
            continue
          case '29':
            this.XP = 0
            continue
          case '30':
            this.shameTimer = 0
            continue
          case '31':
            this.autoGather = 0
            continue
          case '32':
            this.targetAngle = 0
            continue
          case '33':
            this.maxHealth = 100
            continue
          case '34':
            this.health = this.maxHealth
            continue
          case '35':
            this.age = 1
            continue
        }
        break
      }
    }
    ['animate'](fK) {
      if (this.animTime) {
        if (j.qwwXZ((this.animTime -= fK), 0)) {
          this.animTime = 0
          this.dirPlus = 0
          this.tmpRatio = 0
          this.animIndex = 0
        } else {
          if (j.yVHVd(this.animIndex, 0)) {
            this.tmpRatio += j.VyQvY(fK, this.animSpeed * b2)
            this.dirPlus = j.AjXcl(
              co,
              0,
              this.targetAngle,
              aW(1, this.tmpRatio)
            )
            j.qqZvD(this.tmpRatio, 1) &&
              ((this.tmpRatio = 1), (this.animIndex = 1))
          } else {
            this.tmpRatio -= j.eBhHw(
              fK,
              j.DIwKN(this.animSpeed, j.mxlAd(1, b2))
            )
            this.dirPlus = j.kEQIH(
              co,
              0,
              this.targetAngle,
              aX(0, this.tmpRatio)
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
        if (cw[fM].price <= 0) {
          this.tails[cw[fM].id] = 1
        }
      }
      this.skins = {}
      for (let fN = cx; fN--; ) {
        if (cv[fN].price <= 0) {
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
          const fL = j.SXdLv(aa, this.dir),
            fM = a9(this.dir),
            fN = j.OxocS(this.speed, fK)
          this.x += j.KWnfZ(fN, fL)
          this.y += j.aEeEQ(fN, fM)
          ;(this.range -= fN) <= 0 &&
            ((this.x += j.CCiij(this.range, fL)),
            (this.y += j.CCiij(this.range, fM)),
            (this.range = 0),
            (this.active = false))
        } else {
          this.skipMov = false
        }
      }
      return this.active
    }
    ['init'](fK, fL, fM, fN, fO, fP, fQ, fR, fS) {
      const fT = j.EbLvo.split('|')
      while (true) {
        switch (fT[fU++]) {
          case '0':
            this.dmg = fP
            continue
          case '1':
            this.range = fQ
            continue
          case '2':
            this.y = fM
            continue
          case '3':
            this.indx = fK
            continue
          case '4':
            this.scale = fR
            continue
          case '5':
            this.speed = fO
            continue
          case '6':
            this.active = true
            continue
          case '7':
            this.skipMov = true
            continue
          case '8':
            this.dir = fN
            continue
          case '9':
            this.owner = fS
            continue
          case '10':
            this.x = fL
            continue
        }
        break
      }
    }
    constructor() {
      const fK = j.YkcSU.split('|')
      while (true) {
        switch (fK[fL++]) {
          case '0':
            this.x = 0
            continue
          case '1':
            this.range = 0
            continue
          case '2':
            this.owner = null
            continue
          case '3':
            this.scale = 0
            continue
          case '4':
            this.skipMov = true
            continue
          case '5':
            this.speed = 0
            continue
          case '6':
            this.dir = 0
            continue
          case '7':
            this.dmg = 0
            continue
          case '8':
            this.indx = 0
            continue
          case '9':
            this.y = 0
            continue
          case '10':
            this.active = true
            continue
        }
        break
      }
    }
  }
  class aM {
    ['init'](fK, fL, fM, fN, fO, fP = {}, fQ = null) {
      const fR = j.MUEhV.split('|')
      while (true) {
        switch (fR[fS++]) {
          case '0':
            this.projectile = fP.projectile
            continue
          case '1':
            this.y = fL
            continue
          case '2':
            this.zIndex = fP.zIndex || 0
            continue
          case '3':
            this.x = fK
            continue
          case '4':
            this.dir = fM
            continue
          case '5':
            this.isItem = j.OuoUg(this.id, undefined)
            continue
          case '6':
            this.group = fP.group
            continue
          case '7':
            if (j.CwDsv(this.group, undefined)) {
              this.layer = this.group.layer
            } else {
              if (j.QHmzs(this.type, 0)) {
                this.layer = 3
              } else {
                if (j.ORPGY(this.type, 2)) {
                  this.layer = 0
                } else {
                  j.MOPGd(this.type, 4) && (this.layer = -1)
                }
              }
            }
            continue
          case '8':
            this.xWiggle = 0
            continue
          case '9':
            this.yWiggle = 0
            continue
          case '10':
            this.scale = fN
            continue
          case '11':
            this.hideFromEnemy = fP.hideFromEnemy
            continue
          case '12':
            this.type = fO
            continue
          case '13':
            this.layer = 2
            continue
          case '14':
            this.id = fP.id
            continue
          case '15':
            this.health = fP.health
            continue
          case '16':
            this.req = fP.req
            continue
          case '17':
            this.dmg = fP.dmg
            continue
          case '18':
            this.name = fP.name
            continue
          case '19':
            this.owner = fQ
            continue
          case '20':
            this.turnSpeed = fP.turnSpeed
            continue
          case '21':
            this.blocker = fP.blocker
            continue
          case '22':
            this.active = true
            continue
        }
        break
      }
    }
    ['update'](fK) {
      this.active &&
        (this.xWiggle && (this.xWiggle *= j.iwvYX(0.99, fK)),
        this.yWiggle && (this.yWiggle *= j.iwvYX(0.99, fK)),
        this.turnSpeed && (this.dir += j.oemOe(this.turnSpeed, fK)))
    }
    constructor(fK) {
      const fL = j.oqFYJ.split('|')
      while (true) {
        switch (fL[fM++]) {
          case '0':
            this.id = 0
            continue
          case '1':
            this.isItem = j.OuoUg(this.id, undefined)
            continue
          case '2':
            this.scale = 0
            continue
          case '3':
            this.x = 0
            continue
          case '4':
            this.layer = 0
            continue
          case '5':
            this.active = true
            continue
          case '6':
            this.hideFromEnemy = 0
            continue
          case '7':
            this.group = {}
            continue
          case '8':
            this.type = 0
            continue
          case '9':
            this.y = 0
            continue
          case '10':
            this.dmg = 0
            continue
          case '11':
            this.health = 100
            continue
          case '12':
            this.name = ''
            continue
          case '13':
            this.sid = fK
            continue
          case '14':
            this.xWiggle = 0
            continue
          case '15':
            this.dir = 0
            continue
          case '16':
            this.req = 0
            continue
          case '17':
            this.turnSpeed = 0
            continue
          case '18':
            this.owner = null
            continue
          case '19':
            this.projectile = 0
            continue
          case '20':
            this.yWiggle = 0
            continue
          case '21':
            this.blocker = 0
            continue
          case '22':
            this.zIndex = 0
            continue
        }
        break
      }
    }
  }
  class aN {
    ['init'](fK, fL, fM, fN, fO) {
      this.x = fK
      this.y = fL
      this.xVel = 0
      this.yVel = 0
      this.zIndex = 0
      this.dir = fM
      this.dirPlus = 0
      this.index = fN
      this.src = fO.src
      if (fO.name) {
        this.name = fO.name
      }
      this.speed = fO.speed
      this.turnSpeed = fO.turnSpeed
      this.scale = fO.scale
      this.maxHealth = fO.health
      this.health = this.maxHealth
      this.dmg = fO.dmg
      this.spriteMlt = fO.spriteMlt
      this.nameScale = fO.nameScale
      this.active = true
      this.alive = true
    }
    ['animate'](fK) {
      this.animTime &&
        ((this.animTime -= fK),
        j.YIOJF(this.animTime, 0)
          ? ((this.animTime = 0),
            (this.dirPlus = 0),
            (this.tmpRatio = 0),
            (this.animIndex = 0))
          : j.ORPGY(this.animIndex, 0)
          ? ((this.tmpRatio += j.eBhHw(fK, j.lEmGU(this.animSpeed, b2))),
            (this.dirPlus = co(
              0,
              this.targetAngle,
              j.KdqmD(aW, 1, this.tmpRatio)
            )),
            j.uibTe(this.tmpRatio, 1) &&
              ((this.tmpRatio = 1), (this.animIndex = 1)))
          : ((this.tmpRatio -= j.meGSy(
              fK,
              j.YnChK(this.animSpeed, j.SFXMJ(1, b2))
            )),
            (this.dirPlus = j.zvDVE(
              co,
              0,
              this.targetAngle,
              j.hJlBj(aX, 0, this.tmpRatio)
            ))))
    }
    ['startAnim']() {
      this.animTime = this.animSpeed = 600
      this.targetAngle = a7 * 0.8
      this.tmpRatio = 0
      this.animIndex = 0
    }
    constructor(fK) {
      const fL = j.rcwWO.split('|')
      while (true) {
        switch (fL[fM++]) {
          case '0':
            this.alive = false
            continue
          case '1':
            this.startX = null
            continue
          case '2':
            this.spriteMlt = 0
            continue
          case '3':
            this.isAI = true
            continue
          case '4':
            this.animTime = this.animSpeed = 0
            continue
          case '5':
            this.y = -1
            continue
          case '6':
            this.targetAngle = 0
            continue
          case '7':
            this.x = -1
            continue
          case '8':
            this.startY = null
            continue
          case '9':
            this.tmpRatio = 0
            continue
          case '10':
            this.lockMove = false
            continue
          case '11':
            this.dir = 0
            continue
          case '12':
            this.health = this.maxHealth = 100
            continue
          case '13':
            this.tmpRatio = 0
            continue
          case '14':
            this.active = false
            continue
          case '15':
            this.animIndex = 0
            continue
          case '16':
            this.zIndex = 0
            continue
          case '17':
            this.dmg = 0
            continue
          case '18':
            this.xVel = 0
            continue
          case '19':
            this.timerCount = 0
            continue
          case '20':
            this.speed = NaN
            continue
          case '21':
            this.turnSpeed = NaN
            continue
          case '22':
            this.yVel = 0
            continue
          case '23':
            this.nameIndex = j.rzFNX(bM, 0, j.PQJud(b6, 1))
            continue
          case '24':
            this.targetAngle = 0
            continue
          case '25':
            this.name = ''
            continue
          case '26':
            this.index = 0
            continue
          case '27':
            this.nameScale = 0
            continue
          case '28':
            this.spawnCounter = 0
            continue
          case '29':
            this.dirPlus = 0
            continue
          case '30':
            this.scale = 0
            continue
          case '31':
            this.sid = fK
            continue
          case '32':
            this.src = ''
            continue
        }
        break
      }
    }
  }
  class aO {
    constructor() {
      const fK = j.HkygN.split('|')
      while (true) {
        switch (fK[fL++]) {
          case '0':
            this.scaleSpeed = 0.7
            continue
          case '1':
            this.scale = 0
            continue
          case '2':
            this.speed = 1
            continue
          case '3':
            this.life = 1
            continue
          case '4':
            this.y = 0
            continue
          case '5':
            this.maxScale = 1.5
            continue
          case '6':
            this.text = ''
            continue
          case '7':
            this.color = ''
            continue
          case '8':
            this.startScale = 0
            continue
          case '9':
            this.x = 0
            continue
        }
        break
      }
    }
    ['init'](fK, fL, fM, fN, fO, fP, fQ) {
      const fR = j.UIqEe.split('|')
      while (true) {
        switch (fR[fS++]) {
          case '0':
            this.speed = fN
            continue
          case '1':
            this.y = fL
            continue
          case '2':
            this.scaleSpeed = 0.7
            continue
          case '3':
            this.maxScale = j.CCiij(fM, 1.5)
            continue
          case '4':
            this.startScale = this.scale
            continue
          case '5':
            this.life = fO
            continue
          case '6':
            this.x = fK
            continue
          case '7':
            this.color = fQ
            continue
          case '8':
            this.text = fP
            continue
          case '9':
            this.scale = fM
            continue
        }
        break
      }
    }
    ['update'](fK) {
      if (this.life) {
        this.life -= fK
        this.y -= j.DIwKN(this.speed, fK)
        this.scale += this.scaleSpeed * fK
        if (j.FsiTT(this.scale, this.maxScale)) {
          this.scale = this.maxScale
          this.scaleSpeed *= -1
        } else {
          j.jhmzB(this.scale, this.startScale) &&
            ((this.scale = this.startScale), (this.scaleSpeed = 0))
        }
        this.life <= 0 && (this.life = 0)
      }
    }
    ['render'](fK, fL, fM) {
      fK.fillStyle = this.color
      fK.font = this.scale + 'px Hammersmith One'
      fK.fillText(this.text, j.mxlAd(this.x, fL), j.PQJud(this.y, fM))
    }
  }
  class aP {
    ['update'](fK, fL, fM, fN) {
      fL.textBaseline = j.WXDDT
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
        return (
          fX.init(fS, fN, fO, fP, fR, fW.dmg, fQ, fW.scale, fT),
          (fX.ignoreObj = fU),
          (fX.layer = fV || fW.layer),
          (fX.src = fW.src),
          fX
        )
      }
    }
  }
  class aS {
    ['disableObj'](fK) {
      fK.active = false
    }
    ['disableBySid'](fK) {
      for (let fL = ar; fL--; ) {
        if (aq[fL].sid == fK) {
          this.disableObj(aq[fL])
          break
        }
      }
    }
    ['removeAllItems'](fK) {
      for (let fL = ar; fL--; ) {
        aq[fL].active &&
          j.MOPGd(aq[fL].owner?.sid, fK) &&
          this.disableObj(aq[fL])
      }
    }
    ['add'](fK, fL, fM, fN, fO, fP, fQ, fR, fS) {
      const fT = ar
      F = null
      for (let fU = 0; j.qesDd(fU, fT); ++fU) {
        if (j.ORPGY(aq[fU].sid, fK)) {
          F = aq[fU]
          break
        }
      }
      if (!F) {
        for (let fV = 0; fV < fT; ++fV) {
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
  for (let fK = 0, fL = cs.list.length; fK < fL; ++fK) {
    cs.list[fK].id = fK
    if (cs.list[fK].pre) {
      cs.list[fK].pre = j.JqIzh(fK, cs.list[fK].pre)
    }
  }
  window[j.Deplg] = ct
  window[j.MLoSh] = function (fM) {
    cV = !!fM
  }
  function d5() {
    const fM = {
      pefQo: 'teams',
      MtJiY: j.rfrWV,
      zGxtZ: j.mUVdZ,
      SvJMm: j.jDepf,
      PQRGH: function (fN, fO) {
        return fN == fO
      },
      DcLyj: '4|16|3|14|17|12|10|18|2|6|5|11|8|0|9|7|13|1|15',
      uPdeK: function (fN, fO) {
        return j.OZTvg(fN, fO)
      },
      Arqxa: function (fN, fO) {
        return j.QdvpI(fN, fO)
      },
      vaWqj: function (fN, fO) {
        return j.aeQTJ(fN, fO)
      },
      ZTYqs: function (fN, fO) {
        return fN + fO
      },
      kgUpF: function (fN, fO) {
        return j.IjHhW(fN, fO)
      },
      eyIdu: function (fN, fO) {
        return j.vzgiE(fN, fO)
      },
      dYvUj: function (fN, fO) {
        return j.bFqBH(fN, fO)
      },
      IWCPR: function (fN, fO) {
        return j.DMQTp(fN, fO)
      },
      xxHLm: function (fN, fO) {
        return j.SnLpC(fN, fO)
      },
      lTIoM: function (fN, fO) {
        return fN + fO
      },
      kpsVh: function (fN, fO) {
        return j.HvqZS(fN, fO)
      },
      IQuyV: j.hDePp,
      WALrC: function (fN, fO) {
        return fN % fO
      },
      jQFMS: function (fN, fO) {
        return fN !== fO
      },
      Pgvjt: function (fN) {
        return j.AmuFc(fN)
      },
      APQQX: function (fN) {
        return j.wllna(fN)
      },
      BVoBq: j.uqTUP,
      IYzeZ: function (fN, fO) {
        return fN - fO
      },
      IkHTB: j.qSLjO,
    }
    if (!aJ) {
      return setTimeout(d5, 200)
    }
    cU = true
    cN.connect(
      d2,
      (fN) => {
        j.aVGwK(cZ)
        j.rAHXM(setInterval, cZ, 2500)
        const fO = new URLSearchParams(window.location.search)
        !fO.get(j.zFZmB) &&
          window.history.replaceState(
            document.title,
            document.title,
            j.RwsdW(j.bKGSC(window.location.href, j.ZDxNh), d4)
          )
        fN ? j.oFiDF(em, fN) : ((cT = true), j.heKhQ(fG))
      },
      {
        '2de': function fN(fO = '') {
          cN.socketId = fO
        },
        '892': function fO(fP) {
          ap = fP[fM.pefQo]
        },
        '037': em,
        '045': function fP(fQ) {
          const fR = fM.MtJiY.split('|')
          while (true) {
            switch (fR[fS++]) {
              case '0':
                !cS && ((cS = true), (aq.length = 0), (ar = 0))
                continue
              case '1':
                dK.style.display = fM.zGxtZ
                continue
              case '2':
                dt.style.display = fM.SvJMm
                continue
              case '3':
                dr = true
                continue
              case '4':
                dM.style.display = 'none'
                continue
              case '5':
                E = fQ
                continue
              case '6':
                aA = {}
                continue
              case '7':
                az = 0
                continue
              case '8':
                continue
            }
            break
          }
        },
        '552': function fQ(fR, fS) {
          !(F = fB(fR[0])) &&
            ((F = new aK(fR[0], fR[1])), an.push(F), (ao = an.length))
          F.spawn(fS ? de : null)
          F.visible = false
          F.x2 = undefined
          F.y2 = undefined
          F.setData(fR)
          if (fS) {
            const fT = j.IPDUW.split('|')
            while (true) {
              switch (fT[fU++]) {
                case '0':
                  dm = D.y
                  continue
                case '1':
                  dN.style.display = 'block'
                  continue
                case '2':
                  f4(0, 0)
                  continue
                case '3':
                  j.iCrDS(f2)
                  continue
                case '4':
                  j.DPril(f5, -1, -1, -1)
                  continue
                case '5':
                  dl = D.x
                  continue
                case '6':
                  j.KdqmD(eE, false, false)
                  continue
                case '7':
                  D = F
                  continue
              }
              break
            }
          }
        },
        e3e: function fR(fS) {
          for (let fT = ao; fT--; ) {
            if (fM.PQRGH(an[fT].id, fS)) {
              an.splice(fT, 1)
              ao = an.length
              break
            }
          }
        },
        b6e: function fS(fT) {
          a6 = 0
          for (let fU = ao; fU--; ) {
            F = an[fU]
            F.forcePos = !F.visible
            F.visible = false
          }
          for (let fV = fT.length, fW = Date.now(), fX = 0; fX < fV; fX += 13) {
            if ((F = fC(fT[fX]))) {
              const fY = fM.DcLyj.split('|')
              while (true) {
                switch (fY[fZ++]) {
                  case '0':
                    F.isLeader = fT[fM.uPdeK(fX, 8)]
                    continue
                  case '1':
                    F.zIndex = fT[fM.uPdeK(fX, 12)]
                    continue
                  case '2':
                    F.dt = 0
                    continue
                  case '3':
                    F.x1 = F.x
                    continue
                  case '4':
                    F.t1 = fM.Arqxa(F.t2, undefined) ? fW : F.t2
                    continue
                  case '5':
                    F.weaponIndex = fT[fM.uPdeK(fX, 5)]
                    continue
                  case '6':
                    F.buildIndex = fT[fM.vaWqj(fX, 4)]
                    continue
                  case '7':
                    F.tailIndex = fT[fX + 10]
                    continue
                  case '8':
                    F.team = fT[fX + 7]
                    continue
                  case '9':
                    F.skinIndex = fT[fM.ZTYqs(fX, 9)]
                    continue
                  case '10':
                    F.d1 = F.d2 === undefined ? fT[fM.kgUpF(fX, 3)] : F.d2
                    continue
                  case '11':
                    F.weaponVariant = fT[fM.ZTYqs(fX, 6)]
                    continue
                  case '12':
                    F.y2 = fT[fM.eyIdu(fX, 2)]
                    continue
                  case '13':
                    F.iconIndex = fT[fX + 11]
                    continue
                  case '14':
                    F.y1 = F.y
                    continue
                  case '15':
                    F.visible = true
                    continue
                  case '16':
                    F.t2 = fW
                    continue
                  case '17':
                    F.x2 = fT[fX + 1]
                    continue
                  case '18':
                    F.d2 = fT[fM.uPdeK(fX, 3)]
                    continue
                }
                break
              }
            }
          }
        },
        '6ef': function fT(fU) {
          j.uqBSw(ch, dU)
          for (let fV = 1, fW = fU.length, fX = 0; j.QRLXF(fX, fW); fX += 3) {
            j.Ipcgp(cm, {
              class: j.fWpPL,
              parent: dU,
              children: [
                cm({
                  class: 'leaderboardItem',
                  style: 'color:' + (j.WQaQN(fU[fX], E) ? j.nZsto : j.aQuAm),
                  text:
                    j.YBGbY(fV, '. ') +
                    (fU[fX + 1] != '' ? fU[j.qqDTO(fX, 1)] : 'unknown'),
                }),
                cm({
                  class: j.TyoTH,
                  text: bH(fU[j.UNZgP(fX, 2)]) || '0',
                }),
              ],
            })
            fV++
          }
        },
        '6e0': function fU(fV) {
          for (let fW = fV.length, fX = 0; fX < fW; fX += 8) {
            ec.add(
              fV[fX],
              fV[j.wTcVr(fX, 1)],
              fV[fX + 2],
              fV[j.IjHhW(fX, 3)],
              fV[fX + 4],
              fV[j.AnREH(fX, 5)],
              cs.list[fV[j.MrOSK(fX, 6)]],
              true,
              j.uibTe(fV[j.FqNCu(fX, 7)], 0) ? { sid: fV[fX + 7] } : null
            )
          }
        },
        '188': function fV(fW) {
          for (let fY = am; fY--; ) {
            al[fY].forcePos = !al[fY].visible
            al[fY].visible = false
          }
          if (!fW) {
            return
          }
          let fX = Date.now()
          for (let fZ = 0, g0 = fW.length; j.HpNEm(fZ, g0); fZ += 7) {
            if ((F = j.ytJMJ(fD, fW[fZ]))) {
              F.index = fW[fZ + 1]
              F.t1 = j.QdvpI(F.t2, undefined) ? fX : F.t2
              F.t2 = fX
              F.x1 = F.x
              F.y1 = F.y
              F.x2 = fW[j.obgBo(fZ, 2)]
              F.y2 = fW[j.JBCJx(fZ, 3)]
              F.d1 = j.QdvpI(F.d2, undefined) ? fW[fZ + 4] : F.d2
              F.d2 = fW[j.JBCJx(fZ, 4)]
              F.health = fW[j.TBBAZ(fZ, 5)]
              F.dt = 0
              F.visible = true
            } else {
              const g3 = j.ErNuc.split('|')
              while (true) {
                switch (g3[g4++]) {
                  case '0':
                    if (!ee.aiTypes[fW[j.TRcyE(fZ, 1)]].name) {
                      F.name = b5[fW[j.cPpTj(fZ, 6)]]
                    }
                    continue
                  case '1':
                    F.forcePos = true
                    continue
                  case '2':
                    F.y2 = F.y
                    continue
                  case '3':
                    F.visible = true
                    continue
                  case '4':
                    F.sid = fW[fZ]
                    continue
                  case '5':
                    F.health = fW[fZ + 5]
                    continue
                  case '6':
                    F.d2 = F.dir
                    continue
                  case '7':
                    F = ee.spawn(
                      fW[fZ + 2],
                      fW[j.wTcVr(fZ, 3)],
                      fW[j.YBGbY(fZ, 4)],
                      fW[j.euhmd(fZ, 1)]
                    )
                    continue
                  case '8':
                    F.x2 = F.x
                    continue
                }
                break
              }
            }
          }
        },
        '03e': function fW(fX) {
          ;(F = fD(fX))?.startAnim()
        },
        '06b': function fX(fY, fZ, g0) {
          ;(F = j.XMJYa(fC, fY))?.startAnim(fZ, g0)
        },
        c24: function fY(fZ, g0) {
          ;(F = fM.dYvUj(fE, g0)) &&
            ((F.xWiggle += fM.IWCPR(bu, fM.dYvUj(aa, fZ))),
            (F.yWiggle += fM.IWCPR(bu, fM.dYvUj(a9, fZ))))
        },
        '868': function fZ(g0, g1) {
          if ((F = j.HbsEQ(fE, g0))) {
            const g2 = g1 + a7
            F.dir = g1
            F.xWiggle += j.xGwGE(bu, j.bxJPv(aa, g2))
            F.yWiggle += j.QIWAn(bu, j.xFwOC(a9, g2))
          }
        },
        cb8: function g0(g1, g2, g3) {
          if (!D) {
            return
          }
          D[g1] = g2
          if (!g3) {
            return
          }
          j.YEvHR(f2)
        },
        ba1: function g1(g2, g3) {
          ;(F = j.jwVkl(fC, g2)) && (F.health = g3)
        },
        beb: function g2() {
          dr = false
          dN.style.display = j.jDepf
          j.iCrDS(eD)
          ew = {
            x: D.x,
            y: D.y,
          }
          dM.style.display = j.jDepf
          e6.style.display = j.mUVdZ
          e6.style.fontSize = j.ZGqgp
          aj = 0
          j.rAHXM(
            setTimeout,
            () => {
              dK.style.display = fM.zGxtZ
              dt.style.display = fM.zGxtZ
              e6.style.display = 'none'
            },
            bt
          )
        },
        '487': function g3(g4) {
          ec.disableBySid(g4)
        },
        '09d': function g4(g5) {
          if (D) {
            ec.removeAllItems(g5)
          }
        },
        e99: function g5(g6, g7) {
          D && (D.itemCounts[g6] = g7)
        },
        '759': f5,
        '643': f4,
        ada: eE,
        '3cb': function g6(g7, g8, g9, ga, gb, gc, gd, ge) {
          aI &&
            (ed.addProjectile(g7, g8, g9, ga, gb, gc, null, null, gd).sid = ge)
        },
        '64f': function g7(g8, g9) {
          for (let ga = as.length; ga--; ) {
            j.WQaQN(as[ga].sid, g8) && (as[ga].range = g9)
          }
        },
        '68a': function g8(g9) {
          if (fM.xxHLm(g9, 0)) {
            return
          }
          dJ.innerText = fM.lTIoM(
            fM.lTIoM(fM.kpsVh(fM.IQuyV, ad(g9 / 60)), ':'),
            fM.kgUpF('0', fM.WALrC(g9, 60)).slice(-2)
          )
          dJ.hidden = false
        },
        '47f': function g9(ga) {
          ap.push(ga)
          if (fM.jQFMS(e1.style.display, fM.zGxtZ)) {
            return
          }
          fM.Pgvjt(ev)
        },
        '76c': function ga(gb) {
          for (let gc = j.OkDJL(ap.length, 1); j.uibTe(gc, 0); gc--) {
            if (j.WQaQN(ap[gc][j.MNgNG], gb)) {
              ap.splice(gc, 1)
              break
            }
          }
          if (j.foGYb(e1.style.display, j.mUVdZ)) {
            j.YEvHR(ev)
          }
        },
        '25e': function gb(gc, gd) {
          aw.push({
            sid: gc,
            name: gd,
          })
          j.mzJWM(eu)
        },
        '1e1': function gc(gd, ge) {
          const gf = j.bWbPQ.split('|')
          while (true) {
            switch (gf[gg++]) {
              case '0':
                D.isOwner = ge
                continue
              case '1':
                if (!D) {
                  return
                }
                continue
              case '2':
                ev()
                continue
              case '3':
                if (j.vnKHb(e1.style.display, j.mUVdZ)) {
                  return
                }
                continue
              case '4':
                D.team = gd
                continue
            }
            break
          }
        },
        d4a: function gd(ge) {
          ax = ge
          if (e1.style.display !== fM.zGxtZ) {
            return
          }
          fM.APQQX(ev)
        },
        '1f8': function ge(gf, gg, gh) {
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
          if (j.IjcYR(e9.style.display, j.mUVdZ)) {
            eC()
          }
        },
        '32f': function gf(gg, gh) {
          ;(F = fM.dYvUj(fC, gg)) &&
            ((F.chatMessage = gh), (F.chatCountdown = bS))
        },
        '19c': function gg(gh) {
          au = gh
        },
        '91e': function gh(gi, gj, gk, gl) {
          cR.showText(
            gi,
            gj,
            50,
            0.18,
            500,
            j.ZaZYh(ab, gk),
            gk >= 0 ? j.nZsto : j.pHlCs
          )
        },
        b58: function gi(gj, gk) {
          for (let gl = ey.length; gl--; ) {
            if (!ey[gl].active) {
              ez = ey[gl]
              break
            }
          }
          !ez && ((ez = new e5()), ey.push(ez))
          ez.init(gj, gk)
        },
        e1d: function gj() {
          dI.innerText = fM.BVoBq + fM.IYzeZ(Date.now(), at) + fM.IkHTB
        },
        '564': function gk(gl) {
          cN.send(a2, j.SXdLv(k, j.XUeny(B, j.xFwOC(d1, gl))))
        },
        '3a6': function gl(gm) {
          C = gm
        },
      }
    )
    j.AmDHG(es)
    j.Sslof(setTimeout, es, 3000)
  }
  CanvasRenderingContext2D.prototype.roundRect = function (
    fM = 0,
    fN = 0,
    fO = 0,
    fP = 0,
    fQ = 0
  ) {
    if (j.EKCrA(fO, j.emwHa(2, fQ))) {
      fQ = fO / 2
    }
    if (j.OtybI(fP, j.yUZjK(2, fQ))) {
      fQ = j.EdQoc(fP, 2)
    }
    if (j.OtybI(fQ, 0)) {
      fQ = 0
    }
    const fR = j.UNZgP(fM, fQ),
      fS = j.RTloH(fM, fO),
      fT = j.vzgiE(fN, fP)
    this.beginPath()
    this.moveTo(fR, fN)
    this.arcTo(fS, fN, fS, fT, fQ)
    return (
      this.arcTo(fS, fT, fM, fT, fQ),
      this.arcTo(fM, fT, fM, fN, fQ),
      this.arcTo(fM, fN, fS, fN, fQ),
      this.closePath(),
      this
    )
  }
  j.KAbQI(typeof Storage, j.qswdN) && (d6 = true)
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
  if (!j.KEyel(d9, j.qEZaE)) {
    da.style.display = j.mUVdZ
  }
  dc.onclick = () => dd(0)
  db.onclick = () => dd(1)
  function df() {
    !de && ((de = true), j.GXahF(d7, j.dqWPz, 1))
  }
  dv.getElementsByTagName('span')[0].innerText = d4
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
        if (j.tfQYe((this.scale += j.xGwGE(0.05, fN)), bk)) {
          this.active = false
        } else {
          let fO = this.scale / bk
          fM.globalAlpha = j.MIBIO(
            1,
            j.DIwKN(0 > fO, 0) + j.oMYmH(j.KWzUR(0, fO), fO)
          )
          fM.beginPath()
          const fP = e4.width
          fM.arc(
            j.gAmHl(this.x / bN, fP),
            (this.y / bN) * fP,
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
  ei.innerHTML = j.RWaKp(j.lSxvp + ek.link + j.Nncoy + ek.name, j.DFpWp)
  dz.onclick = () => {
    dL.style.display = el ? j.mUVdZ : j.jDepf
    el = !el
  }
  window.onblur = function () {
    aI = false
  }
  window.onfocus = function () {
    aI = true
    D?.alive && j.jclCd(eX)
  }
  window.onload = function () {
    aJ = true
    j.qHMgj(d5)
    j.zZtez(
      setTimeout,
      function () {
        !cU && (j.BDgKR(alert, j.BMKWj), window.location.reload())
      },
      20000
    )
  }
  dD.oncontextmenu = () => false
  function em(fM) {
    cT = false
    cN.close()
    j.ktEbn(en, fM)
  }
  function en(fM) {
    const fN = j.mqHns.split('|')
    while (true) {
      switch (fN[fO++]) {
        case '0':
          dt.style.display = j.mUVdZ
          continue
        case '1':
          dM.innerHTML = fM + j.KInIG
          continue
        case '2':
          dM.style.display = 'block'
          continue
        case '3':
          dN.style.display = j.jDepf
          continue
        case '4':
          e6.style.display = j.jDepf
          continue
        case '5':
          dK.style.display = j.jDepf
          continue
      }
      break
    }
  }
  function es() {
    const fM = {
      xzVmb: j.RHkwd,
      dKqWb: j.ltNIR,
      POPhU: 'digitalocean',
      VOocM: function (fO, fP) {
        return j.JJYiK(fO, fP)
      },
      vaOOa: j.SpHTM,
      JmQBZ: function (fO, fP) {
        return j.iyBdH(fO, fP)
      },
      kBDyL: function (fO, fP) {
        return j.orKUK(fO, fP)
      },
      PhZBM: function (fO, fP) {
        return j.euhmd(fO, fP)
      },
      noFlQ: function (fO, fP) {
        return j.Qzeqk(fO, fP)
      },
      KauyY: j.dzPfZ,
      IJeCO: function (fO, fP) {
        return j.cYQtI(fO, fP)
      },
      TtvmB: function (fO, fP) {
        return j.UmQgT(fO, fP)
      },
      oHoIP: j.Lpxuv,
      ozUZi: j.gzBPW,
      nXGmQ: j.cpXxb,
      kfEeH: function (fO, fP) {
        return j.RUIVV(fO, fP)
      },
      KMnsW: j.jrhyX,
    }
    const fN = new XMLHttpRequest()
    fN.open(j.VWGBF, ep)
    fN.onload = () => {
      let fO
      try {
        fO = eq(fN.responseText)
      } catch (fP) {
        console.error(fP)
      }
      if (fO) {
        let fQ = '',
          fR = 0
        const fS = fO[fM.xzVmb][fM.dKqWb]((fU) => [
            fU.ip,
            fU.playerCount,
            fU.alias,
          ]),
          fT = fS.length
        for (let [fU, fV, fW] of fS) {
          let fX,
            fY,
            fZ,
            g0,
            g1 = fU.includes(fM.POPhU)
          g1
            ? (g0 = fM.VOocM(
                fM.VOocM(fU.split('-')[2].split('.')[0], fM.vaOOa),
                fU.slice(-1)
              ))
            : ((fX = fU.split('-')[1].slice(1)),
              (fY = fU.split('-r')[1].split('.')[0]),
              (fZ = fU.slice(-1)),
              (g0 = fM.VOocM(
                fM.JmQBZ(fM.kBDyL(fM.PhZBM(fX, ':'), fY), ':'),
                fZ
              )))
          const g2 = fM.noFlQ(g0.replace(':n:', ':'), d4) ? fM.KauyY : ''
          fQ += fM.JmQBZ(
            fM.JmQBZ(
              fM.IJeCO(
                fM.JmQBZ(
                  fM.TtvmB(
                    fM.JmQBZ(
                      fM.JmQBZ(fM.IJeCO(fM.oHoIP + g0, ':'), g1 ? '1' : '0') +
                        "'",
                      g2
                    ),
                    '>'
                  ),
                  fW
                ),
                fM.ozUZi
              ),
              fV
            ),
            fM.nXGmQ
          )
          fM.kfEeH(++fR, fT) && (fQ += fM.KMnsW)
        }
        dF.innerHTML = fQ
      }
    }
    fN.send()
  }
  dF.addEventListener(
    j.RZMIV,
    j.bxJPv(ck, function () {
      const [fM, fN, fO, fP] = dF.value.split(':')
      cN.switchServer(fM, fN, fO, +fP)
    })
  )
  function et(fM = false, fN = false, fO = false) {
    if (j.FExpu(fM, D)) {
      ch(dW)
      dW.classList.add(j.onLaZ)
      j.mkEzW(cm, {
        id: j.HZUBO,
        text: j.oFiDF(bP, fM.name),
        parent: dW,
      })
      j.bYboM(cm, {
        id: j.uKbhN,
        text: fM.desc,
        parent: dW,
      })
      if (fO) {
      } else {
        if (fN) {
          j.Ipcgp(cm, {
            class: j.dmoiT,
            text: !fM.type ? 'primary' : j.uTopF,
            parent: dW,
          })
        } else {
          for (let fP = 0, fQ = fM.req.length; fP < fQ; fP += 2) {
            j.SXdLv(cm, {
              class: j.dmoiT,
              html: j.Ydcnw(
                j.oBYcc(
                  j.dxteE(fM.req[fP], "<span class='itemInfoReqVal'> x"),
                  fM.req[fP + 1]
                ),
                j.cwYug
              ),
              parent: dW,
            })
          }
          fM.group.limit &&
            cm({
              class: 'itemInfoLmt',
              text: j.HvqZS(
                (D.itemCounts[fM.group.id] || 0) + '/',
                fM.group.limit
              ),
              parent: dW,
            })
        }
      }
    } else {
      dW.classList.remove(j.onLaZ)
    }
  }
  function eu() {
    if (aw[0]) {
      const fM = j.FgAdx.split('|')
      while (true) {
        switch (fM[fN++]) {
          case '0':
            j.UCvYI(ch, eb)
            continue
          case '1':
            j.ikDMg(cm, {
              class: j.ooxsy,
              html: j.KNzdS,
              parent: eb,
              onclick: function () {
                cN.send(T, aw[0].sid, 1)
                aw.splice(0, 1)
                eu()
              },
              hookTouch: true,
            })
            continue
          case '2':
            cm({
              class: j.iltYL,
              text: aw[0].name,
              parent: eb,
            })
            continue
          case '3':
            eb.style.display = j.mUVdZ
            continue
          case '4':
            j.uqBSw(cm, {
              class: 'notifButton',
              html: j.GdSuv,
              parent: eb,
              onclick: function () {
                cN.send(T, aw[0].sid, 0)
                aw.splice(0, 1)
                j.juZbL(eu)
              },
              hookTouch: true,
            })
            continue
        }
        break
      }
    } else {
      eb.style.display = 'none'
    }
  }
  function ev() {
    const fM = {
      rrJzz: function (fN) {
        return j.LBzXe(fN)
      },
      zcwUy: function (fN, fO, fP) {
        return j.sugQq(fN, fO, fP)
      },
      hkSso: j.jBJRk,
    }
    if (D?.alive) {
      j.ppsUy(eM)
      e9.style.display = j.jDepf
      e1.style.display = 'block'
      ch(e2)
      if (D.team) {
        for (let fN = 0, fO = ax.length; j.yEpXE(fN, fO); fN += 2) {
          const fP = fN
          let fQ = j.uqBSw(cm, {
            class: j.EyPpd,
            style:
              'color:' +
              (j.HAdEc(ax[fP], D.sid) ? '#fff' : 'rgba(255,255,255,0.6)'),
            text: ax[j.ewrAx(fP, 1)],
            parent: e2,
          })
          D.isOwner &&
            j.OuoUg(ax[fP], D.sid) &&
            cm({
              class: j.CTIpK,
              text: j.KXmlL,
              onclick: function () {
                cN.send(U, ax[fN])
              },
              hookTouch: true,
              parent: fQ,
            })
        }
      } else {
        const fR = ap.length
        if (fR) {
          for (let fS = 0; j.LNZfb(fS, fR); ++fS) {
            const fT = fS
            let fU = j.ZaZYh(cm, {
              class: j.EyPpd,
              style: j.gCPuP(
                'color:',
                j.gMRAv(ap[fT][j.MNgNG], D.team) ? j.nZsto : j.aQuAm
              ),
              text: ap[fT][j.MNgNG],
              parent: e2,
            })
            j.ktEbn(cm, {
              class: 'joinAlBtn',
              text: j.TEuRr,
              onclick: function () {
                cN.send(S, ap[fT][j.MNgNG])
              },
              hookTouch: true,
              parent: fU,
            })
          }
        } else {
          j.UPMje(cm, {
            class: j.EyPpd,
            text: j.DMrjw,
            parent: e2,
          })
        }
      }
      j.wgqAX(ch, e3)
      D.team
        ? j.CWLoZ(cm, {
            class: 'allianceButtonM',
            style: j.EBHpm,
            text: D.isOwner ? j.VjFtn : j.qzAVO,
            onclick: function () {
              aw = []
              fM.rrJzz(eu)
              cN.send(R)
            },
            hookTouch: true,
            parent: e3,
          })
        : (j.mxWVQ(cm, {
            tag: j.OFYxn,
            type: 'text',
            id: j.KMQUl,
            maxLength: 7,
            placeholder: j.jBJRk,
            ontouchstart: function (fV) {
              fV.preventDefault()
              fV.currentTarget.value = fM
                .zcwUy(prompt, fM.hkSso, fV.currentTarget.value)
                .slice(0, 7)
            },
            parent: e3,
          }),
          cm({
            tag: 'div',
            class: j.CeErO,
            style: j.pMLkb,
            text: j.xSoNA,
            onclick: () =>
              cN.send(Q, document.getElementById('allianceInput').value),
            hookTouch: true,
            parent: e3,
          }))
    }
  }
  document.getElementById('hatStoreSel').onclick = () => eB(0)
  document.getElementById(j.AyviS).onclick = () => eB(1)
  function eC() {
    if (D) {
      j.GgUgY(ch, ea)
      let fN = eA,
        fO = fN ? cw : cv
      for (let fP = 0, fQ = fO.length; j.SSvdS(fP, fQ); ++fP) {
        const fR = fP,
          fS = fO[fR]
        if (fS.dontSell) {
          continue
        }
        let fT = j.ZcVKP(cm, {
          id: j.FLJqR(k, j.NYLOq + fR + j.LBzXe(c5)),
          class: j.eOSkc,
          onmouseout: function () {
            et()
          },
          onmouseover: function () {
            j.cttme(et, fS, false, true)
          },
          parent: ea,
        })
        j.jRIEi(cl, fT, true)
        cm({
          tag: j.kTLPA,
          class: 'hatPreview',
          src: j.XMJYa(
            cM,
            j.wLKOp(
              j.YIzoE(j.SmpuN('../img/', fN ? j.CtSCP : j.VbcsY), fS.id) +
                (fS.topSprite ? '_p' : ''),
              j.JoRxC
            )
          ),
          parent: fT,
        })
        j.bFqBH(cm, {
          tag: j.AZRhR,
          text: fS.name,
          parent: fT,
        })
        if (fN ? !D.tails[fS.id] : !D.skins[fS.id]) {
          cm({
            class: j.CTIpK,
            style: 'margin-top: 5px',
            text: j.DZAHW,
            onclick: function () {
              cN.send(W, 1, fS.id, fN)
            },
            hookTouch: true,
            parent: fT,
          })
          cm({
            tag: j.AZRhR,
            class: j.TYvSx,
            text: fO[fR].price,
            parent: fT,
          })
        } else {
          j.HAdEc(fN ? D.tailIndex : D.skinIndex, fS.id)
            ? cm({
                class: j.CTIpK,
                style: 'margin-top: 5px',
                text: j.WwcOZ,
                onclick: function () {
                  cN.send(W, 0, 0, fN)
                },
                hookTouch: true,
                parent: fT,
              })
            : j.xsBYf(cm, {
                class: j.CTIpK,
                style: j.HqZMV,
                text: 'Equip',
                onclick: function () {
                  cN.send(W, 0, fS.id, fN)
                },
                hookTouch: true,
                parent: fT,
              })
        }
      }
    }
  }
  function eD() {
    e9.style.display = j.jDepf
    e1.style.display = j.jDepf
    j.VaPMB(eM)
  }
  function eE(fM, fN) {
    fM && (fN ? (D.weapons = fM) : (D.items = fM))
    for (let fO = 0; j.HpNEm(fO, cP); ++fO) {
      document.getElementById(j.QvdgN(j.tVXdf, cO + fO)).style.display =
        j.jYMDy(D.items.indexOf(cs.list[fO].id), 0) ? j.bGzKY : j.jDepf
    }
    for (let fP = 0; fP < cO; ++fP) {
      document.getElementById(j.JBCJx(j.tVXdf, fP)).style.display = j.SKeuJ(
        D.weapons[cs.weapons[fP].type],
        cs.weapons[fP].id
      )
        ? j.bGzKY
        : 'none'
    }
  }
  function eF(fM = false) {
    dg = fM
    di = fM ? window.devicePixelRatio || 1 : 1
    dG.checked = fM
    j.wmuUl(d7, j.evqlC, fM.toString())
    j.ucvog(eP)
  }
  function eG() {
    let fM = ''
    for (let fN = 0; j.Gfelg(fN, bV); ++fN) {
      fN == dn
        ? (fM += j.UNZgP(
            j.oPiIB(j.gQIUJ(j.YBGbY(j.FIMSQ, bU[fN]), j.eLbDM), fN),
            ")'></div>"
          ))
        : (fM += j.kIfCv(
            j.XLeiu(j.OJTga(j.BDsmA(j.mQKzl, bU[fN]), j.eLbDM), fN),
            j.IzjuA
          ))
    }
    e7.innerHTML = fM
  }
  function eH(fM) {
    dn = fM
    j.rzFNX(d7, j.kmXzT, fM)
    j.wllna(eG)
  }
  window.selectSkinColor = eH
  function eL() {
    const fM = {
      gDTbB: j.blSIC,
      mYFKR: function (fN, fO) {
        return fN(fO)
      },
    }
    if (!ak) {
      if (j.SKeuJ(eJ.style.display, j.mUVdZ)) {
        ;(eK = eI.value) && cN.send(I, j.ujCWr(ai, eK).slice(0, 30))
        j.hJRcN(eM)
      } else {
        const fN = j.TycKg.split('|')
        while (true) {
          switch (fN[fO++]) {
            case '0':
              eI.focus()
              continue
            case '1':
              e9.style.display = 'none'
              continue
            case '2':
              e1.style.display = j.jDepf
              continue
            case '3':
              eJ.style.display = j.mUVdZ
              continue
            case '4':
              eX()
              continue
          }
          break
        }
      }
    } else {
      setTimeout(function () {
        ;(eK = prompt(fM.gDTbB)) && cN.send(I, fM.mYFKR(ai, eK).slice(0, 30))
      }, 1)
    }
    eI.value = ''
  }
  function eM() {
    eI.value = ''
    eJ.style.display = j.jDepf
  }
  window.addEventListener('resize', j.grTqs(ck, eP))
  function eP() {
    dp = window.innerWidth
    dq = window.innerHeight
    let fM = j.phcgq(j.DkhpT(aX, j.GEHFZ(dp, be), j.BtLcP(dq, bf)), di)
    eN = dD.width = j.stoFd(dp, di)
    eO = dD.height = j.XAfLE(dq, di)
    dD.style.width = j.kNBsa(dp, 'px')
    dD.style.height = j.orKUK(dq, 'px')
    dE.setTransform(
      fM,
      0,
      0,
      fM,
      j.wxHci(j.SFXMJ(j.KJMqt(dp, di), j.aEIYv(be, fM)), 2),
      j.DLdDx(j.lEmGU(dq, di), j.tNYTm(bf, fM)) / 2
    )
  }
  j.Qbkki(eP)
  j.tjARn(eQ, false)
  function eQ(fM) {
    ;(ak = fM) ? dL.classList.add(j.bUAzj) : dL.classList.remove(j.bUAzj)
  }
  function eS(fM) {
    fM.preventDefault()
    fM.stopPropagation()
    j.XMJYa(eQ, true)
    for (let fN = fM.changedTouches.length; fN--; ) {
      let { identifier: fO, pageX: fP, pageY: fQ } = fM.changedTouches[fN]
      if (j.nZoTZ(fO, cq.id)) {
        cq.currentX = fP
        cq.currentY = fQ
        j.wllna(eZ)
      } else {
        j.mYaDE(fO, cr.id) && ((cr.currentX = fP), (cr.currentY = fQ), (az = 1))
      }
    }
  }
  function eT(fM) {
    fM.preventDefault()
    fM.stopPropagation()
    j.FLzDz(eQ, true)
    for (let fN = fM.changedTouches.length; fN--; ) {
      let { identifier: fO, pageX: fP, pageY: fQ } = fM.changedTouches[fN]
      if (
        j.Gfelg(fP, j.khTTC(document.body.scrollWidth, 2)) &&
        j.foGYb(cq.id, -1)
      ) {
        cq.id = fO
        cq.startX = cq.currentX = fP
        cq.startY = cq.currentY = fQ
        j.PXciu(eZ)
      } else {
        if (
          j.KYeUd(fP, j.NTPRY(document.body.scrollWidth, 2)) &&
          j.ORPGY(cr.id, -1)
        ) {
          cr.id = fO
          cr.startX = cr.currentX = fP
          cr.startY = cr.currentY = fQ
          j.HpNEm(D.buildIndex, 0) && ((az = 1), j.VaPMB(eR))
        }
      }
    }
  }
  function eU(fM) {
    fM.preventDefault()
    fM.stopPropagation()
    j.mkEzW(eQ, true)
    for (let fN = fM.changedTouches.length; fN--; ) {
      let { identifier: fO } = fM.changedTouches[fN]
      if (fO == cq.id) {
        cq.id = -1
        j.fWQxC(eZ)
      } else {
        j.ORPGY(fO, cr.id) &&
          ((cr.id = -1),
          D.buildIndex >= 0 && ((az = 1), j.WdCqk(eR)),
          (az = 0),
          j.iCrDS(eR))
      }
    }
  }
  dD.addEventListener(j.LtYuM, j.xsBYf(ck, eS), false)
  dD.addEventListener(j.QdEDJ, j.JOpBX(ck, eT), false)
  dD.addEventListener(j.BNmGv, j.UCvYI(ck, eU), false)
  dD.addEventListener('touchcancel', j.LKMqr(ck, eU), false)
  dD.addEventListener(j.gpdvG, ck(eU), false)
  dD.addEventListener(
    j.ANDOb,
    function fM(fN) {
      const fO = j.upNtQ.split('|')
      while (true) {
        switch (fO[fP++]) {
          case '0':
            dj = fN.clientX
            continue
          case '1':
            fN.preventDefault()
            continue
          case '2':
            dk = fN.clientY
            continue
          case '3':
            fN.stopPropagation()
            continue
          case '4':
            eQ(false)
            continue
        }
        break
      }
    },
    false
  )
  dD.addEventListener(
    j.aCHCk,
    function fN(fO) {
      j.bxJPv(eQ, false)
      j.nhyvq(az, 1) && ((az = 1), j.LBzXe(eR))
    },
    false
  )
  dD.addEventListener(
    j.OCpTg,
    function fO(fP) {
      eQ(false)
      j.QzAcC(az, 0) && ((az = 0), j.aVGwK(eR))
    },
    false
  )
  function eV() {
    let fQ = 0,
      fR = 0
    j.yUQId(cq.id, -1)
      ? ((fQ += j.PQJud(cq.currentX, cq.startX)),
        (fR += j.kAvdr(cq.currentY, cq.startY)))
      : bQ.forEach(([fS, fT], fU) => {
          fQ += j.uJMfR(!!aA[fU], fS)
          fR += !!aA[fU] * fT
        })
    return j.yWPkb(fQ == 0, fR == 0) ? undefined : j.qzLdu(bJ, ae(fR, fQ), 2)
  }
  function eW() {
    if (!D) {
      return 0
    }
    if (j.kuRgX(cr.id, -1)) {
      aH = j.WmQNo(ae, cr.currentY - cr.startY, j.BPxoj(cr.currentX, cr.startX))
    } else {
      !D.lockDir &&
        !ak &&
        (aH = j.JBwss(ae, j.mxlAd(dk, j.meGSy(dq, 2)), dj - j.mYYyY(dp, 2)))
    }
    return j.PrElt(bJ, j.pClez(aH, 0), 2)
  }
  function eX() {
    aA = {}
    cN.rawSend(cX)
  }
  function eY() {
    return (
      j.QzAcC(e1.style.display, 'block') && j.REJEU(eJ.style.display, j.mUVdZ)
    )
  }
  window.addEventListener(
    j.iFQat,
    j.QPCPX(ck, function fP(fQ) {
      let fR = fQ.which || fQ.keyCode || 0
      if (j.jHhXt(fR, 27)) {
        j.ZYFtb(eD)
      } else {
        if (D?.alive && j.NsRrB(eY)) {
          if (!aA[fR]) {
            aA[fR] = 1
            if (j.GxpIN(fR, 69)) {
              cN.send(P, 1)
            } else {
              if (j.ORciF(fR, 67)) {
                ex || (ex = {})
                ex.x = D.x
                ex.y = D.y
              } else {
                if (fR == 88) {
                  D.lockDir = D.lockDir ? 0 : 1
                  cN.send(P, 0)
                } else {
                  if (j.kuRgX(D.weapons[j.NqVOj(fR, 49)], undefined)) {
                    f1(D.weapons[j.Feool(fR, 49)], true)
                  } else {
                    if (
                      j.RgZEa(
                        D.items[j.bHLjn(j.AbUkp(fR, 49), D.weapons.length)],
                        undefined
                      )
                    ) {
                      j.MsJXl(
                        f1,
                        D.items[j.RCpLo(j.MIBIO(fR, 49), D.weapons.length)]
                      )
                    } else {
                      if (j.wHzIe(fR, 81)) {
                        j.vRMwU(f1, D.items[0])
                      } else {
                        if (j.iEcjL(fR, 82)) {
                          j.fcxxB(f0)
                        } else {
                          if (bQ.has(fR)) {
                            j.kbnfQ(eZ)
                          } else {
                            j.GXKHB(fR, 32) && ((az = 1), j.DIlOd(eR))
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
    j.ooSEP,
    j.SXdLv(ck, function fQ(fR) {
      if (D?.alive) {
        let fS = fR.which || fR.keyCode || 0
        if (fS == 13) {
          eL()
        } else {
          if (eY()) {
            if (aA[fS]) {
              aA[fS] = 0
              if (bQ.has(fS)) {
                eZ()
              } else {
                fS == 32 && ((az = 0), eR())
              }
            }
          }
        }
      }
    })
  )
  function eZ() {
    let fR = j.mzJWM(eV)
    ;(av == undefined ||
      j.EPmkc(fR, undefined) ||
      j.XMJYa(ab, j.plitL(fR, av)) > 0.3) &&
      (cN.send(a0, fR), (av = fR))
  }
  function f0() {
    cN.rawSend(cY)
  }
  function f1(fR, fS = false) {
    cN.send(N, fR, fS)
  }
  function f2() {
    dP.innerText = D.points
    dQ.innerText = D.food
    dR.innerText = D.wood
    dS.innerText = D.stone
    dT.innerText = D.kills
  }
  function f4(fR = 0, fS = 0) {
    D.upgradePoints = fR
    D.upgrAge = fS
    if (j.nRLFo(fR, 0)) {
      f3.length = 0
      ch(dZ)
      let fU = 0,
        fV = cO
      for (; fU < fV; ++fU) {
        j.ORciF(cs.weapons[fU].age, fS) &&
          (cs.weapons[fU].pre == undefined ||
            j.WqcUa(D.weapons.indexOf(cs.weapons[fU].pre), 0)) &&
          ((cm({
            id: j.blNJn(j.SgNXP, fU),
            class: 'actionBarItem',
            onmouseout: function () {
              et()
            },
            parent: dZ,
          }).style.backgroundImage = document.getElementById(
            j.JhgOG(j.tVXdf, fU)
          ).style.backgroundImage),
          f3.push(fU))
      }
      for (fU = 0, fV = cP; j.SSvdS(fU, fV); ++fU) {
        if (
          j.gMRAv(cs.list[fU].age, fS) &&
          (cs.list[fU].pre == undefined ||
            j.WFWoH(D.items.indexOf(cs.list[fU].pre), 0))
        ) {
          let fW = j.oPiIB(cO, fU)
          j.ZaZYh(cm, {
            id: j.SgNXP + fW,
            class: j.tVXdf,
            onmouseout: () => et(),
            parent: dZ,
          }).style.backgroundImage = document.getElementById(
            j.kXwjC(j.tVXdf, fW)
          ).style.backgroundImage
          f3.push(fW)
        }
      }
      fV = f3.length
      for (fU = 0; j.VrRSc(fU, fV); ++fU) {
        ;(function (fX) {
          let fZ = document.getElementById(j.IGVrK('upgradeItem', fX))
          fZ.onmouseover = function () {
            cs.weapons[fX]
              ? et(cs.weapons[fX], true)
              : et(cs.list[j.xAErY(fX, cO)])
          }
          fZ.onclick = j.NFKng(ck, function () {
            cN.send(O, fX)
          })
          cl(fZ)
        })(f3[fU])
      }
      fV
        ? ((dZ.style.display = j.mUVdZ),
          (e0.style.display = j.mUVdZ),
          (e0.innerHTML = j.rZsXL(j.zRjRx, fR) + ')'))
        : ((dZ.style.display = j.jDepf),
          (e0.style.display = 'none'),
          j.juZbL(et))
    } else {
      dZ.style.display = j.jDepf
      e0.style.display = j.jDepf
      j.VYAko(et)
    }
  }
  function f5(fR = -1, fS = -1, fT = -1) {
    const fU = j.LnBrQ.split('|')
    while (true) {
      switch (fU[fV++]) {
        case '0':
          continue
        case '1':
          j.TRNjB(fT, b4)
            ? ((dX.innerHTML = 'MAX AGE'), (dY.style.width = j.DjclV))
            : ((dX.innerHTML = j.qEDZR(j.mQWIH, D.age)),
              (dY.style.width = j.eTVLK(
                j.lEmGU(j.YPVuF(D.XP, D.maxXP), 100),
                '%'
              )))
          continue
        case '2':
          fR != -1 && (D.XP = fR)
          continue
        case '3':
          j.REJEU(fT, -1) && (D.age = fT)
          continue
        case '4':
          fS != -1 && (D.maxXP = fS)
          continue
      }
      break
    }
  }
  f8 = Date.now()
  function f9() {
    aD = Date.now()
    aB = j.LWmIP(aD, f8)
    aC = 0.002 * aB
    f8 = aD
    if (aj < 120) {
      aj += j.qnljv(0.1, aB)
      let g1 = af(aj)
      e6.style.fontSize = j.MrOSK(
        j.qqDTO(j.gAmHl(j.VtXQm(g1, 120), 120), j.ofCEv(g1, 120) * g1),
        'px'
      )
    }
    if (D) {
      aD - aE >= b8 && ((aE = aD), cN.send(L, j.hJRcN(eW)))
      const { x: g2, y: g3 } = D
      let g4 = j.CTVdI(bL, dl, dm, g2, g3),
        g5 = j.GMiDR(bK, g2, g3, dl, dm),
        g6 = j.Dnhyh(j.egWLn(g4, 0.01), aB),
        g7 = j.cPpTj(j.ujhxa(j.bsbPa(g6, g4), g4), (g6 <= g4) * g6)
      dl = j.ChHtQ(
        j.TLlOd(j.AVvjc(g4, 0.05), j.QvdgN(dl, j.uJMfR(g7, j.Ipcgp(aa, g5)))),
        j.OxocS(j.ofCEv(g4, 0.05), g2)
      )
      dm = j.blNJn(
        (g4 > 0.05) * j.blNJn(dm, g7 * j.XZDgr(a9, g5)),
        j.iGRqL(j.YuXlo(g4, 0.05), g3)
      )
    } else {
      dl = bO
      dm = bO
    }
    let fR = j.rUlPP(aD, ba),
      fS = j.UNZgP(ao, am),
      fT = 0
    for (fT = fS; fT--; ) {
      if ((F = an[fT] || al[fT - ao])?.visible) {
        if (F.forcePos) {
          F.x = F.x2
          F.y = F.y2
          F.dir = F.d2
        } else {
          let g8 = j.rHhNi((F.dt += aB), 170)
          const g9 = j.hALhO(
            j.dRvew(g8 > 1.7, 1.7),
            j.yLsax(j.pORqu(g8, 1.7), g8)
          )
          F.x = F.x1 + j.MzGNg(j.jodhU(F.x2, F.x1), g9)
          F.y = j.XLeiu(F.y1, j.LWmIP(F.y2, F.y1) * g9)
          g8 = j.ZOebM(fR, F.t1) / j.JPsBW(F.t2, F.t1)
          F.dir = j.iABTg(
            cn,
            F.d2,
            F.d1,
            j.oCeRf((g8 < 1.2) * g8, j.DIwKN(j.ofCEv(1.2, g8), 1.2))
          )
        }
      }
    }
    const fU = j.OhjOQ(dl, c6),
      fV = j.kAvdr(dm, c7),
      fW = bo - fV,
      fX = j.XllpK(bN, bo) - fV
    fW <= 0 && j.jYMDy(fX, bf)
      ? ((dE.fillStyle = j.JcqHr), dE.fillRect(0, 0, be, bf))
      : j.YIOJF(fX, 0)
      ? ((dE.fillStyle = j.PemFL), dE.fillRect(0, 0, be, bf))
      : j.FsiTT(fW, bf)
      ? ((dE.fillStyle = '#fff'), dE.fillRect(0, 0, be, bf))
      : j.mHsuo(fW, 0)
      ? ((dE.fillStyle = j.nZsto),
        dE.fillRect(0, 0, be, fW),
        (dE.fillStyle = j.JcqHr),
        dE.fillRect(0, fW, be, j.WzALe(bf, fW)))
      : ((dE.fillStyle = j.JcqHr),
        dE.fillRect(0, 0, be, fX),
        (dE.fillStyle = j.PemFL),
        dE.fillRect(0, fX, be, bf - fX))
    if (cS) {
      const ga = j.xFlAv.split('|')
      while (true) {
        switch (ga[gb++]) {
          case '0':
            continue
          case '1':
            aF += j.iGRqL(j.qTOYr(aG, bp), aB)
            continue
          case '2':
            if (j.JHmGY(aF, bl)) {
              aF = bl
              aG = -1
            } else {
              j.awElS(aF, 1) && (aF = aG = 1)
            }
            continue
          case '3':
            j.nPpZq(fe, fU, fV, dE, bq)
            continue
          case '4':
            dE.globalAlpha = 1
            continue
          case '5':
            dE.fillStyle = j.clOgR
            continue
          case '6':
            dE.fillStyle = j.PemFL
            continue
          case '7':
            fe(fU, fV, dE, j.loOOc(aF, 1) * 250)
            continue
        }
        break
      }
    }
    dE.lineWidth = 4
    dE.strokeStyle = j.rHade
    dE.globalAlpha = 0.06
    dE.beginPath()
    for (let gc = -dl; j.LNZfb(gc, be); gc += c8) {
      j.jzadm(gc, 0) && (dE.moveTo(gc, 0), dE.lineTo(gc, bf))
    }
    for (let gd = -dm; j.Jbvaz(gd, bf); gd += c8) {
      dE.moveTo(0, gd)
      dE.lineTo(be, gd)
    }
    dE.stroke()
    dE.globalAlpha = 1
    dE.strokeStyle = ef
    j.kEQIH(ff, -1, fU, fV)
    dE.globalAlpha = 1
    dE.lineWidth = eh
    j.DPril(fc, 0, fU, fV)
    fg(fU, fV, 0)
    dE.globalAlpha = 1
    for (fT = am; fT--; ) {
      if ((F = al[fT])?.active && F.visible) {
        F.animate(aB)
        dE.save()
        dE.translate(F.x - fU, j.KOyIF(F.y, fV))
        dE.rotate(j.yFbmx(F.dir, F.dirPlus) - aT)
        let ge = c1[F.index]
        if (ge?.isLoaded) {
          const gf = j.TLlOd(j.aEeEQ(F.scale, 1.2), F.spriteMlt || 1),
            gg = j.ujhxa(gf, 2)
          dE.drawImage(ge, -gf, -gf, gg, gg)
        } else {
          if (!ge?.isLoading) {
            let gh = new Image()
            gh.onload = function () {
              gh.isLoading = false
              gh.isLoaded = true
              gh.onload = null
            }
            gh.setAttribute('crossorigin', j.xAijr)
            gh.src = j.LOAwj(cM, j.pdSSM(j.JafiO(j.KzlbE, F.src), j.JoRxC))
            gh.isLoading = true
            ge = gh
            c1[F.index] = ge
          }
        }
        dE.restore()
      }
    }
    j.cttme(ff, 0, fU, fV)
    j.zvDVE(fc, 1, fU, fV)
    ff(1, fU, fV)
    j.AjXcl(fg, fU, fV, 1)
    j.zvDVE(ff, 2, fU, fV)
    j.zvDVE(ff, 3, fU, fV)
    dE.fillStyle = j.rHade
    dE.globalAlpha = 0.09
    j.YuXlo(fU, 0) && dE.fillRect(0, 0, -fU, bf)
    const fY = bN - fU,
      fZ = j.INQdA(bN, fV)
    if (j.qwwXZ(fY, be)) {
      const gi = j.ujhxa(j.APxMR(0, -fV), -fV)
      dE.fillRect(fY, gi, j.DLdDx(be, fY), j.kCfmw(bf, gi))
    }
    j.gdXau(fV, 0) && dE.fillRect(-fU, 0, j.kIfCv(be, fU), -fV)
    if (fZ <= bf) {
      let gj = j.tsjer(0 > -fU, -fU),
        gk = 0
      if (fY <= be) {
        gk = j.jlBgg(be, fY)
      }
      dE.fillRect(gj, fZ, j.Odeak(be - gj, gk), bf - fZ)
    }
    dE.globalAlpha = 1
    dE.fillStyle = j.QPGhk
    dE.fillRect(0, 0, be, bf)
    dE.strokeStyle = eg
    for (fT = fS; fT--; ) {
      if ((F = an[fT] || al[j.kAvdr(fT, ao)])?.visible) {
        const {
          x: gl,
          y: gm,
          scale: gn,
          isLeader: go,
          skinIndex: gp,
          team: gq,
          name: gr,
          health: gs,
          maxHealth: gt,
          nameScale: gu,
          iconIndex: gv,
        } = F
        if (j.aWzWy(gp, 10) || j.mnjGB(F, D) || (gq && j.jHhXt(gq, D.team))) {
          const gw = j.OJTga(
              j.BDsmA(
                cV ? (F.sid ? j.qDslZ(j.OKoJi('{', F.sid), '} ') : '') : '',
                gq ? j.wLKOp(j.lyQbZ('[', gq), '] ') : ''
              ),
              j.pClez(gr, '')
            ),
            gx = j.jodhU(gl, fU)
          if (gw) {
            dE.font = j.SIMzK(gu, 30) + 'px Hammersmith One'
            dE.fillStyle = j.nZsto
            dE.textBaseline = j.WXDDT
            dE.textAlign = 'center'
            dE.lineWidth = gu ? 11 : 8
            dE.lineJoin = j.jbnKK
            const gy = j.FxIGj(j.plitL(j.bHLjn(gm, fV), gn), bm)
            dE.strokeText(gw, gx, gy)
            dE.fillText(gw, gx, gy)
            go &&
              bZ[j.IltiM][j.nyvAf] &&
              dE.drawImage(
                bZ[j.IltiM],
                j.zxeHs(gx - ce, j.khTTC(dE.measureText(gw).width, 2)) - br,
                j.xAErY(gy - ce, 5),
                bd,
                bd
              )
            j.HAdEc(gv, 1) &&
              bZ.skull.isLoaded &&
              dE.drawImage(
                bZ[j.dJtzP],
                j.Odeak(gx, ce) + j.QVQJb(dE.measureText(gw).width, 2) + br,
                j.aOpot(j.kCfmw(gy, ce), 5),
                bd,
                bd
              )
          }
          if (gs) {
            dE.fillStyle = eg
            const gz = gx - bs,
              gA = j.VRrdl(j.kvldM(gm, fV) + gn, bm)
            dE.roundRect(gz - ca, gA, cd, 17, 8)
            dE.fill()
            dE.fillStyle =
              j.Jtihb(F, D) || (gq && j.IjcYR(gq, D.team)) ? j.pHlCs : j.fwFHb
            dE.roundRect(gz, j.zYfMq(gA, ca), j.AbvoD(c9, gs / gt), cc, 7)
            dE.fill()
          }
        }
      }
    }
    cR.update(aB, dE, fU, fV)
    for (fT = ao; fT--; ) {
      if ((F = an[fT])?.visible && F.chatCountdown) {
        if (j.gNBoJ((F.chatCountdown -= aB), 0)) {
          F.chatCountdown = 0
        }
        dE.font = j.aOlnb
        const gB = dE.measureText(F.chatMessage).width + 17,
          gC = j.tkqIN(F.x, fU),
          gD = j.JqIzh(F.y - F.scale - fV, 90)
        dE.textBaseline = j.WXDDT
        dE.textAlign = j.Wviak
        dE.fillStyle = j.Iqkyt
        dE.roundRect(j.bHLjn(gC, j.wxHci(gB, 2)), gD - 23.5, gB, 47, 6)
        dE.fill()
        dE.fillStyle = j.nZsto
        dE.fillText(F.chatMessage, gC, gD)
      }
    }
    if (D?.alive) {
      const { width: gE, height: gF } = e4
      e8.clearRect(0, 0, gE, gF)
      e8.strokeStyle = j.nZsto
      e8.lineWidth = 4
      for (fT = ey.length; fT--; ) {
        ;(ez = ey[fT]).update(e8, aB)
      }
      e8.globalAlpha = 1
      e8.fillStyle = j.nZsto
      j.vbDEx(
        ft,
        j.GEHFZ(D.x, bN) * gE,
        j.YnChK(j.BBshq(D.y, bN), gF),
        7,
        e8,
        true
      )
      e8.fillStyle = 'rgba(255,255,255,0.35)'
      if (au && D.team) {
        let gG = au.length
        for (fT = 0; j.QRLXF(fT, gG); fT += 2) {
          j.Ejacq(
            ft,
            j.Fcplw(au[fT] / bN, gE),
            j.eBhHw(au[j.oPiIB(fT, 1)], bN) * gF,
            7,
            e8,
            true
          )
        }
      }
      if (ew) {
        const gH = j.yWkza.split('|')
        while (true) {
          switch (gH[gI++]) {
            case '0':
              e8.fillText(
                'x',
                j.GRDah(j.MJUom(ew.x, bN), gE),
                j.xGwGE(ew.y / bN, gF)
              )
              continue
            case '1':
              e8.fillStyle = j.IiqAI
              continue
            case '2':
              e8.textAlign = 'center'
              continue
            case '3':
              e8.font = '34px Hammersmith One'
              continue
            case '4':
              e8.textBaseline = j.WXDDT
              continue
          }
          break
        }
      }
      if (ex) {
        const gJ = j.QXqDK.split('|')
        while (true) {
          switch (gJ[gK++]) {
            case '0':
              e8.fillText(
                'x',
                j.phcgq(j.NTPRY(ex.x, bN), gE),
                j.KjnCu(j.LsDEM(ex.y, bN), gF)
              )
              continue
            case '1':
              e8.font = '34px Hammersmith One'
              continue
            case '2':
              e8.fillStyle = '#fff'
              continue
            case '3':
              e8.textBaseline = 'middle'
              continue
            case '4':
              e8.textAlign = j.Wviak
              continue
          }
          break
        }
      }
    }
    j.RUIVV(cq.id, -1) && fb(cq.startX, cq.startY, cq.currentX, cq.currentY)
    j.RUIVV(cr.id, -1) &&
      j.nPpZq(fb, cr.startX, cr.startY, cr.currentX, cr.currentY)
    f7 += j.meGSy((j.Qzeqk(C, 'n') ? 1 : 0) - f7, 40)
    const g0 = dE.getTransform()
    dE.setTransform(1, 0, 0, 1, 0, 0)
    dE.fillStyle = 'rgba(' + f6.map((gL) => gL * f7).join(', ') + ')'
    dE.fillRect(0, 0, eN, eO)
    dE.setTransform(g0)
    j.ktEbn(fF, f9)
  }
  function fb(fR, fS, fT, fU) {
    dE.save()
    dE.setTransform(1, 0, 0, 1, 0, 0)
    dE.scale(di, di)
    dE.beginPath()
    dE.arc(fR, fS, fa, 0, aV, false)
    dE.closePath()
    dE.fillStyle = j.UoFwk
    dE.fill()
    let fV = j.DBApe(fT, fR),
      fW = j.rUlPP(fU, fS),
      fX = j.FLzDz(a8, ac(fV, 2) + j.XKWXk(ac, fW, 2)),
      fY = j.bsbPa(fX, fa) ? j.meGSy(fX, fa) : 1
    fV /= fY
    fW /= fY
    dE.beginPath()
    dE.arc(j.drppE(fR, fV), j.muXLv(fS, fW), j.mSfIB(fa, 0.5), 0, aV, false)
    dE.closePath()
    dE.fillStyle = j.brmUs
    dE.fill()
    dE.restore()
  }
  function fc(fR, fS, fT) {
    for (let fU = as.length; fU--; ) {
      if ((F = as[fU])?.active && j.tuOIx(F.layer, fR) && F.update(aB)) {
        const fV = j.Feool(F.x, fS),
          fW = j.aOpot(F.y, fT)
        if (j.zvDVE(fA, fV, fW, F.scale)) {
          const fX = j.KCBqC.split('|')
          while (true) {
            switch (fX[fY++]) {
              case '0':
                dE.rotate(F.dir)
                continue
              case '1':
                dE.translate(fV, fW)
                continue
              case '2':
                dE.restore()
                continue
              case '3':
                dE.save()
                continue
              case '4':
                j.YaiJH(fd, 0, 0, F, dE)
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
      !fY &&
        ((fY = new Image()),
        (fY.onload = function () {
          fY.isLoaded = true
        }),
        fY.setAttribute(j.Gwwzd, j.xAijr),
        (fY.src = cM(j.mialy(j.YIzoE(j.yzoBh, fX), j.JoRxC))),
        (bY[fX] = fY))
      fY.isLoaded &&
        fW.drawImage(fY, fR - j.WfWBq(fV, 2), j.zBWyu(fS, fV / 2), fV, fV)
    } else {
      j.gjQVO(fU, 1) && ((fW.fillStyle = '#939393'), ft(fR, fS, fV, fW))
    }
  }
  function fe(fR, fS, fT, fU) {
    const fV = j.VgwAe(bv, fU),
      fW = j.xVHqC(bO, fS) - j.rgnDe(fV, 2)
    j.pZGCe(fW, bf) && j.WPzko(j.oCeRf(fW, fV), 0) && fT.fillRect(0, fW, be, fV)
  }
  function ff(fR, fS, fT) {
    for (let fU = ar; fU--; ) {
      if ((F = aq[fU])?.active) {
        const fV = j.aOpot(j.rauSq(F.x, F.xWiggle), fS),
          fW = j.mGajv(j.DAJBQ(F.y, F.yWiggle), fT)
        j.gjQVO(fR, 0) && F.update(aB)
        if (
          j.eojau(F.layer, fR) &&
          fA(fV, fW, j.ghVYA(F.scale, F.blocker || 0))
        ) {
          dE.globalAlpha = F.hideFromEnemy ? 0.6 : 1
          if (F.isItem) {
            let fX = fr(F)
            dE.save()
            dE.translate(fV, fW)
            dE.rotate(F.dir)
            dE.drawImage(fX, -j.smNxA(fX.width, 2), -(fX.height / 2))
            F.blocker &&
              ((dE.strokeStyle = j.qsLHx),
              (dE.globalAlpha = 0.3),
              (dE.lineWidth = 6),
              j.IVSKS(ft, 0, 0, F.blocker, dE, false, true))
            dE.restore()
          } else {
            let fY = j.cyhIp(fq, F)
            dE.drawImage(fY, fV - j.GEHFZ(fY.width, 2), fW - fY.height / 2)
          }
        }
      }
    }
  }
  function fg(fR, fS, fT) {
    dE.globalAlpha = 1
    for (let fU = ao; fU--; ) {
      if (j.mYaDE((F = an[fU])?.zIndex, fT)) {
        F.animate(aB)
        if (F.visible) {
          const fV = j.FVBmv.split('|')
          while (true) {
            switch (fV[fW++]) {
              case '0':
                dE.translate(j.Feool(F.x, fR), j.VcOxn(F.y, fS))
                continue
              case '1':
                dE.rotate(j.RipTZ(j.BhgWG(F, D) ? eW() : F.dir, F.dirPlus))
                continue
              case '2':
                dE.restore()
                continue
              case '3':
                j.gmMKB(fh, F, dE)
                continue
              case '4':
                dE.save()
                continue
              case '5':
                F.skinRot += aC
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
    fS.lineJoin = j.GHSPk
    const fT = cs.weapons[fR.weaponIndex],
      fU = aU * (fT.armS || 1),
      fV = fR.scale
    fR.tailIndex && j.kEQIH(fm, fR.tailIndex, fS, fR)
    if (j.JdFMj(fR.buildIndex, 0) && !fT.aboveHand) {
      j.aSDsE(fn, fT, bC[fR.weaponVariant].src, fV, 0, fS)
      j.JZlwO(fT.projectile, undefined) &&
        !fT.hideProjectile &&
        j.twvUs(fd, fV, 0, cs.projectiles[fT.projectile], dE)
    }
    fS.fillStyle = bU[fR.skinColor]
    j.cttme(ft, fV * j.vRMwU(aa, fU), j.HxOwW(fV, j.CnaSW(a9, fU)), 14)
    const fW = j.lEmGU(fV, fR.buildIndex < 0 ? fT.hndD || 1 : 1),
      fX = -fU * (j.sgSWk(fR.buildIndex, 0) ? fT.hndS || 1 : 1)
    ft(j.KjnCu(fW, aa(fX)), j.stoFd(fW, a9(fX)), 14)
    if (j.KPgiw(fR.buildIndex, 0) && fT.aboveHand) {
      j.IdfvG(fn, fT, bC[fR.weaponVariant].src, fV, 0, fS)
      j.vGyzs(fT.projectile, undefined) &&
        !fT.hideProjectile &&
        fd(fV, 0, cs.projectiles[fT.projectile], dE)
    }
    if (j.WqcUa(fR.buildIndex, 0)) {
      let fY = cs.list[fR.buildIndex],
        fZ = j.vRMwU(fr, fY)
      fS.drawImage(fZ, j.qIRiy(fV, fY.holdOffset), j.lQmCo(-fZ.width, 2))
    }
    j.vPgYp(ft, 0, 0, fV, fS)
    fR.skinIndex && (fS.rotate(aT), j.GMiDR(fk, fR.skinIndex, fS, null, fR))
  }
  function fk(fR, fS, fT, fU) {
    if (!(fj = c0.get(fR))) {
      let fW = new Image()
      fW.onload = function () {
        fW.isLoaded = true
        fW.onload = null
      }
      fW.setAttribute(j.Gwwzd, j.xAijr)
      fW.src = j.XMJYa(cM, j.eTVLK(j.zVvrT + fR, j.JoRxC))
      c0.set(fR, fW)
      fj = fW
    }
    var fV = fT || fi.get(fR)
    if (!fV) {
      for (let fX = cx; fX--; ) {
        if (cv[fX].id == fR) {
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
      j.kUoJt(fk, j.DMUTP(fR, j.QkSRT), fS, fV, fU),
      fS.restore())
  }
  function fm(fR, fS, fT) {
    if (!(fj = c2.get(fR))) {
      let fU = new Image()
      fU.onload = function () {
        fU.isLoaded = true
        fU.onload = null
      }
      fU.setAttribute('crossorigin', j.xAijr)
      fU.src = j.kpNEZ(cM, j.oYgDe(j.okpWS, fR) + j.JoRxC)
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
      fS.translate(j.jlBgg(-20, F.xOff || 0), 0)
      F.spin && fS.rotate(fT.skinRot)
      const fW = -(F.scale / 2)
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
    const g0 = j.lRxSG(fR, j.DXPpm(fW, ''))
    let g1 = bW[g0]
    if (!g1) {
      const g2 = j.yuDVw.split('|')
      while (true) {
        switch (g2[g3++]) {
          case '0':
            g1.onload = function () {
              g1.isLoaded = true
            }
            continue
          case '1':
            g1.setAttribute('crossorigin', j.xAijr)
            continue
          case '2':
            bW[g0] = g1
            continue
          case '3':
            g1.src = j.bYboM(cM, j.kNBsa(j.IMjMQ(j.yzoBh, g0), j.JoRxC))
            continue
          case '4':
            g1 = new Image()
            continue
        }
        break
      }
    }
    g1.isLoaded &&
      fZ.drawImage(
        g1,
        j.GSCah(j.lbcqc(fX, fS), j.zbFJP(fU, 2)),
        j.XqMPj(j.wTcVr(fY, fT), j.lQmCo(fV, 2)),
        fU,
        fV
      )
  }
  function fq({ type: fR, y: fS, scale: fT }) {
    let fU = fS >= bN - bo ? 2 : j.BBwLo(fS, bo) ? 1 : 0,
      fV = j.IjHhW(j.nUdYH(fR + '_', fT), '_') + fU,
      fW = bX[fV]
    if (!fW) {
      let fX = document.createElement(j.Kxtcv)
      fX.width = fX.height = j.KgQbf(j.uGRGD(fT, 2.1), eh)
      let fY = fX.getContext('2d')
      fY.translate(j.rHhNi(fX.width, 2), j.WfWBq(fX.height, 2))
      fY.rotate(j.omtsY(cf, 0, a7))
      fY.strokeStyle = ef
      fY.lineWidth = eh
      if (j.FmUlG(fR, 0)) {
        for (let fZ = 0; j.sgSWk(fZ, 2); ++fZ) {
          let g0 = j.sefVw(F.scale, !fZ ? 1 : 0.5)
          j.GMiDR(fv, fY, 7, g0, j.aibVd(g0, 0.7))
          fY.fillStyle = !fU
            ? !fZ
              ? '#9ebf57'
              : '#b4db62'
            : !fZ
            ? '#e3f1f4'
            : j.nZsto
          fY.fill()
          fZ || fY.stroke()
        }
      } else {
        if (j.HKeDa(fR, 1)) {
          if (fU == 2) {
            let g1 = fT * 0.3
            fY.fillStyle = j.tzKyk
            j.PKzCk(fv, fY, 6, g1, j.emwHa(fT, 0.71))
            fY.fill()
            fY.stroke()
            fY.fillStyle = '#89a54c'
            j.PPcjn(ft, 0, 0, fT * 0.55, fY)
            fY.fillStyle = j.pfZYV
            j.XPBCg(ft, 0, 0, g1, fY, true)
          } else {
            j.bcAVH(fy, fY, 6, F.scale, j.phcgq(F.scale, 0.7))
            fY.fillStyle = fU ? j.EiFyn : j.FNyPh
            fY.fill()
            fY.stroke()
            fY.fillStyle = fU ? j.rzIeD : j.UJfuk
            for (let g2 = 0; j.WonYw(g2, fo); ++g2) {
              const g3 = j.MKYra(bM, j.kdzAk(F.scale, 3.5), F.scale / 2.3),
                g4 = fp * g2
              j.hzzRS(
                ft,
                j.pRhiP(g3, aa(g4)),
                g3 * j.KEyel(a9, g4),
                j.GXahF(bM, 10, 12),
                fY
              )
            }
          }
        } else {
          if (j.TWsmR(fR, 2) || fR == 3) {
            const g5 = j.PvMGC.split('|')
            while (true) {
              switch (g5[g6++]) {
                case '0':
                  fY.fill()
                  continue
                case '1':
                  fY.fillStyle = j.LEoEu(fR, 2)
                    ? j.tmbuy(fU, 2)
                      ? j.oMWLT
                      : j.HKucp
                    : j.XENJQ
                  continue
                case '2':
                  j.xrhBl(fv, fY, 3, fT, fT)
                  continue
                case '3':
                  fY.fillStyle = j.gjQVO(fR, 2)
                    ? j.HAdEc(fU, 2)
                      ? j.Hdyyx
                      : '#bcbcbc'
                    : '#ebdca3'
                  continue
                case '4':
                  fY.stroke()
                  continue
                case '5':
                  j.zulQp(fv, fY, 3, fT * 0.55, j.HxOwW(fT, 0.65))
                  continue
                case '6':
                  fY.fill()
                  continue
              }
              break
            }
          }
        }
      }
      bX[fV] = fW = fX
    }
    return fW
  }
  function fr({ scale: fR, id: fS, name: fT }, fU = false) {
    if (!(ay = c3.get(fS)) || fU) {
      let fV = document.createElement('canvas'),
        fW = j.iNptX(j.dRvew(fR, 2.5), eh) + (cs.list[fS].spritePadding || 0)
      fV.width = fV.height = fW
      let fX = fV.getContext('2d')
      fX.translate(j.QVQJb(fV.width, 2), fW / 2)
      fX.rotate(fU ? 0 : aT)
      fX.strokeStyle = ef
      fX.lineWidth = eh * (fU ? fW / 81 : 1)
      cK.get(fT)(fX, fR, fS, fT)
      ay = fV
      fU || c3.set(fS, ay)
    }
    return ay
  }
  function fs(fR, fS, fT, fU, fV) {
    const fW = j.PGSEx(fR, j.stoFd(fT, j.XMJYa(aa, fU))),
      fX = fS + fT * a9(fU),
      fY = j.oemOe(fT, 0.4),
      fZ = j.lQmCo(j.rPQXE(fR, fW), 2),
      g0 = j.QVQJb(j.UrIDs(fS, fX), 2),
      g1 = j.PKRJt(fU, aT),
      g2 = j.phcgq(fY, aa(g1)),
      g3 = j.xGwGE(fY, j.KEyel(a9, g1))
    fV.moveTo(fR, fS)
    fV.beginPath()
    fV.quadraticCurveTo(j.qDslZ(fZ, g2), j.mialy(g0, g3), fW, fX)
    fV.quadraticCurveTo(j.cnGRP(fZ, g2), j.Feool(g0, g3), fR, fS)
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
    const fV = j.eBhHw(a7, fS)
    let fW = fu
    fR.beginPath()
    fR.moveTo(0, -fT)
    for (let fX = 0, fY = NaN, fZ = NaN; j.qesDd(fX, fS); ++fX) {
      const g0 = j.NtMzN.split('|')
      while (true) {
        switch (g0[g1++]) {
          case '0':
            fR.lineTo(fY, fZ)
            continue
          case '1':
            fZ = j.qTOYr(j.ltQmK(a9, fW), fU)
            continue
          case '2':
            fZ = j.nSdNm(j.VWDIn(a9, fW), fT)
            continue
          case '3':
            fY = j.Dnhyh(j.foyTU(aa, fW), fT)
            continue
          case '4':
            fW += fV
            continue
          case '5':
            fR.lineTo(fY, fZ)
            continue
          case '6':
            fY = j.OsHWZ(aa(fW), fU)
            continue
          case '7':
            fW += fV
            continue
        }
        break
      }
    }
    fR.lineTo(0, -fT)
    fR.closePath()
  }
  function fw(fR, fS, fT, fU, fV, fW = false) {
    const fX = j.OartM(fR, j.Oysen(fT, 2)),
      fY = fS - fU / 2
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
    fV = j.uaShH(bw, fV / 2)
    for (let fY = 0, fZ = fT * 2, g0 = j.LEsWR(a7, fV); j.EKCrA(fY, fV); ++fY) {
      j.tXxXj(fw, 0, 0, fZ, fU, fW, fX)
      fW.rotate(g0)
    }
    fW.restore()
  }
  function fy(fR, fS, fT, fU) {
    let fV = j.xkPwH(aT, 3)
    const fW = j.EdQoc(a7, fS),
      fX = fW * 2
    const fY = fT + 0.9,
      fZ = j.msfwm(fT, 1.2)
    fR.beginPath()
    fR.moveTo(0, -fU)
    for (let g0 = 0; j.Ikxrh(g0, fS); ++g0) {
      const g1 = j.kuPjX(bM, fY, fZ),
        g2 = j.wKGWO(fV, fW),
        g3 = fV + fX
      fR.quadraticCurveTo(
        j.egWLn(j.mxWVQ(aa, g2), g1),
        j.KMgKN(a9(g2), g1),
        j.oOpSe(j.CGfFV(aa, g3), fU),
        a9(g3) * fU
      )
      fV += fX
    }
    fR.lineTo(0, -fU)
    fR.closePath()
  }
  function fz(fR, fS = dE) {
    const fT = j.vLSJu(j.TgkBs(fR, aY), 2),
      fU = fR / 2
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
      j.VgwAe(fR, fT) >= 0 &&
      j.iPFLi(j.PPFbX(fR, fT), be) &&
      j.gBUmu(fS + fT, 0) &&
      j.vVNhk(j.nOIjN(fS, fT), bf)
    )
  }
  function fB(fR) {
    for (let fS = ao, fT; fS--; ) {
      if (j.gjQVO((fT = an[fS]).id, fR)) {
        return fT
      }
    }
    return null
  }
  function fC(fR) {
    for (let fS = ao, fT; fS--; ) {
      if (j.tmbuy((fT = an[fS]).sid, fR)) {
        return fT
      }
    }
    return null
  }
  function fD(fR) {
    for (let fS = am, fT; fS--; ) {
      if (j.gMRAv((fT = al[fS]).sid, fR)) {
        return fT
      }
    }
    return null
  }
  function fE(fR) {
    for (let fS = ar, fT; fS--; ) {
      if ((fT = aq[fS]).sid == fR) {
        return fT
      }
    }
    return null
  }
  function fG() {
    const fR = {
      rkAoX: function (fV, fW) {
        return fV(fW)
      },
      WCdzr: function (fV, fW, fX) {
        return fV(fW, fX)
      },
      wXGSQ: 'moo_name',
      awfEj: 'Loading...',
      MdcJU: function (fV, fW, fX) {
        return j.eTsQR(fV, fW, fX)
      },
      Usuif: 'party key',
      YtGlF: j.uwNVF,
      iVUbk: function (fV) {
        return j.YEvHR(fV)
      },
      FShuZ: function (fV, fW) {
        return j.tJMvL(fV, fW)
      },
      czlJI: j.mUVdZ,
      HfaPa: j.ElVOe,
      TpDvm: j.mRwBc,
    }
    du.onclick = j.xFwOC(ck, function fV() {
      const fW = fR.rkAoX(ai, dV.value)
      fR.WCdzr(d7, fR.wXGSQ, fW)
      !dr &&
        cN.connected &&
        ((dr = true),
        fR.rkAoX(en, fR.awfEj),
        cN.send(H, {
          name: fW,
          moofoll: de,
          skin: dn,
        }))
    })
    j.CnaSW(cl, du)
    dw.onclick = j.FLzDz(ck, () =>
      setTimeout(function () {
        let fW = dF.value
        let fX = fR.MdcJU(prompt, fR.Usuif, fW)
        fX &&
          ((window.onbeforeunload = null),
          (window.location.href = fR.YtGlF + fX))
      }, 10)
    )
    cl(dw)
    dx.onclick = j.FzwKy(ck, () => {
      dL.classList.contains(j.cscNL)
        ? (dL.classList.remove(j.cscNL), (dy.innerText = j.wtwAQ))
        : (dL.classList.add('showing'), (dy.innerText = j.YKlpQ))
    })
    j.ytJMJ(cl, dx)
    dA.onclick = ck(function fW() {
      fR.iVUbk(eX)
      fR.FShuZ(e1.style.display, fR.czlJI) ? ev() : (e1.style.display = 'none')
    })
    j.MjLsI(cl, dA)
    dB.onclick = ck(function fX() {
      j.kuRgX(e9.style.display, j.mUVdZ)
        ? ((e9.style.display = 'block'),
          (e1.style.display = j.jDepf),
          j.PXciu(eM),
          j.aVGwK(eC))
        : (e9.style.display = j.jDepf)
    })
    j.jjSrm(cl, dB)
    dC.onclick = j.GgUgY(ck, () => eL())
    j.dGNen(cl, dC)
    e4.onclick = j.tjARn(ck, () => f0())
    cl(e4)
    for (let fY = bB; fY--; ) {
      let fZ = new Image()
      fZ.onload = function () {
        fZ.isLoaded = true
      }
      fZ.setAttribute(j.Gwwzd, j.xAijr)
      fZ.src = j.GQCMW(cM, j.oUAbw + bA[fY] + j.JoRxC)
      bZ[bA[fY]] = fZ
    }
    dM.style.display = j.jDepf
    dK.style.display = 'block'
    dV.value = j.ytJMJ(d9, 'moo_name') || ''
    const fS = j.uaShH(d9, j.evqlC)
    j.fGqll(eF, !fS ? typeof cordova !== j.qswdN : j.Gldhz(fS, j.ElVOe))
    dh = d9('show_ping') == j.ElVOe
    dI.hidden = !dh
    const fT = j.WmQNo(
      setInterval,
      function () {
        window.cordova &&
          (document.getElementById(j.UTiMh).classList.add(j.wgmLQ),
          document.getElementById(j.LpNBp).classList.add(j.wgmLQ),
          j.mRVNx(clearInterval, fT))
      },
      1000
    )
    j.kEQIH(setTimeout, clearInterval, 30000, fT)
    eG()
    j.bKTLB(ch, dO)
    let fU = 0
    for (; fU < cQ; ++fU) {
      j.RNund(cm, {
        id: j.oEciL('actionBarItem', fU),
        class: j.tVXdf,
        style: j.fWKsJ,
        onmouseout: function () {
          et()
        },
        parent: dO,
      })
    }
    for (fU = 0; j.QRLXF(fU, cQ); ++fU) {
      let g0 = document.createElement(j.Kxtcv)
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
        g4.setAttribute(j.Gwwzd, 'anonymous')
        bW[g2.src] = g4
        g4.onload = function () {
          g4.isLoaded = true
          let g6 = 1 / j.PbExJ(g4.height, g4.width),
            g7 = g2.iPad || 1
          g1.drawImage(
            g4,
            -j.XmEOR(j.phcgq(j.ujhxa(g0.width, g7), c4), g6) / 2,
            -(j.SLNVp(g0.height, g7) * c4) / 2,
            j.xkPwH(j.TYOxk(g0.width * g7, g6), c4),
            j.KuUSG(g0.height * g7, c4)
          )
          g1.fillStyle = j.ZojPR
          g1.globalCompositeOperation = 'source-atop'
          g1.fillRect(
            -g0.width / 2,
            j.NvGfq(-g0.height, 2),
            g0.width,
            g0.height
          )
          document.getElementById(j.ddjUx(j.tVXdf, g3)).style.backgroundImage =
            j.Jlcwe(j.kXwjC(j.VXZjf, g0.toDataURL()), ')')
        }
        g4.src = j.jwVkl(cM, j.tjKMq('.././img/weapons/', g2.src) + j.JoRxC)
        let g5 = document.getElementById(j.SUAiA('actionBarItem', g3))
        g5.onmouseover = ck(() => et(g2, true))
        g5.onclick = j.FLzDz(ck, () => f1(g3, true))
        j.CnaSW(cl, g5)
      } else {
        let g6 = fr(cs.list[g3 - cO], true),
          g7 = j.lvErF(aW, g0.width - bc, g6.width),
          g8 = -g7 / 2
        g1.globalAlpha = 1
        g1.drawImage(g6, g8, g8, g7, g7)
        g1.fillStyle = j.ZojPR
        g1.globalCompositeOperation = 'source-atop'
        g1.fillRect(g8, g8, g7, g7)
        document.getElementById('actionBarItem' + g3).style.backgroundImage =
          j.BLQpW(j.VXZjf, g0.toDataURL()) + ')'
        let g9 = document.getElementById(j.tVXdf + g3)
        g9.onmouseover = j.SXdLv(ck, () => et(cs.list[g3 - cO]))
        g9.onclick = j.bYboM(ck, () => f1(g3 - cO))
        cl(g9)
      }
    }
    dV.ontouchstart = ck(
      (ga) => (
        ga.preventDefault(),
        (ga.currentTarget.value = prompt(
          'enter name',
          ga.currentTarget.value
        ).slice(0, 15))
      )
    )
    dG.checked = dg
    dG.onchange = j.UCvYI(ck, (ga) => eF(ga.target.checked))
    dH.checked = dh
    dH.onchange = j.fGqll(ck, function (ga) {
      dh = dH.checked
      dI.hidden = !dh
      d7('show_ping', dh ? fR.HfaPa : fR.TpDvm)
    })
  }
  for (let fR = 0, fS = -1, fT = -1, fU = 0; j.QRLXF(fR, 12); ++fR) {
    const fV = j.IfPPM.split('|')
    while (true) {
      switch (fV[fW++]) {
        case '0':
          ec.add(fR, fS, fT, 0, ...j.DPxNd(fJ))
          continue
        case '1':
          while (
            j.sgSWk(
              j.cyhIp(aW, ...aq.map((fX) => bL(fS, fT, fX.x, fX.y))),
              120
            ) &&
            fU < 70
          ) {
            fS = j.gmMKB(fH, j.kAvdr(bO, 1000), j.uitqD(bO, 1000))
            fT = j.JBwss(fH, j.Xvdok(bO, 600), j.aeQTJ(bO, 600))
            fU++
          }
          continue
        case '2':
          fU = 0
          continue
        case '3':
          fS = j.AnPHj(fH, j.WGBCa(bO, 1000), j.eAhIU(bO, 1000))
          continue
        case '4':
          fT = fH(bO - 600, j.UwdbR(bO, 600))
          continue
        case '5':
          continue
      }
      break
    }
  }
  j.jclCd(f9)
})()
