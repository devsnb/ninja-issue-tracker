const labels = document.querySelectorAll('.labels')

let activeTokens = []
let removedToken = ''

labels.forEach(label => {
	label.addEventListener('click', () => {
		const issues = document.querySelectorAll('.issue')

		if (!activeTokens.includes(label.value)) {
			activeTokens.push(label.value)
		} else {
			activeTokens = activeTokens.filter(token => token !== label.value)
			removedToken = label.value
		}

		if (activeTokens.length === 0) {
			issues.forEach(issue => {
				issue.classList.remove('hide')
			})
			return
		}

		issues.forEach(issue => {
			const issueLabel = issue.attributes.getNamedItem('data-label').value

			if (!activeTokens.includes(issueLabel)) {
				issue.classList.add('hide')
			} else if (activeTokens.includes(issueLabel)) {
				issue.classList.remove('hide')
			}
		})

		issues.forEach(issue => {
			const issueLabel = issue.attributes.getNamedItem('data-label').value
			if (removedToken && issueLabel === removedToken) {
				issue.classList.add('hide')
			}
		})
	})
})
