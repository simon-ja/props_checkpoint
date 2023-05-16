import React from 'react'

const Card = ({image, title, price}) => {
  return (

   
    <div>
        
        <div class="card" style={{width: "18rem"}}>
  <img src={image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">{price}</p>
    <a href="#" class="btn btn-primary">Add to cart</a>
  </div>
</div>

    </div>
  )
}

export default Card