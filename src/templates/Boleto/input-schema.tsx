import { z } from "zod";

export const inputSchema = z.object({
  barcodeData: z.string(),
  scannerBarcode: z.string(),
  qrCodeData: z.string(),
  paymentPlace: z.string(),
  beneficiary: z.string(),
  beneficiaryAddress: z.string(),
  instructions: z.string(),
  agency: z.string(),
  agencyDigit: z.string(),
  account: z.string(),
  accountDigit: z.string(),
  expirationDay: z.date(),
  documentDate: z.date(),
  processingDate: z.date(),
  card: z.string(),
  documentNumber: z.string(),
  formattedOurNumber: z.string(),
  formattedValue: z.string(),
  documentType: z.string(),
  accept: z.string(),
  currencyType: z.string(),
  amount: z.string(),
  valueOf: z.string(),
  discountValue: z.string(),
  otherDiscounts: z.string(),
  feeValue: z.string(),
  otherFees: z.string(),
  chargeValue: z.string(),
  payer: z.object({
    name: z.string(),
    registerNumber: z.string(),
    street: z.string(),
    number: z.string(),
    complement: z.string(),
    district: z.string(),
    city: z.string(),
    state: z.string(),
    postalCode: z.string(),
  }),
  guarantor: z.object({
    name: z.string(),
    registerNumber: z.string(),
    street: z.string(),
    number: z.string(),
    district: z.string(),
    complement: z.string(),
    city: z.string(),
    state: z.string(),
    postalCode: z.string(),
  }),
  debug: z.boolean().optional().default(false),
});
export type BoletoProps = z.infer<typeof inputSchema>;
