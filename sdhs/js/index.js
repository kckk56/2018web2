$(document).ready(function () {
    var b=$('.board');
    $(b[1]).css({'display':'none'});
    var dt = new Date();
    var year=dt.getFullYear();
    var month= dt.getMonth()+1;
    var day = dt.getDate();
    var length=new Date(year, month, 0).getDate();
    console.log(length);


    /* next */

    $('.calendar_date').text(year+'.0'+month);
    $('.today').text(day);
    if(month<10){
        month='0'+month;
    }
    $('#next').on('click',function () {
        day++;
        length=new Date(year, month, 0).getDate();
        if(day>length) {
            month++;
            if(month>12){
                year++;
                month=1;
            }
            if(month<10){
                month='0'+month;
            }
            day = 1;
        }
        $('.calendar_date').text(year+'.'+month);
        $('.today').text(day);
    });
    /* next */

    /* prev */
        $("#prev").on('click',function () {
            day--;
            length=new Date(year, month-1, 0).getDate();
            if(day<1) {
                month--;
                if(month<1){
                    year--;
                    month = 12;
                }
                if(month<10){
                    month='0'+month;
                }
                day = length;
            }
            $('.calendar_date').text(year+'.'+month);
            $('.today').text(day);
        });

    /* prev */
    $('.runch_img').on('click',function () {

        var left = ( $(window).scrollLeft() + ( $(window).width() - $('.window').width()) / 2 );
        var top = ( $(window).scrollTop() + ( $(window).height() - $('.window').height()) / 2 );

        // css 변경
        $('.window').css({'left':left,'top':top});
        $('.window').fadeIn();
    });
    $(window).resize(function () {
        var left = ( $(window).scrollLeft() + ( $(window).width() - $('.window').width()) / 2 );
        var top = ( $(window).scrollTop() + ( $(window).height() - $('.window').height()) / 2 );
        // css 변경
        $('.window').css({'left':left,'top':top});
    });
    $(".close").on('click',function () {
        $('.window').fadeOut();
    });
    $('.notice_area').on('click',function () {
        $('.notice_area').css("color", "#0076b6");
        $('.home_area').css("color", "black");
        $(b[0]).css("display", "table");
        $(b[1]).css("display", "none");
    });
    $('.home_area').on('click',function () {
        $('.home_area').css("color", "#0076b6");
        $('.notice_area').css("color", "black");
        $(b[0]).css("display", "none");
        $(b[1]).css("display", "table");
    });
});
