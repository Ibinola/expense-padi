import React from 'react';
import CustomInput from '../../components/CustomInput';
import { Form, Formik } from 'formik';
import LabelDescription from '../../components/LabelDescription';
import CustomDropdown from '../../components/CustomDropdown';
import { useUser } from '../../context/UserContext';
import { showToast } from '../../utils/toast-config';

function Settings() {
  const { user } = useUser();

  const initialValues = {
    firstName: user?.firstName,
    lastName: user?.lastName,
    country: '',
    city: '',
  };

  const onSubmit = (values, { resetForm }) => {
    showToast.success('Details saved!');
    resetForm();
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
          <h2 className="font-zendots text-black mb-2 text-xl lg:text-2xl">
            Expense <span className="text-[#0557C2]">Padi</span>
          </h2>

          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ isSubmitting }) => (
              <Form className="flex flex-col max-w-xl space-y-3">
                <CustomInput
                  name="firstName"
                  type="text"
                  label="First Name"
                  placeholder="Enter first name"
                />
                <CustomInput
                  name="lastName"
                  type="text"
                  label="Last Name"
                  placeholder="Enter last name"
                />
                <CustomDropdown
                  label="Select Country"
                  name="country"
                  options={[
                    { value: 'nigeria', label: 'Nigeria' },
                    { value: 'ghana', label: 'Ghana' },
                    { value: 'kenya', label: 'Kenya' },
                    { value: 'southafrica', label: 'South Africa' },
                    { value: 'egypt', label: 'Egypt' },
                    { value: 'brazil', label: 'Brazil' },
                    { value: 'germany', label: 'Germany' },
                    { value: 'canada', label: 'Canada' },
                    { value: 'japan', label: 'Japan' },
                    { value: 'india', label: 'India' },
                  ]}
                />
                <CustomDropdown
                  label="Select City"
                  name="city"
                  options={[
                    { value: 'lagos', label: 'Lagos' },
                    { value: 'accra', label: 'Accra' },
                    { value: 'nairobi', label: 'Nairobi' },
                    { value: 'cape_town', label: 'Cape Town' },
                    { value: 'cairo', label: 'Cairo' },
                    { value: 'new_york', label: 'New York' },
                    { value: 'sao_paulo', label: 'São Paulo' },
                    { value: 'berlin', label: 'Berlin' },
                    { value: 'toronto', label: 'Toronto' },
                    { value: 'tokyo', label: 'Tokyo' },
                  ]}
                />

                <button
                  type="submit"
                  className=" py-1 px-1 md:py-2 border w-36 text-sm rounded-md cursor-pointer bg-[#0553C7] text-white"
                >
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
      <div role="tabpanel" className="tab-content mt-4">
        <div className="border rounded-xl p-6 space-y-4">
          <LabelDescription
            label="Push Notifications"
            description="Receive real-time alerts directly on your device about important updates and activities."
            true={true}
          />
          <hr />
          <LabelDescription
            label="Email Notification"
            description="Stay informed with email updates for account activity, promotions, and more."
            true={true}
          />
          <hr />
          <LabelDescription
            label="SMS Notification"
            description="Get instant text messages about critical updates and actions taken on your account."
            true={true}
          />

          <button className="py-1 px-1 md:py-2 border w-36 text-sm rounded-md cursor-pointer bg-[#0553C7] text-white">
            Save Changes
          </button>
        </div>
      </div>

      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab"
        aria-label="Security"
      />
      <div role="tabpanel" className="tab-content mt-4">
        <div className="border rounded-xl p-6 space-y-4">
          <LabelDescription
            label="Security"
            description="Ensure the safety of your account by reviewing and updating your security settings."
            true={false}
          />
          <LabelDescription
            label="Enable Two-Factor Authentication"
            description="Add an extra layer of security by requiring a code in addition to your password when logging in."
            true={true}
          />
          <hr />
          <LabelDescription
            label="Enable SSO Login or Sign Up"
            description="Allow users to sign in using a single set of credentials via Single Sign-On (SSO) for a seamless experience."
            true={true}
          />
        </div>
      </div>
    </div>
  );
}

export default Settings;
