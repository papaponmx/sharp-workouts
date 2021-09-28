import EditRoleCell from 'src/components/Role/EditRoleCell'

type RolePageProps = {
  id: String
}

const EditRolePage = ({ id }: RolePageProps) => {
  return <EditRoleCell id={id} />
}

export default EditRolePage
