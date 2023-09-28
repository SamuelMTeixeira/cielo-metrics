import { NextResponse } from 'next/server'
import data from '@/data/transactions.json'

export async function GET() {
  return NextResponse.json(data, { status: 200 })
}
