import { useRouter } from "next/dist/client/router";

const BrainstormingPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h1 className="bg-red-400 text-black">{id}</h1>
    </div>
  );
};

export default BrainstormingPage;
