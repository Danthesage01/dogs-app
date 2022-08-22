
function paginate(dogs) {
const dogsPerPage = 25
const noOfPages = Math.ceil(dogs.length / dogsPerPage)
const newDogs = Array.from( {length: noOfPages }, (_,index)=>{
  const start = index * dogsPerPage
  return dogs.slice(start, start + dogsPerPage)
})
return newDogs
}

export default paginate
