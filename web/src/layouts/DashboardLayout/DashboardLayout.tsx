import NavBar from '../../components/NavBar/NavBar';
type DashboardLayoutProps = {
  children?: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className=" gap-0 flex bg-gray-900 h-screen w-screen text-gray-100">
      <NavBar/>
      <section className="p-4">{children}</section>
    </div>
  )
}

export default DashboardLayout
