import React from "react";

const Map2 = () => {
  return (
    <div className="flex justify-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31736.742053643713!2d106.61827875432525!3d-6.2567350295170066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb9b84c3c21f%3A0x404f6392c443340!2sUniversitas%20Multimedia%20Nusantara!5e0!3m2!1sen!2sid!4v1736237549882!5m2!1sen!2sid"
        width="600"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Embedded Map"
      ></iframe>
    </div>
  );
};

export default Map2;
