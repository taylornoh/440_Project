const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const useRouter = require("./routes/api-endpoints");
app.use("/", useRouter);
// get driver connection

app.listen(5009, () => {
  console.log(`Server is running on port`);
});
