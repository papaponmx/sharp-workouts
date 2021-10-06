import { AuthenticationError, ForbiddenError } from '@redwoodjs/graphql-server'
import { context } from '@redwoodjs/graphql-server'
import { db } from 'src/lib/db'

/**
 * getCurrentUser returns the user information together with
 * an optional collection of roles used by requireAuth() to check
 * if the user is authenticated or has role-based access
 *
 * @param decoded - The decoded access token containing user info and JWT claims like `sub`
 * @param { token, SupportedAuthTypes type } - The access token itself as well as the auth provider type
 * @param { APIGatewayEvent event, Context context } - An object which contains information from the invoker
 * such as headers and cookies, and the context information about the invocation such as IP Address
 *
 * @see https://github.com/redwoodjs/redwood/tree/main/packages/auth for examples
 */
export const getCurrentUser = async (
  decoded,
  { _token, _type },
  { _event, _context }
) => {
  if (!decoded) {
    return null
  }

  const email = decoded.emailAddresses[0].emailAddress
  const dbUser = await db.user.findUnique({
    where: { email: email },
  })
  const dbRoles = await db.role.findMany({
    where: { userId: dbUser.id },
  })

  return {
    ...decoded,
    id: dbUser?.id,
    roles: Array.isArray(dbRoles) ? dbRoles.map((role) => role.name) : [],
  }
}

/**
 * The user is authenticated if there is a currentUser in the context
 *
 * @returns {boolean} - If the currentUser is authenticated
 */
export const isAuthenticated = (): boolean => {
  return !!context.currentUser
}

/**
 * Checks if the currentUser is authenticated (and assigned one of the given roles)
 *
 * @param {string | string[]} roles - A single role or list of roles to check if the user belongs to
 *
 * @returns {boolean} - Returns true if the currentUser is logged in and assigned one of the given roles,
 * or when no roles are provided to check against. Otherwise returns false.
 */
export const hasRole = ({ roles }) => {
  if (!isAuthenticated()) {
    return false
  }

  if (roles) {
    if (Array.isArray(roles)) {
      return context.currentUser.roles?.some((r: string) => roles.includes(r))
    }

    if (typeof roles === 'string') {
      return context.currentUser.roles?.includes(roles)
    }

    // roles not found
    return false
  }

  return true
}

interface rolesInput {
  roles?: string[] | string
}

/**
 * Use requireAuth in your services to check that a user is logged in,
 * whether or not they are assigned a role, and optionally raise an
 * error if they're not.
 *
 * @param {string= | string[]=} roles - A single role or list of roles to check if the user belongs to
 *
 * @returns - If the currentUser is authenticated (and assigned one of the given roles)
 *
 * @throws {AuthenticationError} - If the currentUser is not authenticated
 * @throws {ForbiddenError} If the currentUser is not allowed due to role permissions
 *
 * @see https://github.com/redwoodjs/redwood/tree/main/packages/auth for examples
 */
export const requireAuth = (
  { roles }: rolesInput = {}
  // ownsResource = false
): void => {
  if (!isAuthenticated()) {
    throw new AuthenticationError("You don't have permission to do that.")
  }

  if (!hasRole({ roles })) {
    throw new ForbiddenError("You don't have access to do that.")
  }
}

/**
 * Use verifyOwnership to validate that the current user
 */
export const verifyOwnership = (id: string) => {
  if (context.currentUser?.id !== id) {
    throw new ForbiddenError("You don't have access to do that.")
  }
}
