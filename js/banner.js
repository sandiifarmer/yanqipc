function Banner(now){
	this.container = $("#container");
	this.top = $(".top");
	this.btm = $(".btm");
	this.now = now;

	this.renderTop();
	this.renderBtm();
	this.bindLink();
	this.bindParent();
}

Banner.prototype = {
	renderTop : function(){
		var self = this,
			html =
			'<div class="top-logo"></div>'
			+'<div class="top-weibo"></div>'
			+'<div class="top-weixin"></div>'
			+'<div class="top-code">'
			+'	<img src="../img/code.jpg">'
			+'</div>'
			+'<div class="top-nav clearfix">'
			+'	<div class="nav-btn link" data-link="home">'
			+'		<p class="first">首页</p>'
			+'	</div>'
			+'	<div class="nav-btn nav-parent" data-link="about-us">'
			+'		<p>关于我们</p>'
			+'		<div class="nav-menu">'
			+'			<div class="menu-mist"></div>'
			+'			<div class="menu-red"></div>'
			+'			<div class="menu-one link" data-link="center-intro">中心介绍</div>'
			+'			<div class="menu-one link" data-link="group-intro">集团介绍</div>'
			+'		</div>'
			+'	</div>'
			+'	<div class="nav-btn nav-parent" data-link="venue-info">'
			+'		<p>场馆信息</p>'
			+'		<div class="nav-menu">'
			+'			<div class="menu-mist"></div>'
			+'			<div class="menu-red"></div>'
			+'			<div class="menu-one link" data-link="expo">展览</div>'
			+'			<div class="menu-one link" data-link="conference">会议</div>'
			+'			<div class="menu-one link" data-link="catering">餐饮</div>'
			+'			<div class="menu-one link" data-link="hotel">酒店</div>'
			+'		</div>'
			+'	</div>'
			+'	<div class="nav-btn nav-parent" data-link="supporting-facility">'
			+'		<p>配套设施</p>'
			+'		<div class="nav-menu">'
			+'			<div class="menu-mist"></div>'
			+'			<div class="menu-red"></div>'
			+'			<div class="menu-one link" data-link="ball-room">宴会厅</div>'
			+'			<div class="menu-one link" data-link="press-room">新闻发布厅</div>'
			+'			<div class="menu-one link" data-link="meeting-room">会议室</div>'
			+'			<div class="menu-one link" data-link="yanqi-lake">雁栖湖</div>'
			+'		</div>'
			+'	</div>'
			+'	<div class="nav-btn link" data-link="booking-center">'
			+'		<p>预订中心</p>'
			+'	</div>'
			+'	<div class="nav-btn link" data-link="transport-info">'
			+'		<p>交通信息</p>'
			+'	</div>'
			+'	<div class="nav-btn nav-parent" data-link="download-center">'
			+'		<p>下载中心</p>'
			+'		<div class="nav-menu">'
			+'			<div class="menu-mist"></div>'
			+'			<div class="menu-red"></div>'
			+'			<div class="menu-one link" data-link="capacity-form">场馆容纳人数表</div>'
			+'			<div class="menu-one link" data-link="plane-graph">平面图</div>'
			+'			<div class="menu-one link" data-link="tech-data">展厅技术参数</div>'
			+'		</div>'
			+'	</div>'
			+'	<div class="nav-btn nav-parent" data-link="news-info">'
			+'		<p>新闻资讯</p>'
			+'		<div class="nav-menu">'
			+'			<div class="menu-mist"></div>'
			+'			<div class="menu-red"></div>'
			+'			<div class="menu-one link" data-link="expo-activity">展会活动</div>'
			+'			<div class="menu-one link" data-link="enterprise-info">企业信息</div>'
			+'			<div class="menu-one link" data-link="industry-trends">行业动态</div>'
			+'		</div>'
			+'	</div>'
			+'	<div class="nav-btn nav-parent" data-link="enterprise-culture">'
			+'		<p>企业文化</p>'
			+'		<div class="nav-menu">'
			+'			<div class="menu-mist"></div>'
			+'			<div class="menu-red"></div>'
			+'			<div class="menu-one link" data-link="enterprise-culture">企业文化</div>'
			+'			<div class="menu-one link" data-link="events">大事记</div>'
			+'		</div>'
			+'	</div>'
			+'	<div class="nav-btn nav-parent" data-link="contact-us">'
			+'		<p>联系我们</p>'
			+'		<div class="nav-menu">'
			+'			<div class="menu-mist"></div>'
			+'			<div class="menu-red"></div>'
			+'			<div class="menu-one link" data-link="contact-way">联系方式</div>'
			+'			<div class="menu-one link" data-link="your-say">意见留言</div>'
			+'		</div>'
			+'	</div>'
			+'</div>';
		self.top.append(html);
		self.fixNow(this.now);
	},

	fixNow : function(now){
		var self = this,
			btns = $(".nav-btn").filter(".link"),
			len = btns.length;
		for(var i = 0; i < len; i++){
			var btn = $(btns[i]),
				link = btn.attr("data-link");
			if(link == now){
				btn.addClass("checked");
				return;
			}
		}

		var ones = $(".menu-one"),
			len = ones.length;
		for(var i = 0; i < len; i++){
			var one = $(ones[i]),
				link = one.attr("data-link");
			if(link == now){
				one.parent().parent().addClass("checked");
				return;
			}
		}
	},

	renderBtm : function(){
		var self = this,
			html =
			'<span class="btm-btn link first" data-link="talent-recruit">人才招聘</span>|'
			+'<span class="btm-btn link" data-link="site-map">网站地图</span>|'
			+'<span class="btm-btn link" data-link="privacy-policy">免责条款与隐私政策</span>|'
			+'<span class="btm-btn link" data-link="lost-found">失物招领</span>'
			+'<span class="copyright">版权所有 © 2015 雁栖国际会展中心　京ICP备14009349</span>';
		self.btm.append(html);
	},

	bindLink : function(){
		var self = this;
		self.container.delegate(".link", "click", function(e){
			var btn = $(e.currentTarget),
				url = btn.attr("data-link") + ".html";
			location.href = url;
		});
	},

	bindParent : function(){
		var self = this;
		self.container.delegate(".nav-parent", "click", function(e){
			var target = $(e.target);
			if(target.hasClass("link")) return;
			var btn = $(e.currentTarget),
				menu = btn.children(".nav-menu"),
				one = $(menu.children(".link")[0]),
				url = one.attr("data-link") + ".html";
			location.href = url;
		});
		
	}
};