
const GoogleMapsChennai = () => {
  

  // Dark mode parameters for Google Maps embed
 

  return (
    <div className="relative w-full mx-auto my-5">
      
      <iframe
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220576.42090443417!2d80.04419655701385!3d13.04780781480728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e1!3m2!1sen!2sin!4v1733822282166!5m2!1sen!2sin`}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[250px] tablet:h-[300px] laptop:h-[350px] rounded-xl shadow-lg opacity-75 outline-none"
      />
    </div>
  );
};

export default GoogleMapsChennai;