import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // const handleSendMessage = async (e) => {
  //   e.preventDefault();
  //   await axios
  //     .post(
  //       "http://localhost:4000/api/v1/message/send",
  //       {
  //         name,
  //         email,
  //         subject,
  //         message,
  //       },
  //       {
  //         withCredentials: true,
  //         headers: { "Content-Type": "application/json" },
  //       }
  //     )
  //     .then((res) => {
  //       toast.success(res.data.message);
  //       setName("");
  //       setEmail("");
  //       setMessage("");
  //       setSubject("");
  //     })
  //     .catch((error) => {
  //       toast.error(error.response.data.message);
  //     });
  // };

  const handleSendMessage =  async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/v1/message/send",
        { name, email, subject, message })
        .then((res) => 
          toast.success(res.data.message));
          setName("");
          setEmail("");
          setMessage("");
          setSubject("");
         
    } catch (error) {
      // console.log(error);
      toast.error(error.response.data.message)
    }
   

    // try {
    //   const response = await axios.post(
    //     "http://localhost:4000/api/v1/message/send",
    //     { name, email, subject, message },
    //     {
    //       withCredentials: true,
    //       headers: { "Content-Type": "application/json" },
    //     }
    //   );
    //   ;
    //   setName("");
    //   setEmail("");
    //   setSubject("");
    //   setMessage("");
    // } catch (error) {
    //   if (error.response) {
    //     // The request was made and the server responded with a status code
    //     // that falls out of the range of 2xx
    //     console.log(error.response.data);
    //     console.log(error.response.status);
    //     console.log(error.response.headers);
    //     toast.error(error.response.data.message);
    //   } else if (error.request) {
    //     // The request was made but no response was received
    //     console.log(error.request);
    //     toast.error("No response received from server.");
    //   } else {
    //     // Something happened in setting up the request that triggered an Error
    //     console.log("Error", error.message);
    //     toast.error("Failed to send message. Please try again.");
    //   }
    // }
  };
  
  return (
    <>
      <div className="contact container">
        <div className="banner">
          <div className="item">
            <h4>Address</h4>
            <p>Any where, Any City, 123456</p>
          </div>
          <div className="item">
            <h4>Call Us</h4>
            <p>Call Us: +91-991-1111111</p>
          </div>
          <div className="item">
            <h4>Mail Us</h4>
            <p>abhiraj@gmail.com</p>
          </div>
        </div>
        <div className="banner">
          <div className="item">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117223.77996815203!2d85.32132625000001!3d23.343204800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e104aa5db7dd%3A0xdc09d49d6899f43e!2sRanchi%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1720144180502!5m2!1sen!2sin"
              style={{ border: 0, width: "100%", height: "450px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="item">
            <form onSubmit={handleSendMessage}>
              <h2>CONTACT</h2>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <textarea
                rows={10}
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;






// import React, { useState } from "react";
// import axios from "axios";
// import toast from "react-hot-toast";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         "http://localhost:4000/api/v1/message/send",
//         formData,
//         {
//           withCredentials: true,
//           headers: { "Content-Type": "application/json" },
//         }
//       );

//       toast.success(response.data.message);
//       setFormData({
//         name: "",
//         email: "",
//         subject: "",
//         message: "",
//       });
//     } catch (error) {
//       console.error("Error sending message:", error);
//       if (error.response && error.response.data && error.response.data.message) {
//         toast.error(error.response.data.message);
//       } else {
//         toast.error("Failed to send message. Please try again.");
//       }
//     }
//   };

  // return (
  //   <>
  //     <div className="contact container">
  //       <div className="banner">
  //         <div className="item">
  //           <h4>Address</h4>
  //           <p>Any where, Any City, 123456</p>
  //         </div>
  //         <div className="item">
  //           <h4>Call Us</h4>
  //           <p>Call Us: +91-991-1111111</p>
  //         </div>
  //         <div className="item">
  //           <h4>Mail Us</h4>
  //           <p>abhiraj@gmail.com</p>
  //         </div>
  //       </div>
  //       <div className="banner">
  //         <div className="item">
  //           <iframe
  //             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117223.77996815203!2d85.32132625000001!3d23.343204800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e104aa5db7dd%3A0xdc09d49d6899f43e!2sRanchi%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1720144180502!5m2!1sen!2sin"
  //             style={{ border: 0, width: "100%", height: "450px" }}
  //             allowFullScreen=""
  //             loading="lazy"
  //             referrerPolicy="no-referrer-when-downgrade"
  //           />
  //         </div>
//         <div className="item">
//           <form onSubmit={handleSubmit}>
//             <h2>CONTACT</h2>
//             <div>
//               <input
//                 type="text"
//                 placeholder="Name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//               <input
//                 type="email"
//                 placeholder="E-mail"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <input
//               type="text"
//               placeholder="Subject"
//               name="subject"
//               value={formData.subject}
//               onChange={handleChange}
//               required
//             />
//             <textarea
//               rows={10}
//               placeholder="Message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               required
//             />
//             <button type="submit">Send</button>
//           </form>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default Contact;


