"use client";

const title = "Works";
const words = `Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge. I've some special opportunity to work on some real life projects. Check out my work below to see the details. `;

const Description = () => {
  return (
    <header className="px-5">
      <div className="mb-3 flex w-max items-center justify-start">
        {title.split(" ").map((word, idx) => (
          <h3 key={idx} className="text-8xl text-stone-800">
            {word}
          </h3>
        ))}
      </div>
      <div className="flex max-w-[600px] flex-wrap items-center justify-start gap-3 overflow-hidden p-2 leading-3 text-stone-800 font-workSans">
        {words.split(" ").map((word, idx) => (
          <p key={idx}>{word}</p>
        ))}
      </div>
    </header>
  );
};

export default Description;
