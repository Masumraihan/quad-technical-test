/* eslint-disable react/prop-types */
import { Dialog, Transition } from '@headlessui/react';
import { Field, Form, Formik } from 'formik';
import { Fragment } from 'react';
import * as Yup from 'yup';

const ProductValidationSchema = Yup.object().shape({
  Name: Yup.string("Enter your product name").required(),
  Price: Yup.string().min(1, "Price should be minimum one").required(),
  ImageUrl: Yup.string().url("Please enter a valid url").required(),
  isPopular: Yup.boolean(),
  isRecommended: Yup.boolean()
})

const FormModal = ({ isOpen, setIsOpen }) => {


  function closeModal() {
    setIsOpen(false)
  }
  const initialValues = {
    Name: null,
    Price: null,
    ImageUrl: null,
    isPopular: false,
    isRecommended: false
  }

  const handleSubmit = (values) => {
    console.log(values);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white px-6 py-10 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-medium leading-6 text-gray-900"
                  >
                    Add Your Product
                  </Dialog.Title>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={ProductValidationSchema}
                    onSubmit={handleSubmit}
                  >
                    {
                      ({ errors, touched }) => {
                        return <Form className='mt-6 grid grid-cols-2 gap-7'>
                          <div>
                            <label htmlFor="Name" className='space-y-1'>
                              <span>Name</span>
                              <Field type="text" name="Name" id="Name" placeholder='Name' className="px-4 py-1.5 md:py-2 w-full rounded-md focus:outline-none ring-1 ring-primary focus:ring-2 placeholder:text-sm" />
                              {errors?.Name && touched?.Name ? (
                                <span className='text-red-600'>{errors?.Name}</span>
                              ) : null}
                            </label>
                          </div>
                          <div>
                            <label htmlFor="Price" className='space-y-1'>
                              <span>Price</span>
                              <Field type="number" name="Price" id="Price" min={1} placeholder='Price' className="px-4 py-1.5 md:py-2 w-full rounded-md focus:outline-none ring-1 ring-primary focus:ring-2 placeholder:text-sm" />
                              {errors.Price && touched.Price ? (
                                <span className='text-red-600'>{errors.Price}</span>
                              ) : null}
                            </label>
                          </div>
                          <div className='col-span-full'>
                            <label htmlFor="ImageUrl" className='space-y-1'>
                              <span>Image Url</span>
                              <Field type="url" name="ImageUrl" id="ImageUrl" min={1} placeholder='Image Url' className="px-4 py-1.5 md:py-2 w-full rounded-md focus:outline-none ring-1 ring-primary focus:ring-2 placeholder:text-sm" />
                              {errors?.ImageUrl && touched?.ImageUrl ? (
                                <span className='text-red-600'>{errors?.ImageUrl}</span>
                              ) : null}
                            </label>
                          </div>
                          <div>
                            <label htmlFor="isPopular" className='flex items-center gap-2'>
                              <Field defaultChecked type="checkbox" name="isPopular" id="isPopular" />
                              <span>Popular</span>
                            </label>
                          </div>
                          <div>
                            <label htmlFor="isRecommended" className='flex items-center gap-2'>
                              <Field defaultChecked type="checkbox" name="isRecommended" id="isRecommended" />
                              <span>Recommended</span>
                            </label>
                          </div>
                          <button onClick={closeModal} className='bg-[#FFE7D4] text-black py-2 rounded-lg'>
                            Cancel
                          </button>
                          <button type='submit' className='bg-primary text-white py-2 rounded-lg'>
                            Add Product
                          </button>
                        </Form>
                      }
                    }
                  </Formik>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition >
    </>
  )
}
export default FormModal