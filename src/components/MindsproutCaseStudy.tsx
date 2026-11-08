const assetPathPrefix = "/assets"
const imgArrowRight = `${assetPathPrefix}/f5ea3.svg`
const imgMindSproutAppScreensSproutHomeImageSpace = `${assetPathPrefix}/311a3.png`
const imgBigIdeaMapImageSpace = `${assetPathPrefix}/97b86.png`
const imgConvergenceChallengeRefinementImageSpace = `${assetPathPrefix}/872aa.png`
const imgInterviewSynthesisedPersonaImageSpace = `${assetPathPrefix}/96553.png`
const imgReflectiveEngagingPillarsImageSpace = `${assetPathPrefix}/ba522.png`
const imgEarlyPaperPrototypeImageSpace = `${assetPathPrefix}/12b9e.png`
const imgRefinedPrototypeImageSpace = `${assetPathPrefix}/06bd4.png`
const imgHomeSproutImageSpace = `${assetPathPrefix}/1cddd.png`
const imgTripsEmptyStateImageSpace = `${assetPathPrefix}/3f756.png`
const imgNewTripImageSpace = `${assetPathPrefix}/7e0ce.png`
const imgTripExpectationsImageSpace = `${assetPathPrefix}/0e9f2.png`
const imgTripExpectationsImageSpace1 = `${assetPathPrefix}/ebfd9.png`
const imgProfileImageSpace = `${assetPathPrefix}/7f2bd.png`
const imgSettingsImageSpace = `${assetPathPrefix}/b757a.png`
const imgTripExpectationsImageSpace2 = `${assetPathPrefix}/410d6.png`
const imgTripExpectationsImageSpace3 = `${assetPathPrefix}/968c7.png`
const imgSproutStateStripEvolutionSequenceImageSpace = `${assetPathPrefix}/5e7d0.png`
const imgTripExpectationsImageSpace4 = `${assetPathPrefix}/efce5.png`
const imgProfileImageSpace1 = `${assetPathPrefix}/32ce6.png`
const imgSettingsImageSpace1 = `${assetPathPrefix}/09d21.png`
const imgSettingsImageSpace2 = `${assetPathPrefix}/0d563.png`
const imgSettingsImageSpace3 = `${assetPathPrefix}/23f34.png`
const imgSettingsImageSpace4 = `${assetPathPrefix}/973d0.png`
const imgLightScreenshot = `${assetPathPrefix}/4b193.png`
const imgDarkScreenshot = `${assetPathPrefix}/66f75.png`
const imgFigma = `${assetPathPrefix}/f0362.svg`
const imgGlobe = `${assetPathPrefix}/95966.svg`

function ArrowRight({ className }: { className?: string }) {
  return (
    <div
      className={className || "relative size-[24px]"}
      data-node-id="244:21"
      data-name="Arrow_right"
    >
      <img
        alt=""
        className="absolute block inset-0 max-w-none size-full"
        src={imgArrowRight}
      />
    </div>
  )
}

export default function MindsproutCaseStudy({
  onNext,
}: {
  onNext: () => void
}) {
  return (
    <div
      className="compact-case-study mindsprout-case-study relative mx-auto flex w-full max-w-[1158px] flex-col items-start gap-[80px] pt-2 pb-[60px]"
      style={{ animation: "fade-in 0.5s both" }}
      data-node-id="244:23"
      data-name="MindSprout (FINAL)"
    >
      <div
        className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full"
        data-node-id="244:24"
        data-name="Project introduction"
      >
        <p
          className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[#c9a84c] text-[20px] tracking-[2px] uppercase w-full"
          data-node-id="244:25"
        >
          MindSprout / iOS development case study
        </p>
        <div
          className="[word-break:break-word] font-['Gugi:Regular'] leading-[0] not-italic relative shrink-0 text-[57px] text-white w-full"
          data-node-id="244:26"
        >
          <p className="leading-[1.2] mb-0">Turn Every Journey</p>
          <p className="leading-[1.2]">Into Intentional Growth</p>
        </div>
        <div
          className="border border-[rgba(201,168,76,0.6)] border-solid content-stretch flex flex-col h-[600px] items-start justify-between p-[24px] relative rounded-[12px] shrink-0 w-full"
          data-node-id="244:27"
          data-name="MindSprout — App screens + Sprout home — Image space"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
            <img
              alt=""
              className="absolute h-[108.38%] left-0 max-w-none top-[0.08%] w-full"
              src={imgMindSproutAppScreensSproutHomeImageSpace}
            />
          </div>
        </div>
        <div
          className="relative flex w-full shrink-0 flex-col items-start gap-[40px] pt-[8px] lg:flex-row lg:gap-[64px]"
          data-node-id="244:28"
          data-name="Project overview"
        >
          <div
            className="relative flex w-full shrink-0 flex-col items-start gap-[24px] lg:w-[68%]"
            data-node-id="244:29"
            data-name="Overview narrative"
          >
            <div
              className="relative flex shrink-0 flex-wrap items-start gap-[10px]"
              data-node-id="244:30"
              data-name="Project disciplines"
            >
              <div
                className="bg-[#c9a84c] content-stretch flex items-start overflow-clip px-[12px] py-[5px] relative rounded-[40px] shrink-0"
                data-node-id="244:31"
                data-name="Project tag"
              >
                <p
                  className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[#152741] text-[17px] whitespace-nowrap"
                  data-node-id="244:32"
                >
                  iOS development
                </p>
              </div>
              <div
                className="bg-[#c9a84c] content-stretch flex items-start overflow-clip px-[12px] py-[5px] relative rounded-[40px] shrink-0"
                data-node-id="244:33"
                data-name="Project tag"
              >
                <p
                  className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[#152741] text-[17px] whitespace-nowrap"
                  data-node-id="244:34"
                >
                  SwiftUI
                </p>
              </div>
              <div
                className="bg-[#c9a84c] content-stretch flex items-start overflow-clip px-[12px] py-[5px] relative rounded-[40px] shrink-0"
                data-node-id="244:35"
                data-name="Project tag"
              >
                <p
                  className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[#152741] text-[17px] whitespace-nowrap"
                  data-node-id="244:36"
                >
                  SpriteKit
                </p>
              </div>
              <div
                className="bg-[#c9a84c] content-stretch flex items-start overflow-clip px-[12px] py-[5px] relative rounded-[40px] shrink-0"
                data-node-id="244:37"
                data-name="Project tag"
              >
                <p
                  className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[#152741] text-[17px] whitespace-nowrap"
                  data-node-id="244:38"
                >
                  Figma
                </p>
              </div>
              <div
                className="bg-[#c9a84c] content-stretch flex items-start overflow-clip px-[12px] py-[5px] relative rounded-[40px] shrink-0"
                data-node-id="244:39"
                data-name="Project tag"
              >
                <p
                  className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[#152741] text-[17px] whitespace-nowrap"
                  data-node-id="244:40"
                >
                  Claude Code
                </p>
              </div>
            </div>
            <p
              className="[word-break:break-word] font-['Gugi:Regular'] leading-[normal] not-italic relative shrink-0 text-[35px] text-white whitespace-nowrap"
              data-node-id="244:41"
            >
              Overview
            </p>
            <p
              className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[1.55] min-w-full relative shrink-0 text-[#c8d0da] text-[25px] w-[min-content]"
              data-node-id="244:42"
            >
              MindSprout turns travel into a short daily reflection. Capture a
              meaningful moment in text or audio, add optional photos, and feed
              a companion Sprout that grows alongside your journeys.
            </p>
            <p
              className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[1.55] min-w-full relative shrink-0 text-[#c8d0da] text-[25px] w-[min-content]"
              data-node-id="244:43"
            >
              Built by a team of five, the iOS app pairs a private travel
              journal with a living companion. My focus was the Sprout animation
              system, onboarding, Wardrobe, and parts of navigation and dark
              mode.
            </p>
          </div>
          <div
            className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['SF_Compact:Regular'] font-[457.8999938964844] gap-[26px] items-start min-w-px overflow-clip relative"
            data-node-id="244:44"
            data-name="Project details"
          >
            <div
              className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full"
              data-node-id="244:45"
              data-name="Project detail"
            >
              <p
                className="leading-[normal] relative shrink-0 text-[20px] text-white uppercase whitespace-nowrap"
                data-node-id="244:46"
              >
                Role
              </p>
              <p
                className="leading-[1.35] min-w-full relative shrink-0 text-[#c8d0da] text-[23px] w-[min-content]"
                data-node-id="244:47"
              >{`iOS development, Sprout animation & onboarding`}</p>
            </div>
            <div
              className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full"
              data-node-id="244:48"
              data-name="Project detail"
            >
              <p
                className="leading-[normal] relative shrink-0 text-[20px] text-white uppercase whitespace-nowrap"
                data-node-id="244:49"
              >
                Team
              </p>
              <p
                className="leading-[1.35] min-w-full relative shrink-0 text-[#c8d0da] text-[23px] w-[min-content]"
                data-node-id="244:50"
              >
                CHARL.GRILLED (2 designers, 2 engineers, 1 business)
              </p>
            </div>
            <div
              className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full"
              data-node-id="244:51"
              data-name="Project detail"
            >
              <p
                className="leading-[normal] relative shrink-0 text-[20px] text-white uppercase whitespace-nowrap"
                data-node-id="244:52"
              >
                TIMELINE
              </p>
              <p
                className="leading-[1.35] min-w-full relative shrink-0 text-[#c8d0da] text-[23px] w-[min-content]"
                data-node-id="244:53"
              >
                4 weeks · May - June 2026
              </p>
            </div>
            <div
              className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full"
              data-node-id="244:54"
              data-name="Project detail"
            >
              <p
                className="leading-[normal] relative shrink-0 text-[20px] text-white uppercase whitespace-nowrap"
                data-node-id="244:55"
              >
                TYPE
              </p>
              <p
                className="leading-[1.35] min-w-full relative shrink-0 text-[#c8d0da] text-[23px] w-[min-content]"
                data-node-id="244:56"
              >
                Team project — Apple Foundation Program
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full"
        data-node-id="244:57"
        data-name="The brief"
      >
        <div
          className="content-stretch flex flex-col gap-[20px] items-start overflow-clip relative shrink-0 w-full"
          data-node-id="244:58"
          data-name="Section heading"
        >
          <div
            className="bg-[rgba(201,168,76,0.4)] h-px relative shrink-0 w-full"
            data-node-id="244:59"
            data-name="Section divider"
          />
          <div
            className="content-stretch flex gap-[16px] items-center overflow-clip pt-[18px] relative shrink-0 w-full"
            data-node-id="244:60"
            data-name="Chapter"
          >
            <div
              className="bg-[#c9a84c] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[36px] shrink-0 size-[36px]"
              data-node-id="244:61"
              data-name="Chapter marker"
            >
              <p
                className="[word-break:break-word] font-['Gugi:Regular'] leading-[normal] not-italic relative shrink-0 text-[#152741] text-[14px] whitespace-nowrap"
                data-node-id="244:62"
              >
                01
              </p>
            </div>
            <p
              className="[word-break:break-word] flex-[1_0_0] font-['Gugi:Regular'] leading-[normal] min-w-px not-italic relative text-[40px] text-white"
              data-scroll-section="The Brief"
              data-node-id="244:63"
            >
              The Brief
            </p>
          </div>
          <p
            className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[#c9a84c] text-[20px] tracking-[2px] uppercase w-full"
            data-node-id="244:64"
          >
            A reflection habit that doesn’t feel like homework
          </p>
        </div>
        <p
          className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[1.55] relative shrink-0 text-[#c8d0da] text-[25px] w-full"
          data-node-id="244:65"
        >
          Help young adults aged 18–35 turn their travels into personal growth
          through guided activities and reflection. Traditional tools ask for
          too much effort: journaling starts with good intentions, then loses
          consistency and long-term engagement.
        </p>
        <div
          className="[word-break:break-word] bg-[#1c3354] border border-[rgba(201,168,76,0.4)] border-solid content-stretch flex flex-col font-['SF_Compact:Regular'] font-[457.8999938964844] gap-[16px] items-start overflow-clip p-[32px] relative rounded-[12px] shrink-0 w-full"
          data-node-id="244:66"
          data-name="Evidence callout"
        >
          <p
            className="leading-[normal] relative shrink-0 text-[#c9a84c] text-[20px] tracking-[2px] uppercase w-full"
            data-node-id="244:67"
          >
            The product response
          </p>
          <p
            className="leading-[1.55] relative shrink-0 text-[#c8d0da] text-[25px] w-full"
            data-node-id="244:68"
          >
            Capture one meaningful moment each day and use it to feed a
            companion Sprout that evolves. Make the reflection worth returning
            to, without making it another task to complete.
          </p>
        </div>
        <div
          className="[word-break:break-word] content-stretch flex font-['SF_Compact:Regular'] font-[457.8999938964844] gap-[20px] items-start overflow-clip relative shrink-0 w-full"
          data-node-id="244:69"
          data-name="Product values"
        >
          <div
            className="bg-[#1c3354] content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip p-[24px] relative rounded-[12px] self-stretch"
            data-node-id="244:70"
            data-name="Narrative card"
          >
            <p
              className="leading-[normal] relative shrink-0 text-[#c9a84c] text-[20px] tracking-[2px] uppercase w-full"
              data-node-id="244:71"
            >
              Value / 01
            </p>
            <p
              className="leading-[1.3] relative shrink-0 text-[30px] text-white w-full"
              data-node-id="244:72"
            >
              Reflective
            </p>
            <p
              className="leading-[1.55] relative shrink-0 text-[#c8d0da] text-[25px] w-full"
              data-node-id="244:73"
            >
              Help people notice what a journey meant to them, not only document
              where they went.
            </p>
          </div>
          <div
            className="bg-[#1c3354] content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip p-[24px] relative rounded-[12px] self-stretch"
            data-node-id="244:74"
            data-name="Narrative card"
          >
            <p
              className="leading-[normal] relative shrink-0 text-[#c9a84c] text-[20px] tracking-[2px] uppercase w-full"
              data-node-id="244:75"
            >
              Value / 02
            </p>
            <p
              className="leading-[1.3] relative shrink-0 text-[30px] text-white w-full"
              data-node-id="244:76"
            >
              Engaging
            </p>
            <p
              className="leading-[1.55] relative shrink-0 text-[#c8d0da] text-[25px] w-full"
              data-node-id="244:77"
            >
              Give that reflection a visible, personal response through the
              growth of a companion.
            </p>
          </div>
        </div>
      </div>
      <div
        className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full"
        data-node-id="244:78"
        data-name="From big idea to direction"
      >
        <div
          className="content-stretch flex flex-col gap-[20px] items-start overflow-clip relative shrink-0 w-full"
          data-node-id="244:79"
          data-name="Section heading"
        >
          <div
            className="bg-[rgba(201,168,76,0.4)] h-px relative shrink-0 w-full"
            data-node-id="244:80"
            data-name="Section divider"
          />
          <div
            className="content-stretch flex gap-[16px] items-center overflow-clip pt-[18px] relative shrink-0 w-full"
            data-node-id="244:81"
            data-name="Chapter"
          >
            <div
              className="bg-[#c9a84c] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[36px] shrink-0 size-[36px]"
              data-node-id="244:82"
              data-name="Chapter marker"
            >
              <p
                className="[word-break:break-word] font-['Gugi:Regular'] leading-[normal] not-italic relative shrink-0 text-[#152741] text-[14px] whitespace-nowrap"
                data-node-id="244:83"
              >
                02
              </p>
            </div>
            <p
              className="[word-break:break-word] flex-[1_0_0] font-['Gugi:Regular'] leading-[normal] min-w-px not-italic relative text-[40px] text-white"
              data-scroll-section="Direction"
              data-node-id="244:84"
            >
              From Big Idea to Direction
            </p>
          </div>
          <p
            className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[#c9a84c] text-[20px] tracking-[2px] uppercase w-full"
            data-node-id="244:85"
          >
            Five weeks of design thinking · five perspectives
          </p>
        </div>
        <p
          className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[1.55] relative shrink-0 text-[#c8d0da] text-[25px] w-full"
          data-node-id="244:86"
        >
          We began on a shared Miro board with each team member’s Big Idea.
          Travel, Planning, Accessibility, Nutrition and Sustainability emerged
          as connected keywords. We converged on Travelling and asked: “How does
          travelling impact a person?”
        </p>
        <div
          className="[word-break:break-word] bg-[#1c3354] border border-[rgba(201,168,76,0.4)] border-solid content-stretch flex flex-col font-['SF_Compact:Regular'] font-[457.8999938964844] gap-[16px] items-start overflow-clip p-[32px] relative rounded-[12px] shrink-0 w-full"
          data-node-id="244:87"
          data-name="Evidence callout"
        >
          <p
            className="leading-[normal] relative shrink-0 text-[#c9a84c] text-[20px] tracking-[2px] uppercase w-full"
            data-node-id="244:88"
          >
            Refining the challenge
          </p>
          <p
            className="leading-[1.55] relative shrink-0 text-[#c8d0da] text-[25px] w-full"
            data-node-id="244:89"
          >
            “Help people grow while travelling” → “Turn every journey into
            intentional growth”.
          </p>
        </div>
        <div
          className="content-stretch flex gap-[32px] items-start overflow-clip relative shrink-0 w-full"
          data-node-id="244:90"
          data-name="Convergence artefacts"
        >
          <div
            className="border border-[rgba(201,168,76,0.6)] border-solid content-stretch flex flex-[1_0_0] flex-col h-[605px] items-start justify-between min-w-px p-[24px] relative rounded-[12px]"
            data-node-id="244:91"
            data-name="Big Idea map — Image space"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full"
              src={imgBigIdeaMapImageSpace}
            />
          </div>
          <div
            className="border border-[rgba(201,168,76,0.6)] border-solid content-stretch flex flex-[1_0_0] flex-col h-[502px] items-start justify-between min-w-px p-[24px] relative rounded-[12px]"
            data-node-id="244:92"
            data-name="Convergence & challenge refinement — Image space"
          >
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none rounded-[12px]"
            >
              <div className="absolute bg-[#162a42] inset-0 rounded-[12px]" />
              <img
                alt=""
                className="absolute max-w-none object-cover rounded-[12px] size-full"
                src={imgConvergenceChallengeRefinementImageSpace}
              />
            </div>
          </div>
        </div>
        <p
          className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[1.3] relative shrink-0 text-[30px] text-white w-full"
          data-node-id="244:93"
        >
          Research before feature lists
        </p>
        <p
          className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[1.55] relative shrink-0 text-[#c8d0da] text-[25px] w-full"
          data-node-id="244:94"
        >
          A research kanban tracked definitions, desk research, generative-AI
          research, user interviews, and competitor apps from the App Store and
          Play Store. Interview synthesis informed the persona rather than an
          invented character.
        </p>
        <div
          className="content-start flex flex-wrap gap-[10px] items-start overflow-clip relative shrink-0 w-full"
          data-node-id="244:95"
          data-name="Tags"
        >
          <div
            className="bg-[#1c3354] border border-[rgba(201,168,76,0.4)] border-solid content-stretch flex items-start overflow-clip px-[16px] py-[8px] relative rounded-[40px] shrink-0"
            data-node-id="244:96"
            data-name="Tag"
          >
            <p
              className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[#c8d0da] text-[20px] whitespace-nowrap"
              data-node-id="244:97"
            >
              Desk research
            </p>
          </div>
          <div
            className="bg-[#1c3354] border border-[rgba(201,168,76,0.4)] border-solid content-stretch flex items-start overflow-clip px-[16px] py-[8px] relative rounded-[40px] shrink-0"
            data-node-id="244:98"
            data-name="Tag"
          >
            <p
              className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[#c8d0da] text-[20px] whitespace-nowrap"
              data-node-id="244:99"
            >
              User interviews
            </p>
          </div>
          <div
            className="bg-[#1c3354] border border-[rgba(201,168,76,0.4)] border-solid content-stretch flex items-start overflow-clip px-[16px] py-[8px] relative rounded-[40px] shrink-0"
            data-node-id="244:100"
            data-name="Tag"
          >
            <p
              className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[#c8d0da] text-[20px] whitespace-nowrap"
              data-node-id="244:101"
            >
              Competitor apps
            </p>
          </div>
          <div
            className="bg-[#1c3354] border border-[rgba(201,168,76,0.4)] border-solid content-stretch flex items-start overflow-clip px-[16px] py-[8px] relative rounded-[40px] shrink-0"
            data-node-id="244:102"
            data-name="Tag"
          >
            <p
              className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[#c8d0da] text-[20px] whitespace-nowrap"
              data-node-id="244:103"
            >
              Research kanban
            </p>
          </div>
        </div>
        <div
          className="[word-break:break-word] bg-[#1c3354] content-stretch flex flex-col font-['SF_Compact:Regular'] font-[457.8999938964844] gap-[20px] items-start overflow-clip p-[32px] relative rounded-[12px] shrink-0 w-full"
          data-node-id="244:104"
          data-name="Persona insight"
        >
          <p
            className="leading-[normal] relative shrink-0 text-[#c9a84c] text-[20px] tracking-[2px] uppercase w-full"
            data-node-id="244:105"
          >
            Persona statement · synthesised from interviews
          </p>
          <p
            className="leading-[1.35] relative shrink-0 text-[34px] text-white w-full"
            data-node-id="244:106"
          >
            “I want to remember how I felt, not just what I saw.”
          </p>
          <p
            className="leading-[1.55] relative shrink-0 text-[#c8d0da] text-[25px] w-full"
            data-node-id="244:107"
          >
            Journaling is abandoned after two days when it feels like homework.
            More than three taps per screen becomes a reason to disengage. An
            Instagram photo preserves the scene, but not necessarily the
            emotional experience.
          </p>
        </div>
        <div
          className="content-stretch flex gap-[32px] items-start overflow-clip relative shrink-0 w-full"
          data-node-id="244:108"
          data-name="Persona and pillars artefacts"
        >
          <div
            className="border border-[rgba(201,168,76,0.6)] border-solid content-stretch flex flex-[1_0_0] flex-col h-[523px] items-start justify-between min-w-px p-[24px] relative rounded-[12px]"
            data-node-id="244:109"
            data-name="Interview-synthesised persona — Image space"
          >
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none rounded-[12px]"
            >
              <div className="absolute bg-[#162a42] inset-0 rounded-[12px]" />
              <img
                alt=""
                className="absolute max-w-none object-cover rounded-[12px] size-full"
                src={imgInterviewSynthesisedPersonaImageSpace}
              />
            </div>
          </div>
          <div
            className="border border-[rgba(201,168,76,0.6)] border-solid content-stretch flex flex-[1_0_0] flex-col h-[261px] items-start justify-between min-w-px p-[24px] relative rounded-[12px]"
            data-node-id="244:110"
            data-name="Reflective & Engaging pillars — Image space"
          >
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none rounded-[12px]"
            >
              <div className="absolute bg-[#162a42] inset-0 rounded-[12px]" />
              <img
                alt=""
                className="absolute max-w-none object-cover rounded-[12px] size-full"
                src={imgReflectiveEngagingPillarsImageSpace}
              />
            </div>
          </div>
        </div>
        <p
          className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[1.3] relative shrink-0 text-[30px] text-white w-full"
          data-node-id="244:111"
        >
          Making reflection the core experience
        </p>
        <p
          className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[1.55] relative shrink-0 text-[#c8d0da] text-[25px] w-full"
          data-node-id="244:112"
        >
          I explored the Reflective pillar through a user story and a paper
          sketch. Those earliest wireframes already included a growing buddy and
          a reflection-earned coin/XP system. In a cross-team test, people
          played the app and gave live feedback before we revealed the intended
          value pillar.
        </p>
        <div
          className="content-stretch flex gap-[32px] items-start overflow-clip relative shrink-0 w-full"
          data-node-id="244:113"
          data-name="Prototype evolution"
        >
          <div
            className="border border-[rgba(201,168,76,0.6)] border-solid content-stretch flex flex-[1_0_0] flex-col h-[1148px] items-start justify-between min-w-px p-[24px] relative rounded-[12px]"
            data-node-id="244:114"
            data-name="Early paper prototype — Image space"
          >
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none rounded-[12px]"
            >
              <div className="absolute bg-[#162a42] inset-0 rounded-[12px]" />
              <img
                alt=""
                className="absolute max-w-none object-cover rounded-[12px] size-full"
                src={imgEarlyPaperPrototypeImageSpace}
              />
            </div>
          </div>
          <div
            className="border border-[rgba(201,168,76,0.6)] border-solid content-stretch flex flex-[1_0_0] flex-col h-[1148px] items-start justify-between min-w-px p-[24px] relative rounded-[12px]"
            data-node-id="244:115"
            data-name="Refined prototype — Image space"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full"
              src={imgRefinedPrototypeImageSpace}
            />
          </div>
        </div>
        <div
          className="[word-break:break-word] content-stretch flex font-['SF_Compact:Regular'] font-[457.8999938964844] gap-[20px] items-start overflow-clip relative shrink-0 w-full"
          data-node-id="244:116"
          data-name="Scope decisions"
        >
          <div
            className="bg-[#1c3354] content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip p-[24px] relative rounded-[12px] self-stretch"
            data-node-id="244:117"
            data-name="Narrative card"
          >
            <p
              className="leading-[normal] relative shrink-0 text-[#c9a84c] text-[20px] tracking-[2px] uppercase w-full"
              data-node-id="244:118"
            >
              Kept in the direction
            </p>
            <p
              className="leading-[1.3] relative shrink-0 text-[30px] text-white w-full"
              data-node-id="244:119"
            >
              Keep the personal journey
            </p>
            <p
              className="leading-[1.55] relative shrink-0 text-[#c8d0da] text-[25px] w-full"
              data-node-id="244:120"
            >
              Journey-map / board-game idea; pre-trip questions; challenges;
              visual growth insights; privacy by default; a generated title; one
              question per onboarding screen.
            </p>
          </div>
          <div
            className="bg-[#1c3354] content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip p-[24px] relative rounded-[12px] self-stretch"
            data-node-id="244:121"
            data-name="Narrative card"
          >
            <p
              className="leading-[normal] relative shrink-0 text-[#c9a84c] text-[20px] tracking-[2px] uppercase w-full"
              data-node-id="244:122"
            >
              Cut from the scope
            </p>
            <p
              className="leading-[1.3] relative shrink-0 text-[30px] text-white w-full"
              data-node-id="244:123"
            >
              Remove premature complexity
            </p>
            <p
              className="leading-[1.55] relative shrink-0 text-[#c8d0da] text-[25px] w-full"
              data-node-id="244:124"
            >
              Social feed, social challenge feed, a skill tree with roots, and a
              complex points system. The simpler reflection-earned XP and coins
              remained.
            </p>
          </div>
        </div>
        <div
          className="[word-break:break-word] bg-[#1c3354] border border-[rgba(201,168,76,0.4)] border-solid content-stretch flex flex-col font-['SF_Compact:Regular'] font-[457.8999938964844] gap-[16px] items-start overflow-clip p-[32px] relative rounded-[12px] shrink-0 w-full"
          data-node-id="244:125"
          data-name="Evidence callout"
        >
          <p
            className="leading-[normal] relative shrink-0 text-[#c9a84c] text-[20px] tracking-[2px] uppercase w-full"
            data-node-id="244:126"
          >
            Follow-up testing · qualitative, not statistical
          </p>
          <p
            className="leading-[1.55] relative shrink-0 text-[#c8d0da] text-[25px] w-full"
            data-node-id="244:127"
          >
            About ten people in total (students at Techfest and friends outside
            the course) tried the direction. Nobody asked for the social feed to
            return, offering qualitative support for a private, individual
            experience. Visual tone feedback was mixed: “clean” for some,
            impersonal for others. Bugs raised in testing were later fixed by a
            developer teammate.
          </p>
        </div>
        <p
          className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[1.55] relative shrink-0 text-[#8a9aae] text-[18px] w-full"
          data-node-id="244:128"
        >
          The guiding principle was minimum friction. One research question
          remained open: does the game mechanic help people reflect, or simply
          encourage documentation?
        </p>
      </div>
      <div
        className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full"
        data-node-id="244:129"
        data-name="Two systems one loop"
      >
        <div
          className="content-stretch flex flex-col gap-[20px] items-start overflow-clip relative shrink-0 w-full"
          data-node-id="244:130"
          data-name="Section heading"
        >
          <div
            className="bg-[rgba(201,168,76,0.4)] h-px relative shrink-0 w-full"
            data-node-id="244:131"
            data-name="Section divider"
          />
          <div
            className="content-stretch flex gap-[16px] items-center overflow-clip pt-[18px] relative shrink-0 w-full"
            data-node-id="244:132"
            data-name="Chapter"
          >
            <div
              className="bg-[#c9a84c] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[36px] shrink-0 size-[36px]"
              data-node-id="244:133"
              data-name="Chapter marker"
            >
              <p
                className="[word-break:break-word] font-['Gugi:Regular'] leading-[normal] not-italic relative shrink-0 text-[#152741] text-[14px] whitespace-nowrap"
                data-node-id="244:134"
              >
                03
              </p>
            </div>
            <p
              className="[word-break:break-word] flex-[1_0_0] font-['Gugi:Regular'] leading-[normal] min-w-px not-italic relative text-[40px] text-white"
              data-scroll-section="Product Loop"
              data-node-id="244:135"
            >
              Two Systems, One Loop
            </p>
          </div>
          <p
            className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[#c9a84c] text-[20px] tracking-[2px] uppercase w-full"
            data-node-id="244:136"
          >
            A trip holds the memories. A Sprout carries the growth.
          </p>
        </div>
        <div
          className="[word-break:break-word] content-stretch flex font-['SF_Compact:Regular'] font-[457.8999938964844] gap-[20px] items-start overflow-clip relative shrink-0 w-full"
          data-node-id="244:137"
          data-name="Product systems"
        >
          <div
            className="bg-[#1c3354] content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip p-[24px] relative rounded-[12px] self-stretch"
            data-node-id="244:138"
            data-name="Narrative card"
          >
            <p
              className="leading-[normal] relative shrink-0 text-[#c9a84c] text-[20px] tracking-[2px] uppercase w-full"
              data-node-id="244:139"
            >
              The journey
            </p>
            <p
              className="leading-[1.3] relative shrink-0 text-[30px] text-white w-full"
              data-node-id="244:140"
            >{`Trips & Reflections`}</p>
            <p
              className="leading-[1.55] relative shrink-0 text-[#c8d0da] text-[25px] w-full"
              data-node-id="244:141"
            >
              Create a Solo, Friends, Family or Business trip with its own
              expectations. Capture one reflection per day in text or audio,
              with optional photos. Past trips live under Revisit.
            </p>
          </div>
          <div
            className="bg-[#1c3354] content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip p-[24px] relative rounded-[12px] self-stretch"
            data-node-id="244:142"
            data-name="Narrative card"
          >
            <p
              className="leading-[normal] relative shrink-0 text-[#c9a84c] text-[20px] tracking-[2px] uppercase w-full"
              data-node-id="244:143"
            >
              The Sprout
            </p>
            <p
              className="leading-[1.3] relative shrink-0 text-[30px] text-white w-full"
              data-node-id="244:144"
            >
              One companion across trips
            </p>
            <p
              className="leading-[1.55] relative shrink-0 text-[#c8d0da] text-[25px] w-full"
              data-node-id="244:145"
            >
              A reflection gives XP and feeds the same persistent Sprout. Growth
              leads to an animated evolution, while Wardrobe personalisation
              supports attachment beyond a progress bar.
            </p>
          </div>
        </div>
        <div
          className="content-stretch flex gap-[12px] items-start overflow-clip py-[16px] relative shrink-0 w-full"
          data-node-id="244:146"
          data-name="Reflection loop diagram"
        >
          <div
            className="[word-break:break-word] content-stretch flex flex-[1_0_0] gap-[12px] items-center leading-[normal] min-w-px overflow-clip relative"
            data-node-id="244:147"
            data-name="Loop step group"
          >
            <div
              className="border border-[rgba(201,168,76,0.6)] border-solid content-stretch flex flex-[1_0_0] flex-col font-['SF_Compact:Regular'] font-[457.8999938964844] gap-[10px] h-[112px] items-center justify-center min-w-px overflow-clip p-[12px] relative rounded-[8px]"
              data-node-id="244:148"
              data-name="Loop step"
            >
              <p
                className="relative shrink-0 text-[#c9a84c] text-[17px] whitespace-nowrap"
                data-node-id="244:149"
              >
                01
              </p>
              <p
                className="min-w-full relative shrink-0 text-[21px] text-center text-white w-[min-content]"
                data-node-id="244:150"
              >
                Trip
              </p>
            </div>
            <p
              className="font-['Inter:Regular'] font-normal not-italic relative shrink-0 text-[#c9a84c] text-[24px] whitespace-nowrap"
              data-node-id="244:151"
            >
              →
            </p>
          </div>
          <div
            className="[word-break:break-word] content-stretch flex flex-[1_0_0] gap-[12px] items-center leading-[normal] min-w-px overflow-clip relative"
            data-node-id="244:152"
            data-name="Loop step group"
          >
            <div
              className="border border-[rgba(201,168,76,0.6)] border-solid content-stretch flex flex-[1_0_0] flex-col font-['SF_Compact:Regular'] font-[457.8999938964844] gap-[10px] h-[112px] items-center justify-center min-w-px overflow-clip p-[12px] relative rounded-[8px]"
              data-node-id="244:153"
              data-name="Loop step"
            >
              <p
                className="relative shrink-0 text-[#c9a84c] text-[17px] whitespace-nowrap"
                data-node-id="244:154"
              >
                02
              </p>
              <p
                className="min-w-full relative shrink-0 text-[21px] text-center text-white w-[min-content]"
                data-node-id="244:155"
              >
                Daily reflection
              </p>
            </div>
            <p
              className="font-['Inter:Regular'] font-normal not-italic relative shrink-0 text-[#c9a84c] text-[24px] whitespace-nowrap"
              data-node-id="244:156"
            >
              →
            </p>
          </div>
          <div
            className="[word-break:break-word] content-stretch flex flex-[1_0_0] gap-[12px] items-center leading-[normal] min-w-px overflow-clip relative"
            data-node-id="244:157"
            data-name="Loop step group"
          >
            <div
              className="border border-[rgba(201,168,76,0.6)] border-solid content-stretch flex flex-[1_0_0] flex-col font-['SF_Compact:Regular'] font-[457.8999938964844] gap-[10px] h-[112px] items-center justify-center min-w-px overflow-clip p-[12px] relative rounded-[8px]"
              data-node-id="244:158"
              data-name="Loop step"
            >
              <p
                className="relative shrink-0 text-[#c9a84c] text-[17px] whitespace-nowrap"
                data-node-id="244:159"
              >
                03
              </p>
              <p
                className="min-w-full relative shrink-0 text-[21px] text-center text-white w-[min-content]"
                data-node-id="244:160"
              >
                XP / coins
              </p>
            </div>
            <p
              className="font-['Inter:Regular'] font-normal not-italic relative shrink-0 text-[#c9a84c] text-[24px] whitespace-nowrap"
              data-node-id="244:161"
            >
              →
            </p>
          </div>
          <div
            className="[word-break:break-word] content-stretch flex flex-[1_0_0] gap-[12px] items-center leading-[normal] min-w-px overflow-clip relative"
            data-node-id="244:162"
            data-name="Loop step group"
          >
            <div
              className="border border-[rgba(201,168,76,0.6)] border-solid content-stretch flex flex-[1_0_0] flex-col font-['SF_Compact:Regular'] font-[457.8999938964844] gap-[10px] h-[112px] items-center justify-center min-w-px overflow-clip p-[12px] relative rounded-[8px]"
              data-node-id="244:163"
              data-name="Loop step"
            >
              <p
                className="relative shrink-0 text-[#c9a84c] text-[17px] whitespace-nowrap"
                data-node-id="244:164"
              >
                04
              </p>
              <p
                className="min-w-full relative shrink-0 text-[21px] text-center text-white w-[min-content]"
                data-node-id="244:165"
              >
                Sprout growth
              </p>
            </div>
            <p
              className="font-['Inter:Regular'] font-normal not-italic relative shrink-0 text-[#c9a84c] text-[24px] whitespace-nowrap"
              data-node-id="244:166"
            >
              →
            </p>
          </div>
          <div
            className="content-stretch flex flex-[1_0_0] items-center min-w-px overflow-clip relative"
            data-node-id="244:167"
            data-name="Loop step group"
          >
            <div
              className="[word-break:break-word] border border-[rgba(201,168,76,0.6)] border-solid content-stretch flex flex-[1_0_0] flex-col font-['SF_Compact:Regular'] font-[457.8999938964844] gap-[10px] h-[112px] items-center justify-center leading-[normal] min-w-px overflow-clip p-[12px] relative rounded-[8px]"
              data-node-id="244:168"
              data-name="Loop step"
            >
              <p
                className="relative shrink-0 text-[#c9a84c] text-[17px] whitespace-nowrap"
                data-node-id="244:169"
              >
                05
              </p>
              <p
                className="min-w-full relative shrink-0 text-[21px] text-center text-white w-[min-content]"
                data-node-id="244:170"
              >
                Revisit
              </p>
            </div>
          </div>
        </div>
        <p
          className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[1.55] relative shrink-0 text-[#8a9aae] text-[18px] w-full"
          data-node-id="244:171"
        >
          Static product-loop explanation. These are documented features, not
          measured wellbeing or engagement outcomes.
        </p>
      </div>
      <div
        className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full"
        data-node-id="244:172"
        data-name="The reflection system"
      >
        <div
          className="content-stretch flex flex-col gap-[20px] items-start overflow-clip relative shrink-0 w-full"
          data-node-id="244:173"
          data-name="Section heading"
        >
          <div
            className="bg-[rgba(201,168,76,0.4)] h-px relative shrink-0 w-full"
            data-node-id="244:174"
            data-name="Section divider"
          />
          <div
            className="content-stretch flex gap-[16px] items-center overflow-clip pt-[18px] relative shrink-0 w-full"
            data-node-id="244:175"
            data-name="Chapter"
          >
            <div
              className="bg-[#c9a84c] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[36px] shrink-0 size-[36px]"
              data-node-id="244:176"
              data-name="Chapter marker"
            >
              <p
                className="[word-break:break-word] font-['Gugi:Regular'] leading-[normal] not-italic relative shrink-0 text-[#152741] text-[14px] whitespace-nowrap"
                data-node-id="244:177"
              >
                04
              </p>
            </div>
            <p
              className="[word-break:break-word] flex-[1_0_0] font-['Gugi:Regular'] leading-[normal] min-w-px not-italic relative text-[40px] text-white"
              data-scroll-section="Reflection System"
              data-node-id="244:178"
            >
              The Reflection System
            </p>
          </div>
          <p
            className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[#c9a84c] text-[20px] tracking-[2px] uppercase w-full"
            data-node-id="244:179"
          >
            A small prompt for a meaningful moment
          </p>
        </div>
        <p
          className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[1.55] relative shrink-0 text-[#c8d0da] text-[25px] w-full"
          data-node-id="244:180"
        >
          Thirty hand-written default memory triggers help a traveller find a
          starting point. They are not generated prompts. Trip-type variants
          make them more relevant, and a dice button refreshes the subset on
          screen.
        </p>
        <div
          className="[word-break:break-word] content-stretch flex font-['SF_Compact:Regular'] font-[457.8999938964844] gap-[20px] items-start overflow-clip relative shrink-0 w-full"
          data-node-id="244:181"
          data-name="Memory trigger examples"
        >
          <div
            className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-px overflow-clip relative"
            data-node-id="244:182"
            data-name="Trigger examples"
          >
            <div
              className="bg-[#1c3354] content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[24px] relative rounded-[12px] shrink-0 w-full"
              data-node-id="244:183"
              data-name="Narrative card"
            >
              <p
                className="leading-[normal] relative shrink-0 text-[#c9a84c] text-[20px] tracking-[2px] uppercase w-full"
                data-node-id="244:184"
              >
                Memory trigger
              </p>
              <p
                className="leading-[1.3] relative shrink-0 text-[30px] text-white w-full"
                data-node-id="244:185"
              >
                Chatted with someone who works or lives here
              </p>
              <p
                className="leading-[1.55] relative shrink-0 text-[#c8d0da] text-[25px] w-full"
                data-node-id="244:186"
              >
                A cafe owner, shopkeeper or neighbour.
              </p>
            </div>
            <div
              className="bg-[#1c3354] content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[24px] relative rounded-[12px] shrink-0 w-full"
              data-node-id="244:187"
              data-name="Narrative card"
            >
              <p
                className="leading-[normal] relative shrink-0 text-[#c9a84c] text-[20px] tracking-[2px] uppercase w-full"
                data-node-id="244:188"
              >
                Memory trigger
              </p>
              <p
                className="leading-[1.3] relative shrink-0 text-[30px] text-white w-full"
                data-node-id="244:189"
              >
                Got genuinely lost
              </p>
              <p
                className="leading-[1.55] relative shrink-0 text-[#c8d0da] text-[25px] w-full"
                data-node-id="244:190"
              >
                And found something better.
              </p>
            </div>
          </div>
          <div
            className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-px overflow-clip relative"
            data-node-id="244:191"
            data-name="Trigger examples"
          >
            <div
              className="bg-[#1c3354] content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[24px] relative rounded-[12px] shrink-0 w-full"
              data-node-id="244:192"
              data-name="Narrative card"
            >
              <p
                className="leading-[normal] relative shrink-0 text-[#c9a84c] text-[20px] tracking-[2px] uppercase w-full"
                data-node-id="244:193"
              >
                Memory trigger
              </p>
              <p
                className="leading-[1.3] relative shrink-0 text-[30px] text-white w-full"
                data-node-id="244:194"
              >
                Did something that scared me a little
              </p>
              <p
                className="leading-[1.55] relative shrink-0 text-[#c8d0da] text-[25px] w-full"
                data-node-id="244:195"
              >
                And came out the other side.
              </p>
            </div>
            <div
              className="bg-[#1c3354] content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[24px] relative rounded-[12px] shrink-0 w-full"
              data-node-id="244:196"
              data-name="Narrative card"
            >
              <p
                className="leading-[normal] relative shrink-0 text-[#c9a84c] text-[20px] tracking-[2px] uppercase w-full"
                data-node-id="244:197"
              >
                Memory trigger
              </p>
              <p
                className="leading-[1.3] relative shrink-0 text-[30px] text-white w-full"
                data-node-id="244:198"
              >
                Did nothing — and it was the right call
              </p>
              <p
                className="leading-[1.55] relative shrink-0 text-[#c8d0da] text-[25px] w-full"
                data-node-id="244:199"
              >
                A hammock, a bench, a slow afternoon.
              </p>
            </div>
          </div>
        </div>
        <p
          className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[1.3] relative shrink-0 text-[30px] text-white w-full"
          data-node-id="244:200"
        >
          Different trips, different starting points
        </p>
        <div
          className="[word-break:break-word] content-stretch flex flex-col font-['SF_Compact:Regular'] font-[457.8999938964844] gap-[12px] items-start overflow-clip relative shrink-0 w-full"
          data-node-id="244:201"
          data-name="Trip-specific prompts"
        >
          <div
            className="bg-[#1c3354] content-stretch flex gap-[24px] items-start overflow-clip p-[24px] relative rounded-[8px] shrink-0 w-full"
            data-node-id="244:202"
            data-name="Trip prompt"
          >
            <p
              className="leading-[normal] relative shrink-0 text-[#c9a84c] text-[20px] uppercase w-[140px]"
              data-node-id="244:203"
            >
              Solo
            </p>
            <p
              className="flex-[1_0_0] leading-[1.45] min-w-px relative text-[#c8d0da] text-[25px]"
              data-node-id="244:204"
            >
              Felt completely free: no plans, no schedule, just me.
            </p>
          </div>
          <div
            className="bg-[#1c3354] content-stretch flex gap-[24px] items-start overflow-clip p-[24px] relative rounded-[8px] shrink-0 w-full"
            data-node-id="244:205"
            data-name="Trip prompt"
          >
            <p
              className="leading-[normal] relative shrink-0 text-[#c9a84c] text-[20px] uppercase w-[140px]"
              data-node-id="244:206"
            >
              Friends
            </p>
            <p
              className="flex-[1_0_0] leading-[1.45] min-w-px relative text-[#c8d0da] text-[25px]"
              data-node-id="244:207"
            >
              Moment that made everyone laugh, the kind you’ll still talk about.
            </p>
          </div>
          <div
            className="bg-[#1c3354] content-stretch flex gap-[24px] items-start overflow-clip p-[24px] relative rounded-[8px] shrink-0 w-full"
            data-node-id="244:208"
            data-name="Trip prompt"
          >
            <p
              className="leading-[normal] relative shrink-0 text-[#c9a84c] text-[20px] uppercase w-[140px]"
              data-node-id="244:209"
            >
              Family
            </p>
            <p
              className="flex-[1_0_0] leading-[1.45] min-w-px relative text-[#c8d0da] text-[25px]"
              data-node-id="244:210"
            >
              Learned something about someone I love.
            </p>
          </div>
          <div
            className="bg-[#1c3354] content-stretch flex gap-[24px] items-start overflow-clip p-[24px] relative rounded-[8px] shrink-0 w-full"
            data-node-id="244:211"
            data-name="Trip prompt"
          >
            <p
              className="leading-[normal] relative shrink-0 text-[#c9a84c] text-[20px] uppercase w-[140px]"
              data-node-id="244:212"
            >
              Business
            </p>
            <p
              className="flex-[1_0_0] leading-[1.45] min-w-px relative text-[#c8d0da] text-[25px]"
              data-node-id="244:213"
            >
              When the trip stopped feeling like work.
            </p>
          </div>
        </div>
        <div
          className="content-stretch flex gap-[40px] items-start overflow-clip relative shrink-0 w-full"
          data-node-id="244:214"
          data-name="Emotional signals"
        >
          <div
            className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-px overflow-clip relative"
            data-node-id="244:215"
            data-name="Mood vocabulary"
          >
            <p
              className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[1.3] relative shrink-0 text-[30px] text-white w-full"
              data-node-id="244:216"
            >
              Mood tags
            </p>
            <div
              className="content-start flex flex-wrap gap-[10px] items-start overflow-clip relative shrink-0 w-full"
              data-node-id="244:217"
              data-name="Tags"
            >
              <div
                className="bg-[#1c3354] border border-[rgba(201,168,76,0.4)] border-solid content-stretch flex items-start overflow-clip px-[16px] py-[8px] relative rounded-[40px] shrink-0"
                data-node-id="244:218"
                data-name="Tag"
              >
                <p
                  className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[#c8d0da] text-[20px] whitespace-nowrap"
                  data-node-id="244:219"
                >
                  Serenity
                </p>
              </div>
              <div
                className="bg-[#1c3354] border border-[rgba(201,168,76,0.4)] border-solid content-stretch flex items-start overflow-clip px-[16px] py-[8px] relative rounded-[40px] shrink-0"
                data-node-id="244:220"
                data-name="Tag"
              >
                <p
                  className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[#c8d0da] text-[20px] whitespace-nowrap"
                  data-node-id="244:221"
                >
                  Curiosity
                </p>
              </div>
              <div
                className="bg-[#1c3354] border border-[rgba(201,168,76,0.4)] border-solid content-stretch flex items-start overflow-clip px-[16px] py-[8px] relative rounded-[40px] shrink-0"
                data-node-id="244:222"
                data-name="Tag"
              >
                <p
                  className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[#c8d0da] text-[20px] whitespace-nowrap"
                  data-node-id="244:223"
                >
                  Gratitude
                </p>
              </div>
              <div
                className="bg-[#1c3354] border border-[rgba(201,168,76,0.4)] border-solid content-stretch flex items-start overflow-clip px-[16px] py-[8px] relative rounded-[40px] shrink-0"
                data-node-id="244:224"
                data-name="Tag"
              >
                <p
                  className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[#c8d0da] text-[20px] whitespace-nowrap"
                  data-node-id="244:225"
                >
                  Awe
                </p>
              </div>
              <div
                className="bg-[#1c3354] border border-[rgba(201,168,76,0.4)] border-solid content-stretch flex items-start overflow-clip px-[16px] py-[8px] relative rounded-[40px] shrink-0"
                data-node-id="244:226"
                data-name="Tag"
              >
                <p
                  className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[#c8d0da] text-[20px] whitespace-nowrap"
                  data-node-id="244:227"
                >
                  Courage
                </p>
              </div>
              <div
                className="bg-[#1c3354] border border-[rgba(201,168,76,0.4)] border-solid content-stretch flex items-start overflow-clip px-[16px] py-[8px] relative rounded-[40px] shrink-0"
                data-node-id="244:228"
                data-name="Tag"
              >
                <p
                  className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[#c8d0da] text-[20px] whitespace-nowrap"
                  data-node-id="244:229"
                >
                  Nostalgia
                </p>
              </div>
              <div
                className="bg-[#1c3354] border border-[rgba(201,168,76,0.4)] border-solid content-stretch flex items-start overflow-clip px-[16px] py-[8px] relative rounded-[40px] shrink-0"
                data-node-id="244:230"
                data-name="Tag"
              >
                <p
                  className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[#c8d0da] text-[20px] whitespace-nowrap"
                  data-node-id="244:231"
                >
                  Joy
                </p>
              </div>
              <div
                className="bg-[#1c3354] border border-[rgba(201,168,76,0.4)] border-solid content-stretch flex items-start overflow-clip px-[16px] py-[8px] relative rounded-[40px] shrink-0"
                data-node-id="244:232"
                data-name="Tag"
              >
                <p
                  className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[#c8d0da] text-[20px] whitespace-nowrap"
                  data-node-id="244:233"
                >
                  Stillness
                </p>
              </div>
            </div>
          </div>
          <div
            className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-px overflow-clip relative"
            data-node-id="244:234"
            data-name="Growth vocabulary"
          >
            <p
              className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[1.3] relative shrink-0 text-[30px] text-white w-full"
              data-node-id="244:235"
            >
              Growth traits
            </p>
            <div
              className="content-start flex flex-wrap gap-[10px] items-start overflow-clip relative shrink-0 w-full"
              data-node-id="244:236"
              data-name="Tags"
            >
              <div
                className="bg-[#1c3354] border border-[rgba(201,168,76,0.4)] border-solid content-stretch flex items-start overflow-clip px-[16px] py-[8px] relative rounded-[40px] shrink-0"
                data-node-id="244:237"
                data-name="Tag"
              >
                <p
                  className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[#c8d0da] text-[20px] whitespace-nowrap"
                  data-node-id="244:238"
                >
                  Courage
                </p>
              </div>
              <div
                className="bg-[#1c3354] border border-[rgba(201,168,76,0.4)] border-solid content-stretch flex items-start overflow-clip px-[16px] py-[8px] relative rounded-[40px] shrink-0"
                data-node-id="244:239"
                data-name="Tag"
              >
                <p
                  className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[#c8d0da] text-[20px] whitespace-nowrap"
                  data-node-id="244:240"
                >
                  Openness
                </p>
              </div>
              <div
                className="bg-[#1c3354] border border-[rgba(201,168,76,0.4)] border-solid content-stretch flex items-start overflow-clip px-[16px] py-[8px] relative rounded-[40px] shrink-0"
                data-node-id="244:241"
                data-name="Tag"
              >
                <p
                  className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[#c8d0da] text-[20px] whitespace-nowrap"
                  data-node-id="244:242"
                >
                  Presence
                </p>
              </div>
              <div
                className="bg-[#1c3354] border border-[rgba(201,168,76,0.4)] border-solid content-stretch flex items-start overflow-clip px-[16px] py-[8px] relative rounded-[40px] shrink-0"
                data-node-id="244:243"
                data-name="Tag"
              >
                <p
                  className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[#c8d0da] text-[20px] whitespace-nowrap"
                  data-node-id="244:244"
                >
                  Patience
                </p>
              </div>
              <div
                className="bg-[#1c3354] border border-[rgba(201,168,76,0.4)] border-solid content-stretch flex items-start overflow-clip px-[16px] py-[8px] relative rounded-[40px] shrink-0"
                data-node-id="244:245"
                data-name="Tag"
              >
                <p
                  className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[#c8d0da] text-[20px] whitespace-nowrap"
                  data-node-id="244:246"
                >
                  Wonder
                </p>
              </div>
              <div
                className="bg-[#1c3354] border border-[rgba(201,168,76,0.4)] border-solid content-stretch flex items-start overflow-clip px-[16px] py-[8px] relative rounded-[40px] shrink-0"
                data-node-id="244:247"
                data-name="Tag"
              >
                <p
                  className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[#c8d0da] text-[20px] whitespace-nowrap"
                  data-node-id="244:248"
                >
                  Resilience
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="[word-break:break-word] bg-[#1c3354] border border-[rgba(201,168,76,0.4)] border-solid content-stretch flex flex-col font-['SF_Compact:Regular'] font-[457.8999938964844] gap-[16px] items-start overflow-clip p-[32px] relative rounded-[12px] shrink-0 w-full"
          data-node-id="244:249"
          data-name="Evidence callout"
        >
          <p
            className="leading-[normal] relative shrink-0 text-[#c9a84c] text-[20px] tracking-[2px] uppercase w-full"
            data-node-id="244:250"
          >
            From a daily moment to a trip profile
          </p>
          <p
            className="leading-[1.55] relative shrink-0 text-[#c8d0da] text-[25px] w-full"
            data-node-id="244:251"
          >
            Reflections supply emotional signals for the trip profile. A
            generated theme might be “Wonder came slowly” or “Found in the
            detour”, with a headline drawn from the most striking reflection.
          </p>
        </div>
        <p
          className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[1.55] relative shrink-0 text-[#8a9aae] text-[18px] w-full"
          data-node-id="244:252"
        >
          The core loop runs locally and offline by default. Mood tags, traits
          and trip themes describe the product experience; they do not establish
          a measured change in personal growth.
        </p>
      </div>
      <div
        className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full"
        data-node-id="244:253"
        data-name="App screen gallery"
      >
        <div
          className="content-stretch flex flex-col gap-[20px] items-start overflow-clip relative shrink-0 w-full"
          data-node-id="244:254"
          data-name="Section heading"
        >
          <div
            className="bg-[rgba(201,168,76,0.4)] h-px relative shrink-0 w-full"
            data-node-id="244:255"
            data-name="Section divider"
          />
          <div
            className="content-stretch flex gap-[16px] items-center overflow-clip pt-[18px] relative shrink-0 w-full"
            data-node-id="244:256"
            data-name="Chapter"
          >
            <div
              className="bg-[#c9a84c] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[36px] shrink-0 size-[36px]"
              data-node-id="244:257"
              data-name="Chapter marker"
            >
              <p
                className="[word-break:break-word] font-['Gugi:Regular'] leading-[normal] not-italic relative shrink-0 text-[#152741] text-[14px] whitespace-nowrap"
                data-node-id="244:258"
              >
                05
              </p>
            </div>
            <p
              className="[word-break:break-word] flex-[1_0_0] font-['Gugi:Regular'] leading-[normal] min-w-px not-italic relative text-[40px] text-white"
              data-scroll-section="App Screens"
              data-node-id="244:259"
            >
              The App, Screen by Screen
            </p>
          </div>
          <p
            className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[#c9a84c] text-[20px] tracking-[2px] uppercase w-full"
            data-node-id="244:260"
          >
            From setting an intention to returning home
          </p>
        </div>
        <p
          className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[1.55] relative shrink-0 text-[#c8d0da] text-[25px] w-full"
          data-node-id="244:261"
        >
          Six spaces for the source screenshot set. Each is intentionally left
          editable for the authentic MindSprout screen rather than a
          reconstructed or fictional interface.
        </p>
        <div
          className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-full"
          data-node-id="244:262"
          data-name="Screen gallery row"
        >
          <div
            className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative"
            data-node-id="244:263"
            data-name="Screen image"
          >
            <div
              className="border border-[rgba(201,168,76,0.6)] border-solid content-stretch flex flex-col h-[804px] items-start justify-between p-[24px] relative rounded-[12px] shrink-0 w-full"
              data-node-id="244:264"
              data-name="Home — Sprout — Image space"
            >
              <img
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full"
                src={imgHomeSproutImageSpace}
              />
            </div>
            <p
              className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[1.55] relative shrink-0 text-[#c8d0da] text-[25px] text-center w-full"
              data-node-id="244:265"
            >
              Trip page (empty)
            </p>
          </div>
          <div
            className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative"
            data-node-id="244:266"
            data-name="Screen image"
          >
            <div
              className="border border-[rgba(201,168,76,0.6)] border-solid content-stretch flex flex-col h-[804px] items-start justify-between p-[24px] relative rounded-[12px] shrink-0 w-full"
              data-node-id="244:267"
              data-name="Trips — Empty state — Image space"
            >
              <img
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full"
                src={imgTripsEmptyStateImageSpace}
              />
            </div>
            <p
              className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] h-[39px] leading-[1.55] relative shrink-0 text-[#c8d0da] text-[25px] text-center w-[370px]"
              data-node-id="244:268"
            >
              New Trip
            </p>
          </div>
          <div
            className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative"
            data-node-id="244:269"
            data-name="Screen image"
          >
            <div
              className="border border-[rgba(201,168,76,0.6)] border-solid content-stretch flex flex-col h-[804px] items-start justify-between p-[24px] relative rounded-[12px] shrink-0 w-full"
              data-node-id="244:270"
              data-name="New Trip — Image space"
            >
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none rounded-[12px]"
              >
                <div className="absolute bg-[#162a42] inset-0 rounded-[12px]" />
                <img
                  alt=""
                  className="absolute max-w-none object-cover rounded-[12px] size-full"
                  src={imgNewTripImageSpace}
                />
              </div>
            </div>
            <p
              className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] h-[39px] leading-[1.55] relative shrink-0 text-[#c8d0da] text-[25px] text-center w-[370px]"
              data-node-id="244:271"
            >
              Trip expectations
            </p>
          </div>
        </div>
        <div
          className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-full"
          data-node-id="244:272"
          data-name="Screen gallery row"
        >
          <div
            className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative"
            data-node-id="244:273"
            data-name="Screen image"
          >
            <div
              className="border border-[rgba(201,168,76,0.6)] border-solid content-stretch flex flex-col h-[804px] items-start justify-between p-[24px] relative rounded-[12px] shrink-0 w-full"
              data-node-id="244:274"
              data-name="Trip expectations — Image space"
            >
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none rounded-[12px]"
              >
                <div className="absolute bg-[#162a42] inset-0 rounded-[12px]" />
                <img
                  alt=""
                  className="absolute max-w-none object-cover rounded-[12px] size-full"
                  src={imgTripExpectationsImageSpace}
                />
                <img
                  alt=""
                  className="absolute max-w-none object-cover rounded-[12px] size-full"
                  src={imgTripExpectationsImageSpace1}
                />
              </div>
            </div>
            <p
              className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] h-[39px] leading-[1.55] relative shrink-0 text-[#c8d0da] text-[25px] text-center w-[370px]"
              data-node-id="244:275"
            >
              Home page with Sprout
            </p>
          </div>
          <div
            className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative"
            data-node-id="244:276"
            data-name="Screen image"
          >
            <div
              className="border border-[rgba(201,168,76,0.6)] border-solid content-stretch flex flex-col h-[804px] items-start justify-between p-[24px] relative rounded-[12px] shrink-0 w-full"
              data-node-id="244:277"
              data-name="Profile — Image space"
            >
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none rounded-[12px]"
              >
                <div className="absolute bg-[#162a42] inset-0 rounded-[12px]" />
                <img
                  alt=""
                  className="absolute max-w-none object-cover rounded-[12px] size-full"
                  src={imgProfileImageSpace}
                />
              </div>
            </div>
            <p
              className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] h-[39px] leading-[1.55] relative shrink-0 text-[#c8d0da] text-[25px] text-center w-[370px]"
              data-node-id="244:278"
            >
              Trip journal
            </p>
          </div>
          <div
            className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative"
            data-node-id="244:279"
            data-name="Screen image"
          >
            <div
              className="border border-[rgba(201,168,76,0.6)] border-solid content-stretch flex flex-col h-[804px] items-start justify-between p-[24px] relative rounded-[12px] shrink-0 w-full"
              data-node-id="244:280"
              data-name="Settings — Image space"
            >
              <img
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full"
                src={imgSettingsImageSpace}
              />
            </div>
            <p
              className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] h-[39px] leading-[1.55] relative shrink-0 text-[#c8d0da] text-[25px] text-center w-[370px]"
              data-node-id="244:281"
            >
              Writing a reflection
            </p>
          </div>
        </div>
        <p
          className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[1.55] relative shrink-0 text-[#8a9aae] text-[18px] w-full"
          data-node-id="244:282"
        >
          Image spaces are reserved for original screenshots supplied in the
          project PDF. No app screens have been invented for this case study.
        </p>
      </div>
      <div
        className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full"
        data-node-id="244:283"
        data-name="Sprout interactions"
      >
        <div
          className="content-stretch flex flex-col gap-[20px] items-start overflow-clip relative shrink-0 w-full"
          data-node-id="244:284"
          data-name="Section heading"
        >
          <div
            className="bg-[rgba(201,168,76,0.4)] h-px relative shrink-0 w-full"
            data-node-id="244:285"
            data-name="Section divider"
          />
          <div
            className="content-stretch flex gap-[16px] items-center overflow-clip pt-[18px] relative shrink-0 w-full"
            data-node-id="244:286"
            data-name="Chapter"
          >
            <div
              className="bg-[#c9a84c] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[36px] shrink-0 size-[36px]"
              data-node-id="244:287"
              data-name="Chapter marker"
            >
              <p
                className="[word-break:break-word] font-['Gugi:Regular'] leading-[normal] not-italic relative shrink-0 text-[#152741] text-[14px] whitespace-nowrap"
                data-node-id="244:288"
              >
                06
              </p>
            </div>
            <p
              className="[word-break:break-word] flex-[1_0_0] font-['Gugi:Regular'] leading-[normal] min-w-px not-italic relative text-[40px] text-white"
              data-scroll-section="Sprout"
              data-node-id="244:289"
            >
              A Companion, Not a Progress Bar
            </p>
          </div>
          <p
            className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[#c9a84c] text-[20px] tracking-[2px] uppercase w-full"
            data-node-id="244:290"
          >
            Personalisation, expression and visible change
          </p>
        </div>
        <div
          className="relative grid w-full shrink-0 grid-cols-1 items-start gap-[32px] lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)]"
          data-node-id="244:291"
          data-name="Wardrobe story"
        >
          <div
            className="relative flex w-full min-w-0 flex-col items-start gap-[24px]"
            data-node-id="244:292"
            data-name="Interaction description"
          >
            <div
              className="[word-break:break-word] bg-[#1c3354] content-stretch flex flex-col font-['SF_Compact:Regular'] font-[457.8999938964844] gap-[16px] items-start overflow-clip p-[24px] relative rounded-[12px] shrink-0 w-full"
              data-node-id="244:293"
              data-name="Narrative card"
            >
              <p
                className="leading-[1.3] relative shrink-0 text-[30px] text-white w-full"
                data-node-id="244:294"
              >
                Meet Sprout
              </p>
              <div
                className="leading-[0] relative shrink-0 text-[#c8d0da] text-[25px] w-full whitespace-pre-wrap"
                data-node-id="244:295"
              >
                <p className="leading-[1.55] mb-0">{`Sprout is your traveller companion that grow with you. `}</p>
                <p className="leading-[1.55]">
                  It has many animation so you can interact with it.
                </p>
              </div>
            </div>
            <div
              className="content-start flex flex-wrap gap-[10px] items-start overflow-clip relative shrink-0 w-full"
              data-node-id="244:296"
              data-name="Tags"
            >
              <div
                className="bg-[#1c3354] border border-[rgba(201,168,76,0.4)] border-solid content-stretch flex items-start overflow-clip px-[16px] py-[8px] relative rounded-[40px] shrink-0"
                data-node-id="244:297"
                data-name="Tag"
              >
                <p
                  className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[#c8d0da] text-[20px] whitespace-nowrap"
                  data-node-id="244:298"
                >
                  Idle
                </p>
              </div>
              <div
                className="bg-[#1c3354] border border-[rgba(201,168,76,0.4)] border-solid content-stretch flex items-start overflow-clip px-[16px] py-[8px] relative rounded-[40px] shrink-0"
                data-node-id="244:299"
                data-name="Tag"
              >
                <p
                  className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[#c8d0da] text-[20px] whitespace-nowrap"
                  data-node-id="244:300"
                >
                  Hungry
                </p>
              </div>
              <div
                className="bg-[#1c3354] border border-[rgba(201,168,76,0.4)] border-solid content-stretch flex items-start overflow-clip px-[16px] py-[8px] relative rounded-[40px] shrink-0"
                data-node-id="244:301"
                data-name="Tag"
              >
                <p
                  className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[#c8d0da] text-[20px] whitespace-nowrap"
                  data-node-id="244:302"
                >
                  Happy
                </p>
              </div>
              <div
                className="bg-[#1c3354] border border-[rgba(201,168,76,0.4)] border-solid content-stretch flex items-start overflow-clip px-[16px] py-[8px] relative rounded-[40px] shrink-0"
                data-node-id="244:303"
                data-name="Tag"
              >
                <p
                  className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[#c8d0da] text-[20px] whitespace-nowrap"
                  data-node-id="244:304"
                >
                  Sleep
                </p>
              </div>
              <div
                className="bg-[#1c3354] border border-[rgba(201,168,76,0.4)] border-solid content-stretch flex items-start overflow-clip px-[16px] py-[8px] relative rounded-[40px] shrink-0"
                data-node-id="244:305"
                data-name="Tag"
              >
                <p
                  className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[#c8d0da] text-[20px] whitespace-nowrap"
                  data-node-id="244:306"
                >
                  Blink
                </p>
              </div>
              <div
                className="bg-[#1c3354] border border-[rgba(201,168,76,0.4)] border-solid content-stretch flex items-start overflow-clip px-[16px] py-[8px] relative rounded-[40px] shrink-0"
                data-node-id="244:307"
                data-name="Tag"
              >
                <p
                  className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[#c8d0da] text-[20px] whitespace-nowrap"
                  data-node-id="244:308"
                >
                  Walk
                </p>
              </div>
              <div
                className="bg-[#1c3354] border border-[rgba(201,168,76,0.4)] border-solid content-stretch flex items-start overflow-clip px-[16px] py-[8px] relative rounded-[40px] shrink-0"
                data-node-id="244:309"
                data-name="Tag"
              >
                <p
                  className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[#c8d0da] text-[20px] whitespace-nowrap"
                  data-node-id="244:310"
                >
                  Pick
                </p>
              </div>
              <div
                className="bg-[#1c3354] border border-[rgba(201,168,76,0.4)] border-solid content-stretch flex items-start overflow-clip px-[16px] py-[8px] relative rounded-[40px] shrink-0"
                data-node-id="244:311"
                data-name="Tag"
              >
                <p
                  className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[#c8d0da] text-[20px] whitespace-nowrap"
                  data-node-id="244:312"
                >
                  Level-up
                </p>
              </div>
            </div>
          </div>
          <div
            className="relative flex w-full min-w-0 flex-col items-start overflow-clip"
            data-node-id="244:313"
            data-name="Screen image"
          >
            <div
              className="relative flex aspect-[270/593] h-auto w-full shrink-0 flex-col items-start justify-between rounded-[12px] border border-solid border-[rgba(201,168,76,0.6)] p-[24px]"
              data-node-id="244:314"
              data-name="Trip expectations — Image space"
            >
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none rounded-[12px]"
              >
                <div className="absolute bg-[#162a42] inset-0 rounded-[12px]" />
                <img
                  alt=""
                  className="absolute max-w-none object-cover rounded-[12px] size-full"
                  src={imgTripExpectationsImageSpace2}
                />
              </div>
            </div>
            <p
              className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] h-[39px] leading-[1.55] min-w-full relative shrink-0 text-[#c8d0da] text-[25px] text-center w-[min-content]"
              data-node-id="244:315"
            >
              Happy state
            </p>
          </div>
          <div
            className="relative flex w-full min-w-0 flex-col items-start overflow-clip"
            data-node-id="244:316"
            data-name="Screen image"
          >
            <div
              className="relative flex aspect-[270/593] h-auto w-full shrink-0 flex-col items-start justify-between rounded-[12px] border border-solid border-[rgba(201,168,76,0.6)] p-[24px]"
              data-node-id="244:317"
              data-name="Trip expectations — Image space"
            >
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none rounded-[12px]"
              >
                <div className="absolute bg-[#162a42] inset-0 rounded-[12px]" />
                <img
                  alt=""
                  className="absolute max-w-none object-cover rounded-[12px] size-full"
                  src={imgTripExpectationsImageSpace3}
                />
              </div>
            </div>
            <p
              className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] h-[39px] leading-[1.55] min-w-full relative shrink-0 text-[#c8d0da] text-[25px] text-center w-[min-content]"
              data-node-id="244:318"
            >
              Sleeping state
            </p>
          </div>
        </div>
        <p
          className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[1.55] relative shrink-0 text-[#c8d0da] text-[25px] w-full"
          data-node-id="244:319"
        >
          Every five levels, growth becomes a full-screen animated
          transformation. A range of states gives the companion expression
          between these milestones.
        </p>
        <div
          className="border border-[rgba(201,168,76,0.6)] border-solid content-stretch flex flex-col h-[320px] items-start justify-between p-[24px] relative rounded-[12px] shrink-0 w-full"
          data-node-id="244:320"
          data-name="Sprout state strip & evolution sequence — Image space"
        >
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none rounded-[12px]"
          >
            <div className="absolute bg-white inset-0 rounded-[12px]" />
            <div className="absolute inset-0 overflow-hidden rounded-[12px]">
              <img
                alt=""
                className="absolute h-[150%] left-[20.22%] max-w-none top-[5.39%] w-[59.65%]"
                src={imgSproutStateStripEvolutionSequenceImageSpace}
              />
            </div>
          </div>
        </div>
        <div
          className="[word-break:break-word] bg-[#1c3354] border border-[rgba(201,168,76,0.4)] border-solid content-stretch flex flex-col font-['SF_Compact:Regular'] font-[457.8999938964844] gap-[16px] items-start overflow-clip p-[32px] relative rounded-[12px] shrink-0 w-full"
          data-node-id="244:321"
          data-name="Evidence callout"
        >
          <p
            className="leading-[normal] relative shrink-0 text-[#c9a84c] text-[20px] tracking-[2px] uppercase w-full"
            data-node-id="244:322"
          >
            Planned, not delivered
          </p>
          <p
            className="leading-[1.55] relative shrink-0 text-[#c8d0da] text-[25px] w-full"
            data-node-id="244:323"
          >
            The Shop screen is currently a placeholder. A dedicated
            reflection-earned currency is intended to unlock future Wardrobe
            items; this is not a delivered purchasing flow.
          </p>
        </div>
      </div>
      <div
        className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full"
        data-node-id="244:324"
        data-name="Game economy"
      >
        <div
          className="content-stretch flex flex-col gap-[20px] items-start overflow-clip relative shrink-0 w-full"
          data-node-id="244:325"
          data-name="Section heading"
        >
          <div
            className="bg-[rgba(201,168,76,0.4)] h-px relative shrink-0 w-full"
            data-node-id="244:326"
            data-name="Section divider"
          />
          <div
            className="content-stretch flex gap-[16px] items-center overflow-clip pt-[18px] relative shrink-0 w-full"
            data-node-id="244:327"
            data-name="Chapter"
          >
            <div
              className="bg-[#c9a84c] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[36px] shrink-0 size-[36px]"
              data-node-id="244:328"
              data-name="Chapter marker"
            >
              <p
                className="[word-break:break-word] font-['Gugi:Regular'] leading-[normal] not-italic relative shrink-0 text-[#152741] text-[14px] whitespace-nowrap"
                data-node-id="244:329"
              >
                07
              </p>
            </div>
            <p
              className="[word-break:break-word] flex-[1_0_0] font-['Gugi:Regular'] leading-[normal] min-w-px not-italic relative text-[40px] text-white"
              data-scroll-section="Game Economy"
              data-node-id="244:330"
            >
              Small Rewards, Clear Rules
            </p>
          </div>
          <p
            className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[#c9a84c] text-[20px] tracking-[2px] uppercase w-full"
            data-node-id="244:331"
          >
            Documented game economy · not impact metrics
          </p>
        </div>
        <div
          className="[word-break:break-word] content-stretch flex font-['SF_Compact:Regular'] font-[457.8999938964844] gap-[20px] items-start overflow-clip relative shrink-0 w-full"
          data-node-id="244:332"
          data-name="Economy rules"
        >
          <div
            className="border border-[rgba(201,168,76,0.6)] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-center min-w-px overflow-clip p-[28px] relative rounded-[12px]"
            data-node-id="244:333"
            data-name="Product rule"
          >
            <p
              className="leading-[normal] relative shrink-0 text-[#c9a84c] text-[70px] whitespace-nowrap"
              data-node-id="244:334"
            >
              10
            </p>
            <p
              className="leading-[1.4] min-w-full relative shrink-0 text-[#c8d0da] text-[23px] text-center w-[min-content]"
              data-node-id="244:335"
            >
              Base XP per completed reflection
            </p>
          </div>
          <div
            className="border border-[rgba(201,168,76,0.6)] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-center min-w-px overflow-clip p-[28px] relative rounded-[12px]"
            data-node-id="244:336"
            data-name="Product rule"
          >
            <p
              className="leading-[normal] relative shrink-0 text-[#c9a84c] text-[70px] whitespace-nowrap"
              data-node-id="244:337"
            >
              10
            </p>
            <p
              className="leading-[1.4] min-w-full relative shrink-0 text-[#c8d0da] text-[23px] text-center w-[min-content]"
              data-node-id="244:338"
            >
              Coins per completed reflection
            </p>
          </div>
          <div
            className="border border-[rgba(201,168,76,0.6)] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[12px] h-[216px] items-center min-w-px overflow-clip p-[28px] relative rounded-[12px]"
            data-node-id="244:339"
            data-name="Product rule"
          >
            <p
              className="leading-[normal] relative shrink-0 text-[#c9a84c] text-[70px] whitespace-nowrap"
              data-node-id="244:340"
            >
              50
            </p>
            <p
              className="leading-[1.4] min-w-full relative shrink-0 text-[#c8d0da] text-[23px] text-center w-[min-content]"
              data-node-id="244:341"
            >
              Level cap
            </p>
          </div>
        </div>
        <p
          className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[1.55] relative shrink-0 text-[#c8d0da] text-[25px] w-full"
          data-node-id="244:342"
        >
          Eleven distinct stages span level 0 to level 50, with an evolution
          every five levels. Configuration is centralised, so the balance can be
          retuned independently.
        </p>
        <div
          className="bg-[#1c3354] content-stretch flex flex-col gap-[20px] items-start overflow-clip p-[28px] relative rounded-[12px] shrink-0 w-full"
          data-node-id="244:343"
          data-name="Evolution scale"
        >
          <p
            className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[#c9a84c] text-[18px] tracking-[2px] whitespace-nowrap"
            data-node-id="244:344"
          >
            EVOLUTION MILESTONES / LEVEL
          </p>
          <div
            className="bg-[rgba(201,168,76,0.6)] h-px relative shrink-0 w-full"
            data-node-id="244:345"
            data-name="Scale line"
          />
          <div
            className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full"
            data-node-id="244:346"
            data-name="Stage levels"
          >
            <div
              className="content-stretch flex flex-col gap-[12px] items-center overflow-clip relative shrink-0 w-[62px]"
              data-node-id="244:347"
              data-name="Evolution stage"
            >
              <div
                className="bg-[#c9a84c] relative rounded-[9px] shrink-0 size-[9px]"
                data-node-id="244:348"
                data-name="Milestone"
              />
              <p
                className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[24px] text-white whitespace-nowrap"
                data-node-id="244:349"
              >
                0
              </p>
            </div>
            <div
              className="content-stretch flex flex-col gap-[12px] items-center overflow-clip relative shrink-0 w-[62px]"
              data-node-id="244:350"
              data-name="Evolution stage"
            >
              <div
                className="bg-[#c9a84c] relative rounded-[9px] shrink-0 size-[9px]"
                data-node-id="244:351"
                data-name="Milestone"
              />
              <p
                className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[24px] text-white whitespace-nowrap"
                data-node-id="244:352"
              >
                5
              </p>
            </div>
            <div
              className="content-stretch flex flex-col gap-[12px] items-center overflow-clip relative shrink-0 w-[62px]"
              data-node-id="244:353"
              data-name="Evolution stage"
            >
              <div
                className="bg-[#c9a84c] relative rounded-[9px] shrink-0 size-[9px]"
                data-node-id="244:354"
                data-name="Milestone"
              />
              <p
                className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[24px] text-white whitespace-nowrap"
                data-node-id="244:355"
              >
                10
              </p>
            </div>
            <div
              className="content-stretch flex flex-col gap-[12px] items-center overflow-clip relative shrink-0 w-[62px]"
              data-node-id="244:356"
              data-name="Evolution stage"
            >
              <div
                className="bg-[#c9a84c] relative rounded-[9px] shrink-0 size-[9px]"
                data-node-id="244:357"
                data-name="Milestone"
              />
              <p
                className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[24px] text-white whitespace-nowrap"
                data-node-id="244:358"
              >
                15
              </p>
            </div>
            <div
              className="content-stretch flex flex-col gap-[12px] items-center overflow-clip relative shrink-0 w-[62px]"
              data-node-id="244:359"
              data-name="Evolution stage"
            >
              <div
                className="bg-[#c9a84c] relative rounded-[9px] shrink-0 size-[9px]"
                data-node-id="244:360"
                data-name="Milestone"
              />
              <p
                className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[24px] text-white whitespace-nowrap"
                data-node-id="244:361"
              >
                20
              </p>
            </div>
            <div
              className="content-stretch flex flex-col gap-[12px] items-center overflow-clip relative shrink-0 w-[62px]"
              data-node-id="244:362"
              data-name="Evolution stage"
            >
              <div
                className="bg-[#c9a84c] relative rounded-[9px] shrink-0 size-[9px]"
                data-node-id="244:363"
                data-name="Milestone"
              />
              <p
                className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[24px] text-white whitespace-nowrap"
                data-node-id="244:364"
              >
                25
              </p>
            </div>
            <div
              className="content-stretch flex flex-col gap-[12px] items-center overflow-clip relative shrink-0 w-[62px]"
              data-node-id="244:365"
              data-name="Evolution stage"
            >
              <div
                className="bg-[#c9a84c] relative rounded-[9px] shrink-0 size-[9px]"
                data-node-id="244:366"
                data-name="Milestone"
              />
              <p
                className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[24px] text-white whitespace-nowrap"
                data-node-id="244:367"
              >
                30
              </p>
            </div>
            <div
              className="content-stretch flex flex-col gap-[12px] items-center overflow-clip relative shrink-0 w-[62px]"
              data-node-id="244:368"
              data-name="Evolution stage"
            >
              <div
                className="bg-[#c9a84c] relative rounded-[9px] shrink-0 size-[9px]"
                data-node-id="244:369"
                data-name="Milestone"
              />
              <p
                className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[24px] text-white whitespace-nowrap"
                data-node-id="244:370"
              >
                35
              </p>
            </div>
            <div
              className="content-stretch flex flex-col gap-[12px] items-center overflow-clip relative shrink-0 w-[62px]"
              data-node-id="244:371"
              data-name="Evolution stage"
            >
              <div
                className="bg-[#c9a84c] relative rounded-[9px] shrink-0 size-[9px]"
                data-node-id="244:372"
                data-name="Milestone"
              />
              <p
                className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[24px] text-white whitespace-nowrap"
                data-node-id="244:373"
              >
                40
              </p>
            </div>
            <div
              className="content-stretch flex flex-col gap-[12px] items-center overflow-clip relative shrink-0 w-[62px]"
              data-node-id="244:374"
              data-name="Evolution stage"
            >
              <div
                className="bg-[#c9a84c] relative rounded-[9px] shrink-0 size-[9px]"
                data-node-id="244:375"
                data-name="Milestone"
              />
              <p
                className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[24px] text-white whitespace-nowrap"
                data-node-id="244:376"
              >
                45
              </p>
            </div>
            <div
              className="content-stretch flex flex-col gap-[12px] items-center overflow-clip relative shrink-0 w-[62px]"
              data-node-id="244:377"
              data-name="Evolution stage"
            >
              <div
                className="bg-[#c9a84c] relative rounded-[9px] shrink-0 size-[9px]"
                data-node-id="244:378"
                data-name="Milestone"
              />
              <p
                className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[24px] text-white whitespace-nowrap"
                data-node-id="244:379"
              >
                50
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full"
        data-node-id="244:380"
        data-name="Personal contributions and implementation"
      >
        <div
          className="content-stretch flex flex-col gap-[20px] items-start overflow-clip relative shrink-0 w-full"
          data-node-id="244:381"
          data-name="Section heading"
        >
          <div
            className="bg-[rgba(201,168,76,0.4)] h-px relative shrink-0 w-full"
            data-node-id="244:382"
            data-name="Section divider"
          />
          <div
            className="content-stretch flex gap-[16px] items-center overflow-clip pt-[18px] relative shrink-0 w-full"
            data-node-id="244:383"
            data-name="Chapter"
          >
            <div
              className="bg-[#c9a84c] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[36px] shrink-0 size-[36px]"
              data-node-id="244:384"
              data-name="Chapter marker"
            >
              <p
                className="[word-break:break-word] font-['Gugi:Regular'] leading-[normal] not-italic relative shrink-0 text-[#152741] text-[14px] whitespace-nowrap"
                data-node-id="244:385"
              >
                08
              </p>
            </div>
            <p
              className="[word-break:break-word] flex-[1_0_0] font-['Gugi:Regular'] leading-[normal] min-w-px not-italic relative text-[40px] text-white"
              data-scroll-section="What I Built"
              data-node-id="244:386"
            >
              What I Built
            </p>
          </div>
          <p
            className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[#c9a84c] text-[20px] tracking-[2px] uppercase w-full"
            data-node-id="244:387"
          >
            My contribution within a team of five
          </p>
        </div>
        <p
          className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[1.55] relative shrink-0 text-[#c8d0da] text-[25px] w-full"
          data-node-id="244:388"
        >
          The full product was a team effort. I designed Sprout appearance on
          Procreate and on Figma. After I animated the companion on Rive and
          code the first-open experience, Wardrobe and selected navigation and
          dark-mode flows (not all of the trip, reflection or data features).
        </p>
        <div
          className="[word-break:break-word] content-stretch flex font-['SF_Compact:Regular'] font-[457.8999938964844] gap-[20px] items-start overflow-clip relative shrink-0 w-full"
          data-node-id="244:389"
          data-name="Animation and onboarding contributions"
        >
          <div
            className="bg-[#1c3354] content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip p-[24px] relative rounded-[12px] self-stretch"
            data-node-id="244:390"
            data-name="Narrative card"
          >
            <p
              className="leading-[normal] relative shrink-0 text-[#c9a84c] text-[20px] tracking-[2px] uppercase w-full"
              data-node-id="244:391"
            >
              SpriteKit
            </p>
            <p
              className="leading-[1.3] relative shrink-0 text-[30px] text-white w-full"
              data-node-id="244:392"
            >
              Sprout animation system
            </p>
            <p
              className="leading-[1.55] relative shrink-0 text-[#c8d0da] text-[25px] w-full"
              data-node-id="244:393"
            >
              I built SproutScene and SeedScene, including idle, hungry and
              evolving logic, before the final artwork existed. This let me more
              time to add the finalised visuals later.
            </p>
          </div>
          <div
            className="bg-[#1c3354] content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip p-[24px] relative rounded-[12px] self-stretch"
            data-node-id="244:394"
            data-name="Narrative card"
          >
            <p
              className="leading-[normal] relative shrink-0 text-[#c9a84c] text-[20px] tracking-[2px] uppercase w-full"
              data-node-id="244:395"
            >
              Onboarding
            </p>
            <p
              className="leading-[1.3] relative shrink-0 text-[30px] text-white w-full"
              data-node-id="244:396"
            >
              The first-open experience
            </p>
            <p
              className="leading-[1.55] relative shrink-0 text-[#c8d0da] text-[25px] w-full"
              data-node-id="244:397"
            >
              WelcomeView, SproutNamingView and SproutTransformationView guide
              the first open, naming and initial transformation. Naming can also
              be skipped.
            </p>
          </div>
        </div>
        <div
          className="bg-[#162a42] border border-[rgba(201,168,76,0.6)] border-solid content-stretch flex flex-col h-[826px] items-start justify-between overflow-clip p-[24px] relative rounded-[12px] shrink-0 w-full"
          data-node-id="244:398"
          data-name="Onboarding sequence — Image space"
        >
          <div
            className="content-stretch flex gap-[24px] items-center justify-center overflow-clip relative shrink-0 w-full"
            data-node-id="244:399"
            data-name="Screen gallery row"
          >
            <div
              className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative"
              data-node-id="244:400"
              data-name="Screen image"
            >
              <div
                className="border border-[rgba(201,168,76,0.6)] border-solid content-stretch flex flex-col h-[712px] items-start justify-between p-[24px] relative rounded-[12px] shrink-0 w-full"
                data-node-id="244:401"
                data-name="Trip expectations — Image space"
              >
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none rounded-[12px]"
                >
                  <div className="absolute bg-[#162a42] inset-0 rounded-[12px]" />
                  <img
                    alt=""
                    className="absolute max-w-none object-cover rounded-[12px] size-full"
                    src={imgTripExpectationsImageSpace4}
                  />
                </div>
              </div>
              <p
                className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] h-[39px] leading-[1.55] relative shrink-0 text-[#c8d0da] text-[25px] text-center w-full"
                data-node-id="244:402"
              >
                Sign in
              </p>
            </div>
            <ArrowRight className="relative shrink-0 size-[24px]" />
            <div
              className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative"
              data-node-id="244:404"
              data-name="Screen image"
            >
              <div
                className="border border-[rgba(201,168,76,0.6)] border-solid content-stretch flex flex-col h-[735px] items-start justify-between p-[24px] relative rounded-[12px] shrink-0 w-full"
                data-node-id="244:405"
                data-name="Profile — Image space"
              >
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none rounded-[12px]"
                >
                  <div className="absolute bg-[#162a42] inset-0 rounded-[12px]" />
                  <img
                    alt=""
                    className="absolute max-w-none object-cover rounded-[12px] size-full"
                    src={imgProfileImageSpace1}
                  />
                </div>
              </div>
              <p
                className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] h-[39px] leading-[1.55] relative shrink-0 text-[#c8d0da] text-[25px] text-center w-full"
                data-node-id="244:406"
              >
                Name Sprout
              </p>
            </div>
            <ArrowRight className="relative shrink-0 size-[24px]" />
            <div
              className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative"
              data-node-id="244:408"
              data-name="Screen image"
            >
              <div
                className="border border-[rgba(201,168,76,0.6)] border-solid content-stretch flex flex-col h-[735px] items-start justify-between p-[24px] relative rounded-[12px] shrink-0 w-full"
                data-node-id="244:409"
                data-name="Settings — Image space"
              >
                <img
                  alt=""
                  className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full"
                  src={imgSettingsImageSpace1}
                />
              </div>
              <p
                className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] h-[39px] leading-[1.55] relative shrink-0 text-[#c8d0da] text-[25px] text-center w-full"
                data-node-id="244:410"
              >
                Meet your companion
              </p>
            </div>
          </div>
        </div>
        <div
          className="[word-break:break-word] content-stretch flex font-['SF_Compact:Regular'] font-[457.8999938964844] gap-[20px] items-start overflow-clip relative shrink-0 w-full"
          data-node-id="244:411"
          data-name="Wardrobe and navigation contributions"
        >
          <div
            className="bg-[#1c3354] content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip p-[24px] relative rounded-[12px] self-stretch"
            data-node-id="244:412"
            data-name="Narrative card"
          >
            <p
              className="leading-[normal] relative shrink-0 text-[#c9a84c] text-[20px] tracking-[2px] uppercase w-full"
              data-node-id="244:413"
            >
              Rive preview
            </p>
            <p
              className="leading-[1.3] relative shrink-0 text-[30px] text-white w-full"
              data-node-id="244:414"
            >
              Wardrobe
            </p>
            <p
              className="leading-[1.55] relative shrink-0 text-[#c8d0da] text-[25px] w-full"
              data-node-id="244:415"
            >
              Category selection, an accessory grid, a live animated preview and
              a persisted choice make personalisation part of the companion
              experience.
            </p>
          </div>
          <div
            className="bg-[#1c3354] content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip p-[24px] relative rounded-[12px] self-stretch"
            data-node-id="244:416"
            data-name="Narrative card"
          >
            <p
              className="leading-[normal] relative shrink-0 text-[#c9a84c] text-[20px] tracking-[2px] uppercase w-full"
              data-node-id="244:417"
            >
              iOS adaptation
            </p>
            <p
              className="leading-[1.3] relative shrink-0 text-[30px] text-white w-full"
              data-node-id="244:418"
            >{`Navigation & dark mode`}</p>
            <p
              className="leading-[1.55] relative shrink-0 text-[#c8d0da] text-[25px] w-full"
              data-node-id="244:419"
            >
              I worked on the floating tab bar / action button and dark mode for
              home and onboarding. Navigation was redesigned from the original
              mockup to meet the project’s iOS tab-bar guideline constraint.
            </p>
          </div>
        </div>
        <div
          className="content-stretch flex gap-[32px] items-start overflow-clip relative shrink-0 w-full"
          data-node-id="244:420"
          data-name="Navigation comparisons"
        >
          <div
            className="bg-[#162a42] border border-[rgba(201,168,76,0.6)] border-solid content-stretch flex flex-[1_0_0] gap-[23px] h-[635px] items-start min-w-px overflow-clip p-[24px] relative rounded-[12px]"
            data-node-id="244:421"
            data-name="Home & onboarding — Dark mode — Image space"
          >
            <div
              className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative"
              data-node-id="244:422"
              data-name="Screen image"
            >
              <div
                className="border border-[rgba(201,168,76,0.6)] border-solid content-stretch flex flex-col h-[535px] items-start justify-between p-[24px] relative rounded-[12px] shrink-0 w-full"
                data-node-id="244:423"
                data-name="Settings — Image space"
              >
                <img
                  alt=""
                  className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full"
                  src={imgSettingsImageSpace2}
                />
              </div>
              <p
                className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[1.55] relative shrink-0 text-[#c8d0da] text-[25px] text-center w-full"
                data-node-id="244:424"
              >
                Heart glasses
              </p>
            </div>
            <div
              className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative"
              data-node-id="244:425"
              data-name="Screen image"
            >
              <div
                className="border border-[rgba(201,168,76,0.6)] border-solid content-stretch flex flex-col h-[535px] items-start justify-between p-[24px] relative rounded-[12px] shrink-0 w-full"
                data-node-id="244:426"
                data-name="Settings — Image space"
              >
                <img
                  alt=""
                  className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full"
                  src={imgSettingsImageSpace3}
                />
              </div>
              <p
                className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] h-[39px] leading-[1.55] relative shrink-0 text-[#c8d0da] text-[25px] text-center w-full"
                data-node-id="244:427"
              >
                Round glasses
              </p>
            </div>
          </div>
          <div
            className="bg-[#162a42] border border-[rgba(201,168,76,0.6)] border-solid content-stretch flex flex-[1_0_0] gap-[23px] h-[635px] items-start min-w-px overflow-clip p-[24px] relative rounded-[12px]"
            data-node-id="244:428"
            data-name="Home & onboarding — Dark mode — Image space"
          >
            <div
              className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative"
              data-node-id="244:429"
              data-name="Screen image"
            >
              <div
                className="border border-[rgba(201,168,76,0.6)] border-solid content-stretch flex flex-col h-[535px] items-start justify-between p-[24px] relative rounded-[12px] shrink-0 w-full"
                data-node-id="244:430"
                data-name="Settings — Image space"
              >
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none rounded-[12px]"
                >
                  <img
                    alt=""
                    className="absolute max-w-none object-cover rounded-[12px] size-full"
                    src={imgSettingsImageSpace1}
                  />
                  <img
                    alt=""
                    className="absolute max-w-none object-cover rounded-[12px] size-full"
                    src={imgTripExpectationsImageSpace}
                  />
                </div>
              </div>
              <p
                className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[1.55] relative shrink-0 text-[#c8d0da] text-[25px] text-center w-full"
                data-node-id="244:431"
              >
                Light
              </p>
            </div>
            <div
              className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative"
              data-node-id="244:432"
              data-name="Screen image"
            >
              <div
                className="border border-[rgba(201,168,76,0.6)] border-solid content-stretch flex flex-col h-[535px] items-start justify-between p-[24px] relative rounded-[12px] shrink-0 w-full"
                data-node-id="244:433"
                data-name="Settings — Image space"
              >
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none rounded-[12px]"
                >
                  <img
                    alt=""
                    className="absolute max-w-none object-cover rounded-[12px] size-full"
                    src={imgSettingsImageSpace1}
                  />
                  <img
                    alt=""
                    className="absolute max-w-none object-cover rounded-[12px] size-full"
                    src={imgSettingsImageSpace4}
                  />
                </div>
              </div>
              <p
                className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] h-[39px] leading-[1.55] relative shrink-0 text-[#c8d0da] text-[25px] text-center w-full"
                data-node-id="244:434"
              >
                Dark
              </p>
            </div>
          </div>
        </div>
        <p
          className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[1.3] relative shrink-0 text-[30px] text-white w-full"
          data-node-id="244:435"
        >
          Under the surface
        </p>
        <p
          className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[#c9a84c] text-[20px] tracking-[2px] uppercase w-full"
          data-node-id="244:436"
        >
          Team implementation facts
        </p>
        <div
          className="content-start flex flex-wrap gap-[10px] items-start overflow-clip relative shrink-0 w-full"
          data-node-id="244:437"
          data-name="Tags"
        >
          <div
            className="bg-[#1c3354] border border-[rgba(201,168,76,0.4)] border-solid content-stretch flex items-start overflow-clip px-[16px] py-[8px] relative rounded-[40px] shrink-0"
            data-node-id="244:438"
            data-name="Tag"
          >
            <p
              className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[#c8d0da] text-[20px] whitespace-nowrap"
              data-node-id="244:439"
            >
              SwiftUI · iOS
            </p>
          </div>
          <div
            className="bg-[#1c3354] border border-[rgba(201,168,76,0.4)] border-solid content-stretch flex items-start overflow-clip px-[16px] py-[8px] relative rounded-[40px] shrink-0"
            data-node-id="244:440"
            data-name="Tag"
          >
            <p
              className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[#c8d0da] text-[20px] whitespace-nowrap"
              data-node-id="244:441"
            >
              MVVM + Observation
            </p>
          </div>
          <div
            className="bg-[#1c3354] border border-[rgba(201,168,76,0.4)] border-solid content-stretch flex items-start overflow-clip px-[16px] py-[8px] relative rounded-[40px] shrink-0"
            data-node-id="244:442"
            data-name="Tag"
          >
            <p
              className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[#c8d0da] text-[20px] whitespace-nowrap"
              data-node-id="244:443"
            >
              SwiftData
            </p>
          </div>
          <div
            className="bg-[#1c3354] border border-[rgba(201,168,76,0.4)] border-solid content-stretch flex items-start overflow-clip px-[16px] py-[8px] relative rounded-[40px] shrink-0"
            data-node-id="244:444"
            data-name="Tag"
          >
            <p
              className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[#c8d0da] text-[20px] whitespace-nowrap"
              data-node-id="244:445"
            >
              SpriteKit
            </p>
          </div>
          <div
            className="bg-[#1c3354] border border-[rgba(201,168,76,0.4)] border-solid content-stretch flex items-start overflow-clip px-[16px] py-[8px] relative rounded-[40px] shrink-0"
            data-node-id="244:446"
            data-name="Tag"
          >
            <p
              className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[#c8d0da] text-[20px] whitespace-nowrap"
              data-node-id="244:447"
            >
              Rive
            </p>
          </div>
          <div
            className="bg-[#1c3354] border border-[rgba(201,168,76,0.4)] border-solid content-stretch flex items-start overflow-clip px-[16px] py-[8px] relative rounded-[40px] shrink-0"
            data-node-id="244:448"
            data-name="Tag"
          >
            <p
              className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[#c8d0da] text-[20px] whitespace-nowrap"
              data-node-id="244:449"
            >
              Sign in with Apple
            </p>
          </div>
        </div>
        <div
          className="[word-break:break-word] content-stretch flex font-['SF_Compact:Regular'] font-[457.8999938964844] gap-[32px] items-start overflow-clip relative shrink-0 w-full"
          data-node-id="244:450"
          data-name="Implementation architecture"
        >
          <div
            className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip relative"
            data-node-id="244:451"
            data-name="App architecture"
          >
            <p
              className="leading-[1.3] relative shrink-0 text-[30px] text-white w-full"
              data-node-id="244:452"
            >
              One source of truth
            </p>
            <p
              className="leading-[1.55] relative shrink-0 text-[#c8d0da] text-[25px] w-full"
              data-node-id="244:453"
            >
              SwiftData is the source of truth, with one view model per feature.
              MVVM and Observation organise the SwiftUI implementation.
              SpriteKit drives the Sprout system, while Rive powers the Wardrobe
              preview.
            </p>
          </div>
          <div
            className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip relative"
            data-node-id="244:454"
            data-name="Storage architecture"
          >
            <p
              className="leading-[1.3] relative shrink-0 text-[30px] text-white w-full"
              data-node-id="244:455"
            >
              Local-first by design
            </p>
            <p
              className="leading-[1.55] relative shrink-0 text-[#c8d0da] text-[25px] w-full"
              data-node-id="244:456"
            >
              Storage is local-only and designed for future sync; sync was not
              delivered. Photos and audio are stored separately and referenced
              by path to keep the database light. The core reflection loop works
              offline.
            </p>
          </div>
        </div>
      </div>
      <div
        className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full"
        data-node-id="244:457"
        data-name="Product design system"
      >
        <div
          className="content-stretch flex flex-col gap-[20px] items-start overflow-clip relative shrink-0 w-full"
          data-node-id="244:458"
          data-name="Section heading"
        >
          <div
            className="bg-[rgba(201,168,76,0.4)] h-px relative shrink-0 w-full"
            data-node-id="244:459"
            data-name="Section divider"
          />
          <div
            className="content-stretch flex gap-[16px] items-center overflow-clip pt-[18px] relative shrink-0 w-full"
            data-node-id="244:460"
            data-name="Chapter"
          >
            <div
              className="bg-[#c9a84c] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[36px] shrink-0 size-[36px]"
              data-node-id="244:461"
              data-name="Chapter marker"
            >
              <p
                className="[word-break:break-word] font-['Gugi:Regular'] leading-[normal] not-italic relative shrink-0 text-[#152741] text-[14px] whitespace-nowrap"
                data-node-id="244:462"
              >
                09
              </p>
            </div>
            <p
              className="[word-break:break-word] flex-[1_0_0] font-['Gugi:Regular'] font-normal leading-[normal] min-w-px relative text-[40px] text-white"
              data-scroll-section="Visual Language"
              data-node-id="244:463"
              style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}
            >
              The Product’s Visual Language
            </p>
          </div>
          <p
            className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[#c9a84c] text-[20px] tracking-[2px] uppercase w-full"
            data-node-id="244:464"
          >
            Travel outdoors. Keep the companion alive.
          </p>
        </div>
        <div
          className="relative grid w-full shrink-0 grid-cols-1 items-start gap-[48px] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
          data-node-id="244:465"
          data-name="Design system overview"
        >
          <div
            className="[word-break:break-word] relative flex w-full min-w-0 flex-col items-start gap-[24px] font-['SF_Compact:Regular'] font-[457.8999938964844]"
            data-node-id="244:466"
            data-name="Visual language description"
          >
            <p
              className="leading-[1.3] relative shrink-0 text-[30px] text-white w-full"
              data-node-id="244:467"
            >
              Sky, growth and accessible type
            </p>
            <p
              className="leading-[1.55] relative shrink-0 text-[#c8d0da] text-[25px] w-full"
              data-node-id="244:468"
            >
              A sky gradient sets the travel and outdoors tone. Sprout green is
              the living accent, connecting the interface to the companion.
            </p>
            <p
              className="leading-[1.55] relative shrink-0 text-[#c8d0da] text-[25px] w-full"
              data-node-id="244:469"
            >
              AppFont uses role-based SwiftUI system text styles rather than
              fixed sizing, adapting the typography to accessibility needs.
            </p>
            <p
              className="leading-[1.55] relative shrink-0 text-[#8a9aae] text-[18px] w-full"
              data-node-id="244:470"
            >
              These are MindSprout’s app design principles. The case study
              retains the portfolio’s navy-and-gold presentation. Exact app
              colour codes were not specified in the source.
            </p>
          </div>
          <div
            className="relative flex w-full min-w-0 flex-col items-start justify-between overflow-clip rounded-[12px] border border-solid border-[rgba(201,168,76,0.6)] bg-[#162a42] p-[24px]"
            data-node-id="244:471"
            data-name="MindSprout palette & components — Image space"
          >
            <div
              className="relative grid w-full shrink-0 grid-cols-2 items-start gap-[20px]"
              data-node-id="244:472"
              data-name="Light/Dark row"
            >
              <div
                className="relative flex w-full min-w-0 flex-col items-center gap-[12px] overflow-clip"
                data-node-id="244:473"
                data-name="LIGHT column"
              >
                <div
                  className="bg-[#1c3354] border border-[rgba(201,168,76,0.4)] border-solid content-stretch flex items-center overflow-clip px-[14px] py-[6px] relative rounded-[40px] shrink-0"
                  data-node-id="244:474"
                  data-name="Mode tag"
                >
                  <p
                    className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[#c8d0da] text-[13px] tracking-[1.04px] whitespace-nowrap"
                    data-node-id="244:475"
                  >
                    LIGHT
                  </p>
                </div>
                <div
                  className="relative aspect-[266/514] h-auto w-full shrink-0 rounded-[8px]"
                  data-node-id="244:476"
                  data-name="LIGHT screenshot"
                >
                  <img
                    alt=""
                    className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full"
                    src={imgLightScreenshot}
                  />
                </div>
              </div>
              <div
                className="relative flex w-full min-w-0 flex-col items-center gap-[12px] overflow-clip"
                data-node-id="244:477"
                data-name="DARK column"
              >
                <div
                  className="bg-[#1c3354] border border-[rgba(201,168,76,0.4)] border-solid content-stretch flex items-center overflow-clip px-[14px] py-[6px] relative rounded-[40px] shrink-0"
                  data-node-id="244:478"
                  data-name="Mode tag"
                >
                  <p
                    className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[#c8d0da] text-[13px] tracking-[1.04px] whitespace-nowrap"
                    data-node-id="244:479"
                  >
                    DARK
                  </p>
                </div>
                <div
                  className="relative aspect-[266/514] h-auto w-full shrink-0 rounded-[8px]"
                  data-node-id="244:480"
                  data-name="DARK screenshot"
                >
                  <img
                    alt=""
                    className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full"
                    src={imgDarkScreenshot}
                  />
                </div>
              </div>
            </div>
            <div
              className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full"
              data-node-id="244:481"
              data-name="Image description"
            >
              <p
                className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[20px] text-center text-white w-full"
                data-node-id="244:482"
              >{`MindSprout palette & components`}</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full"
        data-node-id="244:483"
        data-name="Learnings and closing"
      >
        <div
          className="content-stretch flex flex-col gap-[20px] items-start overflow-clip relative shrink-0 w-full"
          data-node-id="244:484"
          data-name="Section heading"
        >
          <div
            className="bg-[rgba(201,168,76,0.4)] h-px relative shrink-0 w-full"
            data-node-id="244:485"
            data-name="Section divider"
          />
          <div
            className="content-stretch flex gap-[16px] items-center overflow-clip pt-[18px] relative shrink-0 w-full"
            data-node-id="244:486"
            data-name="Chapter"
          >
            <div
              className="bg-[#c9a84c] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[36px] shrink-0 size-[36px]"
              data-node-id="244:487"
              data-name="Chapter marker"
            >
              <p
                className="[word-break:break-word] font-['Gugi:Regular'] leading-[normal] not-italic relative shrink-0 text-[#152741] text-[14px] whitespace-nowrap"
                data-node-id="244:488"
              >
                10
              </p>
            </div>
            <p
              className="[word-break:break-word] flex-[1_0_0] font-['Gugi:Regular'] leading-[normal] min-w-px not-italic relative text-[40px] text-white"
              data-scroll-section="Learnings"
              data-node-id="244:489"
            >
              Personal Learnings
            </p>
          </div>
          <p
            className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[#c9a84c] text-[20px] tracking-[2px] uppercase w-full"
            data-node-id="244:490"
          >
            Space for reflection, not assumed conclusions
          </p>
        </div>
        <div
          className="bg-[#1c3354] border border-[rgba(201,168,76,0.4)] border-solid content-stretch flex flex-col gap-[20px] items-start overflow-clip p-[32px] relative rounded-[12px] shrink-0 w-full"
          data-node-id="244:491"
          data-name="Personal learnings — To be completed"
        >
          <p
            className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[#c9a84c] text-[20px] tracking-[2px] uppercase w-full"
            data-node-id="244:492"
          >
            Personal Learnings
          </p>
          <p
            className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[1.55] relative shrink-0 text-[#c8d0da] text-[25px] w-full"
            data-node-id="244:493"
          >
            Three takeaways from building MindSprout in four weeks with a
            five-person team.
          </p>
          <div
            className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-full"
            data-node-id="244:494"
            data-name="Reflection prompts"
          >
            <div
              className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px overflow-clip relative"
              data-node-id="244:495"
              data-name="Learning prompt"
            >
              <p
                className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[#c9a84c] text-[16px] tracking-[1px] whitespace-nowrap"
                data-node-id="244:496"
              >
                REFLECTION PROMPT
              </p>
              <p
                className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[1.4] min-w-full relative shrink-0 text-[#c8d0da] text-[23px] w-[min-content]"
                data-node-id="244:497"
              >
                Working as a team of five
              </p>
              <div
                className="bg-[rgba(201,168,76,0.4)] h-px relative shrink-0 w-full"
                data-node-id="244:498"
                data-name="Editable writing line"
              />
              <p
                className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] min-w-full relative shrink-0 text-[#99a6b8] text-[17px] w-[min-content]"
                data-node-id="244:499"
              >
                Splitting ownership by feature — not just by discipline — let me
                own the Sprout system end-to-end while the rest of the team
                moved just as fast on trips, reflections and data. When testers
                at Techfest found bugs, a teammate fixed them the same day.
              </p>
            </div>
            <div
              className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px overflow-clip relative"
              data-node-id="244:500"
              data-name="Learning prompt"
            >
              <p
                className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[#c9a84c] text-[16px] tracking-[1px] whitespace-nowrap"
                data-node-id="244:501"
              >
                REFLECTION PROMPT
              </p>
              <p
                className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[1.4] min-w-full relative shrink-0 text-[#c8d0da] text-[23px] w-[min-content]"
                data-node-id="244:502"
              >
                Building within four weeks
              </p>
              <div
                className="bg-[rgba(201,168,76,0.4)] h-px relative shrink-0 w-full"
                data-node-id="244:503"
                data-name="Editable writing line"
              />
              <p
                className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] min-w-full relative shrink-0 text-[#99a6b8] text-[17px] w-[min-content]"
                data-node-id="244:504"
              >
                The four-week limit forced real scope cuts — the social feed and
                a complex points system went first, so the core reflection loop
                could actually ship and feel finished.
              </p>
            </div>
            <div
              className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px overflow-clip relative"
              data-node-id="244:505"
              data-name="Learning prompt"
            >
              <p
                className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[#c9a84c] text-[16px] tracking-[1px] whitespace-nowrap"
                data-node-id="244:506"
              >
                REFLECTION PROMPT
              </p>
              <p
                className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[1.4] min-w-full relative shrink-0 text-[#c8d0da] text-[23px] w-[min-content]"
                data-node-id="244:507"
              >
                Animating before final art
              </p>
              <div
                className="bg-[rgba(201,168,76,0.4)] h-px relative shrink-0 w-full"
                data-node-id="244:508"
                data-name="Editable writing line"
              />
              <p
                className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] min-w-full relative shrink-0 text-[#99a6b8] text-[17px] w-[min-content]"
                data-node-id="244:509"
              >{`Building SproutScene's idle, hungry and evolving states before the final artwork existed meant the code never depended on a specific asset — when the illustrator's visuals arrived, I only had to swap them in.`}</p>
            </div>
          </div>
        </div>
        <div
          className="[word-break:break-word] bg-[#1c3354] content-stretch flex flex-col gap-[20px] items-start overflow-clip p-[40px] relative rounded-[12px] shrink-0 w-full"
          data-node-id="244:510"
          data-name="Guiding principle"
        >
          <p
            className="font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[#c9a84c] text-[20px] tracking-[2px] uppercase w-full"
            data-node-id="244:511"
          >
            The guiding principle
          </p>
          <p
            className="font-['Gugi:Regular'] leading-[1.3] not-italic relative shrink-0 text-[38px] text-white w-full"
            data-node-id="244:512"
          >
            Minimum friction, meaningful reflection.
          </p>
          <p
            className="font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[1.55] relative shrink-0 text-[#c8d0da] text-[25px] w-full"
            data-node-id="244:513"
          >
            A private moment from a journey becomes something to return to: a
            reflection, a memory, and a companion that keeps growing.
          </p>
        </div>
        <div
          className="bg-[#c9a84c] h-px opacity-40 relative shrink-0 w-[1158px]"
          data-node-id="244:514"
          data-name="Rectangle"
        />
        <div
          className="content-stretch flex gap-[398px] items-start relative shrink-0"
          data-node-id="244:515"
        >
          <div
            className="content-stretch flex flex-col gap-[19px] items-start justify-center relative shrink-0"
            data-node-id="244:516"
          >
            <div
              className="content-stretch flex gap-[10px] items-center relative shrink-0 w-[400px]"
              data-node-id="244:517"
              data-name="Frame"
            >
              <div
                className="relative shrink-0 size-[18px]"
                data-node-id="244:518"
                data-name="figma"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgFigma}
                />
              </div>
              <a
                className="[word-break:break-word] block font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[0] relative shrink-0 text-[#c9a84c] text-[17px] whitespace-nowrap"
                href="https://www.figma.com/design/JSOMt4t9wDq0oBv7McMSMU/mindsprout?node-id=0-1&t=LUXkJJRGsP34sJeQ-1"
                data-node-id="244:520"
                target="_blank"
              >
                <p className="[text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[normal] underline">
                  Figma Design
                </p>
              </a>
            </div>
            <div
              className="content-stretch flex gap-[10px] items-center relative shrink-0 w-[400px]"
              data-node-id="244:521"
              data-name="Frame"
            >
              <div
                className="relative shrink-0 size-[18px]"
                data-node-id="244:522"
                data-name="globe"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgGlobe}
                />
              </div>
              <a
                className="[word-break:break-word] font-['SF_Compact:Regular'] font-[457.8999938964844] leading-[normal] relative shrink-0 text-[#c9a84c] text-[17px] whitespace-nowrap underline"
                href="https://github.com/AlaeaRosen"
                target="_blank"
                rel="noreferrer"
                data-node-id="244:524"
              >
                GitHub
              </a>
            </div>
          </div>
          <button
            type="button"
            onClick={onNext}
            className="bg-[#c9a84c] content-stretch flex cursor-pointer items-center justify-center px-[28px] py-[14px] relative rounded-[6px] shrink-0 w-full max-w-[358px] transition-[background,box-shadow] hover:bg-gold-soft hover:shadow-[0_0_20px_rgba(219,194,140,0.5)]"
            data-node-id="244:525"
            data-name="Frame"
          >
            <p
              className="[word-break:break-word] font-['Gugi:Regular'] font-normal leading-[normal] relative shrink-0 text-[#152741] text-[14px] tracking-[1px] whitespace-nowrap"
              data-node-id="244:526"
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
