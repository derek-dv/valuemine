import React, { useState } from "react";
import { StyledContainer } from "../../GlobalStylings/Global";
import {
  InputContainer,
  InputLabel,
  LoginContainer,
  StyledButton,
  StyledHeading,
  StyledImage,
  StyledInput,
  StyledLink,
  StyledWrapper,
  SubHeading,
  Line 
} from "./Styling";
import images from "../../../assets/images";
import {
  FormControl,
  Stack,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import useSignin from "../../hooks/useSignin";
import { Visibility, VisibilityOff } from "@mui/icons-material";


function Signin() {
  const initialValues = {
    email: "",
    password: "",
    rememberMe: false,
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const { userSchema, handleFormSubmit, } = useSignin();

  return (
    <StyledContainer>
      <StyledWrapper>
        <Stack
          alignItems="center"
          justifyContent={"center"}
          spacing={2}
          textAlign={"center"}
          width={"100%"}
          mb={2}
        >
          <StyledImage src={images.logo} alt="logo" />
          <StyledHeading variant="p">
            Join the ValueMine Community
          </StyledHeading>
          <SubHeading>
            ValueMine Community is a community of 1,216,231 amazing subscribers
            and partners
          </SubHeading>
        </Stack>
        <Stack width="100%" alignItems="center" justifyContent={"center"}>
          {/* --------------------Input Fields---------------- */}
          <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={userSchema}
          >
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
              setFieldValue,
            }) => (
              <LoginContainer onSubmit={handleSubmit}>
                <InputContainer>
                  <InputLabel>Registered User ID</InputLabel>
                  <FormControl>
                    <StyledInput
                      id="name"
                      type="text"
                      name="email"
                      variant="outlined"
                      value={values.email}
                      placeholder="example@email.com"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={!!touched.email && !!errors.email}
                      helperText={touched.email && errors.email}
                    />
                  </FormControl>
                </InputContainer>

                {/* ----------------PASSWORD---------------- */}
                <InputContainer>
                  <InputLabel>Password</InputLabel>
                  <FormControl>
                    <StyledInput
                      placeholder="6+ character"
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={values.password}
                      variant="outlined"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={!!touched.password && !!errors.password}
                      helperText={touched.password && errors.password}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </FormControl>
                </InputContainer>

                {/* ----------------REMEMBER ME CHECKBOX---------------- */}
                <InputContainer>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={values.rememberMe}
                        onChange={() =>
                          setFieldValue("rememberMe", !values.rememberMe)
                        }
                        name="rememberMe"
                        color="primary"
                      />
                    }
                    label="Remember me"
                  />
                </InputContainer>

                {/* --------------SUBMIT BUTTON---------- */}
                <Stack
                  width="100%"
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <StyledButton variant="contained" type="submit">
                    Continue
                  </StyledButton>
                </Stack>
              </LoginContainer>
            )}
          </Formik>
        </Stack>
        <Stack
          spacing={5}
          width={"80%"}
          textAlign={"center"}
          alignItems="center"
          justifyContent={"center"}
        >
          <Typography
            variant="p"
            color="primary.textDark"
            sx={{ fontSize: "16px", }}
            mb={2}
          >
            By signing in, you are agreeing to our
            <StyledLink to="/privacypolicy"> privacy policy</StyledLink>,
            <StyledLink to="terms"> terms of use</StyledLink> and{" "}
            <StyledLink to="/codeofconduct"> code of conduct</StyledLink>.
          </Typography>
        <Line  />
          <Typography
            variant="p"
            color="primary.textDark"
            sx={{ fontSize: "17px", fontWeight: "500" }}
            mt={2}
          >
            New to ValueMine Community?
            <StyledLink to="/signup"> Create Account</StyledLink>,
          </Typography>
        </Stack>
      </StyledWrapper>
    </StyledContainer>
  );
}

export default Signin;
