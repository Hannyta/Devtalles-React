import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';

export const LoginPage = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
    >
      <Grid
        className="box-shadow"
        size={{ xs: 12, sm: 3 }}
        sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2 }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>
          Login
        </Typography>

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
              <Button variant="contained" fullWidth sx={{ mt: 1 }}>
                Ingresar
              </Button>
            </Grid>

            <Grid size={{ xs: 12 }}>
              <Button
                variant="outlined"
                fullWidth
                startIcon={<Google />}
                sx={{ mt: 0.1 }}
              >
                Google
              </Button>
            </Grid>

            <Grid size={{ xs: 12 }} sx={{ mt: 1 }}>
              <Link component={RouterLink} to="/register">
                Crear una cuenta
              </Link>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};
