const axios = require('axios');
let jugaga = {}
const setJugadores = (jug) =>
{
    jugaga = jug;
}
const prueba = async () =>{
    await axios.get('http://localhost:3001/players/filtros?filtro=fi&orden=id').then((data) => setJugadores(data))
    console.log(jugaga.data[0].full_name);
}
prueba()