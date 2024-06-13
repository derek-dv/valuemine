import React, { useState } from "react";
import {
  Box,
  Stack,
  Typography,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Iconify from "../iconify";
import Image from "../image";

const OperationsCard = ({ xs, md, lg }) => {
  const [activeItem, setActiveItem] = useState("Technical Operations");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const operations = [
    "Technical Operations",
    "Business Operation",
    "Security & Control",
    "Sales & Marketing",
  ];

  const details = {
    "Technical Operations": [
      "Product Evaluation",
      "Design",
      "Development",
      "Technical Support",
    ],
    "Business Operation": [
      "Strategy Planning",
      "Resource Management",
      "Budgeting",
      "Reporting",
    ],
    "Security & Control": [
      "Risk Assessment",
      "Security Protocols",
      "Compliance",
      "Audits",
    ],
    "Sales & Marketing": [
      "Market Research",
      "Advertising",
      "Sales Strategies",
      "Customer Relationship",
    ],
  };

  const getItemIndex = (item) => operations.indexOf(item);

  return (
    <Grid container spacing={3} alignItems="center">
      {isMobile ? (
        <>
          <Grid item xs={12} width="100%">
            <Box textAlign="center" mb={2} width="100%" >
              <Box
                sx={{
                  mt: 1,
                  mb: 2,
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Stack direction="row" spacing={1} justifyContent="center">
                  {operations.map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        bgcolor: activeItem === item ? "#0B6ED0" : "#D3D3D3",
                        cursor: "pointer",
                      }}
                      onClick={() => setActiveItem(item)}
                    />
                  ))}
                </Stack>
              </Box>
              <Typography variant="h5" sx={{ color: "#0B6ED0" }}>
                {activeItem}
              </Typography>
              <Typography variant="body1" mt={1}>
                All the Lorem Ipsum generators on the Internet
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Stack mt={-1}>
              {details[activeItem].map((detail, index) => (
                <Stack
                  key={index}
                  flexDirection="row"
                  alignItems="center"
                  sx={{ p: 1, }}
                >
                  <Iconify icon="ph:check-circle" width={24} color="#0D7742" />
                  <Typography variant="body1" sx={{ ml: 1 }}>
                    {detail}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Box>
              <Image
                alt="about image"
                src="/assets/images/board.png"
                sx={{
                  borderRadius: 2,
                  width: "100%", // Adjust the width as necessary
                  height: "auto", // Adjust the height as necessary
                }}
              />
            </Box>
          </Grid>
        </>
      ) : (
        <>
          <Grid item xs={xs} md={4} lg={4}>
            <Stack flexDirection="row" alignItems="center" position="relative">
              <Box
                sx={{
                  position: "absolute",
                  width: 10,
                  height: 45,
                  bgcolor: "#212134",
                  borderRadius: 10,
                  left: -3,
                  top: getItemIndex(activeItem) * 70, // 60px for each item height including margin and padding
                  transition: "top 0.3s ease-in-out",
                }}
              />
              <Box
                sx={{
                  width: 10,
                  height: 220,
                  borderRadius: 10,
                  bgcolor: "#F6F6F9",
                }}
              />
              <Box>
                {operations.map((text, index) => (
                  <Box
                    key={index}
                    sx={{
                      mb: 3,
                      p: 1.5,
                      position: "relative",
                      cursor: "pointer",
                      color: activeItem === text ? "#0B6ED0" : "inherit",
                    }}
                    onClick={() => setActiveItem(text)}
                  >
                    <Typography variant="h5">{text}</Typography>
                  </Box>
                ))}
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={xs} md={4} lg={4}>
            <Stack>
              {details[activeItem].map((detail, index) => (
                <Stack
                  key={index}
                  flexDirection="row"
                  alignItems="center"
                  sx={{ mb: 2, p: 1.5 }}
                >
                  <Iconify icon="ph:check-circle" width={24} color="#0D7742" />
                  <Typography variant="h5" sx={{ ml: 1 }}>
                    {detail}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>
          <Grid item xs={xs} md={4} lg={4}>
            <Box>
              <Image
                alt="about image"
                src="/assets/images/board.png"
                sx={{
                  borderRadius: 2,
                  width: "100%",
                  height: "auto",
                }}
              />
            </Box>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default OperationsCard;
