const validateRules = {
    form1: {
        name: [
            {
                rule: (value) => !!value,
                message: '姓名不能为空'
            }
        ]
    }
};
export default validateRules;