import { DocumentType, PartyType, PropertyType, StepType } from "@prisma/client";

export interface AddParty {
  type: PartyType;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface EditParty {
  partyId: number,
  type?: PartyType;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
}

export interface RemoveParty {
  partyId: number
}

export interface AddStep {
  type: StepType;
  isEnabled: boolean;
}

export interface ToggleStep {
  stepId: number;
  isEnabled: boolean;
}

export interface AddDocument {
  type: DocumentType;
  file: Buffer;
}

export interface RemoveDocument {
  documentId: number
}

export interface IDocument {
  type: DocumentType;
  file: string;
}

export interface CreateExchange {
  userId: number;
  type: PropertyType;
  parties: AddParty[];
  steps: AddStep[];
  pdfFiles: IDocument[];
}
