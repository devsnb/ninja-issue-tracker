import express from 'express'

const application = async () => {
	const app = express()

	// parse incoming request
	app.use(express.urlencoded({ extended: false }))
	app.use(express.json())

	return app
}

export default application
