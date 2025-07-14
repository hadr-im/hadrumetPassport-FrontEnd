import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// Import your new generic page components
import CategoryPage from './pages/CategoryPage';
import ElementDetailPage from './pages/ElementDetailPage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:categorySlug" element={<CategoryPage />} />
          <Route path="/:categorySlug/:elementSlug" element={<ElementDetailPage />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;