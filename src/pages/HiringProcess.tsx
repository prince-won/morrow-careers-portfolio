import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { FAQAccordion } from "../components/careers/FAQAccordion";
import { candidatePromises, hiringJourney } from "../data/hiringProcess";
import { hiringStepLabels } from "../data/labels";

export function HiringProcess() {
  return (
    <div className="process-page">
      <header className="process-hero">
        <div>
          <p className="eyebrow">지원자 화면 / 채용 과정</p>
          <h1>What to expect</h1>
          <p>지원부터 입사까지 Morrow의 채용 과정을 안내합니다.</p>
        </div>
        <div className="process-hero-note">
          <span>명확한 채용 여정</span>
          <p>각 단계의 목적과 다음 안내를 미리 확인할 수 있습니다.</p>
        </div>
      </header>

      <section className="journey-section" aria-labelledby="journey-title">
        <div className="process-section-heading">
          <div>
            <p className="eyebrow">지원자 여정</p>
            <h2 id="journey-title">A process you can<br />plan around.</h2>
          </div>
          <p>지원 후 어떤 일이 일어나는지,<br />각 단계에서 무엇을 이야기하는지 투명하게 안내합니다.</p>
        </div>

        <ol className="journey-list">
          {hiringJourney.map((step, index) => (
            <li className="journey-step" key={step.number}>
              <div className="journey-step-marker">
                <span>{step.number}</span>
                {index < hiringJourney.length - 1 && <span className="journey-line" aria-hidden="true" />}
              </div>
              <div className="journey-step-copy">
                <div className="journey-step-heading">
                  <h3>{hiringStepLabels[step.title] ?? step.title}</h3>
                  {step.duration && <span>{step.duration}</span>}
                </div>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="promise-section" aria-labelledby="promise-title">
        <div className="process-section-heading promise-heading">
          <div>
            <p className="eyebrow">지원자에게 드리는 약속</p>
            <h2 id="promise-title">Clarity is part<br />of the experience.</h2>
          </div>
          <p>채용 과정에서 지원자가 느끼는 불확실성을 줄이는 것을 중요한 운영 원칙으로 삼습니다.</p>
        </div>
        <div className="promise-grid">
          {candidatePromises.map((promise) => (
            <article className="promise-card" key={promise.number}>
              <div className="promise-number"><Check size={14} strokeWidth={2.2} aria-hidden="true" />{promise.number}</div>
              <h3>{promise.title}</h3>
              <p>{promise.description}</p>
            </article>
          ))}
        </div>
      </section>

      <FAQAccordion />

      <section className="process-next-step">
        <div>
          <p className="eyebrow">다음 단계를 시작할 준비가 되었다면</p>
          <h2>See the roles we are hiring for.</h2>
        </div>
        <Link className="outline-button" to="/jobs">열린 포지션 살펴보기 <ArrowRight size={17} aria-hidden="true" /></Link>
      </section>
    </div>
  );
}
