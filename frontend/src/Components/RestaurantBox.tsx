import { ThemeProvider, createTheme } from "@mui/material";
import { Box, Grid, styled, Paper, Typography } from "@mui/material";

interface IRestaurantBoxinterface {
    restaurant: Restaurant;
}

interface Restaurant {
    name: string;
    address: string;
    pNumber: string;
    img: string;
}

const RestaurantBoxContainer = styled(Paper)({
    width: 300,
    height: 450,
    borderRadius: "5%",
    textAlign: "left",
});

function RestaurantDetail({ name, address, pNumber }: Partial<Restaurant>) {
    const theme = createTheme({
        typography: {
            subtitle1: {
                fontSize: 12,
                marginLeft: 20,
            },
            body1: {
                fontSize: 20,
                fontWeight: 500,
                marginLeft: 20,
                marginTop: 8,
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Typography>{name}</Typography>
            <Typography variant="subtitle1">주 소</Typography>
            <Typography>{address}</Typography>
            <Typography variant="subtitle1">전화번호</Typography>
            <Typography>{pNumber}</Typography>
        </ThemeProvider>
    );
}

function RestaurantImage({ img }: Partial<Restaurant>) {
    return (
        <Grid container spacing={0}>
            <Grid item xs={12}>
                <div style={{ height: "25px" }} />
                <div
                    style={{
                        width: "260px",
                        height: "180px",
                        margin: "0 auto",
                    }}
                >
                    <img src={img} style={{ width: "100%", height: "100%" }} />
                </div>
            </Grid>
        </Grid>
    );
}

function RestaurantBox({ restaurant }: IRestaurantBoxinterface) {
    return (
        <RestaurantBoxContainer>
            <RestaurantImage img={restaurant.img} />
            <RestaurantDetail
                name={restaurant.name}
                pNumber={restaurant.pNumber}
                address={restaurant.address}
            />
        </RestaurantBoxContainer>
    );
}

export default RestaurantBox;
