const express = require('express')

const JobController = require('../controller/job')

const router = express.Router()

router.post('/api/job', JobController.createJob)

router.get('/api/job', JobController.listJob)

router.put('/api/job/:id', JobController.updateJob);

router.delete('/api/job/:id', JobController.deleteJob)


module.exports = router;




