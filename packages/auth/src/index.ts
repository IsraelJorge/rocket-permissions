import {
  AbilityBuilder,
  CreateAbility,
  createMongoAbility,
  MongoAbility,
} from '@casl/ability'
import { z } from 'zod'

import { User } from './models/user'
import { permissions } from './permissions'
import { billingSubjectSchema } from './subjects/billing'
import { inviteSubjectSchema } from './subjects/invite'
import { organizationSubjectSchema } from './subjects/organization'
import { projectSubjectSchema } from './subjects/project'
import { userSubjectSchema } from './subjects/user'

const appAbilitiesSchema = z.union([
  userSubjectSchema,
  projectSubjectSchema,
  organizationSubjectSchema,
  inviteSubjectSchema,
  billingSubjectSchema,
  z.tuple([z.literal('manage'), z.literal('all')]),
])

type AppAbilities = z.infer<typeof appAbilitiesSchema>

export type AppAbility = MongoAbility<AppAbilities>
export const createAppAbility = createMongoAbility as CreateAbility<AppAbility>

export function defineAbilitiesFor(user: User) {
  const builder = new AbilityBuilder(createAppAbility)

  if (typeof permissions[user.role] !== 'function') {
    throw new Error(`Permission for role ${user.role} not found`)
  }

  permissions[user.role](user, builder)

  const ability = builder.build({
    detectSubjectType: (subject) => subject.__typename,
  })

  return ability
}
