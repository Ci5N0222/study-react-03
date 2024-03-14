## React-Router
- Outlet
    - Nav bar와 Main 페이지를 분리하기 위해 사용
- useNavigate()
    - 해당 URL로 이동
- useParam()
    - URI로 들어온 id값을 사용

```bash
install:
$ yarn add react-router-dom

use:
[App.js]
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
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
  }
]);

export default function App() {
  return (
    <RouterProvider router={ router } />
  );
}

[Root.jsx]
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Root() {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
}
```

