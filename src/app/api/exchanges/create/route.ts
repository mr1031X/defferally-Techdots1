import { getDataFromToken } from '@/src/helpers/decode-token';
import { ExchangeService } from '@/src/services/exchange';
import { DocumentType } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const exchangeService = new ExchangeService();

export async function POST(req: NextRequest) {
  try {
    await getDataFromToken(req);

    const { userId, type, parties, steps, pdfFiles } = await req.json();

    console.log(userId, type, parties, steps, pdfFiles);

    // Process base64-encoded PDF files
    const processedPdfFiles = await Promise.all(
      pdfFiles.map(async ({ type, file }: { type: DocumentType; file: string }) => {
        // Decode base64 to Buffer
        const buffer = Buffer.from(file, 'base64');
        return { type, file: buffer };
      })
    );

    console.log(processedPdfFiles);

    const data = await exchangeService.createExchange(
      userId,
      type,
      parties,
      steps,
      pdfFiles,
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
