import { useState } from "react";
import { Dashboard } from "./Dashboard";
import { Header } from "./Header";
import Modal from 'react-modal'
import { GlobalStyle } from "./styles/global";
import { NewTrasactionModal } from "./NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false); //ele ja começa como false pq ainda nao foi clicado
  
  function handleOpenNewTransactionModal(){ //onClick para quando o cliente clicar no botão, assim ele será true(verdadeiro)
      setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal(){ //Fecha se clicar esc, clicar na tela preta, x e etc...
      setIsNewTransactionModalOpen(false)
  }
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTrasactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
