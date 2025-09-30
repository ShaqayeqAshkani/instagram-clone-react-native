import { FlatList, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/home/Header";
import Stories from "../components/home/Stories";
import Post from "../components/home/Post";
import { POSTS, type PostData } from "../data/posts";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={POSTS}
        keyExtractor={(item: PostData) => item.id}
        renderItem={({ item }) => (
          <View style={styles.postWrapper}>
            <Post post={item} />
          </View>
        )}
        ListHeaderComponent={
          <View style={styles.headerWrapper}>
            <Header />
            <Stories />
          </View>
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  headerWrapper: {
    marginBottom: 15,
  },
  postWrapper: {
    marginBottom: 20,
  },
  listContent: {
    paddingBottom: 50,  
  },
});
