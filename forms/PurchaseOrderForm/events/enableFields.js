function enableFields(form) {
    // Data
    const currentActivity = getValue('WKNumState');

    // Activities
    const   start = 4,
            managerApproval = 5,
            financialApproval = 13;

    let disabled = [];

    switch (parseInt(currentActivity))
    {
        case 0:
        case start:
            disabled.push('requester');
            break;
        case managerApproval:
            break;
        case financialApproval:
            break;
    }

    for (let i = 0; i < disabled.length; i++) {
        form.setEnabled(disabled[i], false);
    }
}
