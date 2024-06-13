import React from "react";
import {
  StyledContainer,
  StyledHeader,
  SubHeading,
} from "../../GlobalStylings/Global";
import BgImage from "../../../assets/images/bg-image.png";
import { StyledWrapper } from "./PartnerStyling";
import { Box, Card, Grid } from "@mui/material";
import CardComponent from "./Card";

function Partner() {
    const imageUrl1 = "https://s3-alpha-sig.figma.com/img/65dd/3e00/dd4c845cddacac660daa30c68a4a575c?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HCAJdEgnNe0jkCyfYlYKKwIRjlIROp4ZlmUWcreaHoWcVuYT5dzX649KbGOC5AZz~zKBgr9topmkQ1XNmhMhEoflhMOD0k7qbPOTPo4GI44vuS-e1X9d0VEe5k2T1FV2OyDVEvE-hueqoyy~gFA-zm~h6i3dF9IJ3HniRibxoehcUCk2oagZZxDpClj2U8U-~BY60MuGlBECg6wGgZR-XYHG4~PfUPnVobOTgMAlTGQHbxW73pcuWm6fnV1G64EDCO5ZFq-3p4GOVdTbXaNueuASDYV3ZcYrkUkfF7hcWt2ubXO01bSyVZWudm8H831n70cT1LXCrIZ2ymlt2NiJ5w"
    const imageUrl3 = "https://s3-alpha-sig.figma.com/img/8276/ca0d/160efd7c60125210d316a53bd015da29?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DrfC1Lsd~jPTWOYCtqnRAdy62Ej-JOuh9Ez3CC6dqMkbKsEJ5ax1XUzSs-sPaoUmU1IYptIzULdmX5VnDz42E83exPSpEdMbXBLIHrutkTz0IbrsmyYzkXUj0tVhtXxs21vsSHge6NF5cpxKcQoNdS3HqP0piz0Xp-UmUU0Zmsou4TP3AvZbjgtsxuoP7FrSQ7g8A~Tit3ylsx0ZtUdEq0yKZhPmHbQwIPPgQ1v5dus9hD5S~nNLOnwTY1A5M~jK5KP~BeqEOmHfFq6QHn1aOH-~SHIitAlU5Pabz3-1LXgJJhZjwJD~0-mpsDf4Fo3Vg2JKkHcHegE0sNQ1kXc05g__"
     const imageUrl2 = "https://s3-alpha-sig.figma.com/img/9dae/4b5d/6f4363bbd74c04cb70a604dd1820934f?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HbZJ-jM3dyxbaghWoDRlrL-MbObA3XuxL1akxf0DCMG-dhaUFneTSsN8rwWNCkn~ZPxtZtFmFiuxVVdtWNJinsmvIMZR39Kcg97MSPJV-Y9PzaLLNuG~aAbaZyjlEL56xIjmEyem53kDMJKrN9OGqEon43H8Ao4A~5aydanZssOx40yvtzZrDgiyhpBa4Spyc1qTPOM48pxMt3ef3cKzhkeRgq0qVqLopcr~aLPmRI8c46p9Bn4Kao1sGsVL5MVY2AGmtU4qyBbuckz6tn6quLTSjlCFU9TJV9F4mD3DEJPM5khIkPPOX9OA~stE-T8-P8iLKltK46e9cDOvd8Ccbg__"
  return (
    <Box
      sx={{
        backgroundImage: `url(${BgImage})`,
        backgroundRepeat: "no",
        backgroundSize: "cover",
        width:"100vw",
        display:"flex",
        justifyContent:"center",
        mb:4,
       marginTop:{sm:"64px", xxs:"5px"}
      }}
    >
      <StyledWrapper marginTop="1rem" mb={4}>
        <StyledHeader>ACCESS VALUEMINE</StyledHeader>
        <SubHeading>Be a part of the process</SubHeading>
        <Box sx={{ width: "100%", height:'100%',marginTop:"2rem", display:"flex",alignItems:"center", justifyContent:"center" }}>
        <Grid container sx={{ width: "100%",}} spacing={3}>
          <Grid item sm={6} xs={12}>
            <CardComponent
              title="New Subscribers"
              description="Register to use Valuemine ERP solutions for your day-to-day operations"
              buttonText="Get started"
              Image={imageUrl1}
               minHeight="450px"
              extraContent={false}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <CardComponent
             minHeight="450px"
              title="Subscription Payment"
              description="Pay for your subscription or on behalf of a subscriber"
              buttonText="Make Payment"
              Image={imageUrl2}
              extraContent={false}
            />
          </Grid>
          <Grid item xs={12}>
            <CardComponent
               minHeight="500px"
              title="New Partners"
              description="Register as an investor, agent, or consultant to onboard Valuemine ERP subscribers."
              buttonText="Get started"
              extraContent={true}
              Image={imageUrl3}
            />
          </Grid>
        </Grid>
        </Box>
      </StyledWrapper>
    </Box>
  );
}

export default Partner;
