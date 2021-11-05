import React, { Component } from 'react';
import { Normalize } from 'styled-normalize';
import PropTypes from 'prop-types';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { themeDefault } from '@constants/css/theme';
import { ConfigProvider } from 'react-vant';
import { themeRootVars } from '@constants/css/vantTheme';
import Div100vh from 'react-div-100vh';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    
    body {
        font-family: Roboto, 'Montserrat', sans-serif;
        overscroll-behavior-y: contain;
        overscroll-behavior: none;
        overflow: hidden;
        &.hidden {
            overflow: hidden;
            max-height: 100vh;
            > div {
              overflow: hidden;
            }
        }
        * {
            box-sizing: border-box;
        }
    }

    body, html{
        overflow:hidden
    }

    input,
    textarea,
    button,
    select,
    div,
    a {
        -webkit-tap-highlight-color: transparent;
        text-decoration: none;
    }
`;

const StyledPage = styled.div`
  background-color: #fff;
  color: ${({ theme }) => theme.fontColor};
`;

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children } = this.props;
    return (
      <ThemeProvider theme={themeDefault}>
        <Normalize />
        <GlobalStyle />
        <ConfigProvider themeVars={themeRootVars}>
          <StyledPage>
            <Div100vh>{children}</Div100vh>
          </StyledPage>
        </ConfigProvider>
      </ThemeProvider>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Layout;
