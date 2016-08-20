import { renderToStaticMarkup } from './../../server/renderToString';
import Component from './../../component/es2015';
import { render } from './../../DOM/rendering';
import { isArray, isStringOrNumber, isNullOrUndef } from './../../core/utils';
import { createContainerWithHTML, validateNodeTree } from '../../tools/utils';
import createElement from './../../core/createElement';
import {
	createVTemplate,
	createVElement,
	createVComponent,
	isVNode
} from './../../core/shapes';

describe('SSR Hydration - (non-JSX)', () => {
	[
		{
			node: createElement('div', null, createElement('span', null, 'Hello world')),
			expect1: '<div data-infernoroot=""><span>Hello world</span></div>',
			expect2: '<div><span>Hello world</span></div>'
		},
		// {
		// 	node: <div>{ <span>Hello world</span> }</div>,
		// 	expect1: '<div data-infernoroot=""><span>Hello world</span></div>',
		// 	expect2: '<div><span>Hello world</span></div>'
		// },
		// {
		// 	node: <div><span>{ <span>Hello world</span> }</span></div>,
		// 	expect1: '<div data-infernoroot=""><span><span>Hello world</span></span></div>',
		// 	expect2: '<div><span><span>Hello world</span></span></div>'
		// },
		// {
		// 	node: <div>Hello world</div>,
		// 	expect1: '<div data-infernoroot="">Hello world</div>',
		// 	expect2: '<div>Hello world</div>'
		// },
		// {
		// 	node: <div>Hello world, { 'Foo!' }</div>,
		// 	expect1: '<div data-infernoroot="">Hello world, <!---->Foo!</div>',
		// 	expect2: '<div>Hello world, Foo!</div>'
		// },
		// {
		// 	node: <div>Hello world, { [ 'Foo!', 'Bar!' ] }</div>,
		// 	expect1: '<div data-infernoroot="">Hello world, <!---->Foo!<!---->Bar!<!--!--></div>',
		// 	expect2: '<div>Hello world, Foo!Bar!</div>'
		// },
		// {
		// 	node: <div>Hello world!{ null }</div>,
		// 	expect1: '<div data-infernoroot="">Hello world!<!--!--></div>',
		// 	expect2: '<div>Hello world!</div>'
		// },
		// {
		// 	node: <div>Hello world, { '1' }2{ '3' }</div>,
		// 	expect1: '<div data-infernoroot="">Hello world, <!---->1<!---->2<!---->3</div>',
		// 	expect2: '<div>Hello world, 123</div>'
		// },
		// {
		// 	node: <div id="1"><div id="2"><div id="3"></div></div></div>,
		// 	expect1: '<div id="1" data-infernoroot=""><div id="2"><div id="3"></div></div></div>',
		// 	expect2: '<div id="1"><div id="2"><div id="3"></div></div></div>'
		// },
		// {
		// 	node: <div><Comp1 /></div>,
		// 	expect1: '<div data-infernoroot=""><span>Worked!</span></div>',
		// 	expect2: '<div><span>Worked!</span></div>'
		// },
		// {
		// 	node: <div className='test'><Comp1 /></div>,
		// 	expect1: '<div class="test" data-infernoroot=""><span>Worked!</span></div>',
		// 	expect2: '<div class="test"><span>Worked!</span></div>'
		// },
		// {
		// 	node: <div><Comp1 /><Comp1 /><Comp1 /></div>,
		// 	expect1: '<div data-infernoroot=""><span>Worked!</span><span>Worked!</span><span>Worked!</span></div>',
		// 	expect2: '<div><span>Worked!</span><span>Worked!</span><span>Worked!</span></div>'
		// },
		// {
		// 	node: <div><Comp3 /></div>,
		// 	expect1: '<div data-infernoroot=""><em>Works<!----> <span>again</span>!</em></div>',
		// 	expect2: '<div><em>Works <span>again</span>!</em></div>'
		// }
	].forEach(({ node, expect1, expect2 }, i) => {
		it(`Validate various structures #${ (i + 1) }`, () => {
			const html = renderToStaticMarkup(node);
			const container = createContainerWithHTML(html);

			expect(container.innerHTML).to.equal(expect1);
			render(node, container);
			expect(validateNodeTree(node)).to.equal(true);
			expect(container.innerHTML).to.equal(expect2);
			render(node, container);
			expect(container.innerHTML).to.equal(expect2);
		});
	});
});