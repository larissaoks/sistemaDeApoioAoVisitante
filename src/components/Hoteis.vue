<template>
  <b-container>
    <h1>Hoteis no Rio de Janeiro</h1>

      <div class="cards">
      <b-card
        :title="ht.titulo"
        :sub-title="ht.descricao"
        :img-src="ht.img"
        img-top
        align="center"
        style="width: 300px;"
        class="card"
        :key="ht.id"
        v-for="ht in allHoteis"
      >
      <b-card-text>
        <b-icon variant="warning" icon="star-fill" font-scale="1" v-for="n in ht.avaliacao" :key="n+'fill'"></b-icon>
      </b-card-text>
        <router-link :to="{ name: 'hotel-detail', params: { id: ht.id } }">Saiba mais</router-link>
      </b-card>
      </div>
  </b-container>
</template>

<script>
export default {
  name: "Hoteis",
   data(){
    return{
      allHoteis: [
      {
        id: "0",
        titulo: "Hotel Novotel Rio de Janeiro Parque Olimpico",
        descricao:"Barra da Tijuca",
        telefone: "(21) 3478-4900",
        local: "Av. Embaixador Abelardo Bueno, 1511 - Barra da Tijuca, Rio de Janeiro - RJ, 22775-040",
        img: "https://cf.bstatic.com/images/hotel/max1280x900/107/107131469.jpg",
        avaliacao:4,
        destaques: "Piscina excelente, Banheira de hidromassagem externa, Spa, Localização excelente, Ambiente moderno"
      },
      {
        id: "1",
        titulo: "Sheraton Grand Rio Hotel & Resort",
        descricao:"Leblon",
        telefone: "(21) 2274-1122",
        local: "Av. Niemeyer, 121 - Leblon, Rio de Janeiro - RJ, 22450-220",
        img: "https://cf.bstatic.com/images/hotel/max1280x900/753/75354584.jpg",
        avaliacao:5,
        destaques: "Piscina excelente, Jantar excelente, Comodidades de bem-estar"
      },
      {
        id: "2",
        titulo: "Windsor Flórida Hotel",
        descricao:"Flamengo",
        telefone: "(21) 2195-6800",
        local: "R. Ferreira Viana, 81 - Flamengo, Rio de Janeiro - RJ, 22210-040",
        img: "https://cf.bstatic.com/images/hotel/max1280x900/173/17377493.jpg",
        avaliacao:4,
        destaques: "Banheira de hidromassagem externa, Spa, Café da manhã excelente, Localização excelente, Serviço excelente, Frequentado por viajantes a negócios"
      },
      {
        id: "3",
        titulo: "Américas Copacabana Hotel",
        descricao:"Copacabana",
        telefone: "(21) 3445-9666",
        local: "R. Barata Ribeiro, 550 - Copacabana, Rio de Janeiro - RJ, 22040-001",
        img: "https://cf.bstatic.com/images/hotel/max1280x900/650/65081693.jpg",
        avaliacao:4,
        destaques: "Banheira de hidromassagem externa, Perto de transporte público, Café da manhã excelente, Localização excelente, Ambiente luxuoso, Serviço excelente"
      },
      {
        id: "4",
        titulo: "CDesign Hotel",
        descricao:"Recreio dos Bandeirantes",
        telefone: "(21) 3613-9700",
        local: "Av. Lúcio Costa, 17360 - Recreio dos Bandeirantes, Rio de Janeiro - RJ, 22795-006",
        img: "https://cf.bstatic.com/images/hotel/max1024x768/109/109925742.jpg",
        avaliacao:5,
        destaques: "Café da manhã excelente, Spa, Ambiente elegante"
      },
      {
        id: "5",
        titulo: "Le Relais de Marambaia",
        descricao:"Barra de Guaratiba",
        telefone: "(21) 2394-2544",
        local: "Estr. Roberto Burle Marx, 9346 - Barra Guaratiba, Rio de Janeiro - RJ, 23020-265",
        img: "https://cf.bstatic.com/images/hotel/max1280x900/107/107167516.jpg",
        avaliacao:4,
        destaques: "Banheira de hidromassagem externa, Spa, Café da manhã excelente, Quartos excelente, Frequentado por casais, Serviço excelente"
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