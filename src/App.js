import { useState } from 'react'
import NavBar from './components/NavBar'
import NewsSearch from './pages/NewsSearch'
import NewsCategory from './pages/NewsCategory'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const [progress, setProgress] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div>
      <Router>
        <NavBar setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <NewsCategory
                setProgress={setProgress}
                key="india"
                category="india"
              />
            }
          />
          <Route
            exact
            path="/search"
            element={
              <NewsSearch
                setProgress={setProgress}
                searchQuery={searchQuery}
                key="india"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <NewsCategory
                setProgress={setProgress}
                key="business"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <NewsCategory
                setProgress={setProgress}
                key="entertainment"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/lifestyle"
            element={
              <NewsCategory
                setProgress={setProgress}
                key="lifestyle"
                category="lifestyle"
              />
            }
          />
          <Route
            exact
            path="/politics"
            element={
              <NewsCategory
                setProgress={setProgress}
                key="politics"
                category="politics"
              />
            }
          />
          <Route
            exact
            path="/world"
            element={
              <NewsCategory
                setProgress={setProgress}
                key="world"
                category="world"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <NewsCategory
                setProgress={setProgress}
                key="sports"
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/scienceandtechnology"
            element={
              <NewsCategory
                setProgress={setProgress}
                key="scienceandtechnology"
                category="scienceandtechnology"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
