import { useState } from "react";
import { data } from "../../static/data";
import IconPrevious from "../icons/IconPrevious";
import IconNext from "../icons/IconNext";
import IconClose from "../icons/IconClose";

const navigateImage = (direction, setSelectedImage) => {
  const imageCount = data?.images?.length || 0;
  setSelectedImage((prev) => {
    if (direction === "next") {
      return (prev + 1) % imageCount;
    } else {
      return (prev - 1 + imageCount) % imageCount;
    }
  });
};

const Modal = ({ isModalOpen, closeModal }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  if (isModalOpen)
    return (
      <div
        className="hidden fixed inset-0 z-40 bg-black bg-opacity-75 lg:flex items-center justify-center p-4"
        onClick={closeModal}
      >
        <div
          className="relative max-w-[90%] max-h-[90%]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            className="absolute -top-8 right-0 text-white hover:text-[#FF7E1B]"
            onClick={closeModal}
          >
            <IconClose />
          </button>

          {/* Navigation Buttons */}
          <button
            className="group absolute -left-[28px] top-1/2 -translate-y-1/2 bg-white hover:border-[#FF7E1B] hover:border w-[56px] h-[56px] rounded-full flex justify-center items-center"
            onClick={() => navigateImage("prev", setSelectedImage)}
          >
            <div className="relative w-[15.25px] h-[18px] [&>svg]:absolute [&>svg]:inset-0">
              <IconPrevious />
            </div>
          </button>
          <button
            className="group absolute -right-[28px] top-1/2 -translate-y-1/2 bg-white hover:border-[#FF7E1B] hover:border w-[56px] h-[56px] rounded-full flex justify-center items-center"
            onClick={() => navigateImage("next", setSelectedImage)}
          >
            <div className="relative w-[9.75px] h-[18px] [&>svg]:absolute [&>svg]:inset-0">
              <IconNext />
            </div>
          </button>

          {/* Modal Image */}
          <img
            src={data?.images[selectedImage].full}
            className="max-w-[550px] max-h-[550px] object-contain rounded-lg"
            alt="Large view of selected image"
          />
        </div>
      </div>
    );
};

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (imageId) => {
    setSelectedImage(imageId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col gap-7 z-0">
      {/* Main Gallery Image */}
      {String(selectedImage) && (
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            className="group absolute left-3 top-1/2 -translate-y-1/2 bg-white hover:border-[#FF7E1B] hover:border w-[40px] h-[40px] rounded-full flex lg:hidden justify-center items-center"
            onClick={() => navigateImage("prev", setSelectedImage)}
          >
            <div className="relative w-[15.25px] h-[18px] [&>svg]:absolute [&>svg]:inset-0">
              <IconPrevious />
            </div>
          </button>
          <img
            src={data?.images[selectedImage].full}
            className="w-full lg:w-[445px] h-[300px] lg:h-[445px] rounded-none lg:rounded-lg object-cover object-center cursor-pointer"
            onClick={() => openModal(selectedImage)}
          />
          <button
            className="group absolute right-3 top-1/2 -translate-y-1/2 bg-white hover:border-[#FF7E1B] hover:border w-[40px] h-[40px] rounded-full flex lg:hidden justify-center items-center"
            onClick={() => navigateImage("next", setSelectedImage)}
          >
            <div className="relative w-[9.75px] h-[18px] [&>svg]:absolute [&>svg]:inset-0">
              <IconNext />
            </div>
          </button>
        </div>
      )}

      {/* Thumbnail Gallery */}
      <div className="hidden lg:flex gap-5 justify-between">
        {data?.images?.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedImage(item.id)}
            className={`border-2 rounded-lg overflow-hidden ${
              item.id === selectedImage
                ? "border-[#FF7E1B]"
                : "border-transparent"
            }`}
          >
            <img
              className={`${
                item.id === selectedImage
                  ? "opacity-50 hover:!opacity-25"
                  : "hover:opacity-75"
              } hover:opacity-75 w-[88px] h-[88px] object-cover`}
              src={item.thumbnail}
            />
          </button>
        ))}
      </div>
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        closeModal={closeModal}
      />
    </div>
  );
};

export default ImageGallery;
