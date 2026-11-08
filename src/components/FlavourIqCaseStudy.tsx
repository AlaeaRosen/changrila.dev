import { useState } from "react"

const assetPathPrefix = "/assets"
const imgMeetYourMatchesImagePlaceholder = `${assetPathPrefix}/4172d.png`
const imgMayasPortraitImagePlaceholder = `${assetPathPrefix}/5f3c5.png`
const imgAffinityMapInterviewThemesImagePlaceholder = `${assetPathPrefix}/0dc7d.png`
const imgExistingQuizWalkthroughImagePlaceholder = `${assetPathPrefix}/95962.png`
const imgImage133 = `${assetPathPrefix}/1aaac.png`
const imgImage134 = `${assetPathPrefix}/1cc6d.png`
const img75804811 = `${assetPathPrefix}/87688.png`
const imgScreenshot20260922At40311Pm2 = `${assetPathPrefix}/42b3f.png`
const imgUntitledArtwork73 = `${assetPathPrefix}/a8caa.png`
const imgUntitledArtwork74 = `${assetPathPrefix}/b23c2.png`
const imgUntitledArtwork72 = `${assetPathPrefix}/0a711.png`
const imgUntitledArtwork75 = `${assetPathPrefix}/f545a.png`
const imgVanilla = `${assetPathPrefix}/454cf.png`
const imgUntitledArtwork82 = `${assetPathPrefix}/9ef3e.png`
const imgJbbkjkbjPhotoroom1 = `${assetPathPrefix}/a6ac6.png`
const imgJbbkjkbjPhotoroom2 = `${assetPathPrefix}/76804.png`
const imgLrgIllustrationBlackberry = `${assetPathPrefix}/5c50f.png`
const imgUntitledArtwork77 = `${assetPathPrefix}/e0c25.png`
const imgFreshlyCutCedarwood21 = `${assetPathPrefix}/ffa3d.png`
const imgIllustrationScentFlowers = `${assetPathPrefix}/eb288.png`
const imgUntitledArtwork78 = `${assetPathPrefix}/461fd.png`
const imgIllustrationBrewGreenTea = `${assetPathPrefix}/508b3.png`
const imgUntitledArtwork12 = `${assetPathPrefix}/7690e.png`
const imgWine = `${assetPathPrefix}/dcd52.png`
const imgRectangle209 = `${assetPathPrefix}/d6942.png`
const imgEllipse48 = `${assetPathPrefix}/1b77b.png`
const imgEllipse49 = `${assetPathPrefix}/b6a9b.png`
const imgEllipse50 = `${assetPathPrefix}/2e5f8.png`
const imgEllipse51 = `${assetPathPrefix}/e7bb7.png`
const imgEllipse52 = `${assetPathPrefix}/252c5.png`
const imgGgvjuPhotoroom3 = `${assetPathPrefix}/b5e9e.png`
const imgEllipse53 = `${assetPathPrefix}/18354.png`
const imgEllipse54 = `${assetPathPrefix}/8aa50.png`
const imgEllipse55 = `${assetPathPrefix}/13ab1.png`
const imgEllipse56 = `${assetPathPrefix}/d6a5a.png`
const imgEllipse57 = `${assetPathPrefix}/8cf65.png`
const imgEllipse58 = `${assetPathPrefix}/e09a9.png`
const imgFlavourQiInterviewQuestions3 = `${assetPathPrefix}/11a59.png`
const imgSocialEmojiEvents = `${assetPathPrefix}/b13d8.svg`
const imgAi = `${assetPathPrefix}/3efd9.svg`
const imgChocolateDessertCocoaChocolate = `${assetPathPrefix}/1a14a.svg`
const imgCandyWrapSweetFoodCandy = `${assetPathPrefix}/8ee38.svg`
const imgCookieBiteCookieBiscuitSweetChocolateChipsBite = `${assetPathPrefix}/4f226.svg`
const imgSocialEmojiEvents1 = `${assetPathPrefix}/c0d5e.svg`
const imgEllipse36 = `${assetPathPrefix}/4cc6d.svg`
const imgEllipse37 = `${assetPathPrefix}/48322.svg`
const imgEllipse38 = `${assetPathPrefix}/1e2fb.svg`
const imgEllipse39 = `${assetPathPrefix}/ad940.svg`
const imgEllipse40 = `${assetPathPrefix}/7c7ad.svg`
const imgEllipse41 = `${assetPathPrefix}/5f98a.svg`
const imgLinkLine = `${assetPathPrefix}/30ada.svg`
const imgUntitledArtwork76 = `${assetPathPrefix}/681d5.svg`
const imgUntitledArtwork13 = `${assetPathPrefix}/0976d.svg`
const imgUntitledArtwork83 = `${assetPathPrefix}/269be.svg`
const imgUntitledArtwork79 = `${assetPathPrefix}/e9924.svg`
const imgUntitledArtwork21 = `${assetPathPrefix}/285b6.svg`
const imgUntitledArtwork51 = `${assetPathPrefix}/6a2f9.svg`
const imgUntitledArtwork80 = `${assetPathPrefix}/05b0a.svg`
const imgTouchOther = `${assetPathPrefix}/c5159.svg`
const imgTouchHerbal = `${assetPathPrefix}/08b65.svg`
const imgTouchFloral = `${assetPathPrefix}/541a7.svg`
const imgTouchFruity = `${assetPathPrefix}/e152f.svg`
const imgTouchWoody = `${assetPathPrefix}/bc6ad.svg`
const imgFigma = `${assetPathPrefix}/f0362.svg`
const imgGlobe = `${assetPathPrefix}/95966.svg`

const COFFEE_NOTE_DESCRIPTIONS = {
  chocolate: [
    "Deep, rich and gently bitter, like dark cocoa. Adds body and a smooth, lingering finish. ",
    "Great if you like bold flavours over light ones.",
  ],
  toffee: [
    "Warm, caramelised sweetness with a buttery mouthfeel that rounds out espresso acidity.",
    "Ideal if you enjoy smooth, comforting cups.",
  ],
  biscotti: [
    "Toasted almond and baked biscuit notes that bring a subtle nutty crunch to the finish.",
    "Perfect for those who love café-style warmth.",
  ],
} as const

export default function FlavourIqCaseStudy({ onNext }: { onNext: () => void }) {
  const [selectedNote, setSelectedNote] =
    useState<keyof typeof COFFEE_NOTE_DESCRIPTIONS>("chocolate")

  return (
    <div
      className="compact-case-study relative mx-auto flex w-full max-w-[1158px] flex-col items-start gap-[80px] pt-2 pb-[60px]"
      style={{ animation: "fade-in 0.5s both" }}
      data-node-id="220:1854"
      data-name="FlavourIQ — Case study"
    >
      {/* Project introduction */}
      <div
        className="relative flex w-full shrink-0 flex-col items-start gap-[40px]"
        data-node-id="220:1855"
        data-name="Project introduction"
      >
        <p
          data-scroll-section="Overview"
          className="[word-break:break-word] relative shrink-0 whitespace-pre font-['SF_Compact:Regular'] text-[20px] font-[457.8999938964844] leading-[normal] tracking-[2px] text-[#c9a84c]"
          data-node-id="220:1856"
        >{`FLAVOURIQ  /  UX·UI CASE STUDY`}</p>
        <div
          className="[word-break:break-word] relative w-full max-w-[1100px] shrink-0 font-['Gugi:Regular'] text-[clamp(34px,4.2vw,57px)] not-italic leading-[0] text-white"
          data-node-id="220:1857"
        >
          <p className="mb-0 leading-[1.2]">From a Guessing Game</p>
          <p className="leading-[1.2]">to a Guided Taste Match</p>
        </div>
        <div
          className="relative flex aspect-[1158/600] w-full shrink-0 flex-col items-start justify-between rounded-[12px] border border-solid border-[rgba(201,168,76,0.6)] p-[24px]"
          data-node-id="220:1858"
          data-name="Meet your matches — Image placeholder"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[12px]"
          >
            <div className="absolute inset-0 rounded-[12px] bg-[#162a42]" />
            <img
              alt=""
              className="absolute size-full max-w-none rounded-[12px] object-cover"
              src={imgMeetYourMatchesImagePlaceholder}
            />
          </div>
        </div>
        <div
          className="relative flex w-full shrink-0 flex-col items-start gap-[40px] pt-[8px] lg:flex-row lg:gap-[64px]"
          data-node-id="220:1859"
          data-name="Project overview"
        >
          <div
            className="relative flex w-full shrink-0 flex-col items-start gap-[24px] lg:w-[68%]"
            data-node-id="220:1860"
            data-name="Overview narrative"
          >
            <div
              className="relative flex shrink-0 flex-wrap items-start gap-[10px]"
              data-node-id="220:1861"
              data-name="Project disciplines"
            >
              <div
                className="relative flex shrink-0 items-start overflow-clip rounded-[40px] bg-[#c9a84c] px-[12px] py-[5px]"
                data-node-id="220:1862"
                data-name="Project tag"
              >
                <p
                  className="[word-break:break-word] relative shrink-0 whitespace-nowrap font-['SF_Compact:Regular'] text-[16px] font-[457.8999938964844] leading-[normal] text-[#152741]"
                  data-node-id="220:1863"
                >
                  Figma
                </p>
              </div>
              <div
                className="relative flex shrink-0 items-start overflow-clip rounded-[40px] bg-[#c9a84c] px-[12px] py-[5px]"
                data-node-id="220:1864"
                data-name="Project tag"
              >
                <p
                  className="[word-break:break-word] relative shrink-0 whitespace-nowrap font-['SF_Compact:Regular'] text-[16px] font-[457.8999938964844] leading-[normal] text-[#152741]"
                  data-node-id="220:1865"
                >
                  Prototyping
                </p>
              </div>
              <div
                className="relative flex shrink-0 items-start overflow-clip rounded-[40px] bg-[#c9a84c] px-[12px] py-[5px]"
                data-node-id="220:1866"
                data-name="Project tag"
              >
                <p
                  className="[word-break:break-word] relative shrink-0 whitespace-nowrap font-['SF_Compact:Regular'] text-[16px] font-[457.8999938964844] leading-[normal] text-[#152741]"
                  data-node-id="220:1867"
                >
                  UX design
                </p>
              </div>
              <div
                className="relative flex shrink-0 items-start overflow-clip rounded-[40px] bg-[#c9a84c] px-[12px] py-[5px]"
                data-node-id="220:1868"
                data-name="Project tag"
              >
                <p
                  className="[word-break:break-word] relative shrink-0 whitespace-nowrap font-['SF_Compact:Regular'] text-[16px] font-[457.8999938964844] leading-[normal] text-[#152741]"
                  data-node-id="220:1869"
                >
                  UI design
                </p>
              </div>
            </div>
            <p
              className="[word-break:break-word] relative shrink-0 whitespace-nowrap font-['Gugi:Regular'] text-[35px] not-italic leading-[normal] text-white"
              data-node-id="220:1870"
            >
              Overview
            </p>
            <p
              className="[word-break:break-word] relative w-full shrink-0 font-['SF_Compact:Regular'] text-[25px] font-[457.8999938964844] leading-[1.55] text-[#c8d0da]"
              data-node-id="220:1871"
            >
              FlavourIQ’s existing wine quiz could score a match, but it
              couldn’t explain it. The brief: carry that same engine into coffee
              and tea, and close the explanation gap along the way.
            </p>
            <div
              className="relative flex w-full shrink-0 items-start gap-[20px] overflow-clip rounded-[12px] bg-[#1c3354] p-[24px]"
              data-node-id="220:1872"
              data-name="Opening participant quote"
            >
              <div
                className="relative h-[110px] w-[4px] shrink-0 rounded-[2px] bg-[#c9a84c]"
                data-node-id="220:1873"
                data-name="Quote accent"
              />
              <div
                className="[word-break:break-word] relative flex min-w-px flex-[1_0_0] flex-col items-start gap-[12px] font-['SF_Compact:Regular'] font-[457.8999938964844]"
                data-node-id="220:1874"
                data-name="Quote content"
              >
                <p
                  className="relative w-full shrink-0 text-[28px] leading-[1.4] text-white"
                  data-node-id="220:1875"
                >{`“I can see the wheel, but I'm not sure what the 33% means for me.”`}</p>
                <p
                  className="relative shrink-0 whitespace-nowrap text-[17px] leading-[normal] text-[#c9a84c]"
                  data-node-id="220:1876"
                >
                  Participant C · Existing experience
                </p>
              </div>
            </div>
          </div>
          <div
            className="[word-break:break-word] relative flex min-w-px flex-[1_0_0] flex-col items-start gap-[30px] font-['SF_Compact:Regular'] font-[457.8999938964844]"
            data-node-id="220:1877"
            data-name="Project details"
          >
            <div
              className="relative flex w-full shrink-0 flex-col items-start gap-[8px]"
              data-node-id="220:1878"
              data-name="Project detail"
            >
              <p
                className="relative shrink-0 whitespace-nowrap text-[20px] uppercase leading-[normal] text-white"
                data-node-id="220:1879"
              >
                Role
              </p>
              <p
                className="relative w-full shrink-0 text-[23px] leading-[1.35] text-[#c8d0da]"
                data-node-id="220:1880"
              >
                UX and UI Designer, Prototyping
              </p>
            </div>
            <div
              className="relative flex w-full shrink-0 flex-col items-start gap-[8px]"
              data-node-id="220:1881"
              data-name="Project detail"
            >
              <p
                className="relative shrink-0 whitespace-nowrap text-[20px] uppercase leading-[normal] text-white"
                data-node-id="220:1882"
              >
                Team
              </p>
              <p
                className="relative w-full shrink-0 text-[23px] leading-[1.35] text-[#c8d0da]"
                data-node-id="220:1883"
              >{`7 (+ founder & mentor)`}</p>
            </div>
            <div
              className="relative flex w-full shrink-0 flex-col items-start gap-[8px]"
              data-node-id="220:1884"
              data-name="Project detail"
            >
              <p
                className="relative shrink-0 whitespace-nowrap text-[20px] uppercase leading-[normal] text-white"
                data-node-id="220:1885"
              >
                Timeline
              </p>
              <p
                className="relative w-full shrink-0 text-[23px] leading-[1.35] text-[#c8d0da]"
                data-node-id="220:1886"
              >
                8 weeks
              </p>
            </div>
            <div
              className="relative flex w-full shrink-0 flex-col items-start gap-[8px]"
              data-node-id="220:1887"
              data-name="Project detail"
            >
              <p
                className="relative shrink-0 whitespace-nowrap text-[20px] uppercase leading-[normal] text-white"
                data-node-id="220:1888"
              >
                Client
              </p>
              <div
                className="relative w-full shrink-0 text-[23px] leading-[0] text-[#c8d0da]"
                data-node-id="220:1889"
              >
                <p className="mb-0 leading-[1.35]">Daniel Wan</p>
                <p className="leading-[1.35]">Founder of FlavourIQ</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 01 The Brief */}
      <div
        className="relative flex w-full shrink-0 flex-col items-start gap-[32px]"
        data-node-id="220:1890"
        data-name="The brief"
      >
        <div
          className="relative flex w-full shrink-0 flex-col items-start gap-[20px]"
          data-node-id="220:1891"
          data-name="Section heading"
        >
          <div
            className="relative h-px w-full shrink-0 bg-[rgba(201,168,76,0.4)]"
            data-node-id="220:1892"
            data-name="Section divider"
          />
          <div
            className="relative flex w-full shrink-0 items-center gap-[16px] pt-[18px]"
            data-node-id="220:1893"
            data-name="Chapter"
          >
            <div
              className="relative flex size-[36px] shrink-0 flex-col items-center justify-center overflow-clip rounded-[36px] bg-[#c9a84c]"
              data-node-id="220:1894"
              data-name="Chapter marker"
            >
              <p
                className="[word-break:break-word] relative shrink-0 whitespace-nowrap font-['Gugi:Regular'] text-[14px] not-italic leading-[normal] text-[#152741]"
                data-node-id="220:1895"
              >
                01
              </p>
            </div>
            <p
              data-scroll-section="The Brief"
              className="[word-break:break-word] relative min-w-px flex-[1_0_0] font-['Gugi:Regular'] text-[40px] not-italic leading-[normal] text-white"
              data-node-id="220:1896"
            >
              The Brief
            </p>
          </div>
          <p
            className="[word-break:break-word] relative w-full shrink-0 font-['SF_Compact:Regular'] text-[20px] font-[457.8999938964844] uppercase leading-[normal] tracking-[2px] text-[#c9a84c]"
            data-node-id="220:1897"
          >
            One platform. New tastes. A clearer explanation.
          </p>
        </div>
        <p
          className="[word-break:break-word] relative w-full shrink-0 font-['SF_Compact:Regular'] text-[25px] font-[457.8999938964844] leading-[1.55] text-[#c8d0da]"
          data-node-id="220:1898"
        >
          FlavourIQ already existed as a wine quiz and recommendation platform.
          The challenge was to expand the experience without starting from
          scratch.
        </p>
        <div
          className="[word-break:break-word] relative flex w-full shrink-0 flex-col items-start gap-[16px] overflow-clip rounded-[12px] border border-solid border-[rgba(201,168,76,0.4)] bg-[#1c3354] p-[32px] font-['SF_Compact:Regular'] font-[457.8999938964844]"
          data-node-id="220:1899"
          data-name="Design challenge"
        >
          <p
            className="relative shrink-0 whitespace-nowrap text-[17px] leading-[normal] tracking-[2px] text-[#c9a84c]"
            data-node-id="220:1900"
          >
            HOW MIGHT WE
          </p>
          <p
            className="relative w-full shrink-0 text-[30px] leading-[1.45] text-white"
            data-node-id="220:1901"
          >{`How might we expand FlavourIQ's wine platform into coffee and tea through more engaging and personalised experiences?`}</p>
        </div>
        <div
          className="[word-break:break-word] relative grid w-full shrink-0 grid-cols-1 gap-[20px] text-[25px] md:grid-cols-3"
          data-node-id="220:1902"
          data-name="Project objectives"
        >
          <div
            className="relative flex flex-col items-start gap-[18px] overflow-clip rounded-[8px] bg-[#1c3354] p-[24px]"
            data-node-id="220:1903"
            data-name="Objective"
          >
            <p
              className="relative shrink-0 whitespace-nowrap font-['Gugi:Regular'] not-italic leading-[normal] text-[#c9a84c]"
              data-node-id="220:1904"
            >
              01
            </p>
            <p
              className="relative w-full shrink-0 font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[1.45] text-[#c8d0da]"
              data-node-id="220:1905"
            >
              Build on the existing wine platform.
            </p>
          </div>
          <div
            className="relative flex flex-col items-start gap-[18px] overflow-clip rounded-[8px] bg-[#1c3354] p-[24px]"
            data-node-id="220:1906"
            data-name="Objective"
          >
            <p
              className="relative shrink-0 whitespace-nowrap font-['Gugi:Regular'] not-italic leading-[normal] text-[#c9a84c]"
              data-node-id="220:1907"
            >
              02
            </p>
            <p
              className="relative w-full shrink-0 font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[1.45] text-[#c8d0da]"
              data-node-id="220:1908"
            >
              Adapt quiz questions and flavour profiles.
            </p>
          </div>
          <div
            className="relative flex flex-col items-start gap-[18px] overflow-clip rounded-[8px] bg-[#1c3354] p-[24px]"
            data-node-id="220:1909"
            data-name="Objective"
          >
            <p
              className="relative shrink-0 whitespace-nowrap font-['Gugi:Regular'] not-italic leading-[normal] text-[#c9a84c]"
              data-node-id="220:1910"
            >
              03
            </p>
            <p
              className="relative w-full shrink-0 font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[1.45] text-[#c8d0da]"
              data-node-id="220:1911"
            >
              Tailor recommendations to coffee and tea consumers’ unique tastes.
            </p>
          </div>
        </div>
      </div>

      {/* 02 Who We Designed For */}
      <div
        className="relative flex w-full shrink-0 flex-col items-start gap-[32px]"
        data-node-id="220:1912"
        data-name="Who we designed for"
      >
        <div
          className="relative flex w-full shrink-0 flex-col items-start gap-[20px]"
          data-node-id="220:1913"
          data-name="Section heading"
        >
          <div
            className="relative h-px w-full shrink-0 bg-[rgba(201,168,76,0.4)]"
            data-node-id="220:1914"
            data-name="Section divider"
          />
          <div
            className="relative flex w-full shrink-0 items-center gap-[16px] pt-[18px]"
            data-node-id="220:1915"
            data-name="Chapter"
          >
            <div
              className="relative flex size-[36px] shrink-0 flex-col items-center justify-center overflow-clip rounded-[36px] bg-[#c9a84c]"
              data-node-id="220:1916"
              data-name="Chapter marker"
            >
              <p
                className="[word-break:break-word] relative shrink-0 whitespace-nowrap font-['Gugi:Regular'] text-[14px] not-italic leading-[normal] text-[#152741]"
                data-node-id="220:1917"
              >
                02
              </p>
            </div>
            <p
              data-scroll-section="Who We Designed For"
              className="[word-break:break-word] relative min-w-px flex-[1_0_0] font-['Gugi:Regular'] text-[40px] not-italic leading-[normal] text-white"
              data-node-id="220:1918"
            >
              Who We Designed For
            </p>
          </div>
          <p
            className="[word-break:break-word] relative w-full shrink-0 font-['SF_Compact:Regular'] text-[20px] font-[457.8999938964844] uppercase leading-[normal] tracking-[2px] text-[#c9a84c]"
            data-node-id="220:1919"
          >
            The familiar-choice explorer
          </p>
        </div>
        <div
          className="relative flex w-full shrink-0 flex-col items-start gap-[36px] overflow-clip rounded-[12px] bg-[#1c3354] p-[32px] lg:flex-row"
          data-node-id="220:1920"
          data-name="Persona profile"
        >
          <div
            className="relative flex w-full shrink-0 flex-col items-start gap-[24px] lg:w-[280px]"
            data-node-id="220:1921"
            data-name="Portrait and context"
          >
            <div
              className="relative flex h-[350px] w-full max-w-[280px] shrink-0 flex-col items-start justify-between rounded-[12px] border border-solid border-[rgba(201,168,76,0.6)] p-[24px]"
              data-node-id="220:1922"
              data-name="Maya’s portrait — Image placeholder"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[12px]"
              >
                <div className="absolute inset-0 rounded-[12px] bg-[#162a42]" />
                <div className="absolute inset-0 overflow-hidden rounded-[12px]">
                  <img
                    alt="Maya portrait"
                    className="absolute left-[-2.31%] top-[-5.61%] h-[111.15%] w-[247%] max-w-none"
                    src={imgMayasPortraitImagePlaceholder}
                  />
                </div>
              </div>
            </div>
            <p
              className="[word-break:break-word] relative w-full shrink-0 font-['SF_Compact:Regular'] text-[22px] font-[457.8999938964844] leading-[1.5] text-[#c8d0da]"
              data-node-id="220:1923"
            >
              A university student in Sydney exploring her coffee and tea
              choices.
            </p>
          </div>
          <div
            className="[word-break:break-word] relative flex min-w-px flex-[1_0_0] flex-col items-start gap-[32px] font-['SF_Compact:Regular'] font-[457.8999938964844]"
            data-node-id="220:1924"
            data-name="Persona detail"
          >
            <p
              className="relative shrink-0 whitespace-nowrap text-[17px] leading-[normal] tracking-[2px] text-[#c9a84c]"
              data-node-id="220:1925"
            >
              PERSONA
            </p>
            <p
              className="relative w-full shrink-0 text-[34px] leading-[1.25] text-white"
              data-node-id="220:1926"
            >
              Maya — The Familiar-Choice Explorer
            </p>
            <div
              className="relative grid w-full shrink-0 grid-cols-1 gap-[32px] md:grid-cols-2"
              data-node-id="220:1927"
              data-name="Needs and goals"
            >
              <div
                className="relative flex flex-col items-start gap-[12px]"
                data-node-id="220:1928"
                data-name="Persona facet"
              >
                <p
                  className="relative shrink-0 whitespace-nowrap text-[20px] uppercase leading-[normal] text-[#c9a84c]"
                  data-node-id="220:1929"
                >
                  Core need
                </p>
                <p
                  className="relative w-full shrink-0 text-[23px] leading-[1.55] text-[#c8d0da]"
                  data-node-id="220:1930"
                >
                  A clear explanation of what a new flavour will taste like
                  before committing.
                </p>
              </div>
              <div
                className="relative flex flex-col items-start gap-[12px]"
                data-node-id="220:1931"
                data-name="Persona facet"
              >
                <p
                  className="relative shrink-0 whitespace-nowrap text-[20px] uppercase leading-[normal] text-[#c9a84c]"
                  data-node-id="220:1932"
                >
                  Goals
                </p>
                <div
                  className="relative w-full shrink-0 text-[23px] leading-[0] text-[#c8d0da]"
                  data-node-id="220:1933"
                >
                  <p className="mb-0 leading-[1.55]">
                    Try new drinks confidently.
                  </p>
                  <p className="mb-0 leading-[1.55]">
                    Understand her preferences.
                  </p>
                  <p className="leading-[1.55]">
                    Find options beyond her routine.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="relative grid w-full shrink-0 grid-cols-1 gap-[32px] md:grid-cols-2"
              data-node-id="220:1934"
              data-name="Barriers and habits"
            >
              <div
                className="relative flex flex-col items-start gap-[12px]"
                data-node-id="220:1935"
                data-name="Persona facet"
              >
                <p
                  className="relative shrink-0 whitespace-nowrap text-[20px] uppercase leading-[normal] text-[#c9a84c]"
                  data-node-id="220:1936"
                >
                  Pain points
                </p>
                <div
                  className="relative w-full shrink-0 text-[23px] leading-[0] text-[#c8d0da]"
                  data-node-id="220:1937"
                >
                  <p className="mb-0 leading-[1.55]">
                    Unfamiliar flavour terms.
                  </p>
                  <p className="mb-0 leading-[1.55]">
                    Questions that feel too long.
                  </p>
                  <p className="leading-[1.55]">
                    Recommendations that ignore dislikes.
                  </p>
                </div>
              </div>
              <div
                className="relative flex flex-col items-start gap-[12px]"
                data-node-id="220:1938"
                data-name="Persona facet"
              >
                <p
                  className="relative shrink-0 whitespace-nowrap text-[20px] uppercase leading-[normal] text-[#c9a84c]"
                  data-node-id="220:1939"
                >
                  Decision habits
                </p>
                <div
                  className="relative w-full shrink-0 text-[23px] leading-[0] text-[#c8d0da]"
                  data-node-id="220:1940"
                >
                  <p className="mb-0 leading-[1.55]">
                    Starts with familiar drinks.
                  </p>
                  <p className="mb-0 leading-[1.55]">
                    Trusts friends’ suggestions.
                  </p>
                  <p className="leading-[1.55]">Tries new tastes socially.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p
          className="[word-break:break-word] relative w-full shrink-0 font-['SF_Compact:Regular'] text-[18px] font-[457.8999938964844] leading-[1.55] text-[#8a9aae]"
          data-node-id="220:1941"
        >
          Persona synthesised from recurring interview patterns, not from a
          single participant.
        </p>
      </div>

      {/* 03 Research */}
      <div
        className="relative flex w-full shrink-0 flex-col items-start gap-[32px]"
        data-node-id="220:1942"
        data-name="Research"
      >
        <div
          className="relative flex w-full shrink-0 flex-col items-start gap-[20px]"
          data-node-id="220:1943"
          data-name="Section heading"
        >
          <div
            className="relative h-px w-full shrink-0 bg-[rgba(201,168,76,0.4)]"
            data-node-id="220:1944"
            data-name="Section divider"
          />
          <div
            className="relative flex w-full shrink-0 items-center gap-[16px] pt-[18px]"
            data-node-id="220:1945"
            data-name="Chapter"
          >
            <div
              className="relative flex size-[36px] shrink-0 flex-col items-center justify-center overflow-clip rounded-[36px] bg-[#c9a84c]"
              data-node-id="220:1946"
              data-name="Chapter marker"
            >
              <p
                className="[word-break:break-word] relative shrink-0 whitespace-nowrap font-['Gugi:Regular'] text-[14px] not-italic leading-[normal] text-[#152741]"
                data-node-id="220:1947"
              >
                03
              </p>
            </div>
            <p
              data-scroll-section="Research"
              className="[word-break:break-word] relative min-w-px flex-[1_0_0] font-['Gugi:Regular'] text-[40px] not-italic leading-[normal] text-white"
              data-node-id="220:1948"
            >
              Research
            </p>
          </div>
          <p
            className="[word-break:break-word] relative w-full shrink-0 font-['SF_Compact:Regular'] text-[20px] font-[457.8999938964844] uppercase leading-[normal] tracking-[2px] text-[#c9a84c]"
            data-node-id="220:1949"
          >
            Finding the explanation gap
          </p>
        </div>
        <div
          className="relative flex w-full shrink-0 flex-wrap items-start gap-[12px]"
          data-node-id="220:1950"
          data-name="Research methods"
        >
          {[
            "Affinity Mapping",
            "Cognitive Walkthrough",
            "Competitor Analysis",
            "User Interviews",
          ].map((method, idx) => (
            <div
              key={method}
              className="relative flex shrink-0 items-start overflow-clip rounded-[40px] border border-solid border-[rgba(201,168,76,0.4)] bg-[#1c3354] px-[20px] py-[10px]"
              data-node-id={`220:${1951 + idx * 2}`}
              data-name="Method"
            >
              <p className="[word-break:break-word] relative shrink-0 whitespace-nowrap font-['SF_Compact:Regular'] text-[20px] font-[457.8999938964844] leading-[normal] text-[#c8d0da]">
                {method}
              </p>
            </div>
          ))}
        </div>
        <div
          className="relative grid w-full shrink-0 grid-cols-1 items-start gap-[32px] lg:grid-cols-[610fr_516fr]"
          data-node-id="220:1959"
          data-name="Evidence and artefacts"
        >
          <div
            className="relative flex w-full shrink-0 flex-col items-start gap-[20px]"
            data-node-id="220:1960"
            data-name="Research findings"
          >
            <div
              className="relative flex w-full shrink-0 flex-col items-start gap-[16px] overflow-clip rounded-[8px] bg-[#1c3354] p-[24px]"
              data-node-id="220:1961"
              data-name="Research finding"
            >
              <p
                className="[word-break:break-word] relative w-full shrink-0 font-['SF_Compact:Regular'] text-[28px] font-[457.8999938964844] leading-[1.3] text-white"
                data-node-id="220:1962"
              >
                Unfamiliar wording stops people before they start
              </p>
              <p
                className="[word-break:break-word] relative w-full shrink-0 whitespace-pre-wrap font-['SF_Compact:Regular'] text-[23px] font-[457.8999938964844] leading-[1.45] text-[#c8d0da]"
                data-node-id="220:1963"
              >{`Wine terminology  made it difficult for participants to imagine an answer.`}</p>
              <div
                className="relative flex w-full shrink-0 items-start gap-[16px]"
                data-node-id="220:1964"
                data-name="Interview quote"
              >
                <div
                  className="relative h-[70px] w-[3px] shrink-0 bg-[#c9a84c]"
                  data-node-id="220:1965"
                  data-name="Quote accent"
                />
                <div
                  className="[word-break:break-word] relative flex min-w-px flex-[1_0_0] flex-col items-start gap-[10px] font-['SF_Compact:Regular'] font-[457.8999938964844]"
                  data-node-id="220:1966"
                  data-name="Participant evidence"
                >
                  <p
                    className="relative w-full shrink-0 text-[23px] leading-[1.4] text-white"
                    data-node-id="220:1967"
                  >
                    “Hard to imagine.”
                  </p>
                  <p
                    className="relative shrink-0 whitespace-nowrap text-[17px] leading-[normal] text-[#c9a84c]"
                    data-node-id="220:1968"
                  >
                    Participant A
                  </p>
                </div>
              </div>
            </div>

            <div
              className="relative flex w-full shrink-0 flex-col items-start gap-[16px] overflow-clip rounded-[8px] bg-[#1c3354] p-[24px]"
              data-node-id="220:1969"
              data-name="Research finding"
            >
              <p
                className="[word-break:break-word] relative w-full shrink-0 font-['SF_Compact:Regular'] text-[28px] font-[457.8999938964844] leading-[1.3] text-white"
                data-node-id="220:1970"
              >
                The quiz jumped between unrelated worlds
              </p>
              <p
                className="[word-break:break-word] relative w-full shrink-0 font-['SF_Compact:Regular'] text-[23px] font-[457.8999938964844] leading-[1.45] text-[#c8d0da]"
                data-node-id="220:1971"
              >
                Dessert, wine and food questions demanded repeated mental
                context switching.
              </p>
              <div
                className="relative flex w-full shrink-0 items-start gap-[16px]"
                data-node-id="220:1972"
                data-name="Interview quote"
              >
                <div
                  className="relative h-[70px] w-[3px] shrink-0 bg-[#c9a84c]"
                  data-node-id="220:1973"
                  data-name="Quote accent"
                />
                <div
                  className="[word-break:break-word] relative flex min-w-px flex-[1_0_0] flex-col items-start gap-[10px] font-['SF_Compact:Regular'] font-[457.8999938964844]"
                  data-node-id="220:1974"
                  data-name="Participant evidence"
                >
                  <p
                    className="relative w-full shrink-0 text-[23px] leading-[1.4] text-white"
                    data-node-id="220:1975"
                  >{`“Sometimes it's drink, sometimes it's wine, sometimes it's food.”`}</p>
                  <p
                    className="relative shrink-0 whitespace-nowrap text-[17px] leading-[normal] text-[#c9a84c]"
                    data-node-id="220:1976"
                  >
                    Participant B
                  </p>
                </div>
              </div>
            </div>

            <div
              className="relative flex w-full shrink-0 flex-col items-start gap-[16px] overflow-clip rounded-[8px] bg-[#1c3354] p-[24px]"
              data-node-id="220:1977"
              data-name="Research finding"
            >
              <p
                className="[word-break:break-word] relative w-full shrink-0 font-['SF_Compact:Regular'] text-[28px] font-[457.8999938964844] leading-[1.3] text-white"
                data-node-id="220:1978"
              >
                A score without a reason reads as arbitrary
              </p>
              <p
                className="[word-break:break-word] relative w-full shrink-0 font-['SF_Compact:Regular'] text-[23px] font-[457.8999938964844] leading-[1.45] text-[#c8d0da]"
                data-node-id="220:1979"
              >
                The flavour wheel and match percentage already existed, but no
                clear explanation connected them.
              </p>
              <div
                className="relative flex w-full shrink-0 items-start gap-[16px]"
                data-node-id="220:1980"
                data-name="Interview quote"
              >
                <div
                  className="relative h-[70px] w-[3px] shrink-0 bg-[#c9a84c]"
                  data-node-id="220:1981"
                  data-name="Quote accent"
                />
                <div
                  className="[word-break:break-word] relative flex min-w-px flex-[1_0_0] flex-col items-start gap-[10px] font-['SF_Compact:Regular'] font-[457.8999938964844]"
                  data-node-id="220:1982"
                  data-name="Participant evidence"
                >
                  <p
                    className="relative w-full shrink-0 text-[23px] leading-[1.4] text-white"
                    data-node-id="220:1983"
                  >{`“I can see the wheel, but I'm not sure what the 33% means for me.”`}</p>
                  <p
                    className="relative shrink-0 whitespace-nowrap text-[17px] leading-[normal] text-[#c9a84c]"
                    data-node-id="220:1984"
                  >
                    Participant C
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="relative flex min-w-px flex-col items-start gap-[24px]"
            data-node-id="220:1985"
            data-name="Research artefacts"
          >
            <div
              className="relative flex h-[520px] w-full shrink-0 flex-col items-start justify-between rounded-[12px] border border-solid border-[rgba(201,168,76,0.6)] p-[24px]"
              data-node-id="220:1986"
              data-name="Affinity map & interview themes — Image placeholder"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[12px]"
              >
                <div className="absolute inset-0 rounded-[12px] bg-[#162a42]" />
                <div className="absolute inset-0 overflow-hidden rounded-[12px]">
                  <img
                    alt=""
                    className="absolute left-0 top-[-8.11%] h-[122.26%] w-full max-w-none object-cover"
                    src={imgAffinityMapInterviewThemesImagePlaceholder}
                  />
                </div>
              </div>
            </div>
            <div
              className="relative flex h-[520px] w-full shrink-0 flex-col items-start justify-between rounded-[12px] border border-solid border-[rgba(201,168,76,0.6)] p-[24px]"
              data-node-id="220:1987"
              data-name="Existing quiz walkthrough — Image placeholder"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[12px]"
              >
                <div className="absolute inset-0 rounded-[12px] bg-[#162a42]" />
                <div className="absolute inset-0 overflow-hidden rounded-[12px]">
                  <img
                    alt=""
                    className="absolute left-[-0.01%] top-[-4.87%] h-[121.82%] w-full max-w-none object-cover"
                    src={imgExistingQuizWalkthroughImagePlaceholder}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <p
          className="[word-break:break-word] relative w-full shrink-0 font-['SF_Compact:Regular'] text-[18px] font-[457.8999938964844] leading-[1.55] text-[#8a9aae]"
          data-node-id="220:1988"
        >
          33% is a quoted value from the existing interface, not a project
          outcome or testing result.
        </p>
      </div>

      {/* 04 Key Findings */}
      <div
        className="relative flex w-full shrink-0 flex-col items-start gap-[24px]"
        data-node-id="220:1989"
        data-name="Key findings and principles"
      >
        <div
          className="relative flex w-full shrink-0 flex-col items-start gap-[20px]"
          data-node-id="220:1990"
          data-name="Section heading"
        >
          <div
            className="relative h-px w-full shrink-0 bg-[rgba(201,168,76,0.4)]"
            data-node-id="220:1991"
            data-name="Section divider"
          />
          <div
            className="relative flex w-full shrink-0 items-center gap-[16px] pt-[18px]"
            data-node-id="220:1992"
            data-name="Chapter"
          >
            <div
              className="relative flex size-[36px] shrink-0 flex-col items-center justify-center overflow-clip rounded-[36px] bg-[#c9a84c]"
              data-node-id="220:1993"
              data-name="Chapter marker"
            >
              <p
                className="[word-break:break-word] relative shrink-0 whitespace-nowrap font-['Gugi:Regular'] text-[14px] not-italic leading-[normal] text-[#152741]"
                data-node-id="220:1994"
              >
                04
              </p>
            </div>
            <p
              data-scroll-section="Key Findings"
              className="[word-break:break-word] relative min-w-px flex-[1_0_0] font-['Gugi:Regular'] text-[40px] not-italic leading-[normal] text-white"
              data-node-id="220:1995"
            >
              Key Findings
            </p>
          </div>
          <p
            className="[word-break:break-word] relative w-full shrink-0 font-['SF_Compact:Regular'] text-[20px] font-[457.8999938964844] uppercase leading-[normal] tracking-[2px] text-[#c9a84c]"
            data-node-id="220:1996"
          >
            Four principles to guide the redesign
          </p>
        </div>
        <div
          className="relative grid w-full shrink-0 grid-cols-1 gap-[20px] md:grid-cols-2"
          data-node-id="220:1997"
          data-name="Principles"
        >
          <div
            className="relative flex items-start gap-[20px] overflow-clip rounded-[12px] bg-[#1c3354] p-[24px]"
            data-node-id="220:1998"
            data-name="Design principle"
          >
            <div
              className="relative h-[64px] w-[4px] shrink-0 rounded-[2px] bg-[#c9a84c]"
              data-node-id="220:1999"
              data-name="Principle accent"
            />
            <div
              className="[word-break:break-word] relative flex min-w-px flex-[1_0_0] flex-col items-start gap-[12px] font-['SF_Compact:Regular'] font-[457.8999938964844]"
              data-node-id="220:2000"
              data-name="Principle content"
            >
              <p
                className="relative w-full shrink-0 text-[26px] leading-[normal] text-white"
                data-node-id="220:2001"
              >
                Familiar before technical
              </p>
              <p
                className="relative w-full shrink-0 text-[23px] leading-[1.45] text-[#c8d0da]"
                data-node-id="220:2002"
              >
                Start with things people already understand.
              </p>
            </div>
          </div>
          <div
            className="relative flex items-start gap-[20px] overflow-clip rounded-[12px] bg-[#1c3354] p-[24px]"
            data-node-id="220:2003"
            data-name="Design principle"
          >
            <div
              className="relative h-[64px] w-[4px] shrink-0 rounded-[2px] bg-[#c9a84c]"
              data-node-id="220:2004"
              data-name="Principle accent"
            />
            <div
              className="[word-break:break-word] relative flex min-w-px flex-[1_0_0] flex-col items-start gap-[12px] font-['SF_Compact:Regular'] font-[457.8999938964844]"
              data-node-id="220:2005"
              data-name="Principle content"
            >
              <p
                className="relative w-full shrink-0 text-[26px] leading-[normal] text-white"
                data-node-id="220:2006"
              >
                Consistent, but category-aware
              </p>
              <p
                className="relative w-full shrink-0 text-[23px] leading-[1.45] text-[#c8d0da]"
                data-node-id="220:2007"
              >
                One FlavourIQ system that accommodates beverage differences.
              </p>
            </div>
          </div>
          <div
            className="relative flex items-start gap-[20px] overflow-clip rounded-[12px] bg-[#1c3354] p-[24px]"
            data-node-id="220:2009"
            data-name="Design principle"
          >
            <div
              className="relative h-[64px] w-[4px] shrink-0 rounded-[2px] bg-[#c9a84c]"
              data-node-id="220:2010"
              data-name="Principle accent"
            />
            <div
              className="[word-break:break-word] relative flex min-w-px flex-[1_0_0] flex-col items-start gap-[12px] font-['SF_Compact:Regular'] font-[457.8999938964844]"
              data-node-id="220:2011"
              data-name="Principle content"
            >
              <p
                className="relative w-full shrink-0 text-[26px] leading-[normal] text-white"
                data-node-id="220:2012"
              >
                Accessible, not simplistic
              </p>
              <p
                className="relative w-full shrink-0 text-[23px] leading-[1.45] text-[#c8d0da]"
                data-node-id="220:2013"
              >
                Don’t demand expertise or patronise knowledgeable users.
              </p>
            </div>
          </div>
          <div
            className="relative flex items-start gap-[20px] overflow-clip rounded-[12px] bg-[#1c3354] p-[24px]"
            data-node-id="220:2014"
            data-name="Design principle"
          >
            <div
              className="relative h-[64px] w-[4px] shrink-0 rounded-[2px] bg-[#c9a84c]"
              data-node-id="220:2015"
              data-name="Principle accent"
            />
            <div
              className="[word-break:break-word] relative flex min-w-px flex-[1_0_0] flex-col items-start gap-[12px] font-['SF_Compact:Regular'] font-[457.8999938964844]"
              data-node-id="220:2016"
              data-name="Principle content"
            >
              <p
                className="relative w-full shrink-0 text-[26px] leading-[normal] text-white"
                data-node-id="220:2017"
              >
                Make personalisation visible
              </p>
              <p
                className="relative w-full shrink-0 text-[23px] leading-[1.45] text-[#c8d0da]"
                data-node-id="220:2018"
              >
                Connect preferences, profile and recommendations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 05 The Redesign */}
      <div
        className="relative flex w-full shrink-0 flex-col items-start gap-[48px]"
        data-node-id="220:2019"
        data-name="Redesign decisions"
      >
        <div
          className="relative flex w-full shrink-0 flex-col items-start gap-[20px]"
          data-node-id="220:2020"
          data-name="Section heading"
        >
          <div
            className="relative h-px w-full shrink-0 bg-[rgba(201,168,76,0.4)]"
            data-node-id="220:2021"
            data-name="Section divider"
          />
          <div
            className="relative flex w-full shrink-0 items-center gap-[16px] pt-[18px]"
            data-node-id="220:2022"
            data-name="Chapter"
          >
            <div
              className="relative flex size-[36px] shrink-0 flex-col items-center justify-center overflow-clip rounded-[36px] bg-[#c9a84c]"
              data-node-id="220:2023"
              data-name="Chapter marker"
            >
              <p
                className="[word-break:break-word] relative shrink-0 whitespace-nowrap font-['Gugi:Regular'] text-[14px] not-italic leading-[normal] text-[#152741]"
                data-node-id="220:2024"
              >
                05
              </p>
            </div>
            <p
              data-scroll-section="The Redesign"
              className="[word-break:break-word] relative min-w-px flex-[1_0_0] font-['Gugi:Regular'] text-[40px] not-italic leading-[normal] text-white"
              data-node-id="220:2025"
            >
              The Redesign
            </p>
          </div>
          <p
            className="[word-break:break-word] relative w-full shrink-0 font-['SF_Compact:Regular'] text-[20px] font-[457.8999938964844] uppercase leading-[normal] tracking-[2px] text-[#c9a84c]"
            data-node-id="220:2026"
          >
            Four decisions. Each one deliberate.
          </p>
        </div>
        <p
          className="[word-break:break-word] relative w-full shrink-0 font-['SF_Compact:Regular'] text-[25px] font-[457.8999938964844] leading-[1.55] text-[#c8d0da]"
          data-node-id="220:2027"
        >
          From answering the quiz to understanding a match, each change makes
          the connection between familiar tastes, a personal profile and
          recommendations more visible.
        </p>

        {/* Decision A / QUIZ */}
        <div
          className="relative flex w-full shrink-0 flex-col items-start gap-[28px]"
          data-node-id="220:2028"
          data-name="Redesign decision"
        >
          <div
            className="relative h-px w-full shrink-0 bg-[rgba(201,168,76,0.4)]"
            data-node-id="220:2029"
            data-name="Decision divider"
          />
          <p
            className="[word-break:break-word] relative shrink-0 whitespace-nowrap font-['SF_Compact:Regular'] text-[20px] font-[457.8999938964844] leading-[normal] tracking-[2px] text-[#c9a84c]"
            data-node-id="220:2030"
          >
            A / QUIZ
          </p>
          <p
            className="[word-break:break-word] relative w-full shrink-0 font-['Gugi:Regular'] text-[30px] not-italic leading-[1.3] text-[#c9a84c]"
            data-node-id="220:2031"
          >
            Familiar Foods: Easier Choices
          </p>
          <div
            className="[word-break:break-word] relative grid w-full shrink-0 grid-cols-1 gap-[32px] font-['SF_Compact:Regular'] font-[457.8999938964844] md:grid-cols-2"
            data-node-id="220:2032"
            data-name="Before and after rationale"
          >
            <div
              className="relative flex flex-col items-start gap-[12px]"
              data-node-id="220:2033"
              data-name="Before rationale"
            >
              <p
                className="relative shrink-0 whitespace-nowrap text-[20px] leading-[normal] tracking-[2px] text-[#c9a84c]"
                data-node-id="220:2034"
              >
                BEFORE
              </p>
              <p
                className="relative w-full shrink-0 text-[25px] leading-[1.55] text-[#c8d0da]"
                data-node-id="220:2035"
              >
                Text-only choices such as “Tropical juice” and “Peach iced tea”
                asked people to imagine a flavour from words alone.
              </p>
            </div>
            <div
              className="relative flex flex-col items-start gap-[12px]"
              data-node-id="220:2036"
              data-name="After rationale"
            >
              <p
                className="relative shrink-0 whitespace-nowrap text-[20px] leading-[normal] tracking-[2px] text-[#c9a84c]"
                data-node-id="220:2037"
              >
                AFTER
              </p>
              <p
                className="relative w-full shrink-0 text-[25px] leading-[1.55] text-[#c8d0da]"
                data-node-id="220:2038"
              >
                Visual cards show everyday food and drinks rather than rare
                flavour terms. Coffee / Tea tabs keep the category clear, and a
                back button lets people revise an answer.
              </p>
            </div>
          </div>
          <div
            className="relative grid w-full shrink-0 grid-cols-1 gap-[32px] lg:grid-cols-2"
            data-node-id="220:2039"
            data-name="Before and after image spaces"
          >
            <div
              className="relative flex h-[600px] flex-col items-center justify-between overflow-clip rounded-[12px] border border-solid border-[rgba(201,168,76,0.6)] bg-[#162a42] p-[24px]"
              data-node-id="220:2040"
              data-name="Text-list quiz — Image placeholder"
            >
              <div
                className="relative h-[702px] w-[321px] shrink-0"
                data-node-id="220:2041"
                data-name="image 133"
              >
                <img
                  alt=""
                  className="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
                  src={imgImage133}
                />
              </div>
            </div>
            <div
              className="relative flex h-[600px] flex-col items-center justify-between overflow-clip rounded-[12px] border border-solid border-[rgba(201,168,76,0.6)] bg-[#162a42] p-[24px]"
              data-node-id="220:2043"
              data-name="Coffee / Tea visual cards — Image placeholder"
            >
              <div
                className="relative h-[783px] w-[363px] shrink-0"
                data-node-id="220:2044"
                data-name="image 134"
              >
                <img
                  alt=""
                  className="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
                  src={imgImage134}
                />
              </div>
            </div>
          </div>
          <div
            className="relative flex w-full shrink-0 items-start gap-[20px] overflow-clip rounded-[8px] bg-[#1c3354] p-[24px]"
            data-node-id="220:2045"
            data-name="Design rationale callout"
          >
            <div
              className="relative h-[70px] w-[4px] shrink-0 bg-[#c9a84c]"
              data-node-id="220:2046"
              data-name="Callout accent"
            />
            <p
              className="[word-break:break-word] relative min-w-px flex-[1_0_0] font-['SF_Compact:Regular'] text-[25px] font-[457.8999938964844] leading-[1.5] text-[#c8d0da]"
              data-node-id="220:2047"
            >
              Our prototype uses visual imagery to make unfamiliar flavours like
              boysenberry ripple easier to understand and select.
            </p>
          </div>
        </div>

        {/* Decision B / RESULT */}
        <div
          className="relative flex w-full shrink-0 flex-col items-start gap-[28px]"
          data-node-id="220:2048"
          data-name="Redesign decision"
        >
          <div
            className="relative h-px w-full shrink-0 bg-[rgba(201,168,76,0.4)]"
            data-node-id="220:2049"
            data-name="Decision divider"
          />
          <p
            className="[word-break:break-word] relative shrink-0 whitespace-nowrap font-['SF_Compact:Regular'] text-[20px] font-[457.8999938964844] leading-[normal] tracking-[2px] text-[#c9a84c]"
            data-node-id="220:2050"
          >
            B / RESULT
          </p>
          <p
            className="[word-break:break-word] relative w-full shrink-0 font-['Gugi:Regular'] text-[30px] not-italic leading-[1.3] text-[#c9a84c]"
            data-node-id="220:2051"
          >
            Clear Reasons Build Trust
          </p>
          <div
            className="[word-break:break-word] relative grid w-full shrink-0 grid-cols-1 gap-[32px] font-['SF_Compact:Regular'] font-[457.8999938964844] md:grid-cols-2"
            data-node-id="220:2052"
            data-name="Before and after rationale"
          >
            <div
              className="relative flex flex-col items-start gap-[12px]"
              data-node-id="220:2053"
              data-name="Before rationale"
            >
              <p
                className="relative shrink-0 whitespace-nowrap text-[20px] leading-[normal] tracking-[2px] text-[#c9a84c]"
                data-node-id="220:2054"
              >
                BEFORE
              </p>
              <p
                className="relative w-full shrink-0 text-[25px] leading-[1.55] text-[#c8d0da]"
                data-node-id="220:2055"
              >
                A product card displayed a “perfect match” badge and a
                percentage, without explaining the recommendation.
              </p>
            </div>
            <div
              className="relative flex flex-col items-start gap-[12px]"
              data-node-id="220:2056"
              data-name="After rationale"
            >
              <p
                className="relative shrink-0 whitespace-nowrap text-[20px] leading-[normal] tracking-[2px] text-[#c9a84c]"
                data-node-id="220:2057"
              >
                AFTER
              </p>
              <p
                className="relative w-full shrink-0 text-[25px] leading-[1.55] text-[#c8d0da]"
                data-node-id="220:2058"
              >
                A plain-language reason connects the recommendation to the
                person’s profile, supported by the tasting notes that informed
                the match.
              </p>
            </div>
          </div>
          <div
            className="relative grid w-full shrink-0 grid-cols-1 gap-[32px] lg:grid-cols-2"
            data-node-id="220:2059"
            data-name="Before and after image spaces"
          >
            <div
              className="relative flex h-[600px] flex-col items-center justify-between overflow-clip rounded-[12px] border border-solid border-[rgba(201,168,76,0.6)] bg-[#162a42] p-[24px]"
              data-node-id="220:2060"
              data-name="Unexplained match card — Image placeholder"
            >
              <div
                className="relative h-[559.039px] w-[361.91px] shrink-0 overflow-clip drop-shadow-[0px_4.044px_4.044px_rgba(145,158,171,0.24)]"
                data-node-id="220:2061"
                data-name="Product card"
              >
                <div
                  className="absolute left-0 top-[332.59px] flex w-[361.91px] flex-col items-start"
                  data-node-id="I220:2061;63:6987"
                >
                  <div
                    className="relative flex w-full shrink-0 flex-col items-start gap-[12.131px] rounded-bl-[16.175px] rounded-br-[16.175px] border-[1.011px] border-solid border-black bg-white px-[24.262px] pb-[24.262px] pt-[28.306px]"
                    data-node-id="I220:2061;63:6988"
                    data-name="info"
                  >
                    <div
                      className="relative flex w-full shrink-0 flex-col items-start justify-center gap-[12.131px]"
                      data-node-id="I220:2061;63:6989"
                    >
                      <p
                        className="[word-break:break-word] relative h-[22.24px] w-full shrink-0 overflow-hidden text-ellipsis whitespace-nowrap font-['Inter:Semi_Bold'] text-[18.2px] font-semibold not-italic leading-[24.262px] tracking-[0.08px] text-[#1c252e]"
                        data-node-id="I220:2061;63:6990"
                      >
                        Lobster Reef Savignon Blanc 2023
                      </p>
                      <div
                        className="relative flex w-[281.036px] shrink-0 items-center justify-center gap-[6.066px] rounded-[6.066px] border-[2.022px] border-solid border-[#009462] p-[6.066px]"
                        data-node-id="I220:2061;63:6992"
                        data-name="Label"
                      >
                        <p className="[word-break:break-word] font-['Inter:Semi_Bold'] text-[14.15px] font-semibold not-italic leading-[20.218px] tracking-[0.08px] text-[#009462]">
                          USE CODE FLAVOUR IQ FOR 20% OFF
                        </p>
                      </div>
                    </div>
                    <div
                      className="relative flex w-full shrink-0 items-center"
                      data-node-id="I220:2061;63:6993"
                      data-name="stack"
                    >
                      <div className="[word-break:break-word] flex items-center gap-[4px] whitespace-nowrap font-['Inter:Semi_Bold'] text-[18.2px] font-semibold not-italic leading-[24.262px] tracking-[0.08px]">
                        <p className="text-[#7e7e7e] line-through">$35.39</p>
                        <p className="text-[#009462]">{` $22.39`}</p>
                      </div>
                    </div>
                    <div
                      className="relative flex h-[44.481px] w-full shrink-0 items-center justify-center rounded-[12.131px] bg-[#0f0f0f] px-[8.087px]"
                      data-node-id="I220:2061;63:6999"
                      data-name="Button"
                    >
                      <p className="[word-break:break-word] flex-[1_0_0] text-center font-['Inter:Bold',sans-serif] text-[18.4px] font-bold not-italic leading-[32.703px] tracking-[0.0809px] text-white">
                        Add to basket
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute left-0 top-[24.26px] flex w-[361.91px] flex-col items-center justify-center"
                  data-node-id="I220:2061;63:7000"
                >
                  <div
                    className="relative flex w-full shrink-0 flex-col items-end overflow-clip rounded-tl-[16.175px] rounded-tr-[16.175px] border-l-[1.011px] border-r-[1.011px] border-t-[1.011px] border-solid border-black bg-white"
                    data-node-id="I220:2061;63:7001"
                    data-name="Product/Card"
                  >
                    <div
                      className="relative flex h-[308.331px] w-full shrink-0 items-start px-[8.087px]"
                      data-node-id="I220:2061;63:7002"
                      data-name="img"
                    >
                      <div
                        className="relative flex h-[308.331px] min-w-px flex-[1_0_0] flex-col items-start overflow-clip rounded-[12.131px]"
                        data-node-id="I220:2061;63:7003"
                        data-name="Image"
                      >
                        <div
                          className="absolute left-[calc(50%+0.13px)] top-[calc(50%+5.39px)] h-[242.529px] w-[194.023px] -translate-x-1/2 -translate-y-1/2"
                          data-node-id="I220:2061;63:7006"
                          data-name="758048-1 1"
                        >
                          <img
                            alt=""
                            className="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
                            src={img75804811}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute left-[calc(50%+0.05px)] top-[-24.26px] flex -translate-x-1/2 items-center justify-center rounded-[12.131px] border-[2.022px] border-solid border-[#232a32] bg-[#fcda56] px-[12.131px] py-[4.044px]"
                    data-node-id="I220:2061;63:7014"
                  >
                    <div className="relative flex shrink-0 items-center gap-[4.044px]">
                      <div className="relative size-[24.262px] shrink-0">
                        <img
                          alt=""
                          className="absolute inset-0 block size-full max-w-none"
                          src={imgSocialEmojiEvents}
                        />
                      </div>
                      <p className="[word-break:break-word] whitespace-nowrap font-['Inter:Bold',sans-serif] text-[18.4px] font-bold not-italic leading-[32.703px] tracking-[0.0809px] text-[#232a32]">
                        Your perfect match
                      </p>
                    </div>
                  </div>
                  <div
                    className="absolute right-[237.48px] top-[295.19px] flex h-[24.262px] items-center justify-center gap-[6.066px] rounded-[6.066px] bg-black px-[6.066px]"
                    data-node-id="I220:2061;63:7018"
                    data-name="new"
                  >
                    <p className="[word-break:break-word] whitespace-nowrap text-center font-['Inter:Semi_Bold'] text-[14.15px] font-semibold not-italic leading-[20.218px] tracking-[0.08px] text-white">
                      97% MATCH
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="relative flex h-[600px] flex-col items-center justify-between overflow-clip rounded-[12px] border border-solid border-[rgba(201,168,76,0.6)] bg-[#fefaf2] p-[24px]"
              data-node-id="220:2062"
              data-name="Match reason + tasting notes — Image placeholder"
            >
              <div
                className="relative h-[559.366px] w-[340.442px] shrink-0"
                data-node-id="220:2063"
                data-name="TEA PRODUCT CARD"
              >
                <div
                  className="absolute inset-[3.79%_0_0_0] flex flex-col items-center drop-shadow-[0px_0px_1.929px_rgba(0,0,0,0.06)]"
                  data-node-id="220:2064"
                  data-name="Tea card"
                >
                  <div
                    className="relative flex w-full shrink-0 flex-col items-start gap-[23.146px] overflow-clip rounded-[28.933px] border-[1.929px] border-solid border-[#dfc5ab] bg-white p-[19.288px]"
                    data-node-id="220:2065"
                    data-name="Product Card - Tea"
                  >
                    <div
                      className="relative h-[155.272px] w-full shrink-0 overflow-clip rounded-[9.644px] bg-[#f0ddca]"
                      data-node-id="220:2066"
                      data-name="Tea picture"
                    >
                      <div
                        className="absolute left-[92.58px] top-[-3.86px] h-[159.13px] w-[118.317px]"
                        data-node-id="220:2067"
                      >
                        <div className="pointer-events-none absolute inset-0 overflow-hidden">
                          <img
                            alt=""
                            className="absolute left-0 top-0 h-full w-[210.61%] max-w-none"
                            src={imgScreenshot20260922At40311Pm2}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="relative flex w-[297.043px] shrink-0 flex-col items-start"
                      data-node-id="220:2068"
                      data-name="Product Description"
                    >
                      <p className="[word-break:break-word] font-['SF_Compact:Regular'] text-[12.09px] font-[457.8999938964844] leading-[14.882px] text-black">
                        AXIL
                      </p>
                      <p className="[word-break:break-word] font-['SF_Compact:Medium'] text-[20.46px] font-[556] leading-[22.323px] text-black">
                        Heavyweight Espresso
                      </p>
                      <p className="[word-break:break-word] h-[27.968px] font-['SF_Compact:Regular'] text-[10.61px] font-[457.8999938964844] leading-[23.146px] text-black">
                        250 g
                      </p>
                      <div className="relative flex w-[150.45px] shrink-0 items-center justify-center rounded-[4.822px] border-[0.964px] border-solid border-[#009462]">
                        <p className="[word-break:break-word] whitespace-nowrap text-center font-['SF_Compact:Regular'] text-[11.57px] font-[457.8999938964844] leading-[16.48px] text-[#009462]">
                          10% OFF WITH FLAVOURIQ
                        </p>
                      </div>
                    </div>
                    <div
                      className="relative flex w-full shrink-0 items-center justify-center gap-[19.288px] rounded-[9.644px] bg-[#fef7ee] p-[9.644px]"
                      data-node-id="220:2069"
                      data-name="AI Explanation"
                    >
                      <div className="relative size-[16.395px] shrink-0">
                        <img
                          alt=""
                          className="absolute inset-0 block size-full max-w-none"
                          src={imgAi}
                        />
                      </div>
                      <p className="[word-break:break-word] w-[227.604px] shrink-0 font-['SF_Compact:Light'] text-[11.57px] font-[350.52398681640625] leading-[15.431px] text-black">
                        We matched this roast to you for its bold, smooth and
                        naturally sweet flavour profile.
                      </p>
                    </div>
                    <div
                      className="relative flex w-full shrink-0 flex-col items-start gap-[6.751px]"
                      data-node-id="220:2070"
                    >
                      <p className="[word-break:break-word] h-[21.217px] w-full whitespace-nowrap font-['SF_Compact:Semibold'] text-[12.538px] font-[656.2000122070312] leading-[23.146px] tracking-[0.0772px] text-[#c6b8af]">
                        ROAST NOTES YOU’LL LOVE
                      </p>
                      <div className="relative flex items-center gap-[7.715px]">
                        <div className="relative flex shrink-0 items-center gap-[4.427px] rounded-[7378.378px] border-[0.738px] border-solid border-[#fef7ee] bg-[#ffebd4] px-[9.593px] py-[3.69px]">
                          <div className="relative size-[8.68px] shrink-0">
                            <img
                              alt=""
                              className="block size-full max-w-none"
                              src={imgChocolateDessertCocoaChocolate}
                            />
                          </div>
                          <p className="whitespace-nowrap font-['SF_Compact:Bold'] text-[9.644px] font-[790] leading-[11.807px] tracking-[0.2214px] text-[#947462]">
                            DARK CHOCOLATE
                          </p>
                        </div>
                        <div className="relative flex shrink-0 items-center gap-[4.427px] rounded-[7378.378px] border-[0.738px] border-solid border-[#fef7ee] bg-[#ffebd4] px-[9.593px] py-[3.69px]">
                          <div className="relative size-[8.68px] shrink-0">
                            <img
                              alt=""
                              className="block size-full max-w-none"
                              src={imgCandyWrapSweetFoodCandy}
                            />
                          </div>
                          <p className="whitespace-nowrap font-['SF_Compact:Bold'] text-[9.644px] font-[790] leading-[11.807px] tracking-[0.2214px] text-[#947462]">
                            TOFFEE
                          </p>
                        </div>
                        <div className="relative flex shrink-0 items-center gap-[4.427px] rounded-[7378.378px] border-[0.738px] border-solid border-[#fef7ee] bg-[#ffebd4] px-[9.593px] py-[3.69px]">
                          <div className="relative size-[8.68px] shrink-0">
                            <img
                              alt=""
                              className="block size-full max-w-none"
                              src={
                                imgCookieBiteCookieBiscuitSweetChocolateChipsBite
                              }
                            />
                          </div>
                          <p className="whitespace-nowrap font-['SF_Compact:Bold'] text-[9.644px] font-[790] leading-[11.807px] tracking-[0.2214px] text-[#947462]">
                            BISCOTTI
                          </p>
                        </div>
                      </div>
                    </div>
                    <a
                      className="relative flex w-[301.865px] shrink-0 cursor-pointer items-center gap-[1.929px] overflow-clip rounded-[12.538px] bg-[#422b1e] px-[20.253px] py-[10.609px]"
                      href="https://axilcoffee.com.au/products/heavyweight-blend-oto"
                      target="_blank"
                      rel="noreferrer"
                      data-node-id="220:2099"
                      data-name="Button"
                    >
                      <p className="[word-break:break-word] w-[96.442px] shrink-0 text-left font-['SF_Compact:Semibold'] text-[12.538px] font-[656.2000122070312] leading-[23.146px] tracking-[0.0772px] text-white">
                        ADD TO BASKET
                      </p>
                      <div className="h-[18.324px] w-[48.221px] shrink-0" />
                      <p className="[word-break:break-word] w-[46.292px] shrink-0 text-left font-['SF_Compact:Semibold'] text-[11.573px] font-[656.2000122070312] leading-[23.146px] tracking-[0.0772px] text-[#afafaf] line-through">
                        $22.00
                      </p>
                      <div className="relative flex shrink-0 items-center justify-center px-[6.751px]">
                        <p className="[word-break:break-word] whitespace-nowrap text-left font-['SF_Compact:Bold'] text-[16.395px] font-[790] leading-[23.146px] tracking-[0.0772px] text-white">
                          $20.15
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div
                  className="absolute inset-[0_22.66%_94.31%_22.66%] flex items-center justify-center gap-[4.822px] rounded-[9.644px] border-[1.929px] border-solid border-[#af7102] bg-[#fcda56] px-[9.644px] py-[3.858px]"
                  data-node-id="220:2107"
                >
                  <div className="relative size-[23.146px] shrink-0">
                    <img
                      alt=""
                      className="absolute inset-0 block size-full max-w-none"
                      src={imgSocialEmojiEvents1}
                    />
                  </div>
                  <p className="[word-break:break-word] whitespace-nowrap font-['SF_Compact:Semibold'] text-[14.466px] font-[656.2000122070312] leading-[30.862px] tracking-[0.0772px] text-[#232a32]">
                    Your perfect match
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="relative flex w-full shrink-0 items-start gap-[20px] overflow-clip rounded-[8px] bg-[#1c3354] p-[24px]"
            data-node-id="220:2110"
            data-name="Design rationale callout"
          >
            <div
              className="relative h-[70px] w-[4px] shrink-0 bg-[#c9a84c]"
              data-node-id="220:2111"
              data-name="Callout accent"
            />
            <p
              className="[word-break:break-word] relative min-w-px flex-[1_0_0] font-['SF_Compact:Regular'] text-[25px] font-[457.8999938964844] leading-[1.5] text-[#c8d0da]"
              data-node-id="220:2112"
            >
              “We matched this roast to you for its bold, smooth and naturally
              sweet flavour profile.” — Example recommendation copy
            </p>
          </div>
          <p
            className="[word-break:break-word] relative w-full shrink-0 font-['SF_Compact:Regular'] text-[18px] font-[457.8999938964844] leading-[1.55] text-[#8a9aae]"
            data-node-id="220:2113"
          >
            Clearer reasons are the design rationale here, not evidence of a
            measured increase in trust.
          </p>
        </div>

        {/* Decision C / TASTE NOTES */}
        <div
          className="relative flex w-full shrink-0 flex-col items-start gap-[28px]"
          data-node-id="220:2114"
          data-name="Redesign decision"
        >
          <div
            className="relative h-px w-full shrink-0 bg-[rgba(201,168,76,0.4)]"
            data-node-id="220:2115"
            data-name="Decision divider"
          />
          <p
            className="[word-break:break-word] relative shrink-0 whitespace-nowrap font-['SF_Compact:Regular'] text-[20px] font-[457.8999938964844] leading-[normal] tracking-[2px] text-[#c9a84c]"
            data-node-id="220:2116"
          >
            C / TASTE NOTES
          </p>
          <p
            className="[word-break:break-word] relative w-full shrink-0 font-['Gugi:Regular'] text-[30px] not-italic leading-[1.3] text-[#c9a84c]"
            data-node-id="220:2117"
          >
            Top 3 Notes Simplify Your Taste
          </p>
          <div
            className="[word-break:break-word] relative grid w-full shrink-0 grid-cols-1 gap-[32px] font-['SF_Compact:Regular'] font-[457.8999938964844] md:grid-cols-2"
            data-node-id="220:2118"
            data-name="Before and after rationale"
          >
            <div
              className="relative flex flex-col items-start gap-[12px]"
              data-node-id="220:2119"
              data-name="Before rationale"
            >
              <p
                className="relative shrink-0 whitespace-nowrap text-[20px] leading-[normal] tracking-[2px] text-[#c9a84c]"
                data-node-id="220:2120"
              >
                BEFORE
              </p>
              <p
                className="relative w-full shrink-0 text-[25px] leading-[1.55] text-[#c8d0da]"
                data-node-id="220:2121"
              >
                Vague bars — “Tropical fruits: low”, “Vanilla: medium” —
                repeated the same generic paragraph under each flavour.
              </p>
            </div>
            <div
              className="relative flex flex-col items-start gap-[12px]"
              data-node-id="220:2122"
              data-name="After rationale"
            >
              <p
                className="relative shrink-0 whitespace-nowrap text-[20px] leading-[normal] tracking-[2px] text-[#c9a84c]"
                data-node-id="220:2123"
              >
                AFTER
              </p>
              <p
                className="relative w-full shrink-0 text-[25px] leading-[1.55] text-[#c8d0da]"
                data-node-id="220:2124"
              >
                The three dominant flavour notes are ranked from strongest to
                weakest. Each has its own distinct description in plain
                language.
              </p>
            </div>
          </div>
          <div
            className="relative grid w-full shrink-0 grid-cols-1 gap-[32px] lg:grid-cols-2"
            data-node-id="220:2125"
            data-name="Before and after image spaces"
          >
            {/* Before: Progress bars */}
            <div
              className="relative flex h-[600px] flex-col items-center justify-between overflow-clip rounded-[12px] border border-solid border-[rgba(201,168,76,0.6)] bg-[#162a42] p-[24px]"
              data-node-id="220:2126"
              data-name="Profile bars + repeated text — Image placeholder"
            >
              <div
                className="relative flex w-full max-w-[473.544px] shrink-0 flex-col items-start rounded-[26.554px] bg-white px-[26.554px] pb-[26.554px] pt-[37.618px]"
                data-node-id="220:2127"
                data-name="Progress bars"
              >
                <p
                  className="[word-break:break-word] w-full font-['Inter:Bold',sans-serif] text-[28px] font-bold not-italic leading-[35.405px] tracking-[0.0885px] text-[#232a32]"
                  data-node-id="220:2131"
                >
                  Notes you’ll love in this wine
                </p>
                <div
                  className="relative flex w-full shrink-0 flex-col items-start gap-[12px] bg-white pt-[26.554px]"
                  data-node-id="220:2133"
                >
                  {/* Tropical fruits */}
                  <div className="flex w-full flex-col gap-[8.851px]">
                    <p className="font-['Inter:Semi_Bold'] text-[19.915px] font-semibold leading-[26.554px] text-[#1c252e]">
                      Tropical fruits
                    </p>
                    <div className="relative h-[26.554px] w-full overflow-clip rounded-full bg-[#ffe9c9]">
                      <div
                        className="absolute left-0 top-[-75.34px] size-[359.415px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_75.34px] mask-size-[255.758px_26.555px]"
                        style={{ maskImage: `url("${imgUntitledArtwork73}")` }}
                      >
                        <img
                          alt=""
                          className="absolute size-full max-w-none object-cover"
                          src={imgUntitledArtwork72}
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-[17.703px]">
                      <div className="size-[61.959px] shrink-0" />
                      <p className="flex-1 font-['Inter:Regular'] text-[15.49px] leading-[22.128px] text-[#1c252e]">
                        Vibrant, sweet, and tangy aromas and flavours found in
                        various wines, spirits, and foods
                      </p>
                    </div>
                  </div>
                  {/* Vanilla */}
                  <div className="flex w-full flex-col gap-[8.851px]">
                    <p className="font-['Inter:Semi_Bold'] text-[19.915px] font-semibold leading-[26.554px] text-[#1c252e]">
                      Vanilla
                    </p>
                    <div className="relative h-[26.554px] w-full overflow-clip rounded-full bg-[#ffe9c9]">
                      <div
                        className="absolute left-0 top-[-154.93px] size-[403.644px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_154.932px] mask-size-[285.841px_26.555px]"
                        style={{ maskImage: `url("${imgUntitledArtwork75}")` }}
                      >
                        <img
                          alt=""
                          className="absolute size-full max-w-none object-cover"
                          src={imgUntitledArtwork74}
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-[17.703px]">
                      <div className="relative size-[61.959px] shrink-0">
                        <div className="absolute inset-[12%] overflow-hidden">
                          <img
                            alt=""
                            className="size-full object-contain"
                            src={imgVanilla}
                          />
                        </div>
                      </div>
                      <p className="flex-1 font-['Inter:Regular'] text-[15.49px] leading-[22.128px] text-[#1c252e]">
                        Vibrant, sweet, and tangy aromas and flavours found in
                        various wines, spirits, and foods
                      </p>
                    </div>
                  </div>
                  {/* Butter */}
                  <div className="flex w-full flex-col gap-[8.851px]">
                    <p className="font-['Inter:Semi_Bold'] text-[19.915px] font-semibold leading-[26.554px] text-[#1c252e]">
                      Butter
                    </p>
                    <div className="relative h-[26.554px] w-full overflow-clip rounded-full bg-[#ffe9c9]">
                      <div
                        className="relative size-[382.818px] shrink-0 rounded-[8.851px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[255.758px_26.555px]"
                        style={{ maskImage: `url("${imgUntitledArtwork73}")` }}
                      >
                        <img
                          alt=""
                          className="pointer-events-none absolute inset-0 size-full max-w-none rounded-[8.851px] object-cover"
                          src={imgUntitledArtwork82}
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-[17.703px]">
                      <div className="size-[61.959px] shrink-0" />
                      <p className="flex-1 font-['Inter:Regular'] text-[15.49px] leading-[22.128px] text-[#1c252e]">
                        Vibrant, sweet, and tangy aromas and flavours found in
                        various wines, spirits, and foods
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* After: Three ranked round badges */}
            <div
              className="relative flex h-[600px] flex-col items-center justify-between overflow-clip rounded-[12px] border border-solid border-[rgba(201,168,76,0.6)] bg-[#fefaf2] p-[24px]"
              data-node-id="220:2176"
              data-name="Three ranked round badges — Image placeholder"
            >
              <div
                className="relative flex h-[552px] w-full max-w-[519px] shrink-0 flex-col items-center justify-center gap-[23.481px]"
                data-node-id="220:2177"
                data-name="COFFEE NOTES"
              >
                <div
                  className="relative flex h-[202.524px] w-full shrink-0 items-center justify-center gap-[16px]"
                  data-node-id="I220:2177;472:20576"
                  data-name="top 3"
                >
                  {/* Dark chocolate card */}
                  <button
                    type="button"
                    onClick={() => setSelectedNote("chocolate")}
                    className={`relative flex h-[187.849px] w-[155.562px] shrink-0 cursor-pointer flex-col items-center justify-center gap-[25.979px] overflow-clip rounded-[27.397px] px-[19.655px] py-[18.338px] transition-all ${
                      selectedNote === "chocolate"
                        ? "border-[2.935px] border-solid border-[#673f28] bg-[#e9b887] shadow-[0px_4.403px_5.87px_0px_rgba(0,0,0,0.3)]"
                        : "border-[1.468px] border-solid border-[#ece9e1] bg-white"
                    }`}
                    data-node-id="I220:2177;472:20577"
                    data-name="Dark chocolate card"
                  >
                    <p className="[word-break:break-word] h-[18.338px] w-[142.12px] shrink-0 text-center font-['SF_Compact:Bold'] text-[18.34px] font-[790] leading-[20.356px] tracking-[0.0462px] text-[#673f28]">
                      Dark chocolate
                    </p>
                    <div className="relative inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start leading-[0]">
                      <div className="relative col-1 row-1 ml-0 mt-0 size-[95.392px]">
                        <div className="absolute inset-[-15.8%]">
                          <img
                            alt=""
                            className="block size-full max-w-none"
                            src={imgEllipse36}
                          />
                        </div>
                      </div>
                      <div className="relative col-1 row-1 ml-0 mt-0 size-[95.392px]">
                        <div className="absolute inset-[-5.8%_-5.8%_-5.8%_40.33%]">
                          <img
                            alt=""
                            className="block size-full max-w-none"
                            src={imgEllipse37}
                          />
                        </div>
                      </div>
                      <div className="relative col-1 row-1 ml-[10.45px] mt-[22.6px] h-[48.549px] w-[75.936px] overflow-clip">
                        <div className="absolute left-[1.47px] top-0 h-[54.051px] w-[72.068px]">
                          <div className="pointer-events-none absolute inset-0 overflow-hidden">
                            <img
                              alt=""
                              className="absolute left-[-53.02%] top-[-32.81%] h-[155.28%] w-[207.04%] max-w-none"
                              src={imgJbbkjkbjPhotoroom1}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="[word-break:break-word] relative col-1 row-1 ml-[15.28px] mt-[70.97px] flex w-[65.507px] flex-col justify-center text-center font-['SF_Compact:Regular'] text-[19.95px] font-[457.8999938964844] tracking-[0.0503px] text-[#37160f]">
                        <p className="leading-[18.453px]">70%</p>
                      </div>
                    </div>
                  </button>

                  {/* Toffee card */}
                  <button
                    type="button"
                    onClick={() => setSelectedNote("toffee")}
                    className={`relative flex h-[187.849px] w-[157.03px] shrink-0 cursor-pointer flex-col items-center justify-center gap-[25.979px] overflow-clip rounded-[27.397px] px-[19.655px] py-[18.338px] transition-all ${
                      selectedNote === "toffee"
                        ? "border-[2.935px] border-solid border-[#673f28] bg-[#e9b887] shadow-[0px_4.403px_5.87px_0px_rgba(0,0,0,0.3)]"
                        : "border-[1.468px] border-solid border-[#ece9e1] bg-white"
                    }`}
                    data-node-id="I220:2177;472:20586"
                    data-name="Toffee card"
                  >
                    <p className="[word-break:break-word] h-[19.655px] w-[127.001px] shrink-0 text-center font-['SF_Compact:Bold'] text-[18.34px] font-[790] leading-[20.356px] tracking-[0.0462px] text-[#673f28]">
                      Toffee
                    </p>
                    <div className="relative inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start leading-[0]">
                      <div className="relative col-1 row-1 ml-0 mt-0 size-[95.392px]">
                        <div className="absolute inset-[-5.8%]">
                          <img
                            alt=""
                            className="block size-full max-w-none"
                            src={imgEllipse38}
                          />
                        </div>
                      </div>
                      <div className="relative col-1 row-1 ml-0 mt-0 size-[95.392px]">
                        <div className="absolute inset-[-5.8%_-5.8%_-5.8%_40.33%]">
                          <img
                            alt=""
                            className="block size-full max-w-none"
                            src={imgEllipse39}
                          />
                        </div>
                      </div>
                      <div className="relative col-1 row-1 ml-[8.81px] mt-[23.41px] h-[48.549px] w-[75.936px] overflow-clip">
                        <div className="absolute left-[-4.4px] top-[-4.4px] h-[49.897px] w-[82.439px]">
                          <div className="pointer-events-none absolute inset-0 overflow-hidden">
                            <img
                              alt=""
                              className="absolute left-0 top-[-49.29%] h-[198.1%] w-[224.04%] max-w-none"
                              src={imgJbbkjkbjPhotoroom2}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="[word-break:break-word] relative col-1 row-1 ml-[15.28px] mt-[70.25px] flex w-[65.507px] flex-col justify-center text-center font-['SF_Compact:Regular'] text-[19.95px] font-[457.8999938964844] tracking-[0.0503px] text-[#37160f]">
                        <p className="leading-[18.453px]">50%</p>
                      </div>
                    </div>
                  </button>

                  {/* Biscotti card */}
                  <button
                    type="button"
                    onClick={() => setSelectedNote("biscotti")}
                    className={`relative flex h-[187.849px] w-[155.562px] shrink-0 cursor-pointer flex-col items-center justify-center gap-[25.979px] overflow-clip rounded-[27.397px] px-[19.655px] py-[18.338px] transition-all ${
                      selectedNote === "biscotti"
                        ? "border-[2.935px] border-solid border-[#673f28] bg-[#e9b887] shadow-[0px_4.403px_5.87px_0px_rgba(0,0,0,0.3)]"
                        : "border-[1.468px] border-solid border-[#ece9e1] bg-white"
                    }`}
                    data-node-id="I220:2177;472:20595"
                    data-name="Biscotti card"
                  >
                    <p className="[word-break:break-word] h-[19.655px] w-[127.001px] shrink-0 text-center font-['SF_Compact:Bold'] text-[18.34px] font-[790] leading-[20.356px] tracking-[0.0462px] text-[#673f28]">
                      Biscotti
                    </p>
                    <div className="relative inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start leading-[0]">
                      <div className="relative col-1 row-1 ml-0 mt-0 size-[95.392px]">
                        <div className="absolute inset-[-5.8%]">
                          <img
                            alt=""
                            className="block size-full max-w-none"
                            src={imgEllipse40}
                          />
                        </div>
                      </div>
                      <div className="relative col-1 row-1 ml-0 mt-0 size-[95.392px]">
                        <div className="absolute inset-[-5.8%_-5.8%_4.31%_47.1%]">
                          <img
                            alt=""
                            className="block size-full max-w-none"
                            src={imgEllipse41}
                          />
                        </div>
                      </div>
                      <div className="relative col-1 row-1 ml-[10.29px] mt-[22.05px] h-[48.532px] w-[75.963px] overflow-clip">
                        <div className="absolute left-[1.27px] top-[-0.1px] h-[48.165px] w-[73.211px]">
                          <div className="pointer-events-none absolute inset-0 overflow-hidden">
                            <img
                              alt=""
                              className="absolute left-[-96.61%] top-[-49.29%] h-[190.57%] w-[200.71%] max-w-none"
                              src={imgJbbkjkbjPhotoroom2}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="[word-break:break-word] relative col-1 row-1 ml-[15.28px] mt-[70.25px] flex w-[65.507px] flex-col justify-center text-center font-['SF_Compact:Regular'] text-[19.95px] font-[457.8999938964844] tracking-[0.0503px] text-[#37160f]">
                        <p className="leading-[18.453px]">40%</p>
                      </div>
                    </div>
                  </button>
                </div>

                <div
                  className="relative flex h-[124.846px] w-full shrink-0 items-center justify-center rounded-[24.451px] border-[2.935px] border-solid border-[#673f28] bg-[#e9b887] px-[24.451px] py-[19.866px] drop-shadow-[0px_4.403px_2.935px_rgba(0,0,0,0.25)]"
                  data-node-id="I220:2177;472:20604"
                  data-name="description"
                >
                  <div
                    className="[word-break:break-word] relative flex w-full max-w-[467.622px] shrink-0 flex-col justify-center whitespace-pre-wrap text-center font-['SF_Compact:Light'] text-[17.61px] font-[350.52398681640625] leading-[0] text-black"
                    data-node-id="I220:2177;472:20605"
                  >
                    <p className="mb-0 leading-[27.324px]">
                      {COFFEE_NOTE_DESCRIPTIONS[selectedNote][0]}
                    </p>
                    <p className="leading-[27.324px]">
                      {COFFEE_NOTE_DESCRIPTIONS[selectedNote][1]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decision D / FLAVOUR PROFILE */}
        <div
          className="relative flex w-full shrink-0 flex-col items-start gap-[28px]"
          data-node-id="220:2178"
          data-name="Redesign decision"
        >
          <div
            className="relative h-px w-full shrink-0 bg-[rgba(201,168,76,0.4)]"
            data-node-id="220:2179"
            data-name="Decision divider"
          />
          <p
            className="[word-break:break-word] relative shrink-0 whitespace-nowrap font-['SF_Compact:Regular'] text-[20px] font-[457.8999938964844] leading-[normal] tracking-[2px] text-[#c9a84c]"
            data-node-id="220:2180"
          >
            D / FLAVOUR PROFILE
          </p>
          <p
            className="[word-break:break-word] relative w-full shrink-0 font-['Gugi:Regular'] text-[30px] not-italic leading-[1.3] text-[#c9a84c]"
            data-node-id="220:2181"
          >
            Flavour Photos Simplify Your Profile
          </p>
          <div
            className="[word-break:break-word] relative grid w-full shrink-0 grid-cols-1 gap-[32px] font-['SF_Compact:Regular'] font-[457.8999938964844] md:grid-cols-2"
            data-node-id="220:2182"
            data-name="Before and after rationale"
          >
            <div
              className="relative flex flex-col items-start gap-[12px]"
              data-node-id="220:2183"
              data-name="Before rationale"
            >
              <p
                className="relative shrink-0 whitespace-nowrap text-[20px] leading-[normal] tracking-[2px] text-[#c9a84c]"
                data-node-id="220:2184"
              >
                BEFORE
              </p>
              <p
                className="relative w-full shrink-0 text-[25px] leading-[1.55] text-[#c8d0da]"
                data-node-id="220:2185"
              >
                An abstract colour wheel linked every segment to the same
                generic description.
              </p>
            </div>
            <div
              className="relative flex flex-col items-start gap-[12px]"
              data-node-id="220:2186"
              data-name="After rationale"
            >
              <p
                className="relative shrink-0 whitespace-nowrap text-[20px] leading-[normal] tracking-[2px] text-[#c9a84c]"
                data-node-id="220:2187"
              >
                AFTER
              </p>
              <p
                className="relative w-full shrink-0 text-[25px] leading-[1.55] text-[#c8d0da]"
                data-node-id="220:2188"
              >
                Hand-drawn watercolour illustrations represent specific flavour
                families — wood, fruit, flowers, herbs and nuts — each with its
                own description.
              </p>
            </div>
          </div>
          <div
            className="relative grid w-full shrink-0 grid-cols-1 gap-[32px] lg:grid-cols-2"
            data-node-id="220:2189"
            data-name="Before and after image spaces"
          >
            {/* Before: Abstract colour wheel */}
            <div
              className="relative flex h-[600px] flex-col items-center justify-between overflow-clip rounded-[12px] border border-solid border-[rgba(201,168,76,0.6)] bg-[#162a42] p-[24px]"
              data-node-id="220:2190"
              data-name="Abstract colour wheel — Image placeholder"
            >
              <div
                className="relative h-[721.379px] w-[353.295px] shrink-0 overflow-clip"
                data-node-id="220:2191"
                data-name="ColourWheelFlow"
              >
                <div
                  className="absolute left-[calc(50%+6.01px)] top-[313.52px] flex h-[35.33px] w-0 -translate-x-1/2 items-center justify-center"
                  data-node-id="220:2192"
                >
                  <div className="flex-none rotate-90">
                    <div
                      className="relative h-0 w-[35.33px]"
                      data-name="LINK line"
                    >
                      <div className="absolute inset-[-6.57px_-18.6%_-6.57px_-3.49%]">
                        <img
                          alt=""
                          className="block size-full max-w-none"
                          src={imgLinkLine}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute left-[22.5px] top-[351.32px] flex items-start gap-[19.719px]"
                  data-node-id="220:2193"
                  data-name="Card/Fruity"
                >
                  <div
                    className="relative flex shrink-0 flex-col items-start gap-[19.719px] rounded-[9.859px] border-[0.822px] border-solid border-black bg-white drop-shadow-[0px_3.286px_1.643px_rgba(0,0,0,0.25)]"
                    data-node-id="220:2194"
                  >
                    <div className="relative flex w-full shrink-0 flex-col items-start gap-[6.573px]">
                      <div className="relative flex w-[306.463px] shrink-0 flex-col items-center px-[19.719px] pt-[19.719px]">
                        <div className="relative flex w-full items-center justify-between gap-[19.719px]">
                          <div className="flex items-center gap-[19.719px]">
                            <div className="relative size-[52.583px] shrink-0">
                              <img
                                alt=""
                                className="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
                                src={imgLrgIllustrationBlackberry}
                              />
                            </div>
                            <p className="font-['Inter:Bold',sans-serif] text-[19.719px] font-bold leading-[23.005px] text-[#232a32]">
                              FRUITY
                            </p>
                          </div>
                          <p className="font-['Inter:Bold',sans-serif] text-[19.719px] font-bold leading-[23.005px] text-[#232a32]">
                            33%
                          </p>
                        </div>
                      </div>
                      <div className="relative flex w-full shrink-0 items-center justify-center px-[19.719px]">
                        <p className="flex-1 text-center font-['Inter:Regular'] text-[13.146px] leading-[19.719px] text-[#232a32]">
                          Here’s some info about it fruit and some fruits that
                          this person might like the taste of according to the
                          data/results
                        </p>
                      </div>
                    </div>
                    <div className="relative inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start leading-[0]">
                      <div
                        className="relative col-1 row-1 ml-[-114.83px] mt-[-102.53px] size-[488.474px] rounded-[29.578px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[114.833px_102.525px] mask-size-[306.463px_46.68px]"
                        style={{ maskImage: `url("${imgUntitledArtwork76}")` }}
                      >
                        <img
                          alt=""
                          className="pointer-events-none absolute inset-0 size-full max-w-none rounded-[29.578px] object-cover"
                          src={imgUntitledArtwork77}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute left-[11px] top-[-94px] flex h-[425.597px] w-[336.863px] flex-col items-center gap-[19.719px]"
                  data-node-id="220:2307"
                  data-name="Header"
                >
                  <div
                    className="absolute left-[calc(50%-0.43px)] top-[190.62px] size-[131.459px] -translate-x-1/2"
                    data-node-id="220:2316"
                    data-name="wine"
                  >
                    <img
                      alt=""
                      className="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
                      src={imgWine}
                    />
                  </div>
                </div>
                <div
                  className="absolute left-[21.53px] top-[1.31px] h-[315.764px] w-[315.804px]"
                  data-node-id="220:2317"
                  data-name="ColourWheel (The Graphic)"
                >
                  <div
                    className="absolute left-[38.43px] top-[-51.69px] size-[350.246px] rounded-[6.573px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[126.443px_52.264px] mask-size-[150.934px_278.088px]"
                    style={{ maskImage: `url("${imgUntitledArtwork13}")` }}
                  >
                    <img
                      alt=""
                      className="absolute size-full max-w-none rounded-[6.573px] object-cover"
                      src={imgUntitledArtwork12}
                    />
                  </div>
                  <div
                    className="absolute left-[-64.07px] top-[11.7px] size-[284.279px] rounded-[6.573px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[101.108px_3.809px] mask-size-[80.557px_80.586px]"
                    style={{ maskImage: `url("${imgUntitledArtwork83}")` }}
                  >
                    <img
                      alt=""
                      className="pointer-events-none absolute inset-0 size-full max-w-none rounded-[6.573px] object-cover"
                      src={imgUntitledArtwork82}
                    />
                  </div>
                  <div
                    className="absolute left-[8.25px] top-[151.25px] size-[246.432px] rounded-[29.578px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[29.888px_68.734px] mask-size-[210.064px_95.777px]"
                    style={{ maskImage: `url("${imgUntitledArtwork79}")` }}
                  >
                    <img
                      alt=""
                      className="pointer-events-none absolute inset-0 size-full max-w-none rounded-[29.578px] object-cover"
                      src={imgUntitledArtwork77}
                    />
                  </div>
                  <div
                    className="absolute left-[-66.3px] top-[41.58px] size-[213.54px] rounded-[6.573px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[65.888px_25.871px] mask-size-[79.348px_180.717px]"
                    style={{ maskImage: `url("${imgUntitledArtwork21}")` }}
                  >
                    <img
                      alt=""
                      className="absolute size-full max-w-none rounded-[6.573px] object-cover"
                      src={imgUntitledArtwork78}
                    />
                  </div>
                  <div
                    className="absolute left-[93.65px] top-[-57.72px] size-[151.137px] rounded-[6.573px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[4.471px_58.807px] mask-size-[46.272px_67.801px]"
                    style={{ maskImage: `url("${imgUntitledArtwork51}")` }}
                  >
                    <img
                      alt=""
                      className="absolute size-full max-w-none rounded-[6.573px] object-cover"
                      src={imgUntitledArtwork74}
                    />
                  </div>
                  <div
                    className="absolute left-[86.75px] top-[-72.91px] size-[211.743px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[56.293px_73.168px] mask-size-[17.171px_63.117px]"
                    style={{ maskImage: `url("${imgUntitledArtwork80}")` }}
                  >
                    <img
                      alt=""
                      className="absolute size-full max-w-none object-cover"
                      src={imgUntitledArtwork72}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* After: Illustrated flavour wheel */}
            <div
              className="relative flex h-[600px] flex-col items-center justify-between overflow-clip rounded-[12px] border border-solid border-[rgba(201,168,76,0.6)] bg-[#fcf2e5] p-[24px]"
              data-node-id="220:2337"
              data-name="Illustrated flavour wheel — Image placeholder"
            >
              <div
                className="relative inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start leading-[0]"
                data-node-id="220:2338"
              >
                <div
                  className="relative col-1 row-1 ml-[75.6px] mt-[405px] flex h-[153px] w-[353px] flex-col items-start gap-[7.534px] overflow-clip rounded-[20.72px] border-[0.942px] border-solid border-[#fec56c] bg-white p-[16.011px] shadow-[0px_3.767px_3.767px_0px_rgba(0,0,0,0.25)]"
                  data-node-id="220:2339"
                  data-name="Wheel card"
                >
                  <div className="relative flex w-full shrink-0 items-center justify-between">
                    <div className="relative flex shrink-0 items-center gap-[7.534px]">
                      <div className="relative size-[11.302px] shrink-0 rounded-full bg-[#fec56c] shadow-[0px_0.942px_1.884px_0px_rgba(0,0,0,0.05)]" />
                      <p className="whitespace-nowrap font-['SF_Compact:Bold'] text-[18px] font-[790] leading-[20.72px] text-black">
                        Fruity
                      </p>
                    </div>
                    <p className="whitespace-nowrap font-['SF_Compact:Bold'] text-[16px] font-[790] leading-[22.603px] text-black">
                      30%
                    </p>
                  </div>
                  <p className="[word-break:break-word] w-full font-['SF_Compact:Light'] text-[12px] font-[350.52398681640625] leading-[18.365px] text-black">
                    Bright and juicy, with notes of citrus and tropical fruit.
                    You might also enjoy stone fruit, dried apricot and red
                    berry.
                  </p>
                  <div className="absolute left-[-4.71px] top-[121.89px] h-[30.138px] w-[359.767px]">
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 overflow-hidden bg-[#d9d9d9]"
                    >
                      <img
                        alt=""
                        className="absolute left-[-191.04%] top-[-3635.15%] h-[4584.3%] w-[371.08%] max-w-none"
                        src={imgRectangle209}
                      />
                    </div>
                  </div>
                </div>

                <div
                  className="relative col-1 row-1 ml-0 mt-0 h-[504px] w-[504.209px]"
                  data-node-id="220:2340"
                  data-name="TEA WHEEL"
                >
                  <div className="absolute left-[calc(50%-0.98px)] top-[16px] size-[356.952px] -translate-x-1/2">
                    <div className="absolute bottom-[73.24%] left-[20.09%] right-1/2 top-0">
                      <img
                        alt=""
                        className="block size-full max-w-none"
                        height="95.526"
                        src={imgEllipse48}
                        width="106.77"
                      />
                    </div>
                  </div>
                  <div className="absolute left-[calc(50%-0.97px)] top-[16px] size-[356.952px] -translate-x-1/2">
                    <div className="absolute inset-[10.63%_67.88%_60.35%_3.29%]">
                      <img
                        alt=""
                        className="block size-full max-w-none"
                        height="103.58"
                        src={imgEllipse49}
                        width="102.905"
                      />
                    </div>
                  </div>
                  <div className="absolute left-[calc(50%-0.86px)] top-[16px] size-[356.952px] -translate-x-1/2">
                    <div className="absolute inset-[33.17%_74.98%_24.6%_0]">
                      <img
                        alt=""
                        className="block size-full max-w-none"
                        height="150.75"
                        src={imgEllipse50}
                        width="89.312"
                      />
                    </div>
                  </div>
                  <div className="absolute left-[calc(50%-1.98px)] top-[34.05px] size-[356.952px] -translate-x-1/2">
                    <div className="absolute inset-[65.35%_14.51%_-2.24%_6.46%]">
                      <img
                        alt=""
                        className="block size-full max-w-none"
                        height="131.68"
                        src={imgEllipse51}
                        width="282.115"
                      />
                    </div>
                  </div>
                  <div className="absolute left-[calc(50%-0.98px)] top-[16px] size-[356.952px] -translate-x-1/2">
                    <div className="absolute inset-[0_0_14.64%_50.83%]">
                      <img
                        alt=""
                        className="block size-full max-w-none"
                        height="304.604"
                        src={imgEllipse52}
                        width="175.51"
                      />
                    </div>
                  </div>
                  <div className="absolute left-[calc(50%-54.36px)] top-[16px] h-[95.526px] w-[106.77px] -translate-x-1/2">
                    <img
                      alt=""
                      className="absolute inset-0 block size-full max-w-none"
                      src={imgTouchOther}
                    />
                  </div>
                  <div className="absolute left-[calc(50%-116.24px)] top-[53.95px] h-[103.58px] w-[102.905px] -translate-x-1/2">
                    <img
                      alt=""
                      className="absolute inset-0 block size-full max-w-none"
                      src={imgTouchHerbal}
                    />
                  </div>
                  <div className="absolute left-[calc(50%-134.68px)] top-[134.39px] h-[150.75px] w-[89.312px] -translate-x-1/2">
                    <img
                      alt=""
                      className="absolute inset-0 block size-full max-w-none"
                      src={imgTouchFloral}
                    />
                  </div>
                  <div className="absolute left-[calc(50%-16.34px)] top-[267.32px] h-[123.68px] w-[274.115px] -translate-x-1/2">
                    <img
                      alt=""
                      className="absolute inset-0 block size-full max-w-none"
                      src={imgTouchFruity}
                    />
                  </div>
                  <div className="absolute left-[calc(50%+89.75px)] top-[16.07px] h-[304.604px] w-[175.51px] -translate-x-1/2">
                    <img
                      alt=""
                      className="absolute inset-0 block size-full max-w-none"
                      src={imgTouchWoody}
                    />
                  </div>
                  <div className="absolute left-[calc(50%-1.84px)] top-[calc(50%-57.85px)] h-[114.305px] w-[120.837px] -translate-x-1/2 -translate-y-1/2">
                    <div className="pointer-events-none absolute inset-0 overflow-hidden">
                      <img
                        alt=""
                        className="absolute left-[-346%] top-[-112.12%] h-[556.9%] w-[792.37%] max-w-none"
                        src={imgGgvjuPhotoroom3}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 06 Design System */}
      <div
        className="relative flex w-full shrink-0 flex-col items-start gap-[40px]"
        data-node-id="220:2359"
        data-name="Design system"
      >
        <div
          className="relative flex w-full shrink-0 flex-col items-start gap-[20px]"
          data-node-id="220:2360"
          data-name="Section heading"
        >
          <div
            className="relative h-px w-full shrink-0 bg-[rgba(201,168,76,0.4)]"
            data-node-id="220:2361"
            data-name="Section divider"
          />
          <div
            className="relative flex w-full shrink-0 items-center gap-[16px] pt-[18px]"
            data-node-id="220:2362"
            data-name="Chapter"
          >
            <div
              className="relative flex size-[36px] shrink-0 flex-col items-center justify-center overflow-clip rounded-[36px] bg-[#c9a84c]"
              data-node-id="220:2363"
              data-name="Chapter marker"
            >
              <p
                className="[word-break:break-word] relative shrink-0 whitespace-nowrap font-['Gugi:Regular'] text-[14px] not-italic leading-[normal] text-[#152741]"
                data-node-id="220:2364"
              >
                06
              </p>
            </div>
            <p
              data-scroll-section="Design System"
              className="[word-break:break-word] relative min-w-px flex-[1_0_0] font-['Gugi:Regular'] text-[40px] not-italic leading-[normal] text-white"
              data-node-id="220:2365"
            >
              Design System
            </p>
          </div>
          <p
            className="[word-break:break-word] relative w-full shrink-0 font-['SF_Compact:Regular'] text-[20px] font-[457.8999938964844] uppercase leading-[normal] tracking-[2px] text-[#c9a84c]"
            data-node-id="220:2366"
          >
            One product language, with room for difference
          </p>
        </div>

        <div
          className="relative grid w-full shrink-0 grid-cols-1 gap-[58px] lg:grid-cols-2"
          data-node-id="220:2367"
        >
          <div
            className="relative flex flex-col items-start gap-[17px]"
            data-node-id="220:2368"
            data-name="Product design language"
          >
            <div
              className="[word-break:break-word] relative flex w-full max-w-[500px] flex-col items-start gap-[16px] font-['SF_Compact:Regular'] font-[457.8999938964844]"
              data-node-id="220:2369"
              data-name="Design language description"
            >
              <p
                className="relative w-full shrink-0 text-[30px] leading-[1.3] text-white"
                data-node-id="220:2370"
              >
                Botanical Green Palette — Tea
              </p>
              <p
                className="relative w-full shrink-0 text-[25px] leading-[1.55] text-[#c8d0da]"
                data-node-id="220:2371"
              >
                Fresh tea leaves, herbal notes and a calm ritual inform the tea
                palette.
              </p>
            </div>
            <div
              className="flex items-center gap-[16px]"
              data-node-id="220:2372"
            >
              <div
                className="size-[78px] shrink-0 bg-[#f2f7e3]"
                data-node-id="220:2373"
              />
              <div
                className="size-[78px] shrink-0 bg-[#b7e299]"
                data-node-id="220:2374"
              />
              <div
                className="size-[78px] shrink-0 bg-[#2c3906]"
                data-node-id="220:2375"
              />
            </div>
          </div>

          <div
            className="relative flex flex-col items-start gap-[17px]"
            data-node-id="220:2376"
            data-name="Product design language"
          >
            <div
              className="relative flex w-full max-w-[500px] flex-col items-start gap-[16px]"
              data-node-id="220:2377"
              data-name="Design language description"
            >
              <p
                className="[word-break:break-word] relative w-full shrink-0 font-['SF_Compact:Regular'] text-[30px] font-[457.8999938964844] leading-[1.3] text-white"
                data-node-id="220:2378"
              >
                Roasted Warmth Palette — Coffee
              </p>
              <p
                className="[word-break:break-word] relative w-full shrink-0 font-['SF_Compact:Regular'] text-[25px] font-[457.8999938964844] leading-[1.55] text-[#c8d0da]"
                data-node-id="220:2379"
              >
                Freshly roasted beans, aroma and the warmth of the morning
                inform the coffee palette.
              </p>
              <div
                className="flex items-center gap-[16px]"
                data-node-id="220:2380"
              >
                <div
                  className="size-[78px] shrink-0 bg-[#fcf2e5]"
                  data-node-id="220:2381"
                />
                <div
                  className="size-[78px] shrink-0 bg-[#fbead5]"
                  data-node-id="220:2382"
                />
                <div
                  className="size-[78px] shrink-0 bg-[#e2bc99]"
                  data-node-id="220:2383"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="relative grid w-full shrink-0 grid-cols-1 items-center gap-[58px] lg:grid-cols-2"
          data-node-id="220:2384"
          data-name="Product design language"
        >
          <div
            className="relative flex w-full max-w-[500px] flex-col items-start gap-[16px]"
            data-node-id="220:2385"
            data-name="Design language description"
          >
            <p
              className="[word-break:break-word] relative w-full shrink-0 font-['SF_Compact:Regular'] text-[30px] font-[457.8999938964844] leading-[1.3] text-white"
              data-node-id="220:2386"
            >
              Illustration
            </p>
            <p
              className="[word-break:break-word] relative w-full shrink-0 font-['SF_Compact:Regular'] text-[25px] font-[457.8999938964844] leading-[1.55] text-[#c8d0da]"
              data-node-id="220:2387"
            >
              Watercolour textures soften the technical structure of the flavour
              wheel and make the interaction more welcoming.
            </p>
            <div
              className="relative flex h-[254px] w-full max-w-[498px] shrink-0 flex-col items-center justify-center"
              data-node-id="220:2388"
            >
              <div
                className="relative inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start leading-[0]"
                data-node-id="220:2389"
              >
                <div
                  className="relative col-1 row-1 ml-[97px] mt-[93.02px] h-[57.644px] w-[60.938px]"
                  data-node-id="220:2390"
                  data-name="ggvju-Photoroom 4"
                >
                  <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <img
                      alt=""
                      className="absolute left-[-575.48%] top-[-228.44%] h-[556.9%] w-[792.37%] max-w-none"
                      src={imgGgvjuPhotoroom3}
                    />
                  </div>
                </div>
                <div
                  className="relative col-1 row-1 ml-0 mt-0 inline-grid grid-cols-[max-content] grid-rows-[max-content] place-items-start"
                  data-node-id="220:2391"
                >
                  <div className="relative col-1 row-1 ml-[37.25px] mt-[37.25px] size-[179.841px]">
                    <div className="absolute inset-[2.1%_58.31%_71.08%_15.66%]">
                      <img
                        alt=""
                        className="block size-full max-w-none"
                        height="48.246"
                        src={imgEllipse53}
                        width="46.82"
                      />
                    </div>
                  </div>
                  <div className="relative col-1 row-1 ml-[37.25px] mt-[37.25px] size-[179.841px]">
                    <div className="absolute bottom-[78.04%] left-[37.24%] right-1/2 top-0">
                      <img
                        alt=""
                        className="block size-full max-w-none"
                        height="39.493"
                        src={imgEllipse54}
                        width="22.945"
                      />
                    </div>
                  </div>
                  <div className="relative col-1 row-1 ml-[37.25px] mt-[37.25px] size-[179.841px]">
                    <div className="absolute inset-[14.64%_70.51%_44.94%_0]">
                      <img
                        alt=""
                        className="block size-full max-w-none"
                        height="72.682"
                        src={imgEllipse55}
                        width="53.042"
                      />
                    </div>
                  </div>
                  <div className="relative col-1 row-1 ml-[37.3px] mt-[37.25px] size-[179.841px]">
                    <div className="absolute inset-[53.82%_59.7%_2.88%_0.44%]">
                      <img
                        alt=""
                        className="block size-full max-w-none"
                        height="77.875"
                        src={imgEllipse56}
                        width="71.7"
                      />
                    </div>
                  </div>
                  <div className="relative col-1 row-1 ml-[39.87px] mt-[45.41px] size-[179.841px]">
                    <div className="absolute inset-[59.74%_1.78%_-2.24%_33.68%]">
                      <img
                        alt=""
                        className="block size-full max-w-none"
                        height="76.441"
                        src={imgEllipse57}
                        width="116.058"
                      />
                    </div>
                  </div>
                  <div className="relative col-1 row-1 ml-0 mt-0 flex size-[254.333px] items-center justify-center">
                    <div className="-rotate-135 flex-none">
                      <div className="relative size-[179.841px]">
                        <div className="absolute inset-[63.08%_15.93%_0_5.37%]">
                          <img
                            alt=""
                            className="block size-full max-w-none"
                            height="66.404"
                            src={imgEllipse58}
                            width="141.535"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="relative flex w-full max-w-[553px] flex-col items-start gap-[16px]"
            data-node-id="220:2404"
            data-name="Design language description"
          >
            <p
              className="[word-break:break-word] relative w-full shrink-0 font-['SF_Compact:Regular'] text-[25px] font-[457.8999938964844] leading-[1.5] tracking-[-0.55px] text-[#c8d0da]"
              data-node-id="220:2406"
            >
              The hand-drawn illustration style adds character and warmth to the
              overall design, making interaction feel inviting.
            </p>
            <div
              className="relative flex h-[96px] w-full shrink-0 items-center justify-center"
              data-node-id="220:2407"
            >
              <div
                className="relative h-[96.094px] w-[111.819px] shrink-0"
                data-node-id="220:2408"
              >
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                  <img
                    alt=""
                    className="absolute left-[-111.8%] top-[-34.55%] h-[274.55%] w-[422.72%] max-w-none"
                    src={imgFlavourQiInterviewQuestions3}
                  />
                </div>
              </div>
              <div
                className="relative h-[96.094px] w-[111.819px] shrink-0"
                data-node-id="220:2409"
              >
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                  <img
                    alt=""
                    className="absolute left-[-315.65%] top-[-34.55%] h-[274.55%] w-[422.72%] max-w-none"
                    src={imgFlavourQiInterviewQuestions3}
                  />
                </div>
              </div>
              <div
                className="relative h-[96.094px] w-[111.819px] shrink-0"
                data-node-id="220:2410"
              >
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                  <img
                    alt=""
                    className="absolute left-[-211.8%] top-[-34.55%] h-[274.55%] w-[422.72%] max-w-none"
                    src={imgFlavourQiInterviewQuestions3}
                  />
                </div>
              </div>
              <div
                className="relative h-[96.094px] w-[111.819px] shrink-0"
                data-node-id="220:2411"
              >
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                  <img
                    alt=""
                    className="absolute left-[-6.67%] top-[-34.55%] h-[274.55%] w-[422.72%] max-w-none"
                    src={imgFlavourQiInterviewQuestions3}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="[word-break:break-word] relative grid w-full shrink-0 grid-cols-1 gap-[58px] font-['SF_Compact:Regular'] font-[457.8999938964844] lg:grid-cols-2"
          data-node-id="220:2412"
          data-name="Product design language"
        >
          <div
            className="relative flex w-full max-w-[500px] flex-col items-start gap-[16px]"
            data-node-id="220:2413"
            data-name="Design language description"
          >
            <p
              className="relative w-full shrink-0 text-[30px] leading-[1.3] text-white"
              data-node-id="220:2414"
            >
              Typography — SF Compact
            </p>
            <p
              className="relative w-full shrink-0 text-[25px] leading-[1.55] text-[#c8d0da]"
              data-node-id="220:2415"
            >
              Chosen for its clarity, modern minimalism and subtle warmth, SF
              Compact supports a clear and approachable product experience.
            </p>
          </div>
          <div
            className="relative flex w-full max-w-[559px] flex-col items-start gap-[16px]"
            data-node-id="220:2416"
            data-name="Design language description"
          >
            <p
              className="relative w-full shrink-0 text-[30px] leading-[1.3] text-white"
              data-node-id="220:2417"
            >
              Components
            </p>
            <p
              className="relative w-full shrink-0 text-[25px] leading-[1.55] text-[#c8d0da]"
              data-node-id="220:2418"
            >
              Rounded rectangular containers frame buttons, tags, and
              infographics to maintain a friendly tone across screens.
            </p>
          </div>
        </div>
      </div>

      {/* 07 Competitive Research */}
      <div
        className="relative flex w-full shrink-0 flex-col items-start gap-[28px]"
        data-node-id="220:2419"
        data-name="Competitive research"
      >
        <div
          className="relative flex w-full shrink-0 flex-col items-start gap-[20px]"
          data-node-id="220:2420"
          data-name="Section heading"
        >
          <div
            className="relative h-px w-full shrink-0 bg-[rgba(201,168,76,0.4)]"
            data-node-id="220:2421"
            data-name="Section divider"
          />
          <div
            className="relative flex w-full shrink-0 items-center gap-[16px] pt-[18px]"
            data-node-id="220:2422"
            data-name="Chapter"
          >
            <div
              className="relative flex size-[36px] shrink-0 flex-col items-center justify-center overflow-clip rounded-[36px] bg-[#c9a84c]"
              data-node-id="220:2423"
              data-name="Chapter marker"
            >
              <p
                className="[word-break:break-word] relative shrink-0 whitespace-nowrap font-['Gugi:Regular'] text-[14px] not-italic leading-[normal] text-[#152741]"
                data-node-id="220:2424"
              >
                07
              </p>
            </div>
            <p
              data-scroll-section="Competitive Research"
              className="[word-break:break-word] relative min-w-px flex-[1_0_0] font-['Gugi:Regular'] text-[40px] not-italic leading-[normal] text-white"
              data-node-id="220:2425"
            >
              Competitive Research
            </p>
          </div>
          <p
            className="[word-break:break-word] relative w-full shrink-0 font-['SF_Compact:Regular'] text-[20px] font-[457.8999938964844] uppercase leading-[normal] tracking-[2px] text-[#c9a84c]"
            data-node-id="220:2426"
          >
            Patterns from taste-led experiences
          </p>
        </div>
        <p
          className="[word-break:break-word] relative w-full shrink-0 font-['SF_Compact:Regular'] text-[25px] font-[457.8999938964844] leading-[1.55] text-[#c8d0da]"
          data-node-id="220:2427"
        >
          Three direct references guided the competitive analysis of the quiz,
          results and recommendations.
        </p>
        <div
          className="relative flex w-full shrink-0 flex-col items-start gap-[16px]"
          data-node-id="220:2428"
          data-name="Competitor observations"
        >
          <div
            className="relative flex w-full shrink-0 flex-col items-start gap-[16px] overflow-clip rounded-[8px] bg-[#1c3354] p-[24px] md:flex-row md:items-center md:gap-[32px]"
            data-node-id="220:2429"
            data-name="Competitor observation"
          >
            <div
              className="relative hidden h-[44px] w-[4px] shrink-0 rounded-[2px] bg-[#c9a84c] md:block"
              data-node-id="220:2430"
              data-name="Observation accent"
            />
            <p
              className="[word-break:break-word] relative shrink-0 font-['SF_Compact:Regular'] text-[25px] font-[457.8999938964844] leading-[normal] text-[#c9a84c] md:w-[330px]"
              data-node-id="220:2431"
            >
              whatsyourwhisky.com
            </p>
            <p
              className="[word-break:break-word] relative min-w-px flex-[1_0_0] font-['SF_Compact:Regular'] text-[25px] font-[457.8999938964844] leading-[1.45] text-[#c8d0da]"
              data-node-id="220:2432"
            >
              Clear navigation and strong visual hierarchy.
            </p>
          </div>
          <div
            className="relative flex w-full shrink-0 flex-col items-start gap-[16px] overflow-clip rounded-[8px] bg-[#1c3354] p-[24px] md:flex-row md:items-center md:gap-[32px]"
            data-node-id="220:2433"
            data-name="Competitor observation"
          >
            <div
              className="relative hidden h-[44px] w-[4px] shrink-0 rounded-[2px] bg-[#c9a84c] md:block"
              data-node-id="220:2434"
              data-name="Observation accent"
            />
            <p
              className="[word-break:break-word] relative shrink-0 font-['SF_Compact:Regular'] text-[25px] font-[457.8999938964844] leading-[normal] text-[#c9a84c] md:w-[330px]"
              data-node-id="220:2435"
            >
              brewfit.com
            </p>
            <p
              className="[word-break:break-word] relative min-w-px flex-[1_0_0] font-['SF_Compact:Regular'] text-[25px] font-[457.8999938964844] leading-[1.45] text-[#c8d0da]"
              data-node-id="220:2436"
            >
              A personal taste profile and profile bars.
            </p>
          </div>
          <div
            className="relative flex w-full shrink-0 flex-col items-start gap-[16px] overflow-clip rounded-[8px] bg-[#1c3354] p-[24px] md:flex-row md:items-center md:gap-[32px]"
            data-node-id="220:2437"
            data-name="Competitor observation"
          >
            <div
              className="relative hidden h-[44px] w-[4px] shrink-0 rounded-[2px] bg-[#c9a84c] md:block"
              data-node-id="220:2438"
              data-name="Observation accent"
            />
            <p
              className="[word-break:break-word] relative shrink-0 font-['SF_Compact:Regular'] text-[25px] font-[457.8999938964844] leading-[normal] text-[#c9a84c] md:w-[330px]"
              data-node-id="220:2439"
            >
              davidstea.com
            </p>
            <p
              className="[word-break:break-word] relative min-w-px flex-[1_0_0] font-['SF_Compact:Regular'] text-[25px] font-[457.8999938964844] leading-[1.45] text-[#c8d0da]"
              data-node-id="220:2440"
            >
              One main recommendation, with alternatives in small cards.
            </p>
          </div>
        </div>
      </div>

      {/* 08 Learnings & Footer */}
      <div
        className="relative flex w-full shrink-0 flex-col items-start gap-[40px]"
        data-node-id="220:2441"
        data-name="Learnings and closing"
      >
        <div
          className="relative flex w-full shrink-0 flex-col items-start gap-[20px]"
          data-node-id="220:2442"
          data-name="Section heading"
        >
          <div
            className="relative h-px w-full shrink-0 bg-[rgba(201,168,76,0.4)]"
            data-node-id="220:2443"
            data-name="Section divider"
          />
          <div
            className="relative flex w-full shrink-0 items-center gap-[16px] pt-[18px]"
            data-node-id="220:2444"
            data-name="Chapter"
          >
            <div
              className="relative flex size-[36px] shrink-0 flex-col items-center justify-center overflow-clip rounded-[36px] bg-[#c9a84c]"
              data-node-id="220:2445"
              data-name="Chapter marker"
            >
              <p
                className="[word-break:break-word] relative shrink-0 whitespace-nowrap font-['Gugi:Regular'] text-[14px] not-italic leading-[normal] text-[#152741]"
                data-node-id="220:2446"
              >
                08
              </p>
            </div>
            <p
              data-scroll-section="Learnings"
              className="[word-break:break-word] relative min-w-px flex-[1_0_0] font-['Gugi:Regular'] text-[40px] not-italic leading-[normal] text-white"
              data-node-id="220:2447"
            >
              Learnings
            </p>
          </div>
          <p
            className="[word-break:break-word] relative w-full shrink-0 font-['SF_Compact:Regular'] text-[20px] font-[457.8999938964844] uppercase leading-[normal] tracking-[2px] text-[#c9a84c]"
            data-node-id="220:2448"
          >
            Coherence without flattening the differences
          </p>
        </div>
        <p
          className="[word-break:break-word] relative w-full shrink-0 font-['SF_Compact:Regular'] text-[25px] font-[457.8999938964844] leading-[1.55] text-[#c8d0da]"
          data-node-id="220:2449"
        >
          The real tension wasn’t inventing a new system. It was maintaining one
          coherent FlavourIQ system across wine, coffee and tea — three worlds
          with different vocabularies — without losing what makes each distinct.
        </p>
        <div
          className="[word-break:break-word] relative flex w-full shrink-0 flex-col items-start gap-[20px] overflow-clip rounded-[12px] border border-solid border-[rgba(201,168,76,0.4)] bg-[#1c3354] p-[40px]"
          data-node-id="220:2450"
          data-name="Guiding principle"
        >
          <p
            className="relative shrink-0 whitespace-nowrap font-['SF_Compact:Regular'] text-[18px] font-[457.8999938964844] leading-[normal] tracking-[2px] text-[#c9a84c]"
            data-node-id="220:2451"
          >
            THE PRINCIPLE THAT RESOLVED MOST DESIGN DEBATES
          </p>
          <p
            className="relative w-full shrink-0 font-['Gugi:Regular'] text-[38px] not-italic leading-[1.3] text-white"
            data-node-id="220:2452"
          >
            Consistent, but category-aware.
          </p>
          <p
            className="relative w-full shrink-0 font-['SF_Compact:Regular'] text-[25px] font-[457.8999938964844] leading-[1.55] text-[#c8d0da]"
            data-node-id="220:2453"
          >
            A shared structure can hold different flavours, as long as its
            language and explanations remain specific to the category.
          </p>
        </div>
        <div
          className="relative h-px w-full shrink-0 bg-[#c9a84c] opacity-40"
          data-node-id="220:2454"
          data-name="Rectangle"
        />
        <div
          className="relative flex w-full shrink-0 flex-wrap items-start justify-between gap-6"
          data-node-id="220:2455"
        >
          <div
            className="relative flex shrink-0 flex-col items-start justify-center gap-[19px]"
            data-node-id="220:2456"
          >
            <a
              href="#"
              className="relative flex items-center gap-[10px] transition-opacity hover:opacity-80"
              data-node-id="220:2457"
              data-name="Frame"
            >
              <div
                className="relative size-[18px] shrink-0"
                data-node-id="220:2458"
                data-name="figma"
              >
                <img
                  alt=""
                  className="absolute inset-0 block size-full max-w-none"
                  src={imgFigma}
                />
              </div>
              <p
                className="[word-break:break-word] relative shrink-0 whitespace-nowrap font-['SF_Compact:Regular'] text-[17px] font-[457.8999938964844] leading-[normal] text-[#c9a84c]"
                data-node-id="220:2460"
              >
                Figma Design
              </p>
            </a>
            <a
              href="https://flavouriq.com"
              target="_blank"
              rel="noreferrer"
              className="relative flex items-center gap-[10px] transition-opacity hover:opacity-80"
              data-node-id="220:2461"
              data-name="Frame"
            >
              <div
                className="relative size-[18px] shrink-0"
                data-node-id="220:2462"
                data-name="globe"
              >
                <img
                  alt=""
                  className="absolute inset-0 block size-full max-w-none"
                  src={imgGlobe}
                />
              </div>
              <p
                className="[word-break:break-word] relative shrink-0 whitespace-nowrap font-['SF_Compact:Regular'] text-[17px] font-[457.8999938964844] leading-[normal] text-[#c9a84c]"
                data-node-id="220:2464"
              >
                flavouriq.com
              </p>
            </a>
          </div>
          <button
            type="button"
            onClick={onNext}
            className="relative flex w-full max-w-[358px] shrink-0 cursor-pointer items-center justify-center rounded-[6px] bg-[#c9a84c] px-[28px] py-[14px] transition-[background,box-shadow] hover:bg-gold-soft hover:shadow-[0_0_20px_rgba(219,194,140,0.5)]"
            data-node-id="220:2465"
            data-name="Frame"
          >
            <p
              className="[word-break:break-word] relative shrink-0 whitespace-nowrap font-['Gugi:Regular'] text-[14px] font-normal leading-[normal] tracking-[1px] text-[#152741]"
              data-node-id="220:2466"
              style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}
            >
              NEXT PROJECT →
            </p>
          </button>
        </div>
      </div>
    </div>
  )
}
