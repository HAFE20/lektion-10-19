import { useRecoilState } from 'recoil'
import friendsAtom from '../../atoms/friends'
import { Link } from 'react-router-dom'


const FriendList = () => {
	const [friends] = useRecoilState(friendsAtom)
	return (
		<div>
		Mina vänner:
		<ul>
			{friends.map(f => (
				<Link to={"/friends/" + f.email} key={f.login.username}>
				<li>
				<h2> {f.name.first} {f.name.last} </h2>
				<img src={f.picture.thumbnail} alt="Thumbnail of person" />
				</li>
				</Link>
			))}
		</ul>
		</div>
	)
}



export default FriendList
