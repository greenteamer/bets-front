import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import Cookie from 'js-cookie';
import { graphql } from "react-apollo";
import { GET_ME } from '../../graphql/queries'


class ProfileMenu extends Component {
  render() {
    const { me } = this.props;
    const handleLogout = () => {
      Cookie.remove('token');
      const { data: { refetch } } = this.props;
      refetch();
    }
    if (me) {
      return (
        <ProfileContainer>
          <HeaderElement
            onClick={handleLogout}>
            Logout
          </HeaderElement>
        </ProfileContainer>
      )
    }
    return (
      <ProfileContainer>
        <HeaderLink to="/sign-in">Sing In</HeaderLink>
      </ProfileContainer>
    )
  }
}

const ProfileContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: white;
`;

const HeaderLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  padding: 0.5rem;
`;

const HeaderElement = styled.span`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  padding: 0.5rem;
  &:hover {
    cursor: pointer;
  }
`;

const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 2.5rem;
`;

const Slogan = styled.div`
  display: flex;
  align-self: flex-start;
  font-size: 1rem;
`;

export default withRouter(graphql(GET_ME)(ProfileMenu))