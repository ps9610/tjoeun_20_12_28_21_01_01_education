;(function($,document,window,undefined){
    
    //삼각함수 COS() SIN() PI() 응용한 Radian값 구하기
        //삼각함수 이용해서 원 호를 돌아가는 사각형을 만드는 알고리즘
    
    var radX = 0; //left
    var radY = 0; //top
    var r = 250; //반지름
    var deg = 0; //각도 0~  359 (0 = 360 때문에 마지막은 359도)

    function radianFn(){
        deg++;
        radX = Math.cos( deg*(Math.PI/180) )*r+r;
        radY = Math.sin( deg*(Math.PI/180) )*r+r;
        //회전하는 주체를 써주면 됨
        $(".circle .rect").css({ left:radX, top:radY });
    }
    setTimeout(  radianFn,1 );
    setInterval( radianFn,20 );

})(jQuery,document,window);