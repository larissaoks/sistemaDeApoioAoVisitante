<template>
  <b-container>
    <h1>Banheiros no Rio de Janeiro</h1>
    
  <div class="cards">
    <b-card
      :title="ba.titulo"
      :sub-title="ba.descricao"
      :img-src="ba.maps"
      align="center"
      style="width: 300px;"
      class="mb-6"
      :key="ba.id"
      v-for="ba in allBanheiros"
    >
      <router-link :to="{ name: 'banheiro-detail', params: { id: ba.id } }">Detalhar</router-link>
    </b-card>
  </div>
  </b-container>
</template>

<script>

export default {
  name: "Banheiros",
  data(){
    return{
      allBanheiros: [
      {
        id: "0",
        titulo: "Banheiros Barra World",
        descricao: "Banheiro público no shopping Barra World",
        local: "Recreio dos Bandeirantes, Rio de Janeiro - RJ, 22790-701",
        // "maps": "https://goo.gl/maps/GGdewkopRB2dBCxcA",
        horario: "Todos os dias de 09:00 às 23:00"
      },
      {
        id: "1",
        titulo: "Sanitários / Restrooms BASE 29",
        descricao: "Banheiro público na orla de Copacabana",
        local: "Av. Atlântica, QC 43 - Copacabana, Rio de Janeiro - RJ, 22070-001",
        // "maps": "https://goo.gl/maps/GwJZYMpanA7DsJvc9",
        horario: "Todos os dias de 08:00 às 01:00"
      },
      {
        id: "2",
        titulo: "Sanitários / Restrooms BASE 28",
        descricao: "Banheiro público na orla de Copacabana",
        local: "Próximo ao QC 41, Av. Atlântica, S/N - Copacabana, Rio de Janeiro - RJ, 22070-001",
        // "maps": "https://goo.gl/maps/bXDyKXD5UXkdiLPy6",
        horario: "Todos os dias de 08:00 às 01:00"
      },
      {
        id: "3",
        titulo: "Posto 3",
        descricao: "Banheiro público na praia do Flamengo",
        local: "Calçadão da Praia do Flamengo - Flamengo, Rio de Janeiro - RJ",
        // "maps": "https://goo.gl/maps/oKfdh63BJGSPnTBdA",
        horario: "Todos os dias de 08:00 às 01:00"
      },
      {
        id: "4",
        titulo: "Sanitários / Restrooms BASE 16",
        descricao: "Banheiro público na orla de Copacabana",
        local: "Av. Atlântica, S/N - Copacabana, Rio de Janeiro - RJ, 22021-001",
        // "maps": "https://goo.gl/maps/W8VTY6QrQfLDvS8M7",
        horario: "Todos os dias de 08:00 às 00:00"
      },
      {
        id: "5",
        titulo: "Sanitários / Restrooms BASE 14",
        descricao: "Banheiro público na orla de Copacabana",
        local: "Av. Atlântica, S/N - Copacabana, Rio de Janeiro - RJ, 22021-001",
        // "maps": "https://goo.gl/maps/iK6188y8vuhtsQY57",
        horario: "Todos os dias de 08:00 às 00:00"
      }
    ],
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