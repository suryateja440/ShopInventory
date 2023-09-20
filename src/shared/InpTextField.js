import * as React from 'react';
import TextField from '@mui/material/TextField';

const InpTextField = (props) =>{


    return (

        <TextField sx={{
            width: 320}}
            variant="outlined"
            {...props } />
    );

}
export default InpTextField;