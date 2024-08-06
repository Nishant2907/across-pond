// src/components/PerformanceExcellence.js
import React from "react";

const PerformanceExcellence = () => {
  return (
    <div className="bg-[#122a47] text-slate-100 p-10 flex flex-col justify-center mx-auto max-w-8xl">
      <div className="mx-8 py-16">
        <h2 className="text-2xl font-bold mb-4 text-left mt-4 ml-8">
          Barriers to achieving Performance Excellence
        </h2>
        <p className="mb-8 text-left mt-4 ml-8 text-lg font-light">
          The reality is that, finance teams are typically characterised as
          overburdened with manual data crunching and consequently inward
          looking with a rear view orientation. They lack the ability to engage
          and provide real time insights & collaboration.
        </p>
        <div className="overflow-x-auto mx-8">
          <table className="w-4/4 rounded-lg border border-white-light font-light ml-4">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left border-b text-lg fomt-semibold border-r border-white w-1/3">Activity</th>
                <th className="px-6 py-3 text-center border-b text-lg font-semibold border-r border-white w-1/3">Current Bandwidth Consumption</th>
                <th className="px-6 py-3 text-center border-b text-lg font-semibold border-white w-1/3">Ideal Bandwidth Allocation</th>
              </tr>
            </thead>
            <tbody>
              {[
                { activity: "Driving outcomes with Real-time insights & forecasts to engage stakeholders", current: 3, ideal: 16 },
                { activity: "Budgeting, Financial Performance Reporting & Analytics", current: 14, ideal: 5 },
                { activity: "Book close Procedures, Journal Entry, Financial Statements, Audit Schedules", current: 16, ideal: 7 },
                { activity: "Transactions Processing (AP, AR, T&E, Tax, etc)", current: 15, ideal: 7 },
              ].map((row, index) => (
                <tr key={index}>
                  <td className="border-t border-r border-white px-6 py-3 w-1/3 text-lg font-light p-0.5">{row.activity}</td>
                  <td className="border-t border-r border-white px-6 py-3 w-1/3">
                    <div className="flex flex-wrap justify-center items-center">
                      {Array(row.current).fill(0).map((_, i) => (
                        <span key={i} className="w-4 h-4 bg-white rounded-full mr-2 mb-4 inline-block"></span>
                      ))}
                    </div>
                  </td>
                  <td className="border-t border-white px-6 py-3 w-1/3">
                    <div className="flex flex-wrap justify-center items-center">
                      {Array(row.ideal).fill(0).map((_, i) => (
                        <span key={i} className="w-4 h-4 bg-white rounded-full mr-2 mb-4 inline-block"></span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-8 text-left text-lg font-light ml-10">
          This is because currently CFO downwards is required to focus on
          processing & controlling fragmented data manually.
        </p>
      </div>
      <div style={{ color: 'white', height: '100vh' }} className="p-8">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-8">
        <div className="flex flex-col items-center">
          <div className="w-48 h-48 bg-white text-black flex items-center justify-center text-bold rounded-full mb-2">
            <strong>Data Proliferation</strong>
          </div>
          <span className="lg:hidden">+</span>
        </div>
        <span className="hidden lg:block text-4xl">+</span>
        <div className="flex flex-col items-center">
          <div className="w-48 h-48 bg-white text-black flex items-center justify-center text-bold rounded-full mb-2" style={{ fontSize: '16px', fontWeight: 500 }}>
            <strong>Data Fragmentation</strong>
          </div>
          <span className="lg:hidden">+</span>
        </div>
        <span className="hidden lg:block text-4xl">+</span>
        <div className="flex flex-col items-center">
          <div className="w-48 h-48 bg-white text-black flex items-center justify-center text-bold rounded-full mb-2" style={{ fontSize: '16px', fontWeight: 500, textAlign: 'center' }}>
            <strong>Rule based work executed manually through excel</strong>
          </div>
          <span className="lg:hidden">=</span>
        </div>
        <span className="hidden lg:block text-4xl">=</span>
        <div className="flex flex-col items-center">
          <div className="w-48 h-48 bg-white text-black flex items-center justify-center text-bold rounded-full mb-2" style={{ fontSize: '16px', fontWeight: 500, textAlign: 'center' }}>
            <strong>Poor Finance Outcomes</strong>
          </div>
        </div>
      </div>
      <div>
        <p className="mb-4 ml-8 font-weight-600 leading-relaxed text-[#c6c4c4]">
          <strong className="font-semibold text-[#f5f1f1]">Data Proliferation:</strong> Every company is becoming a data company, with data being generated in a ceaselessly expanding array of forms and locations. As per McKinsey the amount of data in the world is anticipated to reach 175 zettabytes (175 billion terabytes) by 2025, an annual growth rate of approximately 66 percent over 2018 levels.
        </p>
        <p className="mb-4 ml-8 text-m font-weight-600 leading-relaxed text-[#d9d7d7]">
          <strong className="font-semibold text-[#f5f1f1]">Data Fragmentation:</strong> While the world has become increasingly digital, it has led to bulk of the finance bandwidth being consumed in plumbing of disaggregated data using MS Excel. Fragmentation of data is an outcome of:
        </p>
        <ul className="list-disc list-inside mb-4 leading-relaxed text-[#c6c4c4]">
          <li className="mb-2 ml-14 text-[#e9e4e4]">
            <strong className="font-semibold text-[#f5f1f1]">Multiple Data Sources:</strong> Today enterprise data resides in multiple systems, both within the organisation (HRMS, Inventory, ERP, etc) and outside such as Marketplaces, Payment Gateways, Social Media, etc.
          </li>
          <li className="mb-2 ml-14 text-[#e9e4e4]">
            <strong className="font-semibold text-[#f5f1f1]">Unstructured Data:</strong> A substantial part of the data still is unstructured (invoices, delivery challans, contracts, e-mail confirmations, etc).
          </li>
          <li className="mb-2 ml-14 text-[#f5f1f1]">
            <strong className="font-semibold text-[#e9e4e4]">Broken processes & conversations:</strong> Processes are executed using e-mails, phone conversations, what'sapp, etc, creating fragmentation.
          </li>
        </ul>
        <p className="mb-4 ml-8 font-weight-200 text-m">
          <strong className="font-semibold text-[#f5f1f1]">Rule Based Work executed Manually-MS Excel Proliferation :</strong> Due to fragementation of data, every activity is inevitably preceeded by manual aggregation of data using excel. This eleminates any opportunity to standardise, automate and embed algorithms, leading to poor quality of execution, high turn around times, inability to be front end focused, creating poor outcomes.
        </p>
      </div>
    </div>
    </div>
  );
};

export default PerformanceExcellence;