import Project from '../models/project.model.js'
import Issue from '../models/issue.model.js'
import logger from '../common/logger.js'

/**
 * Handles issue creation for a project
 * @param {*} req express request object
 * @param {*} res express response object
 */
export const createIssueHandler = async (req, res) => {
	try {
		const { title, label, author, description } = req.body

		const projectId = req.params['id']

		let foundProject = await Project.findById(projectId)

		if (!foundProject) {
			logger.error(null, 'project not found')
			return res.redirect('/404')
		}

		let newIssue = await Issue.create({
			title,
			author,
			label,
			description,
			project: foundProject
		})

		foundProject.issues.push(newIssue)

		let labelPresent = foundProject.labels.find(
			element => element.toUpperCase() === req.body.label.toUpperCase()
		)

		if (!labelPresent) {
			foundProject.labels.push(label)
		}

		await foundProject.save()

		res.redirect('back')
	} catch (error) {
		logger.error(error, 'failed to create new issue')
		return res.redirect('/500')
	}
}
