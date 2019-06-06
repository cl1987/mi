function Coursel(opation){
		 // 1.罗列属性
		this.box=document.getElementById(opation.id);
		this.width=opation.width;
		this.height=opation.height;
		this.img=opation.img;
		this.oUlImg=null;//把需要的变量定义出来
		this.leftBtn=null;
		this.rightBtn=null;
		this.oUlBom=null;
		this.now=0;
		this.playtime=opation.playtime;

		// 2.初始化页面
		this.init();
		// 3.绑定事件
		this.bindEvent();
		// 4.是否自动轮播
		if(this.playtime){
			this.auto()
		}
	}
	Coursel.prototype.init=function(){
		//给外层父容器添加样式
		this.box.style.position="relative";
		this.box.style.width=this.width+'px';
		this.box.style.height=this.height+'px';
		// 1.生成图片父容器
		this.oUlImg=document.createElement('ul');

		// 2.限制图片父容器的宽高
		this.oUlImg.style.width='100%';
		this.oUlImg.style.height='100%';

		// 3.将图片父容器插入到box中
		this.box.appendChild(this.oUlImg);

		// 4.生成每一个li
		for(var i=0;i<this.img.length;i++){
			//生成li，并设置li的样式
			var oLi=document.createElement('li');
			oLi.style.width='100%';
			oLi.style.height='100%';
			oLi.style.position="absolute";
			oLi.style.top=0;
			oLi.style.left=0;
			this.oUlImg.appendChild(oLi);
		// 5.生成图片，并插入li中
			var oImg=document.createElement('img');
			oImg.src=this.img[i];
			oLi.appendChild(oImg);
			if(i==0){     //默认显示第一张
				oLi.style.zIndex=99;
			}
		}
		//生成左右按钮
		this.leftBtn=document.createElement('span');
		this.rightBtn=document.createElement('span');
		this.box.appendChild(this.leftBtn);
		this.box.appendChild(this.rightBtn);
		this.leftBtn.className="leftBtn1";
		this.rightBtn.className="rightBtn1";
		this.leftBtn.innerHTML='&lt';
		this.rightBtn.innerHTML='&gt';
		//生成底部按钮
		this.oUlBom=document.createElement('ul');
		this.oUlBom.style.zIndex=999;
		for(var j=0;j<this.img.length;j++){  //根据图片的多少生成对应的li
			var oLi=document.createElement('li');
			this.oUlBom.appendChild(oLi);
			if(j==0){
				oLi.className='active';
			}
		}
		this.oUlBom.className='oUlBottom';
		this.box.appendChild(this.oUlBom);
		this.oUlBom.style.marginLeft=-this.oUlBom.offsetWidth*0.5+'px';//让底部按钮居中显示
	}
	Coursel.prototype.bindEvent=function(){
		_this=this;//存this
		this.rightBtn.onclick=function(){
			_this.now++
			
			if(_this.now>_this.img.length-1){//右边按钮移动条件
				_this.now=0;
			}
			console.log(_this.now);
			_this.tab()
		}
		this.leftBtn.onclick=function(){//左边按钮移动条件
			_this.now--
			console.log(_this.now);
			if(_this.now<0){
				_this.now=_this.img.length-1;
			}
			_this.tab()
		}
		for(var j=0;j<this.oUlBom.children.length;j++){
			this.oUlBom.children[j].index=j;
			this.oUlBom.children[j].onclick=function(){
				_this.now=this.index;
				_this.tab();
			}
		}
	}
	Coursel.prototype.tab=function(){
		for(var i=0;i<this.oUlImg.children.length;i++){
			this.oUlImg.children[i].style.zIndex=0;
			this.oUlImg.children[i].style.opacity = 0.2;
			this.oUlBom.children[i].className="";
		}
		this.oUlImg.children[this.now].style.zIndex=99;
		animate(this.oUlImg.children[this.now],{opacity:100});
		// this.oUlImg.children[this.now].style.opacity = 1;
		this.oUlBom.children[this.now].className='active';
	}

	Coursel.prototype.auto=function(){
		var _this=this
		var timer=0;
		timer=setInterval(this.rightBtn.onclick,this.playtime);
		this.box.onmouseover=function(){
			clearInterval(timer);
		}
		this.box.onmouseout=function(){
			timer=setInterval(_this.rightBtn.onclick,_this.playtime);
		}
	}