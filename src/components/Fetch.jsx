import React, { useState } from 'react'

const Fetch = () => {
    // const [name, setName] = useState('James')
    // const [job, setJob] = useState('Engineering')
    // const [numOfWives, setNumOfWives] = useState(4)

    const [name, setName] = useState('Jonathan')
    const [job, setJob] = useState('plumber')
    const [numOfWives, setNumOfWives] = useState(1)
    const {numOfKids, setNumOfKids} = useState(4)

    // const repentance = () =>{
    //     setName( 'Rev Simon' )
    //     setJob( 'Fishers of men' )
    //     setNumOfWives(1)

        
    const repentance = () =>{
        setName( 'Chief Jonathan' )
        setJob( 'Tittle Man' )
        setNumOfWives( 12 )
      const name = ['james', 'john']

    };
  return (
    <div>
       <p> My name is {name}, I am an {job} and i have {numOfWives} wives and i also have {numOfKids} kids</p>
       <button onClick={repentance}>click me</button>
    </div>
  )
}

export default Fetch