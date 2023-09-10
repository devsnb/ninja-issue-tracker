import express from 'express'
import { createIssueHandler } from '../controllers/issue.controller.js'

const issueRouter = express.Router()

issueRouter.post('/:id', createIssueHandler)

export default issueRouter
