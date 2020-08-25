import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {BoxVoid, VoidText, Alert,  Container, BoxFavorites, TextFavorites, Button, IconCoppy, IconDelete, BoxButton, ListFavorites } from './styles';
import Clipboard from '@react-native-community/clipboard';

export default class Favoritos extends Component{
  state ={
    likes: [],
    existe: false
  };

  async componentDidMount(){

    const Favoritess = await AsyncStorage.getItem('Favoritess');
    if(Favoritess){
      this.setState({
        likes: await JSON.parse(Favoritess)
      });
    };

    if(this.props.route.params) {
      const { book } = this.props.route.params;
      const { name } = this.props.route.params;
      const { chapter } = this.props.route.params;

      for(let i=0; i < this.state.likes.length; i++){
        if(book === this.state.likes[i].book){
          this.setState({ existe: true})
        };
      };

      if(!this.state.existe){
        const items = {
          book,
          name,
          chapter
        };
        this.setState({
          likes: await [items, ...this.state.likes]
        });
        console.tron.log(this.state.likes.length);
        AsyncStorage.setItem('Favoritess', JSON.stringify(this.state.likes));
      };
  };
  if(this.state.likes.length === 0){
    console.tron.log('vazio');
    this.setState({ vazio: true});
  };
};

copy = (item) => {
  Clipboard.setString(item);
};

delete = (item) => {
  this.setState({
    likes: this.state.likes.filter(l => l.book !== item)
  });

  console.tron.log(this.state.likes.length)
    if(this.state.likes.length == 1 ){
      this.setState({ vazio: true})
    };

};

componentDidUpdate(_, prevState){
  if(prevState.likes !== this.state.likes){
    AsyncStorage.setItem('Favoritess', JSON.stringify(this.state.likes));
  };

};
  render(){
    return(
      <Container>
        { this.state.vazio ? (
          <BoxVoid>
            <VoidText>Você não possui favoritos.</VoidText>
            <Alert />
          </BoxVoid>
        ) : (
          <ListFavorites
          data={this.state.likes}
          keyExtractor={likes => likes.book}
          renderItem={ ({item}) => (
            <BoxFavorites>
              <TextFavorites> "{item.book}" - {item.name} {item.chapter}</TextFavorites>
              <BoxButton>
                <Button onPress={ () => this.copy( `"${item.book}" - ${item.name} ${item.chapter}` )}>
                  <IconCoppy />
                </Button>

                <Button onPress={ () => this.delete(item.book)}>
                  <IconDelete />
                </Button>
              </BoxButton>
            </BoxFavorites>
          )}
        />
        )}
      </Container>
    )
  };

};
