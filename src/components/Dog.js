import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Dog = ({ id, name, image }) => {
  return (
    <article className="product">
      <div className="product-container">
        <img src={image?.url} alt={name} className="product-img img" />
        <div className="product-icons">
          <Link to={`/dog/${id}`} className="product-icon">
            <FaSearch />
          </Link>
        </div>
        <div className="product-name-container">
          <p className="product-name">
            {name}
          </p>
        </div>
      </div>
    </article>
  )
}

export default Dog
