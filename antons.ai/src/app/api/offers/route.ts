import { NextResponse } from 'next/server';
import type { Offer } from '../../admin/offers/offerTypes';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'; // Add pdf-lib to your dependencies

let offerCounter = 104; // This should be persisted in a DB in production

async function generateOfferPDF(offer: Offer): Promise<string> {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595, 842]); // A4 size
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const { offerNumber, clientName, totalPrice } = offer as any;
  page.drawText(`Offer Number: ${offerNumber}`, { x: 50, y: 800, size: 18, font, color: rgb(0, 0, 0) });
  page.drawText(`Client: ${clientName || ''}`, { x: 50, y: 770, size: 14, font });
  page.drawText(`Total Price: €${totalPrice || ''}`, { x: 50, y: 740, size: 14, font });
  // Add more fields as needed
  const pdfBytes = await pdfDoc.save();
  return Buffer.from(pdfBytes).toString('base64');
}

export async function POST(request: Request) {
  try {
    const offer: Offer = await request.json();
    // Generate next offer number
    const offerNumber = `A${offerCounter++}`;
    // Attach offer number to offer object
    const offerWithNumber = { ...offer, offerNumber };
    // Generate PDF
    const pdfBase64 = await generateOfferPDF(offerWithNumber);
    // TODO: Save offerWithNumber and PDF to database or process as needed
    return NextResponse.json({ success: true, offer: offerWithNumber, pdfBase64 });
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) }, { status: 400 });
  }
}
