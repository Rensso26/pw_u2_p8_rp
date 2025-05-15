<template>
  <div class="container">
    <h1>Contador</h1>
    <p>{{ numero }}<sup>2</sup>={{ calcularCuadrado() }}</p>
    <p>{{ numero }}<sup>2</sup>={{ calcularCuadrado() }}</p>
    <p>{{ numero }}<sup>2</sup>={{ calcularCuadrado() }}</p>
    <p>{{ numero }}<sup>2</sup>={{ calcularCuadrado() }}</p>
    <p>{{ numero }}<sup>2</sup>={{ calcularCuadrado() }}</p>
    <h1>computed</h1>
    <p>{{ numero }}<sup>2</sup>={{ calCuadrado }}</p>
    <div>
      <button v-on:click="incrementar()">+1</button>
      <button v-on:click="decrementar()">-1</button>
    </div>
    <!--
    <p>{{ texto }}</p>
    <p>{{ activo }}</p>
    <p>{{ usuario }}</p>
    <p>{{ arreglo.edad }}</p>
    <p>{{ numero + 1 }}</p>
    1+1 =
    {{ 1 + 2
    }} Codigo JavaScript Propiedad declarativa
    {{ false ? "Es Correcto" : "Es Joel" }}
    -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      numero: 5,
      texto: "Rensso Parra",
      activo: false,
      usuario: {
        nombre: "Rensso",
        edad: 24,
        genero: "M",
      },
      arreglo: ["Amarillo", "Azul"],
    };
  },
  methods: {
    calcularCuadrado() {
      console.log("Entro al metodo");
      return this.numero ** 2;
    },
    incrementar() {
      this.numero++;
    },
    decrementar() {
      this.numero--;
    },
  },
  computed: {
    calCuadrado() {
      console.log("Entro propiedad computada");
      return this.numero ** 2;
    },
  },
};
</script>

<style>
</style>