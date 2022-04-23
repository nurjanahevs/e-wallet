const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
//     const dbPathUri = "mongodb://localhost:27017/";
//     const dbName = "e-wallet";
//     await mongoose.connect(`${dbPathUri}${dbName}`);
//     console.log(`DB Connected`);
//   } catch (error) {
//     console.log(error);
//   }

// };

// module.exports = connectDB;

const mongodbconnection = () => {
  mongoose.connect("mongodb+srv://evasitinurjanah:evasitinurjanah@dbeva.3gs73.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true
  }, (err) => {
      if (err) {
          console.log(err);
      } else {
          console.log('MongoDB Connected');
      }
  });
}

module.exports = mongodbconnection;