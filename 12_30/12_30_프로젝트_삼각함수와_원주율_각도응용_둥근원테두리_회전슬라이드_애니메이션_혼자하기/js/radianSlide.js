;(function($,document,window,undefined){

    var x = 0;
    var y = 0;
    var r = $(".slide-container").innerWidth()/2;
    var n = $(".slide").length; //슬라이드 갯수
    var angle = 360/n; //360도를 슬라이드 갯수만큼 나눠주어야 각 컬러가 알맞은 각도로 들어감 = 30도
    var deg = []; //계속 일정한 간격으로 늘어나기 때문에 배열사용
    var setId = 0;

    function arrayFn(){
        for(var i=0;i<n;i++){
            deg[i] = i*angle;
            x = Math.cos( deg[i]*Math.PI/180 )*r+r;
            y = Math.sin( deg[i]*Math.PI/180 )*r+r;
            $(".slide").eq(i).css({ left:x, top:y });
        }
        //console.log(deg);
    }

    setTimeout(arrayFn,100);


    function slideFn(){
        for(var i=0;i<n;i++){
            x = Math.cos( deg[i]*Math.PI/180 )*r+r;
            y = Math.sin( deg[i]*Math.PI/180 )*r+r;
            $(".slide").eq(i).animate({ left:x, top:y });
        }
        //console.log(deg);
    }

    setTimeout(autoTimerFn,100);
    function autoTimerFn(){
        setId = setInterval(nextFn,1000);
    }

    function nextFn(){
        for(var i=0;i<n;i++){
            deg[i]+=angle;
        }
        slideFn();
    }

    function prevFn(){
        for(var i=0;i<n;i++){
            deg[i]-=angle;
        }
        slideFn();
    }

    $(".nextBtn")
    .on("click",function(){
        nextFn();
    })
    .on("mouseenter", function(){
        clearInterval(setId);
    })
    .on("mouseleave",function(){
        autoTimerFn();
    })


    $(".prevBtn")
    .on("click",function(){
        prevFn();
    })
    .on("mouseenter", function(){
        clearInterval(setId);
    })
    .on("mouseleave",function(){
        autoTimerFn();
    })

    

    $(".slide").each(function(i){
        $(this)
        .on("mouseenter",function(){
            clearInterval(setId);
        })
        .on("click",function(e){
            e.preventDefault();
            clearInterval(setId);
            nextFn();
            $(".slide-container").css({ backgroundColor: $(".slide").eq(i).css("backgroundColor") })
            console.log( $(this).eq(i).css("backgroundColor") )
        })
        .on("mouseleave",function(){
            autoTimerFn();
        })
    })

})(jQuery,document,window);