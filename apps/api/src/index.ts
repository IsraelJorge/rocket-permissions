import { defineAbilitiesFor } from '@repo/auth'

const ability = defineAbilitiesFor({ role: 'ADMIN' })

// const userCanInvite = ability.can('invite', 'User')
const userCanDelete = ability.can('delete', 'User')

const userCannotDelete = ability.cannot('delete', 'User')

// console.log({ userCanInvite })
console.log({ userCanDelete })
console.log({ userCannotDelete })
