import Project from '../models/project.model.js'
import logger from '../common/logger.js'

/**
 * Handles new project creation
 * @param {*} req express request object
 * @param {*} res express response object
 */
export const createProjectHandler = async (req, res) => {
	try {
		const { name, description, author } = req.body

		console.log(req.body)

		await Project.create({ name, description, author })

		return res.redirect('back')
	} catch (error) {
		logger.error(error, 'failed to create new project')
		return res.redirect('/500')
	}
}

/**
 * Handles project details page
 * @param {*} req express request object
 * @param {*} res express response object
 */
export const projectDetailsViewHandler = async (req, res) => {
	try {
		const projectId = req.params['id']
		let projectFound = await Project.findById(projectId).populate('issues')

		if (!projectFound) {
			return res.redirect('/404')
		}

		const searchVariable = req.query.titleAuthor || ''

		let filteredIssues = []
		for (let issue of projectFound.issues) {
			if (
				issue.title.includes(searchVariable) ||
				issue.title === searchVariable ||
				issue.author === searchVariable
			) {
				filteredIssues.push(issue)
			}
		}

		return res.render('pages/project-details', {
			title: `${projectFound.name} Details`,
			project: projectFound,
			issues: filteredIssues.length === 0 ? projectFound.issues : filteredIssues
		})
	} catch (error) {
		logger.error(error, 'failed to show project details')
		return res.redirect('/500')
	}
}
