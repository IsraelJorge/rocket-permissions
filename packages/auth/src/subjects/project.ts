import { z } from 'zod'

import { projectSchema } from '../models/project'

export const projectSubjectSchema = z.tuple([
  z.enum(['create', 'delete', 'update', 'get', 'manage']),
  z.union([z.literal('Project'), projectSchema]),
])

export type ProjectSubject = z.infer<typeof projectSubjectSchema>
