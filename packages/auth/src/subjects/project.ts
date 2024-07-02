import { z } from 'zod'

export const projectSubjectSchema = z.tuple([
  z.enum(['create', 'delete', 'update', 'get', 'manage']),
  z.literal('Project'),
])

export type ProjectSubject = z.infer<typeof projectSubjectSchema>
