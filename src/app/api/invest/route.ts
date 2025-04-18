export const dynamic = 'force-dynamic'

import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { pitchId, amount, investorId } = body

    // In a real application, you would:
    // 1. Validate the investment amount
    // 2. Check investor's KYC status
    // 3. Process payment
    // 4. Store investment record
    // 5. Update pitch status

    // For MVP, we'll just return a success response
    return NextResponse.json({
      success: true,
      message: 'Investment processed successfully',
      data: {
        investmentId: Math.random().toString(36).substring(7),
        pitchId,
        amount,
        investorId,
        status: 'completed',
        date: new Date().toISOString(),
      },
    })
  } catch (error) {
    console.error('Error processing investment:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to process investment' },
      { status: 500 }
    )
  }
} 