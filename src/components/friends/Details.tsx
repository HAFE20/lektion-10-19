import { useParams, Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import friendsAtom from '../../atoms/friends'
import { Person } from '../../models/Person'

interface RouteParams {
	id: string;
}
const Details = () => {
	const { id } = useParams<RouteParams>()
	const [friendsList] = useRecoilState(friendsAtom)
	// id är e-post för en vän, som bör finnas i listan

	const maybePerson: (Person | undefined) = friendsList.find(p => p.email === id)

	if( !maybePerson ) {
		return (
			<div> Kunde inte hitta någon vän. <Link to="/"> Tillbaka till start </Link> </div>
		)
	}
	// Om vi kommer hit, är maybePerson inte undefined
	return (
		<div>
		<h2> {maybePerson.name.title} {maybePerson.name.first} {maybePerson.name.last} </h2>
		<p>{maybePerson.email}</p>
		<img src={maybePerson.picture.large} alt="Large profile" />
		</div>
	)
}

export default Details
