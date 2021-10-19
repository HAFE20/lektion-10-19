import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { Person } from '../../models/Person'
import friendsAtom from '../../atoms/friends'

const FindFriends = () => {
	const [maybeFriend, setMaybeFriend] = useState<null | Person>(null)
	const [friends, setFriends] = useRecoilState(friendsAtom)

	useEffect(() => {
		async function send() {
			const person: Person = await getFriend()
			setMaybeFriend(person)
		}
		send()
	}, [])  // [] talar om att detta ska användas en gång

	const handleAddFriend = () => {
		// Behöver en if-sats för att TypeScript ska fatta att maybeFriend inte är null
		if( maybeFriend ) {
			setFriends([ ...friends, maybeFriend ])
		}
	}

	return (
		<div>
			{ maybeFriend
				? <>
				Känner du kanske möjligen:
				<h2> {maybeFriend.name.first} {maybeFriend.name.last} </h2>
				<img src={maybeFriend.picture.thumbnail} alt="Thumbnail of person" />
				<button onClick={handleAddFriend}> Ja, lägg till vän </button>
				</>
				: 'Vänta, letar efter potentiella vänner...'
			}
		</div>
	)
}

async function getFriend() {
	// Att göra: använd try/catch så vi kan hantera fel
	// Validera resultatet
	const url = 'https://randomuser.me/api/'
	const response = await fetch(url)
	const data = await response.json()
	const person: Person = data.results[0]
	console.log('Friend:', person)
	return person
}

export default FindFriends
