import { AddTaskBtnHead } from '../AddTaskBtn/AddTaskBtnHead';
import { TitleColumn, ColumnHeadWrapper } from './ColumnHeadBar.styled';

export const ColumnHeadBar = ({ title, category }) => {
  return (
    <ColumnHeadWrapper>
      <TitleColumn>{title}</TitleColumn>
        <AddTaskBtnHead
          category ={category}
        />
    </ColumnHeadWrapper>
  );
};