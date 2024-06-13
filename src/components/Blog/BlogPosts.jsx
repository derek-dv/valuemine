import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AllPosts } from "./dummyData";
import Blog from "./Blog";
import { StyledHeader, SubHeading } from "../../GlobalStylings/Global";
import { ArticlesWrapper, StyledWrapper, StyledContainer } from "./BlogStyling";
import { Grid, Stack, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

const CustomDots = styled("ul")({
  display: "flex !important",
  justifyContent: "center",
  padding: 0,
  listStyle: "none",
  margin: "20px 0 0 0",

  "& li": {
    width: 33,
    height: 6,
    borderRadius: "5px",
    margin: "0 8px",
    backgroundColor: "#E0E0E0",
    cursor: "pointer",

    "&.slick-active": {
      backgroundColor: "#0B6ED0",
    },
  },
});
function BlogPosts({ sliderBlogPost }) {
  const [posts, setPosts] = useState(null); 
  useEffect(()=>{
    axios.get("https://val-0rnm.onrender.com/api/posts").then((res)=>{
      console.log(res.data);
      setPosts(res.data);
    }).catch((err)=>{
      console.log(err);
    })
  }, [])
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3.2,
    slidesToScroll: 4,
    initialSlide: 0,
    // customPaging: (i) => (
    //   <div
    //     style={{
    //       width: 33,
    //       height: 6,
    //       borderRadius: "5px",
    //       margin: "0 10px",
    //       backgroundColor: "#E0E0E0",
    //       cursor: "pointer",
    //     }}
    //   ></div>
    // ),
    // appendDots: (dots) => <CustomDots>{dots}</CustomDots>,
    beforeChange: (current, next) => setCurrentIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const carouselRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(1);

  const handlePrevious = () => {
    carouselRef.current.slickPrev();
  };
  const handleNext = () => {
    carouselRef.current.slickNext();
  };
  return (
    <>
      {sliderBlogPost ? (
        <StyledContainer>
          <StyledWrapper>
            <StyledHeader>Articles & Tips</StyledHeader>
            <SubHeading>Latest News & Blog</SubHeading>
           
              <Grid
                container
                spacing={5}
                bgcolor=""
                justifyContent="center"
                width="100%"
                alignItems="center"
              >
              
                  {AllPosts.slice(0, 3).map((item) => (
                      <Grid item key={item.id} xs={12} sm={6} md={4}>
                    <Blog
                      key={item.id}
                      id={item.id}
                      date={item.date}
                      title={item.title}
                      image={item.image}
                      textMargin={"2rem"}
                    />
                     </Grid>
                  ))}
    
              </Grid>
        

            <Stack
              mb={5}
              sx={{
                width: "100%",
                alignItems: "flex-end",
                paddingRight: "2rem",
              }}
            >
              <Link to="/blog">
                <Typography variant="p">View all</Typography>
              </Link>
            </Stack>
          </StyledWrapper>
        </StyledContainer>
      ) : (
        <StyledContainer sx={{ marginTop: "5rem" }}>
          <StyledWrapper>
            <Grid
              container
              spacing={5}
              bgcolor=""
              justifyContent="center"
              width="100%"
              alignItems="center"
            >
              {AllPosts.map((item) => (
                <Grid item key={item.id} xs={12} sm={6} md={4}>
                  <Blog
                    id={item.id}
                    date={item.date}
                    title={item.title}
                    image={item.image}
                    textMargin={"2rem !important"}
                  />
                </Grid>
              ))}
            </Grid>
          </StyledWrapper>
        </StyledContainer>
      )}
    </>
  );
}

export default BlogPosts;
