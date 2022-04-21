import React from 'react'
import { Link } from 'react-router-dom'
export default function ArticleCard({ article }) {
  return (
    <li key={article.article_id} className="Article_card">
      <Link to={`/article/${article.article_id}`}>
        <h1>{article.title}</h1>
      </Link>
    </li>
  )
}
