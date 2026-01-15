import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCreatingUserWithEmailPassword } from '../../store/auth';

const formData = {
  displayName: '',
  email: '',
  password: '',
};

const formValidations = {
  displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio.' ],
  email: [ (value) => value.includes('@'), 'El correo debe tener un @.' ],
  password: [ (value) => value.length >= 6, 'La contraseña debe tener más de 6 letras.' ],
};

export const RegisterPage = () => {

  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { status, errorMessage } = useSelector( state => state.auth );
  const isCheckingAuthentication = useMemo( () => status === 'checking', [status] );

  const {
    displayName, email, password, onInputChange, formState,
    displayNameValid, emailValid, passwordValid, isFormValid 
  } = useForm(formData, formValidations );
  
  const onSubmit = ( event ) => {
    event.preventDefault();
    setFormSubmitted(true);

    if ( !isFormValid ) return;
    
    dispatch( startCreatingUserWithEmailPassword( formState ) );
  }

  return (
    <AuthLayout title="Crear cuenta">
      <form onSubmit={ onSubmit } className='animate__animated animate__fadeIn animate__faster'>
          <Grid container spacing={2}>

            <Grid size={{ xs: 12, sm: 12 }}>
              <TextField
                label="Nombre completo"
                type="text"
                placeholder="Pedro Perez"
                fullWidth
                name="displayName"
                value={ displayName }
                onChange={ onInputChange }
                error={ !!displayNameValid && formSubmitted }
                helperText={ displayNameValid }
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 12 }}>
              <TextField
                label="Correo"
                type="email"
                placeholder="correo@ejemplo.com"
                fullWidth
                name="email"
                value={ email }
                onChange={ onInputChange }
                error={ !!emailValid && formSubmitted }
                helperText={ emailValid }
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 12 }}>
              <TextField
                label="Contraseña"
                type="password"
                placeholder="********"
                fullWidth
                name="password"
                value={ password }
                onChange={ onInputChange }
                error={ !!passwordValid && formSubmitted }
                helperText={ passwordValid }
              />
            </Grid>

            <Grid xs={12} display={ !!errorMessage ? '' : 'none' } >
              <Alert severity="error">{ errorMessage }</Alert>
            </Grid>

            <Grid size={{ xs: 12 }}>
              <Button
                disabled={ isCheckingAuthentication }
                type="submit"
                variant="contained" 
                fullWidth>
                  Crear cuenta
              </Button>
            </Grid>
            
            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{ mr: 1 }} >¿Ya tienes cuenta?</Typography>
              <Link component={RouterLink} color='inherit' to="/auth/login">
                Ingresar
              </Link>
            </Grid>

          </Grid>

        </form>

    </AuthLayout>
  );
};

