;(() => {
  'use strict'
  function _0x4822ce(_0x26df6d, _0x270c5a) {
    return (_0x26df6d << 4) | _0x270c5a
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
  for (let _0x143417 in skins) {
    const _0x558f1c = skins[_0x143417]
    for (let _0x26ada4 = 0; _0x26ada4 < _0x558f1c.length; _0x26ada4++) {
      _0x558f1c[_0x26ada4].id = _0x26ada4
    }
  }
  function _0x1ce1f3(_0xe490a2, _0x57f2c5) {
    const { viewWidth: _0x185e5b, viewHeight: _0x548d8d } = (function (
        _0x1f21d8
      ) {
        _0x1f21d8 -= 30
        _0x1f21d8 *= 50
        const _0x29d507 = 3000 + parseInt(_0x1f21d8)
        return {
          viewWidth: _0x29d507,
          viewHeight: 0.5 * _0x29d507,
        }
      })(_0x57f2c5 ? _0xe490a2.interpR : _0xe490a2.r),
      _0x37078e = _0xe490a2.segments[0],
      _0x504c2c = _0x37078e.x - _0x185e5b / 2,
      _0xc5e752 = _0x37078e.y - _0x548d8d / 2,
      _0x36a41e = _0x37078e.x + _0x185e5b / 2,
      _0x227b80 = _0x37078e.y + _0x548d8d / 2
    return {
      minX: _0x504c2c,
      minY: _0xc5e752,
      maxX: _0x36a41e,
      maxY: _0x227b80,
      sx: Math.max(0, Math.floor(_0x504c2c / 480)),
      sy: Math.max(0, Math.floor(_0xc5e752 / 480)),
      ex: Math.min(63, Math.floor(_0x36a41e / 480)),
      ey: Math.min(63, Math.floor(_0x227b80 / 480)),
      viewWidth: _0x185e5b,
      viewHeight: _0x548d8d,
    }
  }
  function _0x1ed3cb(_0x3eb535) {
    switch (_0x3eb535) {
      case _0x21ff22.dirt:
        return [116, 66, 0]
      case _0x21ff22.lava:
        return [166, 25, 6]
      case 3:
        return [49, 165, 158]
      case _0x21ff22.gold:
        return [165, 158, 21]
      case _0x21ff22.uranium:
        return [50, 164, 48]
      case 6:
        return [255, 255, 255]
      case _0x21ff22.bedrock:
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
  function _0x10e6ea(_0x439a07) {
    return (
      !(!_0x439a07 || 36 !== _0x439a07.length) &&
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
        _0x439a07
      )
    )
  }
  const _0x36e559 = [40, 45, 50, 55, 60, 65, 70],
    _0x33b220 = [
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
    _0x23f197 = document.getElementById('enable3D')
  _0x5f77ca(_0x23f197, 'enable_3d')
  const _0x34f7af = document.getElementById('enableGlow')
  _0x5f77ca(_0x34f7af, 'enable_glow')
  const _0x269cb0 = document.getElementById('highRes')
  _0x5f77ca(_0x269cb0, 'high_res')
  const _0x47102f = document.getElementById('deadWorm'),
    _0x4d366e = _0x47102f.getContext('2d')
  let _0x4868a9, _0x312405
  function _0x8d0f50() {
    if (!_0x194da0 || !_0x194da0.isDead) {
      return
    }
    _0x47102f.getBoundingClientRect()
    const _0x515827 = 200 * _0x19da0e * window.devicePixelRatio
    _0x47102f.width !== _0x515827 &&
      ((_0x47102f.width = _0x515827), (_0x47102f.height = _0x515827 / 4))
    const _0x9d600b = _0x4868a9 || new _0x2561ae(0, 0, 30)
    _0x4868a9 = _0x9d600b
    for (let _0x10eb14 = 0; _0x10eb14 < 2; _0x10eb14++) {
      _0x9d600b.segments[_0x10eb14] = {
        interpX: -100 * (2 * _0x10eb14 - 1),
        interpY: 0,
      }
    }
    _0x9d600b.isDead = true
    _0x9d600b.faceSkin = _0x194da0.faceSkin
    _0x4d366e.clearRect(0, 0, _0x47102f.width, _0x47102f.height)
    const _0x58da47 = (_0x47102f.height / _0x9d600b.interpR / 2) * 0.8
    _0x4d366e.save()
    _0x4d366e.translate(_0x47102f.width / 2, _0x47102f.height / 2)
    _0x4d366e.scale(_0x58da47, _0x58da47)
    _0x9d600b.draw(0, _0x4d366e)
    _0x4d366e.restore()
  }
  window.s = 0.1
  window.x = 0
  window.y = 0
  try {
    _0x312405 = (function () {
      const _0x41c915 = document.createElement('canvas'),
        _0x3d368e =
          _0x41c915.getContext('webgl', _0x19e12e) ||
          _0x41c915.getContext('experimental-webgl', _0x19e12e),
        _0x45cbcc = ['gold', 'uranium', 'diamond', 'lava']
      let _0x4846ca = ''
      for (let _0x45eb57 = 0; _0x45eb57 < _0x45cbcc.length; _0x45eb57++) {
        _0x4846ca +=
          'distance(vec3(' +
          _0x1ed3cb(_0x21ff22[_0x45cbcc[_0x45eb57]])
            .map((_0x27afdc) => _0x27afdc / 255)
            .join(',') +
          '),t.rgb)<0.1'
        _0x45eb57 !== _0x45cbcc.length - 1 && (_0x4846ca += '||')
      }
      const _0x5900b9 = (function (_0xcbe078, _0x35f8d8) {
        const _0x27e3c6 = _0x86d0ee('vertex', _0xcbe078),
          _0x309276 = _0x86d0ee('fragment', _0x35f8d8),
          _0x464086 = _0x3d368e.createProgram()
        return (
          _0x3d368e.attachShader(_0x464086, _0x27e3c6),
          _0x3d368e.attachShader(_0x464086, _0x309276),
          _0x3d368e.linkProgram(_0x464086),
          _0x3d368e.getProgramParameter(_0x464086, _0x3d368e.LINK_STATUS) ||
            console.log(
              'Error linking program. ' + _0x3d368e.getProgramInfoLog(_0x464086)
            ),
          _0x464086
        )
      })(
        '\n\tattribute vec2 pos;\n\tvarying vec2 vPos;\n\tvoid main() {\n\t\tvPos=pos;\n\t\tgl_Position=vec4(pos,0.0,1.0);\n\t}\n\t',
        '\n\tprecision mediump float;\n\tuniform sampler2D tex;\n\tuniform bool u3d;\n\tuniform bool uGlow;\n\tuniform float uTime;\n\tuniform vec2 blurSize;\n\n\tvarying vec2 vPos;\n\n\tconst vec3 groundColor = vec3(0.32,0.18,0.0);\n\tconst int STEPS=10;\n\n\tvec4 getColor(vec2 p){\n\t\tvec4 t=texture2D(tex,p);\n\t\tif(' +
          _0x4846ca +
          '){\n\t\t\treturn t;\n\t\t}\n\t\treturn vec4(0.0);\n\t}\n\n\tvoid main(){\n\t\tvec4 a;\n\t\tvec4 sum;\n\t\tvec2 uv=vPos*0.5+0.5;\n\t\tif(uGlow){\n\t\t\tsum += getColor(vec2(uv.x - 4.0*blurSize.x, uv.y)) * 0.05;\n\t\t\tsum += getColor(vec2(uv.x - 3.0*blurSize.x, uv.y)) * 0.09;\n\t\t\tsum += getColor(vec2(uv.x - 2.0*blurSize.x, uv.y)) * 0.12;\n\t\t\tsum += getColor(vec2(uv.x - blurSize.x, uv.y)) * 0.15;\n\t\t\tsum += getColor(vec2(uv.x, uv.y)) * 0.16;\n\t\t\tsum += getColor(vec2(uv.x + blurSize.x, uv.y)) * 0.15;\n\t\t\tsum += getColor(vec2(uv.x + 2.0*blurSize.x, uv.y)) * 0.12;\n\t\t\tsum += getColor(vec2(uv.x + 3.0*blurSize.x, uv.y)) * 0.09;\n\t\t\tsum += getColor(vec2(uv.x + 4.0*blurSize.x, uv.y)) * 0.05;\n\n\t\t\t//y\n\t\t\tsum += getColor(vec2(uv.x, uv.y - 4.0*blurSize.y)) * 0.05;\n\t\t\tsum += getColor(vec2(uv.x, uv.y - 3.0*blurSize.y)) * 0.09;\n\t\t\tsum += getColor(vec2(uv.x, uv.y - 2.0*blurSize.y)) * 0.12;\n\t\t\tsum += getColor(vec2(uv.x, uv.y - blurSize.y)) * 0.15;\n\t\t\tsum += getColor(vec2(uv.x, uv.y)) * 0.16;\n\t\t\tsum += getColor(vec2(uv.x, uv.y + blurSize.y)) * 0.15;\n\t\t\tsum += getColor(vec2(uv.x, uv.y + 2.0*blurSize.y)) * 0.12;\n\t\t\tsum += getColor(vec2(uv.x, uv.y + 3.0*blurSize.y)) * 0.09;\n\t\t\tsum += getColor(vec2(uv.x, uv.y + 4.0*blurSize.y)) * 0.05;\n\t\t}\n\t\tif(u3d){\n\t\t\tfor (int i=0;i<=STEPS;i++) {\n\t\t\t\tfloat s=(float(i)/float(STEPS));\n\t\t\t\tvec2 p = vPos*(1.0+0.15*s);\n\t\t\t\tvec4 b = texture2D(tex, p*0.5+0.5);\n\t\t\t\tif (length(b.rgb-groundColor)<0.1) {\n\t\t\t\t\tif(i!=STEPS) {\n\t\t\t\t\t\tb.a = 0.0;\n\t\t\t\t\t}\n\t\t\t\t} else if(i!=0) {\n\t\t\t\t\tb.rgb=groundColor*0.8;\n\t\t\t\t}\n\t\t\t\ta.rgb = a.rgb*a.a + b.rgb*b.a*(1.0-a.a);\n\t\t\t\ta.a = a.a+b.a * (1.0-a.a);\n\t\t\t}\n\t\t}\n\t\tgl_FragColor = (u3d?a:texture2D(tex,uv)) + sum*(sin(uTime)*0.5+1.5);\n\t}\n\t'
      )
      _0x3d368e.useProgram(_0x5900b9)
      _0x3d368e.bindBuffer(_0x3d368e.ARRAY_BUFFER, _0x3d368e.createBuffer())
      _0x3d368e.bufferData(
        _0x3d368e.ARRAY_BUFFER,
        new Float32Array([-1, 1, -1, -1, 1, -1, -1, 1, 1, -1, 1, 1]),
        _0x3d368e.STATIC_DRAW
      )
      _0x3d368e.enableVertexAttribArray(0)
      _0x3d368e.vertexAttribPointer(0, 2, _0x3d368e.FLOAT, false, 0, 0)
      _0x3d368e.activeTexture(_0x3d368e.TEXTURE0)
      _0x3d368e.bindTexture(_0x3d368e.TEXTURE_2D, _0x3d368e.createTexture())
      _0x3d368e.texParameteri(
        _0x3d368e.TEXTURE_2D,
        _0x3d368e.TEXTURE_WRAP_S,
        _0x3d368e.CLAMP_TO_EDGE
      )
      _0x3d368e.texParameteri(
        _0x3d368e.TEXTURE_2D,
        _0x3d368e.TEXTURE_WRAP_T,
        _0x3d368e.CLAMP_TO_EDGE
      )
      _0x3d368e.texParameteri(
        _0x3d368e.TEXTURE_2D,
        _0x3d368e.TEXTURE_MIN_FILTER,
        _0x3d368e.NEAREST
      )
      _0x3d368e.texParameteri(
        _0x3d368e.TEXTURE_2D,
        _0x3d368e.TEXTURE_MAG_FILTER,
        _0x3d368e.NEAREST
      )
      _0x3d368e.uniform1i(_0x3d368e.getUniformLocation(_0x5900b9, 'tex'), 0)
      const _0x5a1142 = _0x3d368e.getUniformLocation(_0x5900b9, 'u3d'),
        _0x253aab = _0x3d368e.getUniformLocation(_0x5900b9, 'uGlow'),
        _0x3889ee = _0x3d368e.getUniformLocation(_0x5900b9, 'uTime'),
        _0x11fb1c = _0x3d368e.getUniformLocation(_0x5900b9, 'blurSize')
      function _0x86d0ee(_0x22ecad, _0x5df792) {
        const _0x189e8b = _0x3d368e.createShader(
          'vertex' == _0x22ecad
            ? _0x3d368e.VERTEX_SHADER
            : _0x3d368e.FRAGMENT_SHADER
        )
        return (
          _0x3d368e.shaderSource(_0x189e8b, _0x5df792),
          _0x3d368e.compileShader(_0x189e8b),
          _0x3d368e.getShaderParameter(_0x189e8b, _0x3d368e.COMPILE_STATUS) ||
            console.log(
              'Error compiling ' +
                _0x22ecad +
                ' shader. ' +
                _0x3d368e.getShaderInfoLog(_0x189e8b)
            ),
          _0x189e8b
        )
      }
      return function () {
        ;(_0x23f197.checked || _0x34f7af.checked) &&
          ((_0x41c915.width === _0x4f5add.width &&
            _0x41c915.height === _0x4f5add.height) ||
            ((_0x41c915.width = _0x4f5add.width),
            (_0x41c915.height = _0x4f5add.height),
            _0x3d368e.viewport(0, 0, _0x4f5add.width, _0x4f5add.height)),
          _0x3d368e.uniform1f(_0x3889ee, 0.005 * performance.now()),
          _0x3d368e.uniform2fv(_0x11fb1c, [
            1 / _0x4f5add.width,
            1 / _0x4f5add.height,
          ]),
          _0x3d368e.uniform1i(_0x5a1142, _0x23f197.checked),
          _0x3d368e.uniform1i(_0x253aab, _0x34f7af.checked),
          _0x3d368e.pixelStorei(_0x3d368e.UNPACK_FLIP_Y_WEBGL, true),
          _0x3d368e.texImage2D(
            _0x3d368e.TEXTURE_2D,
            0,
            _0x3d368e.RGBA,
            _0x3d368e.RGBA,
            _0x3d368e.UNSIGNED_BYTE,
            _0x4f5add
          ),
          _0x3d368e.clear(
            _0x3d368e.COLOR_BUFFER_BIT | _0x3d368e.DEPTH_BUFFER_BIT
          ),
          _0x3d368e.drawArrays(_0x3d368e.TRIANGLES, 0, 6),
          _0x342747.drawImage(
            _0x41c915,
            0,
            0,
            _0x4f5add.width,
            _0x4f5add.height
          ))
      }
    })()
  } catch (_0x5f596f) {
    console.error('Error creating post processor. ' + _0x5f596f)
    _0x91abc2(_0x23f197, false)
    _0x91abc2(_0x34f7af, false)
    _0x91abc2(_0x269cb0, false)
  }
  1 === window.devicePixelRatio && _0x91abc2(_0x269cb0, false)
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
  const _0x2b477b = document.querySelector('.killer'),
    _0xce3c49 = document.getElementById('fixedJoystickCb')
  _0x5f77ca(_0xce3c49, 'fixed_joystick')
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
    _0x4601a8 = navigator.userAgent.toLowerCase(),
    _0x5e06ec =
      /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(
        _0x4601a8
      ),
    _0x13afc3 = document.querySelector('.minimize'),
    _0x20dc75 = document.querySelector('.minimize-btn')
  _0x20dc75.onclick = function () {
    _0x13afc3.classList.add('minimize-show')
    _0x5a875d.classList.remove('game-show')
    _0x186185.classList.remove('grid-show')
  }
  const _0x194e5e = document.querySelector('.hud-common'),
    _0x41e27f = document.querySelector('.resume'),
    _0x4f3f05 = document.querySelector('.giveup')
  _0x41e27f.onclick = function () {
    _0xe694f5()
    _0x5a875d.classList.add('game-show')
  }
  _0x4f3f05.onclick = function () {
    _0x194da0 &&
      !_0x194da0.isDead &&
      (_0x3fe969(new Uint8Array([_0x4822ce(6, 0)])),
      this.classList.add('btn-disabled'),
      _0x41e27f.click())
  }
  const _0x31b9a6 = document.getElementById('optimizedRendering')
  _0x5f77ca(_0x31b9a6, 'optimized_rendering')
  const _0x7d7288 = document.querySelector('#kbMovementCb')
  _0x5f77ca(_0x7d7288, 'kb_movement')
  const _0x44d1d2 = document.querySelector('.nickname')
  function _0x91abc2(_0x3d24ea, _0xa0ea58) {
    _0x3d24ea.parentNode.style.display = _0xa0ea58 ? '' : 'none'
  }
  function _0x5f77ca(_0x29664c, _0x7b7a0b) {
    const _0x245513 = localStorage[_0x7b7a0b]
    _0x29664c.checked =
      void 0 !== _0x245513 ? 'true' === _0x245513 : _0x29664c.checked
    _0x29664c.oninput = function () {
      localStorage[_0x7b7a0b] = this.checked
      _0x29664c === _0x269cb0 && _0x3c1fa3()
    }
  }
  function _0x3f9782(_0x25f713) {
    for (
      let _0x1fea3b = 1;
      _0x1fea3b < _0x25f713.segments.length;
      _0x1fea3b++
    ) {
      const _0x2e95d2 = _0x25f713.segments[_0x1fea3b],
        _0x3ed8ba = _0x25f713.segments[_0x1fea3b - 1],
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
      _0xdb16fe = new Path2D()
    for (let _0x17fb70 = 0; _0x17fb70 <= _0x15dae2; _0x17fb70++) {
      const _0x20dac3 = _0x1afd16 * _0x17fb70,
        _0x5f39f5 = _0x20dac3 - _0x4c45d0,
        _0x2bac11 = _0x20dac3 + _0x4c45d0
      _0x17fb70 % 2 == 0
        ? (_0xdb16fe.lineTo(
            Math.cos(_0x5f39f5) * _0x324150,
            Math.sin(_0x5f39f5) * _0x324150
          ),
          _0xdb16fe.lineTo(
            Math.cos(_0x2bac11) * _0x55965f,
            Math.sin(_0x2bac11) * _0x55965f
          ))
        : (_0xdb16fe.lineTo(
            Math.cos(_0x5f39f5) * _0x55965f,
            Math.sin(_0x5f39f5) * _0x55965f
          ),
          _0xdb16fe.lineTo(
            Math.cos(_0x2bac11) * _0x324150,
            Math.sin(_0x2bac11) * _0x324150
          ))
    }
    return _0xdb16fe
  }
  _0x44d1d2.oninput = function () {
    localStorage.nickname = this.value
  }
  _0x44d1d2.maxLength = 14
  _0x44d1d2.value =
    void 0 !== localStorage.nickname ? localStorage.nickname : ''
  _0x91abc2(_0xce3c49, _0x39ef23)
  _0x91abc2(_0x7d7288, !_0x39ef23)
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
  class _0x2561ae {
    constructor(_0x298d8b, _0x18c5be, _0x4cc609 = 0) {
      this.id = _0x298d8b
      this.segments = []
      this.updateTime = 0
      this.dirX = Math.cos(_0x18c5be)
      this.dirY = Math.sin(_0x18c5be)
      this.newDirX = this.oldDirX = this.dirX
      this.newDirY = this.oldDirY = this.dirY
      this.sad = 0
      this.angry = 0
      this.faceSkin = -1
      this.bodySkin = -1
      this.energy = 0
      this.iEnergy = 0
      this.r = this.interpR = this.interpOldR = _0x4cc609
      this.angle = _0x18c5be
      this.iEnergyChange = 0
      this.energyChangeCounter = 1
      this.energyAlpha = 0
      this.nickname = ''
    }
    ['interpolate']() {
      const _0x58ed56 = Math.min(1, (Date.now() - this.updateTime) / 100)
      for (let _0x5dfedf = 0; _0x5dfedf < this.segments.length; _0x5dfedf++) {
        const _0xe05cb = this.segments[_0x5dfedf]
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
      const _0x3fe6ad = Date.now()
      if (((_0x4d6d74.lineWidth = 5), _0x4d6d74.lineWidth, this.isDead)) {
        const _0x21aaa2 = (_0x3fe6ad - this.diedAt) / 500
        if (_0x21aaa2 > 1) {
          return void _0x31c3e2.splice(_0xb0bd9f, 1)
        }
        _0x4d6d74.globalAlpha =
          Math.abs(Math.sin(_0x21aaa2 * Math.PI * 2)) * (1 - _0x21aaa2) * 0.7
      } else {
        _0x4d6d74.globalAlpha = 1
      }
      const _0x4c206d = (_0x3fe6ad - this.diggedLavaAt) / 200,
        _0x34189b = [153, 153, 153],
        _0x2215c2 = [124, 124, 124]
      if (_0x4c206d < 1) {
        const _0x1724f0 = [255, 0, 0],
          _0x508e62 = 0.5 * (1 - _0x4c206d),
          _0x2e9fb3 = 1 - _0x508e62
        for (let _0x23b7aa = 0; _0x23b7aa < 3; _0x23b7aa++) {
          _0x34189b[_0x23b7aa] =
            _0x34189b[_0x23b7aa] * _0x2e9fb3 + _0x1724f0[_0x23b7aa] * _0x508e62
          _0x2215c2[_0x23b7aa] =
            _0x2215c2[_0x23b7aa] * _0x2e9fb3 + _0x1724f0[_0x23b7aa] * _0x508e62
        }
      }
      let _0x65247a = (_0x4d6d74.fillStyle =
          'rgb(' + _0x34189b.join(',') + ')'),
        _0x14bbf2 = (_0x4d6d74.strokeStyle = 'rgb(' + _0x2215c2.join(',') + ')')
      const _0x52b6e2 = 1 * this.interpR,
        _0x46ceb7 = this.segments[0]
      if (this.isDead || _0x31b9a6.checked) {
        _0x4d6d74.beginPath()
        for (let _0x28880d = 0; _0x28880d < this.segments.length; _0x28880d++) {
          const { interpX: _0x323b12, interpY: _0x191ec9 } =
            this.segments[_0x28880d]
          0 === _0x28880d
            ? _0x4d6d74.moveTo(_0x323b12, _0x191ec9)
            : _0x4d6d74.lineTo(_0x323b12, _0x191ec9)
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
        for (let _0x20403b = 1; _0x20403b <= _0x455568; _0x20403b++) {
          const _0x2794c6 = this.segments[_0x20403b - 1],
            _0x4e87bd = this.segments[_0x20403b],
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
            1 !== _0x20403b)
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
        for (let _0x1153db = _0x455568; _0x1153db >= 1; _0x1153db--) {
          const _0x3d0fa0 = this.segments[_0x1153db],
            _0x5ab5f8 = this.segments[_0x1153db - 1]
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
      const _0x197a07 = (skins.faceSkins[this.faceSkin] || { name: 'idk' })
        .name
      if ('Faceless' === _0x197a07) {
        return
      }
      _0x4d6d74.save()
      _0x4d6d74.translate(_0x46ceb7.interpX, _0x46ceb7.interpY)
      const _0x2e2f56 =
        (_0x52b6e2 / 30) * (_0x197a07.startsWith('Kirk') ? 0.7 : 1)
      let _0x205471 = 0
      if ('Gear' === _0x197a07) {
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
      if ('Cute' === _0x197a07) {
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
        for (let _0x14e88b = 0; _0x14e88b < 2; _0x14e88b++) {
          const _0x1c48bd = 9 * (2 * _0x14e88b - 1),
            _0x4f7b70 = 0 === _0x14e88b ? 1 : 0,
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
        'Kirkier' === _0x197a07 &&
          _0x4d6d74.translate(13 * this.dirX, 13 * this.dirY)
        'Sarcastic' === _0x197a07
          ? (_0x205471 = Math.PI)
          : 'Dizzy' === _0x197a07 &&
            (_0x205471 = (Date.now() / 200) % (2 * Math.PI))
        _0x4d6d74.rotate(_0x205471)
        _0x4d6d74.scale(_0x2e2f56, _0x2e2f56)
        'Bot' === _0x197a07
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
          : 'Moyai' === _0x197a07
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
          : 'Ascii' === _0x197a07
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
          : 'All Seeing' !== _0x197a07 &&
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
        if ('Too cool' === _0x197a07) {
          _0x4d6d74.save()
          _0x4d6d74.translate(-27.5, 7)
          _0x4d6d74.scale(0.004200000000000001, -0.004200000000000001)
          _0x4d6d74.fillStyle = '#222'
          _0x4d6d74.fill(_0x55f515)
          _0x4d6d74.restore()
        } else {
          if ('Ascii' === _0x197a07 || 'Moyai' === _0x197a07) {
          } else {
            if ('Cyclops' === _0x197a07) {
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
              if ('All Seeing' === _0x197a07) {
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
                if ('Bot' === _0x197a07) {
                  const _0x30118a = -9
                  _0x288745 *= 1.5
                  for (let _0x415cfe = 0; _0x415cfe < 2; _0x415cfe++) {
                    const _0x845822 = (2 * _0x415cfe - 1) * _0x288745,
                      _0x315fca = 0 === _0x415cfe ? 1 : 0,
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
                  if ('Creepy' === _0x197a07) {
                    const _0xde1f87 = -7
                    for (let _0x511287 = 0; _0x511287 < 2; _0x511287++) {
                      const _0x2484bb = (2 * _0x511287 - 1) * _0x288745,
                        _0x19baf7 = 0 === _0x511287 ? 1 : 0,
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
                    for (let _0x5c1570 = 0; _0x5c1570 < 2; _0x5c1570++) {
                      const _0x559bb0 = (2 * _0x5c1570 - 1) * _0x288745
                      if (this.isDead) {
                        _0x1b9630(_0x559bb0, -6, 5, 2.5)
                        continue
                      }
                      const _0x4181f4 = 0 === _0x5c1570 ? 1 : 0,
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
                    'Pirate' === _0x197a07
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
                      : 'Intellectual' === _0x197a07 &&
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
      'Gear' === _0x197a07 && _0x4d6d74.restore()
      _0x4d6d74.restore()
    }
  }
  function _0x406b9c(_0x4e26bf) {
    return (function (_0x3def1b) {
      const _0x2f7f38 = Math.floor(5 * Math.random())
      for (let _0x5fbd7e = 0; _0x5fbd7e < _0x3def1b.length; _0x5fbd7e++) {
        _0x3def1b[_0x5fbd7e] = Math.max(0, _0x3def1b[_0x5fbd7e] - _0x2f7f38)
      }
      return _0x3def1b
    })(_0x1ed3cb(_0x4e26bf))
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
    _0x3729b6.style.display = 'none'
    _0x10ea98(window.location.origin.replace('http', 'ws'))
    _0x40d72d()
  }
  document.body.oncontextmenu = function () {
    return false
  }
  const _0xb4f9cb = (function (_0x419e03) {
      const _0xa52675 = {}
      for (let _0x4a6209 in _0x419e03)
        _0xa52675[_0x419e03[_0x4a6209]] = _0x4a6209
      return _0xa52675
    })({
      invalidProtocol: 0,
      outdatedVersion: 1,
      tooManyConnections: 2,
      AFK: 3,
    }),
    _0x3729b6 = document.querySelector('.loader'),
    _0x4f623f = document.querySelector('.connecting'),
    _0x186185 = document.querySelector('.grid'),
    _0x3226d4 = document.querySelector('.lb'),
    _0xaec281 = document.querySelector('.lb-content'),
    _0x26814d = document.querySelector('.lb-header span')
  if (_0x39ef23) {
    _0x3226d4.classList.add('slide-up')
    _0x3226d4.style.pointerEvents = 'all'
    const _0x5a8867 = document.querySelector('.lb-btn')
    _0x5a8867.classList.remove('slide-up')
    _0x5a8867.ontouchstart = _0x3226d4.ontouchstart = function () {
      _0x5a8867.classList.toggle('slide-up')
      _0x3226d4.classList.toggle('slide-up')
    }
  }
  const _0x2da152 = document.querySelector('.menu'),
    _0x5f3b0d = document.querySelector('.settings'),
    _0xb914f5 = document.querySelector('.changelog'),
    _0x131dac = document.querySelector('.settings-btn'),
    _0x5d61a7 = document.querySelector('.changelog-btn')
  _0x243035('#ppBtn', '/docs/pp.html')
  _0x243035('#tosBtn', '/docs/tos.html')
  const _0x18e771 = document.querySelector('.login-btn')
  _0x18e771.onclick = function () {
    _0x2a5982 ||
      (window.location.href =
        'https://discord.com/api/oauth2/authorize?client_id=995547764983341057&redirect_uri=' +
        encodeURIComponent(window.location.origin + '/discord') +
        '&response_type=code&scope=identify&state=' +
        encodeURIComponent(btoa(_0x292439)))
  }
  const _0x35cb64 = document.querySelector('.logout-btn')
  function _0x243035(_0x48c796, _0x52a14f) {
    document.querySelector(_0x48c796).onclick = function () {
      window.open(_0x52a14f, '_blank')
    }
  }
  _0x35cb64.onclick = function () {
    _0x292439 == localStorage.account_id && delete localStorage.account_id
    delete localStorage.discord_data
    ws && ws.close()
  }
  _0x243035('.discord-btn', 'https://discord.gg/WkYHsUQF5a')
  _0x243035('.reddit-btn', 'https://www.reddit.com/r/digworm/')
  const _0x3d165b = document.querySelector('.overlay'),
    _0x1bb119 =
      (document.querySelector('.game .overlay'),
      document.querySelector('.shop'))
  _0x39ef23 && _0x1bb119.classList.add('fullsize-shop')
  const _0x5a875d = document.querySelector('.game'),
    _0x5784b8 = document.querySelector('.gameover'),
    _0x56f3e3 = document.querySelector('.continue-btn'),
    _0x413b9c = document.querySelector('.face-skins'),
    _0x6917f9 = document.querySelector('.body-skins'),
    _0x1dea93 = document.createElement('div'),
    _0x14cb2c = document.querySelector('.new-skins'),
    _0x421e37 = [],
    _0xe591fc = document.querySelector('.unequip-btn')
  _0xe591fc.onclick = function () {
    for (let _0x12a858 = 0; _0x12a858 < 2; _0x12a858++) {
      const _0x5397a4 = document.querySelector(
        '.' + (0 === _0x12a858 ? 'face' : 'body') + '-skin [stroke=Unequip]'
      )
      _0x5397a4 && _0x5397a4.setAttribute('stroke', 'Equip')
    }
    localStorage.equipped_body_skin = -1
    localStorage.equipped_face_skin = -1
    this.classList.add('btn-disabled')
  }
  const _0x553cf3 = []
  function _0x287195(_0x5e8135, _0xcd14c9, _0x700db1) {
    let _0x304f7c
    _0x5e8135 = _0x5e8135
      .map((_0x4fe172, _0x255006) => ((_0x4fe172.id = _0x255006), _0x4fe172))
      .sort(function (_0x4710bd, _0x4a45e9) {
        return _0x4710bd.price - _0x4a45e9.price
      })
    _0xcd14c9.innerHTML = ''
    for (let _0x53c3be = 0; _0x53c3be < _0x5e8135.length; _0x53c3be++) {
      _0x53c3be % 4 == 0 &&
        ((_0x304f7c = document.createElement('div')),
        _0x304f7c.classList.add('shop-row'),
        _0xcd14c9.appendChild(_0x304f7c))
      const _0x4d7c86 = _0x5e8135[_0x53c3be]
      _0x1dea93.innerHTML =
        '\n\t\t<div class="shop-item ' +
        _0x700db1 +
        '-skin ' +
        _0x700db1 +
        'Skin' +
        _0x53c3be +
        '">\n\t\t\t<div class="shop-item-preview"></div>\n\t\t\t<span stroke="' +
        _0x4d7c86.name +
        '" class="shop-item-name"></span>\n\t\t\t<div class="btn gold-btn btn-disabled">\n\t\t\t\t<i class="fa fa-circle"></i>\n\t\t\t\t<span stroke="' +
        _0x4d7c86.price.toLocaleString() +
        '"></span>\n\t\t\t</div>\n\t\t</div>'
      const _0x524f8f = _0x1dea93.children[0]
      _0x4d7c86.shopItemEl = _0x524f8f
      _0x1b6494(_0x524f8f)[_0x700db1 + 'Skin'] = _0x4d7c86.id
      _0x304f7c.appendChild(_0x524f8f)
      _0x524f8f.initialParent = _0x304f7c
      _0x524f8f.tempDiv = document.createElement('div')
    }
  }
  document.onmousemove = function (_0x22ed60) {
    for (let _0x49f954 = 0; _0x49f954 < _0x553cf3.length; _0x49f954++) {
      const _0x3c0143 = _0x553cf3[_0x49f954],
        _0x5d55ed = _0x3c0143.previewPlayer,
        _0x5a0205 = _0x3c0143.previewEl.getBoundingClientRect(),
        _0x4eb1a7 = Math.atan2(
          _0x22ed60.clientY - (_0x5a0205.top + _0x5a0205.height / 2),
          _0x22ed60.clientX - (_0x5a0205.left + _0x5a0205.width / 2)
        )
      _0x5d55ed.oldDirX = _0x5d55ed.dirX
      _0x5d55ed.oldDirY = _0x5d55ed.dirY
      _0x5d55ed.newDirX = Math.cos(_0x4eb1a7)
      _0x5d55ed.newDirY = Math.sin(_0x4eb1a7)
    }
  }
  let _0x2710ba = 0
  const _0x54c5be = _0x1b6494(document.querySelector('.my-skin-preview'))
  function _0x1b6494(_0x10c607) {
    const _0x585a79 = document.createElement('canvas')
    _0x585a79.style.position = 'absolute'
    _0x585a79.style.top = '0'
    _0x585a79.style.left = '0'
    _0x585a79.style.width = '100%'
    _0x10c607.style.position = 'relative'
    _0x10c607.insertBefore(_0x585a79, _0x10c607.children[0])
    const _0x22d723 = _0x585a79.getContext('2d'),
      _0xa658a9 = _0x10c607.querySelector('.shop-item-preview'),
      _0x5667f0 = new _0x2561ae(0, 0, 30)
    for (let _0x3ca9ca = 0; _0x3ca9ca < 2; _0x3ca9ca++) {
      _0x5667f0.segments.push({
        interpX: -100 * _0x3ca9ca,
        interpY: 0,
      })
    }
    const _0x127d71 = {
      previewPlayer: _0x5667f0,
      el: _0x10c607,
      previewEl: _0xa658a9,
      faceSkin: -1,
      bodySkin: -1,
      render() {
        if (0 === _0x1bb119.getBoundingClientRect().width) {
          return
        }
        const _0x1db898 = _0x10c607.getBoundingClientRect()
        if (0 === _0x1db898.height || 0 === _0x1db898.width) {
          return
        }
        const _0x8ae748 = _0x1db898.width * window.devicePixelRatio,
          _0x378eb1 = _0x1db898.height * window.devicePixelRatio
        ;(_0x585a79.width === _0x8ae748 && _0x585a79.height === _0x378eb1) ||
          ((_0x585a79.width = _0x8ae748), (_0x585a79.height = _0x378eb1))
        const _0x42f183 = _0xa658a9.getBoundingClientRect()
        _0x22d723.clearRect(0, 0, _0x585a79.width, _0x585a79.height)
        _0x22d723.save()
        _0x22d723.scale(window.devicePixelRatio, window.devicePixelRatio)
        const _0x3fe9ac = _0x5667f0.segments[0],
          _0x312c67 = _0x42f183.width / 2
        _0x22d723.translate(
          _0x42f183.left - _0x1db898.left + _0x312c67,
          _0x42f183.top - _0x1db898.top + _0x312c67
        )
        const _0x4ee50f = _0x312c67 / _0x5667f0.interpR
        _0x22d723.scale(_0x4ee50f, _0x4ee50f)
        _0x22d723.translate(-_0x3fe9ac.x, -_0x3fe9ac.y)
        _0x5667f0.faceSkin = this.faceSkin
        _0x5667f0.bodySkin = this.bodySkin
        _0x5667f0.mood = _0x2710ba
        _0x5667f0.dirX += 0.2 * (_0x5667f0.newDirX - _0x5667f0.dirX)
        _0x5667f0.dirY += 0.2 * (_0x5667f0.newDirY - _0x5667f0.dirY)
        _0x5667f0.interpFace()
        _0x5667f0.draw(0, _0x22d723, false)
        _0x22d723.restore()
      },
    }
    return _0x553cf3.push(_0x127d71), _0x127d71
  }
  _0x56f3e3.onclick = function () {
    _0x13afc3.classList.remove('minimize-show')
    _0x5a875d.classList.remove('game-show')
    ws &&
      ws.readyState === ws.OPEN &&
      setTimeout(function () {
        _0x186185.classList.add('grid-show')
      }, 500)
  }
  _0x3d165b.onclick = function () {
    _0x1bb119.classList.remove('dialog-show')
    _0x3d165b.classList.remove('overlay-show')
  }
  _0x131dac.onclick = _0x5d61a7.onclick = function () {
    const _0x2fd8e4 = this == _0x131dac ? _0xb914f5 : _0x5f3b0d
    ;(this == _0x131dac ? _0x5f3b0d : _0xb914f5).classList.toggle('dialog-show')
    _0x2fd8e4.classList.remove('dialog-show')
    this === _0x5d61a7 && (_0x48a579 = false)
  }
  _0x2da152.onclick = function (_0x40bb21) {
    _0x40bb21.target == this &&
      (_0xb914f5.classList.remove('dialog-show'),
      _0x5f3b0d.classList.remove('dialog-show'))
  }
  const _0x470e24 = document.querySelectorAll('.dialog-close')
  for (let _0x28c185 = 0; _0x28c185 < _0x470e24.length; _0x28c185++) {
    _0x470e24[_0x28c185].onclick = function () {
      const _0x32d8c6 = this.parentNode.parentNode
      _0x32d8c6.classList.remove('dialog-show')
      _0x32d8c6 == _0x1bb119
        ? _0x3d165b.classList.remove('overlay-show')
        : _0x32d8c6 == _0x440387 && _0x186185.classList.remove('grid-pushup')
    }
  }
  const _0x3eb8c6 = document.querySelector('.shop-btn'),
    _0x4a20d7 = document.querySelector('.squad-btn'),
    _0x440387 = document.querySelector('.squad'),
    _0xd543af = document.querySelectorAll('.shop .dialog-content'),
    _0x130a40 = document.querySelector('.play-btn')
  let _0x48a579 = true,
    _0x15b23c = {}
  function _0xbbd36() {
    if (!_0x7d7288.checked) {
      return
    }
    let _0xe6e3da = 0,
      _0x36a400 = 0
    _0x15b23c.KeyW || _0x15b23c.ArrowUp
      ? (_0x36a400 = -1)
      : (_0x15b23c.KeyS || _0x15b23c.ArrowDown) && (_0x36a400 = 1)
    _0x15b23c.KeyA || _0x15b23c.ArrowLeft
      ? (_0xe6e3da = -1)
      : (_0x15b23c.KeyD || _0x15b23c.ArrowRight) && (_0xe6e3da = 1)
    ;(0 !== _0xe6e3da || 0 !== _0x36a400) &&
      _0x2ebfb5(Math.atan2(_0x36a400, _0xe6e3da))
  }
  function _0x178fb4() {
    const _0x1c1c35 = parseInt(localStorage.equipped_face_skin),
      _0x3dba9d = parseInt(localStorage.equipped_body_skin)
    return [_0xce4e1e(_0x1c1c35), _0xce4e1e(_0x3dba9d)]
    function _0xce4e1e(_0x54f97a) {
      return isNaN(_0x54f97a) ? -1 : _0x54f97a
    }
  }
  function _0xe694f5() {
    _0xb914f5.classList.remove('dialog-show')
    _0x5f3b0d.classList.remove('dialog-show')
  }
  function _0x371f8c(_0x11e818) {
    const _0x19f513 = document.querySelectorAll(_0x11e818 + ' .btn')
    for (let _0x4de871 = 0; _0x4de871 < _0x19f513.length; _0x4de871++) {
      _0x19f513[_0x4de871].onclick = function () {
        const _0x4317f3 = document.querySelector(_0x11e818 + ' .btn-active')
        if (
          (_0x4317f3 && _0x4317f3.classList.remove('btn-active'),
          this.classList.add('btn-active'),
          '.gamemodes' === _0x11e818)
        ) {
          localStorage.gamemode = this.getAttribute('data-gamemode')
        } else {
          if ('.tabs' === _0x11e818) {
            for (let _0x364733 = 0; _0x364733 < _0x421e37.length; _0x364733++) {
              const _0x36ff03 = _0x421e37[_0x364733]
              0 !== _0x4de871
                ? _0x36ff03.parentNode !== _0x36ff03.initialParent &&
                  (_0x36ff03.initialParent.insertBefore(
                    _0x36ff03,
                    _0x36ff03.tempDiv
                  ),
                  _0x36ff03.tempDiv.remove())
                : _0x36ff03.parentNode !== _0x14cb2c &&
                  (_0x36ff03.initialParent.insertBefore(
                    _0x36ff03.tempDiv,
                    _0x36ff03
                  ),
                  _0x14cb2c.appendChild(_0x36ff03))
            }
            for (let _0x49ee22 = 0; _0x49ee22 < _0xd543af.length; _0x49ee22++) {
              _0xd543af[_0x49ee22].style.display =
                _0x49ee22 === _0x4de871 ? '' : 'none'
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
      ((_0x15b23c[_0x353950.code] = true), _0xbbd36(), _0x382b09())
  }
  document.onkeyup = function (_0x273302) {
    delete _0x15b23c[_0x273302.code]
    _0xbbd36()
    _0x382b09()
    'KeyC' === _0x273302.code
      ? _0x4f5add.toBlob(function (_0x434d81) {
          navigator.clipboard.write([
            new ClipboardItem({ 'image/png': _0x434d81 }),
          ])
        })
      : 'Escape' === _0x273302.code
      ? _0x5a875d.classList.contains('game-show')
        ? _0x20dc75.click()
        : _0x13afc3.classList.contains('minimize-show') && _0x41e27f.click()
      : 'Enter' === _0x273302.code &&
        (_0x186185.classList.contains('grid-show')
          ? _0x130a40.click()
          : '' === _0x5784b8.style.display &&
            _0x5a875d.classList.contains('game-show') &&
            _0x56f3e3.click())
  }
  _0x130a40.onclick = function () {
    _0xe694f5()
    _0x186185.classList.remove('grid-show')
    setTimeout(function () {
      const [_0x3c38d6, _0x57af3f] = _0x178fb4(),
        _0x10b8d4 = new TextEncoder().encode(_0x44d1d2.value.slice(0, 14)),
        _0x506d8f = new DataView(
          new ArrayBuffer(
            1 +
              (-1 !== _0x3c38d6 ? 1 : 0) +
              (-1 !== _0x57af3f ? 1 : 0) +
              _0x10b8d4.length
          )
        )
      let _0x459e21 = 0,
        _0x3fb482 = parseInt(localStorage.gamemode)
      ;(isNaN(_0x3fb482) || _0x3fb482 > 1) && (_0x3fb482 = 0)
      _0x506d8f.setUint8(
        _0x459e21++,
        _0x4822ce(
          0,
          (_0x3fb482 << 2) |
            (-1 !== _0x3c38d6 ? 1 : 0) |
            (-1 !== _0x57af3f ? 2 : 0)
        )
      )
      ;-1 !== _0x3c38d6 && _0x506d8f.setUint8(_0x459e21++, _0x3c38d6)
      ;-1 !== _0x57af3f && _0x506d8f.setUint8(_0x459e21++, _0x57af3f)
      for (let _0x14c3bb = 0; _0x14c3bb < _0x10b8d4.length; _0x14c3bb++) {
        _0x506d8f.setUint8(_0x459e21++, _0x10b8d4[_0x14c3bb])
      }
      _0x3fe969(_0x506d8f)
    }, 200)
  }
  _0x3eb8c6.onclick = function () {
    _0x1bb119.querySelector('.tabs .btn').click()
    _0x1bb119.classList.add('dialog-show')
    _0x3d165b.classList.add('overlay-show')
    _0x889b55 = _0x4f0b52 = null
    _0x2710ba = 0
  }
  _0x4a20d7.onclick = function () {
    _0x440387.classList.add('dialog-show')
    _0x186185.classList.add('grid-pushup')
  }
  _0x371f8c('.gamemodes')
  _0x371f8c('.tabs')
  _0x493cc2()
  ;(function () {
    const _0x2c6808 = document.createElement('canvas')
    _0x2c6808.width = _0x2c6808.height = 20
    const _0x1c5265 = _0x2c6808.getContext('2d'),
      _0x1fc07a = _0x1c5265.createImageData(20, 20),
      _0xf8c570 = _0x1fc07a.data
    for (let _0x5f48b0 = 0; _0x5f48b0 < _0xf8c570.length; _0x5f48b0 += 4) {
      _0x406b9c(_0x21ff22.dirt)
      _0xf8c570[_0x5f48b0] = 0
      _0xf8c570[_0x5f48b0 + 1] = 0
      _0xf8c570[_0x5f48b0 + 2] = 0
      _0xf8c570[_0x5f48b0 + 3] = 10 * Math.random()
    }
    _0x1c5265.putImageData(_0x1fc07a, 0, 0)
    const _0x2e2f6f = document.createElement('style')
    _0x2e2f6f.innerText =
      '\n\t.bg {\n\t\tbackground-image: url(' +
      _0x2c6808.toDataURL() +
      ');\n\t\tbackground-size: 200px;\n\t\tanimation: bg 15s linear infinite;\n\t\timage-rendering: pixelated;\n\t}\n\n\t@keyframes bg {\n\t\tfrom {\n\t\t\tbackground-position: 0 0;\n\t\t}\n\t\tto {\n\t\t\tbackground-position: -200px -200px;\n\t\t}\n\t}\n\t'
    document.body.appendChild(_0x2e2f6f)
    _0x2da152.classList.add('bg')
  })()
  const _0x52bebe = []
  let _0x481193 = 0
  function _0x442358(_0xd687bf) {
    _0x360982.score = _0xd687bf
    _0x481193 = Math.max(_0xd687bf, _0x481193)
    _0x52bebe.push(_0xd687bf)
  }
  const _0x28e4e1 = document.querySelector('.score-graph'),
    _0x2a27ee = _0x28e4e1.getContext('2d'),
    _0x5667bb = document.querySelectorAll('.gold-preview span'),
    _0x1ca043 = document.getElementById('goldCanvas'),
    _0xf6f1ed = _0x1ca043.getContext('2d'),
    _0x4f5add = document.getElementById('canvas')
  _0x3c1fa3()
  const _0x342747 = _0x4f5add.getContext('2d')
  function _0x3c1fa3() {
    const _0x16188d = _0x269cb0.checked ? window.devicePixelRatio : 1
    _0x4f5add.width = _0x1ca043.width = window.innerWidth * _0x16188d
    _0x4f5add.height = _0x1ca043.height = window.innerHeight * _0x16188d
    _0x4f5add.style.width = _0x1ca043.style.width = window.innerWidth + 'px'
    _0x4f5add.style.height = _0x1ca043.style.height = window.innerHeight + 'px'
  }
  window.onresize = function () {
    _0x3c1fa3()
    _0x13d5e7()
    _0x8d0f50()
    _0x30dcaf()
  }
  const _0x252781 = document.querySelector('.alert'),
    _0x24d1ed = _0x252781.querySelector('.alert-desc'),
    _0x13e6f0 = document.querySelector('.hud'),
    _0x32c425 = [_0x2da152, _0x13e6f0, _0x5784b8, _0x194e5e, _0x252781]
  let _0x19da0e = 1
  function _0x13d5e7() {
    _0x19da0e =
      Math.max(window.innerWidth / 1366, window.innerHeight / 657) *
      (_0x39ef23 && !_0x5e06ec ? 1.6 : 1)
    for (let _0x50ddb0 = 0; _0x50ddb0 < _0x32c425.length; _0x50ddb0++) {
      const _0x17ade8 = _0x32c425[_0x50ddb0]
      let _0x315d99 = _0x19da0e
      _0x17ade8.style.transform = 'scale(' + _0x315d99 + ')'
      _0x17ade8.style.transformOrigin = '0 0'
      _0x17ade8.style.width = window.innerWidth / _0x315d99 + 'px'
      _0x17ade8.style.height = window.innerHeight / _0x315d99 + 'px'
    }
  }
  _0x13d5e7()
  let _0x314ee2 = 0,
    _0xb7f535 = 0
  function _0x52bbe6(_0x265e02) {
    return _0x265e02 < 0.01
      ? '0'
      : (_0x265e02 = Math.floor(_0x265e02)) >= 1000000
      ? parseFloat((_0x265e02 / 1000000).toFixed(2)) + 'm'
      : _0x265e02 >= 1000
      ? parseFloat((_0x265e02 / 1000).toFixed(1)) + 'k'
      : _0x265e02
  }
  const _0x5e494 = document.querySelector('.stats')
  function _0x3b7f62(_0x2cf615) {
    const _0x2c8a71 = [
        Math.floor(_0x2cf615 / 3600000),
        Math.floor((_0x2cf615 % 3600000) / 60000),
        Math.floor((_0x2cf615 % 60000) / 1000),
      ],
      _0x29582c = ['h', 'm', 's']
    let _0x51fb22 = ''
    for (let _0x145f59 = 0; _0x145f59 < _0x2c8a71.length; _0x145f59++) {
      const _0x29288d = _0x2c8a71[_0x145f59]
      ;(_0x29288d > 0 || 2 == _0x145f59) &&
        (_0x51fb22 += _0x29288d + _0x29582c[_0x145f59] + ' ')
    }
    return _0x51fb22
  }
  function _0x30dcaf() {
    if ('none' === _0x5784b8.style.display) {
      return
    }
    for (; _0x52bebe.length < 2; ) {
      _0x52bebe.push(0)
    }
    const _0x4b9b64 = (window.innerWidth * window.devicePixelRatio) / _0x19da0e
    _0x28e4e1.width !== _0x4b9b64 &&
      ((_0x28e4e1.width = _0x4b9b64),
      (_0x28e4e1.height = 100 * window.devicePixelRatio))
    const _0x3b9bde = Math.max(_0x481193, 1000)
    _0x2a27ee.clearRect(0, 0, _0x28e4e1.width, _0x28e4e1.height)
    _0x2a27ee.save()
    _0x2a27ee.scale(_0x28e4e1.width, _0x28e4e1.height)
    _0x2a27ee.beginPath()
    _0x2a27ee.moveTo(-2, 2)
    let _0x549259 = 0,
      _0x4ac362 = 0
    const _0x4da99b = _0x52bebe.length - 1
    for (let _0x272b0e = 0; _0x272b0e <= _0x4da99b; _0x272b0e++) {
      const _0x2f3ad8 = _0x52bebe[_0x272b0e],
        _0x15a2d7 = _0x272b0e / _0x4da99b,
        _0x3a7d80 = 0.975 - (_0x2f3ad8 / _0x3b9bde) * 0.95
      _0x28e4e1.width
      _0x2f3ad8 === _0x481193 &&
        ((_0x549259 = _0x15a2d7), (_0x4ac362 = _0x3a7d80))
      _0x2a27ee.lineTo(_0x15a2d7, _0x3a7d80)
      _0x272b0e === _0x4da99b && _0x2a27ee.lineTo(2, _0x3a7d80)
    }
    _0x2a27ee.lineTo(2, 2)
    _0x2a27ee.closePath()
    _0x2a27ee.restore()
    _0x2a27ee.strokeStyle = _0x2a27ee.fillStyle = 'hsla(0,0%,100%,0.2)'
    _0x2a27ee.save()
    _0x2a27ee.clip()
    _0x2a27ee.fill()
    _0x2a27ee.lineWidth = 6 * window.devicePixelRatio
    _0x2a27ee.stroke()
    _0x2a27ee.restore()
  }
  const _0x31c3e2 = []
  let _0x1cd091, _0x194da0, ws, _0x36e905, _0x34e918
  function _0x530c53() {
    _0x224d6b = false
    _0xaec281.innerHTML = ''
    _0x552882.length = 0
    _0x194da0 = null
    _0x1cd091 = null
    _0x3ef6bf = null
    _0x52a128.length = 0
    _0x31c3e2.length = 0
    _0x551ff8.length = 0
    _0x314ee2 = 0
    _0xb7f535 = 0
  }
  function _0x10ea98(WS_URL) {
    if (
      (console.log('Connecting to ' + WS_URL + '...'),
      _0x4f623f.classList.add('connecting-show'),
      _0x13afc3.classList.remove('minimize-show'),
      _0x56f3e3.click(),
      _0x186185.classList.remove('grid-show'),
      _0x3d165b.onclick(),
      (_0x127399.length = 0),
      _0x530c53(),
      (_0x36e905 = null),
      (_0x34e918 = 0),
      (_0x1175ff = null),
      (_0x57d1e4 = 0),
      (_0x2a5982 = null),
      (_0x35cb64.style.display =
        _0x18e771.style.display =
        userEl.style.display =
          'none'),
      ws)
    ) {
      try {
        ws.close()
      } catch (_0x19f232) {}
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
  let _0x292439, _0x2a5982
  function onOpen() {
    var _0x1e5734
    if (
      (console.log('Connected!'),
      (function () {
        _0x553cf3.length = 1
        for (let _0x1cfc0f in skins) {
          const _0x35ca70 = skins[_0x1cfc0f]
          for (let _0x2a345c = 0; _0x2a345c < _0x35ca70.length; _0x2a345c++) {
            delete _0x35ca70[_0x2a345c].owned
            delete _0x35ca70[_0x2a345c].purchaseSent
          }
        }
        _0x287195(skins.faceSkins, _0x413b9c, 'face')
        _0x287195(skins.bodySkins, _0x6917f9, 'body')
        _0x421e37.length = 0
        _0x14cb2c.innerHTML = ''
        const _0x4775f5 = skins.faceSkins
            .concat(skins.bodySkins)
            .sort(function (_0x24234f, _0x400b22) {
              return _0x400b22.createdAt - _0x24234f.createdAt
            }),
          _0x487452 = Math.min(4, _0x4775f5.length)
        for (let _0x21e479 = 0; _0x21e479 < _0x487452; _0x21e479++) {
          _0x421e37.push(_0x4775f5[_0x21e479].shopItemEl)
        }
      })(),
      _0x10e6ea(localStorage.account_id) ||
        (localStorage.account_id = crypto.randomUUID()),
      (_0x292439 = localStorage.account_id),
      (_0x2a5982 = localStorage.discord_data),
      _0x2a5982 ||
        ('discord_data',
        (_0x1e5734 = document.cookie.match(
          RegExp(
            '(?:^|;\\s*)' +
              'discord_data'.replace(/([.*+?\^$(){}|\[\]\/\\])/g, '\\$1') +
              '=([^;]*)'
          )
        )),
        (_0x2a5982 = _0x1e5734 ? _0x1e5734[1] : null),
        _0x2a5982 && (_0x2a5982 = decodeURIComponent(_0x2a5982)),
        (document.cookie =
          'discord_data=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;')),
      _0x2a5982)
    ) {
      try {
        const _0x441886 = _0x2a5982
        if (
          ((_0x2a5982 = JSON.parse(
            decodeURIComponent(escape(atob(_0x441886)))
          )),
          !_0x10e6ea(_0x2a5982.accountId))
        ) {
          throw new Error('invalid uuid')
        }
        _0x292439 = _0x2a5982.accountId
        usernameEl.setAttribute('stroke', _0x2a5982.name)
        _0x2a5982.avatar &&
          (avatarEl.style.backgroundImage = 'url(' + _0x2a5982.avatar + ')')
        localStorage.discord_data = _0x441886
      } catch (_0x4cdce7) {
        _0x2a5982 = null
        delete localStorage.discord_data
        console.error(_0x4cdce7)
      }
    }
    const _0x2c9555 = new DataView(new ArrayBuffer(5 + _0x292439.length))
    _0x2c9555.setUint8(0, _0x4822ce(3, 0))
    _0x2c9555.setUint32(1, 4)
    for (let _0x376f6d = 0; _0x376f6d < _0x292439.length; _0x376f6d++) {
      _0x2c9555.setUint8(5 + _0x376f6d, _0x292439.charCodeAt(_0x376f6d))
    }
    _0x3fe969(_0x2c9555)
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
    _0xaec281.appendChild(lbItemEl)
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
          (this.name ? this.name + ' - ' : '') + _0x52bbe6(this.iScore)
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
    for (let _0x29be3a = 1; _0x29be3a < _0x552882.length; _0x29be3a++) {
      const _0x146efc = _0x552882[_0x29be3a]
      _0x562ac8(_0x146efc, _0x4dea7c)
      const _0x501908 = _0x146efc.lbItemEl
      _0x501908.parentNode.appendChild(_0x501908)
      _0x146efc.isMe && (_0x411c8a = true)
    }
    _0x411c8a ||
      (_0x562ac8(_0x360982, _0x4dea7c),
      _0xaec281.appendChild(_0x360982.lbItemEl))
  }
  function _0x562ac8(_0x34f764, _0x181d0f) {
    _0x34f764.percent =
      100 * Math.min(1, _0x34f764.score / _0x181d0f.score || 0)
  }
  _0x360982.lbItemEl.classList.add('my-lb-item')
  _0x360982.isMe = true
  const _0x551ff8 = []
  let _0x16dd13 = 0
  Math.sqrt(2)
  let _0x27c993 = 0
  const _0x127399 = []
  function _0x37c0af(_0x151ef4, _0x5e8647) {
    const _0x534305 = skins[_0x151ef4 + 'Skins'][_0x5e8647]
    _0x534305.owned = true
    const _0x54e3cd = _0x534305.shopItemEl.querySelector('.btn')
    _0x54e3cd.classList.remove('gold-btn')
    _0x54e3cd.classList.add('blue-btn')
    _0x54e3cd.classList.remove('btn-disabled')
    _0x54e3cd.innerHTML = '<span stroke="Equip"></span>'
    const _0x3e855e = 'equipped_' + _0x151ef4 + '_skin'
    _0x54e3cd.onclick = function () {
      const _0x317ef6 = document.querySelector(
        '.' + _0x151ef4 + '-skin [stroke=Unequip]'
      )
      _0x317ef6 && _0x317ef6.setAttribute('stroke', 'Equip')
      const _0x57db4d = _0x317ef6 && _0x317ef6.parentNode === this
      _0x57db4d || _0x54e3cd.children[0].setAttribute('stroke', 'Unequip')
      localStorage[_0x3e855e] = _0x57db4d ? -1 : _0x5e8647
      const _0x23d1f3 = _0x178fb4()
      _0xe591fc.classList[
        -1 === _0x23d1f3[0] && -1 === _0x23d1f3[1] ? 'add' : 'remove'
      ]('btn-disabled')
      console.log(localStorage[_0x3e855e])
    }
    parseInt(localStorage[_0x3e855e]) === _0x5e8647 && _0x54e3cd.onclick()
  }
  function _0x4c0ef4() {
    _0xc7f21b('face')
    _0xc7f21b('body')
  }
  function _0xc7f21b(_0x78d58) {
    const _0x54b5db = skins[_0x78d58 + 'Skins']
    for (let _0x363b3a = 0; _0x363b3a < _0x54b5db.length; _0x363b3a++) {
      const _0x190004 = _0x54b5db[_0x363b3a]
      if (_0x190004.owned) {
        continue
      }
      const _0x231bf1 = _0x190004.shopItemEl.querySelector('.btn')
      _0x27c993 >= _0x190004.price
        ? (_0x231bf1.classList.remove('btn-disabled'),
          (_0x231bf1.onclick = function () {
            if (_0x190004.purchaseSent || _0x127399.length > 0) {
              return
            }
            _0x190004.purchaseSent = true
            const _0xcfb6b8 = new DataView(new ArrayBuffer(2))
            _0xcfb6b8.setUint8(0, _0x4822ce(4, 'face' === _0x78d58 ? 0 : 1))
            _0xcfb6b8.setUint8(1, _0x363b3a)
            _0x3fe969(_0xcfb6b8)
            _0x231bf1.classList.add('btn-disabled')
            _0x231bf1.blur()
            _0x127399.push({
              skin: _0x190004,
              i: _0x363b3a,
              prefix: _0x78d58,
            })
          }))
        : (_0x231bf1.classList.add('btn-disabled'), (_0x231bf1.onclick = null))
    }
  }
  function _0x1e2762() {
    const _0x4d8beb = _0x27c993
      .toLocaleString('en', { notation: 'compact' })
      .toLowerCase()
    for (let _0x1716ef = 0; _0x1716ef < _0x5667bb.length; _0x1716ef++) {
      _0x5667bb[_0x1716ef].innerText = _0x4d8beb
    }
  }
  function _0x5ddf1a(_0x237ed2) {
    for (_0x237ed2 = Math.ceil(_0x237ed2 / 2); _0x237ed2--; ) {
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
  const _0x4148a8 = document.querySelector('.reward-btns'),
    _0x1826a4 = _0x4148a8.querySelector('.arrow'),
    _0x5e35aa = document.getElementById('rewardStatus')
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
  _0x4148a8.innerHTML = ''
  for (let _0x6f59a1 = 0; _0x6f59a1 < _0x36e559.length; _0x6f59a1++) {
    _0x4148a8.innerHTML +=
      '<div class="btn btn-disabled"><span stroke="' +
      _0x36e559[_0x6f59a1] +
      '"></span></div>'
  }
  let _0x193b62
  function _0x38da97() {
    const _0x155e6e = _0x4148a8.querySelector('.gold-btn')
    _0x155e6e &&
      (_0x155e6e.classList.remove('gold-btn'),
      _0x155e6e.classList.add('btn-disabled'),
      (_0x155e6e.onclick = null))
    const _0x18e464 =
      _0x4148a8.children[Math.min(_0x36e559.length - 1, _0x367af4)]
    _0x367af4 < _0x36e559.length &&
      ((_0x193b62 = _0x18e464),
      _0x18e464.classList.add('gold-btn'),
      _0x18e464.classList.add('btn-disabled'),
      (_0x18e464.onclick = function () {
        this.rewardSent = true
        this.classList.add('btn-disabled')
        _0x3fe969(new Uint8Array([_0x4822ce(5, 0)]))
      }))
    _0x18e464.appendChild(_0x1826a4)
  }
  const _0x202a66 = document.querySelector('.lb-footer')
  let _0x1f18f0,
    _0x3ef6bf,
    _0x244c5d = {}
  function _0x47463e(_0x3840ab) {
    _0x49fae4.style.display = _0x3869cb.style.display = _0x3840ab ? '' : 'none'
    _0x3840ab ||
      ((_0x30b4cf.style.display = 'none'),
      (_0x5c950a = _0x2d3f53 = _0x25c66d = null))
  }
  let _0x1175ff,
    _0x4c2f95 = 0
  function onMessage(_0x330919) {
    if ('string' == typeof _0x330919.data) {
      return
    }
    !(function () {
      const _0xbed958 = _0x330919.data
      if (_0x36e905) {
        const _0x187e0b = new Uint8Array(_0xbed958),
          _0xa56f1b = new Uint8Array(_0x187e0b.length)
        for (let _0x309d43 = 0; _0x309d43 < _0x187e0b.length; _0x309d43++) {
          _0xa56f1b[_0x309d43] = _0x187e0b[_0x309d43]
          _0x187e0b[_0x309d43] ^=
            _0x36e905[(_0x34e918 + _0x309d43) % _0x36e905.length]
        }
        _0x36e905 = _0xa56f1b
      } else {
        _0x36e905 = new Uint8Array(_0xbed958)
      }
      _0x34e918 = (_0x34e918 + 1) % 1000
    })()
    const _0x258fb0 = new DataView(_0x330919.data)
    _0x36e069 += _0x258fb0.byteLength
    let _0x475187 = 0
    function _0x3c57f0() {
      const _0x567271 = _0x258fb0.getUint8(_0x475187++)
      if (_0x567271 > 0) {
        const _0x306008 = new Uint8Array(_0x567271)
        for (let _0x88870e = 0; _0x88870e < _0x567271; _0x88870e++) {
          _0x306008[_0x88870e] = _0x258fb0.getUint8(_0x475187++)
        }
        return new TextDecoder().decode(_0x306008)
      }
      return ''
    }
    const [_0xd02532, _0x3dce21] = [
      (_0x370a3c = _0x258fb0.getUint8(_0x475187++)) >> 4,
      15 & _0x370a3c,
    ]
    var _0x370a3c
    switch (_0xd02532) {
      case 4:
        const {
          skin: _0x2e2f6b,
          i: _0xb3dbfe,
          prefix: _0x1b8af9,
        } = _0x127399.shift()
        _0x37c0af(_0x1b8af9, _0xb3dbfe),
          (_0x27c993 -= _0x2e2f6b.price),
          _0x4c0ef4(),
          _0x1e2762()
        break
      case 5:
        const _0x43b27c = _0x36e559[_0x367af4++]
        ;(_0x27c993 += _0x43b27c),
          _0x4c0ef4(),
          _0x1e2762(),
          _0x38da97(),
          (_0x5656c8 = Date.now() + 86400000),
          _0x5ddf1a(_0x43b27c / 2)
        break
      case 3:
        if (
          (_0x2a5982
            ? ((_0x35cb64.style.display = ''), (userEl.style.display = ''))
            : (_0x18e771.style.display = ''),
          (_0x27c993 = 0),
          0 === _0x3dce21)
        ) {
          _0x27c993 = 0
          localStorage.equipped_body_skin = -1
          localStorage.equipped_face_skin = -1
          _0x367af4 = 0
          _0x5656c8 = 0
        } else {
          _0x27c993 = _0x258fb0.getUint32(_0x475187)
          _0x475187 += 4
          const _0x5e91b3 = _0x258fb0.getUint16(_0x475187)
          _0x475187 += 2
          _0x367af4 = _0x5e91b3 >> 11
          const _0xe017c0 = 2047 & _0x5e91b3
          _0x5656c8 = Date.now() + 60 * _0xe017c0 * 1000
          let _0x4108dd = false
          if (_0x475187 < _0x258fb0.byteLength) {
            let _0x1cf61d = false
            const [_0x432e90, _0x352fbd] = _0x178fb4(),
              _0x59621a = _0x258fb0.getUint8(_0x475187++)
            for (let _0xb6d7c3 = 0; _0xb6d7c3 < _0x59621a; _0xb6d7c3++) {
              const _0x8df9c1 = _0x258fb0.getUint8(_0x475187++)
              _0x8df9c1 === _0x432e90 && (_0x4108dd = true)
              _0x37c0af('face', _0x8df9c1)
            }
            for (; _0x475187 < _0x258fb0.byteLength; ) {
              const _0x3e6af3 = _0x258fb0.getUint8(_0x475187++)
              _0x3e6af3 === _0x352fbd && (_0x1cf61d = true)
              _0x37c0af('body', _0x3e6af3)
            }
          }
          false || (localStorage.equipped_body_skin = -1)
          _0x4108dd || (localStorage.equipped_face_skin = -1)
        }
        _0x38da97(),
          _0xe591fc.classList.add('btn-disabled'),
          ('-1' == localStorage.equipped_face_skin &&
            '-1' == localStorage.equipped_body_skin) ||
            _0xe591fc.classList.remove('btn-disabled'),
          _0x4c0ef4(),
          _0x1e2762(),
          _0x4f623f.classList.remove('connecting-show'),
          _0x186185.classList.add('grid-show')
        break
      case 0:
        const _0x3a1f67 = _0xb4f9cb[_0x3dce21] || 'unknown'
        console.log('Kicked! (reason: ' + _0x3a1f67 + ')'),
          _0x24d1ed.setAttribute('stroke', 'reason: ' + _0x3a1f67),
          (_0x252781.style.display = ''),
          (_0x10ea98 = function () {})
        break
      case 1:
        _0x4c2f95 !== _0x3dce21 && _0x530c53(),
          5 == _0x258fb0.byteLength &&
            (_0x1cd091 = _0x258fb0.getUint32(_0x475187)),
          (_0x4c2f95 = localStorage.gamemode = _0x3dce21),
          _0x493cc2(),
          (_0x4355ad = _0x4c70cf = 1),
          (_0x5b52da = null),
          (_0x21109a = null),
          (_0x1f18f0 = Date.now()),
          (_0x314ee2 = 0),
          (_0x3ef6bf = null),
          _0x4f3f05.classList.remove('btn-disabled'),
          _0x186185.classList.remove('grid-show'),
          _0x5a875d.classList.add('game-show'),
          (_0x5784b8.style.display = 'none'),
          (_0x52bebe.length = 0),
          (_0x5cb559 = {}),
          (_0x481193 = 0),
          _0x47463e(_0x39ef23)
        break
      case 2:
        const _0x3b277c = 4 & _0x3dce21,
          _0x434c10 = 8 & _0x3dce21,
          _0x4647f4 = ((3 & _0x3dce21) << 2) | _0x258fb0.getUint8(_0x475187++),
          _0x5e0ab9 = { _0x5bfc76: true },
          _0x300def = Date.now()
        for (let _0x5df386 = 0; _0x5df386 < _0x4647f4; _0x5df386++) {
          const _0x5bfc76 = _0x258fb0.getUint32(_0x475187)
          _0x475187 += 4
          let _0x2643eb = _0x31c3e2.find(
            (_0x35de9f) => _0x35de9f.id === _0x5bfc76
          )
          const _0xe60ee6 =
              (_0x258fb0.getUint8(_0x475187++) / 255) * Math.PI * 2,
            _0x366774 = _0x258fb0.getUint8(_0x475187++),
            _0x3409c6 = _0x366774 >> 6,
            _0x29d2f8 = (63 & _0x366774) / 63
          if (_0x2643eb) {
            _0x2643eb.oldR = _0x2643eb.r
            const _0x39aa92 = _0x2643eb.segments[0]
            _0x39aa92.oldX = _0x39aa92.x
            _0x39aa92.oldY = _0x39aa92.y
            _0x39aa92.x += _0x258fb0.getInt8(_0x475187++)
            _0x39aa92.y += _0x258fb0.getInt8(_0x475187++)
            _0x39aa92.interpOldX = _0x39aa92.interpX
            _0x39aa92.interpOldY = _0x39aa92.interpY
            let _0x530890 = _0x258fb0.getInt8(_0x475187++)
            for (; _0x530890 < 0; ) {
              _0x2643eb.segments.pop()
              _0x530890++
            }
            _0x3f9782(_0x2643eb)
            const _0x3887e0 = _0x2643eb.segments[_0x2643eb.segments.length - 1]
            for (; _0x530890 > 0; ) {
              _0x2643eb.segments.push(Object.assign({}, _0x3887e0))
              _0x530890--
            }
            _0x2643eb.interpOldR = _0x2643eb.interpR
            _0x2643eb.r = _0xcd5ec6(_0x2643eb)
            _0x2643eb.oldDirX = _0x2643eb.dirX
            _0x2643eb.oldDirY = _0x2643eb.dirY
            _0x2643eb.newDirX = Math.cos(_0xe60ee6)
            _0x2643eb.newDirY = Math.sin(_0xe60ee6)
            _0x2643eb.updateTime = _0x300def
          } else {
            _0x2643eb = new _0x2561ae(_0x5bfc76, _0xe60ee6)
            _0x2643eb.faceSkin = _0x258fb0.getUint8(_0x475187++) - 1
            _0x2643eb.bodySkin = _0x258fb0.getUint8(_0x475187++) - 1
            _0x2643eb.energy = _0x29d2f8
            _0x5bfc76 == _0x1cd091 && (_0x194da0 = _0x2643eb)
            _0x31c3e2.push(_0x2643eb)
            const _0x5be4a5 = _0x258fb0.getUint16(_0x475187)
            _0x475187 += 2
            const _0x1609b4 = _0x258fb0.getUint16(_0x475187)
            _0x475187 += 2
            _0x2643eb.segments[0] = {
              x: _0x5be4a5,
              y: _0x1609b4,
              oldX: _0x5be4a5,
              oldY: _0x1609b4,
              interpOldX: _0x5be4a5,
              interpOldY: _0x1609b4,
              interpX: _0x5be4a5,
              interpY: _0x1609b4,
            }
            const _0x1b3eaf = _0x258fb0.getUint16(_0x475187)
            _0x475187 += 2
            for (let _0x5dd295 = 0; _0x5dd295 < _0x1b3eaf; _0x5dd295++) {
              let _0x520367 = _0x2643eb.segments[_0x5dd295]
              const _0x39871d = {
                x: _0x520367.x + _0x258fb0.getInt8(_0x475187++),
                y: _0x520367.y + _0x258fb0.getInt8(_0x475187++),
              }
              _0x39871d.oldX =
                _0x39871d.interpOldX =
                _0x39871d.interpX =
                  _0x39871d.x
              _0x39871d.oldY =
                _0x39871d.interpOldY =
                _0x39871d.interpY =
                  _0x39871d.y
              _0x2643eb.segments.push(_0x39871d)
            }
            _0x2643eb.nickname = _0x3c57f0()
            _0x244c5d[_0x2643eb.id] = _0x2643eb.nickname
            _0x194da0 === _0x2643eb &&
              ((_0x2ce067 = _0x5be4a5),
              (_0x273f21 = _0x1609b4),
              (_0x360982.name = _0x2643eb.nickname))
            _0x2643eb.r =
              _0x2643eb.interpOldR =
              _0x2643eb.interpR =
                _0xcd5ec6(_0x2643eb)
          }
          _0x2643eb.mood = _0x3409c6
          _0x2643eb.oldEnergy = _0x2643eb.iEnergy
          _0x29d2f8 < _0x2643eb.energy && (_0x2643eb.energyChangeCounter = 1)
          _0x2643eb.energy = _0x29d2f8
        }
        const _0x424cfa = _0x1ce1f3(_0x3ef6bf || _0x194da0)
        let _0x5460b3 = _0x258fb0.getUint8(_0x475187++)
        for (; _0x5460b3--; ) {
          const _0x583d10 = _0x258fb0.getUint8(_0x475187++),
            _0x187fbe = _0x424cfa.sx + (15 & _0x583d10),
            _0x19abad = _0x424cfa.sy + (_0x583d10 >> 4),
            _0x501844 = []
          for (let _0x375108 = 0; _0x375108 < 128; _0x375108++) {
            const _0x3f9e3f = _0x258fb0.getUint8(_0x475187++),
              _0x1fc2a7 = 15 & _0x3f9e3f,
              _0x42b99e = _0x3f9e3f >> 4
            _0x501844.push(_0x1fc2a7, _0x42b99e)
          }
          _0x52a128[64 * _0x19abad + _0x187fbe] = _0x501844
          _0x3b0a3d(_0x501844)
        }
        _0x194da0.segments[0]
        let _0x125ee1 = _0x258fb0.getUint8(_0x475187++)
        for (let _0x434216 = 0; _0x434216 < _0x125ee1; _0x434216++) {
          const _0x50f941 = _0x258fb0.getUint8(_0x475187++),
            _0x57af42 = _0x424cfa.sx + (15 & _0x50f941),
            _0x50afac = _0x424cfa.sy + (_0x50f941 >> 4),
            _0x5098f5 = _0x52a128[64 * _0x50afac + _0x57af42],
            _0x2b26c8 = _0x258fb0.getUint8(_0x475187++) + 1
          let _0x55213a = 0,
            _0x40b1aa = 0,
            _0x462cab = 0
          for (let _0x4e4e00 = 0; _0x4e4e00 < _0x2b26c8; _0x4e4e00++) {
            const _0x97c92 = _0x258fb0.getUint8(_0x475187 + _0x4e4e00),
              _0xa5cd1a = _0x5098f5[_0x97c92]
            0 == _0x40b1aa
              ? ((_0x55213a = _0x258fb0.getUint8(
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
                    ((_0x5c4c95.diggedLavaAt = _0x300def),
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
        const _0x21c0f4 = _0x258fb0.getUint16(_0x475187)
        ;(_0x475187 += 2),
          _0x202a66.setAttribute(
            'stroke',
            _0x21c0f4 + ' player' + (1 !== _0x21c0f4 ? 's' : '') + ' online'
          )
        const _0x27f1c2 = _0x52bebe.length,
          _0x49cd46 = _0x258fb0.getUint16(_0x475187)
        ;(_0x475187 += 2), (_0x16dd13 = 1023 & _0x49cd46)
        const _0x40458c = _0x49cd46 >> 11,
          _0x24cc2e = 1024 & _0x49cd46
        _0x26814d.setAttribute(
          'stroke',
          _0x16dd13 + ' worm' + (1 != _0x16dd13 ? 's' : '')
        )
        let _0x57a782 = -1
        if (
          (_0x3b277c && (_0x57a782 = _0x258fb0.getUint8(_0x475187++)),
          _0x224d6b)
        ) {
          let _0x20a913 = 0,
            _0x184f07 = 0
          if (_0x24cc2e) {
            const _0x173fa2 = _0x258fb0.getUint8(_0x475187++)
            _0x20a913 = _0x173fa2 >> 4
            _0x184f07 = 15 & _0x173fa2
          }
          const _0x1758fb = _0x40458c + _0x184f07,
            _0x47d080 = []
          let _0x4c8d5d = 0,
            _0x545516 = 0
          for (let _0x2b75ce = 0; _0x2b75ce < _0x1758fb; _0x2b75ce++) {
            0 == _0x545516
              ? ((_0x4c8d5d = _0x258fb0.getUint8(_0x475187++)),
                (_0x545516 = 1),
                _0x47d080.push(15 & _0x4c8d5d))
              : (_0x47d080.push(_0x4c8d5d >> 4), (_0x545516 = 0))
          }
          for (let _0x4f1cfd = 0; _0x4f1cfd < _0x40458c; _0x4f1cfd++) {
            const _0x85c987 = _0x47d080[_0x4f1cfd],
              _0x273cea = _0x552882[_0x85c987]
            _0x273cea.score = _0x40a543(_0x258fb0.getUint16(_0x475187))
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
            const _0x5925b4 = _0x40a543(_0x258fb0.getUint16(_0x475187))
            _0x475187 += 2
            _0x29e019(_0x3c57f0(), _0x5925b4)
          }
          _0x552882 = _0x552882.sort(function (_0x3aee0f, _0x3bc81b) {
            return _0x3bc81b.score - _0x3aee0f.score
          })
          _0x245d1c()
        } else {
          _0x552882.length = 0
          const _0x27494c = Math.min(10, _0x16dd13)
          for (let _0x7b83d9 = 0; _0x7b83d9 < _0x27494c; _0x7b83d9++) {
            const _0x44a8a0 = _0x40a543(_0x258fb0.getUint16(_0x475187))
            _0x475187 += 2
            _0x29e019(_0x3c57f0(), _0x44a8a0)
          }
          _0x245d1c()
          _0x224d6b = true
        }
        if (_0x3b277c) {
          const _0x8c931e = _0x552882[_0x57a782],
            _0x1f6f01 = _0x8c931e.lbItemEl
          _0x360982.score = _0x8c931e.score
          _0xaec281.insertBefore(_0x360982.lbItemEl, _0x1f6f01)
          _0x1f6f01.remove()
          _0x552882[_0x57a782] = _0x360982
        }
        let _0x32e4ab = false,
          _0xfd618e = Math.floor((_0x258fb0.byteLength - _0x475187) / 4)
        _0x434c10 && _0xfd618e--
        for (let _0x54ea08 = 0; _0x54ea08 < _0xfd618e; _0x54ea08++) {
          const _0x347b0b = _0x258fb0.getUint32(_0x475187)
          _0x475187 += 4
          const _0x1b4e9e = _0x31c3e2.findIndex(
              (_0x2052fc) => _0x2052fc.id === _0x347b0b
            ),
            _0x12d663 = _0x31c3e2[_0x1b4e9e]
          _0x12d663.isDead = true
          _0x12d663.diedAt = _0x300def
          _0x12d663.id = -1
          _0x12d663 === _0x194da0 &&
            ((_0x32e4ab = true),
            (_0x360982.score = 0),
            (_0x360982.percent = 0),
            _0x8d0f50(),
            _0x47463e(false))
        }
        let _0x1d4840 = _0x258fb0.byteLength - _0x475187
        if (_0x32e4ab) {
          let _0x56c22b = -1
          if (_0x434c10) {
            const _0x590228 = _0x258fb0.getUint32(_0x475187)
            _0x475187 += 4
            _0x3ef6bf = _0x31c3e2.find(
              (_0x4cf041) => _0x4cf041.id === _0x590228
            )
            console.log('killer!!!!', _0x3ef6bf)
            _0x2b477b.setAttribute(
              'stroke',
              _0x244c5d[_0x590228] || 'An unnamed worm'
            )
            _0x1d4840 -= 4
          } else {
            _0x56c22b = _0x258fb0.getUint8(_0x475187++)
            0 === _0x56c22b
              ? (console.log('walls'),
                _0x2b477b.setAttribute('stroke', 'Walls'))
              : console.log('giveup')
            _0x1d4840--
          }
          _0x2b477b.style.visibility =
            _0x47102f.style.visibility =
            _0x2b477b.previousElementSibling.style.visibility =
              1 === _0x56c22b ? 'hidden' : ''
          1 === _0x1d4840
            ? (_0x314ee2 = _0x258fb0.getUint8(_0x475187++))
            : console.log('no kills')
          _0x5784b8.style.display = ''
          _0x4f3f05.classList.add('btn-disabled')
          _0x30dcaf()
          _0x4c0ef4()
          _0x1e2762()
          ;(function () {
            for (; _0x5e494.children.length > 1; ) {
              _0x5e494.children[1].remove()
            }
            const _0x4fc6a2 = [['Max points', _0x52bbe6(_0x481193)]]
            _0xb7f535 > 0 &&
              _0x4fc6a2.push(['Gold digged', _0xb7f535.toLocaleString('en-US')])
            _0x314ee2 > 0 &&
              _0x4fc6a2.push([
                'Players destroyed',
                255 === _0x314ee2 ? _0x314ee2 - 1 + '+' : _0x314ee2,
              ])
            _0x4fc6a2.push(['Time alive', _0x3b7f62(Date.now() - _0x1f18f0)])
            for (let _0x4b790d = 0; _0x4b790d < _0x4fc6a2.length; _0x4b790d++) {
              const [_0x2ec999, _0xe8c1e3] = _0x4fc6a2[_0x4b790d],
                _0x9c859c = document.createElement('span')
              _0x9c859c.setAttribute('stroke', _0x2ec999 + ': ' + _0xe8c1e3)
              _0x5e494.appendChild(_0x9c859c)
            }
          })()
        } else {
          if (!_0x194da0.isDead) {
            if (_0x1d4840 % 2 != 0) {
              const _0x2d2228 = _0x258fb0.getUint8(_0x475187++)
              _0x5ddf1a(_0x2d2228)
              _0x27c993 += _0x2d2228
              _0xb7f535 += _0x2d2228
              _0x1d4840--
            }
            if (2 === _0x1d4840) {
              const _0x11ea0e = _0x40a543(_0x258fb0.getUint16(_0x475187))
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
    _0x10ea98(ws.url)
  }
  let _0x57d1e4 = 0
  function _0x3fe969(_0x239abe) {
    if (ws && ws.readyState === ws.OPEN) {
      if (((_0x36e069 += _0x239abe.byteLength), _0x1175ff)) {
        const _0x5c493d = new Uint8Array(_0x239abe.buffer)
        for (let _0x481e64 = 0; _0x481e64 < _0x5c493d.length; _0x481e64++) {
          _0x5c493d[_0x481e64] ^=
            _0x1175ff[(_0x57d1e4 + _0x481e64) % _0x1175ff.length]
        }
      }
      _0x57d1e4 = (_0x57d1e4 + 1) % 1000
      _0x1175ff = new Uint8Array(_0x239abe.buffer)
      ws.send(_0x239abe)
    }
  }
  const _0x4fd5e0 = 2 * Math.PI
  function _0x2ebfb5(_0x5215ee) {
    if (!_0x194da0 || _0x194da0.isDead) {
      return
    }
    ;(_0x5215ee %= _0x4fd5e0) < 0 && (_0x5215ee += _0x4fd5e0)
    _0x5215ee /= _0x4fd5e0
    _0x5215ee = Math[0.75 === _0x5215ee ? 'ceil' : 'floor'](4095 * _0x5215ee)
    const _0x294add = new DataView(new ArrayBuffer(2))
    _0x294add.setUint8(0, _0x4822ce(1, _0x5215ee >> 8))
    _0x294add.setUint8(1, _0x5215ee)
    _0x3fe969(_0x294add)
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
  _0x4f5add.onmousemove = function (_0x3593ee) {
    _0x7d7288.checked ||
      _0x2ebfb5(
        Math.atan2(
          _0x3593ee.clientY - window.innerHeight / 2,
          _0x3593ee.clientX - window.innerWidth / 2
        )
      )
  }
  const _0x49fae4 = document.querySelector('.angry-btn'),
    _0x3869cb = document.querySelector('.sad-btn'),
    _0x30b4cf = document.querySelector('.joystick'),
    _0x53aa90 = document.querySelector('.joystick-knob')
  let _0x889b55,
    _0x4f0b52,
    _0x2d3f53 = null,
    _0x5c950a = null,
    _0x25c66d = null
  if (_0x39ef23) {
    let _0x579018, _0x1b77d0
    function _0x543788() {
      _0x30b4cf.style.left = _0x579018 + 'px'
      _0x30b4cf.style.top = _0x1b77d0 + 'px'
    }
    function _0x30fd0b(_0x1f2f66) {
      return [_0x1f2f66.clientX / _0x19da0e, _0x1f2f66.clientY / _0x19da0e]
    }
    _0x4f5add.onmousemove = null
    document.ontouchstart = function (_0x588a88) {
      const _0x35be70 = _0x588a88.changedTouches[0]
      let _0x2f1c42 = _0x35be70.identifier
      function _0x545ee7(_0x522cb8) {
        return (
          _0x588a88.target === _0x522cb8 ||
          _0x588a88.target.parentNode === _0x522cb8
        )
      }
      _0x588a88.target === _0x4f5add
        ? null === _0x25c66d &&
          ((_0x53aa90.style.width = _0x53aa90.style.transform = '0'),
          (_0x30b4cf.style.display = ''),
          ([_0x579018, _0x1b77d0] = _0x30fd0b(_0x35be70)),
          _0x543788(),
          (_0x25c66d = _0x2f1c42))
        : _0x545ee7(_0x49fae4)
        ? null === _0x5c950a &&
          (document.onmousedown({ button: 0 }), (_0x5c950a = _0x2f1c42))
        : _0x545ee7(_0x3869cb) &&
          null === _0x2d3f53 &&
          (document.onmousedown({ button: 2 }), (_0x2d3f53 = _0x2f1c42))
    }
    document.ontouchmove = function (_0xaf826d) {
      const _0x5dc1cf = _0xaf826d.changedTouches[0]
      if (_0x5dc1cf.identifier === _0x25c66d) {
        const [_0x487c8c, _0x4436e6] = _0x30fd0b(_0x5dc1cf),
          _0x35b1fa = _0x487c8c - _0x579018,
          _0x323f29 = _0x4436e6 - _0x1b77d0,
          _0x35fef2 = _0x30b4cf.getBoundingClientRect()
        let _0x59f28d = Math.hypot(_0x35b1fa, _0x323f29)
        const _0x1a37a1 = _0x35fef2.width / 2 / _0x19da0e
        if (_0x59f28d > _0x1a37a1) {
          if (!_0xce3c49.checked) {
            const _0x567afb = _0x59f28d - _0x1a37a1
            _0x579018 += (_0x567afb * _0x35b1fa) / _0x59f28d
            _0x1b77d0 += (_0x567afb * _0x323f29) / _0x59f28d
            _0x543788()
          }
          _0x59f28d = _0x1a37a1
        }
        const _0x46bd28 = Math.atan2(_0x323f29, _0x35b1fa)
        _0x2ebfb5(_0x46bd28)
        _0x53aa90.style.transform = 'rotate(' + _0x46bd28 + 'rad)'
        _0x53aa90.style.width = _0x59f28d + 'px'
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
      const _0x26048a = _0x35cd95.changedTouches[0].identifier
      _0x26048a === _0x889b55
        ? ((_0x889b55 = null), (_0x2710ba = null !== _0x4f0b52 ? 1 : 0))
        : _0x26048a === _0x4f0b52 &&
          ((_0x4f0b52 = null), (_0x2710ba = null !== _0x889b55 ? 2 : 0))
      _0x26048a === _0x5c950a
        ? ((_0x5c950a = null), document.onmouseup({ button: 0 }))
        : _0x26048a === _0x2d3f53
        ? ((_0x2d3f53 = null), document.onmouseup({ button: 2 }))
        : _0x26048a === _0x25c66d &&
          ((_0x30b4cf.style.display = 'none'), (_0x25c66d = null))
    }
  }
  function _0x382b09() {
    let _0x2ac787
    _0x2ac787 =
      _0x5cb559[0] || _0x15b23c.Space
        ? 1
        : _0x5cb559[2] || _0x15b23c.ShiftLeft || _0x15b23c.ShiftRight
        ? 2
        : 0
    _0x2710ba = _0x2ac787
    _0x194da0 &&
      (function (_0x21b545) {
        const _0x35a11e = new Uint8Array(1)
        _0x35a11e[0] = _0x4822ce(2, _0x21b545)
        _0x3fe969(_0x35a11e)
      })(_0x2ac787)
  }
  function _0x3b0a3d(_0x54664b) {
    const _0x174f56 = document.createElement('canvas')
    _0x174f56.width = _0x174f56.height = 16
    const _0x59242e = _0x174f56.getContext('2d'),
      _0x337979 = _0x59242e.createImageData(16, 16)
    for (let _0x945b3d = 0; _0x945b3d < _0x54664b.length; _0x945b3d++) {
      if (_0x54664b[_0x945b3d] === _0x21ff22.empty) {
        continue
      }
      const _0x2880f6 = _0x406b9c(_0x54664b[_0x945b3d]),
        _0xc59b21 = 4 * _0x945b3d
      _0x337979.data[_0xc59b21] = _0x2880f6[0]
      _0x337979.data[_0xc59b21 + 1] = _0x2880f6[1]
      _0x337979.data[_0xc59b21 + 2] = _0x2880f6[2]
      _0x337979.data[_0xc59b21 + 3] = 255
    }
    _0x59242e.putImageData(_0x337979, 0, 0)
    _0x54664b.canvas = _0x174f56
    _0x54664b.ctx = _0x59242e
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
  document.onmousewheel = function (_0x171f9f) {
    _0x171f9f.deltaY < 0 ? (_0x4355ad *= 1.1) : (_0x4355ad *= 0.9)
    _0x4355ad = Math.max(1, Math.min(5, _0x4355ad))
  }
  let _0x2e200c = Date.now()
  const _0x38936e = [],
    _0x314f92 = (function (_0x596778 = 80) {
      const _0x3278eb = _0x596778 / 2,
        _0x38cd0c = document.createElement('canvas')
      _0x38cd0c.width = _0x38cd0c.height = _0x596778
      const _0x1c1583 = _0x38cd0c.getContext('2d')
      return (
        (_0x1c1583.strokeStyle = 'rgba(0,0,0,0.07)'),
        _0x1c1583.beginPath(),
        _0x1c1583.moveTo(_0x3278eb, 0),
        _0x1c1583.lineTo(_0x3278eb, _0x596778),
        _0x1c1583.moveTo(0, _0x3278eb),
        _0x1c1583.lineTo(_0x596778, _0x3278eb),
        (_0x1c1583.lineWidth = 2),
        _0x1c1583.stroke(),
        _0x1c1583.createPattern(_0x38cd0c, 'repeat')
      )
    })()
  function _0x40d72d() {
    let _0x54619c = false
    for (let _0x42100c = 0; _0x42100c < _0x552882.length; _0x42100c++) {
      const _0x23483a = _0x552882[_0x42100c]
      _0x23483a.update()
      _0x23483a.isMe && (_0x54619c = true)
    }
    if ((_0x54619c || _0x360982.update(), _0x48a579)) {
      const _0x3c91bd = Date.now() / 80,
        _0x298c51 = 7 * Math.sin(_0x3c91bd),
        _0x2282ef = 0.15 * Math.abs(Math.sin(_0x3c91bd / 4)) + 0.85
      _0x5d61a7.style.transform =
        'rotate(' + _0x298c51 + 'deg) scale(' + _0x2282ef + ')'
    } else {
      _0x5d61a7.style.transform = 'none'
    }
    !(function () {
      let _0x4a097f
      if (_0x367af4 >= _0x36e559.length) {
        _0x4a097f = 'You have claimed all your rewards.'
      } else {
        const _0x4edb18 = _0x5656c8 - Date.now()
        _0x4edb18 < 0
          ? ((_0x4a097f = 'Available every ' + _0x179918(86400000)),
            _0x193b62.rewardSent || _0x193b62.classList.remove('btn-disabled'))
          : (_0x4a097f = 'Available again in ' + _0x179918(_0x4edb18))
      }
      _0x5e35aa.getAttribute('stroke') !== _0x4a097f &&
        _0x5e35aa.setAttribute('stroke', _0x4a097f)
    })()
    const [_0x10b6cb, _0x536363] = _0x178fb4()
    _0x54c5be.faceSkin = _0x10b6cb
    _0x54c5be.bodySkin = _0x536363
    const _0x1c1e85 = Date.now()
    _0xd4436e = (_0x1c1e85 - _0x2e200c) / 1000
    _0x2e200c = _0x1c1e85
    _0x57cea4 -= _0xd4436e / 0.3
    _0x57cea4 = Math.max(0, _0x57cea4)
    _0x342747.fillStyle = '#522e00'
    _0x342747.fillRect(0, 0, _0x4f5add.width, _0x4f5add.height)
    for (let _0x1bdee5 = 0; _0x1bdee5 < _0x31c3e2.length; _0x1bdee5++) {
      _0x31c3e2[_0x1bdee5].interpolate()
    }
    if (((_0x4c70cf += 0.3 * (_0x4355ad - _0x4c70cf)), _0x194da0)) {
      const _0x27d19f = _0x3ef6bf || _0x194da0,
        {
          sx: _0x1a82c7,
          sy: _0x1cbab1,
          ex: _0xaa7be2,
          ey: _0x4ba43f,
          minX: _0x1acd3c,
          minY: _0x1886b6,
          maxX: _0x174975,
          maxY: _0x4037c4,
          viewWidth: _0x34ddd7,
          viewHeight: _0x45e468,
        } = _0x1ce1f3(_0x27d19f, true)
      null === _0x5b52da
        ? ((_0x5b52da = _0x34ddd7), (_0x21109a = _0x45e468))
        : ((_0x5b52da += 0.1 * (_0x34ddd7 - _0x5b52da)),
          (_0x21109a += 0.1 * (_0x45e468 - _0x21109a)))
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
        _0x342747.translate(
          _0x4f5add.width / 2 + _0x10315f * Math.cos(_0x271443),
          _0x4f5add.height / 2 + _0x10315f * Math.sin(_0x271443)
        )
        const _0x33107f = Math.max(
          _0x4f5add.width / _0x5b52da,
          _0x4f5add.height / _0x21109a
        )
        _0x342747.scale(_0x33107f, _0x33107f)
        _0x342747.translate(-_0x15ab1a, -_0x2118b6)
      }
      _0x342747.save()
      _0x342747.beginPath()
      _0x342747.rect(0, 0, _0x4f5add.width, _0x4f5add.height)
      _0x458a77()
      _0x342747.fillStyle = _0x314f92
      _0x342747.fill()
      _0x342747.imageSmoothingEnabled = false
      for (
        let _0x58ede8 = _0x1cbab1 - 1;
        _0x58ede8 <= _0x4ba43f + 1;
        _0x58ede8++
      ) {
        for (
          let _0x686203 = _0x1a82c7 - 1;
          _0x686203 <= _0xaa7be2 + 1;
          _0x686203++
        ) {
          const _0x5ca2d0 = 480 * _0x686203,
            _0x898c36 = 480 * _0x58ede8,
            _0x179d9b = _0x52a128[64 * _0x58ede8 + _0x686203]
          _0x179d9b &&
            _0x342747.drawImage(
              _0x179d9b.canvas,
              _0x5ca2d0,
              _0x898c36,
              480,
              480
            )
        }
      }
      _0x27d19f && _0x1ce1f3(_0x27d19f)
      for (let _0x2ea2bf = _0x31c3e2.length - 1; _0x2ea2bf >= 0; _0x2ea2bf--) {
        _0x31c3e2[_0x2ea2bf].draw(_0x2ea2bf, _0x342747)
      }
      _0x342747.lineWidth = 1
      _0x342747.beginPath()
      _0x342747.rect(0, 0, 30720, 30720)
      _0x342747.restore()
      _0x342747.rect(0, 0, _0x4f5add.width, _0x4f5add.height)
      _0x342747.fillStyle = '#222222'
      _0x342747.fill('evenodd')
      _0x312405 && _0x312405()
      _0x342747.save()
      _0x458a77()
      for (let _0x25988d = _0x551ff8.length - 1; _0x25988d >= 0; _0x25988d--) {
        const _0x5a3754 = _0x551ff8[_0x25988d],
          _0x48e5c5 = (_0x1c1e85 - _0x5a3754.time) / 600
        if (_0x48e5c5 >= 1) {
          _0x551ff8.splice(_0x25988d, 1)
        } else {
          _0x342747.save()
          _0x342747.translate(_0x5a3754.x, _0x5a3754.y)
          _0x342747.rotate(_0x5a3754.dir * _0x48e5c5 * Math.PI)
          const _0x417678 = 30 * (1 + 2 * _0x48e5c5)
          _0x342747.fillStyle = _0x5a3754.color
          _0x342747.globalAlpha = 0.75 * (1 - _0x48e5c5)
          _0x342747.fillRect(0, 0, _0x417678, _0x417678)
          _0x342747.restore()
        }
      }
      for (let _0x5e5f5a = 0; _0x5e5f5a < _0x31c3e2.length; _0x5e5f5a++) {
        _0x31c3e2[_0x5e5f5a].drawEnergyAndNickname(_0x342747)
      }
      _0x342747.restore()
    }
    for (let _0x3ce783 = 0; _0x3ce783 < _0x553cf3.length; _0x3ce783++) {
      _0x553cf3[_0x3ce783].render()
    }
    if (_0x38936e.length > 0) {
      _0x1ca043.style.display = ''
      _0xf6f1ed.clearRect(0, 0, _0x1ca043.width, _0x1ca043.height)
      const _0x142bbc = _0x1ca043.height / 657
      _0xf6f1ed.save()
      _0xf6f1ed.translate(_0x1ca043.width / 2, 0)
      _0xf6f1ed.scale(_0x142bbc, _0x142bbc)
      _0xf6f1ed.beginPath()
      for (let _0x499db0 = _0x38936e.length - 1; _0x499db0 >= 0; _0x499db0--) {
        const _0x28fd8c = _0x38936e[_0x499db0]
        _0x28fd8c.spawnTime > 0
          ? (_0x28fd8c.spawnTime -= _0xd4436e)
          : ((_0x28fd8c.vy += 8 * _0xd4436e),
            (_0x28fd8c.y += _0x28fd8c.vy * _0xd4436e * 80),
            (_0x28fd8c.x += _0x28fd8c.vx * _0xd4436e * 100),
            (_0x28fd8c.angle += _0x28fd8c.angleSpeed),
            _0x28fd8c.y > 657 &&
              (_0x28fd8c.bounced
                ? _0x28fd8c.vy > 0 && _0x38936e.splice(_0x499db0, 1)
                : ((_0x28fd8c.vy *= -(0.2 * Math.random() + 0.55)),
                  (_0x28fd8c.bounced = true))),
            _0xf6f1ed.save(),
            _0xf6f1ed.translate(_0x28fd8c.x, _0x28fd8c.y),
            _0xf6f1ed.rotate(_0x28fd8c.angle),
            _0xf6f1ed.moveTo(10, 0),
            _0xf6f1ed.ellipse(0, 0, 10, 6, 0, 0, 2 * Math.PI),
            _0xf6f1ed.restore())
      }
      _0xf6f1ed.lineWidth = 6
      _0xf6f1ed.strokeStyle = '#a7a217'
      _0xf6f1ed.stroke()
      _0xf6f1ed.fillStyle = '#e9e21c'
      _0xf6f1ed.fill()
      _0xf6f1ed.restore()
    } else {
      _0x1ca043.style.display = 'none'
    }
    window.requestAnimationFrame(_0x40d72d)
  }
  const _0x13f0fd = document.querySelectorAll('.coming-soon')
  for (let _0x12b792 = 0; _0x12b792 < _0x13f0fd.length; _0x12b792++) {
    const _0x853b1f = _0x13f0fd[_0x12b792]
    _0x853b1f.onclick = function () {}
    _0x853b1f.classList.add('btn-disabled')
    _0x853b1f.style.pointerEvents = 'all'
    _0x853b1f.style.cursor = 'default'
    _0x853b1f.setAttribute('tooltip', 'Coming soon')
  }
  const _0x43203c = _0xb914f5.querySelector('.dialog-content')
  _0x43203c.innerHTML = ''
  ;(function () {
    let _0x78364d = ''
    for (let _0x1aa2bb = 0; _0x1aa2bb < _0x33b220.length; _0x1aa2bb++) {
      const { title: _0x45edd2, content: _0x459fb8 } = _0x33b220[_0x1aa2bb]
      _0x78364d +=
        '<span class="log-title" stroke="' +
        _0x45edd2 +
        '"></span><div class="log-content">'
      _0x459fb8.forEach((_0x5e4131) => {
        _0x78364d += '<div stroke="- ' + _0x5e4131 + '"></div>'
      })
      _0x78364d += '</div><div class="log-line"></div>'
    }
    const _0x1a51f4 = localStorage.changelog
    _0x48a579 = void 0 !== _0x1a51f4 && parseInt(_0x1a51f4) < 28
    localStorage.changelog = 28
    _0x43203c.innerHTML = _0x78364d
  })()
  document.querySelector('.tabs').children[2].style.display = 'none'
})()
