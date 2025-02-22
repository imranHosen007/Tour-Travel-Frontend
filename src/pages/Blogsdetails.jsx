import React from "react";
import { useLocation, useParams } from "react-router-dom";
import BlogsComp from "../Componets/Blogs/BlogsComp";

const Blogsdetails = () => {
  const location = useLocation();
  const { image, date, title, description, author } = location.state;
  return (
    <div className="py-10">
      <div className="h-[300px] overflow-hidden">
        <img
          src={image}
          alt=""
          className="mx-auto h-[300px] w-full object-cover transition duration-700 hover:scale-110"
        />
      </div>
      <div className="container">
        <p className="text-slate-600 text-sm py-3">
          {" "}
          written by {author} on {date}
        </p>
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p>{description}</p>
      </div>
      <BlogsComp />
    </div>
  );
};

export default Blogsdetails;
