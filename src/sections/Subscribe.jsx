


const Subscribe = () => {
  return (
    <section className="max-container flex justify-between items-center max-lg:flex-col gap-10
    " id="contact-us">
      <h3 className="text-4xl font-palanquin font-bold leading-[60px] lg:max-w-md">Sign Up for
        <span className="text-Green-dark"> NewsLetter </span>
         & Stay Updated
      </h3>
      <div className="lg:max-w-[50%] w-full items-center max-sm:flex-col gap-4 p-2 sm:border sm:border-slate-400 rounded-full flex justify-between">
        <input type="text" placeholder="subscribe@puma.com" className="input" />
        <div className="flex max-sm:justify-end items-center">
          <button className="bg-Green-dark px-10 py-3 rounded-full text-xl text-white mt-[-8px] mr-[-8px] mb-[-8px] ">Sign Up</button>
        </div>
      </div>
    </section>
  )
}

export default Subscribe