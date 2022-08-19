import React, { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { useGlobalContext } from '../context'
import Loading from "./Loading"
import Dog from "./Dog"
const DogLists = () => {
  const { isLoading, dogs } = useGlobalContext()
  const [page, setPage] = useState(0)
  const [allDogs, setAllDogs] = useState([])

  useEffect(()=>{
    if(isLoading) return
    setAllDogs(dogs[page])
  },[isLoading, page, dogs])

  const handlePage = (index) =>{
    setPage(index)
  }
  const nextPage = () =>{
    setPage(prevState =>{
     let nextPage = prevState + 1
        if(nextPage > dogs.length - 1){
          nextPage = 0
        }
      return nextPage
    })
  }
  const prevPage = () =>{
    setPage(prevState =>{
     let lastPage = prevState - 1
        if(lastPage < 0){
          lastPage = dogs.length - 1
        }
      return lastPage
    })
  }


  if (isLoading) {
    return <Loading />
  }
  if (dogs.length < 1) {
    return (
      <h2 className='section-title'>No dog of such breed was found</h2>
    )
  }
  return (
    <section className='section products'>
        <h2 className='section-title'>cocktails</h2>
        <div className="products-container">
          {allDogs.map(dog => {
            const { id } = dog
            return <Dog key={id} {...dog} />
          })}
        </div>
        <div className='btn-container'>
          <button className='prev-btn'
          onClick={prevPage}>
            <FaChevronLeft />
          </button>
        {!isLoading && dogs.map((_, index)=>{
          return <button key={index} 
          // className={index === page ? "page-btn active-btn" : "page-btn"}
          className={`page-btn ${index === page ? "active-btn" : null}` }
          onClick={()=>handlePage(index)}
          >
            {index + 1}
          </button>
        })
        }
        <button className='next-btn'
          onClick={nextPage}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  )
}

export default DogLists