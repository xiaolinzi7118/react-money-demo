let recordId = parseInt(window.localStorage.getItem('idMax2') || '0');
export const createRecordId = () => {
    recordId += 1;
    window.localStorage.setItem('idMax2', JSON.stringify(recordId))
    return recordId
}