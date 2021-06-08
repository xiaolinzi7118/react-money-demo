import { createId } from 'lib/createId';
import { useState } from 'react';

const defaultCreateId = [
    { id: createId(), name: '衣' },
    { id: createId(), name: '食' },
    { id: createId(), name: '住' },
    { id: createId(), name: '行' }
];
const useTags = () => {//自定义Hook
    const [tags, setTags] = useState<{ id: number, name: string }[]>(defaultCreateId);
    const findTag = (id: number) => tags.filter(t => t.id === id)[0]
    const updateTag = (id: number, obj: { name: string }) => {
        const index = tags.findIndex((t) => t.id === id)
        const tagsClone = JSON.parse(JSON.stringify(tags))
        tagsClone[index].name = obj.name
        setTags(tagsClone)
    }
    return { tags, setTags, findTag, updateTag };
};

export { useTags };