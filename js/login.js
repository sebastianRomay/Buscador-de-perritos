$('document').ready(() => {

    $('#boton-ingresar').click((e) => {
    e.preventDefault()
    // const expReg = /^[ ^]+@[^ ]+\.[a-z]{2,3}$/
    
    const name = $('#nombre').val()
    const email = $('#email').val()

    console.log(email.includes('@'))
    
    if(name !== '' && email.includes('@')){
    Swal.fire(
        'Bienvenido',
        'Te has registrado con exito',
        'success'
      )
        $('#nombre').val('')
        $('#email').val('')

        setTimeout(()=> {
            window.location.assign('../inicio.html')
        }, 3000)
    }
        else if (name == '' || email == ''){
            Swal.fire(
                'Ingresa todos los datos',
                'Todos los campos son obligatorios',
                'error'
                )
            }
         else if (!email.includes('@')) {
            Swal.fire(
                'Ingresa un email valido',
                'Error en uno de los campos',
                'error'
              )
        }

}
    )

})
