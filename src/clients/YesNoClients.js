import axios from "axios";

const consultarRespuesta = async() =>{
    const respuesta = axios.get('https://yesno.wtf/api').then(rpt => rpt.data)
    console.log();
    return respuesta;
}

//funciones fachadas
export const consultarRespuestaFachada = async () =>{
    return await consultarRespuesta();
}