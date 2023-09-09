import express from 'express'
import router from './routes/index.js'

const application = async () => {
	const app = express()

	// parse incoming request
	app.use(express.urlencoded({ extended: false }))
	app.use(express.json())

	// register application router
	app.use(router)

	return app
}

export default application
