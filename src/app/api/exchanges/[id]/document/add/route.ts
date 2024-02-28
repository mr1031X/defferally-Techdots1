import { getDataFromToken } from '@/src/helpers/decode-token';
import { ExchangeService } from '@/src/services/exchange';
import { DocumentType } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const exchangeService = new ExchangeService();

export async function POST(req: NextRequest) {
  try {
    const userId = await getDataFromToken(req);

    const match = req.url.match(/\/exchanges\/(\d+)/);
    const exchangeId = match ? parseInt(match[1]) : 0;

    const { type, file: base64File } = await req.json();

    if (!base64File) {
      return NextResponse.json(
        { error: 'No file received.' },
        { status: 400 },
      );
    }

    // Decode base64 to Buffer
    const buffer = Buffer.from(base64File, 'base64');

    const data = await exchangeService.addDocumentToExchange(
      exchangeId,
      { type, file: buffer },
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
