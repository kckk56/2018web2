$(document).ready(function () {
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
    function window_mask(){
        //화면의 높이와 너비를 변수로 만듬.
        var  maskHeight = $(document).height();
        var  maskWidth = $(window).width();
        //가운데에 넣기
        var left = ( $(window).scrollLeft() + ( $(window).width() - $('.window').width()) / 2 );
        var top = ( $(window).scrollTop() + ( $(window).height() - $('.window').height()) / 2 );
        // css 변경
        $('.window').css({'left':left,'top':top,"position":'absolute'});
        //레이어 띄우기
        $(".window").show();
    }
});
