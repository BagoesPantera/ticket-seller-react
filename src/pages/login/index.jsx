import { NavLink, Form, redirect, useActionData } from 'react-router-dom'
import { handleLogin } from '../../controllers/authController';

export async function action({request}) {
    try {
        const formData = await request.formData();
        const updates = Object.fromEntries(formData);

        const resp = await handleLogin(updates.surel, updates.password, updates.checked)
        if(resp){
            return redirect('/')
        }else{
            return null //failed
        }
    } catch (err) {
        return err
    }    
}

export default function Login(){
    const err = useActionData()
    return(
        <div className="flex min-h-screen bg-gray-100 justify-center items-center">
            <div className="w-full lg:w-1/4">
                <div className="bg-white min-h-screen lg:min-h-0 px-16 py-12 shadow-md rounded-lg ">
                    <div className="flex text-red-500 font-bold text-xl justify-center mb-12">
                        <img src="https://cdn.discordapp.com/attachments/940834033825349653/1125700596536721440/logo.png" alt="LOGO" width={100}/>
                    </div>
                    <div className="font-bold text-xl bg-gradient-to-l from-rose-600 to-red-400 inline text-transparent bg-clip-text">
                        Login Kuy
                    </div>
                    <div className="flex flex-col mt-4">
                        {err?.firebase &&  <span className="text-sm font-medium px-2.5 py-0.5 rounded bg-red-700 text-white">{err.firebase}</span>}
                        <Form method='post'>
                            <div className="mb-5">
                                <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-500">Surel</label>
                                <input className=" bg-white text-sm font-semibold text-gray-400 focus:text-black hover:bg-gray-100 w-full border shadow-sm focus:bg-white focus:border-red-500 focus:ring focus:ring-red-100 transition duration-200 rounded-md h-10 focus:outline-none px-3" type="email" placeholder="pengguna@tisel.com" autoFocus required  name='surel'/>
                                {err?.surel && <p className='text-sm text-red-600'>{err.surel}</p>}
                            </div>
                            <div className="mb-5">
                                <label htmlFor="password" className="block mb-2 text-sm font-semibold text-gray-500">Kata sandi</label>
                                <input className="bg-white text-sm font-semibold text-gray-400 focus:text-black hover:bg-gray-100 w-full border shadow-sm focus:bg-white focus:border-red-500 focus:ring focus:ring-red-100 transition duration-200 rounded-md h-10 focus:outline-none px-3" type="password" placeholder="rahasia" required name='password' />
                                <p></p>
                            </div>
                            <div className="flex flex-row items-center mx-1">
                                <input className="mr-4" type="checkbox" name='checked'/>
                                <label htmlFor="checkbox" className="block text-sm font-semibold text-gray-500">Ingat saya</label>
                            </div>
                            <div className="flex justify-center mt-6">
                                <button className="w-full px-4 py-2 font-semibold bg-gradient-to-tr from-rose-600 to-red-500 text-white rounded-md focus:outline-none border focus:border-red-300 focus:ring focus:ring-red-100" type='submit'>
                                    LOGIN
                                </button>
                            </div>
                        </Form>
                         
                        <div className="flex flex-row mt-8">
                            <a  className="text-gray-500 font-semibold text-sm" >
                                Belum punya akun?
                            </a>
                            <NavLink to="/register" className="text-red-400 font-semibold text-sm ml-2" >
                                Daftar dulu 
                            </NavLink>
                        </div>
                        <div className="flex flex-row mt-4">
                            <a  className="text-gray-500 font-semibold text-sm" >
                                Lupa kata sandi?
                            </a>
                            <NavLink to="/forgot-password" className="text-red-400 font-semibold text-sm ml-2" >
                                Klik disini 
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}