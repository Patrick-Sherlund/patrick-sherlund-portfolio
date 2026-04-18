import svgPaths from "./svg-pagdlx3wn8";

function Heading() {
  return (
    <div className="absolute h-[85px] left-1/2 top-[227px] translate-x-[-50%] w-[302px]" data-name="Heading 2">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[84.337px] left-[calc(50%-151px)] text-[#111] text-[70.28px] text-nowrap top-0 tracking-[-2.1084px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        The Stack
      </p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[31px] relative shrink-0 w-[130px]" data-name="Container">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[30.642px] left-0 text-[#111] text-[20.428px] text-nowrap top-0 tracking-[3.677px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        Frontend
      </p>
    </div>
  );
}

function React() {
  return (
    <div className="absolute left-[-3.52px] size-[50px] top-px" data-name="react">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g id="react">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p1f6d580} fill="black" fillOpacity="0.302" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2c2ede00} fill="var(--fill-0, black)" fillOpacity="0.989" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Vite() {
  return (
    <div className="absolute inset-[1.96%_61.91%_0_20.51%]" data-name="vite">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g id="vite">
          <path d={svgPaths.p286ccf00} id="Vector" stroke="var(--stroke-0, black)" strokeWidth="1.5" />
          <path clipRule="evenodd" d={svgPaths.p3a97830} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_2" stroke="var(--stroke-0, black)" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[51px] relative shrink-0 w-[284.305px]" data-name="Container">
      <React />
      <p className="absolute font-['Roboto:Light',sans-serif] font-light inset-[9.8%_-113.41%_13.73%_44.93%] leading-[48.516px] text-[32.344px] text-black tracking-[-0.3234px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        React, vite (Typescript, Javascript)
      </p>
      <Vite />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[34.01px] top-[calc(50%-0.5px)] translate-y-[-50%] w-[284.305px]">
      <Container />
      <Container1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[103px] left-[0.26px] rounded-[27.918px] top-0 w-[524px]" data-name="Container">
      <Frame1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[31px] relative shrink-0 w-[115px]" data-name="Container">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[30.642px] left-0 text-[#111] text-[20.428px] text-nowrap top-0 tracking-[3.677px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        Backend
      </p>
    </div>
  );
}

function Cpp() {
  return (
    <div className="absolute left-[0.48px] size-[50px] top-[0.21px]" data-name="cpp">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g id="cpp">
          <path clipRule="evenodd" d={svgPaths.p2e380100} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[50.418px] relative shrink-0 w-[253px]" data-name="Container">
      <p className="absolute font-['Roboto:Light',sans-serif] font-light leading-[48.516px] left-[66px] text-[32.344px] text-black text-nowrap top-0 tracking-[-0.3234px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Drogon (C++)
      </p>
      <Cpp />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[13px] items-start left-[37px] top-[calc(50%-0.5px)] translate-y-[-50%] w-[253px]">
      <Container3 />
      <Container4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[103px] left-[0.26px] rounded-[27.918px] top-[175px] w-[524px]" data-name="Container">
      <Frame />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[31px] relative shrink-0 w-[33px]" data-name="Container">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[30.642px] left-0 text-[#111] text-[20.428px] text-nowrap top-0 tracking-[3.677px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        ML
      </p>
    </div>
  );
}

function Onnx() {
  return (
    <div className="absolute left-[-0.07px] size-[50px] top-[-0.21px]" data-name="onnx">
      <div className="absolute inset-[0_-0.14%_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51 50">
          <g id="onnx">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p394e3670} fill="black" fillOpacity="0.188" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p833e770} fill="var(--fill-0, black)" fillOpacity="0.739" fillRule="evenodd" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[49.573px] relative shrink-0 w-[281.695px]" data-name="Container">
      <p className="absolute font-['Roboto:Light',sans-serif] font-light leading-[48.516px] left-[69.7px] text-[32.344px] text-black text-nowrap top-[0.57px] tracking-[-0.3234px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        ONNX Runtime (C++, Python)
      </p>
      <Onnx />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[41.55px] top-1/2 translate-y-[-50%] w-[282.141px]">
      <Container6 />
      <Container7 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[103px] left-[0.26px] rounded-[27.918px] top-[350px] w-[524px]" data-name="Container">
      <Frame2 />
    </div>
  );
}

function FirstHalf() {
  return (
    <div className="h-[453px] relative shrink-0 w-[633px]" data-name="first half">
      <Container2 />
      <Container5 />
      <Container8 />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[31px] relative shrink-0 w-[61.445px]" data-name="Container">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[30.642px] left-0 text-[#111] text-[20.428px] text-nowrap top-0 tracking-[3.677px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        Data
      </p>
    </div>
  );
}

function Postgresql() {
  return (
    <div className="absolute left-[0.43px] size-[50px] top-[1.22px]" data-name="postgresql">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g id="postgresql">
          <path clipRule="evenodd" d={svgPaths.pc4d6f80} fill="var(--fill-0, black)" fillOpacity="0.989" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[53.437px] relative shrink-0 w-[235.695px]" data-name="Container">
      <p className="absolute font-['Roboto:Light',sans-serif] font-light leading-[48.516px] left-[69.7px] text-[32.344px] text-black text-nowrap top-0 tracking-[-0.3234px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`PostgreSQL `}</p>
      <Postgresql />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[13px] items-start left-[41.55px] top-1/2 translate-y-[-50%] w-[236.141px]">
      <Container9 />
      <Container10 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[103px] left-[0.76px] rounded-[27.918px] top-0 w-[524px]" data-name="Container">
      <Frame3 />
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[31px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[30.642px] left-0 text-[#111] text-[20.428px] text-nowrap top-0 tracking-[3.677px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        Workflow
      </p>
    </div>
  );
}

function Git() {
  return (
    <div className="absolute left-[0.43px] size-[50px] top-[0.23px]" data-name="git">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g id="git">
          <path clipRule="evenodd" d={svgPaths.pa167800} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[49.453px] relative shrink-0 w-[99.695px]" data-name="Container">
      <p className="absolute font-['Roboto:Light',sans-serif] font-light leading-[48.516px] left-[59.7px] text-[32.344px] text-black text-nowrap top-0 tracking-[-0.3234px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Git (Agile)
      </p>
      <Git />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[13px] items-start left-[41.55px] top-1/2 translate-y-[-50%] w-[138px]">
      <Container12 />
      <Container13 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute h-[103px] left-[0.76px] rounded-[27.918px] top-[175px] w-[524px]" data-name="Container">
      <Frame5 />
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[31px] relative shrink-0 w-[73px]" data-name="Container">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[30.642px] left-0 text-[#111] text-[20.428px] text-nowrap top-0 tracking-[3.677px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        Infra
      </p>
    </div>
  );
}

function Docker() {
  return (
    <div className="absolute left-[78.98px] size-[50px] top-[-0.16px]" data-name="docker">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g id="docker">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p3bce4a00} fill="black" fillOpacity="0.639" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.pf303780} fill="var(--fill-0, black)" fillOpacity="0.978" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Aws() {
  return (
    <div className="absolute left-[-0.02px] size-[50px] top-[-0.16px]" data-name="aws">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g id="aws">
          <path clipRule="evenodd" d={svgPaths.p37ede1f0} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[49px] relative shrink-0 w-[347px]" data-name="Container">
      <p className="absolute font-['Roboto:Light',sans-serif] font-light leading-[48.516px] left-[169px] text-[32.344px] text-black text-nowrap top-0 tracking-[-0.3234px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AWS, Docker
      </p>
      <Docker />
      <Aws />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[41px] top-[calc(50%-0.34px)] translate-y-[-50%] w-[347px]">
      <Container15 />
      <Container16 />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute h-[103px] left-[0.76px] rounded-[27.918px] top-[350px] w-[524px]" data-name="Container">
      <Frame4 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="h-[453px] relative shrink-0 w-[525px]">
      <Container11 />
      <Container14 />
      <Container17 />
    </div>
  );
}

function Stack() {
  return (
    <div className="absolute content-stretch flex gap-[190px] items-start left-[calc(50%+0.13px)] pl-[44.261px] pr-0 py-0 top-[482px] translate-x-[-50%]" data-name="stack">
      <FirstHalf />
      <Frame6 />
    </div>
  );
}

export default function TheStack() {
  return (
    <div className="relative size-full" data-name="The stack">
      <Heading />
      <Stack />
    </div>
  );
}