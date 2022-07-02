import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import type {SubmissionForm} from "./SubmissionForm";


type Props = {
    dialogTitle: string,
    dialogContentText: string,
    submissionForm?: SubmissionForm,
    handleClickClose: function,
    isOpen: boolean
}
export default function ModalForm(props: Props) {
    const {
        dialogTitle,
        dialogContentText,
        submissionForm,
        handleClickClose,
        isOpen
    } = props

    return (
        <div>
            <Dialog open={isOpen} onClose={handleClickClose}>
                <DialogTitle>{dialogTitle}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {dialogContentText}
                    </DialogContentText>
                    {submissionForm}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClickClose}>Voltar</Button>
                    <Button variant="contained" color="success" onClick={handleClickClose}>Salvar</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}