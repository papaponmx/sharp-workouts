import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_SETTING_MUTATION = gql`
  mutation DeleteSettingMutation($id: String!) {
    deleteSetting(id: $id) {
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

const Setting = ({ setting }) => {
  const [deleteSetting] = useMutation(DELETE_SETTING_MUTATION, {
    onCompleted: () => {
      toast.success('Setting deleted')
      navigate(routes.settings())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete setting ' + id + '?')) {
      deleteSetting({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Setting {setting.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{setting.id}</td>
            </tr><tr>
              <th>Dark mode</th>
              <td>{checkboxInputTag(setting.darkMode)}</td>
            </tr><tr>
              <th>User id</th>
              <td>{setting.userId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editSetting({ id: setting.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(setting.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Setting
