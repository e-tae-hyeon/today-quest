import {FlashList} from '@shopify/flash-list';
import React from 'react';
import useQuestListQuery from 'features/quest/hooks/useQuestListQuery';
import {AppText, Loader} from '@shared/components/base';
import {View} from 'react-native';
import {QuestCard} from '../../module';

function QuestList() {
  const {
    questList,
    totalQuestCount,
    isLoading,
    isFetching,
    fetchNext,
    refetch,
  } = useQuestListQuery();

  return (
    <FlashList
      ListHeaderComponent={
        <View className="pb-4">
          <AppText typoStyle="H3">
            {totalQuestCount?.toLocaleString()}개의 퀘스트가 있어요
          </AppText>
        </View>
      }
      data={questList}
      renderItem={({item}) => <QuestCard quest={item} />}
      ItemSeparatorComponent={() => <View className="py-2" />}
      estimatedItemSize={96}
      onRefresh={refetch}
      refreshing={isLoading || isFetching}
      onEndReached={fetchNext}
      onEndReachedThreshold={0.7}
      ListFooterComponent={isFetching ? <Loader /> : null}
      showsVerticalScrollIndicator={false}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={{padding: 16}}
    />
  );
}

export default QuestList;
