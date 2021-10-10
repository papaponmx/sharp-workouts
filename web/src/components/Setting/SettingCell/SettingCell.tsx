import type { FindSettingById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Setting from 'src/components/Setting/Setting'

export const QUERY = gql`
  query FindSettingById($id: String!) {
    setting: setting(id: $id) {
      id
      darkMode
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Setting not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ setting }: CellSuccessProps<FindSettingById>) => {
  return <Setting setting={setting} />
}
