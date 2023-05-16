import React from 'react'
import axios from 'axios'

const Axio = () => {
    const fetchData = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) =>console.log(res))
        .catch((err) => console.log(err))
    }
  return (
    <div>
        <button onClick={fetchData}>Fetch Data</button>
    </div>
  )
}

export default Axio