import fruits from './mockData/fruits.json';
import Navigation from './components/Navigation';
import FruitsIndex from './components/FruitsIndex';
import FruitShow from './components/FruitShow';
import FruitForm from './components/FruitForm';
import FavoriteFruit from './components/FavoriteFruit';
import SetFavoriteFruit from './components/SetFavoriteFruit';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

function App() {


  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path = "/" element={< FruitsIndex />} fruits={ fruits }>
  //       <Route path = "/fruits/:fruitId" element={< FruitShow />} fruits={ fruits }/>
  //       <Route path = "/fruits/new" element={< FruitForm />} fruits={ fruits }/>
  //       <Route path = "/fav-fruit" element={< FavoriteFruit />} fruits={ fruits }/>
  //       <Route path = "/set-fav-fruit" element={< SetFavoriteFruit />} fruits={ fruits }/>
  //       <Route path = "*" element={<h2>"Page Not Found</h2>} />
  //     </Route>
  //   )
  // )


  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navigation />
          <FruitsIndex fruits={fruits}/>
        </>
      ),
    },
    {
      path: '/fruits/:fruitId',
      element: (
        <>
          <Navigation />
          <FruitShow fruits={fruits}/>
        </>
      ),
    },
    {
      path: '/fruits/new',
      element: (
        <>
          <Navigation />
          <FruitForm fruits={fruits}/>
        </>
      ),
    },
    {
      path: '/fav-fruit',
      element: (
        <>
          <Navigation />
          <FavoriteFruit fruits={fruits}/>
        </>
      ),
    },
    {
      path: '/set-fav-fruit',
      element: (
        <>
          <Navigation />
          <SetFavoriteFruit fruits={fruits}/>
        </>
      ),
    },
    {
      path: '*',
      element: (
        <>
          <Navigation/>,
          <h2>Page not found </h2>
        </>
      ),
    },
  ])



  return (
    <RouterProvider router={router} />
    );
}

export default App;
