type Props = {
  children: string;
};

const Warning = ({ children }: Props) => {
  return <div className="home__error-container">{children}</div>;
};

export default Warning;
