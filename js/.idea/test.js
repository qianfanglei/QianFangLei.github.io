/**
 * Created by Leo on 2016/8/4.
 */
$(document).ready(function() {

    // ��ʼ���ֲ�ͼ
    var firstImg = $('#slider-img li:first-child');
    var firstNav = $('#slider-nav li:first-child');
    var lastImg = $('#slider-img li:last-child');
    var lastNav = $('#slider-nav li:last-child');
    var i = 0;
    firstImg.css('background-color', firstImg.data('bg'));

    // ��ʼ����ʱ��
    var interval = setInterval(nextSlide, 2000);

    // ���������ť
    $('#slider a.btn').hover(function(ev) {
        clearInterval(interval);
        $('#slider a.btn').css('display', 'inline-block');
    });
    // ��������ͷ
    // $('#slider a.prev').click(function(ev) {
    //     nextSlide('prev');
    // });
    //
    // // ������Ҽ�ͷ
    // $('#slider a.next').click(function(ev) {
    //     nextSlide('next');
    // })

    // �������ͼƬ
    $('#slider-img li>a').hover(function(ev) {
        clearInterval(interval);
        $('#slider a.btn').css('display', 'inline-block');
    }, function(ev) {
        $('#slider a.btn').hide();
        interval = setInterval(nextSlide, 2000);
    });

    // �����������
    $('#slider-nav li').hover(function(ev) {
        clearInterval(interval);
        var itemIndex = $('#slider-nav li').index($(this));
        $('#slider a.btn').css('display', 'inline-block');
        manualSlide(itemIndex);
    });

    // ִ��һ���ֲ������� `dir` ֵ�����ֲ�����
    function nextSlide(dir) {
        var activeImg = $('#slider-img li.active');
        var activeNav = $('#slider-nav li.active');
        if (dir == 'prev') {
            var nextImg = ((activeImg.prev().length > 0) ? activeImg.prev() : lastImg);
            var nextNav = ((activeNav.prev().length > 0) ? activeNav.prev() : lastNav);
        } else {
            var nextImg = ((activeImg.next().length > 0) ? activeImg.next() : firstImg);
            var nextNav = ((activeNav.next().length > 0) ? activeNav.next() : firstNav);
        }
        activeImg.removeClass('active');
        nextImg.addClass('active');
        nextImg.css('background-color', nextImg.data('bg'));
        activeNav.removeClass('active');
        nextNav.addClass('active');
        console.log(i++);
    }

    // ѡ�����ֲ������ݵ�ѡ�˵������ֲ�ͼ
    function manualSlide(itemIndex) {
        var currentImg = $('#slider-img li').get(itemIndex);
        var currentNav = $('#slider-nav li').get(itemIndex);
        $('#slider-nav li.active').removeClass('active');
        $(currentNav).addClass('active');
        $('#slider-img li.active').removeClass('active');
        $(currentImg).addClass('active');
        $(currentImg).css('background-color', $(currentImg).data('bg'));
    }

});
