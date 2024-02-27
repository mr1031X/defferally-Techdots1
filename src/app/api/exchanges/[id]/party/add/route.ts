import { getDataFromToken } from '@/src/helpers/decode-token';
import { ExchangeService } from '@/src/services/exchange';
import { NextRequest, NextResponse } from 'next/server';

const exchangeService = new ExchangeService();

export async function PUT(req: NextRequest) {
  try {
    const userId = await getDataFromToken(req);
    const exchangeId = parseInt(req.url.split('/')[2]);
    const newParty = await req.json();
    const data = await exchangeService.addPartyToExchange(exchangeId, newParty);

    const response = NextResponse.json({
      success: true,
      data,
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
