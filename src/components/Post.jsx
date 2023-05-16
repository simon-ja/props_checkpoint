import React from 'react'

const Post = () => {
  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((response) =>console.log(response))

  }
  return (
    <div>
      <button onClick={fetchData}>
        fetch me
      </button>
    </div>
  )
}

export default Post