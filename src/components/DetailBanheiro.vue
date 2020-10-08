<template>
  <b-container>
    <router-link tag="a" :to="{name: 'banheiros'}"> Voltar para Banheiros</router-link>

    <b-card
          :title="getBanheiroById.titulo"
          tag="article"
          
          class="mb-2"
          :key="getBanheiroById.id"
        >
          <b-card-text>
            Endereço: {{getBanheiroById.local}}
          </b-card-text>
          <b-card-text>
            Horario: {{getBanheiroById.horario}}
          </b-card-text>

    </b-card>
  </b-container>
</template>

<script>

export default {
  name: "DetailBanheiro",
  data: function () {
    return {
      getBanheiroById: {},
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
    };
  },
  created() {
    let id = this.$route.params.id;
    this.getBanheiroById = this.allBanheiros.filter((getBanheiroById) => getBanheiroById.id == id)[0];
  },
};
</script>
