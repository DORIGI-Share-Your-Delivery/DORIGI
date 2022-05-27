import { ThemeProvider, createTheme } from "@mui/material";
import { Link, Grid, styled, Paper, Typography } from "@mui/material";

// 식당 카드 제작 컴포넌트,
// porps : restaurant
// restaurant은 총 네 개의 값을 가진 객체이다.
// restaurant props : name , address , pNumber , img
// 모든 값은 각각 식당의 이름, 주소, 전화번호, 이미지이며, 위 키값들은 추후 이름이 바뀔 수 있다.

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
    const url = `http://localhost:3000/restaurant/${name}`;

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
    const Title = styled(Link)({
        fontSize: 20,
        fontWeight: 500,
        marginLeft: 20,
        color: "black",
    });

    return (
        <ThemeProvider theme={theme}>
            <Title href={url} underline="none">
                {name}
            </Title>
            <Typography variant="subtitle1">주 소</Typography>
            <Typography>{address}</Typography>
            <Typography variant="subtitle1">전화번호</Typography>
            <Typography>{pNumber}</Typography>
        </ThemeProvider>
    );
}

function RestaurantImage({ img }: Partial<Restaurant>) {
    return (
        <Grid container spacing={1} marginBottom={3}>
            <Grid item xs={12}>
                <div style={{ height: "25px" }} />
                <div
                    style={{
                        width: "260px",
                        height: "180px",
                        margin: "0 auto",
                    }}
                >
                    <img
                        src={img}
                        alt=""
                        style={{ width: "100%", height: "100%" }}
                    />
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
