import {Button, Drawer} from "@mui/material";
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import {useState} from "react";
import MenuList from "./MenuList";

const SideMenu = () => {
    const [state, setState] = useState({});
    const toggleDrawer = (open) =>
        (event) => {
            if (event.type === 'keydown'
                && (event.key === 'Tab' || event.key === 'Shift')) {
                return;
            }
            setState({...state, open});
        };

    return (<>
        <Button onClick={toggleDrawer(true)}>
            <ViewHeadlineIcon/>
        </Button>
        <Drawer
            anchor='left'
            open={state['open']}
            onClose={toggleDrawer(false)}
            onClick={toggleDrawer(!state['open'])}
        >
            <MenuList toggleDrawer={toggleDrawer}/>
        </Drawer>
    </>)
}

export default SideMenu