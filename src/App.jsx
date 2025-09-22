import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import { Footer, Header, PageNotFound, Login, Register } from './components';
import { Home, RoomDetails } from './pages';


const App = () => {

  // const paths = [
  //   { path: '/', element: <Home /> },
  //   { path: '/room/:id', element: <RoomDetails /> },
  //   { path: '*', element: <PageNotFound /> },
  // ]

  // const router = createBrowserRouter(paths);
  // <RouterProvider router={router} /> 

  return (

    <main className=''>
      <BrowserRouter>

        <Header />

        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/room/:id'} element={<RoomDetails />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'*'} element={<PageNotFound />} />
          <Route path={'/register'} element={<Register />} />
        </Routes>

        {/* <Footer /> */}

      </BrowserRouter>
    </main>
  )
}

export default App