import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ListOfFilms from "../../Components/PageWithSearchAndSortContent/ListOfFilms";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
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

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const HomeTabsForSmallerDevices = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box>
                <Tabs
                    variant="scrollable"
                    className={"Tabs"}
                    sx={{display:'flex',justifyContent:"spaceAround"}}
                    value={value} onChange={handleChange}
                    aria-label="basic tabs example">
                    <Tab sx={{color: 'yellow', fontSize: 14, fontWeight: "bold"}}
                         label="Понравившееся " {...a11yProps(0)} />
                    <Tab sx={{color: 'yellow', fontSize: 14, fontWeight: "bold"}}
                         label="Непонравившееся " {...a11yProps(1)} />
                    <Tab sx={{color: 'yellow', fontSize: 14, fontWeight: "bold"}}
                         label="Смотреть позже" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <Box className={"Box__Content"}>
                <TabPanel value={value} sx={{padding: "0"}} index={0}>
                    <ListOfFilms/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <ListOfFilms/>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <ListOfFilms/>
                </TabPanel>
            </Box>
        </Box>
    );
};

export default HomeTabsForSmallerDevices;