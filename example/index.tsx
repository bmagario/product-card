import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
	ProductCard,
	ProductButtons,
	ProductImage,
	ProductName
}  from '../.';

const App = () => {
  const product = {
    id: '1',
    name: 'Product Name',
    image: 'https://via.placeholder.com/300x300',
  }
  return (
    <>
      <ProductCard 
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
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
