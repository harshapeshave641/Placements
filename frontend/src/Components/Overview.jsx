import React from 'react'

export default function Overview() {
  return (
    <>
        <section name='#overview' className="w-full py-12 md:py-24 lg:py-32 mt-[-10%]">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Overview</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-500">By the Numbers</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Let's take a look at our placement statistics. We take pride in connecting our students with the best
                  career opportunities.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="310"
                src="/img/graph.png"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-lg font-bold text-blue-500">Placements</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        100% of our students are placed in top companies.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-lg font-bold text-blue-500">Average Package</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Our students receive an average package of $100,000 per annum.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-lg font-bold text-blue-500">Top Recruiters</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Google, Microsoft, Amazon, Apple, and more.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}
