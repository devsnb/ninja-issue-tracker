import express from 'express'
import issuesRoutes from './issue.router.js'
import {
	createProjectHandler,
	projectDetailsViewHandler
} from '../controllers/project.controller.js'

const projectRouter = express.Router()

projectRouter.post('/create', createProjectHandler)

projectRouter.get('/:id', projectDetailsViewHandler)

projectRouter.use('/issue', issuesRoutes)


export default projectRouter
