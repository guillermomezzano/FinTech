// import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";
import Carousel from "../../ui/carousel";

// data
import {
  imgsCarouselOne,
  imgsCarouselTwo,
  imgsCarouselThree,
} from "../../data/dataImageCarousel";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const CarouselTabs = () => {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //   const handleChangeIndex = (index) => {
  //     setValue(index);
  //   };

  return (
    <Box
      sx={{
        margin: "64px 0 0 0",
        // bgcolor: "red",
      }}
    >
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <div>
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Carousel imgs={imgsCarouselOne} />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Carousel imgs={imgsCarouselTwo} />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Carousel imgs={imgsCarouselThree} />
        </TabPanel>
      </div>
    </Box>
  );
};

export default CarouselTabs;
