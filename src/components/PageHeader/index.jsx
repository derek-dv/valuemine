import React from "react";
import PropTypes from "prop-types";
import { Box, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Iconify from "../../components/iconify";

const PageHeader = ({ title, currentPage, breadcrumbs, backgroundImage }) => {
  const navigate = useNavigate();

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{
        color: "#fff",
        height: 200,
        width: "100%",
        backgroundImage: `linear-gradient(#212134F2, #212134F2), url(${backgroundImage})`,
      }}
    >
     
      <Box>
        <Typography  sx={{ mb: {sm:3,xxs:2}, fontSize:{sm:"2.5rem", xxs:"1.5rem"}, fontWeight: "500", }}>
          {title}
        </Typography>
      </Box>
      <Stack flexDirection="row" alignItems="center"  justifyContent="center">
        {breadcrumbs.map((breadcrumb, index) => (
          <React.Fragment key={breadcrumb.label}>
            <Box
              onClick={() => navigate(breadcrumb.path)}
    
              sx={{
               
                cursor: "pointer",
                color: breadcrumb.label === currentPage ? "secondary.main" : "white",
              }}
            >
              <Typography variant="h6" sx={{ fontSize:"16px"}}>
                {breadcrumb.label}
              </Typography>
            </Box>
            {index < breadcrumbs.length - 1 && (
              <Iconify
                icon="iconamoon:arrow-right-2"
                style={{ width: 24, height: 24, marginLeft: 8, marginRight: 8 }}
              />
            )}
          </React.Fragment>
        ))}
      </Stack>
    </Stack>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  currentPage: PropTypes.string.isRequired,
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
  backgroundImage: PropTypes.string.isRequired,
};

export default PageHeader;

