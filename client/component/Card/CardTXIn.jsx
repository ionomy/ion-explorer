
import Component from '../../core/Component';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import PropTypes from 'prop-types';
import React from 'react';

import Table from '../Table';

export default class CardTXIn extends Component {
  static defaultProps = {
    txs: []
  };

  static propTypes = {
    txs: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      cols: [
        { key: 'address', title: 'Address' },
        { key: 'value', title: 'Value' }
      ]
    };
  };

  render() {
    return (
      <Table
        cols={ this.state.cols }
        data={ this.props.txs.map(tx => ({
          ...tx,
          address: tx.address
            ? (<Link to={ `/address/${ tx.address }` }>{ tx.address }</Link>)
            : tx.coinbase ? 'COINBASE' : tx.coinstake?'POS': tx.isZcSpend?"ZEROCOIN_SPEND":'Unknown',
          value: tx.value
            ? (
                <span className="badge badge-danger">
                  -{ numeral(tx.value).format('0,0.0000') } ION
                </span>
              )
            : ''
        })) } />
    );
  };
}
