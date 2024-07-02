import { z } from 'zod'

export const organizationSubjectSchema = z.tuple([
  z.enum(['create', 'update', 'delete', 'manage', 'transfer_ownership']),
  z.literal('Organization'),
])

export type OrganizationSubject = z.infer<typeof organizationSubjectSchema>
