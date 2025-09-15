"use client";
import Auth from "./auth";

interface PropsType {}

const Authentication: React.FC<PropsType> = ({}) => {
  const onSubmit = async (e: any) => {};

  return <>{<Auth onSubmit={onSubmit} isLoading={false} />}</>;
};
export default Authentication;
