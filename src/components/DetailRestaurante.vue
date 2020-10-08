<template>
  <b-container>
    <router-link tag="a" :to="{name: 'restaurantes'}"> Voltar para Restaurantes</router-link>

    <b-card
          :title="getRestauranteById.titulo"
          tag="article"
          :img-src="getRestauranteById.img"
          class="mb-2"
          :key="getRestauranteById.id"
        >
          <b-card-text>
            {{getRestauranteById.tipo}}
          </b-card-text>
          <b-card-text>
            Descrição: {{getRestauranteById.descricao}}
          </b-card-text>
          <b-card-text>
            Endereço: {{getRestauranteById.local}}
          </b-card-text>
          <b-card-text>
            Horário: {{getRestauranteById.horario}}
          </b-card-text>
          <b-card-text>
            Telefone: {{getRestauranteById.telefone}}
          </b-card-text>
          <router-link tag="a" :to="{name: 'restaurantes'}"> Voltar para Restaurantes</router-link>

    </b-card>
  </b-container>
</template>

<script>

export default {
  name: "DetailRestaurante",
  data: function () {
    return {
      getRestauranteById: {},
      allRestaurantes: [
      {
        id: "0",
        titulo: "L'Atelier du Cuisinier",
        local: "R. Teófilo Otoni, 97 - Centro, Rio de Janeiro - RJ, 20090-070",
        horario: "De segunda à sexta de 12:00 às 14:00",
        tipo: "Restaurante francês",
        descricao: "Bistrô com uma mistura de ingredientes e técnicas das culinárias francesa e brasileira.",
        img: "https://lp-cms-production.imgix.net/2019-06/a89eac712530b3a000973bf622ea2b9b-l-atelier-du-cuisinier.jpg",
        telefone: "(21) 3179-0024"
      },
      {
        id: "1",
        titulo: ".Org Bistrô",
        local: "Av. Olegário Maciel, 175 - loja g - Barra da Tijuca, Rio de Janeiro - RJ, 22621-200",
        horario:"De segunda à sabado de 12:00 às 15:30",
        tipo:"Restaurante Vegetariano",
        descricao:"Pratos orgânicos e vegetarianos modernos em um espaço aconchegante com loja de produtos naturais.",
        img: "https://orgbistro.com.br/novosite/img/foto-restaurante-contato.png",
        telefone:"(21) 2493-1791",
      },
      {
        id: "2",
        titulo: "La Bocca Bar & Trattoria",
        local: "R. André Cavalcanti, 56 - Centro, Lapa - RJ, 20231-050",
        horario:"Segunda e Terça de 11:30 às 16:00 - Quarta até Sábado de 11:30 até 23:00",
        tipo:"Restaurante italiano",
        descricao:"Restaurante italiano com destaque à culinária clássica e bar com drinques variados, clima moderno e cordial.",
        img: "https://bafafa.com.br/images/artigos/la_bocca_fachada_09012020_013552.jpg",
        telefone:"(21) 2146-5639",
      },
      {
        id: "3",
        titulo: "Capim Santo",
        local: "VillageMall - Av. das Américas, 3900 - Avenida das Américas - Barra da Tijuca, Rio de Janeiro - RJ, 22631-000",
        horario:"Segunda a sábado – 10:30 às 23:00 e Domingo - 12:00 às 22:00",
        tipo:"Restaurante Brasileiro",
        descricao:"Culinária gourmet de menu vistoso que reúne ingredientes brasileiros inesperados, em espaço rústico-elegante.",
        img: "https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0R0f000018CXNeEAO/5d127a68e4b02a38866fb0e4.jpg&w=710&h=462",
        telefone:"(21) 3252-2528"
      },
      {
        id: "4",
        titulo: "Lasai Restaurante",
        local: " Rua Conde de Irajá, 191 - Botafogo, Rio de Janeiro - RJ, 22271-020",
        horario:"Terça a sábado – 19:30 às 22:00",
        tipo:"Restaurante brasileiro com estrela Michelin",
        descricao:"Cozinha contemporânea do aclamado Chef Rafa Costa e Silva inspirada no País Basco com ingredientes locais.",
        img: "https://www.fuiserviajante.com/wp-content/uploads/2018/12/restaurante-lasai-rio-de-janeiro-estrela-michelin-2-1024x768.jpg",
        telefone:"(21) 3449-1854"
      },
      {
        id: "5",
        titulo: "Restaurante Marius Degustare",
        local: " Av. Atlântica, 290 - Copacabana, Rio de Janeiro - RJ, 22010-000",
        horario:"Segunda a Domingo – 12:30 às 00:00",
        tipo:"Restaurante de frutos do mar",
        descricao:"Carnes orgânicas e frutos do mar em restaurante decorado com rochas, objetos marítimos e antiguidades.",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/11/ed/6e/26/entrada-do-restaurante.jpg",
        telefone:"(21) 2275-0652"
      }
]
    };
  },
  created() {
    let id = this.$route.params.id;
    this.getRestauranteById = this.allRestaurantes.filter((getRestauranteById) => getRestauranteById.id == id)[0];
  },
};
</script>