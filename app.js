const cargarPeliculas = () => {
const respuesta = fetch('https://api.themoviedb.org/3/movie/550?api_key=763fbadd05b3a95565f579538a378229');
console.log(respuesta);
}

cargarPeliculas();
