import { useEffect, useState } from 'react'
import NewsItem from '../components/NewsItem'
import Spinner from '../components/Spinner'
import axios from 'axios'

const NewsSearch = (props) => {
  const apiKey = process.env.REACT_APP_API_KEY
  const url = `${process.env.REACT_APP_URL}/search`
  const searchQuery = props.searchQuery

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)

  const updateNews = async () => {
    props.setProgress(10)

    try {
      const response = await axios.get(url, {
        params: {
          q: searchQuery,
          freshness: 'Day',
          textFormat: 'Raw',
          safeSearch: 'Off',
        },
        headers: {
          'X-RapidAPI-Key': apiKey,
        },
      })

      props.setProgress(30)
      const data = response.data

      props.setProgress(70)
      setArticles(data.value)
      setLoading(false)

      props.setProgress(100)
    } catch (error) {
      console.error(error)
    }
  }

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(searchQuery)} - India-News`
    updateNews()
    // eslint-disable-next-line
  }, [searchQuery])

  return (
    <>
      <h1 className="text-center" style={{ margin: '35px', marginTop: '90px' }}>
        India-News - Search Result for {capitalizeFirstLetter(searchQuery)}
      </h1>
      {loading && <Spinner />}
      <div dataLength={articles.length} loader={<Spinner />}>
        <div className="container">
          <div className="row">
            {articles.map((element, index) => {
              return (
                <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                  <NewsItem element={element} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsSearch
