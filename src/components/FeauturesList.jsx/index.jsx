import React from "react";
import { Box, Stack, Typography, Grid } from "@mui/material";
import Iconify from "@iconify/react"; // Ensure you have this dependency

const FeaturesList = ({ xs, md, lg, description }) => {
  return (
    <Grid item xs={xs} md={md} lg={lg}>
      <Typography variant="body1" sx={{ mb: 2 }}>
        {description}
      </Typography>
      <Stack>
        {["Product Evaluation", "Design", "Development", "Technical Support"].map((text, index) => (
          <Stack key={index} flexDirection="row" alignItems="center" sx={{ mb: 3, p: 1.5 }}>
            <Iconify icon="ph:check-circle" width={24} color="#0D7742" />
            <Typography variant="h5" sx={{ ml: 1 }}>
              {text}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Grid>
  );
};

export default FeaturesList;
