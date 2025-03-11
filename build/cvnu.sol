pragma solidity ^0.8.0;

contract CVUNToken {
  mapping(address => uint256) public balances;
  mapping(uint256 => Transaction) public transactions;
  uint256 public transactionCount;

  struct Transaction {
    uint256 id;
    address utilisateur;
    TransactionType type;
    uint256 montant;
    uint256 date;
    TransactionStatus statut;
    uint256 detailsId; // Formation, compétence, projet
  }

  enum TransactionType { formationCompletee, competenceValidee, recompense, retrait }
  enum TransactionStatus { enAttente, terminee, annulee }

  event TokenTransfer(address indexed from, address indexed to, uint256 value);
  event TransactionCreated(uint256 id, address utilisateur, TransactionType type, uint256 montant);
  // ... autres fonctions pour les formations, compétences, etc.
}