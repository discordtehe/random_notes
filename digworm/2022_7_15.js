;(() => {
  'use strict'
  function _0x119776(_0x34beec, _0x53f47a) {
    return (_0x34beec << 4) | _0x53f47a
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
  for (let _0x5293de in skins) {
    const _0x41a8e9 = skins[_0x5293de]
    for (let _0x39bda4 = 0; _0x39bda4 < _0x41a8e9.length; _0x39bda4++) {
      _0x41a8e9[_0x39bda4].id = _0x39bda4
    }
  }
  function _0x3a7e1a(_0x2158a8, _0x55f8d7) {
    const { viewWidth: _0x5f341e, viewHeight: _0x5e7ef7 } = (function (
        _0x162a00
      ) {
        _0x162a00 -= 30
        _0x162a00 *= 50
        const _0xa2e2bb = 3000 + parseInt(_0x162a00)
        return {
          viewWidth: _0xa2e2bb,
          viewHeight: 0.5 * _0xa2e2bb,
        }
      })(_0x55f8d7 ? _0x2158a8.interpR : _0x2158a8.r),
      _0x3b717d = _0x2158a8.segments[0],
      _0x66b6db = _0x3b717d.x - _0x5f341e / 2,
      _0x53fe63 = _0x3b717d.y - _0x5e7ef7 / 2,
      _0x4b8c7e = _0x3b717d.x + _0x5f341e / 2,
      _0x533250 = _0x3b717d.y + _0x5e7ef7 / 2
    return {
      minX: _0x66b6db,
      minY: _0x53fe63,
      maxX: _0x4b8c7e,
      maxY: _0x533250,
      sx: Math.max(0, Math.floor(_0x66b6db / 480)),
      sy: Math.max(0, Math.floor(_0x53fe63 / 480)),
      ex: Math.min(31, Math.floor(_0x4b8c7e / 480)),
      ey: Math.min(31, Math.floor(_0x533250 / 480)),
      viewWidth: _0x5f341e,
      viewHeight: _0x5e7ef7,
    }
  }
  function _0xa94d2e(_0x34decb) {
    switch (_0x34decb) {
      case 1: //dirt
        return [116, 66, 0]
      case _0x56432a.lava:
        return [166, 25, 6]
      case _0x56432a.diamond:
        return [49, 165, 158]
      case _0x56432a.gold:
        return [165, 158, 21]
      case _0x56432a.uranium:
        return [50, 164, 48]
      case _0x56432a.quartz:
        return [255, 255, 255]
      case _0x56432a.bedrock:
        return [10, 10, 10]
      case _0x56432a.gravestone:
        return [90, 90, 90]
    }
  }
  function _0x2be493(_0x4e2cce, _0x4a4035, _0xe0c468, _0x552208) {
    const _0x156a77 = Math.max(
        Math.min((_0x4e2cce + 1) * 30, _0x552208.x),
        _0x4e2cce * 30
      ),
      _0x2ff968 = Math.max(
        Math.min((_0x4a4035 + 1) * 30, _0x552208.y),
        _0x4a4035 * 30
      ),
      _0x4a044d = _0x156a77 - _0x552208.x,
      _0x28e192 = _0x2ff968 - _0x552208.y
    let _0x4d4283 = Math.hypot(_0x4a044d, _0x28e192)
    return (
      _0x4d4283 <= _0xe0c468 &&
      (0 == _0x4d4283 && (_0x4d4283 = 1),
      {
        x: _0x4a044d / _0x4d4283,
        y: _0x28e192 / _0x4d4283,
      })
    )
  }
  function _0x12e33e(_0x3c7256) {
    return parseInt(
      50 * Math.sqrt(Math.min(1, (_0x3c7256.segments.length - 5) / 1000)) + 30
    )
  }
  function _0x1e89b2(_0x420da4) {
    const _0x5b091c = _0x420da4 >> 2
    switch (3 & _0x420da4) {
      case 0:
        return _0x5b091c / 10
      case 1:
        return 100 * _0x5b091c
      case 2:
        return 10000 * _0x5b091c
    }
  }
  function _0x132df4(_0x4990e1) {
    return (
      !(!_0x4990e1 || 36 !== _0x4990e1.length) &&
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
        _0x4990e1
      )
    )
  }
  const _0xa0938e = [40, 45, 50, 55, 60, 65, 70],
    _0x473602 = [
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
    _0x175baa = document.getElementById('enable3D')
  _0x5bf739(_0x175baa, 'enable_3d')
  const _0x5a2504 = document.getElementById('enableGlow')
  _0x5bf739(_0x5a2504, 'enable_glow')
  const _0x1dcf32 = document.getElementById('highRes')
  let _0x54af19
  _0x5bf739(_0x1dcf32, 'high_res')
  try {
    _0x54af19 = (function () {
      const _0x5cbfd7 = document.createElement('canvas'),
        _0x9977d8 =
          _0x5cbfd7.getContext('webgl', _0x33d11b) ||
          _0x5cbfd7.getContext('experimental-webgl', _0x33d11b),
        _0xe16dc1 = ['gold', 'uranium', 'diamond', 'lava']
      let _0x1c684f = ''
      for (let _0x475fc2 = 0; _0x475fc2 < _0xe16dc1.length; _0x475fc2++) {
        _0x1c684f +=
          'distance(vec3(' +
          _0xa94d2e(_0x56432a[_0xe16dc1[_0x475fc2]])
            .map((_0x4b03b3) => _0x4b03b3 / 255)
            .join(',') +
          '),t.rgb)<0.1'
        _0x475fc2 !== _0xe16dc1.length - 1 && (_0x1c684f += '||')
      }
      const _0x587920 = (function (_0x577c8d, _0x49f002) {
        const _0x43a1a4 = _0x5e6248('vertex', _0x577c8d),
          _0x245bee = _0x5e6248('fragment', _0x49f002),
          _0x3cfb46 = _0x9977d8.createProgram()
        return (
          _0x9977d8.attachShader(_0x3cfb46, _0x43a1a4),
          _0x9977d8.attachShader(_0x3cfb46, _0x245bee),
          _0x9977d8.linkProgram(_0x3cfb46),
          _0x9977d8.getProgramParameter(_0x3cfb46, _0x9977d8.LINK_STATUS) ||
            console.log(
              'Error linking program. ' + _0x9977d8.getProgramInfoLog(_0x3cfb46)
            ),
          _0x3cfb46
        )
      })(
        '\n\tattribute vec2 pos;\n\tvarying vec2 vPos;\n\tvoid main() {\n\t\tvPos=pos;\n\t\tgl_Position=vec4(pos,0.0,1.0);\n\t}\n\t',
        '\n\tprecision mediump float;\n\tuniform sampler2D tex;\n\tuniform bool u3d;\n\tuniform bool uGlow;\n\tuniform float uTime;\n\tuniform vec2 blurSize;\n\n\tvarying vec2 vPos;\n\n\tconst vec3 groundColor = vec3(0.32,0.18,0.0);\n\tconst int STEPS=10;\n\n\tvec4 getColor(vec2 p){\n\t\tvec4 t=texture2D(tex,p);\n\t\tif(' +
          _0x1c684f +
          '){\n\t\t\treturn t;\n\t\t}\n\t\treturn vec4(0.0);\n\t}\n\n\tvoid main(){\n\t\tvec4 a;\n\t\tvec4 sum;\n\t\tvec2 uv=vPos*0.5+0.5;\n\t\tif(uGlow){\n\t\t\tsum += getColor(vec2(uv.x - 4.0*blurSize.x, uv.y)) * 0.05;\n\t\t\tsum += getColor(vec2(uv.x - 3.0*blurSize.x, uv.y)) * 0.09;\n\t\t\tsum += getColor(vec2(uv.x - 2.0*blurSize.x, uv.y)) * 0.12;\n\t\t\tsum += getColor(vec2(uv.x - blurSize.x, uv.y)) * 0.15;\n\t\t\tsum += getColor(vec2(uv.x, uv.y)) * 0.16;\n\t\t\tsum += getColor(vec2(uv.x + blurSize.x, uv.y)) * 0.15;\n\t\t\tsum += getColor(vec2(uv.x + 2.0*blurSize.x, uv.y)) * 0.12;\n\t\t\tsum += getColor(vec2(uv.x + 3.0*blurSize.x, uv.y)) * 0.09;\n\t\t\tsum += getColor(vec2(uv.x + 4.0*blurSize.x, uv.y)) * 0.05;\n\n\t\t\t//y\n\t\t\tsum += getColor(vec2(uv.x, uv.y - 4.0*blurSize.y)) * 0.05;\n\t\t\tsum += getColor(vec2(uv.x, uv.y - 3.0*blurSize.y)) * 0.09;\n\t\t\tsum += getColor(vec2(uv.x, uv.y - 2.0*blurSize.y)) * 0.12;\n\t\t\tsum += getColor(vec2(uv.x, uv.y - blurSize.y)) * 0.15;\n\t\t\tsum += getColor(vec2(uv.x, uv.y)) * 0.16;\n\t\t\tsum += getColor(vec2(uv.x, uv.y + blurSize.y)) * 0.15;\n\t\t\tsum += getColor(vec2(uv.x, uv.y + 2.0*blurSize.y)) * 0.12;\n\t\t\tsum += getColor(vec2(uv.x, uv.y + 3.0*blurSize.y)) * 0.09;\n\t\t\tsum += getColor(vec2(uv.x, uv.y + 4.0*blurSize.y)) * 0.05;\n\t\t}\n\t\tif(u3d){\n\t\t\tfor (int i=0;i<=STEPS;i++) {\n\t\t\t\tfloat s=(float(i)/float(STEPS));\n\t\t\t\tvec2 p = vPos*(1.0+0.15*s);\n\t\t\t\tvec4 b = texture2D(tex, p*0.5+0.5);\n\t\t\t\tif (length(b.rgb-groundColor)<0.1) {\n\t\t\t\t\tif(i!=STEPS) {\n\t\t\t\t\t\tb.a = 0.0;\n\t\t\t\t\t}\n\t\t\t\t} else if(i!=0) {\n\t\t\t\t\tb.rgb=groundColor*0.8;\n\t\t\t\t}\n\t\t\t\ta.rgb = a.rgb*a.a + b.rgb*b.a*(1.0-a.a);\n\t\t\t\ta.a = a.a+b.a * (1.0-a.a);\n\t\t\t}\n\t\t}\n\t\tgl_FragColor = (u3d?a:texture2D(tex,uv)) + sum*(sin(uTime)*0.5+1.5);\n\t}\n\t'
      )
      _0x9977d8.useProgram(_0x587920)
      _0x9977d8.bindBuffer(_0x9977d8.ARRAY_BUFFER, _0x9977d8.createBuffer())
      _0x9977d8.bufferData(
        _0x9977d8.ARRAY_BUFFER,
        new Float32Array([-1, 1, -1, -1, 1, -1, -1, 1, 1, -1, 1, 1]),
        _0x9977d8.STATIC_DRAW
      )
      _0x9977d8.enableVertexAttribArray(0)
      _0x9977d8.vertexAttribPointer(0, 2, _0x9977d8.FLOAT, false, 0, 0)
      _0x9977d8.activeTexture(_0x9977d8.TEXTURE0)
      _0x9977d8.bindTexture(_0x9977d8.TEXTURE_2D, _0x9977d8.createTexture())
      _0x9977d8.texParameteri(
        _0x9977d8.TEXTURE_2D,
        _0x9977d8.TEXTURE_WRAP_S,
        _0x9977d8.CLAMP_TO_EDGE
      )
      _0x9977d8.texParameteri(
        _0x9977d8.TEXTURE_2D,
        _0x9977d8.TEXTURE_WRAP_T,
        _0x9977d8.CLAMP_TO_EDGE
      )
      _0x9977d8.texParameteri(
        _0x9977d8.TEXTURE_2D,
        _0x9977d8.TEXTURE_MIN_FILTER,
        _0x9977d8.NEAREST
      )
      _0x9977d8.texParameteri(
        _0x9977d8.TEXTURE_2D,
        _0x9977d8.TEXTURE_MAG_FILTER,
        _0x9977d8.NEAREST
      )
      _0x9977d8.uniform1i(_0x9977d8.getUniformLocation(_0x587920, 'tex'), 0)
      const _0x5240f4 = _0x9977d8.getUniformLocation(_0x587920, 'u3d'),
        _0xb98863 = _0x9977d8.getUniformLocation(_0x587920, 'uGlow'),
        _0x2bc923 = _0x9977d8.getUniformLocation(_0x587920, 'uTime'),
        _0x5cdbf0 = _0x9977d8.getUniformLocation(_0x587920, 'blurSize')
      function _0x5e6248(_0xf35c3d, _0x425d97) {
        const _0x3eaeaf = _0x9977d8.createShader(
          'vertex' == _0xf35c3d
            ? _0x9977d8.VERTEX_SHADER
            : _0x9977d8.FRAGMENT_SHADER
        )
        return (
          _0x9977d8.shaderSource(_0x3eaeaf, _0x425d97),
          _0x9977d8.compileShader(_0x3eaeaf),
          _0x9977d8.getShaderParameter(_0x3eaeaf, _0x9977d8.COMPILE_STATUS) ||
            console.log(
              'Error compiling ' +
                _0xf35c3d +
                ' shader. ' +
                _0x9977d8.getShaderInfoLog(_0x3eaeaf)
            ),
          _0x3eaeaf
        )
      }
      return function () {
        ;(_0x175baa.checked || _0x5a2504.checked) &&
          ((_0x5cbfd7.width === _0x26f99d.width &&
            _0x5cbfd7.height === _0x26f99d.height) ||
            ((_0x5cbfd7.width = _0x26f99d.width),
            (_0x5cbfd7.height = _0x26f99d.height),
            _0x9977d8.viewport(0, 0, _0x26f99d.width, _0x26f99d.height)),
          _0x9977d8.uniform1f(_0x2bc923, 0.005 * performance.now()),
          _0x9977d8.uniform2fv(_0x5cdbf0, [
            1 / _0x26f99d.width,
            1 / _0x26f99d.height,
          ]),
          _0x9977d8.uniform1i(_0x5240f4, _0x175baa.checked),
          _0x9977d8.uniform1i(_0xb98863, _0x5a2504.checked),
          _0x9977d8.pixelStorei(_0x9977d8.UNPACK_FLIP_Y_WEBGL, true),
          _0x9977d8.texImage2D(
            _0x9977d8.TEXTURE_2D,
            0,
            _0x9977d8.RGBA,
            _0x9977d8.RGBA,
            _0x9977d8.UNSIGNED_BYTE,
            _0x26f99d
          ),
          _0x9977d8.clear(
            _0x9977d8.COLOR_BUFFER_BIT | _0x9977d8.DEPTH_BUFFER_BIT
          ),
          _0x9977d8.drawArrays(_0x9977d8.TRIANGLES, 0, 6),
          _0x33e0cf.drawImage(
            _0x5cbfd7,
            0,
            0,
            _0x26f99d.width,
            _0x26f99d.height
          ))
      }
    })()
  } catch (_0x2a85b3) {
    console.error('Error creating post processor. ' + _0x2a85b3)
    _0x426840(_0x175baa, false)
    _0x426840(_0x5a2504, false)
    _0x426840(_0x1dcf32, false)
  }
  1 === window.devicePixelRatio && _0x426840(_0x1dcf32, false)
  ;(function () {
    for (
      var _0x8f30dd = 0,
        _0x5dd74c = ['ms', 'moz', 'webkit', 'o'],
        _0x544aef = 0;
      _0x544aef < _0x5dd74c.length && !window.requestAnimationFrame;
      ++_0x544aef
    ) {
      window.requestAnimationFrame =
        window[_0x5dd74c[_0x544aef] + 'RequestAnimationFrame']
      window.cancelAnimationFrame =
        window[_0x5dd74c[_0x544aef] + 'CancelAnimationFrame'] ||
        window[_0x5dd74c[_0x544aef] + 'CancelRequestAnimationFrame']
    }
    window.requestAnimationFrame ||
      (window.requestAnimationFrame = function (_0x1dfa7c, _0x3b9a4f) {
        var _0x38f9b1 = new Date().getTime(),
          _0x188f7b = Math.max(0, 16 - (_0x38f9b1 - _0x8f30dd)),
          _0x49933e = window.setTimeout(function () {
            _0x1dfa7c(_0x38f9b1 + _0x188f7b)
          }, _0x188f7b)
        return (_0x8f30dd = _0x38f9b1 + _0x188f7b), _0x49933e
      })
    window.cancelAnimationFrame ||
      (window.cancelAnimationFrame = function (_0x106944) {
        clearTimeout(_0x106944)
      })
  })()
  const _0x1ae136 = document.querySelector('.killer'),
    _0x180e95 = document.getElementById('fixedJoystickCb')
  _0x5bf739(_0x180e95, 'fixed_joystick')
  const _0xe43c40 = (window.mobileAndTabletCheck = function () {
      let _0x504dd5 = false
      var _0x5830da
      return (
        (_0x5830da = navigator.userAgent || navigator.vendor || window.opera),
        (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
          _0x5830da
        ) ||
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
            _0x5830da.substr(0, 4)
          )) &&
          (_0x504dd5 = true),
        _0x504dd5
      )
    })(),
    _0x4567c9 = navigator.userAgent.toLowerCase(),
    _0x5aa403 =
      /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(
        _0x4567c9
      ),
    _0x428202 = document.querySelector('.minimize'),
    _0x4c9cf7 = document.querySelector('.minimize-btn')
  _0x4c9cf7.onclick = function () {
    _0x428202.classList.add('minimize-show')
    _0x484ced.classList.remove('game-show')
    _0x13cd5d.classList.remove('grid-show')
  }
  const _0x17edf6 = document.querySelector('.hud-common'),
    _0x1d2df3 = document.querySelector('.resume'),
    _0x2f4d30 = document.querySelector('.giveup')
  _0x1d2df3.onclick = function () {
    _0x13ae30()
    _0x484ced.classList.add('game-show')
  }
  _0x2f4d30.onclick = function () {
    _0x99a5a4 &&
      !_0x99a5a4.isDead &&
      (wssender(new Uint8Array([_0x119776(6, 0)])),
      this.classList.add('btn-disabled'),
      _0x1d2df3.click())
  }
  const _0x5d8751 = document.getElementById('optimizedRendering')
  _0x5bf739(_0x5d8751, 'optimized_rendering')
  const _0x335da6 = document.querySelector('#kbMovementCb')
  _0x5bf739(_0x335da6, 'kb_movement')
  const _0x17d221 = document.querySelector('.nickname')
  function _0x426840(_0x507470, _0x337366) {
    _0x507470.parentNode.style.display = _0x337366 ? '' : 'none'
  }
  function _0x5bf739(_0x4690a0, _0x50697d) {
    const _0x2d9674 = localStorage[_0x50697d]
    _0x4690a0.checked =
      void 0 !== _0x2d9674 ? 'true' === _0x2d9674 : _0x4690a0.checked
    _0x4690a0.oninput = function () {
      localStorage[_0x50697d] = this.checked
      _0x4690a0 === _0x1dcf32 && _0x50c4a4()
    }
  }
  function _0x2cc589(_0x5d724c) {
    for (
      let _0x498d49 = 1;
      _0x498d49 < _0x5d724c.segments.length;
      _0x498d49++
    ) {
      const _0x156299 = _0x5d724c.segments[_0x498d49],
        _0x15e13d = _0x5d724c.segments[_0x498d49 - 1],
        _0xaa9a7b = _0x156299.x,
        _0x13a291 = _0x156299.y
      let _0x1bf8f0 = _0x156299.x - _0x15e13d.x,
        _0x5576b0 = _0x156299.y - _0x15e13d.y
      Math.hypot(_0x1bf8f0, _0x5576b0) > _0x5d724c.r &&
        ((_0x156299.x = _0x15e13d.oldX),
        (_0x156299.y = _0x15e13d.oldY),
        (_0x156299.oldX = _0xaa9a7b),
        (_0x156299.oldY = _0x13a291))
      _0x156299.interpOldX = _0x156299.interpX
      _0x156299.interpOldY = _0x156299.interpY
    }
  }
  function _0xf39656(_0x120c08, _0x289933, _0x519d3d, _0x29469d = 1) {
    const _0x27b774 = (2 * Math.PI) / _0x519d3d,
      _0x20a59c = 0.1 * _0x27b774 * _0x29469d,
      _0x58660c = new Path2D()
    for (let _0x58e69d = 0; _0x58e69d <= _0x519d3d; _0x58e69d++) {
      const _0x4da928 = _0x27b774 * _0x58e69d,
        _0x3f98f7 = _0x4da928 - _0x20a59c,
        _0x210181 = _0x4da928 + _0x20a59c
      _0x58e69d % 2 == 0
        ? (_0x58660c.lineTo(
            Math.cos(_0x3f98f7) * _0x120c08,
            Math.sin(_0x3f98f7) * _0x120c08
          ),
          _0x58660c.lineTo(
            Math.cos(_0x210181) * _0x289933,
            Math.sin(_0x210181) * _0x289933
          ))
        : (_0x58660c.lineTo(
            Math.cos(_0x3f98f7) * _0x289933,
            Math.sin(_0x3f98f7) * _0x289933
          ),
          _0x58660c.lineTo(
            Math.cos(_0x210181) * _0x120c08,
            Math.sin(_0x210181) * _0x120c08
          ))
    }
    return _0x58660c
  }
  _0x17d221.oninput = function () {
    localStorage.nickname = this.value
  }
  _0x17d221.maxLength = 14
  _0x17d221.value =
    void 0 !== localStorage.nickname ? localStorage.nickname : ''
  _0x426840(_0x180e95, _0xe43c40)
  _0x426840(_0x335da6, !_0xe43c40)
  _0xe43c40 &&
    (document.getElementById('pressEnterInfo').style.display = 'none')
  const _0x23f0c6 = _0xf39656(20, 22.5, 32, 1),
    _0x250efa = _0xf39656(10, 12.5, 16, 1.25),
    _0x247829 = [
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
    ]
  class _0x3a020e {
    constructor(_0x3a8df, _0x29b544, _0x2d058c = 0) {
      this.id = _0x3a8df
      this.segments = []
      this.updateTime = 0
      this.dirX = Math.cos(_0x29b544)
      this.dirY = Math.sin(_0x29b544)
      this.newDirX = this.oldDirX = this.dirX
      this.newDirY = this.oldDirY = this.dirY
      this.sad = 0
      this.angry = 0
      this.faceSkin = -1
      this.bodySkin = -1
      this.energy = 0
      this.iEnergy = 0
      this.r = this.interpR = this.interpOldR = _0x2d058c
      this.angle = _0x29b544
      this.iEnergyChange = 0
      this.energyChangeCounter = 1
      this.energyAlpha = 0
      this.nickname = ''
    }
    ['interpolate']() {
      const _0x1e5b37 = Math.min(1, (Date.now() - this.updateTime) / 100)
      for (let _0x4b3a85 = 0; _0x4b3a85 < this.segments.length; _0x4b3a85++) {
        const _0x37ec33 = this.segments[_0x4b3a85]
        _0x37ec33.interpX =
          _0x37ec33.interpOldX +
          (_0x37ec33.x - _0x37ec33.interpOldX) * _0x1e5b37
        _0x37ec33.interpY =
          _0x37ec33.interpOldY +
          (_0x37ec33.y - _0x37ec33.interpOldY) * _0x1e5b37
      }
      this.interpR = this.interpOldR + (this.r - this.interpOldR) * _0x1e5b37
      this.dirX = this.oldDirX + (this.newDirX - this.oldDirX) * _0x1e5b37
      this.dirY = this.oldDirY + (this.newDirY - this.oldDirY) * _0x1e5b37
      this.interpFace()
      this.iEnergy = this.oldEnergy + _0x1e5b37 * (this.energy - this.oldEnergy)
      this.energyChangeCounter -= _0x47d062 / 0.5
      this.energyChangeCounter < 0 &&
        (this.iEnergyChange += 0.1 * (this.iEnergy - this.iEnergyChange))
      this.iEnergyChange = Math.max(this.iEnergy, this.iEnergyChange)
      this.energyAlpha +=
        ((!this.isDead && this.energy < 1 ? 1 : -1) * _0x47d062) / 0.15
      this.energyAlpha = Math.max(Math.min(1, this.energyAlpha), 0)
    }
    ['interpFace']() {
      const _0x398993 = _0x47d062 / 0.07
      1 === this.mood
        ? ((this.angry += _0x398993), (this.sad -= _0x398993))
        : 2 === this.mood
        ? ((this.sad += _0x398993), (this.angry -= _0x398993))
        : 0 === this.mood &&
          ((this.angry -= _0x398993), (this.sad -= _0x398993))
      this.angry = Math.min(1, Math.max(0, this.angry))
      this.sad = Math.min(1, Math.max(0, this.sad))
    }
    ['drawEnergyAndNickname'](_0x2b8a6a) {
      const _0x12a3ac = this.segments[0]
      _0x2b8a6a.save()
      _0x2b8a6a.lineCap = 'round'
      _0x2b8a6a.lineJoin = 'round'
      _0x2b8a6a.globalAlpha = this.energyAlpha
      _0x2b8a6a.translate(_0x12a3ac.interpX, _0x12a3ac.interpY)
      const _0x46e408 = this.interpR / 25
      if ((_0x2b8a6a.scale(_0x46e408, _0x46e408), this.energyAlpha > 0)) {
        _0x2b8a6a.save()
        _0x2b8a6a.translate(0, 60)
        _0x2b8a6a.beginPath()
        _0x2b8a6a.moveTo(-35, 0)
        _0x2b8a6a.lineTo(35, 0)
        _0x2b8a6a.lineWidth = 13
        _0x2b8a6a.strokeStyle = '#222'
        _0x2b8a6a.stroke()
        _0x2b8a6a.beginPath()
        _0x2b8a6a.moveTo(-35, 0)
        _0x2b8a6a.lineTo(-35 + this.iEnergyChange * 35 * 2, 0)
        _0x2b8a6a.lineWidth = 6.5
        _0x2b8a6a.strokeStyle = '#dd3434'
        _0x2b8a6a.stroke()
        _0x2b8a6a.beginPath()
        _0x2b8a6a.globalAlpha *= Math.min(1, Math.max(0.5, this.iEnergy / 0.05))
        _0x2b8a6a.moveTo(-35, 0)
        _0x2b8a6a.lineTo(-35 + this.iEnergy * 35 * 2, 0)
        _0x2b8a6a.lineWidth = 8
        _0x2b8a6a.strokeStyle = '#75dd34'
        _0x2b8a6a.stroke()
        _0x2b8a6a.restore()
      }
      this.isDead ||
        this === _0x99a5a4 ||
        '' === this.nickname.trim() ||
        (_0x2b8a6a.save(),
        _0x2b8a6a.translate(0, -50),
        (_0x2b8a6a.globalAlpha = 1),
        (_0x2b8a6a.font = 'bolder 24px Ubuntu'),
        (_0x2b8a6a.strokeStyle = '#000'),
        (_0x2b8a6a.lineWidth = 4),
        (_0x2b8a6a.textAlign = 'center'),
        (_0x2b8a6a.textBaseline = 'bottom'),
        _0x2b8a6a.strokeText(this.nickname, 0, 0),
        (_0x2b8a6a.fillStyle = '#fff'),
        _0x2b8a6a.fillText(this.nickname, 0, 0),
        _0x2b8a6a.restore())
      _0x2b8a6a.restore()
    }
    ['draw'](_0x26481d, _0xfe38ea, _0x59c4b1 = true) {
      const _0x37664e = Date.now()
      if (((_0xfe38ea.lineWidth = 5), _0xfe38ea.lineWidth, this.isDead)) {
        const _0x3a0fc7 = (_0x37664e - this.diedAt) / 500
        if (_0x3a0fc7 > 1) {
          return void _0x4a1682.splice(_0x26481d, 1)
        }
        _0xfe38ea.globalAlpha =
          Math.abs(Math.sin(_0x3a0fc7 * Math.PI * 2)) * (1 - _0x3a0fc7) * 0.7
      } else {
        _0xfe38ea.globalAlpha = 1
      }
      const _0x7b82b7 = (_0x37664e - this.diggedLavaAt) / 200,
        _0x51d02e = [153, 153, 153],
        _0x5d92f3 = [124, 124, 124]
      if (_0x7b82b7 < 1) {
        const _0xcb6cdb = [255, 0, 0],
          _0x1c79b0 = 0.5 * (1 - _0x7b82b7),
          _0x3d08fd = 1 - _0x1c79b0
        for (let _0x5120b9 = 0; _0x5120b9 < 3; _0x5120b9++) {
          _0x51d02e[_0x5120b9] =
            _0x51d02e[_0x5120b9] * _0x3d08fd + _0xcb6cdb[_0x5120b9] * _0x1c79b0
          _0x5d92f3[_0x5120b9] =
            _0x5d92f3[_0x5120b9] * _0x3d08fd + _0xcb6cdb[_0x5120b9] * _0x1c79b0
        }
      }
      let _0x19b0a3 = (_0xfe38ea.fillStyle =
          'rgb(' + _0x51d02e.join(',') + ')'),
        _0x4d20a2 = (_0xfe38ea.strokeStyle = 'rgb(' + _0x5d92f3.join(',') + ')')
      const _0x3b087b = 1 * this.interpR,
        _0x131d9f = this.segments[0]
      if (this.isDead || _0x5d8751.checked) {
        _0xfe38ea.beginPath()
        for (let _0x5e7849 = 0; _0x5e7849 < this.segments.length; _0x5e7849++) {
          const { interpX: _0x3f3c2c, interpY: _0x514fd4 } =
            this.segments[_0x5e7849]
          0 === _0x5e7849
            ? _0xfe38ea.moveTo(_0x3f3c2c, _0x514fd4)
            : _0xfe38ea.lineTo(_0x3f3c2c, _0x514fd4)
        }
        _0xfe38ea.lineWidth = 2 * _0x3b087b + 10
        _0xfe38ea.lineCap = 'round'
        _0xfe38ea.lineJoin = 'round'
        _0xfe38ea.stroke()
        _0xfe38ea.strokeStyle = _0xfe38ea.fillStyle
        _0xfe38ea.lineWidth -= 10
        _0xfe38ea.stroke()
      } else {
        _0xfe38ea.lineCap = 'round'
        let _0xf0924c = 0
        const _0x168c50 = this.segments.length - 1
        for (let _0x125d98 = 1; _0x125d98 <= _0x168c50; _0x125d98++) {
          const _0x5e6afa = this.segments[_0x125d98 - 1],
            _0x38f9ae = this.segments[_0x125d98],
            _0x59701c = _0x38f9ae.interpX - _0x5e6afa.interpX,
            _0x34f3e6 = _0x38f9ae.interpY - _0x5e6afa.interpY
          let _0x1c55ab = Math.hypot(_0x59701c, _0x34f3e6)
          const _0x22c09 = Math.atan2(_0x34f3e6, _0x59701c)
          if (
            ((_0xf0924c += _0x1c55ab),
            (_0x38f9ae.d = _0x1c55ab),
            (_0x38f9ae.angle = _0x22c09),
            (_0x1c55ab = _0x1c55ab || 1),
            (_0x38f9ae.dirX = _0x59701c / _0x1c55ab),
            (_0x38f9ae.dirY = _0x34f3e6 / _0x1c55ab),
            (_0x38f9ae.norX = -_0x38f9ae.dirY),
            (_0x38f9ae.norY = _0x38f9ae.dirX),
            1 !== _0x125d98)
          ) {
            _0x5e6afa.norX += _0x38f9ae.norX
            _0x5e6afa.norY += _0x38f9ae.norY
            const _0x4c3573 = Math.hypot(_0x5e6afa.norX, _0x5e6afa.norY)
            _0x5e6afa.norX /= _0x4c3573
            _0x5e6afa.norY /= _0x4c3573
          } else {
            _0x5e6afa.norX = _0x38f9ae.norX
            _0x5e6afa.norY = _0x38f9ae.norY
            _0x5e6afa.angle = _0x38f9ae.angle
            _0x5e6afa.distance = 0
          }
          _0x38f9ae.distance = _0xf0924c
        }
        _0xfe38ea.lineWidth = 5
        const _0x596b4a = this.segments[_0x168c50]
        _0xfe38ea.beginPath()
        _0xfe38ea.arc(
          _0x596b4a.interpX,
          _0x596b4a.interpY,
          _0x3b087b,
          0,
          2 * Math.PI
        )
        _0xfe38ea.fill()
        _0xfe38ea.stroke()
        for (let _0x5c18df = _0x168c50; _0x5c18df >= 1; _0x5c18df--) {
          const _0x3dcbf9 = this.segments[_0x5c18df],
            _0x3395ab = this.segments[_0x5c18df - 1]
          ;(_0x3dcbf9.interpX === _0x3395ab.interpX &&
            _0x3dcbf9.interpY === _0x3395ab.interpY) ||
            (_0xfe38ea.beginPath(),
            _0xfe38ea.moveTo(
              _0x3dcbf9.interpX + _0x3dcbf9.norX * _0x3b087b,
              _0x3dcbf9.interpY + _0x3dcbf9.norY * _0x3b087b
            ),
            _0xfe38ea.lineTo(
              _0x3dcbf9.interpX - _0x3dcbf9.norX * _0x3b087b,
              _0x3dcbf9.interpY - _0x3dcbf9.norY * _0x3b087b
            ),
            _0xfe38ea.lineTo(
              _0x3395ab.interpX - _0x3395ab.norX * _0x3b087b,
              _0x3395ab.interpY - _0x3395ab.norY * _0x3b087b
            ),
            _0xfe38ea.lineTo(
              _0x3395ab.interpX + _0x3395ab.norX * _0x3b087b,
              _0x3395ab.interpY + _0x3395ab.norY * _0x3b087b
            ),
            _0xfe38ea.fill(),
            _0xfe38ea.beginPath(),
            _0xfe38ea.moveTo(
              _0x3395ab.interpX - _0x3395ab.norX * _0x3b087b,
              _0x3395ab.interpY - _0x3395ab.norY * _0x3b087b
            ),
            _0xfe38ea.lineTo(
              _0x3395ab.interpX + _0x3395ab.norX * _0x3b087b,
              _0x3395ab.interpY + _0x3395ab.norY * _0x3b087b
            ),
            (_0xfe38ea.strokeStyle = _0x19b0a3),
            _0xfe38ea.stroke(),
            _0xfe38ea.beginPath(),
            _0xfe38ea.moveTo(
              _0x3dcbf9.interpX + _0x3dcbf9.norX * _0x3b087b,
              _0x3dcbf9.interpY + _0x3dcbf9.norY * _0x3b087b
            ),
            _0xfe38ea.lineTo(
              _0x3395ab.interpX + _0x3395ab.norX * _0x3b087b,
              _0x3395ab.interpY + _0x3395ab.norY * _0x3b087b
            ),
            _0xfe38ea.moveTo(
              _0x3395ab.interpX - _0x3395ab.norX * _0x3b087b,
              _0x3395ab.interpY - _0x3395ab.norY * _0x3b087b
            ),
            _0xfe38ea.lineTo(
              _0x3dcbf9.interpX - _0x3dcbf9.norX * _0x3b087b,
              _0x3dcbf9.interpY - _0x3dcbf9.norY * _0x3b087b
            ),
            (_0xfe38ea.strokeStyle = _0x4d20a2),
            _0xfe38ea.stroke())
        }
        _0xfe38ea.beginPath()
        const _0x44ae04 = _0x131d9f.angle + Math.PI / 2
        _0xfe38ea.arc(
          _0x131d9f.interpX,
          _0x131d9f.interpY,
          _0x3b087b,
          _0x44ae04,
          _0x44ae04 + Math.PI
        )
        _0xfe38ea.fill()
        _0xfe38ea.stroke()
      }
      const _0x35b2ff = (skins.faceSkins[this.faceSkin] || { name: 'idk' })
        .name
      if ('Faceless' === _0x35b2ff) {
        return
      }
      _0xfe38ea.save()
      _0xfe38ea.translate(_0x131d9f.interpX, _0x131d9f.interpY)
      const _0x34e216 =
        (_0x3b087b / 30) * (_0x35b2ff.startsWith('Kirk') ? 0.7 : 1)
      let _0x53d9eb = 0
      if ('Gear' === _0x35b2ff) {
        _0xfe38ea.scale(_0x34e216, _0x34e216)
        _0xfe38ea.fillStyle = '#111'
        _0xfe38ea.fill(_0x23f0c6)
        _0xfe38ea.fillStyle = '#999'
        _0xfe38ea.save()
        const _0x1d4658 = ((Date.now() / 500) % Math.PI) * 2
        _0xfe38ea.rotate(_0x1d4658)
        _0xfe38ea.translate(10, 0)
        _0xfe38ea.rotate(2 * -_0x1d4658)
        _0xfe38ea.fill(_0x250efa)
        _0xfe38ea.rotate(_0x1d4658)
        _0xfe38ea.scale(0.35, 0.35)
        _0xfe38ea.scale(1 / _0x34e216, 1 / _0x34e216)
      }
      if ('Cute' === _0x35b2ff) {
        _0xfe38ea.scale(_0x34e216, _0x34e216)
        const _0x315e78 = this.sad + this.angry,
          _0x564108 = 1 - _0x315e78
        _0xfe38ea.strokeStyle = '#222'
        _0xfe38ea.scale(1.15, 1.15)
        _0xfe38ea.save()
        _0xfe38ea.translate(0, 9.25 + 1.5 * this.dirY)
        _0x564108 > 0 &&
          (_0xfe38ea.beginPath(),
          _0xfe38ea.ellipse(
            0,
            0,
            1.6 * _0x564108,
            2 * _0x564108,
            0,
            0,
            2 * Math.PI
          ),
          (_0xfe38ea.fillStyle = '#222'),
          _0xfe38ea.fill())
        _0x315e78 > 0 &&
          (_0xfe38ea.beginPath(),
          _0xfe38ea.moveTo(-3 * _0x315e78, 0.7),
          _0xfe38ea.quadraticCurveTo(0, -2, 3 * _0x315e78, 0.7),
          (_0xfe38ea.lineWidth = 1.5 * _0x315e78),
          _0xfe38ea.stroke())
        _0xfe38ea.restore()
        for (let _0x41ada3 = 0; _0x41ada3 < 2; _0x41ada3++) {
          const _0x43e993 = 9 * (2 * _0x41ada3 - 1),
            _0x57018b = 0 === _0x41ada3 ? 1 : 0,
            _0xdb13ce = 1 ^ _0x57018b
          _0xfe38ea.save()
          _0xfe38ea.beginPath()
          _0xfe38ea.moveTo(
            _0x43e993 - 6,
            4 * _0x57018b * this.sad - 15 + 5 * _0xdb13ce * this.angry
          )
          _0xfe38ea.lineTo(
            _0x43e993 + 6,
            4 * _0xdb13ce * this.sad - 15 + 5 * _0x57018b * this.angry
          )
          _0xfe38ea.lineTo(_0x43e993 + 6, 5)
          _0xfe38ea.lineTo(_0x43e993 - 6, 5)
          _0xfe38ea.clip()
          _0xfe38ea.beginPath()
          _0xfe38ea.ellipse(_0x43e993, -6, 5.5, 8, 0, 0, 2 * Math.PI)
          _0xfe38ea.fillStyle = '#222'
          _0xfe38ea.lineWidth = 1.25
          _0xfe38ea.fill()
          _0xfe38ea.stroke()
          _0xfe38ea.clip()
          _0xfe38ea.fillStyle = '#fff'
          _0xfe38ea.beginPath()
          _0xfe38ea.arc(
            _0x43e993 + 3 * this.dirX,
            6 * this.dirY - 6,
            4.5,
            0,
            2 * Math.PI
          )
          _0xfe38ea.fill()
          _0xfe38ea.restore()
        }
      } else {
        'Kirkier' === _0x35b2ff &&
          _0xfe38ea.translate(13 * this.dirX, 13 * this.dirY)
        'Sarcastic' === _0x35b2ff
          ? (_0x53d9eb = Math.PI)
          : 'Dizzy' === _0x35b2ff &&
            (_0x53d9eb = (Date.now() / 200) % (2 * Math.PI))
        _0xfe38ea.rotate(_0x53d9eb)
        _0xfe38ea.scale(_0x34e216, _0x34e216)
        'Moyai' === _0x35b2ff
          ? ((_0xfe38ea.fillStyle = '#333'),
            (function (_0x582fda, _0x4c6c2d) {
              _0x582fda.save()
              _0x582fda.translate(-31, 35)
              _0x582fda.scale(1.7249999999999999, -1.7249999999999999)
              for (
                let _0x59ae9c = 0;
                _0x59ae9c < _0x247829.length;
                _0x59ae9c++
              ) {
                _0x582fda.save()
                const _0x4e77fd = _0x247829[_0x59ae9c]
                _0x582fda.translate(..._0x4e77fd[0])
                _0x582fda.fill(_0x4e77fd[1])
                _0x582fda.restore()
              }
              _0x582fda.restore()
            })(_0xfe38ea))
          : 'Ascii' === _0x35b2ff
          ? (_0xfe38ea.save(),
            _0xfe38ea.rotate(Math.PI / 2),
            (_0xfe38ea.fillStyle = '#222'),
            (_0xfe38ea.font = 'bolder 22px monospace'),
            (_0xfe38ea.textAlign = 'center'),
            (_0xfe38ea.textBaseline = 'middle'),
            1 === this.mood
              ? (_0xfe38ea.fillText(':(', 0, 0),
                _0xfe38ea.fillText('>', -18, 0))
              : 2 === this.mood
              ? _0xfe38ea.fillText(':(', 0, 0)
              : _0xfe38ea.fillText(':)', 0, 0),
            _0xfe38ea.restore())
          : 'All Seeing' !== _0x35b2ff &&
            (_0xfe38ea.beginPath(),
            _0xfe38ea.moveTo(-7, 9.25),
            _0xfe38ea.quadraticCurveTo(
              0,
              6 - 10 * this.sad - 12 * this.angry + 9.25,
              7,
              9.25
            ),
            (_0xfe38ea.strokeStyle = '#222'),
            (_0xfe38ea.lineWidth = 1.75),
            _0xfe38ea.stroke())
        const _0x42f98c = Math.sin(-_0x53d9eb),
          _0x31efc2 = Math.cos(-_0x53d9eb),
          _0x19d211 = this.dirX * _0x31efc2 - _0x42f98c * this.dirY,
          _0x5892b4 = this.dirX * _0x42f98c + _0x31efc2 * this.dirY
        if ('Ascii' === _0x35b2ff || 'Moyai' === _0x35b2ff) {
        } else {
          if ('Cyclops' === _0x35b2ff) {
            _0xfe38ea.save()
            _0xfe38ea.beginPath()
            const _0x313138 = 2 * this.sad
            _0xfe38ea.moveTo(-4, -11 + _0x313138)
            _0xfe38ea.lineTo(0, 2 * this.angry - 11)
            _0xfe38ea.lineTo(4, -11 + _0x313138)
            _0xfe38ea.lineTo(4, 0)
            _0xfe38ea.lineTo(-4, 0)
            _0xfe38ea.closePath()
            _0xfe38ea.fillStyle = '#222'
            _0xfe38ea.lineWidth = 1
            _0xfe38ea.fill()
            _0xfe38ea.stroke()
            _0xfe38ea.clip()
            _0xfe38ea.fillStyle = '#fff'
            _0xfe38ea.fillRect(
              1.75 * _0x19d211 - 2.5,
              4.25 * _0x5892b4 - 8,
              5,
              5
            )
            _0xfe38ea.restore()
          } else {
            if ('All Seeing' === _0x35b2ff) {
              _0xfe38ea.beginPath()
              _0xfe38ea.arc(0, 0, 18, 0, 2 * Math.PI)
              _0xfe38ea.fillStyle = '#222'
              _0xfe38ea.fill()
              _0xfe38ea.beginPath()
              _0xfe38ea.arc(7 * _0x19d211, 7 * _0x5892b4, 8, 0, 2 * Math.PI)
              _0xfe38ea.fillStyle = '#fff'
              _0xfe38ea.fill()
            } else {
              if ('Creepy' === _0x35b2ff) {
                const _0x4d702e = -7
                for (let _0x432d4f = 0; _0x432d4f < 2; _0x432d4f++) {
                  const _0x4a6f9a = (2 * _0x432d4f - 1) * 7.5,
                    _0x569538 = 0 === _0x432d4f ? 1 : 0,
                    _0x58f7f5 = 1 ^ _0x569538
                  _0xfe38ea.save()
                  _0xfe38ea.beginPath()
                  _0xfe38ea.moveTo(
                    _0x4a6f9a - 3.5,
                    _0x4d702e -
                      3.5 +
                      (this.sad * _0x569538 * 2 + this.angry * _0x58f7f5 * 3)
                  )
                  _0xfe38ea.lineTo(_0x4a6f9a - 3.5, _0x4d702e + 3.5)
                  _0xfe38ea.lineTo(_0x4a6f9a + 3.5, _0x4d702e + 3.5)
                  _0xfe38ea.lineTo(
                    _0x4a6f9a + 3.5,
                    _0x4d702e -
                      3.5 +
                      (this.angry * _0x569538 * 3 + this.sad * _0x58f7f5 * 2)
                  )
                  _0xfe38ea.closePath()
                  _0xfe38ea.clip()
                  _0xfe38ea.fillStyle = '#222'
                  _0xfe38ea.beginPath()
                  _0xfe38ea.arc(_0x4a6f9a, _0x4d702e, 3.5, 0, 2 * Math.PI)
                  _0xfe38ea.fill()
                  _0xfe38ea.restore()
                }
              } else {
                for (let _0x1bc2ea = 0; _0x1bc2ea < 2; _0x1bc2ea++) {
                  const _0x24c727 = (2 * _0x1bc2ea - 1) * 7.5,
                    _0x3cdbee = 0 === _0x1bc2ea ? 1 : 0,
                    _0x5f3a0d = 1 ^ _0x3cdbee
                  _0xfe38ea.save()
                  _0xfe38ea.beginPath()
                  _0xfe38ea.moveTo(
                    _0x24c727 + -2.75,
                    2 * _0x3cdbee * this.sad - 11 + 2.5 * _0x5f3a0d * this.angry
                  )
                  _0xfe38ea.lineTo(
                    _0x24c727 + 2.75,
                    2 * _0x5f3a0d * this.sad - 11 + 2.5 * _0x3cdbee * this.angry
                  )
                  _0xfe38ea.lineTo(_0x24c727 + 2.75, 0)
                  _0xfe38ea.lineTo(_0x24c727 + -2.75, 0)
                  _0xfe38ea.closePath()
                  _0xfe38ea.fillStyle = '#222'
                  _0xfe38ea.lineWidth = 1
                  _0xfe38ea.fill()
                  _0xfe38ea.stroke()
                  _0xfe38ea.clip()
                  _0xfe38ea.fillStyle = '#fff'
                  _0xfe38ea.fillRect(
                    _0x24c727 - 2.5 + 1.75 * _0x19d211,
                    4.25 * _0x5892b4 - 8,
                    5,
                    5
                  )
                  _0xfe38ea.restore()
                }
                'Pirate' === _0x35b2ff
                  ? (_0xfe38ea.save(),
                    _0xfe38ea.beginPath(),
                    _0xfe38ea.arc(0, 0, 30, 0, 2 * Math.PI),
                    _0xfe38ea.clip(),
                    _0xfe38ea.translate(7.5, -5.7),
                    _0xfe38ea.beginPath(),
                    _0xfe38ea.arc(0, 0, 8.5, 0, 2 * Math.PI),
                    (_0xfe38ea.fillStyle = '#222'),
                    _0xfe38ea.fill(),
                    (_0xfe38ea.strokeStyle = '#222'),
                    _0xfe38ea.beginPath(),
                    _0xfe38ea.moveTo(-20, -30),
                    _0xfe38ea.quadraticCurveTo(-3, 0, 30, 0),
                    (_0xfe38ea.lineWidth = 4),
                    _0xfe38ea.stroke(),
                    _0xfe38ea.restore())
                  : 'Intellectual' === _0x35b2ff &&
                    (_0xfe38ea.save(),
                    _0xfe38ea.translate(7.5, -5.7),
                    _0xfe38ea.beginPath(),
                    _0xfe38ea.arc(0, 0, 8.5, 0, 2 * Math.PI),
                    (_0xfe38ea.fillStyle = 'hsla(0,0%,100%,0.5)'),
                    _0xfe38ea.fill(),
                    (_0xfe38ea.lineWidth = 1),
                    (_0xfe38ea.strokeStyle = '#333'),
                    _0xfe38ea.stroke(),
                    _0xfe38ea.translate(8.5, 0),
                    _0xfe38ea.beginPath(),
                    _0xfe38ea.moveTo(0, 0),
                    _0xfe38ea.lineTo(0, 18),
                    _0xfe38ea.stroke(),
                    _0xfe38ea.restore())
              }
            }
          }
        }
      }
      'Gear' === _0x35b2ff && _0xfe38ea.restore()
      _0xfe38ea.restore()
    }
  }
  function _0x300ffc(_0x47b2bd) {
    return (function (_0xfdb15) {
      const _0x1bd2e1 = Math.floor(5 * Math.random())
      for (let _0x3315f8 = 0; _0x3315f8 < _0xfdb15.length; _0x3315f8++) {
        _0xfdb15[_0x3315f8] = Math.max(0, _0xfdb15[_0x3315f8] - _0x1bd2e1)
      }
      return _0xfdb15
    })(_0xa94d2e(_0x47b2bd))
  }
  crypto.randomUUID =
    crypto.randomUUID ||
    function () {
      return ([10000000] + -1000 + -4000 + -8000 + -100000000000).replace(
        /[018]/g,
        (_0x15f4fe) =>
          (
            _0x15f4fe ^
            (crypto.getRandomValues(new Uint8Array(1))[0] &
              (15 >> (_0x15f4fe / 4)))
          ).toString(16)
      )
    }
  window.onload = function () {
    _0x4c6294.style.display = 'none'
    _0xaeee8d(window.location.origin.replace('http', 'ws'))
    _0x5cf8da()
  }
  document.body.oncontextmenu = function () {
    return false
  }
  const _0xa151bc = (function (_0x3d357e) {
      const _0x41ae79 = {}
      for (let _0x368b33 in _0x3d357e)
        _0x41ae79[_0x3d357e[_0x368b33]] = _0x368b33
      return _0x41ae79
    })({
      invalidProtocol: 0,
      outdatedVersion: 1,
      tooManyConnections: 2,
      AFK: 3,
    }),
    _0x4c6294 = document.querySelector('.loader'),
    _0x101d88 = document.querySelector('.connecting'),
    _0x13cd5d = document.querySelector('.grid'),
    _0x39f16b = document.querySelector('.lb'),
    _0x5027f2 = document.querySelector('.lb-content'),
    _0x2eb4a5 = document.querySelector('.lb-header span')
  if (_0xe43c40) {
    _0x39f16b.classList.add('slide-up')
    _0x39f16b.style.pointerEvents = 'all'
    const _0x1b55be = document.querySelector('.lb-btn')
    _0x1b55be.classList.remove('slide-up')
    _0x1b55be.ontouchstart = _0x39f16b.ontouchstart = function () {
      _0x1b55be.classList.toggle('slide-up')
      _0x39f16b.classList.toggle('slide-up')
    }
  }
  const _0x12a2bd = document.querySelector('.menu'),
    _0x5a9c33 = document.querySelector('.settings'),
    _0xe81457 = document.querySelector('.changelog'),
    _0x59ac35 = document.querySelector('.settings-btn'),
    _0x3666c5 = document.querySelector('.changelog-btn')
  _0x3e858b('#ppBtn', '/docs/pp.html')
  _0x3e858b('#tosBtn', '/docs/tos.html')
  const _0x1cb108 = document.querySelector('.login-btn')
  _0x1cb108.onclick = function () {
    _0x420821 ||
      (window.location.href =
        'https://discord.com/api/oauth2/authorize?client_id=995547764983341057&redirect_uri=' +
        encodeURIComponent(window.location.origin + '/discord') +
        '&response_type=code&scope=identify&state=' +
        encodeURIComponent(btoa(accid)))
  }
  const _0x4aaa30 = document.querySelector('.logout-btn')
  function _0x3e858b(_0x4a4315, _0x441a5a) {
    document.querySelector(_0x4a4315).onclick = function () {
      window.open(_0x441a5a, '_blank')
    }
  }
  _0x4aaa30.onclick = function () {
    accid == localStorage.account_id && delete localStorage.account_id
    delete localStorage.discord_data
    ws && ws.close()
  }
  _0x3e858b('.discord-btn', 'https://discord.gg/WkYHsUQF5a')
  _0x3e858b('.reddit-btn', 'https://www.reddit.com/r/digworm/')
  const _0x383dd8 = document.querySelector('.overlay'),
    _0x1a5a3c =
      (document.querySelector('.game .overlay'),
      document.querySelector('.shop'))
  _0xe43c40 && _0x1a5a3c.classList.add('fullsize-shop')
  const _0x484ced = document.querySelector('.game'),
    _0x448eb2 = document.querySelector('.gameover'),
    _0x43ebf1 = document.querySelector('.continue-btn'),
    _0x1ed5cc = document.querySelector('.face-skins'),
    _0xecb25b = document.querySelector('.body-skins'),
    _0x13a5b6 = document.createElement('div'),
    _0x5a0a07 = document.querySelector('.new-skins'),
    _0x445753 = [],
    _0x5c65f3 = document.querySelector('.unequip-btn')
  _0x5c65f3.onclick = function () {
    for (let _0x5c0fe5 = 0; _0x5c0fe5 < 2; _0x5c0fe5++) {
      const _0x466440 = document.querySelector(
        '.' + (0 === _0x5c0fe5 ? 'face' : 'body') + '-skin [stroke=Unequip]'
      )
      _0x466440 && _0x466440.setAttribute('stroke', 'Equip')
    }
    localStorage.equipped_body_skin = -1
    localStorage.equipped_face_skin = -1
    this.classList.add('btn-disabled')
  }
  const _0x205949 = []
  function _0x1768d4(_0x34a69f, _0x5104e7, _0x30472a) {
    let _0x3385ff
    _0x34a69f = _0x34a69f
      .map((_0xeea1b3, _0x27f645) => ((_0xeea1b3.id = _0x27f645), _0xeea1b3))
      .sort(function (_0x353c4e, _0x1f3bcd) {
        return _0x353c4e.price - _0x1f3bcd.price
      })
    _0x5104e7.innerHTML = ''
    for (let _0xef1154 = 0; _0xef1154 < _0x34a69f.length; _0xef1154++) {
      _0xef1154 % 4 == 0 &&
        ((_0x3385ff = document.createElement('div')),
        _0x3385ff.classList.add('shop-row'),
        _0x5104e7.appendChild(_0x3385ff))
      const _0x51f666 = _0x34a69f[_0xef1154]
      _0x13a5b6.innerHTML =
        '\n\t\t<div class="shop-item ' +
        _0x30472a +
        '-skin ' +
        _0x30472a +
        'Skin' +
        _0xef1154 +
        '">\n\t\t\t<div class="shop-item-preview"></div>\n\t\t\t<span stroke="' +
        _0x51f666.name +
        '" class="shop-item-name"></span>\n\t\t\t<div class="btn gold-btn btn-disabled">\n\t\t\t\t<i class="fa fa-circle"></i>\n\t\t\t\t<span stroke="' +
        _0x51f666.price.toLocaleString() +
        '"></span>\n\t\t\t</div>\n\t\t</div>'
      const _0x578a89 = _0x13a5b6.children[0]
      _0x51f666.shopItemEl = _0x578a89
      _0x18f5ae(_0x578a89)[_0x30472a + 'Skin'] = _0x51f666.id
      _0x3385ff.appendChild(_0x578a89)
      _0x578a89.initialParent = _0x3385ff
      _0x578a89.tempDiv = document.createElement('div')
    }
  }
  document.onmousemove = function (_0x2a91f1) {
    for (let _0x53a59b = 0; _0x53a59b < _0x205949.length; _0x53a59b++) {
      const _0x52022e = _0x205949[_0x53a59b],
        _0x5c279e = _0x52022e.previewPlayer,
        _0x15bfe0 = _0x52022e.previewEl.getBoundingClientRect(),
        _0x4ec18b = Math.atan2(
          _0x2a91f1.clientY - (_0x15bfe0.top + _0x15bfe0.height / 2),
          _0x2a91f1.clientX - (_0x15bfe0.left + _0x15bfe0.width / 2)
        )
      _0x5c279e.oldDirX = _0x5c279e.dirX
      _0x5c279e.oldDirY = _0x5c279e.dirY
      _0x5c279e.newDirX = Math.cos(_0x4ec18b)
      _0x5c279e.newDirY = Math.sin(_0x4ec18b)
    }
  }
  let _0x4229fb = 0
  const _0x5d0169 = _0x18f5ae(document.querySelector('.my-skin-preview'))
  function _0x18f5ae(_0x49535b) {
    const _0x41ea27 = document.createElement('canvas')
    _0x41ea27.style.position = 'absolute'
    _0x41ea27.style.top = '0'
    _0x41ea27.style.left = '0'
    _0x41ea27.style.width = '100%'
    _0x49535b.style.position = 'relative'
    _0x49535b.insertBefore(_0x41ea27, _0x49535b.children[0])
    const _0x14f8e2 = _0x41ea27.getContext('2d'),
      _0x1514d0 = _0x49535b.querySelector('.shop-item-preview'),
      _0x4061f1 = new _0x3a020e(0, 0, 30)
    for (let _0x5db463 = 0; _0x5db463 < 2; _0x5db463++) {
      _0x4061f1.segments.push({
        interpX: -100 * _0x5db463,
        interpY: 0,
      })
    }
    const _0x5931b2 = {
      previewPlayer: _0x4061f1,
      el: _0x49535b,
      previewEl: _0x1514d0,
      faceSkin: -1,
      bodySkin: -1,
      render() {
        if (0 === _0x1a5a3c.getBoundingClientRect().width) {
          return
        }
        const _0x1b5cac = _0x49535b.getBoundingClientRect()
        if (0 === _0x1b5cac.height || 0 === _0x1b5cac.width) {
          return
        }
        const _0x3a601b = _0x1b5cac.width * window.devicePixelRatio,
          _0xf34e90 = _0x1b5cac.height * window.devicePixelRatio
        ;(_0x41ea27.width === _0x3a601b && _0x41ea27.height === _0xf34e90) ||
          ((_0x41ea27.width = _0x3a601b), (_0x41ea27.height = _0xf34e90))
        const _0x1acf9c = _0x1514d0.getBoundingClientRect()
        _0x14f8e2.clearRect(0, 0, _0x41ea27.width, _0x41ea27.height)
        _0x14f8e2.save()
        _0x14f8e2.scale(window.devicePixelRatio, window.devicePixelRatio)
        const _0x1342ec = _0x4061f1.segments[0],
          _0xd4e72c = _0x1acf9c.width / 2
        _0x14f8e2.translate(
          _0x1acf9c.left - _0x1b5cac.left + _0xd4e72c,
          _0x1acf9c.top - _0x1b5cac.top + _0xd4e72c
        )
        const _0x36ba50 = _0xd4e72c / _0x4061f1.interpR
        _0x14f8e2.scale(_0x36ba50, _0x36ba50)
        _0x14f8e2.translate(-_0x1342ec.x, -_0x1342ec.y)
        _0x4061f1.faceSkin = this.faceSkin
        _0x4061f1.bodySkin = this.bodySkin
        _0x4061f1.mood = _0x4229fb
        _0x4061f1.dirX += 0.2 * (_0x4061f1.newDirX - _0x4061f1.dirX)
        _0x4061f1.dirY += 0.2 * (_0x4061f1.newDirY - _0x4061f1.dirY)
        _0x4061f1.interpFace()
        _0x4061f1.draw(0, _0x14f8e2, false)
        _0x14f8e2.restore()
      },
    }
    return _0x205949.push(_0x5931b2), _0x5931b2
  }
  _0x43ebf1.onclick = function () {
    _0x428202.classList.remove('minimize-show')
    _0x484ced.classList.remove('game-show')
    ws &&
      ws.readyState === ws.OPEN &&
      setTimeout(function () {
        _0x13cd5d.classList.add('grid-show')
      }, 500)
  }
  _0x383dd8.onclick = function () {
    _0x1a5a3c.classList.remove('dialog-show')
    _0x383dd8.classList.remove('overlay-show')
  }
  _0x59ac35.onclick = _0x3666c5.onclick = function () {
    const _0x35b85b = this == _0x59ac35 ? _0xe81457 : _0x5a9c33
    ;(this == _0x59ac35 ? _0x5a9c33 : _0xe81457).classList.toggle('dialog-show')
    _0x35b85b.classList.remove('dialog-show')
    this === _0x3666c5 && (_0x2148a0 = false)
  }
  _0x12a2bd.onclick = function (_0x343c5a) {
    _0x343c5a.target == this &&
      (_0xe81457.classList.remove('dialog-show'),
      _0x5a9c33.classList.remove('dialog-show'))
  }
  const _0x3f6c23 = document.querySelectorAll('.dialog-close')
  for (let _0xb45a3 = 0; _0xb45a3 < _0x3f6c23.length; _0xb45a3++) {
    _0x3f6c23[_0xb45a3].onclick = function () {
      const _0x4f5761 = this.parentNode.parentNode
      _0x4f5761.classList.remove('dialog-show')
      _0x4f5761 == _0x1a5a3c
        ? _0x383dd8.classList.remove('overlay-show')
        : _0x4f5761 == _0x448556 && _0x13cd5d.classList.remove('grid-pushup')
    }
  }
  const _0x3beb31 = document.querySelector('.shop-btn'),
    _0x147fe5 = document.querySelector('.squad-btn'),
    _0x448556 = document.querySelector('.squad'),
    _0x42c112 = document.querySelectorAll('.shop .dialog-content'),
    _0x359c0f = document.querySelector('.play-btn')
  let _0x2148a0 = true,
    _0x155ccf = {}
  function _0x394270() {
    if (!_0x335da6.checked) {
      return
    }
    let _0x3abbdc = 0,
      _0x2fd892 = 0
    console.log(_0x155ccf)
    _0x155ccf.KeyW || _0x155ccf.ArrowUp
      ? (_0x2fd892 = -1)
      : (_0x155ccf.KeyS || _0x155ccf.ArrowDown) && (_0x2fd892 = 1)
    _0x155ccf.KeyA || _0x155ccf.ArrowLeft
      ? (_0x3abbdc = -1)
      : (_0x155ccf.KeyD || _0x155ccf.ArrowRight) && (_0x3abbdc = 1)
    ;(0 !== _0x3abbdc || 0 !== _0x2fd892) &&
      _0x47adf7(Math.atan2(_0x2fd892, _0x3abbdc))
  }
  function _0x3f29dc() {
    const _0x1d302d = parseInt(localStorage.equipped_face_skin),
      _0x411958 = parseInt(localStorage.equipped_body_skin)
    return [_0x3a8d81(_0x1d302d), _0x3a8d81(_0x411958)]
    function _0x3a8d81(_0x1ae367) {
      return isNaN(_0x1ae367) ? -1 : _0x1ae367
    }
  }
  function _0x13ae30() {
    _0xe81457.classList.remove('dialog-show')
    _0x5a9c33.classList.remove('dialog-show')
  }
  function _0x4a3931(_0x3e8051) {
    const _0x34fb6a = document.querySelectorAll(_0x3e8051 + ' .btn')
    for (let _0x3b59c6 = 0; _0x3b59c6 < _0x34fb6a.length; _0x3b59c6++) {
      _0x34fb6a[_0x3b59c6].onclick = function () {
        const _0x47f712 = document.querySelector(_0x3e8051 + ' .btn-active')
        if (
          (_0x47f712 && _0x47f712.classList.remove('btn-active'),
          this.classList.add('btn-active'),
          '.tabs' === _0x3e8051)
        ) {
          for (let _0xab2a39 = 0; _0xab2a39 < _0x445753.length; _0xab2a39++) {
            const _0x528f23 = _0x445753[_0xab2a39]
            0 !== _0x3b59c6
              ? _0x528f23.parentNode !== _0x528f23.initialParent &&
                (_0x528f23.initialParent.insertBefore(
                  _0x528f23,
                  _0x528f23.tempDiv
                ),
                _0x528f23.tempDiv.remove())
              : _0x528f23.parentNode !== _0x5a0a07 &&
                (_0x528f23.initialParent.insertBefore(
                  _0x528f23.tempDiv,
                  _0x528f23
                ),
                _0x5a0a07.appendChild(_0x528f23))
          }
          for (let _0x1ddd63 = 0; _0x1ddd63 < _0x42c112.length; _0x1ddd63++) {
            _0x42c112[_0x1ddd63].style.display =
              _0x1ddd63 === _0x3b59c6 ? '' : 'none'
          }
        }
      }
    }
  }
  document.onkeydown = function (_0x54b086) {
    if (9 === _0x54b086.which) {
      return false
    }
    _0x54b086.repeat ||
      ((_0x155ccf[_0x54b086.code] = true), _0x394270(), _0x488c57())
  }
  document.onkeyup = function (_0x3ec5c8) {
    delete _0x155ccf[_0x3ec5c8.code]
    _0x394270()
    _0x488c57()
    'KeyC' === _0x3ec5c8.code
      ? _0x26f99d.toBlob(function (_0xc842a0) {
          navigator.clipboard.write([
            new ClipboardItem({ 'image/png': _0xc842a0 }),
          ])
        })
      : 'Escape' === _0x3ec5c8.code
      ? _0x484ced.classList.contains('game-show')
        ? _0x4c9cf7.click()
        : _0x428202.classList.contains('minimize-show') && _0x1d2df3.click()
      : 'Enter' === _0x3ec5c8.code &&
        (_0x13cd5d.classList.contains('grid-show')
          ? _0x359c0f.click()
          : '' === _0x448eb2.style.display &&
            _0x484ced.classList.contains('game-show') &&
            _0x43ebf1.click())
  }
  _0x359c0f.onclick = function () {
    _0x13ae30()
    _0x13cd5d.classList.remove('grid-show')
    setTimeout(function () {
      const [_0x454fe7, _0x3894d4] = _0x3f29dc(),
        _0x1f3e24 = new TextEncoder().encode(_0x17d221.value.slice(0, 14)),
        _0x2b42d7 = new DataView(
          new ArrayBuffer(
            1 +
              (-1 !== _0x454fe7 ? 1 : 0) +
              (-1 !== _0x3894d4 ? 1 : 0) +
              _0x1f3e24.length
          )
        )
      let _0x17ccb9 = 0
      _0x2b42d7.setUint8(
        _0x17ccb9++,
        _0x119776(0, (-1 !== _0x454fe7 ? 1 : 0) | (-1 !== _0x3894d4 ? 2 : 0))
      )
      ;-1 !== _0x454fe7 && _0x2b42d7.setUint8(_0x17ccb9++, _0x454fe7)
      ;-1 !== _0x3894d4 && _0x2b42d7.setUint8(_0x17ccb9++, _0x3894d4)
      for (let _0x95688d = 0; _0x95688d < _0x1f3e24.length; _0x95688d++) {
        _0x2b42d7.setUint8(_0x17ccb9++, _0x1f3e24[_0x95688d])
      }
      wssender(_0x2b42d7)
    }, 200)
  }
  _0x3beb31.onclick = function () {
    _0x1a5a3c.querySelector('.tabs .btn').click()
    _0x1a5a3c.classList.add('dialog-show')
    _0x383dd8.classList.add('overlay-show')
  }
  _0x147fe5.onclick = function () {
    _0x448556.classList.add('dialog-show')
    _0x13cd5d.classList.add('grid-pushup')
  }
  _0x4a3931('.gamemodes')
  _0x4a3931('.tabs')
  ;(function () {
    const _0x2d6312 = document.createElement('canvas')
    _0x2d6312.width = _0x2d6312.height = 20
    const _0x1ff009 = _0x2d6312.getContext('2d'),
      _0x18371a = _0x1ff009.createImageData(20, 20),
      _0x55f1da = _0x18371a.data
    for (let _0x3caf9f = 0; _0x3caf9f < _0x55f1da.length; _0x3caf9f += 4) {
      _0x300ffc(_0x56432a.dirt)
      _0x55f1da[_0x3caf9f] = 0
      _0x55f1da[_0x3caf9f + 1] = 0
      _0x55f1da[_0x3caf9f + 2] = 0
      _0x55f1da[_0x3caf9f + 3] = 10 * Math.random()
    }
    _0x1ff009.putImageData(_0x18371a, 0, 0)
    const _0x2735a1 = document.createElement('style')
    _0x2735a1.innerText =
      '\n\t.bg {\n\t\tbackground-image: url(' +
      _0x2d6312.toDataURL() +
      ');\n\t\tbackground-size: 200px;\n\t\tanimation: bg 15s linear infinite;\n\t\timage-rendering: pixelated;\n\t}\n\n\t@keyframes bg {\n\t\tfrom {\n\t\t\tbackground-position: 0 0;\n\t\t}\n\t\tto {\n\t\t\tbackground-position: -200px -200px;\n\t\t}\n\t}\n\t'
    document.body.appendChild(_0x2735a1)
    _0x12a2bd.classList.add('bg')
  })()
  const _0x2b7207 = []
  let _0x424189 = 0
  function _0x7dce37(_0x1cb70f) {
    _0x1434d0.score = _0x1cb70f
    _0x424189 = Math.max(_0x1cb70f, _0x424189)
    _0x2b7207.push(_0x1cb70f)
  }
  let _0x45d9f7 = document.querySelector('.score-graph')
  const _0x44d36b = document.querySelectorAll('.gold-preview span'),
    _0x49883c = document.getElementById('goldCanvas'),
    _0x44f8ea = _0x49883c.getContext('2d'),
    _0x26f99d = document.getElementById('canvas')
  _0x50c4a4()
  const _0x33e0cf = _0x26f99d.getContext('2d')
  function _0x50c4a4() {
    const _0x4e44c6 = _0x1dcf32.checked ? window.devicePixelRatio : 1
    _0x26f99d.width = _0x49883c.width = window.innerWidth * _0x4e44c6
    _0x26f99d.height = _0x49883c.height = window.innerHeight * _0x4e44c6
    _0x26f99d.style.width = _0x49883c.style.width = window.innerWidth + 'px'
    _0x26f99d.style.height = _0x49883c.style.height = window.innerHeight + 'px'
  }
  window.onresize = function () {
    _0x50c4a4()
    _0x5e1fba()
  }
  const _0x35a74e = document.querySelector('.alert'),
    _0x57cf7e = _0x35a74e.querySelector('.alert-desc'),
    _0x1cfc3d = document.querySelector('.hud'),
    _0x208afe = [_0x12a2bd, _0x1cfc3d, _0x448eb2, _0x17edf6, _0x35a74e]
  let _0x4b538e = 1
  function _0x5e1fba() {
    _0x4b538e =
      Math.max(window.innerWidth / 1366, window.innerHeight / 657) *
      (_0xe43c40 && !_0x5aa403 ? 1.6 : 1)
    for (let _0x448f1d = 0; _0x448f1d < _0x208afe.length; _0x448f1d++) {
      const _0xd4ae58 = _0x208afe[_0x448f1d]
      let _0x18bb53 = _0x4b538e
      _0xd4ae58.style.transform = 'scale(' + _0x18bb53 + ')'
      _0xd4ae58.style.transformOrigin = '0 0'
      _0xd4ae58.style.width = window.innerWidth / _0x18bb53 + 'px'
      _0xd4ae58.style.height = window.innerHeight / _0x18bb53 + 'px'
    }
  }
  _0x5e1fba()
  let _0xd5d348 = 0,
    _0x37f1e9 = 0
  function _0x83a68f(_0x44f38f) {
    return _0x44f38f < 0.01
      ? '0'
      : (_0x44f38f = parseInt(_0x44f38f)) >= 1000000
      ? parseFloat((_0x44f38f / 1000000).toFixed(2)) + 'm'
      : _0x44f38f >= 1000
      ? parseFloat((_0x44f38f / 1000).toFixed(1)) + 'k'
      : _0x44f38f
  }
  const _0x130074 = document.querySelector('.stats')
  function _0x340516(_0x5c804b) {
    const _0x50aa38 = [
        Math.floor(_0x5c804b / 3600000),
        Math.floor((_0x5c804b % 3600000) / 60000),
        Math.floor((_0x5c804b % 60000) / 1000),
      ],
      _0x5031e4 = ['h', 'm', 's']
    let _0x46eb4b = ''
    for (let _0x3d1d4e = 0; _0x3d1d4e < _0x50aa38.length; _0x3d1d4e++) {
      const _0x3966ad = _0x50aa38[_0x3d1d4e]
      ;(_0x3966ad > 0 || 2 == _0x3d1d4e) &&
        (_0x46eb4b += _0x3966ad + _0x5031e4[_0x3d1d4e] + ' ')
    }
    return _0x46eb4b
  }
  const _0x4a1682 = []
  let _0x3e3b1a, _0x99a5a4, ws, _0x676061, _0x23f220
  function _0xaeee8d(_0xaf314c) {
    if (
      (console.log('Connecting to ' + _0xaf314c + '...'),
      (_0x5027f2.innerHTML = ''),
      _0x101d88.classList.add('connecting-show'),
      _0x428202.classList.remove('minimize-show'),
      (_0x3ed7e7 = false),
      _0x43ebf1.click(),
      _0x13cd5d.classList.remove('grid-show'),
      _0x383dd8.onclick(),
      (_0x74e809.length = 0),
      (_0x4dd092.length = 0),
      (_0x99a5a4 = null),
      (_0x3e3b1a = null),
      (_0x54a679.length = 0),
      (_0x4a1682.length = 0),
      (_0x51bcdc.length = 0),
      (_0xd5d348 = 0),
      (_0x37f1e9 = 0),
      (_0x676061 = null),
      (_0x23f220 = 0),
      (_0x45bb9e = null),
      (_0x5b44b7 = 0),
      (_0x420821 = null),
      (_0x4aaa30.style.display =
        _0x1cb108.style.display =
        _0x4f81b4.style.display =
          'none'),
      ws)
    ) {
      try {
        ws.close()
      } catch (_0x28418e) {}
      ws.onopen = ws.onmessage = ws.onclose = null
      ws = null
    }
    ws = new WebSocket(_0xaf314c)
    ws.binaryType = 'arraybuffer'
    ws.onopen = _0x2149ba
    ws.onmessage = _0x10a4b7
    ws.onclose = _0x1f47a0
  }
  const _0x28dd9d = document.querySelector('.avatar'),
    _0x261806 = document.querySelector('.username'),
    _0x4f81b4 = document.querySelector('.user')
  let accid, _0x420821
  function _0x2149ba() {
    var _0x2ffc81
    if (
      (console.log('Connected!'),
      (function () {
        _0x205949.length = 1
        for (let _0x3bc411 in skins) {
          const _0x3a4ae0 = skins[_0x3bc411]
          for (let _0x43209a = 0; _0x43209a < _0x3a4ae0.length; _0x43209a++) {
            delete _0x3a4ae0[_0x43209a].owned
            delete _0x3a4ae0[_0x43209a].purchaseSent
          }
        }
        _0x1768d4(skins.faceSkins, _0x1ed5cc, 'face')
        _0x1768d4(skins.bodySkins, _0xecb25b, 'body')
        _0x445753.length = 0
        _0x5a0a07.innerHTML = ''
        const _0x1d05dc = skins.faceSkins
            .concat(skins.bodySkins)
            .sort(function (_0x3a574a, _0x2aa62b) {
              return _0x2aa62b.createdAt - _0x3a574a.createdAt
            }),
          _0x1ea169 = Math.min(4, _0x1d05dc.length)
        for (let _0x213d8b = 0; _0x213d8b < _0x1ea169; _0x213d8b++) {
          _0x445753.push(_0x1d05dc[_0x213d8b].shopItemEl)
        }
      })(),
      _0x132df4(localStorage.account_id) ||
        (localStorage.account_id = crypto.randomUUID()),
      (accid = localStorage.account_id),
      (_0x420821 = localStorage.discord_data),
      _0x420821 ||
        ('discord_data',
        (_0x2ffc81 = document.cookie.match(
          RegExp(
            '(?:^|;\\s*)' +
              'discord_data'.replace(/([.*+?\^$(){}|\[\]\/\\])/g, '\\$1') +
              '=([^;]*)'
          )
        )),
        (_0x420821 = _0x2ffc81 ? _0x2ffc81[1] : null),
        _0x420821 && (_0x420821 = decodeURIComponent(_0x420821)),
        (document.cookie =
          'discord_data=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;')),
      _0x420821)
    ) {
      console.log(_0x420821)
      try {
        const _0x233426 = _0x420821
        if (
          ((_0x420821 = JSON.parse(
            decodeURIComponent(escape(atob(_0x233426)))
          )),
          !_0x132df4(_0x420821.accountId))
        ) {
          throw new Error('invalid uuid')
        }
        accid = _0x420821.accountId
        _0x261806.setAttribute('stroke', _0x420821.name)
        _0x420821.avatar &&
          (_0x28dd9d.style.backgroundImage = 'url(' + _0x420821.avatar + ')')
        localStorage.discord_data = _0x233426
      } catch (_0x2f76b4) {
        _0x420821 = null
        delete localStorage.discord_data
        console.error(_0x2f76b4)
      }
    }
    const _0x36476a = new DataView(new ArrayBuffer(5 + accid.length))
    _0x36476a.setUint8(0, _0x119776(3, 0))
    _0x36476a.setUint32(1, 1)
    for (let _0x52843f = 0; _0x52843f < accid.length; _0x52843f++) {
      _0x36476a.setUint8(5 + _0x52843f, accid.charCodeAt(_0x52843f))
    }
    wssender(_0x36476a)
  }
  let _0x596c53 = 0
  const _0x54a679 = []
  let _0x3ed7e7 = false,
    _0x4dd092 = []
  function _0xa52dfb(_0x3c82bc, _0x107368) {
    const _0x3423cb = document.createElement('div')
    _0x3423cb.classList.add('lb-item')
    const _0xf15469 = document.createElement('div')
    _0xf15469.classList.add('lb-bar')
    _0x3423cb.appendChild(_0xf15469)
    const _0x5ef9ed = document.createElement('span')
    _0x3423cb.appendChild(_0x5ef9ed)
    _0x5027f2.appendChild(_0x3423cb)
    const _0x226e07 = {
      name: _0x3c82bc,
      score: _0x107368,
      iScore: 0,
      percent: 0,
      iPercent: 0,
      lbItemEl: _0x3423cb,
      lbBarEl: _0xf15469,
      lbTextEl: _0x5ef9ed,
      update: function () {
        this.iScore += 0.1 * (this.score - this.iScore)
        this.iPercent += 0.1 * (this.percent - this.iPercent)
        this.lbTextEl.setAttribute(
          'stroke',
          (this.name ? this.name + ' - ' : '') + _0x83a68f(this.iScore)
        )
        this.lbBarEl.style.width = this.iPercent + '%'
      },
    }
    return _0x226e07.update(), _0x4dd092.push(_0x226e07), _0x226e07
  }
  const _0x1434d0 = _0xa52dfb('', 0)
  function _0x541897() {
    if (0 === _0x4dd092.length) {
      return
    }
    const _0x172848 = _0x4dd092[0]
    _0x172848.percent = _0x172848.iPercent = 100
    let _0x30b19c = _0x172848.isMe
    for (let _0x4ef02f = 1; _0x4ef02f < _0x4dd092.length; _0x4ef02f++) {
      const _0x5a7eb3 = _0x4dd092[_0x4ef02f]
      _0x1f536f(_0x5a7eb3, _0x172848)
      const _0x246b46 = _0x5a7eb3.lbItemEl
      _0x246b46.parentNode.appendChild(_0x246b46)
      _0x5a7eb3.isMe && (_0x30b19c = true)
    }
    _0x30b19c ||
      (_0x1f536f(_0x1434d0, _0x172848),
      _0x5027f2.appendChild(_0x1434d0.lbItemEl))
  }
  function _0x1f536f(_0x28e181, _0x110d48) {
    _0x28e181.percent =
      100 * Math.min(1, _0x28e181.score / _0x110d48.score || 0)
  }
  _0x1434d0.lbItemEl.classList.add('my-lb-item')
  _0x1434d0.isMe = true
  const _0x51bcdc = []
  let _0x3463f0 = 0
  Math.sqrt(2)
  let _0x2b9cba = 0
  const _0x74e809 = []
  function _0x47f9f5(_0x4ecdf8, _0x5c1abc) {
    const _0x482726 = skins[_0x4ecdf8 + 'Skins'][_0x5c1abc]
    _0x482726.owned = true
    const _0xa5bc07 = _0x482726.shopItemEl.querySelector('.btn')
    _0xa5bc07.classList.remove('gold-btn')
    _0xa5bc07.classList.add('blue-btn')
    _0xa5bc07.classList.remove('btn-disabled')
    _0xa5bc07.innerHTML = '<span stroke="Equip"></span>'
    const _0x4d21aa = 'equipped_' + _0x4ecdf8 + '_skin'
    _0xa5bc07.onclick = function () {
      const _0x357931 = document.querySelector(
        '.' + _0x4ecdf8 + '-skin [stroke=Unequip]'
      )
      _0x357931 && _0x357931.setAttribute('stroke', 'Equip')
      const _0x592b5b = _0x357931 && _0x357931.parentNode === this
      _0x592b5b || _0xa5bc07.children[0].setAttribute('stroke', 'Unequip')
      localStorage[_0x4d21aa] = _0x592b5b ? -1 : _0x5c1abc
      const _0x38a8c5 = _0x3f29dc()
      _0x5c65f3.classList[
        -1 === _0x38a8c5[0] && -1 === _0x38a8c5[1] ? 'add' : 'remove'
      ]('btn-disabled')
      console.log(localStorage[_0x4d21aa])
    }
    parseInt(localStorage[_0x4d21aa]) === _0x5c1abc && _0xa5bc07.onclick()
  }
  function _0x23f322() {
    _0x3be1f5('face')
    _0x3be1f5('body')
  }
  function _0x3be1f5(_0x5f0674) {
    const _0x339726 = skins[_0x5f0674 + 'Skins']
    for (let _0x1a7fa8 = 0; _0x1a7fa8 < _0x339726.length; _0x1a7fa8++) {
      const _0x5f1d80 = _0x339726[_0x1a7fa8]
      if (_0x5f1d80.owned) {
        continue
      }
      const _0x6baf7c = _0x5f1d80.shopItemEl.querySelector('.btn')
      _0x2b9cba >= _0x5f1d80.price
        ? (_0x6baf7c.classList.remove('btn-disabled'),
          (_0x6baf7c.onclick = function () {
            if (_0x5f1d80.purchaseSent) {
              return
            }
            _0x5f1d80.purchaseSent = true
            const _0x53571c = new DataView(new ArrayBuffer(2))
            _0x53571c.setUint8(0, _0x119776(4, 'face' === _0x5f0674 ? 0 : 1))
            _0x53571c.setUint8(1, _0x1a7fa8)
            wssender(_0x53571c)
            _0x6baf7c.classList.add('btn-disabled')
            _0x6baf7c.blur()
            _0x74e809.push({
              skin: _0x5f1d80,
              i: _0x1a7fa8,
              prefix: _0x5f0674,
            })
          }))
        : (_0x6baf7c.classList.add('btn-disabled'), (_0x6baf7c.onclick = null))
    }
  }
  function _0x13dedc() {
    const _0x25a5dd = _0x2b9cba
      .toLocaleString('en', { notation: 'compact' })
      .toLowerCase()
    for (let _0xf712b5 = 0; _0xf712b5 < _0x44d36b.length; _0xf712b5++) {
      _0x44d36b[_0xf712b5].innerText = _0x25a5dd
    }
  }
  function _0x41e950(_0x54cb52) {
    for (_0x54cb52 = Math.ceil(_0x54cb52 / 2); _0x54cb52--; ) {
      _0x1d5e51.push({
        spawnTime:
          (_0x1d5e51[_0x1d5e51.length - 1] || { spawnTime: 0 }).spawnTime +
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
  let _0x579128, _0x5af3ad
  const _0x17e92c = document.querySelector('.reward-btns'),
    _0x15a6d5 = _0x17e92c.querySelector('.arrow'),
    _0x4e5934 = document.getElementById('rewardStatus')
  function _0x35cdfe(_0x5057a0) {
    let _0x83a9b7 = Math.ceil(_0x5057a0 / 1000 / 60)
    const _0x5af317 = Math.floor(_0x83a9b7 / 60)
    _0x83a9b7 %= 60
    let _0x4e230e = ''
    function _0x5b9040(_0x35be8f) {
      return _0x35be8f > 1 ? 's ' : ' '
    }
    return (
      _0x5af317 > 0 &&
        (_0x4e230e += _0x5af317 + ' hour' + _0x5b9040(_0x5af317)),
      (0 != _0x5af317 && 0 == _0x83a9b7) ||
        (_0x4e230e += _0x83a9b7 + ' min' + _0x5b9040(_0x83a9b7)),
      _0x4e230e
    )
  }
  _0x17e92c.innerHTML = ''
  for (let _0xd41cd5 = 0; _0xd41cd5 < _0xa0938e.length; _0xd41cd5++) {
    _0x17e92c.innerHTML +=
      '<div class="btn btn-disabled"><span stroke="' +
      _0xa0938e[_0xd41cd5] +
      '"></span></div>'
  }
  let _0x36709d
  function _0x20fe45() {
    const _0xd0d807 = _0x17e92c.querySelector('.gold-btn')
    _0xd0d807 &&
      (_0xd0d807.classList.remove('gold-btn'),
      _0xd0d807.classList.add('btn-disabled'),
      (_0xd0d807.onclick = null))
    const _0x1f401a =
      _0x17e92c.children[Math.min(_0xa0938e.length - 1, _0x579128)]
    _0x579128 < _0xa0938e.length &&
      ((_0x36709d = _0x1f401a),
      _0x1f401a.classList.add('gold-btn'),
      _0x1f401a.classList.add('btn-disabled'),
      (_0x1f401a.onclick = function () {
        this.rewardSent = true
        this.classList.add('btn-disabled')
        wssender(new Uint8Array([_0x119776(5, 0)]))
      }))
    _0x1f401a.appendChild(_0x15a6d5)
  }
  const _0x18806e = document.querySelector('.lb-footer')
  let _0x55ca1c,
    _0x45bb9e,
    _0x4e23d7 = {}
  function _0x1e7731(_0x5a80a5) {
    _0x3792a5.style.display = _0x2b813a.style.display = _0x5a80a5 ? '' : 'none'
    _0x5a80a5 ||
      ((_0x4e7f64.style.display = 'none'),
      (_0x1a90df = _0x1ad87c = _0x16487e = null))
  }
  function _0x10a4b7(_0x51b18b) {
    if ('string' == typeof _0x51b18b.data) {
      return
    }
    !(function () {
      const _0x5b1bbe = _0x51b18b.data
      if (_0x676061) {
        const _0x2a1dc4 = new Uint8Array(_0x5b1bbe),
          _0x7d3b68 = new Uint8Array(_0x2a1dc4.length)
        for (let _0x4405e2 = 0; _0x4405e2 < _0x2a1dc4.length; _0x4405e2++) {
          _0x7d3b68[_0x4405e2] = _0x2a1dc4[_0x4405e2]
          _0x2a1dc4[_0x4405e2] ^=
            _0x676061[(_0x23f220 + _0x4405e2) % _0x676061.length]
        }
        _0x676061 = _0x7d3b68
      } else {
        _0x676061 = new Uint8Array(_0x5b1bbe)
      }
      _0x23f220 = (_0x23f220 + 1) % 1000
    })()
    const _0x1bec4d = new DataView(_0x51b18b.data)
    _0x596c53 += _0x1bec4d.byteLength
    let _0x297bfc = 0
    function _0x36dbb2() {
      const _0x426747 = _0x1bec4d.getUint8(_0x297bfc++)
      if (_0x426747 > 0) {
        const _0x2bdf96 = new Uint8Array(_0x426747)
        for (let _0x3af940 = 0; _0x3af940 < _0x426747; _0x3af940++) {
          _0x2bdf96[_0x3af940] = _0x1bec4d.getUint8(_0x297bfc++)
        }
        return new TextDecoder().decode(_0x2bdf96)
      }
      return ''
    }
    const [_0x156991, _0x273991] = [
      (_0x1281ef = _0x1bec4d.getUint8(_0x297bfc++)) >> 4,
      15 & _0x1281ef,
    ]
    var _0x1281ef
    switch (_0x156991) {
      case 4:
        const {
          skin: _0x384779,
          i: _0x1f46d0,
          prefix: _0x531fa7,
        } = _0x74e809.shift()
        _0x47f9f5(_0x531fa7, _0x1f46d0),
          (_0x2b9cba -= _0x384779.price),
          _0x23f322(),
          console.log('skin purchased', {
            skin: _0x384779,
            prefix: _0x531fa7,
          }),
          _0x13dedc()
        break
      case 5:
        const _0x3bdcb6 = _0xa0938e[_0x579128++]
        ;(_0x2b9cba += _0x3bdcb6),
          _0x23f322(),
          _0x13dedc(),
          _0x20fe45(),
          (_0x5af3ad = Date.now() + 86400000),
          _0x41e950(_0x3bdcb6 / 2)
        break
      case 3:
        if (
          (_0x420821
            ? ((_0x4aaa30.style.display = ''), (_0x4f81b4.style.display = ''))
            : (_0x1cb108.style.display = ''),
          (_0x2b9cba = 0),
          0 === _0x273991)
        ) {
          _0x2b9cba = 0
          localStorage.equipped_body_skin = -1
          localStorage.equipped_face_skin = -1
          _0x579128 = 0
          _0x5af3ad = 0
        } else {
          _0x2b9cba = _0x1bec4d.getUint32(_0x297bfc)
          _0x297bfc += 4
          const _0x19185 = _0x1bec4d.getUint16(_0x297bfc)
          _0x297bfc += 2
          _0x579128 = _0x19185 >> 11
          const _0x24b018 = 2047 & _0x19185
          _0x5af3ad = Date.now() + 60 * _0x24b018 * 1000
          let _0x5c91b3 = false
          if (_0x297bfc < _0x1bec4d.byteLength) {
            let _0x736c5a = false
            const [_0x50e575, _0x351828] = _0x3f29dc(),
              _0x59da6d = _0x1bec4d.getUint8(_0x297bfc++)
            for (let _0x52d345 = 0; _0x52d345 < _0x59da6d; _0x52d345++) {
              const _0x32e140 = _0x1bec4d.getUint8(_0x297bfc++)
              _0x32e140 === _0x50e575 && (_0x5c91b3 = true)
              _0x47f9f5('face', _0x32e140)
            }
            for (; _0x297bfc < _0x1bec4d.byteLength; ) {
              const _0x582845 = _0x1bec4d.getUint8(_0x297bfc++)
              _0x582845 === _0x351828 && (_0x736c5a = true)
              _0x47f9f5('body', _0x582845)
            }
          }
          false || (localStorage.equipped_body_skin = -1)
          _0x5c91b3 || (localStorage.equipped_face_skin = -1)
        }
        _0x20fe45(),
          _0x5c65f3.classList.add('btn-disabled'),
          ('-1' == localStorage.equipped_face_skin &&
            '-1' == localStorage.equipped_body_skin) ||
            _0x5c65f3.classList.remove('btn-disabled'),
          _0x23f322(),
          _0x13dedc(),
          _0x101d88.classList.remove('connecting-show'),
          _0x13cd5d.classList.add('grid-show')
        break
      case 0:
        const _0x3ba2be = _0xa151bc[_0x273991] || 'unknown'
        console.log('Kicked! (reason: ' + _0x3ba2be + ')'),
          _0x57cf7e.setAttribute('stroke', 'reason: ' + _0x3ba2be),
          (_0x35a74e.style.display = ''),
          (_0xaeee8d = function () {})
        break
      case 1:
        5 == _0x1bec4d.byteLength &&
          ((_0x3e3b1a = _0x1bec4d.getUint32(_0x297bfc)),
          console.log({ myId: _0x3e3b1a })),
          (_0x582449 = _0x1dffa3 = 1),
          (_0x15a8bf = null),
          (_0x40182c = null),
          (_0x55ca1c = Date.now()),
          (_0xd5d348 = 0),
          console.log('joined game'),
          _0x2f4d30.classList.remove('btn-disabled'),
          _0x13cd5d.classList.remove('grid-show'),
          _0x484ced.classList.add('game-show'),
          (_0x448eb2.style.display = 'none'),
          (_0x2b7207.length = 0),
          (_0x4327b5 = {}),
          (_0x424189 = 0),
          _0x1e7731(_0xe43c40)
        break
      case 2:
        const _0x1d8e75 = 4 & _0x273991,
          _0x3119b2 = 8 & _0x273991,
          _0x490c5a = ((3 & _0x273991) << 2) | _0x1bec4d.getUint8(_0x297bfc++),
          _0x105063 = { _0x4d77cc: true },
          _0x315a8a = Date.now()
        for (let _0x23973b = 0; _0x23973b < _0x490c5a; _0x23973b++) {
          const _0x4d77cc = _0x1bec4d.getUint32(_0x297bfc)
          _0x297bfc += 4
          let _0x5df4ff = _0x4a1682.find(
            (_0x1d39f3) => _0x1d39f3.id === _0x4d77cc
          )
          const _0x5142e8 =
              (_0x1bec4d.getUint8(_0x297bfc++) / 255) * Math.PI * 2,
            _0x80447d = _0x1bec4d.getUint8(_0x297bfc++),
            _0x1ac747 = _0x80447d >> 6,
            _0x47a56e = (63 & _0x80447d) / 63
          if (_0x5df4ff) {
            _0x5df4ff.oldR = _0x5df4ff.r
            const _0xdc6864 = _0x5df4ff.segments[0]
            _0xdc6864.oldX = _0xdc6864.x
            _0xdc6864.oldY = _0xdc6864.y
            _0xdc6864.x += _0x1bec4d.getInt8(_0x297bfc++)
            _0xdc6864.y += _0x1bec4d.getInt8(_0x297bfc++)
            _0xdc6864.interpOldX = _0xdc6864.interpX
            _0xdc6864.interpOldY = _0xdc6864.interpY
            let _0x5a6c2c = _0x1bec4d.getInt8(_0x297bfc++)
            for (; _0x5a6c2c < 0; ) {
              _0x5df4ff.segments.pop()
              _0x5a6c2c++
            }
            _0x2cc589(_0x5df4ff)
            const _0x10049e = _0x5df4ff.segments[_0x5df4ff.segments.length - 1]
            for (; _0x5a6c2c > 0; ) {
              _0x5df4ff.segments.push(Object.assign({}, _0x10049e))
              _0x5a6c2c--
            }
            _0x5df4ff.interpOldR = _0x5df4ff.interpR
            _0x5df4ff.r = _0x12e33e(_0x5df4ff)
            _0x5df4ff.oldDirX = _0x5df4ff.dirX
            _0x5df4ff.oldDirY = _0x5df4ff.dirY
            _0x5df4ff.newDirX = Math.cos(_0x5142e8)
            _0x5df4ff.newDirY = Math.sin(_0x5142e8)
            _0x5df4ff.updateTime = _0x315a8a
          } else {
            _0x5df4ff = new _0x3a020e(_0x4d77cc, _0x5142e8)
            _0x5df4ff.faceSkin = _0x1bec4d.getUint8(_0x297bfc++) - 1
            _0x5df4ff.bodySkin = _0x1bec4d.getUint8(_0x297bfc++) - 1
            _0x5df4ff.energy = _0x47a56e
            _0x4d77cc == _0x3e3b1a && (_0x99a5a4 = _0x5df4ff)
            _0x4a1682.push(_0x5df4ff)
            const _0xfd49cd = _0x1bec4d.getUint16(_0x297bfc)
            _0x297bfc += 2
            const _0xfeca96 = _0x1bec4d.getUint16(_0x297bfc)
            _0x297bfc += 2
            _0x5df4ff.segments[0] = {
              x: _0xfd49cd,
              y: _0xfeca96,
              oldX: _0xfd49cd,
              oldY: _0xfeca96,
              interpOldX: _0xfd49cd,
              interpOldY: _0xfeca96,
              interpX: _0xfd49cd,
              interpY: _0xfeca96,
            }
            const _0x2ce735 = _0x1bec4d.getUint16(_0x297bfc)
            _0x297bfc += 2
            for (let _0x117845 = 0; _0x117845 < _0x2ce735; _0x117845++) {
              let _0x571c9d = _0x5df4ff.segments[_0x117845]
              const _0x32e6f6 = {
                x: _0x571c9d.x + _0x1bec4d.getInt8(_0x297bfc++),
                y: _0x571c9d.y + _0x1bec4d.getInt8(_0x297bfc++),
              }
              _0x32e6f6.oldX =
                _0x32e6f6.interpOldX =
                _0x32e6f6.interpX =
                  _0x32e6f6.x
              _0x32e6f6.oldY =
                _0x32e6f6.interpOldY =
                _0x32e6f6.interpY =
                  _0x32e6f6.y
              _0x5df4ff.segments.push(_0x32e6f6)
            }
            _0x5df4ff.nickname = _0x36dbb2()
            _0x4e23d7[_0x5df4ff.id] = _0x5df4ff.nickname
            _0x99a5a4 === _0x5df4ff && (_0x1434d0.name = _0x5df4ff.nickname)
            _0x5df4ff.r =
              _0x5df4ff.interpOldR =
              _0x5df4ff.interpR =
                _0x12e33e(_0x5df4ff)
          }
          _0x5df4ff.mood = _0x1ac747
          _0x5df4ff.oldEnergy = _0x5df4ff.iEnergy
          _0x47a56e < _0x5df4ff.energy && (_0x5df4ff.energyChangeCounter = 1)
          _0x5df4ff.energy = _0x47a56e
        }
        const _0x56b706 = _0x3a7e1a(_0x99a5a4)
        let _0x3bc8c0 = _0x1bec4d.getUint8(_0x297bfc++)
        for (; _0x3bc8c0--; ) {
          const _0x72b42d = _0x1bec4d.getUint8(_0x297bfc++),
            _0xd54c14 = _0x56b706.sx + (15 & _0x72b42d),
            _0x361a59 = _0x56b706.sy + (_0x72b42d >> 4),
            _0x36c1fc = []
          for (let _0x23b61b = 0; _0x23b61b < 128; _0x23b61b++) {
            const _0x3196a9 = _0x1bec4d.getUint8(_0x297bfc++),
              _0x3d333c = 15 & _0x3196a9,
              _0xd72c25 = _0x3196a9 >> 4
            _0x36c1fc.push(_0x3d333c, _0xd72c25)
          }
          _0x54a679[32 * _0x361a59 + _0xd54c14] = _0x36c1fc
          _0x4e03dd(_0x36c1fc)
        }
        _0x99a5a4.segments[0]
        let _0x53408a = _0x1bec4d.getUint8(_0x297bfc++)
        for (let _0x1641a7 = 0; _0x1641a7 < _0x53408a; _0x1641a7++) {
          const _0x5a21db = _0x1bec4d.getUint8(_0x297bfc++),
            _0x25047a = _0x56b706.sx + (15 & _0x5a21db),
            _0x50eae3 = _0x56b706.sy + (_0x5a21db >> 4),
            _0x456915 = _0x54a679[32 * _0x50eae3 + _0x25047a],
            _0x3689bb = _0x1bec4d.getUint8(_0x297bfc++) + 1
          let _0x2a5835 = 0,
            _0x3974bd = 0,
            _0x841f21 = 0
          for (let _0x436186 = 0; _0x436186 < _0x3689bb; _0x436186++) {
            const _0x2ac73f = _0x1bec4d.getUint8(_0x297bfc + _0x436186),
              _0x253c8f = _0x456915[_0x2ac73f]
            0 == _0x3974bd
              ? ((_0x2a5835 = _0x1bec4d.getUint8(
                  _0x297bfc + _0x3689bb + _0x841f21++
                )),
                (_0x3974bd = 1),
                (_0x456915[_0x2ac73f] = 15 & _0x2a5835))
              : ((_0x456915[_0x2ac73f] = _0x2a5835 >> 4), (_0x3974bd = 0))
            const _0x5d87ef = _0x2ac73f % 16,
              _0x5540ad = Math.floor(_0x2ac73f / 16),
              _0x4cee53 = _0x456915[_0x2ac73f]
            if (_0x4cee53 === _0x56432a.empty) {
              const _0x16ba9a = _0x25047a * 16 + _0x5d87ef,
                _0x53e073 = _0x50eae3 * 16 + _0x5540ad,
                _0x583e96 = _0x456915.ctx.getImageData(
                  _0x5d87ef,
                  _0x5540ad,
                  1,
                  1
                ).data
              if (
                (_0x51bcdc.push({
                  x: _0x16ba9a * 30,
                  y: _0x53e073 * 30,
                  dir: Math.random() > 0.5 ? -1 : 1,
                  angle: Math.random() * Math.PI * 2,
                  time: Date.now(),
                  color: 'rgba(' + _0x583e96.join(',') + ')',
                }),
                _0x456915.ctx.clearRect(_0x5d87ef, _0x5540ad, 1, 1),
                _0x253c8f === 2)
              ) {
                for (
                  let _0x4ccf09 = 0;
                  _0x4ccf09 < _0x4a1682.length;
                  _0x4ccf09++
                ) {
                  const _0x50d645 = _0x4a1682[_0x4ccf09],
                    _0xf674f1 = _0x50d645.segments[0]
                  _0x2be493(_0x16ba9a, _0x53e073, _0x50d645.oldR, _0xf674f1) &&
                    ((_0x50d645.diggedLavaAt = _0x315a8a),
                    _0x50d645 == _0x99a5a4 && (_0x5d9381 = 1))
                }
              }
            } else {
              const _0x16e552 = _0x300ffc(_0x4cee53)
              _0x456915.ctx.fillStyle = 'rgb(' + _0x16e552.join(',') + ')'
              _0x456915.ctx.fillRect(_0x5d87ef, _0x5540ad, 1, 1)
            }
          }
          _0x297bfc += _0x3689bb
          _0x297bfc += Math.ceil(0.5 * _0x3689bb)
        }
        const _0x29f87b = _0x1bec4d.getUint16(_0x297bfc)
        ;(_0x297bfc += 2),
          _0x18806e.setAttribute(
            'stroke',
            _0x29f87b + ' player' + (1 !== _0x29f87b ? 's' : '') + ' online'
          )
        const _0x440f7e = _0x1bec4d.getUint16(_0x297bfc)
        ;(_0x297bfc += 2), (_0x3463f0 = 1023 & _0x440f7e)
        const _0x7fcbff = _0x440f7e >> 11,
          _0x12e140 = 1024 & _0x440f7e
        _0x2eb4a5.setAttribute(
          'stroke',
          _0x3463f0 + ' worm' + (1 != _0x3463f0 ? 's' : '')
        )
        let _0x3dce0a = -1
        if (
          (_0x1d8e75 && (_0x3dce0a = _0x1bec4d.getUint8(_0x297bfc++)),
          _0x3ed7e7)
        ) {
          let _0x3dcbcf = 0,
            _0x36e86d = 0
          if (_0x12e140) {
            const _0x79f76e = _0x1bec4d.getUint8(_0x297bfc++)
            _0x3dcbcf = _0x79f76e >> 4
            _0x36e86d = 15 & _0x79f76e
          }
          const _0x1d6b22 = _0x7fcbff + _0x36e86d,
            _0x4b14f1 = []
          let _0x1de3e8 = 0,
            _0x49c5b4 = 0
          for (let _0x59198f = 0; _0x59198f < _0x1d6b22; _0x59198f++) {
            0 == _0x49c5b4
              ? ((_0x1de3e8 = _0x1bec4d.getUint8(_0x297bfc++)),
                (_0x49c5b4 = 1),
                _0x4b14f1.push(15 & _0x1de3e8))
              : (_0x4b14f1.push(_0x1de3e8 >> 4), (_0x49c5b4 = 0))
          }
          for (let _0x105113 = 0; _0x105113 < _0x7fcbff; _0x105113++) {
            const _0x20fc5d = _0x4b14f1[_0x105113],
              _0xf446c6 = _0x4dd092[_0x20fc5d]
            _0xf446c6.score = _0x1e89b2(_0x1bec4d.getUint16(_0x297bfc))
            _0x297bfc += 2
            _0xf446c6.isMe && _0x7dce37(_0xf446c6.score)
          }
          const _0x27b60c = []
          for (let _0x4fe742 = 0; _0x4fe742 < _0x36e86d; _0x4fe742++) {
            const _0x13766e = _0x4b14f1[_0x7fcbff + _0x4fe742]
            _0x27b60c.push(_0x13766e)
          }
          _0x27b60c.sort(function (_0x5abbac, _0x1f860c) {
            return _0x1f860c - _0x5abbac
          })
          for (let _0x21562d = 0; _0x21562d < _0x27b60c.length; _0x21562d++) {
            const _0x538ebe = _0x27b60c[_0x21562d]
            _0x4dd092[_0x538ebe].lbItemEl.remove()
            _0x4dd092.splice(_0x538ebe, 1)
          }
          for (let _0x27382e = 0; _0x27382e < _0x3dcbcf; _0x27382e++) {
            const _0x5e7ded = _0x1e89b2(_0x1bec4d.getUint16(_0x297bfc))
            _0x297bfc += 2
            _0xa52dfb(_0x36dbb2(), _0x5e7ded)
          }
          _0x4dd092 = _0x4dd092.sort(function (_0x2e0afa, _0xdc9ec5) {
            return _0xdc9ec5.score - _0x2e0afa.score
          })
          _0x541897()
        } else {
          _0x4dd092.length = 0
          const _0xa62db8 = Math.min(10, _0x3463f0)
          for (let _0x1c65fd = 0; _0x1c65fd < _0xa62db8; _0x1c65fd++) {
            const _0x360688 = _0x1e89b2(_0x1bec4d.getUint16(_0x297bfc))
            _0x297bfc += 2
            _0xa52dfb(_0x36dbb2(), _0x360688)
          }
          _0x541897()
          _0x3ed7e7 = true
        }
        if (_0x1d8e75) {
          const _0x432cb3 = _0x4dd092[_0x3dce0a],
            _0x950524 = _0x432cb3.lbItemEl
          _0x1434d0.score = _0x432cb3.score
          _0x5027f2.insertBefore(_0x1434d0.lbItemEl, _0x950524)
          _0x950524.remove()
          _0x4dd092[_0x3dce0a] = _0x1434d0
        }
        let _0x4badaa = false,
          _0x5276e5 = Math.floor((_0x1bec4d.byteLength - _0x297bfc) / 4)
        _0x3119b2 && _0x5276e5--
        for (let _0x4619db = 0; _0x4619db < _0x5276e5; _0x4619db++) {
          const _0x43038d = _0x1bec4d.getUint32(_0x297bfc)
          _0x297bfc += 4
          const _0x5cdd60 = _0x4a1682.findIndex(
              (_0x219d23) => _0x219d23.id === _0x43038d
            ),
            _0x482503 = _0x4a1682[_0x5cdd60]
          _0x482503.isDead = true
          _0x482503.diedAt = _0x315a8a
          _0x482503.id = -1
          _0x482503 === _0x99a5a4 &&
            (console.log('me died'),
            (_0x4badaa = true),
            (_0x1434d0.score = 0),
            (_0x1434d0.percent = 0),
            _0x1e7731(false))
        }
        let _0x36d006 = _0x1bec4d.byteLength - _0x297bfc
        if (_0x4badaa) {
          let _0x2c32b8 = -1
          if (_0x3119b2) {
            const _0x3a31a2 = _0x1bec4d.getUint32(_0x297bfc)
            _0x297bfc += 4
            console.log({ killerId: _0x3a31a2 })
            _0x1ae136.setAttribute(
              'stroke',
              _0x4e23d7[_0x3a31a2] || 'An unnamed worm'
            )
            _0x36d006 -= 4
          } else {
            _0x2c32b8 = _0x1bec4d.getUint8(_0x297bfc++)
            0 === _0x2c32b8
              ? (console.log('walls'),
                _0x1ae136.setAttribute('stroke', 'Walls'))
              : console.log('giveup')
            _0x36d006--
          }
          _0x1ae136.style.visibility =
            _0x1ae136.previousElementSibling.style.visibility =
              1 === _0x2c32b8 ? 'hidden' : ''
          1 === _0x36d006
            ? (_0xd5d348 = _0x1bec4d.getUint8(_0x297bfc++))
            : console.log('no kills')
          _0x448eb2.style.display = ''
          _0x2f4d30.classList.add('btn-disabled')
          ;(function () {
            if ('none' === _0x448eb2.style.display) {
              return
            }
            for (; _0x2b7207.length < 2; ) {
              _0x2b7207.push(0)
            }
            const _0x4c1e5f = Math.max(_0x424189, 1000)
            let _0x9b6099 = '-2,2 '
            const _0x16de8d = _0x2b7207.length - 1
            for (let _0x11760c = 0; _0x11760c < _0x2b7207.length; _0x11760c++) {
              const _0x5b6844 =
                0.975 - (_0x2b7207[_0x11760c] / _0x4c1e5f) * 0.95
              _0x9b6099 += _0x11760c / _0x16de8d + ',' + _0x5b6844 + ' '
              _0x11760c === _0x16de8d && (_0x9b6099 += '2,' + _0x5b6844 + ' ')
            }
            _0x9b6099 += '2,2'
            _0x13a5b6.innerHTML =
              '\n\t<svg class="score-graph" width="100%" height="100" viewBox="0 0 1 1" preserveAspectRatio="none">\n\t\t<polygon points="' +
              _0x9b6099 +
              '" stroke="#fff" fill="#999" stroke-width="3" vector-effect="non-scaling-stroke" opacity="0.35"/>\n\t</svg>'
            const _0x34302e = _0x13a5b6.children[0]
            _0x45d9f7.parentNode.insertBefore(_0x34302e, _0x45d9f7)
            _0x45d9f7.remove()
            _0x45d9f7 = _0x34302e
          })()
          _0x23f322()
          _0x13dedc()
          ;(function () {
            for (; _0x130074.children.length > 1; ) {
              _0x130074.children[1].remove()
            }
            const _0x16cc1d = [['Max points', _0x83a68f(_0x424189)]]
            _0x37f1e9 > 0 &&
              _0x16cc1d.push(['Gold digged', _0x37f1e9.toLocaleString('en-US')])
            _0xd5d348 > 0 &&
              _0x16cc1d.push([
                'Players destroyed',
                255 === _0xd5d348 ? _0xd5d348 - 1 + '+' : _0xd5d348,
              ])
            _0x16cc1d.push(['Time alive', _0x340516(Date.now() - _0x55ca1c)])
            for (let _0x315dae = 0; _0x315dae < _0x16cc1d.length; _0x315dae++) {
              const [_0xeeb8e7, _0x440822] = _0x16cc1d[_0x315dae],
                _0x32acca = document.createElement('span')
              _0x32acca.setAttribute('stroke', _0xeeb8e7 + ': ' + _0x440822)
              _0x130074.appendChild(_0x32acca)
            }
          })()
        } else {
          if (!_0x99a5a4.isDead) {
            if (_0x36d006 % 2 != 0) {
              const _0x15ccd9 = _0x1bec4d.getUint8(_0x297bfc++)
              _0x41e950(_0x15ccd9)
              _0x2b9cba += _0x15ccd9
              _0x37f1e9 += _0x15ccd9
              _0x36d006--
            }
            if (2 === _0x36d006) {
              const _0x1f2241 = _0x1e89b2(_0x1bec4d.getUint16(_0x297bfc))
              _0x297bfc += 2
              _0x7dce37(_0x1f2241)
            }
          }
        }
        for (
          let _0x3fc96d = _0x4a1682.length - 1;
          _0x3fc96d >= 0;
          _0x3fc96d--
        ) {
          const _0x3f9642 = _0x4a1682[_0x3fc96d]
          _0x3f9642.isDead ||
            _0x105063[_0x3f9642.id] ||
            _0x4a1682.splice(_0x3fc96d, 1)
        }
    }
  }
  function _0x1f47a0() {
    console.log('Disconnected.')
    _0xaeee8d(ws.url)
  }
  let cnt = 0
  function wssender(data) {
    if (ws && ws.readyState === ws.OPEN) {
      if (((_0x596c53 += data.byteLength), _0x45bb9e)) {
        const buf = new Uint8Array(data.buffer)
        for (let i = 0; i < buf.length; i++) {
          buf[i] ^=
            _0x45bb9e[(cnt + i) % _0x45bb9e.length]
        }
      }
      cnt = (cnt + 1) % 1000
      _0x45bb9e = new Uint8Array(data.buffer)
      ws.send(data)
    }
  }
  const twopi = 2 * Math.PI
  function _0x47adf7(_0xaddfb3) {
    if (!_0x99a5a4 || _0x99a5a4.isDead) {
      return
    }
    ;(_0xaddfb3 %= twopi) < 0 && (_0xaddfb3 += twopi)
    _0xaddfb3 /= twopi
    _0xaddfb3 = Math[0.75 === _0xaddfb3 ? 'ceil' : 'floor'](4095 * _0xaddfb3)
    const _0x309844 = new DataView(new ArrayBuffer(2))
    _0x309844.setUint8(0, _0x119776(1, _0xaddfb3 >> 8))
    _0x309844.setUint8(1, _0xaddfb3)
    wssender(_0x309844)
  }
  let _0x4327b5 = {}
  document.onmousedown = function (_0xc44f35) {
    _0x4327b5[_0xc44f35.button] = true
    _0x488c57()
  }
  document.onmouseup = function (_0x41057e) {
    delete _0x4327b5[_0x41057e.button]
    _0x488c57()
  }
  _0x26f99d.onmousemove = function (_0x4c86ec) {
    _0x335da6.checked ||
      _0x47adf7(
        Math.atan2(
          _0x4c86ec.clientY - _0x26f99d.height / 2,
          _0x4c86ec.clientX - _0x26f99d.width / 2
        )
      )
  }
  const _0x3792a5 = document.querySelector('.angry-btn'),
    _0x2b813a = document.querySelector('.sad-btn'),
    _0x4e7f64 = document.querySelector('.joystick'),
    _0x5c123d = document.querySelector('.joystick-knob')
  let _0x1ad87c = null,
    _0x1a90df = null,
    _0x16487e = null
  if (_0xe43c40) {
    let _0x10afa5, _0x17b115
    function _0x4f7756() {
      _0x4e7f64.style.left = _0x10afa5 + 'px'
      _0x4e7f64.style.top = _0x17b115 + 'px'
    }
    function _0x25aac0(_0x6d5483) {
      return [_0x6d5483.clientX / _0x4b538e, _0x6d5483.clientY / _0x4b538e]
    }
    _0x26f99d.onmousemove = null
    document.ontouchstart = function (_0x47af94) {
      const _0x2b61d3 = _0x47af94.changedTouches[0]
      let _0x2871bd = _0x2b61d3.identifier
      function _0x3d95c4(_0x4ef771) {
        return (
          _0x47af94.target === _0x4ef771 ||
          _0x47af94.target.parentNode === _0x4ef771
        )
      }
      _0x47af94.target === _0x26f99d
        ? null === _0x16487e &&
          ((_0x5c123d.style.width = _0x5c123d.style.transform = '0'),
          (_0x4e7f64.style.display = ''),
          ([_0x10afa5, _0x17b115] = _0x25aac0(_0x2b61d3)),
          _0x4f7756(),
          (_0x16487e = _0x2871bd))
        : _0x3d95c4(_0x3792a5)
        ? null === _0x1a90df &&
          (document.onmousedown({ button: 0 }), (_0x1a90df = _0x2871bd))
        : _0x3d95c4(_0x2b813a) &&
          null === _0x1ad87c &&
          (document.onmousedown({ button: 2 }), (_0x1ad87c = _0x2871bd))
    }
    document.ontouchmove = function (_0x228964) {
      const _0x1467f6 = _0x228964.changedTouches[0]
      if (_0x1467f6.identifier === _0x16487e) {
        const [_0x2ffe69, _0x48c244] = _0x25aac0(_0x1467f6),
          _0x23080d = _0x2ffe69 - _0x10afa5,
          _0x5a8977 = _0x48c244 - _0x17b115,
          _0x2d6b78 = _0x4e7f64.getBoundingClientRect()
        let _0x3910b9 = Math.hypot(_0x23080d, _0x5a8977)
        const _0x108d38 = _0x2d6b78.width / 2 / _0x4b538e
        if (_0x3910b9 > _0x108d38) {
          if (!_0x180e95.checked) {
            const _0x53c082 = _0x3910b9 - _0x108d38
            _0x10afa5 += (_0x53c082 * _0x23080d) / _0x3910b9
            _0x17b115 += (_0x53c082 * _0x5a8977) / _0x3910b9
            _0x4f7756()
          }
          _0x3910b9 = _0x108d38
        }
        const _0xab540e = Math.atan2(_0x5a8977, _0x23080d)
        _0x47adf7(_0xab540e)
        _0x5c123d.style.transform = 'rotate(' + _0xab540e + 'rad)'
        _0x5c123d.style.width = _0x3910b9 + 'px'
      }
    }
    window.ontouchend = function (_0x5449c8) {
      const _0x2557bd = _0x5449c8.changedTouches[0].identifier
      _0x2557bd === _0x1a90df
        ? ((_0x1a90df = null), document.onmouseup({ button: 0 }))
        : _0x2557bd === _0x1ad87c
        ? ((_0x1ad87c = null), document.onmouseup({ button: 2 }))
        : _0x2557bd === _0x16487e &&
          ((_0x4e7f64.style.display = 'none'), (_0x16487e = null))
    }
  }
  function _0x488c57() {
    let _0x5d4736
    _0x5d4736 =
      _0x4327b5[0] || _0x155ccf.Space
        ? 1
        : _0x4327b5[2] || _0x155ccf.ShiftLeft || _0x155ccf.ShiftRight
        ? 2
        : 0
    _0x4229fb = _0x5d4736
    _0x99a5a4 &&
      (function (_0x3d78e0) {
        const _0x2af7c6 = new Uint8Array(1)
        _0x2af7c6[0] = _0x119776(2, _0x3d78e0)
        wssender(_0x2af7c6)
      })(_0x5d4736)
  }
  function _0x4e03dd(_0xaf05e8) {
    const _0x502df5 = document.createElement('canvas')
    _0x502df5.width = _0x502df5.height = 16
    const _0x2d9f70 = _0x502df5.getContext('2d'),
      _0xbc5e78 = _0x2d9f70.createImageData(16, 16)
    for (let _0x4c92ba = 0; _0x4c92ba < _0xaf05e8.length; _0x4c92ba++) {
      if (_0xaf05e8[_0x4c92ba] === _0x56432a.empty) {
        continue
      }
      const _0x338f5c = _0x300ffc(_0xaf05e8[_0x4c92ba]),
        _0x2bca7b = 4 * _0x4c92ba
      _0xbc5e78.data[_0x2bca7b] = _0x338f5c[0]
      _0xbc5e78.data[_0x2bca7b + 1] = _0x338f5c[1]
      _0xbc5e78.data[_0x2bca7b + 2] = _0x338f5c[2]
      _0xbc5e78.data[_0x2bca7b + 3] = 255
    }
    _0x2d9f70.putImageData(_0xbc5e78, 0, 0)
    _0xaf05e8.canvas = _0x502df5
    _0xaf05e8.ctx = _0x2d9f70
    _0xaf05e8.fogCanvas = document.createElement('canvas')
    _0xaf05e8.fogCanvas.width = _0xaf05e8.fogCanvas.height = 16
    _0xaf05e8.fogCtx = _0xaf05e8.fogCanvas.getContext('2d')
    _0xaf05e8.fogBgCanvas = document.createElement('canvas')
    _0xaf05e8.fogBgCanvas.width = _0xaf05e8.fogBgCanvas.height = 16
    _0xaf05e8.fogBgCtx = _0xaf05e8.fogCanvas.getContext('2d')
  }
  let _0x5d9381 = 0,
    _0x47d062 = 0,
    _0x582449 = 1,
    _0x1dffa3 = 1,
    _0x15a8bf = null,
    _0x40182c = null
  document.onmousewheel = function (_0x100a84) {
    _0x100a84.deltaY < 0 ? (_0x582449 *= 1.1) : (_0x582449 *= 0.9)
    _0x582449 = Math.max(1, Math.min(5, _0x582449))
  }
  let _0x50799f = Date.now()
  const _0x1d5e51 = [],
    _0x329e7e = (function (_0x373e8c = 80) {
      const _0x4e9d9f = _0x373e8c / 2,
        _0x3557a7 = document.createElement('canvas')
      _0x3557a7.width = _0x3557a7.height = _0x373e8c
      const _0x1900aa = _0x3557a7.getContext('2d')
      return (
        (_0x1900aa.strokeStyle = 'rgba(0,0,0,0.07)'),
        _0x1900aa.beginPath(),
        _0x1900aa.moveTo(_0x4e9d9f, 0),
        _0x1900aa.lineTo(_0x4e9d9f, _0x373e8c),
        _0x1900aa.moveTo(0, _0x4e9d9f),
        _0x1900aa.lineTo(_0x373e8c, _0x4e9d9f),
        (_0x1900aa.lineWidth = 2),
        _0x1900aa.stroke(),
        _0x1900aa.createPattern(_0x3557a7, 'repeat')
      )
    })()
  function _0x5cf8da() {
    let _0x3bf0d2 = false
    for (let _0x307e52 = 0; _0x307e52 < _0x4dd092.length; _0x307e52++) {
      const _0xb6ce0c = _0x4dd092[_0x307e52]
      _0xb6ce0c.update()
      _0xb6ce0c.isMe && (_0x3bf0d2 = true)
    }
    if ((_0x3bf0d2 || _0x1434d0.update(), _0x2148a0)) {
      const _0x1356e0 = Date.now() / 80,
        _0x2b3bb3 = 7 * Math.sin(_0x1356e0),
        _0x1a377b = 0.15 * Math.abs(Math.sin(_0x1356e0 / 4)) + 0.85
      _0x3666c5.style.transform =
        'rotate(' + _0x2b3bb3 + 'deg) scale(' + _0x1a377b + ')'
    } else {
      _0x3666c5.style.transform = 'none'
    }
    !(function () {
      let _0x551d97
      if (_0x579128 >= _0xa0938e.length) {
        _0x551d97 = 'You have claimed all your rewards.'
      } else {
        const _0x184625 = _0x5af3ad - Date.now()
        _0x184625 < 0
          ? ((_0x551d97 = 'Available every ' + _0x35cdfe(86400000)),
            _0x36709d.rewardSent || _0x36709d.classList.remove('btn-disabled'))
          : (_0x551d97 = 'Available again in ' + _0x35cdfe(_0x184625))
      }
      _0x4e5934.getAttribute('stroke') !== _0x551d97 &&
        _0x4e5934.setAttribute('stroke', _0x551d97)
    })()
    const [_0x119fae, _0x10424b] = _0x3f29dc()
    _0x5d0169.faceSkin = _0x119fae
    _0x5d0169.bodySkin = _0x10424b
    const _0x7242aa = Date.now()
    _0x47d062 = (_0x7242aa - _0x50799f) / 1000
    _0x50799f = _0x7242aa
    _0x5d9381 -= _0x47d062 / 0.3
    _0x5d9381 = Math.max(0, _0x5d9381)
    _0x33e0cf.fillStyle = '#522e00'
    _0x33e0cf.fillRect(0, 0, _0x26f99d.width, _0x26f99d.height)
    for (let _0x39cfa5 = 0; _0x39cfa5 < _0x4a1682.length; _0x39cfa5++) {
      _0x4a1682[_0x39cfa5].interpolate()
    }
    if (((_0x1dffa3 += 0.3 * (_0x582449 - _0x1dffa3)), _0x99a5a4)) {
      const {
        sx: _0x3a8d18,
        sy: _0x17bdd6,
        ex: _0x5812aa,
        ey: _0x5e1768,
        minX: _0x409792,
        minY: _0x539d31,
        maxX: _0x3aef4a,
        maxY: _0x40b13b,
        viewWidth: _0x1661c3,
        viewHeight: _0x22f747,
      } = _0x3a7e1a(_0x99a5a4, true)
      null === _0x15a8bf
        ? ((_0x15a8bf = _0x1661c3), (_0x40182c = _0x22f747))
        : ((_0x15a8bf += 0.1 * (_0x1661c3 - _0x15a8bf)),
          (_0x40182c += 0.1 * (_0x22f747 - _0x40182c)))
      const _0x3d9ec7 = _0x99a5a4.segments[0],
        _0x48f20c = 2 * Math.random() * Math.PI,
        _0x165f44 = 6 * _0x5d9381
      function _0x6117fc() {
        _0x33e0cf.translate(
          _0x26f99d.width / 2 + _0x165f44 * Math.cos(_0x48f20c),
          _0x26f99d.height / 2 + _0x165f44 * Math.sin(_0x48f20c)
        )
        const _0x1ba495 = Math.max(
          _0x26f99d.width / _0x15a8bf,
          _0x26f99d.height / _0x40182c
        )
        _0x33e0cf.scale(_0x1ba495, _0x1ba495)
        _0x33e0cf.translate(-_0x3d9ec7.interpX, -_0x3d9ec7.interpY)
      }
      _0x33e0cf.save()
      _0x33e0cf.beginPath()
      _0x33e0cf.rect(0, 0, _0x26f99d.width, _0x26f99d.height)
      _0x6117fc()
      _0x33e0cf.fillStyle = _0x329e7e
      _0x33e0cf.fill()
      _0x33e0cf.imageSmoothingEnabled = false
      for (
        let _0xa464a1 = _0x17bdd6 - 1;
        _0xa464a1 <= _0x5e1768 + 1;
        _0xa464a1++
      ) {
        for (
          let _0x4d39ea = _0x3a8d18 - 1;
          _0x4d39ea <= _0x5812aa + 1;
          _0x4d39ea++
        ) {
          const _0x5a1c73 = 480 * _0x4d39ea,
            _0x2a8bf8 = 480 * _0xa464a1,
            _0x250a2b = _0x54a679[32 * _0xa464a1 + _0x4d39ea]
          _0x250a2b &&
            _0x33e0cf.drawImage(
              _0x250a2b.canvas,
              _0x5a1c73,
              _0x2a8bf8,
              480,
              480
            )
        }
      }
      _0x99a5a4 && _0x3a7e1a(_0x99a5a4)
      for (let _0x8d5f27 = _0x4a1682.length - 1; _0x8d5f27 >= 0; _0x8d5f27--) {
        _0x4a1682[_0x8d5f27].draw(_0x8d5f27, _0x33e0cf)
      }
      _0x33e0cf.lineWidth = 1
      _0x33e0cf.beginPath()
      _0x33e0cf.rect(0, 0, 15360, 15360)
      _0x33e0cf.restore()
      _0x33e0cf.rect(0, 0, _0x26f99d.width, _0x26f99d.height)
      _0x33e0cf.fillStyle = '#222222'
      _0x33e0cf.fill('evenodd')
      _0x54af19 && _0x54af19()
      _0x33e0cf.save()
      _0x6117fc()
      for (let _0x5f5ca = _0x51bcdc.length - 1; _0x5f5ca >= 0; _0x5f5ca--) {
        const _0x47bbdc = _0x51bcdc[_0x5f5ca],
          _0x82c2e4 = (_0x7242aa - _0x47bbdc.time) / 600
        if (_0x82c2e4 >= 1) {
          _0x51bcdc.splice(_0x5f5ca, 1)
        } else {
          _0x33e0cf.save()
          _0x33e0cf.translate(_0x47bbdc.x, _0x47bbdc.y)
          _0x33e0cf.rotate(_0x47bbdc.dir * _0x82c2e4 * Math.PI)
          const _0x555449 = 30 * (1 + 2 * _0x82c2e4)
          _0x33e0cf.fillStyle = _0x47bbdc.color
          _0x33e0cf.globalAlpha = 0.75 * (1 - _0x82c2e4)
          _0x33e0cf.fillRect(0, 0, _0x555449, _0x555449)
          _0x33e0cf.restore()
        }
      }
      for (let _0x1add25 = 0; _0x1add25 < _0x4a1682.length; _0x1add25++) {
        _0x4a1682[_0x1add25].drawEnergyAndNickname(_0x33e0cf)
      }
      _0x33e0cf.restore()
    }
    for (let _0x22621d = 0; _0x22621d < _0x205949.length; _0x22621d++) {
      _0x205949[_0x22621d].render()
    }
    if (_0x1d5e51.length > 0) {
      _0x49883c.style.display = ''
      _0x44f8ea.clearRect(0, 0, _0x49883c.width, _0x49883c.height)
      const _0x15ed72 = _0x49883c.height / 657
      _0x44f8ea.save()
      _0x44f8ea.translate(_0x49883c.width / 2, 0)
      _0x44f8ea.scale(_0x15ed72, _0x15ed72)
      _0x44f8ea.beginPath()
      for (let _0x402fea = _0x1d5e51.length - 1; _0x402fea >= 0; _0x402fea--) {
        const _0x3784ac = _0x1d5e51[_0x402fea]
        _0x3784ac.spawnTime > 0
          ? (_0x3784ac.spawnTime -= _0x47d062)
          : ((_0x3784ac.vy += 8 * _0x47d062),
            (_0x3784ac.y += _0x3784ac.vy * _0x47d062 * 80),
            (_0x3784ac.x += _0x3784ac.vx * _0x47d062 * 100),
            (_0x3784ac.angle += _0x3784ac.angleSpeed),
            _0x3784ac.y > 657 &&
              (_0x3784ac.bounced
                ? _0x3784ac.vy > 0 && _0x1d5e51.splice(_0x402fea, 1)
                : ((_0x3784ac.vy *= -(0.2 * Math.random() + 0.55)),
                  (_0x3784ac.bounced = true))),
            _0x44f8ea.save(),
            _0x44f8ea.translate(_0x3784ac.x, _0x3784ac.y),
            _0x44f8ea.rotate(_0x3784ac.angle),
            _0x44f8ea.moveTo(10, 0),
            _0x44f8ea.ellipse(0, 0, 10, 6, 0, 0, 2 * Math.PI),
            _0x44f8ea.restore())
      }
      _0x44f8ea.lineWidth = 6
      _0x44f8ea.strokeStyle = '#a7a217'
      _0x44f8ea.stroke()
      _0x44f8ea.fillStyle = '#e9e21c'
      _0x44f8ea.fill()
      _0x44f8ea.restore()
    } else {
      _0x49883c.style.display = 'none'
    }
    window.requestAnimationFrame(_0x5cf8da)
  }
  const _0x186208 = document.querySelectorAll('.coming-soon')
  for (let _0xf82659 = 0; _0xf82659 < _0x186208.length; _0xf82659++) {
    const _0x3c15d4 = _0x186208[_0xf82659]
    _0x3c15d4.onclick = function () {}
    _0x3c15d4.classList.add('btn-disabled')
    _0x3c15d4.style.pointerEvents = 'all'
    _0x3c15d4.style.cursor = 'default'
    _0x3c15d4.setAttribute('tooltip', 'Coming soon')
  }
  const _0x765ba4 = _0xe81457.querySelector('.dialog-content')
  _0x765ba4.innerHTML = ''
  ;(function () {
    let _0x2a2d49 = ''
    for (let _0x85933d = 0; _0x85933d < _0x473602.length; _0x85933d++) {
      const { title: _0x2721c4, content: _0x1649b8 } = _0x473602[_0x85933d]
      _0x2a2d49 +=
        '<span class="log-title" stroke="' +
        _0x2721c4 +
        '"></span><div class="log-content">'
      _0x1649b8.forEach((_0x291c00) => {
        _0x2a2d49 += '<div stroke="- ' + _0x291c00 + '"></div>'
      })
      _0x2a2d49 += '</div><div class="log-line"></div>'
    }
    const _0x184994 = localStorage.changelog
    _0x2148a0 = void 0 !== _0x184994 && parseInt(_0x184994) < 18
    localStorage.changelog = 18
    _0x765ba4.innerHTML = _0x2a2d49
  })()
  document.querySelector('.tabs').children[2].style.display = 'none'
})()
