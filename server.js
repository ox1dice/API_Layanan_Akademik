const express = require('express');
const cors = require('cors');
const sequelize = require('./database');
const compression = require('compression');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
require('dotenv').config();

const app = express();

// Database
sequelize.authenticate().then(() => {
    console.log('Connected to the database');  
}).catch(err => {
    console.log('Unable to connect to databases:', err);
})

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(cors());
app.use(compression());  // reduce file size before sending to web browser to ereduce latency

// Routes
const dosenRoutes = require('./routes/DosenRoutes');
app.use(dosenRoutes);
// app.use(parkirRoutes);
// app.use(reservasiRoutes);

// Set up swagger ui
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Express-rest API Swagger Documentation",
      version: "0.1.0",
      description: "The swagger doc for example api endpoints in this express-rest template",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Charlie",
        url: "a",
      },
    },
  },
  apis: [
    './models/DosemModel.js',
    './models/FasilitasModel.js',
    './models/MahasiswaModel.js',
    './models/PeminjamanFasilitasModel.js',
    './models/PengajuanSkripsiModel.js',
    './models/SkripsiModel.js',
    './routes/DosenRoutes.js',
    './routes/FasilitasRoutes.js',
    './routes/MahasiswaRoutes.js',
    './routes/PeminjamanFasilitasRoutes.js',
    './routes/PengajuanSkripsiRoutes.js',
    './routes/SkripsiRoutes.js',
        
        ],
};
const specs = swaggerJsDoc(options);
const swaggerRouter = express.Router();
swaggerRouter.use('/api-docs', swaggerUi.serve);
swaggerRouter.get('/api-docs', swaggerUi.setup(specs));
app.use(swaggerRouter);

// Handle Errors
app.use((err, req, res, next) => {
    console.error(err.stack);
})
app.use((req, res, next) => {
    res.status(404).send('The page cannot be found!');
})

// Export app for testing
module.exports = app;

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('###############################');
    console.log(`The server starts at ${PORT}`);
    console.log('###############################');
});
