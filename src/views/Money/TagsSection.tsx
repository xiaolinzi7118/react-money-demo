import styled from 'styled-components';
import { useTags } from 'useTags';

const Wrapper = styled.section`
  background: #FFFFFF; padding: 12px 16px;
  flex-grow: 1; display:flex; flex-direction: column;
  justify-content: flex-end; align-items: flex-start;
  > ol { margin: 0 -12px;
    > li{
       background: #D9D9D9; border-radius: 18px;
       display:inline-block; padding: 3px 18px; 
       font-size: 14px; margin: 8px 12px;
       &.selected{
         background:#f60;
       }
    }
  }
  > button{
    background:none; border: none; padding: 2px 4px;
    border-bottom: 1px solid #333; color: #666;
    margin-top: 8px;
  }
`;

type Props = {
  value: number[];
  onChange: (selected: number[]) => void
}
const TagsSection: React.FC<Props> = (props) => {
  const { tags, setTags } = useTags()
  // const [selectedTagIds, setSelectedTagIds] = useState<string[]>([])
  const selectedTagIds = props.value
  const onAddTag = () => {
    const newName = window.prompt('请输入新标签名')
    const name = tags.map(t => t.name)
    if (newName !== null) {
      if (name.indexOf(newName) >= 0) {
        window.alert('标签已存在哦~')
      } else if (newName.trim().length > 0) {
        setTags([...tags, { id: Math.random(), name: newName }])
        window.alert('添加成功')
      }
    }
  }
  const onToggleTag = (tagId: number) => {
    const index = selectedTagIds.indexOf(tagId);
    if (index >= 0) {
      props.onChange(selectedTagIds.filter(i => i !== tagId))
    } else {
      props.onChange([...selectedTagIds, tagId])
    }
  }
  const getClass = (tagId: number) => selectedTagIds.indexOf(tagId) >= 0 ? 'selected' : '';
  return (
    <Wrapper>
      <ol>
        {tags.map(tag =>
          <li key={tag.id} onClick={() => { onToggleTag(tag.id) }}
            className={getClass(tag.id)}>
            {tag.name}
          </li>
        )}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  )
}


export { TagsSection };
