import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  padding: 30px 10px;
  align-items: center;
`
export const Title = styled.Text`
  padding: 15px 60px;
  font-size: 18px;
  border-radius: 20px;
  background-color: #F6E868;
  font-weight: bold;
`

export const ListBooks = styled.FlatList`
  margin-top: 10px;
  padding: 20px;
  align-self: stretch;
  margin-bottom: 15px;
`

export const BookView = styled.View`
  margin-bottom: 35px;
  align-items: center;
`

export const BookButton = styled(RectButton)`
  padding: 10px 50px;
  border-radius: 20px;
  background-color: #F6E868;

`

export const BookButtonText = styled.Text`
  font-size: 15px;

`
