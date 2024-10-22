export default function OurClient({ client }) {
  const { id, image } = client;
  return (
    <>
      <div
        key={id}
        className="h-[106px] bg-white px-auto rounded-full flex justify-center items-center hover:scale-105 duration-300 clientLogoSpan"
      >
        <img src={image} alt="" />
      </div>
    </>
  );
}
