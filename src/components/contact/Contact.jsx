import "./contact.scss";
import {useState} from "react";

export default function Contact() {

    const[message, setMessage] = useState(false);

    const handleSubmit = (e) =>{
       e.preventDefault();
       setMessage(true);

    }
    return (
        <div className="contact" id="contact">
            <div className="left">
               <img src="assets/contact.jpg" alt=""/>
            </div>
            <div className="right">
               <h2>Contact Us.</h2>
               <form onSubmit={handleSubmit}>
                   <input type="text" placeholder="Email"/>
                   <textarea placeholder="Message"></textarea>
                   <button type="submit">Send</button>
                   {message && <span>Thanks, We'll get back to u ASAP ! :)</span>}
               </form>
            </div>
            
        </div>
    )
}
