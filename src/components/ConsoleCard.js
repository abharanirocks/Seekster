import React, { useState } from "react";
import "../styles/ConsoleCard.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardHeader } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { saveWebsite } from "../Api/WebsiteApi";

export default function ConsoleCard() {
  const [website, setWebsite] = useState({
    seed: "",
  });

  const resetWebsite = () => {
    setWebsite({
      seed: "",
    });
  };

  const handleChange = (event, property) => {
    setWebsite({ ...website, [property]: event.target.value });
  };

  const createWebsite = (event) => {
    event.preventDefault();

    saveWebsite(website)
      .then((response) => {
        if (response.status === "OK") {
          alert(response.message);
          resetWebsite();
        } else if (response.status === "BAD_REQUEST") {
          alert(response.message);
          //handle error to show form
          alert(response?.data?.error);
        } else {
          alert(response.message);
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="consoleCard">
      <Card sx={{ minWidth: 275, background: "#1B1C1D" }}>
        <CardHeader
          sx={{ mb: 0, pb: 0 }}
          title={
            <Typography variant="h2" color="#CCC">
              Welcome to Seekster Search Console
            </Typography>
          }
        />
        <CardHeader
          sx={{ mt: 0, pt: 0 }}
          title={
            <Typography variant="h6" color="#CCC" align="center">
              To Start Crawl, Submit Your Website Home Url.
            </Typography>
          }
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="icon">
            <svg width="48" height="36" viewBox="0 0 48 36">
              <g fill="none">
                <rect x="17" width="14" height="8" fill="#BDBDBD"></rect>
                <rect x="17" y="28" width="14" height="8" fill="#BDBDBD"></rect>
                <rect x="23" y="8" width="2" height="20" fill="#BDBDBD"></rect>
                <rect x="6" y="18" width="2" height="10" fill="#BDBDBD"></rect>
                <rect x="6" y="18" width="36" height="2" fill="#BDBDBD"></rect>
                <rect x="40" y="18" width="2" height="10" fill="#BDBDBD"></rect>
                <rect x="34" y="28" width="14" height="8" fill="#BDBDBD"></rect>
                <rect y="28" width="14" height="8" fill="#4285F4"></rect>
              </g>
            </svg>
          </div>
          <div className="list">
            <li>Only URLs under entered address</li>
            <li>Only URLs under specified protocol</li>
          </div>
          <div className="inputBox">
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="standard-textarea"
                label="Enter Url"
                placeholder="https://www.example.com"
                multiline
                variant="standard"
                value={website.seed}
                onChange={(event) => handleChange(event, "seed")}
                InputLabelProps={{ style: { color: "#CCC" } }}
                inputProps={{ style: { color: "#CCC" } }}
              />
            </Box>
          </div>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            mt: 0,
            mb: 5,
          }}
        >
          <Button size="large" onClick={createWebsite}>
            Continue
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
