import React, { Component } from 'react';
import './itemList.css';
import Spinner from '../spinner';
import gotService from '../../services/gotService';

export default class ItemList extends Component {

    gotService = new gotService();

    state = {
        charList: null
    }

    componentDidMount() {

        const { getData } = this.props;

        getData()
            .then((charList) => {
                this.setState({
                    charList
                })
            })
    }

    renderItems(arr) {
        return arr.map((item, i) => {
            const { id } = item;
            const label = this.props.renderItem(item);
            return (
                <li
                    key={i}
                    className="list-group-item"
                    onClick={() => this.props.onItemSelected(41 + i)}
                >
                    {label}
                </li>
            )
        })
    }

    render() {

        const { charList: itemList } = this.state;

        if (!itemList) {
            return <Spinner />
        }

        const items = this.renderItems(itemList);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}