import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function TopTourCard() {
  const dummy = {
    users: [
      { country: "Japan" },
      { country: "Indonesia" },
      { country: "Barcelona" },
    ],
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} sx={{ color: "white" }}>
        {dummy.users.map((user) => (
          <Grid item xs={12} lg={4}>
            <Item sx={{ padding: "0", color: "#F0F8FF" }}>
              <Card
                sx={{
                  minWidth: "300px",
                  minHeight: "200px",
                  position: "relative",
                }}
                p={5}
              >
                <CardActions>
                  <Chip
                    sx={{ position: "absolute", top: 10, zIndex: 2 }}
                    label="Japan"
                    color="error"
                  />
                </CardActions>
                <CardMedia
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  component="img"
                  height="140"
                  image="https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="green iguana"
                />
                <Typography
                  sx={{
                    position: "absolute",
                    top: "73%",
                    left: "2%",
                    color: "#F0F8FF",
                  }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Japan
                </Typography>
                <Typography
                  sx={{
                    position: "absolute",
                    left: "2%",
                    bottom: 0,
                    color: "#F0F8FF",
                  }}
                  variant="body2"
                  color="text.secondary"
                >
                  10 Popular Places
                </Typography>
              </Card>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
