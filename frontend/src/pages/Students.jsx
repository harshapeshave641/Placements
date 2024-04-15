import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const StudentListPage = () => {
  const [studentList, setStudentList] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/studs')
      .then(response => {
        setStudentList(response.data.Students);
      })
      .catch(error => {
        console.error('Error fetching student data:', error);
      });
  }, []);

  return (
    
    <div className="container mx-auto p-4">
        <Link to="/companies" className="text-sm bg-black hover:bg-blue-600 text-white font-semibold py-1 px-4 mr-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500">
  Back
</Link>
      <h1 className="text-3xl font-bold mb-8">Applied students</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {studentList.map((misId, index) => (
          <li key={index} className="bg-gray-300 rounded-lg p-4 shadow-md flex flex-col justify-between">
            <p className="text-lg font-semibold">{misId}</p>
            <div className="flex justify-between mt-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-2">
                View Profile
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
                View Resume
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentListPage;
