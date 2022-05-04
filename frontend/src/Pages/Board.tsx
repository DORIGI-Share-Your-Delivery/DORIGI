import * as React from "react";
import { Grid, TextField, Button, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import KaKaoMap from "../Components/KakoMap";
import SearchIcon from "@mui/icons-material/Search";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#F4F4F4",
    textAlign: "center",
}));

function FoodCategorySelection() {
    return (
        <Grid container spacing={1}>
            <Grid item xs={2}>
                <p>분류 선택</p>
            </Grid>
            <Grid item xs={2}>
                <Button
                    variant="contained"
                    style={{
                        backgroundColor: "#de7164",
                        width: "90%",
                        fontSize: "16px",
                    }}
                >
                    한 식
                </Button>
            </Grid>
            <Grid item xs={2}>
                <Button
                    variant="contained"
                    style={{
                        backgroundColor: "#de7164",
                        width: "90%",
                        fontSize: "16px",
                    }}
                >
                    분식
                </Button>
            </Grid>
            <Grid item xs={2}>
                <Button
                    variant="contained"
                    style={{
                        backgroundColor: "#de7164",
                        width: "90%",
                        fontSize: "16px",
                    }}
                >
                    중식
                </Button>
            </Grid>
            <Grid item xs={2}>
                <Button
                    variant="contained"
                    style={{
                        backgroundColor: "#de7164",
                        width: "90%",
                        fontSize: "16px",
                    }}
                >
                    일식
                </Button>
            </Grid>
            <Grid item xs={2}>
                <Button
                    variant="contained"
                    style={{
                        backgroundColor: "#de7164",
                        width: "90%",
                        fontSize: "16px",
                    }}
                >
                    양식
                </Button>
            </Grid>
        </Grid>
    );
}

function SetDeadLine() {
    return (
        <Grid container spacing={1}>
            <Grid item xs={12} textAlign={"left"}>
                <p style={{ marginLeft: "1.5%" }}>마감까지</p>
            </Grid>
            <Grid item xs={12}>
                <Item
                    style={{
                        backgroundColor: "#ffffff",
                        margin: "1%",
                        marginTop: "0",
                    }}
                >
                    <TextField
                        id="standard-basic"
                        label="시간 입력"
                        variant="standard"
                        style={{ marginBottom: "5px", width: "98%" }}
                    ></TextField>
                </Item>
            </Grid>
        </Grid>
    );
}

function PricePersonnelSelection() {
    return (
        <Grid container spacing={1}>
            <Grid item xs={1}>
                <p>목표금액</p>
            </Grid>
            <Grid item xs={5}>
                <Item
                    style={{ backgroundColor: "#ffffff", marginBottom: "1%" }}
                >
                    <TextField
                        variant="standard"
                        label="목표금액을 입력해주십시오"
                        size="small"
                        style={{ marginBottom: "5px", width: "95%" }}
                    ></TextField>
                </Item>
            </Grid>
            <Grid item xs={1}>
                <p>목표인원</p>
            </Grid>
            <Grid item xs={5}>
                <Item
                    style={{ backgroundColor: "#ffffff", marginBottom: "1%" }}
                >
                    <TextField
                        variant="standard"
                        label="목표인원을 입력해주십시오"
                        size="small"
                        style={{ marginBottom: "5px", width: "95%" }}
                    ></TextField>
                </Item>
            </Grid>
        </Grid>
    );
}

function RestaurantSelection() {
    return (
        <Grid container spacing={1}>
            <Grid item xs={12} textAlign={"left"}>
                <p style={{ marginLeft: "1.5%" }}>가게 설정</p>
            </Grid>
            <Grid item xs={12}>
                <Item
                    style={{
                        backgroundColor: "#ffffff",
                        margin: "1%",
                        marginTop: "0",
                    }}
                >
                    <Grid container spacing={1}>
                        <Grid item xs={11.3} marginLeft={1.5}>
                            <TextField
                                id="standard-basic"
                                label="주소, 음식 검색"
                                variant="standard"
                                style={{ width: "100%" }}
                            />
                        </Grid>
                        <Grid item xs marginRight={1.5}>
                            <Button>
                                <SearchIcon
                                    fontSize="large"
                                    htmlColor="#93959b"
                                />
                            </Button>
                        </Grid>
                        <Grid item xs={12} marginLeft={1.5} marginRight={1.5}>
                            <KaKaoMap></KaKaoMap>
                        </Grid>
                    </Grid>
                </Item>
            </Grid>
        </Grid>
    );
}

function PostingPage() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Item elevation={0}>
                    <TextField
                        label="제목 입력"
                        variant="standard"
                        size="medium"
                        style={{
                            marginBottom: "5px",
                            marginLeft: "5px",
                            width: "98%",
                        }}
                    />
                </Item>
            </Grid>
            <Grid item xs={12}>
                <Item elevation={0}>
                    <FoodCategorySelection />
                </Item>
            </Grid>
            <Grid item xs={12}>
                <Item elevation={0}>
                    <RestaurantSelection />
                </Item>
            </Grid>
            <Grid item xs={12}>
                <Item elevation={0}>
                    <PricePersonnelSelection />
                </Item>
            </Grid>
            <Grid item xs={12}>
                <Item elevation={0}>
                    <SetDeadLine />
                </Item>
            </Grid>
            <Grid item xs={12}>
                <Item elevation={0}>
                    <TextField
                        id="standard-basic"
                        label="기타 사항 작성"
                        variant="standard"
                        style={{ marginBottom: "1%", width: "98%" }}
                    ></TextField>
                </Item>
            </Grid>
            <Grid item xs={12}>
                <Button
                    variant="contained"
                    style={{
                        backgroundColor: "#de7164",
                        width: "10%",
                        textAlign: "center",
                        margin: "0 auto",
                    }}
                >
                    작성완료
                </Button>
            </Grid>
        </Grid>
    );
}

export default function Board() {
    return (
        <div style={{ backgroundImage: "../Assets/images/background" }}>
            <Box style={{ width: "1015px", margin: "0 auto" }}>
                <PostingPage />
            </Box>
        </div>
    );
}
