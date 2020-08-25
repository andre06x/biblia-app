import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Main from './pages/Main';
import Favoritos from './pages/Favoritos';
import Infos from './pages/Infos';
import AntigoTestamento from './pages/AntigoTestamento';
import NovoTestamento from './pages/NovoTestamento';
import Book from './pages/Book';


const { Navigator, Screen } = createBottomTabNavigator();
const Stack = createStackNavigator();


function HomeStackScreen(){
  return(
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Main"
        component={Main}
        options={{
          title: 'Biblia Sagrada',
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#E2D450'},
          headerTintColor: '#fff'
      }}/>
      <Stack.Screen
        name="AntigoTestamento"
        component={AntigoTestamento}
        options={{
          title: 'Antigo Testamento',
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#E2D450'},
          headerTintColor: '#fff'
        }} />
       <Stack.Screen
        name="NovoTestamento"
        component={NovoTestamento}
        options={{
          title: 'Novo Testamento',
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#E2D450'},
          headerTintColor: '#fff'
        }} />
        <Stack.Screen
        name="Book"
        component={Book}
        options={{
          title: '',
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#E2D450'},
          headerTintColor: '#fff'
        }} />

        <Stack.Screen
          name="Favoritos"
          component={Favoritos}
          options={{
            title:"Favoritos",
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: '#E2D450'},
            headerTintColor: '#fff'

          }}
        />
    </Stack.Navigator>
  );
};

function FavoriteStackScreen(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="Favoritos"
        component={Favoritos}
        options={{
          title:"Favoritos",
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#E2D450'},
          headerTintColor: '#fff'

        }}/>
    </Stack.Navigator>
  );
};

function InfoStackScreen(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="Info"
        component={Infos}
        options={{
          title: 'Informações',
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerStyle:{ backgroundColor:'#E2D450' }
        }}/>
    </Stack.Navigator>
  )
}
export default function Routes() {
  return(
    <>
    <NavigationContainer>
      <Navigator animationEnabled="true" screenOptions={ ({route }) => ({
        tabBarIcon: ({ focused }) =>{
          let iconName, colorr;

          if(route.name === 'Main' ){
            iconName = 'book';
            colorr = focused
              ? '#FFC147' : '#ECDD53'
          } else if(route.name === 'Favoritos'){
            iconName = 'favorite';
            colorr = focused
            ? '#FFC147' : '#ECDD53'
          } else if(route.name === 'Info'){
            iconName = 'info';
            colorr = focused
            ? '#FFC147' : '#ECDD53';
          }

          return <Icon name={iconName} size={36} color={colorr} padding={70}  backgroundColor="red"/>
        },
      })}
        tabBarOptions={ {
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          style: {
            backgroundColor: '#E2D450',
            minHeight: 64
          },
          iconStyle: {
            paddingLeft: 60,
            marginTop: 10,
            // paddingVertical: 10,
            backgroundColor: '#FBF29F',
            borderRadius: 5,
          }


        }}>
        <Screen options={{ title: ''}} name="Main" component={HomeStackScreen}/>
        <Screen options={{ title: ''}} name="Favoritos" component={FavoriteStackScreen}/>
        <Screen options={{ title: ''}} name="Info" component={InfoStackScreen}/>

      </Navigator>
    </NavigationContainer>



    </>
  );
};


