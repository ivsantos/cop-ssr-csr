const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
