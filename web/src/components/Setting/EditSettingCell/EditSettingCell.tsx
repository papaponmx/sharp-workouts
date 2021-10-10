import type { EditSettingById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import SettingForm from 'src/components/Setting/SettingForm'

export const QUERY = gql`
  query EditSettingById($id: String!) {
    setting: setting(id: $id) {
      id
      darkMode
      userId
    }
  }
`
const UPDATE_SETTING_MUTATION = gql`
  mutation UpdateSettingMutation($id: String!, $input: UpdateSettingInput!) {
    updateSetting(id: $id, input: $input) {
      id
      darkMode
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ setting }: CellSuccessProps<EditSettingById>) => {
  const [updateSetting, { loading, error }] = useMutation(UPDATE_SETTING_MUTATION, {
    onCompleted: () => {
      toast.success('Setting updated')
      navigate(routes.settings())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateSetting({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Setting {setting.id}</h2>
      </header>
      <div className="rw-segment-main">
        <SettingForm setting={setting} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
