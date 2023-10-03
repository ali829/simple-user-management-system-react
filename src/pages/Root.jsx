import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="bg-primary-950 h-screen font-primary">
    <main className="w-5/6 mx-auto py-24">
        <Outlet/>
    </main>
    </div>
  )
}

export default Root;