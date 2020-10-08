import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home';
import Banheiros from './components/Banheiros'
import Delegacias from './components/Delegacias'
import Eventos from './components/Eventos'
import Hospitais from './components/Hospitais'
import Hoteis from './components/Hoteis'
import Praias from './components/Praias'
import Restaurantes from './components/Restaurantes'
import Turisticos from './components/Turisticos'
import DetailBanheiro from './components/DetailBanheiro'
import DetailDelegacia from './components/DetailDelegacia'
import DetailEvento from './components/DetailEvento'
import DetailHospital from './components/DetailHospital'
import DetailHotel from './components/DetailHotel'
import DetailPraia from './components/DetailPraia'
import DetailRestaurante from './components/DetailRestaurante'
import DetailTuristico from './components/DetailTuristico'


Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/banheiros',
            name: 'banheiros',
            component: Banheiros 
        },
        {
            path: '/banheiros/:id',
            name: 'banheiro-detail',
            component: DetailBanheiro 
        },
        {
            path: '/delegacias',
            name: 'delegacias',
            component: Delegacias 
        },
        {
            path: '/delegacias/:id',
            name: 'delegacia-detail',
            component: DetailDelegacia
        },
        {
            path: '/eventos',
            name: 'eventos',
            component: Eventos 
        },
        {
            path: '/eventos/:id',
            name: 'evento-detail',
            component: DetailEvento
        },
        {
            path: '/hospitais',
            name: 'hospitais',
            component: Hospitais
        },
        {
            path: '/hospitais/:id',
            name: 'hospital-detail',
            component: DetailHospital
        },
        {
            path: '/hoteis',
            name: 'hoteis',
            component: Hoteis
        },
        {
            path: '/hoteis/:id',
            name: 'hotel-detail',
            component: DetailHotel
        },
        {
            path: '/praias',
            name: 'praias',
            component: Praias 
        },
        {
            path: '/praias/:id',
            name: 'praia-detail',
            component: DetailPraia
        },
        {
            path: '/restaurantes',
            name: 'restaurantes',
            component: Restaurantes 
        },
        {
            path: '/restaurante/:id',
            name: 'restaurante-detail',
            component: DetailRestaurante
        },
        {
            path: '/turisticos',
            name: 'turisticos',
            component: Turisticos
        },
        {
            path: '/turisticos/:id',
            name: 'turistico-detail',
            component: DetailTuristico
        },
    ]
});
