import React from 'react'
import Footer from '../components/footer'
export function FooterContainer(){
    return (
        <>
            <Footer>
                <Footer.Wrapper>
                    <Footer.Row>
                    <Footer.Column>
                        <Footer.Title> About us </Footer.Title>
                        <Footer.Link href="#">Story</Footer.Link>
                        <Footer.Link href="#">Tesimonial</Footer.Link>
                        <Footer.Link href="#">clients</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Services </Footer.Title>
                        <Footer.Link href="#">Marketing </Footer.Link>
                        <Footer.Link href="#">Consulting</Footer.Link>
                        <Footer.Link href="#">Development</Footer.Link>
                        <Footer.Link href="#">SEO</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Locations </Footer.Title>
                        <Footer.Link href="#">India</Footer.Link>
                        <Footer.Link href="#">Uk</Footer.Link>
                        <Footer.Link href="#">USA</Footer.Link>
                        <Footer.Link href="#">Dubai</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Social </Footer.Title>
                        <Footer.Link href="#">Facebook</Footer.Link>
                        <Footer.Link href="#">twitter</Footer.Link>
                        <Footer.Link href="#">Youtube</Footer.Link>
                        <Footer.Link href="#">Linkedin</Footer.Link>
                    </Footer.Column>
                    </Footer.Row>
                </Footer.Wrapper>
            </Footer>  
        </>
    )
}
