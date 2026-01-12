import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useFoorm';
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth';

export const LoginPage = () => {

  const { status } = useSelector( state => state.auth );

  const dispatch = useDispatch();
  const { email, password, onInputChange } = useForm({
    email: 'hanny@test.com',
    password: '123456'
  });

  const isAuthenticating = useMemo( () => status === 'checking', [status] );

  const onSubmit = ( event ) => {
    event.preventDefault();
    console.log({ email, password });
    dispatch( checkingAuthentication( ) );
  }

  const onGoogleSignIn = () => {
    console.log('Google Sign-In');
    dispatch( startGoogleSignIn() );
  }

  return (
    <AuthLayout title="Login">
      <form onSubmit={ onSubmit }>
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
                placeholder="********"
                fullWidth
                name="password"
                value={ password }
                onChange={ onInputChange }
              />
            </Grid>

              <Grid size={{ xs: 12 }}>
                <Button 
                  type="submit" 
                  variant="contained" 
                  fullWidth 
                  disabled={ isAuthenticating }
                >
                Ingresar
                </Button>
              </Grid>

              <Grid size={{ xs: 12 }}>
                <Button 
                  variant="outlined" 
                  fullWidth 
                  onClick={ onGoogleSignIn }
                  disabled={ isAuthenticating}
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
