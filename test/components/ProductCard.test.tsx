
import React from "react";
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components';

const { act } = renderer;
const product1 = {
	id: '1',
	name: 'Product 1',
};
// const product2 = {
// 	id: '2',
// 	name: 'Product 2',
// };

describe('ProductCard', () => {
	test('Should show correctly the component with personalized name ', () => {
		const wrapper = renderer.create(
			<ProductCard product={product1}>
				{
					() => (
						<h1>Product Card</h1>
					)
				}
			</ProductCard>
		);
		expect(wrapper.toJSON()).toMatchSnapshot();
	});
	
	test('Should increment quantity ', () => {
		const wrapper = renderer.create(
			<ProductCard product={product1}>
				{
					({ quantity, increase }) => (
						<>
							<h1>ProductCard</h1>
							<span>{ quantity }</span>
							<button onClick={ increase }></button>
						</>
					)
				}
			</ProductCard>
		);

		let tree = wrapper.toJSON();
		expect(tree).toMatchSnapshot();
		

		act(() => {
			(tree as any).children[2].props.onClick();
		});
		tree = wrapper.toJSON(); // update the tree
		expect((tree as any).children[1].children[0]).toBe('1');
	});
});