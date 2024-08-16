import './App.css'
import { Routes, Route } from 'react-router-dom'
import {
  Dashboard,
  FileHandlerTest,
  ModalHandlerTest,
  SelectBoxTest,
  FormHandlerTest,
  SearchBoxTest,
} from '@pages'

function App() {
  const routes = [
    { path: '/', element: <Dashboard /> },
    { path: '/select-box', element: <SelectBoxTest /> },
    { path: '/file-handler', element: <FileHandlerTest /> },
    { path: '/modal-handler', element: <ModalHandlerTest /> },
    { path: '/form-handler', element: <FormHandlerTest /> },
    { path: '/search-box', element: <SearchBoxTest /> },
  ]

  return (
    <Routes>
      {routes.map((route, key) => (
        <Route key={key} path={route.path} element={route.element} />
      ))}
    </Routes>
  )
}

export default App
