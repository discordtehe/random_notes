deobfuscated digworm.io client.js files

# webgl program
codes found in 2022_7_20.js:
```
	attribute vec2 pos;
	varying vec2 vPos;
	void main() {
		vPos=pos;
		gl_Position=vec4(pos,0.0,1.0);
	}
```

```
	precision mediump float;
	uniform sampler2D tex;
	uniform bool u3d;
	uniform bool uGlow;
	uniform float uTime;
	uniform vec2 blurSize;

	varying vec2 vPos;

	const vec3 groundColor = vec3(0.32,0.18,0.0);
	const int STEPS=10;

	vec4 getColor(vec2 p){
		vec4 t=texture2D(tex,p);
		if(distance(vec3(0.6470588235294118,0.6196078431372549,0.08235294117647059),t.rgb)<0.1||distance(vec3(0.19607843137254902,0.6431372549019608,0.18823529411764706),t.rgb)<0.1||distance(vec3(0.19215686274509805,0.6470588235294118,0.6196078431372549),t.rgb)<0.1||distance(vec3(0.6509803921568628,0.09803921568627451,0.023529411764705882),t.rgb)<0.1){
			return t;
		}
		return vec4(0.0);
	}

	void main(){
		vec4 a;
		vec4 sum;
		vec2 uv=vPos*0.5+0.5;
		if(uGlow){
			sum += getColor(vec2(uv.x - 4.0*blurSize.x, uv.y)) * 0.05;
			sum += getColor(vec2(uv.x - 3.0*blurSize.x, uv.y)) * 0.09;
			sum += getColor(vec2(uv.x - 2.0*blurSize.x, uv.y)) * 0.12;
			sum += getColor(vec2(uv.x - blurSize.x, uv.y)) * 0.15;
			sum += getColor(vec2(uv.x, uv.y)) * 0.16;
			sum += getColor(vec2(uv.x + blurSize.x, uv.y)) * 0.15;
			sum += getColor(vec2(uv.x + 2.0*blurSize.x, uv.y)) * 0.12;
			sum += getColor(vec2(uv.x + 3.0*blurSize.x, uv.y)) * 0.09;
			sum += getColor(vec2(uv.x + 4.0*blurSize.x, uv.y)) * 0.05;

			//y
			sum += getColor(vec2(uv.x, uv.y - 4.0*blurSize.y)) * 0.05;
			sum += getColor(vec2(uv.x, uv.y - 3.0*blurSize.y)) * 0.09;
			sum += getColor(vec2(uv.x, uv.y - 2.0*blurSize.y)) * 0.12;
			sum += getColor(vec2(uv.x, uv.y - blurSize.y)) * 0.15;
			sum += getColor(vec2(uv.x, uv.y)) * 0.16;
			sum += getColor(vec2(uv.x, uv.y + blurSize.y)) * 0.15;
			sum += getColor(vec2(uv.x, uv.y + 2.0*blurSize.y)) * 0.12;
			sum += getColor(vec2(uv.x, uv.y + 3.0*blurSize.y)) * 0.09;
			sum += getColor(vec2(uv.x, uv.y + 4.0*blurSize.y)) * 0.05;
		}
		if(u3d){
			for (int i=0;i<=STEPS;i++) {
				float s=(float(i)/float(STEPS));
				vec2 p = vPos*(1.0+0.15*s);
				vec4 b = texture2D(tex, p*0.5+0.5);
				if (length(b.rgb-groundColor)<0.1) {
					if(i!=STEPS) {
						b.a = 0.0;
					}
				} else if(i!=0) {
					b.rgb=groundColor*0.8;
				}
				a.rgb = a.rgb*a.a + b.rgb*b.a*(1.0-a.a);
				a.a = a.a+b.a * (1.0-a.a);
			}
		}
		gl_FragColor = (u3d?a:texture2D(tex,uv)) + sum*(sin(uTime)*0.5+1.5);
	}
```