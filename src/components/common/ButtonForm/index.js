import React from 'react';
import {
  styled,
  Button,
  Popover,
  Block,
  Field,
  Input,
  Group,
} from 'reakit';
import { palette as p } from 'styled-tools';


const ButtonForm = ({ children }) => (
  <Popover.Container>
    {popover => (
      <Block relative>
        <MyButton as={Popover.Toggle} {...popover}>
          {children}
        </MyButton>
        <Popover fade slide expand hideOnClickOutside {...popover}>
          <Popover.Arrow />
          <Block>
            <Field>
              <Input id="input1" type="number" placeholder="Your bet" />
            </Field>
            <Group marginTop={8}>
              <Button secondary>Ok</Button>
              <Button>Cancel</Button>
            </Group>
          </Block>
        </Popover>
      </Block>
    )}
  </Popover.Container>
);

const MyButton = styled(Button)`
  width: 100%;
  background-color: ${p('white')};
  color: ${p('black')};
  &:active {
    box-shadow: inset 0 0 999em rgba(0,0,0,0.15);
  }
`;

export default ButtonForm;
