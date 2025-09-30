import USERS from "./users";

export type Comment = {
  user: string;
  comment: string;
};

export type PostData = {
  id: string; // شناسه یکتا برای React key
  image: string;
  user: string;
  title: string;
  caption: string;
  profile_img: string;
  likes: number;
  comments: Comment[];
};

export const POSTS: PostData[] = [
  {
    id: "1",
    image: "https://picsum.photos/id/100/800/800",
    user: USERS[0].username,
    title: "title",
    caption: "this is just a dummy caption for a dummy post in a dummy app",
    profile_img: USERS[0].image,
    likes: 534,
    comments: [
      {
        user: USERS[1].username,
        comment: "this is just a dummy comment for a dummy post",
      },
      {
        user: USERS[3].username,
        comment: "this is just a dummy comment for a dummy post",
      },
    ],
  },
  {
    id: "2",
    image: "https://picsum.photos/id/99/800/800",
    user: USERS[1].username,
    title: "title",
    caption: "this is just a dummy caption for a dummy post in a dummy app",
    profile_img: USERS[1].image,
    likes: 744,
    comments: [
      {
        user: USERS[2].username,
        comment: "comment",
      },
    ],
  },
  {
    id: "3",
    image: "https://picsum.photos/id/1015/800/800",
    user: USERS[2].username,
    title: "title",
    caption: "this is another dummy caption for another post",
    profile_img: USERS[2].image,
    likes: 1024,
    comments: [
      {
        user: USERS[0].username,
        comment: "nice post!",
      },
      {
        user: USERS[4].username,
        comment: "amazing shot",
      },
    ],
  },
];
