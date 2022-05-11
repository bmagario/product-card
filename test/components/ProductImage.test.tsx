
import React from "react";
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';

const product1 = {
	id: '1',
	name: 'Product 1',
	image: 'https://via.placeholder.com/150',
};
// const product2 = {
// 	id: '2',
// 	image: 'Product 2',
// };

describe('ProductImage', () => {
	test('Should show correctly the component with personalized image ', () => {
		const wrapper = renderer.create(
			<ProductCard product={product1}>
				{() => (<ProductImage image="https://via.placeholder.com/151" className="prueba"/>)}
			</ProductCard>
		);
		expect(wrapper.toJSON()).toMatchSnapshot();
	});
	test('Should show correctly the component ', () => {
		const wrapper = renderer.create(
			<ProductCard product={product1}>
				{() => (<ProductImage/>)}
			</ProductCard>
		);
		expect(wrapper.toJSON()).toMatchSnapshot();
	});
	
});