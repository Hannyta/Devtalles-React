import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
  return (
    <AuthLayout title="Crear cuenta">
      <form>
          <Grid container spacing={2}>

            <Grid size={{ xs: 12, sm: 12 }}>
              <TextField
                label="Nombre completo"
                type="text"
                placeholder="Pedro Perez"
                fullWidth
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 12 }}>
              <TextField
                label="Correo"
                type="email"
                placeholder="correo@ejemplo.com"
                fullWidth
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 12 }}>
              <TextField
                label="Contraseña"
                type="password"
                placeholder="********"
                fullWidth
              />
            </Grid>

              <Grid size={{ xs: 12 }}>
                <Button variant="contained" fullWidth>
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

