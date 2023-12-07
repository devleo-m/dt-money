import { createContext, useEffect, useState, ReactNode, useContext } from 'react'
import { api } from '../services/api';

interface Transaction{
    withdraws: number;
    total: number;
    deposits: number;
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

//sintaxe do typescript // Outra forma de criar uma interface
//type TransactionInput = Omit<Transaction, 'id' | 'createdAt' > //Omit ele não pega o id e createdAt
type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'> // Pick pega os selecionados como os 4 no ex

//interface TransactionInput{
//    title: string;
//    amount: number;
//    type: string;
//    category: string; }

interface TransactionsProviderProps{
    children: ReactNode;
}

interface TransactionContextData{
    transactions: Transaction[];
    createTransaction: (Transaction: TransactionInput) => Promise<void>; //Devolve por padrão void quando estiver vazio quando a função nao tem retorno
}

const TransactionsContext = createContext<TransactionContextData>(
    {} as TransactionContextData //Gambiarra para tirar o erro >.>
);

export function TransactionsProvider({children}: TransactionsProviderProps){
    const [transactions, setTransactions] = useState<Transaction[]>([])

    //useEffect(() => {}, []); *ESTADO
    useEffect(() =>{ 
        api.get('transactions') 
            .then(response => setTransactions(response.data.transactions)) 
    }, []);

    async function createTransaction(transactionInput: TransactionInput){ //Context // async(transforma essa função assíncrona)
      const response = await api.post('/transactions', {
          ...transactionInput,
          createdAt: new Date(),
      })

      const { transaction } = response.data;

      setTransactions([ //Conceito de mutabilidade do react
          ...transactions, //sempre que eu quero colocar uma nova informação em uma array no estado em um react
          transaction, // sempre copie todas informacoes que ja estao la e coloque a nova como está aqui
      ]);
    }

    return(
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    );
}
export function useTransactions(){
    const context = useContext(TransactionsContext)

    return context
}