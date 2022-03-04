import { unitType, Freight } from './../../shared/enums/enum';
export class InvoiceModel {
    invoiceId: number;
    invoiceNumber: number;
    recipientCorporateName: string;
    issuanceDate: Date;
    natureOfOperation: string;
    unit: unitType;
    freight: Freight;
    value_unit: number;
    product: string;
    client: string;
}