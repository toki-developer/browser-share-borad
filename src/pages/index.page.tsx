import { customAlphabet } from "nanoid";
import { useRouter } from "next/dist/client/router";

const Home = () => {
  const router = useRouter();
  const handleClick = () => {
    const nanoid = customAlphabet(
      "1234567890abcdefghijklmnopqestuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
      20
    );
    const pageId = nanoid();
    router.push(`brainstorming/${pageId}`);
  };
  return (
    <div>
      <button onClick={handleClick}>ブレインストーミングを始める</button>
    </div>
  );
};

export default Home;
