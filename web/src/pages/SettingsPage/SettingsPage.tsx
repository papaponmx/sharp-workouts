import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'
import EditUserCell from 'src/components/User/EditUserCell'

const SettingsPage = () => {
  const { currentUser, isAuthenticated } = useAuth()
  return (
    <>
      <MetaTags title="Settings" />

        <h1>SettingsPage</h1>
        {/* This page should
       *  - List user metadata
       - Only display user's info
       user -- Editable
       Email
       Register date
      */}
        {isAuthenticated && <EditUserCell id={currentUser?.id} />}{' '}
    </>
  )
}

export default SettingsPage
