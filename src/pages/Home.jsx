import React from "react";

import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Rwquests";

const Home = () => {
	return (
		<>
			<Main />
			<Row rowID='1' title='Upcoming' fetchURL={requests.requestsUpcoming} />
			<Row rowID='2' title='Trending' fetchURL={requests.requestsTrending} />
			<Row rowID='3' title='Top Rated' fetchURL={requests.requestsTopRated} />
			<Row rowID='4' title='Popular' fetchURL={requests.requestsPopular} />
		</>
	);
};

export default Home;
