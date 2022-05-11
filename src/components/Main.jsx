import React from 'react'
import {View, Platform } from 'react-native'
import AppBar from "./AppBar"
import RepositoryList from './RepositoryList'
import { Redirect, Route, Switch } from 'react-router-native'
import LogIn from '../pages/LogIn'

//CAMBIAR EL APPBAR DEPENDIDO DEL DISPOSITIVO QUE EJECUTE LA APP
// OTRA DE LAS FORMAS ES CAMBIANDO LA EXTENSION EJ (AppBar.ios.jsx)
// const AppBar = Platform.select({
//   ios: () => require('./IOSAppBar').default,
//   android: () => require('./ANDROIDAppBar'),
//   default: () => require('./AppBar').default
// })()


const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Switch>
        <Route path='/' exact>
          <RepositoryList />
        </Route>
        <Route path='/signin' exact>
          <LogIn/>
        </Route>
        <Redirect to='/' />
      </Switch>
    </View>
  )
}

export default Main