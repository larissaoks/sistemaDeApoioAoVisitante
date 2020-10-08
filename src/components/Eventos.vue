<template>
  <b-container>
    <h1>Eventos no Rio de Janeiro</h1>
    <p>Devido à CODIV-19 serviços podem ser cancelados e horários podem ser alterados</p>

    <div class="cards">
      <b-card
        :title="evento.titulo"
        :sub-title="evento.descricao"
        :img-src="evento.img"
        align="center"
        style="width: 300px;"
        class="mb-6"
        :key="evento.id"
        v-for="evento in allEventos"
      >
        <router-link :to="{ name: 'evento-detail', params: { id: evento.id } }">Detalhar</router-link>
      </b-card>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "Eventos",
  data() {
    return {
      allEventos: [
        {
          id: "0",
          titulo: "Alice Júnior",
          descricao: "Cinema drive-in",
          local:
            "Av. Ayrton Senna, 5500 - Recreio dos Bandeirantes, Rio de Janeiro - RJ, 22775-005",
          img:
            "https://ingresso-a.akamaihd.net/img/cinema/cartaz/23470-cartaz.jpg",
          link:
            "https://www.ingresso.com/filme/alice-junior?city=rio-de-janeiro&partnership=home#!#data=20200913",
          horario: "22:30h",
          data: "Domingo, Segunda e Quarta",
        },
        {
          id: "1",
          titulo: "Nando Reis - Esse amor sem preconceito",
          descricao: "Show de música",
          local:
            "Vivo Rio - Av. Infante Dom Henrique, 85 - Parque do Flamengo, Rio de Janeiro - RJ",
          img:
            "https://upload.wikimedia.org/wikipedia/commons/d/d3/Nando_Reis_2014.jpg",
          link:
            "https://www.eventim.com.br/event/nando-reis-esse-amor-sem-preconceito-vivo-rio-12725575/",
          horario: "22:00h",
          data: "Sexta-feira, 06/11/2020",
        },
        {
          id: "2",
          titulo: "Happy Holi Rio de Janeiro - Tour 2020",
          descricao: "Festival das cores",
          local:
            "Riocentro - Av. Salvador Allende, 6555 - Barra da Tijuca, Rio de Janeiro - RJ",
          img:
            "https://pbs.twimg.com/profile_images/585180821797138432/DBhVZq0F_400x400.png",
          link:
            "https://www.bilheteriadigital.com/happy-holi-edicao-rio-de-janeiro-2021-02-de-maio",
          horario: "12:00h",
          data: "À definir",
        },
        {
          id: "3",
          titulo: "Rock 80 Festival",
          descricao: "Festival de Rock",
          local:
            "Estr. do Gabinal, 313 - Freguesia de Jacarepaguá, Rio de Janeiro - RJ",
          img:
            "https://scontent.fsdu7-1.fna.fbcdn.net/v/t1.0-9/28277436_557819467907839_7281947079654071117_n.jpg?_nc_cat=101&_nc_sid=85a577&_nc_ohc=q8UYeQE697wAX8elAIc&_nc_ht=scontent.fsdu7-1.fna&oh=0c87995cd919fe48f5646e8fd89ec97f&oe=5F839561",
          link:
            "https://allevents.in/rio%20de%20janeiro/rock-80-festival-gr%C3%A1tis-rio-office-and-mall-jacarepagu%C3%A1/200019463202712",
          horario: "Sexta - 17:00h, Sáb e Dom - 16:00h",
          data: "06/11/2020 até 08/11/2020",
        },
        {
          id: "4",
          titulo: "Ana Carolina",
          descricao: "Show de música",
          local:
            "Vivo Rio - Av. Infante Dom Henrique, 85 - Parque do Flamengo, Rio de Janeiro - RJ",
          img:
            "https://www.eventim.com.br/obj/media/BR-eventim/teaser/222x222/2016/ingressos-anacarolinavivorio-profile.jpg",
          link:
            "https://www.eventim.com.br/event/ana-carolina-vivo-rio-12486736/",
          horario: "22:00h",
          data: "Sexta-feira, 30/10/2020",
        },
        {
          id: "5",
          titulo: "Orquestra Petrobras Sinfônica - Coldplay",
          descricao: "Show de Orquestra",
          local:
            "Jeunesse Arena - Av. Embaixador Abelardo Bueno, 3401 - Barra da Tijuca, Rio de Janeiro - RJ, 22775-040",
          img:
            "https://www.eventim.com.br/obj/media/BR-eventim/teaser/222x222/2016/opescoldplay-2020-profile.png",
          link: "https://www.eventim.com.br/artist/opes-coldplay/",
          horario: "20:00h",
          data: "Sábado, 28/11/2020",
        },
      ],
    };
  },
};
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