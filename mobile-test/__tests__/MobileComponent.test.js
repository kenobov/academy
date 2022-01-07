import React from 'react';
import renderer from 'react-test-renderer';

import MobileComponent from "../src/MobileComponent/MobileComponent";

test('Проверка фильтрации клиентов', () => {

    const component = renderer.create(
        <MobileComponent />
    )

    let componentTree = component.toJSON();
    expect(component).toMatchSnapshot();

    const filterActiveClientsButton = component.root.find(el => el.id === 'filterActiveClients');
    filterActiveClientsButton.props.onClick();

    componentTree = component.toJSON();
    expect(component).toMatchSnapshot();

    const filterBlockedClientsButton = component.root.find(el => el.id === 'filterBlockedClients');
    filterBlockedClientsButton.props.onClick();

    componentTree = component.toJSON();
    expect(component).toMatchSnapshot();

    const filterAllClientsButton = component.root.find(el => el.id === 'filterAllClients');
    filterAllClientsButton.props.onClick();

    componentTree = component.toJSON();
    expect(component).toMatchSnapshot();


});