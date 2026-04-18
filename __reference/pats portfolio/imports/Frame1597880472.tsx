import imgDesignIteration1 from "figma:asset/a61f18f13497607b3359ea51dc1ac29e9722f8b6.png";
import imgScreenshot20251201At34750Pm1 from "figma:asset/c7a7d2926739cad6e9ebd9e5018ab99b3405829d.png";
import imgImage7662 from "figma:asset/c9f8840ef979277ff69331440016471a1b456782.png";
import imgScreenshot20241209At122529Pm1 from "figma:asset/abea3eb9330fa5fc4d113663717b0266556c6ac6.png";

function Heading() {
  return <div className="absolute h-[49px] left-[calc(50%+0.06px)] top-[-0.12px] translate-x-[-50%] w-[262px]" data-name="Heading 4" />;
}

function Group() {
  return (
    <div className="absolute contents left-0 top-[98.04px]">
      <div className="absolute h-[445.59px] left-0 pointer-events-none rounded-[43.664px] top-[98.04px] w-[722.804px]" data-name="design_iteration_1">
        <div aria-hidden="true" className="absolute inset-0 rounded-[43.664px]">
          <div className="absolute bg-white inset-0 rounded-[43.664px]" />
          <div className="absolute inset-0 overflow-hidden rounded-[43.664px]">
            <img alt="" className="absolute h-[188.87%] left-[-42.66%] max-w-none top-[-37.98%] w-[155.24%]" src={imgDesignIteration1} />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[0.491px] border-solid border-white inset-[-0.491px] rounded-[44.155px] shadow-[0px_0px_0px_0.061px_rgba(0,0,0,0.2),0px_0px_0.123px_0px_rgba(0,0,0,0.08),0px_0.123px_0.368px_0px_rgba(0,0,0,0.1)]" />
      </div>
      <div className="absolute h-[471.56px] left-[793px] rounded-[49.43px] top-[307.43px] w-[742.435px]" data-name="Screenshot 2025-12-01 at 3.47.50 PM 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[49.43px]">
          <img alt="" className="absolute h-[119.08%] left-0 max-w-none top-[-8.09%] w-full" src={imgScreenshot20251201At34750Pm1} />
        </div>
      </div>
      <div className="absolute h-[465px] left-[1634px] rounded-[35px] top-[98.43px] w-[709.026px]" data-name="image 7662">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[35px] size-full" src={imgImage7662} />
      </div>
      <div className="absolute h-[472.567px] left-[2442px] rounded-[49.43px] shadow-[0px_0px_0px_0.989px_rgba(0,0,0,0.2),0px_0px_1.977px_0px_rgba(0,0,0,0.08),0px_1.977px_5.932px_0px_rgba(0,0,0,0.1)] top-[306.43px] w-[681.873px]" data-name="Screenshot 2024-12-09 at 12.25.29 PM 1">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[49.43px]">
          <div className="absolute bg-white inset-0 rounded-[49.43px]" />
          <div className="absolute inset-0 overflow-hidden rounded-[49.43px]">
            <img alt="" className="absolute h-[120.08%] left-0 max-w-none top-[-13.9%] w-[100.04%]" src={imgScreenshot20241209At122529Pm1} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <Heading />
      <Group />
    </div>
  );
}