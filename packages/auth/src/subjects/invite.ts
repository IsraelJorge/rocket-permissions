import { z } from 'zod'

export const inviteSubjectSchema = z.tuple([
  z.enum(['create', 'delete', 'get']),
  z.literal('Invite'),
])

export type InviteSubject = z.infer<typeof inviteSubjectSchema>
