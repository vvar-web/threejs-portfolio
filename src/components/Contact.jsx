import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Check if name is empty
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Check if email is empty or doesn't contain @
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!form.email.includes("@")) {
      newErrors.email = "Please enter a valid email address";
    }

    // Check if message is empty
    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form before submitting
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_ha4qxab",  // Service ID
        "template_a5be9wo", // Template ID
        {
          from_name: form.name,
          to_name: "Varun",
          from_email: form.email,
          to_email: "vvarun7893@gmail.com",
          message: form.message,
        },
        "KvLffnXVU2CwQHvJr" // Public Key
      )
      .then(
        () => {
          setLoading(false);
          setShowThankYou(true);

          // Send dataLayer event for enhanced conversions
          if (window.dataLayer) {
            window.dataLayer.push({
              event: 'contact_form_submit',
              user_data: {
                email_address: form.email,
                first_name: form.name.split(' ')[0], // Extract first name
                last_name: form.name.split(' ').slice(1).join(' ') || undefined // Extract last name if available
              },
              custom_parameters: {
                form_type: 'contact',
                message_length: form.message.length
              }
            });
          }

          setForm({
            name: "",
            email: "",
            message: "",
          });

          // Clear any errors
          setErrors({});

          // Hide thank you message after 5 seconds
          setTimeout(() => {
            setShowThankYou(false);
          }, 5000);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        {showThankYou && (
          <div className='mt-8 p-4 bg-green-500/20 border border-green-500/50 rounded-lg'>
            <p className='text-green-400 font-medium text-center'>
              Thank you! I will get back to you as soon as possible. 🎉
            </p>
          </div>
        )}

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ${
                errors.name ? 'border-2 border-red-500' : ''
              }`}
            />
            {errors.name && (
              <span className='text-red-500 text-sm mt-2'>{errors.name}</span>
            )}
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ${
                errors.email ? 'border-2 border-red-500' : ''
              }`}
            />
            {errors.email && (
              <span className='text-red-500 text-sm mt-2'>{errors.email}</span>
            )}
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ${
                errors.message ? 'border-2 border-red-500' : ''
              }`}
            />
            {errors.message && (
              <span className='text-red-500 text-sm mt-2'>{errors.message}</span>
            )}
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");