import React,{ Component } from 'react';
import { Container, Title, TextInfos,  ContainerInfos, ScrollContainer } from './styles';

export default class Infos extends Component {
  state = {
    bibliaEmNumeros : [
      {text: '- A bíblia possui 66 livros, sendo 39 do Antigo Testamento e 27 do Novo Testamento.'},
      {text: '- O livro que possui mais capítulos é o Salmos, tendo 150 capítulos.'},
      {text: '- Livros que possuem apenas 1 capítulo: Obadias, Filemon, 2 joão, 3 joão e judas.'},
      {text: ' - O maior capítulo da bíblia é o Salmo 119.'},
      {text: '- O maior versículo é o Ester 8:9.'},
    ],
    ordemDosLivros : [
      {text: 'Os livros da Bíblia não estão organizados por ordem cronológica nem alfabética.Eles foram agrupados de acordo com seu gênero literário (livros históricos, evangelhos, cartas...).'},
      {text: 'Antigo Testamento', styles: true},
      {text: 'Pentateuco', styles: true},
      {text: 'Gênesis, Êxodo, Levítico, Números, Deuteronômio.'},
      {text: 'Estes são os primeiros cinco livros da Bíblia, que contam sobre as origens do mundo, da humanidade e do povo de Israel. Esses livros também registram toda a Lei de Moisés.'},
      {text: 'Livros históricos.' , styles: true},
      {text: 'Josué, Rute, 1 Samuel, 2 Samuel, 1 Reis, 2 Reis, 1 Crônicas, 2 Crônicas, Esdras, Neemias Ester.'},
      {text: 'Esses livros contam a história do povo de Israel, desde a conquista de Canaã até seu retorno do exílio na Babilônia.'},
      {text: 'Livros de sabedoria e poemas.' , styles: true},
      {text: 'Jó, Salmos, Provérbios, Eclesiastes, Cânticos '},
      {text: 'Livros de ensino e reflexão sobre a vida, com poemas e canções.'},
      {text: 'Profetas: ', styles: true},
      {text: 'Isaías, Jeremias,Lamentações,  Ezequiel,Daniel, Oséias,  Joel, Amós, Obadias, Jonas, Miquéias, Naum, Habacuque, Sofonias, Ageu, Zacarias, Malaquias '},
      {text: 'Livros de profecias, que Deus revelou a alguns dos profetas de Israel. Algumas partes desses livros também contam a história do contexto das profecias, repetindo parte dos livros históricos.'},
      {text: 'Novo Testamento', styles: true},
      {text: 'Evangelho e Atos', styles: true},
      {text: 'Mateus, Marcos, Lucas, João, Atos dos Apóstolos'},
      {text: 'Os evangelhos são quatro relatos da vida e do ministério de Jesus, de perspetivas diferentes. Atos dos Apóstolos conta sobre o início da igreja, depois que Jesus subiu ao Céu.'},
      {text: 'Cartas e Apocalipse', styles: true},
      {text: 'Romanos, 1 Coríntios, 2 Coríntios, Gálatas, Efésios, Filipenses, Colossenses, 1 Tessalonicenses,2 Tessalonicenses, 1 Timóteo, 2 Timóteo, Tito, Filemom, Hebreus,  Tiago, 1 Pedro, 2 Pedro,1 João, 2 João,3 João, Judas, Apocalipse  '},
      {text: 'As cartas (ou epístolas) foram escritas pelos apóstolos a várias pessoas e igrejas, explicando em detalhe tudo que Jesus tinha ensinado e como aplicar. Apocalipse também é uma carta, contando sobre uma revelação de como será o fim do mundo.'},

    ],
    traduções : [
      {text: 'Os livros da Bíblia foram escritos originalmente em Hebraico, Aramaico e Grego antigo. As primeiras traduções foram feitas em Grego e Latim. Mas como hoje em dia quase ninguém fala essas línguas, a Bíblia foi traduzida para muitas outras línguas. Atualmente, a Bíblia ou partes da Bíblia já foram traduzidas para milhares de línguas faladas no mundo inteiro e o trabalho continua!'},
      {text :'Para traduzir a Bíblia para Português, ou qualquer outra língua, os tradutores estudam e comparam as cópias mais antigas da Bíblia. Nenhuma tradução é perfeita, porque cada língua tem suas particularidades e coisas muito difíceis de traduzir. Cada tradução tem alguns erros mas são mínimos e não afetam o significado total da Bíblia.'}
    ]
  };
  render(){
    return(
      <Container>
        <ScrollContainer>
        <ContainerInfos>
        <Title>A Bíblia em números </Title>
          { this.state.bibliaEmNumeros.map(b => (
            <TextInfos > {b.text}</TextInfos>
          ))}
        </ContainerInfos>
        <ContainerInfos>
          <Title> Ordem dos Livros</Title>
          {this.state.ordemDosLivros.map( b => (
            <TextInfos styles={b.styles}>{b.text}</TextInfos>
          ))}
        </ContainerInfos>
        <ContainerInfos>
          <Title> Traduções da Bíblia </Title>
          {this.state.traduções.map(b => (
            <TextInfos> {b.text} </TextInfos>
          ))}
        </ContainerInfos>

        </ScrollContainer>
      </Container>

    );
  };
};



