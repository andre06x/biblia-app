import styled from 'styled-components/native';
import { RectButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  padding: 30px;
`

export const BoxCap = styled.View`
  flex-direction: row;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`

export const BoxTextCap = styled.View`

`

export const TextCap = styled.Text`
  text-align: center;
  font-size: 20px;
  margin-bottom: 10px;
`

export const InputCap = styled.TextInput`
  height: 45px;
  background: #F6E868;
  border: solid 1px #eee;
  padding: 10px 10px;
  margin-left: 10px;
  text-align: center;
  border-radius: 8px;
`

export const NextCapButton = styled(RectButton)`
  padding: 10px 10px;
  margin-left: 20px;
  border-radius: 8px;
  background-color: #F6E868;
  align-self: flex-end;
`


export const ListBox = styled.ScrollView`
  margin-top: 20px;
`

export const BoxChar = styled.View`
  align-items: center;
  margin-bottom: 10px;
  /* flex-direction: row; */
  background: #FBF29F;
  border-radius:10px;

`

export const TextChar = styled.Text`
  font-size: 14.5px;
  color: black;
  padding: 10px 10px 0px 10px;
  line-height: 20px;
  text-align: left;
  margin: 10px 10px 0px 10px;
`

export const ButtonFavorite = styled(RectButton)`
  margin: 0px 0px 10px 0px;
  padding: 5px;
  border-radius:10px;
  /* background: #E2D450; */

  /* background: yellow; */
`

export const IconFavorite = styled(Icon).attrs({
  name: 'favorite',
  size: 30,
  color: '#E2D450'
})`
  border-radius: 10px;
`
