import { Row, Data } from './TransactionRow.styled';
import PropTypes from 'prop-types';

export function TransactionRow({ type, amount, currency, index }) {
  return (
    <Row index={index}>
      <Data>{type}</Data>
      <Data>{amount}</Data>
      <Data>{currency}</Data>
    </Row>
  );
}

TransactionRow.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
