<template>
  <b-container>
    <router-link tag="a" :to="{name: 'praias'}"> Voltar para Praias</router-link>

    <b-card
          :title="getPraiaById.titulo"
          tag="article"
          :img-src="getPraiaById.img"
          class="mb-2"
          :key="getPraiaById.id"
        >
          <b-card-text>
            Endereço: {{getPraiaById.local}}
          </b-card-text>
          <b-card-text>
            Descrição: {{getPraiaById.descricao}}
          </b-card-text>
          <b-card-text>
            Como chegar: {{getPraiaById.transporte}}
          </b-card-text>
          <router-link tag="a" :to="{name: 'praias'}"> Voltar para Praias</router-link>
    </b-card>
  </b-container>
</template>

<script>
export default {
  name: "DetailPraia",
  data: function () {
    return {
      getPraiaById: {},
            allPraias: [
      {
        id: "0",
        titulo: "Praia de Ipanema",
        local: "Ipanema, Rio de Janeiro - RJ",
        transporte: "É possível chegar de ônibus, metrô e transporte particular",
        descricao: "A Praia de Ipanema compreende os postos 8, 9 e 10. Praia com faixa de areia extensa frequentada para banhos de sol e para a prática de futebol e vôlei.",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/16/8c/14/06/ipanema.jpg",
      },
      {
        id: "1",
        titulo: "Praia de Copacabana",
        local: "R. Barão de Iguatemi, 331 - Praca da Bandeira, Rio de Janeiro - RJ, 20270-060",
        transporte:"É possível chegar de ônibus, metrô e transporte particular",
        descricao:"Praia famosa de 3,5 km com extensa faixa de areia, calçadão movimentado, quiosques de comida e hotéis.",
        img: "https://i2.wp.com/blog.clubecandeias.com/wp-content/uploads/2016/08/historias-e-curiosidades-da-praia-de-copacabana.jpg?fit=800%2C500&ssl=1",
      },
      {
        id: "2",
        titulo: "Praia do Leblon",
        local: "Av. Delfim Moreira, s/n - Leblon, Rio de Janeiro - RJ, 22790-701",
        transporte:"É possível chegar de ônibus, metrô e transporte particular",
        descricao:"Praia ótima para nadar, linda e também bem eclética, com opções de bares, quiosques e vendedores na areia",
        img: "https://spguia.melhoresdestinos.com.br/system/fotos_local/fotos/47513/show/praia-do-leblon.jpg",
      },
      {
        id: "3",
        titulo: "Prainha",
        local: "Av. Estado da Guanabara, Rio de Janeiro, Estado do Rio de Janeiro 22790-877 Brasil",
        transporte:"Só é possível chegar de transporte particular",
        descricao:"Praia reservada, possui uma bela vista e ótima para surfistas.",
        img: "https://spguia.melhoresdestinos.com.br/system/fotos_local/fotos/45647/show/prainha.jpg",
      },
      {
        id: "4",
        titulo: "Praia do Recreio dos Bandeirantes",
        local: "Av. Lúcio Costa - Barra da Tijuca, Rio de Janeiro - RJ",
        transporte:"É possível chegar de ônibus, metrô e transporte particular",
        descricao:"Praia com uma boa faixa de areia, ideal para levar crianças e sua extensão se junta com a praia da Barra da Tijuca",
        img: "https://diariodorio.com/wp-content/uploads/2019/07/praia-do-recreio-rio-de-janeiro-768x512.jpeg",
      },
      {
        id: "5",
        titulo: "Praia da Barra da Tijuca",
        local: "Av. Lúcio Costa - Barra da Tijuca, Rio de Janeiro - RJ",
        transporte:"É possível chegar de ônibus, metrô e transporte particular",
        descricao:"Boa praia para levar crianças, tem entrada com acessibilidade, sua extensão se junta com a praia do Recreio dos Bandeirantes",
        img: "https://invexo.com.br/blog/wp-content/uploads/2019/10/praia-barra-tijuca.jpg",
      }
]
    }
  },
  created() {
    let id = this.$route.params.id;
    this.getPraiaById = this.allPraias.filter((getPraiaById) => getPraiaById.id == id)[0];
  },
};
</script>