import ContactUs from '../components/ContactUs'
import LaptopNavbar from '../components/LaptopNavbar';
import GoogleMapsChennai from '../components/GoogleMapsChennai'
function Contact() {
    return (
        <div className="relative font-[Poppins] bg-[#1E1E1F] border-[0.2px] border-[#353535] my-4 rounded-xl p-5 mb-14 laptop:mb-0 desktop:m-0 desktop:w-full desktop:overflow-auto tablet:px-8 tablet:py-5">
            <LaptopNavbar/>
            <h1 className="text-xl font-[Poppins-medium]">Let&apos;s work together </h1>
            <div className="h-[3px] w-[30px] my-2 rounded bg-gradient-to-r from-[#FFDB70] to-[#FFBB5C]"></div>
            <GoogleMapsChennai/>
            <ContactUs/>
        </div>
    );
}   

export default Contact
