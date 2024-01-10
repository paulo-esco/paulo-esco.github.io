import express from "express";

const PORT = 1024;

const app = express();

app.get('/', (req, res) =>
{
    res.status(200).json('fd2637ec');
});

app.listen(PORT, () => console.log("SERVER STARTED AT PORT " + PORT));
