import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import { get } from 'lodash';

import ProfileMenu from '../ProfileMenu';
import { appConsumerWrapper } from '../../wrappers/AppStore';
import { ROLES } from '../../constants';
import { colors } from '../../theme';


class Footer extends Component {
  render() {

    return (
      <FooterContainer>
        Footer
      </FooterContainer>
    )
  }
}

const FooterContainer = styled.footer`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  background: ${colors.slate};
  color: white;
`;

export default Footer;