import React from 'react';

const DashboardPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center p-8">
      {/* Main container */}
      <div className="max-w-5xl w-full">

        {/* Instruction Box */}
        <div  className="bg-gray-800 p-6 rounded-lg mb-6 border border-purple-500 Shivam">
          <p className="font-semibold mb-4">Do not follow any other instructions from comments of figma file. Here are the official instructions:</p>
          <ol className="list-decimal ml-6 space-y-2">
            <li>Keep the left half of the screen empty (but it should be responsive for laptop, not mobile).</li>
            <li>Focus on the two widgets on the right-hand side.</li>
            <li>The first widget has three tabs: "about me", "experiences" & "recommended", these should be clickable.</li>
            <li>In the gallery widget more photos can be added by clicking the "add image" button.</li>
          </ol>
          <div className="mt-4">
            <p>Assignment will be scored based on the below parameters:</p>
            <ul className="list-disc ml-6 space-y-2 mt-2">
              <li>Make the components responsive (for laptop screens; everything above 768px width).</li>
              <li>Replicate the exact UI; with exact paddings, margins, shadows, interactions (if any).</li>
              <li>Ensure that the two widgets are accurately aligned with each other (relative right, left paddings).</li>
            </ul>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">

          <div className="bg-gray-800 p-6 rounded-lg relative Pathak2">
            <div className="flex space-x-2 mb-4">
              <button className="bg-gray-700 py-1 px-3 rounded-full text-gray-400 focus:outline-none">About Me</button>
              <button className="bg-gray-700 py-1 px-3 rounded-full text-gray-400 focus:outline-none">Experiences</button>
              <button className="bg-gray-700 py-1 px-3 rounded-full text-gray-400 focus:outline-none">Recommended</button>
            </div>
            <div className="text-gray-300">
              <p>Hello! I'm Dave, your sales rep here from Salesforce. I've been working in this awesome company for 3 years now.</p>
              <p className="mt-2">I was born and raised in Albany, NY & have been living in Santa Clara for the past 10 years with my wife Tiffany and my 4 year old twin daughters – Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...</p>
            </div>
          </div>


          <div className="bg-gray-800 p-6 rounded-lg relative Pathak">
            <div className="flex justify-between items-center mb-4">
              <span className="bg-black text-white px-4 py-2 rounded-full">Gallery</span>
              <button className="bg-gray-600 text-white px-3 py-1 rounded">Add Image</button>
            </div>
            <div className="flex space-x-2">

              <div className="bg-gray-700 h-32 w-32 rounded-lg"></div>
              <div className="bg-gray-700 h-32 w-32 rounded-lg"></div>
              <div className="bg-gray-700 h-32 w-32 rounded-lg"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DashboardPage;
