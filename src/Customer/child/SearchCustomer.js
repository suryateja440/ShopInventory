import React from 'react';
import { Box } from '@mui/material';
import InpTextField from '../../shared/InpTextField';
import {AddCustomerKeys ,AddCustomerValidations} from '../../StaticObjects/AddCustomerObj';
import SearchButton from '../../shared/ui/SearchButton';


const SearchCustomer = (props) => {
    let initialCustomerValue = {
        [AddCustomerKeys.ShopName]: { value: "", isValid: true ,ErrorMessage : ""  },
        [AddCustomerKeys.Name]: { value: "", isValid: true ,ErrorMessage : "" },
        [AddCustomerKeys.Mobile]: { value: "", isValid: true ,ErrorMessage : "" },
        [AddCustomerKeys.City]: { value: "", isValid: true ,ErrorMessage : "" },
        [AddCustomerKeys.PinCode]: { value: "", isValid: true ,ErrorMessage : "" }
   }

   
    const [queryCustomer, setQueryCustomer] = React.useState(initialCustomerValue);
    const handleChange = (event , field) => {

        event.preventDefault();
        
//        const validationRes = ValidationCheck(event.target.value , field , AddCustomerValidations);
        setQueryCustomer((prevState) => (
            {
                ...prevState,
                [field]:{ ...prevState[field], 
                            value: event.target.value
                        }
          }
        ));  
    };


    const SearchActionEvent = () =>
    {
        let queryCustomerObj = {
            [AddCustomerKeys.ShopName]: queryCustomer[AddCustomerKeys.ShopName].value,
            [AddCustomerKeys.Name]: queryCustomer[AddCustomerKeys.Name].value,
            [AddCustomerKeys.Mobile]: queryCustomer[AddCustomerKeys.Mobile].value,
            [AddCustomerKeys.City]: queryCustomer[AddCustomerKeys.City].value,
            [AddCustomerKeys.PinCode]: queryCustomer[AddCustomerKeys.PinCode].value
        }
        debugger;
        props.onSearchAction(queryCustomerObj);

    }    

    return (
        <Box sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
            '& > button': { m: 1 }
        }}>
            
            {/* Shop Name */}
            <InpTextField 
                error={!queryCustomer[AddCustomerKeys.ShopName].isValid}
                id="outlined-required"
                label="Shop Name"
                value={queryCustomer[AddCustomerKeys.ShopName].value}
                onChange={e => { handleChange(e , AddCustomerKeys.ShopName) }}
                helperText={queryCustomer[AddCustomerKeys.ShopName].ErrorMessage}
            />

            {/* Name */}
            <InpTextField 
                error={!queryCustomer[AddCustomerKeys.Name].isValid}
                id="outlined-required"
                label="Name"
                value={queryCustomer[AddCustomerKeys.Name].value}
                onChange={e => { handleChange(e , AddCustomerKeys.Name) }}
            />

            {/* Mobile */}
            <InpTextField 
                error={!queryCustomer[AddCustomerKeys.Mobile].isValid}
                id="outlined-required"
                label="Mobile"
                value={queryCustomer[AddCustomerKeys.Mobile].value}
                onChange={(e) => {handleChange(e, AddCustomerKeys.Mobile)}}
                helperText={queryCustomer[AddCustomerKeys.Mobile].ErrorMessage}
            />

            {/* City */}
            <InpTextField 
                error={!queryCustomer[AddCustomerKeys.City].isValid}
                id="outlined-required"
                label="City"
                value={queryCustomer[AddCustomerKeys.City].value}
                onChange={(e) => {handleChange(e, AddCustomerKeys.City)}}
                helperText={queryCustomer[AddCustomerKeys.City].ErrorMessage}
            />

            {/* PinCode */}
            <InpTextField 
                error={!queryCustomer[AddCustomerKeys.PinCode].isValid}
                id="outlined-required"
                label="PinCode"
                value={queryCustomer[AddCustomerKeys.PinCode].value}
                onChange={(e) => {handleChange(e, AddCustomerKeys.PinCode)}}
                helperText={queryCustomer[AddCustomerKeys.PinCode].ErrorMessage}
            />

            <br/>
            <SearchButton   onClick={SearchActionEvent} />
      



        </Box>
        

    );

}


export default SearchCustomer;