import { Input } from 'components/Input';
import styled from 'styled-components';

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 14px 16px;
  font-size: 14px;
`;
type Props = {
  value: string;
  onChange: (value: string) => void
}
const NoteSection: React.FC<Props> = (props) => {
  const note = props.value
  return (
    <Wrapper>
      <Input label='备注' type='text'
        placeholder='在这里添加备注'
        value={note}
        onChange={(e) => props.onChange(e.target.value)} />
    </Wrapper>
  )
}


export { NoteSection }