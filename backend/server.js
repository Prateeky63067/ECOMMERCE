  const app=require('./app');
  const dotenv=require('dotenv')
  const cloudinary = require("cloudinary");
  const connectDatabse=require('./config/database')

  // handling unCaught Exception
  process.on('uncaughtException',(err)=>{
    console.log(`Error ${err.message}`)
    console.log(`Shuting down the server due to unCaught Exception`)
    process.exit(1);
  })

//   config
dotenv.config({path:'backend/config/config.env'});

// connect to database
connectDatabse();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

  const server=app.listen(process.env.PORT,()=>{
    console.log(`server is working on ${process.env.PORT}`)
  })


  // unhandled promise rejection

  process.on('unhandledRejection',err=>{
    console.log(`Error ${err.message}`)
    console.log(`Shuting down the server due to unhandled server Rejection`)
    server.close(()=>{
     process.exit(1);
    })
  })