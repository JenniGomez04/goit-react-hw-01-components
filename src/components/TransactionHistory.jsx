import PropTypes from 'prop-types';
import { Table, TrHead, TrRow  } from './Transaction.styled';

const TransactionHistory = ({ items}) => {
    return (
      <Table className="transaction-history">
      <thead>
      <TrHead>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </TrHead>
    </thead>

    <tbody>
          {items.map(item => (
            <TrRow key={item.id} className="transaction-history__item">
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </TrRow>
          ))}
  </tbody>
      </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};

export default TransactionHistory;
