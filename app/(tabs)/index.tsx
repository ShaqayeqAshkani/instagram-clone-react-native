import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, FlatList } from "react-native";
import Header from "../../components/home/Header";
import Stories from "../../components/home/Stories";
import Post from "../../components/home/Post";
import { POSTS } from "../../data/posts";
import type { PostData } from "../../data/posts";

export default function HomeScreen() {
  return (
    
    <SafeAreaView style={styles.container}>
      <FlatList
        data={POSTS}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Post post={item} />}
        ListHeaderComponent={
          <>
            <Header />
            <Stories />
          </>
        }
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
