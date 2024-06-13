// @mui
import { styled } from "@mui/material/styles";
import {
  Box,
  Grid,
  Container,
  Typography,
  Stack,
  Card,
  Button,
} from "@mui/material";
// components
import Image from "../components/image";
import Iconify from "../components/iconify";
import Structure from "../components/about/Structure";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import PageHeader from "../components/PageHeader";
import images from "../../assets/images";
import InfoCard from "../components/InfoCard";
import OperationsCard from "../components/OperationsCard";
import Team from "../components/Team";
import Board from "../components/Board";
import Partner from "../components/PartnerSection/Partner";
import Partners from "../components/PartneredCompanies/Partners";
import { StyledHeader, StyledLink, SubHeading } from "../GlobalStylings/Global";

// ----------------------------------------------------------------------

const StyledRoot = styled(Stack)(() => ({
  width: "100vw",
  alignItems: "center",
  justifyContent: "center",
}));
const LeftIllustrationStyle = styled("img")(() => ({
  left: 0,
  bottom: 0,

  margin: "auto",
  position: "absolute",
}));
const RightIllustrationStyle = styled("img")(() => ({
  right: 0,
  bottom: 0,

  margin: "auto",
  position: "absolute",
  top: 0,
  height: "100%",
}));
// ----------------------------------------------------------------------
const COMPANIES = [
  { logo: "/assets/images/studenthubng.png" },
  { logo: "/assets/images/5stones.png" },
  { logo: "/assets/images/cimple.png" },
  { logo: "/assets/images/studenthubng.png" },
  { logo: "/assets/images/5stones.png" },
  { logo: "/assets/images/cimple.png" },
];
export default function About() {
  return (
    <>
      <Header />
      <StyledRoot>
        <PageHeader
          title="About Us"
          currentPage="About Us"
          backgroundImage={images.aboutImage}
          breadcrumbs={[
            { label: "Home", path: "/" },
            { label: "About Us", path: "/about" },
          ]}
        />
        <Container sx={{ width: "95%" }}>
          <Grid container spacing={3} alignItems="center" sx={{ mt: 5 }}>
            <Grid item xs={12} md={7} lg={7}>
              <Box>
                <Typography
                  variant="h2"
                  sx={{
                    mb: 3,
                    color: "#181826",
                    fontWeight: "500",
                    fontSize: { sm: "34px", xxs: "21px" },
                  }}
                >
                  We are a digital solutions provider
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: "primary.textGray",
                    fontSize: { sm: "18px", xxs: "15px" },
                  }}
                >
                  Value Mine Technologies Ltd (VMT) is a Digital Solutions
                  Provider with special focus on the Small and Medium Scale
                  Entities (SMEs) in Africa. We provide cloud-based digital
                  services (SaaS) covering critical financial and non-financial
                  workflows. Consequently, our subscribers do not require
                  infrastructure investments. All they need are their access
                  devices (i.e. smart phone, tablet, laptop, etc) and reliable
                  internet connectivity. We maintain strategic alliances with
                  relevant individuals and organisations in order to ensure
                  consistent best-in-class service delivery.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={5} lg={4} sx={{ pr: { md: 7 } }}>
              <Grid container>
                <Grid item xs={12}>
                  <Box>
                    <Image
                      alt="about image"
                      src="/assets/images/about-image.png"
                      sx={{
                        borderRadius: 2,
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid container spacing={3} alignItems="center" sx={{ my: 5 }}>
            <Stack
              sx={{
                width: "100%",
                alignItems: "center",
                fontWeight: "600",
                justifyContent: "center",
              }}
            >
              <Typography
                textAlign="center"
                variant="p"
                color="primary.textDark"
                sx={{
                  fontSize: { sm: "25px", xxs: "20px" },
                  marginTop: { sm: "2rem", xxs: "1rem" },
                  marginBottom:{sm:"2rem",xxs:"1rem"}
                }}
              >
                WHAT WE OFFER
              </Typography>
            </Stack>
            <InfoCard
              xxs={12}
              md={6}
              lg={6}
              imageSrc="/assets/images/deal.png"
              title="Simplicity"
              description="Our solutions are simplified with a view to eliminating the need for our subscribers to depend on or hire specialists for their day-to-day digital operations."
            />
            <InfoCard
              xs={12}
              md={6}
              lg={6}
              imageSrc="/assets/images/pos.png"
              title="Pay-as-you-need!"
              description="Our services are subscription-based and according to each subscriber’s scale of operations."
            />
          </Grid>
          <Box
            sx={{
              bgcolor: "#0B6ED0",
              p: 5,
              borderRadius: 2,
              my: 5,
              pl: { sm: 8, xxs: 1 },
              pr: { sm: 8, xxs: 1 },
              mt: 5,
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <LeftIllustrationStyle
              alt="hero"
              src="/assets/images/left-illustration.png"
            />
            <RightIllustrationStyle
              alt="hero"
              src="/assets/images/right-illustration.png"
            />
            <Box
              sx={{
                textAlign: "center",
                width: { sm: "80%", xxs: "100%" },
                flexDirection: "column",
                display: "flex",
              }}
            >
              <Box
                sx={{
                  mb: 3,
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    textAlign: "center",
                    fontSize: { sm: "24px", xxs: "18px" },
                  }}
                >
                  “ We provide cloud-based software and storage services (SaaS),
                  covering a wide spectrum of critical financial and
                  non-financial workflows (solutions), through an integrated
                  enterprise resource planning system (Valuemine ERP). ”
                </Typography>
              </Box>

              <Box>
                <StyledLink to="/login">
                <Button
                  size="large"
                  variant="contained"
                  sx={{
                    mt: 3,
                    borderRadius: 30,
                    bgcolor: "#fff",
                    color: "primary.textDark",
                  }}
                >
                  Get Started
                </Button>
                </StyledLink>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              gap:{sm:"1rem",xxs:"0.5rem"},
              flexDirection: "column",
             
            }}
          >
           <StyledHeader>OUR STRUCTURE</StyledHeader>
            <SubHeading sx={{fontSize: {sm:"35px",xxs:"22px"},mb:{sm:3,xxs:1}}}
            >
              We are strategically divided into four teams
            </SubHeading>
            <OperationsCard xs={12} md={12} lg={12} />
          </Box>
        </Container>
      </StyledRoot>
      <Structure />
      <Team />
      <Board />
      <Partner />
      <Partners />
      <Footer />
    </>
  );
}
