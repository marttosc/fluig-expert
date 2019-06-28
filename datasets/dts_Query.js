function defineStructure () {

}

function onSync (lastSyncDate) {

}

function createDataset (fields, constraints, sortFields) {
    /*fields = ['departmentId', 'departmentName'];
    constraints = [
        DatasetFactory.createConstraint('departmentId', '2', '2', ConstraintType.MUST_NOT)
    ];
    sortFields = ['departmentName'];

    return DatasetFactory.getDataset('dts_DepartmentForm', fields, constraints, sortFields);*/

    let dataset = DatasetBuilder.newDataset();

    let c1 = DatasetFactory.createConstraint('Resposta', 'Maria', 'Maria', ConstraintType.MUST),
        c2 = DatasetFactory.createConstraint('Resposta', 'Novo Pedido Maria', 'Novo Pedido Maria', ConstraintType.MUST),
        c3 = DatasetFactory.createConstraint('Resposta', 'ygor.lima@totvs.com.br', 'ygor.lima@totvs.com.br', ConstraintType.MUST);

     let dataset_email = DatasetFactory.getDataset('dts_SendMail',null, new Array(c1,c2,c3), null);

     
     return dataset_email
}

function onMobileSync (user) {

}
