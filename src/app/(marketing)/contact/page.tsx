"use client";
import Input from "@/components/ui/Input";
import NotificationModal from "@/components/sections/NotificationModal";
import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [notification, setNotification] = useState({
    open: false,
    type: "success" as "success" | "error",
    message: "",
  });

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setNotification({
          open: true,
          type: "success",
          message: "Registration submitted successfully!",
        });
        // Optionally reset form fields here
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setNotification({
          open: true,
          type: "error",
          message: "Failed to submit registration. Please try again.",
        });
      }
    } catch (error) {
      setNotification({
        open: true,
        type: "error",
        message: "An error occurred. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <section
      id="contact"
      className="p-4 bg-gradient-to-b from-golden-20 to-golden-40 min-h-fit md:px-6 "
    >
      <div className="max-w-7xl mx-auto mt-24 ">
        {/* Notification Modal */}
        <NotificationModal
          open={notification.open}
          onClose={() => setNotification({ ...notification, open: false })}
          type={notification.type}
          message={notification.message}
        />
        <h1 className="font-playfair font-black text-center uppercase text-deepteal-100 text-4xl pb-8 md:text-[64px] md:leading-[72px]">
          Contact Us
        </h1>

        {/* Contact Info */}
        <div className="bg-gray-100 p-6 shadow-md ">
          <p className="mb-2">
            <strong>Email:</strong> bsbtravels25@gmail.com,
            info@bsbtravelconcepts.com
          </p>
          <p className="mb-2">
            <strong>Phone:</strong> +234 810 273 8145; +234 803 242 9497
          </p>
          <p className="mb-2">
            <strong>Address:</strong> 7, Adepate Abebi Crescent, Off Idi-Ishin
            Police Station, Jericho, Ibadan, Oyo State, Nigeria
          </p>
          <p>
            <strong>Hours:</strong> Mon – Fri, 8:00 AM – 5:00 PM; Sat 10:00 AM -
            2:00 PM
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSend} className="flex flex-col my-8 ">
          <Input
            id="name"
            label="Name"
            type="text"
            placeholder="Enter Your Name"
            required={true}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex flex-row bg-golden-60 text-linen-10"
            labelClassName="px-4 py-4 bg-golden-100 text-linen-10 uppercase font-bold "
            inputClassName="outline-none px-4 py-4 w-full"
          />
          <Input
            id="email"
            label="Email"
            type="email"
            placeholder="Enter Email"
            required={true}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex flex-row bg-golden-60 text-linen-10 mt-2"
            labelClassName="px-4 py-4 bg-golden-100 text-linen-10 uppercase font-bold "
            inputClassName="outline-none px-4 py-4 w-full"
          />
          <div className="flex flex-col bg-golden-60 text-linen-10 mt-2">
            <label
              htmlFor="message"
              className="px-4 py-4 bg-golden-100 text-linen-10 uppercase font-bold "
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              rows={5}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="outline-none px-4 py-4 w-full"
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-2 px-5 py-3 font-baskervvilleSC font-bold bg-deepteal-100 text-golden-10 text-2xl leading-7 -tracking-tight hover:bg-[#91671D] hover:text-deepteal-100 transition "
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Map Section */}
        <div className="w-full mt-8 shadow-md">
          <iframe
            title="ON-LINE DYNAMICS LTD"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.509923935671!2d3.853411874789852!3d7.408674812244937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398d7c35883ced%3A0xbce37c5bf7c9c0a5!2sON-LINE%20DYNAMICS%20LTD!5e0!3m2!1sen!2sng!4v1760533472117!5m2!1sen!2sng"
            width="600"
            height="450"
            className=" w-full  "
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
