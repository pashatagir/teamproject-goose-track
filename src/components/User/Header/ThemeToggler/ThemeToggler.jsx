import {
  ToggleThemeBtn,
  IconLight,
  IconDark,
} from 'utils/Buttons/MainButton.styled';
import { ThemeTogglerWraper } from './ThemeToggler.styled';
import { useThemeColors } from './ThemeContext';

export const ThemeToggler = () => {
  const changeTheme = useThemeColors().changeTheme;

  const handlerChangeTheme = () => {
    changeTheme();
  };
  const type = useThemeColors().type;
  return (
    <ThemeTogglerWraper>
      <ToggleThemeBtn onClick={handlerChangeTheme}>
        {type === 'dark' ? <IconLight /> : <IconDark />}
      </ToggleThemeBtn>
    </ThemeTogglerWraper>
  );
};
