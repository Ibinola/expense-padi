import React from 'react';
import { PiNotePencil } from 'react-icons/pi';
import { useState } from 'react';
import { getImageForRule } from '../../utils/getImageForRule';
import { Modal } from '@mui/material';
import { Form, Formik } from 'formik';
import CustomDropdown from '../../components/CustomDropdown';
import trackingrulehero from '../../assets/tracking-rule-hero.svg';
import { IoEyeOutline } from 'react-icons/io5';
import { RiDeleteBinLine } from 'react-icons/ri';
import { trackingRulesValidationSchema } from '../../utils/validationSchema';
import CustomTextArea from '../../components/CustomTextArea';

function Configuration() {
  const [open, setOpen] = React.useState(false);
  const [rules, setRules] = useState([]);
  const [editingRule, setEditingRule] = useState(null);
  const initialValues = {
    typeOfTransaction: '',
    remarksTrails: '',
    remark: '',
  };

  const handleOpen = () => {
    setEditingRule(null);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const handleEditRule = (rule) => {
    setEditingRule(rule);
    setOpen(true);
  };

  const onSubmit = (values, { resetForm }) => {
    if (editingRule) {
      setRules(
        rules.map((rule) =>
          rule.id === editingRule.id ? { ...values, id: rule.id } : rule
        )
      );
    } else if (rules.length < 5) {
      setRules([...rules, { ...values, id: Date.now() }]);
    } else {
      alert('Maximum number of rules (5) reached');
      return;
    }
    resetForm();
    setOpen(false);
    setEditingRule(null);
  };

  const handleDeleteRule = (id) => {
    setRules(rules.filter((rule) => rule.id !== id));
  };

  return (
    <div className="flex flex-col p-4 md:p-2 lg:p-2 font-manrope space-y-4">
      <div className="flex justify-end">
        <button
          onClick={handleOpen}
          className="bg-[#0553C7] flex items-center gap-2 text-sm rounded-md py-2 px-4 mt-2 text-white"
        >
          <PiNotePencil />
          Set a rule
        </button>
      </div>

      {rules.length > 0 ? (
        <>
          <p className="text-center text-[#121212 ] font-bold text-xl">
            Tracking Rules
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[760px] w-full mx-auto">
            {rules.map((rule) => (
              <div
                key={rule.id}
                className="bg-white border border-[#E7E7E7] rounded-2xl shadow-lg p-4 flex items-center justify-between"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={getImageForRule(rule.remark)}
                    alt={rule.remark}
                    className="w-12 h-12 object-cover rounded-xl"
                  />
                  <div>
                    <h3 className="font-bold text-[#121212] text-xl">
                      {rule.remark}
                    </h3>
                    <p className="text-sm text-[#5D5D5D]">
                      {rule.remarksTrails}, GTB
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    className="text-gray-400 hover:text-gray-600 cursor-pointer "
                    onClick={() => handleEditRule(rule)}
                  >
                    <IoEyeOutline size={20} />
                  </button>
                  <button
                    className="text-gray-400 cursor-pointer hover:text-red-500"
                    onClick={() => handleDeleteRule(rule.id)}
                  >
                    <RiDeleteBinLine size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center space-y-4">
          <img
            src={trackingrulehero}
            alt="acct-image"
            className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
          />
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-center">
            No Transaction Tracking Rules Set
          </h3>
          <p className="text-center mx-auto w-full max-w-[90%] md:max-w-[450px] text-gray-600">
            Set up rules to automatically categorize and monitor your income and
            expenses across different accounts.
          </p>
          <button
            onClick={handleOpen}
            className="bg-[#0553C7] flex items-center gap-1 text-sm md:text-base rounded-md py-3 px-6 mt-2 text-white"
          >
            <PiNotePencil />
            Set a rule
          </button>
        </div>
      )}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          className="bg-white font-manrope rounded-3xl border mx-auto p-5 
                        w-[90%] max-w-[500px] md:max-w-[650px] 
                        h-auto max-h-[90vh] overflow-y-auto mt-10"
        >
          <div className="mx-auto items-center">
            <h2 className="text-[24px] md:text-[32px] font-bold text-center mb-4">
              Tracking Rules
            </h2>
            <p className="text-center mb-6">
              This helps to keep track of your spending with precision
            </p>

            <Formik
              initialValues={editingRule || initialValues}
              onSubmit={onSubmit}
              validationSchema={trackingRulesValidationSchema}
            >
              {({ isSubmitting }) => (
                <Form className="flex flex-col space-y-4">
                  <div>
                    <CustomDropdown
                      label="Type of transaction"
                      name="typeOfTransaction"
                      options={[
                        { value: 'Credit', label: 'Credit' },
                        { value: 'Debit', label: 'Debit' },
                      ]}
                    />
                  </div>
                  <div>
                    <CustomTextArea
                      name="remarksTrails"
                      type="text"
                      label="Remarks trails"
                      placeholder="Enter remarks"
                    />
                  </div>
                  <div>
                    <CustomDropdown
                      label="Remark"
                      name="remark"
                      options={[
                        { value: 'Transportation', label: 'Transportation' },
                        { value: 'Groceries', label: 'Groceries' },
                        { value: 'Medical', label: 'Medical' },
                        { value: 'Feeding', label: 'Feeding' },
                      ]}
                    />
                  </div>
                  <button
                    type="submit"
                    className="py-4 mt-6 text-sm rounded-md cursor-pointer 
                               bg-[#0553C7] text-white"
                  >
                    {editingRule ? 'Edit Rule' : 'Make Setting'}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Configuration;
