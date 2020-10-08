<template>
  <b-container>
    <!-- <h3>{{getDelegaciaById.titulo}}</h3> -->
    <router-link tag="a" :to="{name: 'delegacias'}">Voltar para Delegacias</router-link>

    <b-card
          :title="getDelegaciaById.titulo"
          tag="article"
          class="mb-2"
          :key="getDelegaciaById.id"
        >
          <b-card-text>
            Endereço: {{getDelegaciaById.local}}
          </b-card-text>
          <b-card-text>
            Responsável: {{getDelegaciaById.responsavel}}
          </b-card-text>
          <b-card-text>
            Horario: {{getDelegaciaById.horario}}
          </b-card-text>
          <b-card-text>
            Telefone: {{getDelegaciaById.telefone}}
          </b-card-text>

    </b-card>
  </b-container>
</template>

<script>

export default {
  name: "DetailDelegacia",
  data: function () {
    return{
      getDelegaciaById:{},
      allDelegacias: [
      {
        id: "0",
        titulo: "9ª DP - Catete",
        telefone: "(21) 2334-3969",
        local: "R. Pedro Américo, 1 - Catete, Rio de Janeiro - RJ, 22211-200",
        // "maps": "https://goo.gl/maps/GGdewkopRB2dBCxcA",
        img: "https://fastly.4sqi.net/img/general/200x200/45408021_mxlAuua_-jzelOo3UjT1ukAixD0qB0W4Ybgy4ebPImo.jpg",
        horario: "Todos os horários",
        responsavel: "Delegado Fábio Oliveira Barucke"
      },
      {
        id: "1",
        titulo: "18ª DP - Praça da Bandeira",
        telefone: "(21) 2333-7504",
        local: "R. Barão de Iguatemi, 331 - Praca da Bandeira, Rio de Janeiro - RJ, 20270-060",
        // "maps": "https://goo.gl/maps/GGdewkopRB2dBCxcA",
        img: "https://lh3.googleusercontent.com/proxy/X3VRIdlSxsY6XkaXl6Vl3UwD5PgcAWzfb7zVCw24IPumyP0sjy3spYeWXO_CRoBMtlFuVBYC8IRKwSOsvNpYPxk2qx-6rBgNTpE",
        horario: "Atendimento 24 horas",
        responsavel: "Delegada Carina da Silva Bastos"
      },
      {
        id: "2",
        titulo: "12ª DP - Copacabana",
        telefone: "(21) 2332-7914",
        local: "Rua Hilário de Gouvêia, 102 - Copacabana, Rio de Janeiro - RJ, 22040-020",
        // "maps": "https://goo.gl/maps/GGdewkopRB2dBCxcA",
        img: "https://lh3.googleusercontent.com/proxy/PI8_yEAV2gYLgUIb5R1d9YQNCyP8TjpnVln-0tEUaZVTWFEJX3YawrDeFCEKWn-7dkT5RQos1juF32T8TnuNmYeMA59OSCNaYvtHy--0-Rbm5-ho8L22YZ0g02UaTVPSCC5aOQ",
        horario: "Atendimento 24 horas",
        responsavel: "Delegada Valéria de Aragão Sádio"
      },
      {
        id: "3",
        titulo: "16ª DP - Barra da Tijuca",
        telefone: "(21) 2333-6364",
        local: "Praça Des. Araújo Jorge, s/n - Barra da Tijuca, Rio de Janeiro - RJ, 22611-220",
        // "maps": "https://goo.gl/maps/GGdewkopRB2dBCxcA",
        img: "https://lh3.googleusercontent.com/proxy/QGIQ1jX2KrAGP7tlvvunmwJ9HNt9RjVK9-cY_XxJHoKDSL8AZBR2S2GZ3LUN3eMcucmShVlUPbG429gHp_SEOdnXGtxBFkOU4mY",
        horario: "Atendimento 24 horas",
        responsavel: "Delegado Giniton Lages"
      },
      {
        id: "4",
        titulo: "42ª DP - Recreio",
        telefone: "(21) 2332-8039",
        local: "Av. Teotônio Viléla, 31 - Recreio dos Bandeirantes, Rio de Janeiro - RJ, 22795-265",
        // "maps": "https://goo.gl/maps/GGdewkopRB2dBCxcA",
        img: "https://lh3.googleusercontent.com/proxy/6-XIy3Hba4Qr13NaX63FD1itZDvEo-zkYid9e9d6jFUmZWgv9ZiN8SjMNWMq6r1w1hnDXAWlD_3rwH9ieSp9gCE29B1CdpSOkg4",
        horario: "Atendimento 24 horas",
        responsavel: "Delegada Marcia Helena Julião"
      },
      {
        id: "5",
        titulo: "14ª DP - Leblon",
        telefone: "(21) 2332-5273",
        local: "R. Humberto de Campos, 315 - Leblon, Rio de Janeiro - RJ, 22430-110",
        // "maps": "https://goo.gl/maps/GGdewkopRB2dBCxcA",
        img: "https://lh3.googleusercontent.com/proxy/FxEO6D8B-IW4NuhHV-drubglA_Zas4K8gXPi4JD3RhlTesM6kMJiUyHBdNG-wtuOU4W_r3z8eE20FNE925iHiHQHQ_NNNHNcNX4",
        horario: "Atendimento 24 horas",
        responsavel: "Delegado Antenor Lopes Martins Junior"
      }
    ]
    }
   },
  created() {
    let id = this.$route.params.id;
    this.getDelegaciaById = this.allDelegacias.filter((getDelegaciaById) => getDelegaciaById.id == id)[0];
  },
};
</script>
