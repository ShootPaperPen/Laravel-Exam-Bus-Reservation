import type { InertiaLinkProps } from '@inertiajs/react';
import { clsx } from 'clsx';
import type { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function toUrl(url: NonNullable<InertiaLinkProps['href']>): string {
    return typeof url === 'string' ? url : url.url;
}

export function dateTimeToString(dateTimeValue: Date) {
    let dateTime = new Date(dateTimeValue);

    let dateTimeString = Intl.DateTimeFormat("en-US", {
        dateStyle: "medium",
        timeStyle: "short"
    }).format(dateTime);

    return dateTimeString;
}

export function dateToString(dateValue: Date) {
    console.log(dateValue)
    let date = new Date(dateValue);
    console.log(date)
    
    let dateString = Intl.DateTimeFormat("en-US", {
        dateStyle: "medium"
    }).format(date);

    return dateString;
}

export function timeToString(timeValue: Date) {
    // let time = new Date(timeValue);
    // console.log(timeValue);

    // let timeString = Intl.DateTimeFormat("en-US", {
    //     timeStyle: "short"
    // }).format(timeValue);

    // return timeString;
    return timeValue.toString();
}