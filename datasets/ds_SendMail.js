function defineStructure () {

}

function onSync (lastSyncDate) {

}

function createDataset (fields, constraints, sortFields) {
    let dataset = DatasetBuilder.newDataset();

    dataset.addColumn('Response');

    try {
        let sender = 'root',
            params = new java.util.HashMap();

        params.put('name', constraints[0].initialValue);
        params.put('subject', constraints[1].initialValue);

        let recipients = new java.util.ArrayList();

        recipients.add(constraints[2].initialValue);

        notifier.notify(sender, 'NewPurchaseOrder', params, recipients, 'text/html');

        dataset.addRow(['Send successfull']);
    } catch (e) {
        dataset.addRow(['Fail to send mail']);
    }

    return dataset;
}

function onMobileSync (user) {

}
