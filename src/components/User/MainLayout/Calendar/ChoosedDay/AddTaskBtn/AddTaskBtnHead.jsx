import { useDispatch, useSelector } from 'react-redux';

import {
  setCurrentTask,
  setIsCurrentTaskEditing,
  setIsTaskModalOpen,
} from 'redux/tasks/slice';
import { selectChoosedDate } from 'redux/tasks/selectors';
import icon from 'images/svg/tasks.svg';
import { AddTaskBtnStyled, Svg } from './AddTaskBtnHead.styled';

export const AddTaskBtnHead = ({ category }) => {
  const dispatch = useDispatch();
  const choosedDate = useSelector(selectChoosedDate);

  const openModal = () => {
    dispatch(setIsTaskModalOpen(true));
    dispatch(setIsCurrentTaskEditing(false));
    dispatch(
      setCurrentTask({
        _id: '',
        title: '',
        start: '00:00',
        end: '00:00',
        priority: 'low',
        date: choosedDate,
        category: category,
      })
    );
  };

  const currentDate = new Date(Date.now()).getTime() - 86400000;
  const chosenDate = new Date(choosedDate).getTime();

  return (
    <>
      {currentDate <= chosenDate && (
        <AddTaskBtnStyled onClick={openModal}>
          <Svg>
            <use xlinkHref={icon + '#icon-add-button-round'}></use>
          </Svg>
        </AddTaskBtnStyled>
      )}
    </>
  );
};
