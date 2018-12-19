import React from 'react';

import { storiesOf } from '@storybook/react'; // валерия
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

// import Button from '';
import { Button, CardContainer } from '../components/common';
import { CardsMain } from './Cards';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>);
  // .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('Card', module)
  .add('main', () => <CardsMain />);
