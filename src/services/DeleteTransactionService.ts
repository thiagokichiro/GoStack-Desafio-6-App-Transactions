import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
// import Transaction from '../models/Transaction';
import TransactionRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    // Busca no BD e valida se existir deleta, se não existe então retorna um erro (AppError)
    const transatcionsRepository = getCustomRepository(TransactionRepository);

    const transaction = await transatcionsRepository.findOne(id);

    if (!transaction) {
      throw new AppError('Transaction does not exists');
    }

    await transatcionsRepository.remove(transaction);
  }
}

export default DeleteTransactionService;
