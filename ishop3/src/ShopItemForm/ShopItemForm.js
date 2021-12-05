import React from 'react';
import './ShopItemForm.scss';
import PropTypes from "prop-types";

// Данная форма используется и для добавления и для редактирования.
// Если id > 0 то форма используется для редактирования товара.
export default class ShopItemFrom extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            item: this.props.item ? this.props.item : initItem,
            validation: {
                name: {
                    rules: ['isRequired', 'min'],
                    errors: []
                },
                img: {
                    rules: ['isRequired', 'min'],
                    errors: []
                },
                price: {
                    rules: ['isRequired', 'float'],
                    errors: []
                },
                store: {
                    rules: ['number'],
                    errors: []
                }
            },
            isValid: false // Флаг для запрета сохранения формы
        }
    }

    componentDidUpdate(prevProps) {
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
                    [e.target.name]: e.target.type === 'number' ? +e.target.value : e.target.value
                }
            }
        }, this.validateForm); // Запускаем валидацию после попадания значений в state

        if(this.props.action !== 'lockedEdit' && this.state.item.id){
            this.props.callback(this.state.item.id, 'lockedEdit'); // Если внесли изменения, блокируем форму
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
        }, this.validateForm);

        if(this.props.action !== 'lockedEdit' && this.state.item.id){
            this.props.callback(this.state.item.id, 'lockedEdit'); // Если внесли изменения, блокируем форму
        }
    }

    validateForm = () => {
        this.setState(prevState => {
            let isValid = true; // Если ошибок нет, флаг останется true
            const validation = prevState.validation;
            Object.entries(this.state.validation).forEach(input => { // Проходим по полям, которые нужно валидировать
                const name = input[0]; // Получаем имя поля
                const rules = input[1].rules; // Получаем правила для валидации
                validation[name].errors = []; // Перед каждой новой проверкой удаляем старые ошибки

                if(Array.isArray(rules)){
                    rules.forEach(rule => { // Проходимся по массиву правил
                        const result = validationFunctions[rule](this.state.item[name]); // Вызываем нужную функцию
                        if(result) {
                            validation[name].errors.push(result);
                            isValid = false;
                        } // Получаем ошибки и меняем флаг, если необходимо
                    })
                }

            })

            return {
                validation,
                isValid
            }
        })
    }

    render() {
        const {item, isValid, validation} = this.state;
        const {id, name, img, price, store, rating, isNew, isPopular} = item;
        const {onSubmit, callback} = this.props;

        return (
            <form id="form" className="form">
                <h2>{
                    id > 0 ? "Редактирование товара" : "Добавление товара"
                }
                </h2>
                <div className={`form-control ${validation.name.errors.length > 0 ? 'error' : 'success'}`}>
                    <label htmlFor="name">
                        Наименование
                    </label>
                    <input type="text" id="name"
                           name="name"
                           value={name}
                           onChange={this.onChangeInput}
                    />
                        <small>{validation.name.errors}</small>
                </div>
                <div className={`form-control ${validation.price.errors.length > 0 ? 'error' : 'success'}`}>
                    <label htmlFor="price">
                        Стоимость
                    </label>
                    <input type="number" id="price" step="0.01"
                           name="price"
                           value={+price}
                           onChange={this.onChangeInput}
                    />
                    <small>{validation.price.errors}</small>
                </div>
                <div className={`form-control ${validation.store.errors.length > 0 ? 'error' : 'success'}`}>
                    <label htmlFor="store">
                        Количество
                    </label>
                    <input type="number" id="store"
                           name="store"
                           value={+store}
                           onChange={this.onChangeInput}
                    />
                    <small>{validation.store.errors}</small>
                </div>
                <div className={`form-control ${validation.img.errors.length > 0 ? 'error' : 'success'}`}>
                    <label htmlFor="img">
                        Изображение
                    </label>
                    <input type="text" id="img"
                           name="img"
                           value={img}
                           onChange={this.onChangeInput}
                    />
                    <small>{validation.img.errors}</small>
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
                        <button type="button"
                                className="btn"
                                onClick={()=>onSubmit(item)}
                                disabled={!isValid}
                        >
                            {
                                id > 0 ? "Сохранить" : "Добавить"
                            }
                        </button>
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

ShopItemFrom.propTypes = {
    item: PropTypes.object,
    action: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    callback: PropTypes.func.isRequired
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

const validationFunctions = {
    isRequired: value => {
        if (!value) return 'Это поле должно быть заполнено. ';
    },

    min: value => {
        if (value.length < 3) return 'Длина не менее 3 символов. ';
    },

    number: value => {
        if (!Number.isInteger(value)) return 'Введите числовое значение. ';
    },

    float: value => {
        if (!/^[0-9]{1,7}(\.[0-9]{1,2})?$/.test(value)) return 'Введите дробное число. После точки должно быть не более двух цифр.';
    }
}