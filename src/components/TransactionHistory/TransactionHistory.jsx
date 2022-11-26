import PropTypes from 'prop-types';
import { TransactionRow } from 'components/TransactionRow/TransactionRow';
import { Table, TableHeader } from './TransactionHistory.styled';
export function TransactionHistory({ items }) {
  return (
    <Table>
      <thead>
        <tr>
          <TableHeader>Type</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Currency</TableHeader>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }, index) => (
          <TransactionRow
            key={id}
            type={type}
            amount={amount}
            currency={currency}
            index={index}
          />
        ))}
      </tbody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
