import { Link } from 'react-router-dom'

export const Dashboard = () => {
  const pageList = [
    { name: 'SelectBox', path: '/select-box' },
    { name: 'SearchBar', path: '/search-box?page=1' },
    { name: 'useModalHandler', path: '/modal-handler' },
    { name: 'useFileHandler', path: '/file-handler' },
    { name: 'useFormHandler', path: '/form-handler' },
  ]

  return (
    <main id="dashboard" className="container">
      <section>
        <fieldset>
          <legend>컴포넌트, 훅 Test Page</legend>

          <ul>
            {pageList.map((el, idx) => (
              <li key={idx}>
                <Link to={el.path}>{el.name}</Link>
              </li>
            ))}
          </ul>
        </fieldset>
      </section>
    </main>
  )
}
