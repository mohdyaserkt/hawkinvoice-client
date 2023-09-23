export interface IExpense {
    date: Date;
    categoryName: string;
    amount: number;
    invoiceNumber?: string;
    notes?: string;
    id?: string;
  }



  export interface handleCreateExpense {
    expense: {
        date: Date;
        categoryName: string;
        amount: number;
        invoiceNumber?: string;
        notes?: string;
        id?: string;
    };
  
    setError?: (field: string, errors: string[]) => void;
  }
  