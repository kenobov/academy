import React from 'react';
import renderer from 'react-test-renderer';

import MobileComponent from "../src/MobileComponent/MobileComponent";

test('Проверка фильтрации клиентов', () => {

    const component = renderer.create(
        <MobileComponent />
    )

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    const filterActiveClientsButton = component.root.find(
        el => el.props.id === 'filterActiveClients'
    );
    filterActiveClientsButton.props.onClick();

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    const filterBlockedClientsButton = component.root.find(
        el => el.props.id === 'filterBlockedClients'
    );
    filterBlockedClientsButton.props.onClick();

    tree = component.toJSON();
    expect(component).toMatchSnapshot();

    const filterAllClientsButton = component.root.find(
        el => el.props.id === 'filterAllClients'
    );
    filterAllClientsButton.props.onClick();

    tree = component.toJSON();
    expect(component).toMatchSnapshot();


});