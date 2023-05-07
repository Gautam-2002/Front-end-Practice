// console.log(React);

// let div = document.querySelector('#root')

// let ele = React.createElement('h1',null,"using js create element")
// ReactDOM.render(ele,div);


// let ele = React.createElement('div',null,React.createElement('h3',null,"Good afternoon sir"));
// ReactDOM.render(ele,div)


//npx create-react-app test

// babel - it's a compiler which helps to compile jsx
// webpack - a bundeler

// using jsx :
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<h1>this is jsx</h1>,)


// react 17 vs. react 18 :

// Before
// import { render } from 'react-dom';
// const container = document.getElementById('app');
// render(<App tab="home" />, container);

// After
// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('app');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App tab="home" />);