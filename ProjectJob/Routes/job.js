const express = require('express')

const router = express.Router();

const jobController = require('../Controller/job')

router.post('/api/job', jobController.createJob);

router.get('/api/job', jobController.listJob);

router.put('/api/job/:jobId', jobController.updateJob);

router.delete('/api/job/:jobId', jobController.deleteJob);

module.exports = router;


