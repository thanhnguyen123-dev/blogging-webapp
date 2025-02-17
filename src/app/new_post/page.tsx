const PostEditor = () => {
  return (
    <div className="bg-grey flex flex-col w-full max-w-10xl h-screen">
      <div className="ml-44 ">
        <form action="" className="w-5/12 mt-24">
          <textarea
            name="title"
            id="title"
            className="text-4xl font-bold resize-none p-4 focus:outline-none w-full h-3/4 custom-placeholder"
            placeholder="New post title here..."
          ></textarea>
          <textarea
            name="description"
            id="description"
            className="text-2xl font-500 resize-none p-4 focus:outline-none w-full h-48 custom-placeholder mt-4"
            placeholder="Write your content here..."
          ></textarea>
        </form>
        <button
          type="submit"
          className="font-bold text-sm bg-blue-700 hover:bg-blue-800 transition-colors text-white rounded-md w-24 p-2 mt-4"
        >
          Publish
        </button>
      </div>
    </div>
  );
};

export default PostEditor;
