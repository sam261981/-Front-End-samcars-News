import { getArticles } from '../Utils/api'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ArticleCard from './ArticleCard'

export default function ArticlesList() {
  const { topic } = useParams()
  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getArticles(topic).then((res) => {
      setArticles(res)
      setIsLoading(false)
    })
  }, [topic])

  if (isLoading) {
    return <h4>Articles are loading...</h4>
  }
  return (
    <div>
      <ul className="Article_list">
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />
        })}
      </ul>
    </div>
  )
}
