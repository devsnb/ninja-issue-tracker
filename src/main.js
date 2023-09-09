import application from './app.js'
import connectDb from './initializers/mongoose.js'
import config from './config/index.js'
import logger from './common/logger.js'

/**
 * Entrypoint to our application
 */
const main = async () => {
	const port = config.get('port')

	// establish database connection
	await connectDb()

	const app = await application()

	app.listen(port, () => {
		logger.info(`server started on port ${port}`)
	})
}

main()
