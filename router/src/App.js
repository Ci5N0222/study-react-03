import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './page/Home';
import NotFound from './page/NotFound';
import Videos from './page/Videos';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />
  },
  {
    path: '/videos',
    element: <Videos />
  }
]);

function App() {
  return (
    <RouterProvider router={ router } />
  );
}

export default App;
