function defineStructure () {

}

function onSync (lastSyncDate) {

}

function createDataset (fields, constraints, sortFields) {
    let dataset = DatasetBuilder.newDataset();

    // Columns
    dataset.addColumn('Sigla');
    dataset.addColumn('Estado');
    dataset.addColumn('Capital');
    dataset.addColumn('Area');

    // Rows
    dataset.addRow(['AM', 'Amazonas', 'Manaus', 1570746]);
    dataset.addRow(['PA', 'Pará', 'Belém', 1247690]);
    dataset.addRow(['MT', 'Mato Grosso', 'Cuiabá', 903358]);
    dataset.addRow(['TO', 'Tocantins', 'Palmas', 277621]);
    dataset.addRow(['PI', 'Piauí', 'Teresina', 251529]);

    return dataset;
}

function onMobileSync (user) {

}
