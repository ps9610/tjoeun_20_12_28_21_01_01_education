;(function($,document,window,undefined){
    var x1 = 0;
    var y1 = 0;
    var r1 = 250;

    var x2 = 0;
    var y2 = 0;
    var r2 = 400;

    var deg = 0;

    
    function radianFn(){
        deg++;
        
        x1 = Math.cos( deg*(Math.PI/180) )*r1+r1;
        y1 = Math.sin( deg*(Math.PI/180) )*r1+r1;
        $(".mini-cir").css({ left:x1, top:y1 });

        x2 = Math.cos( deg*(Math.PI/180) )*r2+r2;
        y2 = Math.sin( deg*(Math.PI/180) )*r2+r2;
        $(".rec").css({ left:x2, top:y2 });
    }

    setTimeout(radianFn,1);
    setInterval(radianFn,10);

})(jQuery,document,window);