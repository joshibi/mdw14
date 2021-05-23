$(window).load(function(){
    
    // vars
    var l = $('.scene').length,
        s = $(window).scrollTop(),
        h = $(window).height();

    // do at once
    $('.frame').fadeIn(1000);
    
    // init
    function init()
    {
        var s = $(window).scrollTop(),
            h = $(window).height();

        $('.scene').css({'height': h });
        $('.frame').css({'height': Math.ceil(h*l)});
    }

    // inifine scroll
    function infinite()
    {
        var h = $(window).height(), s = $(window).scrollTop();
        if (s === (l-1)*h) {
            $('html, body').animate({scrollTop: 1}, 0);
        } else if (s === 0) {
            $('html, body').animate({scrollTop: (l-1)*h -1}, 0);
        }
    }
    
    // scene pagenation
    function pagenate()
    {
        var s = $(window).scrollTop(), // scroll amount
            h = $(window).height(),    // window height
            c = Math.round((s+h)/h),   // current frame position
            p = Math.round((c/l)*100); // 0-100

        $('.scene').each(function(){
            if ($(this).hasClass('f' + c)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });

        //$('.scene').css({'background-size': p + '%'});
        //console.log(p);
    }

    // mousewheel acceleration
    $('html, body').bind('mousewheel', function(e, delta, deltaX, deltaY) {
        var d = '';
        d = Math.ceil(deltaY * l);
        this.scrollTop -= d;
        e.preventDefault();
    });
    
    $(window).on('resize', init)
        .on('scroll', pagenate)
        .on('scroll', infinite).trigger('resize');
        
});