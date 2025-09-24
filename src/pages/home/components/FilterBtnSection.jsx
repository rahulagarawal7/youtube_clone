import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FilterButton from "../../../components/FilterButton";
import { filterButtons } from "../../../utils/dummyData";
import { useDispatch } from "react-redux";
import { getAllVideoByCategoryThunk } from "../../../store/slices/videoSlice";

const FilterBtnSection = () => {
  const [active, setActive] = useState(1);
  const scrollRef = useRef(null);

  const dispatch= useDispatch()

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

 const  handleFilterButton=(item)=>{
      setActive(item.id);
      
dispatch(getAllVideoByCategoryThunk(item.label));


  }

  return (
    <div className="relative flex items-center mt-4">
      {/* Left Scroll Button */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 z-10 h-full px-2 bg-gradient-to-r from-white via-white/90 to-transparent   items-center"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>

      {/* Scrollable Buttons */}
      <div
        ref={scrollRef}
        className="flex gap-2 overflow-x-auto no-scrollbar px-8 py-1 scroll-smooth"
      >
        {filterButtons?.map((item) => (
          <FilterButton
            key={item.id}
            name={item.label}
            active={active === item.id}
            onClick={() => handleFilterButton(item)}
          />
        ))}
      </div>

      {/* Right Scroll Button */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 z-10 h-full px-2 bg-gradient-to-l from-white via-white/90 to-transparent  items-center"
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>
    </div>
  );
};

export default FilterBtnSection;
