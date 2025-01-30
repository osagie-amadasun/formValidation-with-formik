import React from "react";
import {useFormik} from "formik";
import * as Yup from "yup";

const initialValues = {
    name: "",
    email: "",
    channel: "",
};
const onSubmit = (values) => {
    console.log(values);
};
const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required...Bro think's he's nameless king"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    channel: Yup.string().required("Channel is required"),
});

const YoutubeForm = () => {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
    });
    
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
              {...formik.getFieldProps("name")}
            />
            {formik.touched.name && formik.errors.name && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
            )}
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
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
            )}
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
              {...formik.getFieldProps("channel")}
            />
            {formik.touched.channel && formik.errors.channel && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.channel}</div>
            )}
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
