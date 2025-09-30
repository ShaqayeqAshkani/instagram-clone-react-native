import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { type PostData } from "../../data/posts"; // مسیر رو با ساختار خودت هماهنگ کن

type PostProps = {
  post: PostData;
};

const Post: React.FC<PostProps> = ({ post }) => {
  if (!post) return null;

  return (
    <View style={styles.container}>
      <PostHeader post={post} />
      <PostImage post={post} />
      <PostFooter post={post} />
    </View>
  );
};

const PostHeader: React.FC<{ post: PostData }> = ({ post }) => (
  <View style={styles.header}>
    <View style={styles.headerLeft}>
      <Image
        source={{ uri: post.profile_img || "https://via.placeholder.com/150" }}
        style={styles.story}
      />
      <Text style={styles.username}>{post.user || "Unknown"}</Text>
    </View>
    <Text style={styles.moreIcon}>...</Text>
  </View>
);

const PostImage: React.FC<{ post: PostData }> = ({ post }) => (
  <View style={{ width: "100%", height: 450 }}>
    <Image
      source={{ uri: post.image || "https://via.placeholder.com/500" }}
      style={styles.postImage}
    />
  </View>
);

const PostFooter: React.FC<{ post: PostData }> = ({ post }) => (
  <View>
    <FooterButtons />
    <FooterDetails post={post} />
  </View>
);

const FooterButtons: React.FC = () => (
  <View style={styles.footerButtons}>
    <View style={styles.footerButtonsLeft}>
      <TouchableOpacity>
        <Image
          source={require("@/assets/icons/hart1.jpg")}
          style={styles.footerIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require("@/assets/icons/comment.png")}
          style={styles.footerIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require("@/assets/icons/send-white-icon.png")}
          style={styles.footerIcon}
        />
      </TouchableOpacity>
    </View>
    <TouchableOpacity>
      <Image
        source={require("@/assets/icons/save.png")}
        style={styles.footerIcon}
      />
    </TouchableOpacity>
  </View>
);

const FooterDetails: React.FC<{ post: PostData }> = ({ post }) => (
  <View style={styles.footer}>
    <Text style={{ color: "white" }}>{post.likes} likes</Text>
    <View style={{ marginVertical: 10 }}>
      <Text style={{ color: "white" }}>
        <Text style={{ fontWeight: "900" }}>{post.user} </Text>
        {post.caption}
      </Text>
    </View>
    {post.comments.length > 0 && (
      <>
        <Text style={{ color: "gray" }}>
          {post.comments.length > 1 ? "View all " : ""}
          {post.comments.length} comments
        </Text>
        <View>
          <Text style={{ color: "white" }}>
            <Text style={{ fontWeight: "900" }}>{post.comments[0].user} </Text>
            {post.comments[0].comment}
          </Text>
        </View>
      </>
    )}
  </View>
);

export default Post;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
    justifyContent: "space-between",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  story: {
    width: 35,
    height: 35,
    borderRadius: 35,
    marginLeft: 6,
    borderWidth: 3,
    borderColor: "tomato",
  },
  username: {
    color: "white",
    marginLeft: 5,
    fontWeight: "700",
  },
  moreIcon: {
    color: "white",
    fontWeight: "900",
  },
  postImage: {
    height: "100%",
    resizeMode: "cover",
  },
  footerButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  footerButtonsLeft: {
    flexDirection: "row",
  },
  footerIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  footer: {
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});
