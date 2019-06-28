$(function () {
    const updateProductsCounters = function () {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;

        let desc = {
            numberProducts: $('#descNumberProducts'),
            totalNumberProducts: $('#descTotalNumberProducts'),
            amount: $('#descAmount')
        };

        let tr = $('table[tablename="tb_products"]').find('tbody').find('tr:gt(0)'),
            map = function(el) {
                let rows = tr.find(el).map(function () {
                        let value = parseInt($(this).val());

                        if (isNaN(value)) {
                            value = 0;
                        }

                        return parseInt(value);
                    }).get();

                if (rows.length === 0) {
                    return 0;
                }

                return rows.reduce(reducer);
            };

        let values = {
            numberProducts: tr.length,
            totalNumberProducts: map('[name^="productQuantity"]'),
            amount: map('[name^= "productAmount"]')
        };

        desc.numberProducts.text(values.numberProducts);
        desc.totalNumberProducts.text(values.totalNumberProducts);
        desc.amount.text(parseFloat(values.amount).toFixed(2));
    };

    $(document).on('ready', updateProductsCounters);

    $(document).on('blur change', '[name^="productQuantity"], [name^="productUnitValue"]', function () {
        let quantity = $(this).parents('tr').find('[name^="productQuantity"]').val().replace(/\D/g, ''),
            unitValue = $(this).parents('tr').find('[name^="productUnitValue"]').val().replace(/\./g, '').replace(/\,/g, '.'),
            total = parseInt(quantity) * parseFloat(unitValue);

        if (isNaN(total)) {
            total = 0;
        }

        total = parseFloat(total.toString()).toFixed(2);

        $(this).parents('tr').find('[name^="productAmount"]').val(total);

        updateProductsCounters();
    });

    $(document).on('click', '#addNewProduct', function () {
        wdkAddChild('tb_products');

        MaskEvent.init();

        let trs = $('table[tablename="tb_products"]').find('tbody').find('tr:gt(0)'),
            tr = trs.last();

        tr.find('[name^="productId"]').val(trs.length);

        updateProductsCounters();
    });

    $(document).on('click', '#deleteAllProducts', function () {
        let rows = $('.deleteProduct:gt(0)');

        if (rows.length === 0) {
            return;
        }

        if (!confirm('Are you sure you want to delete all products?')) {
            return;
        }

        rows.trigger('click');

        updateProductsCounters();
    });

    $(document).on('click', '.deleteProduct', function () {
        fnWdkRemoveChild(this);

        let trs = $('table[tablename="tb_products"]').find('tbody').find('tr:gt(0)');

        for (let i = 0; i < trs.length; i++) {
            let tr = $(trs[i]).find('[name^="productId"]').val(i + 1);
        }

        updateProductsCounters();
    });

    $(document).on('change', '#managerApprove, #financialApprove', function () {
        let approve = $(this).find(':selected').val() === '1';

        $(this).parents('[class^="col-"]').find('textarea').addClass('disabled').prop('readonly', true);

        if (approve) {
            $(this).parents('[class^="col-"]').find('textarea').removeClass('disabled').prop('readonly', false);
        }
    });

    /**
     * How to call a dataset using vcXMLRPC
     * 
     * let dataset = DatasetFactory.getDataset('name', fields, constraints, sort);
     * 
     * dataset.values or dataset.columns
     */
});
