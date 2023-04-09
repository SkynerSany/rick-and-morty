import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pagination from './pagination';

let currentPage = 1;
function setCurrentPage(page: number) {
  currentPage = page;
}

test('Pagination component is load', () => {
  const wrapper = render(
    <Pagination
      currentPage={1}
      setCurrentPage={setCurrentPage as React.Dispatch<React.SetStateAction<number>>}
      allPages={2}
    />
  );
  expect(wrapper.container.querySelector('.pagination')).toBeInTheDocument();
});

test('Pagination, click buttons', async () => {
  const wrapper = render(
    <Pagination
      currentPage={1}
      setCurrentPage={setCurrentPage as React.Dispatch<React.SetStateAction<number>>}
      allPages={2}
    />
  );

  const [btnPrev, btnNext] = wrapper.container.querySelectorAll('.pagination__button');
  await fireEvent.click(btnNext);
  expect(currentPage).toBe(2);

  await fireEvent.click(btnPrev);
  expect(currentPage).toBe(2);
});
