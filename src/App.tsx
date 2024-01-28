import './App.css'
import { RouterProvider } from "react-router-dom";
import { webSiteRoutes } from "./routes/webSite";
import { WebSiteLayout } from "./layouts/webSite";

function App() {

  return (
    <WebSiteLayout>
        <RouterProvider router={webSiteRoutes} />
    </WebSiteLayout>
  )
}

export default App
