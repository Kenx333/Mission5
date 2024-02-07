// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {
    $('#calculate').click(function () {
        var hours = parseFloat($('#hours').val());
        var rate = parseFloat($('#rate').val().substring(1)); // remove '$' and parse as float
        if (!isNaN(hours) && hours >= 0) {
            var total = hours * rate;
            $('#total').val('$' + total.toFixed(2)); // format total with two decimal places
        } else {
            alert('Please enter a valid number of hours.');
        }
    });
});
