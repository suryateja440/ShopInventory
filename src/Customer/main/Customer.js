import React, { useState } from 'react';
import './Customer.css';
import SwitchToggle from '../../shared/ui/Switch';
import AddCustomer from '../child/AddCustomer';
import SearchCustomer from '../child/SearchCustomer';
import CustomersList from '../child/CustomersList';
import { customersData } from '../../shared/DummyData/CustomersData';
import { AddCustomerKeys } from '../../StaticObjects/AddCustomerObj';
import ModalDialog from '../../shared/ui/ModalDialog';
import Typography from '@mui/material/Typography';

const Customer = (props) => {

    const [customers, setCustomers] = useState(customersData);
    const [isAddNew, setIsAddNew] = useState(false);

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const { ShopName, Name, Mobile, City, PinCode } = { ...AddCustomerKeys };
    const [editCustomerState, setEditCustomerState] = useState(customersData);
    const onCustomerEdit = (customerObj) => {
        setIsEditModalOpen(true);
        setEditCustomerState(customerObj);
    }
    const onCancelEdit = () => {
        setIsEditModalOpen(false);
    };

    const handleChange = (event) => {
        setIsAddNew(event.target.checked);
    }

    const onCustomerAdd = (saveCustomer) => {
        setCustomers((prevCustomers) =>
            ([...prevCustomers, saveCustomer]));
    }

    const onCustomerSearch = (queryCustomer) => {

        const qShopName = queryCustomer[ShopName];
        const qName = queryCustomer[Name];
        const qMobile = queryCustomer[Mobile];
        const qCity = queryCustomer[City];
        const qPinCode = queryCustomer[PinCode];

        let prevCustomers = [...customers];
        prevCustomers = prevCustomers.filter((prevCust) => {

            console.log("prevCust: ", prevCust);
            let isShopIncludes = ((qShopName && prevCust[ShopName].includes(qShopName)) || qShopName == "");
            let isNameIncludes = ((qName && prevCust[Name].includes(qName)) || qName == "");

            let isMobileIncludes = ((qMobile && prevCust[Mobile].includes(qMobile)) || qMobile == "");
            let isCityIncludes = ((qCity && prevCust[City].includes(qCity)) || qCity == "");
            let isPinCodeIncludes = ((qPinCode && prevCust[PinCode].includes(qPinCode)) || qPinCode == "");
            return (isShopIncludes &&
                isNameIncludes &&
                isMobileIncludes &&
                isCityIncludes &&
                isPinCodeIncludes) == true;
        });

        setCustomers(prevCustomers);
    }

    const onCustomerEditSubmit = (editCustomer) => {


        let prevCustomers = [...customers];

        const indexToUpdate = prevCustomers.findIndex(cust => cust.CustomerID === editCustomer["CustomerID"]);
        prevCustomers[indexToUpdate] = editCustomer;

        setCustomers(prevCustomers);
    }

    return (

        <React.Fragment>
            <SwitchToggle checked={isAddNew} togglelabel="Add New Customer"
                onChange={(e) => { handleChange(e) }} />
            {isAddNew && <AddCustomer key="Add" onCustomerAdd={onCustomerAdd} />}
            {!isAddNew && <SearchCustomer onSearchAction={onCustomerSearch} />}
            <CustomersList customers={customers} onCustomerEdit={onCustomerEdit} />

            {
                isEditModalOpen &&
                <ModalDialog open={isEditModalOpen} handleClose={onCancelEdit} >
                    <AddCustomer key="Edit"
                        onCustomerAdd={onCustomerAdd}
                        onCustomerEditSubmit={onCustomerEditSubmit}
                        isEdit={isEditModalOpen}
                        editCustomerObj={editCustomerState}

                    />
                </ModalDialog>
            }



        </React.Fragment>



    );

}
export default Customer;