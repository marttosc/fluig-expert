function validateForm(form) {
    // Data
    const currentActivity = getValue('WKNumState'),
        processId = getValue('WKNumProces'),
        formId = form.getCardIndex();

    // Activities
    const   start = 4,
            managerApproval = 5,
            financialApproval = 13;

    let fields = [];

    switch (parseInt(currentActivity))
    {
        case 0:
        case start:
            fields.push({
                fieldName: 'orderDate',
                rules: [
                        {
                            rule: '$field === null || $field.trim() === ""',
                            exception: 'The field $fieldName can not be empty or null.'
                        }
                ]
            });
            break;
        case managerApproval:
            break;
        case financialApproval:
            break;
    }

    for (let i = 0; i < fields.length; i++) {
        let field = fields[i].fieldName,
            value = form.getValue(field),
            rules = fields[i].rules;

        for (let j = 0; j < rules; j++) {
            let condition = rules[j].rule.replace(/\$fieldName/g, field).replace(/\$field/g, '"' + value + '"'),
                exception = rules[j].exception.replace(/\$fieldName/g, field).replace(/\$field/g, '"' + value + '"');

            if (true === eval(condition)) {
                throw exception;
            }
        }
    }
}
