import React from "react";

export const Location = () => {
  return (
    <section className="mt-6 w-full px-4 xl:px-0" id="location">
      <h2 className="text-lg md:text-2xl lg:text-4xl font-bold pb-4">
        Location & Hours
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
        <div className="bg-gray-500 aspect-square max-w-md"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col justify-center gap-y-2">
            <p>line 1,</p>
            <p>line 2,</p>
            <p>Nellore,</p>
            <p>Andhra Pradesh,</p>
            <p>Postal Code.</p>
            <p>get directions</p>

            <p>email</p>
            <p>phone</p>
          </div>
          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-y-2">
              <div>Monday</div>
              <div>9:00 - 20:00</div>
              <div>Tuesday</div>
              <div>9:00 - 20:00</div>
              <div>Wednesday</div>
              <div>9:00 - 20:00</div>
              <div>Thursday</div>
              <div>9:00 - 20:00</div>
              <div>Friday</div>
              <div>9:00 - 20:00</div>
              <div>Saturday</div>
              <div>9:00 - 20:00</div>
              <div>Sunday</div>
              <div>9:00 - 20:00</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
