import { useEffect, useState } from 'react';
import './App.css';

// https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new

function App() {
	const [number, setNumber] = useState(0);
	const [isloading, setIsloading] = useState(true);
	const [error, setError] = useState();

	const [refreshtoken, setRefreshtoken] = useState(0);

	useEffect(() => {
		setIsloading(true);

		fetch(
			'https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new'
		)
			.then((resp) => resp.json())
			.then((data) => setNumber(data))
			.catch((error) => setError(error))
			.finally(() => setIsloading(false));
	}, [refreshtoken]);

	return (
		<>
			{isloading ? <h1>Cargando...</h1> : <h1>Numero: {number}</h1>}

			<div>{error}</div>

			<button
				disabled={isloading}
				onClick={() => setRefreshtoken(refreshtoken + 1)}
			>
				Nuevo número
			</button>
		</>
	);
}

export default App;
