import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './page/Home';
import NotFound from './page/NotFound';
import Videos from './page/Videos';
import Root from './page/Root';
import VideoDetail from './page/VideoDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {index: true, element: <Home />},
      {path: 'videos', element: <Videos />},
      {path: 'videos/:videoId', element: <VideoDetail />}
    ]
  },
  {
    path: '/videos',
    element: <Videos />
  }
]);

export default function App() {
  return (
    <RouterProvider router={ router } />
  );
}
