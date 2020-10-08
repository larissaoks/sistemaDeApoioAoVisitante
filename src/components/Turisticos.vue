<template>
  <b-container>
    <h1>Pontos Turísticos no Rio de Janeiro</h1>

      <div class="cards">
      <b-card
        :title="pt.titulo"
        :sub-title="pt.tipo"
        :img-src="pt.img"
        img-top
        align="center"
        style="width: 300px;"
        class="card"
        :key="pt.id"
        v-for="pt in allTuristicos"
      >
        <router-link :to="{ name: 'turistico-detail', params: { id: pt.id } }">Saiba mais</router-link>
      </b-card>
      </div>
  </b-container>
</template>

<script>
export default {
  name: "Turisticos",
  data: function (){
    return{
      allTuristicos: [
      {
        id: "0",
        titulo: "Cristo Redentor",
        local: "Parque Nacional da Tijuca - Alto da Boa Vista, Rio de Janeiro - RJ",
        horario: "Todos os dias de 08:00 às 19:00",
        tipo: "Estátua no Rio de Janeiro",
        descricao: "Uma das 7 maravilhas do mundo moderno. Cristo Redentor é uma estátua art déco que retrata Jesus Cristo, localizada no topo do morro do Corcovado, a 709 metros acima do nível do mar, no Parque Nacional da Tijuca, com vista para a maior parte da cidade do Rio de Janeiro, Brasil.",
        img: "https://cdn.trt.net.tr/images/xlarge/rectangle/f813/6768/64a4/585395b91f27f.jpg?time=1600053220",
        telefone: "(21) 2558-1329"
      },
      {
        id: "1",
        titulo: "Parque Nacional da Tijuca",
        local: "Estr. da Cascatinha, 850 - Alto da Boa Vista, Rio de Janeiro - RJ, 20531-590",
        horario:"Todos os dias de 08:00 às 17:00",
        tipo:"Parque nacional no Rio de Janeiro",
        descricao:"Entrada Gratuita. A Floresta da Tijuca é uma floresta tropical na cidade do Rio de Janeiro, Brasil. Alega-se que é a maior floresta urbana do mundo, cobrindo cerca de 32 km².",
        img: "https://www.tupi.fm/wp-content/uploads/Things-to-do-in-Brazil-Parque-Nacional-da-Tijuca.jpg",
        telefone:"(21) 2491-1700",
      },
      {
        id: "2",
        titulo: "Bondinho Pão de Açúcar",
        local: "Av. Pasteur, 520 - Urca, Rio de Janeiro - RJ, 22290-240",
        horario:"Todos os dias de 08:00 às 17:00",
        tipo:"Estação de teleférico no Rio de Janeiro",
        descricao:"O Bondinho do Pão de Açúcar é um teleférico localizado no bairro da Urca. Liga a Praia Vermelha ao Morro da Urca e ao Morro do Pão de Açúcar. É uma das principais atrações turísticas da cidade",
        img: "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/02/passagens-aereas-rio-de-janeiro-capa2019-01.jpg",
        telefone:"(21) 2546-8433",
      },
      {
        id: "3",
        titulo: "Escadaria Selarón",
        local: "R. Manuel Carneiro - Santa Teresa, Rio de Janeiro - RJ, 20241-120",
        horario:"Aberto 24 horas",
        tipo:"Atração turística no Rio de Janeiro",
        descricao:"A Escadaria Selarón é uma obra arquitetônica localizada entre os bairros de Santa Teresa e Lapa, no Rio de Janeiro, Brasil, decorada pelo artista chileno radicado no Brasil de longa data, Jorge Selarón, que declarou-a como uma homenagem ao povo brasileiro.",
        img: "https://freewalkertours.com/wp-content/uploads/Escalera-Selaron5-1.jpeg",
        telefone:"(21) 3252-2528"
      },
      {
        id: "4",
        titulo: "Parque Lage",
        local: "R. Jardim Botânico, 414 - Jardim Botânico, Rio de Janeiro - RJ, 22461-000",
        horario:"Todos os dias de 08:00 às 17:00",
        tipo:"Parque no Rio de Janeiro",
        descricao:"O Parque Henrique Lage é um parque público da cidade do Rio de Janeiro, localizado aos pés do morro do Corcovado, na rua Jardim Botânico.",
        img: "https://diariodorio.com/wp-content/uploads/2019/05/RIO-parque-lage-une-promenade-de-luxe-2_1-1024x512-1280x720.jpg",
        telefone:"(21) 2334-4088"
      },
      {
        id: "5",
        titulo: "Museu do Amanhã",
        local: "Praça Mauá, 1 - Centro, Rio de Janeiro - RJ, 20081-240",
        horario:"Quinta a Domingo – 10:00 às 17:00",
        tipo:"Museu no Rio de Janeiro",
        descricao:"O Museu do Amanhã é um museu construído no município do Rio de Janeiro, no Brasil. O prédio, projeto do arquiteto espanhol Santiago Calatrava, foi erguido ao lado da Praça Mauá, na zona portuária.",
        img: "https://museudoamanha.org.br/sites/default/files/Visite_1280x800_MdA-BernardLessa__1456509569_189.60.197.72.jpg",
        telefone:"contato@museudoamanha.org.br"
      }
]
    }
  }
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