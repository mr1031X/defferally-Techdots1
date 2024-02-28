import { getDataFromToken } from '@/src/helpers/decode-token';
import { EditParty } from '@/src/interfaces/request/exchange';
import { ExchangeService } from '@/src/services/exchange';
import { NextRequest, NextResponse } from 'next/server';

const exchangeService = new ExchangeService();

export async function PUT(req: NextRequest) {
  try {
    const userId = await getDataFromToken(req);
    const match = req.url.match(/\/exchanges\/(\d+)/);

    const exchangeId = match ? parseInt(match[1]) : 0;

    const reqPayload: EditParty = await req.json();

    const data = await exchangeService.editPartyOfExchange(
      exchangeId,
      reqPayload,
    );

    const response = NextResponse.json({
      success: true,
      data,
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
