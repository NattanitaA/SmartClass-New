import React, { Component } from 'react'
import { Footer, FooterFlexDiv } from '../../components/footer/footer'
import Paragraph from '../../components/typography/Paragraph'

export default class FooterFlex extends Component {
    render() {
        return (
            <Footer>
                <Paragraph footer> &copy;KMITL</Paragraph>
                <FooterFlexDiv></FooterFlexDiv>
                <Paragraph footer>Terms</Paragraph>
                <div style={{ flexBasis: "1em" }}></div>
                <Paragraph footer>Privacy Policy</Paragraph>
            </Footer>
        )
    }
}
