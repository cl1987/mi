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