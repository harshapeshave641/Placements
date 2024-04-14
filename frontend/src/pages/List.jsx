import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PermanentDrawer from '../Components/Admin_Dashboard';

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);
  const token=sessionStorage.getItem('jwtToken')
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/companies',{
          headers:{
            Authorization:`Bearer ${token}`
          }
        });
        setCompanies(response.data);
      } catch (error) {
        console.error('Error fetching companies:', error);
      }
    };

    fetchCompanies();
  }, []);

  return (
    <>
      <PermanentDrawer />
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto px-4 py-8 ml-64">
          <h1 className="text-3xl font-bold mb-8 text-center">List of Companies</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {companies.map(company => (
              <div key={company["_id"]} className="bg-white rounded-md shadow-md p-4 md:p-6 lg:p-8 ml-4">
                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">{company["companyName"]}</h2>
                <p className="text-gray-600 mb-2">Drive mode: {company["drive"]}</p>
                <Link
                  to={`/single/${company["_id"]}`}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full inline-block focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  View
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyList;
