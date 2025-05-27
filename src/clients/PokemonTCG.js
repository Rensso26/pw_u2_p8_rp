// src/clients/PokemonTCG.js
import axios from "axios";

// Función base para consultar cartas
const consultarCartas = async () => {
    const respuesta = await axios.get("https://api.pokemontcg.io/v2/cards?pageSize=250");
    return respuesta.data.data;
}

// Función fachada
export const consultarCartasFachada = async () => {
  return await consultarCartas();
};