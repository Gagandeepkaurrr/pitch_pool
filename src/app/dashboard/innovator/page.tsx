'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface Pitch {
  title: string
  description: string
  score: number
  date: string
}

export default function InnovatorDashboard() {
  const [pitchVideo, setPitchVideo] = useState<File | null>(null)
  const [companyDoc, setCompanyDoc] = useState<File | null>(null)
  const [pitches] = useState<Pitch[]>([
    {
      title: 'AI Health Tech',
      description: 'Revolutionary healthcare solution using AI',
      score: 85,
      date: '2024-03-15',
    },
    {
      title: 'Green Energy Solutions',
      description: 'Sustainable energy management platform',
      score: 92,
      date: '2024-03-10',
    },
  ])

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPitchVideo(e.target.files[0])
    }
  }

  const handleCompanyDocUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCompanyDoc(e.target.files[0])
    }
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Innovator Dashboard</h1>

      {/* Upload Pitch Form */}
      <section className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-xl font-semibold mb-4">Upload New Pitch</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Pitch Title</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Pitch Description</label>
            <textarea
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              rows={4}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Pitch Video</label>
            <input
              type="file"
              accept="video/*"
              onChange={handleVideoUpload}
              className="mt-1 block w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Company Registration Document</label>
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleCompanyDocUpload}
              className="mt-1 block w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90"
          >
            Submit Pitch
          </button>
        </form>
      </section>

      {/* Scored Pitches */}
      <section className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Your Pitches</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Score
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {pitches.map((pitch, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <td className="px-6 py-4 whitespace-nowrap">{pitch.title}</td>
                  <td className="px-6 py-4">{pitch.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded-full text-sm ${
                      pitch.score >= 90 ? 'bg-green-100 text-green-800' :
                      pitch.score >= 80 ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {pitch.score}%
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{pitch.date}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
} 