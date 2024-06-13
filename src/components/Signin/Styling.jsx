import {
  Box,
  Button,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import theme from "../../theme/theme";
import { Link } from "react-router-dom";

export const StyledWrapper = styled(Stack)({
  width: "50%",
  padding: "5rem 0",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down('md')]: {
    width: "70%",
  },
  [theme.breakpoints.down('sm')]: {
    width: "90%",
  },
  [theme.breakpoints.down('xxs')]: {
    width: "100%",
    padding: "2rem 0",
  },
});

export const Line = styled("p")({
  width: "100%",
  height: "1px",
  background: "#8E8EA9",
});

export const StyledImage = styled("img")({
  objectFit: "contain",
  width: "130px",
  [theme.breakpoints.down('md')]: {
    width: "110px",
  },
  [theme.breakpoints.down('sm')]: {
    width: "90px",
  },
  [theme.breakpoints.down('xxs')]: {
    width: "70px",
  },
});

export const StyledHeading = styled("p")({
  fontSize: "26px",
  fontWeight: "600",
  color: "#181826",
  [theme.breakpoints.down('md')]: {
    fontSize: "24px",
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: "22px",
  },
  [theme.breakpoints.down('xxs')]: {
    fontSize: "20px",
  },
});

export const SubHeading = styled("p")({
  fontSize: "16px",
  fontWeight: "400",
  color: "#181826",
  [theme.breakpoints.down('md')]: {
    fontSize: "14px",
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: "12px",
  },
  [theme.breakpoints.down('xxs')]: {
    fontSize: "10px",
  },
});

export const LoginContainer = styled("form")({
  width: "80%",
  height: "100%",
  borderRadius: "20px",
  padding: "2.5rem 0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: '1rem',
  [theme.breakpoints.down('md')]: {
    width: "90%",
  },
  [theme.breakpoints.down('sm')]: {
    width: "100%",
  },
  [theme.breakpoints.down('xxs')]: {
    padding: "1.5rem 0",
  },
});

export const InputContainer = styled(Stack)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
});

export const InputLabel = styled(Typography)({
  color: "#212134",
  fontWeight: "600",
  fontSize: "15px",
  marginBottom: "2px",
  [theme.breakpoints.down('md')]: {
    fontSize: "14px",
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: "13px",
  },
  [theme.breakpoints.down('xxs')]: {
    fontSize: "12px",
  },
});

export const StyledButton = styled(Button)({
  width: "100%",
  height: "50px",
  fontSize: "18px",
  fontWeight: "400",
  marginTop: "1rem",
  borderRadius: '5px',
  [theme.breakpoints.down('md')]: {
    height: "45px",
    fontSize: "16px",
  },
  [theme.breakpoints.down('sm')]: {
    height: "40px",
    fontSize: "14px",
  },
  [theme.breakpoints.down('xxs')]: {
    height: "35px",
    fontSize: "12px",
  },
});

export const StyledInput = styled(TextField)({
  background: "transparent",
  fontSize: "18px",
  border: "none",
  width: "100%",
  height: "57px",
  color: theme.palette.primary.textDark,
  input: {
    fontSize: "15px",
    color: theme.palette.primary.textDark,
    "&::placeholder": {
      fontSize: "15px",
    },
  },
  [theme.breakpoints.down('md')]: {
    height: "50px",
    input: {
      fontSize: "14px",
      "&::placeholder": {
        fontSize: "14px",
      },
    },
  },
  [theme.breakpoints.down('sm')]: {
    height: "45px",
    input: {
      fontSize: "13px",
      "&::placeholder": {
        fontSize: "13px",
      },
    },
  },
  [theme.breakpoints.down('xxs')]: {
    height: "40px",
    input: {
      fontSize: "12px",
      "&::placeholder": {
        fontSize: "12px",
      },
    },
  },
});

export const StyledLink = styled(Link)({
  textDecoration: "none",
  color: theme.palette.primary.main,
});
