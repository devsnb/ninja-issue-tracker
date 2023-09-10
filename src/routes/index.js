import express from 'express'
import projectRoutes from './project.router.js'
import {
	notFoundViewHandler,
	internalServerErrorViewHandler
} from '../controllers/error.controller.js'
import { homeViewHandler } from '../controllers/home.controller.js'
import logger from '../common/logger.js'

const router = express.Router()

// setup homepage
router.get('/', homeViewHandler)

// register project router
router.use('/projects', projectRoutes)

// 404 page
router.get('/404', notFoundViewHandler)

// 500 page
router.get('/500', internalServerErrorViewHandler)

// send 404 if no other routes catches the request
router.get('*', (req, res) => {
	res.redirect('/404')
})

logger.info('all routes loaded')

export default router
