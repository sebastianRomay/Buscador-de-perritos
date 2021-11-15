$('document').ready(() => {

    $('#boton-ingresar').click((e) => {
    e.preventDefault()
    // const expReg = /^[ ^]+@[^ ]+\.[a-z]{2,3}$/
    
    const name = $('#nombre').val()
    const email = $('#email').val()

    console.log(email.includes('@'))
    
    if(name !== '' && email.includes('@')){
    

        setTimeout(() => {
            $('#spin-carga').append(`
            <div class="spinner-border" id='spin' role="status">
            <span class="visually-hidden">Loading...</span>
            </div>`), 3000})

            setTimeout(()=>{
                Swal.fire(
                    'Bienvenido',
                    'Te has registrado con exito',
                    'success'
                  )
                    $('#nombre').val('')
                    $('#email').val('')        
            },2000)


        setTimeout(()=> {
            window.location.assign('../paginaInicio.html')
        }, 3000)
        

        localStorage.setItem('NOMBRE', name)
        localStorage.setItem('EMAIL', email)
    }
        else if (name == '' || email == ''){
            setTimeout(() => {
                $('#spin-carga').append(`
                <div class="spinner-border" id='spin' role="status">
                <span class="visually-hidden">Loading...</span>
                </div>`), 3000})
    
                setTimeout(()=>{
                    Swal.fire(
                        'Ingresa todos los datos',
                        'Todos los campos son obligatorios',
                        'error'
                        )
                        $('#spin').remove() 
                },2000)
                
            }
         else if (!email.includes('@')) {
            setTimeout(() => {
                $('#spin-carga').append(`
                <div class="spinner-border" id='spin' role="status">
                <span class="visually-hidden">Loading...</span>
                </div>`), 3000})
    
                setTimeout(()=>{
                    Swal.fire(
                        'Ingresa un email valido',
                        'Error en uno de los campos',
                        'error'
                        )      
                        $('#spin').remove()
                },2000)
            
        }

}
    )

})
