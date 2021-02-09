const mongoose = require('mongoose');

// express dependency
const express = require('express');
 //handle bars dependendency
// calls express 
 const app = express();

 const PORT = process.env.PORT || 3001;

app.use(express.static("public"));
// For: data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/deep-thoughts',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );



//port listener
app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
});

