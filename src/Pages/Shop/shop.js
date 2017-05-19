import React, { Component } from 'react';
import SelectField          from 'material-ui/SelectField';
import MenuItem             from 'material-ui/MenuItem';
import $                    from 'jquery';
import ProductCard          from '../../Components/ProductCard/product-card.js';

var CookieManager    = require('../../js/cookie-manager.js');
var ExampleProdcuct1 = require('../../public/best-seller-image/ex-1.jpg');
var ExampleProdcuct2 = require('../../public/best-seller-image/ex-2.jpg');
var ExampleProdcuct3 = require('../../public/best-seller-image/ex-3.jpg');
var ExampleProdcuct4 = require('../../public/best-seller-image/ex-4.jpg');
require('./Style/shop-page-style.css');

function getUrl(name){
    name           = name + "/";
    var value      = "";
    var href       = location.href;
    var href_array = href.split("");

    console.log(href);

    if(name === "sale"){
        if(href.indexOf(name) >= 0){
            return "sale";
        }
    }else {
        if(href.indexOf(name) >= 0){
            var _value_array = [];
            for(var i = href.indexOf(name) + name.length; i < href_array.length; i++) {
                if(href_array[i] === '/'){
                    value = _value_array.join('');
                    i = href_array.length;
                    
                    return value;
                }else{
                    _value_array.push(href_array[i]);
                }
            }   
        }
    }

    return "";
}

const cookieManager     = new CookieManager("SortKind");
const limitshowproduct  = 1;
var   urlGetProducsData = "";
var   find_value = "shop";
var   url  = "/get-related-products";

// Get category value if client wanted find product with category on this value 
if(getUrl("category")){
    find_value  = getUrl("category");
    url = ("/get-product/" + "category/" + find_value).replace("%20", " ");
};
// Get category value if client wanted find product with tag on this value 
if(getUrl("tag")){
    find_value  = getUrl("tag");
    url = ("/get-product/" + "tag/" + find_value).replace("%20", " ");
};
// Get sale if client wanted the products are saling
if(getUrl("sale")){
    find_value  = "sale";
    url         = ("/get-product/" + "sale/");
};


// get page index 
function setup_get_pageindex(){
    var href        = location.href;
    var href_array  = href.split("");

    // Xoá kí tự cuối cùng nếu bằng '/'
    if(href_array[href_array.length - 1] !== '/') { location.href += '/' };
    if(href_array[href_array.length - 1] === '/') { delete href_array[href_array.length - 1] };
    
    // If href don't have page index, it will append automactily append index is 0 to location href .
    if(href.indexOf(find_value)  === href.length - find_value.length) 
    {
        return location.href += "/0";
    }else if(href.indexOf(find_value + "/") === href.length - (find_value + "/").length)
    {
        return location.href += "0";
    }

    // Get page index if client puted index in href .    
    var indexSelected = [];
    var indexSelected_real = [];
    for(var i = href_array.length - 1; i >= 0; i--){
        if(href_array[i] === "/") {
            // Reverse string .
            for(var j = indexSelected.length - 1; j >= 0; j--) {
                indexSelected_real.push(indexSelected[j]);
                if(j === 0){
                    // Get page index .
                    var pageIndex = parseInt(indexSelected_real.join(" "));
                }
            }

            i = -1;
        }else{
            indexSelected.push(href_array[i])
        }
    }

    //var pageIndex = parseInt(indexSelected_real.join(""));
    if(pageIndex < 0) {
        return setPageIndex_href(0);
    }

    return pageIndex;
}

// Change href 
function setPageIndex_href(index){
    var href = location.href;
    var href_array  = href.split("");
    
    // Xoá kí tự cuối cùng nếu bằng '/'
    if(href_array[href_array.length - 1] === '/') delete href_array[href_array.length - 1];

    for(var i = href_array.length - 1; i >= 0; i--){
        if(href_array[i] === "/") {
            i = -1;
        }else{
            delete href_array[i];
        }
    }

    location.href = href_array.join("") + index.toString();
}

// Get sort kind from cookie 
function getSortKind(){
    if(cookieManager.checkCookie() === false){
        cookieManager.setCookie("0");
        return 0;
    }

    return cookieManager.getCookie();
}




// console.log(getUrl("category"));
const _sortKind         = getSortKind();


// Sort product with sortion kind which is selected .
class SortProduct {
    constructor(self, sortKind){
        this.self     = self;
        this.sortKind = sortKind;
        if (parseInt(sortKind) === 0) { this.sortDefault() };
        if (parseInt(sortKind) === 1) { this.sortWithSell() };
        if (parseInt(sortKind) === 2) { this.sortWithPrice_cheapToexpensive() }; 
        if (parseInt(sortKind) === 3) { this.sortWithPrice_expensiveToCheaper() };
    }

    sortDefault(){
        var array_sort = this.self.state.trendingProductsData;
        for(var i = 0; i < array_sort.length; i++){
            for(var j = 0; j < array_sort.length; j++){
                if(parseInt(Date.parse(array_sort[j].date)) < parseInt(Date.parse(array_sort[i].date))){
                    let  _single  = array_sort[i];
                    array_sort[i] = array_sort[j];
                    array_sort[j] = _single;
                }
            }
        }

        this.self.setState({trendingProductsData: array_sort});
    }

    // Xắp xếp theo giá từ thấp tới cao 
    sortWithPrice_cheapToexpensive(){
        var array_sort = this.self.state.trendingProductsData;
        for(var i = 0; i < array_sort.length; i++){
            for(var j = 0; j < array_sort.length; j++){
                if(parseInt(array_sort[j].price) > parseInt(array_sort[i].price)){
                    let  _single  = array_sort[i];
                    array_sort[i] = array_sort[j];
                    array_sort[j] = _single;
                }
            }
        }

        console.log(array_sort);

        this.self.setState({trendingProductsData: array_sort});
    }

    // Xắp xếp theo giá từ cao tới thấp 
    sortWithPrice_expensiveToCheaper(){
        var array_sort = this.self.state.trendingProductsData;
        for(var i = 0; i < array_sort.length; i++){
            for(var j = 0; j < array_sort.length; j++){
                if(parseInt(array_sort[j].price) < parseInt(array_sort[i].price)){
                    let  _single  = array_sort[i];
                    array_sort[i] = array_sort[j];
                    array_sort[j] = _single;
                }
            }
        }

        this.self.setState({trendingProductsData: array_sort});
    }

    // Xắp xếp theo doanh thu ( từ cao tới thấp )
    sortWithSell(){
        var array_sort = this.self.state.trendingProductsData;
        for(var i = 0; i < array_sort.length; i++){
            for(var j = 0; j < array_sort.length; j++){
                if(parseInt(array_sort[j].sell) < parseInt(array_sort[i].sell)){
                    let  _single  = array_sort[i];
                    array_sort[i] = array_sort[j];
                    array_sort[j] = _single;
                }
            }
        }

        this.self.setState({trendingProductsData: array_sort});
    }
}

class ShopPage extends Component {
    constructor(props){
        super(props);
        console.log("Url to get product data: " + url);
        var pageIndexSelected = setup_get_pageindex();
        this.state = { 
            pageIndex: pageIndexSelected,
            trendingProductsData: [ // Example data to run client 
                // {
                //     image: ExampleProdcuct4,
                //     name:  "Paul Smith 1",
                //     category: "Handsome",
                //     price: "1",
                //     sell: 4
                // },
                // {
                //     image: ExampleProdcuct4,
                //     name:  "Paul Smith 1",
                //     category: "Handsome",
                //     price: "2",
                //     sell: 2
                // },
                // {
                //     image: ExampleProdcuct4,
                //     name:  "Paul Smith 1",
                //     category: "Handsome",
                //     price: "4", 
                //     sell: 3
                // },
                // {
                //     image: ExampleProdcuct4,
                //     name:  "Paul Smith 1",
                //     category: "Handsome",
                //     price: "3",
                //     sell: 1
                // },
            ]
        }

        this.getProduct();       
        this.changePageIndex();
    }

    getProduct(){
        $.ajax({
            url: url, type: 'GET', 
            success: data => {
                if(data){
                    console.log(data);
                    this.setState({trendingProductsData: data});

                    // Xắp xếp sản phẩm theo lựa chọn của người dùng sau khi lấy được dữ liệu từ server .
                    new SortProduct(this, _sortKind);
                }       
            },
            error: err => console.log(err)
        })
    }

    // Sort product when client click 
    handleChange = event => {
        let value = $("#shop-choose-kind-sort").val();
        new SortProduct(this, value);
        cookieManager.setCookie(value);
    }

    changePageIndex(){
        const sefl = this;
         $(document).ready(() => {
            var nbList = $("#phan-trang-group > span.page");
            nbList.map((index, el) => {
                $(el).click(function(){
                    setPageIndex_href(parseInt($(this).attr('id')));
                })
            })
         })
    };

    // Handling when client lick next button or previous button .
    nextAndpreviousPage = (choice) => {
        if(choice == 1){
            if(this.state.pageIndex < parseInt(this.state.trendingProductsData.length / limitshowproduct)){
                setPageIndex_href(this.state.pageIndex + choice);
            }
        }else{
            if(this.state.pageIndex > 0) {
                setPageIndex_href(this.state.pageIndex + choice);
            }
        }
    }

    // Xử lý để hiện thị thanh phân trang .
    renderPhanTrangGroup(){
        const sefl = this;
        // Trường hợp có thằng nào điên mới hiện thị nữa sản phẩm .
        if(limitshowproduct < 1) limitshowproduct = 1;

        // Set page amount by litmitation product to show .
        var pagesAmount = parseInt(this.state.trendingProductsData.length / limitshowproduct);

        // Plus one into page amout if  product amount not equal page
        if(this.state.trendingProductsData.length !== pagesAmount * limitshowproduct) { pagesAmount ++; }

        if(pagesAmount > 1) {
            var nutBam = [];
            for(var i = 0; i < pagesAmount; i++){
                let classSpan = "";
                if(i == sefl.state.pageIndex) { classSpan = "active"; }
                nutBam.push((<span id={i} className={"page "+classSpan}> {i} </span>));
                
                if(i == pagesAmount - 1){
                    let previousBtn = "";
                    if(sefl.state.pageIndex > 0) {
                        previousBtn = <span onClick={() => {this.nextAndpreviousPage(-1)}}> Previous </span>
                    }

                    let nextBtn = "";
                    if(sefl.state.pageIndex < pagesAmount - 1) { 
                        nextBtn = <span onClick={() => {this.nextAndpreviousPage(1)}}> Next </span>
                    }
                    
                    var layout = (
                        <div id="phan-trang-group">
                            {previousBtn}
                            {nutBam.map((value, index) => {
                                return value;
                            })}
                            {nextBtn}
                        </div>
                    )
                    return layout;
                }
            }
        }
    }

    // Danh sách sản phẩm dưới dạng DOM dùng để render .
    productsList(){
        var products_render = [];

        const products_info = this.state.trendingProductsData;
        const page_index    = this.state.pageIndex;

        for(var i = 0; i < products_info.length; i++){
            if(i >= limitshowproduct * page_index){
                if(i < (limitshowproduct * page_index + limitshowproduct)){
                    // console.log(page_index);
                    products_render.push(<ProductCard key={i} Data={products_info[i]} />);
                }
            }
        }

        return products_render;
    }

    render() {
        return (
            <div className="shop-page container">
                <h1> Shop </h1>    
                <div className="select-sort-kind-group row">
                    <select 
                        id="shop-choose-kind-sort" 
                        onChange={() => this.handleChange()}>
                        <option value="0"> Sắp xếp mặc định   </option>
                        <option value="1" >Bán chạy nhất.     </option>
                        <option value="2"> Giá: thấp tới cao  </option>
                        <option value="3"> Giá: cao tới thấp  </option>
                    </select>
                </div>
                <div className="show-best-sellers-product row">
                    {this.productsList().map(value => {return value;})}
                </div>
                    {this.renderPhanTrangGroup()}
            </div>
        );
    }

    componentDidMount() {
        var optionList = document.getElementById("shop-choose-kind-sort").querySelectorAll("option");
        for(var i = 0; i < optionList.length; i++){
            if(i == _sortKind){
                optionList[i].setAttribute("selected", "selected");
                i = optionList.length;
            }
        }
        
        return true;        
    }
}

export default ShopPage;
