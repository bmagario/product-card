
import React from "react";
import renderer from 'react-test-renderer';
import { ProductName, ProductCard } from '../../src/components';

const product1 = {
	id: '1',
	name: 'Product 1',
};
// const product2 = {
// 	id: '2',
// 	name: 'Product 2',
// };

describe('ProductName', () => {
	test('Should show correctly the component with personalized name ', () => {
		const wrapper = renderer.create(
			<ProductCard product={product1}>
				{() => (<ProductName name="Product X" className="prueba"/>)}
			</ProductCard>
		);
		expect(wrapper.toJSON()).toMatchSnapshot();
	});
	test('Should show correctly the component ', () => {
		const wrapper = renderer.create(
			<ProductCard product={product1}>
				{() => (<ProductName/>)}
			</ProductCard>
		);
		expect(wrapper.toJSON()).toMatchSnapshot();
	});
	
});