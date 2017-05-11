import React, { Component } from 'react';
import Editor               from './editor';
import $                    from 'jquery';
import categorys            from '../../../config/categorys.js';
//import productM           from '../js/product-manager.js';

class AddNewProductScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {editor_value: ""};
        this.onUpdateValue = this.onUpdateValue.bind(this);
    }

    // Update value from Editor 
    onUpdateValue(editor_value){
        this.setState({editor_value: editor_value});
    }

    event_AddNewProduct(){
        $("#form-add-new-product").submit(function(e) {
            console.log($(this).serializeArray());
            var p_name               = $(this).serializeArray()[0].value;
            var p_imagename          = $(this).serializeArray()[1].value;
            var p_category           = $(this).serializeArray()[2].value;
            var p_description        = $(this).serializeArray()[3].value;
            var p_price              = $(this).serializeArray()[4].value;
            
            //var p_height             = $(this).serializeArray()[5].value;
            //var p_weight             = $(this).serializeArray()[6].value;
            //var p_material           = $(this).serializeArray()[7].value;
            //var p_status             = $(this).serializeArray()[8].value;

            console.log(p_name);
            console.log(p_category);
            console.log(p_imagename);
            console.log(p_description);
            console.log(p_price);

            console.log($(this).serializeArray());
            if(p_name && p_imagename && p_category && p_description && p_price) {
                return true;
            }

            return false;
        })
    }

    render() {
        return (
            <div id="user-dashboard-add-new-product-screen">
                <form 
                    action="/add-new-product"
                    method="POST"
                    id="form-add-new-product"
                    encType="multipart/form-data"
                    >

                    <div className="name-group add-group">
                        <p className="title-group-in-form">Product name: </p>
                        <input 
                            type="text" 
                            name="name" 
                            id="add-new-product-name" />
                    </div> 
                    <div className="image-group add-group">
                        <span className="title-group-in-form">Product image: </span>
                        <input 
                            type="file" 
                            name="imagevalue" 
                            id="add-new-product-image" />
                        <input 
                            type="hidden"
                            name="image" 
                            id="add-new-product-image-name"/>
                    </div>
                     <div className="category-group add-group">
                        <span className="title-group-in-form">Product category: </span>
                        <select 
                            name="category" 
                            id="add-new-product-category">
                            {categorys.map((category, index) => {
                                return <option key={index} value={category}> {category} </option>
                            })}
                        </select>
                    </div>
                    <div className="description-group add-group">
                        <p className="title-group-in-form">Product description: </p>
                       <Editor onUpdateValue={this.onUpdateValue} />
                       <input type="hidden"  name="description" value={this.state.editor_value} />
                    </div>
                    <div className="price-group add-group">
                        <span 
                            className="title-group-in-form">
                            Product price: 
                            </span>
                        <input 
                            type="number" 
                            name="price" 
                            id="add-new-product-price" />
                    </div>
                    <div className="weight-group add-group">
                        <p className="title-group-in-form">Product weight*</p>
                        <input 
                            type="text" 
                            name="weight" 
                            id="add-new-product-weight"/>
                    </div>
                    <div className="height-group add-group">
                        <p className="title-group-in-form">Product height*</p>
                        <input 
                            type="text" 
                            name="height" 
                            id="add-new-product-height"/>
                    </div>
                    <div className="material-group add-group">
                        <p className="title-group-in-form">Product material*</p>
                        <input 
                            type="text" 
                            name="material" 
                            id="add-new-product-material"/>
                    </div>
                    <div className="height-status add-group">
                        <p className="title-group-in-form">Product status*</p>
                        <input 
                            type="text" 
                            name="status" 
                            id="add-new-product-status"
                            />
                    </div>
                    <input 
                            type="submit" 
                            value="Add new product" 
                            className="btn right red h-blue none-radius"/>
                    <input 
                        type="button" 
                        onClick={() => location.href = location.href.replace("/new-product", "")}
                        value="Cancel" 
                        className="btn right purple h-blue none-radius"
                        />
                </form>
            </div>
        );
    }

    componentDidMount() {
        $(document).ready(() => {
            this.event_AddNewProduct();

            // Show file name when add and edit product in hidden input 
            $("#add-new-product-image").change(function(){
                var originalFilename = $(this).val().replace(" ", "");;
                var realFilename     = "";
                for(var i = 0; i < originalFilename.split('').length; i++){
                    if(originalFilename.split('')[i] === "\\"){
                        realFilename = originalFilename.substr(i + 1);
                    }
                }

                $("#add-new-product-image-name").val(realFilename);
            })
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextState);
        return true;
    }
}

export default AddNewProductScreen;