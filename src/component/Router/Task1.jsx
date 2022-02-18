import React from 'react'
import Card from '../Card'
import Header from '../Header'

function Task1() {
  return (
    <>
      <Header title='React Basic Component'>
        <Card bundle="Free" price="Rp 0"/>
        <Card bundle="Premium" price="Rp 100.000"/>
        <Card bundle="Advanced" price="Rp 200.000"/>
      </Header>
    </>
  )
}

export default Task1