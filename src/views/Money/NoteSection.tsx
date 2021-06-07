import { useRef, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
  > label {
    display:flex;
    align-items: center;
    > span { margin-right: 16px; white-space: nowrap; }
    > input {
      display:block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
    }
  }
`;
const NoteSection: React.FC = () => {
  const [note, setNote] = useState('')
  const refInput = useRef<HTMLInputElement>(null)
  const onBlur = () => {
    if (refInput.current !== null) {
      setNote(refInput.current.value)
    }
  }
  return (
    <Wrapper>
      <label>
        <span>备注</span>
        <input
          type="text" placeholder="在这里添加备注"
          // value={note}
          // onChange={(e) => setNote(e.target.value)}
          //这是受控组件的写法
          ref={refInput}
          defaultValue={note}
          onBlur={onBlur}
        //非受控组件
        />
      </label>
    </Wrapper>
  )
}


export { NoteSection }