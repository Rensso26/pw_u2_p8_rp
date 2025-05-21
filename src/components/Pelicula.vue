<template>
  <div class="container">
        <div v-show="mostrar">
      <h1>Pel&iacute;cula Guardada</h1>
    </div>
    <label for="id_nombre">Nombre:</label>
    <input v-model="nuevoNombre" type="text" id="id_nombre" />
    <label for="id_genero">Genero:</label>
    <input v-model="nuevoGenero" type="text" id="id_genero" />
    <label for="id_director">Director:</label>
    <input v-model="nuevoDirector" type="text" id="id_director" />
    <label for="id_publicacion">A&ntilde;o publicacin&oacute;n;</label>
    <input v-model="nuevoAnoPublicacion" type="number" id="id_publicacion" />
    <label for="id_idioma">Idioma:</label>
    <input v-model="nuevoIdioma" type="text" id="id_idioma" />
    <button v-on:click="agregarPelicula()">Agregar</button>
    
    <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Genero</th>
                <th>Director</th>
                <th>A&ntilde;o publicacin&oacute;n</th>
                <th>Idioma</th>
            </tr>
        </thead>
        <tbody>
            <tr
            v-for="{nombre,genero, director, anoPublicacion, idioma} in lista"
            :key="nombre"
            >
            <td>{{nombre}}</td>
            <td>{{genero}}</td>
            <td>{{director}}</td>
            <td>{{anoPublicacion}}</td>
            <td>{{idioma}}</td>
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
      nuevoNombre: "Nombre",
      nuevoGenero: "Genero",
      nuevoDirector: "Director",
      nuevoAnoPublicacion: 0,
      nuevoIdioma: "Idioma",
      lista: [],
    };
  },
  methods: {
    agregarPelicula() {
      const nuevo = {
        nombre: this.nuevoNombre,
        genero: this.nuevoGenero,
        director: this.nuevoDirector,
        anoPublicacion: this.nuevoAnoPublicacion,
        idioma: this.nuevoIdioma,
      };
      this.lista.push(nuevo);
    this.mostrar=true;
      this.nuevoNombre=null;
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