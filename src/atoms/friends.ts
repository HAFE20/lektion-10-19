import { atom } from 'recoil'
import { Person } from '../models/Person'

const friends = atom<Person[]>({
	key: 'friends',
	default: []  // måste tala om att detta är en lista med Person-objekt
})

export default friends
