const {
	createElement
} = React
const {
	render
} = ReactDOM

const title = createElement(
	'h1', {
		id: 'title',
		className: 'header'
	},
	'React part'
)

render(
	title,
	document.getElementById('react-container')
)