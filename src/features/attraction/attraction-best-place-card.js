import React, { useRef, useCallback } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import { blue } from "@mui/material/colors";
import Chip from "@mui/material/Chip";
import { IconButton } from "@mui/material";

//Material Icons

import FmdGoodIcon from "@mui/icons-material/FmdGood";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// Import Swiper React components
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";

export default function AttractionBestPlaceCard() {
  const sliderRef = useRef(null);
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  const sampleDate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <Typography variant="h5">Search a best place in the world</Typography>
      <Typography variant="h5">
        Whether you're looking for place for a vacation. We are here to Guide
        you about the details you need to check in and ease your trips in
        advance
      </Typography>
      <Swiper
        ref={sliderRef}
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {sampleDate.map((item) => (
          <SwiperSlide key={item}>
            <Card
              style={{ width: "100%", height: "100%" }}
              sx={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#22252A",
                color: "text.primary",
              }}
            >
              <Box
                sx={{ flex: "1 1 0", minHeight: "100px", maxHeight: "120px" }}
              >
                <CardMedia
                  component="img"
                  image="https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="green iguana"
                />
              </Box>
              <CardContent
                sx={{
                  maxHeight: "115px",
                  p: 0.5,
                  fontSize: "10px",
                  "&:last-child": { pb: 1.5 },
                }}
              >
                <Box
                  component="div"
                  sx={{ display: "flex", alignItems: "center", mb: 1 }}
                >
                  <Rating
                    sx={{ mr: 0.35, fontSize: "12px" }}
                    name="read-only"
                    value={1}
                    readOnly
                    max={1}
                  />
                  <Typography
                    sx={{ mt: 0.2, mb: 0 }}
                    gutterBottom
                    component="div"
                  >
                    4.91 (147)
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    fontSize: "14px",
                    mb: 1,
                    alignItems: "center",
                  }}
                >
                  <Typography gutterBottom variant="h7" sx={{ m: 0 }}>
                    Comfort Space
                  </Typography>
                  <Chip
                    size="small"
                    sx={{ borderRadius: "7px", marginLeft: "auto" }}
                    label="$210"
                    style={{ backgroundColor: blue[700] }}
                  />
                </Box>
                <Typography mb={1} component="div">
                  1.2 km to Town Center
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  {/* <FmdGoodIcon sx={{ fontSize: "12px", mr: 1 }} /> */}
                  <Typography variant="white">Turkey, Memaris </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  {/* <ApartmentIcon sx={{ fontSize: "12px", mr: 1 }} /> */}
                  <Typography variant="h11" component="div">
                    Rooms available : 375
                  </Typography>
                </Box>
              </CardContent>
              {/* <CardActionArea style={{width:swiperLayout.width, height:swiperLayout.height}} sx={{display : 'flex' ,flexDirection : 'column'}}>
                    
                </CardActionArea> */}
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
