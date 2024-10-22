export default function OurProject({ project }) {
  const { id, url, content, serviceProvided } = project;

  return (
    <>
      <div key={id}>
        <div className="relative slider-card max-w-sm bg-white shadow-lg rounded-xl transform transition-transform duration-500 ease-out">
          <img src={url} alt={content} className="rounded-xl" />
          <div className="px-6 py-8 absolute bottom-0 left-0 w-full rounded-b-xl bg-primary backdrop-blur-sm">
            <h3 className="text-[#08191C] lg:text-xl font-text font-semibold">
              {content}
            </h3>
            <p>{serviceProvided}</p>
          </div>
        </div>
      </div>
    </>
  );
}
