import {Button, Menu, MenuItem} from "@mui/material";
import {useState, createElement} from "react";
import {NewAccountIncome} from "../../view/NewAccountIncome";
import ModalForm from "./ModalForm";
import {Link} from "react-router-dom";
import paths from "../../paths";


// [
// (): ModalForm => (<ModalForm dialogContentText={"Cadastre uma nova entrada"}
//                              dialogTitle={"Nova Entrada"}
//                              handleClickClose={handleModalClose}
//                              isOpen={modalOpen}/>),
//     (): ModalForm => (<ModalForm dialogContentText={"Cadastre uma nova saída"}
//                                  dialogTitle={"Nova Saída"}
//                                  handleClickClose={handleModalClose}
//                                  isOpen={modalOpen}/>),
//     (): ModalForm => (<ModalForm dialogContentText={"Cadastre uma nova transferência"}
//                                  dialogTitle={"Nova Transferência"}
//                                  handleClickClose={handleModalClose}
//                                  isOpen={modalOpen}/>),
// ]

type DropDownMenuParameters = { title: string, menuItems: Array<string> }

const DropDownMenu = (menuParameters: DropDownMenuParameters) => {
    const {title, menuItems} = menuParameters
    const [anchorEl, setAnchorEl] = useState(null);
    const [openDialogName, setOpenDialog] = useState("Entrada");
    const [isModalOpen, setIsModalOpen] = useState(false)

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const openModal = (modalToOpen: String) => {
        setOpenDialog(modalToOpen)
        handleClose()
        setIsModalOpen(true)
    }
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
                    .map(menuItem => (<MenuItem component={Link}
                                                to={paths.new_income}
                                                className='link'
                                                key={menuItem}
                                                onClick={() => openModal(menuItem)}>
                        {menuItem}
                    </MenuItem>))}
            </Menu>
        </div>
    );
}

export default DropDownMenu