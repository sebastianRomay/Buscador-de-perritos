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
            $('body').css('background', 'black')
        } else {
            $('body').css('background', 'white')
        }
    })

    ////////////////////////////////////////////
    const url = 'https://dog.ceo/api/breeds/list/all'
       
   
        const start = async () => {
           const response = await fetch(url)
            const datos = await response.json()
   
           // LLAMO OTRA FUNCION
          crearListaPerros(datos.message)
        } 
        start()
   
        const crearListaPerros = (lista) => {

            $('#select').html(`
            
            <option>Elige una raza</option>

            ${Object.keys(lista).map((raza)=> {

                return `<option>${raza}</option>`
                
            }).join('')}
           `
           )
      }
   
      


    })
    

    async function cargar(raza){
        if(raza !== 'Elige una raza'){
        const response = await fetch(`https://dog.ceo/api/breed/${raza}/images`)
        const data = await response.json()
        console.log(data)
        crearCard(data.message)
    } else {
        $('#cards-container').fadeOut(1000, ()=> {
            $('#cards-container').html('')
        })
    }
    }

    function crearCard(imagen){
        $('#cards-container').html('')

        for(let i = 0; i < imagen.length; i++) {
        $('#cards-container').append(`
            <div class="card d-flex justify-content-center card-container" data-aos="fade-up">
                <img src="${imagen[i]}" class=" img-style">
            <div class="card-body d-flex justify-content-center align-items-center gap-3">
                <a href="#" class="btn btn-outline-primary"><i class="bi bi-hand-thumbs-up"></i></a>

                <a href="#" class="btn btn-outline-danger"><i class="bi bi-hand-thumbs-down"></i></a>
            </div>
            </div>`) }
            }

    async function buscarRaza(){

    const response = await fetch('https://dog.ceo/api/breeds/list/all')
    const datos = await response.json()

    Object.keys(datos.message).forEach(
        async (razaDog) => {

        const input = $('#search').val()

        if(razaDog.indexOf(input) != -1){
                const response = await fetch(`https://dog.ceo/api/breed/${input}/images`)
                const data = await response.json()

                console.log(data)
                crearCard(data.message)

            }})}

    $('#button-search').click(buscarRaza)
        
        