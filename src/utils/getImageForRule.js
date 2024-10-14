import transportationImg from '../assets/transport.svg';
import groceries from '../assets/groceries.svg';
import trackingrulehero from '../assets/tracking-rule-hero.svg';
import medical from '../assets/medical.svg';

export const getImageForRule = (remark) => {
    switch (remark.toLowerCase()) {
        case 'transportation':
            return transportationImg;
        case 'groceries':
            return groceries;
        case 'medical':
            return medical;
        case 'feeding':
            return groceries;
        default:
            return trackingrulehero;
    }
};
