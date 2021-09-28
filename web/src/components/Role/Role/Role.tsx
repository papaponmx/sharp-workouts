import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_ROLE_MUTATION = gql`
  mutation DeleteRoleMutation($id: String!) {
    deleteRole(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Role = ({ role }) => {
  const [deleteRole] = useMutation(DELETE_ROLE_MUTATION, {
    onCompleted: () => {
      toast.success('Role deleted')
      navigate(routes.roles())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete role ' + id + '?')) {
      deleteRole({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Role {role.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{role.id}</td>
            </tr><tr>
              <th>Name</th>
              <td>{role.name}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(role.createdAt)}</td>
            </tr><tr>
              <th>Updated at</th>
              <td>{timeTag(role.updatedAt)}</td>
            </tr><tr>
              <th>User id</th>
              <td>{role.userId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editRole({ id: role.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(role.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Role
