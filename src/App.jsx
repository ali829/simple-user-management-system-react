import './Index.css'
import { Route , RouterProvider , createBrowserRouter , createRoutesFromElements
 } from "react-router-dom";
 import Root from './pages/Root';
 import Home from './pages/home';

 const router = createBrowserRouter(createRoutesFromElements(
      <Route path='/' element={<Root/>}>
        <Route index element={<Home/>}/>
      </Route>
 ))

function App() {
  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}

export default App
