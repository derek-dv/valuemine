import { Box, } from "@mui/material";
import React from "react";


import Partner from "./Partner";

import { partnerInfo } from "./dummyData";
import { StyledContainer } from "../../GlobalStylings/Global";
import theme from "../../theme/theme";

function Partners() {
  return (
    <StyledContainer>
      <Box sx={{
        width: "90%",
        marginTop:"3rem",
        display: "flex", overflowX: "hidden",
         [theme.breakpoints.down("sm")]: {
        gap:"2rem",
        margin:"2rem 0",
      },

      }}
      >
        {partnerInfo.map(({ icon }, index) => (
          <Partner  icon={icon} index={index} />
        ))}
      </Box>
    </StyledContainer>
  );
}

export default Partners;