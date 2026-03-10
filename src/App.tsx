import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <h1>Desafio Flugo - Form</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;