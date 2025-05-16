<template>
  <div class="Container">
    <label for="id_nombre">Nombre:</label>
    <input  v-model="nuevoNombre" type="text" id="id_nombre"/>
    <label for="id_apellido">Apellido:</label>
    <input  v-model="nuevoApellido" type="text" id="id_apellido"/>
    <label for="id_edad">Edad:</label>
    <input  v-model="nuevaEdad" type="number" id="id_edad"/>
    <label for="id_genero">Genero:</label>
    <input  v-model="nuevoGenero" type="text" id="id_genero"/>
    <label for="id_color">Color Preferido:</label>
    <input  v-model="nuevoColorPreferido" type="text" id="id_color"/>
    <button v-on:click="agregarEstudiante()">Agregar Estudiante</button>
    {{nuevoNombre +" "+ nuevoApellido + " " + nuevaEdad + " " + nuevoGenero + " " + nuevoColorPreferido}}
    <ul>
      <li v-for="{ nombre, apellido, edad, genero, colorPreferido } in lista" :key="nombre">
        Nombre: {{ nombre }} - Apellido: {{ apellido }} - {{edad}} - {{genero}} - {{colorPreferido}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
        nuevoNombre: "Nuevo",
        nuevoApellido: "Apellido",
        nuevaEdad:0,
        nuevoGenero: "Neutro",
        nuevoColorPreferido: "Celeste",
      lista: [
        { nombre: "Rensso", apellido: "Parra", edad: 24, genero: "Masculino", colorPreferido: "rojo"},
        { nombre: "Emil", apellido: "Verkade", edad: 22, genero: "Masculino", colorPreferido: "verde" },
        { nombre: "Joel", apellido: "falso", edad: 24, genero: "Masculino", colorPreferido: "azul" },
        { nombre: "Kevin", apellido: "Andrade", edad: 21, genero: "Masculino", colorPreferido: "negro" },
        { nombre: "Kevin", apellido: "NoAndrade", edad: 23, genero: "Masculino", colorPreferido: "blanco" },
        { nombre: "Jordy", apellido: "Chamba", edad: 26, genero: "Masculino", colorPreferido: "naranja" },
        { nombre: "Brayan", apellido: "Sikario", edad: 27, genero: "Masculino", colorPreferido: "amarillo" },
      ],
    };
  },
  methods:{
    agregarEstudiante(){
        const nuevo = {
            nombre: this.nuevoNombre,
            apellido: this.nuevoApellido,
            edad: this.nuevaEdad,
            genero: this.nuevoGenero,
            colorPreferido: this.nuevoColorPreferido
        }
        /*this.lista.unshift(nuevo);*/
        this.lista.push(nuevo);
    },
  },
};
</script>

<style>
</style>