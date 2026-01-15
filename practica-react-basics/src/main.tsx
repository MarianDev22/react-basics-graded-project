
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { routes } from '@core/router/routes.tsx'

const appRouter =createBrowserRouter(routes)

createRoot(document.getElementById('root') as HTMLElement).render(
 
    <RouterProvider router={appRouter}/>
 
)
