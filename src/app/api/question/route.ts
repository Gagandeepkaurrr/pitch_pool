export const dynamic = 'force-dynamic'

import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { pitchId, question, investorId } = body

    // In a real application, you would:
    // 1. Validate the question
    // 2. Store in database
    // 3. Notify innovator
    // 4. Track question status

    // For MVP, we'll just return a success response
    return NextResponse.json({
      success: true,
      message: 'Question submitted successfully',
      data: {
        questionId: Math.random().toString(36).substring(7),
        pitchId,
        question,
        investorId,
        status: 'pending',
        date: new Date().toISOString(),
      },
    })
  } catch (error) {
    console.error('Error submitting question:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to submit question' },
      { status: 500 }
    )
  }
} 