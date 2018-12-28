import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Cookie from 'js-cookie';
import { graphql } from "react-apollo";
import { styled, Block, Button, Backdrop, Sidebar, Heading } from "reakit";
import { palette as p } from 'styled-tools';
import { map } from 'lodash';


export default ({ me, onLogout }) => (
  <ProfileWrapper>
    <Name>{me.username}</Name>
    <BillingInfo>
      <InfoItem title="Balance" value={me.balance} />
      <InfoItem title="Available" value={me.available} />
      <InfoItem title="At Risk" value={me.atRisk} />
    </BillingInfo>
    <ButtonS onClick={onLogout}>Logout</ButtonS>
    <div>
      <HeadingS as="h4">Your bets</HeadingS>
      {map(me.bets, (bet, index) => (
        <MyCard key={index} block>
          <div>{bet.team}</div>
          <div>{bet.amount} $</div>
        </MyCard>
      ))}
    </div>
  </ProfileWrapper>
);

const InfoItem = ({ title, value }) => (
  <div>{title}: {value}</div>
);

const ButtonS = styled(Button)`
  width: 100%;
`;
const ProfileWrapper = styled.div`
  min-width: 30rem;
  padding: 1rem;
`;
const Name = styled.h2`
  text-align: center;
  text-transform: uppercase;
`;
const BillingInfo = styled.div`
  padding: 1rem;
  margin: 1rem 0;
`;
const BillingItem = styled.div`
`;

const MyCard = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: ${p('iceBlue')};
`;

const HeadingS = styled(Heading)`
  margin-top: 2rem!important;
  text-align: center;
`;