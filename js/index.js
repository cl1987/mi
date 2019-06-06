//1.处理购物车
handlecart();
function handlecart(){
	oCart=document.querySelector('.top .cart');
	oCartBox=document.querySelector('.top .cart .cart-box');
	oCartContent=document.querySelector('.top .cart .cart-content');
	oLoading=document.querySelector('.top .cart .loading')
	oEmptycart=document.querySelector('.top .cart .empty-cart')

	oCart.onmouseenter=function(){
		// oCartContent.style.height='100px';
		oLoading.style.display='block';
		animate(oCartContent,{height:100},true,function(){
			oLoading.style.display='none';
			oEmptycart.style.display='block';
		})
	}
	oCart.onmouseleave=function(){
		// oCartContent.style.height='0';
		animate(oCartContent,{height:0},true,function(){
			oLoading.style.display='none';
			oEmptycart.style.display='none';
		})
	}
}
//2.处理导航栏
handleNav();
function handleNav(){
	var aNavItem=document.querySelectorAll('.header .header-list-1');
	var aNavContent=document.querySelector('.header .head-nav-content');
	var hidTimer=0;
	var oContainer=aNavContent.querySelector(".container");
	var dataTime=0;
	// console.log(oContainer)
	for(var i=0; i<aNavItem.length;i++){
			aNavItem[i].index=i;
		aNavItem[i].onmouseenter=function(){
			clearTimeout(hidTimer)
			aNavContent.style.borderTop="1px solid #ccc"
			animate(aNavContent,{height:250},true,function(){
				aNavContent.style.overflow="visible";
			})
			oContainer.innerHTML='<div class="loading"></div>';
			var index=this.index;
			clearTimeout(dataTime);
			dataTime=setTimeout(function(){
				loadData(index);
			},1000)
		}
		aNavItem[i].onmouseleave=function(){
			// hidTimer=setTimeout(function(){
			// 	aNavContent.style.overflow="hidden";
			// 	animate(aNavContent,{height:0},true,function(){
			// 		aNavContent.style.borderTop="none"
			// 	})
			// },300)
			hideNav();
		}
		aNavContent.onmouseenter=function(){
			clearTimeout(hidTimer)
		}
		aNavContent.onmouseleave=function(){
			hideNav()
		}
	}
	function hideNav(){
		hidTimer=setTimeout(function(){
				aNavContent.style.overflow="hidden";
				animate(aNavContent,{height:0},true,function(){
					aNavContent.style.borderTop="none"
				})
			},300)
	}
	function loadData(index){
		var data=aNavData[index];
		// console.log(data)
		var html="";
			html+=	'<ul>'
			for(var i=0;i<data.length;i++){
				html+=			'<li>';
				html+=			'	<a href="'+data[i].url+'">';
				html+=			'		<div class="img-box">';
				html+=			'			<img src="'+data[i].src+'" alt="">';
				html+=			'		</div>';
				html+=			'		<p class="head-nav-name">'+data[i].name+'</p>';
				html+=			'		<p class="head-nav-price">'+data[i].price+'元</p>';
				if(data[i].tag){
					html+=			'	<span class="tag">'+data[i].tag+'</span>';
				}
				
				html+=			'	</a>';
				html+=			'</li>';
			}
			html+=	'</ul>'
		oContainer.innerHTML=html;
	}
}
//3.处理轮播图
handleCoursel();
function handleCoursel(){
	new Coursel({//传入一个对象作为参数
		id:'coursel',
		width:1236,
		height:461,
		img:["imgs/b1.jpg","imgs/b2.jpg","imgs/b3.jpg"],
		playtime:3000
	});
}
//4.处理分类面板
handleCate();
function handleCate(){
	var oCateItem=document.querySelectorAll('.home .zhanshi .cate-box .cate .sideinfor1')
	// console.log(oCateItem)
	var oCateContent=document.querySelector('.home .zhanshi .cate-box .cate-content')
	// console.log(oCateContent)
	var oCateBox=document.querySelector('.home .zhanshi .cate-box')
	console.log(oCateBox)
	for(var i=0;i<oCateItem.length;i++){
		oCateItem[i].index=i;
		oCateItem[i].onmouseenter=function(){
			for(var j=0;j<oCateItem.length;j++){
				oCateItem[j].className='sideinfor1'
				// oCateItem[0].className='sideinfor1 solo'
				// oCateItem[oCateItem.length-1].className='sideinfor1 solo'
			}
			oCateContent.style.display='block';
			this.className='sideinfor1 active'
			loadData(this.index)
		}
	}
	// oCateBox.onmouseleave=function(){
	// 	oCateContent.style.display='none';
	// 	for(var j=0;j<oCateItem.length;j++){
	// 			oCateItem[j].className='sideinfor1'
	// 		}	
	// }
	function loadData(index){
		var data=aCateContentData[index];
		var html="";
			html+=	'<ul>';
			for(var i=0;i<data.length;i++){
				html+=		'<li>';
				html+=			'<a href="'+data[i].url+'">';
				html+=				'<img src="'+data[i].src+'" alt="">';
				html+=				'<span>'+data[i].name+'</span>';
				html+=			'</a>';
				html+=		'</li>';
			}
			html+=	'</ul>';







		oCateContent.innerHTML=html;
	}
}