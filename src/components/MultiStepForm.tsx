import { useState } from 'react';
import { Box, Stepper, Step, StepLabel } from '@mui/material'; 
import { Step1 } from './Step1';
import { Step2 } from './Step2';

const steps = ['Infos Básicas', 'Infos Profissionais'];

export function MultiStepForm() {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <Box sx={{ display: 'flex', gap: 6, width: '100%' }}>

            {/* Lado Esquerdo: O Stepper Vertical */}
            <Box sx={{ minWidth: 200 }}>
                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel
                                sx={{
                                    // Coloquei o fontWeight com W maiúsculo aqui!
                                    '& .MuiStepLabel-label.Mui-active': { fontWeight: 'bold', color: 'primary.main' }
                                }}
                            >
                                {label}
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>

            {/* Lado Direito: O Conteúdo da Etapa */}
            <Box sx={{ flexGrow: 1 }}>
                {activeStep === 0 && <Step1 onNext={() => setActiveStep(1)} />}

                {activeStep === 1 && (
                    <Step2
                        onBack={() => setActiveStep(0)}
                        onSubmit={() => alert('Formulário pronto para ser enviado!')}
                    />
                )}
            </Box>

        </Box>
    );
}