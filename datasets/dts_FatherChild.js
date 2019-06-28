function defineStructure () {

}

function onSync (lastSyncDate) {

}

function createDataset (fields, constraints, sortFields) {
    let dataset = DatasetBuilder.newDataset();

    // Columns
    dataset.addColumn('FormId');
    dataset.addColumn('Id');
    dataset.addColumn('Product');
    dataset.addColumn('Quantity');
    dataset.addColumn('Unity');
    dataset.addColumn('Amount');

    // Constraints
    let constraintActive = DatasetFactory.createConstraint('metadata#active', true, true, ConstraintType.MUST),
        constraints = [constraintActive];

    let dsPrincipal = DatasetFactory.getDataset('dts_PurchaseOrderForm', null, constraints, null);

    for (let i = 0; i < dsPrincipal.rowsCount; i++) {
        let documentId = dsPrincipal.getValue(i, 'metadata#id'),
            documentVersion = dsPrincipal.getValue(i, 'metadata#version');

        let childConstraint = [],
            cstTable = DatasetFactory.createConstraint('tablename', 'tb_products', 'tb_products', ConstraintType.MUST),
            cstId = DatasetFactory.createConstraint('metadata#id', documentId, documentId, ConstraintType.MUST),
            cstVersion = DatasetFactory.createConstraint('metadata#version', documentVersion, documentVersion, ConstraintType.MUST);

        childConstraint.push(cstTable, cstId, cstVersion);

        let dsChild = DatasetFactory.getDataset('dts_PurchaseOrderForm', null, childConstraint, null);

        for (let j = 0; j < dsChild.rowsCount; j++) {
            dataset.addRow([
                documentId,
                dsChild.getValue(j, 'productId'),
                dsChild.getValue(j, 'productDescription'),
                dsChild.getValue(j, 'productQuantity'),
                dsChild.getValue(j, 'productUnitValue'),
                dsChild.getValue(j, 'productAmount')
            ]);
        }
    }

    return dataset;
}

function onMobileSync (user) {

}
