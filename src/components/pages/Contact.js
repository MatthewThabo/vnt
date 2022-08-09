import React from "react";
import "./Contact.css";
import Footer from "./Footer";

const Contact = () => {
    return (
       <section className="contact">
           <div className="content">
               <h2>Contact Us</h2>
               <p>For more information, prease get in touch with us</p>
               <p>Fill out the form below and a dedicated client manager with get in touch</p>
           </div>
           <div className="container1">
               <div className="ContactInfo">
                   <div className="box">
                       <div className="icon">
                           <i className="fa-solid fa-location-dot"></i>
                       </div>
                       <div className="text">
                           <h3>Address</h3>
                           <p>6897 Lakeside EXT2,</p>
                           <p>Mafatsane Free State Street</p>
                           <p>Orange Farm,</p>
                           <p>1948</p>
                       </div>
                   </div>
                   <div className="box">
                       <div className="icon">
                            <i className="fas fa-phone"></i>
                       </div>
                       <div className="text">
                           <h3>Phone</h3>
                           <p>078 434 0821</p>
                           <p>079 732 5028</p>
                           <p>079 468 7173</p>
                       </div>
                   </div>
                   <div className="box">
                       <div className="icon">
                            <i className="fas fa-envelope"></i>
                       </div>
                       <div className="text">
                           <h3>Email</h3>
                           <p>vusilehloho@hotmail.co.za</p>
                       </div>
                   </div>
               </div>
               <div className="contactForm">
                   <form>
                       <h2>Send Message</h2>
                       <div className="inputBox">
                           <input type="text" name="" required="required" />
                           <span>Full Name</span>
                       </div>
                       <div className="inputBox">
                           <input type="text" name="" required="required" />
                           <span>Email</span>
                       </div>
                       <div className="inputBox">
                           <textarea required="required"></textarea>
                           <span>Type your message...</span>
                       </div>
                       <div className="inputBox">
                          <input type="submit" name="" value="Send"></input>
                       </div>
                   </form>
               </div>
           </div>
            <Footer />
       </section>
    );
};

export default Contact;