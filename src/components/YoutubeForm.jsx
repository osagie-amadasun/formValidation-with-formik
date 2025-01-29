import React from "react";
import {useFormik} from "formik";

const YoutubeForm = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            channel: "",
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validate: (values) => {
            let errors = {};
            if (!values.name) {
                errors.name = "Name is required";
            }
            if (!values.email) {
                errors.email = "Email is required";
            } else if (!/\S+@\S+\.\S+/.test(values.email)) {
                errors.email = "Invalid email address";
            }
            if (!values.channel) {
                errors.channel = "Channel is required";
            }
            return errors;
            },
    });

    // console.log("Formik values: ", formik.values);
    
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-200">
        <form onSubmit={formik.handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Basic Form</h2>

          {/* Name Field */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your name"
              required
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your email"
              required
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>

          {/* Channel Field */}
          <div className="mb-6">
            <label
              htmlFor="channel"
              className="block text-sm font-medium text-gray-700"
            >
              Channel
            </label>
            <input
              type="text"
              id="channel"
              name="channel"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your channel"
              required
              onChange={formik.handleChange}
              value={formik.values.channel}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default YoutubeForm;
