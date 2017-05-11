import $ from 'jquery';
class ProductManager {
    constructor() {

    }

    event_AddNewProduct(e){
        var p_name           = $(this).serializeArray()[0].value;
        var p_image          = $(this).serializeArray()[1].value;
        var p_category       = $(this).serializeArray()[2].value;
        var p_description    = $(this).serializeArray()[3].value;
        var p_price          = $(this).serializeArray()[4].value;
        console.log(p_name);
        if(p_name && p_image && p_category && p_description && p_price) {
            return true;
        }

        return false;
    }
}

module.exports = new ProductManager();