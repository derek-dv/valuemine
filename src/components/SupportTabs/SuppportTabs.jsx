import React from 'react'
import { StyledContainer } from '../../GlobalStylings/Global'
import { StyledWrapper } from './Styling'
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Box } from '@mui/material';
import Faqs from '../Faqs/Faqs';
import Posts from '../Posts/Posts';
import PageHeader from '../PageHeader';
import images from '../../../assets/images';
import Chat from '../Chat';

const tabStyle = {
    fontSize: '16px', 
    color: 'primary.textGray',
    textTransform:"capitalize",
    '&.Mui-selected': {
      color: '#12A55C', // Change the color on focus/active
    },

}

function SuppportTabs() {
    const [value, setValue] = React.useState('1');
     const handleChange = (event, newValue) => {
      setValue(newValue);
    }
  return (
   <>
   <StyledContainer>
 
    <StyledWrapper>
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value} >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                TabIndicatorProps={{
                  sx: {
                    backgroundColor: '#12A55C', // Change the color of the indicator here
                  },
                }}
              >
            <Tab sx={tabStyle} label="Faqs" value="1" />
            <Tab  sx={tabStyle} label="ValueMine Community" value="2" />
            <Tab sx={tabStyle} label="Chat" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1"><Faqs /></TabPanel>
        <TabPanel value="2"><Posts /></TabPanel>
        <TabPanel value="3"><Chat /></TabPanel>
      </TabContext>
    </Box>
    </StyledWrapper>
   </StyledContainer>
   </>
 
  )
}

export default SuppportTabs