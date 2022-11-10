import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import AllCats from './pages/allCats/AllCats'
import LikedCats from './pages/likedCats/LikedCats'
import NotFound from './pages/notFound/NotFound'

// Styles
import './styles/Style.css'

const App: FC = (): JSX.Element => {
  return (
    <div>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<AllCats />} />
        <Route path='/LikedCats' element={<LikedCats />} />
      </Routes>
    </div>
  )
}

export default App
