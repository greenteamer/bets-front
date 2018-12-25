import React from 'react';
import styled, { css } from 'styled-components';
import { COLORS } from '../../../constants';


export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 1px 2px 50px rgba(0,0,0,0.1);
`;

export const CardHeader = styled.div`
  text-align: center;
  border-bottom: 1px solid #c8e0f5;
  padding: 1rem;
  font-size: 2rem;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;
