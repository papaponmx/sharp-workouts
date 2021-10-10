import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type SettingLayoutProps = {
  children: React.ReactNode
}

const SettingsLayout = ({ children }: SettingLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.settings()}
            className="rw-link"
          >
            Settings
          </Link>
        </h1>
        <Link
          to={routes.newSetting()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Setting
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default SettingsLayout
