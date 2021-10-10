import EditSettingCell from 'src/components/Setting/EditSettingCell'

type SettingPageProps = {
  id: string
}

const EditSettingPage = ({ id }: SettingPageProps) => {
  return <EditSettingCell id={id} />
}

export default EditSettingPage
