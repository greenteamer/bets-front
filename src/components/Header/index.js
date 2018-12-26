import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import styled from 'styled-components';

import ProfileMenu from '../ProfileMenu';
import { appConsumerWrapper } from '../../wrappers/AppStore';


class Header extends Component {
  render() {
    const { me } = this.props;
    return (
      <HeaderContainer>
        <HeaderName>
          <Logo>Positive Bets</Logo>
          <Slogan>Make bets is easy as posible</Slogan>
        </HeaderName>
        <HeaderMenu>
          <MainMenu>
            <HeaderLink to="/">
              Home
            </HeaderLink>
            <HeaderLink to="/games">
              Games
            </HeaderLink>
            <HeaderLink to="/admin">
              Admin
            </HeaderLink>
            <HeaderLink to="/agent">
              Agent
            </HeaderLink>
            <HeaderLink to="/schedule">
              Schedule
            </HeaderLink>
          </MainMenu>
          <ProfileMenu me={me} />
        </HeaderMenu>
      </HeaderContainer>
    )
  }
}

const HeaderContainer = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  background: #376f9a;
  color: white;
`;

const HeaderLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 0.5rem;
`;

const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
`;

const MainMenu = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

const HeaderName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 3.5rem;
`;

const Slogan = styled.div`
  display: flex;
  align-self: flex-start;
`;

export default withRouter(appConsumerWrapper(Header))