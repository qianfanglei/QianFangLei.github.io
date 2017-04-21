$(function(){
	$(".title .list li").hover(function(){
		$(this).find(".down").stop().slideDown({duration:1000,easing:'easeOutBounce'})	
	},function(){
		$(this).find(".down").stop().slideUp({duration:1000,easing:'easeOutBounce'})	
	});
	$(".header .header-right").hover(function(){
		$(this).find(".down").stop().slideDown({duration:1000,easing:'easeOutBounce'})	
	},function(){
		$(this).find(".down").stop().slideUp({duration:1000,easing:'easeOutBounce'})	
	});
})
$(function(){
	$("#jianjie").click(function(){
		$.scrollTo('#jianjie1',500);
	});
	$("#wenhua").click(function(){
		$.scrollTo('#wenhua2',1000);
	});
	$("#xinxi").click(function(){
		$.scrollTo('.pq-01',1000);
	});
	$("#dongtai").click(function(){
		$.scrollTo('.pq-05',1000);
	});
})





$(function(){
	
	var i=0;
	var clone=$(".banner .img li").first().clone();
	$(".banner .img").append(clone);	
	var size=$(".banner .img li").size();	
	//size=3
	for(var j=0;j<size-1;j++){
		$(".banner .num").append("<li></li>");
	}
	$(".banner .num li").first().addClass("on");
	


	function move(){
		
		if(i==size){
			$(".banner  .img").css({left:0})			
			i=1;
		}
		
		
		if(i==-1){
			$(".banner .img").css({left:-(size-1)*350})
			// $(".banner .img").css({left:-(size-1)*247})
			i=size-1;
		}+
		
		$(".banner .img").stop().animate({left:-i*247},500)
		
		if(i==size-1){
			$(".banner .num li").eq(0).addClass("on").siblings().removeClass("on")	
		}else{		
			$(".banner .num li").eq(i).addClass("on").siblings().removeClass("on")	
		}
	}
	
	/*鼠标划入圆点*/
	$(".banner .num li").hover(function(){
		var index=$(this).index();
		i=index;
		$(".banner .img").stop().animate({left:-index*287},500)	
		$(this).addClass("on").siblings().removeClass("on")		
	})
	
	
	/*自动轮播*/
	var t=setInterval(function(){
		i++;
		move()
	},2000)
	
	
	/*对banner定时器的操作*/
	$(".banner").hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(function(){
			i++;
			move()
		},2000)
	})
	
	
	
	/*向左的按钮*/
	//$(".banner .btn_l").click(function(){
	//	i++
	//	move();	
	//})
	
	
	
	/*向右的按钮*/
	//$(".banner .btn_r").click(function(){
	//	i--
	//	move()				
	//})
	
		
	
	
})