import express from "express"
const app = express();
import dotenv from "dotenv";
dotenv.config();
app.use(express.json());
app.post('/api/translate', (req, res) => {
    const { inputText, selectedLanguage } = req.body

    console.log(inputText)
    console.log(selectedLanguage)
//   res.json(req.body);
});

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`)
})

