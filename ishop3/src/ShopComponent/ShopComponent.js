import React from 'react';
import './ShopComponent.scss';
import data from '../../data.json';
import ShopItemForm from "../ShopItemForm/ShopItemForm";
import ShopItemTable from "../ShopItemTable/ShopItemTable";
import ShopItemDisplayed from "../ShopItemDisplayed/ShopItemDisplayed";

// Главный комонент, который подключает другие необходимые компоненты, а также рендерит таблицу.
// В данном случае пропсов не получает, список товаров получает прямо из файла.
class ShopComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            list: data, // Список товаров
            action: 'none', // Выполняемое действие: none | new | edit | lockedEdit | show
            selected: 0 // ID товара для отображения или редактирования
        }
    }

    actions = ['none','new','edit', 'lockedEdit','show']; // Массив действий, которые обрабатывает компонент

    cbSelectItem = (selected, action) => {
        if(!this.actions.includes(action)) action = 'none'; // Проверяем действие на валидность
        this.setState({selected, action});
    }

    cbRemoveItem = id => {
        let {action, selected} = this.state;
        if(+selected === +id) {action = 'none'; selected = 0;}// Если удаляем выделенный товар, то сбрасываем его отображение
        this.setState( {
            list: this.state.list.filter(v => v.id !== id),
            action, selected
        });
    }

    cbAddItem = item => {
        this.setState(prevState => {
            const newList = prevState.list;

            let max = newList[0].id; // Ищем последний id, чтобы добавить новый товар с id + 1
            for(let i=0; i < newList.length; ++i) {
                if (newList[i].id > max) max = newList[i].id;
            }
            item.id = ++max;
            return {
                list: [...newList, item],
                selected: item.id,
                action: 'show'
            }
        })
    }

    cbEditItem = item => {
        this.setState(prevState => {
            const newList = prevState.list.map(v => {
                if(+v.id === +item.id) return item;
                return v;
            });
            return {
                list: [...newList],
                selected: item.id,
                action: 'show'
            }
        })
    }

    showForm = () => {
        this.setState({selected: 0, action: 'new'});
    }

    renderRightSide = () => {
        const {selected, action, list} = this.state;
        if(selected > 0){
            if(action === 'show'){
                return <ShopItemDisplayed
                    item={list.find(item => item.id === selected)}
                    callback={this.cbSelectItem}
                />
            }else if(action === 'edit' || action === 'lockedEdit'){
                return <ShopItemForm item={list.find(item => item.id === selected)}
                                     action={action}
                                     onSubmit={this.cbEditItem}
                                     callback={this.cbSelectItem}
                />
            }
        }else{
            if(action === 'new'){
                return <ShopItemForm action={action}
                                     onSubmit={this.cbAddItem}
                                     callback={this.cbSelectItem}
                />
            }
        }
    }

    render() {

        const {list, action, selected} = this.state;
        console.log(action, selected);

        let htmlShopItems = [];
        if(list.length > 0){
            htmlShopItems = list.map(item => {
                return <ShopItemTable key={'shopItem'+item.id}
                                      item={item}
                                      locked={action === 'lockedEdit'}
                                      isSelected={+item.id === +this.state.selected}
                                      onSelect={this.cbSelectItem}
                                      onRemove={this.cbRemoveItem}

                />
            })
        }else{
            htmlShopItems.push(
                React.createElement(NoData, {key: 'noShopItemsData'})
            )
        }


        return (
            <div className="container">
                <div className="left">
                    <div>
                        <button className={`btn ${action === 'new' ? 'active' : ''}`}
                                type="button"
                                onClick={this.showForm}
                                disabled={action === 'lockedEdit'}
                        >
                            Добавить товар
                        </button>
                        <table className="ShopComponentContent">
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>Наименование</th>
                                    <th>Цена</th>
                                    <th>Количество</th>
                                    <th>Картинка</th>
                                    <th>Новинка</th>
                                    <th>Популярный</th>
                                    <th> </th>
                                    <th> </th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                htmlShopItems
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="right">
                    {
                        this.renderRightSide()
                    }
                </div>
            </div>
        )

    }

}

export default ShopComponent;