import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { getAuth, onAuthStateChanged } from "firebase/auth";
export default function Home(){

    // login or nah
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log(uid);
        // ...
      } else {
        // User is signed out
        // ...
        console.log("out");
      }
    });

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
                        <table className="table-auto">
                        <thead className="bg-gray-200">
                                <tr>
                                    <td className="text-gray-400 py-2 px-2 rounded-l-md">Pemesan</td>
                                    <td className="text-gray-400 py-2 px-2">Lapangan</td>
                                    <td className="text-gray-400 py-2 px-2">Waktu</td>
                                    <td className="text-gray-400 py-2 px-2 rounded-r-md">Status</td>
                                </tr>
                            </thead>
                            <tbody className="bg-scroll">
                                <tr className="border-b border-gray-200">
                                    <td className="px-2 pb-2 pt-4">Sakunoki</td>
                                    <td className="px-2 pb-2 pt-4">Basket</td>
                                    <td className="px-2 pb-2 pt-4">21.00 - 22.00</td>
                                    <td className="px-2 pb-2 pt-4">Dibooking</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="px-2 pb-2 pt-4">Hyemu</td>
                                    <td className="px-2 pb-2 pt-4">Badminton</td>
                                    <td className="px-2 pb-2 pt-4">10.00 - 11.00</td>
                                    <td className="px-2 pb-2 pt-4">Dibooking</td>
                                </tr>
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