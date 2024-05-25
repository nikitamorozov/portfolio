import Image from 'next/image';
import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project: { title, description, tags, link, image } }) => {
  return (
    <div className="group w-full sm:w-1/2 m-4 mx-auto p-6 rounded-xl border-2 border-gray-300">
      <a href={link} target="_blank" className="flex flex-1 justify-center">
        <span className="text-xl font-bold no-underline hover:underline">
          {title}{' '}
          <FaExternalLinkAlt className="inline align-baseline" />
        </span>
      </a>
      <hr className="my-4" />
      {image ?
        <a href={link} target="_blank">
          <Image
            className="mx-auto shadow-xl rounded-lg mb-8"
            src={image}
            width={1920}
            height={600}
            alt="title"
          />
        </a>
        : null}
      <p className="">{description}</p>
      <div className="mt-4 flex flex-wrap justify-center items-center gap-2">
        {tags?.length && tags.map((tag, index) => (
          <div key={index} className="px-4 py-1 border-2 rounded-full">{tag}</div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
