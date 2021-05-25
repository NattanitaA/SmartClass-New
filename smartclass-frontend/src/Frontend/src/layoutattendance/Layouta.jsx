import React, { Component } from 'react';
import Sidenav from './sidenava/Sidenava';
import Topnav from './topnava/Topnava';
// import { Container, Row, Col } from 'react-grid-system';
import { FlexContainer, FlexContainingColumn, FlexContainingRow } from '../components/layout/FlexContainer';
import FlexContent from '../components/layout/FlexContent';
import { Row } from 'react-grid-system';
import TopnavFlex from './topnava/TopnavFlexa';
import LayoutContainer from '../components/containers/LayoutContainer';
import Content from './contenta/Contentattendance';
import Paragraph from '../components/typography/Paragraph';
import ContentContainer from './contenta/ContentContainera';
import { Footer } from '../components/footer/footer';
import FooterFlex from './footera/FooterFlexa';
import FooterFlexContent from './footera/FooterFlexContenta';
import TopnavContent from './topnava/TopNavContenta';


export default class Layouta extends Component {
    render() {
        return (
            <LayoutContainer>


                <FlexContainer>
                    <FlexContainingRow>

                        <Sidenav></Sidenav>

                        <FlexContainingColumn container>
                            <FlexContainingRow>
                                <TopnavContent />
                            </FlexContainingRow>
                            <FlexContainingRow>
                                <ContentContainer />
                            </FlexContainingRow>
                            <FlexContainingRow>
                                <FooterFlexContent />
                            </FlexContainingRow>
                        </FlexContainingColumn>
                    </FlexContainingRow>

                </FlexContainer>




            </LayoutContainer >

        )
    }
}
