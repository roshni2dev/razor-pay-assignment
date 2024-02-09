

import { Route, Routes } from "react-router-dom";
import { Box } from '@mui/material';
import SideBar from "./components/side-bar/side-bar.component";

function App() {
  return (
    <div className={` h-screen w-screen flex`
    }>
      <SideBar />
      <Box className='h-full overflow-y-scroll w-full p-5 hide-scrollbar animate-slideleft'>
        <Routes>
          <Route path='/' >
            <Route index element={<Home />} />
            <Route path='music' element={<Music />} />
            <Route path='collections' element={<Collection />} />
          </Route>
        </Routes>
      </Box>
    </div >
  );
}

export default App;


export const Home =()=> {
  return(
    <div style={{width: '1000px' ,background: '#1d2345'}}>Home</div>
  )
}

export const Music =()=> {
  return(
    <div>Music</div>
  )
}
export const Collection =()=> {
  return(
    <div>Collection</div>
  )
}