
import React from "react";
import { motion } from "framer-motion";
import { styled } from "@mui/material";
import theme from "../../theme/theme";

 const LogoImage = styled("img")({
  width: "180px",
  objectFit:"contain",
  [theme.breakpoints.down("sm")]: ({
      width: "70px",
      
  
  })
})


function Partner({  icon: Icon }) {
  return (
    <motion.div
      style={{ flex: "1",  }}
      flex={1}
      initial={{ x: "300%" }}
      animate={{ x: "0%" }}
      exit={{ x: "-100%" }}
      transition={{
        repeat: Infinity,
        duration: 5,
        ease: "linear",
        repeatDelay: 2,
      }}
    >
        <LogoImage src={ Icon} />
       
    
    </motion.div>
  );
}

export default Partner;