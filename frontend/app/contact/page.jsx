import React from 'react';
import Footer from '../../components/layout/footer';
const Page = () => {
  
  return (

    <>
      <>
        {/* Contact Us */}
        <div className="lg:py-18 mx-auto max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-800 sm:text-4xl dark:text-white">
                Contact us
              </h1>
              <p className="mt-1 text-gray-600 dark:text-neutral-400">
                We'd love to talk about how we can help you.
              </p>
            </div>
          </div>
          <>
            {/* Contact */}
            <div className="mx-auto max-w-7xl px-4  lg:px-8 lg:py-14">
              <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
                <div className="aspect-w-16 aspect-h-6 lg:aspect-h-14 overflow-hidden rounded-2xl bg-gray-100 dark:bg-neutral-800">
                  <img
                    className="rounded-2xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-focus:scale-105"
                    src="/contact-image.jpg"
                    alt="Contacts Image"
                  />
                </div>
                {/* End Col */}
                <div className="space-y-8 lg:space-y-16">
                  <div>
                    <h4 className="mb-5 font-semibold text-black dark:text-white">Our address</h4>
                    {/* Grid */}
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 md:gap-8 lg:gap-12">
                      <div className="flex gap-4">
                        <svg
                          className="size-5 shrink-0 text-gray-500 dark:text-neutral-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                          <circle cx={12} cy={10} r={3} />
                        </svg>
                        <div className="grow">
                          <p className="text-sm text-gray-600 dark:text-neutral-400">
                            Uttar Pradesh, India
                          </p>
                          <address className="mt-1 not-italic text-black dark:text-white">
                            D-606,The Woods
                            <br />
                            Lucknow, 226028
                          </address>
                        </div>
                      </div>
                    </div>
                    {/* End Grid */}
                  </div>
                  <div>
                    <h4 className="mb-5 font-semibold text-black dark:text-white">Our contacts</h4>
                    {/* Grid */}
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 md:gap-8 lg:gap-12">
                      <div className="flex gap-4">
                        <svg
                          className="size-5 shrink-0 text-gray-500 dark:text-neutral-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                          <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                        </svg>
                        <div className="grow">
                          <p className="text-sm text-gray-600 dark:text-neutral-400">Email us</p>
                          <p>
                            <a
                              className="relative inline-block font-medium text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:h-1 before:w-full before:bg-lime-400 hover:before:bg-black focus:outline-none focus:before:bg-black dark:text-white dark:hover:before:bg-white dark:focus:before:bg-white"
                              href="mailto:info@kloset.com"
                            >
                              info@kloset.com
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <svg
                          className="size-5 shrink-0 text-gray-500 dark:text-neutral-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        <div className="grow">
                          <p className="text-sm text-gray-600 dark:text-neutral-400">Call us</p>
                          <p>
                            <a
                              className="relative inline-block font-medium text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:h-1 before:w-full before:bg-lime-400 hover:before:bg-black focus:outline-none focus:before:bg-black dark:text-white dark:hover:before:bg-white dark:focus:before:bg-white"
                              href="tel:+919555815223"
                            >
                              +91 9555815223
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* End Grid */}
                  </div>
                </div>
                {/* End Col */}
              </div>
            </div>
            {/* End Contact */}
          </>

          <div className="mt-4 grid items-center gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {/* Icon Block */}
            <a
              className="group flex h-full flex-col rounded-lg p-4 text-center hover:bg-gray-100 focus:bg-gray-100 focus:outline-none sm:p-6 dark:hover:bg-neutral-500/10 dark:focus:bg-neutral-500/10"
              href="mailto:info@kloset.com"
            >
              <svg
                className="mx-auto size-9 text-gray-800 dark:text-neutral-200"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx={12} cy={12} r={10} />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
              <div className="mt-5">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                  Knowledgebase
                </h3>
                <p className="mt-1 text-gray-500 dark:text-neutral-500">
                  We're here to help with any questions or code.
                </p>
                <p className="mt-5 inline-flex items-center gap-x-1 font-medium text-blue-600 dark:text-blue-500">
                  Contact support
                  <svg
                    className="size-4 shrink-0 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </p>
              </div>
            </a>
            {/* End Icon Block */}
            {/* Icon Block */}
            <a
              className="group flex h-full flex-col rounded-lg p-4 text-center hover:bg-gray-100 focus:bg-gray-100 focus:outline-none sm:p-6 dark:hover:bg-neutral-500/10 dark:focus:bg-neutral-500/10"
              href="#FAQ"
            >
              <svg
                className="mx-auto size-9 text-gray-800 dark:text-neutral-200"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
              </svg>
              <div className="mt-5">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">FAQ</h3>
                <p className="mt-1 text-gray-500 dark:text-neutral-500">
                  Search our FAQ for answers to anything you might ask.
                </p>
                <p className="mt-5 inline-flex items-center gap-x-1 font-medium text-blue-600 dark:text-blue-500">
                  View FAQ
                  <svg
                    className="size-4 shrink-0 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </p>
              </div>
            </a>
            {/* End Icon Block */}
            {/* Icon Block */}
            <a
              className="group flex h-full flex-col rounded-lg p-4 text-center hover:bg-gray-100 focus:bg-gray-100 focus:outline-none sm:p-6 dark:hover:bg-neutral-500/10 dark:focus:bg-neutral-500/10"
              href="https://github.com/ShadKhan0/new-kloset/tree/main" target='_blank'
            >
              <svg
                className="mx-auto size-9 text-gray-800 dark:text-neutral-200"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m7 11 2-2-2-2" />
                <path d="M11 13h4" />
                <rect width={18} height={18} x={3} y={3} rx={2} ry={2} />
              </svg>
              <div className="mt-5">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                  Developer Code
                </h3>
                <p className="mt-1 text-gray-500 dark:text-neutral-500">
                  Check out our development quickstart guide.
                </p>
                <p className="mt-5 inline-flex items-center gap-x-1 font-medium text-blue-600 dark:text-blue-500">
                  View Repository
                  <svg
                    className="size-4 shrink-0 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </p>
              </div>
            </a>
            {/* End Icon Block */}
          </div>
          <>
            {/* FAQ */}
            <div id="FAQ" className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
              {/* Grid */}
              <div className="grid gap-10 md:grid-cols-5">
                <div className="md:col-span-2">
                  <div className="max-w-xs">
                    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
                      Frequently
                      <br />
                      asked questions
                    </h2>
                    <p className="mt-1 hidden text-gray-600 md:block dark:text-neutral-400">
                      Answers to the most frequently asked questions.
                    </p>
                  </div>
                </div>
                {/* End Col */}
                <div className="md:col-span-3">
                  {/* Accordion */}
                  <div className="hs-accordion-group divide-y divide-gray-200 dark:divide-neutral-700">
                    <div
                      className="hs-accordion active pb-3"
                      id="hs-basic-with-title-and-arrow-stretched-heading-one"
                    >
                      <button
                        className="hs-accordion-toggle group inline-flex w-full items-center justify-between gap-x-3 rounded-lg pb-3 text-start font-semibold text-gray-800 transition hover:text-gray-500 focus:text-gray-500 focus:outline-none md:text-lg dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                        aria-expanded="true"
                        aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
                      >
                        Can I cancel at anytime?
                        <svg
                          className="block size-5 shrink-0 text-gray-600 group-hover:text-gray-500 hs-accordion-active:hidden dark:text-neutral-400"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                        <svg
                          className="hidden size-5 shrink-0 text-gray-600 group-hover:text-gray-500 hs-accordion-active:block dark:text-neutral-400"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m18 15-6-6-6 6" />
                        </svg>
                      </button>
                      <div
                        id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                        className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                        role="region"
                        aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
                      >
                        <p className="text-gray-600 dark:text-neutral-400">
                          Yes, you can cancel anytime no questions are asked while you cancel but we
                          would highly appreciate if you will give us some feedback.
                        </p>
                      </div>
                    </div>
                    <div
                      className="hs-accordion pb-3 pt-6"
                      id="hs-basic-with-title-and-arrow-stretched-heading-two"
                    >
                      <button
                        className="hs-accordion-toggle group inline-flex w-full items-center justify-between gap-x-3 rounded-lg pb-3 text-start font-semibold text-gray-800 transition hover:text-gray-500 focus:text-gray-500 focus:outline-none md:text-lg dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                        aria-expanded="false"
                        aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
                      >
                        What types of clothing does Kloset offer?{' '}
                        <svg
                          className="block size-5 shrink-0 text-gray-600 group-hover:text-gray-500 hs-accordion-active:hidden dark:text-neutral-400"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                        <svg
                          className="hidden size-5 shrink-0 text-gray-600 group-hover:text-gray-500 hs-accordion-active:block dark:text-neutral-400"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m18 15-6-6-6 6" />
                        </svg>
                      </button>
                      <div
                        id="hs-basic-with-title-and-arrow-stretched-collapse-two"
                        className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                        role="region"
                        aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
                      >
                        <p className="text-gray-600 dark:text-neutral-400">
                          Kloset provides a wide range of trendy and comfortable apparel, including
                          casual wear, formal attire, activewear, and seasonal collections for men,
                          women, and children.
                        </p>
                      </div>
                    </div>
                    <div
                      className="hs-accordion pb-3 pt-6"
                      id="hs-basic-with-title-and-arrow-stretched-heading-three"
                    >
                      <button
                        className="hs-accordion-toggle group inline-flex w-full items-center justify-between gap-x-3 rounded-lg pb-3 text-start font-semibold text-gray-800 transition hover:text-gray-500 focus:text-gray-500 focus:outline-none md:text-lg dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                        aria-expanded="false"
                        aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three"
                      >
                        What sizes are available in Kloset's collection?{' '}
                        <svg
                          className="block size-5 shrink-0 text-gray-600 group-hover:text-gray-500 hs-accordion-active:hidden dark:text-neutral-400"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                        <svg
                          className="hidden size-5 shrink-0 text-gray-600 group-hover:text-gray-500 hs-accordion-active:block dark:text-neutral-400"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m18 15-6-6-6 6" />
                        </svg>
                      </button>
                      <div
                        id="hs-basic-with-title-and-arrow-stretched-collapse-three"
                        className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                        role="region"
                        aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three"
                      >
                        <p className="text-gray-600 dark:text-neutral-400">
                          We cater to all body types with sizes ranging from XS to XXL. For specific
                          measurements, please refer to our size chart on each product page.
                        </p>
                      </div>
                    </div>
                    <div
                      className="hs-accordion pb-3 pt-6"
                      id="hs-basic-with-title-and-arrow-stretched-heading-four"
                    >
                      <button
                        className="hs-accordion-toggle group inline-flex w-full items-center justify-between gap-x-3 rounded-lg pb-3 text-start font-semibold text-gray-800 transition hover:text-gray-500 focus:text-gray-500 focus:outline-none md:text-lg dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                        aria-expanded="false"
                        aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four"
                      >
Are Kloset's products sustainable?                        <svg
                          className="block size-5 shrink-0 text-gray-600 group-hover:text-gray-500 hs-accordion-active:hidden dark:text-neutral-400"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                        <svg
                          className="hidden size-5 shrink-0 text-gray-600 group-hover:text-gray-500 hs-accordion-active:block dark:text-neutral-400"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m18 15-6-6-6 6" />
                        </svg>
                      </button>
                      <div
                        id="hs-basic-with-title-and-arrow-stretched-collapse-four"
                        className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                        role="region"
                        aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four"
                      >
                        <p className="text-gray-600 dark:text-neutral-400">
                        Yes, sustainability is important to us. We use eco-friendly materials and ethical practices in the production of our collections.
                        </p>
                      </div>
                    </div>
                    <div
                      className="hs-accordion pb-3 pt-6"
                      id="hs-basic-with-title-and-arrow-stretched-heading-five"
                    >
                      <button
                        className="hs-accordion-toggle group inline-flex w-full items-center justify-between gap-x-3 rounded-lg pb-3 text-start font-semibold text-gray-800 transition hover:text-gray-500 focus:text-gray-500 focus:outline-none md:text-lg dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                        aria-expanded="false"
                        aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five"
                      >
How can I track my Kloset order?                        <svg
                          className="block size-5 shrink-0 text-gray-600 group-hover:text-gray-500 hs-accordion-active:hidden dark:text-neutral-400"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                        <svg
                          className="hidden size-5 shrink-0 text-gray-600 group-hover:text-gray-500 hs-accordion-active:block dark:text-neutral-400"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m18 15-6-6-6 6" />
                        </svg>
                      </button>
                      <div
                        id="hs-basic-with-title-and-arrow-stretched-collapse-five"
                        className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                        role="region"
                        aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five"
                      >
                        <p className="text-gray-600 dark:text-neutral-400">
                        Once your order is shipped, you will receive a tracking link via email or SMS to monitor its progress.
                        </p>
                      </div>
                    </div>
                    <div
                      className="hs-accordion pb-3 pt-6"
                      id="hs-basic-with-title-and-arrow-stretched-heading-six"
                    >
                      <button
                        className="hs-accordion-toggle group inline-flex w-full items-center justify-between gap-x-3 rounded-lg pb-3 text-start font-semibold text-gray-800 transition hover:text-gray-500 focus:text-gray-500 focus:outline-none md:text-lg dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                        aria-expanded="false"
                        aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six"
                      >
                        Does Kloset offer discounts or promotions?
                        <svg
                          className="block size-5 shrink-0 text-gray-600 group-hover:text-gray-500 hs-accordion-active:hidden dark:text-neutral-400"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                        <svg
                          className="hidden size-5 shrink-0 text-gray-600 group-hover:text-gray-500 hs-accordion-active:block dark:text-neutral-400"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m18 15-6-6-6 6" />
                        </svg>
                      </button>
                      <div
                        id="hs-basic-with-title-and-arrow-stretched-collapse-six"
                        className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                        role="region"
                        aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six"
                      >
                        <p className="text-gray-600 dark:text-neutral-400">
                        We frequently run exclusive discounts and promotions. Subscribe to our newsletter or follow us on social media to stay updated on special deals.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* End Accordion */}
                </div>
                {/* End Col */}
              </div>
              {/* End Grid */}
            </div>
            {/* End FAQ */}
          </>
        </div>
        {/* End Contact Us */}
        <Footer />
      </>
    </>
  );
};

export default Page;
