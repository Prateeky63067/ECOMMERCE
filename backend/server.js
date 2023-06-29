  const app=require('./app');
  const dotenv=require('dotenv')
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