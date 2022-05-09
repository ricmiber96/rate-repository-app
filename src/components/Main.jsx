import React from 'react'
import { Text, View } from 'react-native'
import AppBar from './AppBar'
import RepositoryList from './RepositoryList'
import { Redirect, Route, Switch } from 'react-router-native'

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Switch>
        <Route path='/' exact>
          <RepositoryList />
        </Route>
        <Route path='/signin' exact>
          <Text>Working on it</Text>
        </Route>
        <Redirect to='/' />
      </Switch>
    </View>
    // <View style={{ flex: 1 }}>
    //   <AppBar />
    //       <RepositoryList />
    // </View>
  )
}

export default Main