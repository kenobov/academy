import React from 'react';
import './ShopItemForm.scss';

export default class ShopItemFrom extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            item: this.props.item ? this.props.item : initItem,
            errors: {
                name: [],
                img: [],
                price: [],
                store: []
            }
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.item !== this.props.item) {
            this.setState({
                item: this.props.item ? this.props.item : initItem
            })
        }
    }

    onChangeInput = (e) => {
        this.setState(prevState => {
            return {
                item: {
                    ...prevState.item,
                    [e.target.name]: e.target.value
                }
            }
        });
        if(this.props.action !== 'lockedEdit' && this.state.item.id){
            this.props.callback(this.state.item.id, 'lockedEdit');
        }
    }

    onChangeCheckbox = (e) => {
        this.setState(prevState => {
            return {
                item: {
                    ...prevState.item,
                    [e.target.name]: Boolean(e.target.checked)
                }
            }
        });
        if(this.props.action !== 'lockedEdit' && this.state.item.id){
            this.props.callback(this.state.item.id, 'lockedEdit');
        }
    }


    render() {
        const {item, errors} = this.state;
        const {id, name, img, price, store, rating, isNew, isPopular} = item;
        const {action, onSubmit, callback} = this.props;

        return (
            <form id="form" className="form">
                <h2>{
                    id > 0 ? "Редактирование товара" : "Добавление товара"
                }
                </h2>
                <div className="form-control">
                    <label htmlFor="name">
                        Наименование
                    </label>
                    <input type="text" id="name"
                           name="name"
                           value={name}
                           onChange={this.onChangeInput}
                    />
                        <small>Ошибка</small>
                </div>
                <div className="form-control">
                    <label htmlFor="price">
                        Стоимость
                    </label>
                    <input type="number" id="price" step="0.01"
                           name="price"
                           value={price}
                           onChange={this.onChangeInput}
                    />
                        <small>Ошибка</small>
                </div>
                <div className="form-control">
                    <label htmlFor="store">
                        Количество
                    </label>
                    <input type="text" id="store"
                           name="store"
                           value={store}
                           onChange={this.onChangeInput}
                    />
                        <small>Ошибка</small>
                </div>
                <div className="form-control">
                    <label htmlFor="img">
                        Изображение
                    </label>
                    <input type="text" id="img"
                           name="img"
                           value={img}
                           onChange={this.onChangeInput}
                    />
                        <small>Ошибка</small>
                </div>

                <div className="half-control">
                    <div className="half">
                        <label htmlFor="isNew">
                            Новинка
                        </label>
                        <input type="checkbox" id="isNew"
                               name="isNew"
                               checked={isNew}
                               onChange={this.onChangeCheckbox}
                        />
                    </div>

                    <div className="half">
                        <label htmlFor="isPopular">
                            Пупулярный
                        </label>
                        <input type="checkbox" id="isPopular"
                               name="isPopular"
                               checked={isPopular}
                               onChange={this.onChangeCheckbox}
                        />
                    </div>
                </div>

                <div className="half-control">
                    <div className="half">
                        {
                            id > 0 ?
                                <button type="button" className="btn" onClick={()=>onSubmit(item)}>
                                    Сохранить
                                </button> :
                                <button type="button" className="btn" onClick={()=>onSubmit(item)}>
                                    Добавить
                                </button>
                        }
                    </div>
                    <div className="half">
                        <button type="button"
                                className="btn cancel"
                                onClick={()=>callback(0,'none')}
                        >
                            Отменить
                        </button>
                    </div>
                </div>
            </form>
        )
    }

}

const initItem = {
    id: 0,
    name: "",
    img: "",
    price: 0,
    store: 0,
    rating: 0,
    isNew: false,
    isPopular: false
}