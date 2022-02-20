import React from 'react'
import { Provider } from 'react-redux'
import Header from '../Header'
import Redux from '../Redux'
import store from '../../Redux/store'

export default function Task4() {
  return (
    <>
        <Header title='React Redux'>
            <Provider store={store}>
              <Redux /> 
            </Provider>
        </Header>
    </>
  )
}
