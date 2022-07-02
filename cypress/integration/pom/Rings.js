import { URL_ENDPOINT } from '../utils/endpoints/endpoints';

class Ringspage{

    open(region){
        switch (region.toLowerCase()) {
            case 'italy':
                cy.visit(`${URL_ENDPOINT.ITALY}/jewellery/rings/`);

                break;

            case 'france':
                cy.visit(`${URL_ENDPOINT.FRANCE}/jewellery/rings/`);

                break;
        
            default:
                cy.visit(`${URL_ENDPOINT.UNITED_KINGDOM}/jewellery/rings/`);

                break;
        }
    }
}

export default new Ringspage();
