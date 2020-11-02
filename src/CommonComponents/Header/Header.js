import React, { Component } from 'react'
import { HeaderWrapper,Logotext,NavItems,NavItemsText,NavList } from './Style'

export default class Header extends Component {
    render() {
        return (

            <HeaderWrapper>
                <Logotext>
            <a className="header-logo">SPHENE</a>
            </Logotext>
            
            <nav id="navigation">
            
                    <ul class="menu alt2" id="responsive">
                    <NavItems>
                    <NavItemsText> <li class="dropdown">
                            <NavList href="#" class="current">Home</NavList>

                        </li>
                        </NavItemsText>

                        <li>
                        <NavItemsText><NavList href="#">Portfolio</NavList></NavItemsText>
                        </li>

                        <li>
                        <NavItemsText> <NavList href="#">Pages</NavList></NavItemsText>
                        </li>

                        <li>
                        <NavItemsText> <NavList href="#">Elements</NavList></NavItemsText>
                        </li>

                        <li class="dropdown">
                        <NavItemsText> <NavList href="#">Shop</NavList></NavItemsText>
                        </li>

                        <li>
                        <NavItemsText> <NavList href="#">Blog</NavList></NavItemsText>
                        </li>

                        <li><NavItemsText><NavList href="contact-classic.html">Contact</NavList></NavItemsText></li>

                        <li class="search"><NavItemsText><NavList href="#"><i class="sl sl-icon-magnifier"></i></NavList></NavItemsText></li>

                
                        <li class="cart-icon"><NavItemsText><NavList href="shopping-cart.html"><i class="sl sl-icon-basket"></i><span class="cart-counter">1</span></NavList></NavItemsText></li>
                        </NavItems>
                    </ul>
                    
                </nav>
                
                </HeaderWrapper>
    
        )
    }
}
