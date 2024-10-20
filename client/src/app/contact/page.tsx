"use client";
{
  /****************************************************************
                 CONTACT PAGE - PATH: src/app/contact/page.tsx
   ***************************************************************/
}

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Form validation schema
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string().required("Message is required"),
});

function ContactPage() {
  const initialValues = { name: "", email: "", message: "" };

  const handleSubmit = (values: any) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <div>
      {/****************************************************************
                          RENDER CONTACT FORM SECTION
        ***************************************************************/}
      <section className="min-h-screen bg-brand-cream px-8 py-16">
        <h1 className="text-5xl font-bold text-brand-charcoal mb-8 text-center">
          Contact Us
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="max-w-xl mx-auto bg-brand-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="name" className="block text-brand-charcoal mb-2">
                Name
              </label>
              <Field
                id="name"
                name="name"
                type="text"
                className="w-full p-2 border border-brand-charcoal rounded-lg"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-brand-charcoal mb-2">
                Email
              </label>
              <Field
                id="email"
                name="email"
                type="email"
                className="w-full p-2 border border-brand-charcoal rounded-lg"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-brand-charcoal mb-2"
              >
                Message
              </label>
              <Field
                as="textarea"
                id="message"
                name="message"
                className="w-full p-2 border border-brand-charcoal rounded-lg"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-brand-mocha text-brand-white p-2 rounded-lg font-bold"
            >
              Submit
            </button>
          </Form>
        </Formik>
      </section>
    </div>
  );
}

export default ContactPage;
