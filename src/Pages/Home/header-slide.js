import React, { Component }  from 'react';
import Slider                from 'react-slick';
import $                     from  'jquery';
import HeaderSlideFirstItem  from './Components/header-slide-first-item';
import HeaderSlideSecondItem from './Components/header-slide-second-item';
import HeaderSlideThirdItem  from './Components/header-slide-third-item';


require('./Style/header-slide-style.css');

class HeaderSlide extends Component {
    constructor(props){
        super(props);

        // Auto slidingitem 
        //this.autoSlidingItem();
    }

    autoSlidingItem(){
        setInterval(() => {
            this.handlingSlideItem(1);
        }, 2000);
    }

    handlingSlideItem(choice){
        $(document).ready(() => {
            var SlideItemlist = $(".header-slide-item");
            for(var i = 0; i < SlideItemlist.length; i++) {
                if($(SlideItemlist[i]).hasClass("show")){
                    var indexWill = i + choice;
                    if(indexWill  >= SlideItemlist.length){
                        indexWill = 0;
                    }else if(indexWill < 0){
                        indexWill = SlideItemlist.length - 1;
                    }
                    $(SlideItemlist[i]).removeClass("show");
                    $(SlideItemlist[indexWill]).addClass("show");
                    i = 10;
                }
            }
        })
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        }
        return (
            <div className="home-header-slide">
                <HeaderSlideFirstItem  className="show"/>
                <HeaderSlideSecondItem className=""/>
                <HeaderSlideThirdItem  className=""/>
                <i className="fa fa-angle-right" onClick={() => {this.handlingSlideItem(1)}}/>
                <i className="fa fa-angle-left"  onClick={() => {this.handlingSlideItem(-1)}}/>
            </div>
        );
    }

}

export default HeaderSlide;