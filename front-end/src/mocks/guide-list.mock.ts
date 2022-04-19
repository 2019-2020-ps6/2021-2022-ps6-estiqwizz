import { Guide } from '../models/guide.model';
import { Step } from '../models/step.model';

const s00: Step = {
    text: 'Cliquer sur le bouton \"Paramètre\" en haut à droite de votre écran',
    link: '../../../assets/pictures/param.png'
};

const s01: Step = {
    text: 'Cliquer sur la boite de sélection à coté du paramètre \"Taille d\'écriture\"',
    link: '../../../assets/pictures/tailleParam.png'
};

const Steps1: Step[] = [s00, s01];

const GUIDE1: Guide = {
    id: '0',
    title: 'Comment modifier la taille d\'écriture ?',
    steps: Steps1
};

export const GUIDE_LIST: Guide[] = [ GUIDE1 ];
