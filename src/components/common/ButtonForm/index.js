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


class ButtonForm extends React.Component { 
  state = {
    value: '',
  }

  clearState = () => {
    this.setState({ value: '' });
  }

  handleOnSuccess = popover => () => {
    const { value } = this.state;
    const { onSuccess } = this.props;
    onSuccess(value);
    this.clearState();
    popover.hide();
  }
 

  handleOnCancel = popover => () => {
    const { onCancel } = this.props;
    onCancel();
    this.clearState();
    popover.hide();
  }

  handleOnChange = e => {
    const { value } = e.target;
    this.setState({ value });
  }

  render() { 
    const { children, placeholder } = this.props;
    const { value } = this.state;
    return (
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
                  <Input
                    id="input1"
                    type="number"
                    placeholder={placeholder}
                    value={value}
                    onChange={this.handleOnChange}
                  />
                </Field>
                <Group marginTop={8}>
                  <Button palette="secondary" onClick={this.handleOnSuccess(popover)}>Ok</Button>
                  <Button palette="transparent" onClick={this.handleOnCancel(popover)}>Cancel</Button>
                </Group>
              </Block>
            </Popover>
          </Block>
        )}
      </Popover.Container>
    );
  }
}

const MyButton = styled(Button)`
  width: 100%;
  background-color: ${p('white')};
  color: ${p('black')};
  &:active {
    box-shadow: inset 0 0 999em rgba(0,0,0,0.15);
  }
`;

export default ButtonForm;
