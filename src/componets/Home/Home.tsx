import React from 'react'
import Movies from '../Movies/Movies'
import Series from '../Series/Series'
import Viewers from '../Viewers/Viewers'

function Home() {
  return (
    <div>
        <Viewers />
        <Movies />
        <Series />
    </div>
  )
}

export default Home