import React, { CSSProperties, useContext } from "react";
import { productContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

export interface IProductNameProps {
	name?: string;
	className?: string;
	style?: CSSProperties;
}

export const ProductName = ({ name, className, style }: IProductNameProps) => {
	const { product } = useContext(productContext);
	return (
		<span className={ `${styles.productDescription} ${className}` } style={ style } >
			{ name ? name : product.name }
		</span>
	);
}