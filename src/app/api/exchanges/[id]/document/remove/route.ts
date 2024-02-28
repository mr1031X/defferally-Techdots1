import { getDataFromToken } from '@/src/helpers/decode-token';
import { RemoveDocument } from '@/src/interfaces/request/exchange';
import { ExchangeService } from '@/src/services/exchange';
import { NextRequest, NextResponse } from 'next/server';

const exchangeService = new ExchangeService();

export async function DELETE(req: NextRequest) {
  try {
    const userId = await getDataFromToken(req);
    
    const match = req.url.match(/\/exchanges\/(\d+)/);
    const exchangeId = match ? parseInt(match[1]) : 0;

    const reqPayload: RemoveDocument = await req.json();

    const { documentId } = reqPayload;

    const data = await exchangeService.removeDocumentFromExchange(
      exchangeId,
      documentId,
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
