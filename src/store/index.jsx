
import moment from "moment"
import { createGlobalState } from "react-hooks-global-state"


 const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState ({
    createmodal: 'scale-0',
 })

 const truncate = (text, startChars, endChars, maxLength) => {
     if (text.length > maxLength) {
        let start = text.substring(0, startChars)
        let end = text.substring(text.length - endchars, text.length)
        while (start.length + end.length < maxLength) {
            start= start + '.'
        }
        return start + end
     }
     return text 
 }

 const daysRemaining = (days) => {
    const todaysdate = moment()
    days = Number ((days + '000').slice(0))
    days = moment(days).format('YYYY-MM-DD')
    days = moment(days)
    days = days.diff(todaysdate, 'days')
    return days == 1 ? '1 day ' : days + ' days '
 }

 export {
    useGlobalState,
    setGlobalState,
    getGlobalState,
    truncate, 
    daysRemaining,
 }