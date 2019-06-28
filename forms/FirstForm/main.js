$(function() {
    $(document).on('click', '.update-description-field', function () {
        let tr = $(this).parents('tr'),
            id = tr.find('td:eq(1)').find('input[type="text"]').attr('id').split('___')[1];

        tr.find(' td:eq(0)').find('input[type="number"]').val(id);
    });

    $(document).on('blur', '#zipcode', function () {
        let zip = $(this).val().replace(/\D/g, ''),
            url = 'http://viacep.com.br/ws/' + zip + '/json/';

            if (zip.trim().length !== 8) {
                $(this).val('');
    
                return;
            }

        $.getJSON(url, function (data) {
            $('#address').val(data.logradouro + ' - ' + data.bairro + ' - ' + data.localidade + '/' + data.uf);
        });
    });

    $(document).on('blur', '#cnpj', function () {
        let cnpj = $(this).val().replace(/\D/g, ''),
            url = 'https://www.receitaws.com.br/v1/cnpj/' + cnpj + '?callback=?';

        if (cnpj.trim().length !== 14) {
            $(this).val('');

            return;
        }

        $.getJSON(url, function (data) {
            if (data.status === 'OK') {
                $('#enterpriseName').val(data.fantasia);
            }
        })
        .always(function () {
            $('#enterpriseName').parents('.form-group').removeClass('has-error');
        })
        .fail(function () {
            $('#enterpriseName').parents('.form-group').addClass('has-error');
            $('#enterpriseName').focus();
        });
    });
});

function setSelectedZoomItem(selectedItem) {
    switch (selectedItem.inputId) {
        case 'colleagueZoom':
            let user = selectedItem['colleagueId'];

            $('#colleagueId').val(user);
            break;
        default:
            break;
    }
}