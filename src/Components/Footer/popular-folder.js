import React, { Component } from 'react';
import FolderItem           from './Components/popular-folder-item.js';
import productMG            from '../../js/product.js';

class PopularFolderGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            folderData: []
        }
    }

    enTry(title, data) {
        var nD      = this.state.folderData;
        var r_D     = [];
        data.map((value, index) => {
            if(index < 4){
                r_D.push(value);
            }
        })

        var folder  = {
            Title: title,
            Products: r_D
        };;
        
        nD.push(folder);
        this.setState({folder: nD});
    }

    getNewProducts(){
        productMG.getNewProduct(data => {
            this.enTry("New products", data);
        })
    }

    getBestSellProducts(){
        productMG.getBessellProducts(data => {
            this.enTry("BESTSELLER", data);
        })
    }

    getSaleProducts(){
        productMG.getSaleProducts(data => {
            this.enTry("ON-Sale", data);
        })
    }

    componentWillMount() {
        this.getNewProducts();        
        this.getBestSellProducts();
        this.getSaleProducts();
    }

    render() {
        return (
            <div className="home-page-popular-folder-group container">
                <div className="show-folder-item">
                    <div className="row"> 
                        {this.state.folderData.map((value, index) => {
                            if(index === 0){
                                return <FolderItem key={index} Data={value} />
                            }else{
                                return <FolderItem key={index} Data={value} />
                            }
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default PopularFolderGroup;