import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const WorkItem = ({ work }) => {
  return (
    <div className={`work-${work.id} shadow-xl p-5 rounded-xl`}>
      <LazyLoadImage src={work.image} alt={work.title} className='w-full rounded-xl aspect-video' effect='blur' />
      <div className="caption mt-2 rounded-xl">
        <h2 className="text-black font-bold font-poppins text-[1rem]">{work.title}</h2>
        <p className="text-black font-normal font-poppins text-sm">{work.description}</p>
      </div>
    </div>
  );
};

export default WorkItem;
