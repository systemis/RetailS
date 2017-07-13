class CartManager {
    constructor(){
        this.tablename = "cartmanager";
        // this.deleteAll();
        this.data = localStorage.getItem(this.tablename);
        if(!this.data) {
            this.data = [];
        }else{
            this.data = JSON.parse(localStorage.getItem(this.tablename));
        }

        console.log(this.data);
    }

    getProductList()
    {
        return this.data;
    }

    newProduct(bundle, fn){
        if(this.data.length > 0){
            // Check product is already exists in data
            var ess = false;
            for(var i = 0; i < this.data.length; i++){
                if(this.data[i].id === bundle.id){
                    this.data[i] = bundle;
                    i == this.data.length;
                    ess = true;
                }

                if(i === this.data.length || i === this.data.length - 1){
                    if(!ess){ this.data.push(bundle); }

                    this.setData();
                    return fn(this.data);
                }
            }

        }else{
            this.data.push(bundle);
            this.setData();
            return fn(this.data);
        }
    }

    deleteProduct(name){
        this.data.map((item, index) => {
            if(item.name === name){
                console.log(index);

                delete this.data[index];
                return this.setData();
            }
        })
    }

    deleteAll(){
        localStorage.setItem(this.tablename, "");
    }

    setData(){
        console.log(this.data);

        localStorage.setItem(this.tablename, JSON.stringify(this.data));
    }
}

export default new CartManager();
