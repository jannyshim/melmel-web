import { Link } from "react-router-dom";
import "./PrivacyPolicy.css";

const policySections = [
  {
    title: "1. 수집하는 개인정보",
    body: "맬맬은 회원가입과 로그인을 제공하지 않으며, 사용자의 일기 내용, 이름, 이메일 주소, 위치정보, 연락처, 광고 식별자를 개발자 서버로 수집하거나 전송하지 않습니다.",
  },
  {
    title: "2. 일기 데이터의 저장",
    body: "사용자가 작성한 일기는 사용 중인 기기의 로컬 SQLite 데이터베이스에 저장됩니다. 개발자는 사용자의 일기 내용을 열람하거나 복구할 수 없습니다.",
  },
  {
    title: "3. 앱 설정",
    body: "선택한 글꼴, 알림 시간, 위젯 표시 방식 등의 설정은 해당 기기 안에 저장됩니다.",
  },
  {
    title: "4. 알림 권한",
    body: "매일 기록 알림을 켠 경우 앱은 iOS 알림 권한을 사용합니다. 알림은 서버가 아니라 기기에서 로컬로 예약됩니다. 알림 권한은 iPhone 설정에서 언제든 변경할 수 있습니다.",
  },
  {
    title: "5. 위젯",
    body: "사용자가 직접 선택한 경우에만 일기 문장이 홈 화면 또는 잠금 화면 위젯에 표시됩니다. 위젯에 표시된 문장은 잠금 해제 전에도 보일 수 있으므로 민감한 기록은 표시하지 않는 것을 권장합니다.",
  },
  {
    title: "6. 기록 내보내기",
    body: "사용자는 자신의 기록을 TXT, JSON 또는 PDF 파일로 내보낼 수 있습니다. 파일을 공유하거나 다른 위치에 저장한 이후에는 사용자가 선택한 저장소 또는 외부 앱의 개인정보처리방침이 적용될 수 있습니다.",
  },
  {
    title: "7. 보관 및 삭제",
    body: "일기 데이터는 사용자가 직접 삭제할 때까지 해당 기기에 보관됩니다. 설정의 ‘모든 기록 삭제’를 사용하면 저장된 모든 일기가 기기에서 삭제되며, 삭제된 기록은 복구할 수 없습니다.",
  },
  {
    title: "8. 제3자 제공 및 광고",
    body: "현재 맬맬은 사용자의 일기 내용을 제3자에게 판매하거나 제공하지 않으며, 광고 및 사용자 추적 기능을 사용하지 않습니다.",
  },
  {
    title: "9. 개인정보처리방침 변경",
    body: "앱의 데이터 처리 방식이 변경되는 경우 이 방침과 App Store의 개인정보 정보를 함께 업데이트합니다.",
  },
  {
    title: "10. 문의",
    body: "개인정보 또는 앱 데이터 처리와 관련된 문의는 아래 이메일로 연락해 주세요.",
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="privacy-page">
      <header className="privacy-header">
        <Link to="/" className="privacy-brand">
          <img src="/melmel-icon.png" alt="" />
          <span>melmel</span>
        </Link>
        <Link to="/" className="privacy-back">
          ← 홈으로
        </Link>
      </header>

      <main className="privacy-main">
        <div className="privacy-heading">
          <span className="privacy-eyebrow">PRIVACY & YOUR LITTLE MOMENTS</span>
          <h1>개인정보처리방침</h1>
          <p>
            당신의 소중한 기록이
            <br />
            안전하게 머무를 수 있도록.
          </p>
          <span className="privacy-date">최초 시행일: 2026년 7월 18일</span>
        </div>

        <div className="privacy-intro">
          맬맬은 하루하루의 기록이 소중한 개인의 이야기라는 점을 중요하게
          생각합니다.
          <br />
          아래에서 앱의 데이터 처리 방식을 안내합니다.
        </div>

        <div className="privacy-sections">
          {policySections.map((section) => (
            <section className="privacy-section" key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
              {section.title === "10. 문의" && (
                <a
                  href="mailto:teams.melmel@gmail.com"
                  className="privacy-email"
                >
                  teams.melmel@gmail.com
                </a>
              )}
            </section>
          ))}
        </div>

        <div className="privacy-bottom">
          <img src="/melmel-pebbles.png" alt="" />
          <p>매일매일, 나를 쌓아가는 시간.</p>
          <Link to="/">맬맬 홈으로 돌아가기 ↗</Link>
        </div>
      </main>

      <footer className="privacy-footer">
        © {new Date().getFullYear()} melmel. All rights reserved.
      </footer>
    </div>
  );
}
