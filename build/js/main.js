$('body').on('click' , '.navigation a[data-tab]', (e) => {
    $('.navigation a').removeClass('active');
    $(e.currentTarget).addClass('active');
    $(`.main__item`).removeClass('active');
    $(`.main__item[data-tab="${$(e.currentTarget).attr('data-tab')}"]`).addClass('active');
});

$('body').on('click' , '.form__nav a[data-form]', (e) => {
    $('.form__nav a').removeClass('active');
    $(e.currentTarget).addClass('active');
    $(`.form__body`).removeClass('active');
    $(`.form__body[data-form="${$(e.currentTarget).attr('data-form')}"]`).addClass('active');
});

if ($(window).width() >= 768) {
    $('.main').css('min-height', $('.main').height() + 66);
}

$('body').on('click', '.navigation__btn', () => {
    $('.form__body.active input:first').focus();
});

$('body').on('submit', 'form', (e) => {
    e.preventDefault();

    var form = null;
    var fd = null;

    if ($(e.currentTarget).hasClass('uri')) {
        form = document.querySelector('form.uri');
        fd = new FormData(form);

        if ($('.uri input[name="organization"]').val() !== '' && $('.uri input[name="address"]').val() !== '' && $('.uri input[name="inn"]').val() !== '' && $('.uri input[name="phone"]').val() !== '' && $('.uri input[name="email"]').val() !== '') {
            $.ajax({
                type: "POST",
                url: "../form.php",
                contentType: false,
                processData: false,
                data: fd,
                success: () => {
                    $('.modal').removeClass('active');
                    $('.modals').addClass('active');
                    $('.modal.success').addClass('active');
                    $('input').val('');
                    $('textarea').val('');
                }
            });
        } else {
            if ($('.uri input[name="organization"]').val() === '') {
                $('.uri input[name="organization"]').addClass('error');
            }

            if ($('.uri input[name="address"]').val() === '') {
                $('.uri input[name="address"]').addClass('error');
            }

            if ($('.uri input[name="inn"]').val() === '') {
                $('.uri input[name="inn"]').addClass('error');
            }

            if ($('.uri input[name="phone"]').val() === '') {
                $('.uri input[name="phone"]').addClass('error');
            }

            if ($('.uri input[name="email"]').val() === '') {
                $('.uri input[name="email"]').addClass('error');
            }
        }
    } else if ($(e.currentTarget).hasClass('phy')) {
        form = document.querySelector('form.phy');
        fd = new FormData(form);

        if ($('.phy input[name="fio"]').val() !== '' && $('.phy input[name="address"]').val() !== '' && $('.phy input[name="phone"]').val() !== '' && $('.phy input[name="email"]').val() !== '') {
            $.ajax({
                type: "POST",
                url: "../form.php",
                contentType: false,
                processData: false,
                data: fd,
                success: () => {
                    $('.modal').removeClass('active');
                    $('.modals').addClass('active');
                    $('.modal.success').addClass('active');
                    $('input').val('');
                    $('textarea').val('');
                }					
            });
        } else {
            if ($('.phy input[name="fio"]').val() === '') {
                $('.phy input[name="fio"]').addClass('error');
            }

            if ($('.phy input[name="address"]').val() === '') {
                $('.phy input[name="address"]').addClass('error');
            }

            if ($('.phy input[name="phone"]').val() === '') {
                $('.phy input[name="phone"]').addClass('error');
            }

            if ($('.phy input[name="email"]').val() === '') {
                $('.phy input[name="email"]').addClass('error');
            }
        }
    } else {
        $.ajax({
            type: "POST",
            url: "../form.php",
            data: $(e.currentTarget).serialize(),
            success: () => {
                $('.modal').removeClass('active');
                $('.modals').addClass('active');
                $('.modal.success').addClass('active');
                $('input').val('');
                $('textarea').val('');
            }
        });
    }
});

$('body').on('focus', 'input', (e) => {
    $(e.currentTarget).removeClass('error');
});

$('input[name="phone"]').mask('+0 (000) 000-00-00', {placeholder: 'Телефон'});

$('body').on('click', '.modal .close', (e) => {
    $('.modals').removeClass('active');
    $('.modal').removeClass('active');
});