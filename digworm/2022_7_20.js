;(() => {
  'use strict'
  function leftShiftOr(num1, num2) {
    return (num1 << 4) | num2
  }
  const skins = {
    faceSkins: [
      {
        createdAt: 0,
        name: 'Kirk',
        price: 500,
      },
      {
        createdAt: 1,
        name: 'Creepy',
        price: 1000,
      },
      {
        createdAt: 2,
        name: 'Intellectual',
        price: 1500,
      },
      {
        createdAt: 3,
        name: 'Kirkier',
        price: 2000,
      },
      {
        createdAt: 4,
        name: 'Cyclops',
        price: 2500,
      },
      {
        createdAt: 5,
        name: 'Sarcastic',
        price: 5000,
      },
      {
        createdAt: 6,
        name: 'Dizzy',
        price: 10000,
      },
      {
        createdAt: 7,
        name: 'Faceless',
        price: 10000,
      },
      {
        createdAt: 8,
        name: 'All Seeing',
        price: 10000,
      },
      {
        createdAt: 9,
        name: 'Cute',
        price: 10000,
      },
      {
        createdAt: 10,
        name: 'Gear',
        price: 10000,
      },
      {
        createdAt: 11,
        name: 'Pirate',
        price: 5000,
      },
      {
        createdAt: 12,
        name: 'Ascii',
        price: 2000,
      },
      {
        createdAt: 13,
        name: 'Moyai',
        price: 5000,
      },
      {
        createdAt: 14,
        name: 'Bot',
        price: 7000,
      },
      {
        createdAt: 15,
        name: 'Too cool',
        price: 2500,
      },
    ],
    bodySkins: [
      {
        createdAt: -1,
        name: 'Triangle',
        price: 500,
      },
      {
        createdAt: -1,
        name: 'Heart',
        price: 1000,
      },
    ],
  }
  for (let skinType in skins) {
    const skin = skins[skinType]
    for (let i = 0; i < skin.length; i++) {
      skin[i].id = i
    }
  }
  function _0x1ce1f3(_0xe490a2, bool) {
    const { viewWidth: viewWidth, viewHeight: viewHeight } = (function (
        _0x1f21d8
      ) {
        _0x1f21d8 -= 30
        _0x1f21d8 *= 50
        const _0x29d507 = 3000 + parseInt(_0x1f21d8)
        return {
          viewWidth: _0x29d507,
          viewHeight: 0.5 * _0x29d507,
        }
      })(bool ? _0xe490a2.interpR : _0xe490a2.r),
      _0x37078e = _0xe490a2.segments[0],
      minX = _0x37078e.x - viewWidth / 2,
      minY = _0x37078e.y - viewHeight / 2,
      maxX = _0x37078e.x + viewWidth / 2,
      maxY = _0x37078e.y + viewHeight / 2
    return {
      minX: minX,
      minY: minY,
      maxX: maxX,
      maxY: maxY,
      sx: Math.max(0, Math.floor(minX / 480)),
      sy: Math.max(0, Math.floor(minY / 480)),
      ex: Math.min(63, Math.floor(maxX / 480)),
      ey: Math.min(63, Math.floor(maxY / 480)),
      viewWidth: viewWidth,
      viewHeight: viewHeight,
    }
  }
  function oreToColor(ore) {
    switch (ore) {
      case oreType.dirt:
        return [116, 66, 0]
      case oreType.lava:
        return [166, 25, 6]
      case 3:
        return [49, 165, 158]
      case oreType.gold:
        return [165, 158, 21]
      case oreType.uranium:
        return [50, 164, 48]
      case 6:
        return [255, 255, 255]
      case oreType.bedrock:
        return [10, 10, 10]
      case 8:
        return [90, 90, 90]
    }
  }
  function _0x52761c(_0x325639, _0x410ff2, _0x1bbe55, _0x28ac74) {
    const _0x4a7a03 = Math.max(
        Math.min((_0x325639 + 1) * 30, _0x28ac74.x),
        _0x325639 * 30
      ),
      _0x3ace15 = Math.max(
        Math.min((_0x410ff2 + 1) * 30, _0x28ac74.y),
        _0x410ff2 * 30
      ),
      _0x257f32 = _0x4a7a03 - _0x28ac74.x,
      _0xb0df69 = _0x3ace15 - _0x28ac74.y
    let _0xf3672a = Math.hypot(_0x257f32, _0xb0df69)
    return (
      _0xf3672a <= _0x1bbe55 &&
      (0 == _0xf3672a && (_0xf3672a = 1),
      {
        x: _0x257f32 / _0xf3672a,
        y: _0xb0df69 / _0xf3672a,
      })
    )
  }
  function _0xcd5ec6(_0x4e76e9) {
    return parseInt(
      50 * Math.sqrt(Math.min(1, (_0x4e76e9.segments.length - 5) / 1000)) + 30
    )
  }
  function _0x40a543(_0x9092a1) {
    const _0x312f83 = _0x9092a1 >> 2
    switch (3 & _0x9092a1) {
      case 0:
        return _0x312f83 / 10
      case 1:
        return 100 * _0x312f83
      case 2:
        return 10000 * _0x312f83
    }
  }
  function isValidUuid(str) {
    return (
      !(!str || 36 !== str.length) &&
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
        str
      )
    )
  }
  const _0x36e559 = [40, 45, 50, 55, 60, 65, 70],
    changelog = [
      {
        title: 'July 20th 2022',
        content: ['Added maze mode.', 'Connection limit bug fix.'],
      },
      {
        title: 'July 19th 2022',
        content: [
          'New skin: Too cool',
          'Fixed mouse movement issue on high res displays.',
          'Now you have to score at least 30k to get your score logged in the Discord server.',
          'Your worm dies instantly if you get disconnected with low score now.',
          'Fixed gear skin not showing damage.',
          'Patched a server crash bug.',
        ],
      },
      {
        title: 'July 18th 2022',
        content: ['Minor bug fixes.'],
      },
      {
        title: 'July 17th 2022',
        content: [
          'You spectate your killer worm after dying now.',
          'Made map bigger.',
          'Added some bots.',
          'Fixed map glitching sometimes on death screen.',
        ],
      },
      {
        title: 'July 15th 2022',
        content: [
          'Death screen overlay now shows your dead worm.',
          'New skins: Bot',
          'Increased AFK kick time to 5 minutes.',
          'You can now change worm mood in shop on touch devices by tapping the left and right side of the screen.',
        ],
      },
      {
        title: 'July 14th 2022',
        content: [
          'New skin: Moyai',
          'Your scores get logged in the Discord server now. You also get roles based on your scores. Your account has to be linked with discord and you have to be in the Discord server to get the roles.',
        ],
      },
      {
        title: 'July 13th 2022',
        content: [
          'Added discord login.',
          'Minor bug fixes.',
          'Increased map regeneration time.',
          "Worm's grave stays a little longer now.",
          'Added amogus in the map (top left corner).',
        ],
      },
      {
        title: 'July 12th 2022',
        content: ['Moved server from NA to EU.', 'Removed zoom.'],
      },
      {
        title: 'July 10th 2022',
        content: [
          'Now you get kicked for being AFK too long.',
          'Added packet encryption.',
        ],
      },
      {
        title: 'July 9th 2022',
        content: ['New skins: Pirate & Ascii', 'Fixed sussy shop bug.'],
      },
      {
        title: 'July 8th 2022',
        content: [
          'Lava now deducts 0.25% of your score if you are too big.',
          'Added 3D and glow effects. Enable them from settings.',
          "Nickname and energy bar don't get hidden under the world border now.",
          'Added high resolution setting for some devices.',
        ],
      },
      {
        title: 'July 7th 2022',
        content: [
          'You will be reconnected to your old alive worm if you accidentally got disconnected now.',
          'Only 1 connection can use an account now.',
          'Limited connections from an IP to 3.',
          'Fixed killer name not being shown sometimes.',
          'Minor touch controls bug fix.',
          'Made map smaller.',
          'You can pause and join game using escape and enter keys now.',
        ],
      },
      {
        title: 'July 6th 2022',
        content: [
          'Enhanced mobile UI.',
          'Added touch controls.',
          'Fixed Gear skin.',
          'Fixed skin previews appearing pixelated.',
          'Game being blank on IOS fixed.',
        ],
      },
      {
        title: 'July 5th 2022',
        content: [
          'Made map bigger',
          'Minor UI changes.',
          'Performance mode is enabled by default now.',
          'New Discord link.',
        ],
      },
      {
        title: 'July 4th 2022',
        content: ['Released.'],
      },
    ],
    enable3DEl = document.getElementById('enable3D')
  _0x5f77ca(enable3DEl, 'enable_3d')
  const enableGlowEl = document.getElementById('enableGlow')
  _0x5f77ca(enableGlowEl, 'enable_glow')
  const highResEl = document.getElementById('highRes')
  _0x5f77ca(highResEl, 'high_res')
  const deadWormEl = document.getElementById('deadWorm'),
    deadWormCtx = deadWormEl.getContext('2d')
  let _0x4868a9, _0x312405
  function _0x8d0f50() {
    if (!_0x194da0 || !_0x194da0.isDead) {
      return
    }
    deadWormEl.getBoundingClientRect()
    const _0x515827 = 200 * _0x19da0e * window.devicePixelRatio
    deadWormEl.width !== _0x515827 &&
      ((deadWormEl.width = _0x515827), (deadWormEl.height = _0x515827 / 4))
    const worm = _0x4868a9 || new Worm(0, 0, 30)
    _0x4868a9 = worm
    for (let i = 0; i < 2; i++) {
      worm.segments[i] = {
        interpX: -100 * (2 * i - 1),
        interpY: 0,
      }
    }
    worm.isDead = true
    worm.faceSkin = _0x194da0.faceSkin
    deadWormCtx.clearRect(0, 0, deadWormEl.width, deadWormEl.height)
    const _0x58da47 = (deadWormEl.height / worm.interpR / 2) * 0.8
    deadWormCtx.save()
    deadWormCtx.translate(deadWormEl.width / 2, deadWormEl.height / 2)
    deadWormCtx.scale(_0x58da47, _0x58da47)
    worm.draw(0, deadWormCtx)
    deadWormCtx.restore()
  }
  window.s = 0.1
  window.x = 0
  window.y = 0
  try {
    _0x312405 = (function () {
      const canvas = document.createElement('canvas'),
        ctx =
          canvas.getContext('webgl', _0x19e12e) ||
          canvas.getContext('experimental-webgl', _0x19e12e),
        ores = ['gold', 'uranium', 'diamond', 'lava']
      let _0x4846ca = ''
      for (let i = 0; i < ores.length; i++) {
        _0x4846ca +=
          'distance(vec3(' +
          oreToColor(_0x21ff22[ores[i]])
            .map((_0x27afdc) => _0x27afdc / 255)
            .join(',') +
          '),t.rgb)<0.1'
        i !== ores.length - 1 && (_0x4846ca += '||')
      }
      const _0x5900b9 = (function (_0xcbe078, _0x35f8d8) {
        const _0x27e3c6 = _0x86d0ee('vertex', _0xcbe078),
          _0x309276 = _0x86d0ee('fragment', _0x35f8d8),
          _0x464086 = ctx.createProgram()
        return (
          ctx.attachShader(_0x464086, _0x27e3c6),
          ctx.attachShader(_0x464086, _0x309276),
          ctx.linkProgram(_0x464086),
          ctx.getProgramParameter(_0x464086, ctx.LINK_STATUS) ||
            console.log(
              'Error linking program. ' + ctx.getProgramInfoLog(_0x464086)
            ),
          _0x464086
        )
      })(
        '\n\tattribute vec2 pos;\n\tvarying vec2 vPos;\n\tvoid main() {\n\t\tvPos=pos;\n\t\tgl_Position=vec4(pos,0.0,1.0);\n\t}\n\t',
        '\n\tprecision mediump float;\n\tuniform sampler2D tex;\n\tuniform bool u3d;\n\tuniform bool uGlow;\n\tuniform float uTime;\n\tuniform vec2 blurSize;\n\n\tvarying vec2 vPos;\n\n\tconst vec3 groundColor = vec3(0.32,0.18,0.0);\n\tconst int STEPS=10;\n\n\tvec4 getColor(vec2 p){\n\t\tvec4 t=texture2D(tex,p);\n\t\tif(' +
          _0x4846ca +
          '){\n\t\t\treturn t;\n\t\t}\n\t\treturn vec4(0.0);\n\t}\n\n\tvoid main(){\n\t\tvec4 a;\n\t\tvec4 sum;\n\t\tvec2 uv=vPos*0.5+0.5;\n\t\tif(uGlow){\n\t\t\tsum += getColor(vec2(uv.x - 4.0*blurSize.x, uv.y)) * 0.05;\n\t\t\tsum += getColor(vec2(uv.x - 3.0*blurSize.x, uv.y)) * 0.09;\n\t\t\tsum += getColor(vec2(uv.x - 2.0*blurSize.x, uv.y)) * 0.12;\n\t\t\tsum += getColor(vec2(uv.x - blurSize.x, uv.y)) * 0.15;\n\t\t\tsum += getColor(vec2(uv.x, uv.y)) * 0.16;\n\t\t\tsum += getColor(vec2(uv.x + blurSize.x, uv.y)) * 0.15;\n\t\t\tsum += getColor(vec2(uv.x + 2.0*blurSize.x, uv.y)) * 0.12;\n\t\t\tsum += getColor(vec2(uv.x + 3.0*blurSize.x, uv.y)) * 0.09;\n\t\t\tsum += getColor(vec2(uv.x + 4.0*blurSize.x, uv.y)) * 0.05;\n\n\t\t\t//y\n\t\t\tsum += getColor(vec2(uv.x, uv.y - 4.0*blurSize.y)) * 0.05;\n\t\t\tsum += getColor(vec2(uv.x, uv.y - 3.0*blurSize.y)) * 0.09;\n\t\t\tsum += getColor(vec2(uv.x, uv.y - 2.0*blurSize.y)) * 0.12;\n\t\t\tsum += getColor(vec2(uv.x, uv.y - blurSize.y)) * 0.15;\n\t\t\tsum += getColor(vec2(uv.x, uv.y)) * 0.16;\n\t\t\tsum += getColor(vec2(uv.x, uv.y + blurSize.y)) * 0.15;\n\t\t\tsum += getColor(vec2(uv.x, uv.y + 2.0*blurSize.y)) * 0.12;\n\t\t\tsum += getColor(vec2(uv.x, uv.y + 3.0*blurSize.y)) * 0.09;\n\t\t\tsum += getColor(vec2(uv.x, uv.y + 4.0*blurSize.y)) * 0.05;\n\t\t}\n\t\tif(u3d){\n\t\t\tfor (int i=0;i<=STEPS;i++) {\n\t\t\t\tfloat s=(float(i)/float(STEPS));\n\t\t\t\tvec2 p = vPos*(1.0+0.15*s);\n\t\t\t\tvec4 b = texture2D(tex, p*0.5+0.5);\n\t\t\t\tif (length(b.rgb-groundColor)<0.1) {\n\t\t\t\t\tif(i!=STEPS) {\n\t\t\t\t\t\tb.a = 0.0;\n\t\t\t\t\t}\n\t\t\t\t} else if(i!=0) {\n\t\t\t\t\tb.rgb=groundColor*0.8;\n\t\t\t\t}\n\t\t\t\ta.rgb = a.rgb*a.a + b.rgb*b.a*(1.0-a.a);\n\t\t\t\ta.a = a.a+b.a * (1.0-a.a);\n\t\t\t}\n\t\t}\n\t\tgl_FragColor = (u3d?a:texture2D(tex,uv)) + sum*(sin(uTime)*0.5+1.5);\n\t}\n\t'
      )
      ctx.useProgram(_0x5900b9)
      ctx.bindBuffer(ctx.ARRAY_BUFFER, ctx.createBuffer())
      ctx.bufferData(
        ctx.ARRAY_BUFFER,
        new Float32Array([-1, 1, -1, -1, 1, -1, -1, 1, 1, -1, 1, 1]),
        ctx.STATIC_DRAW
      )
      ctx.enableVertexAttribArray(0)
      ctx.vertexAttribPointer(0, 2, ctx.FLOAT, false, 0, 0)
      ctx.activeTexture(ctx.TEXTURE0)
      ctx.bindTexture(ctx.TEXTURE_2D, ctx.createTexture())
      ctx.texParameteri(
        ctx.TEXTURE_2D,
        ctx.TEXTURE_WRAP_S,
        ctx.CLAMP_TO_EDGE
      )
      ctx.texParameteri(
        ctx.TEXTURE_2D,
        ctx.TEXTURE_WRAP_T,
        ctx.CLAMP_TO_EDGE
      )
      ctx.texParameteri(
        ctx.TEXTURE_2D,
        ctx.TEXTURE_MIN_FILTER,
        ctx.NEAREST
      )
      ctx.texParameteri(
        ctx.TEXTURE_2D,
        ctx.TEXTURE_MAG_FILTER,
        ctx.NEAREST
      )
      ctx.uniform1i(ctx.getUniformLocation(_0x5900b9, 'tex'), 0)
      const _0x5a1142 = ctx.getUniformLocation(_0x5900b9, 'u3d'),
        _0x253aab = ctx.getUniformLocation(_0x5900b9, 'uGlow'),
        _0x3889ee = ctx.getUniformLocation(_0x5900b9, 'uTime'),
        _0x11fb1c = ctx.getUniformLocation(_0x5900b9, 'blurSize')
      function _0x86d0ee(_0x22ecad, _0x5df792) {
        const _0x189e8b = ctx.createShader(
          'vertex' == _0x22ecad
            ? ctx.VERTEX_SHADER
            : ctx.FRAGMENT_SHADER
        )
        return (
          ctx.shaderSource(_0x189e8b, _0x5df792),
          ctx.compileShader(_0x189e8b),
          ctx.getShaderParameter(_0x189e8b, ctx.COMPILE_STATUS) ||
            console.log(
              'Error compiling ' +
                _0x22ecad +
                ' shader. ' +
                ctx.getShaderInfoLog(_0x189e8b)
            ),
          _0x189e8b
        )
      }
      return function () {
        ;(enable3DEl.checked || enableGlowEl.checked) &&
          ((canvas.width === canvasEl.width &&
            canvas.height === canvasEl.height) ||
            ((canvas.width = canvasEl.width),
            (canvas.height = canvasEl.height),
            ctx.viewport(0, 0, canvasEl.width, canvasEl.height)),
          ctx.uniform1f(_0x3889ee, 0.005 * performance.now()),
          ctx.uniform2fv(_0x11fb1c, [
            1 / canvasEl.width,
            1 / canvasEl.height,
          ]),
          ctx.uniform1i(_0x5a1142, enable3DEl.checked),
          ctx.uniform1i(_0x253aab, enableGlowEl.checked),
          ctx.pixelStorei(ctx.UNPACK_FLIP_Y_WEBGL, true),
          ctx.texImage2D(
            ctx.TEXTURE_2D,
            0,
            ctx.RGBA,
            ctx.RGBA,
            ctx.UNSIGNED_BYTE,
            canvasEl
          ),
          ctx.clear(
            ctx.COLOR_BUFFER_BIT | ctx.DEPTH_BUFFER_BIT
          ),
          ctx.drawArrays(ctx.TRIANGLES, 0, 6),
          canvasElCtx.drawImage(
            canvas,
            0,
            0,
            canvasEl.width,
            canvasEl.height
          ))
      }
    })()
  } catch (err) {
    console.error('Error creating post processor. ' + err)
    _0x91abc2(enable3DEl, false)
    _0x91abc2(enableGlowEl, false)
    _0x91abc2(highResEl, false)
  }
  1 === window.devicePixelRatio && _0x91abc2(highResEl, false)
  ;(function () {
    for (
      var _0x794544 = 0,
        _0xf7917c = ['ms', 'moz', 'webkit', 'o'],
        _0x8e8ffe = 0;
      _0x8e8ffe < _0xf7917c.length && !window.requestAnimationFrame;
      ++_0x8e8ffe
    ) {
      window.requestAnimationFrame =
        window[_0xf7917c[_0x8e8ffe] + 'RequestAnimationFrame']
      window.cancelAnimationFrame =
        window[_0xf7917c[_0x8e8ffe] + 'CancelAnimationFrame'] ||
        window[_0xf7917c[_0x8e8ffe] + 'CancelRequestAnimationFrame']
    }
    window.requestAnimationFrame ||
      (window.requestAnimationFrame = function (_0x2c2200, _0x5a6930) {
        var _0x4cf495 = new Date().getTime(),
          _0x183a2d = Math.max(0, 16 - (_0x4cf495 - _0x794544)),
          _0x2eb8eb = window.setTimeout(function () {
            _0x2c2200(_0x4cf495 + _0x183a2d)
          }, _0x183a2d)
        return (_0x794544 = _0x4cf495 + _0x183a2d), _0x2eb8eb
      })
    window.cancelAnimationFrame ||
      (window.cancelAnimationFrame = function (_0x32a71d) {
        clearTimeout(_0x32a71d)
      })
  })()
  const killerEl = document.querySelector('.killer'),
    fixedJoystickCbEl = document.getElementById('fixedJoystickCb')
  _0x5f77ca(fixedJoystickCbEl, 'fixed_joystick')
  const _0x39ef23 = (window.mobileAndTabletCheck = function () {
      let _0x4b933b = false
      var _0x56be4a
      return (
        (_0x56be4a = navigator.userAgent || navigator.vendor || window.opera),
        (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
          _0x56be4a
        ) ||
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
            _0x56be4a.substr(0, 4)
          )) &&
          (_0x4b933b = true),
        _0x4b933b
      )
    })(),
    ua = navigator.userAgent.toLowerCase(),
    _0x5e06ec =
      /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(
        ua
      ),
    minimizeEl = document.querySelector('.minimize'),
    minimizeBtnEl = document.querySelector('.minimize-btn')
  minimizeBtnEl.onclick = function () {
    minimizeEl.classList.add('minimize-show')
    gameEl.classList.remove('game-show')
    gridEl.classList.remove('grid-show')
  }
  const hudCommonEl = document.querySelector('.hud-common'),
    resumeEl = document.querySelector('.resume'),
    giveupEl = document.querySelector('.giveup')
  resumeEl.onclick = function () {
    rmDlgs()
    gameEl.classList.add('game-show')
  }
  giveupEl.onclick = function () {
    _0x194da0 &&
      !_0x194da0.isDead &&
      (wsSend(new Uint8Array([leftShiftOr(6, 0)])),
      this.classList.add('btn-disabled'),
      resumeEl.click())
  }
  const optimizedRenderingEl = document.getElementById('optimizedRendering')
  _0x5f77ca(optimizedRenderingEl, 'optimized_rendering')
  const kbMovementCbEl = document.querySelector('#kbMovementCb')
  _0x5f77ca(kbMovementCbEl, 'kb_movement')
  const nicknameEl = document.querySelector('.nickname')
  function _0x91abc2(el, shouldDisplay) {
    el.parentNode.style.display = shouldDisplay ? '' : 'none'
  }
  function _0x5f77ca(el, key) {
    const val = localStorage[key]
    el.checked =
      undefined !== val ? 'true' === val : el.checked
    el.oninput = function () {
      localStorage[key] = this.checked
      el === highResEl && _0x3c1fa3()
    }
  }
  function _0x3f9782(_0x25f713) {
    for (
      let i = 1;
      i < _0x25f713.segments.length;
      i++
    ) {
      const _0x2e95d2 = _0x25f713.segments[i],
        _0x3ed8ba = _0x25f713.segments[i - 1],
        _0x288c8e = _0x2e95d2.x,
        _0x256bea = _0x2e95d2.y
      let _0x4b7acb = _0x2e95d2.x - _0x3ed8ba.x,
        _0x28a780 = _0x2e95d2.y - _0x3ed8ba.y
      Math.hypot(_0x4b7acb, _0x28a780) > _0x25f713.r &&
        ((_0x2e95d2.x = _0x3ed8ba.oldX),
        (_0x2e95d2.y = _0x3ed8ba.oldY),
        (_0x2e95d2.oldX = _0x288c8e),
        (_0x2e95d2.oldY = _0x256bea))
      _0x2e95d2.interpOldX = _0x2e95d2.interpX
      _0x2e95d2.interpOldY = _0x2e95d2.interpY
    }
  }
  function _0x3c2605(_0x324150, _0x55965f, _0x15dae2, _0x17dcf3 = 1) {
    const _0x1afd16 = (2 * Math.PI) / _0x15dae2,
      _0x4c45d0 = 0.1 * _0x1afd16 * _0x17dcf3,
      path = new Path2D()
    for (let i = 0; i <= _0x15dae2; i++) {
      const _0x20dac3 = _0x1afd16 * i,
        _0x5f39f5 = _0x20dac3 - _0x4c45d0,
        _0x2bac11 = _0x20dac3 + _0x4c45d0
      i % 2 == 0
        ? (path.lineTo(
            Math.cos(_0x5f39f5) * _0x324150,
            Math.sin(_0x5f39f5) * _0x324150
          ),
          path.lineTo(
            Math.cos(_0x2bac11) * _0x55965f,
            Math.sin(_0x2bac11) * _0x55965f
          ))
        : (path.lineTo(
            Math.cos(_0x5f39f5) * _0x55965f,
            Math.sin(_0x5f39f5) * _0x55965f
          ),
          path.lineTo(
            Math.cos(_0x2bac11) * _0x324150,
            Math.sin(_0x2bac11) * _0x324150
          ))
    }
    return path
  }
  nicknameEl.oninput = function () {
    localStorage.nickname = this.value
  }
  nicknameEl.maxLength = 14
  nicknameEl.value =
    undefined !== localStorage.nickname ? localStorage.nickname : ''
  _0x91abc2(fixedJoystickCbEl, _0x39ef23)
  _0x91abc2(kbMovementCbEl, !_0x39ef23)
  _0x39ef23 &&
    (document.getElementById('pressEnterInfo').style.display = 'none')
  const _0x1290f5 = _0x3c2605(20, 22.5, 32, 1),
    _0x18a205 = _0x3c2605(10, 12.5, 16, 1.25),
    _0x210ee9 = [
      [
        [28, 28],
        new Path2D(
          'm 0,0 c 0,1 -3,4 -10,4 -7,0 -10,-3 -10,-4 0,-0.807 4.548,-1.612 6.311,-1.894 C -13.001,-4.548 -13,-10 -13,-10 c 0.805,3.218 0.315,7.079 0.093,8.467 C -12.705,-0.942 -12.059,0 -10,0 c 3,0 3,-2 3,-2 l 0.002,0 c -0.234,-1.657 -0.565,-5.089 0.162,-8 0,0 0.002,5.491 0.697,8.134 C -4.273,-1.562 0,-0.782 0,0'
        ),
      ],
      [
        [14, 16],
        new Path2D(
          'M 0,0 C 0,1 2,3 4,3 6,3 8,1 8,0 8,-1 7,-1 4,-1 1,-1 0,-1 0,0'
        ),
      ],
      [
        [12, 12],
        new Path2D(
          'M 0,0 C 0,0 2,2 6,2 10,2 12,0 12,0 12,0 10,1 6,1 2,1 0,0 0,0'
        ),
      ],
      [
        [12, 10],
        new Path2D(
          'M 0,0 C 0,1 2,2 6,2 10,2 12,1 12,0 12,-1 11,-1 6,-1 1,-1 0,-1 0,0'
        ),
      ],
    ],
    _0x55f515 = new Path2D(
      'M2358 5639 c-387 -26 -778 -95 -1438 -255 -257 -62 -569 -134 -738 -169 -91 -19 -166 -36 -168 -38 -1 -1 -6 -108 -10 -237 -7 -255 3 -395 36 -504 22 -70 73 -148 215 -326 110 -137 175 -236 212 -318 13 -30 48 -161 78 -291 135 -580 303 -1120 515 -1651 58 -146 124 -270 190 -359 261 -351 801 -618 1428 -706 454 -64 1044 -24 1403 95 592 198 1041 653 1452 1475 168 338 205 438 301 826 79 319 121 452 186 585 58 119 104 166 190 191 46 13 84 15 235 9 99 -4 199 -11 223 -15 60 -12 117 -55 178 -136 99 -132 158 -272 234 -555 190 -706 443 -1252 758 -1636 102 -125 243 -264 352 -346 422 -319 1015 -508 1596 -508 823 0 1516 333 1926 925 209 301 322 616 488 1355 62 279 148 612 187 730 43 128 117 276 178 352 25 31 80 82 121 114 46 34 81 69 89 88 22 52 26 134 16 276 -7 93 -7 175 1 265 12 150 5 195 -43 249 -33 39 -78 56 -209 81 -143 28 -304 71 -545 145 -326 101 -465 133 -842 195 -550 91 -674 105 -954 105 -485 0 -881 -57 -1844 -266 -1088 -237 -1424 -287 -1940 -288 -484 0 -719 35 -1515 231 -377 92 -569 132 -865 177 -813 126 -1272 163 -1677 135z'
    )
  class Worm {
    constructor(playerId, angle, interpR = 0) {
      this.id = playerId
      this.segments = []
      this.updateTime = 0
      this.dirX = Math.cos(angle)
      this.dirY = Math.sin(angle)
      this.newDirX = this.oldDirX = this.dirX
      this.newDirY = this.oldDirY = this.dirY
      this.sad = 0
      this.angry = 0
      this.faceSkin = -1
      this.bodySkin = -1
      this.energy = 0
      this.iEnergy = 0
      this.r = this.interpR = this.interpOldR = interpR
      this.angle = angle
      this.iEnergyChange = 0
      this.energyChangeCounter = 1
      this.energyAlpha = 0
      this.nickname = ''
    }
    ['interpolate']() {
      const _0x58ed56 = Math.min(1, (Date.now() - this.updateTime) / 100)
      for (let i = 0; i < this.segments.length; i++) {
        const _0xe05cb = this.segments[i]
        _0xe05cb.interpX =
          _0xe05cb.interpOldX + (_0xe05cb.x - _0xe05cb.interpOldX) * _0x58ed56
        _0xe05cb.interpY =
          _0xe05cb.interpOldY + (_0xe05cb.y - _0xe05cb.interpOldY) * _0x58ed56
      }
      this.interpR = this.interpOldR + (this.r - this.interpOldR) * _0x58ed56
      this.dirX = this.oldDirX + (this.newDirX - this.oldDirX) * _0x58ed56
      this.dirY = this.oldDirY + (this.newDirY - this.oldDirY) * _0x58ed56
      this.interpFace()
      this.iEnergy = this.oldEnergy + _0x58ed56 * (this.energy - this.oldEnergy)
      this.energyChangeCounter -= _0xd4436e / 0.5
      this.energyChangeCounter < 0 &&
        (this.iEnergyChange += 0.1 * (this.iEnergy - this.iEnergyChange))
      this.iEnergyChange = Math.max(this.iEnergy, this.iEnergyChange)
      this.energyAlpha +=
        ((!this.isDead && this.energy < 1 ? 1 : -1) * _0xd4436e) / 0.15
      this.energyAlpha = Math.max(Math.min(1, this.energyAlpha), 0)
    }
    ['interpFace']() {
      const _0x41607b = _0xd4436e / 0.07
      1 === this.mood
        ? ((this.angry += _0x41607b), (this.sad -= _0x41607b))
        : 2 === this.mood
        ? ((this.sad += _0x41607b), (this.angry -= _0x41607b))
        : 0 === this.mood &&
          ((this.angry -= _0x41607b), (this.sad -= _0x41607b))
      this.angry = Math.min(1, Math.max(0, this.angry))
      this.sad = Math.min(1, Math.max(0, this.sad))
    }
    ['drawEnergyAndNickname'](_0x260258) {
      const _0x23e3bd = this.segments[0]
      _0x260258.save()
      _0x260258.lineCap = 'round'
      _0x260258.lineJoin = 'round'
      _0x260258.globalAlpha = this.energyAlpha
      _0x260258.translate(_0x23e3bd.interpX, _0x23e3bd.interpY)
      const _0x35fda3 = this.interpR / 25
      if ((_0x260258.scale(_0x35fda3, _0x35fda3), this.energyAlpha > 0)) {
        _0x260258.save()
        _0x260258.translate(0, 60)
        _0x260258.beginPath()
        _0x260258.moveTo(-35, 0)
        _0x260258.lineTo(35, 0)
        _0x260258.lineWidth = 13
        _0x260258.strokeStyle = '#222'
        _0x260258.stroke()
        _0x260258.beginPath()
        _0x260258.moveTo(-35, 0)
        _0x260258.lineTo(-35 + this.iEnergyChange * 35 * 2, 0)
        _0x260258.lineWidth = 6.5
        _0x260258.strokeStyle = '#dd3434'
        _0x260258.stroke()
        _0x260258.beginPath()
        _0x260258.globalAlpha *= Math.min(1, Math.max(0.5, this.iEnergy / 0.05))
        _0x260258.moveTo(-35, 0)
        _0x260258.lineTo(-35 + this.iEnergy * 35 * 2, 0)
        _0x260258.lineWidth = 8
        _0x260258.strokeStyle = '#75dd34'
        _0x260258.stroke()
        _0x260258.restore()
      }
      this.isDead ||
        this === _0x194da0 ||
        '' === this.nickname.trim() ||
        (_0x260258.save(),
        _0x260258.translate(0, -50),
        (_0x260258.globalAlpha = 1),
        (_0x260258.font = 'bolder 24px Ubuntu'),
        (_0x260258.strokeStyle = '#000'),
        (_0x260258.lineWidth = 3),
        (_0x260258.textAlign = 'center'),
        (_0x260258.textBaseline = 'bottom'),
        _0x260258.strokeText(this.nickname, 0, 0),
        (_0x260258.fillStyle = '#fff'),
        _0x260258.fillText(this.nickname, 0, 0),
        _0x260258.restore())
      _0x260258.restore()
    }
    ['draw'](_0xb0bd9f, _0x4d6d74, _0x40e682 = true) {
      const time = Date.now()
      if (((_0x4d6d74.lineWidth = 5), _0x4d6d74.lineWidth, this.isDead)) {
        const _0x21aaa2 = (time - this.diedAt) / 500
        if (_0x21aaa2 > 1) {
          return void _0x31c3e2.splice(_0xb0bd9f, 1)
        }
        _0x4d6d74.globalAlpha =
          Math.abs(Math.sin(_0x21aaa2 * Math.PI * 2)) * (1 - _0x21aaa2) * 0.7
      } else {
        _0x4d6d74.globalAlpha = 1
      }
      const _0x4c206d = (time - this.diggedLavaAt) / 200,
        _0x34189b = [153, 153, 153],
        _0x2215c2 = [124, 124, 124]
      if (_0x4c206d < 1) {
        const _0x1724f0 = [255, 0, 0],
          _0x508e62 = 0.5 * (1 - _0x4c206d),
          _0x2e9fb3 = 1 - _0x508e62
        for (let i = 0; i < 3; i++) {
          _0x34189b[i] =
            _0x34189b[i] * _0x2e9fb3 + _0x1724f0[i] * _0x508e62
          _0x2215c2[i] =
            _0x2215c2[i] * _0x2e9fb3 + _0x1724f0[i] * _0x508e62
        }
      }
      let _0x65247a = (_0x4d6d74.fillStyle =
          'rgb(' + _0x34189b.join(',') + ')'),
        _0x14bbf2 = (_0x4d6d74.strokeStyle = 'rgb(' + _0x2215c2.join(',') + ')')
      const _0x52b6e2 = 1 * this.interpR,
        _0x46ceb7 = this.segments[0]
      if (this.isDead || optimizedRenderingEl.checked) {
        _0x4d6d74.beginPath()
        for (let i = 0; i < this.segments.length; i++) {
          const { interpX: interpX, interpY: interpY } =
            this.segments[i]
          0 === i
            ? _0x4d6d74.moveTo(interpX, interpY)
            : _0x4d6d74.lineTo(interpX, interpY)
        }
        _0x4d6d74.lineWidth = 2 * _0x52b6e2 + 10
        _0x4d6d74.lineCap = 'round'
        _0x4d6d74.lineJoin = 'round'
        _0x4d6d74.stroke()
        _0x4d6d74.strokeStyle = _0x4d6d74.fillStyle
        _0x4d6d74.lineWidth -= 10
        _0x4d6d74.stroke()
      } else {
        _0x4d6d74.lineCap = 'round'
        let _0x3622fe = 0
        const _0x455568 = this.segments.length - 1
        for (let i = 1; i <= _0x455568; i++) {
          const _0x2794c6 = this.segments[i - 1],
            _0x4e87bd = this.segments[i],
            _0x233633 = _0x4e87bd.interpX - _0x2794c6.interpX,
            _0x47d9be = _0x4e87bd.interpY - _0x2794c6.interpY
          let _0x12698e = Math.hypot(_0x233633, _0x47d9be)
          const _0x510e38 = Math.atan2(_0x47d9be, _0x233633)
          if (
            ((_0x3622fe += _0x12698e),
            (_0x4e87bd.d = _0x12698e),
            (_0x4e87bd.angle = _0x510e38),
            (_0x12698e = _0x12698e || 1),
            (_0x4e87bd.dirX = _0x233633 / _0x12698e),
            (_0x4e87bd.dirY = _0x47d9be / _0x12698e),
            (_0x4e87bd.norX = -_0x4e87bd.dirY),
            (_0x4e87bd.norY = _0x4e87bd.dirX),
            1 !== i)
          ) {
            _0x2794c6.norX += _0x4e87bd.norX
            _0x2794c6.norY += _0x4e87bd.norY
            const _0x3119a7 = Math.hypot(_0x2794c6.norX, _0x2794c6.norY)
            _0x2794c6.norX /= _0x3119a7
            _0x2794c6.norY /= _0x3119a7
          } else {
            _0x2794c6.norX = _0x4e87bd.norX
            _0x2794c6.norY = _0x4e87bd.norY
            _0x2794c6.angle = _0x4e87bd.angle
            _0x2794c6.distance = 0
          }
          _0x4e87bd.distance = _0x3622fe
        }
        _0x4d6d74.lineWidth = 5
        const _0x1055c2 = this.segments[_0x455568]
        _0x4d6d74.beginPath()
        _0x4d6d74.arc(
          _0x1055c2.interpX,
          _0x1055c2.interpY,
          _0x52b6e2,
          0,
          2 * Math.PI
        )
        _0x4d6d74.fill()
        _0x4d6d74.stroke()
        for (let i = _0x455568; i >= 1; i--) {
          const _0x3d0fa0 = this.segments[i],
            _0x5ab5f8 = this.segments[i - 1]
          ;(_0x3d0fa0.interpX === _0x5ab5f8.interpX &&
            _0x3d0fa0.interpY === _0x5ab5f8.interpY) ||
            (_0x4d6d74.beginPath(),
            _0x4d6d74.moveTo(
              _0x3d0fa0.interpX + _0x3d0fa0.norX * _0x52b6e2,
              _0x3d0fa0.interpY + _0x3d0fa0.norY * _0x52b6e2
            ),
            _0x4d6d74.lineTo(
              _0x3d0fa0.interpX - _0x3d0fa0.norX * _0x52b6e2,
              _0x3d0fa0.interpY - _0x3d0fa0.norY * _0x52b6e2
            ),
            _0x4d6d74.lineTo(
              _0x5ab5f8.interpX - _0x5ab5f8.norX * _0x52b6e2,
              _0x5ab5f8.interpY - _0x5ab5f8.norY * _0x52b6e2
            ),
            _0x4d6d74.lineTo(
              _0x5ab5f8.interpX + _0x5ab5f8.norX * _0x52b6e2,
              _0x5ab5f8.interpY + _0x5ab5f8.norY * _0x52b6e2
            ),
            _0x4d6d74.fill(),
            _0x4d6d74.beginPath(),
            _0x4d6d74.moveTo(
              _0x5ab5f8.interpX - _0x5ab5f8.norX * _0x52b6e2,
              _0x5ab5f8.interpY - _0x5ab5f8.norY * _0x52b6e2
            ),
            _0x4d6d74.lineTo(
              _0x5ab5f8.interpX + _0x5ab5f8.norX * _0x52b6e2,
              _0x5ab5f8.interpY + _0x5ab5f8.norY * _0x52b6e2
            ),
            (_0x4d6d74.strokeStyle = _0x65247a),
            _0x4d6d74.stroke(),
            _0x4d6d74.beginPath(),
            _0x4d6d74.moveTo(
              _0x3d0fa0.interpX + _0x3d0fa0.norX * _0x52b6e2,
              _0x3d0fa0.interpY + _0x3d0fa0.norY * _0x52b6e2
            ),
            _0x4d6d74.lineTo(
              _0x5ab5f8.interpX + _0x5ab5f8.norX * _0x52b6e2,
              _0x5ab5f8.interpY + _0x5ab5f8.norY * _0x52b6e2
            ),
            _0x4d6d74.moveTo(
              _0x5ab5f8.interpX - _0x5ab5f8.norX * _0x52b6e2,
              _0x5ab5f8.interpY - _0x5ab5f8.norY * _0x52b6e2
            ),
            _0x4d6d74.lineTo(
              _0x3d0fa0.interpX - _0x3d0fa0.norX * _0x52b6e2,
              _0x3d0fa0.interpY - _0x3d0fa0.norY * _0x52b6e2
            ),
            (_0x4d6d74.strokeStyle = _0x14bbf2),
            _0x4d6d74.stroke())
        }
        _0x4d6d74.beginPath()
        const _0x310fb4 = _0x46ceb7.angle + Math.PI / 2
        _0x4d6d74.arc(
          _0x46ceb7.interpX,
          _0x46ceb7.interpY,
          _0x52b6e2,
          _0x310fb4,
          _0x310fb4 + Math.PI
        )
        _0x4d6d74.fill()
        _0x4d6d74.stroke()
      }
      const myFaceSkinName = (skins.faceSkins[this.faceSkin] || { name: 'idk' })
        .name
      if ('Faceless' === myFaceSkinName) {
        return
      }
      _0x4d6d74.save()
      _0x4d6d74.translate(_0x46ceb7.interpX, _0x46ceb7.interpY)
      const _0x2e2f56 =
        (_0x52b6e2 / 30) * (myFaceSkinName.startsWith('Kirk') ? 0.7 : 1)
      let _0x205471 = 0
      if ('Gear' === myFaceSkinName) {
        _0x4d6d74.scale(_0x2e2f56, _0x2e2f56)
        _0x4d6d74.fillStyle = '#111'
        _0x4d6d74.fill(_0x1290f5)
        _0x4d6d74.fillStyle = _0x65247a
        _0x4d6d74.save()
        const _0x1b0348 = ((Date.now() / 500) % Math.PI) * 2
        _0x4d6d74.rotate(_0x1b0348)
        _0x4d6d74.translate(10, 0)
        _0x4d6d74.rotate(2 * -_0x1b0348)
        _0x4d6d74.fill(_0x18a205)
        _0x4d6d74.rotate(_0x1b0348)
        _0x4d6d74.scale(0.35, 0.35)
        _0x4d6d74.scale(1 / _0x2e2f56, 1 / _0x2e2f56)
      }
      if ('Cute' === myFaceSkinName) {
        _0x4d6d74.scale(_0x2e2f56, _0x2e2f56)
        const _0x1905f4 = this.isDead ? 1 : this.sad + this.angry,
          _0x27316a = 1 - _0x1905f4
        _0x4d6d74.strokeStyle = '#222'
        _0x4d6d74.scale(1.15, 1.15)
        _0x4d6d74.save()
        _0x4d6d74.translate(0, 9.25 + 1.5 * (this.isDead ? -1 : this.dirY))
        _0x27316a > 0 &&
          (_0x4d6d74.beginPath(),
          _0x4d6d74.ellipse(
            0,
            0,
            1.6 * _0x27316a,
            2 * _0x27316a,
            0,
            0,
            2 * Math.PI
          ),
          (_0x4d6d74.fillStyle = '#222'),
          _0x4d6d74.fill())
        _0x1905f4 > 0 &&
          (_0x4d6d74.beginPath(),
          _0x4d6d74.moveTo(-3 * _0x1905f4, 0.7),
          _0x4d6d74.quadraticCurveTo(0, -2, 3 * _0x1905f4, 0.7),
          (_0x4d6d74.lineWidth = 1.5 * _0x1905f4),
          _0x4d6d74.stroke())
        _0x4d6d74.restore()
        for (let i = 0; i < 2; i++) {
          const _0x1c48bd = 9 * (2 * i - 1),
            _0x4f7b70 = 0 === i ? 1 : 0,
            _0x445c62 = 1 ^ _0x4f7b70
          this.isDead
            ? _0x1b9630(0.8 * _0x1c48bd, -6, 6, 2)
            : (_0x4d6d74.save(),
              _0x4d6d74.beginPath(),
              _0x4d6d74.moveTo(
                _0x1c48bd - 6,
                4 * _0x4f7b70 * this.sad - 15 + 5 * _0x445c62 * this.angry
              ),
              _0x4d6d74.lineTo(
                _0x1c48bd + 6,
                4 * _0x445c62 * this.sad - 15 + 5 * _0x4f7b70 * this.angry
              ),
              _0x4d6d74.lineTo(_0x1c48bd + 6, 5),
              _0x4d6d74.lineTo(_0x1c48bd - 6, 5),
              _0x4d6d74.clip(),
              _0x4d6d74.beginPath(),
              _0x4d6d74.ellipse(_0x1c48bd, -6, 5.5, 8, 0, 0, 2 * Math.PI),
              (_0x4d6d74.fillStyle = '#222'),
              (_0x4d6d74.lineWidth = 1.25),
              _0x4d6d74.fill(),
              _0x4d6d74.stroke(),
              _0x4d6d74.clip(),
              (_0x4d6d74.fillStyle = '#fff'),
              _0x4d6d74.beginPath(),
              _0x4d6d74.arc(
                _0x1c48bd + 3 * this.dirX,
                6 * this.dirY - 6,
                4.5,
                0,
                2 * Math.PI
              ),
              _0x4d6d74.fill(),
              _0x4d6d74.restore())
        }
      } else {
        'Kirkier' === myFaceSkinName &&
          _0x4d6d74.translate(13 * this.dirX, 13 * this.dirY)
        'Sarcastic' === myFaceSkinName
          ? (_0x205471 = Math.PI)
          : 'Dizzy' === myFaceSkinName &&
            (_0x205471 = (Date.now() / 200) % (2 * Math.PI))
        _0x4d6d74.rotate(_0x205471)
        _0x4d6d74.scale(_0x2e2f56, _0x2e2f56)
        'Bot' === myFaceSkinName
          ? (_0x4d6d74.beginPath(),
            _0x4d6d74.moveTo(-13, 14),
            _0x4d6d74.lineTo(13, 14),
            (_0x4d6d74.strokeStyle = _0x4d6d74.fillStyle = '#333'),
            (_0x4d6d74.lineWidth = 8),
            _0x4d6d74.stroke(),
            _0x4d6d74.beginPath(),
            _0x4d6d74.moveTo(-3, 4),
            _0x4d6d74.lineTo(3, 4),
            _0x4d6d74.lineTo(0, -2),
            _0x4d6d74.closePath(),
            (_0x4d6d74.lineWidth = 4),
            (_0x4d6d74.lineJoin = _0x4d6d74.lineCap = 'round'),
            _0x4d6d74.stroke(),
            _0x4d6d74.fill())
          : 'Moyai' === myFaceSkinName
          ? ((_0x4d6d74.fillStyle = '#333'),
            (function (_0x1a3648, _0x2c0d71) {
              _0x1a3648.save()
              _0x1a3648.translate(-31, 35)
              _0x1a3648.scale(1.7249999999999999, -1.7249999999999999)
              for (
                let _0x2a47ba = 0;
                _0x2a47ba < _0x210ee9.length;
                _0x2a47ba++
              ) {
                _0x1a3648.save()
                const _0x399d02 = _0x210ee9[_0x2a47ba]
                _0x1a3648.translate(..._0x399d02[0])
                _0x1a3648.fill(_0x399d02[1])
                _0x1a3648.restore()
              }
              _0x1a3648.restore()
            })(_0x4d6d74))
          : 'Ascii' === myFaceSkinName
          ? (_0x4d6d74.save(),
            _0x4d6d74.rotate(Math.PI / 2),
            (_0x4d6d74.fillStyle = '#222'),
            (_0x4d6d74.font = 'bolder 22px monospace'),
            (_0x4d6d74.textAlign = 'center'),
            (_0x4d6d74.textBaseline = 'middle'),
            this.isDead
              ? _0x4d6d74.fillText('x(', 0, 0)
              : 1 === this.mood
              ? (_0x4d6d74.fillText(':(', 0, 0),
                _0x4d6d74.fillText('>', -18, 0))
              : 2 === this.mood
              ? _0x4d6d74.fillText(':(', 0, 0)
              : _0x4d6d74.fillText(':)', 0, 0),
            _0x4d6d74.restore())
          : 'All Seeing' !== myFaceSkinName &&
            (_0x4d6d74.beginPath(),
            _0x4d6d74.moveTo(-7, 9.25),
            _0x4d6d74.quadraticCurveTo(
              0,
              6 + (this.isDead ? -10 : -10 * this.sad - 12 * this.angry) + 9.25,
              7,
              9.25
            ),
            (_0x4d6d74.strokeStyle = '#222'),
            (_0x4d6d74.lineWidth = 1.75),
            _0x4d6d74.stroke())
        let _0x288745 = 7.5
        const _0x2916d9 = Math.sin(-_0x205471),
          _0x52eba1 = Math.cos(-_0x205471),
          _0x3ec2bb = this.dirX * _0x52eba1 - _0x2916d9 * this.dirY,
          _0x4d3fad = this.dirX * _0x2916d9 + _0x52eba1 * this.dirY
        if ('Too cool' === myFaceSkinName) {
          _0x4d6d74.save()
          _0x4d6d74.translate(-27.5, 7)
          _0x4d6d74.scale(0.004200000000000001, -0.004200000000000001)
          _0x4d6d74.fillStyle = '#222'
          _0x4d6d74.fill(_0x55f515)
          _0x4d6d74.restore()
        } else {
          if ('Ascii' === myFaceSkinName || 'Moyai' === myFaceSkinName) {
          } else {
            if ('Cyclops' === myFaceSkinName) {
              if (this.isDead) {
                _0x1b9630(0, -6, 6, 3)
              } else {
                _0x4d6d74.save()
                _0x4d6d74.beginPath()
                const _0x2339d6 = 2 * this.sad
                _0x4d6d74.moveTo(-4, -11 + _0x2339d6)
                _0x4d6d74.lineTo(0, 2 * this.angry - 11)
                _0x4d6d74.lineTo(4, -11 + _0x2339d6)
                _0x4d6d74.lineTo(4, 0)
                _0x4d6d74.lineTo(-4, 0)
                _0x4d6d74.closePath()
                _0x4d6d74.fillStyle = '#222'
                _0x4d6d74.lineWidth = 1
                _0x4d6d74.fill()
                _0x4d6d74.stroke()
                _0x4d6d74.clip()
                _0x4d6d74.fillStyle = '#fff'
                _0x4d6d74.fillRect(
                  1.75 * _0x3ec2bb - 2.5,
                  4.25 * _0x4d3fad - 8,
                  5,
                  5
                )
                _0x4d6d74.restore()
              }
            } else {
              if ('All Seeing' === myFaceSkinName) {
                this.isDead
                  ? _0x1b9630(0, 0, 20, 7)
                  : (_0x4d6d74.beginPath(),
                    _0x4d6d74.arc(0, 0, 18, 0, 2 * Math.PI),
                    (_0x4d6d74.fillStyle = '#222'),
                    _0x4d6d74.fill(),
                    _0x4d6d74.beginPath(),
                    _0x4d6d74.arc(
                      7 * _0x3ec2bb,
                      7 * _0x4d3fad,
                      8,
                      0,
                      2 * Math.PI
                    ),
                    (_0x4d6d74.fillStyle = '#fff'),
                    _0x4d6d74.fill())
              } else {
                if ('Bot' === myFaceSkinName) {
                  const _0x30118a = -9
                  _0x288745 *= 1.5
                  for (let i = 0; i < 2; i++) {
                    const _0x845822 = (2 * i - 1) * _0x288745,
                      _0x315fca = 0 === i ? 1 : 0,
                      _0x18e72a = 1 ^ _0x315fca
                    this.isDead
                      ? _0x1b9630(_0x845822, _0x30118a, 6, 5)
                      : (_0x4d6d74.save(),
                        _0x4d6d74.beginPath(),
                        _0x4d6d74.moveTo(
                          _0x845822 - 7,
                          _0x30118a -
                            7 +
                            (this.sad * _0x315fca * 4 +
                              this.angry * _0x18e72a * 6)
                        ),
                        _0x4d6d74.lineTo(_0x845822 - 7, _0x30118a + 7),
                        _0x4d6d74.lineTo(_0x845822 + 7, _0x30118a + 7),
                        _0x4d6d74.lineTo(
                          _0x845822 + 7,
                          _0x30118a -
                            7 +
                            (this.angry * _0x315fca * 6 +
                              this.sad * _0x18e72a * 4)
                        ),
                        _0x4d6d74.closePath(),
                        _0x4d6d74.clip(),
                        (_0x4d6d74.fillStyle = '#333'),
                        _0x4d6d74.beginPath(),
                        _0x4d6d74.arc(_0x845822, _0x30118a, 7, 0, 2 * Math.PI),
                        _0x4d6d74.fill(),
                        _0x4d6d74.restore())
                  }
                } else {
                  if ('Creepy' === myFaceSkinName) {
                    const _0xde1f87 = -7
                    for (let i = 0; i < 2; i++) {
                      const _0x2484bb = (2 * i - 1) * _0x288745,
                        _0x19baf7 = 0 === i ? 1 : 0,
                        _0xe0735c = 1 ^ _0x19baf7
                      this.isDead
                        ? _0x1b9630(_0x2484bb, _0xde1f87, 4, 2)
                        : (_0x4d6d74.save(),
                          _0x4d6d74.beginPath(),
                          _0x4d6d74.moveTo(
                            _0x2484bb - 3.5,
                            _0xde1f87 -
                              3.5 +
                              (this.sad * _0x19baf7 * 2 +
                                this.angry * _0xe0735c * 3)
                          ),
                          _0x4d6d74.lineTo(_0x2484bb - 3.5, _0xde1f87 + 3.5),
                          _0x4d6d74.lineTo(_0x2484bb + 3.5, _0xde1f87 + 3.5),
                          _0x4d6d74.lineTo(
                            _0x2484bb + 3.5,
                            _0xde1f87 -
                              3.5 +
                              (this.angry * _0x19baf7 * 3 +
                                this.sad * _0xe0735c * 2)
                          ),
                          _0x4d6d74.closePath(),
                          _0x4d6d74.clip(),
                          (_0x4d6d74.fillStyle = '#222'),
                          _0x4d6d74.beginPath(),
                          _0x4d6d74.arc(
                            _0x2484bb,
                            _0xde1f87,
                            3.5,
                            0,
                            2 * Math.PI
                          ),
                          _0x4d6d74.fill(),
                          _0x4d6d74.restore())
                    }
                  } else {
                    for (let i = 0; i < 2; i++) {
                      const _0x559bb0 = (2 * i - 1) * _0x288745
                      if (this.isDead) {
                        _0x1b9630(_0x559bb0, -6, 5, 2.5)
                        continue
                      }
                      const _0x4181f4 = 0 === i ? 1 : 0,
                        _0x24a68f = 1 ^ _0x4181f4
                      _0x4d6d74.save()
                      _0x4d6d74.beginPath()
                      _0x4d6d74.moveTo(
                        _0x559bb0 + -2.75,
                        2 * _0x4181f4 * this.sad -
                          11 +
                          2.5 * _0x24a68f * this.angry
                      )
                      _0x4d6d74.lineTo(
                        _0x559bb0 + 2.75,
                        2 * _0x24a68f * this.sad -
                          11 +
                          2.5 * _0x4181f4 * this.angry
                      )
                      _0x4d6d74.lineTo(_0x559bb0 + 2.75, 0)
                      _0x4d6d74.lineTo(_0x559bb0 + -2.75, 0)
                      _0x4d6d74.closePath()
                      _0x4d6d74.fillStyle = '#222'
                      _0x4d6d74.lineWidth = 1
                      _0x4d6d74.fill()
                      _0x4d6d74.stroke()
                      _0x4d6d74.clip()
                      _0x4d6d74.fillStyle = '#fff'
                      _0x4d6d74.fillRect(
                        _0x559bb0 - 2.5 + 1.75 * _0x3ec2bb,
                        4.25 * _0x4d3fad - 8,
                        5,
                        5
                      )
                      _0x4d6d74.restore()
                    }
                    'Pirate' === myFaceSkinName
                      ? (_0x4d6d74.save(),
                        _0x4d6d74.beginPath(),
                        _0x4d6d74.arc(0, 0, 30, 0, 2 * Math.PI),
                        _0x4d6d74.clip(),
                        _0x4d6d74.translate(7.5, -5.7),
                        _0x4d6d74.beginPath(),
                        _0x4d6d74.arc(0, 0, 8.5, 0, 2 * Math.PI),
                        (_0x4d6d74.fillStyle = '#222'),
                        _0x4d6d74.fill(),
                        (_0x4d6d74.strokeStyle = '#222'),
                        _0x4d6d74.beginPath(),
                        _0x4d6d74.moveTo(-20, -30),
                        _0x4d6d74.quadraticCurveTo(-3, 0, 30, 0),
                        (_0x4d6d74.lineWidth = 4),
                        _0x4d6d74.stroke(),
                        _0x4d6d74.restore())
                      : 'Intellectual' === myFaceSkinName &&
                        (_0x4d6d74.save(),
                        _0x4d6d74.translate(7.5, -5.7),
                        _0x4d6d74.beginPath(),
                        _0x4d6d74.arc(0, 0, 8.5, 0, 2 * Math.PI),
                        (_0x4d6d74.fillStyle = 'hsla(0,0%,100%,0.5)'),
                        _0x4d6d74.fill(),
                        (_0x4d6d74.lineWidth = 1),
                        (_0x4d6d74.strokeStyle = '#333'),
                        _0x4d6d74.stroke(),
                        _0x4d6d74.translate(8.5, 0),
                        _0x4d6d74.beginPath(),
                        _0x4d6d74.moveTo(0, 0),
                        _0x4d6d74.lineTo(0, 18),
                        _0x4d6d74.stroke(),
                        _0x4d6d74.restore())
                  }
                }
              }
            }
          }
        }
      }
      function _0x1b9630(_0x227c74, _0x272850, _0x29efb6 = 10, _0x23c73d = 5) {
        _0x4d6d74.save()
        _0x4d6d74.translate(_0x227c74, _0x272850)
        _0x4d6d74.rotate(Math.PI / 4)
        _0x4d6d74.scale(_0x29efb6, _0x29efb6)
        _0x4d6d74.beginPath()
        _0x4d6d74.moveTo(0, -1)
        _0x4d6d74.lineTo(0, 1)
        _0x4d6d74.moveTo(-1, 0)
        _0x4d6d74.lineTo(1, 0)
        _0x4d6d74.lineWidth = _0x23c73d / _0x29efb6
        _0x4d6d74.strokeStyle = '#333'
        _0x4d6d74.stroke()
        _0x4d6d74.restore()
      }
      'Gear' === myFaceSkinName && _0x4d6d74.restore()
      _0x4d6d74.restore()
    }
  }
  function _0x406b9c(_0x4e26bf) {
    return (function (_0x3def1b) {
      const _0x2f7f38 = Math.floor(5 * Math.random())
      for (let i = 0; i < _0x3def1b.length; i++) {
        _0x3def1b[i] = Math.max(0, _0x3def1b[i] - _0x2f7f38)
      }
      return _0x3def1b
    })(oreToColor(_0x4e26bf))
  }
  crypto.randomUUID =
    crypto.randomUUID ||
    function () {
      return ([10000000] + -1000 + -4000 + -8000 + -100000000000).replace(
        /[018]/g,
        (_0x813e9e) =>
          (
            _0x813e9e ^
            (crypto.getRandomValues(new Uint8Array(1))[0] &
              (15 >> (_0x813e9e / 4)))
          ).toString(16)
      )
    }
  window.onload = function () {
    loaderEl.style.display = 'none'
    joinGame(window.location.origin.replace('http', 'ws'))
    _0x40d72d()
  }
  document.body.oncontextmenu = function () {
    return false
  }
  const wsCloseReasons = {
    0: 'invalidProtocol', 
    1: 'outdatedVersion', 
    2: 'tooManyConnections', 
    3: 'AFK'
  },
    loaderEl = document.querySelector('.loader'),
    connectingEl = document.querySelector('.connecting'),
    gridEl = document.querySelector('.grid'),
    lbEl = document.querySelector('.lb'),
    lbContentEl = document.querySelector('.lb-content'),
    lbHeaderSpanEl = document.querySelector('.lb-header span')
  if (_0x39ef23) {
    lbEl.classList.add('slide-up')
    lbEl.style.pointerEvents = 'all'
    const lbBtnEl = document.querySelector('.lb-btn')
    lbBtnEl.classList.remove('slide-up')
    lbBtnEl.ontouchstart = lbEl.ontouchstart = function () {
      lbBtnEl.classList.toggle('slide-up')
      lbEl.classList.toggle('slide-up')
    }
  }
  const menuEl = document.querySelector('.menu'),
    settingsEl = document.querySelector('.settings'),
    changelogEl = document.querySelector('.changelog'),
    settingsbtnEl = document.querySelector('.settings-btn'),
    changelogbtnEl = document.querySelector('.changelog-btn')
  _0x243035('#ppBtn', '/docs/pp.html')
  _0x243035('#tosBtn', '/docs/tos.html')
  const loginBtnEl = document.querySelector('.login-btn')
  loginBtnEl.onclick = function () {
    discordData ||
      (window.location.href =
        'https://discord.com/api/oauth2/authorize?client_id=995547764983341057&redirect_uri=' +
        encodeURIComponent(window.location.origin + '/discord') +
        '&response_type=code&scope=identify&state=' +
        encodeURIComponent(btoa(accountId)))
  }
  const logoutBtnEl = document.querySelector('.logout-btn')
  function _0x243035(_0x48c796, _0x52a14f) {
    document.querySelector(_0x48c796).onclick = function () {
      window.open(_0x52a14f, '_blank')
    }
  }
  logoutBtnEl.onclick = function () {
    accountId == localStorage.account_id && delete localStorage.account_id
    delete localStorage.discord_data
    ws && ws.close()
  }
  _0x243035('.discord-btn', 'https://discord.gg/WkYHsUQF5a')
  _0x243035('.reddit-btn', 'https://www.reddit.com/r/digworm/')
  const overlayEl = document.querySelector('.overlay'),
    _0x1bb119 =
      (document.querySelector('.game .overlay'),
      document.querySelector('.shop'))
  _0x39ef23 && _0x1bb119.classList.add('fullsize-shop')
  const gameEl = document.querySelector('.game'),
    gameoverEl = document.querySelector('.gameover'),
    continueBtnEl = document.querySelector('.continue-btn'),
    faceSkinsEl = document.querySelector('.face-skins'),
    bodySkinsEl = document.querySelector('.body-skins'),
    div = document.createElement('div'),
    newSkinsEl = document.querySelector('.new-skins'),
    _0x421e37 = [],
    unequipBtnEl = document.querySelector('.unequip-btn')
  unequipBtnEl.onclick = function () {
    for (let i = 0; i < 2; i++) {
      const _0x5397a4 = document.querySelector(
        '.' + (0 === i ? 'face' : 'body') + '-skin [stroke=Unequip]'
      )
      _0x5397a4 && _0x5397a4.setAttribute('stroke', 'Equip')
    }
    localStorage.equipped_body_skin = -1
    localStorage.equipped_face_skin = -1
    this.classList.add('btn-disabled')
  }
  const _0x553cf3 = []
  function _0x287195(skinGroup, el, skinType) {
    let div
    skinGroup = skinGroup
      .map((_0x4fe172, _0x255006) => ((_0x4fe172.id = _0x255006), _0x4fe172))
      .sort(function (_0x4710bd, _0x4a45e9) {
        return _0x4710bd.price - _0x4a45e9.price
      })
    el.innerHTML = ''
    for (let i = 0; i < skinGroup.length; i++) {
      i % 4 == 0 &&
        ((div = document.createElement('div')),
        div.classList.add('shop-row'),
        el.appendChild(div))
      const skin = skinGroup[i]
      div.innerHTML =
        '\n\t\t<div class="shop-item ' +
        skinType +
        '-skin ' +
        skinType +
        'Skin' +
        i +
        '">\n\t\t\t<div class="shop-item-preview"></div>\n\t\t\t<span stroke="' +
        skin.name +
        '" class="shop-item-name"></span>\n\t\t\t<div class="btn gold-btn btn-disabled">\n\t\t\t\t<i class="fa fa-circle"></i>\n\t\t\t\t<span stroke="' +
        skin.price.toLocaleString() +
        '"></span>\n\t\t\t</div>\n\t\t</div>'
      const divChild = div.children[0]
      skin.shopItemEl = divChild
      _0x1b6494(divChild)[skinType + 'Skin'] = skin.id
      div.appendChild(divChild)
      divChild.initialParent = div
      divChild.tempDiv = document.createElement('div')
    }
  }
  document.onmousemove = function (pos) {
    for (let i = 0; i < _0x553cf3.length; i++) {
      const _0x3c0143 = _0x553cf3[i],
        _0x5d55ed = _0x3c0143.previewPlayer,
        _0x5a0205 = _0x3c0143.previewEl.getBoundingClientRect(),
        _0x4eb1a7 = Math.atan2(
          pos.clientY - (_0x5a0205.top + _0x5a0205.height / 2),
          pos.clientX - (_0x5a0205.left + _0x5a0205.width / 2)
        )
      _0x5d55ed.oldDirX = _0x5d55ed.dirX
      _0x5d55ed.oldDirY = _0x5d55ed.dirY
      _0x5d55ed.newDirX = Math.cos(_0x4eb1a7)
      _0x5d55ed.newDirY = Math.sin(_0x4eb1a7)
    }
  }
  let _0x2710ba = 0
  const _0x54c5be = _0x1b6494(document.querySelector('.my-skin-preview'))
  function _0x1b6494(el) {
    const canvas = document.createElement('canvas')
    canvas.style.position = 'absolute'
    canvas.style.top = '0'
    canvas.style.left = '0'
    canvas.style.width = '100%'
    el.style.position = 'relative'
    el.insertBefore(canvas, el.children[0])
    const ctx = canvas.getContext('2d'),
      previewEl = el.querySelector('.shop-item-preview'),
      previewPlayer = new Worm(0, 0, 30)
    for (let i = 0; i < 2; i++) {
      previewPlayer.segments.push({
        interpX: -100 * i,
        interpY: 0,
      })
    }
    const _0x127d71 = {
      previewPlayer: previewPlayer,
      el: el,
      previewEl: previewEl,
      faceSkin: -1,
      bodySkin: -1,
      render() {
        if (0 === _0x1bb119.getBoundingClientRect().width) {
          return
        }
        const _0x1db898 = el.getBoundingClientRect()
        if (0 === _0x1db898.height || 0 === _0x1db898.width) {
          return
        }
        const _0x8ae748 = _0x1db898.width * window.devicePixelRatio,
          _0x378eb1 = _0x1db898.height * window.devicePixelRatio
        ;(canvas.width === _0x8ae748 && canvas.height === _0x378eb1) ||
          ((canvas.width = _0x8ae748), (canvas.height = _0x378eb1))
        const _0x42f183 = previewEl.getBoundingClientRect()
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.save()
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
        const _0x3fe9ac = previewPlayer.segments[0],
          _0x312c67 = _0x42f183.width / 2
        ctx.translate(
          _0x42f183.left - _0x1db898.left + _0x312c67,
          _0x42f183.top - _0x1db898.top + _0x312c67
        )
        const _0x4ee50f = _0x312c67 / previewPlayer.interpR
        ctx.scale(_0x4ee50f, _0x4ee50f)
        ctx.translate(-_0x3fe9ac.x, -_0x3fe9ac.y)
        previewPlayer.faceSkin = this.faceSkin
        previewPlayer.bodySkin = this.bodySkin
        previewPlayer.mood = _0x2710ba
        previewPlayer.dirX += 0.2 * (previewPlayer.newDirX - previewPlayer.dirX)
        previewPlayer.dirY += 0.2 * (previewPlayer.newDirY - previewPlayer.dirY)
        previewPlayer.interpFace()
        previewPlayer.draw(0, ctx, false)
        ctx.restore()
      },
    }
    return _0x553cf3.push(_0x127d71), _0x127d71
  }
  continueBtnEl.onclick = function () {
    minimizeEl.classList.remove('minimize-show')
    gameEl.classList.remove('game-show')
    ws &&
      ws.readyState === ws.OPEN &&
      setTimeout(function () {
        gridEl.classList.add('grid-show')
      }, 500)
  }
  overlayEl.onclick = function () {
    _0x1bb119.classList.remove('dialog-show')
    overlayEl.classList.remove('overlay-show')
  }
  settingsbtnEl.onclick = changelogbtnEl.onclick = function () {
    const _0x2fd8e4 = this == settingsbtnEl ? changelogEl : settingsEl
    ;(this == settingsbtnEl ? settingsEl : changelogEl).classList.toggle('dialog-show')
    _0x2fd8e4.classList.remove('dialog-show')
    this === changelogbtnEl && (_0x48a579 = false)
  }
  menuEl.onclick = function (_0x40bb21) {
    _0x40bb21.target == this &&
      (changelogEl.classList.remove('dialog-show'),
      settingsEl.classList.remove('dialog-show'))
  }
  const dlgCloseEls = document.querySelectorAll('.dialog-close')
  for (let i = 0; i < dlgCloseEls.length; i++) {
    dlgCloseEls[i].onclick = function () {
      const _0x32d8c6 = this.parentNode.parentNode
      _0x32d8c6.classList.remove('dialog-show')
      _0x32d8c6 == _0x1bb119
        ? overlayEl.classList.remove('overlay-show')
        : _0x32d8c6 == squadEl && gridEl.classList.remove('grid-pushup')
    }
  }
  const shopBtnEl = document.querySelector('.shop-btn'),
    squadBtnEl = document.querySelector('.squad-btn'),
    squadEl = document.querySelector('.squad'),
    shopDlgCntEl = document.querySelectorAll('.shop .dialog-content'),
    playBtnEl = document.querySelector('.play-btn')
  let _0x48a579 = true,
    pressedKey = {}
  function _0xbbd36() {
    if (!kbMovementCbEl.checked) {
      return
    }
    let _0xe6e3da = 0,
      _0x36a400 = 0
    pressedKey.KeyW || pressedKey.ArrowUp
      ? (_0x36a400 = -1)
      : (pressedKey.KeyS || pressedKey.ArrowDown) && (_0x36a400 = 1)
    pressedKey.KeyA || pressedKey.ArrowLeft
      ? (_0xe6e3da = -1)
      : (pressedKey.KeyD || pressedKey.ArrowRight) && (_0xe6e3da = 1)
    ;(0 !== _0xe6e3da || 0 !== _0x36a400) &&
      _0x2ebfb5(Math.atan2(_0x36a400, _0xe6e3da))
  }
  function getMySkins() {
    const myFaceSkin = parseInt(localStorage.equipped_face_skin),
      myBodySkin = parseInt(localStorage.equipped_body_skin)
    return [isNanCheck(myFaceSkin), isNanCheck(myBodySkin)]
    function isNanCheck(num) {
      return isNaN(num) ? -1 : num
    }
  }
  function rmDlgs() {
    changelogEl.classList.remove('dialog-show')
    settingsEl.classList.remove('dialog-show')
  }
  function _0x371f8c(_0x11e818) {
    const _0x19f513 = document.querySelectorAll(_0x11e818 + ' .btn')
    for (let i = 0; i < _0x19f513.length; i++) {
      _0x19f513[i].onclick = function () {
        const _0x4317f3 = document.querySelector(_0x11e818 + ' .btn-active')
        if (
          (_0x4317f3 && _0x4317f3.classList.remove('btn-active'),
          this.classList.add('btn-active'),
          '.gamemodes' === _0x11e818)
        ) {
          localStorage.gamemode = this.getAttribute('data-gamemode')
        } else {
          if ('.tabs' === _0x11e818) {
            for (let j = 0; j < _0x421e37.length; j++) {
              const _0x36ff03 = _0x421e37[j]
              0 !== i
                ? _0x36ff03.parentNode !== _0x36ff03.initialParent &&
                  (_0x36ff03.initialParent.insertBefore(
                    _0x36ff03,
                    _0x36ff03.tempDiv
                  ),
                  _0x36ff03.tempDiv.remove())
                : _0x36ff03.parentNode !== newSkinsEl &&
                  (_0x36ff03.initialParent.insertBefore(
                    _0x36ff03.tempDiv,
                    _0x36ff03
                  ),
                  newSkinsEl.appendChild(_0x36ff03))
            }
            for (let k = 0; k < shopDlgCntEl.length; k++) {
              shopDlgCntEl[k].style.display =
                k === i ? '' : 'none'
            }
          }
        }
      }
    }
  }
  function _0x493cc2() {
    const _0x198359 = document.querySelector(
      '[data-gamemode="' + localStorage.gamemode + '"]'
    )
    _0x198359 && _0x198359.click()
  }
  document.onkeydown = function (_0x353950) {
    if (9 === _0x353950.which) {
      return false
    }
    _0x353950.repeat ||
      ((pressedKey[_0x353950.code] = true), _0xbbd36(), _0x382b09())
  }
  document.onkeyup = function (key) {
    delete pressedKey[key.code]
    _0xbbd36()
    _0x382b09()
    'KeyC' === key.code
      ? canvasEl.toBlob(function (img) {
          navigator.clipboard.write([
            new ClipboardItem({ 'image/png': img }),
          ])
        })
      : 'Escape' === key.code
      ? gameEl.classList.contains('game-show')
        ? minimizeBtnEl.click()
        : minimizeEl.classList.contains('minimize-show') && resumeEl.click()
      : 'Enter' === key.code &&
        (gridEl.classList.contains('grid-show')
          ? playBtnEl.click()
          : '' === gameoverEl.style.display &&
            gameEl.classList.contains('game-show') &&
            continueBtnEl.click())
  }
  playBtnEl.onclick = function () {
    rmDlgs()
    gridEl.classList.remove('grid-show')
    setTimeout(function () {
      const [faceSkin, bodySkin] = getMySkins(),
        nickname = new TextEncoder().encode(nicknameEl.value.slice(0, 14)),
        dv = new DataView(
          new ArrayBuffer(
            1 +
              (-1 !== faceSkin ? 1 : 0) +
              (-1 !== bodySkin ? 1 : 0) +
              nickname.length
          )
        )
      let cnt = 0,
        gamemode = parseInt(localStorage.gamemode)
      ;(isNaN(gamemode) || gamemode > 1) && (gamemode = 0)
      dv.setUint8(
        cnt++,
        leftShiftOr(
          0,
          (gamemode << 2) |
            (-1 !== faceSkin ? 1 : 0) |
            (-1 !== bodySkin ? 2 : 0)
        )
      )
      ;-1 !== faceSkin && dv.setUint8(cnt++, faceSkin)
      ;-1 !== bodySkin && dv.setUint8(cnt++, bodySkin)
      for (let i = 0; i < nickname.length; i++) {
        dv.setUint8(cnt++, nickname[i])
      }
      wsSend(dv)
    }, 200)
  }
  shopBtnEl.onclick = function () {
    _0x1bb119.querySelector('.tabs .btn').click()
    _0x1bb119.classList.add('dialog-show')
    overlayEl.classList.add('overlay-show')
    _0x889b55 = _0x4f0b52 = null
    _0x2710ba = 0
  }
  squadBtnEl.onclick = function () {
    squadEl.classList.add('dialog-show')
    gridEl.classList.add('grid-pushup')
  }
  _0x371f8c('.gamemodes')
  _0x371f8c('.tabs')
  _0x493cc2()
  ;(function () {
    const canvas = document.createElement('canvas')
    canvas.width = canvas.height = 20
    const ctx = canvas.getContext('2d'),
      img = ctx.createImageData(20, 20),
      imgData = img.data
    for (let i = 0; i < imgData.length; i += 4) {
      _0x406b9c(_0x21ff22.dirt)
      imgData[i] = 0
      imgData[i + 1] = 0
      imgData[i + 2] = 0
      imgData[i + 3] = 10 * Math.random()
    }
    ctx.putImageData(img, 0, 0)
    const styleEl = document.createElement('style')
    styleEl.innerText =
      '\n\t.bg {\n\t\tbackground-image: url(' +
      canvas.toDataURL() +
      ');\n\t\tbackground-size: 200px;\n\t\tanimation: bg 15s linear infinite;\n\t\timage-rendering: pixelated;\n\t}\n\n\t@keyframes bg {\n\t\tfrom {\n\t\t\tbackground-position: 0 0;\n\t\t}\n\t\tto {\n\t\t\tbackground-position: -200px -200px;\n\t\t}\n\t}\n\t'
    document.body.appendChild(styleEl)
    menuEl.classList.add('bg')
  })()
  const _0x52bebe = []
  let highScore = 0
  function _0x442358(_0xd687bf) {
    _0x360982.score = _0xd687bf
    highScore = Math.max(_0xd687bf, highScore)
    _0x52bebe.push(_0xd687bf)
  }
  const scoreGraphEl = document.querySelector('.score-graph'),
    scoreGraphElCtx = scoreGraphEl.getContext('2d'),
    goldPreviewSpanEl = document.querySelectorAll('.gold-preview span'),
    goldCanvasEl = document.getElementById('goldCanvas'),
    goldCanvasElCtx = goldCanvasEl.getContext('2d'),
    canvasEl = document.getElementById('canvas')
  _0x3c1fa3()
  const canvasElCtx = canvasEl.getContext('2d')
  function _0x3c1fa3() {
    const pixelRatio = highResEl.checked ? window.devicePixelRatio : 1
    canvasEl.width = goldCanvasEl.width = window.innerWidth * pixelRatio
    canvasEl.height = goldCanvasEl.height = window.innerHeight * pixelRatio
    canvasEl.style.width = goldCanvasEl.style.width = window.innerWidth + 'px'
    canvasEl.style.height = goldCanvasEl.style.height = window.innerHeight + 'px'
  }
  window.onresize = function () {
    _0x3c1fa3()
    _0x13d5e7()
    _0x8d0f50()
    _0x30dcaf()
  }
  const alertEl = document.querySelector('.alert'),
    alertDescEl = alertEl.querySelector('.alert-desc'),
    hudEl = document.querySelector('.hud'),
    _0x32c425 = [menuEl, hudEl, gameoverEl, hudCommonEl, alertEl]
  let _0x19da0e = 1
  function _0x13d5e7() {
    _0x19da0e =
      Math.max(window.innerWidth / 1366, window.innerHeight / 657) *
      (_0x39ef23 && !_0x5e06ec ? 1.6 : 1)
    for (let i = 0; i < _0x32c425.length; i++) {
      const _0x17ade8 = _0x32c425[i]
      let _0x315d99 = _0x19da0e
      _0x17ade8.style.transform = 'scale(' + _0x315d99 + ')'
      _0x17ade8.style.transformOrigin = '0 0'
      _0x17ade8.style.width = window.innerWidth / _0x315d99 + 'px'
      _0x17ade8.style.height = window.innerHeight / _0x315d99 + 'px'
    }
  }
  _0x13d5e7()
  let playersDestroyed = 0,
    goldDigged = 0
  function scoreToStr(score) {
    return score < 0.01
      ? '0'
      : (score = Math.floor(score)) >= 1000000
      ? parseFloat((score / 1000000).toFixed(2)) + 'm'
      : score >= 1000
      ? parseFloat((score / 1000).toFixed(1)) + 'k'
      : score
  }
  const statsEl = document.querySelector('.stats')
  function msToStr(millisec) {
    const temp = [
        Math.floor(millisec / 3600000),
        Math.floor((millisec % 3600000) / 60000),
        Math.floor((millisec % 60000) / 1000),
      ],
      units = ['h', 'm', 's']
    let str = ''
    for (let i = 0; i < temp.length; i++) {
      const _0x29288d = temp[i]
      ;(_0x29288d > 0 || 2 == i) &&
        (str += _0x29288d + units[i] + ' ')
    }
    return str
  }
  function _0x30dcaf() {
    if ('none' === gameoverEl.style.display) {
      return
    }
    for (; _0x52bebe.length < 2; ) {
      _0x52bebe.push(0)
    }
    const _0x4b9b64 = (window.innerWidth * window.devicePixelRatio) / _0x19da0e
    scoreGraphEl.width !== _0x4b9b64 &&
      ((scoreGraphEl.width = _0x4b9b64),
      (scoreGraphEl.height = 100 * window.devicePixelRatio))
    const _0x3b9bde = Math.max(highScore, 1000)
    scoreGraphElCtx.clearRect(0, 0, scoreGraphEl.width, scoreGraphEl.height)
    scoreGraphElCtx.save()
    scoreGraphElCtx.scale(scoreGraphEl.width, scoreGraphEl.height)
    scoreGraphElCtx.beginPath()
    scoreGraphElCtx.moveTo(-2, 2)
    let _0x549259 = 0,
      _0x4ac362 = 0
    const _0x4da99b = _0x52bebe.length - 1
    for (let i = 0; i <= _0x4da99b; i++) {
      const _0x2f3ad8 = _0x52bebe[i],
        _0x15a2d7 = i / _0x4da99b,
        _0x3a7d80 = 0.975 - (_0x2f3ad8 / _0x3b9bde) * 0.95
      scoreGraphEl.width
      _0x2f3ad8 === highScore &&
        ((_0x549259 = _0x15a2d7), (_0x4ac362 = _0x3a7d80))
      scoreGraphElCtx.lineTo(_0x15a2d7, _0x3a7d80)
      i === _0x4da99b && scoreGraphElCtx.lineTo(2, _0x3a7d80)
    }
    scoreGraphElCtx.lineTo(2, 2)
    scoreGraphElCtx.closePath()
    scoreGraphElCtx.restore()
    scoreGraphElCtx.strokeStyle = scoreGraphElCtx.fillStyle = 'hsla(0,0%,100%,0.2)'
    scoreGraphElCtx.save()
    scoreGraphElCtx.clip()
    scoreGraphElCtx.fill()
    scoreGraphElCtx.lineWidth = 6 * window.devicePixelRatio
    scoreGraphElCtx.stroke()
    scoreGraphElCtx.restore()
  }
  const _0x31c3e2 = []
  let _0x1cd091, _0x194da0, ws, _0x36e905, _0x34e918
  function _0x530c53() {
    _0x224d6b = false
    lbContentEl.innerHTML = ''
    _0x552882.length = 0
    _0x194da0 = null
    _0x1cd091 = null
    _0x3ef6bf = null
    _0x52a128.length = 0
    _0x31c3e2.length = 0
    _0x551ff8.length = 0
    playersDestroyed = 0
    goldDigged = 0
  }
  function joinGame(WS_URL) {
    if (
      (console.log('Connecting to ' + WS_URL + '...'),
      connectingEl.classList.add('connecting-show'),
      minimizeEl.classList.remove('minimize-show'),
      continueBtnEl.click(),
      gridEl.classList.remove('grid-show'),
      overlayEl.onclick(),
      (_0x127399.length = 0),
      _0x530c53(),
      (_0x36e905 = null),
      (_0x34e918 = 0),
      (buf2 = null),
      (_0x57d1e4 = 0),
      (discordData = null),
      (logoutBtnEl.style.display =
        loginBtnEl.style.display =
        userEl.style.display =
          'none'),
      ws)
    ) {
      try {
        ws.close()
      } catch (err) {}
      ws.onopen = ws.onmessage = ws.onclose = null
      ws = null
    }
    ws = new WebSocket(WS_URL)
    ws.binaryType = 'arraybuffer'
    ws.onopen = onOpen
    ws.onmessage = onMessage
    ws.onclose = onError
  }
  const avatarEl = document.querySelector('.avatar'),
    usernameEl = document.querySelector('.username'),
    userEl = document.querySelector('.user')
  let accountId, discordData
  function onOpen() {
    var _0x1e5734
    if (
      (console.log('Connected!'),
      (function () {
        _0x553cf3.length = 1
        for (let skinType in skins) {
          const skin = skins[skinType]
          for (let i = 0; i < skin.length; i++) {
            delete skin[i].owned
            delete skin[i].purchaseSent
          }
        }
        _0x287195(skins.faceSkins, faceSkinsEl, 'face')
        _0x287195(skins.bodySkins, bodySkinsEl, 'body')
        _0x421e37.length = 0
        newSkinsEl.innerHTML = ''
        const _0x4775f5 = skins.faceSkins
            .concat(skins.bodySkins)
            .sort(function (_0x24234f, _0x400b22) {
              return _0x400b22.createdAt - _0x24234f.createdAt
            }),
          _0x487452 = Math.min(4, _0x4775f5.length)
        for (let i = 0; i < _0x487452; i++) {
          _0x421e37.push(_0x4775f5[i].shopItemEl)
        }
      })(),
      isValidUuid(localStorage.account_id) ||
        (localStorage.account_id = crypto.randomUUID()),
      (accountId = localStorage.account_id),
      (discordData = localStorage.discord_data),
      discordData ||
        ('discord_data',
        (_0x1e5734 = document.cookie.match(
          RegExp(
            '(?:^|;\\s*)' +
              'discord_data'.replace(/([.*+?\^$(){}|\[\]\/\\])/g, '\\$1') +
              '=([^;]*)'
          )
        )),
        (discordData = _0x1e5734 ? _0x1e5734[1] : null),
        discordData && (discordData = decodeURIComponent(discordData)),
        (document.cookie =
          'discord_data=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;')),
      discordData)
    ) {
      try {
        const dData = discordData
        if (
          ((discordData = JSON.parse(
            decodeURIComponent(escape(atob(dData)))
          )),
          !isValidUuid(discordData.accountId))
        ) {
          throw new Error('invalid uuid')
        }
        accountId = discordData.accountId
        usernameEl.setAttribute('stroke', discordData.name)
        discordData.avatar &&
          (avatarEl.style.backgroundImage = 'url(' + discordData.avatar + ')')
        localStorage.discord_data = dData
      } catch (err) {
        discordData = null
        delete localStorage.discord_data
        console.error(err)
      }
    }
    const dv = new DataView(new ArrayBuffer(5 + accountId.length))
    dv.setUint8(0, leftShiftOr(3, 0))
    dv.setUint32(1, 4)
    for (let i = 0; i < accountId.length; i++) {
      dv.setUint8(5 + i, accountId.charCodeAt(i))
    }
    wsSend(dv)
  }
  let _0x36e069 = 0
  const _0x52a128 = []
  let _0x224d6b = false,
    _0x552882 = []
  function _0x29e019(name, score) {
    const lbItemEl = document.createElement('div')
    lbItemEl.classList.add('lb-item')
    const lbBarEl = document.createElement('div')
    lbBarEl.classList.add('lb-bar')
    lbItemEl.appendChild(lbBarEl)
    const lbTextEl = document.createElement('span')
    lbItemEl.appendChild(lbTextEl)
    lbContentEl.appendChild(lbItemEl)
    const _0x4587b5 = {
      name: name,
      score: score,
      iScore: 0,
      percent: 0,
      iPercent: 0,
      lbItemEl: lbItemEl,
      lbBarEl: lbBarEl,
      lbTextEl: lbTextEl,
      update: function () {
        this.iScore += 0.1 * (this.score - this.iScore)
        this.iPercent += 0.1 * (this.percent - this.iPercent)
        this.lbTextEl.setAttribute(
          'stroke',
          (this.name ? this.name + ' - ' : '') + scoreToStr(this.iScore)
        )
        this.lbBarEl.style.width = this.iPercent + '%'
      },
    }
    return _0x4587b5.update(), _0x552882.push(_0x4587b5), _0x4587b5
  }
  const _0x360982 = _0x29e019('', 0)
  function _0x245d1c() {
    if (0 === _0x552882.length) {
      return
    }
    const _0x4dea7c = _0x552882[0]
    _0x4dea7c.percent = _0x4dea7c.iPercent = 100
    let _0x411c8a = _0x4dea7c.isMe
    for (let i = 1; i < _0x552882.length; i++) {
      const _0x146efc = _0x552882[i]
      _0x562ac8(_0x146efc, _0x4dea7c)
      const _0x501908 = _0x146efc.lbItemEl
      _0x501908.parentNode.appendChild(_0x501908)
      _0x146efc.isMe && (_0x411c8a = true)
    }
    _0x411c8a ||
      (_0x562ac8(_0x360982, _0x4dea7c),
      lbContentEl.appendChild(_0x360982.lbItemEl))
  }
  function _0x562ac8(_0x34f764, _0x181d0f) {
    _0x34f764.percent =
      100 * Math.min(1, _0x34f764.score / _0x181d0f.score || 0)
  }
  _0x360982.lbItemEl.classList.add('my-lb-item')
  _0x360982.isMe = true
  const _0x551ff8 = []
  let numWorms = 0
  Math.sqrt(2)
  let myGold = 0
  const _0x127399 = []
  function _0x37c0af(faceOrBody, _0x5e8647) {
    const _0x534305 = skins[faceOrBody + 'Skins'][_0x5e8647]
    _0x534305.owned = true
    const _0x54e3cd = _0x534305.shopItemEl.querySelector('.btn')
    _0x54e3cd.classList.remove('gold-btn')
    _0x54e3cd.classList.add('blue-btn')
    _0x54e3cd.classList.remove('btn-disabled')
    _0x54e3cd.innerHTML = '<span stroke="Equip"></span>'
    const _0x3e855e = 'equipped_' + faceOrBody + '_skin'
    _0x54e3cd.onclick = function () {
      const _0x317ef6 = document.querySelector(
        '.' + faceOrBody + '-skin [stroke=Unequip]'
      )
      _0x317ef6 && _0x317ef6.setAttribute('stroke', 'Equip')
      const _0x57db4d = _0x317ef6 && _0x317ef6.parentNode === this
      _0x57db4d || _0x54e3cd.children[0].setAttribute('stroke', 'Unequip')
      localStorage[_0x3e855e] = _0x57db4d ? -1 : _0x5e8647
      const _0x23d1f3 = getMySkins()
      unequipBtnEl.classList[
        -1 === _0x23d1f3[0] && -1 === _0x23d1f3[1] ? 'add' : 'remove'
      ]('btn-disabled')
      console.log(localStorage[_0x3e855e])
    }
    parseInt(localStorage[_0x3e855e]) === _0x5e8647 && _0x54e3cd.onclick()
  }
  function skinShopsInit() {
    singleSkinShopInit('face')
    singleSkinShopInit('body')
  }
  function singleSkinShopInit(prefix) {
    const skinGroup = skins[prefix + 'Skins']
    for (let i = 0; i < skinGroup.length; i++) {
      const skin = skinGroup[i]
      if (skin.owned) {
        continue
      }
      const skinShopBtnEl = skin.shopItemEl.querySelector('.btn')
      myGold >= skin.price
        ? (skinShopBtnEl.classList.remove('btn-disabled'),
          (skinShopBtnEl.onclick = function () {
            if (skin.purchaseSent || _0x127399.length > 0) {
              return
            }
            skin.purchaseSent = true
            const dv = new DataView(new ArrayBuffer(2))
            dv.setUint8(0, leftShiftOr(4, 'face' === prefix ? 0 : 1))
            dv.setUint8(1, i)
            wsSend(dv)
            skinShopBtnEl.classList.add('btn-disabled')
            skinShopBtnEl.blur()
            _0x127399.push({
              skin: skin,
              i: i,
              prefix: prefix,
            })
          }))
        : (skinShopBtnEl.classList.add('btn-disabled'), (skinShopBtnEl.onclick = null))
    }
  }
  function displayGold() {
    const goldStr = myGold
      .toLocaleString('en', { notation: 'compact' })
      .toLowerCase()
    for (let i = 0; i < goldPreviewSpanEl.length; i++) {
      goldPreviewSpanEl[i].innerText = goldStr
    }
  }
  function _0x5ddf1a(i) {
    for (i = Math.ceil(i / 2); i--; ) {
      _0x38936e.push({
        spawnTime:
          (_0x38936e[_0x38936e.length - 1] || { spawnTime: 0 }).spawnTime +
          0.03,
        x: 0,
        y: -20,
        vx: 1.5 * (2 * Math.random() - 1),
        vy: 1 * (2 * Math.random() - 1),
        angle: 6.28 * Math.random(),
        angleSpeed: 0.1 * Math.random() + 0.1,
      })
    }
  }
  let _0x367af4, _0x5656c8
  const rewardBtwnsEl = document.querySelector('.reward-btns'),
    rewardArrowEl = rewardBtwnsEl.querySelector('.arrow'),
    rewardStatusEl = document.getElementById('rewardStatus')
  function _0x179918(_0x20c8d9) {
    let _0x55e9b4 = Math.ceil(_0x20c8d9 / 1000 / 60)
    const _0x272646 = Math.floor(_0x55e9b4 / 60)
    _0x55e9b4 %= 60
    let _0x5bd8b3 = ''
    function _0x422f1c(_0x293774) {
      return _0x293774 > 1 ? 's ' : ' '
    }
    return (
      _0x272646 > 0 &&
        (_0x5bd8b3 += _0x272646 + ' hour' + _0x422f1c(_0x272646)),
      (0 != _0x272646 && 0 == _0x55e9b4) ||
        (_0x5bd8b3 += _0x55e9b4 + ' min' + _0x422f1c(_0x55e9b4)),
      _0x5bd8b3
    )
  }
  rewardBtwnsEl.innerHTML = ''
  for (let _0x6f59a1 = 0; _0x6f59a1 < _0x36e559.length; _0x6f59a1++) {
    rewardBtwnsEl.innerHTML +=
      '<div class="btn btn-disabled"><span stroke="' +
      _0x36e559[_0x6f59a1] +
      '"></span></div>'
  }
  let _0x193b62
  function _0x38da97() {
    const goldBtnEl = rewardBtwnsEl.querySelector('.gold-btn')
    goldBtnEl &&
      (goldBtnEl.classList.remove('gold-btn'),
      goldBtnEl.classList.add('btn-disabled'),
      (goldBtnEl.onclick = null))
    const _0x18e464 =
      rewardBtwnsEl.children[Math.min(_0x36e559.length - 1, _0x367af4)]
    _0x367af4 < _0x36e559.length &&
      ((_0x193b62 = _0x18e464),
      _0x18e464.classList.add('gold-btn'),
      _0x18e464.classList.add('btn-disabled'),
      (_0x18e464.onclick = function () {
        this.rewardSent = true
        this.classList.add('btn-disabled')
        wsSend(new Uint8Array([leftShiftOr(5, 0)]))
      }))
    _0x18e464.appendChild(rewardArrowEl)
  }
  const lbFooterEl = document.querySelector('.lb-footer')
  let time,
    _0x3ef6bf,
    _0x244c5d = {}
  function _0x47463e(_0x3840ab) {
    angryBtnEl.style.display = sadBtnEl.style.display = _0x3840ab ? '' : 'none'
    _0x3840ab ||
      ((joystickEl.style.display = 'none'),
      (_0x5c950a = _0x2d3f53 = _0x25c66d = null))
  }
  let buf2,
    gamemode = 0
  function onMessage(msg) {
    if ('string' == typeof msg.data) {
      return
    }
    !(function () {
      const msgData = msg.data
      if (_0x36e905) {
        const msgArr = new Uint8Array(msgData),
          lenArr = new Uint8Array(msgArr.length)
        for (let i = 0; i < msgArr.length; i++) {
          lenArr[i] = msgArr[i]
          msgArr[i] ^=
            _0x36e905[(_0x34e918 + i) % _0x36e905.length]
        }
        _0x36e905 = lenArr
      } else {
        _0x36e905 = new Uint8Array(msgData)
      }
      _0x34e918 = (_0x34e918 + 1) % 1000
    })()
    const dv = new DataView(msg.data)
    _0x36e069 += dv.byteLength
    let _0x475187 = 0
    function getNickname() {
      const _0x567271 = dv.getUint8(_0x475187++)
      if (_0x567271 > 0) {
        const _0x306008 = new Uint8Array(_0x567271)
        for (let _0x88870e = 0; _0x88870e < _0x567271; _0x88870e++) {
          _0x306008[_0x88870e] = dv.getUint8(_0x475187++)
        }
        return new TextDecoder().decode(_0x306008)
      }
      return ''
    }
    const [_0xd02532, _0x3dce21] = [
      (_0x370a3c = dv.getUint8(_0x475187++)) >> 4,
      15 & _0x370a3c,
    ]
    var _0x370a3c
    switch (_0xd02532) {
      case 4:
        const {
          skin: skin,
          i: ii,
          prefix: prefix,
        } = _0x127399.shift()
        _0x37c0af(prefix, ii),
          (myGold -= skin.price),
          skinShopsInit(),
          displayGold()
        break
      case 5:
        const _0x43b27c = _0x36e559[_0x367af4++]
        ;(myGold += _0x43b27c),
          skinShopsInit(),
          displayGold(),
          _0x38da97(),
          (_0x5656c8 = Date.now() + 86400000),
          _0x5ddf1a(_0x43b27c / 2)
        break
      case 3:
        if (
          (discordData
            ? ((logoutBtnEl.style.display = ''), (userEl.style.display = ''))
            : (loginBtnEl.style.display = ''),
          (myGold = 0),
          0 === _0x3dce21)
        ) {
          myGold = 0
          localStorage.equipped_body_skin = -1
          localStorage.equipped_face_skin = -1
          _0x367af4 = 0
          _0x5656c8 = 0
        } else {
          myGold = dv.getUint32(_0x475187)
          _0x475187 += 4
          const _0x5e91b3 = dv.getUint16(_0x475187)
          _0x475187 += 2
          _0x367af4 = _0x5e91b3 >> 11
          const _0xe017c0 = 2047 & _0x5e91b3
          _0x5656c8 = Date.now() + 60 * _0xe017c0 * 1000
          let _0x4108dd = false
          if (_0x475187 < dv.byteLength) {
            let _0x1cf61d = false
            const [_0x432e90, _0x352fbd] = getMySkins(),
              _0x59621a = dv.getUint8(_0x475187++)
            for (let _0xb6d7c3 = 0; _0xb6d7c3 < _0x59621a; _0xb6d7c3++) {
              const _0x8df9c1 = dv.getUint8(_0x475187++)
              _0x8df9c1 === _0x432e90 && (_0x4108dd = true)
              _0x37c0af('face', _0x8df9c1)
            }
            for (; _0x475187 < dv.byteLength; ) {
              const _0x3e6af3 = dv.getUint8(_0x475187++)
              _0x3e6af3 === _0x352fbd && (_0x1cf61d = true)
              _0x37c0af('body', _0x3e6af3)
            }
          }
          false || (localStorage.equipped_body_skin = -1)
          _0x4108dd || (localStorage.equipped_face_skin = -1)
        }
        _0x38da97(),
          unequipBtnEl.classList.add('btn-disabled'),
          ('-1' == localStorage.equipped_face_skin &&
            '-1' == localStorage.equipped_body_skin) ||
            unequipBtnEl.classList.remove('btn-disabled'),
          skinShopsInit(),
          displayGold(),
          connectingEl.classList.remove('connecting-show'),
          gridEl.classList.add('grid-show')
        break
      case 0:
        const reason = wsCloseReasons[_0x3dce21] || 'unknown'
        console.log('Kicked! (reason: ' + reason + ')'),
          alertDescEl.setAttribute('stroke', 'reason: ' + reason),
          (alertEl.style.display = ''),
          (joinGame = function () {})
        break
      case 1:
        gamemode !== _0x3dce21 && _0x530c53(),
          5 == dv.byteLength &&
            (_0x1cd091 = dv.getUint32(_0x475187)),
          (gamemode = localStorage.gamemode = _0x3dce21),
          _0x493cc2(),
          (_0x4355ad = _0x4c70cf = 1),
          (_0x5b52da = null),
          (_0x21109a = null),
          (time = Date.now()),
          (playersDestroyed = 0),
          (_0x3ef6bf = null),
          giveupEl.classList.remove('btn-disabled'),
          gridEl.classList.remove('grid-show'),
          gameEl.classList.add('game-show'),
          (gameoverEl.style.display = 'none'),
          (_0x52bebe.length = 0),
          (_0x5cb559 = {}),
          (highScore = 0),
          _0x47463e(_0x39ef23)
        break
      case 2:
        const _0x3b277c = 4 & _0x3dce21,
          _0x434c10 = 8 & _0x3dce21,
          _0x4647f4 = ((3 & _0x3dce21) << 2) | dv.getUint8(_0x475187++),
          _0x5e0ab9 = { _0x5bfc76: true },
          time = Date.now()
        for (let _0x5df386 = 0; _0x5df386 < _0x4647f4; _0x5df386++) {
          const _0x5bfc76 = dv.getUint32(_0x475187)
          _0x475187 += 4
          let worm = _0x31c3e2.find(
            (_0x35de9f) => _0x35de9f.id === _0x5bfc76
          )
          const _0xe60ee6 =
              (dv.getUint8(_0x475187++) / 255) * Math.PI * 2,
            _0x366774 = dv.getUint8(_0x475187++),
            mood = _0x366774 >> 6,
            energy = (63 & _0x366774) / 63
          if (worm) {
            worm.oldR = worm.r
            const _0x39aa92 = worm.segments[0]
            _0x39aa92.oldX = _0x39aa92.x
            _0x39aa92.oldY = _0x39aa92.y
            _0x39aa92.x += dv.getInt8(_0x475187++)
            _0x39aa92.y += dv.getInt8(_0x475187++)
            _0x39aa92.interpOldX = _0x39aa92.interpX
            _0x39aa92.interpOldY = _0x39aa92.interpY
            let _0x530890 = dv.getInt8(_0x475187++)
            for (; _0x530890 < 0; ) {
              worm.segments.pop()
              _0x530890++
            }
            _0x3f9782(worm)
            const _0x3887e0 = worm.segments[worm.segments.length - 1]
            for (; _0x530890 > 0; ) {
              worm.segments.push(Object.assign({}, _0x3887e0))
              _0x530890--
            }
            worm.interpOldR = worm.interpR
            worm.r = _0xcd5ec6(worm)
            worm.oldDirX = worm.dirX
            worm.oldDirY = worm.dirY
            worm.newDirX = Math.cos(_0xe60ee6)
            worm.newDirY = Math.sin(_0xe60ee6)
            worm.updateTime = time
          } else {
            worm = new Worm(_0x5bfc76, _0xe60ee6)
            worm.faceSkin = dv.getUint8(_0x475187++) - 1
            worm.bodySkin = dv.getUint8(_0x475187++) - 1
            worm.energy = energy
            _0x5bfc76 == _0x1cd091 && (_0x194da0 = worm)
            _0x31c3e2.push(worm)
            const x = dv.getUint16(_0x475187)
            _0x475187 += 2
            const y = dv.getUint16(_0x475187)
            _0x475187 += 2
            worm.segments[0] = {
              x: x,
              y: y,
              oldX: x,
              oldY: y,
              interpOldX: x,
              interpOldY: y,
              interpX: x,
              interpY: y,
            }
            const _0x1b3eaf = dv.getUint16(_0x475187)
            _0x475187 += 2
            for (let _0x5dd295 = 0; _0x5dd295 < _0x1b3eaf; _0x5dd295++) {
              let _0x520367 = worm.segments[_0x5dd295]
              const _0x39871d = {
                x: _0x520367.x + dv.getInt8(_0x475187++),
                y: _0x520367.y + dv.getInt8(_0x475187++),
              }
              _0x39871d.oldX =
                _0x39871d.interpOldX =
                _0x39871d.interpX =
                  _0x39871d.x
              _0x39871d.oldY =
                _0x39871d.interpOldY =
                _0x39871d.interpY =
                  _0x39871d.y
              worm.segments.push(_0x39871d)
            }
            worm.nickname = getNickname()
            _0x244c5d[worm.id] = worm.nickname
            _0x194da0 === worm &&
              ((_0x2ce067 = x),
              (_0x273f21 = y),
              (_0x360982.name = worm.nickname))
            worm.r =
              worm.interpOldR =
              worm.interpR =
                _0xcd5ec6(worm)
          }
          worm.mood = mood
          worm.oldEnergy = worm.iEnergy
          energy < worm.energy && (worm.energyChangeCounter = 1)
          worm.energy = energy
        }
        const _0x424cfa = _0x1ce1f3(_0x3ef6bf || _0x194da0)
        let _0x5460b3 = dv.getUint8(_0x475187++)
        for (; _0x5460b3--; ) {
          const _0x583d10 = dv.getUint8(_0x475187++),
            _0x187fbe = _0x424cfa.sx + (15 & _0x583d10),
            _0x19abad = _0x424cfa.sy + (_0x583d10 >> 4),
            _0x501844 = []
          for (let _0x375108 = 0; _0x375108 < 128; _0x375108++) {
            const _0x3f9e3f = dv.getUint8(_0x475187++),
              _0x1fc2a7 = 15 & _0x3f9e3f,
              _0x42b99e = _0x3f9e3f >> 4
            _0x501844.push(_0x1fc2a7, _0x42b99e)
          }
          _0x52a128[64 * _0x19abad + _0x187fbe] = _0x501844
          _0x3b0a3d(_0x501844)
        }
        _0x194da0.segments[0]
        let _0x125ee1 = dv.getUint8(_0x475187++)
        for (let _0x434216 = 0; _0x434216 < _0x125ee1; _0x434216++) {
          const _0x50f941 = dv.getUint8(_0x475187++),
            _0x57af42 = _0x424cfa.sx + (15 & _0x50f941),
            _0x50afac = _0x424cfa.sy + (_0x50f941 >> 4),
            _0x5098f5 = _0x52a128[64 * _0x50afac + _0x57af42],
            _0x2b26c8 = dv.getUint8(_0x475187++) + 1
          let _0x55213a = 0,
            _0x40b1aa = 0,
            _0x462cab = 0
          for (let _0x4e4e00 = 0; _0x4e4e00 < _0x2b26c8; _0x4e4e00++) {
            const _0x97c92 = dv.getUint8(_0x475187 + _0x4e4e00),
              _0xa5cd1a = _0x5098f5[_0x97c92]
            0 == _0x40b1aa
              ? ((_0x55213a = dv.getUint8(
                  _0x475187 + _0x2b26c8 + _0x462cab++
                )),
                (_0x40b1aa = 1),
                (_0x5098f5[_0x97c92] = 15 & _0x55213a))
              : ((_0x5098f5[_0x97c92] = _0x55213a >> 4), (_0x40b1aa = 0))
            const _0x26aa2c = _0x97c92 % 16,
              _0x21b1d4 = Math.floor(_0x97c92 / 16),
              _0x7ec78e = _0x5098f5[_0x97c92]
            if (_0x7ec78e === _0x21ff22.empty) {
              const _0x5bbd94 = _0x57af42 * 16 + _0x26aa2c,
                _0x3f791e = _0x50afac * 16 + _0x21b1d4,
                _0x200693 = _0x5098f5.ctx.getImageData(
                  _0x26aa2c,
                  _0x21b1d4,
                  1,
                  1
                ).data
              if (
                (_0x551ff8.push({
                  x: _0x5bbd94 * 30,
                  y: _0x3f791e * 30,
                  dir: Math.random() > 0.5 ? -1 : 1,
                  angle: Math.random() * Math.PI * 2,
                  time: Date.now(),
                  color: 'rgba(' + _0x200693.join(',') + ')',
                }),
                _0x5098f5.ctx.clearRect(_0x26aa2c, _0x21b1d4, 1, 1),
                _0xa5cd1a === _0x21ff22.lava)
              ) {
                for (
                  let _0x1fecb7 = 0;
                  _0x1fecb7 < _0x31c3e2.length;
                  _0x1fecb7++
                ) {
                  const _0x5c4c95 = _0x31c3e2[_0x1fecb7],
                    _0x2d515a = _0x5c4c95.segments[0]
                  _0x52761c(_0x5bbd94, _0x3f791e, _0x5c4c95.oldR, _0x2d515a) &&
                    ((_0x5c4c95.diggedLavaAt = time),
                    (_0x5c4c95 != _0x194da0 && _0x5c4c95 != _0x3ef6bf) ||
                      (_0x57cea4 = 1))
                }
              }
            } else {
              const _0x546451 = _0x406b9c(_0x7ec78e)
              _0x5098f5.ctx.fillStyle = 'rgb(' + _0x546451.join(',') + ')'
              _0x5098f5.ctx.fillRect(_0x26aa2c, _0x21b1d4, 1, 1)
            }
          }
          _0x475187 += _0x2b26c8
          _0x475187 += Math.ceil(0.5 * _0x2b26c8)
        }
        const numPlayersOnline = dv.getUint16(_0x475187)
        ;(_0x475187 += 2),
          lbFooterEl.setAttribute(
            'stroke',
            numPlayersOnline + ' player' + (1 !== numPlayersOnline ? 's' : '') + ' online'
          )
        const _0x27f1c2 = _0x52bebe.length,
          _0x49cd46 = dv.getUint16(_0x475187)
        ;(_0x475187 += 2), (numWorms = 1023 & _0x49cd46)
        const _0x40458c = _0x49cd46 >> 11,
          _0x24cc2e = 1024 & _0x49cd46
        lbHeaderSpanEl.setAttribute(
          'stroke',
          numWorms + ' worm' + (1 != numWorms ? 's' : '')
        )
        let _0x57a782 = -1
        if (
          (_0x3b277c && (_0x57a782 = dv.getUint8(_0x475187++)),
          _0x224d6b)
        ) {
          let _0x20a913 = 0,
            _0x184f07 = 0
          if (_0x24cc2e) {
            const _0x173fa2 = dv.getUint8(_0x475187++)
            _0x20a913 = _0x173fa2 >> 4
            _0x184f07 = 15 & _0x173fa2
          }
          const _0x1758fb = _0x40458c + _0x184f07,
            _0x47d080 = []
          let _0x4c8d5d = 0,
            _0x545516 = 0
          for (let _0x2b75ce = 0; _0x2b75ce < _0x1758fb; _0x2b75ce++) {
            0 == _0x545516
              ? ((_0x4c8d5d = dv.getUint8(_0x475187++)),
                (_0x545516 = 1),
                _0x47d080.push(15 & _0x4c8d5d))
              : (_0x47d080.push(_0x4c8d5d >> 4), (_0x545516 = 0))
          }
          for (let _0x4f1cfd = 0; _0x4f1cfd < _0x40458c; _0x4f1cfd++) {
            const _0x85c987 = _0x47d080[_0x4f1cfd],
              _0x273cea = _0x552882[_0x85c987]
            _0x273cea.score = _0x40a543(dv.getUint16(_0x475187))
            _0x475187 += 2
            _0x273cea.isMe && _0x442358(_0x273cea.score)
          }
          const _0x14b112 = []
          for (let _0x232d94 = 0; _0x232d94 < _0x184f07; _0x232d94++) {
            const _0x2a9e70 = _0x47d080[_0x40458c + _0x232d94]
            _0x14b112.push(_0x2a9e70)
          }
          _0x14b112.sort(function (_0x35b473, _0x697ad4) {
            return _0x697ad4 - _0x35b473
          })
          for (let _0x100059 = 0; _0x100059 < _0x14b112.length; _0x100059++) {
            const _0x9415af = _0x14b112[_0x100059]
            _0x552882[_0x9415af].lbItemEl.remove()
            _0x552882.splice(_0x9415af, 1)
          }
          for (let _0x1cee5c = 0; _0x1cee5c < _0x20a913; _0x1cee5c++) {
            const _0x5925b4 = _0x40a543(dv.getUint16(_0x475187))
            _0x475187 += 2
            _0x29e019(getNickname(), _0x5925b4)
          }
          _0x552882 = _0x552882.sort(function (_0x3aee0f, _0x3bc81b) {
            return _0x3bc81b.score - _0x3aee0f.score
          })
          _0x245d1c()
        } else {
          _0x552882.length = 0
          const _0x27494c = Math.min(10, numWorms)
          for (let _0x7b83d9 = 0; _0x7b83d9 < _0x27494c; _0x7b83d9++) {
            const _0x44a8a0 = _0x40a543(dv.getUint16(_0x475187))
            _0x475187 += 2
            _0x29e019(getNickname(), _0x44a8a0)
          }
          _0x245d1c()
          _0x224d6b = true
        }
        if (_0x3b277c) {
          const _0x8c931e = _0x552882[_0x57a782],
            _0x1f6f01 = _0x8c931e.lbItemEl
          _0x360982.score = _0x8c931e.score
          lbContentEl.insertBefore(_0x360982.lbItemEl, _0x1f6f01)
          _0x1f6f01.remove()
          _0x552882[_0x57a782] = _0x360982
        }
        let _0x32e4ab = false,
          _0xfd618e = Math.floor((dv.byteLength - _0x475187) / 4)
        _0x434c10 && _0xfd618e--
        for (let _0x54ea08 = 0; _0x54ea08 < _0xfd618e; _0x54ea08++) {
          const _0x347b0b = dv.getUint32(_0x475187)
          _0x475187 += 4
          const _0x1b4e9e = _0x31c3e2.findIndex(
              (_0x2052fc) => _0x2052fc.id === _0x347b0b
            ),
            _0x12d663 = _0x31c3e2[_0x1b4e9e]
          _0x12d663.isDead = true
          _0x12d663.diedAt = time
          _0x12d663.id = -1
          _0x12d663 === _0x194da0 &&
            ((_0x32e4ab = true),
            (_0x360982.score = 0),
            (_0x360982.percent = 0),
            _0x8d0f50(),
            _0x47463e(false))
        }
        let _0x1d4840 = dv.byteLength - _0x475187
        if (_0x32e4ab) {
          let _0x56c22b = -1
          if (_0x434c10) {
            const _0x590228 = dv.getUint32(_0x475187)
            _0x475187 += 4
            _0x3ef6bf = _0x31c3e2.find(
              (_0x4cf041) => _0x4cf041.id === _0x590228
            )
            console.log('killer!!!!', _0x3ef6bf)
            killerEl.setAttribute(
              'stroke',
              _0x244c5d[_0x590228] || 'An unnamed worm'
            )
            _0x1d4840 -= 4
          } else {
            _0x56c22b = dv.getUint8(_0x475187++)
            0 === _0x56c22b
              ? (console.log('walls'),
                killerEl.setAttribute('stroke', 'Walls'))
              : console.log('giveup')
            _0x1d4840--
          }
          killerEl.style.visibility =
            deadWormEl.style.visibility =
            killerEl.previousElementSibling.style.visibility =
              1 === _0x56c22b ? 'hidden' : ''
          1 === _0x1d4840
            ? (playersDestroyed = dv.getUint8(_0x475187++))
            : console.log('no kills')
          gameoverEl.style.display = ''
          giveupEl.classList.add('btn-disabled')
          _0x30dcaf()
          skinShopsInit()
          displayGold()
          ;(function () {
            for (; statsEl.children.length > 1; ) {
              statsEl.children[1].remove()
            }
            const endGameStats = [['Max points', scoreToStr(highScore)]]
            goldDigged > 0 &&
              endGameStats.push(['Gold digged', goldDigged.toLocaleString('en-US')])
            playersDestroyed > 0 &&
              endGameStats.push([
                'Players destroyed',
                255 === playersDestroyed ? playersDestroyed - 1 + '+' : playersDestroyed,
              ])
            endGameStats.push(['Time alive', msToStr(Date.now() - time)])
            for (let i = 0; i < endGameStats.length; i++) {
              const [statType, statVal] = endGameStats[i],
                span = document.createElement('span')
              span.setAttribute('stroke', statType + ': ' + statVal)
              statsEl.appendChild(span)
            }
          })()
        } else {
          if (!_0x194da0.isDead) {
            if (_0x1d4840 % 2 != 0) {
              const _0x2d2228 = dv.getUint8(_0x475187++)
              _0x5ddf1a(_0x2d2228)
              myGold += _0x2d2228
              goldDigged += _0x2d2228
              _0x1d4840--
            }
            if (2 === _0x1d4840) {
              const _0x11ea0e = _0x40a543(dv.getUint16(_0x475187))
              _0x475187 += 2
              _0x442358(_0x11ea0e)
            }
          }
        }
        for (
          let _0x384224 = _0x31c3e2.length - 1;
          _0x384224 >= 0;
          _0x384224--
        ) {
          const _0x37337a = _0x31c3e2[_0x384224]
          _0x37337a.isDead ||
            _0x5e0ab9[_0x37337a.id] ||
            _0x31c3e2.splice(_0x384224, 1)
        }
        _0x27f1c2 === _0x52bebe.length &&
          _0x27f1c2 > 0 &&
          _0x52bebe.push(_0x52bebe[_0x52bebe.length - 1])
    }
  }
  function onError() {
    console.log('Disconnected.')
    joinGame(ws.url)
  }
  let _0x57d1e4 = 0
  function wsSend(dv) {
    if (ws && ws.readyState === ws.OPEN) {
      if (((_0x36e069 += dv.byteLength), buf2)) {
        const buf = new Uint8Array(dv.buffer)
        for (let _0x481e64 = 0; _0x481e64 < buf.length; _0x481e64++) {
          buf[_0x481e64] ^=
            buf2[(_0x57d1e4 + _0x481e64) % buf2.length]
        }
      }
      _0x57d1e4 = (_0x57d1e4 + 1) % 1000
      buf2 = new Uint8Array(dv.buffer)
      ws.send(dv)
    }
  }
  const twoPi = 2 * Math.PI
  function _0x2ebfb5(radians) {
    if (!_0x194da0 || _0x194da0.isDead) {
      return
    }
    ;(radians %= twoPi) < 0 && (radians += twoPi)
    radians /= twoPi
    radians = Math[0.75 === radians ? 'ceil' : 'floor'](4095 * radians)
    const dv = new DataView(new ArrayBuffer(2))
    dv.setUint8(0, leftShiftOr(1, radians >> 8))
    dv.setUint8(1, radians)
    wsSend(dv)
  }
  let _0x5cb559 = {}
  document.onmousedown = function (_0x5a3b45) {
    _0x5cb559[_0x5a3b45.button] = true
    _0x382b09()
  }
  document.onmouseup = function (_0xa736e7) {
    delete _0x5cb559[_0xa736e7.button]
    _0x382b09()
  }
  canvasEl.onmousemove = function (pos) {
    kbMovementCbEl.checked ||
      _0x2ebfb5(
        Math.atan2(
          pos.clientY - window.innerHeight / 2,
          pos.clientX - window.innerWidth / 2
        )
      )
  }
  const angryBtnEl = document.querySelector('.angry-btn'),
    sadBtnEl = document.querySelector('.sad-btn'),
    joystickEl = document.querySelector('.joystick'),
    joystickKnobEl = document.querySelector('.joystick-knob')
  let _0x889b55,
    _0x4f0b52,
    _0x2d3f53 = null,
    _0x5c950a = null,
    _0x25c66d = null
  if (_0x39ef23) {
    let left, top
    function _0x543788() {
      joystickEl.style.left = left + 'px'
      joystickEl.style.top = top + 'px'
    }
    function _0x30fd0b(_0x1f2f66) {
      return [_0x1f2f66.clientX / _0x19da0e, _0x1f2f66.clientY / _0x19da0e]
    }
    canvasEl.onmousemove = null
    document.ontouchstart = function (touch) {
      const _0x35be70 = touch.changedTouches[0]
      let _0x2f1c42 = _0x35be70.identifier
      function _0x545ee7(_0x522cb8) {
        return (
          touch.target === _0x522cb8 ||
          touch.target.parentNode === _0x522cb8
        )
      }
      touch.target === canvasEl
        ? null === _0x25c66d &&
          ((joystickKnobEl.style.width = joystickKnobEl.style.transform = '0'),
          (joystickEl.style.display = ''),
          ([left, top] = _0x30fd0b(_0x35be70)),
          _0x543788(),
          (_0x25c66d = _0x2f1c42))
        : _0x545ee7(angryBtnEl)
        ? null === _0x5c950a &&
          (document.onmousedown({ button: 0 }), (_0x5c950a = _0x2f1c42))
        : _0x545ee7(sadBtnEl) &&
          null === _0x2d3f53 &&
          (document.onmousedown({ button: 2 }), (_0x2d3f53 = _0x2f1c42))
    }
    document.ontouchmove = function (_0xaf826d) {
      const _0x5dc1cf = _0xaf826d.changedTouches[0]
      if (_0x5dc1cf.identifier === _0x25c66d) {
        const [_0x487c8c, _0x4436e6] = _0x30fd0b(_0x5dc1cf),
          _0x35b1fa = _0x487c8c - left,
          _0x323f29 = _0x4436e6 - top,
          _0x35fef2 = joystickEl.getBoundingClientRect()
        let width = Math.hypot(_0x35b1fa, _0x323f29)
        const _0x1a37a1 = _0x35fef2.width / 2 / _0x19da0e
        if (width > _0x1a37a1) {
          if (!fixedJoystickCbEl.checked) {
            const _0x567afb = width - _0x1a37a1
            left += (_0x567afb * _0x35b1fa) / width
            top += (_0x567afb * _0x323f29) / width
            _0x543788()
          }
          width = _0x1a37a1
        }
        const radians = Math.atan2(_0x323f29, _0x35b1fa)
        _0x2ebfb5(radians)
        joystickKnobEl.style.transform = 'rotate(' + radians + 'rad)'
        joystickKnobEl.style.width = width + 'px'
      }
    }
    _0x1bb119.ontouchstart = function (_0x387c68) {
      const _0x1dd6c0 = _0x387c68.changedTouches[0]
      _0x1dd6c0.clientX < window.innerWidth / 2
        ? ((_0x889b55 = _0x1dd6c0.identifier),
          null === _0x4f0b52 && (_0x2710ba = 2))
        : ((_0x4f0b52 = _0x1dd6c0.identifier), (_0x2710ba = 1))
    }
    window.ontouchend = function (_0x35cd95) {
      const id = _0x35cd95.changedTouches[0].identifier
      id === _0x889b55
        ? ((_0x889b55 = null), (_0x2710ba = null !== _0x4f0b52 ? 1 : 0))
        : id === _0x4f0b52 &&
          ((_0x4f0b52 = null), (_0x2710ba = null !== _0x889b55 ? 2 : 0))
      id === _0x5c950a
        ? ((_0x5c950a = null), document.onmouseup({ button: 0 }))
        : id === _0x2d3f53
        ? ((_0x2d3f53 = null), document.onmouseup({ button: 2 }))
        : id === _0x25c66d &&
          ((joystickEl.style.display = 'none'), (_0x25c66d = null))
    }
  }
  function _0x382b09() {
    let _0x2ac787
    _0x2ac787 =
      _0x5cb559[0] || pressedKey.Space
        ? 1
        : _0x5cb559[2] || pressedKey.ShiftLeft || pressedKey.ShiftRight
        ? 2
        : 0
    _0x2710ba = _0x2ac787
    _0x194da0 &&
      (function (_0x21b545) {
        const _0x35a11e = new Uint8Array(1)
        _0x35a11e[0] = leftShiftOr(2, _0x21b545)
        wsSend(_0x35a11e)
      })(_0x2ac787)
  }
  function _0x3b0a3d(_0x54664b) {
    const canvas = document.createElement('canvas')
    canvas.width = canvas.height = 16
    const ctx = canvas.getContext('2d'),
      img = ctx.createImageData(16, 16)
    for (let i = 0; i < _0x54664b.length; i++) {
      if (_0x54664b[i] === _0x21ff22.empty) {
        continue
      }
      const _0x2880f6 = _0x406b9c(_0x54664b[i]),
        _0xc59b21 = 4 * i
      img.data[_0xc59b21] = _0x2880f6[0]
      img.data[_0xc59b21 + 1] = _0x2880f6[1]
      img.data[_0xc59b21 + 2] = _0x2880f6[2]
      img.data[_0xc59b21 + 3] = 255
    }
    ctx.putImageData(img, 0, 0)
    _0x54664b.canvas = canvas
    _0x54664b.ctx = ctx
    _0x54664b.fogCanvas = document.createElement('canvas')
    _0x54664b.fogCanvas.width = _0x54664b.fogCanvas.height = 16
    _0x54664b.fogCtx = _0x54664b.fogCanvas.getContext('2d')
    _0x54664b.fogBgCanvas = document.createElement('canvas')
    _0x54664b.fogBgCanvas.width = _0x54664b.fogBgCanvas.height = 16
    _0x54664b.fogBgCtx = _0x54664b.fogCanvas.getContext('2d')
  }
  let _0x57cea4 = 0,
    _0xd4436e = 0,
    _0x4355ad = 1,
    _0x4c70cf = 1,
    _0x5b52da = null,
    _0x21109a = null,
    _0x2ce067 = 0,
    _0x273f21 = 0
  document.onmousewheel = function (s) {
    s.deltaY < 0 ? (_0x4355ad *= 1.1) : (_0x4355ad *= 0.9)
    _0x4355ad = Math.max(1, Math.min(5, _0x4355ad))
  }
  let tempTime = Date.now()
  const _0x38936e = [],
    _0x314f92 = (function (_0x596778 = 80) {
      const _0x3278eb = _0x596778 / 2,
        canvas = document.createElement('canvas')
      canvas.width = canvas.height = _0x596778
      const ctx = canvas.getContext('2d')
      return (
        (ctx.strokeStyle = 'rgba(0,0,0,0.07)'),
        ctx.beginPath(),
        ctx.moveTo(_0x3278eb, 0),
        ctx.lineTo(_0x3278eb, _0x596778),
        ctx.moveTo(0, _0x3278eb),
        ctx.lineTo(_0x596778, _0x3278eb),
        (ctx.lineWidth = 2),
        ctx.stroke(),
        ctx.createPattern(canvas, 'repeat')
      )
    })()
  function _0x40d72d() {
    let bool = false
    for (let i = 0; i < _0x552882.length; i++) {
      const _0x23483a = _0x552882[i]
      _0x23483a.update()
      _0x23483a.isMe && (bool = true)
    }
    if ((bool || _0x360982.update(), _0x48a579)) {
      const _0x3c91bd = Date.now() / 80,
        degrees = 7 * Math.sin(_0x3c91bd),
        _0x2282ef = 0.15 * Math.abs(Math.sin(_0x3c91bd / 4)) + 0.85
      changelogbtnEl.style.transform =
        'rotate(' + degrees + 'deg) scale(' + _0x2282ef + ')'
    } else {
      changelogbtnEl.style.transform = 'none'
    }
    !(function () {
      let msg
      if (_0x367af4 >= _0x36e559.length) {
        msg = 'You have claimed all your rewards.'
      } else {
        const _0x4edb18 = _0x5656c8 - Date.now()
        _0x4edb18 < 0
          ? ((msg = 'Available every ' + _0x179918(86400000)),
            _0x193b62.rewardSent || _0x193b62.classList.remove('btn-disabled'))
          : (msg = 'Available again in ' + _0x179918(_0x4edb18))
      }
      rewardStatusEl.getAttribute('stroke') !== msg &&
        rewardStatusEl.setAttribute('stroke', msg)
    })()
    const [_0x10b6cb, _0x536363] = getMySkins()
    _0x54c5be.faceSkin = _0x10b6cb
    _0x54c5be.bodySkin = _0x536363
    const time = Date.now()
    _0xd4436e = (time - tempTime) / 1000
    tempTime = time
    _0x57cea4 -= _0xd4436e / 0.3
    _0x57cea4 = Math.max(0, _0x57cea4)
    canvasElCtx.fillStyle = '#522e00'
    canvasElCtx.fillRect(0, 0, canvasEl.width, canvasEl.height)
    for (let _0x1bdee5 = 0; _0x1bdee5 < _0x31c3e2.length; _0x1bdee5++) {
      _0x31c3e2[_0x1bdee5].interpolate()
    }
    if (((_0x4c70cf += 0.3 * (_0x4355ad - _0x4c70cf)), _0x194da0)) {
      const _0x27d19f = _0x3ef6bf || _0x194da0,
        {
          sx: sx,
          sy: sy,
          ex: ex,
          ey: ey,
          minX: minX,
          minY: minY,
          maxX: maxX,
          maxY: maxY,
          viewWidth: viewWidth,
          viewHeight: viewHeight,
        } = _0x1ce1f3(_0x27d19f, true)
      null === _0x5b52da
        ? ((_0x5b52da = viewWidth), (_0x21109a = viewHeight))
        : ((_0x5b52da += 0.1 * (viewWidth - _0x5b52da)),
          (_0x21109a += 0.1 * (viewHeight - _0x21109a)))
      const _0x37a147 = _0x27d19f.segments[0],
        _0x271443 = 2 * Math.random() * Math.PI,
        _0x10315f = 6 * _0x57cea4
      let _0x15ab1a = _0x37a147.interpX,
        _0x2118b6 = _0x37a147.interpY
      if (_0x3ef6bf) {
        const _0x25abe2 = (Date.now() - _0x194da0.diedAt) / 500
        if (_0x25abe2 < 1) {
          const _0x68053 = _0x194da0.segments[0],
            _0xacf942 = _0x3ef6bf.segments[0]
          _0x15ab1a =
            _0x68053.interpX +
            (_0xacf942.interpX - _0x68053.interpX) * _0x25abe2
          _0x2118b6 =
            _0x68053.interpY +
            (_0xacf942.interpY - _0x68053.interpY) * _0x25abe2
        }
      }
      function _0x458a77() {
        canvasElCtx.translate(
          canvasEl.width / 2 + _0x10315f * Math.cos(_0x271443),
          canvasEl.height / 2 + _0x10315f * Math.sin(_0x271443)
        )
        const _0x33107f = Math.max(
          canvasEl.width / _0x5b52da,
          canvasEl.height / _0x21109a
        )
        canvasElCtx.scale(_0x33107f, _0x33107f)
        canvasElCtx.translate(-_0x15ab1a, -_0x2118b6)
      }
      canvasElCtx.save()
      canvasElCtx.beginPath()
      canvasElCtx.rect(0, 0, canvasEl.width, canvasEl.height)
      _0x458a77()
      canvasElCtx.fillStyle = _0x314f92
      canvasElCtx.fill()
      canvasElCtx.imageSmoothingEnabled = false
      for (
        let _0x58ede8 = sy - 1;
        _0x58ede8 <= ey + 1;
        _0x58ede8++
      ) {
        for (
          let _0x686203 = sx - 1;
          _0x686203 <= ex + 1;
          _0x686203++
        ) {
          const _0x5ca2d0 = 480 * _0x686203,
            _0x898c36 = 480 * _0x58ede8,
            _0x179d9b = _0x52a128[64 * _0x58ede8 + _0x686203]
          _0x179d9b &&
            canvasElCtx.drawImage(
              _0x179d9b.canvas,
              _0x5ca2d0,
              _0x898c36,
              480,
              480
            )
        }
      }
      _0x27d19f && _0x1ce1f3(_0x27d19f)
      for (let i = _0x31c3e2.length - 1; i >= 0; i--) {
        _0x31c3e2[i].draw(i, canvasElCtx)
      }
      canvasElCtx.lineWidth = 1
      canvasElCtx.beginPath()
      canvasElCtx.rect(0, 0, 30720, 30720)
      canvasElCtx.restore()
      canvasElCtx.rect(0, 0, canvasEl.width, canvasEl.height)
      canvasElCtx.fillStyle = '#222222'
      canvasElCtx.fill('evenodd')
      _0x312405 && _0x312405()
      canvasElCtx.save()
      _0x458a77()
      for (let i = _0x551ff8.length - 1; i >= 0; i--) {
        const _0x5a3754 = _0x551ff8[i],
          _0x48e5c5 = (time - _0x5a3754.time) / 600
        if (_0x48e5c5 >= 1) {
          _0x551ff8.splice(i, 1)
        } else {
          canvasElCtx.save()
          canvasElCtx.translate(_0x5a3754.x, _0x5a3754.y)
          canvasElCtx.rotate(_0x5a3754.dir * _0x48e5c5 * Math.PI)
          const _0x417678 = 30 * (1 + 2 * _0x48e5c5)
          canvasElCtx.fillStyle = _0x5a3754.color
          canvasElCtx.globalAlpha = 0.75 * (1 - _0x48e5c5)
          canvasElCtx.fillRect(0, 0, _0x417678, _0x417678)
          canvasElCtx.restore()
        }
      }
      for (let i = 0; i < _0x31c3e2.length; i++) {
        _0x31c3e2[i].drawEnergyAndNickname(canvasElCtx)
      }
      canvasElCtx.restore()
    }
    for (let i = 0; i < _0x553cf3.length; i++) {
      _0x553cf3[i].render()
    }
    if (_0x38936e.length > 0) {
      goldCanvasEl.style.display = ''
      goldCanvasElCtx.clearRect(0, 0, goldCanvasEl.width, goldCanvasEl.height)
      const _0x142bbc = goldCanvasEl.height / 657
      goldCanvasElCtx.save()
      goldCanvasElCtx.translate(goldCanvasEl.width / 2, 0)
      goldCanvasElCtx.scale(_0x142bbc, _0x142bbc)
      goldCanvasElCtx.beginPath()
      for (let i = _0x38936e.length - 1; i >= 0; i--) {
        const _0x28fd8c = _0x38936e[i]
        _0x28fd8c.spawnTime > 0
          ? (_0x28fd8c.spawnTime -= _0xd4436e)
          : ((_0x28fd8c.vy += 8 * _0xd4436e),
            (_0x28fd8c.y += _0x28fd8c.vy * _0xd4436e * 80),
            (_0x28fd8c.x += _0x28fd8c.vx * _0xd4436e * 100),
            (_0x28fd8c.angle += _0x28fd8c.angleSpeed),
            _0x28fd8c.y > 657 &&
              (_0x28fd8c.bounced
                ? _0x28fd8c.vy > 0 && _0x38936e.splice(i, 1)
                : ((_0x28fd8c.vy *= -(0.2 * Math.random() + 0.55)),
                  (_0x28fd8c.bounced = true))),
            goldCanvasElCtx.save(),
            goldCanvasElCtx.translate(_0x28fd8c.x, _0x28fd8c.y),
            goldCanvasElCtx.rotate(_0x28fd8c.angle),
            goldCanvasElCtx.moveTo(10, 0),
            goldCanvasElCtx.ellipse(0, 0, 10, 6, 0, 0, 2 * Math.PI),
            goldCanvasElCtx.restore())
      }
      goldCanvasElCtx.lineWidth = 6
      goldCanvasElCtx.strokeStyle = '#a7a217'
      goldCanvasElCtx.stroke()
      goldCanvasElCtx.fillStyle = '#e9e21c'
      goldCanvasElCtx.fill()
      goldCanvasElCtx.restore()
    } else {
      goldCanvasEl.style.display = 'none'
    }
    window.requestAnimationFrame(_0x40d72d)
  }
  const comingSoonEls = document.querySelectorAll('.coming-soon')
  for (let i = 0; i < comingSoonEls.length; i++) {
    const comingSoon = comingSoonEls[i]
    comingSoon.onclick = function () {}
    comingSoon.classList.add('btn-disabled')
    comingSoon.style.pointerEvents = 'all'
    comingSoon.style.cursor = 'default'
    comingSoon.setAttribute('tooltip', 'Coming soon')
  }
  const changelogDlgContentEl = changelogEl.querySelector('.dialog-content')
  changelogDlgContentEl.innerHTML = ''
  ;(function () {
    let html = ''
    for (let i = 0; i < changelog.length; i++) {
      const { title: title, content: content } = changelog[i]
      html +=
        '<span class="log-title" stroke="' +
        title +
        '"></span><div class="log-content">'
      content.forEach((_0x5e4131) => {
        html += '<div stroke="- ' + _0x5e4131 + '"></div>'
      })
      html += '</div><div class="log-line"></div>'
    }
    const savedChangelogVer = localStorage.changelog
    _0x48a579 = undefined !== savedChangelogVer && parseInt(savedChangelogVer) < 28
    localStorage.changelog = 28
    changelogDlgContentEl.innerHTML = html
  })()
  document.querySelector('.tabs').children[2].style.display = 'none'
})()
