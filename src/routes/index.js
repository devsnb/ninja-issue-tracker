import express from 'express'
import projectRoutes from './project.router.js'
import { homeViewController } from '../controllers/home.controller.js'
import logger from '../common/logger.js'

const router = express.Router()

router.get('/', homeViewController)

router.use('/projects', projectRoutes)

// 404 page
router.use((req, res) => {
	logger.error(null, 'page not found')
	res.render('pages/404', {
		title: 'Page Not Found'
	})
})

logger.info('all routes loaded')

export default router
