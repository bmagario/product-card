## bm-product-card

This is an example package to learn how to deploy in npm


## Brian Magario

```
import {
	ProductCard,
	ProductButtons,
	ProductImage,
	ProductName
} from 'bm-product.card';
```

```
<ProductCard 
	key={ product.id }
	product={ product }
	initialValues={{
		quantity: 4,
		// maxCount: 10
	}}
>
	{
		({ reset }) => (
			<>
				<ProductImage/>
				<ProductName/>
				<ProductButtons/>
			</>
		)
	}
</ProductCard>
```