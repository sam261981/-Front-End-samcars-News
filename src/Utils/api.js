import axios from 'axios'

const api = axios.create({
  baseURL: 'https://mononews.herokuapp.com/api',
})
export const getArticles = (topic, sort_by, order) => {
  return api
    .get(`/articles`, {
      params: {
        topic: topic,
        sort_by: sort_by,
        order: order,
      },
    })
    .then((res) => {
      return res.data.articles
    })
}
