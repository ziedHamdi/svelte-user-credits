export function formatDate(date) {
	if( !date )
		return null;
	return new Intl.DateTimeFormat('en-US').format(new Date(date))
}