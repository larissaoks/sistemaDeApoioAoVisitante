<template>
  <b-container class="home">
    <div class="cards">
      <b-card
        title="Banheiros"
        img-src="https://findicons.com/files/icons/2219/dot_pictograms/256/toilets.png"
        img-height=" 150"
        img-alt="Banheiros"
        img-top
        tag="article"
        style="max-width: 15rem;"
        class="mb-3"
      >
        <b-button
          href="#"
          variant="outline-dark"
          @click="$router.push({ name: 'banheiros' })"
        >Veja Mais</b-button>
      </b-card>

      <b-card
        title="Delegacia"
        img-src="https://static.thenounproject.com/png/363325-200.png"
        img-height=" 150"
        img-alt="Delegacia"
        img-top
        tag="article"
        style="max-width: 15rem;"
        class="mb-3"
      >
        <b-button
          href="#"
          variant="outline-dark"
          @click="$router.push({ name: 'delegacias' })"
        >Veja Mais</b-button>
      </b-card>

      <b-card
        title="Hospitais"
        img-src="https://image.flaticon.com/icons/png/512/33/33777.png"
        img-height=" 150"
        img-alt="Hospitais"
        img-top
        tag="article"
        style="max-width: 15rem;"
        class="mb-3"
      >
        <b-button
          href="#"
          variant="outline-dark"
          @click="$router.push({ name: 'hospitais' })"
        >Veja Mais</b-button>
      </b-card>

      <b-card
        title="Hoteis"
        img-src="https://i.pinimg.com/originals/71/66/22/7166224b95d9b7f229367e9fe1a8ce08.png"
        img-height=" 150"
        img-alt="Hoteis"
        img-top
        tag="article"
        style="max-width: 15rem;"
        class="mb-3"
      >
        <b-button
          href="#"
          variant="outline-dark"
          @click="$router.push({ name: 'hoteis' })"
        >Veja Mais</b-button>
      </b-card>

      <b-card
        title="Eventos"
        img-src="https://icon-library.com/images/events-icon-png/events-icon-png-9.jpg"
        img-alt="Eventos"
        img-height=" 150"
        img-top
        tag="article"
        style="max-width: 15rem;"
        class="mb-3"
      >
        <b-button
          href="#"
          variant="outline-dark"
          @click="$router.push({ name: 'eventos' })"
        >Veja Mais</b-button>
      </b-card>

      <b-card
        title="Pontos Turísticos"
        img-src="https://www.myiconstory.com/wp-content/uploads/2018/06/Rio-de-Janeiro-Christ-The-Redeemer-1-1024x1024.png"
        img-height=" 150"
        img-alt="Pontos turísticos"
        img-top
        tag="article"
        style="max-width: 15rem;"
        class="mb-3"
      >
        <b-button
          href="#"
          variant="outline-dark"
          @click="$router.push({ name: 'turisticos' })"
        >Veja Mais</b-button>
      </b-card>

      <b-card
        title="Praias"
        img-src="https://icon-library.com/images/beach-icon-png/beach-icon-png-1.jpg"
        img-height=" 150"
        img-alt="Praias"
        img-top
        tag="article"
        style="max-width: 15rem;"
        class="mb-3"
      >
        <b-button
          href="#"
          variant="outline-dark"
          @click="$router.push({ name: 'praias' })"
        >Veja Mais</b-button>
      </b-card>

      <b-card
        title="Onde Comer"
        img-src="https://static.thenounproject.com/png/830216-200.png"
        img-height=" 150"
        img-alt="Restaurantes"
        img-top
        tag="article"
        style="max-width: 15rem;"
        class="mb-3"
      >
        <b-button
          href="#"
          variant="outline-dark"
          @click="$router.push({ name: 'restaurantes' })"
        >Veja Mais</b-button>
      </b-card>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "Home",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
  margin-top: 1rem;
}
.cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
}
@media (max-width: 529px) {
  .cards {
    grid-template-columns: 1fr;
    align-items: center;
  }
}
@media (min-width: 530px) and (max-width: 764px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 765px) and (max-width: 990px) {
  .cards {
    grid-template-columns: repeat(3, 1fr);
  }
}


/*  */

</style>
