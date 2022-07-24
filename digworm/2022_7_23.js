const _0x48549a = 16,
  _0x26c6d0 = 30,
  _0x37b83b = 480;

function _0x168cd0(_0x2cb797, _0x2718be) {
  return _0x2cb797 << 4 | _0x2718be;
}
const _0x13b2af = {
  "faceSkins": [{
    "createdAt": 0,
    "name": "Kirk",
    "price": 500
  }, {
    "createdAt": 1,
    "name": "Creepy",
    "price": 1000
  }, {
    "createdAt": 2,
    "name": "Intellectual",
    "price": 1500
  }, {
    "createdAt": 3,
    "name": "Kirkier",
    "price": 2000
  }, {
    "createdAt": 4,
    "name": "Cyclops",
    "price": 2500
  }, {
    "createdAt": 5,
    "name": "Sarcastic",
    "price": 5000
  }, {
    "createdAt": 6,
    "name": "Dizzy",
    "price": 10000
  }, {
    "createdAt": 7,
    "name": "Faceless",
    "price": 10000
  }, {
    "createdAt": 8,
    "name": "All Seeing",
    "price": 10000
  }, {
    "createdAt": 9,
    "name": "Cute",
    "price": 10000
  }, {
    "createdAt": 10,
    "name": "Gear",
    "price": 10000
  }, {
    "createdAt": 11,
    "name": "Pirate",
    "price": 5000
  }, {
    "createdAt": 12,
    "name": "Ascii",
    "price": 2000
  }, {
    "createdAt": 13,
    "name": "Moyai",
    "price": 5000
  }, {
    "createdAt": 14,
    "name": "Bot",
    "price": 7000
  }, {
    "createdAt": 15,
    "name": "Too cool",
    "price": 2500
  }],
  "bodySkins": [{
    "createdAt": -1,
    "name": "Triangle",
    "price": 500
  }, {
    "createdAt": -1,
    "name": "Heart",
    "price": 1000
  }]
};
for (let _0x33c5d3 in _0x13b2af) {
  const _0x350801 = _0x13b2af[_0x33c5d3];
  for (let _0x14fe28 = 0; _0x14fe28 < _0x350801.length; _0x14fe28++) _0x350801[_0x14fe28].id = _0x14fe28;
}

function _0x4001aa(_0x166bd5, _0x405d2d) {
  const {
      viewWidth: _0x165c30,
      viewHeight: _0x3de502
    } = function(_0x3463a9) {
      _0x3463a9 -= 30, _0x3463a9 *= 50;
      const _0x3b5ae7 = 3000 + parseInt(_0x3463a9);
      return {
        "viewWidth": _0x3b5ae7,
        "viewHeight": 0.5 * _0x3b5ae7
      };
    }(_0x405d2d ? _0x166bd5.interpR : _0x166bd5.r),
    _0x1654a2 = _0x166bd5.segments[0],
    _0x26c498 = _0x1654a2.x - _0x165c30 / 2,
    _0x29666e = _0x1654a2.y - _0x3de502 / 2,
    _0x5b3508 = _0x1654a2.x + _0x165c30 / 2,
    _0x5b0802 = _0x1654a2.y + _0x3de502 / 2;
  return {
    "minX": _0x26c498,
    "minY": _0x29666e,
    "maxX": _0x5b3508,
    "maxY": _0x5b0802,
    "sx": Math.max(0, Math.floor(_0x26c498 / _0x37b83b)),
    "sy": Math.max(0, Math.floor(_0x29666e / _0x37b83b)),
    "ex": Math.min(63, Math.floor(_0x5b3508 / _0x37b83b)),
    "ey": Math.min(63, Math.floor(_0x5b0802 / _0x37b83b)),
    "viewWidth": _0x165c30,
    "viewHeight": _0x3de502
  };
}
const _0x5df57f = {
  "empty": 0,
  "dirt": 1,
  "lava": 2,
  "diamond": 3,
  "gold": 4,
  "uranium": 5,
  "quartz": 6,
  "bedrock": 7,
  "gravestone": 8
};

function _0xa8836b(_0x3f4cda) {
  switch (_0x3f4cda) {
    case _0x5df57f.dirt:
      return [116, 66, 0];
    case _0x5df57f.lava:
      return [166, 25, 6];
    case _0x5df57f.diamond:
      return [49, 165, 158];
    case _0x5df57f.gold:
      return [165, 158, 21];
    case _0x5df57f.uranium:
      return [50, 164, 48];
    case _0x5df57f.quartz:
      return [255, 255, 255];
    case _0x5df57f.bedrock:
      return [10, 10, 10];
    case _0x5df57f.gravestone:
      return [90, 90, 90];
  }
}

function _0x4abc58(_0x2a336e, _0x1d4e2d, _0xe913c5, _0x111f99) {
  const _0x5178f3 = Math.max(Math.min((_0x2a336e + 1) * _0x26c6d0, _0x111f99.x), _0x2a336e * _0x26c6d0),
    _0x4753fa = Math.max(Math.min((_0x1d4e2d + 1) * _0x26c6d0, _0x111f99.y), _0x1d4e2d * _0x26c6d0),
    _0x2d5e10 = _0x5178f3 - _0x111f99.x,
    _0x5c496d = _0x4753fa - _0x111f99.y;
  let _0x44d3a6 = Math.hypot(_0x2d5e10, _0x5c496d);
  return _0x44d3a6 <= _0xe913c5 && (0 == _0x44d3a6 && (_0x44d3a6 = 1), {
    "x": _0x2d5e10 / _0x44d3a6,
    "y": _0x5c496d / _0x44d3a6
  });
}

function _0x2ed340(_0x57ea5d) {
  return parseInt(50 * Math.sqrt(Math.min(1, (_0x57ea5d.segments.length - 5) / 1000)) + 30);
}

function _0x3848f4(_0x38de1e) {
  const _0x4917fa = _0x38de1e >> 2;
  switch (3 & _0x38de1e) {
    case 0:
      return _0x4917fa / 10;
    case 1:
      return 100 * _0x4917fa;
    case 2:
      return 10000 * _0x4917fa;
  }
}

function _0xca1554(_0x2ec272) {
  return !(!_0x2ec272 || 36 !== _0x2ec272.length) && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(_0x2ec272);
}
const _0x3152df = 86400000,
  _0x2c79c4 = [40, 45, 50, 55, 60, 65, 70],
  _0x59489b = [{
    "title": "July 22nd 2022",
    "content": ["Fixed skin getting removed on game mode change.", "Graph is now colored accordingly.", "Increased max nickname length to 15.", "Limited bot score to 10k in maze."]
  }, {
    "title": "July 21st 2022",
    "content": ["Added Teams mode."]
  }, {
    "title": "July 20th 2022",
    "content": ["Added maze mode.", "Connection limit bug fix."]
  }, {
    "title": "July 19th 2022",
    "content": ["New skin: Too cool", "Fixed mouse movement issue on high res displays.", "Now you have to score at least 30k to get your score logged in the Discord server.", "Your worm dies instantly if you get disconnected with low score now.", "Fixed gear skin not showing damage.", "Patched a server crash bug."]
  }, {
    "title": "July 18th 2022",
    "content": ["Minor bug fixes."]
  }, {
    "title": "July 17th 2022",
    "content": ["You spectate your killer worm after dying now.", "Made map bigger.", "Added some bots.", "Fixed map glitching sometimes on death screen."]
  }, {
    "title": "July 15th 2022",
    "content": ["Death screen overlay now shows your dead worm.", "New skins: Bot", "Increased AFK kick time to 5 minutes.", "You can now change worm mood in shop on touch devices by tapping the left and right side of the screen."]
  }, {
    "title": "July 14th 2022",
    "content": ["New skin: Moyai", "Your scores get logged in the Discord server now. You also get roles based on your scores. Your account has to be linked with discord and you have to be in the Discord server to get the roles."]
  }, {
    "title": "July 13th 2022",
    "content": ["Added discord login.", "Minor bug fixes.", "Increased map regeneration time.", "Worm's grave stays a little longer now.", "Added amogus in the map (top left corner)."]
  }, {
    "title": "July 12th 2022",
    "content": ["Moved server from NA to EU.", "Removed zoom."]
  }, {
    "title": "July 10th 2022",
    "content": ["Now you get kicked for being AFK too long.", "Added packet encryption."]
  }, {
    "title": "July 9th 2022",
    "content": ["New skins: Pirate & Ascii", "Fixed sussy shop bug."]
  }, {
    "title": "July 8th 2022",
    "content": ["Lava now deducts 0.25% of your score if you are too big.", "Added 3D and glow effects. Enable them from settings.", "Nickname and energy bar don't get hidden under the world border now.", "Added high resolution setting for some devices."]
  }, {
    "title": "July 7th 2022",
    "content": ["You will be reconnected to your old alive worm if you accidentally got disconnected now.", "Only 1 connection can use an account now.", "Limited connections from an IP to 3.", "Fixed killer name not being shown sometimes.", "Minor touch controls bug fix.", "Made map smaller.", "You can pause and join game using escape and enter keys now."]
  }, {
    "title": "July 6th 2022",
    "content": ["Enhanced mobile UI.", "Added touch controls.", "Fixed Gear skin.", "Fixed skin previews appearing pixelated.", "Game being blank on IOS fixed."]
  }, {
    "title": "July 5th 2022",
    "content": ["Made map bigger", "Minor UI changes.", "Performance mode is enabled by default now.", "New Discord link."]
  }, {
    "title": "July 4th 2022",
    "content": ["Released."]
  }],
  _0x4ab6db = document.getElementById("enable3D");
_0x5a12dd(_0x4ab6db, "enable_3d");
const _0x106baf = document.getElementById("enableGlow");
_0x5a12dd(_0x106baf, "enable_glow");
const _0x421c4c = document.getElementById("highRes");
_0x5a12dd(_0x421c4c, "high_res");
const _0x450727 = document.getElementById("deadWorm"),
  _0x2f6e5d = _0x450727.getContext("2d");
let _0x67fc60, _0x1ed826;

function _0x1acd51() {
  if (!_0x30f1bc || !_0x30f1bc.isDead) return;
  _0x450727.getBoundingClientRect();
  const _0x5a30b8 = 200 * _0x3e54c8 * window.devicePixelRatio;
  _0x450727.width !== _0x5a30b8 && (_0x450727.width = _0x5a30b8, _0x450727.height = _0x5a30b8 / 4);
  const _0x39ef48 = _0x67fc60 || new _0x1d5e9a(0, 0, 30);
  _0x67fc60 = _0x39ef48;
  for (let _0x13d2e6 = 0; _0x13d2e6 < 2; _0x13d2e6++) _0x39ef48.segments[_0x13d2e6] = {
    "interpX": -100 * (2 * _0x13d2e6 - 1),
    "interpY": 0
  };
  _0x39ef48.isDead = true, _0x39ef48.faceSkin = _0x30f1bc.faceSkin, _0x39ef48.team = _0x30f1bc.team, _0x2f6e5d.clearRect(0, 0, _0x450727.width, _0x450727.height);
  const _0x455bfa = _0x450727.height / _0x39ef48.interpR / 2 * 0.8;
  _0x2f6e5d.save(), _0x2f6e5d.translate(_0x450727.width / 2, _0x450727.height / 2), _0x2f6e5d.scale(_0x455bfa, _0x455bfa), _0x39ef48.draw(0, _0x2f6e5d), _0x2f6e5d.restore();
}
window.s = 0.1, window.x = 0, window.y = 0;
try {
  _0x1ed826 = (function() {
    const _0x5df872 = document.createElement("canvas"),
      _0x4b5295 = {
        "alpha": true,
        "antialias": true
      },
      _0x501a1e = _0x5df872.getContext("webgl", _0x4b5295) || _0x5df872.getContext("experimental-webgl", _0x4b5295),
      _0x46518d = ["gold", "uranium", "diamond", "lava"];
    let _0xeb9d3d = "";
    for (let _0x211687 = 0; _0x211687 < _0x46518d.length; _0x211687++) _0xeb9d3d += "distance(vec3(" + _0xa8836b(_0x5df57f[_0x46518d[_0x211687]]).map(_0x49535d => _0x49535d / 255).join(",") + "),t.rgb)<0.1", _0x211687 !== _0x46518d.length - 1 && (_0xeb9d3d += "||");
    const _0x1a5788 = function(_0x411680, _0x14bc1a) {
      const  _0x1fbc66 = _0x48c74c("vertex", _0x411680),
        _0x13faeb = _0x48c74c("fragment", _0x14bc1a),
        _0x22a5ce = _0x501a1e.createProgram();
      return _0x501a1e.attachShader(_0x22a5ce, _0x1fbc66), _0x501a1e.attachShader(_0x22a5ce, _0x13faeb), _0x501a1e.linkProgram(_0x22a5ce), _0x501a1e.getProgramParameter(_0x22a5ce, _0x501a1e.LINK_STATUS) || console.log("Error linking program. " + _0x501a1e.getProgramInfoLog(_0x22a5ce)), _0x22a5ce;
    }("\n\tattribute vec2 pos;\n\tvarying vec2 vPos;\n\tvoid main() {\n\t\tvPos=pos;\n\t\tgl_Position=vec4(pos,0.0,1.0);\n\t}\n\t", "\n\tprecision mediump float;\n\tuniform sampler2D tex;\n\tuniform bool u3d;\n\tuniform bool uGlow;\n\tuniform float uTime;\n\tuniform vec2 blurSize;\n\n\tvarying vec2 vPos;\n\n\tconst vec3 groundColor = vec3(0.32,0.18,0.0);\n\tconst int STEPS=10;\n\n\tvec4 getColor(vec2 p){\n\t\tvec4 t=texture2D(tex,p);\n\t\tif(" + _0xeb9d3d + "){\n\t\t\treturn t;\n\t\t}\n\t\treturn vec4(0.0);\n\t}\n\n\tvoid main(){\n\t\tvec4 a;\n\t\tvec4 sum;\n\t\tvec2 uv=vPos*0.5+0.5;\n\t\tif(uGlow){\n\t\t\tsum += getColor(vec2(uv.x - 4.0*blurSize.x, uv.y)) * 0.05;\n\t\t\tsum += getColor(vec2(uv.x - 3.0*blurSize.x, uv.y)) * 0.09;\n\t\t\tsum += getColor(vec2(uv.x - 2.0*blurSize.x, uv.y)) * 0.12;\n\t\t\tsum += getColor(vec2(uv.x - blurSize.x, uv.y)) * 0.15;\n\t\t\tsum += getColor(vec2(uv.x, uv.y)) * 0.16;\n\t\t\tsum += getColor(vec2(uv.x + blurSize.x, uv.y)) * 0.15;\n\t\t\tsum += getColor(vec2(uv.x + 2.0*blurSize.x, uv.y)) * 0.12;\n\t\t\tsum += getColor(vec2(uv.x + 3.0*blurSize.x, uv.y)) * 0.09;\n\t\t\tsum += getColor(vec2(uv.x + 4.0*blurSize.x, uv.y)) * 0.05;\n\n\t\t\t//y\n\t\t\tsum += getColor(vec2(uv.x, uv.y - 4.0*blurSize.y)) * 0.05;\n\t\t\tsum += getColor(vec2(uv.x, uv.y - 3.0*blurSize.y)) * 0.09;\n\t\t\tsum += getColor(vec2(uv.x, uv.y - 2.0*blurSize.y)) * 0.12;\n\t\t\tsum += getColor(vec2(uv.x, uv.y - blurSize.y)) * 0.15;\n\t\t\tsum += getColor(vec2(uv.x, uv.y)) * 0.16;\n\t\t\tsum += getColor(vec2(uv.x, uv.y + blurSize.y)) * 0.15;\n\t\t\tsum += getColor(vec2(uv.x, uv.y + 2.0*blurSize.y)) * 0.12;\n\t\t\tsum += getColor(vec2(uv.x, uv.y + 3.0*blurSize.y)) * 0.09;\n\t\t\tsum += getColor(vec2(uv.x, uv.y + 4.0*blurSize.y)) * 0.05;\n\t\t}\n\t\tif(u3d){\n\t\t\tfor (int i=0;i<=STEPS;i++) {\n\t\t\t\tfloat s=(float(i)/float(STEPS));\n\t\t\t\tvec2 p = vPos*(1.0+0.15*s);\n\t\t\t\tvec4 b = texture2D(tex, p*0.5+0.5);\n\t\t\t\tif (length(b.rgb-groundColor)<0.1) {\n\t\t\t\t\tif(i!=STEPS) {\n\t\t\t\t\t\tb.a = 0.0;\n\t\t\t\t\t}\n\t\t\t\t} else if(i!=0) {\n\t\t\t\t\tb.rgb=groundColor*0.8;\n\t\t\t\t}\n\t\t\t\ta.rgb = a.rgb*a.a + b.rgb*b.a*(1.0-a.a);\n\t\t\t\ta.a = a.a+b.a * (1.0-a.a);\n\t\t\t}\n\t\t}\n\t\tgl_FragColor = (u3d?a:texture2D(tex,uv)) + sum*(sin(uTime)*0.5+1.5);\n\t}\n\t");
    _0x501a1e.useProgram(_0x1a5788), _0x501a1e.bindBuffer(_0x501a1e.ARRAY_BUFFER, _0x501a1e.createBuffer()), _0x501a1e.bufferData(_0x501a1e.ARRAY_BUFFER, new Float32Array([-1, 1, -1, -1, 1, -1, -1, 1, 1, -1, 1, 1]), _0x501a1e.STATIC_DRAW), _0x501a1e.enableVertexAttribArray(0), _0x501a1e.vertexAttribPointer(0, 2, _0x501a1e.FLOAT, false, 0, 0), _0x501a1e.activeTexture(_0x501a1e.TEXTURE0), _0x501a1e.bindTexture(_0x501a1e.TEXTURE_2D, _0x501a1e.createTexture()), _0x501a1e.texParameteri(_0x501a1e.TEXTURE_2D, _0x501a1e.TEXTURE_WRAP_S, _0x501a1e.CLAMP_TO_EDGE), _0x501a1e.texParameteri(_0x501a1e.TEXTURE_2D, _0x501a1e.TEXTURE_WRAP_T, _0x501a1e.CLAMP_TO_EDGE), _0x501a1e.texParameteri(_0x501a1e.TEXTURE_2D, _0x501a1e.TEXTURE_MIN_FILTER, _0x501a1e.NEAREST), _0x501a1e.texParameteri(_0x501a1e.TEXTURE_2D, _0x501a1e.TEXTURE_MAG_FILTER, _0x501a1e.NEAREST), _0x501a1e.uniform1i(_0x501a1e.getUniformLocation(_0x1a5788, "tex"), 0);
    const _0x4db8c4 = _0x501a1e.getUniformLocation(_0x1a5788, "u3d"),
      _0x84611c = _0x501a1e.getUniformLocation(_0x1a5788, "uGlow"),
      _0x3d7f46 = _0x501a1e.getUniformLocation(_0x1a5788, "uTime"),
      _0x400eef = _0x501a1e.getUniformLocation(_0x1a5788, "blurSize");

    function _0x48c74c(_0x5b6409, _0x332557) {
      const _0x31db2c = _0x501a1e.createShader("vertex" == _0x5b6409 ? _0x501a1e.VERTEX_SHADER : _0x501a1e.FRAGMENT_SHADER);
      return _0x501a1e.shaderSource(_0x31db2c, _0x332557), _0x501a1e.compileShader(_0x31db2c), _0x501a1e.getShaderParameter(_0x31db2c, _0x501a1e.COMPILE_STATUS) || console.log("Error compiling " + _0x5b6409 + " shader. " + _0x501a1e.getShaderInfoLog(_0x31db2c)), _0x31db2c;
    }
    return function() {
      (_0x4ab6db.checked || _0x106baf.checked) && (_0x5df872.width === _0x39e650.width && _0x5df872.height === _0x39e650.height || (_0x5df872.width = _0x39e650.width, _0x5df872.height = _0x39e650.height, _0x501a1e.viewport(0, 0, _0x39e650.width, _0x39e650.height)), _0x501a1e.uniform1f(_0x3d7f46, 0.005 * performance.now()), _0x501a1e.uniform2fv(_0x400eef, [1 / _0x39e650.width, 1 / _0x39e650.height]), _0x501a1e.uniform1i(_0x4db8c4, _0x4ab6db.checked), _0x501a1e.uniform1i(_0x84611c, _0x106baf.checked), _0x501a1e.pixelStorei(_0x501a1e.UNPACK_FLIP_Y_WEBGL, true), _0x501a1e.texImage2D(_0x501a1e.TEXTURE_2D, 0, _0x501a1e.RGBA, _0x501a1e.RGBA, _0x501a1e.UNSIGNED_BYTE, _0x39e650), _0x501a1e.clear(_0x501a1e.COLOR_BUFFER_BIT | _0x501a1e.DEPTH_BUFFER_BIT), _0x501a1e.drawArrays(_0x501a1e.TRIANGLES, 0, 6), _0x540ea8.drawImage(_0x5df872, 0, 0, _0x39e650.width, _0x39e650.height));
    };
  }());
} catch (_0x29991c) {
  console.error("Error creating post processor. " + _0x29991c), _0x440660(_0x4ab6db, false), _0x440660(_0x106baf, false), _0x440660(_0x421c4c, false);
}
1 === window.devicePixelRatio && _0x440660(_0x421c4c, false), (function() {
  for (var _0x255b79 = 0, _0x1ede8e = ["ms", "moz", "webkit", "o"], _0x2283d3 = 0; _0x2283d3 < _0x1ede8e.length && !window.requestAnimationFrame; ++_0x2283d3) window.requestAnimationFrame = window[_0x1ede8e[_0x2283d3] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[_0x1ede8e[_0x2283d3] + "CancelAnimationFrame"] || window[_0x1ede8e[_0x2283d3] + "CancelRequestAnimationFrame"];
  window.requestAnimationFrame || (window.requestAnimationFrame = function(_0x51ae6d, _0x26d1de) {
    var _0x474c43 = new Date().getTime(),
      _0x2502c1 = Math.max(0, 16 - (_0x474c43 - _0x255b79)),
      _0x17cca6 = window.setTimeout(function() {
        _0x51ae6d(_0x474c43 + _0x2502c1);
      }, _0x2502c1);
    return _0x255b79 = _0x474c43 + _0x2502c1, _0x17cca6;
  }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(_0x34b7da) {
    clearTimeout(_0x34b7da);
  });
}());
const _0x22a69a = document.querySelector(".killer"),
  _0x45a0c5 = document.getElementById("fixedJoystickCb");
_0x5a12dd(_0x45a0c5, "fixed_joystick");
const _0x300310 = (window.mobileAndTabletCheck = function() {
    let _0x52a217 = false;
    var _0x137d7c;
    return _0x137d7c = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(_0x137d7c) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(_0x137d7c.substr(0, 4))) && (_0x52a217 = true), _0x52a217;
  })(),
  _0x13d9f5 = navigator.userAgent.toLowerCase(),
  _0x5c1a36 = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(_0x13d9f5),
  _0x58a27d = document.querySelector(".minimize"),
  _0x4ddb7f = document.querySelector(".minimize-btn");
_0x4ddb7f.onclick = function() {
  _0x58a27d.classList.add("minimize-show"), _0x3af8d3.classList.remove("game-show"), _0x3bef3e.classList.remove("grid-show");
};
const _0x4b31bc = document.querySelector(".hud-common"),
  _0x176966 = document.querySelector(".resume"),
  _0x2aaf3d = document.querySelector(".giveup");
_0x176966.onclick = function() {
  _0x51ba04(), _0x3af8d3.classList.add("game-show");
}, _0x2aaf3d.onclick = function() {
  _0x30f1bc && !_0x30f1bc.isDead && (_0x5f0f6b(new Uint8Array([_0x168cd0(6, 0)])), this.classList.add("btn-disabled"), _0x176966.click());
};
const _0x36d217 = document.getElementById("optimizedRendering");
_0x5a12dd(_0x36d217, "optimized_rendering");
const _0x270468 = document.querySelector("#kbMovementCb");
_0x5a12dd(_0x270468, "kb_movement");
const _0x4e19d2 = document.querySelector(".nickname");

function _0x440660(_0x1a00da, _0x196919) {
  _0x1a00da.parentNode.style.display = _0x196919 ? "" : "none";
}

function _0x5a12dd(_0x61031e, _0x3c5472) {
  const _0x3baae7 = localStorage[_0x3c5472];
  _0x61031e.checked = undefined !== _0x3baae7 ? "true" === _0x3baae7 : _0x61031e.checked, _0x61031e.oninput = function() {
    localStorage[_0x3c5472] = this.checked, _0x61031e === _0x421c4c && _0x1f31f7();
  };
}

function _0x2b50af(_0x424db9) {
  for (let _0x4c6129 = 1; _0x4c6129 < _0x424db9.segments.length; _0x4c6129++) {
    const _0x1061ed = _0x424db9.segments[_0x4c6129],
      _0x34c39b = _0x424db9.segments[_0x4c6129 - 1],
      _0x518d08 = _0x1061ed.x,
      _0x2682e5 = _0x1061ed.y;
    let _0x1c752a = _0x1061ed.x - _0x34c39b.x,
      _0x33a92d = _0x1061ed.y - _0x34c39b.y;
    Math.hypot(_0x1c752a, _0x33a92d) > _0x424db9.r && (_0x1061ed.x = _0x34c39b.oldX, _0x1061ed.y = _0x34c39b.oldY, _0x1061ed.oldX = _0x518d08, _0x1061ed.oldY = _0x2682e5), _0x1061ed.interpOldX = _0x1061ed.interpX, _0x1061ed.interpOldY = _0x1061ed.interpY;
  }
}

function _0x5015bd(_0x20cb31, _0x49157b, _0x5e9514, _0x45a2fa = 1) {
  const _0x616f20 = 2 * Math.PI / _0x5e9514,
    _0x40fba0 = 0.1 * _0x616f20 * _0x45a2fa,
    _0x557b2a = new Path2D();
  for (let _0x3d50e8 = 0; _0x3d50e8 <= _0x5e9514; _0x3d50e8++) {
    const _0x31dcba = _0x616f20 * _0x3d50e8,
      _0x2591bd = _0x31dcba - _0x40fba0,
      _0x1fbcaf = _0x31dcba + _0x40fba0;
    _0x3d50e8 % 2 == 0 ? (_0x557b2a.lineTo(Math.cos(_0x2591bd) * _0x20cb31, Math.sin(_0x2591bd) * _0x20cb31), _0x557b2a.lineTo(Math.cos(_0x1fbcaf) * _0x49157b, Math.sin(_0x1fbcaf) * _0x49157b)) : (_0x557b2a.lineTo(Math.cos(_0x2591bd) * _0x49157b, Math.sin(_0x2591bd) * _0x49157b), _0x557b2a.lineTo(Math.cos(_0x1fbcaf) * _0x20cb31, Math.sin(_0x1fbcaf) * _0x20cb31));
  }
  return _0x557b2a;
}
_0x4e19d2.oninput = function() {
  localStorage.nickname = this.value;
}, _0x4e19d2.maxLength = 15, _0x4e19d2.value = undefined !== localStorage.nickname ? localStorage.nickname : "", _0x440660(_0x45a0c5, _0x300310), _0x440660(_0x270468, !_0x300310), _0x300310 && (document.getElementById("pressEnterInfo").style.display = "none");
const _0x351eee = _0x5015bd(20, 22.5, 32, 1),
  _0x231a1a = _0x5015bd(10, 12.5, 16, 1.25),
  _0x28ea71 = [
    [
      [28, 28], new Path2D("m 0,0 c 0,1 -3,4 -10,4 -7,0 -10,-3 -10,-4 0,-0.807 4.548,-1.612 6.311,-1.894 C -13.001,-4.548 -13,-10 -13,-10 c 0.805,3.218 0.315,7.079 0.093,8.467 C -12.705,-0.942 -12.059,0 -10,0 c 3,0 3,-2 3,-2 l 0.002,0 c -0.234,-1.657 -0.565,-5.089 0.162,-8 0,0 0.002,5.491 0.697,8.134 C -4.273,-1.562 0,-0.782 0,0")
    ],
    [
      [14, 16], new Path2D("M 0,0 C 0,1 2,3 4,3 6,3 8,1 8,0 8,-1 7,-1 4,-1 1,-1 0,-1 0,0")
    ],
    [
      [12, 12], new Path2D("M 0,0 C 0,0 2,2 6,2 10,2 12,0 12,0 12,0 10,1 6,1 2,1 0,0 0,0")
    ],
    [
      [12, 10], new Path2D("M 0,0 C 0,1 2,2 6,2 10,2 12,1 12,0 12,-1 11,-1 6,-1 1,-1 0,-1 0,0")
    ]
  ],
  _0x12659b = new Path2D("M2358 5639 c-387 -26 -778 -95 -1438 -255 -257 -62 -569 -134 -738 -169 -91 -19 -166 -36 -168 -38 -1 -1 -6 -108 -10 -237 -7 -255 3 -395 36 -504 22 -70 73 -148 215 -326 110 -137 175 -236 212 -318 13 -30 48 -161 78 -291 135 -580 303 -1120 515 -1651 58 -146 124 -270 190 -359 261 -351 801 -618 1428 -706 454 -64 1044 -24 1403 95 592 198 1041 653 1452 1475 168 338 205 438 301 826 79 319 121 452 186 585 58 119 104 166 190 191 46 13 84 15 235 9 99 -4 199 -11 223 -15 60 -12 117 -55 178 -136 99 -132 158 -272 234 -555 190 -706 443 -1252 758 -1636 102 -125 243 -264 352 -346 422 -319 1015 -508 1596 -508 823 0 1516 333 1926 925 209 301 322 616 488 1355 62 279 148 612 187 730 43 128 117 276 178 352 25 31 80 82 121 114 46 34 81 69 89 88 22 52 26 134 16 276 -7 93 -7 175 1 265 12 150 5 195 -43 249 -33 39 -78 56 -209 81 -143 28 -304 71 -545 145 -326 101 -465 133 -842 195 -550 91 -674 105 -954 105 -485 0 -881 -57 -1844 -266 -1088 -237 -1424 -287 -1940 -288 -484 0 -719 35 -1515 231 -377 92 -569 132 -865 177 -813 126 -1272 163 -1677 135z");
class _0x1d5e9a {
  constructor(_0x58e01e, _0x56c500, _0xab1c56 = 0) {
    this.id = _0x58e01e, this.segments = [], this.updateTime = 0, this.dirX = Math.cos(_0x56c500), this.dirY = Math.sin(_0x56c500), this.newDirX = this.oldDirX = this.dirX, this.newDirY = this.oldDirY = this.dirY, this.sad = 0, this.angry = 0, this.faceSkin = -1, this.bodySkin = -1, this.energy = 0, this.iEnergy = 0, this.r = this.interpR = this.interpOldR = _0xab1c56, this.angle = _0x56c500, this.iEnergyChange = 0, this.energyChangeCounter = 1, this.energyAlpha = 0, this.nickname = "", this.team = -1;
  } ["interpolate"]() {
    const _0x4d57e5 = Math.min(1, (Date.now() - this.updateTime) / 100);
    for (let _0x3d3a93 = 0; _0x3d3a93 < this.segments.length; _0x3d3a93++) {
      const _0x17cb80 = this.segments[_0x3d3a93];
      _0x17cb80.interpX = _0x17cb80.interpOldX + (_0x17cb80.x - _0x17cb80.interpOldX) * _0x4d57e5, _0x17cb80.interpY = _0x17cb80.interpOldY + (_0x17cb80.y - _0x17cb80.interpOldY) * _0x4d57e5;
    }
    this.interpR = this.interpOldR + (this.r - this.interpOldR) * _0x4d57e5, this.dirX = this.oldDirX + (this.newDirX - this.oldDirX) * _0x4d57e5, this.dirY = this.oldDirY + (this.newDirY - this.oldDirY) * _0x4d57e5, this.interpFace(), this.iEnergy = this.oldEnergy + _0x4d57e5 * (this.energy - this.oldEnergy), this.energyChangeCounter -= _0x6b0948 / 0.5, this.energyChangeCounter < 0 && (this.iEnergyChange += 0.1 * (this.iEnergy - this.iEnergyChange)), this.iEnergyChange = Math.max(this.iEnergy, this.iEnergyChange), this.energyAlpha += (!this.isDead && this.energy < 1 ? 1 : -1) * _0x6b0948 / 0.15, this.energyAlpha = Math.max(Math.min(1, this.energyAlpha), 0);
  } ["interpFace"]() {
    const _0x2d7fdf = _0x6b0948 / 0.07;
    1 === this.mood ? (this.angry += _0x2d7fdf, this.sad -= _0x2d7fdf) : 2 === this.mood ? (this.sad += _0x2d7fdf, this.angry -= _0x2d7fdf) : 0 === this.mood && (this.angry -= _0x2d7fdf, this.sad -= _0x2d7fdf), this.angry = Math.min(1, Math.max(0, this.angry)), this.sad = Math.min(1, Math.max(0, this.sad));
  } ["drawEnergyAndNickname"](_0x4f39ce) {
    const _0x2cfca1 = this.segments[0];
    _0x4f39ce.save(), _0x4f39ce.lineCap = "round", _0x4f39ce.lineJoin = "round", _0x4f39ce.globalAlpha = this.energyAlpha, _0x4f39ce.translate(_0x2cfca1.interpX, _0x2cfca1.interpY);
    const _0xf11aed = this.interpR / 25;
    if (_0x4f39ce.scale(_0xf11aed, _0xf11aed), this.energyAlpha > 0) {
      _0x4f39ce.save(), _0x4f39ce.translate(0, 60);
      const _0x58f677 = 35;
      _0x4f39ce.beginPath(), _0x4f39ce.moveTo(-_0x58f677, 0), _0x4f39ce.lineTo(_0x58f677, 0), _0x4f39ce.lineWidth = 13, _0x4f39ce.strokeStyle = "#222", _0x4f39ce.stroke(), _0x4f39ce.beginPath(), _0x4f39ce.moveTo(-_0x58f677, 0), _0x4f39ce.lineTo(-_0x58f677 + this.iEnergyChange * _0x58f677 * 2, 0), _0x4f39ce.lineWidth = 6.5, _0x4f39ce.strokeStyle = "#dd3434", _0x4f39ce.stroke(), _0x4f39ce.beginPath(), _0x4f39ce.globalAlpha *= Math.min(1, Math.max(0.5, this.iEnergy / 0.05)), _0x4f39ce.moveTo(-_0x58f677, 0), _0x4f39ce.lineTo(-_0x58f677 + this.iEnergy * _0x58f677 * 2, 0), _0x4f39ce.lineWidth = 8, _0x4f39ce.strokeStyle = "#75dd34", _0x4f39ce.stroke(), _0x4f39ce.restore();
    }
    this.isDead || this === _0x30f1bc || "" === this.nickname.trim() || (_0x4f39ce.save(), _0x4f39ce.translate(0, -50), _0x4f39ce.globalAlpha = 1, _0x4f39ce.font = "bolder 24px Ubuntu", _0x4f39ce.strokeStyle = "#000", _0x4f39ce.lineWidth = 3, _0x4f39ce.textAlign = "center", _0x4f39ce.textBaseline = "bottom", _0x4f39ce.strokeText(this.nickname, 0, 0), _0x4f39ce.fillStyle = "#fff", _0x4f39ce.fillText(this.nickname, 0, 0), _0x4f39ce.restore()), _0x4f39ce.restore();
  } ["draw"](_0x5196f7, _0x36028c, _0x37a092 = true) {
    const _0x37b4af = Date.now();
    if (_0x36028c.lineWidth = 5, _0x36028c.lineWidth, this.isDead) {
      const _0x4a3237 = (_0x37b4af - this.diedAt) / 500;
      if (_0x4a3237 > 1) return void _0x600e07.splice(_0x5196f7, 1);
      _0x36028c.globalAlpha = Math.abs(Math.sin(_0x4a3237 * Math.PI * 2)) * (1 - _0x4a3237) * 0.7;
    } else _0x36028c.globalAlpha = 1;
    const _0x4363ec = (_0x37b4af - this.diggedLavaAt) / 200,
      _0x511c20 = _0x7318e0(this.team),
      _0xd95143 = _0x511c20.map(_0x595459 => 0.81 * _0x595459);
    if (_0x4363ec < 1) {
      const _0x7d82bd = [255, 0, 0],
        _0x549fca = 0.5 * (1 - _0x4363ec),
        _0x2f7905 = 1 - _0x549fca;
      for (let _0x2d7c7b = 0; _0x2d7c7b < 3; _0x2d7c7b++) _0x511c20[_0x2d7c7b] = _0x511c20[_0x2d7c7b] * _0x2f7905 + _0x7d82bd[_0x2d7c7b] * _0x549fca, _0xd95143[_0x2d7c7b] = _0xd95143[_0x2d7c7b] * _0x2f7905 + _0x7d82bd[_0x2d7c7b] * _0x549fca;
    }
    let _0x1d0222 = _0x36028c.fillStyle = "rgb(" + _0x511c20.join(",") + ")",
      _0x47a7bd = _0x36028c.strokeStyle = "rgb(" + _0xd95143.join(",") + ")";
    const _0x17f074 = 1 * this.interpR,
      _0x487612 = this.segments[0];
    if (this.isDead || _0x36d217.checked) {
      _0x36028c.beginPath();
      for (let _0x5615bb = 0; _0x5615bb < this.segments.length; _0x5615bb++) {
        const {
          interpX: _0x53f26e,
          interpY: _0x3fd1b1
        } = this.segments[_0x5615bb];
        0 === _0x5615bb ? _0x36028c.moveTo(_0x53f26e, _0x3fd1b1) : _0x36028c.lineTo(_0x53f26e, _0x3fd1b1);
      }
      _0x36028c.lineWidth = 2 * _0x17f074 + 10, _0x36028c.lineCap = "round", _0x36028c.lineJoin = "round", _0x36028c.stroke(), _0x36028c.strokeStyle = _0x36028c.fillStyle, _0x36028c.lineWidth -= 10, _0x36028c.stroke();
    } else {
      _0x36028c.lineCap = "round";
      let _0x35b8ba = 0;
      const _0x415d13 = this.segments.length - 1;
      for (let _0x334510 = 1; _0x334510 <= _0x415d13; _0x334510++) {
        const _0x2eb9fd = this.segments[_0x334510 - 1],
          _0xf7d1b4 = this.segments[_0x334510],
          _0x986c0c = _0xf7d1b4.interpX - _0x2eb9fd.interpX,
          _0x3398d9 = _0xf7d1b4.interpY - _0x2eb9fd.interpY;
        let _0x420478 = Math.hypot(_0x986c0c, _0x3398d9);
        const _0x4aa476 = Math.atan2(_0x3398d9, _0x986c0c);
        if (_0x35b8ba += _0x420478, _0xf7d1b4.d = _0x420478, _0xf7d1b4.angle = _0x4aa476, _0x420478 = _0x420478 || 1, _0xf7d1b4.dirX = _0x986c0c / _0x420478, _0xf7d1b4.dirY = _0x3398d9 / _0x420478, _0xf7d1b4.norX = -_0xf7d1b4.dirY, _0xf7d1b4.norY = _0xf7d1b4.dirX, 1 !== _0x334510) {
          _0x2eb9fd.norX += _0xf7d1b4.norX, _0x2eb9fd.norY += _0xf7d1b4.norY;
          const _0x4e6434 = Math.hypot(_0x2eb9fd.norX, _0x2eb9fd.norY);
          _0x2eb9fd.norX /= _0x4e6434, _0x2eb9fd.norY /= _0x4e6434;
        } else _0x2eb9fd.norX = _0xf7d1b4.norX, _0x2eb9fd.norY = _0xf7d1b4.norY, _0x2eb9fd.angle = _0xf7d1b4.angle, _0x2eb9fd.distance = 0;
        _0xf7d1b4.distance = _0x35b8ba;
      }
      _0x36028c.lineWidth = 5;
      const _0x5f075f = this.segments[_0x415d13];
      _0x36028c.beginPath(), _0x36028c.arc(_0x5f075f.interpX, _0x5f075f.interpY, _0x17f074, 0, 2 * Math.PI), _0x36028c.fill(), _0x36028c.stroke();
      for (let _0x30c33b = _0x415d13; _0x30c33b >= 1; _0x30c33b--) {
        const _0x5cd7c0 = this.segments[_0x30c33b],
          _0x45e1fd = this.segments[_0x30c33b - 1];
        _0x5cd7c0.interpX === _0x45e1fd.interpX && _0x5cd7c0.interpY === _0x45e1fd.interpY || (_0x36028c.beginPath(), _0x36028c.moveTo(_0x5cd7c0.interpX + _0x5cd7c0.norX * _0x17f074, _0x5cd7c0.interpY + _0x5cd7c0.norY * _0x17f074), _0x36028c.lineTo(_0x5cd7c0.interpX - _0x5cd7c0.norX * _0x17f074, _0x5cd7c0.interpY - _0x5cd7c0.norY * _0x17f074), _0x36028c.lineTo(_0x45e1fd.interpX - _0x45e1fd.norX * _0x17f074, _0x45e1fd.interpY - _0x45e1fd.norY * _0x17f074), _0x36028c.lineTo(_0x45e1fd.interpX + _0x45e1fd.norX * _0x17f074, _0x45e1fd.interpY + _0x45e1fd.norY * _0x17f074), _0x36028c.fill(), _0x36028c.beginPath(), _0x36028c.moveTo(_0x45e1fd.interpX - _0x45e1fd.norX * _0x17f074, _0x45e1fd.interpY - _0x45e1fd.norY * _0x17f074), _0x36028c.lineTo(_0x45e1fd.interpX + _0x45e1fd.norX * _0x17f074, _0x45e1fd.interpY + _0x45e1fd.norY * _0x17f074), _0x36028c.strokeStyle = _0x1d0222, _0x36028c.stroke(), _0x36028c.beginPath(), _0x36028c.moveTo(_0x5cd7c0.interpX + _0x5cd7c0.norX * _0x17f074, _0x5cd7c0.interpY + _0x5cd7c0.norY * _0x17f074), _0x36028c.lineTo(_0x45e1fd.interpX + _0x45e1fd.norX * _0x17f074, _0x45e1fd.interpY + _0x45e1fd.norY * _0x17f074), _0x36028c.moveTo(_0x45e1fd.interpX - _0x45e1fd.norX * _0x17f074, _0x45e1fd.interpY - _0x45e1fd.norY * _0x17f074), _0x36028c.lineTo(_0x5cd7c0.interpX - _0x5cd7c0.norX * _0x17f074, _0x5cd7c0.interpY - _0x5cd7c0.norY * _0x17f074), _0x36028c.strokeStyle = _0x47a7bd, _0x36028c.stroke());
      }
      _0x36028c.beginPath();
      const _0x21f5ab = _0x487612.angle + Math.PI / 2;
      _0x36028c.arc(_0x487612.interpX, _0x487612.interpY, _0x17f074, _0x21f5ab, _0x21f5ab + Math.PI), _0x36028c.fill(), _0x36028c.stroke();
    }
    const _0x5b2818 = (_0x13b2af.faceSkins[this.faceSkin] || {
      "name": "idk"
    }).name;
    if ("Faceless" === _0x5b2818) return;
    _0x36028c.save(), _0x36028c.translate(_0x487612.interpX, _0x487612.interpY);
    const _0x3f7417 = _0x17f074 / 30 * (_0x5b2818.startsWith("Kirk") ? 0.7 : 1);
    let _0x5637af = 0;
    if ("Gear" === _0x5b2818) {
      _0x36028c.scale(_0x3f7417, _0x3f7417), _0x36028c.fillStyle = "#111", _0x36028c.fill(_0x351eee), _0x36028c.fillStyle = _0x1d0222, _0x36028c.save();
      const _0x52c728 = Date.now() / 500 % Math.PI * 2;
      _0x36028c.rotate(_0x52c728), _0x36028c.translate(10, 0), _0x36028c.rotate(2 * -_0x52c728), _0x36028c.fill(_0x231a1a), _0x36028c.rotate(_0x52c728), _0x36028c.scale(0.35, 0.35), _0x36028c.scale(1 / _0x3f7417, 1 / _0x3f7417);
    }
    if ("Cute" === _0x5b2818) {
      _0x36028c.scale(_0x3f7417, _0x3f7417);
      const _0x7faf8 = this.isDead ? 1 : this.sad + this.angry,
        _0x698a89 = 1 - _0x7faf8;
      _0x36028c.strokeStyle = "#222", _0x36028c.scale(1.15, 1.15), _0x36028c.save(), _0x36028c.translate(0, 9.25 + 1.5 * (this.isDead ? -1 : this.dirY)), _0x698a89 > 0 && (_0x36028c.beginPath(), _0x36028c.ellipse(0, 0, 1.6 * _0x698a89, 2 * _0x698a89, 0, 0, 2 * Math.PI), _0x36028c.fillStyle = "#222", _0x36028c.fill()), _0x7faf8 > 0 && (_0x36028c.beginPath(), _0x36028c.moveTo(-3 * _0x7faf8, 0.7), _0x36028c.quadraticCurveTo(0, -2, 3 * _0x7faf8, 0.7), _0x36028c.lineWidth = 1.5 * _0x7faf8, _0x36028c.stroke()), _0x36028c.restore();
      for (let _0x493fe4 = 0; _0x493fe4 < 2; _0x493fe4++) {
        const _0x2b7bba = 9 * (2 * _0x493fe4 - 1),
          _0x1160b0 = 0 === _0x493fe4 ? 1 : 0,
          _0x283608 = 1 ^ _0x1160b0;
        this.isDead ? _0x233622(0.8 * _0x2b7bba, -6, 6, 2) : (_0x36028c.save(), _0x36028c.beginPath(), _0x36028c.moveTo(_0x2b7bba - 6, 4 * _0x1160b0 * this.sad - 15 + 5 * _0x283608 * this.angry), _0x36028c.lineTo(_0x2b7bba + 6, 4 * _0x283608 * this.sad - 15 + 5 * _0x1160b0 * this.angry), _0x36028c.lineTo(_0x2b7bba + 6, 5), _0x36028c.lineTo(_0x2b7bba - 6, 5), _0x36028c.clip(), _0x36028c.beginPath(), _0x36028c.ellipse(_0x2b7bba, -6, 5.5, 8, 0, 0, 2 * Math.PI), _0x36028c.fillStyle = "#222", _0x36028c.lineWidth = 1.25, _0x36028c.fill(), _0x36028c.stroke(), _0x36028c.clip(), _0x36028c.fillStyle = "#fff", _0x36028c.beginPath(), _0x36028c.arc(_0x2b7bba + 3 * this.dirX, 6 * this.dirY - 6, 4.5, 0, 2 * Math.PI), _0x36028c.fill(), _0x36028c.restore());
      }
    } else {
      "Kirkier" === _0x5b2818 && _0x36028c.translate(13 * this.dirX, 13 * this.dirY), "Sarcastic" === _0x5b2818 ? _0x5637af = Math.PI : "Dizzy" === _0x5b2818 && (_0x5637af = Date.now() / 200 % (2 * Math.PI)), _0x36028c.rotate(_0x5637af), _0x36028c.scale(_0x3f7417, _0x3f7417), "Bot" === _0x5b2818 ? (_0x36028c.beginPath(), _0x36028c.moveTo(-13, 14), _0x36028c.lineTo(13, 14), _0x36028c.strokeStyle = _0x36028c.fillStyle = "#333", _0x36028c.lineWidth = 8, _0x36028c.stroke(), _0x36028c.beginPath(), _0x36028c.moveTo(-3, 4), _0x36028c.lineTo(3, 4), _0x36028c.lineTo(0, -2), _0x36028c.closePath(), _0x36028c.lineWidth = 4, _0x36028c.lineJoin = _0x36028c.lineCap = "round", _0x36028c.stroke(), _0x36028c.fill()) : "Moyai" === _0x5b2818 ? (_0x36028c.fillStyle = "#333", function(_0x4ac605, _0x355878) {
        _0x4ac605.save();
        const _0x5cd9b1 = 1.5 * 1.15;
        _0x4ac605.translate(-31, 35), _0x4ac605.scale(_0x5cd9b1, -_0x5cd9b1);
        for (let _0x3171cc = 0; _0x3171cc < _0x28ea71.length; _0x3171cc++) {
          _0x4ac605.save();
          const _0x2ad690 = _0x28ea71[_0x3171cc];
          _0x4ac605.translate(..._0x2ad690[0]), _0x4ac605.fill(_0x2ad690[1]), _0x4ac605.restore();
        }
        _0x4ac605.restore();
      }(_0x36028c)) : "Ascii" === _0x5b2818 ? (_0x36028c.save(), _0x36028c.rotate(Math.PI / 2), _0x36028c.fillStyle = "#222", _0x36028c.font = "bolder 22px monospace", _0x36028c.textAlign = "center", _0x36028c.textBaseline = "middle", this.isDead ? _0x36028c.fillText("x(", 0, 0) : 1 === this.mood ? (_0x36028c.fillText(":(", 0, 0), _0x36028c.fillText(">", -18, 0)) : 2 === this.mood ? _0x36028c.fillText(":(", 0, 0) : _0x36028c.fillText(":)", 0, 0), _0x36028c.restore()) : "All Seeing" !== _0x5b2818 && (_0x36028c.beginPath(), _0x36028c.moveTo(-7, 9.25), _0x36028c.quadraticCurveTo(0, 6 + (this.isDead ? -10 : -10 * this.sad - 12 * this.angry) + 9.25, 7, 9.25), _0x36028c.strokeStyle = "#222", _0x36028c.lineWidth = 1.75, _0x36028c.stroke());
      let _0x26a620 = 7.5;
      const _0x4a395b = Math.sin(-_0x5637af),
        _0x5d498e = Math.cos(-_0x5637af),
        _0x2faa54 = this.dirX * _0x5d498e - _0x4a395b * this.dirY,
        _0x59ca49 = this.dirX * _0x4a395b + _0x5d498e * this.dirY;
      if ("Too cool" === _0x5b2818) _0x36028c.save(), _0x36028c.translate(-27.5, 7), _0x36028c.scale(0.1 * 0.042, 0.042 * -0.1), _0x36028c.fillStyle = "#222", _0x36028c.fill(_0x12659b), _0x36028c.restore();
      else {
        if ("Ascii" === _0x5b2818 || "Moyai" === _0x5b2818);
        else {
          if ("Cyclops" === _0x5b2818) {
            if (this.isDead) _0x233622(0, -6, 6, 3);
            else {
              _0x36028c.save(), _0x36028c.beginPath();
              const _0x55b413 = 2 * this.sad,
                _0x20f8a5 = 4;
              _0x36028c.moveTo(-_0x20f8a5, -11 + _0x55b413), _0x36028c.lineTo(0, 2 * this.angry - 11), _0x36028c.lineTo(_0x20f8a5, -11 + _0x55b413), _0x36028c.lineTo(_0x20f8a5, 0), _0x36028c.lineTo(-_0x20f8a5, 0), _0x36028c.closePath(), _0x36028c.fillStyle = "#222", _0x36028c.lineWidth = 1, _0x36028c.fill(), _0x36028c.stroke(), _0x36028c.clip(), _0x36028c.fillStyle = "#fff", _0x36028c.fillRect(1.75 * _0x2faa54 - 2.5, 4.25 * _0x59ca49 - 8, 5, 5), _0x36028c.restore();
            }
          } else {
            if ("All Seeing" === _0x5b2818) this.isDead ? _0x233622(0, 0, 20, 7) : (_0x36028c.beginPath(), _0x36028c.arc(0, 0, 18, 0, 2 * Math.PI), _0x36028c.fillStyle = "#222", _0x36028c.fill(), _0x36028c.beginPath(), _0x36028c.arc(7 * _0x2faa54, 7 * _0x59ca49, 8, 0, 2 * Math.PI), _0x36028c.fillStyle = "#fff", _0x36028c.fill());
            else {
              if ("Bot" === _0x5b2818) {
                const _0x25a341 = -9,
                  _0x230082 = 7;
                _0x26a620 *= 1.5;
                for (let _0xe4ad6 = 0; _0xe4ad6 < 2; _0xe4ad6++) {
                  const _0x45b231 = (2 * _0xe4ad6 - 1) * _0x26a620,
                    _0x375eed = 0 === _0xe4ad6 ? 1 : 0,
                    _0x1371b8 = 1 ^ _0x375eed;
                  this.isDead ? _0x233622(_0x45b231, _0x25a341, 6, 5) : (_0x36028c.save(), _0x36028c.beginPath(), _0x36028c.moveTo(_0x45b231 - _0x230082, _0x25a341 - _0x230082 + (this.sad * _0x375eed * 4 + this.angry * _0x1371b8 * 6)), _0x36028c.lineTo(_0x45b231 - _0x230082, _0x25a341 + _0x230082), _0x36028c.lineTo(_0x45b231 + _0x230082, _0x25a341 + _0x230082), _0x36028c.lineTo(_0x45b231 + _0x230082, _0x25a341 - _0x230082 + (this.angry * _0x375eed * 6 + this.sad * _0x1371b8 * 4)), _0x36028c.closePath(), _0x36028c.clip(), _0x36028c.fillStyle = "#333", _0x36028c.beginPath(), _0x36028c.arc(_0x45b231, _0x25a341, _0x230082, 0, 2 * Math.PI), _0x36028c.fill(), _0x36028c.restore());
                }
              } else {
                if ("Creepy" === _0x5b2818) {
                  const _0x3ccb4e = -7,
                    _0x2d84d9 = 3.5;
                  for (let _0x1fabd8 = 0; _0x1fabd8 < 2; _0x1fabd8++) {
                    const _0x5af6bb = (2 * _0x1fabd8 - 1) * _0x26a620,
                      _0x365b9e = 0 === _0x1fabd8 ? 1 : 0,
                      _0x4a59ec = 1 ^ _0x365b9e;
                    this.isDead ? _0x233622(_0x5af6bb, _0x3ccb4e, 4, 2) : (_0x36028c.save(), _0x36028c.beginPath(), _0x36028c.moveTo(_0x5af6bb - _0x2d84d9, _0x3ccb4e - _0x2d84d9 + (this.sad * _0x365b9e * 2 + this.angry * _0x4a59ec * 3)), _0x36028c.lineTo(_0x5af6bb - _0x2d84d9, _0x3ccb4e + _0x2d84d9), _0x36028c.lineTo(_0x5af6bb + _0x2d84d9, _0x3ccb4e + _0x2d84d9), _0x36028c.lineTo(_0x5af6bb + _0x2d84d9, _0x3ccb4e - _0x2d84d9 + (this.angry * _0x365b9e * 3 + this.sad * _0x4a59ec * 2)), _0x36028c.closePath(), _0x36028c.clip(), _0x36028c.fillStyle = "#222", _0x36028c.beginPath(), _0x36028c.arc(_0x5af6bb, _0x3ccb4e, _0x2d84d9, 0, 2 * Math.PI), _0x36028c.fill(), _0x36028c.restore());
                  }
                } else {
                  for (let _0x26c511 = 0; _0x26c511 < 2; _0x26c511++) {
                    const _0x49c354 = (2 * _0x26c511 - 1) * _0x26a620;
                    if (this.isDead) {
                      _0x233622(_0x49c354, -6, 5, 2.5);
                      continue;
                    }
                    const _0x4c8715 = 0 === _0x26c511 ? 1 : 0,
                      _0x3dd8e2 = 1 ^ _0x4c8715;
                    _0x36028c.save(), _0x36028c.beginPath(), _0x36028c.moveTo(_0x49c354 + -2.75, 2 * _0x4c8715 * this.sad - 11 + 2.5 * _0x3dd8e2 * this.angry), _0x36028c.lineTo(_0x49c354 + 2.75, 2 * _0x3dd8e2 * this.sad - 11 + 2.5 * _0x4c8715 * this.angry), _0x36028c.lineTo(_0x49c354 + 2.75, 0), _0x36028c.lineTo(_0x49c354 + -2.75, 0), _0x36028c.closePath(), _0x36028c.fillStyle = "#222", _0x36028c.lineWidth = 1, _0x36028c.fill(), _0x36028c.stroke(), _0x36028c.clip(), _0x36028c.fillStyle = "#fff", _0x36028c.fillRect(_0x49c354 - 2.5 + 1.75 * _0x2faa54, 4.25 * _0x59ca49 - 8, 5, 5), _0x36028c.restore();
                  }
                  "Pirate" === _0x5b2818 ? (_0x36028c.save(), _0x36028c.beginPath(), _0x36028c.arc(0, 0, 30, 0, 2 * Math.PI), _0x36028c.clip(), _0x36028c.translate(7.5, -5.7), _0x36028c.beginPath(), _0x36028c.arc(0, 0, 8.5, 0, 2 * Math.PI), _0x36028c.fillStyle = "#222", _0x36028c.fill(), _0x36028c.strokeStyle = "#222", _0x36028c.beginPath(), _0x36028c.moveTo(-20, -30), _0x36028c.quadraticCurveTo(-3, 0, 30, 0), _0x36028c.lineWidth = 4, _0x36028c.stroke(), _0x36028c.restore()) : "Intellectual" === _0x5b2818 && (_0x36028c.save(), _0x36028c.translate(7.5, -5.7), _0x36028c.beginPath(), _0x36028c.arc(0, 0, 8.5, 0, 2 * Math.PI), _0x36028c.fillStyle = "hsla(0,0%,100%,0.5)", _0x36028c.fill(), _0x36028c.lineWidth = 1, _0x36028c.strokeStyle = "#333", _0x36028c.stroke(), _0x36028c.translate(8.5, 0), _0x36028c.beginPath(), _0x36028c.moveTo(0, 0), _0x36028c.lineTo(0, 18), _0x36028c.stroke(), _0x36028c.restore());
                }
              }
            }
          }
        }
      }
    }

    function _0x233622(_0x16597b, _0x44e117, _0x358c02 = 10, _0x1cb78f = 5) {
      _0x36028c.save(), _0x36028c.translate(_0x16597b, _0x44e117), _0x36028c.rotate(Math.PI / 4), _0x36028c.scale(_0x358c02, _0x358c02), _0x36028c.beginPath(), _0x36028c.moveTo(0, -1), _0x36028c.lineTo(0, 1), _0x36028c.moveTo(-1, 0), _0x36028c.lineTo(1, 0), _0x36028c.lineWidth = _0x1cb78f / _0x358c02, _0x36028c.strokeStyle = "#333", _0x36028c.stroke(), _0x36028c.restore();
    }
    "Gear" === _0x5b2818 && _0x36028c.restore(), _0x36028c.restore();
  }
}

function _0x5dad13(_0x5551ff) {
  return function(_0x51f024) {
    const _0x4e60c2 = Math.floor(5 * Math.random());
    for (let _0x5d921e = 0; _0x5d921e < _0x51f024.length; _0x5d921e++) _0x51f024[_0x5d921e] = Math.max(0, _0x51f024[_0x5d921e] - _0x4e60c2);
    return _0x51f024;
  }(_0xa8836b(_0x5551ff));
}
crypto.randomUUID = crypto.randomUUID || function() {
  return ([10000000] + -1000 + -4000 + -8000 + -100000000000).replace(/[018]/g, _0x490ac0 => (_0x490ac0 ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> _0x490ac0 / 4).toString(16));
}, window.onload = function() {
  _0x12c763.style.display = "none", _0x2c57cb("https://digworm.io".replace("http", "ws")), _0x22c229();
}, document.body.oncontextmenu = function() {
  return false;
};
const _0x2bc59b = function(_0x5f1a29) {
    const _0x160d15 = {};
    for (let _0x4a21fc in _0x5f1a29) _0x160d15[_0x5f1a29[_0x4a21fc]] = _0x4a21fc;
    return _0x160d15;
  }({
    "invalidProtocol": 0,
    "outdatedVersion": 1,
    "tooManyConnections": 2,
    "AFK": 3
  }),
  _0x12c763 = document.querySelector(".loader"),
  _0x1c2450 = document.querySelector(".connecting"),
  _0x3bef3e = document.querySelector(".grid"),
  _0x13b57e = document.querySelector(".lb"),
  _0x14a726 = document.querySelector(".lb-content"),
  _0x273fb7 = document.querySelector(".lb-header span");
if (_0x300310) {
  _0x13b57e.classList.add("slide-up"), _0x13b57e.style.pointerEvents = "all";
  const _0x1aa954 = document.querySelector(".lb-btn");
  _0x1aa954.classList.remove("slide-up"), _0x1aa954.ontouchstart = _0x13b57e.ontouchstart = function() {
    _0x1aa954.classList.toggle("slide-up"), _0x13b57e.classList.toggle("slide-up");
  };
}
const _0x275119 = document.querySelector(".menu"),
  _0x5cf790 = document.querySelector(".settings"),
  _0x4fc487 = document.querySelector(".changelog"),
  _0x449e60 = document.querySelector(".settings-btn"),
  _0x1f10aa = document.querySelector(".changelog-btn");
_0x4b4f37("#ppBtn", "/docs/pp.html"), _0x4b4f37("#tosBtn", "/docs/tos.html");
const _0xe9a438 = document.querySelector(".login-btn");
_0xe9a438.onclick = function() {
  _0x2f807e || (window.location.href = "https://discord.com/api/oauth2/authorize?client_id=995547764983341057&redirect_uri=" + encodeURIComponent(window.location.origin + "/discord") + "&response_type=code&scope=identify&state=" + encodeURIComponent(btoa(_0x5c51f7)));
};
const _0x5d345a = document.querySelector(".logout-btn");

function _0x4b4f37(_0x2a413a, _0x3ef207) {
  document.querySelector(_0x2a413a).onclick = function() {
    window.open(_0x3ef207, "_blank");
  };
}
_0x5d345a.onclick = function() {
  _0x5c51f7 == localStorage.account_id && delete localStorage.account_id, delete localStorage.discord_data, _0x81c091 && _0x81c091.close();
}, _0x4b4f37(".discord-btn", "https://discord.gg/WkYHsUQF5a"), _0x4b4f37(".reddit-btn", "https://www.reddit.com/r/digworm/");
const _0x5a64b3 = document.querySelector(".overlay"),
  _0x2c8c09 = (document.querySelector(".game .overlay"), document.querySelector(".shop"));
_0x300310 && _0x2c8c09.classList.add("fullsize-shop");
const _0x3af8d3 = document.querySelector(".game"),
  _0x369b80 = document.querySelector(".gameover"),
  _0x55f3f5 = document.querySelector(".continue-btn"),
  _0xb883b5 = document.querySelector(".face-skins"),
  _0x3ce74a = document.querySelector(".body-skins"),
  _0x1d54fb = document.createElement("div"),
  _0x39eeab = document.querySelector(".new-skins"),
  _0x478f63 = [],
  _0x2becd8 = document.querySelector(".unequip-btn");
_0x2becd8.onclick = function() {
  for (let _0x2610c0 = 0; _0x2610c0 < 2; _0x2610c0++) {
    const _0xfdf35c = document.querySelector("." + (0 === _0x2610c0 ? "face" : "body") + "-skin [stroke=Unequip]");
    _0xfdf35c && _0xfdf35c.setAttribute("stroke", "Equip");
  }
  localStorage.equipped_body_skin = -1, localStorage.equipped_face_skin = -1, this.classList.add("btn-disabled");
};
const _0x16234b = [];

function _0x2867f8(_0x447abd, _0x492629, _0x49aeec) {
  let _0x48fa09;
  _0x447abd = _0x447abd.map((_0xfb1f36, _0x15510e) => (_0xfb1f36.id = _0x15510e, _0xfb1f36)).sort(function(_0x39449a, _0x435a32) {
    return _0x39449a.price - _0x435a32.price;
  }), _0x492629.innerHTML = "";
  for (let _0x2c34c7 = 0; _0x2c34c7 < _0x447abd.length; _0x2c34c7++) {
    _0x2c34c7 % 4 == 0 && (_0x48fa09 = document.createElement("div"), _0x48fa09.classList.add("shop-row"), _0x492629.appendChild(_0x48fa09));
    const _0x2a3be0 = _0x447abd[_0x2c34c7];
    _0x1d54fb.innerHTML = "\n\t\t<div class=\"shop-item " + _0x49aeec + "-skin " + _0x49aeec + "Skin" + _0x2c34c7 + "\">\n\t\t\t<div class=\"shop-item-preview\"></div>\n\t\t\t<span stroke=\"" + _0x2a3be0.name + "\" class=\"shop-item-name\"></span>\n\t\t\t<div class=\"btn gold-btn btn-disabled\">\n\t\t\t\t<i class=\"fa fa-circle\"></i>\n\t\t\t\t<span stroke=\"" + _0x2a3be0.price.toLocaleString() + "\"></span>\n\t\t\t</div>\n\t\t</div>";
    const _0x104f6a = _0x1d54fb.children[0];
    _0x2a3be0.shopItemEl = _0x104f6a, _0x172d18(_0x104f6a)[_0x49aeec + "Skin"] = _0x2a3be0.id, _0x48fa09.appendChild(_0x104f6a), _0x104f6a.initialParent = _0x48fa09, _0x104f6a.tempDiv = document.createElement("div");
  }
}

function _0x7318e0(_0x4b9a51) {
  switch (_0x4b9a51) {
    case 0:
      return [181, 136, 95];
    case 1:
      return [96, 150, 181];
    case 2:
      return [109, 181, 96];
    case -1:
      return [153, 153, 153];
  }
}
document.onmousemove = function(_0x294734) {
  for (let _0x223282 = 0; _0x223282 < _0x16234b.length; _0x223282++) {
    const _0x4a4caf = _0x16234b[_0x223282],
      _0x28c182 = _0x4a4caf.previewPlayer,
      _0x55c3de = _0x4a4caf.previewEl.getBoundingClientRect(),
      _0x525de3 = Math.atan2(_0x294734.clientY - (_0x55c3de.top + _0x55c3de.height / 2), _0x294734.clientX - (_0x55c3de.left + _0x55c3de.width / 2));
    _0x28c182.oldDirX = _0x28c182.dirX, _0x28c182.oldDirY = _0x28c182.dirY, _0x28c182.newDirX = Math.cos(_0x525de3), _0x28c182.newDirY = Math.sin(_0x525de3);
  }
};
let _0x6a2f21 = 0;
const _0x1f17e2 = _0x172d18(document.querySelector(".my-skin-preview"));

function _0x172d18(_0xa9446b) {
  const _0x30064e = document.createElement("canvas");
  _0x30064e.style.position = "absolute", _0x30064e.style.top = "0", _0x30064e.style.left = "0", _0x30064e.style.width = "100%", _0xa9446b.style.position = "relative", _0xa9446b.insertBefore(_0x30064e, _0xa9446b.children[0]);
  const _0x504413 = _0x30064e.getContext("2d"),
    _0x557ce0 = _0xa9446b.querySelector(".shop-item-preview"),
    _0xeabb01 = new _0x1d5e9a(0, 0, 30);
  for (let _0x4803a2 = 0; _0x4803a2 < 2; _0x4803a2++) _0xeabb01.segments.push({
    "interpX": -100 * _0x4803a2,
    "interpY": 0
  });
  const _0x59cc30 = {
    "previewPlayer": _0xeabb01,
    "el": _0xa9446b,
    "previewEl": _0x557ce0,
    "faceSkin": -1,
    "bodySkin": -1,
    "render"() {
      if (0 === _0x2c8c09.getBoundingClientRect().width) return;
      const _0x1acc9c = _0xa9446b.getBoundingClientRect();
      if (0 === _0x1acc9c.height || 0 === _0x1acc9c.width) return;
      const _0x18e24f = _0x1acc9c.width * window.devicePixelRatio,
        _0x42e7df = _0x1acc9c.height * window.devicePixelRatio;
      _0x30064e.width === _0x18e24f && _0x30064e.height === _0x42e7df || (_0x30064e.width = _0x18e24f, _0x30064e.height = _0x42e7df);
      const _0x576a95 = _0x557ce0.getBoundingClientRect();
      _0x504413.clearRect(0, 0, _0x30064e.width, _0x30064e.height), _0x504413.save(), _0x504413.scale(window.devicePixelRatio, window.devicePixelRatio);
      const _0x854180 = _0xeabb01.segments[0],
        _0x36335a = _0x576a95.width / 2;
      _0x504413.translate(_0x576a95.left - _0x1acc9c.left + _0x36335a, _0x576a95.top - _0x1acc9c.top + _0x36335a);
      const _0x292c06 = _0x36335a / _0xeabb01.interpR;
      _0x504413.scale(_0x292c06, _0x292c06), _0x504413.translate(-_0x854180.x, -_0x854180.y), _0xeabb01.faceSkin = this.faceSkin, _0xeabb01.bodySkin = this.bodySkin, _0xeabb01.mood = _0x6a2f21, _0xeabb01.dirX += 0.2 * (_0xeabb01.newDirX - _0xeabb01.dirX), _0xeabb01.dirY += 0.2 * (_0xeabb01.newDirY - _0xeabb01.dirY), _0xeabb01.interpFace(), _0xeabb01.draw(0, _0x504413, false), _0x504413.restore();
    }
  };
  return _0x16234b.push(_0x59cc30), _0x59cc30;
}
_0x55f3f5.onclick = function() {
  _0x58a27d.classList.remove("minimize-show"), _0x3af8d3.classList.remove("game-show"), _0x81c091 && _0x81c091.readyState === _0x81c091.OPEN && setTimeout(function() {
    _0x3bef3e.classList.add("grid-show");
  }, 500);
}, _0x5a64b3.onclick = function() {
  _0x2c8c09.classList.remove("dialog-show"), _0x5a64b3.classList.remove("overlay-show");
}, _0x449e60.onclick = _0x1f10aa.onclick = function() {
  const _0x505984 = this == _0x449e60 ? _0x4fc487 : _0x5cf790;
  (this == _0x449e60 ? _0x5cf790 : _0x4fc487).classList.toggle("dialog-show"), _0x505984.classList.remove("dialog-show"), this === _0x1f10aa && (_0x3467f9 = false);
}, _0x275119.onclick = function(_0x34cc8e) {
  _0x34cc8e.target == this && (_0x4fc487.classList.remove("dialog-show"), _0x5cf790.classList.remove("dialog-show"));
};
const _0xce418f = document.querySelectorAll(".dialog-close");
for (let _0x1fbdf7 = 0; _0x1fbdf7 < _0xce418f.length; _0x1fbdf7++) _0xce418f[_0x1fbdf7].onclick = function() {
  const _0x174a52 = this.parentNode.parentNode;
  _0x174a52.classList.remove("dialog-show"), _0x174a52 == _0x2c8c09 ? _0x5a64b3.classList.remove("overlay-show") : _0x174a52 == _0xc957a5 && _0x3bef3e.classList.remove("grid-pushup");
};
const _0x2e659c = document.querySelector(".shop-btn"),
  _0xf5135f = document.querySelector(".squad-btn"),
  _0xc957a5 = document.querySelector(".squad"),
  _0x14bf3b = document.querySelectorAll(".shop .dialog-content"),
  _0x10a115 = document.querySelector(".play-btn");
let _0x3467f9 = true,
  _0xd875fd = {};

function _0x25c5a6() {
  if (!_0x270468.checked) return;
  let _0x122389 = 0,
    _0x2279b5 = 0;
  _0xd875fd.KeyW || _0xd875fd.ArrowUp ? _0x2279b5 = -1 : (_0xd875fd.KeyS || _0xd875fd.ArrowDown) && (_0x2279b5 = 1), _0xd875fd.KeyA || _0xd875fd.ArrowLeft ? _0x122389 = -1 : (_0xd875fd.KeyD || _0xd875fd.ArrowRight) && (_0x122389 = 1), (0 !== _0x122389 || 0 !== _0x2279b5) && _0x34c76f(Math.atan2(_0x2279b5, _0x122389));
}

function _0x6870d5() {
  const _0x5aa417 = parseInt(localStorage.equipped_face_skin),
    _0x30a305 = parseInt(localStorage.equipped_body_skin);
  return [_0x351fa8(_0x5aa417), _0x351fa8(_0x30a305)];

  function _0x351fa8(_0x4d9a9e) {
    return isNaN(_0x4d9a9e) ? -1 : _0x4d9a9e;
  }
}

function _0x51ba04() {
  _0x4fc487.classList.remove("dialog-show"), _0x5cf790.classList.remove("dialog-show");
}

function _0x5459e6(_0x4ec0c1) {
  const _0x4b0bdd = document.querySelectorAll(_0x4ec0c1 + " .btn");
  for (let _0x43de47 = 0; _0x43de47 < _0x4b0bdd.length; _0x43de47++) _0x4b0bdd[_0x43de47].onclick = function() {
    const _0x32664d = document.querySelector(_0x4ec0c1 + " .btn-active");
    if (_0x32664d && _0x32664d.classList.remove("btn-active"), this.classList.add("btn-active"), ".gamemodes" === _0x4ec0c1) localStorage.gamemode = this.getAttribute("data-gamemode");
    else {
      if (".tabs" === _0x4ec0c1) {
        for (let _0x2c19a7 = 0; _0x2c19a7 < _0x478f63.length; _0x2c19a7++) {
          const _0x461b9a = _0x478f63[_0x2c19a7];
          0 !== _0x43de47 ? _0x461b9a.parentNode !== _0x461b9a.initialParent && (_0x461b9a.initialParent.insertBefore(_0x461b9a, _0x461b9a.tempDiv), _0x461b9a.tempDiv.remove()) : _0x461b9a.parentNode !== _0x39eeab && (_0x461b9a.initialParent.insertBefore(_0x461b9a.tempDiv, _0x461b9a), _0x39eeab.appendChild(_0x461b9a));
        }
        for (let _0x11c872 = 0; _0x11c872 < _0x14bf3b.length; _0x11c872++) _0x14bf3b[_0x11c872].style.display = _0x11c872 === _0x43de47 ? "" : "none";
      }
    }
  };
}

function _0x4f3a31() {
  const _0x2e4a4e = document.querySelector("[data-gamemode=\"" + localStorage.gamemode + "\"]");
  _0x2e4a4e && _0x2e4a4e.click();
}
document.onkeydown = function(_0xd31696) {
  if (9 === _0xd31696.which) return false;
  _0xd31696.repeat || (_0xd875fd[_0xd31696.code] = true, _0x25c5a6(), _0x38f741());
}, document.onkeyup = function(_0x162e63) {
  delete _0xd875fd[_0x162e63.code], _0x25c5a6(), _0x38f741(), "KeyC" === _0x162e63.code ? _0x39e650.toBlob(function(_0x57cfb3) {
    navigator.clipboard.write([new ClipboardItem({
      "image/png": _0x57cfb3
    })]);
  }) : "Escape" === _0x162e63.code ? _0x3af8d3.classList.contains("game-show") ? _0x4ddb7f.click() : _0x58a27d.classList.contains("minimize-show") && _0x176966.click() : "Enter" === _0x162e63.code && (_0x3bef3e.classList.contains("grid-show") ? _0x10a115.click() : "" === _0x369b80.style.display && _0x3af8d3.classList.contains("game-show") && _0x55f3f5.click());
}, _0x10a115.onclick = function() {
  _0x51ba04(), _0x3bef3e.classList.remove("grid-show"), setTimeout(function() {
    const [_0x3d03d3, _0x404441] = _0x6870d5(),
      _0x4a7fe4 = new TextEncoder().encode(_0x4e19d2.value.slice(0, 15)),
      _0x3dd1bf = new DataView(new ArrayBuffer(1 + (-1 !== _0x3d03d3 ? 1 : 0) + (-1 !== _0x404441 ? 1 : 0) + _0x4a7fe4.length));
    let _0xea347b = 0,
      _0x51e856 = parseInt(localStorage.gamemode);
    (isNaN(_0x51e856) || _0x51e856 > 2) && (_0x51e856 = 0), _0x3dd1bf.setUint8(_0xea347b++, _0x168cd0(0, _0x51e856 << 2 | (-1 !== _0x3d03d3 ? 1 : 0) | (-1 !== _0x404441 ? 2 : 0))), -1 !== _0x3d03d3 && _0x3dd1bf.setUint8(_0xea347b++, _0x3d03d3), -1 !== _0x404441 && _0x3dd1bf.setUint8(_0xea347b++, _0x404441);
    for (let _0x1502f3 = 0; _0x1502f3 < _0x4a7fe4.length; _0x1502f3++) _0x3dd1bf.setUint8(_0xea347b++, _0x4a7fe4[_0x1502f3]);
    _0x5f0f6b(_0x3dd1bf);
  }, 200);
}, _0x2e659c.onclick = function() {
  _0x2c8c09.querySelector(".tabs .btn").click(), _0x2c8c09.classList.add("dialog-show"), _0x5a64b3.classList.add("overlay-show"), _0x308366 = _0x129df8 = null, _0x6a2f21 = 0;
}, _0xf5135f.onclick = function() {
  _0xc957a5.classList.add("dialog-show"), _0x3bef3e.classList.add("grid-pushup");
}, _0x5459e6(".gamemodes"), _0x5459e6(".tabs"), _0x4f3a31(), (function() {
  const _0x28960a = document.createElement("canvas");
  _0x28960a.width = _0x28960a.height = 20;
  const _0x219f42 = _0x28960a.getContext("2d"),
    _0x2127c9 = _0x219f42.createImageData(20, 20),
    _0x2ba584 = _0x2127c9.data;
  for (let _0x1f0b99 = 0; _0x1f0b99 < _0x2ba584.length; _0x1f0b99 += 4) _0x5dad13(_0x5df57f.dirt), _0x2ba584[_0x1f0b99] = 0, _0x2ba584[_0x1f0b99 + 1] = 0, _0x2ba584[_0x1f0b99 + 2] = 0, _0x2ba584[_0x1f0b99 + 3] = 10 * Math.random();
  _0x219f42.putImageData(_0x2127c9, 0, 0);
  const _0x41619d = document.createElement("style");
  _0x41619d.innerText = "\n\t.bg {\n\t\tbackground-image: url(" + _0x28960a.toDataURL() + ");\n\t\tbackground-size: 200px;\n\t\tanimation: bg 15s linear infinite;\n\t\timage-rendering: pixelated;\n\t}\n\n\t@keyframes bg {\n\t\tfrom {\n\t\t\tbackground-position: 0 0;\n\t\t}\n\t\tto {\n\t\t\tbackground-position: -200px -200px;\n\t\t}\n\t}\n\t", document.body.appendChild(_0x41619d), _0x275119.classList.add("bg");
}());
const _0x3bfee1 = [];
let _0x4ed6b3 = 0;

function _0x583b94(_0x1a4408) {
  _0x4d9fc5.score = _0x1a4408, _0x4ed6b3 = Math.max(_0x1a4408, _0x4ed6b3), _0x3bfee1.push(_0x1a4408);
}
let _0x50f852 = document.querySelector(".score-graph");
const _0x313112 = document.querySelectorAll(".gold-preview span"),
  _0x524d74 = document.getElementById("goldCanvas"),
  _0x3e1028 = _0x524d74.getContext("2d"),
  _0x39e650 = document.getElementById("canvas");
_0x1f31f7();
const _0x540ea8 = _0x39e650.getContext("2d");

function _0x1f31f7() {
  const _0x3797ee = _0x421c4c.checked ? window.devicePixelRatio : 1;
  _0x39e650.width = _0x524d74.width = window.innerWidth * _0x3797ee, _0x39e650.height = _0x524d74.height = window.innerHeight * _0x3797ee, _0x39e650.style.width = _0x524d74.style.width = window.innerWidth + "px", _0x39e650.style.height = _0x524d74.style.height = window.innerHeight + "px";
}
window.onresize = function() {
  _0x1f31f7(), _0xb61337(), _0x1acd51(), _0x160376();
};
const _0x136be1 = document.querySelector(".alert"),
  _0x5e7a48 = _0x136be1.querySelector(".alert-desc"),
  _0x1b3468 = document.querySelector(".hud"),
  _0x2dc90f = [_0x275119, _0x1b3468, _0x369b80, _0x4b31bc, _0x136be1];
let _0x3e54c8 = 1;

function _0xb61337() {
  _0x3e54c8 = Math.max(window.innerWidth / 1366, window.innerHeight / 657) * (_0x300310 && !_0x5c1a36 ? 1.6 : 1);
  for (let _0x4b0ccd = 0; _0x4b0ccd < _0x2dc90f.length; _0x4b0ccd++) {
    const _0x53ce59 = _0x2dc90f[_0x4b0ccd];
    let _0x21259c = _0x3e54c8;
    _0x53ce59.style.transform = "scale(" + _0x21259c + ")", _0x53ce59.style.transformOrigin = "0 0", _0x53ce59.style.width = window.innerWidth / _0x21259c + "px", _0x53ce59.style.height = window.innerHeight / _0x21259c + "px";
  }
}
_0xb61337();
let _0x3960c7 = 0,
  _0x3e16bb = 0;

function _0x27ec78(_0x1fa5aa) {
  return _0x1fa5aa < 0.01 ? "0" : (_0x1fa5aa = Math.floor(_0x1fa5aa)) >= 1000000 ? parseFloat((_0x1fa5aa / 1000000).toFixed(2)) + "m" : _0x1fa5aa >= 1000 ? parseFloat((_0x1fa5aa / 1000).toFixed(1)) + "k" : _0x1fa5aa;
}
const _0x5d723c = document.querySelector(".stats");

function _0x120c1c(_0x2280ab) {
  const _0x34942d = [Math.floor(_0x2280ab / 3600000), Math.floor(_0x2280ab % 3600000 / 60000), Math.floor(_0x2280ab % 60000 / 1000)],
    _0x563146 = ["h", "m", "s"];
  let _0x384a21 = "";
  for (let _0x3a29bd = 0; _0x3a29bd < _0x34942d.length; _0x3a29bd++) {
    const _0x6c151d = _0x34942d[_0x3a29bd];
    (_0x6c151d > 0 || 2 == _0x3a29bd) && (_0x384a21 += _0x6c151d + _0x563146[_0x3a29bd] + " ");
  }
  return _0x384a21;
}

function _0x160376() {
  if ("none" === _0x369b80.style.display) return;
  for (; _0x3bfee1.length < 2;) _0x3bfee1.push(0);
  const _0xd17652 = Math.max(_0x4ed6b3, 1000);
  let _0x38ebe7 = "-2,2 ";
  const _0x40e923 = _0x3bfee1.length - 1;
  for (let _0x3090f2 = 0; _0x3090f2 < _0x3bfee1.length; _0x3090f2++) {
    const _0x3158b3 = 0.975 - _0x3bfee1[_0x3090f2] / _0xd17652 * 0.95;
    _0x38ebe7 += _0x3090f2 / _0x40e923 + "," + _0x3158b3 + " ", _0x3090f2 === _0x40e923 && (_0x38ebe7 += "2," + _0x3158b3 + " ");
  }
  _0x38ebe7 += "2,2";
  const _0x308e3d = _0x7318e0(_0x30f1bc.team),
    _0x15e10e = "rgb(" + _0x308e3d.join(",") + ")",
    _0x2c3705 = "rgb(" + _0x308e3d.map(_0x321237 => 1.3 * _0x321237) + ")";
  _0x1d54fb.innerHTML = "\n\t<svg class=\"score-graph\" width=\"100%\" height=\"100\" viewBox=\"0 0 1 1\" preserveAspectRatio=\"none\">\n\t\t<polygon points=\"" + _0x38ebe7 + "\" stroke=\"" + _0x2c3705 + "\" fill=\"" + _0x15e10e + "\" stroke-width=\"4\" vector-effect=\"non-scaling-stroke\" opacity=\"0.35\"/>\n\t</svg>";
  const _0x19d256 = _0x1d54fb.children[0];
  _0x50f852.parentNode.insertBefore(_0x19d256, _0x50f852), _0x50f852.remove(), _0x50f852 = _0x19d256;
}
const _0x600e07 = [];
let _0x2049c4, _0x30f1bc, _0x81c091, _0x10429d, _0x547ef1;

function _0x88d960() {
  _0x18e6b2 = false, _0x14a726.innerHTML = "", _0x352372.length = 0, _0x30f1bc = null, _0x2049c4 = null, _0x26fa79 = null, _0x5e0aec.length = 0, _0x600e07.length = 0, _0x2a89f4.length = 0, _0x3960c7 = 0, _0x3e16bb = 0;
}

function _0x2c57cb(_0x3c9d22) {
  if (console.log("Connecting to " + _0x3c9d22 + "..."), _0x1c2450.classList.add("connecting-show"), _0x58a27d.classList.remove("minimize-show"), _0x55f3f5.click(), _0x3bef3e.classList.remove("grid-show"), _0x5a64b3.onclick(), _0x40a389.length = 0, _0x88d960(), _0x10429d = null, _0x547ef1 = 0, _0x5c4116 = null, _0x39411e = 0, _0x2f807e = null, _0x5d345a.style.display = _0xe9a438.style.display = _0x31a6c2.style.display = "none", _0x81c091) {
    try {
      _0x81c091.close();
    } catch (_0x4bf6c5) {}
    _0x81c091.onopen = _0x81c091.onmessage = _0x81c091.onclose = null, _0x81c091 = null;
  }
  _0x81c091 = new WebSocket(_0x3c9d22);
  _0x81c091.binaryType = "arraybuffer", _0x81c091.onopen = _0x13813b, _0x81c091.onmessage = _0x985610, _0x81c091.onclose = _0x504edd;
}
const _0x2227ac = document.querySelector(".avatar"),
  _0x299268 = document.querySelector(".username"),
  _0x31a6c2 = document.querySelector(".user");
let _0x5c51f7, _0x2f807e;

function _0x13813b() {
  var _0x3b4a12;
  if (console.log("Connected!"), (function() {
      _0x16234b.length = 1;
      for (let _0x4d0d86 in _0x13b2af) {
        const _0x28ce40 = _0x13b2af[_0x4d0d86];
        for (let _0x1bbb9f = 0; _0x1bbb9f < _0x28ce40.length; _0x1bbb9f++) delete _0x28ce40[_0x1bbb9f].owned, delete _0x28ce40[_0x1bbb9f].purchaseSent;
      }
      _0x2867f8(_0x13b2af.faceSkins, _0xb883b5, "face"), _0x2867f8(_0x13b2af.bodySkins, _0x3ce74a, "body"), _0x478f63.length = 0, _0x39eeab.innerHTML = "";
      const _0x3b3cfa = _0x13b2af.faceSkins.concat(_0x13b2af.bodySkins).sort(function(_0x3cd08b, _0x2ae957) {
          return _0x2ae957.createdAt - _0x3cd08b.createdAt;
        }),
        _0x1482b3 = Math.min(4, _0x3b3cfa.length);
      for (let _0x1c5c7e = 0; _0x1c5c7e < _0x1482b3; _0x1c5c7e++) _0x478f63.push(_0x3b3cfa[_0x1c5c7e].shopItemEl);
    }()), _0xca1554(localStorage.account_id) || (localStorage.account_id = crypto.randomUUID()), _0x5c51f7 = localStorage.account_id, _0x2f807e = localStorage.discord_data, _0x2f807e || ("discord_data", _0x3b4a12 = document.cookie.match(RegExp("(?:^|;\\s*)" + "discord_data".replace(/([.*+?\^$(){}|\[\]\/\\])/g, "\\$1") + "=([^;]*)")), _0x2f807e = _0x3b4a12 ? _0x3b4a12[1] : null, _0x2f807e && (_0x2f807e = decodeURIComponent(_0x2f807e)), document.cookie = "discord_data=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"), _0x2f807e) try {
    const _0x3f774a = _0x2f807e;
    if (_0x2f807e = JSON.parse(decodeURIComponent(escape(atob(_0x3f774a)))), !_0xca1554(_0x2f807e.accountId)) throw new Error("invalid uuid");
    _0x5c51f7 = _0x2f807e.accountId, _0x299268.setAttribute("stroke", _0x2f807e.name), _0x2f807e.avatar && (_0x2227ac.style.backgroundImage = "url(" + _0x2f807e.avatar + ")"), localStorage.discord_data = _0x3f774a;
  } catch (_0xa944ca) {
    _0x2f807e = null, delete localStorage.discord_data, console.error(_0xa944ca);
  }
  const _0xcb1fa3 = new DataView(new ArrayBuffer(5 + _0x5c51f7.length));
  _0xcb1fa3.setUint8(0, _0x168cd0(3, 0)), _0xcb1fa3.setUint32(1, 6);
  for (let _0x55108b = 0; _0x55108b < _0x5c51f7.length; _0x55108b++) _0xcb1fa3.setUint8(5 + _0x55108b, _0x5c51f7.charCodeAt(_0x55108b));
  _0x5f0f6b(_0xcb1fa3);
}
let _0x1f334c = 0;
const _0x5e0aec = [];
let _0x18e6b2 = false,
  _0x352372 = [];

function _0x5308d7(_0x370618, _0x1f828f, _0x29f254) {
  const _0x183f66 = document.createElement("div");
  _0x183f66.classList.add("lb-item");
  const _0x1d2495 = document.createElement("div");
  _0x1d2495.classList.add("lb-bar"), _0x183f66.appendChild(_0x1d2495);
  const _0x48c7d1 = document.createElement("span");
  _0x183f66.appendChild(_0x48c7d1), _0x14a726.appendChild(_0x183f66);
  const _0x5533c7 = {
    "name": _0x370618,
    "score": _0x1f828f,
    "iScore": 0,
    "percent": 0,
    "iPercent": 0,
    "lbItemEl": _0x183f66,
    "lbBarEl": _0x1d2495,
    "lbTextEl": _0x48c7d1,
    "team": -1,
    "update": function() {
      this.iScore += 0.1 * (this.score - this.iScore), this.iPercent += 0.1 * (this.percent - this.iPercent), this.lbTextEl.setAttribute("stroke", (this.name ? this.name + " - " : "") + _0x27ec78(this.iScore)), this.lbBarEl.style.width = this.iPercent + "%";
    },
    "setTeam": function(_0x479182 = -1) {
      _0x5533c7.team = _0x479182, this.lbBarEl.style.background = -1 === _0x479182 ? "" : "rgb(" + _0x7318e0(_0x479182).join(",") + ")";
    }
  };
  return _0x5533c7.setTeam(_0x29f254), _0x5533c7.update(), _0x352372.push(_0x5533c7), _0x5533c7;
}
const _0x4d9fc5 = _0x5308d7("", 0);

function _0x4083d5() {
  if (0 === _0x352372.length) return;
  const _0x23ec83 = _0x352372[0];
  _0x23ec83.percent = _0x23ec83.iPercent = 100;
  let _0x15d7c8 = _0x23ec83.isMe;
  for (let _0x5dd368 = 1; _0x5dd368 < _0x352372.length; _0x5dd368++) {
    const _0x3e5aec = _0x352372[_0x5dd368];
    _0x23d427(_0x3e5aec, _0x23ec83);
    const _0x454362 = _0x3e5aec.lbItemEl;
    _0x454362.parentNode.appendChild(_0x454362), _0x3e5aec.isMe && (_0x15d7c8 = true);
  }
  _0x15d7c8 || (_0x23d427(_0x4d9fc5, _0x23ec83), _0x14a726.appendChild(_0x4d9fc5.lbItemEl));
}

function _0x23d427(_0x3d2160, _0x4fb937) {
  _0x3d2160.percent = 100 * Math.min(1, _0x3d2160.score / _0x4fb937.score || 0);
}
_0x4d9fc5.lbItemEl.classList.add("my-lb-item"), _0x4d9fc5.isMe = true;
const _0x2a89f4 = [];
let _0x4a4951 = 0;
Math.sqrt(2);
let _0x403b0e = 0;
const _0x40a389 = [];

function _0x49cfb1(_0x2aacdf, _0x2e946b) {
  const _0x2924c0 = _0x13b2af[_0x2aacdf + "Skins"][_0x2e946b];
  _0x2924c0.owned = true;
  const _0x3c6e5f = _0x2924c0.shopItemEl.querySelector(".btn");
  _0x3c6e5f.classList.remove("gold-btn"), _0x3c6e5f.classList.add("blue-btn"), _0x3c6e5f.classList.remove("btn-disabled"), _0x3c6e5f.innerHTML = "<span stroke=\"Equip\"></span>";
  const _0x2333ff = "equipped_" + _0x2aacdf + "_skin";
  _0x3c6e5f.onclick = function() {
    const _0x59ec84 = document.querySelector("." + _0x2aacdf + "-skin [stroke=Unequip]");
    _0x59ec84 && _0x59ec84.setAttribute("stroke", "Equip");
    const _0xfa4f2 = _0x59ec84 && _0x59ec84.parentNode === this;
    _0xfa4f2 || _0x3c6e5f.children[0].setAttribute("stroke", "Unequip"), localStorage[_0x2333ff] = _0xfa4f2 ? -1 : _0x2e946b;
    const _0x4408dd = _0x6870d5();
    _0x2becd8.classList[-1 === _0x4408dd[0] && -1 === _0x4408dd[1] ? "add" : "remove"]("btn-disabled");
  }, parseInt(localStorage[_0x2333ff]) === _0x2e946b && _0x3c6e5f.onclick();
}

function _0x7b638f() {
  _0x1c27f0("face"), _0x1c27f0("body");
}

function _0x1c27f0(_0x4f149d) {
  const _0x3ba59a = _0x13b2af[_0x4f149d + "Skins"];
  for (let _0x1d8e04 = 0; _0x1d8e04 < _0x3ba59a.length; _0x1d8e04++) {
    const _0x3f9dee = _0x3ba59a[_0x1d8e04];
    if (_0x3f9dee.owned) continue;
    const _0x378a56 = _0x3f9dee.shopItemEl.querySelector(".btn");
    _0x403b0e >= _0x3f9dee.price ? (_0x378a56.classList.remove("btn-disabled"), _0x378a56.onclick = function() {
      if (_0x3f9dee.purchaseSent || _0x40a389.length > 0) return;
      _0x3f9dee.purchaseSent = true;
      const _0xb0d6dd = new DataView(new ArrayBuffer(2));
      _0xb0d6dd.setUint8(0, _0x168cd0(4, "face" === _0x4f149d ? 0 : 1)), _0xb0d6dd.setUint8(1, _0x1d8e04), _0x5f0f6b(_0xb0d6dd), _0x378a56.classList.add("btn-disabled"), _0x378a56.blur(), _0x40a389.push({
        "skin": _0x3f9dee,
        "i": _0x1d8e04,
        "prefix": _0x4f149d
      });
    }) : (_0x378a56.classList.add("btn-disabled"), _0x378a56.onclick = null);
  }
}

function _0x35beb4() {
  const _0x57a42f = _0x403b0e.toLocaleString("en", {
      "notation": "compact"
    }).toLowerCase();
  for (let _0x1c0b5c = 0; _0x1c0b5c < _0x313112.length; _0x1c0b5c++) _0x313112[_0x1c0b5c].innerText = _0x57a42f;
}

function _0x3ad8a1(_0x20d47f) {
  for (_0x20d47f = Math.ceil(_0x20d47f / 2); _0x20d47f--;) _0x340b44.push({
    "spawnTime": (_0x340b44[_0x340b44.length - 1] || {
      "spawnTime": 0
    }).spawnTime + 0.03,
    "x": 0,
    "y": -20,
    "vx": 1.5 * (2 * Math.random() - 1),
    "vy": 1 * (2 * Math.random() - 1),
    "angle": 6.28 * Math.random(),
    "angleSpeed": 0.1 * Math.random() + 0.1
  });
}
let _0x3880e2, _0x405b8c;
const _0x55a969 = document.querySelector(".reward-btns"),
  _0x546592 = _0x55a969.querySelector(".arrow"),
  _0x1e0bb0 = document.getElementById("rewardStatus");

function _0x685918(_0x42053e) {
  let _0x3ecc0a = Math.ceil(_0x42053e / 1000 / 60);
  const _0xb5555f = Math.floor(_0x3ecc0a / 60);
  _0x3ecc0a %= 60;
  let _0x241b96 = "";

  function _0x25b7c1(_0x5ea8ce) {
    return _0x5ea8ce > 1 ? "s " : " ";
  }
  return _0xb5555f > 0 && (_0x241b96 += _0xb5555f + " hour" + _0x25b7c1(_0xb5555f)), 0 != _0xb5555f && 0 == _0x3ecc0a || (_0x241b96 += _0x3ecc0a + " min" + _0x25b7c1(_0x3ecc0a)), _0x241b96;
}
_0x55a969.innerHTML = "";
for (let _0x5d4283 = 0; _0x5d4283 < _0x2c79c4.length; _0x5d4283++) _0x55a969.innerHTML += "<div class=\"btn btn-disabled\"><span stroke=\"" + _0x2c79c4[_0x5d4283] + "\"></span></div>";
let _0x4fd577;

function _0x17d3a6() {
  const _0x23e8af = _0x55a969.querySelector(".gold-btn");
  _0x23e8af && (_0x23e8af.classList.remove("gold-btn"), _0x23e8af.classList.add("btn-disabled"), _0x23e8af.onclick = null);
  const _0x53254 = _0x55a969.children[Math.min(_0x2c79c4.length - 1, _0x3880e2)];
  _0x3880e2 < _0x2c79c4.length && (_0x4fd577 = _0x53254, _0x53254.classList.add("gold-btn"), _0x53254.classList.add("btn-disabled"), _0x53254.onclick = function() {
    this.rewardSent = true, this.classList.add("btn-disabled"), _0x5f0f6b(new Uint8Array([_0x168cd0(5, 0)]));
  }), _0x53254.appendChild(_0x546592);
}
const _0x46f427 = document.querySelector(".lb-footer");
let _0x211aa4, _0x26fa79, _0x54c0ce = {};

function _0x3c9e42(_0x2095ac) {
  _0x51ef71.style.display = _0x17ca8f.style.display = _0x2095ac ? "" : "none", _0x2095ac || (_0x5ec28b.style.display = "none", _0x1a7b7a = _0xc6a4b9 = _0x570b18 = null);
}
let _0x5c4116, _0x4c550f = 0;

function _0x985610(_0x4067dc) {
  if ("string" == typeof _0x4067dc.data) return;
  !(function() {
    const _0x515e57 = _0x4067dc.data;
    if (_0x10429d) {
      const _0x154d67 = new Uint8Array(_0x515e57),
        _0x1d6eb6 = new Uint8Array(_0x154d67.length);
      for (let _0x4c6c1e = 0; _0x4c6c1e < _0x154d67.length; _0x4c6c1e++) _0x1d6eb6[_0x4c6c1e] = _0x154d67[_0x4c6c1e], _0x154d67[_0x4c6c1e] ^= _0x10429d[(_0x547ef1 + _0x4c6c1e) % _0x10429d.length];
      _0x10429d = _0x1d6eb6;
    } else _0x10429d = new Uint8Array(_0x515e57);
    _0x547ef1 = (_0x547ef1 + 1) % 1000;
  }());
  const _0x27e714 = new DataView(_0x4067dc.data);
  _0x1f334c += _0x27e714.byteLength;
  let _0x2b6093 = 0;

  function _0x2336da() {
    const _0x45aff8 = _0x27e714.getUint8(_0x2b6093++),
      _0x3292ac = 2 === _0x4c550f ? _0x45aff8 >> 6 : -1,
      _0x17ccb4 = 63 & _0x45aff8;
    if (_0x17ccb4 > 0) {
      const _0x5346bc = new Uint8Array(_0x17ccb4);
      for (let _0x276ac0 = 0; _0x276ac0 < _0x17ccb4; _0x276ac0++) _0x5346bc[_0x276ac0] = _0x27e714.getUint8(_0x2b6093++);
      return [_0x3292ac, new TextDecoder().decode(_0x5346bc)];
    }
    return [_0x3292ac, ""];
  }
  const [_0x287125, _0x53eb76] = [(_0x1d37a3 = _0x27e714.getUint8(_0x2b6093++)) >> 4, 15 & _0x1d37a3];
  var _0x1d37a3;
  switch (_0x287125) {
    case 4:
      const {
        skin: _0x1442e7, i: _0xb4395b, prefix: _0x57ed08
      } = _0x40a389.shift();
      _0x49cfb1(_0x57ed08, _0xb4395b), _0x403b0e -= _0x1442e7.price, _0x7b638f(), _0x35beb4();
      break;
    case 5:
      const _0x45d94f = _0x2c79c4[_0x3880e2++];
      _0x403b0e += _0x45d94f, _0x7b638f(), _0x35beb4(), _0x17d3a6(), _0x405b8c = Date.now() + _0x3152df, _0x3ad8a1(_0x45d94f / 2);
      break;
    case 3:
      if (_0x2f807e ? (_0x5d345a.style.display = "", _0x31a6c2.style.display = "") : _0xe9a438.style.display = "", _0x403b0e = 0, 0 === _0x53eb76) _0x403b0e = 0, localStorage.equipped_body_skin = -1, localStorage.equipped_face_skin = -1, _0x3880e2 = 0, _0x405b8c = 0;
      else {
        _0x403b0e = _0x27e714.getUint32(_0x2b6093), _0x2b6093 += 4;
        const _0x5d3af8 = _0x27e714.getUint16(_0x2b6093);
        _0x2b6093 += 2, _0x3880e2 = _0x5d3af8 >> 11;
        const _0x5f0ea3 = 2047 & _0x5d3af8;
        _0x405b8c = Date.now() + 60 * _0x5f0ea3 * 1000;
        let _0x325b12 = false,
          _0x2ef639 = false;
        if (_0x2b6093 < _0x27e714.byteLength) {
          let _0x5da4f1 = false;
          const [_0x5895d0, _0x1600b9] = _0x6870d5(), _0x34cf6a = _0x27e714.getUint8(_0x2b6093++);
          for (let _0x411fcc = 0; _0x411fcc < _0x34cf6a; _0x411fcc++) {
            const _0x212c37 = _0x27e714.getUint8(_0x2b6093++);
            _0x212c37 === _0x5895d0 && (_0x325b12 = true), _0x49cfb1("face", _0x212c37);
          }
          for (; _0x2b6093 < _0x27e714.byteLength;) {
            const _0x42da72 = _0x27e714.getUint8(_0x2b6093++);
            _0x42da72 === _0x1600b9 && (_0x5da4f1 = true), _0x49cfb1("body", _0x42da72);
          }
        }
        _0x2ef639 || (localStorage.equipped_body_skin = -1), _0x325b12 || (localStorage.equipped_face_skin = -1);
      }
      _0x17d3a6(), _0x2becd8.classList.add("btn-disabled"), "-1" == localStorage.equipped_face_skin && "-1" == localStorage.equipped_body_skin || _0x2becd8.classList.remove("btn-disabled"), _0x7b638f(), _0x35beb4(), _0x1c2450.classList.remove("connecting-show"), _0x3bef3e.classList.add("grid-show");
      break;
    case 0:
      const _0x1e44f2 = _0x2bc59b[_0x53eb76] || "unknown";
      console.log("Kicked! (reason: " + _0x1e44f2 + ")"), _0x5e7a48.setAttribute("stroke", "reason: " + _0x1e44f2), _0x136be1.style.display = "", _0x2c57cb = function() {};
      break;
    case 1:
      _0x4c550f !== _0x53eb76 && _0x88d960(), 5 == _0x27e714.byteLength && (_0x2049c4 = _0x27e714.getUint32(_0x2b6093)), _0x4c550f = localStorage.gamemode = _0x53eb76, _0x4f3a31(), _0x521fce = _0x3fe016 = 1, _0x33c6b2 = null, _0x29ae9c = null, _0x211aa4 = Date.now(), _0x3960c7 = 0, _0x26fa79 = null, _0x2aaf3d.classList.remove("btn-disabled"), _0x3bef3e.classList.remove("grid-show"), _0x3af8d3.classList.add("game-show"), _0x369b80.style.display = "none", _0x3bfee1.length = 0, _0x5aed42 = {}, _0x4ed6b3 = 0, _0x3c9e42(_0x300310);
      break;
    case 2:
      const _0x1c3096 = 4 & _0x53eb76,
        _0x36f77b = 8 & _0x53eb76,
        _0x107f2b = (3 & _0x53eb76) << 2 | _0x27e714.getUint8(_0x2b6093++),
        _0x22e031 = {},
        _0x42d123 = Date.now();
      for (let _0x5b425b = 0; _0x5b425b < _0x107f2b; _0x5b425b++) {
        const _0x43f0ce = _0x27e714.getUint32(_0x2b6093);
        _0x2b6093 += 4, _0x22e031[_0x43f0ce] = true;
        let _0x3a3577 = _0x600e07.find(_0x15e414 => _0x15e414.id === _0x43f0ce);
        const _0x5c8fca = _0x27e714.getUint8(_0x2b6093++) / 255 * Math.PI * 2,
          _0x5d3b38 = _0x27e714.getUint8(_0x2b6093++),
          _0x4e70ea = _0x5d3b38 >> 6,
          _0x17eae3 = (63 & _0x5d3b38) / 63;
        if (_0x3a3577) {
          _0x3a3577.oldR = _0x3a3577.r;
          const _0x3c2d88 = _0x3a3577.segments[0];
          _0x3c2d88.oldX = _0x3c2d88.x, _0x3c2d88.oldY = _0x3c2d88.y, _0x3c2d88.x += _0x27e714.getInt8(_0x2b6093++), _0x3c2d88.y += _0x27e714.getInt8(_0x2b6093++), _0x3c2d88.interpOldX = _0x3c2d88.interpX, _0x3c2d88.interpOldY = _0x3c2d88.interpY;
          let _0x116ef7 = _0x27e714.getInt8(_0x2b6093++);
          for (; _0x116ef7 < 0;) _0x3a3577.segments.pop(), _0x116ef7++;
          _0x2b50af(_0x3a3577);
          const _0x1b9841 = _0x3a3577.segments[_0x3a3577.segments.length - 1];
          for (; _0x116ef7 > 0;) _0x3a3577.segments.push(Object.assign({}, _0x1b9841)), _0x116ef7--;
          _0x3a3577.interpOldR = _0x3a3577.interpR, _0x3a3577.r = _0x2ed340(_0x3a3577), _0x3a3577.oldDirX = _0x3a3577.dirX, _0x3a3577.oldDirY = _0x3a3577.dirY, _0x3a3577.newDirX = Math.cos(_0x5c8fca), _0x3a3577.newDirY = Math.sin(_0x5c8fca), _0x3a3577.updateTime = _0x42d123;
        } else {
          _0x3a3577 = new _0x1d5e9a(_0x43f0ce, _0x5c8fca), _0x3a3577.faceSkin = _0x27e714.getUint8(_0x2b6093++) - 1, _0x3a3577.bodySkin = _0x27e714.getUint8(_0x2b6093++) - 1, _0x3a3577.energy = _0x17eae3, _0x43f0ce == _0x2049c4 && (_0x30f1bc = _0x3a3577), _0x600e07.push(_0x3a3577);
          const _0x4f0b28 = _0x27e714.getUint16(_0x2b6093);
          _0x2b6093 += 2;
          const _0x38699e = _0x27e714.getUint16(_0x2b6093);
          _0x2b6093 += 2, _0x3a3577.segments[0] = {
            "x": _0x4f0b28,
            "y": _0x38699e,
            "oldX": _0x4f0b28,
            "oldY": _0x38699e,
            "interpOldX": _0x4f0b28,
            "interpOldY": _0x38699e,
            "interpX": _0x4f0b28,
            "interpY": _0x38699e
          };
          const _0x758099 = _0x27e714.getUint16(_0x2b6093);
          _0x2b6093 += 2;
          for (let _0x59e50d = 0; _0x59e50d < _0x758099; _0x59e50d++) {
            let _0x2a5db1 = _0x3a3577.segments[_0x59e50d];
            const _0x52fbbb = {
              "x": _0x2a5db1.x + _0x27e714.getInt8(_0x2b6093++),
              "y": _0x2a5db1.y + _0x27e714.getInt8(_0x2b6093++)
            };
            _0x52fbbb.oldX = _0x52fbbb.interpOldX = _0x52fbbb.interpX = _0x52fbbb.x, _0x52fbbb.oldY = _0x52fbbb.interpOldY = _0x52fbbb.interpY = _0x52fbbb.y, _0x3a3577.segments.push(_0x52fbbb);
          } [_0x3a3577.team, _0x3a3577.nickname] = _0x2336da(), _0x54c0ce[_0x3a3577.id] = _0x3a3577.nickname, _0x30f1bc === _0x3a3577 && (_0x56d656 = _0x4f0b28, _0x861a9e = _0x38699e, _0x4d9fc5.name = _0x3a3577.nickname, _0x4d9fc5.setTeam(_0x3a3577.team)), _0x3a3577.r = _0x3a3577.interpOldR = _0x3a3577.interpR = _0x2ed340(_0x3a3577);
        }
        _0x3a3577.mood = _0x4e70ea, _0x3a3577.oldEnergy = _0x3a3577.iEnergy, _0x17eae3 < _0x3a3577.energy && (_0x3a3577.energyChangeCounter = 1), _0x3a3577.energy = _0x17eae3;
      }
      const _0x52ef01 = _0x4001aa(_0x26fa79 || _0x30f1bc);
      let _0x23ce85 = _0x27e714.getUint8(_0x2b6093++);
      for (; _0x23ce85--;) {
        const _0x55e0a6 = _0x27e714.getUint8(_0x2b6093++),
          _0x143727 = _0x52ef01.sx + (15 & _0x55e0a6),
          _0x18ca75 = _0x52ef01.sy + (_0x55e0a6 >> 4),
          _0x507e57 = [];
        for (let _0xc1fa51 = 0; _0xc1fa51 < 128; _0xc1fa51++) {
          const _0xbf7b74 = _0x27e714.getUint8(_0x2b6093++),
            _0x31a455 = 15 & _0xbf7b74,
            _0x5e9b76 = _0xbf7b74 >> 4;
          _0x507e57.push(_0x31a455, _0x5e9b76);
        }
        _0x5e0aec[64 * _0x18ca75 + _0x143727] = _0x507e57, _0x574f90(_0x507e57);
      }
      _0x30f1bc.segments[0];
      let _0xcad676 = _0x27e714.getUint8(_0x2b6093++);
      for (let _0x19636b = 0; _0x19636b < _0xcad676; _0x19636b++) {
        const _0x4a6a3c = _0x27e714.getUint8(_0x2b6093++),
          _0x53acef = _0x52ef01.sx + (15 & _0x4a6a3c),
          _0x1d481d = _0x52ef01.sy + (_0x4a6a3c >> 4),
          _0x1487b7 = _0x5e0aec[64 * _0x1d481d + _0x53acef],
          _0x311b5d = _0x27e714.getUint8(_0x2b6093++) + 1;
        let _0xa48d90 = 0,
          _0x45bb78 = 0,
          _0x4fad4e = 0;
        for (let _0x400baa = 0; _0x400baa < _0x311b5d; _0x400baa++) {
          const _0x4e0e47 = _0x27e714.getUint8(_0x2b6093 + _0x400baa),
            _0x13804c = _0x1487b7[_0x4e0e47];
          0 == _0x45bb78 ? (_0xa48d90 = _0x27e714.getUint8(_0x2b6093 + _0x311b5d + _0x4fad4e++), _0x45bb78 = 1, _0x1487b7[_0x4e0e47] = 15 & _0xa48d90) : (_0x1487b7[_0x4e0e47] = _0xa48d90 >> 4, _0x45bb78 = 0);
          const _0x41052f = _0x4e0e47 % _0x48549a,
            _0x3c8bb5 = Math.floor(_0x4e0e47 / _0x48549a),
            _0x3feef4 = _0x1487b7[_0x4e0e47];
          if (_0x3feef4 === _0x5df57f.empty) {
            const _0x5f9323 = _0x53acef * _0x48549a + _0x41052f,
              _0x325ec7 = _0x1d481d * _0x48549a + _0x3c8bb5,
              _0x1c2e26 = _0x1487b7.ctx.getImageData(_0x41052f, _0x3c8bb5, 1, 1).data;
            if (_0x2a89f4.push({
                "x": _0x5f9323 * _0x26c6d0,
                "y": _0x325ec7 * _0x26c6d0,
                "dir": Math.random() > 0.5 ? -1 : 1,
                "angle": Math.random() * Math.PI * 2,
                "time": Date.now(),
                "color": "rgba(" + _0x1c2e26.join(",") + ")"
              }), _0x1487b7.ctx.clearRect(_0x41052f, _0x3c8bb5, 1, 1), _0x13804c === _0x5df57f.lava)
              for (let _0x7865f3 = 0; _0x7865f3 < _0x600e07.length; _0x7865f3++) {
                const _0xb7baa3 = _0x600e07[_0x7865f3],
                  _0x4ddf1c = _0xb7baa3.segments[0];
                _0x4abc58(_0x5f9323, _0x325ec7, _0xb7baa3.oldR, _0x4ddf1c) && (_0xb7baa3.diggedLavaAt = _0x42d123, _0xb7baa3 != _0x30f1bc && _0xb7baa3 != _0x26fa79 || (_0x534410 = 1));
              }
          } else {
            const _0x6ee7db = _0x5dad13(_0x3feef4);
            _0x1487b7.ctx.fillStyle = "rgb(" + _0x6ee7db.join(",") + ")", _0x1487b7.ctx.fillRect(_0x41052f, _0x3c8bb5, 1, 1);
          }
        }
        _0x2b6093 += _0x311b5d, _0x2b6093 += Math.ceil(0.5 * _0x311b5d);
      }
      const _0x1d35d9 = _0x27e714.getUint16(_0x2b6093);
      _0x2b6093 += 2, _0x46f427.setAttribute("stroke", _0x1d35d9 + " player" + (1 !== _0x1d35d9 ? "s" : "") + " online");
      const _0x8c70df = _0x3bfee1.length,
        _0x50f269 = _0x27e714.getUint16(_0x2b6093);
      _0x2b6093 += 2, _0x4a4951 = 1023 & _0x50f269;
      const _0x635527 = _0x50f269 >> 11,
        _0x2a2784 = 1024 & _0x50f269;
      _0x273fb7.setAttribute("stroke", _0x4a4951 + " worm" + (1 != _0x4a4951 ? "s" : ""));
      let _0x55dc51 = -1;
      if (_0x1c3096 && (_0x55dc51 = _0x27e714.getUint8(_0x2b6093++)), _0x18e6b2) {
        let _0x2c0611 = 0,
          _0x568aae = 0;
        if (_0x2a2784) {
          const _0x4c4f1c = _0x27e714.getUint8(_0x2b6093++);
          _0x2c0611 = _0x4c4f1c >> 4, _0x568aae = 15 & _0x4c4f1c;
        }
        const _0x8544f2 = _0x635527 + _0x568aae,
          _0x2c90e2 = [];
        let _0x434f81 = 0,
          _0x10fadc = 0;
        for (let _0x7905b0 = 0; _0x7905b0 < _0x8544f2; _0x7905b0++) 0 == _0x10fadc ? (_0x434f81 = _0x27e714.getUint8(_0x2b6093++), _0x10fadc = 1, _0x2c90e2.push(15 & _0x434f81)) : (_0x2c90e2.push(_0x434f81 >> 4), _0x10fadc = 0);
        for (let _0x334654 = 0; _0x334654 < _0x635527; _0x334654++) {
          const _0xe63a13 = _0x2c90e2[_0x334654],
            _0x24556f = _0x352372[_0xe63a13];
          _0x24556f.score = _0x3848f4(_0x27e714.getUint16(_0x2b6093)), _0x2b6093 += 2, _0x24556f.isMe && _0x583b94(_0x24556f.score);
        }
        const _0x147c5e = [];
        for (let _0x55f241 = 0; _0x55f241 < _0x568aae; _0x55f241++) {
          const _0x1213fb = _0x2c90e2[_0x635527 + _0x55f241];
          _0x147c5e.push(_0x1213fb);
        }
        _0x147c5e.sort(function(_0xd0026d, _0x5cca06) {
          return _0x5cca06 - _0xd0026d;
        });
        for (let _0x11bfe1 = 0; _0x11bfe1 < _0x147c5e.length; _0x11bfe1++) {
          const _0x19b439 = _0x147c5e[_0x11bfe1];
          _0x352372[_0x19b439].lbItemEl.remove(), _0x352372.splice(_0x19b439, 1);
        }
        for (let _0x22bd12 = 0; _0x22bd12 < _0x2c0611; _0x22bd12++) {
          const _0x51ab41 = _0x3848f4(_0x27e714.getUint16(_0x2b6093));
          _0x2b6093 += 2;
          const [_0xd2d671, _0xa6429b] = _0x2336da();
          _0x5308d7(_0xa6429b, _0x51ab41, _0xd2d671);
        }
        _0x352372 = _0x352372.sort(function(_0x1237d0, _0x16ef5c) {
          return _0x16ef5c.score - _0x1237d0.score;
        }), _0x4083d5();
      } else {
        _0x352372.length = 0;
        const _0x32e995 = Math.min(10, _0x4a4951);
        for (let _0x3499b8 = 0; _0x3499b8 < _0x32e995; _0x3499b8++) {
          const _0x1a0332 = _0x3848f4(_0x27e714.getUint16(_0x2b6093));
          _0x2b6093 += 2;
          const [_0x43da61, _0x291fc6] = _0x2336da();
          _0x5308d7(_0x291fc6, _0x1a0332, _0x43da61);
        }
        _0x4083d5(), _0x18e6b2 = true;
      }
      if (_0x1c3096) {
        const _0x46fa52 = _0x352372[_0x55dc51],
          _0x48ed32 = _0x46fa52.lbItemEl;
        _0x4d9fc5.score = _0x46fa52.score, _0x14a726.insertBefore(_0x4d9fc5.lbItemEl, _0x48ed32), _0x48ed32.remove(), _0x352372[_0x55dc51] = _0x4d9fc5;
      }
      let _0x439f78 = false,
        _0x10fb39 = Math.floor((_0x27e714.byteLength - _0x2b6093) / 4);
      _0x36f77b && _0x10fb39--;
      for (let _0x53dc2e = 0; _0x53dc2e < _0x10fb39; _0x53dc2e++) {
        const _0x139f02 = _0x27e714.getUint32(_0x2b6093);
        _0x2b6093 += 4;
        const _0x24d8dd = _0x600e07.findIndex(_0x55c406 => _0x55c406.id === _0x139f02),
          _0x31241a = _0x600e07[_0x24d8dd];
        _0x31241a.isDead = true, _0x31241a.diedAt = _0x42d123, _0x31241a.id = -1, _0x31241a === _0x30f1bc && (_0x439f78 = true, _0x4d9fc5.score = 0, _0x4d9fc5.percent = 0, _0x1acd51(), _0x3c9e42(false));
      }
      let _0x1cf62c = _0x27e714.byteLength - _0x2b6093;
      if (_0x439f78) {
        let _0x1b9a67 = -1;
        if (_0x36f77b) {
          const _0x2c4654 = _0x27e714.getUint32(_0x2b6093);
          _0x2b6093 += 4, _0x26fa79 = _0x600e07.find(_0x540594 => _0x540594.id === _0x2c4654), _0x22a69a.setAttribute("stroke", _0x54c0ce[_0x2c4654] || "An unnamed worm"), _0x1cf62c -= 4;
        } else _0x1b9a67 = _0x27e714.getUint8(_0x2b6093++), 0 === _0x1b9a67 && _0x22a69a.setAttribute("stroke", "Walls"), _0x1cf62c--;
        _0x22a69a.style.visibility = _0x450727.style.visibility = _0x22a69a.previousElementSibling.style.visibility = 1 === _0x1b9a67 ? "hidden" : "", 1 === _0x1cf62c && (_0x3960c7 = _0x27e714.getUint8(_0x2b6093++)), _0x369b80.style.display = "", _0x2aaf3d.classList.add("btn-disabled"), _0x160376(), _0x7b638f(), _0x35beb4(), (function() {
          for (; _0x5d723c.children.length > 1;) _0x5d723c.children[1].remove();
          const _0x372461 = [
            ["Max points", _0x27ec78(_0x4ed6b3)]
          ];
          _0x3e16bb > 0 && _0x372461.push(["Gold digged", _0x3e16bb.toLocaleString("en-US")]), _0x3960c7 > 0 && _0x372461.push(["Players destroyed", 255 === _0x3960c7 ? _0x3960c7 - 1 + "+" : _0x3960c7]), _0x372461.push(["Time alive", _0x120c1c(Date.now() - _0x211aa4)]);
          for (let _0x53b0ca = 0; _0x53b0ca < _0x372461.length; _0x53b0ca++) {
            const [_0x254e4d, _0x138345] = _0x372461[_0x53b0ca], _0xff366a = document.createElement("span");
            _0xff366a.setAttribute("stroke", _0x254e4d + ": " + _0x138345), _0x5d723c.appendChild(_0xff366a);
          }
        }());
      } else {
        if (!_0x30f1bc.isDead) {
          if (_0x1cf62c % 2 != 0) {
            const _0x38d049 = _0x27e714.getUint8(_0x2b6093++);
            _0x3ad8a1(_0x38d049), _0x403b0e += _0x38d049, _0x3e16bb += _0x38d049, _0x1cf62c--;
          }
          if (2 === _0x1cf62c) {
            const _0x290f9c = _0x3848f4(_0x27e714.getUint16(_0x2b6093));
            _0x2b6093 += 2, _0x583b94(_0x290f9c);
          }
        }
      }
      for (let _0x31dc4b = _0x600e07.length - 1; _0x31dc4b >= 0; _0x31dc4b--) {
        const _0x52cb41 = _0x600e07[_0x31dc4b];
        _0x52cb41.isDead || _0x22e031[_0x52cb41.id] || _0x600e07.splice(_0x31dc4b, 1);
      }
      _0x8c70df === _0x3bfee1.length && _0x8c70df > 0 && _0x3bfee1.push(_0x3bfee1[_0x3bfee1.length - 1]);
  }
}

function _0x504edd() {
  console.log("Disconnected."), _0x2c57cb(_0x81c091.url);
}
let _0x39411e = 0;

function _0x5f0f6b(_0x522a7d) {
  if (_0x81c091 && _0x81c091.readyState === _0x81c091.OPEN) {
    if (_0x1f334c += _0x522a7d.byteLength, _0x5c4116) {
      const _0x119dce = new Uint8Array(_0x522a7d.buffer);
      for (let _0x1874f8 = 0; _0x1874f8 < _0x119dce.length; _0x1874f8++) _0x119dce[_0x1874f8] ^= _0x5c4116[(_0x39411e + _0x1874f8) % _0x5c4116.length];
    }
    _0x39411e = (_0x39411e + 1) % 1000, _0x5c4116 = new Uint8Array(_0x522a7d.buffer), _0x81c091.send(_0x522a7d);
  }
}
const _0x45b928 = 2 * Math.PI;

function _0x34c76f(_0x36e697) {
  if (!_0x30f1bc || _0x30f1bc.isDead) return;
  (_0x36e697 %= _0x45b928) < 0 && (_0x36e697 += _0x45b928), _0x36e697 /= _0x45b928, _0x36e697 = Math[0.75 === _0x36e697 ? "ceil" : "floor"](4095 * _0x36e697);
  const _0x1820e9 = new DataView(new ArrayBuffer(2));
  _0x1820e9.setUint8(0, _0x168cd0(1, _0x36e697 >> 8)), _0x1820e9.setUint8(1, _0x36e697), _0x5f0f6b(_0x1820e9);
}
let _0x5aed42 = {};
document.onmousedown = function(_0x5dc7de) {
  _0x5aed42[_0x5dc7de.button] = true, _0x38f741();
}, document.onmouseup = function(_0x18cd16) {
  delete _0x5aed42[_0x18cd16.button], _0x38f741();
}, _0x39e650.onmousemove = function(_0x3b3185) {
  _0x270468.checked || _0x34c76f(Math.atan2(_0x3b3185.clientY - window.innerHeight / 2, _0x3b3185.clientX - window.innerWidth / 2));
};
const _0x51ef71 = document.querySelector(".angry-btn"),
  _0x17ca8f = document.querySelector(".sad-btn"),
  _0x5ec28b = document.querySelector(".joystick"),
  _0x5ed5b7 = document.querySelector(".joystick-knob");
let _0x308366, _0x129df8, _0xc6a4b9 = null,
  _0x1a7b7a = null,
  _0x570b18 = null;
if (_0x300310) {
  let _0x579003, _0x4b0a10;

  function _0x3cce7e() {
    _0x5ec28b.style.left = _0x579003 + "px", _0x5ec28b.style.top = _0x4b0a10 + "px";
  }

  function _0x44698a(_0x4068b0) {
    return [_0x4068b0.clientX / _0x3e54c8, _0x4068b0.clientY / _0x3e54c8];
  }
  _0x39e650.onmousemove = null, document.ontouchstart = function(_0x43b2cf) {
    const _0x2e4dea = _0x43b2cf.changedTouches[0];
    let _0x52e0ca = _0x2e4dea.identifier;

    function _0x257960(_0xef70e7) {
      return _0x43b2cf.target === _0xef70e7 || _0x43b2cf.target.parentNode === _0xef70e7;
    }
    _0x43b2cf.target === _0x39e650 ? null === _0x570b18 && (_0x5ed5b7.style.width = _0x5ed5b7.style.transform = "0", _0x5ec28b.style.display = "", [_0x579003, _0x4b0a10] = _0x44698a(_0x2e4dea), _0x3cce7e(), _0x570b18 = _0x52e0ca) : _0x257960(_0x51ef71) ? null === _0x1a7b7a && (document.onmousedown({
      "button": 0
    }), _0x1a7b7a = _0x52e0ca) : _0x257960(_0x17ca8f) && null === _0xc6a4b9 && (document.onmousedown({
      "button": 2
    }), _0xc6a4b9 = _0x52e0ca);
  }, document.ontouchmove = function(_0x58c0d2) {
    const _0x5f5c71 = _0x58c0d2.changedTouches[0];
    if (_0x5f5c71.identifier === _0x570b18) {
      const [_0x40d8c4, _0x3e533e] = _0x44698a(_0x5f5c71), _0x583cc2 = _0x40d8c4 - _0x579003, _0x5269f3 = _0x3e533e - _0x4b0a10, _0x3157e3 = _0x5ec28b.getBoundingClientRect();
      let _0x178ec5 = Math.hypot(_0x583cc2, _0x5269f3);
      const _0x42099b = _0x3157e3.width / 2 / _0x3e54c8;
      if (_0x178ec5 > _0x42099b) {
        if (!_0x45a0c5.checked) {
          const _0x894475 = _0x178ec5 - _0x42099b;
          _0x579003 += _0x894475 * _0x583cc2 / _0x178ec5, _0x4b0a10 += _0x894475 * _0x5269f3 / _0x178ec5, _0x3cce7e();
        }
        _0x178ec5 = _0x42099b;
      }
      const _0x1db10a = Math.atan2(_0x5269f3, _0x583cc2);
      _0x34c76f(_0x1db10a), _0x5ed5b7.style.transform = "rotate(" + _0x1db10a + "rad)", _0x5ed5b7.style.width = _0x178ec5 + "px";
    }
  }, _0x2c8c09.ontouchstart = function(_0x4e7305) {
    const _0x2f4257 = _0x4e7305.changedTouches[0];
    _0x2f4257.clientX < window.innerWidth / 2 ? (_0x308366 = _0x2f4257.identifier, null === _0x129df8 && (_0x6a2f21 = 2)) : (_0x129df8 = _0x2f4257.identifier, _0x6a2f21 = 1);
  }, window.ontouchend = function(_0x738bcc) {
    const _0x835f6e = _0x738bcc.changedTouches[0].identifier;
    _0x835f6e === _0x308366 ? (_0x308366 = null, _0x6a2f21 = null !== _0x129df8 ? 1 : 0) : _0x835f6e === _0x129df8 && (_0x129df8 = null, _0x6a2f21 = null !== _0x308366 ? 2 : 0), _0x835f6e === _0x1a7b7a ? (_0x1a7b7a = null, document.onmouseup({
      "button": 0
    })) : _0x835f6e === _0xc6a4b9 ? (_0xc6a4b9 = null, document.onmouseup({
      "button": 2
    })) : _0x835f6e === _0x570b18 && (_0x5ec28b.style.display = "none", _0x570b18 = null);
  };
}

function _0x38f741() {
  let _0x44b868;
  _0x44b868 = _0x5aed42[0] || _0xd875fd.Space ? 1 : _0x5aed42[2] || _0xd875fd.ShiftLeft || _0xd875fd.ShiftRight ? 2 : 0, _0x6a2f21 = _0x44b868, _0x30f1bc && function(_0x2b50c2) {
    const _0x34245e = new Uint8Array(1);
    _0x34245e[0] = _0x168cd0(2, _0x2b50c2), _0x5f0f6b(_0x34245e);
  }(_0x44b868);
}

function _0x574f90(_0x247fc6) {
  const _0x4413ad = document.createElement("canvas");
  _0x4413ad.width = _0x4413ad.height = _0x48549a;
  const _0x130749 = _0x4413ad.getContext("2d"),
    _0x1ac589 = _0x130749.createImageData(_0x48549a, _0x48549a);
  for (let _0x2da87f = 0; _0x2da87f < _0x247fc6.length; _0x2da87f++) {
    if (_0x247fc6[_0x2da87f] === _0x5df57f.empty) continue;
    const _0x2fdfab = _0x5dad13(_0x247fc6[_0x2da87f]),
      _0x5dace1 = 4 * _0x2da87f;
    _0x1ac589.data[_0x5dace1] = _0x2fdfab[0], _0x1ac589.data[_0x5dace1 + 1] = _0x2fdfab[1], _0x1ac589.data[_0x5dace1 + 2] = _0x2fdfab[2], _0x1ac589.data[_0x5dace1 + 3] = 255;
  }
  _0x130749.putImageData(_0x1ac589, 0, 0), _0x247fc6.canvas = _0x4413ad, _0x247fc6.ctx = _0x130749, _0x247fc6.fogCanvas = document.createElement("canvas"), _0x247fc6.fogCanvas.width = _0x247fc6.fogCanvas.height = _0x48549a, _0x247fc6.fogCtx = _0x247fc6.fogCanvas.getContext("2d"), _0x247fc6.fogBgCanvas = document.createElement("canvas"), _0x247fc6.fogBgCanvas.width = _0x247fc6.fogBgCanvas.height = _0x48549a, _0x247fc6.fogBgCtx = _0x247fc6.fogCanvas.getContext("2d");
}
let _0x534410 = 0,
  _0x6b0948 = 0,
  _0x521fce = 1,
  _0x3fe016 = 1,
  _0x33c6b2 = null,
  _0x29ae9c = null,
  _0x56d656 = 0,
  _0x861a9e = 0;
document.onmousewheel = function(_0x1dcd06) {
  _0x1dcd06.deltaY < 0 ? _0x521fce *= 1.1 : _0x521fce *= 0.9, _0x521fce = Math.max(1, Math.min(5, _0x521fce));
};
let _0x24df24 = Date.now();
const _0x340b44 = [],
  _0x589dd8 = function(_0x2b1fe3 = 80) {
    const _0x581237 = _0x2b1fe3 / 2,
      _0x299deb = document.createElement("canvas");
    _0x299deb.width = _0x299deb.height = _0x2b1fe3;
    const _0x2acbe1 = _0x299deb.getContext("2d");
    return _0x2acbe1.strokeStyle = "rgba(0,0,0,0.07)", _0x2acbe1.beginPath(), _0x2acbe1.moveTo(_0x581237, 0), _0x2acbe1.lineTo(_0x581237, _0x2b1fe3), _0x2acbe1.moveTo(0, _0x581237), _0x2acbe1.lineTo(_0x2b1fe3, _0x581237), _0x2acbe1.lineWidth = 2, _0x2acbe1.stroke(), _0x2acbe1.createPattern(_0x299deb, "repeat");
  }();

function _0x22c229() {
  let _0x58597f = false;
  for (let _0x31fcdd = 0; _0x31fcdd < _0x352372.length; _0x31fcdd++) {
    const _0xc2296d = _0x352372[_0x31fcdd];
    _0xc2296d.update(), _0xc2296d.isMe && (_0x58597f = true);
  }
  if (_0x58597f || _0x4d9fc5.update(), _0x3467f9) {
    const _0x131f40 = Date.now() / 80,
      _0x1e4ff3 = 7 * Math.sin(_0x131f40),
      _0x4b64e7 = 0.15 * Math.abs(Math.sin(_0x131f40 / 4)) + 0.85;
    _0x1f10aa.style.transform = "rotate(" + _0x1e4ff3 + "deg) scale(" + _0x4b64e7 + ")";
  } else _0x1f10aa.style.transform = "none";
  !(function() {
    let _0x519713;
    if (_0x3880e2 >= _0x2c79c4.length) _0x519713 = "You have claimed all your rewards.";
    else {
      const _0x299cbf = _0x405b8c - Date.now();
      _0x299cbf < 0 ? (_0x519713 = "Available every " + _0x685918(_0x3152df), _0x4fd577.rewardSent || _0x4fd577.classList.remove("btn-disabled")) : _0x519713 = "Available again in " + _0x685918(_0x299cbf);
    }
    _0x1e0bb0.getAttribute("stroke") !== _0x519713 && _0x1e0bb0.setAttribute("stroke", _0x519713);
  }());
  const [_0xe2b65f, _0x2bf3a2] = _0x6870d5();
  _0x1f17e2.faceSkin = _0xe2b65f, _0x1f17e2.bodySkin = _0x2bf3a2;
  const _0xd3ea6b = Date.now();
  _0x6b0948 = (_0xd3ea6b - _0x24df24) / 1000, _0x24df24 = _0xd3ea6b, _0x534410 -= _0x6b0948 / 0.3, _0x534410 = Math.max(0, _0x534410), _0x540ea8.fillStyle = "#522e00", _0x540ea8.fillRect(0, 0, _0x39e650.width, _0x39e650.height);
  for (let _0x27212 = 0; _0x27212 < _0x600e07.length; _0x27212++) _0x600e07[_0x27212].interpolate();
  if (_0x3fe016 += 0.3 * (_0x521fce - _0x3fe016), _0x30f1bc) {
    const _0x11d462 = _0x26fa79 || _0x30f1bc,
      {
        sx: _0x13cfb3,
        sy: _0x55db0c,
        ex: _0xf9faa0,
        ey: _0x34e685,
        minX: _0x29730c,
        minY: _0x2b70e1,
        maxX: _0x469954,
        maxY: _0x193d3,
        viewWidth: _0x1fee8f,
        viewHeight: _0x172076
      } = _0x4001aa(_0x11d462, true);
    null === _0x33c6b2 ? (_0x33c6b2 = _0x1fee8f, _0x29ae9c = _0x172076) : (_0x33c6b2 += 0.1 * (_0x1fee8f - _0x33c6b2), _0x29ae9c += 0.1 * (_0x172076 - _0x29ae9c));
    const _0xf2d327 = _0x11d462.segments[0],
      _0x277eb1 = 2 * Math.random() * Math.PI,
      _0x1a8762 = 6 * _0x534410;
    let _0x24a56f = _0xf2d327.interpX,
      _0x30fd34 = _0xf2d327.interpY;
    if (_0x26fa79) {
      const _0x406228 = (Date.now() - _0x30f1bc.diedAt) / 500;
      if (_0x406228 < 1) {
        const _0x4ea417 = _0x30f1bc.segments[0],
          _0x8c32f3 = _0x26fa79.segments[0];
        _0x24a56f = _0x4ea417.interpX + (_0x8c32f3.interpX - _0x4ea417.interpX) * _0x406228, _0x30fd34 = _0x4ea417.interpY + (_0x8c32f3.interpY - _0x4ea417.interpY) * _0x406228;
      }
    }

    function _0x41013d() {
      _0x540ea8.translate(_0x39e650.width / 2 + _0x1a8762 * Math.cos(_0x277eb1), _0x39e650.height / 2 + _0x1a8762 * Math.sin(_0x277eb1));
      const _0x133880 = Math.max(_0x39e650.width / _0x33c6b2, _0x39e650.height / _0x29ae9c);
      _0x540ea8.scale(_0x133880, _0x133880), _0x540ea8.translate(-_0x24a56f, -_0x30fd34);
    }
    _0x540ea8.save(), _0x540ea8.beginPath(), _0x540ea8.rect(0, 0, _0x39e650.width, _0x39e650.height), _0x41013d(), _0x540ea8.fillStyle = _0x589dd8, _0x540ea8.fill(), _0x540ea8.imageSmoothingEnabled = false;
    for (let _0x57f922 = _0x55db0c - 1; _0x57f922 <= _0x34e685 + 1; _0x57f922++)
      for (let _0xd7f9de = _0x13cfb3 - 1; _0xd7f9de <= _0xf9faa0 + 1; _0xd7f9de++) {
        const _0x29b55a = _0x37b83b * _0xd7f9de,
          _0x4b2e27 = _0x37b83b * _0x57f922,
          _0x2226e0 = _0x5e0aec[64 * _0x57f922 + _0xd7f9de];
        _0x2226e0 && _0x540ea8.drawImage(_0x2226e0.canvas, _0x29b55a, _0x4b2e27, _0x37b83b, _0x37b83b);
      }
    _0x11d462 && _0x4001aa(_0x11d462);
    for (let _0x2c2f62 = _0x600e07.length - 1; _0x2c2f62 >= 0; _0x2c2f62--) _0x600e07[_0x2c2f62].draw(_0x2c2f62, _0x540ea8);
    _0x540ea8.lineWidth = 1, _0x540ea8.beginPath(), _0x540ea8.rect(0, 0, 30720, 30720), _0x540ea8.restore(), _0x540ea8.rect(0, 0, _0x39e650.width, _0x39e650.height), _0x540ea8.fillStyle = "#222222", _0x540ea8.fill("evenodd"), _0x1ed826 && _0x1ed826(), _0x540ea8.save(), _0x41013d();
    for (let _0x59f30d = _0x2a89f4.length - 1; _0x59f30d >= 0; _0x59f30d--) {
      const _0x2b90ec = _0x2a89f4[_0x59f30d],
        _0x24e4a9 = (_0xd3ea6b - _0x2b90ec.time) / 600;
      if (_0x24e4a9 >= 1) _0x2a89f4.splice(_0x59f30d, 1);
      else {
        _0x540ea8.save(), _0x540ea8.translate(_0x2b90ec.x, _0x2b90ec.y), _0x540ea8.rotate(_0x2b90ec.dir * _0x24e4a9 * Math.PI);
        const _0x1d9d6b = _0x26c6d0 * (1 + 2 * _0x24e4a9);
        _0x540ea8.fillStyle = _0x2b90ec.color, _0x540ea8.globalAlpha = 0.75 * (1 - _0x24e4a9), _0x540ea8.fillRect(0, 0, _0x1d9d6b, _0x1d9d6b), _0x540ea8.restore();
      }
    }
    for (let _0x304639 = 0; _0x304639 < _0x600e07.length; _0x304639++) _0x600e07[_0x304639].drawEnergyAndNickname(_0x540ea8);
    _0x540ea8.restore();
  }
  for (let _0x9994d = 0; _0x9994d < _0x16234b.length; _0x9994d++) _0x16234b[_0x9994d].render();
  if (_0x340b44.length > 0) {
    _0x524d74.style.display = "", _0x3e1028.clearRect(0, 0, _0x524d74.width, _0x524d74.height);
    const _0x2634b5 = _0x524d74.height / 657;
    _0x3e1028.save(), _0x3e1028.translate(_0x524d74.width / 2, 0), _0x3e1028.scale(_0x2634b5, _0x2634b5);
    const _0x44d299 = 10,
      _0x2b4f3d = 6;
    _0x3e1028.beginPath();
    for (let _0x26601c = _0x340b44.length - 1; _0x26601c >= 0; _0x26601c--) {
      const _0x5a529e = _0x340b44[_0x26601c];
      _0x5a529e.spawnTime > 0 ? _0x5a529e.spawnTime -= _0x6b0948 : (_0x5a529e.vy += 8 * _0x6b0948, _0x5a529e.y += _0x5a529e.vy * _0x6b0948 * 80, _0x5a529e.x += _0x5a529e.vx * _0x6b0948 * 100, _0x5a529e.angle += _0x5a529e.angleSpeed, _0x5a529e.y > 657 && (_0x5a529e.bounced ? _0x5a529e.vy > 0 && _0x340b44.splice(_0x26601c, 1) : (_0x5a529e.vy *= -(0.2 * Math.random() + 0.55), _0x5a529e.bounced = true)), _0x3e1028.save(), _0x3e1028.translate(_0x5a529e.x, _0x5a529e.y), _0x3e1028.rotate(_0x5a529e.angle), _0x3e1028.moveTo(_0x44d299, 0), _0x3e1028.ellipse(0, 0, _0x44d299, _0x2b4f3d, 0, 0, 2 * Math.PI), _0x3e1028.restore());
    }
    _0x3e1028.lineWidth = 6, _0x3e1028.strokeStyle = "#a7a217", _0x3e1028.stroke(), _0x3e1028.fillStyle = "#e9e21c", _0x3e1028.fill(), _0x3e1028.restore();
  } else _0x524d74.style.display = "none";
  window.requestAnimationFrame(_0x22c229);
}
const _0x37862b = document.querySelectorAll(".coming-soon");
for (let _0x35ca2b = 0; _0x35ca2b < _0x37862b.length; _0x35ca2b++) {
  const _0x244981 = _0x37862b[_0x35ca2b];
  _0x244981.onclick = function() {}, _0x244981.classList.add("btn-disabled"), _0x244981.style.pointerEvents = "all", _0x244981.style.cursor = "default", _0x244981.setAttribute("tooltip", "Coming soon");
}
const _0x32b96e = _0x4fc487.querySelector(".dialog-content");
_0x32b96e.innerHTML = "", (function() {
  let _0x542054 = "";
  for (let _0x5a100f = 0; _0x5a100f < _0x59489b.length; _0x5a100f++) {
    const {
      title: _0x2016eb,
      content: _0x243202
    } = _0x59489b[_0x5a100f];
    _0x542054 += "<span class=\"log-title\" stroke=\"" + _0x2016eb + "\"></span><div class=\"log-content\">", _0x243202.forEach(_0x307a50 => {
      _0x542054 += "<div stroke=\"- " + _0x307a50 + "\"></div>";
    }), _0x542054 += "</div><div class=\"log-line\"></div>";
  }
  const _0x81c4e5 = localStorage.changelog;
  _0x3467f9 = undefined !== _0x81c4e5 && parseInt(_0x81c4e5) < 32, localStorage.changelog = 32, _0x32b96e.innerHTML = _0x542054;
}()), document.querySelector(".tabs").children[2].style.display = "none";
