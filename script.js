//DOMS
document.addEventListener('DOMContentLoaded', function() {
    
    //Create wrapper
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    //Create calculator-container
    const container = document.createElement('div');
    container.setAttribute('id', 'container');

    const calculatorbody = document.createElement('div');
    calculatorbody.setAttribute('id', 'calcbody');

    //Create calculator display
    const display = document.createElement('div');
    display.setAttribute('id', 'display');
    display.textContent = '0';

    //Create calculator buttons
    const buttons = [
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        '0', '.', '=', '+',
        'C'
    ];

    let expression = '';

    buttons.forEach(buttonValue => {
        const button = document.createElement('button');
        button.textContent = buttonValue;
        button.addEventListener('click', function() {
            if (buttonValue === '=') {
                display.textContent = evaluateExpression(expression);
                expression = '';
            } else if (buttonValue === 'C') {
                display.textContent = '0';
                expression = '';
            } else {
                if (display.textContent === '0') {
                    display.textContent = buttonValue;
                } else {
                    display.textContent += buttonValue;
                }
                expression += buttonValue;
            }
        });
        calculatorbody.appendChild(button);
    });

    function evaluateExpression(expression) {
        try {
            const result = calculate(expression);
            return result;
        } catch (error) {
            return 'Error'; // Handle error gracefully
        }
    }

    // Function to perform the calculation
    function calculate(expression) {
        const operators = ['+', '-', '*', '/'];
        const values = expression.split(/(\+|\-|\*|\/)/g);
        let result = parseFloat(values[0]);

        for (let i = 1; i < values.length; i += 2) {
            const operator = values[i];
            const nextValue = parseFloat(values[i + 1]);

            if (isNaN(nextValue)) {
                throw 'Invalid expression';
            }

            if (operator === '+') {
                result += nextValue;
            } else if (operator === '-') {
                result -= nextValue;
            } else if (operator === '*') {
                result *= nextValue;
            } else if (operator === '/') {
                if (nextValue === 0) {
                    throw 'Division by zero';
                }
                result /= nextValue;
            }
        }

        return result;
    }


    //Append display & calculator body to container
    container.appendChild(display);
    container.appendChild(calculatorbody);

    //Append container to wrapper
    wrapper.appendChild(container);

    //Append wrapper to body
    document.body.appendChild(wrapper);



    //Footer
    const footerContainer = document.createElement('div');
    footerContainer.classList.add('footer-container');
    const footerText = document.createElement('p');
    footerText.textContent = 'Developed by Marcos Neves | Copyright © 2024';
    footerContainer.appendChild(footerText);

    document.body.appendChild(footerContainer);

});