const AddCustomerStaticKeys = {
    "ShopName": "ShopName",
    "Name": "Name",
    "Mobile": "Mobile",
    "City": "City",
    "PinCode": "PinCode"
}



const AddCustomerValidationsObj = {
    [AddCustomerStaticKeys.ShopName]: [{
        "Name": "RequiredValidation",
        "Type": "direct",
        "Validation": "Required",
        "ErrorMessage": "Please enter a value."
    },
    {
        "Name": "allowOnlyAlphabetsAndNumbers",
        "Type": "regex",
        "Validation": new RegExp("^[a-zA-Z0-9.@_ ]*$"),
        "ErrorMessage": "Please type only alphabets, numbers"
    }
    ],
    [AddCustomerStaticKeys.Name]: [{
        "Name": "RequiredValidation",
        "Type": "direct",
        "Validation": "Required",
        "ErrorMessage": "Please enter a value."
    },
    {
        "Name": "allowOnlyAlphabetsAndNumbers",
        "Type": "regex",
        "Validation": new RegExp("^[a-zA-Z0-9.@_ ]*$"),
        "ErrorMessage": "Please type only alphabets, numbers"
    }
    ],
    [AddCustomerStaticKeys.Mobile]: [{
        "Name": "RequiredValidation",
        "Type": "direct",
        "Validation": "Required",
        "ErrorMessage": "Please enter a value."
    },
    {
        "Name": "allowOnlyNumbers",
        "Type": "regex",
        "Validation": new RegExp("^[0-9]{10}$"),
        "ErrorMessage": "Mobile Number Should contaon 10 digits"
    }
    ],
    [AddCustomerStaticKeys.City]: [{
        "Name": "RequiredValidation",
        "Type": "direct",
        "Validation": "Required",
        "ErrorMessage": "Please enter a value."
    },
    {
        "Name": "allowOnlyAlphabetsAndNumbers",
        "Type": "regex",
        "Validation": new RegExp("^[a-zA-Z0-9.@_ ]*$"),
        "ErrorMessage": "Please type only alphabets, numbers"
    }
    ],
    [AddCustomerStaticKeys.PinCode]: [{
        "Name": "RequiredValidation",
        "Type": "direct",
        "Validation": "Required",
        "ErrorMessage": "Please enter a value."
    },
    {
        "Name": "allowOnlyNumbers",
        "Type": "regex",
        "Validation": new RegExp("^[0-9]{6}$"),
        "ErrorMessage": "Please type only alphabets, numbers"
    }
    ]


};

export const AddCustomerKeys = AddCustomerStaticKeys;
export const AddCustomerValidations = AddCustomerValidationsObj;
