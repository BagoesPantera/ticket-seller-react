import Navbar from "../../components/Navbar";

export default function Booking() {
    return (
        <>
        <Navbar />
        <div className="flex bg-gray-100 min-h-screen justify-center ">
            <div className="flex flex-col w-full items-center">
                <div className="flex flex-col items-center mt-14">
                    <tr className=" text-3xl font-bold bg-gradient-to-tr from-rose-600 to-red-400 inline text-transparent bg-clip-text">Booking Dulu</tr>
                    <tr className=" text-md font-medium text-rose-600 mt-2">biar ga salah paham</tr>
                </div>
                <div className="flex flex-col pb-6 shadow-sm bg-white mt-10 w-8/12 justify-center rounded-lg border border-gray-200 mb-28">
                    <div className="px-4 py-5 bg-white border-b rounded-t-lg border-gray-200 sticky top-0">
                        <a className="font-bold text-xl bg-gradient-to-l from-rose-600 to-red-400 inline text-transparent bg-clip-text">Data Pemesan</a>
                    </div>
                    <div className="p-5">
                        <form action="">
                            <div className="mb-5">
                                <label htmlFor="name" className="block mb-2 text-sm font-semibold text-gray-500">Nama Pemesan</label>
                                <input className=" bg-white text-sm font-semibold text-gray-400 focus:text-black hover:bg-gray-100 w-full border shadow-sm focus:bg-white focus:border-red-500 focus:ring focus:ring-red-100 transition duration-200 rounded-md h-10 focus:outline-none px-3" type="name" placeholder="Noki Tisel" required autoFocus/>
                            </div>
                            <div className="mb-5">
                                <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-500">Surel</label>
                                <input className=" bg-white text-sm font-semibold text-gray-400 focus:text-black hover:bg-gray-100 w-full border shadow-sm focus:bg-white focus:border-red-500 focus:ring focus:ring-red-100 transition duration-200 rounded-md h-10 focus:outline-none px-3" type="email" placeholder="pengguna@tisel.com" required/>
                            </div>
                            <div className="mb-5">
                                <label htmlFor="number" className="block mb-2 text-sm font-semibold text-gray-500">No. Hp</label>
                                <input className=" bg-white text-sm font-semibold text-gray-400 focus:text-black hover:bg-gray-100 w-full border shadow-sm focus:bg-white focus:border-red-500 focus:ring focus:ring-red-100 transition duration-200 rounded-md h-10 focus:outline-none px-3" type="text" placeholder="08123456789" required/>
                            </div>
                            <div className="mb-5">
                                <label htmlFor="number" className="block mb-2 text-sm font-semibold text-gray-500">Lapangan</label>
                                <select className="bg-white text-sm font-semibold text-gray-400 focus:text-black hover:bg-gray-100 w-full border shadow-sm focus:bg-white focus:border-red-500 focus:ring focus:ring-red-100 transition duration-200 rounded-md h-10 focus:outline-none px-3" required>
                                    <option selected>Pilih lapangan</option>
                                    <option value="basket">Basket</option>
                                    <option value="bultang">Bulu Tangkis</option>
                                </select>
                            </div>
                            <div className="flex flex-col lg:flex-row lg:justify-between">
                                <div className="mb-5 lg:w-8/12">
                                    <label htmlFor="text" className="block mb-2 text-sm font-semibold text-gray-500">Tanggal</label>
                                    <input className=" bg-white text-sm font-semibold text-gray-400 focus:text-black hover:bg-gray-100 w-full border shadow-sm focus:bg-white focus:border-red-500 focus:ring focus:ring-red-100 transition duration-200 rounded-md h-10 focus:outline-none px-3" type="date" required/>
                                </div>
                                <div className="mb-5 lg:w-3/12">
                                    <label htmlFor="text" className="block mb-2 text-sm font-semibold text-gray-500">Jam</label>
                                    <input className=" bg-white text-sm font-semibold text-gray-400 focus:text-black hover:bg-gray-100 w-full border shadow-sm focus:bg-white focus:border-red-500 focus:ring focus:ring-red-100 transition duration-200 rounded-md h-10 focus:outline-none px-3" type="time" required/>
                                </div>
                            </div>
                            <div className="mb-5">
                                <label htmlFor="number" className="block mb-4 text-sm font-semibold text-gray-500">Foto KTP / Kartu Pelajar</label>
                                <div className="w-8/12">
                                    <input className="hidden" type="file" name="" id="file" accept="image/*" required/>
                                    <label  className="flex justify-center w-full border-dashed border-2 h-56 mb-6" htmlFor="file">
                                        <svg className="w-32 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                        </svg>        
                                    </label>
                                    <label className="flex w-28 justify-between items-center bg-gray-200 px-3 py-2 rounded-md text-gray-500 text-sm font-semibold hover:bg-gray-300" htmlFor="file">
                                        Pilih foto
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                        </svg>
                                    </label>
                                </div>
                            </div>
                            <button className="w-full px-4 py-2 font-semibold bg-gradient-to-tr from-rose-600 to-red-500 text-white rounded-md focus:outline-none border focus:border-red-300 focus:ring focus:ring-red-100" >
                                SUBMIT
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}