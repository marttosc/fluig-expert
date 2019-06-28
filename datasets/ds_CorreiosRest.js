function defineStructure () {

}

function onSync (lastSyncDate) {

}

function createDataset (fields, constraints, sortFields) {
    let dataset = DatasetBuilder.newDataset(),
        clientService = fluigAPI.getAuthorizeClientService();

    dataset.addColumn('Response');

    let data = {
        companyId: getValue('WKCompany') + '',
        serviceCode: 'Correios',
        endpoint: '/' + constraints[0].initialValue + '/json',
        method: 'get'
    };

    let vo = clientService.invoke(JSON.stringify(data));

    if (vo.getHttpStatusResult() != 200 || vo.getResult() === null || vo.getResult().isEmpty()) {
        dataset.addRow(['Fail to load service.']);

        return dataset;
    }

    let result = JSON.parse(vo.getResult());

    dataset.addRow([result.logradouro]);

    return dataset;
}

function onMobileSync (user) {

}
