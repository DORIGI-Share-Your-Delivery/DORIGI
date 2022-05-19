import * as React from "react";
import { TextField, Box, Slider, Button, Grid, styled } from "@mui/material/";

const marks = [
  {
    value: 0,
    label: "0km",
  },
  {
    value: 20,
    label: "1km",
  },
  {
    value: 40,
    label: "2km",
  },
  {
    value: 60,
    label: "3km",
  },
  {
    value: 80,
    label: "4km",
  },
  {
    value: 100,
    label: "5km",
  },
];

function valuetext(value: number) {
  return `${value}km`;
}

function SetDistance() {
  return (
    <Box sx={{ width: 400 }}>
      <Slider
        aria-label="Custom marks"
        defaultValue={0}
        getAriaValueText={valuetext}
        step={20}
        valueLabelDisplay="off"
        size="medium"
        marks={marks}
      />
    </Box>
  );
}

function TextFieldSet() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={2}
    >
      <Grid item>
        <TextField
          label="ID"
          placeholder="아이디"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button variant="contained">중복확인</Button>
      </Grid>
      <Grid item>
        <TextField
          label="PASSWORD"
          placeholder="비밀번호"
          type="password"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item>
        <TextField
          label="PASSWORD CHECK"
          placeholder="비밀번호 확인"
          type="password"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item>
        <TextField
          label="NICKNAME"
          placeholder="닉네임"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item>
        <TextField
          label="EMAIL"
          placeholder="이메일 주소"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button variant="contained">중복확인</Button>
      </Grid>
      <Grid item>
        <TextField
          label="PHONE NUMBER"
          placeholder="전화 번호"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item>
        <TextField
          label="ADDRESS"
          placeholder="주소"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item>
        <TextField
          label="동네범위"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
    </Grid>
  );
}

function SingUpTitle() {
  const imageUrl =
    "https://cdn.pixabay.com/photo/2017/06/06/22/46/mediterranean-cuisine-2378758_1280.jpg";
  return (
    <Grid
      justifyContent="center"
      alignItems="center"
      container
      style={{
        backgroundImage: `url(${imageUrl})`,
        width: "1700px",
        height: "150px",
      }}
    >
      <Grid item>
        <span
          style={{
            fontFamily: "SpoqaBold",
            fontSize: "36px",
            marginTop: "52.5px",
          }}
        >
          DORIGI
        </span>
        <span style={{ fontFamily: "SpoqaThin", fontSize: "36px" }}>
          Sign Up
        </span>
      </Grid>
    </Grid>
  );
}

const GridItem = styled(Grid)({
  width: "70%",
});

export default function SignUp() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      textAlign="center"
      spacing={2}
    >
      <GridItem item>
        <SingUpTitle />
      </GridItem>
      <GridItem item>
        <TextFieldSet />
      </GridItem>
      <GridItem item>
        <SetDistance />
      </GridItem>
      <GridItem item><Button variant="contained">회원가입</Button></GridItem>
    </Grid>
  );
}
