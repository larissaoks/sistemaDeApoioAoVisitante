<template>
  <b-container>
    <router-link tag="a" :to="{name: 'hospitais'}"> Voltar para hospitais</router-link>

    <b-card
          :title="getHospitalbyId.titulo"
          tag="article"
          class="mb-2"
          :key="getHospitalbyId.id"
          :img-src="getHospitalbyId.img"
        >
          <b-card-text>
            Endereço: {{getHospitalbyId.local}}
          </b-card-text>
          <b-card-text>
            Tipo de hospital: {{getHospitalbyId.descricao}}
          </b-card-text>
           <b-card-text>
            Horário: {{getHospitalbyId.horario}}
          </b-card-text>
          <b-card-text>
            Telefone: {{getHospitalbyId.telefone}}
          </b-card-text>


    </b-card>
  </b-container>
</template>

<script>
export default {
  name: "DetailHospital",
  data(){
    return{
      getHospitalbyId: {},
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
  created() {
    let id = this.$route.params.id;
    this.getHospitalbyId = this.allHospitais.filter((getHospitalbyId) => getHospitalbyId.id == id)[0];
  },
}
</script>

<style scoped>

</style>