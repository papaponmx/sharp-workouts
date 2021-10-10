import SettingCell from 'src/components/Setting/SettingCell'

type SettingPageProps = {
  id: String
}

const SettingPage = ({ id }: SettingPageProps) => {
  return <SettingCell id={id} />
}

export default SettingPage
