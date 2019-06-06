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