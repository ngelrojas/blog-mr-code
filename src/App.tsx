import './App.css';
import { RouterProvider } from 'react-router-dom';
import { mainRoutes } from './routes/webSite';
import { ThemeProvider } from './themeContext';

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={mainRoutes} />
    </ThemeProvider>
  );
}

export default App;
