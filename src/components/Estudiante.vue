<template>
  <div class="Container">
    <label for="id_nombre">Nombre:</label>
    <input  v-model="nuevoNombre" type="text" id="id_nombre"/>
    <label for="id_apellido">Apellido:</label>
    <input  v-model="nuevoApellido" type="text" id="id_apellido"/>
    <button v-on:click="agregarEstudiante()">Agregar Estudiante</button>
    {{nuevoNombre +" "+ nuevoApellido}}
    <ul>
      <li v-for="{ nombre, apellido } in lista" :key="nombre">
        Nombre: {{ nombre }} - Apellido: {{ apellido }}
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
      lista: [
        { nombre: "Rensso", apellido: "Parra" },
        { nombre: "Emil", apellido: "Verkade" },
        { nombre: "Joel", apellido: "falso" },
        { nombre: "Kevin", apellido: "Andrade" },
        { nombre: "Kevin", apellido: "NoAndrade" },
        { nombre: "Jordy", apellido: "Chamba" },
        { nombre: "Brayan", apellido: "Sikario" },
      ],
    };
  },
  methods:{
    agregarEstudiante(){
        const nuevo = {
            nombre: this.nuevoNombre,
            apellido: this.nuevoApellido,
        }
        /*this.lista.unshift(nuevo);*/
        this.lista.push(nuevo);
    },
  },
};
</script>

<style>
</style>