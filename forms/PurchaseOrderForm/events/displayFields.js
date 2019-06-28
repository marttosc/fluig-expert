function displayFields(form, customHTML) {
    const currentUser = (function () {
        return fluigAPI.getUserService().getCurrent();
    })();

    // Data
    const currentActivity = getValue('WKNumState'),
        processId = getValue('WKNumProces'),
        formId = form.getCardIndex(),
        userName = currentUser.getFullName();

    // Activities
    const   start = 4,
            managerApproval = 5,
            financialApproval = 13;

    let hidden = [];
    
    switch (parseInt(currentActivity))
    {
        case 0:
        case start:
            hidden.push('tab-approvals', 'li-tab-approvals');

            form.setValue('requester', userName);
            break;
        case managerApproval:
            hidden.push('financial-group');
            break;
        case financialApproval:
            hidden.push('manager-group');
            break;
    }

    for (let i = 0; i < hidden.length; i++) {
        form.setVisibleById(hidden[i], false);
    }
}
