import logger from '../common/logger.js'

/**
 * Handles homepage
 * @param {*} req express request object
 * @param {*} res express response object
 */
export const homeViewController = async (req, res) => {
	try {
		return res.render('index', {
			title: 'Issue Tracker | Home'
		})
	} catch (error) {
		logger.error(error, 'failed to render home page')
		return res.render('pages/500', {
			title: 'Internal Server Error'
		})
	}
}
