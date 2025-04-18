'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface Investment {
  startupName: string
  date: string
  amount: number
}

export default function InvestorDashboard() {
  const [kycFile, setKycFile] = useState<File | null>(null)
  const [investments] = useState<Investment[]>([
    { startupName: 'TechStart', date: '2024-03-15', amount: 50000 },
    { startupName: 'GreenEnergy', date: '2024-02-28', amount: 75000 },
  ])

  const handleKycUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setKycFile(e.target.files[0])
    }
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Investor Dashboard</h1>

      {/* KYC Upload Section */}
      <section className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-xl font-semibold mb-4">KYC Verification</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">PAN/Aadhaar</label>
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleKycUpload}
              className="mt-1 block w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90"
          >
            Submit KYC
          </button>
        </form>
      </section>

      {/* Investment History */}
      <section className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-xl font-semibold mb-4">Investment History</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Startup
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {investments.map((investment, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <td className="px-6 py-4 whitespace-nowrap">{investment.startupName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{investment.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">₹{investment.amount}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Available Pitches */}
      <section className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Available Pitches</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sample Pitch Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="border rounded-lg p-4"
          >
            <h3 className="font-semibold mb-2">AI Health Tech</h3>
            <p className="text-sm text-gray-600 mb-4">Revolutionary healthcare solution using AI</p>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Ask a question..."
                className="w-full px-3 py-2 border rounded-md"
              />
              <button className="w-full bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90">
                Invest Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 