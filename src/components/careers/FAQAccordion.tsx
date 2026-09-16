import { ChevronDown } from "lucide-react";
import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  {
    question: "여러 포지션에 동시에 지원할 수 있나요?",
    answer: "네. 관심 있는 포지션이 여러 개라면 동시에 지원할 수 있습니다. 각 포지션의 역할과 요구 역량을 기준으로 개별적으로 검토합니다.",
  },
  {
    question: "서류 및 면접 결과는 언제 안내되나요?",
    answer: "서류 검토 결과는 최대 3영업일 이내 안내하는 것을 원칙으로 합니다. 면접 결과 역시 면접 시 안내한 예정일 내에 전달합니다.",
  },
  {
    question: "면접은 어떤 방식으로 진행되나요?",
    answer: "포지션과 상황에 따라 온라인 또는 오프라인으로 진행할 수 있습니다. 면접 방식, 예상 소요 시간, 참석자는 일정 확정 시 미리 안내합니다.",
  },
  {
    question: "면접 전에 준비해야 할 것이 있나요?",
    answer: "별도의 정답을 준비할 필요는 없습니다. 지원한 포지션과 관련해 본인이 해결했던 문제, 판단 과정, 협업 방식 등을 구체적인 사례와 함께 설명할 수 있도록 준비해주시면 좋습니다.",
  },
  {
    question: "이전에 지원한 적이 있어도 다시 지원할 수 있나요?",
    answer: "네. 이전 지원 여부와 관계없이 다시 지원할 수 있습니다. 이전 지원 이후 새롭게 쌓은 경험이나 달라진 역량이 있다면 함께 확인합니다.",
  },
  {
    question: "지원 후 다른 포지션을 제안받을 수도 있나요?",
    answer: "지원한 포지션보다 다른 역할과 경험이 더 잘 맞는다고 판단되는 경우, 지원자에게 먼저 의사를 확인한 뒤 다른 포지션을 제안할 수 있습니다.",
  },
];

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="faq-section" aria-labelledby="faq-title">
      <div className="process-section-heading faq-heading">
        <div>
          <p className="eyebrow">자주 묻는 질문</p>
          <h2 id="faq-title">지원 전에 궁금할 수 있는 내용을 정리했습니다.</h2>
        </div>
      </div>

      <div className="faq-list">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;
          const answerId = `faq-answer-${index + 1}`;
          const questionId = `faq-question-${index + 1}`;

          return (
            <article className={`faq-item${isOpen ? " is-open" : ""}`} key={item.question}>
              <h3>
                <button
                  aria-controls={answerId}
                  aria-expanded={isOpen}
                  className="faq-question"
                  id={questionId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  type="button"
                >
                  <span>{item.question}</span>
                  <ChevronDown className="faq-icon" size={20} strokeWidth={1.7} aria-hidden="true" />
                </button>
              </h3>
              <div
                aria-labelledby={questionId}
                className="faq-answer"
                hidden={!isOpen}
                id={answerId}
                role="region"
              >
                <p>{item.answer}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
