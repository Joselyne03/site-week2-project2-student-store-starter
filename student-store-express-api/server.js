//imports are here
const app = require("./app")
var cors = require('cors')

app.use(cors())
//the express appplication
const port = process.env.PORT || 3001

//app.use("/store", app);
app.listen(port, () => {
  console.log(`🚀 Server listening on port ` + port)
});
