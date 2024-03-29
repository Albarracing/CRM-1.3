import express from 'express'
import cors from 'cors'
import session from 'express-session'
import SequelizeStore from 'connect-session-sequelize'
import db from './database/db.js'
import auth from './routes/routeslogin/authRoutes.js'
import usersroutes from './routes/routeslogin/LoginRoutes.js'
import telefonoRoute from './routes/reportes/telefonoRoute.js'
import telefonorouter from './routes/TelefonoRoutes.js'
// import combustiblerouter from './routes/CombustibleRoute.js'
import informerouter from './routes/InformesRoutes.js'
import configuracionrouter from './routes/ConfiguracionRoutes.js'
// import transporteRoutes from './routes/routes.js'
// import frescosrouter from './routes/FrescosRoutes.js'
// import secosrouter from './routes/SecosRoutes.js'
//import logisticarouter from './routes/LogisticaRoute.js'
//import Users from './routes/Users'

const app = express();

// (async()=>{
//     await db.sync();
// })();
const sessionStore = SequelizeStore(session.Store);
const store = new sessionStore({
    db: db
})

app.use(session({
    secret: 'vfhjfvghcfghfvjhgjhgjhgjhgjhdftsd',
    resave: false,
    saveUninitialized: true,
    cookie:{
        secure:'auto'
    }
}));

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));



app.use(express.json());






//app.use('/transporte', transporteRoutes)
//app.use('/frescos',  frescosrouter )
//app.use('/secos', secosrouter )
//app.use('/logistica', logisticarouter)
app.use('/telefono', telefonorouter)
// app.use('/combustible', combustiblerouter)
app.use('/informes', informerouter)
app.use('/configuracion', configuracionrouter)
app.use(usersroutes)
app.use(auth)
app.use(telefonoRoute)
try{
    await db.authenticate()
    console.log('conexion exitosa a la db')
} catch (error){
    console.log(`el error de conexion es:${error}`)
}
// app.get('/',(req, res) =>{
//     res.send('hola mundo')
// })

//store.sync()

app.listen(9000, ()=>{
    console.log('corriendo en http://localhost:9000/')
})