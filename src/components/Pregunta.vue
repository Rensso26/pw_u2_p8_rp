<template>
  <div class="container">
    <img v-if="imagen" :src="imagen" alt="No se pudo cargar" />
    <div class="container_opaco"></div>
    <div class="pregunta-container">
      <input v-model="pregunta" type="text" placeholder="Hazme una pregunta" />
      <p>Recuerda terminar con un signo de pregunta (?)</p>
      <div v-if="esValida">  
      <h2>{{ pregunta }}</h2>
      <h1>{{ respuesta }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { consultarRespuestaFachada } from "@/clients/YesNoClients.js";
export default {
  data() {
    return {
      pregunta: null,
      respuesta: null,
      imagen: null,
      esValida: false,
    }
  },
  watch: {
    pregunta(value, oldValue) {
      this.esValida = false;

      if (value.includes("?")) {
        this.esValida = true;
        console.log("Valor actual: " + value);
        console.log("Valir antiguo: " + oldValue);
        //Aqui deberia consultar el API
        this.consumirAPI();
      }
    },
  },
  methods: {
    async consumirAPI() {
      this.respuesta = "Pensando.......";
      const resp = await consultarRespuestaFachada();
      console.log(resp);
      console.log(resp.image);
      console.log(resp.test);
      console.log(resp.forced);
      this.respuesta = resp.answer;
      this.imagen = resp.image;
    },
  },
};
</script>

<style scoped>
img,
.container_opaco {
  height: 100vh;
  width: 100vw;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  left: 10px;
  top: 20px;
}

.container_opaco {
  background-color: rgba(0, 0, 0, 0.5);
}

.pregunta-container {
  position: relative;
}

input {
  width: 250px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  margin-top: 100px;
}

input:focus {
  outline: none;
}

p {
  color: white;
  font-size: 25px;
}
h1,
h2 {
  color: white;
}
h2 {
  margin-top: 120px;
}
</style>