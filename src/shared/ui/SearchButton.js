import * as React from 'react';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

const SearchButton = (props) => 
{

 
    return (
      <Button variant="contained" startIcon={<SearchIcon />}
       {...props} >
        Search
      </Button>

    );


};

export default SearchButton;