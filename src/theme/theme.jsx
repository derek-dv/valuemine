import { createTheme } from "@mui/material";

export const theme = createTheme({
  breakpoints: {
    values: {
      xxs:0,
      xs: 380,
      sm: 600,
      md: 1050,
      lg: 1536,
    },
  },

  components: {
  
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "16px",
          borderRadius: "22px",
          textTransform: "inherit",
          transition: "ease-in 0.3s",
          "&:disabled": {
            opacity: "0.7",
          },
          "&:hover": {
            backgroundColor: "#060637s",
            color:'white'
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color:"#8176ff"
        
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          // backgroundColor: "red",
          width: "100%",
          height: "40px",
          color:'#f4f4f4',
          outline: "none",
          borderBottom: "1.2px solid #8176ff",
        },
        input: {
            backgroundColor: "transparent",
          color: "",
          "&::placeholder": {
            color:'lightgray'
           
          },
        },
      },
    },
  },

  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
    fontSize: 12,
    color: "white",
    h1: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontSize: 47,
    },
    h2: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontSize: 32,
    },
    h3: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontSize: 30,
    },
    h4: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontSize: 20,
    },
    h5: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontSize: 16,
    },
    h6: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontSize: 14,
    },
  },
  // shadows: ["none", "0px 3px 6px #00000015", ...Array(23).fill("none")],

  palette: {
    primary: {
      main: "#0B6ED0",
      textWhite: "#ebe7e7",
      offWhite:'#F6F6F9',
      textDark: "#212134",
      deepblue: "#045ce0",
      darkblue: "#013076",
      textGray: "#666687",
      darkGray: "#181826",
     

    },

    secondary: {
      main: "#12A55C",
    },
    // success: {
    //   main: "#39B200",
    // },
    // warning: {
    //   main: "#FFC107",
    // },
    // danger: {
    //   main: "#B60A03",
    // },
    // error: {
    //   main: "#d80000",
    // },
  },
});
export default theme;