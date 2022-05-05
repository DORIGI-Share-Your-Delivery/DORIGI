import LoginForm from "../Components/LoginForm";
import { Box, Grid, Container } from "@mui/material";

function Logo() {
    return (
        <span>
            <span style={{ fontFamily: "SpoqaBold" }}>DORIGI</span>
            <span style={{ fontFamily: "SpoqaThin" }}>Sign In</span>
        </span>
    );
}

export default function Login() {
    return (
        <Container fixed>
            <Grid container>
                <Grid item xs={5}>
                    {/* 여기다가 그림 넣어용 */}
                </Grid>
                <Grid item xs={7}>
                    <Grid item xs={2}>
                        <Logo></Logo>
                    </Grid>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            marginTop: 3,
                        }}
                    >
                        <LoginForm />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}
