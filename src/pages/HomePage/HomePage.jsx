import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import { FaAddressCard } from 'react-icons/fa';
// import styles from './HomePage.module.css';

const HomePage = () => {
	return (
		<div>
			<DocumentTitle>Home Page</DocumentTitle>
			<h1>GoIT's contacts management app</h1>
			<FaAddressCard color='tomato' size={'18rem'} />
			<p>Please register to start saving your contacts</p>
		</div>
	);
};

export default HomePage;
