const AuthorModel = require("../../Models/BooksModel/AuthorModel");
const BookModel = require("../../Models/BooksModel/BooksModel");
const VolumeModel = require("../../Models/BooksModel/VolumeModel");
const CategoryModel = require("../../Models/CategoryModel/CategoryModel");

const AddBook = async (req, res) => {
  let librarian = req.librarian;
  let {
    ISBN,
    title,
    price,
    description,
    volume,
    parentcategory,
    category,
    author,
    email,
    mobile,
    quantity,
    yop,
  } = req.body;
  let { image1 } = req.body.Image;
  let { image2 } = req.body.Image;
  let { image3 } = req.body.Image;
  let { image4 } = req.body.Image;
  try {
    if (librarian) {
      let pc = await CategoryModel.findOne({ name: parentcategory });
      if (!pc) {
        pc = new CategoryModel({
          name: parentcategory,
          level: "parent",
        });
        await pc.save();
      }
      let c = await CategoryModel.findOne({ name: category });
      if (!c) {
        c = new CategoryModel({
          name: category,
          level: "child",
        });
        await c.save();
      }
      const Book = new BookModel({
        Title: title,
        description: description,
        ParentCategory: pc._id,
        Category: c._id,
        Image: {
          image1: image1,
          image2: image2,
          image3: image3,
          image4: image4,
        },
        AddedBy:librarian._id,
      });
      await Book.save();
      let a = await AuthorModel.findOne({ Name: author });
      if (!a) {
        let au = new AuthorModel({
          Name: author,
          mobile: mobile,
          email: email,
        });
        let asave = await au.save();
        await asave.Books.push(Book._id);
        await asave.save();
        await Book.Author.push(asave._id);
        await Book.save();
      } else {
        await Book.Author.push(a._id);
        await Book.save();
      }
      let v = new VolumeModel({
        Volno: volume,
        ISBN: ISBN,
        PublicationYear: yop,
        quantity: quantity,
        price: price,
        Book: Book._id,
      });
      let vsave = await v.save();
      console.log(vsave);
      await Book.volumes.push(vsave._id);
      await Book.save();
      res.status(200).send({
        Book,
      });
    }
    else
    {
        return res.status(404).send({
            message:"You are not permitted to add book",
            success:false,
        })
    }
  } catch (error) {
    return res.status(500).send({
      message: error.message,
      success: false,
    });
  }
};

module.exports = AddBook;
