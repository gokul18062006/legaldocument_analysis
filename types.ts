
export interface KeyClause {
  type: 'Obligation' | 'Penalty' | 'Date' | 'Right' | 'Condition' | 'Other';
  clause: string;
  explanation: string;
}

export interface RiskItem {
    risk: string;
    mitigation: string;
    severity: 'High' | 'Medium' | 'Low';
    applicableLaw: string;
    punishment: string;
}

export interface AgreementDetails {
    agreementType: string;
    parties: string[];
    effectiveDate: string;
    term: string;
    governingLaw: string;
}

export interface AnalysisResult {
  simplifiedText: string;
  summary: string;
  keyClauses: KeyClause[];
  riskAnalysis: RiskItem[];
  agreementDetails: AgreementDetails | null;
}

export interface ChatMessage {
    sender: 'user' | 'ai';
    text: string;
}

export interface UploadedFile {
    name: string;
    mimeType: string;
    data: string; // base64 encoded
}