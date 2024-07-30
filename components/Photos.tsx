"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/AppleCardsCarousel";
import { photos, photosTitle } from "@/data";
import Image from 'next/image';

const createPhotos = () => {
  return photos.map((photo) => {
    return {
      location: photo.location,
      src: `/img/${photo.filename}`,
      content: (
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
          <Image
            src={`./img/${photo.filename}`}
            alt={`Photo by ${photo.by} in ${photo.location}`}
            width={500}
            height={300}
            className="object-cover mx-auto"
          />
        </div>
      ),
    };
  });
};

const data = createPhotos();

export function PhotoGallery() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20" id="photos">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans leading-relaxed md:leading-relaxed">
        {photosTitle}
      </h2>
      <Carousel items={cards} />
    </div>
  );
}