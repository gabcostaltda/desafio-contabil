import {Box, Drawer, Toolbar} from "@mui/material";
import MenuList from "./MenuList";

const drawerWidth = 240;

const SideMenu = () => {
    return (<Box sx={{display: 'flex'}}>
        <Toolbar/>

        <Drawer
            variant="permanent"
            anchor='left'
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}>
            <MenuList/>
        </Drawer>
    </Box>)
}

export default SideMenu