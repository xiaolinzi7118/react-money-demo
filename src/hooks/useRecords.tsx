import { createRecordId } from 'lib/createRecordId';
import { useEffect, useRef, useState } from 'react';

export type RecordItem = {
    id: number,
    tagIds: number[]
    note: string
    category: '+' | '-'
    amount: number
    createdAt: string // ISO 8601
}
type newRecordItem = Omit<RecordItem, 'createdAt'>

export const useRecords = () => {
    const [records, setRecords] = useState<RecordItem[]>([]);
    const count = useRef(0);
    useEffect(() => {
        setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'));
    }, []);
    useEffect(() => {
        count.current += 1
    })
    useEffect(() => {
        window.localStorage.setItem('records', JSON.stringify(records));
    }, [records]);
    const addRecord = (newRecord: newRecordItem) => {
        if (newRecord.amount <= 0) {
            alert('请输入金额');
            return false;
        }
        if (newRecord.tagIds.length === 0) {
            alert('请选择标签');
            return false;
        }
        const record = { ...newRecord, id: createRecordId(), createdAt: (new Date()).toISOString() };
        setRecords([...records, record]);
        return true;
    };


    return { records, addRecord };
};