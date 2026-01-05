function reduceToNumerology(initialSum) {
    let sum = initialSum;
    let steps = [];

    // Logic: Reduce until single digit or 11, 22, 33
    if (sum === 11 || sum === 22 || sum === 33) {
        steps.push(`${sum} is a Master Number. No further reduction.`);
        return { number: sum, steps };
    }

    while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
        let tempSum = 0;
        const sumString = sum.toString();
        let stepFormula = [];
        for (let char of sumString) {
            tempSum += parseInt(char, 10);
            stepFormula.push(char);
        }
        steps.push(`Reduce ${sum}: ${stepFormula.join(' + ')} = ${tempSum}`);
        sum = tempSum;
    }
    return { number: sum, steps };
}

function calculateDayNumber(dobString) {
    // dobString: YYYY-MM-DD
    const dateParts = dobString.split('-');
    if (dateParts.length !== 3) throw new Error("Invalid Date");
    const dayString = dateParts[2];

    let sum = parseInt(dayString, 10);
    const { number, steps } = reduceToNumerology(sum);

    // Prepend extraction step
    steps.unshift(`Extracted Day: ${dayString}`);

    return { number, steps };
}

function calculateLifePathNumber(dobString) {
    // dobString: YYYY-MM-DD
    const digits = dobString.replace(/-/g, '');

    let sum = 0;
    let initialFormula = [];
    for (let char of digits) {
        sum += parseInt(char, 10);
        initialFormula.push(char);
    }

    const { number, steps } = reduceToNumerology(sum);

    // Prepend initial sum step
    steps.unshift(`Full DOB Sum: ${initialFormula.join('+')} = ${sum}`);

    return { number, steps };
}

module.exports = {
    calculateDayNumber,
    calculateLifePathNumber
};
