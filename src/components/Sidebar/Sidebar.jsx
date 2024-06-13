import { Drawer, List, ListItem, ListItemText, Button, styled, Box, IconButton, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import { StyledImage } from "../Header/HeaderStyling";
import Logo from "../../../assets/images/logo.png";
import { StyledLink } from "../../GlobalStylings/Global";

const ImageWrapper = styled(Box)({
  position: 'absolute',
  top: '10px',
  left: '10px',
})
const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    backgroundColor: '#F6F6F9',
    width: '100%',
    height: '100%', 
    color: '#333',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems:"center",
    position: 'relative',
  },
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '10px',
  right: '10px',
}));

const StyledList = styled(Stack)({
  marginTop: '80px', 
  paddingBottom: '20px', 
  width:"100%",

    display:"flex",
    alignItems:"center",
    justifyContent:"center",
});

const StyledListItem = styled(ListItem)({
  justifyContent: 'center',
  marginBottom: '10px', 


});

const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  textAlign: 'center',
  fontWeight: '600', 
  fontSize:"17px",
  color:"#212134",
  '& :hover':{
    color:theme.palette.primary.main
  }
}));

const SidebarFooter = styled(Box)({
  padding: '20px',
  borderTop: '1px solid #E0E0E0',
  display: 'flex',
  justifyContent: 'center',
});

const routes = [
  { title: "Home", path: "/" },
  { title: "About Us", path: "/about" },
  { title: "Products", path: "/products" },
  { title: "News & Blog", path: "/blog" },
  { title: "Support", path: "/support" },
  { title: "Contact Us", path: "/contact" }
];

const Sidebar = ({ open, onClose }) => {
  return (
    <StyledDrawer   PaperProps={{
      sx: {
        width: "100%",
        elevation: 0,
        backgroundColor: "#f4f4f4",
        borderTop: "2px solid blue",
        display: { md: "none", sm: "block" },
      },
    }} anchor="left" open={open} onClose={onClose}>
       <Box
            sx={{
              marginTop: "4rem",
              display:"flex",
              width:'100%',
              alignItems:"center",
              justifyContent:"center",
              flexDirection:"column",
            
             
              
            }}
          >
      <CloseButton onClick={onClose}>
        <CloseIcon sx={{fontSize:"30px"}} />
      </CloseButton>
<ImageWrapper>
      <StyledImage src={Logo} alt="logo" />
      </ImageWrapper>
      <StyledList>
        {routes.map((route) => (
          <StyledListItem  key={route.title} component={Link} to={route.path}>
            <StyledListItemText primary={route.title} />
          </StyledListItem>
        ))}
      </StyledList>
      <StyledLink to="/login" sx={{width:"50%", display:"flex",alignItems:"center"}} >
        <Button sx={{marginTop:"2rem", width:"100%"}} variant="contained" fullWidth onClick={onClose} >
          Get Started
        </Button>
        </StyledLink>
      {/* </SidebarFooter> */}
      </Box>
    </StyledDrawer>
  );
};

export default Sidebar;
