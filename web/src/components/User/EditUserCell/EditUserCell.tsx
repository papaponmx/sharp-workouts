import { navigate, routes } from '@redwoodjs/router'
import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import UserForm from 'src/components/User/UserForm'
import type { EditUserById } from 'types/graphql'

export const QUERY = gql`
  query EditUserById($id: String!) {
    user: user(id: $id) {
      id
      email
      name
      registerDate
    }
  }
`
const UPDATE_USER_MUTATION = gql`
  mutation UpdateUserMutation($id: String!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      id
      email
      name
      registerDate
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ user }: CellSuccessProps<EditUserById>) => {
  const [updateUser, { loading, error }] = useMutation(UPDATE_USER_MUTATION, {
    onCompleted: () => {
      toast.success('User updated')
      navigate(routes.users())
    },
  })

  const onSave = (input, id) => {
    updateUser({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit User {user.id}</h2>
      </header>
      <div className="rw-segment-main">
        <UserForm user={user} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
