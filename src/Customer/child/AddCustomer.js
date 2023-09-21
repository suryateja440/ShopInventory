import React, { useState , useEffect } from 'react';
import { Box } from '@mui/material';
import InpTextField from '../../shared/InpTextField';
import {AddCustomerKeys ,AddCustomerValidations} from '../../StaticObjects/AddCustomerObj';
import ValidationCheck from '../../shared/CommonBehaviour/ValidationCheck';
import SaveButton from '../../shared/ui/SaveButton';

const AddCustomer = (props) => {
    
    const {ShopName ,Name ,Mobile ,City,PinCode } = {...AddCustomerKeys};
    let initialCustomerValue = {
         [AddCustomerKeys.ShopName]: { value: "", isValid: true ,ErrorMessage : ""  },
         [AddCustomerKeys.Name]: { value: "", isValid: true ,ErrorMessage : "" },
         [AddCustomerKeys.Mobile]: { value: "", isValid: true ,ErrorMessage : "" },
         [AddCustomerKeys.City]: { value: "", isValid: true ,ErrorMessage : "" },
         [AddCustomerKeys.PinCode]: { value: "", isValid: true ,ErrorMessage : "" }
    }
    if(props.isEdit)
    {    
        
         initialCustomerValue[ShopName].value = props.editCustomerObj[ShopName];
         initialCustomerValue[Name].value = props.editCustomerObj[Name];
         initialCustomerValue[Mobile].value = props.editCustomerObj[Mobile];
         initialCustomerValue[City].value = props.editCustomerObj[City];
         initialCustomerValue[PinCode].value = props.editCustomerObj[PinCode];
    }

    let initalErrorInfo ={isLoading : false , isValidForm: true }
    const [addCustomer, setAddCustomer] = React.useState(initialCustomerValue);
    const [errorInfo, setErrorInfo] = React.useState(initalErrorInfo);
    

    useEffect( () => {
        //alert("test");
        const isValidForm =  Object.keys(addCustomer).reduce(function (previous, key) {
            return previous && addCustomer[key].isValid;
        }, true);

        setErrorInfo(prevErrorState => ({
            ...prevErrorState,
            isValidForm: isValidForm
        }));
    } , [addCustomer]);


    
    const handleChange = (event , field) => {

        event.preventDefault();
        
        const validationRes = ValidationCheck(event.target.value , field , AddCustomerValidations);
        setAddCustomer((prevState) => (
            {
            ...prevState,
            [field]: { ...prevState[field], 
                        value: event.target.value,
                        isValid: validationRes.isValid,
                        ErrorMessage: validationRes.errorMessage
                     }
          }
        ));

        

    
        
    };

    const SaveAction = () =>  {
        setErrorInfo(prevErrorState => ({
            ...prevErrorState,
            isLoading: true
        }));
        let saveCustomer = {
            [AddCustomerKeys.ShopName]: addCustomer[AddCustomerKeys.ShopName].value,
            [AddCustomerKeys.Name]: addCustomer[AddCustomerKeys.Name].value,
            [AddCustomerKeys.Mobile]: addCustomer[AddCustomerKeys.Mobile].value,
            [AddCustomerKeys.City]: addCustomer[AddCustomerKeys.City].value,
            [AddCustomerKeys.PinCode]: addCustomer[AddCustomerKeys.PinCode].value
       }

        setTimeout( () => {
            setErrorInfo(prevErrorState => ({
                ...prevErrorState,
                isLoading: false
            }));
        } , 500)
        
        props.onCustomerAdd(saveCustomer);
        
    };

    
    const EditAction = () =>  {
        setErrorInfo(prevErrorState => ({
            ...prevErrorState,
            isLoading: true
        }));
        let editCustomer = {
            CustomerID:props.editCustomerObj["CustomerID"],
            [AddCustomerKeys.ShopName]: addCustomer[AddCustomerKeys.ShopName].value,
            [AddCustomerKeys.Name]: addCustomer[AddCustomerKeys.Name].value,
            [AddCustomerKeys.Mobile]: addCustomer[AddCustomerKeys.Mobile].value,
            [AddCustomerKeys.City]: addCustomer[AddCustomerKeys.City].value,
            [AddCustomerKeys.PinCode]: addCustomer[AddCustomerKeys.PinCode].value
       }

        setTimeout( () => {
            setErrorInfo(prevErrorState => ({
                ...prevErrorState,
                isLoading: false
            }));
        } , 500)
        
        props.onCustomerEditSubmit(editCustomer);
        
    };


    return (

        <Box sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
            '& > button': { m: 1 }
        }}>
            
            {/* Shop Name */}
            <InpTextField required={true}
                error={!addCustomer[AddCustomerKeys.ShopName].isValid}
                id="outlined-required"
                label="Shop Name"
                value={addCustomer[AddCustomerKeys.ShopName].value}
                onChange={e => { handleChange(e , AddCustomerKeys.ShopName) }}
                helperText={addCustomer[AddCustomerKeys.ShopName].ErrorMessage}
            />

            {/* Name */}
            <InpTextField required={true}
                error={!addCustomer[AddCustomerKeys.Name].isValid}
                id="outlined-required"
                label="Name"
                value={addCustomer[AddCustomerKeys.Name].value}
                onChange={e => { handleChange(e , AddCustomerKeys.Name) }}
                helperText={addCustomer[AddCustomerKeys.Name].ErrorMessage}
            />

            {/* Mobile */}
            <InpTextField required={true}
                error={!addCustomer[AddCustomerKeys.Mobile].isValid}
                id="outlined-required"
                label="Mobile"
                value={addCustomer[AddCustomerKeys.Mobile].value}
                onChange={(e) => {handleChange(e, AddCustomerKeys.Mobile)}}
                helperText={addCustomer[AddCustomerKeys.Mobile].ErrorMessage}
            />

            {/* City */}
            <InpTextField required={true}
                error={!addCustomer[AddCustomerKeys.City].isValid}
                id="outlined-required"
                label="City"
                value={addCustomer[AddCustomerKeys.City].value}
                onChange={(e) => {handleChange(e, AddCustomerKeys.City)}}
                helperText={addCustomer[AddCustomerKeys.City].ErrorMessage}
            />

            {/* PinCode */}
            <InpTextField required={true}
                error={!addCustomer[AddCustomerKeys.PinCode].isValid}
                id="outlined-required"
                label="PinCode"
                value={addCustomer[AddCustomerKeys.PinCode].value}
                onChange={(e) => {handleChange(e, AddCustomerKeys.PinCode)}}
                helperText={addCustomer[AddCustomerKeys.PinCode].ErrorMessage}
            />

            <br/>
            {
                !props.isEdit &&
                <SaveButton 
                  loading={errorInfo.isLoading}
                  disabled={!errorInfo.isValidForm}
                  onClick={SaveAction}
                />
            }
            {
                props.isEdit &&
                <SaveButton 
                  loading={errorInfo.isLoading}
                  disabled={!errorInfo.isValidForm}
                  onClick={EditAction}
                />
            }


        </Box>
    );

}
AddCustomer.defaultProps = {
    isEdit: false
  }
export default AddCustomer;

