import { useRecoilState } from 'recoil'
import friendsAtom from '../../atoms/friends'


const FriendList = () => {
	const [friends] = useRecoilState(friendsAtom)
	return (
		<div>
		Mina vänner:
		<ul>
			{friends.map(f => (
				<li key={f.login.username}>
				<h2> {f.name.first} {f.name.last} </h2>
				<img src={f.picture.thumbnail} alt="Thumbnail of person" />
				</li>
			))}
		</ul>
		</div>
	)
}



export default FriendList
