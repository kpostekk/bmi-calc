function in_range(x, min, max) {
    return x >= min && x < max;
}

function return_bmi(weight, height) {
    // weight should be in kilograms
    // height should be in meters
    return weight / (height ** 2);
}

class bmi_response {
    constructor(bmi_value) {
        this.body_mass_index = bmi_value;
        if (bmi_value < 18.5) {
            this.text = 'niedowagę';
            this.css_class = 'damn-red';
        } else if (in_range(bmi_value, 18.5, 25)) {
            this.text = 'wagę prawidłową';
            this.css_class = 'text-success';
        } else if (in_range(bmi_value, 25, 30)) {
            this.text = 'nadwagę';
            this.css_class = 'text-warning';
        } else if (bmi_value > 30) {
            this.text = 'otyłość';
            this.css_class = 'damn-red';
        }
    }
