import React from 'react';
import styled from 'styled-components';

import Button from '../../components/common/Button';


const PageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const CardContainer = styled.div`
  width: 22rem;
  background: white;
  border-radius: 0.5rem;
  justify-content: center;
  margin-top: 2rem;
  box-shadow: 1px 2px 50px rgba(0,0,0,0.1);
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const CardHeader = styled.h1`
  text-align: center;
  border-bottom: 1px solid #c8e0f5;
  padding: 1rem;
`;

const ButtonContainer = styled.div`
  margin-top: 1rem;
`;

export default () => (
  <PageContainer>
    <CardContainer>
      <CardHeader>Sign In</CardHeader>
      <CardContent>
        <div>
          <p>email or username</p>
          <input type="text" />
        </div>
        <div>
          <p>password</p>
          <input type="password" />
        </div>
        <ButtonContainer>
          <Button>Sign In</Button>
        </ButtonContainer>
      </CardContent>
    </CardContainer>
  </PageContainer>
);
