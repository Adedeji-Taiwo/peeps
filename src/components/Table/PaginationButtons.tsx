import { Button } from "..";


const PaginationButtons = ({ page, numPages, handleNext, handlePrev }: {page:number, numPages:number, handleNext: () => void, handlePrev: () => void}) => {

    return (
      <div className="ml-auto flex lg:gap-5 gap-3 justify-end">
        {page > 1 && (
          <Button type="button" onClick={handlePrev} className="bg-primary mt-12">
              <span className="lg:text-base text-sm text-primaryText font-extralight">Previous</span>
          </Button>
        )}
  
        {page < numPages && (
          <Button type="button" onClick={handleNext} className="bg-primary mt-12">
            <span className="lg:text-base text-sm text-primaryText font-extralight">Next</span>
          </Button>
        )}
      </div>
    );
  };

  export default PaginationButtons