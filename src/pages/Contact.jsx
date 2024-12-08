import ContactUs from '../components/ContactUs'

function Contact() {
    return (
        <div className="bg-[#1E1E1F] border-[0.2px] border-[#353535] my-4 rounded-xl p-5 tablet:mb-14">
            <h1 className="text-xl font-[Poppins-medium]">Let&apos;s work together</h1>
            <div className="h-[3px] w-[30px] my-2 rounded bg-gradient-to-r from-[#FFDB70] to-[#FFBB5C]"></div>
            <ContactUs/>
        </div>
    );
}   

export default Contact