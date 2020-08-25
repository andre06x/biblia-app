import React, { Component } from 'react';
import IconArrow from 'react-native-vector-icons/MaterialIcons';
import { Container, BoxChar, TextChar,BoxCap, TextCap, NextCapButton, ListBox, InputCap, ButtonFavorite, IconFavorite, BoxTextCap } from './styles';
import api from '../../services/api';

export default class Main extends Component {
  state = {
    book: [],
    cap: 0,
    teste: '',
    index: 0,
    start: false,
    number: ''
  };

  async  componentDidMount(){

    const { navigation } = this.props;
    const { item } = this.props.route.params;
    // console.tron.log(this.props);

    navigation.setOptions({
        title: item.name,
    });

    const ab = item.abrev;

    console.tron.log(api)
    const  teste = await api.filter( api => api.abbrev == ab);
    this.setState({
      book: teste[0].chapters[this.state.cap],
      teste: teste
    });

  };

    nextCap = () => {
      console.tron.log(this.state.number)
      console.tron.log(this.state.cap)

       if(this.state.cap + 1 < this.state.teste[0].chapters.length){

          this.setState({
            book: this.state.teste[0].chapters[this.state.cap + 1],
            cap: this.state.cap + 1,
            index: 0,
            start: true,
          });

      };

    };

    changeText = (text) => {

      if(this.state.number  < this.state.teste[0].chapters.length ){
        if(text > 0 && text > '' && text < this.state.teste[0].chapters.length + 1){

            console.tron.log(text)
            this.setState({
              book:this.state.teste[0].chapters[text - 1],
              cap: parseInt(text - 1),
              index: 0,
            });

          console.tron.log(this.state.cap)
        };
      };


    };

  render(){
    const { book, cap, index, number  } = this.state;
    const  { name } = this.props.route.params.item;
    const chapter = cap +1;
    return(
      <Container>
        <BoxCap>
            <BoxTextCap>
              <TextCap>Capitulo {cap + 1}</TextCap>
            </BoxTextCap>
            <InputCap
              keyboardType="numeric"

              onChangeText  = {text => this.changeText(text)}
              placeholder ="Cap"
            />
          <NextCapButton onPress={this.nextCap}>
            <IconArrow name="forward" size={25} />
          </NextCapButton>
        </BoxCap>

          <ListBox snapToAlignment="end">
            {book.map(book => (
              <BoxChar
                key={book}
              >
                <TextChar>
                  {++this.state.index}
                    -
                  {' ' +book}
                </TextChar>
                <ButtonFavorite onPress={() => this.props.navigation.navigate('Favoritos', {book, name, chapter })}>
                  <IconFavorite    />
                </ButtonFavorite>
              </BoxChar>
              ))
            }
          </ListBox>

      </Container>
    )};
};




