import {parseISO, format, parse} from 'date-fns';
import { formatWithOptions } from 'date-fns/fp';

export default function Date({ dateString}) {
	const date = parseISO(dateString);
	return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}