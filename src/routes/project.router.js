import express from 'express'
import issuesRoutes from './issue.router.js'

const projectRouter = express.Router()

projectRouter.post('/create', (req, res) => {
	// TODO
})

projectRouter.get('/:id', (req, res) => {
	// TODO
})

projectRouter.post('/issue', issuesRoutes)
// router.get('/issue/search/:id', projectController.search);

export default projectRouter
