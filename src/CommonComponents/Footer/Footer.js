import React, { Component } from 'react'
import { FooterWrapper,RowWrapper,AboutWrapper,Container,HelpfulllinkList,FooterHeading,Copyrights,
    Listtext,ContactDetails,TextWidget} from './Style'

export default class Footer extends Component {
    render() {
        return (
            <div id="footer" style={{margin: '2rem'}}>
                <FooterWrapper>
        
            <Container>
                <RowWrapper>
                    <AboutWrapper>
                        <FooterHeading>About</FooterHeading>
                        <p>Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies laoreet ullamcorper phasellus semper.</p>
                        <a href="#" class="button social-btn"><i class="fa fa-facebook-official"></i> Like Us on Facebook</a>
                    </AboutWrapper>
        
                    <div class="col-md-4  col-sm-6">
                        <FooterHeading>Helpful Links</FooterHeading>
                        <HelpfulllinkList>
                        <ul class="footer-links">
                            <li><Listtext href="#">About Us</Listtext></li>
                            <li><Listtext href="#">Press Releases</Listtext></li>
                            <li><Listtext href="#">Careers</Listtext></li>
                            <li><Listtext href="#">Services</Listtext></li>
                            <li><Listtext href="#">Projects</Listtext></li>
                        </ul>
        
                        <ul class="footer-links">
                            <li><Listtext href="#">In the News</Listtext></li>
                            <li><Listtext href="#">Our Blog</Listtext></li>
                            <li><Listtext href="#">Testimonials</Listtext></li>
                            <li><Listtext href="#">Contact</Listtext></li>
                        </ul>
                        </HelpfulllinkList>
                    </div>		
        
                    <div class="col-md-3  col-sm-12">
                        <FooterHeading>Contact Us</FooterHeading>
                        <HelpfulllinkList>
                        <TextWidget>
                            <ContactDetails>12345 Little Lonsdale St, Melbourne</ContactDetails> <br></br>
                            Phone: <ContactDetails>(123) 123-456 </ContactDetails><br></br>
                            Fax: <ContactDetails>(123) 123-456</ContactDetails> <br></br>
                            E-Mail:<ContactDetails> office@example.com </ContactDetails><br></br>
                        </TextWidget>
                        </HelpfulllinkList>
                    </div>
        
                </RowWrapper>

                <div class="row">
                    <div class="col-md-12">
                        <Copyrights>©  Copyright 2016 by <a href="#">Sphene</a>. All Rights Reserved.</Copyrights>
                    </div>
                </div>
        
            </Container>
            </FooterWrapper>
        </div>
        )
    }
}












