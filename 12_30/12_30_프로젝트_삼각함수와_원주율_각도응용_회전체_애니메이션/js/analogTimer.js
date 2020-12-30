;(function($,document,window,undefined){
    
    //아날로그 시계 웹 개발

    // 둘 다 같은뜻임
 /* var newObj = {} //리터럴방식
    var newObj = new Object{}; //객체 생성 방식 */

    //date 객체 가져오기
    var newDate =  new Date(); //date 객체 생성
    var $h = newDate.getHours(); //시간(Hours) 가져오기 | date라는 객체에서 시간을 가져와라
    var $m = newDate.getMinutes(); //분(Minutes) 가져오기 | date라는 객체에서 분을 가져와라
    var $s = newDate.getSeconds(); //초(Seconds) 가져오기 | date라는 객체에서 초를 가져와라
        //날짜도 가져올수있음
    var $year = newDate.getFullYear(); //FullYear는 년도 4자릿수로 나옴
    var $month = newDate.getMonth()+1; //월은 0부터 가져오기 때문에 꼭 +1 해줘야함
    var $date = newDate.getDate(); //일
    var $day = newDate.getDay(); //요일 | 0-6 = 일-토 | 콘솔에는 text로 안나오고 number로 나옴
    var $yoil = null;

    

        switch($day){ //$day가
            case 0 : //0인 경우
                $yoil = "일요일"; //null인 $yoil에 "일요일"이라는 text 넣어라
                break;
            case 1 : //1인 경우
                $yoil = "월요일"; //null인 $yoil에 "월요일"이라는 text 넣어라
                break;
            case 2 : //2인 경우
                $yoil = "화요일"; //null인 $yoil에 "화요일"이라는 text 넣어라
                break;
            case 3 : //3인 경우
                $yoil = "수요일"; //null인 $yoil에 "수요일"이라는 text 넣어라
                break;
            case 4 : //4인 경우
                $yoil = "목요일"; //null인 $yoil에 "목요일"이라는 text 넣어라
                break;
            case 5 : //5인 경우
                $yoil = "금요일"; //null인 $yoil에 "금요일"이라는 text 넣어라
                break;
            case 6 : //6인 경우
                $yoil = "토요일"; //null인 $yoil에 "토요일"이라는 text 넣어라
                break;

        }

    console.log( newDate ); //GMT 표준시
    console.log( "시", $h ); //GMT 표준시
    console.log( "분", $m ); //GMT 표준시
    console.log( "초", $s ); //GMT 표준시
    console.log( "년", $year ); //GMT 표준시
    console.log( "월", $month ); //GMT 표준시
    console.log( "일", $date ); //GMT 표준시
    console.log( "요일", $yoil ); //GMT 표준시

    // 아날로그 시계 눈금 회전하는 프로그래밍
    
    //1초에 한 번씩 읽어들이도록 해야됨
    setTimeout( timerFn,100 );//컴퓨터 켜고 0.1초만에 읽어들여라
    setInterval( timerFn, 1000 ); //1초마다 날짜객체 가져와서 적용
    function timerFn(){
        newDate =  new Date();
        $h = newDate.getHours();
        $m = newDate.getMinutes();
        $s = newDate.getSeconds();

        $(".timer2").css({ transform : "rotate(" + (($h * 30) + ($m * .5)) + "deg)" }); //시 30 + 분 0.5
        $(".timer3").css({ transform : "rotate(" + ($m * 6) + "deg)" }); //분 6
        $(".timer4").css({ transform : "rotate(" + ($s * 6) + "deg)" }); //초 6
    };
    
})(jQuery,document,window);