import React from 'react';
import Header from "../components/Header/Header";
import { StyledContainer, SubHeading } from "../GlobalStylings/Global";
import PageHeader from "../components/PageHeader";
import images from "../../assets/images";
import { Stack, Typography, Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import { styled } from '@mui/system';
import theme from '../theme/theme';
import Partner from '../components/PartnerSection/Partner';
import Footer from '../components/Footer/Footer';

const Span = styled("span")({
  fontSize: "16px",
  fontWeight: "600",
  color: theme.palette.primary.darkGray,
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
    
  }
});

const TitleText = styled("h2")({
  fontSize: "36px",
  color: theme.palette.primary.textDark,
  fontWeight: "500",
  textAlign: 'center',
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
    fontWeight: "600",
  }
});
const HeaderText = styled("h2")({
  fontSize: "18px",
  fontWeight: "500",
  color: theme.palette.primary.darkGray,
  [theme.breakpoints.down("sm")]: {
    fontSize: "15px",
   
  }
});

const SubText = styled("p")({
  fontSize: "15px",
  color: theme.palette.primary.textGray,
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
   
  }
});

const boxShadowStyle = "0px 6px 20px rgba(24, 24, 38, 0.1)";

const GeneralModuleBox = styled(Box)({
  background: "rgba(136, 106, 228, 0.1)",
  padding: "10px 20px",
  borderRadius: "8px",
  textAlign: "center",
  fontSize: "16px",
  fontWeight: "500",
  margin: "10px",
  boxShadow: boxShadowStyle,
  color: "#886AE4",
  [theme.breakpoints.down("sm")]: {
    fontSize: "15px",
    width:"100%",
    marginRight:"20px"
  }
});

const CustomModuleBox = styled(Box)({
  background: "rgba(148, 82, 74, 0.1)",
  padding: "10px 20px",
  borderRadius: "8px",
  textAlign: "center",
  fontSize: "16px",
  fontWeight: "500",
  margin: "10px",
  boxShadow: boxShadowStyle,
  color: "#94524A",
});

const CoverageModuleBox = styled(Box)({
  background: "rgba(47, 10, 40, 0.1)",
  padding: "10px 20px",
  borderRadius: "8px",
  textAlign: "center",
  fontSize: "16px",
  fontWeight: "500",
  margin: "10px",
  boxShadow: boxShadowStyle,
  color: "#2F0A28",
});

const generalModules = [
  "CRM", "Accounting", "Budget", "HRM", "Payroll", "Expenses", "Procurement", "Store", "Fixed Asset", "Fleet", "Utilities", "Payment / Payable", "Prospects", "Sales", "Invoicing", "Collection / Receivable"
];

const customModules = [
  "School", "Church", "Mosque", "Trading", "Resident Association", "Club", "Manufacturing", "Hotel", "Hospital", "Restaurant", "Pharmacy"
];

const coverageModules = [
  "Services", "Trading", "Education", "Associations", "Manufacturing", "Hospitality", "Healthcare", "Religious Organizations"
];

function Products() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isMedium = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <>
      <Header />
      <StyledContainer sx={{ flexDirection: 'column', }}>
        <PageHeader
          title="Our Products"
          currentPage="Our Products"
          backgroundImage={images.aboutImage}
          breadcrumbs={[
            { label: "Home", path: "/" },
            { label: "Our Products", path: "/products" },
          ]}
        />
        <Stack sx={{ width: "90%", marginTop: "3.5rem" }} spacing={4}>
          <TitleText>
            Awesome Products and Services to Grow your Business Value
          </TitleText>
          <Typography
            variant="p"
            sx={{ fontSize: {sm:"18px",xxs:"16"}, color: "primary.textGray" }}
          >
            Our cloud-based digital solutions cover a wide spectrum of critical
            financial and non-financial workflows. The solutions are grouped
            into two, namely: <Span>General Modules</Span>, applicable to all
            types of entities; and <Span>Custom Modules</Span>, additional
            modules applicable to specific types of entities. We are committed
            to ensuring full coverage of every SME’s digital needs. Our
            solutions are also simplified with a view to eliminate the need for
            our subscribers’ dependency on specialists and consultants for their
            day-to-day digital operations. Finally, our subscribers do not need
            to worry about huge capital investments in digital technology. We
            stand in the gap so that they only need their access devices and
            reliable internet connectivity.
            <br />
            <br />
            We are committed to ensuring full coverage of every SME’s workflow
            needs. Consequently, our digital solutions cover a wide spectrum of
            critical financial and non-financial workflows.
          </Typography>
          <Stack spacing={1}>
            <HeaderText>General (Base) Modules</HeaderText>
            <SubText>These modules are applicable to all types of entities. The group currently consists of over 20 modules and over 100 workflows that are generally applicable to, and therefore can be used by, all types of SMEs. Some of the modules are listed below:</SubText>
          </Stack>
          <Grid container spacing={2} sx={{alignItems:"center", justifyContent:"center",width:"100%"}} >
            {generalModules.map((module, index) => (
              <Grid item xxs={12} sm={6} md={3} key={index} sx={{alignItems:"center", width:"100%", justifyContent:"center"}} >
              <Stack   width="100%" alignItems="center" justifyContent={"center"}>
                <GeneralModuleBox>{module}</GeneralModuleBox>
                </Stack>
              </Grid>
            ))}
          </Grid>
          <Stack spacing={1} sx={{ mt: 3 }}>
            <HeaderText>Custom (Special) Modules</HeaderText>
            <SubText>These are additional optional modules which are applicable to specific types of entities. They modules and workflows are specially designed for handling critical operations that are unique to certain groups of SMEs. Some of the modules are listed below:</SubText>
          </Stack>
          <Grid container spacing={2}>
            {customModules.map((module, index) => (
              <Grid item xxs={12} sm={6} md={3} key={index}>
                <CustomModuleBox>{module}</CustomModuleBox>
              </Grid>
            ))}
          </Grid>
          <Stack spacing={1} sx={{ mt: 3 }}>
            <HeaderText>Coverage</HeaderText>
          </Stack>
          <Grid container spacing={2}>
            {coverageModules.map((module, index) => (
              <Grid item xxs={12} sm={6} md={3} key={index}>
                <CoverageModuleBox>{module}</CoverageModuleBox>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </StyledContainer>
      <Partner />
      <Footer />
    </>
  );
}

export default Products;
