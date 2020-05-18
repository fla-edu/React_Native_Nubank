import React from 'react';

import Header from '~/components/Header'
import Tabs from '~/components/Tabs'
import Content from '~/components/Content'
import { Container } from './styles';

export default function Main() {
  return (
    <Container> 
      <Header/>
      <Content/>
      <Tabs/>
    </Container>
  );
}

