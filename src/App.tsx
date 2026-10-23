import "./App.css";

const features = [
  {
    number: "01",
    icon: "✏️",
    title: "하루를 가볍게 기록해요",
    description:
      "길게 쓰지 않아도 괜찮아요. 오늘의 마음을 짧은 문장으로 남겨보세요.",
  },
  {
    number: "02",
    icon: "📅",
    title: "지나온 날들을 돌아봐요",
    description:
      "차곡차곡 쌓인 기록을 달력에서 살펴보고, 나만의 하루들을 다시 만나보세요.",
  },
  {
    number: "03",
    icon: "🌿",
    title: "일상을 더 가까이",
    description:
      "위젯으로 소중한 기록을 꺼내 보고, 매일 기록할 시간을 알림으로 챙겨보세요.",
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
          <a href="mailto:teams.melmel@gmail.com">문의하기</a>
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
              거창하지 않아도 괜찮아요.
              <br />
              오늘의 작은 마음을 하나씩 쌓아가요.
              <br />
              나를 위한 다정한 기록, 맬맬.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#features">
                맬맬 알아보기 <span aria-hidden="true">↗</span>
              </a>
              <span className="coming-soon">iOS 앱 출시 준비 중</span>
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
          <span className="section-label">HELLO, MELMEL</span>
          <h2>
            하루의 이야기가
            <br />
            쌓여 나다운 기록이 돼요.
          </h2>
          <p>
            기쁜 날도, 평범한 날도, 조금 지친 날도.
            <br />
            모든 하루에는 남겨둘 만한 이야기가 있으니까요.
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
              <h2>기록이 편안해지는 방법</h2>
            </div>
            <p>복잡하지 않게, 매일 조금씩.</p>
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
        </section>

        <section className="closing-section">
          <img src="/melmel-pebbles.png" alt="" className="closing-icon" />
          <span className="section-label">SEE YOU SOON</span>
          <h2>
            오늘의 한 조각,
            <br />
            맬맬에 남겨볼까요?
          </h2>
          <p>당신의 소중한 하루를 담을 준비를 하고 있어요.</p>
          <span className="launch-label">App Store · Coming soon</span>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <strong>melmel</strong>
          <span>매일매일, 나를 쌓아가는 시간.</span>
        </div>
        <div className="footer-links">
          <a href="mailto:teams.melmel@gmail.com">고객지원</a>
          <span>개인정보처리방침 준비 중</span>
        </div>
        <p>© {new Date().getFullYear()} melmel. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
