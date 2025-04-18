import { NextResponse } from 'next/server'

// Mock data for available pitches
const mockPitches = [
  {
    id: '1',
    title: 'AI Health Tech',
    description: 'Revolutionary healthcare solution using AI',
    innovatorName: 'Dr. Sarah Chen',
    score: 92,
    date: '2024-03-15',
  },
  {
    id: '2',
    title: 'Green Energy Solutions',
    description: 'Sustainable energy management platform',
    innovatorName: 'Raj Patel',
    score: 88,
    date: '2024-03-14',
  },
  {
    id: '3',
    title: 'EdTech Platform',
    description: 'Personalized learning experience using AI',
    innovatorName: 'Priya Sharma',
    score: 85,
    date: '2024-03-13',
  },
]

export async function GET() {
  try {
    // In a real application, you would:
    // 1. Fetch from database
    // 2. Apply filters/pagination
    // 3. Check user permissions
    // 4. Cache results

    // For MVP, we'll return mock data
    return NextResponse.json({
      success: true,
      data: mockPitches,
    })
  } catch (error) {
    console.error('Error fetching pitches:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to fetch pitches' },
      { status: 500 }
    )
  }
} 