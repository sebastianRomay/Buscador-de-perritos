async function buscarRaza(){
    const response = await fetch('https://dog.ceo/api/breeds/list/all')
    const datos = await response.json()

        console.log(Object.keys(datos.message))

        Object.keys(datos.message).forEach((razaDog) => {
            const input = $('#search').val()
            if(razaDog.indexOf(input) != -1){
                
            }
        