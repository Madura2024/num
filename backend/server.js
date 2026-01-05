const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { calculateDayNumber, calculateLifePathNumber } = require('./numerologyUtils');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/calculate-numerology', (req, res) => {
    const { dob } = req.body;
    if (!dob) return res.status(400).json({ error: 'Date of Birth is required' });

    try {
        const dayResult = calculateDayNumber(dob);
        const lpResult = calculateLifePathNumber(dob);

        // COMPARISON LOGIC
        // If Day Number == Life Path Number -> Numerology
        const isMatch = dayResult.number === lpResult.number;

        const message = isMatch
            ? "Numerology"
            : "Not Numerology";

        res.json({
            dayNumber: dayResult.number,
            daySteps: dayResult.steps,
            lpNumber: lpResult.number,
            lpSteps: lpResult.steps,
            isMatch: isMatch,
            message: message
        });

    } catch (error) {
        console.error("Calculation Error:", error);
        res.status(500).json({ error: 'Failed to calculate' });
    }
});

app.get('/', (req, res) => { res.send('DOB Numerology Comparison Backend Running'); });

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});