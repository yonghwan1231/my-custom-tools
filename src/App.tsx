import './App.css'
import { Routes, Route } from 'react-router-dom'
import { AppProviders } from 'AppProviders'
import {
  Dashboard,
  FileHandlerTest,
  ModalHandlerTest,
  SelectBoxTest,
  FormHandlerTest,
  SearchBoxTest,
  ReactQueryTest,
} from '@pages'

const App = () => {
  const routes = [
    {
      path: '/',
      element: <Dashboard />,
      children: [{ path: 'outlet', element: <SelectBoxTest /> }],
    },
    { path: '/select-box', element: <SelectBoxTest /> },
    { path: '/file-handler', element: <FileHandlerTest /> },
    { path: '/modal-handler', element: <ModalHandlerTest /> },
    { path: '/form-handler', element: <FormHandlerTest /> },
    { path: '/search-box', element: <SearchBoxTest /> },
    { path: '/react-query', element: <ReactQueryTest /> },
  ]

  return (
    <AppProviders>
      <Routes>
        {routes.map(({ children, ...route }, key) => (
          <Route key={key} {...route}>
            {children?.map((children) => <Route key={key} {...children} />)}
          </Route>
        ))}
      </Routes>
    </AppProviders>
  )
}

export default App
