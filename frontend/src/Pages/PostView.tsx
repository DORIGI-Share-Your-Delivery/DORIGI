import * as React from "react";
import { Grid, TextField, Button, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import KaKaoMap from "../Components/KakaoMap";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#F4F4F4",
  textAlign: "center",
}));

function FoodCategorySelection() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={2}>
        <p>분류:</p>
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
          <Box>02:04</Box>
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
        <Item style={{ backgroundColor: "#ffffff", marginBottom: "1%" }}>
          <Box>9,200/46,000</Box>
        </Item>
      </Grid>
      <Grid item xs={1}>
        <p>목표인원</p>
      </Grid>
      <Grid item xs={5}>
        <Item style={{ backgroundColor: "#ffffff", marginBottom: "1%" }}>
          <Box>1명 / 5명</Box>
        </Item>
      </Grid>
    </Grid>
  );
}

function RestaurantSelection() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} textAlign={"left"}>
        <p style={{ marginLeft: "1.5%" }}>가게:</p>
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
            <Grid item xs={11} marginLeft={1.5}>
              <Typography align="left" variant="subtitle1">
                봉추찜닭 이대점
              </Typography>
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
          <Typography align="left" variant="h6">
            봉추찜닭 뼈없는찜닭 시켜서 나눌 팟 구해요~
          </Typography>
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
          <Typography align="left" variant="subtitle2">
            연세로에서 시켜먹을 건데 일회용 그릇이 없으니 각자 식기 가져오셔서
            덜어가면 될 것 같아요.
          </Typography>
          {/* <TextField
            id="standard-basic"
            label="기타 사항 작성"
            variant="standard"
            style={{ marginBottom: "1%", width: "98%" }}
          ></TextField> */}
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
          참여하기
        </Button>
      </Grid>
    </Grid>
  );
}

export default function PostView() {
  return (
    <div style={{ backgroundImage: "../Assets/images/background" }}>
      <Box style={{ width: "1015px", margin: "0 auto" }}>
        <PostingPage />
      </Box>
    </div>
  );
}
