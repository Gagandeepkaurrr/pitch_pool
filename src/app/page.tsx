'use client'

import Link from 'next/link'
import { ClientMotion } from '@/components/ClientMotion'

const features = [
  {
    title: 'AI Scoring',
    description: 'Get instant AI-powered feedback on your startup ideas',
    icon: '🤖',
  },
  {
    title: 'Secure Uploads',
    description: 'Safe and encrypted pitch video uploads',
    icon: '🔒',
  },
  {
    title: 'Verified Funding',
    description: 'Connect with pre-verified investors',
    icon: '✅',
  },
  {
    title: 'Micro-Investment',
    description: 'Start small with milestone-based payouts',
    icon: '💰',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <ClientMotion
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-6">Welcome to PitchPool</h1>
          <p className="text-xl mb-8">Connect with innovative startups and investors</p>
          <div className="flex justify-center gap-4">
            <Link href="/dashboard/investor" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold">
              Investor Dashboard
            </Link>
            <Link href="/dashboard/innovator" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold">
              Innovator Dashboard
            </Link>
          </div>
        </ClientMotion>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <ClientMotion
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <h2 className="text-2xl font-bold mb-4">For Investors</h2>
            <p className="text-gray-300">Discover promising startups and make informed investment decisions.</p>
          </ClientMotion>

          <ClientMotion
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <h2 className="text-2xl font-bold mb-4">For Innovators</h2>
            <p className="text-gray-300">Showcase your ideas and connect with potential investors.</p>
          </ClientMotion>

          <ClientMotion
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <h2 className="text-2xl font-bold mb-4">Secure Platform</h2>
            <p className="text-gray-300">Built with security and trust in mind for all transactions.</p>
          </ClientMotion>
        </div>
      </div>
    </main>
  )
} 