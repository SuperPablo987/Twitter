import { Entypo } from '@expo/vector-icons';
import { StyleSheet, View, FlatList, Pressable, Text } from 'react-native';
import { Link } from 'expo-router';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

// import tweets from '../../../../assets/data/tweets'; // for testing front end
import Tweet from '../../../../components/Tweet';
import { useTweetsApi } from '../../../../lib/api/tweets';
import { ActivityIndicator } from 'react-native';

export default function FeedScreen() {
  const { listTweets } = useTweetsApi();

  const { data, isLoading, error } = useQuery({
    queryKey: ['tweets'],
    queryFn: listTweets,
  });

  if (isLoading){
    return <ActivityIndicator />;
  }

  if (error){
    return <Text>{error.message}</Text>
  }


  return (
    <View style={styles.page}>
      <FlatList 
        data={data} 
        renderItem={({ item }) => <Tweet tweet={item} />}
      />
        <Link href='/new-tweet' asChild>
          <Entypo 
            name="plus" 
            size={24} 
            color="white" 
            style={styles.floatingButton}/>
        </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  page:{
    flex:1,
    backgroundColor: 'white',
  },
  floatingButton: {
    backgroundColor: '#1C9BF0',
    width: 50,
    height: 50,
    borderRadius: 50,

    textAlign: 'center',
    lineHeight: 50,
    position: 'absolute',
    right: 15,
    bottom: 15,
    
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity:  0.21,
    shadowRadius: 7.68,
    elevation: 10
  },
});
