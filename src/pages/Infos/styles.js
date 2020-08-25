import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 30px;
`

export const Title = styled.Text`
  padding: 5px;
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 4px;
`
export const ContainerInfos = styled.ScrollView`
  margin-bottom: 20px;
  background: #FBF29F;
  padding-bottom: 15px;
  border-radius: 20px;

`

export const OrderOfBooks = styled.View`
`
export const ScrollContainer = styled.ScrollView`

`
export const TextInfos = styled.Text`
  line-height: 19px;
  margin: 5px;
  padding: 0 5px;
  text-align: ${props => props.styles ? 'center' : 'auto' };
  font-weight: ${props => props.styles ? 'bold ' : 'normal'};
  font-size: ${props => props.styles ? '15px' : '13px' };
`
export const TextInfosP = styled.Text`

`
