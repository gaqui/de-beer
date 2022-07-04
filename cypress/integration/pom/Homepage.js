import { HTML_ELEMENT } from '../utils/testids/testids'
import { URL_ENDPOINT } from '../utils/endpoints/endpoints';

class Homepage {
    open(region){
        switch (region.toLowerCase()) {
            case 'italy':
                cy.visit(URL_ENDPOINT.ITALY);
                break;

            case 'france':
                cy.visit(URL_ENDPOINT.FRANCE);
                break;
        
            default:
                cy.visit(URL_ENDPOINT.UNITED_KINGDOM);
                break;
        }
    }

    acceptAllCookies(){
        cy.get(HTML_ELEMENT.ACCEPT_ALL_COOKIES).click();
    }

    closeSubscribeModal(region){
        if(region.toLowerCase() !== 'united kingdom'){
            cy.get(HTML_ELEMENT.CUSTOM_COUNTRY_CONTINUE_BUTTON).click();
        }
        
        cy.get(HTML_ELEMENT.SUBSCRIBE_MODAL).find(HTML_ELEMENT.CLOSE_MODAL).click();
    }

    openRegionModal(){
        cy.get(HTML_ELEMENT.TOGGLE_BAR_CHEVRON).click();
    }

}

export default new Homepage();