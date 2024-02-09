import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from '@mui/material';

import SideBar from "./components/side-bar/side-bar.component";
import TopBar from "./components/top-bar/top-bar.component";
import Home from "./routes/home/home.component";

function App() {
    const [activePath, setActivePath] = useState(null);

    return (
        <div className={` h-screen w-screen flex`}>
            <SideBar setActivePath={setActivePath} />
            <Box className='h-full overflow-y-scroll w-full hide-scrollbar '>
                <TopBar activePath={activePath} />
                <Routes>
                    <Route path='/' >
                        <Route index element={<Home />} />
                    </Route>
                </Routes>
            </Box>
        </div >
    );
}

export default App;
