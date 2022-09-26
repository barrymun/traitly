import React from "react";
import BasePage from "components/BasePage";
import axios from "axios";
import Alert from "components/Alert";
import {useNavigate} from "react-router-dom";

const SUBMIT_ENDPOINT = 'https://api.peoplewise.io/callbacks/request-demo';

export default function DemoForm() {

  let navigate = useNavigate();

  const [values, setValues] = React.useState({
    // page state
    isVisibleErr: false,
    isVisibleSuccess: false,
    // form
    name: '',
    work_email: '',
    company_name: '',
    phone_number: '',
    help_text: '',
  });

  const handleChange = name => event => {
    setValues({...values, [name]: event.target.value});
  };

  const delay = (s) => {
    return new Promise(res => setTimeout(res, (s * 1000)));
  };

  const submit = async (e) => {
    e.preventDefault();

    let params = {};
    let headers = {};
    let config = {
      withCredentials: true,
      params,
      headers,
    };
    let data = {
      name: values.name,
      work_email: values.work_email,
      company_name: values.company_name,
      phone_number: values.phone_number,
      help_text: values.help_text,
    };
    let completed = false;
    try {
      await axios.post(SUBMIT_ENDPOINT, data, config);
      completed = true;
    } catch (e) {
    }

    if (!completed) {
      // err msg
      setValues({...values, isVisibleErr: true});
    } else {
      // success msg + redirect
      setValues({...values, isVisibleSuccess: true});
      await delay(2);
      navigate('/');
    }

  };

  return (<>

    {/* imports */}
    <Alert
      isVisible={values.isVisibleErr}
      isFixed={true}
      hideFn={() => setValues({...values, isVisibleErr: false})}
    />

    <BasePage>

      <main className="lg:relative bg-gradient-to-b from-blue-50 to-white">

        {!values.isVisibleSuccess
          ? <>

            {/* welcome */}
            <section className="mx-auto max-w-7xl w-full pt-16 text-center">

              <div className="px-4 lg:mx-6 sm:px-4">

                <div className="flex flex-col justify-center">

                  <h1
                    className="max-w-md mx-auto text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl text-indigo-600">
                    Request a demo
                  </h1>

                  <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                    We’d love to learn more about your Talent team, your hiring plans, and existing workflows!
                  </p>

                </div>

              </div>

            </section>


            {/* form */}
            <section className="mx-auto max-w-7xl w-full pt-16 text-center lg:text-left">

              <div className="px-4 lg:mx-6 sm:px-4">

                <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 bg-white shadow-md rounded-md pb-4">

                  <div className="relative py-2">

                    <div className="lg:px-8">

                      <div className="mx-auto mt-6 lg:flex lg:items-center">

                        <div className="grow w-full">
                          <div className="p-16">
                            <p className="text-xl tracking-tight font-bold text-gray-900 text-base">
                              With Traitly, you can (to name a few):
                            </p>
                            <ul className="mt-4 space-y-4 list-disc ml-6">
                              <li className="">
                                <p className="text-base text-gray-500">
                                  Automatically source top-tier talent
                                </p>
                              </li>
                              <li>
                                <p className="text-base text-gray-500">
                                  Seamlessly add candidate prospects from other platforms to
                                  Traitly using our Chrome extension
                                </p>
                              </li>
                              <li>
                                <p className="text-base text-gray-500">
                                  Establish personal connections with prospective candidates using
                                  deeply personalized outreach, and automated follow-up messages
                                </p>
                              </li>
                              <li>
                                <p className="text-base text-gray-500">
                                  Automatically track every candidate interaction
                                </p>
                              </li>
                              <li>
                                <p className="text-base text-gray-500">
                                  Discover optimal candidate contact information
                                </p>
                              </li>
                              <li>
                                <p className="text-base text-gray-500">
                                  Understand local and global talent pools,
                                  and devise data-driven sourcing strategies
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="grow w-full">
                          <form onSubmit={submit} className="grid gap-y-6 w-full">
                          <div className="sm:col-span-2">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                              Name
                            </label>
                            <div className="mt-1">
                              <input
                                autoFocus
                                required
                                type="text"
                                name="name"
                                id="name"
                                autoComplete="name"
                                className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                value={values.name}
                                onChange={handleChange('name')}
                              />
                            </div>
                          </div>
                          <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                              Work email
                            </label>
                            <div className="mt-1">
                              <input
                                required
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                value={values.work_email}
                                onChange={handleChange('work_email')}
                              />
                            </div>
                          </div>
                          <div className="sm:col-span-2">
                            <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                              Company
                            </label>
                            <div className="mt-1">
                              <input
                                required
                                type="text"
                                name="company"
                                id="company"
                                autoComplete="organization"
                                className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                value={values.company_name}
                                onChange={handleChange('company_name')}
                              />
                            </div>
                          </div>
                          <div className="sm:col-span-2">
                            <div className="flex justify-between">
                              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                Phone
                              </label>
                              <span id="phone-description" className="text-sm text-gray-500">Optional</span>
                            </div>
                            <div className="mt-1">
                              <input
                                type="text"
                                name="phone"
                                id="phone"
                                autoComplete="tel"
                                aria-describedby="phone-description"
                                className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                value={values.phone_number}
                                onChange={handleChange('phone_number')}
                              />
                            </div>
                          </div>
                          <div className="sm:col-span-2">
                            <div className="flex justify-between">
                              <label htmlFor="how-can-we-help" className="block text-sm font-medium text-gray-700">
                                How can we help you?
                              </label>
                              <span id="how-can-we-help-description"
                                    className="text-sm text-gray-500">Max. 500 characters</span>
                            </div>
                            <div className="mt-1">
                          <textarea
                            id="how-can-we-help"
                            name="how-can-we-help"
                            aria-describedby="how-can-we-help-description"
                            rows={4}
                            className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                            value={values.help_text}
                            onChange={handleChange('help_text')}
                          />
                            </div>
                          </div>
                          <div className="text-right sm:col-span-2">
                            <button
                              type="submit"
                              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              Request a demo
                            </button>
                          </div>
                        </form>
                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </section>


            {/* aesthetic spacing */}
            <section className="pb-20"/>

          </>
          : <>

            {/* success msg */}
            <section className="mx-auto max-w-7xl w-full pt-16 text-center">

              <div className="px-4 lg:mx-6 sm:px-4">

                <div className="mx-44 my-20">
                  <div className="shadow-md rounded-md bg-green-50 p-4">
                    <div className="">
                      <h3 className="mx-auto text-xl font-medium text-green-800">
                        Thank you for requesting a demo! We'll be in touch shortly.
                      </h3>
                    </div>
                  </div>
                </div>

              </div>

            </section>

          </>
        }

      </main>

    </BasePage>

  </>);
};