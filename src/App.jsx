import './Index.css'
import { Route , RouterProvider , createBrowserRouter , createRoutesFromElements
 } from "react-router-dom";
 import Root from './pages/Root';
 import Home from './pages/home';
 import AddUser from './pages/AddUser';
 import EditUser from './pages/EditUser';

 const router = createBrowserRouter(createRoutesFromElements(
      <Route path='/' element={<Root/>}>
        <Route index element={<Home/>}/>
        <Route path='add' element={<AddUser/>}/>
        <Route path='edit/:id' element={<EditUser/>}/>
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
