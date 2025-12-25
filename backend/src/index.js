<<<<<<< HEAD
const express = require('express');
=======
﻿const express = require('express');
>>>>>>> 65c12ca765f64ad13ca825d631ed40eb7c6066e5
const aiRoutes = require('./routes/ai');
const app = express();

app.use(express.json());

// Link the AI Sandbox routes
app.use('/api/ai', aiRoutes);

app.get('/', (req, res) => res.send('PromptCraft Pro API Active'));

const PORT = 4000;
app.listen(PORT, () => console.log('Server running on port ' + PORT));
