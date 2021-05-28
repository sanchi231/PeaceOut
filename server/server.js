const express = require('express');

const app = express();

// Port
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Application running on PORT ${port}`);
})