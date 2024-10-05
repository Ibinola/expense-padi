import SignUp from './pages/auth/sign-up/SignUp'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <SignUp/>
    }
  ])

  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
