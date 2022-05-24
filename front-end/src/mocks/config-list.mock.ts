import { Config } from '../models/config.model';

const CONFIG1: Config = {
    name: 'Classique',
    img: '../../assets/pictures/clas.png',
    separation: false,
    taille: false,
    dalto: false
};

const CONFIG2: Config = {
    name: 'DMLA',
    img: '../../assets/pictures/dmla.png',
    separation: true,
    taille: false,
    dalto: false
};

const CONFIG3: Config = {
    name: 'Presbytie',
    img: '../../assets/pictures/pres.png',
    separation: false,
    taille: true,
    dalto: false
};

const CONFIG4: Config = {
    name: 'Daltonisme',
    img: '../../assets/pictures/dalt.png',
    separation: false,
    taille: false,
    dalto: true
};

const CONFIG5: Config = {
    name: 'DMLA Presbytie',
    img: '../../assets/pictures/dmla+pres.png',
    separation: true,
    taille: true,
    dalto: false
};

const CONFIG6: Config = {
    name: 'DMLA Daltonisme',
    img: '../../assets/pictures/dalt+dmla.png',
    separation: true,
    taille: false,
    dalto: true
};

const CONFIG7: Config = {
    name: 'Presbytie Daltonisme',
    img: '../../assets/pictures/dalt+pres.png',
    separation: false,
    taille: true,
    dalto: true
};

const CONFIG8: Config = {
    name: 'Daltonisme DMLA Presbytie',
    img: '../../assets/pictures/all-handi.png',
    separation: true,
    taille: true,
    dalto: true
};

export const CONFIG_LIST: Config[] = [CONFIG1, CONFIG2, CONFIG3, CONFIG4, CONFIG5, CONFIG6, CONFIG7, CONFIG8];
