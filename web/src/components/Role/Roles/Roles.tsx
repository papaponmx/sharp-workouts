import { CurrentUser, useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { useEffect, useState } from 'react'
import { QUERY } from 'src/components/Role/RolesCell'

const DELETE_ROLE_MUTATION = gql`
  mutation DeleteRoleMutation($id: String!) {
    deleteRole(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const RolesList = ({ roles }) => {
  const { isAuthenticated, getCurrentUser } = useAuth()

  const [currentUser, setCurrentUser] = useState<CurrentUser | undefined>()

  const fetchUser = async () => {
    const user = await getCurrentUser()
    setCurrentUser(user)
    console.log('🧐', user)
  }

  useEffect(() => {
    if (isAuthenticated) {
      fetchUser()
    }
  }, [])

  const [deleteRole] = useMutation(DELETE_ROLE_MUTATION, {
    onCompleted: () => {
      toast.success('Role deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete role ' + id + '?')) {
      deleteRole({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {roles
            .filter(
              (role) => currentUser && currentUser?.roles.includes(role.name)
            )
            .map((role) => (
              <tr key={role.id}>
                <td>{truncate(role.name)}</td>
                <td>{timeTag(role.createdAt)}</td>
                <td>{timeTag(role.updatedAt)}</td>
                <td>
                  <nav className="rw-table-actions">
                    <Link
                      to={routes.role({ id: role.id })}
                      title={'Show role ' + role.id + ' detail'}
                      className="rw-button rw-button-small"
                    >
                      Show
                    </Link>
                    <Link
                      to={routes.editRole({ id: role.id })}
                      title={'Edit role ' + role.id}
                      className="rw-button rw-button-small rw-button-blue"
                    >
                      Edit
                    </Link>
                    <button
                      type="button"
                      title={'Delete role ' + role.id}
                      className="rw-button rw-button-small rw-button-red"
                      onClick={() => onDeleteClick(role.id)}
                    >
                      Delete
                    </button>
                  </nav>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default RolesList
