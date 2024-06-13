import React from "react";
import PropTypes from "prop-types";
import { Card, Box, Typography, Grid } from "@mui/material";
import Image from "../image";

const InfoCard = ({ xs, md, lg, imageSrc, title, description }) => {
  return (
    <Grid item xs={xs} md={md} lg={lg}>
      <Card
        sx={{
          p: 2,
          display: "flex",
          flexDirection:"column",
          justifyContent: "center",
          boxShadow: "0px 6px 20px rgba(24, 24, 38, 0.1)", 
        }}
      >
        <Box
          sx={{
            bgcolor: "#EDFDF5",
            height: 70,
            width: 70,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            mr: 2,
          }}
        >
          <Image
            alt="info image"
            src={imageSrc} 
            sx={{
              borderRadius: 2,
            }}
          />
        </Box>
        <Box>
          <Typography variant="h4" sx={{ mb: 1.5 }}>
            {title}
          </Typography>
          <Typography>
            {description}
          </Typography>
        </Box>
      </Card>
    </Grid>
  );
};

InfoCard.propTypes = {
  xs: PropTypes.number.isRequired,
  md: PropTypes.number.isRequired,
  lg: PropTypes.number.isRequired,
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default InfoCard;
