import React, { Component } from 'react'
import { BagShop,BagShopButton,BagShopwrapper } from './Style';
import Shop from '../../Assets/Images/Shop-demo-category-01.jpg';
import Button from '../CarouselConatiner/CategoryButton/Button';



export default class ShopDemoCategory extends Component {
    render() {
        return (
            <BagShopwrapper size ={this.props.size}>
                <BagShop src={Shop} alt="Shop-demo-category-01.jpg" />
                <BagShopButton><Button /></BagShopButton>
            </BagShopwrapper>
        )
    }
}
