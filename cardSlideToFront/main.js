$(".card").hover(function(){
    $(".card .card-img").css({
        "transform": "scale(1.02)"
    });
    $(".card .card-descr").css({
       "transform": "translate(-50%, 150%) rotateX(180deg)",
    })
    var cardDescrTranslate = setTimeout(function(){
     $(".card .card-descr").css({
         "transform": "translate(-50%, 30%) rotateX(180deg)",
     });
    },220);
    var cardDescrRotate = setTimeout(function(){
     $(".card .card-descr").css({
         "transform": "translate(-50%, 30%) rotateX(0deg) scale(1.098)",
         "z-index": "2"
     });
    },240);
}, function(){
    $(".card .card-descr").css({
        "transform": "translate(-50%, 150%) rotateX(0deg) scale(1)",
        "z-index": "-1"
    });
    var cardDescrRotate = setTimeout(function(){
        $(".card .card-descr").css({
            "transform": "translate(-50%, 150%) rotateX(180deg)",
        });
    },180);
    var cardDescrRotate = setTimeout(function(){
        $(".card .card-descr").css({
            "transform": "translate(-50%, 30%) rotateX(180deg)",
        });
    },200);
    $(".card .card-img").css({
        "transform": "scale(1)"
    });
});
