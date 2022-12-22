import { useState } from "react";
import Header from "./components/SearchBoxComponent/Header/Header";
import SearchBox from "./components/SearchBoxComponent/SearchBox/SearchBox";
import EmojiList from "./components/SearchBoxComponent/EmojiList/EmojiList";
import EmojiData from "./components/SearchBoxComponent/data/emogi.json";

function App() {
  const [keyword, setKeyword] = useState("");

  console.log("keyword", keyword);

  return (
    <div>
      <Header />
      <SearchBox onSearch={setKeyword} />
      <EmojiList emojis={EmojiData} keyword={keyword}></EmojiList>
    </div>
  );
}

export default App;
