import axios from 'axios'

const api = axios.create({
  baseURL: 'https://mononews.herokuapp.com/api',
})
export const getArticles = (topic, sort_by, order) => {
  return api
    .get(`/articles`, {
      params: {
        topic: topic,
      },
    })
    .then((res) => {
      return res.data.articles
    })
}

export const getArticlesByTopic = (topic) => {
  return api.get(`/articles?topic=${topic}`).then((res) => {
    return res.data.articles
  })
}
export const getArticlesTopics = () => {
  return api.get('/topics').then((res) => {
    return res.data
  })
}
