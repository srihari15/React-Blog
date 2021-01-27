//Custom hook

import {useEffect, useState} from 'react'

const useFetch = (url) => {

    //States

    //const [name, setName] = useState("Hari")
    const [data, setData] = useState(null)
    const [isPending, setisPending] = useState(true)
    const [error, setError] = useState(null)

    //Methods
    const handleDelete = (id) => {
            const newBlogs = data.filter(blog => (blog.id !== id))
            setData(newBlogs)
        }


    useEffect(() => {

      const abortCont = new AbortController()

        fetch(url)
          .then(res => {
            if (!res.ok){
              throw Error("Could Not fetch the data.")
            }
            return res.json()
          })
          .then(data => {
            setData(data)
            setisPending(false)
            setError(null)
          })
          .catch(err =>{
            setError(err.message)
            setisPending(false)
          })

          return () => abortCont.abort()
          
    }, [url])

    return {data, isPending, error, handleDelete}
}

export default useFetch