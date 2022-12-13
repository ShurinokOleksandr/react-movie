import React from 'react';
import {Tab, Tabs, Typography} from "@mui/material";
import Box from "@mui/material/Box";
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
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const HomeTabsForPc = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box
            sx={{flexGrow: 0, display: 'flex'}}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="nav tabs example"
                sx={{width: 200}}
            >
                <Tab sx={{color: 'yellow', fontSize: 14, fontWeight: "bold", alignItems: 'start'}}
                     label="Понравившееся " {...a11yProps(0)} />
                <Tab sx={{color: 'yellow', fontSize: 14, fontWeight: "bold", alignItems: 'start'}}
                     label="Непонравившееся " {...a11yProps(1)} />
                <Tab sx={{color: 'yellow', fontSize: 14, fontWeight: "bold", alignItems: 'start'}}
                     label="Смотреть позже" {...a11yProps(2)} />
            </Tabs>
            <Box sx={{width: "80%"}}>
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

export default HomeTabsForPc;