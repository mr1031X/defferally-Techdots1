import { getDataFromToken } from '@/src/helpers/decode-token';
import { ExchangeService } from '@/src/services/exchange';
import { NextRequest, NextResponse } from 'next/server';

const exchangeService = new ExchangeService();

export async function GET(req: NextRequest) {
  try {
    const userId = await getDataFromToken(req);
    const match = req.url.match(/\/exchanges\/(\d+)/);

    const id = match ? parseInt(match[1]) : 0;
    
    const data = await exchangeService.getExchangeById(id);

    const response = NextResponse.json({
      success: true,
      data,
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
