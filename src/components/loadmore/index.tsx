import Button from "../button/index";
type Prop = {
  limit: number;
  handleClick: () => void;
};

const LoadMore = ({ limit, handleClick }: Prop) => {
  return (
    <div className="w-full flex-center my-10">
      {limit < 30 && (
        <Button handleClick={handleClick} title="Devamını Yükle" />
      )}
    </div>
  );
};

export default LoadMore;
