import React, { useState } from 'react';
import CardList from '../../shared/ui/CardChip';






const CustomersList = (props) => {

    
    
    const onCustomerEditClicked = (customerObj) => {
        props.onCustomerEdit(customerObj);
    }
    


    return (

        <React.Fragment>
            {
                props.customers.map((customer) => (
                    <CardList key={customer.CustomerID}
                        sideCardOverFlow={customer.City}
                        headingMain={customer.ShopName}
                        headingSec={customer.Name}
                        roundLink={customer.Mobile}
                        itemdata={customer}
                        onEditClicked={ onCustomerEditClicked}
                    />
                ))
            }
            
        </React.Fragment>
    );

}

export default CustomersList;