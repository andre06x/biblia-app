import 'react-native-gesture-handler';
import React from 'react';
import './config/ReactotronConfig';

import { StatusBar } from 'react-native';

import Routes from './routes'
export default function App(){
  return(
    <>
      <StatusBar barStyle="light-content" backgroundColor="#E2D450"/>
      <Routes />
    </>
  )
};



