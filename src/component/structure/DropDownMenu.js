import {Button, Menu, MenuItem} from "@mui/material";
import {useState} from "react";


const DropDownMenu = ({title, menuItems}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                variant="contained"
                color="success"
            >
                {title}
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >

                {menuItems && menuItems
                    .map(menuItem => (<MenuItem onClick={handleClose}>{menuItem.title}</MenuItem>))}
            </Menu>
        </div>
    );
}

export default DropDownMenu