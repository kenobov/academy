import React from 'react';
import renderer from 'react-test-renderer';

import MobileComponent from "../src/MobileComponent/MobileComponent";

test('Проверка фильтрации клиентов', () => {

    const component = renderer.create(
        <MobileComponent />
    )

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    const filterActiveClientsButton = component.root.find(el => el.id === '#filterBlockedClients');
    filterActiveClientsButton.props.onClick();

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // const filterBlockedClientsButton = componentTree.root.find(
    //     el => el.getAttribute("id") === 'filterBlockedClients'
    // );
    // filterBlockedClientsButton.props.onClick();

    // componentTree = component.toJSON();
    // expect(component).toMatchSnapshot();
    //
    // const filterAllClientsButton = componentTree.root.find(
    //     el => el.getAttribute("id") === 'filterAllClients'
    // );
    // filterAllClientsButton.props.onClick();
    //
    // componentTree = component.toJSON();
    // expect(component).toMatchSnapshot();


});