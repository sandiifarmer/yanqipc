function RenderQRCode(opt){
	this.url = opt.url;
	this.box = $(opt.box);
	this.width = opt.width;
	this.height = opt.height;

	this.render();
}

RenderQRCode.prototype = {

	render : function(){
		var self = this;

		var	qrcode = new QRCode(-1, 2);
		qrcode.addData(self.url);
		qrcode.make();

		var h = {
			width: self.width,
			height: self.height,
			typeNumber: -1,
			correctLevel: 2,
			background: '#ffffff',
			foreground: '#000000'
		};

		var c = document.createElement('canvas');
		self.box.append(c)
		c.width = h.width;
		c.height = h.height;
		if(c.getContext){
			var d = c.getContext('2d');
		}

		var c = qrcode.getModuleCount(),
			b = h.width / c,
			e = h.height / c;
		for (var f = 0; f < c; f++){ 
			for (var i = 0; i < c; i++) {
				d.fillStyle = qrcode.isDark(f, i) ? h.foreground : h.background;
				var g = Math.ceil((i + 1) * b) - Math.floor(i * b),
					j = Math.ceil((f + 1) * b) - Math.floor(f * b);
				d.fillRect(Math.round(i * b), Math.round(f * e), g, j);
			}
		}
	}
};