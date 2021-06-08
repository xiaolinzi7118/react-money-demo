import { Button } from "components/Button";
import { Center, Space } from "components/CenterSpace";
import Icon from "components/icons";
import { Input } from "components/Input";
import Layout from "components/Layout";
import { useHistory, useParams } from "react-router";
import styled from "styled-components";
import { useTags } from "useTags";

type Params = {
    id: string
}
const Topbar = styled.header`
  display:flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background:white;
`;
const InputWrapper = styled.div`
  background:white;
  padding: 0 16px;
  margin-top: 8px;
`;
const TagEdit: React.FC = () => {
    const { findTag, updateTag, deleteTag } = useTags();
    let { id } = useParams<Params>()
    const tag = findTag(parseInt(id))
    const tagContent = () => (
        <div>
            <InputWrapper>
                <Input label='标签名' type='text' value={tag.name}
                    onChange={(e) => {
                        updateTag(tag.id, { name: e.target.value })
                    }} />
            </InputWrapper>
            <Center>
                <Space />
                <Button onClick={() => { deleteTag(tag.id) }}>删除标签</Button>
            </Center>
        </div>
    )
    const history = useHistory()
    const onClickBack = () => {
        history.goBack()
    }
    return (
        <Layout>
            <Topbar>
                <Icon name='left' onClick={onClickBack} />
                <span>编辑标签</span>
                <span></span>
            </Topbar>
            {tag ? tagContent() : <Center>tag不存在</Center>}
        </Layout>
    );
};

export { TagEdit };