import React from 'react'
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SegmentImg from '../Components/SegmentImg';
import SampleSegment from '../Components/SampleSegment';
import '../CSS/Segment.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}



const Segment = () => { 
  
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };



  return (
    <div className='bg-image'>

    
    <Box
      className=" box  "
      sx={{
        bgcolor: 'background.transparent',
        width: '100%',
        position: 'relative',
        minHeight: '100vh',
        alignContent: 'center',
        
      }}
    >
      <AppBar position="static" className='appbar ' color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          className='tabs'
          variant="fullWidth"
          aria-label="action tabs example"
          sx={{
            marginLeft:'2%',
            marginRight:'2%',
          }}
        >
          <Tab className='tabs ' label="Segment Your Image" {...a11yProps(0)} />
          <Tab className='tabs ' label="Sample Image" {...a11yProps(1)} />
          
        </Tabs>
      </AppBar>
      <SwipeableViews
      className='swipview'
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
        
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <SegmentImg/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <SampleSegment/>
        </TabPanel>
      </SwipeableViews>
      
    </Box>
    </div>
  );
};
export default Segment