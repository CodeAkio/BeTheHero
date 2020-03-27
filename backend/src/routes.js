const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const validateSessionStore = require('./validators/SessionStore');
const validateOngStore = require('./validators/OngStore');
const validateProfileIndex = require('./validators/ProfileIndex');
const validateIncidentIndex = require('./validators/IncidentIndex');
const validateIncidentStore = require('./validators/IncidentStore');
const validateIncidentDelete = require('./validators/IncidentDelete');

const routes = express.Router();

routes.post('/sessions', validateSessionStore, SessionController.store);

routes.get('/ongs', OngController.index);
routes.post('/ongs', validateOngStore, OngController.store);

routes.get('/profile', validateProfileIndex, ProfileController.index);

routes.get('/incidents', validateIncidentIndex, IncidentController.index);
routes.post('/incidents', validateIncidentStore, IncidentController.store);
routes.delete('/incidents/:id', validateIncidentDelete, IncidentController.delete);

module.exports = routes;
