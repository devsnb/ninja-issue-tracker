import Project from '../models/project.model.js'
import logger from '../common/logger.js'

/**
 * Handles homepage
 * @param {*} req express request object
 * @param {*} res express response object
 */
export const homeViewHandler = async (req, res) => {
	try {
		const foundProjects = await Project.find({}).sort('createdAt')

		return res.render('pages/index', {
			title: 'Issue Tracker | Home',
			projects: foundProjects
		})
	} catch (error) {
		logger.error(error, 'failed to render home page')
		return res.redirect('/500')
	}
}
