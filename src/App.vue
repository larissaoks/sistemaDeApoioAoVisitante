<template>
  <b-container>
    <b-card
      overlay
      img-src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/PanoramaRio.jpg/1600px-PanoramaRio.jpg"
      img-alt="Card Image"
      text-variant="black"
      class="app"
      title="Sistema de Apoio ao Visitante"
      sub-title="Seja bem vinde ao Rio de Janeiro"
    ></b-card>

    <b-navbar toggleable type="secondary" variant="light">
      <b-navbar-brand href="#" @click="$router.push({ name: 'home' })">
        <b-icon icon="house-door-fill" variant="dark" scale="2"></b-icon>
      </b-navbar-brand>

      <b-navbar-toggle target="navbar-toggle-collapse">
        <template v-slot:default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#" @click="$router.push({ name: 'banheiros' })">Banheiros</b-nav-item>
          <b-nav-item href="#" @click="$router.push({ name: 'delegacias' })">Delegacias</b-nav-item>
          <b-nav-item href="#" @click="$router.push({ name: 'hospitais' })">Hospitais</b-nav-item>
          <b-nav-item href="#" @click="$router.push({ name: 'hoteis' })">Hoteis</b-nav-item>
          <b-nav-item href="#" @click="$router.push({ name: 'eventos' })">Eventos</b-nav-item>
          <b-nav-item href="#" @click="$router.push({ name: 'turisticos' })">Pontos Turísticos</b-nav-item>
          <b-nav-item href="#" @click="$router.push({ name: 'praias' })">Praias</b-nav-item>
          <b-nav-item href="#" @click="$router.push({ name: 'restaurantes' })">Onde Comer</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
  </b-container>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  name: "App",
};
</script>

<style>
body {
  font-family: "Quicksand", sans-serif;
  align-items: center;
  background-color: #ddf5e4;
}
h1,
h3 {
  text-align: center;
}
#app {
  font-family: "Quicksand", sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.cards {
  justify-items: center;
}
.card {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  background-color: ghostwhit;
}
.app {
  border: 0;
}
</style>
