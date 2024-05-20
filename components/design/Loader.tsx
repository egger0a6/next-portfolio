import { SyncLoader } from "react-spinners"

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <SyncLoader color="#EA5454" size={15} />
    </div>
  )
}

export default Loader