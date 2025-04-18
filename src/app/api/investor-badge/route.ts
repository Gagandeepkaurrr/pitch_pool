import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const investorId = searchParams.get('investorId')

    if (!investorId) {
      return NextResponse.json(
        { success: false, message: 'Investor ID is required' },
        { status: 400 }
      )
    }

    // In a real application, you would:
    // 1. Fetch investor's investment count from database
    // 2. Check investment criteria
    // 3. Calculate badge status

    // For MVP, we'll return mock data
    const mockInvestmentCount = Math.floor(Math.random() * 10) // Random number between 0-9
    const hasGoldBadge = mockInvestmentCount >= 6

    return NextResponse.json({
      success: true,
      data: {
        investorId,
        investmentCount: mockInvestmentCount,
        hasGoldBadge,
        badge: hasGoldBadge ? 'Gold Investor' : null,
      },
    })
  } catch (error) {
    console.error('Error checking investor badge:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to check investor badge' },
      { status: 500 }
    )
  }
} 