<template>
  <div>
    <Contador title="Titulo 1" :value="1"/>
    <Contador title="Titulo 2" />
    <Contador title="Titulo 3" :value="metodo1()"/>
  </div>
</template>

<script>
import Contador from "@/components/Contador.vue";
export default {
  components: {
    Contador,
  },
  data() {
    return {
      numero: 20,
    }
  },
  methods: {
    metodo1(){
      return 20;
    }
  }
};
</script>

<style>
</style>