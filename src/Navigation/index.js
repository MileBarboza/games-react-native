import React from 'react'
import { useSelector } from 'react-redux'
import AuthNavigator from './AuthNavigator'
import BottomTabNavigator from './BottomTabNavigator'

export default  () => {
const userId = useSelector(state =>  state.auth.userId)

  return <>{userId ? <BottomTabNavigator/> : <AuthNavigator/>}</>
}
