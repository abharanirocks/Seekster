import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const ResultScreenCard = ({ url, title, content }) => (
  <Box sx={{ minWidth: 275, mb: 2 }}>
    <Card variant="outlined">
      <React.Fragment>
        <CardContent>
          <a href={url}>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {url}
            </Typography>
          </a>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {content}
          </Typography>
        </CardContent>
      </React.Fragment>
    </Card>
  </Box>
);

export default ResultScreenCard;
