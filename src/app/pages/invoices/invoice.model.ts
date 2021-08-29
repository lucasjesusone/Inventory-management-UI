import { unitType, Freight } from './../../shared/enums/enum';
export class InvoiceModel {
    invoice_id: number;
    serie: number;
    ncm_sh: number;
    product_code: number;
    issueDate: Date;
    invoice_number: number;
    cst: number;
    cfop: number;
    qtd: number;
    natureOfOperation: string;
    unit: unitType;
    freight: Freight;
    value_unit: number;
    product: string;
    client: string;
}