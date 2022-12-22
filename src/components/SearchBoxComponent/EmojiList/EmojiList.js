import styled from "@emotion/styled";
import EmojiListItem from "../EmojiListItem/EmojiListItem";

const Container = styled.ul`
  width: 100%;
  padding: 0;
`;

const EmojiList = ({ emojis, keyword }) => {
  return (
    <Container>
      {/* 삼항 조건 연산자로 구현 */}
      {/* {emojis.map((emoji) => {
        return keyword === "" ? (
          <EmojiListItem emoji={emoji} key={emoji.title}></EmojiListItem>
        ) : emoji.title.includes(keyword) ||
          emoji.keywords.includes(keyword) ? (
          <EmojiListItem emoji={emoji} key={emoji.title}></EmojiListItem>
        ) : undefined;
      })} */}

      {/* filter()를 활용하여 구현 */}
      {emojis
        .filter((emoji) => {
          return (
            emoji.title.indexOf(keyword) >= 0 ||
            emoji.keywords.indexOf(keyword) >= 0
          );
        })
        .slice(0, 10)
        .map((emoji) => {
          return (
            <EmojiListItem emoji={emoji} key={emoji.title}></EmojiListItem>
          );
        })}
    </Container>
  );
};

export default EmojiList;
