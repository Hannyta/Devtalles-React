import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useFoorm';
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth';

export const LoginPage = () => {

  const { status, errorMessage } = useSelector( state => state.auth );

  const dispatch = useDispatch();
  const { email, password, onInputChange } = useForm({
    email: '',
    password: ''
  });

  const isAuthenticating = useMemo( () => status === 'checking', [status] );

  const onSubmit = ( event ) => {
    event.preventDefault();
    //console.log({ email, password });
    dispatch( startLoginWithEmailPassword({ email, password }) );
  }

  const onGoogleSignIn = () => {
    console.log('onGoogleSignIn');
    dispatch( startGoogleSignIn() );
  }

  return (
    <AuthLayout title="Login">
      <form onSubmit={ onSubmit } className='animate__animated animate__fadeIn animate__faster'>
        <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 12 }}>
              <TextField
                label="Correo"
                type="email"
                placeholder="correo@ejemplo.com"
                fullWidth
                name="email"
                value={ email }
                onChange={ onInputChange }
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 12 }}>
              <TextField
                label="Contraseña"
                type="password"
                placeholder="Contraseña"
                fullWidth
                name="password"
                value={ password }
                onChange={ onInputChange }
              />
            </Grid>

            <Grid
              container
              display={ !!errorMessage ? '' : 'none' }
              sx={{ mt: 1 }}>
                <Grid xs={12}>
                  <Alert severity="error">{ errorMessage }</Alert>
                </Grid>
              </Grid>

              <Grid size={{ xs: 12 }}>
                <Button 
                  type="submit" 
                  variant="contained" 
                  fullWidth 
                  disabled={ isAuthenticating }
                >
                Login
                </Button>
              </Grid>

              <Grid size={{ xs: 12 }}>
                <Button 
                  disabled={ isAuthenticating}
                  variant="contained" 
                  fullWidth 
                  onClick={ onGoogleSignIn }
                >
                  <Google />
                  <Typography sx={{ ml: 1}}> Google </Typography>
                </Button>
              </Grid>
            
            <Grid container direction='row' justifyContent='end'>
              <Link component={RouterLink} color='inherit' to="/auth/register">
                Crear una cuenta
              </Link>
            </Grid>
          </Grid>
      </form>
    </AuthLayout>
  );
};
