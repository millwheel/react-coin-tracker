import styled from "styled-components";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = styled.button`
  margin-top: 10px;
  margin-left: 10px;
  border: none;
  border-radius:  10px;
  background-color: aliceblue;
  &:hover {
    transition: 0.2s ease-in-out;
    cursor: pointer;
    background-color: #6af699d0;
  }
  div {
    padding: 5px;
    span {
      margin-left: 5px;
      font-size: 20px;
    }
  }
`;

interface IToggle {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

function Toggle({ isDarkMode, toggleDarkMode }: IToggle) {
  return (
    <Button onClick={toggleDarkMode}>
      {isDarkMode === true ? (
        <div>
          <FontAwesomeIcon icon={faSun} size="2x" />
          <span>Light mode</span>
        </div>
      ) : (
        <div>
          <FontAwesomeIcon icon={faMoon} size="2x" />
          <span>Dark mode</span>
        </div>
      )}
    </Button>
  );
}

export default Toggle;
