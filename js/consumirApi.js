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
        <button class="btn btn-outline-primary btn-dark-blue" onclick='darLike()'><i class="bi bi-hand-thumbs-up"></i></button>

        <button class="btn btn-outline-danger btn-dark-red" onclick='disLike()'><i class="bi bi-hand-thumbs-down"></i></button>
        <h4 id='titulo-card'></h4>
    </div>
    </div>`) }
    }

    function darLike() {
        Swal.fire('Te gusto el perrito :)', 'Me caes bien', 'success')
    }
    function disLike() {
        Swal.fire('No te gusto el perrito, malo :( ', ' =( ', 'error')
    }

async function buscarRaza(){

const response = await fetch('https://dog.ceo/api/breeds/list/all')
const datos = await response.json()

Object.keys(datos.message).forEach(
async (razaDog) => {

const input = $('#search').val().toLowerCase()

if(razaDog.indexOf(input) != -1){
        const response = await fetch(`https://dog.ceo/api/breed/${input}/images`)
        const data = await response.json()

        console.log(data)
        crearCard(data.message)

    }})}

$('#button-search').click(buscarRaza)
        