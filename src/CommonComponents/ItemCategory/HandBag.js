import React, { Component } from 'react'
import { BagShop,BagShopButton,BagShopwrapper } from './Style';
import Shop from '/home/prashant/shoppingapp/src/Assets/Images/shop-demo-category-03.jpg';
import HandBagButton from '../CarouselConatiner/CategoryButton/HandBagButton';



export default class ShopDemoCategory extends Component {
    render() {
        return (
            <BagShopwrapper size ={this.props.size}>
                <BagShop src={Shop} alt="Shop-demo-category-03.jpg"/>
                <BagShopButton><HandBagButton/></BagShopButton>
            </BagShopwrapper>
        )
    }
}
