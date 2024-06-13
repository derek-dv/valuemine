import React, { useState } from "react";
import axios from "axios";
import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import images from "../../assets/images";
import { StyledContainer } from "../GlobalStylings/Global";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import PageHeader from "../components/PageHeader";
import { useNavigate } from "react-router-dom";

const ImageContainer = styled(Box)({
  borderRadius: "15px",
  height: "180px",
  width: "100%",
  overflow: "hidden",
  position: "relative",
});

const Overlay = styled(Box)({
  backgroundImage:
    "linear-gradient(to bottom, rgba(24, 24, 38, 0.8), rgba(24, 24, 38, 0.8))",
  opacity: 0.7,
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
});

const StyledTextField = styled(TextField)({
  width: "100%",
  marginBottom: "1.5rem",
  backgroundColor: "#F6F6F9",
  borderRadius: "5px",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none",
    },
  },
});

const StyledButton = styled(Button)({
  backgroundColor: "#0B6ED0",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#005BB5",
  },
});

const RoundedBox = styled(Box)({
  position: "absolute",
  top: "10px",
  right: "10px",
  width: "23px",
  height: "23px",
  borderRadius: "50%",
  backgroundColor: "transparent",
  border: "1px solid #ffffff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
});

const ActiveIndicator = styled(Box)({
  width: "12px",
  height: "12px",
  borderRadius: "50%",
  backgroundColor: "white",
});

const ContactUs = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [message, setMessage] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = (e) => {
    const navigate = useNavigate();
    e.preventDefault();
    console.log({ email, name, mobile, whatsapp, message, selectedOption });

    axios
      .post("https://val-0rnm.onrender.com/api/contact/create", {
        email,
        name,
        mobile,
        whatsapp,
        message,
        type: selectedOption,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/")
      })
      .catch((err) => {
        console.log(err);
      });
    // Handle form submission with selectedOption
  };

  return (
    <>
      <Header />
      <StyledContainer sx={{ flexDirection: "column", background: "#F6F6F9" }}>
        <PageHeader
          title="Contact Us"
          currentPage="Contact Us"
          backgroundImage={images.aboutImage}
          breadcrumbs={[
            { label: "Home", path: "/" },
            { label: "Contact Us", path: "/contact" },
          ]}
        />
        <Box sx={{ width: "100%", maxWidth: "80%", mt: 9 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Typography
                variant="h4"
                fontWeight="500"
                sx={{ mb: 3, color: "#666687" }}
              >
                Get in Touch
              </Typography>
              <Stack spacing={2}>
                <ImageContainer onClick={() => handleOptionClick("Agent")}>
                  <img
                    src="https://s3-alpha-sig.figma.com/img/9dae/4b5d/6f4363bbd74c04cb70a604dd1820934f?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HbZJ-jM3dyxbaghWoDRlrL-MbObA3XuxL1akxf0DCMG-dhaUFneTSsN8rwWNCkn~ZPxtZtFmFiuxVVdtWNJinsmvIMZR39Kcg97MSPJV-Y9PzaLLNuG~aAbaZyjlEL56xIjmEyem53kDMJKrN9OGqEon43H8Ao4A~5aydanZssOx40yvtzZrDgiyhpBa4Spyc1qTPOM48pxMt3ef3cKzhkeRgq0qVqLopcr~aLPmRI8c46p9Bn4Kao1sGsVL5MVY2AGmtU4qyBbuckz6tn6quLTSjlCFU9TJV9F4mD3DEJPM5khIkPPOX9OA~stE-T8-P8iLKltK46e9cDOvd8Ccbg__"
                    alt="Request for an Agent"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <Overlay />
                  <RoundedBox>
                    {selectedOption === "Agent" && <ActiveIndicator />}
                  </RoundedBox>
                  <Typography
                    variant="h6"
                    fontWeight="300"
                    sx={{
                      position: "absolute",
                      fontSize: "18px",
                      bottom: "10px",
                      left: "10px",
                      color: "#fff",
                    }}
                  >
                    Request for an{" "}
                    <span style={{ fontWeight: "600" }}>Agent</span>
                  </Typography>
                </ImageContainer>
                <ImageContainer onClick={() => handleOptionClick("Consultant")}>
                  <img
                    src="https://s3-alpha-sig.figma.com/img/20da/b7bd/666dd703cd51bc63db4315f1f0b84e0c?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R6KbFMnYLVolxNonp~8l9ClB3VEI8ho2csMGUV17heGRZxk5177Kd8mvNfVvKq2SEjvhtzHZc~-1SXOg0VT6Ad7LvKRt2qFtf5r~jSZu8LXRPfSkYXTRRQjCSjEbpyjBpZpLKZGJ8ar4K2vGfNekSRm1w4r8xLxcD90-U~~uPEFyI-Rm~avPHbElZqCIfpZNR4QB~obP3BRnkT9IpkH4YVUxddGX-Ss3R2RBHuAhTlcWyyb1n9WssjhhvGWwqpMdaBevOOJM6SQmXxiZ6OcTj2IwxW0tzIhu7HGwMgN1Dx1QzZ71bfYNFXh-O4rOmR~nGWnRK57PyzlNmRmtXqM85g__"
                    alt="Request for a Consultant"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <Overlay />
                  <RoundedBox>
                    {selectedOption === "Consultant" && <ActiveIndicator />}
                  </RoundedBox>
                  <Typography
                    variant="h6"
                    fontWeight="300"
                    sx={{
                      position: "absolute",
                      fontSize: "18px",
                      bottom: "10px",
                      left: "10px",
                      color: "#fff",
                    }}
                  >
                    Request for a{" "}
                    <span style={{ fontWeight: "600" }}>Consultant</span>
                  </Typography>
                </ImageContainer>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                component="form"
                sx={{
                  backgroundColor: "white",
                  padding: "2rem",
                  borderRadius: "10px",
                }}
                onSubmit={handleSubmit}
              >
                <StyledTextField
                  label="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  variant="outlined"
                  required
                />
                <StyledTextField
                  label="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  variant="outlined"
                  required
                />
                <StyledTextField
                  label="Mobile phone number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  variant="outlined"
                  required
                />
                <StyledTextField
                  label="WhatsApp phone number"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  variant="outlined"
                  required
                />
                <StyledTextField
                  label="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  variant="outlined"
                  required
                  multiline
                  rows={5}
                />
                <Box sx={{ textAlign: "left" }}>
                  <StyledButton variant="contained" type="submit">
                    Send message
                  </StyledButton>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ mt: 10 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.9015374841656!2d3.3451458!3d6.5791534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b92d5b05645db%3A0xe5a16a8a6570c3e5!2sValue%20Mine%20Technologies%20Limited!5e0!3m2!1sen!2sng!4v1686156343242!5m2!1sen!2sng"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </Box>
        </Box>
      </StyledContainer>
      <Footer />
    </>
  );
};

export default ContactUs;
