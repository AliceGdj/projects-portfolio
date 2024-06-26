import { parseISO, format, intervalToDuration } from 'date-fns';
import React from 'react';

export function FormattedDate({ dateString }: { dateString: string}) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL yyyy')}</time>;
}

export function DateInterval({ dateStringFrom, dateStringTo }) {
  const dateFrom = parseISO(dateStringFrom);
  const dateTo = parseISO(dateStringTo);
  const duration = intervalToDuration({
    start: dateFrom,
    end: dateTo,
  })
  const formatteDuration = `${duration.months} months`
  return formatteDuration;
}