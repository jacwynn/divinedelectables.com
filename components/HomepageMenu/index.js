import Image from "next/image";

export default function HomepageMenu() {
  return (
    <section className="mt-[5rem] container px-4 mx-auto lg:px-0 flex items-center justify-between">
      <div className="flex-1">
        <h2 className="text-[1.375rem] lg:text-[2.5rem] font-bold uppercase">
          Menus
        </h2>
        <hr className="w-[60px] border-t-[3px] border-brand-red my-4 mt-5"></hr>
        <p className="text-brand-grey">
          Browse our traditional menus or let us create something new for you.
        </p>
        <div className="mt-8">
          <div className="flex items-center justify-between">
            <Image
              src={`/images/menus/breakfast.svg`}
              alt="breakfast"
              width={160}
              height={140}
            />
            <div>
              <h4 className="mb-3 font-bold text-[1.25rem]">Breakfast</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Image
              src={`/images/menus/appetizers.svg`}
              alt="appetizers"
              width={160}
              height={140}
            />
            <div>
              <h4 className="mb-3 font-bold text-[1.25rem]">Appetizers</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Image
              src={`/images/menus/buffet.svg`}
              alt="buffet"
              width={160}
              height={140}
            />
            <div>
              <h4 className="mb-3 font-bold text-[1.25rem]">Buffet</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Image
              src={`/images/menus/desserts.svg`}
              alt="desserts"
              width={160}
              height={140}
            />
            <div>
              <h4 className="mb-3 font-bold text-[1.25rem]">Desserts</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <Image
          src={`/images/french-toast-plate.png`}
          alt="french toast"
          width={905}
          height={715}
        />
        {/* TODO: need to figure out a way to have these images on the edge */}
        {/* <Image src={`/images/syrup.png`} alt="syrup" width={600} height={200} /> */}
      </div>
    </section>
  );
}
