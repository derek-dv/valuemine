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
  Line,
} from "../Signin/Styling";
import images from "../../../assets/images";
import {
  FormControl,
  Stack,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import useSignup from "../../hooks/useSignup";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function Signup() {
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const { userSchema, handleFormSubmit } = useSignup();

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
          <StyledHeading variant="p">Join the ValueMine Community</StyledHeading>
          <SubHeading>
            ValueMine Community is a community of 1,216,231 amazing subscribers and partners
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
            }) => (
              <LoginContainer onSubmit={handleSubmit}>
                <InputContainer>
                  <InputLabel>Registered User ID</InputLabel>
                  <FormControl>
                    <StyledInput
                      id="email"
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

                {/* ----------------CREATE PASSWORD---------------- */}
                <InputContainer>
                  <InputLabel>Create Password</InputLabel>
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
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </FormControl>
                </InputContainer>

                {/* ----------------CONFIRM PASSWORD---------------- */}
                <InputContainer>
                  <InputLabel>Confirm Password</InputLabel>
                  <FormControl>
                    <StyledInput
                      placeholder="6+ character"
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={values.confirmPassword}
                      variant="outlined"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={!!touched.confirmPassword && !!errors.confirmPassword}
                      helperText={touched.confirmPassword && errors.confirmPassword}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowConfirmPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </FormControl>
                </InputContainer>

                {/* --------------SUBMIT BUTTON---------- */}
                <Stack width="100%" alignItems={"center"} justifyContent={"center"}>
                  <StyledButton variant="contained" type="submit">
                    Create Community Account
                  </StyledButton>
                </Stack>
              </LoginContainer>
            )}
          </Formik>
        </Stack>
        <Stack spacing={5} width={"80%"} textAlign={"center"} alignItems="center" justifyContent={"center"}>
          <Typography variant="p" mb={2} color="primary.textDark" sx={{ fontSize: "16px" }}>
            By signing up, you are agreeing to our
            <StyledLink to="/privacypolicy"> privacy policy</StyledLink>,
            <StyledLink to="/terms"> terms of use</StyledLink> and{" "}
            <StyledLink to="/codeofconduct"> code of conduct</StyledLink>.
          </Typography>
          <Line />
          <Typography variant="p"   mt={2} color="primary.textDark" sx={{ fontSize: "17px", fontWeight: "500" }}>
            Already have an account?
            <StyledLink to="/login"> Login</StyledLink>
          </Typography>
        </Stack>
      </StyledWrapper>
    </StyledContainer>
  );
}

export default Signup;
