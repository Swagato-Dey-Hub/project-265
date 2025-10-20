import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <div className="h-full w-3/6 flex flex-col items-center">
        <div className="h- mt-4 flex flex-col items-center justify-center gap-5">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="text-2xl font-semibold mb-3">
            Have questions or feedback? Reach out to us!
          </p>
        </div>

        <div className="h- w-[65%] flex justify-center items-center my-12">
          <form className="w-[70%] flex flex-col gap-8">
            <label className="flex justify-around">
              Name:
              <input name="name" required className="outline-1"/>
            </label>
            <label className="flex justify-around">
              Email:
              <input type="email" name="email" required className="outline-1"/>
            </label>
            <label className="flex justify-around it">
              Message:
              <input name="message" required className="h-28 outline-1"/>
            </label>
            <button type="submit" className="h-10 rounded-sm bg-blue-600">Send Message</button>
            {status && <p className="status-message">{status}</p>}
          </form>
        </div>

        <div className="h- flex flex-col items-center justify-center gap-5">
          <ul className="flex flex-col gap-5">
            <li>
              Email: <Link href="mailto:you@example.com">you@example.com</Link>
            </li>
            <li>
              GitHub:{" "}
              <Link href="https://github.com/yourusername">
                github.com/yourusername
              </Link>
            </li>
            <li>
              LinkedIn:{" "}
              <Link href="https://linkedin.com/in/yourprofile">
                linkedin.com/in/yourprofile
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Contact;

// import React, { useState } from 'react';
// import './ContactPage.css'; // Optional: styling

// function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const [status, setStatus] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // 👉 Replace this with EmailJS, Formspree, or your own backend logic
//     try {
//       // For demo: simulate form submit
//       console.log('Form submitted:', formData);
//       setStatus('Message sent successfully!');
//       setFormData({ name: '', email: '', message: '' });
//     } catch (error) {
//       console.error('Error:', error);
//       setStatus('Something went wrong. Please try again.');
//     }
//   };

//   return (
//     <div className="contact-page">
//       <h1>Contact Us</h1>
//       <p>Have questions or feedback? We'd love to hear from you.</p>

//       <form onSubmit={handleSubmit} className="contact-form">
//         <label>
//           Name:
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </label>

//         <label>
//           Email:
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </label>

//         <label>
//           Message:
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//           />
//         </label>

//         <button type="submit">Send Message</button>
//         {status && <p className="status-message">{status}</p>}
//       </form>

//       <div className="contact-info">
//         <h3>Direct Contact Info</h3>
//         <ul>
//           <li>📧 Email: <a href="mailto:you@example.com">you@example.com</a></li>
//           <li>🐙 GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">github.com/yourusername</a></li>
//           <li>💼 LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a></li>
//           {/* Optional:
//           <li>📍 Location: City, Country</li> */}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default ContactPage;
