exports.getPosts = (req, res, next) => {
  //returning json response-- this will send an json response
  res.status(200).json({
    posts: [{ title: "First Post", content: "This is the first post!" }],
  });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title; //extraxting titlte from req body
  const content = req.body.content; //extracting content from req body

  //create post in db
  res.status(201).json({
    message: "Post created successfully!",
    post: { id: new Date().toISOString(), title: title, content: content },
  });
};

 















