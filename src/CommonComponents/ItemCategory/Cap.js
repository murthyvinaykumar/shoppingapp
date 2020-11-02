import React, { Component } from 'react'
import { BagShop,BagShopButton,BagShopwrapper } from './Style';
import Shop from '/home/prashant/shoppingapp/src/Assets/Images/shop-demo-category-04.jpg';
import CapButton from '../CarouselConatiner/CategoryButton/CapButton';



export default class ShopDemoCategory extends Component {
    render() {
        return (
            <BagShopwrapper size ={this.props.size}>
                <BagShop src={Shop} alt="Shop-demo-category-04.jpg"/>
                <BagShopButton><CapButton/></BagShopButton>
            </BagShopwrapper>
        )
    }
}