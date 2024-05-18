import React, { useEffect, useState } from "react";
import Navigation from "../components/Header/Navigation";
import { useMediaQuery } from "@uidotdev/usehooks";

const HeaderSection = () => {
    const [showDrawer, setDrawerValue] = useState(false);
    const [showSettings, setSettingsValue] = useState(false);
    function toggleDrawer() {
        setDrawerValue(!showDrawer)
        if(!showDrawer) {
            setSettingsValue(false)
        }
    }
    function handleSettingsDropdown() {
        setSettingsValue(!showSettings)
    }

    useEffect(() => {
        document.body.classList[showDrawer ? 'add' : 'remove']('drawer-overlay');
    }, [showDrawer])
    const showDrawerMenu = useMediaQuery("only screen and (max-width : 768px)");

    return (
        <div className="container-full">
            <Navigation showDrawer={showDrawer} showDrawerMenu={showDrawerMenu} toggleDrawer={toggleDrawer} showSettings={showSettings} handleSettingsDropdown={handleSettingsDropdown}/>
        </div>
    )
}

export default HeaderSection;