import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <form>
          <Grid container spacing={2}>
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
                Ingresar
                </Button>
              </Grid>

              <Grid size={{ xs: 12 }}>
                <Button variant="outlined" fullWidth>
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
