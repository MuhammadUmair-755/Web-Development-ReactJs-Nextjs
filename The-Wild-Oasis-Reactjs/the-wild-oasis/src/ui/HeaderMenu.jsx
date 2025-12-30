import styled from "styled-components";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineUser } from "react-icons/hi2";
import Logout from "../features/authentication/Logout";
import { useNavigate } from "react-router-dom";
import DarkMode from "./DarkMode";

const StyledMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;

function HeaderMenu() {
    const navigate = useNavigate();
  return (
    <StyledMenu>
      <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li>
        <DarkMode />
      </li>
      <li>
        <Logout />
      </li>
    </StyledMenu>
  );
}

export default HeaderMenu;
