import { Route, Routes } from 'react-router-dom'
import './App.css'
import Comments from './comp/Comments'
import Home from './pages/Home'
import Rating from './pages/Rating'
import NotFound from './pages/NotFound'
import Observer from './pages/Observer'
import ThinkGrid from './pages/ThinkGrid'
import SaapSidhi from './pages/SaapSidhi'
import { RaceCondition } from './pages/RaceCondition'
import QueryExpo from './pages/QueryExpo'


function App() {
  
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/star" element={<Rating />} />
        <Route path="/observer" element={<Observer />} />
        <Route path="/grid" element={<ThinkGrid />} />
        <Route path="/saap_sidhi" element={<SaapSidhi />} />
        <Route path="/race" element={<RaceCondition />} />
        <Route path="/query_expo" element={<QueryExpo />} />
        <Route path="*" element={<NotFound />} /> {/* 404 Page */}
     </Routes>
  )
}

export default App
