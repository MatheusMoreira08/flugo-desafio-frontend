import { Box, TextField, Typography, FormControlLabel, Switch, Button } from '@mui/material';

interface Step1Props {
    onNext: () => void;
}

export function Step1({ onNext }: Step1Props) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, maxWidth: 600 }}>

            <Typography variant="h5" sx={{ fontWeight: 600, color: '#333' }}>
                Informações Básicas
            </Typography>

            <TextField
                label="Nome"
                variant="outlined"
                placeholder="João da Silva"
                fullWidth
                sx={{ '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'primary.main' } }}
            />

            <TextField
                label="E-mail"
                variant="outlined"
                placeholder="e.g. john@gmail.com"
                type="email"
                fullWidth
            />

            <FormControlLabel
                control={<Switch defaultChecked color="primary" />}
                label="Ativar ao criar"
            />

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
                <Button variant="text" disabled sx={{ color: '#9e9e9e' }}>
                    Voltar
                </Button>
                <Button variant="contained" color="primary" disableElevation onClick={onNext}>
                    Próximo
                </Button>
            </Box>

        </Box>
    );
}