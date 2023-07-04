import { NavLink } from 'react-router-dom'
export default function ForgotPassword() {
    return(
        <div className='flex min-h-screen bg-gray-100 justify-center items-center'>
            <div className="w-full lg:w-1/4">
                <form action="">
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-500">Surel</label>
                        <input className=" bg-white text-sm font-semibold text-gray-400 focus:text-black hover:bg-gray-100 w-full border shadow-sm focus:bg-white focus:border-red-500 focus:ring focus:ring-red-100 transition duration-200 rounded-md h-10 focus:outline-none px-3" type="email" placeholder="pengguna@tisel.com" autoFocus  />
                        <p></p>
                    </div>
                </form>
                <div className="flex justify-center mt-6">
                    <button className="w-full px-4 py-2 font-semibold bg-gradient-to-tr from-rose-600 to-red-500 text-white rounded-md focus:outline-none border focus:border-red-300 focus:ring focus:ring-red-100" >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}