import './App.css'
import { RouterProvider } from "react-router-dom";
import { webSiteRoutes } from "./routes/webSite";
import { WebSiteLayout } from "./layouts/webSite";
import { ThemeProvider} from "./themeContext";

function App() {

  return (
      <ThemeProvider>
        <WebSiteLayout>
            <RouterProvider router={webSiteRoutes} />
        </WebSiteLayout>
      </ThemeProvider>
  )
}

export default App
