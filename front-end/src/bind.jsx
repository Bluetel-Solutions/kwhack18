const React = require('react');
const { render } = require('react-dom');

const Images = ({locationType}) => {
	console.error(locationType);
	if(locationType == "generator") {
	  return <img width="200px" src="/images/windmill.png" />
	}
	if(locationType == "consumer") {
	  return <img width="200px" src="/images/lightbulb.png" />
	}
	if(locationType == "battery") {
	  return <img width="200px" src="/images/battery.png" />
	}

	return <img width="200px" src="/images/battery.png" />
}

const Actor = ({value, locationType, owner, onClick}) => {
	return (<div>
		<Images locationType={locationType} />
		<button onClick={onClick}>Click to transfer</button>
		<p>{owner}</p>
		<p>{value + "KWhs"}</p>
	</div>)
}

const rp = props => props.valueInTime.map((p, index) => <Actor key={index} onClick={() => props.onClick(p)} {...p} />)

const Actors = props => (<div>{rp(props)}</div>)

document.addEventListener('DOMContentLoaded', () => {
	let i = 1
	const onClick = () => {
		let type
		let owner
		switch (i) {
			case 0:
				type = 'generator'
				owner = 'Eco'
				break;
			case 1:
				type = 'battery'
				owner = 'Tesla'
				break
			case 2:
				type = 'consumer'
				owner = 'me'
		}

		window.unlockRequest()
			.then(() => window.newValueInTime(type, owner))
			.then(() => window.unlockRequest())
			.then(() => window.getValuesInTime(i))
	}

	const valueInTime = [{
		locationType: 'generator',
		owner: 'Eco'
	}]

	render(<Actors valueInTime={valueInTime} onClick={onClick} />, document.querySelector('#app'))
})

