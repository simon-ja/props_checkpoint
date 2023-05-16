import React from 'react'
import Props from './components/props/Props'
import Card from './components/Card'
import Fetch from './components/Fetch'
import Post from './components/Post'
import Axio from './components/Axio'

const App = () => {

  const image1 = "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/13/9162621/1.jpg?2782"
  const image2 = "https://ng.jumia.is/cms/0-1-weekly-cps/0-2023/01-thumbnails/refreigerator.jpg"
  const image3 = "https://ng.jumia.is/cms/0-1-weekly-cps/0-2023/01-thumbnails/Television.jpg"
  const image4 = "https://ng.jumia.is/cms/0-1-christmas-sale/2022/thumbnails/groceries_220x220.png"
  const image5 = "https://ng.jumia.is/cms/0-1-christmas-sale/2022/thumbnails/electronics_220x220.png"
  const image6 = "https://ng.jumia.is/cms/0-1-christmas-sale/2022/thumbnails/fashion_220x220.png"
  const image7 = "https://ng.jumia.is/cms/0-1-christmas-sale/2022/thumbnails/health-beauty_220x220.png"
  return (
    <div className='d-flex gap-3 flex'>
      {/* <Props brand ='benz' color='red' year="2023" /> */}
      {/* <Card image={image1} title='Phone' price='N50,000'/>
      <Card image={image2} title='fridge' price='N150,000'/>
      <Card image={image3} title='Tv' price='N190,000' />
      <Card image={image4} title='Rice' price='N190,000'/> */}
      {/* <Card image={image5} title='Sony' price='N190,000'/>
      <Card image={image6} title='Shoe' price='N190,000'/>
      <Card image={image7} title='Nivea' price='N190,000'/> */}
      {/* <Fetch /> */}
      <Post />
      <Axio />
    </div>
  )
}

export default App