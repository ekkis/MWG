
import moment from 'moment'
import TIME_CONSTANTS from 'constants/time'

const getDateByFormat = (date) => {
  return moment(date).format(TIME_CONSTANTS.DATE_FORMAT);
};

export {
  getDateByFormat
}