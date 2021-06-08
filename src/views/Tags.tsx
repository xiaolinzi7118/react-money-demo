import { Button } from 'components/Button';
import { Center, Space } from 'components/CenterSpace';
import Icon from 'components/icons';
import Layout from 'components/Layout';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useTags } from 'useTags';


const TagList = styled.ol`
  font-size: 16px; 
  background:white;
  > li{
    //#e5e5e7
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    margin-left: 16px;
    >a{
        padding: 12px 16px 12px 0;
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
  }
`;

function Tags() {
  const { tags } = useTags()
  return (
    <Layout>
      <ol>
        <TagList>
          {tags.map(tag =>
            <li key={tag.id}>
              <Link to={'/tags/' + tag.id}>
                <span>{tag.name}</span>
                <Icon name="right" />
              </Link>
            </li>)}
        </TagList>
      </ol>
      <Center>
        <Space />
        <Button>新增标签</Button>
      </Center>
    </Layout>
  );
}

export default Tags;