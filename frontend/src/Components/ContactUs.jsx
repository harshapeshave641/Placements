import React from 'react'
import { Card } from 'flowbite-react'
import { Button } from 'flowbite-react'


export default function ContactUs() {
  return (
    <>
    <section className="w-full py-12" name='#contactus'>
      <div className="container px-4 mx-auto space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-blue-500">Contact TNP</h2>
          <p className="text-gray-500 dark:text-gray-400">
            For any placement-related queries, feel free to reach out to the Training and Placement Office.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 md:gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-500">Training and Placement Office</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Training and Placement Office, Room No. 201, Academic Block
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              College of Engineering, example University, 1234 College Road, City, State, Zip, Country
            </p>
            <h3 className="text-xl font-semibold mt-4">Email</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">tnp@exampleuniversity.ac.in</p>
          </div>
          <Card className="flex flex-col items-center justify-center p-6">
            <img
              alt="TNP Coordinator"
              className="rounded-full"
              height="150"
              src="/img/tnphead.jpg"
              style={{
                aspectRatio: "150/150",
                objectFit: "cover",
              }}
              width="150"
            />
            <div className="border-t border-b w-full border-gray-100 dark:border-gray-800">
              {/* <CardContent className="justify-between">
                <div className="space-y-1">
                  <h4 className="text-lg font-semibold">TNP Coordinator</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Contact for any placement-related queries</p>
                </div>
                <Button size="sm" variant="outline">
                  Contact
                </Button>
              </CardContent> */}
               <div className="justify-between">
                <div className="space-y-1">
                    <h4 className="text-lg font-semibold">TNP Coordinator</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Contact for any placement-related queries</p>
                </div>
                <Button size="sm" variant="outline">
                    Contact
                </Button>
                </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
    </>
  )
}
