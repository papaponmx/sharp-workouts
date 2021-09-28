import RoleCell from 'src/components/Role/RoleCell'

type RolePageProps = {
  id: string
}

const RolePage = ({ id }: RolePageProps) => {
  return <RoleCell id={id} />
}

export default RolePage
