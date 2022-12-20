import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import EventCard from './pages/Events/EventCard';
import WorkshopCard from './pages/Events/WorkshopCard';
import { makeStyles } from '@material-ui/core/styles';
// import WorkshopCard from './pages/Events/WorkshopCard';
// import MenuIcon from '@mui/icons-material/Menu';
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// import Card from '../../src/components/pages/Sponsors/SponsorSection/Card';
import data from './pages/Events/Data/data';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }} id="box1">
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`
  };
}
const useStyles = makeStyles((theme) => ({
  tabs: {
    '& .MuiTabs-indicator': {
      background: '#FCC907'
    }
  }
}));
export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ flexGrow: 1, display: 'flex', height: 'auto' }} className="box">
      {/* <ArrowBackIosNewIcon onClick={collapseMenu} /> */}
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: 3,
          borderColor: '#FCC907',
          fontSize: '38px',
          fontColor: 'black',
          '& .MuiTabs-indicator': {
            background: '#FCC907',
            width: '0px'
          },
          '& .MuiButtonBase-root-MuiTab-root': {
            alignItems: 'flex-start'
          }
        }}
        className="tabs">
        <Tab label="Photography" {...a11yProps(0)} />
        <Tab label="Cinematography" {...a11yProps(1)} />
        <Tab label="Outreach" {...a11yProps(2)} />
        <Tab label="Media" {...a11yProps(3)} />
        <Tab label="Design" {...a11yProps(4)} />
        <Tab label="Animation" {...a11yProps(5)} />
      </Tabs>

      <TabPanel value={value} index={0} className="tab-panel">
        <div className="card-container">
          <div className="event-cards">
            {data.photographyData.map((item, index) => {
              return (
                <EventCard
                  img={item.img}
                  title={item.title}
                  type={item.type}
                  link={item.link}
                  price={item.price}
                  prize={item.prize}
                  item={item}
                  key={index}
                />
              );
            })}
          </div>
          <div className="workshop-cards">
            {data.photographyWorkshopData.map((item, index) => {
              return (
                <WorkshopCard
                  img={item.img}
                  title={item.title}
                  type={item.type}
                  link={item.link}
                  price={item.price}
                  prize={item.prize}
                  desc={item.desc}
                  date={item.date}
                  time={item.time}
                  item={item}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="card-container">
          <div className="event-cards">
            {data.cineData.map((item, index) => {
              return (
                <EventCard
                  img={item.img}
                  title={item.title}
                  type={item.type}
                  link={item.link}
                  price={item.price}
                  prize={item.prize}
                  item={item}
                  key={index}
                />
              );
            })}
          </div>
          <div className="workshop-cards">
            {data.cineWorkshopData.map((item, index) => {
              return (
                <WorkshopCard
                  img={item.img}
                  title={item.title}
                  type={item.type}
                  link={item.link}
                  price={item.price}
                  prize={item.prize}
                  desc={item.desc}
                  date={item.date}
                  time={item.time}
                  item={item}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </TabPanel>
      <Divider />
      <TabPanel value={value} index={2}>
        <div className="card-container">
          <div className="event-cards">
            {data.outreachData.map((item, index) => {
              return (
                <EventCard
                  img={item.img}
                  title={item.title}
                  type={item.type}
                  link={item.link}
                  price={item.price}
                  prize={item.prize}
                  item={item}
                  key={index}
                />
              );
            })}
          </div>
          <div className="workshop-cards">
            {data.outreachWorkshopData.map((item, index) => {
              return (
                <WorkshopCard
                  img={item.img}
                  title={item.title}
                  type={item.type}
                  link={item.link}
                  price={item.price}
                  prize={item.prize}
                  desc={item.desc}
                  date={item.date}
                  time={item.time}
                  item={item}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </TabPanel>
      <Divider />
      <TabPanel value={value} index={3}>
        <div className="card-container">
          <div className="event-cards">
            {data.mediaData.map((item, index) => {
              return (
                <EventCard
                  img={item.img}
                  title={item.title}
                  type={item.type}
                  link={item.link}
                  price={item.price}
                  prize={item.prize}
                  item={item}
                  key={index}
                />
              );
            })}
          </div>
          <div className="workshop-cards">
            {data.mediaWorkshopData.map((item, index) => {
              return (
                <WorkshopCard
                  img={item.img}
                  title={item.title}
                  type={item.type}
                  link={item.link}
                  price={item.price}
                  prize={item.prize}
                  desc={item.desc}
                  date={item.date}
                  time={item.time}
                  item={item}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </TabPanel>
      <Divider />
      <TabPanel value={value} index={4}>
        <div className="card-container">
          <div className="event-cards">
            {data.designData.map((item, index) => {
              return (
                <EventCard
                  img={item.img}
                  title={item.title}
                  type={item.type}
                  link={item.link}
                  price={item.price}
                  prize={item.prize}
                  item={item}
                  key={index}
                />
              );
            })}
          </div>
          <div className="workshop-cards">
            {data.designWorkshopData.map((item, index) => {
              return (
                <WorkshopCard
                  img={item.img}
                  title={item.title}
                  type={item.type}
                  link={item.link}
                  price={item.price}
                  prize={item.prize}
                  desc={item.desc}
                  date={item.date}
                  time={item.time}
                  item={item}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </TabPanel>
      <Divider />
      <TabPanel value={value} index={5}>
        <div className="card-container">
          <div className="event-cards">
            {data.animationData.map((item, index) => {
              return (
                <EventCard
                  img={item.img}
                  title={item.title}
                  type={item.type}
                  link={item.link}
                  price={item.price}
                  prize={item.prize}
                  item={item}
                  key={index}
                />
              );
            })}
          </div>
          <div className="workshop-cards">
            {data.animationWorkshopData.map((item, index) => {
              return (
                <WorkshopCard
                  img={item.img}
                  title={item.title}
                  type={item.type}
                  link={item.link}
                  price={item.price}
                  prize={item.prize}
                  desc={item.desc}
                  date={item.date}
                  time={item.time}
                  item={item}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </TabPanel>
    </Box>
  );
}
