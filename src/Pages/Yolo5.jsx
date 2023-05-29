import React from 'react'
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import YoloImage from '../Components/YoloImage';
import YoloSample from '../Components/YoloSample';
import YoloVideo from '../Components/YoloVideo';
import '../CSS/yolo5.css';



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


 






const Yolo5 = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <Box
    className='background-img'
    
      sx={{
        bgcolor: 'background.transparent',
        width: '100%',
        position: 'relative',
        minHeight: '75vh',
      }}
    >
      <AppBar position="static" color="default" className='background_'>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          // textColor="black"
          className='tabs'
          variant="fullWidth"
          aria-label="action tabs example"
        >
          <Tab className='tabs' label="Detect Your Image" {...a11yProps(0)} />
          <Tab className='tabs' label="Detect Object From Video" {...a11yProps(1)} />
          <Tab className='tabs' label="Sample Image" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <YoloImage/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <YoloVideo/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <YoloSample/>
        </TabPanel>
      </SwipeableViews>
      {/* {fabs.map((fab, index) => (
        <Zoom
          key={fab.color}
          in={value === index}
          timeout={transitionDuration}
          style={{
            transitionDelay: `${value === index ? transitionDuration.exit : 0}ms`,
          }}
          unmountOnExit
        >
          <Fab sx={fab.sx} aria-label={fab.label} color={fab.color}>
            {fab.icon}
          </Fab>
        </Zoom>
      ))} */}
    </Box>
  )
}

export default Yolo5