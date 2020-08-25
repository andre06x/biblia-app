import React, { Component } from 'react';
import { Container, Title, ListBooks, BookButtonText, BookButton, BookView } from './styles';

export default class AntigoTestamento extends Component {
  state ={
    books: [
      {name: 'Gênesis', abrev:'gn'},{name: 'Êxodo', abrev: 'ex'},{name: 'Levítico', abrev: 'lv'},{name: 'Números', abrev: 'nm'},{name: 'Deuteronômio', abrev: 'dt'},{name: 'Josué', abrev: 'js'},
      {name: 'Juízes', abrev:'jz'},{name: 'Rute', abrev:'rt'},{name: '1 Samuel', abrev:'1sm'},{name: '2 Samuel', abrev:'2sm'},{name: '1 Reis', abrev:'1rs'},{name: '2 Reis', abrev:'2rs'},
      {name: '1 Crônicas', abrev:'1cr'},{name: '2 Crônicas', abrev:'2cr'},{name: 'Esdras', abrev:'ed'},{name: 'Neemias', abrev:'ne'},{name: 'Ester', abrev:'et'},{name: 'Jó', abrev:'jó'},
      {name: 'Salmos', abrev:'sl'},{name: 'Provérbios', abrev:'pv'},{name: 'Eclesiastes', abrev:'ec'},{name: 'Cântico dos Cânticos', abrev:'ct'},{name: 'Isaías', abrev:'is'},
      {name: 'Jeremias', abrev:'jr'},{name: 'Lamentações de Jeremias', abrev:'lm'},{name: 'Ezequiel', abrev:'ez'},{name: 'Daniel', abrev:'dn'},{name: 'Oseias', abrev:'os'},{name: 'Joel', abrev:'jl'},
      {name: 'Amós', abrev:'am'},{name: 'Obadias', abrev:'ob'},{name: 'Jonas', abrev:'jn'},{name: 'Miqueias', abrev:'mq'},{name: 'Naum', abrev:'na'},{name: 'Habacuque', abrev:'hc'},
      {name: 'Sofonias', abrev:'sf'},{name: 'Ageu', abrev:'ag'},{name: 'Zacarias', abrev:'zc'},{name: 'Malaquias', abrev:'ml'}
    ]
  }
  render(){
    const { books } = this.state;
    const { navigation } = this.props
    return(
      <Container>
        <Title> Livros </Title>

        <ListBooks
          data={books}
          keyExtractor={books => books.name}
          renderItem ={ ({item}) => (
            <BookView>
              <BookButton onPress={() => navigation.navigate('Book', { item})}>
                <BookButtonText>
                  - {item.name}
                </BookButtonText>
              </BookButton>
            </BookView>
          )}
        />
      </Container>
    );
  };
};
