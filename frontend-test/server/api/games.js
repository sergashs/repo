import gamesData from '~/public/data/games.json';

export default defineEventHandler((event) => {
	return {
		gamesData
	}
})