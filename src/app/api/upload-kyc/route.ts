export const dynamic = 'force-dynamic'

import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const name = formData.get('name')
    const document = formData.get('document')

    // In a real application, you would:
    // 1. Validate the document
    // 2. Upload to secure storage
    // 3. Store metadata in database
    // 4. Trigger verification process

    // For MVP, we'll just return a success response
    return NextResponse.json({
      success: true,
      message: 'KYC document uploaded successfully',
      data: {
        name,
        status: 'pending_verification',
      },
    })
  } catch (error) {
    console.error('Error uploading KYC:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to upload KYC document' },
      { status: 500 }
    )
  }
} 