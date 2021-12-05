import React from 'react';
import './ShopItemTable.scss';
import PropTypes from "prop-types";

export default class ShopItemTable extends React.Component {

    cbMark = () => {
        if(!this.props.isLocked) {
            this.props.isSelected
                ? this.props.onSelect(0, 'none') // Если выбран данный товар, вторым кликом снимаем выделение
                : this.props.onSelect(this.props.item.id, 'show')
        }
    }

    cbEdit = e => {
        e.stopPropagation();
        this.props.onSelect(this.props.item.id, 'edit'); // Переход в режим редактирования
    }

    cbRemove = e => {
        e.stopPropagation();
        const {id, name} = this.props.item;
        if(confirm(`Вы действительно хотите удалить товар "${name}"?`)) this.props.onRemove(id);
    }

    render() {
        const {item, action} = this.props;
        const {id, name, img, price, store, isNew, isPopular} = item;

        const style = this.props.isSelected
                    ? action === 'lockedEdit' || action === 'edit'  ? 'edited' : 'marked' : '';

        return (
            <tr className={`ShopItem ${style}`}
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
                            disabled={action === 'lockedEdit'}
                    >
                        Редактировать
                    </button>
                </td>
                <td>
                    <button className="remove"
                            type="button"
                            onClick={this.cbRemove}
                            disabled={action === 'lockedEdit'}
                    >
                        Удалить
                    </button>
                </td>
            </tr>
        )
    }

}

ShopItemTable.propTypes = {
    item: PropTypes.object,
    action: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired
}