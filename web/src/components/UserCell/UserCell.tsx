import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'
import type { FindUserQuery } from 'types/graphql'

export const QUERY = gql`
  query FindUserQuery($id: String!) {
    user: user(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ user }: CellSuccessProps<FindUserQuery>) => {
  return <div>{JSON.stringify(user)}</div>
}
