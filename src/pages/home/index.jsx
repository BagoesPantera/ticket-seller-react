import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import {useEffect, useState} from "react";
import {getDatabase, onValue, ref} from "firebase/database";
import {app} from "../../config/fire.jsx";

function dateFormat(time){
    var strToDate = new Date(time);
    const date = new Date(strToDate);
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.toLocaleString('default', { day: '2-digit' });
    const year = date.toLocaleString('default', { year: 'numeric' });

    return `${day} ${month} ${year}`;
}

export default function Home(){
    const [bookingData, setBookingData] = useState()

    useEffect(() => {
        const starCountRef = ref(getDatabase(app), 'bookingData/')
        onValue(starCountRef, function(snapshot){
            const data = snapshot.val()
            const newData = Object.keys(data).map(key => ({
                id:key,
                ...data[key]
            }))
            setBookingData(newData)
        })
    }, []);
    return(
        <>
        <Navbar />
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full ">
                <div className="bg-gradient-to-b from-red-600  to-rose-700 lg:rounded-b-3xl">
                    <div className=" text-white uppercase px-6  lg:px-32 py-9 lg:text-2xl font-semibold">
                        Sewa lapangan basket & bulutangkis
                 </div>
                    <div className="flex flex-row px-6 lg:px-32 py-3 items-center text-white">
                        <img className="flex w-6 lg:w-12 h-6 lg:h-12" src="../src/assets/pin.svg" alt="" />
                        <div className="flex pl-5 text-lg lg:pl-10 lg:text-2xl text-white ">
                            Denpasar
                        </div>
                    </div>
                    <div className="flex flex-row px-6 lg:px-32 pt-9 pb-60 items-center">
                        <img className=" flex w-6 lg:w-12 lg:h-12" src="../src/assets/clock.svg" alt="" />
                        <div className="flex pl-5 text-lg lg:pl-10 lg:text-2xl text-white ">
                            Jam sewa 8.00 - 22.00
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full lg:w-3/4 lg:-mt-32 mb-52 bg-white border border-gray-200 shadow-md  lg:rounded-2xl ">
                <div className="sticky top-0">
                    <div className="flex bg-white justify-between  px-2 lg:px-4 py-4 border-b border-gray-200  lg:rounded-2xl ">
                        <div className="flex flex-row items-center p-2 text-sm lg:text-lg text-black font-Roboto">
                            April
                            <img className="w-4 lg:w-5 ml-2" src="../src/assets/calendar.svg" alt="" />
                            <img className="w-2 lg:w-3 ml-2" src="../src/assets/arrow-down.svg" alt="" />
                        </div>
                        <div className="flex flex-row items-center p-2">
                            <div className="bg-rose-600 p-1.5 lg:p-2 mx-2 rounded-full">
                                <img className=" w-5 lg:w-6" src="../src/assets/half-moon.svg" alt="" />
                            </div>
                            <div className="bg-rose-600 p-1.5 lg:p-2 mx-2 rounded-full">
                                <img className=" w-5 lg:w-6" src="../src/assets/basket.svg" alt="" />
                            </div>
                            <div className="bg-rose-600 p-1.5 lg:p-2 mx-2 rounded-full">
                                <img className=" w-5 lg:w-6" src="../src/assets/badminton.svg" alt="" />
                            </div>
                            <div className="bg-rose-600 p-1.5 lg:p-2 mx-2 rounded-full">
                                <img className=" w-5 lg:w-6" src="../src/assets/double-arrow-up.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col px-6 py-4 overflow-auto">
                    <div className="flex flex-col text-gray-500 font-Roboto text-xs lg:text-sm ">
                        <table className="table-auto text-center">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th className="text-gray-400 py-2 px-2 rounded-l-md">Pemesan</th>
                                    <th className="text-gray-400 py-2 px-2">Email</th>
                                    <th className="text-gray-400 py-2 px-2">Lapangan</th>
                                    <th className="text-gray-400 py-2 px-2 rounded-r-md">Tanggal [Jam]</th>
                                </tr>
                            </thead>
                            <tbody className="bg-scroll">
                            {
                                bookingData?.map((item, index) => {
                                    return (
                                        <tr className="border-b border-gray-200" key={index}>
                                            <td className="px-2 pb-2 pt-4">{item.nama}</td>
                                            <td className="px-2 pb-2 pt-4">{item.emails}</td>
                                            <td className="px-2 pb-2 pt-4">{item.lapangan}</td>
                                            <td className="px-2 pb-2 pt-4">{`${dateFormat(item.tanggal)} [${item.jam}]`}</td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* https://stackoverflow.com/a/75063696 */}
            <Footer />
        </div>
        </>
    )
}