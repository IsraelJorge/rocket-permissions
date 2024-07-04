import { z } from 'zod'

import { organizationSchema } from '../models/organization'

export const organizationSubjectSchema = z.tuple([
  z.enum(['create', 'update', 'delete', 'manage', 'transfer_ownership']),
  z.union([z.literal('Organization'), organizationSchema]),
])

export type OrganizationSubject = z.infer<typeof organizationSubjectSchema>
