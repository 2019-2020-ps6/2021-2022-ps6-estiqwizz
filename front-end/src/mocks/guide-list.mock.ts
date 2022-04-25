import { Guide } from '../models/guide.model';
import { Step } from '../models/step.model';

const s00: Step = {
    text: 'Cliquer sur le bouton \"Paramètre\" en haut à droite de votre écran.',
    link: '../../../assets/pictures/param.png'
};

const s01: Step = {
    text: 'Cliquer sur la boite de sélection à coté du paramètre \"Taille d\'écriture\".',
    link: '../../../assets/pictures/tailleParam.png'
};

const s10: Step = {
    text: 'Cliquer sur ce bouton en haut à gauche de l\'écran.',
    link: '../../../assets/pictures/home.png'
};

const s11: Step = {
    text: 'Cliquer sur le bouton au centre de l\'écran \"JOUER\".',
    link: '../../../assets/pictures/jouer.png'
};

const s12: Step = {
    text: 'Cliquer sur un des quiz présent sur la page. Par exemple ici \"Culture gaming\".',
    link: '../../../assets/pictures/quiz_exemple.png'
};

const Steps1: Step[] = [s00, s01];
const Steps2: Step[] = [s10, s11, s12];
const Steps3: Step[] = [];
const Steps4: Step[] = [];
const Steps5: Step[] = [];
const Steps6: Step[] = [];

const GUIDE1: Guide = {
    id: '0',
    title: 'Comment modifier la taille d\'écriture ?',
    steps: Steps1
};

const GUIDE2: Guide = {
    id: '1',
    title: 'Comment jouer à un quiz ?',
    steps: Steps2
};

const GUIDE3: Guide = {
    id: '2',
    title: 'Comment créer son quiz ?',
    steps: Steps3
};

const GUIDE4: Guide = {
    id: '3',
    title: 'Et si je suis daltonien ?',
    steps: Steps4
};

const GUIDE5: Guide = {
    id: '4',
    title: 'Comment enlever les images ?',
    steps: Steps5
};

const GUIDE6: Guide = {
    id: '5',
    title: 'Comment espacer les éléments ?',
    steps: Steps6
};

export const GUIDE_LIST: Guide[] = [ GUIDE1, GUIDE2, GUIDE3, GUIDE4, GUIDE5, GUIDE6,  ];
