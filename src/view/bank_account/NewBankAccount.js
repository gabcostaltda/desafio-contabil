import {Box, FormControl, FormHelperText, Input, InputLabel} from "@mui/material";

const NewBankAccount = () => {
    return (<Box minWidth="sm" sx={{marginLeft: '240px', marginTop: '100px'}}>
        <FormControl>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text"/>
            <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl>
    </Box>)
}

export default NewBankAccount