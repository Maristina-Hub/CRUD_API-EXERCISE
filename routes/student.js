const express = require('express');
const router = express.Router()

const{ getStudents, 
    getStudentById, 
    createStudents,  
    insertStudents, 
    deleteStudents } = require('../src/queries/index')

router.get('/', getStudents)

router.get('/student/:id', getStudentById)

router.post('/student/add', createStudents)

router.put('/student/:id', insertStudents)

router.delete('/student/:id', deleteStudents)



module.exports = router 