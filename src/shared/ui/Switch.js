import React from 'react';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';


const SwitchToggle = (props) => {
    const label = { inputProps: { 'aria-label': 'Size switch demo' } };

    return (


        <FormControlLabel

            control={<Switch {...label} color='primary'
               {...props} />}
            label={props.togglelabel}
            
        />


    );

}
export default SwitchToggle;