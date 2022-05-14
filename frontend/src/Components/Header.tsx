import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material/";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "../Assets/styles/fonts.css";
import "../Assets/styles/components.css";

//section data type -> interface
interface section {
    title: string;
    url: string;
}

function Header(props: { sections: section[] }) {
    const { sections } = props;

    return (
        <div className="header">
            <Container style={{ padding: "0px" }}>
                {/*Grid : xs maximum 12*/}
                <Grid container spacing={1}>
                    <Grid item xs={4}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "left",
                                "& > *": {
                                    m: 1,
                                },
                            }}
                        >
                            <Link
                                to="/../"
                                style={{
                                    textDecoration: "none",
                                    color: "#151515",
                                    marginRight: "0px",
                                }}
                            >
                                <span style={{ fontFamily: "SpoqaBold" }}>
                                    DORIGI
                                </span>
                                <span style={{ fontFamily: "SpoqaThin" }}>
                                    Food Sharing Platform
                                </span>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                "& > *": {
                                    m: 1,
                                },
                                justifyContent: "space-between",
                            }}
                        >
                            {/* 키값 에러가 자꾸 떠서 키값 추가 */}
                            {sections.map((section, i: number) => (
                                <Link
                                    key={i}
                                    style={{
                                        textDecoration: "none",
                                        color: "#616161",
                                        fontFamily: "SpoqaRegular",
                                        fontSize: "15px",
                                    }}
                                    to={section.url}
                                >
                                    {section.title}
                                </Link>
                            ))}
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "right",
                                "& > *": {
                                    m: 1,
                                },
                            }}
                        >
                            <Button
                                variant="contained"
                                style={{ marginRight: "10px" }}
                            >
                                signup
                            </Button>
                            <Button
                                variant="outlined"
                                href="http://localhost:3000/login"
                            >
                                signin
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Header;
