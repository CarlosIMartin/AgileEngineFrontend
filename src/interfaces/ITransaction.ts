export interface ITransaction {
  id: string;
  type: string;
  amount: number;
  effectiveDate: string;
  isSelected: boolean;
}

export const transactionsInit: ITransaction[] = [];