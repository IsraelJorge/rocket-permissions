import { z } from 'zod'

export const billingSubjectSchema = z.tuple([
  z.enum(['export', 'get', 'manage']),
  z.literal('Billing'),
])

export type BillingSubject = z.infer<typeof billingSubjectSchema>
