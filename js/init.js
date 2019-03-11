function update_calc() {
    height = parseFloat($('#height').val());
    weight = parseFloat($('#weight').val());
    let bmi_value_result = new bmi_response(return_bmi(weight, height));
    $('#result').text(
        bmi_value_result.body_mass_index.toFixed(2).toString()
    ).removeClass().addClass(bmi_value_result.css_class);
    $('#result2').text(
        bmi_value_result.text
    ).removeClass().addClass(bmi_value_result.css_class)
}

$(document).on('change', '#weight',
    function () {
        update_calc()
    }
).on('change', '#height',
    function () {
        update_calc()
    }
).ready(
    function () {
        update_calc()
    }
);