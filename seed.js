const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Route = require('./models/routeModel');

dotenv.config();

mongoose.connect(process.env.MONGO_GEO)
  .then(async () => {
    console.log('✅ Connected to MongoDB for seeding');

    const data = [
      {
        name: 'Jalan Semarang',
        geojson: {
          type: 'Feature',
          geometry: {
            type: 'LineString',
            coordinates: [
              [107.66175435751235, -6.9225815921085605],
              [107.662731889276, -6.922373197473344],
              [107.66363522561052, -6.921970485001429]
            ]
          },
          properties: {
            id: 1,
            length_km: 1.4,
            type: 'asphalt'
          }
        }
      },
      {
        name: 'Jalan Samarinda',
        geojson: {
          type: 'Feature',
          geometry: {
            type: 'LineString',
            coordinates: [
              [107.66171956908474, -6.92329066855649],
              [107.66259611443103, -6.923288269217702]
            ]
          },
          properties: {
            id: 2,
            length_km: 0.7,
            type: 'paved'
          }
        }
      },
      {
        name: 'Jalan Denpasar',
        geojson: {
          type: 'Feature',
          geometry: {
            type: 'LineString',
            coordinates: [
              [107.66083105878347, -6.923725659302147],
              [107.66156242301344, -6.923768313534604],
              [107.66228852707933, -6.923813268555388]
            ]
          },
          properties: {
            id: 3,
            length_km: 0.9,
            type: 'dirt'
          }
        }
      }
    ];

    await Route.deleteMany();  
    await Route.insertMany(data);  

    console.log('🌱 Seed data berhasil dimasukkan');
    mongoose.connection.close();
  })
  .catch(err => console.error(err));
