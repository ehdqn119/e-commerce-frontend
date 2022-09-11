import * as React from "react";
import { useStae, useRef } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import { blue, grey } from "@mui/material/colors";

const Root = styled(Typography)(({ theme }) => ({
  fontSize: "10px",
  padding: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    h2: {
      color: blue[50],
      fontSize: "1.1rem",
    },

    h3: {
      color: blue[50],
      fontSize: "1rem",
    },
    h4: {
      color: blue[50],
      fontSize: "0.6rem",
    },
    h5: {
      color: blue[50],
      fontSize: "0.4rem",
    },
    h6: {
      color: blue[50],
      fontSize: "0.2rem",
    },
  },
  [theme.breakpoints.up("md")]: {
    h2: {
      color: blue[50],
      fontSize: "1.2rem",
    },
    h3: {
      color: blue[50],
      fontSize: "1rem",
    },
    h4: {
      color: blue[50],
      fontSize: "0.6rem",
    },
    h5: {
      color: blue[50],
      fontSize: "0.4rem",
    },
    h6: {
      color: blue[50],
      fontSize: "0.2rem",
    },
  },
  [theme.breakpoints.up("lg")]: {
    h2: {
      color: blue[50],
      fontSize: "1.2rem",
    },
    h3: {
      color: blue[50],
      fontSize: "1rem",
    },
    h4: {
      color: blue[50],
      fontSize: "0.6rem",
    },
    h5: {
      color: blue[50],
      fontSize: "0.4rem",
    },
    h6: {
      color: blue[50],
      fontSize: "0.2rem",
    },
    h7: {
      color: blue[50],
      fontSize: "0.1rem",
    },
  },
}));

let outerTheme = createTheme({
  button: {},
  palette: {
    primary: {
      main: blue[700],
      white: grey[50],
      grey: grey[500],
      blue: blue["A300"],
    },
    neutral: {
      main: blue["A700"],
      contrastText: "#fff",
    },
    background: {
      dark: grey[800],
    },
  },
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.pexels.com/photos/13164394/pexels-photo-13164394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Hats",
  },
  {
    img: "https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Honey",
  },
  {
    img: "https://images.pexels.com/photos/12036442/pexels-photo-12036442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Basketball",
  },
  {
    img: "https://images.pexels.com/photos/10520115/pexels-photo-10520115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];

const TrendingCites = () => {
  const [value, setValue] = React.useState(1);

  return (
    <Root>
      <ThemeProvider theme={outerTheme}>
        <Typography>Trending cites</Typography>
        <Typography>The most searched for cities on TripGuide</Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {itemData.map((item, index) => (
              <Grid item xs={12} sm={12} md={6} key={index}>
                <Item
                  sx={{
                    backgroundColor: "background.dark",
                    color: "primary.white",
                  }}
                >
                  <Box sx={{ display: "flex" }}>
                    <Box sx={{ flexBasis: "40%" }}>
                      <img
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                        width="100%"
                        height="100%"
                        style={{ borderRadius: "10%", objectFit: "cover" }}
                      />
                    </Box>
                    <Box
                      ml={2}
                      sx={{
                        flexBasis: "60%",
                        textAlign: "left",
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: "column",
                      }}
                    >
                      <Typography mb={0.6} align="left" variant="h3">
                        Manila
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                        }}
                        mb={0.5}
                      >
                        <Rating
                          sx={{ textAlign: "left", fontSize: "1rem" }}
                          name="read-only"
                          max={1}
                          value={value}
                          readOnly
                        />
                        <Box sx={{ display: "flex", marginTop: "auto" }}>
                          <Typography
                            color="primary.grey"
                            variant="h6"
                            ml={0.5}
                          >
                            4.91
                          </Typography>
                          <Typography
                            color="primary.grey"
                            mr={0.5}
                            variant="h6"
                          >
                            (147)
                          </Typography>
                        </Box>
                      </Box>
                      <Box mb={0.5} sx={{ display: "flex" }}>
                        <Typography color="primary.white" mr={0.3} variant="h2">
                          $250.00
                        </Typography>
                        <Typography
                          color="primary.grey"
                          variant="h6"
                          sx={{ marginTop: "auto" }}
                        >
                          /Night
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex" }}>
                        <Button
                          sx={{}}
                          color="neutral"
                          variant="contained"
                          size="small"
                        >
                          <Typography
                            color="primary.white"
                            mr={0.5}
                            variant="h6"
                          >
                            Book now
                          </Typography>
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      </ThemeProvider>
    </Root>
  );
};

export default TrendingCites;
