<template>
  <b-container>
    <h1>Delegacias no Rio de Janeiro</h1>

      <div class="cards">
      <b-card
        :title="de.titulo"
        :sub-title="de.responsavel"
        :img-src="de.img"
        img-top
        align="center"
        style="width: 300px;"
        class="card"
        :key="de.id"
        v-for="de in allDelegacias"
      >
        <router-link :to="{ name: 'delegacia-detail', params: { id: de.id } }">Saiba mais</router-link>
      </b-card>
      </div>
  </b-container>
</template>

<script>

export default {
  name: "Delegacias",
  data(){
    return{
      allDelegacias: [
      {
        id: "0",
        titulo: "9ª DP - Catete",
        telefone: "(21) 2334-3969",
        local: "R. Pedro Américo, 1 - Catete, Rio de Janeiro - RJ, 22211-200",
        // "maps": "https://goo.gl/maps/GGdewkopRB2dBCxcA",
        img: "https://midiainformal.files.wordpress.com/2015/10/2014-764642099-2014103143088_20141031.jpg",
        horario: "Todos os horários",
        responsavel: "Delegado Fábio Oliveira Barucke"
      },
      {
        id: "1",
        titulo: "18ª DP - Praça da Bandeira",
        telefone: "(21) 2333-7504",
        local: "R. Barão de Iguatemi, 331 - Praca da Bandeira, Rio de Janeiro - RJ, 20270-060",
        // "maps": "https://goo.gl/maps/GGdewkopRB2dBCxcA",
        img: "https://odia.ig.com.br/_midias/png/2020/05/05/700x470/1_18_dp-16994873.png",
        horario: "Atendimento 24 horas",
        responsavel: "Delegada Carina da Silva Bastos"
      },
      {
        id: "2",
        titulo: "12ª DP - Copacabana",
        telefone: "(21) 2332-7914",
        local: "Rua Hilário de Gouvêia, 102 - Copacabana, Rio de Janeiro - RJ, 22040-020",
        // "maps": "https://goo.gl/maps/GGdewkopRB2dBCxcA",
        img: "https://www.notibras.com/site/wp-content/uploads/2015/06/12-DP-Copa.jpg",
        horario: "Atendimento 24 horas",
        responsavel: "Delegada Valéria de Aragão Sádio"
      },
      {
        id: "3",
        titulo: "16ª DP - Barra da Tijuca",
        telefone: "(21) 2333-6364",
        local: "Praça Des. Araújo Jorge, s/n - Barra da Tijuca, Rio de Janeiro - RJ, 22611-220",
        // "maps": "https://goo.gl/maps/GGdewkopRB2dBCxcA",
        img: "https://jpimg.com.br/uploads/2020/01/16-dp-google-street-view.png",
        horario: "Atendimento 24 horas",
        responsavel: "Delegado Giniton Lages"
      },
      {
        id: "4",
        titulo: "42ª DP - Recreio",
        telefone: "(21) 2332-8039",
        local: "Av. Teotônio Viléla, 31 - Recreio dos Bandeirantes, Rio de Janeiro - RJ, 22795-265",
        // "maps": "https://goo.gl/maps/GGdewkopRB2dBCxcA",
        img: "https://img.estadao.com.br/resources/jpg/0/8/1438108861080.jpg",
        horario: "Atendimento 24 horas",
        responsavel: "Delegada Marcia Helena Julião"
      },
      {
        id: "5",
        titulo: "14ª DP - Leblon",
        telefone: "(21) 2332-5273",
        local: "R. Humberto de Campos, 315 - Leblon, Rio de Janeiro - RJ, 22430-110",
        // "maps": "https://goo.gl/maps/GGdewkopRB2dBCxcA",
        img: "https://ogimg.infoglobo.com.br/rio/22798233-5f1-a77/FT1086A/652/58233560_RI-Rio-de-Janeiro-RJ-19-05-2016Chefe-da-policia-Civil-quer-usar-presos-para-trabalhar-na.jpg",
        horario: "Atendimento 24 horas",
        responsavel: "Delegado Antenor Lopes Martins Junior"
      }
]
    }
  },
}
</script>

<style scoped>

.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
@media (min-width: 200px) and (max-width: 764px) {
  .cards {
    grid-template-columns: repeat(1, 1fr);
  }
}
@media (min-width: 765px) and (max-width: 990px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>