import { useState } from "react"
import axios from "axios"

const useGetApi = () => {
    const[data, setData] = useState(null)

    const getData = async(url) => {

      axios.get(url)
      .then(function(response){
        setData(response.data.movies)
      })
      .catch(function(error){
        console.log(error)
      })

    }
    return {data, getData};

}

export {useGetApi}