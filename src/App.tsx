import "./App.css";
import { Link } from "react-router-dom";

const IOS_APP_STORE_URL = "https://apps.apple.com/kr/app/%EB%A7%AC%EB%A7%AC/id6826580630";

const features = [
  {
    number: "01",
    icon: "✏️",
    title: "한 문장부터 시작하는 일기",
    description:
      "세 문장으로 하루를 기록해요. 무슨 말을 써야 할지 막막한 날엔 1,500개의 랜덤 질문이 시작을 도와줘요.",
  },
  {
    number: "02",
    icon: "🪨",
    title: "하루가 조약돌 하나로",
    description:
      "기록한 하루는 저마다 다른 조약돌로 남아요. 그날의 사진을 작은 조약돌에 담을 수도 있어요.",
  },
  {
    number: "03",
    icon: "🌿",
    title: "차곡차곡 모이는 나의 정원",
    description:
      "조약돌이 모이면 한 달의 정원과 돌탑이 돼요. 날짜별 일기와 지난달의 작은 기억을 다시 둘러보세요.",
  },
  {
    number: "04",
    icon: "🔒",
    title: "오롯이 나만의 기록",
    description:
      "계정 없이 기기에 기록을 보관하고, 필요할 때 선택적으로 PIN 잠금을 설정할 수 있어요.",
  },
  {
    number: "05",
    icon: "📦",
    title: "기록을 오래 간직하도록",
    description:
      "일기는 TXT·PDF로 내보내고, 일기·조약돌·사진·월별 보관 이미지는 ZIP 파일로 백업하고 복원할 수 있어요.",
  },
  {
    number: "06",
    icon: "🔔",
    title: "일상 속에서 다시 만나요",
    description:
      "원하는 때에 기록 알림을 받고, 위젯으로 어제의 기록이나 선택한 문장, 조약돌을 가까이에서 만나보세요.",
  },
];

function App() {
  return (
    <div className="site">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="맬맬 홈">
          <img src="/melmel-icon.png" alt="" className="brand-icon" />
          <span>melmel</span>
        </a>

        <nav className="navigation" aria-label="주요 메뉴">
          <a href="#about">맬맬 소개</a>
          <a href="#features">주요 기능</a>
          <Link to="/support">문의하기</Link>
        </nav>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot" />A LITTLE DIARY FOR EVERY DAY
            </div>

            <h1>
              매일매일,
              <br />
              <span>나를 쌓아가는 시간.</span>
            </h1>

            <p className="hero-description">
              세 문장을 꼭 채우지 않아도 괜찮아요.
              <br />
              오늘의 생각과 감정을 한 문장부터 가볍게.
              <br />
              그 하루가 작은 조약돌이 되는 일기, 맬맬.
            </p>

            <div className="hero-actions">
              <a
                className="primary-button"
                href={IOS_APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="맬맬 App Store에서 다운로드하기 (새 창)"
              >
                iPhone 앱 다운로드 <span aria-hidden="true">↗</span>
              </a>
              <span className="availability-label">iOS App Store 출시 · Android 비공개 테스트 중</span>
            </div>
          </div>

          <div className="hero-art">
            <div className="hero-art-glow" />
            <img
              src="/melmel-pebbles.png"
              alt="세 개의 조약돌이 쌓여 있는 맬맬 캐릭터"
              className="hero-icon"
            />
            <div className="floating-note note-one">
              오늘도 수고했어 <span>♡</span>
            </div>
            <div className="floating-note note-two">little by little ✿</div>
          </div>
        </section>

        <section className="about-section" id="about">
          <span className="section-label">WHY MELMEL</span>
          <h2>
            매일 쓰지 않아도,
            <br />
            길게 쓰지 않아도 괜찮아요.
          </h2>
          <p>
            기록이 숙제처럼 느껴지지 않았으면 했어요.
            <br />
            특별한 일이 없어도 마음에 남은 한 문장이면 충분하니까요.
            <br />
            맬맬은 잘 쓴 글보다 나다운 하루를 오래 간직하기 위해 만들었어요.
          </p>
          <div className="pebble-decoration" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </section>

        <section className="features-section" id="features">
          <div className="section-heading">
            <div>
              <span className="section-label">SMALL MOMENTS, BIG MEMORIES</span>
              <h2>가볍게 쓰고, 차곡차곡 모아요</h2>
            </div>
            <p>오늘의 기록부터 오래 간직할 백업까지.</p>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.number}>
                <div className="feature-card-top">
                  <span className="feature-icon" aria-hidden="true">
                    {feature.icon}
                  </span>
                  <span className="feature-number">{feature.number}</span>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
          <p className="feature-note">
            사진 조약돌은 해당 날짜에 설정하거나 변경할 수 있어요. ZIP 백업 파일은 암호화되지 않으므로 안전한 곳에 보관해 주세요.
          </p>
        </section>

        <section className="promise-section" aria-labelledby="promise-heading">
          <div className="promise-inner">
            <span className="section-label">A SPACE OF YOUR OWN</span>
            <h2 id="promise-heading">내 이야기는, 내가 간직할 수 있도록.</h2>
            <p>
              맬맬은 회원가입 없이 시작할 수 있어요. 일기는 기기에 저장되고,
              원하는 경우 PIN으로 앱을 잠글 수 있어요.
              기록을 다른 곳에도 보관하고 싶다면 전체 백업을 만들어 직접 보관해 주세요.
            </p>
            <Link className="promise-link" to="/privacy">개인정보 처리 방식 살펴보기 ↗</Link>
          </div>
        </section>

        <section className="closing-section">
          <img src="/melmel-pebbles.png" alt="" className="closing-icon" />
          <span className="section-label">YOUR LITTLE DIARY</span>
          <h2>
            오늘의 한 조각,
            <br />
            맬맬에 남겨볼까요?
          </h2>
          <p>한 문장부터 시작해서 나만의 정원을 만들어 보세요.</p>
          <div className="release-tags" aria-label="앱 배포 현황">
            <a
              className="launch-label launch-download-link"
              href={IOS_APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="App Store에서 맬맬 다운로드하기 (새 창)"
            >
              App Store에서 다운로드 ↗
            </a>
            <span className="launch-label muted-label">Android · 비공개 테스트 중</span>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <strong>melmel</strong>
          <span>매일매일, 나를 쌓아가는 시간.</span>
        </div>
        <div className="footer-links">
          <Link to="/support">고객지원</Link>
          <Link to="/privacy">개인정보처리방침</Link>
        </div>
        <p>© {new Date().getFullYear()} melmel. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
