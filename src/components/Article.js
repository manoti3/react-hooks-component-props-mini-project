function Article({ title, date, preview, minutes }) {
	let emojis = ''
  let aniMinutes = minutes
	if (aniMinutes < 30) {
		while (aniMinutes > 0) {
			emojis += '☕️'
			aniMinutes = aniMinutes - 5
		}
	} else {
		while (aniMinutes > 0) {
			emojis += '🍱'
			aniMinutes = aniMinutes - 10
		}
	}
	return (
		<article>
			<h3>{title}</h3>
			<small>
				{date ? date : 'January 1, 1970'} · {emojis} {minutes} min to read
			</small>
			<p>{preview}</p>
		</article>
	)
}
export default Article