import { Box, TextField, Typography, Button, MenuItem } from '@mui/material';

interface Step2Props {
    onBack: () => void;
    onSubmit: () => void;
}

export function Step2({ onBack, onSubmit }: Step2Props) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, maxWidth: 600 }}>

            <Typography variant="h5" sx={{ fontWeight: 600, color: '#333' }}>
                Informações Profissionais
            </Typography>

            <TextField
                select
                label="Departamento"
                variant="outlined"
                fullWidth
                defaultValue=""
                sx={{ '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'primary.main' } }}
            >
                <MenuItem value="TI">TI</MenuItem>
                <MenuItem value="Design">Design</MenuItem>
                <MenuItem value="Marketing">Marketing</MenuItem>
                <MenuItem value="Produto">Produto</MenuItem>
            </TextField>

            <TextField
                label="Cargo"
                variant="outlined"
                placeholder="Ex: Desenvolvedor Front-end"
                fullWidth
                sx={{ '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'primary.main' } }}
            />

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
                <Button variant="text" onClick={onBack} sx={{ color: '#9e9e9e', fontWeight: 600 }}>
                    Voltar
                </Button>
                <Button variant="contained" color="primary" disableElevation onClick={onSubmit}>
                    Finalizar Cadastro
                </Button>
            </Box>

        </Box>
    );
}