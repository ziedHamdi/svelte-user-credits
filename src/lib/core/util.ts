export function formatDate(date) {
	if( !date )
		return null;
	const options = {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit'
	} as Intl.DateTimeFormatOptions;
	return new Intl.DateTimeFormat('en-GB', options).format(new Date(date))
}

export function safeString( value: string, ifNull: string = "-"): string {
	return value ?? ifNull;
}