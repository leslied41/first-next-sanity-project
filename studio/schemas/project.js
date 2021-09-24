export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },

    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    },
    { name: "description", type: "text" },

    { name: "link", type: "url" },
    {
      name: "tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
  ],
};
