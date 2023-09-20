const ValidationCheck = (value, field, ValidationsArray) => {
    debugger;
    let isValid = true, errorMessage = "";
    ValidationsArray[field].forEach(validation => {

        if (validation.Type == "direct") {
            if (validation.Validation == "Required") {
                if (!value) {
                    isValid = false;
                    errorMessage = validation.ErrorMessage;
                }
            }

        }
        else if (validation.Type == "regex") {
            if (!validation.Validation.test(value)) {
                isValid = false;
                errorMessage = validation.ErrorMessage;
            }

        }

    });
    return { isValid, errorMessage };
}

export default ValidationCheck;