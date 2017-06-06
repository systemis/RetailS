import $ from 'jquery'
class Product {
    updateProduct(bundle){
        console.log(bundle.reviews);
        $.ajax({
            url: '/update-product',
            type: 'POST',
            data: {data: bundle},
            success: data => {
                console.log(data);
            },
            error: err => {
                console.log(`Error when update product ${err}`);
            }
        })
    }

    getProductByName(name, fn){
        $.ajax({
            url: "/get-product-by-name/" + name,
            type: "get",
            success: data => {
                fn(data);
            },
            error: err => {
                console.log(err)
            }
        })
    }
}

module.exports = new Product();