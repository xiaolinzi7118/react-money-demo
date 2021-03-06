import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Icon from "./icons";


const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
 >ul{
   display:flex;
   >li{
    width: 33.3333%;
    text-align:center;
    >a{
        display: flex;
        flex-direction: column;
        padding: 4px 0;
        justify-content: center;
        align-items: center;
        .icon {
          width: 24px;      
          height: 24px;
        }
        &.selected{
            color:#f60;
            .icon{
                fill:#f60;
            }
        }
    }
   }
 }
`;

const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <NavLink to="/tags" activeClassName='selected'>
                        <Icon name="tags" />
                        标签
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/money" activeClassName='selected'>
                        <Icon name="money" />
                        记一笔
                     </NavLink>
                </li>
                <li>
                    <NavLink to="/statistics" activeClassName='selected'>
                        <Icon name="statistics" />
                        统计
                    </NavLink>
                </li>
            </ul>
        </NavWrapper>
    )
}

export default Nav;