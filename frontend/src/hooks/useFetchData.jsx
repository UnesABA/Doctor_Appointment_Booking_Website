import { useEffect, useState } from "react"
import { token } from "../config.js"

const useFetchData = (url) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token()}`,
          },
        })

        const result = await res.json()

        if (!res.ok) {
          throw new Error(result.message)
        }

        setData(result.data)
      } catch (error) {
        setError(error.message)
      }
    }

    fetchData()
  }, [url])

  return {
    data,
    loading,
    error,
  }
}

export default useFetchData