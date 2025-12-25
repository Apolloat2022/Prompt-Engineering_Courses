const express = require('express');
const router = express.Router();

// This is the "Scoring Agent" Logic
router.post('/evaluate', (req, res) => {
    const { prompt } = req.body;
    
    // Heuristic scoring for IT Managers
    let score = 0;
    let tips = [];

    if (prompt.toLowerCase().includes('context')) { score += 30; } 
    else { tips.push('Add "Context:" to define the IT environment.'); }

    if (prompt.toLowerCase().includes('format')) { score += 30; }
    else { tips.push('Add "Format:" to specify if you want JSON, a Table, or a List.'); }

    if (prompt.length > 100) { score += 40; }
    else { tips.push('Your prompt is a bit short. Add specific constraints.'); }

    res.json({ 
        strengthScore: score, 
        feedback: tips,
        status: 'Analysis Complete' 
    });
});

module.exports = router;
