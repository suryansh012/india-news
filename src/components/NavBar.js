import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function NavBar(props) {
  const [localQuery, setLocalQuery] = useState('')
  const { setSearchQuery } = props
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()

    const trimmedQuery = localQuery.trim()
    if (trimmedQuery === '') {
      alert('Please enter a non-empty search query.')
      return
    }

    setSearchQuery(localQuery)
    navigate('/search')
  }

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            India-News
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/lifestyle">
                  Lifestyle
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/scienceandtechnology">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/world">
                  World
                </Link>
              </li>
            </ul>
            <form className="d-flex" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={localQuery}
                style={{ maxWidth: '300px' }}
                onChange={(e) => setLocalQuery(e.target.value)}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}
