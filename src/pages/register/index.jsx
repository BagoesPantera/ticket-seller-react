import { NavLink, Form, redirect } from 'react-router-dom'
import { handleRegister } from '../../controllers/authController';

export async function action({request}) {
    try {
        const formData = await request.formData();
        const data = Object.fromEntries(formData);
        
        // add confirm pass check
        const resp = await handleRegister(data.surel, data.password, data.username)
        console.log(resp);
        if(resp){
            return redirect('/')
        }else{
            return null //failed
        }
    } catch (err) {
        return err
    }    
}

export default function Register(){
    return(
        <div className="flex min-h-screen bg-gray-100 justify-center items-center">
            <div className="w-full lg:w-1/4">
                <div className="bg-white px-16 py-12 min-h-screen lg:min-h-0 shadow-md rounded-lg ">
                    <div className="flex text-red-500 font-bold text-xl justify-center mb-12">
                        <img src="https://cdn.discordapp.com/attachments/940834033825349653/1125700596536721440/logo.png" alt="LOGO" width={100}/>
                    </div>
                    <div className="font-bold text-xl bg-gradient-to-l from-rose-600 to-red-400 inline text-transparent bg-clip-text">
                        Ayo Buat Akun
                    </div>
                    <div className="flex flex-col mt-4">
                        <Form method='post'>
                            <div className="mb-5">
                                <label htmlFor="username" className="block mb-2 text-sm font-semibold text-gray-500">Nama Pengguna</label>
                                <input className=" bg-white text-sm font-semibold text-gray-400 focus:text-black hover:bg-gray-100 w-full border shadow-sm focus:border-red-500 focus:bg-white focus:ring focus:ring-red-100 transition duration-200 rounded-md h-10 focus:outline-none px-3" type="username" placeholder="penggunakeren11" autoFocus required name='username'/>
                            </div>
                            <div className="mb-5">
                                <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-500">Surel</label>
                                <input className=" bg-white text-sm font-semibold text-gray-400 focus:text-black hover:bg-gray-100 w-full border shadow-sm focus:border-red-500 focus:bg-white focus:ring focus:ring-red-100 transition duration-200 rounded-md h-10 focus:outline-none px-3" type="email" placeholder="pengguna@tisel.com" required  name='surel'/>
                                <p></p>
                            </div>
                            <div className="flex flex-col lg:flex-row lg:justify-between">
                                <div className="mb-5 lg:w-5/12">
                                    <label htmlFor="password" className="block mb-2 text-sm font-semibold text-gray-500">Kata sandi</label>
                                    <input className="bg-white text-sm font-semibold text-gray-400 focus:text-black hover:bg-gray-100 w-full border shadow-sm focus:border-red-500 focus:bg-white focus:ring focus:ring-red-100 transition duration-200 rounded-md h-10 focus:outline-none px-3" type="password" placeholder="rahasia" required name='password' />
                                    <p></p>
                                </div>
                                <div className="mb-5 lg:w-5/12">
                                    <label htmlFor="password" className="block mb-2 text-sm font-semibold text-gray-500">Konfirmasi kata sandi</label>
                                    <input className="bg-white text-sm font-semibold text-gray-400 focus:text-black hover:bg-gray-100 w-full border shadow-sm focus:border-red-500 focus:bg-white focus:ring focus:ring-red-100 transition duration-200 rounded-md h-10 focus:outline-none px-3" type="password" placeholder="rahasia" required name='confirmpass'/>
                                </div>
                            </div>
                            <div className="flex justify-center mt-4">
                                <button className="w-full px-4 py-2 font-semibold bg-gradient-to-tr from-rose-600 to-red-500 text-white rounded-md focus:outline-none border focus:border-red-300 focus:ring focus:ring-red-100" >
                                    DAFTAR
                                </button>
                            </div>
                        </Form>
                        <div className="flex flex-row mt-8 justify-center">
                            <a className="text-gray-500 font-semibold text-sm" >
                                Sudah punya akun?
                            </a>
                            <NavLink to="/login" className="text-red-400 font-semibold text-sm ml-2" >
                                Login lah
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}