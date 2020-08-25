import React, { Component } from 'react';
import { Container, ButtonBook, TextButton } from './styles';

export default class Main extends Component {
  render(){
    const { navigation } = this.props;
    return(
      <Container>
        <ButtonBook onPress={() => navigation.navigate('AntigoTestamento')}>
          <TextButton> Antigo Testamento</TextButton>
        </ButtonBook>

        <ButtonBook onPress={() => navigation.navigate('NovoTestamento')}>
          <TextButton> Novo Testamento</TextButton>
        </ButtonBook>

      </Container>
    );
  };
};



