import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Loading from '../components/Loading'
const SingleDog = () => {
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const [dog, setDog] = useState(null)

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)
      try {
        const res = await fetch(`https://api.thedogapi.com/v1/breeds/${id}?api_key=55c5f676-1493-44f7-ad67-0b870beba21e`)
        const dog = await res.json()
        if (dog) {
          const { bred_for: bred, breed_group: group, height, weight, life_span: lifeSpan, name, origin, temperament } = dog
          const newDog = { bred, group, height, weight, lifeSpan, name, origin, temperament }
          setDog(newDog)
        }
        else {
          setDog(null)
        }
      }
      catch (error) {
        console.log(error);
      }
      setIsLoading(false)
    }
    fetchData()
  }, [id])
  if (isLoading) {
    return <Loading />
  }
  if (!dog) {
    return <h2 className='section-title'>no dog to display</h2>
  }
  else {
    const { bred, group, height, weight, lifeSpan, name, origin, temperament } = dog
    return (
      <section className="single-product">
        <div className="section-center single-product-center">
          <article className="single-product-info">
            <div>
              {name && <h4 className="single-title">Name: {name}</h4>}
             {origin && <p className="single-origin text-slanted">Origin: {origin}</p>}
              {bred && <p className="single-bred text-slanted">Bred: {bred}</p>}
              {group && <p className="single-breed text-slanted">Group: {group}</p>}
              {temperament && <p className="single-breed text-slanted">Temparement: {temperament}</p>}
              {height.metric && <p className="single-height text-slanted">Height: {height.metric} CM</p>}
              {weight.metric && <p className="single-weight text-slanted">Weight: {weight.metric} CM</p>}
              {lifeSpan && <p className="single-lspan text-slanted">Life Span: {lifeSpan}</p>}
              <Link to="/" className="btn">
                Back home
              </Link>
            </div>
          </article>
        </div>
      </section>
    )
  }
}

export default SingleDog