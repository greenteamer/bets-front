import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { styled } from 'reakit';
import { palette as p } from 'styled-tools';
import { get } from 'lodash';

import ProfileMenu from '../ProfileMenu';
import { appConsumerWrapper } from '../../wrappers/AppStore';
import { ROLES } from '../../constants';


class Header extends Component {

  render() {
    const { me } = this.props;
    const role = get(me, ['role'])

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
            {role === ROLES.ADMIN &&
              <HeaderLink to="/admin">
                Admin
              </HeaderLink>
            }
            {role === ROLES.AGENT &&
              <HeaderLink to="/agent">
                Agent
              </HeaderLink>
            }
          </MainMenu>
          <ProfileMenu me={me} />
        </HeaderMenu>
      </HeaderContainer>
    )
  }
}

const HeaderContainer = styled.header`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  background: ${p('slate')};
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