<template>
  <div class="container">
    <div v-show="mostrar">
      <h1>Estudiante Guardado</h1>
    </div>
    <label for="id_nombre">Nombre:</label>
    <input v-model="nuevoNombre" type="text" id="id_nombre" />
    <label for="id_apellido">Apellido:</label>
    <input v-model="nuevoApellido" type="text" id="id_apellido" />
    <label for="id_edad">Edad:</label>
    <input v-model="nuevaEdad" type="number" id="id_edad" />
    <label for="id_genero">Genero:</label>
    <input v-model="nuevoGenero" type="text" id="id_genero" />
    <label for="id_color">Color Preferido:</label>
    <input v-model="nuevoColorPreferido" type="text" id="id_color" />
    <button v-on:click="agregarEstudiante()">Agregar</button>

    <table >
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Edad</th>
          <th>Genero</th>
          <th>Color Preferido</th>
          <th>Accion</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="{ nombre, apellido, edad, genero, colorPreferido } in lista"
          :key="nombre"
        >
          <td>{{ nombre }}</td>
          <td>{{ apellido }}</td>
          <td>{{ edad }}</td>
          <td>{{ genero }}</td>
          <td>{{ colorPreferido }}</td>
          <td><button>Ver</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nuevoNombre: "Nuevo",
      nuevoApellido: "Apellido",
      nuevaEdad: 0,
      nuevoGenero: "Neutro",
      nuevoColorPreferido: "Celeste",
      lista: [
        {
          nombre: "Rensso",
          apellido: "Parra",
          edad: 24,
          genero: "Masculino",
          colorPreferido: "rojo",
        },
        {
          nombre: "Emil",
          apellido: "Verkade",
          edad: 22,
          genero: "Masculino",
          colorPreferido: "verde",
        },
        {
          nombre: "Joel",
          apellido: "falso",
          edad: 24,
          genero: "Masculino",
          colorPreferido: "azul",
        },
        {
          nombre: "Kevin",
          apellido: "Andrade",
          edad: 21,
          genero: "Masculino",
          colorPreferido: "negro",
        },
        {
          nombre: "Kevin",
          apellido: "NoAndrade",
          edad: 23,
          genero: "Masculino",
          colorPreferido: "blanco",
        },
        {
          nombre: "Jordy",
          apellido: "Chamba",
          edad: 26,
          genero: "Masculino",
          colorPreferido: "naranja",
        },
        {
          nombre: "Brayan",
          apellido: "Sikario",
          edad: 27,
          genero: "Masculino",
          colorPreferido: "amarillo",
        },
      ],
      mostrar: false,
    };
  },
  methods: {
    agregarEstudiante() {
      const nuevo = {
        nombre: this.nuevoNombre,
        apellido: this.nuevoApellido,
        edad: this.nuevaEdad,
        genero: this.nuevoGenero,
        colorPreferido: this.nuevoColorPreferido,
      };
      /*this.lista.unshift(nuevo);*/
      this.lista.push(nuevo);
      this.mostrar=true;
      this.nombre=null;
      setTimeout(()=>{this.mostrar=false;},3000);
    },
  },
};
</script>

<style scoped>
.container {
  background: white;
  border: 2px solid;
  border-radius: 12px;
  max-width: 800px;
  margin: 50px auto;
  padding: 30px;
}
label {
  display: block;
  color: #666;
  text-align: left;
  padding: 12px 3px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
input {
  display: block;
  background-color: #e6637fb9;
  color: rgb(255, 232, 232);
  width: 75%;
  border-radius: 8px;
  margin-bottom: 12px;
  border: 1px solid #ddd;
  padding: 10px 6px;
}

button {
  background: #d36d54a9;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  cursor: pointer;
  width: 100px;
}
table {
  border-collapse: separate;
  border-spacing: 20px;
  background: none;
  color: #b9afa2;
  margin: auto;
}
th {
  padding: 12px 20px;
}
td,
th {
  border-radius: 16px;
  background: #f5eef4;
  color: #b17979;
}
</style>