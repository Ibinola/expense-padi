import React from 'react';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import { Form, Formik } from 'formik';

function Settings() {
  const initialValues = {
    firstName: '',
    lastName: '',
    country: '',
    city: '',
  };

  const onSubmit = (values) => {
    console.log('form data', values);
  };

  return (
    <div role="tablist" className="tabs tabs-bordered font-manrope">
      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab"
        aria-label="Profile"
        defaultChecked
      />
      <div role="tabpanel" className="tab-content mt-4">
        <div className="border rounded-xl p-6">
          <h2 className="font-zendots text-black mb-8 text-xl lg:text-2xl">
            Expense <span className="text-[#0557C2]">Padi</span>
          </h2>

          <Formik
            initialValues={initialValues}
            // validationSchema={signUpValidationSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col max-w-xl space-y-3">
                <CustomInput
                  name="firstName"
                  type="text"
                  label="First Name"
                  placeholder=""
                />
                <CustomInput
                  name="lastName"
                  type="text"
                  label="Last Name"
                  placeholder="Enter password"
                />
                <CustomInput
                  name="country"
                  type="text"
                  label="Country"
                  placeholder="Select Country"
                />
                <CustomInput
                  name="city"
                  type="text"
                  label="City"
                  placeholder="Select City"
                />

                {/* <CustomButton type="submit" label="Save Changes" /> */}
                <button className=" py-1 px-1 md:py-2 border w-36 text-sm rounded-md cursor-pointer bg-[#0553C7] text-white">
                  Save Changes
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab"
        aria-label="Notification"
      />
      <div role="tabpanel" className="tab-content p-10">
        Tab content 2
      </div>

      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab"
        aria-label="Tab 3"
      />
      <div role="tabpanel" className="tab-content p-10">
        Tab content 3
      </div>
    </div>
  );
}

export default Settings;
