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
        '0', '.', '=', '+'
    ];

    buttons.forEach(buttonValue => {
        const button = document.createElement('button');
        button.textContent = buttonValue;
        calculatorbody.appendChild(button);
    });

    //Append display & calculator body to container
    container.appendChild(display);
    container.appendChild(calculatorbody);

    //Append container to wrapper
    wrapper.appendChild(container);

    //Append wrapper to body
    document.body.appendChild(wrapper);

});