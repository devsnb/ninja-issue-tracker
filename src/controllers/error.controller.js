/**
 * Handles 404 page
 * @param {*} req express request object
 * @param {*} res express response object
 */
export const notFoundViewHandler = async (req, res) => {
	return res.render('pages/404', {
		title: 'Page Not Found'
	})
}

/**
 * Handles 500 page
 * @param {*} req express request object
 * @param {*} res express response object
 */
export const internalServerErrorViewHandler = async (req, res) => {
	return res.render('pages/500', {
		title: 'Internal Server Error'
	})
}
