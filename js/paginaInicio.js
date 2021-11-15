$('document').ready(()=>{

    const nombreUsuario = localStorage.getItem('NOMBRE')
    $('#titulo').html(`¡Bienvenidx ${nombreUsuario}!`)
    $('#titulo').css({
        textAlign: 'center',
        fontSize: '2rem',
        marginTop: '1rem'
    })
   // MODO NOCTURNO, PARA TRABAJAR.

    $('.checkbox').click(()=> {
        if($('input.checkbox').is(':checked')){

            localStorage.setItem('href', '../css/dark.css')
            $('#logo-dark').removeClass('bi-sun')
            $('#logo-dark').addClass('bi-moon')
            $('.css-change').attr('href',localStorage.getItem('href'))
        } else {
            localStorage.setItem('href', '../css/styleInicio.css')
            $('.css-change').attr('href', localStorage.getItem('href'))
            $('#logo-dark').removeClass('bi-moon')
            $('#logo-dark').addClass('bi-sun')
        }
    })

    if(localStorage.getItem('href') == '../css/dark.css'){
        $('.css-change').attr('href',localStorage.getItem('href'))
        $('.slider').css('background-color', '#333')
        $('#logo-dark').removeClass('bi-sun')
        $('#logo-dark').addClass('bi-moon')
    } else {
        $('.css-change').attr('href', localStorage.getItem('href'))
        $('#logo-dark').removeClass('bi-moon')
            $('#logo-dark').addClass('bi-sun')
    }

    })