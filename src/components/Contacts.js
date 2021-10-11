import React, {useState} from "react";
import emailjs from "emailjs-com";
import {useForm} from "react-hook-form";

const Contacts = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const {register, handleSubmit, formState:{errors}} = useForm();

    const serviceID = "service_ID";
    const templateID = "template_ID"; 
    const userID = "user_M850HyftjPwQZJx7A4PBW";
    
    const onSubmit = (data, r) =>{
        sendEmail(
            serviceID,
            templateID, 
            {
                name:data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description
            },
           userID 
        ) 
        r.target.reset();
    }
    
    const sendEmail = (serviceID, templateID, variables, userID) => {
        emailjs.send(serviceID, templateID, variables, userID )
          .then(() => {
            setSuccessMessage("Form sent successfully! I will contact you as soon as possible.");
          }).catch(err => console.error('Something went wrong ${err}'));
      };

    return (
        <div className="contacts">
            <div className="text-center">
               <h1 className="">Contact Me</h1> 
               <p>Please fill out this form and describe your project needs and i'll contact you as soon as possible</p>
               <span className="success-message">{successMessage}</span>
             </div>
             <div className="container">
                 <form onSubmit={handleSubmit(onSubmit)}>
                 <div className="row">
                     <div className="col-md-6 col-xs-12">
                         {/*Name input*/}
                         <div className="text-center">
                         <input 
                         type="text"
                         className="form-control"
                         placeholder="Name"
                         name="name"
                         aria-invalid={errors.name ? "true" : "false"}
                        {...register("name", {
                            required: "Please enter your name",
                            maxLength: {
                            value: 20,
                            message:
                                "Please enter a name with fewer than 20 characters",
                            },
                        })}
                        /* ref={
                             register({
                                 required: "Please Enter your name",
                                 maxLenth: {
                                     value:20,
                                     message: "please enter a name with fewer than 20 character"
                                 }
                             })
                         }
                        */ 
                         />
                         <div className="line"></div>
                         </div>
                         <span className="error-message">
                           {errors.name && errors.name.message}  
                         </span>
                         {/*Phone input*/}
                         <div className="text-center">
                         <input 
                         type="text"
                         className="form-control"
                         placeholder="Phone Number"
                         name="phone"
                         aria-invalid={errors.name ? "true" : "false"}
                        {...register("phone", {
                            required: "Please enter your valid phone number",
                        })}
                         />
                         <div className="line"></div>
                         </div>
                         <span className="error-message">
                           {errors.phone && errors.phone.message}  
                         </span>
                         {/*Email input*/}
                         <div className="text-center">
                         <input 
                         type="text"
                         className="form-control"
                         placeholder="Email"
                         name="email"
                         aria-invalid={errors.name ? "true" : "false"}
                        {...register("email", {
                            required: "Please provide your email.",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid Email" 
                            }
                        }
                        )}
                         />
                         <div className="line"></div>
                         </div>
                         <span className="error-message">
                           {errors.email && errors.email.message}  
                         </span>
                         {/*Subject input*/}
                         <div className="text-center">
                         <input 
                         type="text"
                         className="form-control"
                         placeholder="Subject"
                         name="subject"
                         aria-invalid={errors.name ? "true" : "false"}
                        {...register("subject", {
                            required: "OPPs you forgot to add the subject.",
                        })}
                         />
                         <div className="line"></div>
                         </div>
                         <span className="error-message">
                           {errors.subject && errors.subject.message}  
                         </span>
                            </div>
                         <div className="col-md-6 col-xs-12">
                         {/*Description*/}
                        
                         <div className="text-center">
                         <textarea    
                         type="text"
                         className="form-control"
                         placeholder="Please Describe shortly your project..."
                         name="description"
                         aria-invalid={errors.name ? "true" : "false"}
                        {...register("description", {
                            required: "OPPs you forgot to add the subject.",
                        })}
                        ></textarea> 
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                           {errors.description && errors.description.message}  
                         </span>
                        <button className="btn-main-offer contacts-btn" type="submit">Submit</button>
                     </div>
                 </div>
                 </form>
             </div>
        </div>
    )
}

export default Contacts
