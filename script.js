document.getElementById('calculator-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const distance = parseFloat(document.getElementById('distance').value);
    const mpg = parseFloat(document.getElementById('mpg').value);
    const price = parseFloat(document.getElementById('price').value);

    if (isNaN(distance) || isNaN(mpg) || isNaN(price)) {
        alert("Please enter valid numbers for all fields.");
        return;
    }

    const gallonsNeeded = distance / mpg;
    const totalCost = gallonsNeeded * price;

    document.getElementById('result').textContent = `Total Cost: $${totalCost.toFixed(2)}`;
});
