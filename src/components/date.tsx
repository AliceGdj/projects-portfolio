import { parseISO, format, intervalToDuration } from 'date-fns';
import React from 'react';

export function FormattedDate({ dateString }: { dateString: string}) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL yyyy')}</time>;
}
