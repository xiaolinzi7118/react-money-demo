import { createId } from 'lib/createId';
import { useEffect, useRef, useState } from 'react';

const useTags = () => {//自定义Hook
    const [tags, setTags] = useState<{ id: number, name: string }[]>([]);
    const count = useRef(0);
    useEffect(() => {
        let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]')
        if (localTags.length === 0) {
            localTags = [
                { id: createId(), name: '衣' },
                { id: createId(), name: '食' },
                { id: createId(), name: '住' },
                { id: createId(), name: '行' }
            ]
        }
        setTags(localTags)
    }, [])
    useEffect(() => {
        count.current += 1
    })
    useEffect(() => {
        if (count.current > 1) {
            window.localStorage.setItem('tags', JSON.stringify(tags))
        }
    }, [tags])
    const findTag = (id: number) => tags.filter(t => t.id === id)[0]
    const updateTag = (id: number, obj: { name: string }) => {
        setTags(tags.map(t => t.id === id ? { id, name: obj.name } : t))
    }
    const deleteTag = (id: number) => {
        setTags(tags.filter(t => t.id !== id))
    }
    const onAddTag = () => {
        const newName = window.prompt('请输入新标签名')
        const name = tags.map(t => t.name)
        if (newName !== null && newName.trim().length !== 0) {
            if (name.indexOf(newName) >= 0) {
                window.alert('标签已存在哦~')
            } else {
                setTags([...tags, { id: createId(), name: newName }])
                window.alert('添加成功')
            }
        }
    }
    const getName = (id: number) => {
        const tag = tags.filter(t => t.id === id)[0];
        return tag ? tag.name : '';
    };
    return { tags, getName, setTags, findTag, updateTag, deleteTag, onAddTag };
};

export { useTags };