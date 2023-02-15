import {useInfiniteQuery} from '@tanstack/react-query';
import {getQuestList} from 'apis/quest';

function useQuestListQuery() {
  const {data, isLoading, isFetching, hasNextPage, fetchNextPage, refetch} =
    useInfiniteQuery(['questList'], ({pageParam}) => getQuestList(pageParam), {
      getNextPageParam: lastPage =>
        lastPage.pageInfo.hasNextPage ? lastPage.pageInfo.endCursor : undefined,
    });

  const totalQuestCount = data?.pages[0].totalQuestCount;
  const questList = data?.pages.flatMap(page => page.data) ?? [];

  const fetchNext = () => {
    if (!hasNextPage) return;
    fetchNextPage();
  };

  return {
    questList,
    totalQuestCount,
    isLoading,
    isFetching,
    fetchNext,
    refetch,
  };
}

export default useQuestListQuery;
