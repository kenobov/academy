import React from 'react';
import './ShopItemTable.scss';

export default class ShopItemTable extends React.Component {

    cbMark = () => {
        if(!this.props.locked) {
            this.props.isSelected
                ? this.props.onSelect(0, 'none') // Если выбран данный товар, вторым кликом снимаем выделение
                : this.props.onSelect(this.props.item.id, 'show')
        }
    }

    cbEdit = e => {
        e.stopPropagation();
        this.props.onSelect(this.props.item.id, 'edit');
    }

    cbRemove = e => {
        e.stopPropagation();
        const {id, name} = this.props.item;
        if(confirm(`Вы действительно хотите удалить товар "${name}"?`)) this.props.onRemove(id);
    }

    render() {
        const {item, locked} = this.props;
        const {id, name, img, price, store, isNew, isPopular} = item;

        return (
            <tr className={`ShopItem ${this.props.isSelected ? 'marked' : null }`}
                onClick={this.cbMark}
            >
                <td>{id}</td>
                <td>{name}</td>
                <td>{price}</td>
                <td>{store}</td>
                <td>{img}</td>
                <td>{isNew ? 'Да' : ''}</td>
                <td>{isPopular ? 'Да' : ''}</td>
                <td>
                    <button className="edit"
                            type="button"
                            onClick={this.cbEdit}
                            disabled={locked}
                    >
                        Редактировать
                    </button>
                </td>
                <td>
                    <button className="remove"
                            type="button"
                            onClick={this.cbRemove}
                            disabled={locked}
                    >
                        Удалить
                    </button>
                </td>
            </tr>
        )
    }

}