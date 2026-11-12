import { useState } from "react";
import { Link } from "react-router-dom";
import "./Support.css";

const faqs = [
  {
    question: "작성한 일기는 어디에 저장되나요?",
    answer:
      "작성한 일기는 사용 중인 기기에 저장돼요. 맬맬은 회원가입이나 로그인을 요구하지 않으며, 개발자는 사용자의 일기 내용을 확인할 수 없어요.",
  },
  {
    question: "꼭 매일 세 문장을 써야 하나요?",
    answer:
      "아니요. 한 문장만 남겨도 괜찮고, 매일 쓰지 않아도 돼요. 무엇을 쓸지 막막하다면 앱에서 제공하는 1,500개의 랜덤 질문을 활용해 보세요.",
  },
  {
    question: "조약돌과 정원은 어떻게 만들어지나요?",
    answer:
      "그날의 일기를 작성하면 하루를 나타내는 조약돌이 생겨요. 모인 조약돌은 월별 정원과 돌탑에서 볼 수 있어요. 사진 조약돌은 해당 날짜에만 설정하거나 변경할 수 있어요.",
  },
  {
    question: "지난 기록은 어디서 볼 수 있나요?",
    answer:
      "지난 기록 화면에서 날짜별 일기를 읽을 수 있어요. 맬맬은 작성한 일기를 수정하는 기능은 제공하지 않으며, 필요한 경우 개별 기록을 삭제할 수 있어요.",
  },
  {
    question: "일기를 TXT나 PDF로 저장할 수 있나요?",
    answer:
      "네. 설정의 ‘기록 관리’에서 TXT 또는 PDF로 내보낼 수 있어요. Android에서는 TXT·PDF의 기기 저장 또는 공유 방식을 선택할 수 있고, iOS에서는 파일 공유 메뉴에서 저장하거나 다른 앱으로 보낼 수 있어요.",
  },
  {
    question: "조약돌과 사진까지 백업하거나 복원할 수 있나요?",
    answer:
      "네. ‘기록 관리 → 전체 기록 백업하기’에서 일기·조약돌·사진·월별 정원과 돌탑을 ZIP 파일로 보관할 수 있어요. ‘백업 파일에서 복원하기’는 기존 기록을 지우지 않고 없는 날짜의 기록을 추가하는 방식이에요. 이전 JSON 백업 파일도 복원할 수 있어요. 백업 파일은 암호화되지 않으니 안전한 곳에 보관해 주세요.",
  },
  {
    question: "PIN 잠금은 필수인가요?",
    answer:
      "아니요. 앱 PIN 잠금은 선택 기능이며 기본적으로 꺼져 있어요. 필요한 경우 설정에서 활성화할 수 있어요.",
  },
  {
    question: "알림이 오지 않아요.",
    answer:
      "휴대전화 설정에서 맬맬의 알림 권한이 허용돼 있는지 확인해 주세요. 앱에서 기록 알림이 활성화돼 있는지도 확인하면 좋아요.",
  },
  {
    question: "위젯에 기록이 표시되지 않아요.",
    answer:
      "앱의 위젯 설정을 확인하고 기기에서 지원하는 위젯을 추가해 주세요. 위젯에 표시된 개인적인 문장이나 조약돌은 다른 사람에게 보일 수 있으니 주의해 주세요.",
  },
  {
    question: "앱을 삭제하면 기록도 사라지나요?",
    answer:
      "앱을 삭제하면 기기 안의 일기와 사진 데이터가 함께 삭제될 수 있어요. 삭제 전에 ‘전체 기록 백업하기’로 ZIP 파일을 만들어 앱 외부의 안전한 곳에 보관하는 것을 권장해요. TXT·PDF 내보내기는 읽기용이며 전체 복원을 위한 백업과는 달라요.",
  },
  {
    question: "광고가 표시되나요?",
    answer:
      "현재 맬맬에는 광고 및 사용자 추적 기능이 적용되어 있지 않아요. 변경될 경우 관련 안내와 개인정보처리방침을 업데이트할 예정이에요.",
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
