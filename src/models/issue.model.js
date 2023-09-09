import mongoose from 'mongoose'

const issueSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true
		},
		author: {
			type: String
		},
		label: {
			type: String
		},
		description: {
			type: String
		},
		projectId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Project'
		}
	},
	{
		timestamps: true
	}
)

const Issue = mongoose.model('Issue', issueSchema)

export default Issue
