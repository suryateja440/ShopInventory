import * as React from 'react';
import SaveIcon from '@mui/icons-material/Save';
import LoadingButton from '@mui/lab/LoadingButton';

const SaveButton = (props) => 
{

 const loading =  false;
    return (
        <LoadingButton
          size="large"
          color="primary"
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="contained"
          {...props}
        >
          <span>Save</span>
        </LoadingButton>

    );


};

export default SaveButton;