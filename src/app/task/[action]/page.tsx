const Page = ({ params }: { params: { action: string } }) => {
  return <div>{params.action}</div>;
};

export default Page;
