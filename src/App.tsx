import { CssBaseline, ThemeProvider, createTheme, Box, Typography } from '@mui/material';
import { MultiStepForm } from './components/MultiStepForm';

const theme = createTheme({
  palette: {
    primary: {
      main: '#22c55e',
    },
    background: {
      default: '#f8fafc',
    },
  },
  typography: {
    fontFamily: 'Inter, Roboto, sans-serif',
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <Box sx={{ width: 250, bgcolor: 'white', borderRight: '1px solid #e0e0e0', p: 2 }}>
          <Typography variant="h6" sx={{ color: '#22c55e', fontWeight: 'bold' }}>
            Flugo
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1, p: { xs: 2, md: 6 } }}>

          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 4 }}>
            Colaboradores {'>'} <strong>Cadastrar Colaborador</strong>
          </Typography>

          <Box sx={{ bgcolor: 'white', p: 4, borderRadius: 2, boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
            <MultiStepForm />
          </Box>

        </Box>

      </Box>

    </ThemeProvider>
  );
}

export default App;