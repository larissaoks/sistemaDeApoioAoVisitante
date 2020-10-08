<template>
  <b-container>
    <h1>Hospitais no Rio de Janeiro</h1>

      <div class="cards">
      <b-card
        :title="ho.titulo"
        :sub-title="ho.horario"
        :img-src="ho.img"
        img-top
        align="center"
        style="width: 300px;"
        class="card"
        :key="ho.id"
        v-for="ho in allHospitais"
      >
        <router-link :to="{ name: 'hospital-detail', params: { id: ho.id } }">Saiba mais</router-link>
      </b-card>
      </div>
  </b-container>
</template>

<script>
export default {
  name: "Hospitais",
  data(){
    return{
      allHospitais: [
      {
        id: "0",
        titulo: "Rio Mar",
        descricao: "Hospital Particular",
        telefone: "(21) 3578-2578",
        local: "Av. Cândido Portinari, 555 - Barra da Tijuca, Rio de Janeiro - RJ, 22793-310",
        img: "https://mullerimoveisrj.com.br/wp-content/uploads/2018/11/FOTO-DE-CAPA-52.jpg",
        horario: "Atendimento 24 horas",
      },
      {
        id: "1",
        titulo: "Hospital Samaritano Barra",
        descricao: "Hospital Particular",
        telefone: "(21) 3263-1000",
        local: "Av. Jorge Curi, 550 - Barra da Tijuca, Rio de Janeiro - RJ, 22775-001",
        img: "https://www.barradatijuca.com.br/wp-content/uploads/2014/09/logo-samaritano.jpg",
        horario: "Atendimento 24 horas",
      },
      {
        id: "2",
        titulo: "AmericanCor Hospital",
        descricao: "Hospital Particular",
        telefone: "(21) 3296-2900",
        local: "Rua Adolfo Bergamini, 206 - Engenho de Dentro, Rio de Janeiro - RJ, 20730-000",
        img: "https://americancorhospital.com.br/wp-content/uploads/2018/12/Logo-AmericanCor-1.png",
        horario: "Atendimento 24 horas",
      },
      {
        id: "3",
        titulo: "Hospital Federal Cardoso Fontes",
        descricao: "Hospital Público Federal",
        telefone: "(21) 2425-2255",
        local: "Av. Menezes Cortes, 3245 - Jacarepaguá, Rio de Janeiro - RJ",
        img: "https://folhadaterradigital.com.br/wp-content/uploads/sites/187/2020/05/ffraz_abr_10061916730.jpg",
        horario: "Atendimento 24 horas",
      },
      {
        id: "4",
        titulo: "Hospital Espanhol",
        descricao: "Hospital Particular",
        telefone: "(21) 2158-9000",
        local: "R. Riachuelo, 302 - Centro, Rio de Janeiro - RJ, 20230-013",
        img: "https://www.bahianoticias.com.br/fotos/principal_noticias/245413/IMAGEM_NOTICIA_5.jpg?checksum=1584536023",
        horario: "Atendimento 24 horas",
        
      },
      {
        id: "5",
        titulo: "Hospital São Vicente de Paulo",
        descricao: "Hospital Particular",
        telefone: "(21) 2563-2121",
        local: "R. Dr. Satamini, 333 - Tijuca, Rio de Janeiro - RJ, 20270-233",
        img: "https://saudebusiness.com/wp-content/uploads/2018/11/hospital_beneficente_sao_vicente__de_paulo-831794-1.jpg",
        horario: "Atendimento 24 horas",
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