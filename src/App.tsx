import Home from '../src/pages/Home'
import Global from './assets/styles/global';
import { ThemeProvider } from 'styled-components';
import theme from './assets/styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* O tema vindo do assets */}
      <div> 
        <Home />
      </div>
      <Global />
    </ThemeProvider>
  );
}

export default App;
