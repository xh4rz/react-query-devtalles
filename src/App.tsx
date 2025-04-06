import './App.css';
import { useQuery } from '@tanstack/react-query';
// import { RandomNumber } from './components/RandomNumber';

const getCryptoNumber = async (): Promise<number> => {
	// throw 'No se puede obtener el numero';

	const resp = await fetch(
		'https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new'
	).then((resp) => resp.json());

	return Number(resp);
};

function App() {
	const {
		isFetching,
		data: number,
		error,
		refetch
	} = useQuery({
		queryKey: ['randomNumber'],
		queryFn: getCryptoNumber
		// retry: false
		// staleTime: 1000 * 60,
		// refetchOnWindowFocus: false
	});

	return (
		<>
			{isFetching ? <h1>Cargando...</h1> : <h1>Numero: {number}</h1>}

			{/* <RandomNumber /> */}

			<div>{JSON.stringify(error)}</div>

			<button disabled={isFetching} onClick={() => refetch()}>
				Nuevo número
			</button>
		</>
	);
}

export default App;
