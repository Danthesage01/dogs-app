import React, { useContext, useState, useEffect } from "react";
import paginate from "./pagination";


// const URLBARE = `https://api.thedogapi.com/v1/breeds/`
const URL = `https://api.thedogapi.com/v1/breeds?api_key=live_v2KEMvu1br7NSCNSVo6gxNToDniBMahHC7ZsEJevhxj1qRbuJKm6rBqBCIoxfe9J/`

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const [isLoading, setIsLoading] = useState(true)
  const [dogs, setDogs] = useState([])

  const fetchDog = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(URL)
      const data = await response.json()

      if (data) {
        const newDogs = data.map(dog => {
          const {
            id,
            bred_for,
            bred_group,
            image,
            life_span,
            name
          } = dog
          return {
            id,
            bred: bred_for,
            group: bred_group,
            image,
            lifeSpan: life_span,
            name
          }
        })

        setDogs(paginate(newDogs))
        // setDogs(newDogs)
      }
      else {
        setDogs([])
      }
      setIsLoading(false)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchDog()
  }, [])

  return (
    <AppContext.Provider value={{
      isLoading, setIsLoading, dogs
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider }

