import * as React from "react";
import { TextField, Box, Slider, Button, Grid } from "@mui/material/";

const marks = [
    {
        value: 0,
        label: "0km",
    },
    {
        value: 2,
        label: "2",
    },
    {
        value: 3,
        label: "3",
    },
    {
        value: 5,
        label: "5km",
    },
];

function valuetext(value: number) {
    return `${value}km`;
}

function SetDistance() {
    return (
        <Box sx={{ width: 300 }}>
            <Slider
                aria-label="Custom marks"
                defaultValue={0}
                getAriaValueText={valuetext}
                step={1}
                valueLabelDisplay="auto"
                marks={marks}
            />
        </Box>
    );
}

function TextFieldSet() {
    return (
        <div>
            <TextField
                required
                id="outlined-id"
                label="ID"
                InputLabelProps={{
                    shrink: true,
                }}
            />

            <TextField
                id="outlined-password"
                label="PASSWORD"
                placeholder="비밀번호"
                type="password"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField
                id="outlinded-password-check"
                label="PASSWORD CHECK"
                placeholder="비밀번호 재입력"
                type="password"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField
                id="filled-basic"
                label="NICKNAME"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField
                id="filled-basic"
                label="EMAIL"
                placeholder="이메일 주소"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField
                id="outlined-number"
                label="PHONE NUMBER"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField
                id="outlined-number"
                label="ADDRESS"
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </div>
    );
}

function SingUpTitle() {
    const imageUrl =
        "https://cdn.pixabay.com/photo/2017/06/06/22/46/mediterranean-cuisine-2378758_1280.jpg";
    return (
        <Box
            style={{
                backgroundImage: imageUrl,
                width: "1200px",
                height: "150px",
            }}
        >
            <span style={{ fontFamily: "SpoqaBold", fontSize: "36px" }}>
                DORIGI
            </span>
            <span style={{ fontFamily: "SpoqaThin", fontSize: "36px" }}>
                Sign Up
            </span>
        </Box>
    );
}

export default function SignUp() {
    return (
        <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            textAlign="center"
        >
            <Grid item>
                <SingUpTitle />
            </Grid>
            <Grid item>
                <TextFieldSet />
            </Grid>
            <Grid item>
                <SetDistance />
            </Grid>
            <Grid item></Grid>
        </Grid>
    );
}
