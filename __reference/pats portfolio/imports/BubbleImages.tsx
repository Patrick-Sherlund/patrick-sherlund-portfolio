import imgBubble7 from "figma:asset/c4b90c0e9d2fcc58cb45c25fc3a641603f461801.png";
import imgBubble6 from "figma:asset/c5ded1cfb77fd5a5a0d54544e651130e39752059.png";
import imgBubble5 from "figma:asset/d904f53daaba1a31c37e00fb156644c4af4e80e5.png";
import imgBubble4 from "figma:asset/45767f26cdf5a353c43b9dbeffc4b2223dba9c47.png";
import imgBubble3 from "figma:asset/045e7e5023edbc53d97e728a94a03a57da710d1b.png";
import imgBubble2 from "figma:asset/d814839de618ba574b116daa184d98fcfea3b973.png";
import imgBubble1 from "figma:asset/1ca06ad10ee3f4f354867e4fd48454fdf9facf29.png";

export default function BubbleImages() {
  return (
    <div className="gap-[40px] grid-cols-[repeat(3,_fit-content(100%))] grid-rows-[repeat(4,_fit-content(100%))] inline-grid relative size-full" data-name="bubble images">
      <div className="[grid-area:1_/_2] h-[500px] relative shrink-0 w-[933.366px]" data-name="bubble-7">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBubble7} />
      </div>
      <div className="[grid-area:1_/_1] h-[500px] relative shrink-0 w-[934.275px]" data-name="bubble-6">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBubble6} />
      </div>
      <div className="[grid-area:2_/_1] h-[500px] relative shrink-0 w-[926.523px]" data-name="bubble-5">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBubble5} />
      </div>
      <div className="[grid-area:2_/_2] h-[500px] relative shrink-0 w-[939.201px]" data-name="bubble-4">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBubble4} />
      </div>
      <div className="[grid-area:2_/_3] h-[500px] relative shrink-0 w-[927.95px]" data-name="bubble-3">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBubble3} />
      </div>
      <div className="[grid-area:3_/_1] h-[500px] relative rounded-[10.324px] shrink-0 w-[706.111px]" data-name="bubble-2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10.324px] size-full" src={imgBubble2} />
      </div>
      <div className="[grid-area:4_/_1] h-[500px] relative shrink-0 w-[712.087px]" data-name="bubble-1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBubble1} />
      </div>
    </div>
  );
}