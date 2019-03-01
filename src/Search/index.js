import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'
function Search() {
	const [ data, setData ] = useState({ results: [] });
	const [ query, setQuery ] = useState('');
	const [ search, setSearch ] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		setSearch(query);
	};

	const searchCharacter = async () => {
		const result = await axios(`https://rickandmortyapi.com/api/character/?name=${search}`);
		setData(result.data);
	};

	useEffect(
		() => {
			searchCharacter();
		},
		[ search ]
	);

	return (
		<div className="wrapper b">
			<form onSubmit={handleSubmit}>
				<input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
				<button type="submit">Search</button>
			</form>
			<div className="results">
				<ul>
					{data.results.map((item) => (
						<li key={item.id}>
							<img src={item.image} />
							{item.name}
							<span className="name" />
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
export default Search;
