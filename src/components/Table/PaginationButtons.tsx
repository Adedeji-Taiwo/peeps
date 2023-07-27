const PaginationButtons = ({ page, numPages, handleNext, handlePrev }: {page:number, numPages:number, handleNext: () => void, handlePrev: () => void}) => {

    return (
      <div className="ml-auto flex lg:gap-5 gap-3 justify-end">
        {page > 1 && (
          <button onClick={handlePrev} className="mt-12 lg:py-3 lg:px-6 py-2 px-[18px] bg-primary hover:bg-opacity-70 rounded-[40px]">
            Previous
          </button>
        )}
  
        {page < numPages && (
          <button onClick={handleNext} className="mt-12 lg:py-3 lg:px-6 py-2 px-[18px] bg-primary hover:bg-opacity-70 rounded-[40px]">
            Next
          </button>
        )}
      </div>
    );
  };

  export default PaginationButtons