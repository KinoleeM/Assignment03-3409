document.addEventListener('DOMContentLoaded', function () {
    // Add student info dynamically
    const studentInfo = document.getElementById('student-info');
    const studentId = '200553409';
    const studentName = 'Kinolee Malawarage';
    studentInfo.textContent = `Student ID: ${studentId} - Name: ${studentName}`;

    // Form submission handler
    const form = document.getElementById('pizza-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Capture form values
        const size = document.getElementById('size').value;
        const crust = document.getElementById('crust').value;
        const toppings = Array.from(document.querySelectorAll('input[name="toppings"]:checked')).map(topping => topping.value);

        // Create Pizza object
        const pizza = new Pizza(size, crust, toppings);

        // Output pizza description
        const orderDescription = document.getElementById('order-description');
        orderDescription.innerHTML = `
            <h2>Your Pizza</h2>
            <p>Size: ${pizza.size}</p>
            <p>Crust: ${pizza.crust}</p>
            <p>Toppings: ${pizza.toppings.join(', ')}</p>
        `;
    });

    // Pizza class
    class Pizza {
        constructor(size, crust, toppings) {
            this.size = size;
            this.crust = crust;
            this.toppings = toppings;
        }
    }
});
