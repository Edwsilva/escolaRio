import Sidebar from './components/Sidebar';
import Global from './assets/styles/global';
import { ThemeProvider } from 'styled-components';
import theme from './assets/styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* O tema vindo do assets */}
      <div>
        <Sidebar />
      </div>
      <Global />
    </ThemeProvider>
  );
}

export default App;
