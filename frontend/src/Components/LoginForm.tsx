import TextField from "@mui/material/TextField";
import { Box, Button, Grid } from "@mui/material";

function LoginForm() {
    return (
        <Box
            sx={{
                width: 300,
                height: 300,
            }}
        >
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <TextField
                        label="ID"
                        required
                        fullWidth
                        name="id"
                        autoComplete="id"
                        autoFocus
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Password"
                        type="password"
                        required
                        fullWidth
                        name="password"
                        autoComplete="current-password"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, md: 2 }}
                    >
                        Login
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default LoginForm;
