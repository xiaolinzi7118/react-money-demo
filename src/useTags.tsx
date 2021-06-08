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
    return { tags, setTags, findTag };
};

export { useTags };