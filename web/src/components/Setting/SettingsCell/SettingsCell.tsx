import type { FindSettings } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Settings from 'src/components/Setting/Settings'

export const QUERY = gql`
  query FindSettings {
    settings {
      id
      darkMode
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No settings yet. '}
      <Link
        to={routes.newSetting()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ settings }: CellSuccessProps<FindSettings>) => {
  return <Settings settings={settings} />
}
