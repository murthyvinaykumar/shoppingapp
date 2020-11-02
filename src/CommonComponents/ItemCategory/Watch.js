import React, { Component } from 'react'
import { BagShop,BagShopButton, BagShopwrapper } from './Style';
import Shop from '/home/prashant/shoppingapp/src/Assets/Images/shop-demo-category-05.jpg';
import WatchButton from '../CarouselConatiner/CategoryButton/WatchButton';



export default class ShopDemoCategory extends Component {
    render() {
        return (
            <BagShopwrapper size ={this.props.size}>
                <BagShop src={Shop} alt="Shop-demo-category-05.jpg"/>
                <BagShopButton><WatchButton/></BagShopButton>
            </BagShopwrapper>
        )
    }
}