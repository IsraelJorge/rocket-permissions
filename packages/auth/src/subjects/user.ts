import { z } from 'zod'

export const userSubjectSchema = z.tuple([
  z.enum(['update', 'delete', 'get', 'manage']),
  z.literal('User'),
])

export type UserSubject = z.infer<typeof userSubjectSchema>
