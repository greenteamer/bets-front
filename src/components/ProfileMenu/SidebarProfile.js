import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Cookie from 'js-cookie';
import { graphql } from "react-apollo";
import { styled, Block, Button, Backdrop, Sidebar } from "reakit";

export default ({ me, onLogout }) => (
  <ProfileWrapper>
    <Name>{me.username}</Name>
    <BillingInfo>
      <InfoItem title="Balance" value={me.balance} />
      <InfoItem title="Available" value={me.available} />
      <InfoItem title="At Risk" value={me.atRisk} />
    </BillingInfo>
    <ButtonS onClick={onLogout}>Logout</ButtonS>
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