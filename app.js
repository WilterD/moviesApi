const cargarPeliculas = async() => {
try{
    
        const respuesta = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=763fbadd05b3a95565f579538a378229&language=es-MX'); 
        console.log('respuesta');
        console.log(respuesta);
        
        if(respuesta.status===200){
            console.log('datos');
            const datos = await respuesta.json();
            console.log(datos);
            let nombrePeliculas = '';
            datos.results.forEach(pelicula => {
                nombrePeliculas += `
                <div class="pelicula">
                <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                <h5 class="titulo"> ${pelicula.title} </h5>
                </div>`;
                
                
            });

            document.getElementById('contenedor').innerHTML = nombrePeliculas;


        }else if(respuesta.status===401){
            console.log("error 401");
        }else if(respuesta.status===404){
            console.log("la pelicula no existe");
        }else{
            console.log("error en el servidor");
        }
    }catch(error){
        console.log(error);	

    }
}

cargarPeliculas();