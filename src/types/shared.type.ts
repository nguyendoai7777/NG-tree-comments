export interface CommentProps {
  backgroundImage?: string;
  username: string,
  commentText: string;
  subComments?: CommentProps[]
}
