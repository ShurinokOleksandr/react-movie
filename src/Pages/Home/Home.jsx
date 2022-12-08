import React from 'react';
import HomeTabsForPC from "./HomeTabsForPC";
import HomeTabsForSmallerDevices from "./HomeTabsForSmallerDevices";





const Home = () => {
    const windowsLenht = window.innerWidth
    return (
        <section className={"Home"}>
            { windowsLenht  > "1000" ? <HomeTabsForPC/> : <HomeTabsForSmallerDevices/>
            }
        </section>
    );
};

export default Home;