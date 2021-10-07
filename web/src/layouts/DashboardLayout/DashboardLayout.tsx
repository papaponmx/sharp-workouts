type DashboardLayoutProps = {
  children?: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className=" gap-0 flex bg-gray-900 h-screen w-screen text-gray-100">
      {/* TODO: Move this to a Navbar component */}
      <nav className="bg-navbar-gradient h-screen w-12 max-w-xs p-2"></nav>
      <section className="p-4">{children}</section>
    </div>
  )
}

export default DashboardLayout
