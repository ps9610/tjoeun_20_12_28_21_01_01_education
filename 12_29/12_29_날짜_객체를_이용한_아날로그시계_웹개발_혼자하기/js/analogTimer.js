;(function($,window,document,undefined){

    var newDate = new Date();
    var h = newDate.getHours();
    var m = newDate.getMinutes();
        
    var s = newDate.getSeconds();
        

    var _years = newDate.getFullYear();
    var _month = newDate.getMonth()+1;
    var _date = newDate.getDate();
    var $day = newDate.getDay();
    var _day = null;
        switch($day){
            case 0 :
            _day = "일요일";
            break;
            case 1:
            _day = "월요일";
            break;
            case 2:
            _day = "화요일";
            break;
            case 3:
            _day = "수요일";
            break;
            case 4:
            _day = "목요일";
            break;
            case 5:
            _day = "금요일";
            break;
            case 6:
            _day = "토요일";
            break;
        }
        console.log(newDate);

        setTimeout(timerFn, 100);
        setInterval(timerFn, 1000);

        function timerFn(){

        newDate = new Date();
        h = newDate.getHours();
        m = newDate.getMinutes();
        s = newDate.getSeconds();            

        $(".hours").css({ transform : "rotate(" + (h*30) + (m*.5) + "deg)" });
        $(".minutes").css({ transform : "rotate(" + (m*6) + "deg)" });
        $(".seconds").css({ transform : "rotate(" + (s*6) + "deg)" });

        _years = newDate.getFullYear();
        _month = newDate.getMonth()+1;
        _date = newDate.getDate();
        $day = newDate.getDay();
        
        $(".year").html( _years + ".");
        $(".mon").html( _month + ".");
        $(".date").html( _date );
        $(".day").text( _day );

        $(".hour").html( h + ":");
        $(".minute").html( m<10? "0"+m:m  + ":");
        $(".second").html( s<10? "0"+s:s );
        }

        function resizeFn(){
            if($(window).innerWidth()<801)
            $(".digital-wrap").css({width : $(window).innerWidth() });
            if($(window).innerWidth()<491)
            $(".clock-wrap").css({width : $(window).innerWidth() });
        }
        $(window).resize(function(){
            resizeFn();
        })
})(jQuery,window,document);