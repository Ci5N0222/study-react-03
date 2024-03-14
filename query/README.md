## React-Query Start


```bash
install:
    $ yarn add @tanstack/react-query

use:
    [App.js]
    import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
    const queryClient = new QueryClient();
    export default function App() {
        return (
            <QueryClientProvider client={ queryClient }>
            <App />
            </QueryClientProvider>
        );
    }
```


## React-Query Devtools
```bash
install:
    $ yarn add @tanstack/react-query-devtools

use:
    [App.js]
    import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

    const queryClient = new QueryClient();

    export default function App() {
        return (
            <QueryClientProvider client={ queryClient }>
            <App />
            // 리액트 쿼리 최 하단에 위치
            <ReactQueryDevtools initialIsOpen={ false } />
            </QueryClientProvider>
        );
    }
```