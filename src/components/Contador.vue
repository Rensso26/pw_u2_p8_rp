<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <p>{{ numero }}<sup>2</sup>={{ calcularCuadrado() }}</p>
    <div>
      <button v-on:click="incrementar()">+1</button>
      <button @click="decrementar()">-1</button>
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

<script scoped>
export default {
  /*props: ["title", "value"],*/
  props: {
    title:String,
    value: {
      type:Number,
      required: false,
      default: 100,
      validar(value){
          return value>0;
      }
    },
    p1: Boolean,
    p2: Array,
    p3: Object,
    p4: Function,
    p5: Date,
    p6: Symbol,
  },
  data() {
    return {
      numero: this.value,
      titulo: "Contador",
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
  created(){
    if(this.value > 0){
      console.log('Es correcto')
    }else{
      throw new Error('Error el valor no puede ser menor que cero');
    }
  }
};
</script>

<style>
</style>