import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  padding: 30px;
  justify-content: center;
`
export const ButtonBook = styled(RectButton)`
  margin-top: 50px;
  padding: 30px;
  background-color: gray;
  background-color: #F6E868;
  border-radius: 20px;
`
export const TextButton = styled.Text`
  font-size: 20px;
  text-align: center;
  color: black;
`
