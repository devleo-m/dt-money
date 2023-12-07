import React, { useContext } from 'react'; // hooks do react
import incomeImg from '../assets/entrada.svg'
import imgSaida from '../assets/saídas.svg'
import imgTotal from '../assets/total.svg'
import { useTransactions } from '../hooks/useTransactions';
import { Container } from "./styles";

export function Summary(){

    const {transactions} = useTransactions(); //hooks

   //const totalDeposits = transactions.reduce((acc, transaction) =>{
   // if(transaction.type === 'deposit'){
   //     return acc + transaction.amount;
   // }
   // return acc;
   //}, 0);                  //Eu poderia criar varias dessas para calcular e colocar em entrada, saida e total

   const summary = transactions.reduce((acc, transaction) => {
       if(transaction.type === 'deposit') {

           acc.deposits += transaction.amount;
           acc.total += transaction.amount;
       }else{
           acc.withdraws += transaction.amount;
           acc.total = acc.total - transaction.amount;
       }
       return acc;
   }, {
       deposits: 0,
       withdraws: 0,
       total: 0,
   })
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL' 
                    }).format(summary.deposits)}
                </strong>
            </div>
            <div>
                <header>
                 <p>Saídas</p>
                    
                    <img src={imgSaida} alt="Saida" />
                </header>
                <strong>
                -{ }{new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL' 
                    }).format(summary.withdraws)}
                </strong>
            </div>
            <div className="green-total">
                <header>
                    <p>Total</p>
                    <img src={imgTotal} alt="Total" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL' 
                    }).format(summary.total)}
                </strong>
            </div>
        </Container>
    )
}
