import moment from 'moment'

export const formatDate = (date = Date.now(), format = 'YYYY-MM-DD HH:mm:ss') => {
    return moment(date).format(format)
}


export const renderContent = (content) => ({__html: content.replace(/class/g, 'className')})