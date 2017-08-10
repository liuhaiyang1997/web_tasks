$(document).ready(function(){
	var timer=0;
	timeplay=null;
	$(".btn span").mouseover(function(){
	clearInterval(timeplay);
    var index=$(this).index();
    $(this).addClass("active").siblings().removeClass("active");
    $(".container .pics li").eq(index).show().siblings(".container .pics li").hide();
	});
	/*鼠标移动到数字位置即更换图片*/
	
	$(".btn span").mouseout(function(){
		autom();
	});
	/*在鼠标移动到数字上，终止自动播放后。当鼠标离开又可以开始自动播放*/
	
	autom();
	function  autom(){
		timeplay=setInterval(function(){
			timer++;
			if(timer<3){
			$(".container .btn span").eq(timer).addClass("active").siblings().removeClass("active");
    		$(".container .pics li").eq(timer).show().siblings(".container .pics li").hide();
			}
			else {
				timer=-1;
			}
			},1000);
	}
	/*自动重复播放  频率一秒*/
	
	$(".container .right-arrow").click(function(){
		timer --;
		if(timer>=0){
			$(".container .btn span").eq(timer).addClass("active").siblings().removeClass("active");
    		$(".container .pics li").eq(timer).show().siblings(".container .pics li").hide();
    		
		}else{
			timer=3;
			$(".container .btn span").eq(2).addClass("active").siblings().removeClass("active");
    		$(".container .pics li").eq(2).show().siblings(".container .pics li").hide();
		}
	});
	
	$(".container .right-arrow").mouseover(function(){
		clearInterval(timeplay);
	});
	$(".container .right-arrow").mouseout(function(){
		autom();
	});
	/*方向切换，当鼠标在上面时停止自动播放。离开又开始自动播放*/
	
	$(".container .left-arrow").click(function(){
		timer ++;
		if(timer<=2){
			$(".container .btn span").eq(timer).addClass("active").siblings().removeClass("active");
    		$(".container .pics li").eq(timer).show().siblings(".container .pics li").hide();
    		
		}else{
			timer=-1;
			$(".container .btn span").eq(0).addClass("active").siblings().removeClass("active");
    		$(".container .pics li").eq(0).show().siblings(".container .pics li").hide();
		}
	});
	
	$(".container .left-arrow").mouseover(function(){
		clearInterval(timeplay);
	});
	$(".container .left-arrow").mouseout(function(){
		autom();
	});
	
 });

