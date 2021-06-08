import { Button } from "components/Button";
import { Center, Space } from "components/CenterSpace";
import Icon from "components/icons";
import { Input } from "components/Input";
import Layout from "components/Layout";
import { useParams } from "react-router";
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
    const { findTag } = useTags();
    let { id } = useParams<Params>()
    const tag = findTag(parseInt(id))
    return (
        <Layout>
            <Topbar>
                <Icon name='left' />
                <span>编辑标签</span>
                <span></span>
            </Topbar>
            <InputWrapper>
                <Input label='标签名' type='text' value={tag.name} />
            </InputWrapper>
            <Center>
                <Space />
                <Button>删除标签</Button>
            </Center>
        </Layout>
    );
};

export { TagEdit };