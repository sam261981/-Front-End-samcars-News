import './App.css'
import Nav from './Components/Nav'
import Header from './Components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Title from './Components/Title'
import ArticlesList from './Components/ArticlesList'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />
        <Title />
        <Routes>
          <Route path="/" element={<ArticlesList />} />
          <Route path="/articles/:topic" element={<ArticlesList />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
export default App
