import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const title = formData.get('title')
    const description = formData.get('description')
    const video = formData.get('video')
    const companyDoc = formData.get('companyDoc')

    // In a real application, you would:
    // 1. Validate the files
    // 2. Upload to cloud storage
    // 3. Store metadata in database
    // 4. Process video for AI scoring

    // For MVP, we'll just return a success response
    return NextResponse.json({
      success: true,
      message: 'Pitch uploaded successfully',
      data: {
        title,
        description,
        score: Math.floor(Math.random() * 40) + 60, // Random score between 60-100
      },
    })
  } catch (error) {
    console.error('Error uploading pitch:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to upload pitch' },
      { status: 500 }
    )
  }
} 