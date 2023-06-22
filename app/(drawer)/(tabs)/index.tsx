import { Entypo } from '@expo/vector-icons';
import { StyleSheet, View, FlatList, Pressable } from 'react-native';
import { Link } from 'expo-router';
import tweets from '../../../assets/data/tweets';
import Tweet from '../../../components/Tweet';

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList 
        data={tweets} 
        renderItem={({item}) => <Tweet tweet={item} />}
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
