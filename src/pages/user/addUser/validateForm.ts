import validateRules from "./validateRules";

const validateForm = (forms) => {
    console.log(forms);
    for (let key1 in forms) {
        if (!forms.hasOwnProperty(key1)) return;
        for (let key2 in validateRules[key1]) {
            if (!validateRules[key1].hasOwnProperty(key2)) return;
            console.log(key2);
        }
    }
    return null;
};

export default validateForm;