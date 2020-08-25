import React, { Component } from 'react';
import { Container, Title, ListBooks, BookButtonText, BookButton, BookView } from './styles';

export default class NovoTestamento extends Component {
  state ={
    books: [
      {name: 'Mateus', abrev:'mt'},{name: 'Marcos', abrev: 'mc'},{name: 'Lucas', abrev: 'lc'},{name: 'João', abrev: 'jo'},{name: 'Atos dos Apóstolos', abrev: 'atos'},{name: 'Romanos', abrev: 'rm'},
      {name: '1 Coríntios', abrev:'1co'},{name: '2 Coríntios', abrev:'2co'},{name: 'Gálatas', abrev:'gl'},{name: 'Efésios', abrev:'ef'},{name: 'Filipenses', abrev:'fp'},{name: 'Colossenses', abrev:'cl'},
      {name: '1 Tessalonicenses', abrev:'1ts'},{name: '2 Tessalonicenses', abrev:'2ts'},{name: '1 Timóteo', abrev:'1tm'},{name: '2 Timóteo', abrev:'2tm'},{name: 'Tito', abrev:'tt'},{name: 'Filemom', abrev:'fm'},
      {name: 'Hebreus', abrev:'hb'},{name: 'Tiago', abrev:'tg'},{name: '1 Pedro', abrev:'1pe'},{name: '2 Pedro', abrev:'2pe'},{name: '1 João', abrev:'1jo'},
      {name: '2 João', abrev:'2jo'},{name: '3 João', abrev:'3jo'},{name: 'Judas', abrev:'jd'},{name: 'Apocalipse', abrev:'ap'}

    ]
  };
  render(){
    const { books } = this.state;
    const { navigation } = this.props;
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
