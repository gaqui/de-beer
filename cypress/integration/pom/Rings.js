import { URL_ENDPOINT } from '../utils/endpoints/endpoints';
import { HTML_ELEMENT } from '../utils/testids/testids';

class Rings{

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

    selectAnItem(){
        cy.get(HTML_ELEMENT.PRODUCT_VIEW_LIST).find(HTML_ELEMENT.PRODUCT).eq(0).click();
    }

    selectSize(){
        // Adding {force: true as there is a bug in the UI where the pop-element is on top of the other elements}
        // will need to investigate further
        cy.get(HTML_ELEMENT.PRODUCT_INFO).find(`${HTML_ELEMENT.CONTAINER_GRID}`).contains('div','45').click({force: true});
    }

    addToBag(){
        cy.contains('button', 'Add to Bag').click({force:true});
    }
}

export default new Rings();
