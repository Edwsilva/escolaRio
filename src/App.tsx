import Home from '../src/pages/Home'
import Global from './assets/styles/global';
import { ThemeProvider } from 'styled-components';
import theme from './assets/styles/theme';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes'

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* O tema vindo do assets */}
      <BrowserRouter>
         <Routes />
      </BrowserRouter>
      <Global />
    </ThemeProvider>
  );
}

export default App;
