import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import EventCard from './EventCard';
import { makeStyles } from '@material-ui/core/styles';
import { Fade } from 'react-reveal';
import data from './Data/data';

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
        <Box sx={{ p: 3 }} id="box1" style={{ paddingTop: '0px' }}>
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
  const [color, setColor] = React.useState('#00CCF5');
  return (
    <Box sx={{ flexGrow: 1, display: 'flex', height: 'auto' }} className="box">
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          overflow: 'inherit',
          marginTop: '0px',
          boxSizing: 'border-box',
          width: '360px',
          left: '1px',
          top: '0px',
          background: color,
          border: '2px solid #000000',
          borderRight: 3,
          borderColor: 'black',
          fontSize: '38px',
          fontColor: 'black',
          '& .MuiTabs-indicator': {
            background: '#000000',
            width: '0px'
          },
          '& .MuiButtonBase-root-MuiTab-root': {
            alignItems: 'flex-start',
            paddingLeft: '24px'
          }
        }}
        className="tabs">
        <Tab label="Photography" {...a11yProps(0)} onClick={() => setColor('#00CCF5')} />
        <Tab label="Cinematography" {...a11yProps(1)} onClick={() => setColor('#14F0B9')} />
        <Tab label="Outreach" {...a11yProps(2)} onClick={() => setColor('#FFC900')} />
        <Tab label="Media" {...a11yProps(3)} onClick={() => setColor('#FF90E8')} />
        <Tab label="Design" {...a11yProps(4)} onClick={() => setColor('#685EDA')} />
        <Tab label="Animation" {...a11yProps(5)} onClick={() => setColor('#FE6263')} />
      </Tabs>

      <TabPanel value={value} index={0} className="tab-panel">
        <div className="card-container">
          <div className="event-cards">
            <Fade right>
              {data.photographyData.map((item, index) => {
                return (
                  <EventCard
                    img={item.img}
                    title={item.title}
                    type={item.type}
                    link={item.link}
                    price={item.price}
                    prize={item.prize}
                    content={item.content}
                    color={item.color}
                    color2={item.color2}
                    item={item}
                    key={index}
                    marginRight={'70px'}
                    left={'95px'}
                  />
                );
              })}
            </Fade>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="card-container">
          <div className="event-cards">
            <Fade right>
              {data.cineData.map((item, index) => {
                return (
                  <EventCard
                    style={{ left: '607px' }}
                    img={item.img}
                    title={item.title}
                    type={item.type}
                    link={item.link}
                    price={item.price}
                    prize={item.prize}
                    content={item.content}
                    item={item}
                    key={index}
                    color={item.color}
                    color2={item.color2}
                    marginRight={'70px'}
                    left={'95px'}
                  />
                );
              })}
            </Fade>
          </div>
        </div>
      </TabPanel>
      <Divider />
      <TabPanel value={value} index={2}>
        <div className="card-container">
          <div className="event-cards">
            <Fade right>
              {data.outreachData.map((item, index) => {
                return (
                  <EventCard
                    img={item.img}
                    title={item.title}
                    type={item.type}
                    link={item.link}
                    price={item.price}
                    prize={item.prize}
                    content={item.content}
                    item={item}
                    key={index}
                    color={item.color}
                    color2={item.color2}
                    marginRight={'70px'}
                    left={'95px'}
                  />
                );
              })}
            </Fade>
          </div>
        </div>
      </TabPanel>
      <Divider />
      <TabPanel value={value} index={3}>
        <div className="card-container">
          <div className="event-cards">
            <Fade right>
              {data.mediaData.map((item, index) => {
                return (
                  <EventCard
                    img={item.img}
                    title={item.title}
                    type={item.type}
                    link={item.link}
                    price={item.price}
                    prize={item.prize}
                    content={item.content}
                    item={item}
                    key={index}
                    color={item.color}
                    color2={item.color2}
                    marginRight={'70px'}
                    left={'95px'}
                  />
                );
              })}
            </Fade>
          </div>
        </div>
      </TabPanel>
      <Divider />
      <TabPanel value={value} index={4}>
        <div className="card-container">
          <div className="event-cards">
            <Fade right>
              {data.designData.map((item, index) => {
                return (
                  <EventCard
                    img={item.img}
                    title={item.title}
                    type={item.type}
                    link={item.link}
                    price={item.price}
                    prize={item.prize}
                    content={item.content}
                    item={item}
                    key={index}
                    color={item.color}
                    color2={item.color2}
                    marginRight={'70px'}
                    left={'95px'}
                  />
                );
              })}
            </Fade>
          </div>
        </div>
      </TabPanel>
      <Divider />
      <TabPanel value={value} index={5}>
        <div className="card-container">
          <div className="event-cards">
            <Fade right>
              {data.animationData.map((item, index) => {
                return (
                  <EventCard
                    img={item.img}
                    title={item.title}
                    type={item.type}
                    link={item.link}
                    price={item.price}
                    prize={item.prize}
                    content={item.content}
                    item={item}
                    key={index}
                    color={item.color}
                    color2={item.color2}
                    marginRight={'70px'}
                    left={'95px'}
                  />
                );
              })}
            </Fade>
          </div>
        </div>
      </TabPanel>
    </Box>
  );
}
