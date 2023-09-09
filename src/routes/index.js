import express from 'express'
import projectRoutes from './project.router.js'
import logger from '../common/logger.js'

const router = express.Router()

router.get('/', (req, res) => {
	// TODO
})

router.use('/projects', projectRoutes)

logger.info('all routes loaded')

export default router
