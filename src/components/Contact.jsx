import React from "react";
import Input from "./Input";
import Button from "./Button";

const Contact = () => {
  return (
    <div className="flex flex-col gap-10 bg-blue-300 items-center">
      <iframe
        className="w-screen h-96"
        src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d55326.00296924563!2d78.05584556999032!3d29.925495272838912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m3!3m2!1d29.9243427!2d78.08511659999999!4m0!5e0!3m2!1sen!2sin!4v1668321024094!5m2!1sen!2sin"
        width=""
        height=""
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="p-10 bg-purple-600">
        <form>
          <Input
            id="username"
            name="username"
            type="username"
            autoComplete="username"
            placeholder="username"
            required
          />

          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="email address"
            required
          />
          <Input placeholder="please type your message" />

          <div className="flex gap-5">
            <Button>Submit</Button>
            <Button theme="secondary">Cancel</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
