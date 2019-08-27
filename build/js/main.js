$('body').on('click' , '.navigation a[data-tab]', (e) => {
    $('.navigation a').removeClass('active');
    $(e.currentTarget).addClass('active');
    $(`.main__item`).removeClass('active');
    $(`.main__item[data-tab="${$(e.currentTarget).attr('data-tab')}"]`).addClass('active');
});

$('.main').css('min-height', $('.main').height() + 66);