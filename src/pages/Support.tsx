import { useState } from "react";
import { Link } from "react-router-dom";
import "./Support.css";

const faqs = [
  {
    question: "작성한 일기는 어디에 저장되나요?",
    answer:
      "작성한 일기는 사용 중인 기기의 로컬 데이터베이스에 저장됩니다. 맬맬은 회원가입이나 로그인을 요구하지 않으며, 개발자는 사용자의 일기 내용을 확인할 수 없습니다.",
  },
  {
    question: "하루에 몇 문장까지 작성할 수 있나요?",
    answer:
      "맬맬은 하루의 이야기를 짧은 문장으로 남기는 일기 앱이에요. 자유롭게 기록하거나 제공되는 질문을 활용해 하루를 돌아볼 수 있습니다.",
  },
  {
    question: "지난 기록은 어디서 볼 수 있나요?",
    answer:
      "앱의 지난 기록 화면에서 날짜별로 작성한 일기를 확인할 수 있어요. 이전에 작성한 내용을 다시 읽고 수정할 수도 있습니다.",
  },
  {
    question: "일기를 파일로 저장할 수 있나요?",
    answer:
      "네. 앱 설정의 기록 내보내기에서 TXT, JSON, PDF 형식으로 내보낼 수 있어요. JSON 백업 파일을 앱으로 다시 불러오는 기능은 현재 제공되지 않으니 참고해 주세요.",
  },
  {
    question: "알림이 오지 않아요.",
    answer:
      "iPhone 설정에서 맬맬의 알림 권한이 허용되어 있는지 확인해 주세요. 앱에서 매일 기록 알림이 활성화되어 있는지도 함께 확인하면 좋아요.",
  },
  {
    question: "위젯에 일기가 표시되지 않아요.",
    answer:
      "앱의 위젯 설정을 확인하고, 홈 화면 또는 잠금 화면에 맬맬 위젯을 추가해 주세요. 위젯에는 개인적인 기록이 표시될 수 있으므로 다른 사람이 볼 가능성도 고려해 주세요.",
  },
  {
    question: "앱을 삭제하면 기록도 사라지나요?",
    answer:
      "앱 삭제 시 기기에 저장된 일기 데이터도 함께 삭제될 수 있어요. 기록을 보관하려면 앱을 삭제하기 전에 TXT, JSON 또는 PDF 파일로 내보내 안전한 위치에 저장해 주세요. 현재 앱에는 내보낸 기록을 다시 가져오는 기능이 없습니다.",
  },
  {
    question: "광고가 표시되나요?",
    answer:
      "현재 맬맬에는 광고가 적용되어 있지 않습니다. 향후 광고 기능이 추가될 경우 관련 안내와 개인정보처리방침을 업데이트할 예정입니다.",
  },
];

export default function Support() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="support-page">
      <header className="support-header">
        <Link to="/" className="support-brand" aria-label="맬맬 홈">
          <img src="/melmel-icon.png" alt="" />
          <span>melmel</span>
        </Link>
        <Link to="/" className="support-back">
          ← 홈으로
        </Link>
      </header>

      <main className="support-main">
        <section className="support-hero">
          <img
            src="/melmel-pebbles.png"
            alt="맬맬 조약돌 캐릭터"
            className="support-character"
          />

          <span className="support-eyebrow">WE ARE HERE FOR YOU</span>

          <h1>무엇을 도와드릴까요?</h1>

          <p>
            맬맬을 사용하며 궁금한 점이 생겼나요?
            <br />
            아래에서 필요한 정보를 찾아보세요.
          </p>
        </section>

        <section className="support-faq" aria-labelledby="support-faq-title">
          <div className="support-section-heading">
            <span className="support-eyebrow">HELP CENTER</span>
            <h2 id="support-faq-title">자주 묻는 질문</h2>
            <p>질문을 누르면 답변을 확인할 수 있어요.</p>
          </div>

          <div className="support-faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div className="support-faq-item" key={faq.question}>
                  <h3>
                    <button
                      type="button"
                      className="support-faq-button"
                      aria-expanded={isOpen}
                      aria-controls={`support-answer-${index}`}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                    >
                      <span className="support-question">
                        <span className="support-q">Q.</span>
                        {faq.question}
                      </span>
                      <span
                        className={`support-faq-arrow ${isOpen ? "is-open" : ""}`}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </button>
                  </h3>

                  {isOpen && (
                    <div
                      id={`support-answer-${index}`}
                      className="support-faq-answer"
                    >
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <section className="support-contact">
          <span className="support-eyebrow">CONTACT MELMEL</span>
          <h2>아직 궁금한 점이 있나요?</h2>
          <p>
            도움이 더 필요하다면 이메일을 보내주세요.
            <br />
            맬맬에 관한 의견도 언제든 환영해요.
          </p>

          <a
            className="support-email-button"
            href="mailto:teams.melmel@gmail.com?subject=%5B%EB%A7%AC%EB%A7%AC%5D%20%EB%AC%B8%EC%9D%98"
          >
            이메일로 문의하기 ↗
          </a>

          <a
            className="support-email-address"
            href="mailto:teams.melmel@gmail.com"
          >
            teams.melmel@gmail.com
          </a>

          <p className="support-privacy-note">
            개인정보 보호를 위해 문의 시 일기 원문이나 민감한 개인정보는 보내지
            않는 것을 권장해요.
          </p>
        </section>

        <div className="support-bottom-links">
          <Link to="/privacy">개인정보처리방침 보기</Link>
          <Link to="/">맬맬 홈으로 돌아가기 ↗</Link>
        </div>
      </main>

      <footer className="support-footer">
        © {new Date().getFullYear()} melmel. All rights reserved.
      </footer>
    </div>
  );
}
