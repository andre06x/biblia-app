import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  padding: 30px;
`

export const BoxVoid = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
  align-items: center;
  padding: 20px;
  background: #FBF29F;
  border-radius: 20px;
`

export const VoidText = styled.Text`
  font-size: 20px;
  padding: 10px 0 10px 10px;
`

export const Alert = styled(Icon).attrs({
  name: 'report',
  size: 30,
  color: '#E2D450'

})`
`

export const ListFavorites = styled.FlatList`

`
export const BoxFavorites = styled.View`
  background: #FBF29F;
  padding: 20px;
  border-radius:10px;
  margin-bottom: 10px;
  flex-direction: column;
  align-items: center;
`
export const TextFavorites = styled.Text`
`

export const BoxButton = styled.View`
  flex-direction: row;
  margin-top:10px;
`
export const Button = styled(RectButton)`
  padding:5px;
  border-radius: 20px;
  margin-top: 3px;
  justify-content: center;
  align-items: center;
  margin-left:9px;
`

export const IconCoppy = styled(Icon).attrs({
  name: 'content-copy',
  size: 30,
})`

`
export const IconDelete = styled(Icon).attrs({
name: 'delete',
size: 30
})`

`
