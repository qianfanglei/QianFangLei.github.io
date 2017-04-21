$(document).ready(function(){
    var index=0;
    var $_picn=$(".pic").length;
    if($_picn>1){
        for(var i=1;i<=$_picn;i++){
            var $_span="<span>"+i+"</span>";
            $(".pic-num").append($_span);
        }
        $(".pic-num span").eq(0).addClass("on");
        $(".pic").eq(0).show().siblings(".pic").hide();
    }
    $(".pic-num span").hover(
        function(){
            if(myshow){clearInterval(myshow);}
            index=$(".pic-num span").index(this);
            show(index);
        }
    );
    /*prev*/
    $(".lbtn").bind("click",function(){
        index-=1;
        if(index==-1){index=$_picn-1;}
        show(index);
    });
    /*next*/
    $(".rbtn").bind("click",function(){
        index+=1;
        if(index==$_picn){index=0}
        show(index);
    });
    $(".carosule").hover(
        function(){
            if(myshow){clearInterval(myshow);}
        },function(){
            myshow=setInterval(function(){
                show(index);
                index++;
                if(index==$_picn){index=0;}
            },3000);
        }
    );
    function show(index){
        $(".pic-num span").removeClass("on").eq(index).addClass("on");
        $(".pic").eq(index).stop(true,false).fadeIn(500).siblings(".pic").fadeOut(500);
    }
    var myshow=setInterval(function(){
        show(index);
        index++;
        if(index==$_picn){index=0;}
    },3000);
})