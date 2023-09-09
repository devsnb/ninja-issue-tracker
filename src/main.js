import application from './app.js'
import config from './config/index.js'
import logger from './common/logger.js'

/**
 * Entrypoint to our application
 */
const main = async () => {
	const port = config.get('port')

	const app = await application()

	app.listen(port, () => {
		logger.info(`Server started on port ${port}`)
	})
}

main()
