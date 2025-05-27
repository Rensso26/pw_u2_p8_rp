<template>
  <div class="container">
    <div class="imagenes-container">
      <div v-for="(imagen, index) in imagenes" :key="index">
        <img :src="imagen" alt="No se pudo cargar la carta" />
      </div>
    </div>
    <div class="cargando" v-show="mostrar">
      <h1>Abriendo sobre ...</h1>
    </div>
    <button v-on:click="consumirAPI()">Abrir Sobre</button>
  </div>
</template>


<script>
import { consultarCartasFachada } from "@/clients/PokemonTCG.js";

export default {
  data() {
    return {
      imagenes: [],
      mostrar:false,
    };
  },
  methods: {
    async consumirAPI() {
      this.mostrar=true;
      const cartas = await consultarCartasFachada();
      const seleccionadas = cartas.sort(() => 0.5 - Math.random()).slice(0, 5);
      this.imagenes = seleccionadas.map(carta => carta.images.large);
      this.mostrar=false;
    }
  }
}
</script>
<style scoped>
.container {
  border: 2px solid;
  border-radius: 5px;
  max-width: 1500px;
  margin: 120px auto;
  padding: 30px;
}

.imagenes-container {
  display: flex;
  left: 80px;
  top: 20px;
}

img {
  width: 220px;
  border-radius: 8px;
  margin: 15px;
  box-shadow: 0 4px 8px;
}

button {
  background: yellow;
  color: #0000ffb1;
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 12px;
  font-size: 20px;
  cursor: pointer;
  width: 200px;
}

.cargando {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 18px;
  margin-bottom: 10px;
}
</style>
