import { Link, routes } from '@redwoodjs/router'
import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'
import Roles from 'src/components/Role/Roles'
import type { FindRoles } from 'types/graphql'

export const QUERY = gql`
  query FindRoles {
    roles {
      id
      name
      createdAt
      updatedAt
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No roles yet. '}
      <Link to={routes.newRole()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ roles }: CellSuccessProps<FindRoles>) => {
  return <Roles roles={roles} />
}